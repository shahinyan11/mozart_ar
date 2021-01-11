import React, {createRef} from 'react'
import {getDeviceId} from 'react-native-device-info';
import {SafeAreaView, Dimensions, Alert, Vibration, AppState} from "react-native";
import Geolocation from '@react-native-community/geolocation';
import RNSoundLevel from 'react-native-sound-level'
import moment from 'moment'
// import NetInfo from "@react-native-community/netinfo"
import NavigationService from './NavigationService'
import Navigation from './Navigation'
import {isOriented} from './helpers'
import {connect} from "react-redux";
import channel from './services/pusher'
// import Echo from './services/pusher'
import {makeAction} from "./makeAction"
import {
    SOW_QR_CODE,
    HIDE_QR_CODE,
    SOW_ELEMENT,
    HIDE_ELEMENT,
    NEW_JOIN,
    START_GAME,
    RIDDLE_SOLVED,
    TAKE_ELEMENT,
    CHANGE_SCREEN_ORIENTATION,
    GET_USER_ACTIVE_GAME_REQUEST,
    RIDDLE_SOLVED_REQUEST,
    MAKE_CAMERA_VISIBLE,
    MAKE_CAMERA_INVISIBLE, TAKE_ELEMENT_REQUEST, SHOW_MODAL_ELEMENT
} from "./actionsTypes";
import {PERMISSIONS, requestMultiple} from "react-native-permissions";
import {showMessage} from "react-native-flash-message";
import {distance, newTakenElementMessage} from "./services/helpers";
import Wrapper from "./components/Wrapper";
import servicesData from "./services/data";
import Emitter from "./services/Emitter";

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            orientation: 'landscape',
            foundObject: null,
        };

        this.watchID = null;
    }

    componentDidMount() {

        this.props.makeAction(GET_USER_ACTIVE_GAME_REQUEST, {data: {device_id: getDeviceId()}});

        this.setListeners()

        Emitter.add('take-element', (data)=>{
            const element = servicesData.elements[data.elementName];
            this.props.makeAction(SHOW_MODAL_ELEMENT, {element, action: 'take'});
            this.takeElement(element);
        });
    }

    // componentWillMount(){
    //     AppState.removeEventListener("change");
    //     Dimensions.removeEventListener('change');
    // }

    componentDidUpdate(prevProps) {

        const {game} = this.props;
        if (prevProps.game === null && game) {
            channel.bind(`newJoin${game.id}`, (data) => {
                this.props.makeAction(NEW_JOIN, data);
            });
            channel.bind(`startGame${game.id}`, (data) => {
                if (data.data.device_id !== getDeviceId()) {
                    this.props.makeAction(START_GAME, data);
                    // NavigationService.navigate('Map');
                    Vibration.vibrate();
                    showMessage(servicesData.riddleSolvedMessage);
                }
            });
            channel.bind(`riddleSolved${game.id}`, (data) => {
                if (data.data.device_id !== getDeviceId()) {
                    this.props.makeAction(RIDDLE_SOLVED, data);
                    // NavigationService.navigate('CurrentRiddle');
                    Vibration.vibrate();
                    showMessage(servicesData.riddleSolvedMessage);
                }
            });
            channel.bind(`takeElement${game.id}`, (data) => {
                console.log('takeElement');
                if (data.data.device_id !== getDeviceId()) {
                    this.props.makeAction(TAKE_ELEMENT, data);
                    // NavigationService.navigate('CurrentRiddle');
                    Vibration.vibrate();
                    showMessage(newTakenElementMessage(data.data.element.name));
                }
            });
        }

        // if(prevProps.game && game.stage > prevProps.game.stage){
        //     NavigationService.navigate('CurrentRiddle');
        // }


        // if (game.stage !== prevProps.game.stage && game.stage === 4) {
        //     Geolocation.watchPosition(this.watchSuccess, this.watchError, )
        // }
    }

    componentWillUnmount() {
        RNSoundLevel.stop();

        this.clearAllListeners()
    }

    setListeners =()=> {
        requestMultiple([PERMISSIONS.ANDROID.RECORD_AUDIO, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then((status) => {
            if (status[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'granted') {
                this.watchID = Geolocation.watchPosition(this.watchSuccess, this.watchError, {distanceFilter: 1})
            }
        });

        AppState.addEventListener('change',(value)=>{
            if(value === 'active') {
                this.props.makeAction(GET_USER_ACTIVE_GAME_REQUEST, {data: {device_id: getDeviceId()}});
            }
        });

        // Dimensions.addEventListener('change', () => {
        //     this.props.makeAction(CHANGE_SCREEN_ORIENTATION, {data: {oriented: isOriented()}});
        // });
    };

    clearAllListeners =()=>{

        AppState.removeEventListener("change");
        Geolocation.clearWatch(this.watchID);
        // Dimensions.removeEventListener('change');
    }

    watchSuccess = (watchData) => {
        if (this.props.game) {
            const {id, stage, collected_elements} = this.props.game;
            const {latitude, longitude} = watchData.coords;

            const foundObj = this.foundObject(latitude, longitude);
            const isTaken = collected_elements.find((value) => {
                return value.name === 'earth'
            });

            if (foundObj?.type === 'ar' && foundObj.appearing) {
                foundObj.appearing && stage === 3 ? this.props.makeAction(SOW_QR_CODE, {data: foundObj}) : null
            } else if (foundObj?.type === 'el' && !isTaken) {
                foundObj.appearing && stage > 1 ? this.props.makeAction(SOW_ELEMENT, {data: foundObj}) : null
            } else if (stage === 13 && foundObj?.type === 'riddle') {
                this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                    data: {
                        id,
                        stage: stage + 1,
                        device_id: getDeviceId(),

                    }
                });

            } else {
                const {QRCodeData, element} = this.props;
                if (QRCodeData) {
                    this.props.makeAction(HIDE_QR_CODE);
                } else if (element) {
                    this.props.makeAction(HIDE_ELEMENT)
                }
            }
        }
    };

    watchError = () => {
        Alert.alert('Der Standortzugriff ist am Telefon nicht aktiviert');
    };

    foundObject = (latitude, longitude) => {
        const {followingCoords} = this.props;
        const founded = followingCoords.find((value) => {
            return distance(latitude, longitude, value.coords?.latitude, value.coords?.longitude) <= 50
        });
        return founded || false
    };

    navigationStateChange = (prevState, currentState) => {
        const prevRouteName = prevState?.routes[prevState.index].routeName;
        const currentRouteName = currentState?.routes[currentState.index].routeName;
        const {isTransitioning} = currentState;
        const {gameScreens} = servicesData;

       if(isTransitioning){
           if(  currentRouteName === 'Camera'){
               this.props.makeAction( MAKE_CAMERA_VISIBLE )
           }else{
               this.props.makeAction( MAKE_CAMERA_INVISIBLE )
           }
       }

        if(prevRouteName !== currentRouteName && gameScreens.indexOf(currentRouteName) > -1){
            this.clearAllListeners()
        }else if(prevRouteName !== currentRouteName && gameScreens.indexOf(prevRouteName) > -1){
            this.setListeners()
        }
    };

    takeElement = (element) => {
        const {id} = this.props.game;

        this.props.makeAction(TAKE_ELEMENT_REQUEST, {
            data: {
                game_id: id,
                device_id: getDeviceId(),
                name: element.name
            }
        });
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Wrapper>
                    <Navigation
                        onNavigationStateChange={this.navigationStateChange}
                        ref={navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef)
                        }}
                    />
                </Wrapper>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    followingCoords: state.mainReducer.followingCoords,
    game: state.gameReducer.game,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
