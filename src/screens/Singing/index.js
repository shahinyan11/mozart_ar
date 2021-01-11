import React, {Component} from 'react'
import {connect} from "react-redux";
import {
    Text,
    View,
    ImageBackground,
    Image,
    ScrollView,
} from 'react-native'
import {getDeviceId} from "react-native-device-info";
import data from "../../services/data";
import {makeAction} from "../../makeAction";
import {styles} from './styles'
import {RIDDLE_SOLVED_REQUEST} from "../../actionsTypes";
import i18n from "../../services/i18next/index"
import {check, PERMISSIONS} from "react-native-permissions";
import RNSoundLevel from "react-native-sound-level";
import NavigateButton from "../../components/NavigateButton";

class Singing extends Component {

    constructor(props) {
        super(props);

        this.timeout = null;

        this.state = {
            modalVisible: false,
            element: {name: ''},
            rotate: -80,
            buttonShow: false
        };


        const {id, stage} = this.props.game;
        check(PERMISSIONS.ANDROID.RECORD_AUDIO).then((status) => {
            if (status === 'granted') {
                RNSoundLevel.start();
                RNSoundLevel.onNewFrame = (voiceData) => {
                    const rotate = this.calcRotate( voiceData.rawValue / 1000 * 4 -80 );
                    this.setState({ rotate });
                    if( !this.timeout && rotate > 40 ){

                        this.timeout = setTimeout(()=>{
                            RNSoundLevel.stop();
                            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                                data: {
                                    id,
                                    stage: stage + 1,
                                    device_id: getDeviceId(),
                                }
                            });

                            this.setState({
                                buttonShow: true
                            })
                        }, 3000)

                    }else if(this.timeout && rotate < 40){
                        clearTimeout(this.timeout);
                        this.timeout = null
                    }

                    // NavigationService.navigate('CurrentRiddle');
                }
            }
        });


    };

    calcRotate =(rotate)=> {
        if(rotate < -80 ){
          return  -80
        }else if(rotate > 80 ){
            return  80
        }else {
            return rotate
        }
    };

    render() {
        const {rotate, buttonShow} = this.state;
        return (
            <ScrollView style={styles.scrollView}
                        contentContainerStyle={{flexGrow: 1}}>
                <ImageBackground source={require('../../assets/images/background_1.png')}
                                 style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <View style={styles.titleContain}>
                            {/*<TouchableOpacity*/}
                                {/*onPress={() => this.props.navigation.goBack()}*/}
                                {/*style={styles.touchBack}*/}
                            {/*>*/}
                                {/*<BackIcon fill="#39ABD7"/>*/}
                            {/*</TouchableOpacity>*/}
                            <Image
                                style={styles.voiceIcon}
                                source={require('../../assets/images/voice.png')}
                            />
                            <Text style={styles.mainTitle}>
                                {i18n.t('screens.Singing.title')}
                            </Text>
                        </View>
                        {/*</LinearGradient>*/}
                        <View style={styles.meter}>
                            <Image
                                style={styles.voiceMeterIcon}
                                source={require('../../assets/images/voiceMeter.png')}
                            />

                            <View style={[ styles.animatedView, { transform: [{rotate: `${rotate}deg`}] } ]}>
                                <Image style={styles.slackIcon}
                                       source={require('../../assets/images/meterPointer.png')}/>
                            </View>

                        </View>
                        {
                            buttonShow ?
                                <View style={styles.col_3}>
                                    <View style={{backgroundColor: 'rgba(255,255,255, 0.2)'}}>
                                        <NavigateButton
                                            title={i18n.t('buttons.current_riddle')}
                                            onPress={() => { this.props.navigation.navigate('CurrentRiddle')}}
                                            color={'#39abd7'}
                                            // textColor={'#39abd7'}
                                            customStyles={{marginBottom: 0}}
                                        />
                                    </View>
                                </View>
                                :null
                        }

                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Singing)
