import React, {Component} from 'react';
import * as Progress from 'react-native-progress'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import {connect} from "react-redux";

import {makeAction} from "../../makeAction";
import SettingsIcon from "../../assets/svgs/SettingsIcon";
import {GAME_OVER} from "../../actionsTypes";

import {styles} from "./styles";

class ProgressBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: 0
        };

        this.interval = null
        this.gameDuration = 120
    }

    componentWillMount() {
        if (this.props.game) {
            this.makeCountDown()
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (!prevProps.game && !this.interval) {
            this.makeCountDown()
        }
        const {time} = this.state;
        if (prevState.time > 0 && time <= 0 && prevState.time !== time) {
            this.props.makeAction(GAME_OVER);
            clearInterval(this.interval);
        }
    };

    componentWillUnmount () {
        clearInterval(this.interval);
    };

    makeCountDown = () => {
        const time = this._getTime();

        this.setState({
            time
        });

        this.interval = setInterval(() => {
            const restTime = this.state.time - 1000;
            this.setState({
                time: restTime
            })
        }, 1000);
    };

    _getTime = () => {
        const currentTime = new Date().getTime();
        const date = this.props.game?.start_date || '';
        const startTime = new Date(date.replace(' ', 'T')).getTime();
        return this.gameDuration * 60 * 1000 - (currentTime - startTime);
    };

    handlePress = (screen) => {
        this.props.navigation.navigate(screen)
    };

    convertTime = (millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    };

    render() {
        const {game, hideSettingsIcon} = this.props;
        const {time} = this.state;
        const gameStarted = game?.status === 'inProgress';
        const progress = 0.05 * (game ? game.stage : 0);

        return (
            <View style={styles.container}>
                <View style={styles.progress}>
                    <Progress.Bar progress={progress} height={16}
                                  width={gameStarted ? styles.smallProgress.width : styles.bigProgress.width}
                                  style={{backgroundColor: "black"}}/>
                    <Image source={require('../../assets/images/flag.png')}
                           style={styles.flag}/>
                </View>
                {
                    gameStarted && time ? <Text style={styles.countDown}>{this.convertTime(time)}</Text> : null
                }
                {
                   !hideSettingsIcon ?
                        <TouchableOpacity
                            style={{marginLeft: 5}}
                            onPress={() => {this.handlePress('Settings')}}
                        >
                            <SettingsIcon/>
                        </TouchableOpacity>
                        : null
                }

            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressBar)
