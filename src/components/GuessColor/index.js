import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {Picker} from '@react-native-community/picker';
import {styles} from "./styles";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {RIDDLE_SOLVED_REQUEST, UPDATE_LOGIC_RIDDLE_REQUEST} from "../../actionsTypes";
import {errorAlert} from "../../helpers";
import {getDeviceId} from "react-native-device-info";
import {generateGuessColor} from "../../services/helpers";
import i18n from '../../services/i18next'



class GuessColor extends Component {

    constructor(props) {
        super(props);

        this.questions = {
            1: [
                {firstNum: 1, action: '*', secondNum: 1},
                {firstNum: 3, action: '-', secondNum: 2},
                {firstNum: 4, action: '-', secondNum: 3},
                {firstNum: 5, action: '-', secondNum: 4},
            ],
            2: [
                {firstNum: 1, action: '*', secondNum: 2},
                {firstNum: 4, action: '/', secondNum: 2},
                {firstNum: 6, action: '/', secondNum: 3},
                {firstNum: 1, action: '+', secondNum: 1},

            ],
            3: [
                {firstNum: 1, action: '*', secondNum: 3},
                {firstNum: 5, action: '-', secondNum: 2},
                {firstNum: 6, action: '/', secondNum: 2},
                {firstNum: 4, action: '-', secondNum: 1},
            ],
            4: [
                {firstNum: 1, action: '*', secondNum: 4},
                {firstNum: 2, action: '*', secondNum: 2},
                {firstNum: 5, action: '-', secondNum: 1},
                {firstNum: 6, action: '-', secondNum: 2},
            ],
            5: [
                {firstNum: 1, action: '*', secondNum: 5},
                {firstNum: 2, action: '+', secondNum: 3},
                {firstNum: 6, action: '-', secondNum: 1},
                {firstNum: 4, action: '+', secondNum: 1},
            ],
            6: [
                {firstNum: 1, action: '*', secondNum: 6},
                {firstNum: 3, action: '*', secondNum: 2},
                {firstNum: 3, action: '+', secondNum: 3},
                {firstNum: 5, action: '+', secondNum: 1},
            ],
        };

        this.state = {
            visibleIndexes: this.getVisibleQusetions()
        };
    }


    getVisibleQusetions = () => {
        const {game_members} = this.props.game;

        const index = game_members.findIndex((value) => {
            return value.device_id === getDeviceId()
        });
        if(game_members.length === 1){
            return [0,1,2,3,4]
        }else if(game_members.length === 2){
            if(index === 0){
                return [0,1]
            }else{
                return [2,3,4]
            }
        } else if(game_members.length === 3){
            if(index === 0){
                return [0,1]
            }else if(index === 1){
                return [2,3]
            }else{
                return [4]
            }
        }else if(game_members.length === 4){
            if(index === 0){
                return [0,1]
            }else{
                return [index]
            }
        }else if(game_members.length > 4){
            if(index === 0){
                return [0]
            }else if(index > 4){
                return [index - 5]
            } else{
                return [index]
            }
        }

    };

    handleChange = (inputValue) => {
        const {id, stage} = this.props.game;
        const {numbers} = JSON.parse(this.props.game.logic_riddle);
        if (+inputValue === +numbers[numbers.length - 1]) {
            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                data: {
                    id,
                    stage: stage + 1,
                    device_id: getDeviceId(),
                }
            });
        } else {
            this.props.makeAction(UPDATE_LOGIC_RIDDLE_REQUEST, {
                data: {
                    id,
                    logic_riddle: JSON.stringify(generateGuessColor()),
                    device_id: getDeviceId(),
                }
            });
            errorAlert('Error', 'Falsche Antwort')
        }
    };

    render() {
        const {numbers, colors, indexQuestions} = JSON.parse(this.props.game.logic_riddle);
        const {visibleIndexes} = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    {colors.map((value, index) => (
                        <View key={index} style={{...styles.colors, backgroundColor: value,}}/>
                    ))}
                </View>
                <View>
                    {numbers.map((value, index) => {
                        let {firstNum, action, secondNum} = this.questions[value][indexQuestions[index]];
                        let currentColor =  i18n.t(`colors.${colors[numbers.indexOf(value)]}`);
                        let color_1 =  i18n.t(`colors.${colors[numbers.indexOf(firstNum)]}`);
                        let color_2 = i18n.t(`colors.${colors[numbers.indexOf(secondNum)]}`);
                        if (index < numbers.length - 1) {
                            if(visibleIndexes.indexOf(index) > -1){
                                return (
                                    <Text key={index}
                                          style={styles.hints}> {`${color_1} ${action} ${color_2} = ${i18n.t(currentColor)}`} </Text>
                                )
                            }
                        } else {
                            return (

                                <View key={index} style={styles.questionBox}>
                                    <Text style={styles.question}> {i18n.t('screens.CurrentRiddle.color_question', {color: currentColor}) } </Text>

                                    <View style={styles.pickerView}>
                                        <Picker
                                            style={styles.picker}
                                            itemStyle={styles.pickerItem}
                                            onValueChange={(value) => {
                                                this.handleChange(value)
                                            }}
                                        >

                                            <Picker.Item label="1-6" value=""/>
                                            <Picker.Item label="1" value="1"/>
                                            <Picker.Item label="2" value="2"/>
                                            <Picker.Item label="3" value="3"/>
                                            <Picker.Item label="4" value="4"/>
                                            <Picker.Item label="5" value="5"/>
                                            <Picker.Item label="6" value="6"/>
                                        </Picker>
                                    </View>

                                </View>
                            )
                        }
                    })}

                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuessColor)
