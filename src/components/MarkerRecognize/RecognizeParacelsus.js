import React, {Component} from 'react';
import {connect} from "react-redux";
import {ViroARTrackingTargets, ViroARImageMarker, ViroCamera, ViroVideo, ViroImage} from 'react-viro';
import {BLOCK_ELEMENT_APPEARING, RIDDLE_SOLVED_REQUEST, TAKE_ELEMENT_REQUEST } from "../../actionsTypes";
import {getDeviceId} from "react-native-device-info";
import {makeAction} from "../../makeAction";
import markersData from "../../services/markersData";

ViroARTrackingTargets.createTargets(markersData.RecognizeParacelsus.markers);

class RecognizeParacelsus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            switchCamera: false,
            flag: true
        };
    }

    componentDidMount() {
        this.setState({switchCamera: true});
        // ViroARTrackingTargets.createTargets(markersData.RecognizeParacelsus.markers);
        ViroARTrackingTargets.createTargets({
            paracelsus_1: {
                source: require('../../assets/images/markers/platzl/1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_2: {
                source: require('../../assets/images/markers/platzl/2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_3: {
                source: require('../../assets/images/markers/platzl/3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_4: {
                source: require('../../assets/images/markers/platzl/4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_5: {
                source: require('../../assets/images/markers/platzl/5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_6: {
                source: require('../../assets/images/markers/platzl/6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_7: {
                source: require('../../assets/images/markers/platzl/7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_8: {
                source: require('../../assets/images/markers/platzl/8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_9: {
                source: require('../../assets/images/markers/platzl/9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_10: {
                source: require('../../assets/images/markers/platzl/10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_11: {
                source: require('../../assets/images/markers/platzl/11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_12: {
                source: require('../../assets/images/markers/platzl/12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_13: {
                source: require('../../assets/images/markers/platzl/13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_14: {
                source: require('../../assets/images/markers/platzl/14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            }
        });
    }


    foundObj = () => {
        const {flag} = this.state;
        if (flag) {
            const {id, stage} = this.props.game;

            this.setState({flag: false});

            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                data: {
                    id,
                    stage: stage + 1,
                    device_id: getDeviceId(),
                }
            });
            // NavigationService.navigate('CurrentRiddle');
        }
    };

    takeElement = () => {
        const {game, element} = this.props;
        this.props.makeAction(TAKE_ELEMENT_REQUEST, {
            data: {
                game_id: game.id,
                device_id: getDeviceId(),
                name: element.name,
            },
            callBack: () => {
                this.props.makeAction( BLOCK_ELEMENT_APPEARING, {data :{followingId:  element.id}});
            }
        });
    };

    finishVideo = () => {
        const {id, stage} = this.props.game;
        if (stage === 3) {
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
        const {markers} = markersData.RecognizeParacelsus;
        const {element, game, video} = this.props;
        const {switchCamera} = this.state;
        return (
            <>
                {
                    element ?
                        <ViroCamera position={[0, 0, 0]} active={true}>
                            <ViroImage
                                position={[0, 0, -1]}
                                height={0.4}
                                width={0.4}
                                source={element.src}
                                onClick={this.takeElement}
                            />
                        </ViroCamera>
                        : video && switchCamera ?
                        <ViroCamera position={[0, 0, 0]} active={true}>
                            <ViroVideo
                                position={[0, 0, -2]}
                                source={require('../../assets/videos/cup.mp4')}
                                height={1}
                                width={0.7}
                                loop={true}
                                onFinish={this.finishVideo}
                            />
                        </ViroCamera>
                        : game.stage === 2 ?
                            <>
                                {
                                    Object.entries(markers).map(([key]) => (
                                        <ViroARImageMarker key={key} target={key} onAnchorFound={this.foundObj}/>
                                    ))
                                }
                            </>
                            : null

                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    element: state.gameReducer.element,
    oriented: state.screenReducer.oriented,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecognizeParacelsus);
