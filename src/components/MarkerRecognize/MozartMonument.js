import React, {Component} from 'react';
import {
    ViroAmbientLight,
    ViroDirectionalLight,
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroNode,
    ViroImage,
} from 'react-viro';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {RIDDLE_SOLVED_REQUEST, START_GAME_REQUEST} from "../../actionsTypes";
import {getDeviceId} from "react-native-device-info";
import data from "../../services/data";
import markersData from "../../services/markersData";


class MozartMonument extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleMarker: '',
            flag: true,
        };
    }

    componentDidMount() {
        // ViroARTrackingTargets.createTargets(markersData.MozartMonument.markers);
        ViroARTrackingTargets.createTargets({
            marker_1: {
                source: require('../../assets/images/markers/mozartMonument/1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_2: {
                source: require('../../assets/images/markers/mozartMonument/2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_3: {
                source: require('../../assets/images/markers/mozartMonument/3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_4: {
                source: require('../../assets/images/markers/mozartMonument/4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_5: {
                source: require('../../assets/images/markers/mozartMonument/5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_6: {
                source: require('../../assets/images/markers/mozartMonument/6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_7: {
                source: require('../../assets/images/markers/mozartMonument/7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_8: {
                source: require('../../assets/images/markers/mozartMonument/8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_9: {
                source: require('../../assets/images/markers/mozartMonument/9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_10: {
                source: require('../../assets/images/markers/mozartMonument/10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_11: {
                source: require('../../assets/images/markers/mozartMonument/11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_12: {
                source: require('../../assets/images/markers/mozartMonument/12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_13: {
                source: require('../../assets/images/markers/mozartMonument/13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_14: {
                source: require('../../assets/images/markers/mozartMonument/14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_15: {
                source: require('../../assets/images/markers/mozartMonument/15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_16: {
                source: require('../../assets/images/markers/mozartMonument/16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_17: {
                source: require('../../assets/images/markers/mozartMonument/17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_18: {
                source: require('../../assets/images/markers/mozartMonument/18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_19: {
                source: require('../../assets/images/markers/mozartMonument/19.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_20: {
                source: require('../../assets/images/markers/mozartMonument/20.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_21: {
                source: require('../../assets/images/markers/mozartMonument/21.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_22: {
                source: require('../../assets/images/markers/mozartMonument/22.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_23: {
                source: require('../../assets/images/markers/mozartMonument/23.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_24: {
                source: require('../../assets/images/markers/mozartMonument/24.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_25: {
                source: require('../../assets/images/markers/mozartMonument/25.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_26: {
                source: require('../../assets/images/markers/mozartMonument/26.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_27: {
                source: require('../../assets/images/markers/mozartMonument/27.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            }
        });
    }

    foundObj = (key) => {
        const {flag} = this.state;
        if (flag) {
            this.setState({
                flag: false,
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
        const {markerDetails} = markersData.MozartMonument;
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
)(MozartMonument);
