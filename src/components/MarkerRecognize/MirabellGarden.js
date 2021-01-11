import React, {Component} from 'react';
import {connect} from "react-redux";
import {Alert, Vibration} from "react-native";
import {ViroARTrackingTargets, ViroARImageMarker, ViroARScene} from 'react-viro';
import {showMessage} from "react-native-flash-message";

import {
    CORRECT_ELEMENT_REQUEST,
    TAKE_ELEMENT_REQUEST,
    SHOW_MODAL_ELEMENT,
} from "../../actionsTypes";
import NavigationService from "../../NavigationService";
import {makeAction} from "../../makeAction";
import {getDeviceId} from "react-native-device-info";
import markersData from "../../services/markersData";
import i18n from "../../services/i18next";
import data from "../../services/data";

class MirabellGarden extends Component {

    constructor(props) {
        super(props);

        this.focusListener = null;

        this.elementGames = {
            air: 'Flappy',
            earth: 'WhackAMole',
            fire: 'FireFighter',
            water: 'CatchTheDrops',
        }


        this.state = {
            checkMarkerAccess: true
        }
    }

    componentWillUnmount() {
        this.focusListener.remove()
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.setState({checkMarkerAccess: true});
        })
        // ViroARTrackingTargets.createTargets(markersData.MirabellGarden.markers);
        ViroARTrackingTargets.createTargets({
            air_1: {
                source: require('../../assets/images/markers/statueAir/air_1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_2: {
                source: require('../../assets/images/markers/statueAir/air_2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_3: {
                source: require('../../assets/images/markers/statueAir/air_3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_4: {
                source: require('../../assets/images/markers/statueAir/air_4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_5: {
                source: require('../../assets/images/markers/statueAir/air_5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_6: {
                source: require('../../assets/images/markers/statueAir/air_6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_7: {
                source: require('../../assets/images/markers/statueAir/air_7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_8: {
                source: require('../../assets/images/markers/statueAir/air_8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_9: {
                source: require('../../assets/images/markers/statueAir/air_9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_10: {
                source: require('../../assets/images/markers/statueAir/air_10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_11: {
                source: require('../../assets/images/markers/statueAir/air_11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_12: {
                source: require('../../assets/images/markers/statueAir/air_12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_13: {
                source: require('../../assets/images/markers/statueAir/air_13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_14: {
                source: require('../../assets/images/markers/statueAir/air_14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_15: {
                source: require('../../assets/images/markers/statueAir/air_15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            air_16: {
                source: require('../../assets/images/markers/statueAir/air_16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_1: {
                source: require('../../assets/images/markers/statueEarth/earth_1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_2: {
                source: require('../../assets/images/markers/statueEarth/earth_2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_3: {
                source: require('../../assets/images/markers/statueEarth/earth_3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_4: {
                source: require('../../assets/images/markers/statueEarth/earth_4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_5: {
                source: require('../../assets/images/markers/statueEarth/earth_5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_6: {
                source: require('../../assets/images/markers/statueEarth/earth_6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_7: {
                source: require('../../assets/images/markers/statueEarth/earth_7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_8: {
                source: require('../../assets/images/markers/statueEarth/earth_8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_9: {
                source: require('../../assets/images/markers/statueEarth/earth_9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_10: {
                source: require('../../assets/images/markers/statueEarth/earth_10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_11: {
                source: require('../../assets/images/markers/statueEarth/earth_11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_12: {
                source: require('../../assets/images/markers/statueEarth/earth_12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_13: {
                source: require('../../assets/images/markers/statueEarth/earth_13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_14: {
                source: require('../../assets/images/markers/statueEarth/earth_14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_15: {
                source: require('../../assets/images/markers/statueEarth/earth_15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_16: {
                source: require('../../assets/images/markers/statueEarth/earth_16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_17: {
                source: require('../../assets/images/markers/statueEarth/earth_17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_18: {
                source: require('../../assets/images/markers/statueEarth/earth_18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_19: {
                source: require('../../assets/images/markers/statueEarth/earth_19.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_20: {
                source: require('../../assets/images/markers/statueEarth/earth_20.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_21: {
                source: require('../../assets/images/markers/statueEarth/earth_21.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_22: {
                source: require('../../assets/images/markers/statueEarth/earth_22.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            earth_23: {
                source: require('../../assets/images/markers/statueEarth/earth_23.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_1: {
                source: require('../../assets/images/markers/statueFire/fire_1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_2: {
                source: require('../../assets/images/markers/statueFire/fire_2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_3: {
                source: require('../../assets/images/markers/statueFire/fire_3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_4: {
                source: require('../../assets/images/markers/statueFire/fire_4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_5: {
                source: require('../../assets/images/markers/statueFire/fire_5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_6: {
                source: require('../../assets/images/markers/statueFire/fire_6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_7: {
                source: require('../../assets/images/markers/statueFire/fire_7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_8: {
                source: require('../../assets/images/markers/statueFire/fire_8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_9: {
                source: require('../../assets/images/markers/statueFire/fire_9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_10: {
                source: require('../../assets/images/markers/statueFire/fire_10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_11: {
                source: require('../../assets/images/markers/statueFire/fire_11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_12: {
                source: require('../../assets/images/markers/statueFire/fire_12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_13: {
                source: require('../../assets/images/markers/statueFire/fire_13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_14: {
                source: require('../../assets/images/markers/statueFire/fire_14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_15: {
                source: require('../../assets/images/markers/statueFire/fire_15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_16: {
                source: require('../../assets/images/markers/statueFire/fire_16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_17: {
                source: require('../../assets/images/markers/statueFire/fire_17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_18: {
                source: require('../../assets/images/markers/statueFire/fire_18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            fire_19: {
                source: require('../../assets/images/markers/statueFire/fire_19.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_1: {
                source: require('../../assets/images/markers/statueWater/water_1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_2: {
                source: require('../../assets/images/markers/statueWater/water_2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_3: {
                source: require('../../assets/images/markers/statueWater/water_3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_4: {
                source: require('../../assets/images/markers/statueWater/water_4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_5: {
                source: require('../../assets/images/markers/statueWater/water_5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_6: {
                source: require('../../assets/images/markers/statueWater/water_6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_7: {
                source: require('../../assets/images/markers/statueWater/water_7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_8: {
                source: require('../../assets/images/markers/statueWater/water_8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_9: {
                source: require('../../assets/images/markers/statueWater/water_9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_10: {
                source: require('../../assets/images/markers/statueWater/water_10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_11: {
                source: require('../../assets/images/markers/statueWater/water_11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_12: {
                source: require('../../assets/images/markers/statueWater/water_12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_13: {
                source: require('../../assets/images/markers/statueWater/water_13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_14: {
                source: require('../../assets/images/markers/statueWater/water_14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_15: {
                source: require('../../assets/images/markers/statueWater/water_15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_16: {
                source: require('../../assets/images/markers/statueWater/water_16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_17: {
                source: require('../../assets/images/markers/statueWater/water_17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_18: {
                source: require('../../assets/images/markers/statueWater/water_18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            water_19: {
                source: require('../../assets/images/markers/statueWater/water_19.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },

        });
    }

    componentDidUpdate(prevProps) {
        const {visibility} = prevProps.modalElement;
        if (visibility && visibility !== this.props.modalElement.visibility) {
            this.setState({checkMarkerAccess: true})
        }

    }

    foundObj = (target) => {
        this.setState({checkMarkerAccess: false});
        // remove from the target "_" and everything after it
        target = target.slice(0, target.indexOf('_'));

        const {collected_elements} = this.props.game;
        const membersCount = this.props.game.game_members.length;
        let userElementsCount = 0;
        let isTaken = false;

        const targetElement = collected_elements.filter((element) => {
            element.name === target && element.device_id !== getDeviceId() ? isTaken = true : null;
            userElementsCount += element.device_id === getDeviceId();
            return element.name === target && element.device_id === getDeviceId()
        })[0];

        if (collected_elements.length === 4) {
            if (targetElement) {
                if (targetElement.correct) {
                    Alert.alert(null, i18n.t(`alerts.element_already_attached`), [{
                        text: "OK",
                        onPress: this.pressOk
                    }]);
                } else {

                    this.props.makeAction(CORRECT_ELEMENT_REQUEST, {
                        id: targetElement.id,
                        navigation: this.props.navigation,
                        callback: (responseData) => {
                            this.correctElementCallback(responseData, target)
                        }
                    })
                }

            } else {
                Alert.alert(null, i18n.t(`alerts.element_not_in_backpack`), [{
                    text: "OK",
                    onPress: this.pressOk
                }]);
            }
        } else {
            if (isTaken) {
                Alert.alert(null, i18n.t(`alerts.element_already_taken`));
            } else {

                const takeAccess = (membersCount < 2 && userElementsCount < 4) ||
                    (membersCount > 1 && membersCount < 4 && userElementsCount < 2) ||
                    (membersCount > 3 && userElementsCount < 1);

                if (takeAccess) {
                    NavigationService.navigate(this.elementGames[target]);
                } else {
                    Alert.alert(null, i18n.t(`alerts.enough_space_${userElementsCount}`), [{
                        text: "OK",
                        onPress: this.pressOk
                    }])
                }
            }
        }
    };

    correctElementCallback = (responseData, target) => {
        const element = data.elements[target];
        if (responseData['success']) {
            if (responseData.count > 0) {
                this.props.makeAction(SHOW_MODAL_ELEMENT, {element, action: 'correct', count: responseData.count});
                // Alert.alert( null, i18n.t('alerts.element_attached', {count: responseData.count}) )
            } else {
                Vibration.vibrate();
                showMessage(data.riddleSolvedMessage);
            }
        }
        else {
            this.props.makeAction(SHOW_MODAL_ELEMENT, {element, action: 'correct'});
            // Alert.alert( null, i18n.t('alerts.unfilled_elements') )
        }
    };

    pressOk = () => {
        this.setState({checkMarkerAccess: true})
    };


    render() {
        const {markers} = markersData.MirabellGarden;
        const {checkMarkerAccess} = this.state;

        return (
            <>
                {
                    checkMarkerAccess ?
                        Object.entries(markers).map(([key]) => (
                            <ViroARImageMarker key={key} target={key} onAnchorFound={() => {
                                this.foundObj(key)
                            }}/>
                        ))
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
    modalElement: state.modalReducer.modalElement,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MirabellGarden);
