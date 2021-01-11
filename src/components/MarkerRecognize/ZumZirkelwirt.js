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
import {RIDDLE_SOLVED_REQUEST} from "../../actionsTypes";
import {getDeviceId} from "react-native-device-info";
import markersData from "../../services/markersData";

ViroARTrackingTargets.createTargets(markersData.ZumZirkelwirt.markers);

class ZumZirkelwirt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleMarker: '',
            flag: true,
        };
    }
    componentDidMount(){
        // ViroARTrackingTargets.createTargets(markersData.ZumZirkelwirt.markers);
        ViroARTrackingTargets.createTargets({
            zum_1: {
                source: require('../../assets/images/markers/zirkelwirt/1.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_2: {
                source: require('../../assets/images/markers/zirkelwirt/2.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_3: {
                source: require('../../assets/images/markers/zirkelwirt/3.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_4: {
                source: require('../../assets/images/markers/zirkelwirt/4.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_5: {
                source: require('../../assets/images/markers/zirkelwirt/5.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_6: {
                source: require('../../assets/images/markers/zirkelwirt/6.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno: {
                source: require('../../assets/images/markers/zirkelwirt/papageno.jpeg'),
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

            setTimeout(() => {
                const {id,stage} = this.props.game;
                this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                    data: {
                        id,
                        stage: stage + 1,
                        device_id: getDeviceId(),
                    }
                });
            }, 1500)
        }
    };

    foundPapageno = () => {
        const {id,stage} = this.props.game;
        this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
            data: {
                id,
                stage: stage + 1,
                device_id: getDeviceId(),
            }
        });
        // this.props.navigation.navigate('CurrentRiddle')
    };

    render() {
        const {markerDetails} = markersData.ZumZirkelwirt;
        const {visibleMarker} = this.state;
        const {game} = this.props;
        return (
            <>
                <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
                <ViroAmbientLight color="#ffffff" intensity={200}/>

                {
                    game.stage === 12 ?
                        <ViroARImageMarker target={'papageno'} onAnchorFound={this.foundPapageno}/>
                        :
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
)(ZumZirkelwirt);
