import React, {Component} from 'react';
import {
    ViroAmbientLight,
    ViroDirectionalLight,
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroNode,
    ViroImage
} from 'react-viro';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {RIDDLE_SOLVED_REQUEST, START_GAME_REQUEST} from "../../actionsTypes";
import {getDeviceId} from "react-native-device-info";
import data from "../../services/data";
import servicesData from "../../services/markersData";


class MozartHouse extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visibleMarker: '',
            flag: true,
        };
    }

    componentDidMount() {
        // ViroARTrackingTargets.createTargets(servicesData.MozartHouse.markers);
        ViroARTrackingTargets.createTargets({
            house_1: {
                source: require('../../assets/images/markers/wohnhaus/m1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_2: {
                source: require('../../assets/images/markers/wohnhaus/m2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_3: {
                source: require('../../assets/images/markers/wohnhaus/m3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_4: {
                source: require('../../assets/images/markers/wohnhaus/m4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_5: {
                source: require('../../assets/images/markers/wohnhaus/m5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_6: {
                source: require('../../assets/images/markers/wohnhaus/m6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_7: {
                source: require('../../assets/images/markers/wohnhaus/m7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_8: {
                source: require('../../assets/images/markers/wohnhaus/m8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_9: {
                source: require('../../assets/images/markers/wohnhaus/m9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_10: {
                source: require('../../assets/images/markers/wohnhaus/m10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_11: {
                source: require('../../assets/images/markers/wohnhaus/m11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_12: {
                source: require('../../assets/images/markers/wohnhaus/m12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_13: {
                source: require('../../assets/images/markers/wohnhaus/m13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_14: {
                source: require('../../assets/images/markers/wohnhaus/m14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_15: {
                source: require('../../assets/images/markers/wohnhaus/m15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_16: {
                source: require('../../assets/images/markers/wohnhaus/m16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_17: {
                source: require('../../assets/images/markers/wohnhaus/m17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_18: {
                source: require('../../assets/images/markers/wohnhaus/m18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
        });
    }

    foundObj = (key) => {
        const {flag} = this.state;
        if (flag) {
            this.setState({flag: false});
            this.setState({
                visibleMarker: key
            });

            const {id, stage} = this.props.game;
            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                data: {
                    id,
                    stage: stage + 1,
                    device_id: getDeviceId(),
                }
            });
        }
    };

    render() {
        const {visibleMarker} = this.state;
        const {markerDetails} = servicesData.MozartHouse;
        return (
            <>
                <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
                <ViroAmbientLight color="#ffffff" intensity={200}/>
                {
                    Object.entries(markerDetails).map(([key, value]) => (
                        <ViroARImageMarker key={key} target={key} onAnchorFound={() => this.foundObj(key)}>
                            {
                                visibleMarker === key ?
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
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MozartHouse);
