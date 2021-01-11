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
import {generateGuessColor} from "../../services/helpers";


class MozartBirthplace extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visibleMarker: '',
            flag: true,
            markers: {
                marker_1: {position: [-1.4, 0, 1.4], rotation: [-110, 0, 0], height: 0.65, width: 0.65},
                marker_2: {position: [-0.5, 0, -0.4], rotation: [-90, 0, 0], height: 0.8, width: 0.8},
                marker_3: {position: [0, 0, -0.51], rotation: [-90, 0, 0], height: 0.5, width: 0.5},
                marker_4: {position: [-1.45, 0, -1.4], rotation: [-90, -0.10, -65], height: 2, width: 2},
            },

        };
    }

    componentDidMount() {
        ViroARTrackingTargets.createTargets({
            'marker_1': {
                source: require('../../assets/images/markers/birthplace/1.jpeg'),
                orientation: "Up",
                physicalWidth: 4, // real world width in meters
                type: 'Image'
            },
            'marker_2': {
                source: require('../../assets/images/markers/birthplace/3.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            'marker_3': {
                source: require('../../assets/images/markers/birthplace/4.jpeg'),
                orientation: "Up",
                physicalWidth: 1, // real world width in meters
                type: 'Image'
            },
            'marker_4': {
                source: require('../../assets/images/markers/birthplace/5.jpeg'),
                orientation: "Up",
                physicalWidth: 5, // real world width in meters
                type: 'Image'
            }
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
                    logic_riddle: JSON.stringify(generateGuessColor()),
                    device_id: getDeviceId(),
                }
            });
        }
    };

    render() {
        const {markers, visibleMarker} = this.state;
        return (
            <>
                <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
                <ViroAmbientLight color="#ffffff" intensity={200}/>
                {
                    Object.entries(markers).map(([key, value]) => (
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
)(MozartBirthplace);
