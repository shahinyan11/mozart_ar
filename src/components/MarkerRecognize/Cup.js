import React, {Component} from 'react';
import {getDeviceId} from "react-native-device-info";
import {connect} from "react-redux";
import {Alert} from "react-native";
import {ViroARTrackingTargets, ViroARImageMarker, ViroCamera, ViroVideo} from 'react-viro';
import i18n from "../../services/i18next";

import {RIDDLE_SOLVED_REQUEST,} from "../../actionsTypes";
import {makeAction} from "../../makeAction";
import markersData from "../../services/markersData";



class Cup extends Component {


    constructor(props) {
        super(props);

        this.state = {
            switchCamera: false,
            showVideo: false,
            flag: true
        };
    }

    componentDidMount() {
        this.setState({switchCamera: true})
        // ViroARTrackingTargets.createTargets(markersData.Cup.markers);
        ViroARTrackingTargets.createTargets({
            cup_1: {
                source: require('../../assets/images/markers/cup/1.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_2: {
                source: require('../../assets/images/markers/cup/2.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_3: {
                source: require('../../assets/images/markers/cup/3.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_4: {
                source: require('../../assets/images/markers/cup/4.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_5: {
                source: require('../../assets/images/markers/cup/5.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_6: {
                source: require('../../assets/images/markers/cup/6.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_7: {
                source: require('../../assets/images/markers/cup/7.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_8: {
                source: require('../../assets/images/markers/cup/8.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_9: {
                source: require('../../assets/images/markers/cup/9.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            }

        });
    }

    currentMember = () => {
        if(this.props.game){
            return this.props.game.game_members.find((value) => {
                return value.device_id === getDeviceId()
            });
        }
    };

    foundObj = () => {
        const {flag} = this.state;
        if (flag) {
            this.setState({ flag: false });
            const member  = this.currentMember();
            if(member.cup_active){
                this.setState({ showVideo: true });
            }else{
                Alert.alert(null, i18n.t('alerts.cup_is_not_active'), [{
                    text: "OK",
                    onPress: ()=>{ this.setState({flag: true}) }
                }])
            }
        }
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
        const {markers} = markersData.Cup;
        const {switchCamera, showVideo} = this.state;
        return (
            <>
                {
                    showVideo && switchCamera ?
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
                        :
                        <>
                            {
                                Object.entries(markers).map(([key]) => (
                                    <ViroARImageMarker key={key} target={key} onAnchorFound={this.foundObj}/>
                                ))
                            }
                        </>


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
)(Cup);
