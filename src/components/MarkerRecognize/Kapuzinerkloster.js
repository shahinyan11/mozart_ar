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
import {RIDDLE_SOLVED_REQUEST} from "../../actionsTypes";
import {getDeviceId} from "react-native-device-info";
import markersData from "../../services/markersData";


class Kapuzinerkloster extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleMarker: '',
            flag: true,
        };
    }

    componentDidMount() {
        // ViroARTrackingTargets.createTargets(markersData.Kapuzinerkloster.markers);
        ViroARTrackingTargets.createTargets({
            kapuzinerkloster_1: {
                source: require('../../assets/images/markers/kapuzinerkloster/1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_2: {
                source: require('../../assets/images/markers/kapuzinerkloster/2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_3: {
                source: require('../../assets/images/markers/kapuzinerkloster/3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_4: {
                source: require('../../assets/images/markers/kapuzinerkloster/4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_5: {
                source: require('../../assets/images/markers/kapuzinerkloster/5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_6: {
                source: require('../../assets/images/markers/kapuzinerkloster/6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_7: {
                source: require('../../assets/images/markers/kapuzinerkloster/7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_8: {
                source: require('../../assets/images/markers/kapuzinerkloster/8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_9: {
                source: require('../../assets/images/markers/kapuzinerkloster/9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_10: {
                source: require('../../assets/images/markers/kapuzinerkloster/10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_11: {
                source: require('../../assets/images/markers/kapuzinerkloster/11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_12: {
                source: require('../../assets/images/markers/kapuzinerkloster/12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_13: {
                source: require('../../assets/images/markers/kapuzinerkloster/13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_14: {
                source: require('../../assets/images/markers/kapuzinerkloster/14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_15: {
                source: require('../../assets/images/markers/kapuzinerkloster/15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_16: {
                source: require('../../assets/images/markers/kapuzinerkloster/16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_17: {
                source: require('../../assets/images/markers/kapuzinerkloster/17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_18: {
                source: require('../../assets/images/markers/kapuzinerkloster/18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_19: {
                source: require('../../assets/images/markers/kapuzinerkloster/19.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_20: {
                source: require('../../assets/images/markers/kapuzinerkloster/20.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_21: {
                source: require('../../assets/images/markers/kapuzinerkloster/21.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_22: {
                source: require('../../assets/images/markers/kapuzinerkloster/22.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_23: {
                source: require('../../assets/images/markers/kapuzinerkloster/23.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_24: {
                source: require('../../assets/images/markers/kapuzinerkloster/24.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_25: {
                source: require('../../assets/images/markers/kapuzinerkloster/25.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_26: {
                source: require('../../assets/images/markers/kapuzinerkloster/26.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_27: {
                source: require('../../assets/images/markers/kapuzinerkloster/27.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_28: {
                source: require('../../assets/images/markers/kapuzinerkloster/28.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_29: {
                source: require('../../assets/images/markers/kapuzinerkloster/29.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_30: {
                source: require('../../assets/images/markers/kapuzinerkloster/30.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_31: {
                source: require('../../assets/images/markers/kapuzinerkloster/31.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_32: {
                source: require('../../assets/images/markers/kapuzinerkloster/32.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_33: {
                source: require('../../assets/images/markers/kapuzinerkloster/33.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_34: {
                source: require('../../assets/images/markers/kapuzinerkloster/34.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_35: {
                source: require('../../assets/images/markers/kapuzinerkloster/35.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_36: {
                source: require('../../assets/images/markers/kapuzinerkloster/36.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_37: {
                source: require('../../assets/images/markers/kapuzinerkloster/37.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_38: {
                source: require('../../assets/images/markers/kapuzinerkloster/38.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_39: {
                source: require('../../assets/images/markers/kapuzinerkloster/39.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_40: {
                source: require('../../assets/images/markers/kapuzinerkloster/40.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_41: {
                source: require('../../assets/images/markers/kapuzinerkloster/41.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_42: {
                source: require('../../assets/images/markers/kapuzinerkloster/42.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_43: {
                source: require('../../assets/images/markers/kapuzinerkloster/43.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_44: {
                source: require('../../assets/images/markers/kapuzinerkloster/44.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_45: {
                source: require('../../assets/images/markers/kapuzinerkloster/45.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
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
        const {markerDetails} = markersData.Kapuzinerkloster;
        return (
            <>
                <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
                <ViroAmbientLight color="#ffffff" intensity={200}/>

                {
                    Object.entries(markerDetails).map(([key, value]) => (
                        <ViroARImageMarker key={key} target={key} onAnchorFound={() => this.foundObj(key)}>
                            {
                                visibleMarker === key ?
                                    <ViroNode
                                        scale={[0.5, 0.5, 0.5]}
                                        position={value.position}
                                        rotation={value.rotation}
                                    >
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
)(Kapuzinerkloster);
