import React, {Component} from 'react';
import {
    Viro3DObject,
    ViroAmbientLight,
    ViroDirectionalLight,
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroNode,
    ViroImage,
    ViroButton,
    ViroText
} from 'react-viro';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {START_GAME_REQUEST, SOW_MOZART, HIDE_MOZART} from "../../actionsTypes";
import {getDeviceId} from "react-native-device-info";
import markersData from "../../services/markersData";



class LinzerGasseStart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleMarker: '',
            flag: true,
            objectPosition: [],
            text: 'Willkommen in meiner Welt. Begebt euch auf meine Spuren und versucht mein Vermächtnis zu finden! Seht euch immer wieder mittels Kamera und Augmented Reality auf eurem Weg um. Vielleicht findet ihr wichtige Utensilien. Aber beeilt euch, die Zeit läuft!'
        };
    }

    componentDidMount(){
        // ViroARTrackingTargets.createTargets(markersData.LinzerGasseStart.markers);

        ViroARTrackingTargets.createTargets({
            start_1: {
                source: require('../../assets/images/markers/start/1.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
            start_2: {
                source: require('../../assets/images/markers/start/2.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
            start_3: {
                source: require('../../assets/images/markers/start/3.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
            start_4: {
                source: require('../../assets/images/markers/start/4.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
            start_5: {
                source: require('../../assets/images/markers/start/5.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
        });
    }

    foundObj = (key) => {
        const {flag} = this.state;
        const {visibilityMozart} = this.props;
        if (flag) {
            this.setState({flag: false});

            if (!visibilityMozart) {
                this.setState({
                    visibleMarker: key
                });

                setTimeout(() => {
                    this.props.makeAction(SOW_MOZART);
                    this.startGame()
                }, 1500);
            }
        }
    };
    startGame = () => {
        const {id} = this.props.game;
        this.props.makeAction(START_GAME_REQUEST, {data: {device_id: getDeviceId(), id}})
    };
    hideMozart = () => {
        this.props.makeAction(HIDE_MOZART);
    };

    render() {
        const {visibilityMozart} = this.props;
        const {visibleMarker} = this.state;
        const {markerDetails} = markersData.LinzerGasseStart;
        console.log('visibilityMozart', visibilityMozart);
        return (
            <>
                <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
                <ViroAmbientLight color="#ffffff" intensity={200}/>
                {
                    visibilityMozart ?
                        <>
                            <Viro3DObject
                                // onClick={() => {}}
                                type={'VRX'}
                                source={require('../../3D_objects/Young_Mozart_obj/YoungMozart_PointingRight_reduced_binary.vrx')}
                                resources={[
                                    require('../../3D_objects/Young_Mozart_obj/YoungMozart_BindPose.mtl'),
                                    require('../../3D_objects/Young_Mozart_obj/Young_Mozart_Albedo.jpg'),
                                ]}
                                position={[2.1, -5, -15]}
                                scale={[0.05, 0.05, 0.05]}
                            />

                            <ViroText
                                text={this.state.text}
                                scale={[5, 5, 5]}
                                position={[-3.25, -3.5, -25]}
                                width={2}
                                height={4}
                                outerStroke={{type: "Outline", width: 7, color: '#000'}}
                                style={{
                                    fontFamily: 'Arial',
                                    fontSize: 17,
                                    color: 'white',
                                    textAlignVertical: 'center',
                                    textAlign: 'center',

                                }}
                            />

                            <ViroButton
                                source={require("../../assets/images/start_button.png")}
                                position={[1.5, -0.5, -5]}
                                height={0.3}
                                width={0.6}
                                onClick={this.hideMozart}

                            />

                        </>
                        : null
                }
                {
                    Object.entries(markerDetails).map(([key, value]) => (
                        <ViroARImageMarker key={key} target={key} onAnchorFound={() => this.foundObj(key)}>
                            {
                                !visibilityMozart && visibleMarker === key ?
                                    <ViroNode scale={[0.5, 0.5, 0.5]} position={value.position}
                                              rotation={value.rotation}>
                                        <ViroImage
                                            height={value.height}
                                            width={value.width}
                                            source={require('../../assets/images/sign.png')}
                                        />
                                    </ViroNode> : null
                            }

                        </ViroARImageMarker>
                    ))
                }

            </>
        )
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    oriented: state.screenReducer.oriented,
    visibilityMozart: state.gameReducer.visibilityMozart,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LinzerGasseStart);
