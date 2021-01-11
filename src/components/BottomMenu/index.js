import React, {Component} from 'react';
import {View, Animated, TouchableHighlight} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import BottomSheet from "reanimated-bottom-sheet";
import DownIcon from "../../assets/svgs/DownIcon";
import UpIcon from "../../assets/svgs/UpIcon";
import SquareNavigateButton from "../SquareNavigateButton";
import data from "../../services/data";
import {styles} from "./styles";
import GestureRecognizer from 'react-native-swipe-gestures'
import * as Animatable from 'react-native-animatable';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";

class BottomMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
            height: 65,
            heightValue: new Animated.Value(65)
        }
        this.ref = null
    }

    _navigate = (screen, type) => {
        this.props.navigation.navigate(screen, {type})
    };

    onSwipeUp = (gestureState) => {
        const height = this.props.oriented ? 200 : 300
        this.ref.transitionTo({height})
        this.setState({
            height,
            active: true
        })
    }
    onSwipeDown = () => {
        this.ref.transitionTo({height: 65})
        this.setState({
            height: 65,
            active: false
        })
    }

    handlePress = () => {
        const {active} = this.state
        active ? this.onSwipeDown() : this.onSwipeUp()
    }

    render() {
        const {active, height} = this.state
        const {screenId, oriented} = this.props
        const {squareNavigateButtons} = data
        let control = 0

        return (
            <Animatable.View
                ref={(ref) => {
                    this.ref = ref
                }}
                style={ !oriented ? {...styles.container, height: height} : {...styles.containerOriented, height: height}}

            >
                <GestureRecognizer
                    onSwipeUp={(gestureState) => {
                        this.onSwipeUp(gestureState)
                    }}
                    onSwipeDown={this.onSwipeDown}
                    onPress={this.handlePress}
                    style={{flex: 1}}
                >
                    <TouchableHighlight style={{flex: 1}} onPress={this.handlePress}>
                        <LinearGradient style={styles.gradient}
                                        colors={['rgba(36, 25, 32, 1)', 'rgba(36, 25, 32, 0.75)']}>
                            <View style={ !oriented ? styles.header : styles.headerOriented }>
                                {active ? <DownIcon fill="#ffffff"/> : <UpIcon fill="#ffffff"/>}
                            </View>
                            {active ?
                                <View style={ !oriented ? styles.content : styles.contentOriented }>
                                    {
                                        squareNavigateButtons.map((value) => {
                                            if (value.id !== screenId) {
                                                control += 1
                                                return (
                                                    <SquareNavigateButton
                                                        key={value.id}
                                                        data={value}
                                                        color={control > 3 ? '#39abd7' : '#e48146' }
                                                        onPress={() => {
                                                            this._navigate(value.routName, value.type)
                                                        }}
                                                        textStyle={{
                                                            color: "white"
                                                        }}
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </View> : null
                            }
                        </LinearGradient>
                    </TouchableHighlight>
                </GestureRecognizer>
            </Animatable.View>

        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BottomMenu)
