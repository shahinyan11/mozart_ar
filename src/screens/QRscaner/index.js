import React, {Component} from 'react';
import {connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {RNCamera} from "react-native-camera";
import {getDeviceId} from 'react-native-device-info';
import {makeAction} from "../../makeAction";
import {View, Image, Modal, Text, TouchableHighlight, ScrollView, ImageBackground} from 'react-native';
import SquareNavigateButton from "../../components/SquareNavigateButton";
import NavigationService from "../../NavigationService";
import data from "../../services/data";
import {styles} from './styles';
import {TAKE_ELEMENT_REQUEST, RIDDLE_SOLVED_REQUEST, BLOCK_QR_APPEARING} from "../../actionsTypes";

class QRscaner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            access: true,
            modalVisible: false,
            element: {name: ''},
            followingId: null
        };

        this.focusListener = props.navigation.addListener('didFocus', () => {
            this.setState({
                access: true,
            });
        });
    };

    componentWillUnmount() {
        this.focusListener.remove();
    }

    handleScan = (QRObject) => {
        const {access} = this.state;
        const {stage} = this.props.game;
        if (access) {
            const {followingCoords} = this.props;
            const text = QRObject.barcodes[0].data;
            const founded = followingCoords.find((value) => {
                return value.text === text
            });

            if (stage < 7) {
                if (founded) {
                    this.setState({access: false});
                    // if (founded.right && stage === 3) {
                    //     this.props.makeAction(BLOCK_QR_APPEARING, {data:{ followingId: founded.id }});
                    //     this.props.navigation.navigate('Camera', {video: true, type:'ar'});
                    // } else {
                        this.setState({
                            modalVisible: true,
                            element: data.elements[founded.element],
                            followingId: founded.element.id
                        })
                    // }
                }
            } else if (stage === 20) {
                if (text === 'flute') {
                    this.setState({access: false});
                    NavigationService.navigate('RiddleSolved');
                }
            } else if (stage === 8){
                if (text === 'Makart Bridge') {
                    this.setState({access: false});
                    const {id, stage} = this.props.game;
                    this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                        data: {
                            id,
                            stage: stage + 1,
                            device_id: getDeviceId(),
                        }
                    });
                    // NavigationService.navigate('CurrentRiddle');
                }
            }
        }
    };

    takeElement = () => {
        this.setState({modalVisible: false});
        const {id} = this.props.game;
        const {element, followingId} = this.state;

        this.props.makeAction(TAKE_ELEMENT_REQUEST, {
            data: {
                game_id: id,
                device_id: getDeviceId(),
                name: element.name
            },
            callBack: () => {
                this.props.makeAction(BLOCK_QR_APPEARING, {data:{ followingId }});
            }
            // callback:  this.setAccess
        });
    };

    _navigate = (screen, type) => {
        this.props.navigation.navigate(screen, {type})
    };

    // setAccess=()=>{
    //     setTimeout(()=>{
    //         this.setState({
    //             access: true,
    //         });
    //     }, 2000);
    // };

    render() {
        const {modalVisible, element} = this.state;
        const {oriented, screenLoader} = this.props;
        const {squareNavigateButtons} = data;
        let control = 0;

        return (
            <>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.modalText}>
                                    Sie sind nicht am richtigen Ort. Versuchen Sie, zu anderen auf der Karte
                                    markierten
                                    Punkten umzuleiten,
                                    aber du hast ein nützliches Element gefunden, nimm es mit, du wirst es brauchen

                                </Text>
                                <Text style={styles.modalText}>
                                    Klicken Sie auf ein Element, um es mitzunehmen
                                </Text>
                                <TouchableHighlight
                                    onPress={this.takeElement}
                                >
                                    <Image
                                        style={styles.element}
                                        source={element.src}
                                    />
                                </TouchableHighlight>

                            </View>
                        </View>
                    </View>
                </Modal>
                <ScrollView style={styles.scrollView}
                            contentContainerStyle={{flexGrow: 1}}>
                    <ImageBackground source={require('../../assets/images/background_1.png')}
                                     style={styles.backgroundImage}>
                        {/*{screenLoader ? <ScreenLoader/> : null}*/}
                        <LinearGradient style={styles.topCol}
                                        colors={['rgba(207, 149, 125, 0.5)', 'rgba(207, 149, 125, 0.5)']}>

                            <View style={styles.squareContain}>
                                {
                                    screenLoader ?
                                        null
                                        :
                                        <RNCamera
                                            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                                            onGoogleVisionBarcodesDetected={(data) => {
                                                this.handleScan(data)
                                            }}
                                            captureAudio={false}
                                            style={styles.RNCamera}
                                        >
                                            <View style={{
                                                position: 'absolute',
                                                zIndex: 100,
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                                flex: 1
                                            }}>
                                                <View style={{flex: 0.2, backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                                                <View style={{flex: 0.60, flexDirection: 'row'}}>
                                                    <View style={{flex: 0.1, backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                                                    <View style={{
                                                        flex: 0.8,
                                                        borderWidth: 2,
                                                        borderRadius: 8,
                                                        borderColor: 'white'
                                                    }}/>
                                                    <View style={{flex: 0.1, backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                                                </View>
                                                <View style={{flex: 0.2, backgroundColor: 'rgba(0,0,0,0.8)'}}/>
                                            </View>
                                        </RNCamera>
                                }
                            </View>


                        </LinearGradient>
                        <LinearGradient style={styles.bottomCol} colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}>
                            <View style={!oriented ? styles.bottomContent : styles.bottomContentOriented}>
                                {
                                    squareNavigateButtons.map((value) => {
                                        if (value.id !== 6) {
                                            control += 1;
                                            return (
                                                <SquareNavigateButton
                                                    key={value.id}
                                                    data={value}
                                                    color={control > 3 ? '#39abd7' : '#e48146'}
                                                    onPress={() => {
                                                        this._navigate(value.routName, value.type)
                                                    }}
                                                    textStyle={{
                                                        color: "white"
                                                    }}
                                                />
                                            )
                                        }
                                    })
                                }
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </ScrollView>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    followingCoords: state.mainReducer.followingCoords,
    screenLoader: state.loaderReducer.screenLoader,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QRscaner)
