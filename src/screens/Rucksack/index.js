import React, {Component} from 'react'
import {connect} from "react-redux";
import {
    Text,
    View,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import {getDeviceId} from "react-native-device-info";
import ProgressBar from "../../components/ProgressBar/index";
import BottomMenu from "../../components/BottomMenu/index";
import Wrapper from "../../components/Wrapper/index";
import BackIcon from "../../assets/svgs/BackIcon"
import data from "../../services/data";
import {makeAction} from "../../makeAction";
import Cup from "../../assets/svgs/Cup";
import {styles} from './styles'
import {
    SOW_QR_CODE,
    TAKE_ELEMENT_REQUEST,
    CUP_ACTIVATE_REQUEST,
    ELEMENT_ACTIVATE_REQUEST
} from "../../actionsTypes";
import i18n from "../../services/i18next/index"

class Rucksack extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            element: {name: ''}
        }
    };

    componentDidMount() {
        const name = this.props.navigation.state.params?.elementName;
        if (name) {
            const element = data.elements[name];
            // this.takeElement(element);
            this.setState({
                modalVisible: true,
                element: data.elements[name]
            })
        }
    }

    componentWillUpdate(nextProps) {
        const name = this.props.navigation.state.params?.elementName;
        const nextName = nextProps.navigation.state.params?.elementName;
        if (nextName && nextName !== name) {
            const element = data.elements[nextName];
            // this.takeElement(element);
            this.setState({
                modalVisible: true,
                element,
            })


        }

    }

    activateCup = (active, id) => {
        if (!active) {
            this.props.makeAction(CUP_ACTIVATE_REQUEST, {id})
        }

    };
    activateElement =(active, id)=>{
        if (!active) {
            this.props.makeAction(ELEMENT_ACTIVATE_REQUEST, {id})
        }
    };
    currentMember = () => {
        if (this.props.game) {
            return this.props.game.game_members.find((value) => {
                return value.device_id === getDeviceId()
            });
        }
    };

    takeElement = () => {
        // const {id} = this.props.game;
        // const {element} = this.state;

        this.setState({modalVisible: false});

        // this.props.makeAction(TAKE_ELEMENT_REQUEST, {
        //     data: {
        //         game_id: id,
        //         device_id: getDeviceId(),
        //         name: element.name
        //     }
        // });
    };


    getFlute = () => {
        this.props.makeAction(SOW_QR_CODE, {data: {src: require('../../assets/images/QRCodes/flute.png')}})
    };

    // closeModal =()=>{
    //     this.setState({modalVisible: false})
    // };

    render() {
        const {modalVisible, element} = this.state;
        const {collected_elements, stage} = this.props.game;
        const currentMember = this.currentMember();

        return (
            <ScrollView style={styles.scrollView}
                        contentContainerStyle={{flexGrow: 1}}>

                <ImageBackground source={require('../../assets/images/background_1.png')}
                                 style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <LinearGradient style={styles.col_1}
                                        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.2)']}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 0}}
                        >
                            <ProgressBar navigation={this.props.navigation}/>
                            <View style={styles.titleContain}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    style={styles.touchBack}
                                >
                                    <BackIcon fill="#39ABD7"/>
                                </TouchableOpacity>
                                <Image
                                    style={styles.pageIcon}
                                    source={require('../../assets/images/backpack.png')}
                                />
                                <Text style={styles.mainTitle}>
                                    {i18n.t('screens.Rucksack.mainTitle')}
                                </Text>
                            </View>
                        </LinearGradient>
                        <View style={styles.elements}>

                            <TouchableOpacity onPress={() => {
                                this.activateCup(currentMember.cup_active, currentMember.id)
                            }}>
                                <View style={{...styles.item, ...(currentMember.cup_active ? styles.greenBorder : {})}}>
                                    <Image style={styles.backgroundSquare} source={require('../../assets/images/mask.png')}/>
                                    <View style={{position: 'absolute'}}>
                                        <Cup/>
                                    </View>

                                </View>
                            </TouchableOpacity>


                            {
                                collected_elements.map((value) => {
                                    if (value.device_id === getDeviceId()) {
                                        return (
                                            <TouchableOpacity key={value.name} onPress={() => {
                                                this.activateElement(value.active, value.id)
                                            }}>
                                                <Image
                                                    style={{...styles.item, ...(value.correct || value.active ? styles.greenBorder : {})}}
                                                    source={data.elements[value.name].src}/>
                                            </TouchableOpacity>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            }
                            {
                                stage > 12 ?
                                    <TouchableOpacity onPress={this.getFlute}>
                                        <Image style={styles.item}
                                               source={require('../../assets/images/flute.png')}/>
                                    </TouchableOpacity>

                                    : null
                            }
                        </View>
                        <View style={styles.col_3}>
                            <BottomMenu
                                screenId={3}
                                navigation={this.props.navigation}
                            />
                        </View>
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
)(Rucksack)
