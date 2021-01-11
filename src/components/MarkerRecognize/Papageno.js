import React, {Component} from 'react';
import {
    Viro3DObject,
    ViroAmbientLight,
    ViroDirectionalLight,
    ViroARTrackingTargets,
    ViroARImageMarker
} from 'react-viro';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {RIDDLE_SOLVED_REQUEST} from "../../actionsTypes";
import {getDeviceId} from "react-native-device-info";
import markersData from "../../services/markersData";

class Papageno extends Component {

    constructor(props) {
        super(props);

        this.interval = null;

        this.state = {
            objectVisible: false,
            positionY: 0
        };
    }

    componentDidMount(){
        // ViroARTrackingTargets.createTargets(markersData.Papageno.markers);
        ViroARTrackingTargets.createTargets({
            papageno_1: {
                source: require('../../assets/images/markers/papageno/1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_2: {
                source: require('../../assets/images/markers/papageno/2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_3: {
                source: require('../../assets/images/markers/papageno/3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_4: {
                source: require('../../assets/images/markers/papageno/4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_5: {
                source: require('../../assets/images/markers/papageno/5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_6: {
                source: require('../../assets/images/markers/papageno/6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_7: {
                source: require('../../assets/images/markers/papageno/7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_8: {
                source: require('../../assets/images/markers/papageno/8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_9: {
                source: require('../../assets/images/markers/papageno/9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
        });
    }
    componentDidUpdate(prevProps, prevState) {
        const {positionY} = this.state;
        const {id, stage} = this.props.game;

        if(prevState.positionY !== positionY && positionY >= 5 && this.interval  ){

            clearInterval(this.interval);

            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                data: {
                    id,
                    stage: stage + 1,
                    device_id: getDeviceId(),
                }
            });
        }
    }

    foundObj = () => {
        const {objectVisible} = this.state;

        if (!objectVisible) {
            this.setState({
                objectVisible: true,
            });

            this.interval = setInterval(() => {
                const {positionY} = this.state;
                this.setState({
                    positionY: positionY + 0.05
                })
            }, 50)
        }
    };

    render() {
        const {markers} = markersData.Papageno;
        const {objectVisible, positionY} = this.state;
        return (
            <>
                <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
                <ViroAmbientLight color="#ffffff" intensity={200}/>
                {
                    objectVisible ?
                        <Viro3DObject
                            type={'VRX'}
                            source={require('../../3D_objects/lightBall/vrx/Sphere_msh_blue.vrx')}
                            position={[0, positionY, -10]}
                            scale={[0.05, 0.05, 0.05]}
                        />
                        :
                        Object.entries(markers).map(([key]) => (
                            <ViroARImageMarker key={key} target={key} onAnchorFound={this.foundObj}/>
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
)(Papageno);
