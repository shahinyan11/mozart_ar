import React, {Component} from 'react'
import {Text, View, ImageBackground, Image, TouchableOpacity, TextInput} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/Ionicons";
import data from "../../services/data";
import GuessColor from "../../components/GuessColor";
import {styles} from './styles';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {errorAlert} from "../../helpers";
import NavigateButton from "../../components/NavigateButton";
import {RIDDLE_SOLVED_REQUEST} from "../../actionsTypes";
import {getDeviceId} from "react-native-device-info";
import {getCurrentMemberType} from "../../services/helpers";
import i18n from '../../services/i18next'
import moment from "moment";

class DynamicContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            pickerValue: '00/00/000',
            visible: false,
            text: data.riddles[this.props.game.stage].text,
            answer: data.riddles[this.props.game.stage].answer,
            solved: data.riddles[this.props.game.stage].solved,
            memberType: 1
        }
    }


    componentDidMount() {
        const {stage, game_members} = this.props.game;
        const memberType = getCurrentMemberType(game_members, getDeviceId());
        const {text, answer, solved} = [17, 18, 19, 20].indexOf(stage) < 0 ? data.riddles[stage] : data.riddles[stage][memberType];
        this.setState({
            inputValue: [17, 18, 19, 20].indexOf(stage) < 0 ? '' : memberType === 2 ? '00/00/000' : '',
            text: text,
            answer,
            memberType,
            solved
        })
    }

    componentDidUpdate(prevProps) {
        const {stage, game_members} = this.props.game;
        if (stage !== prevProps.game.stage) {

            const memberType = getCurrentMemberType(game_members, getDeviceId());
            const {text, answer, solved} = [17, 18, 19, 20].indexOf(stage) < 0 ? data.riddles[stage] : data.riddles[stage][memberType];
            this.setState({
                inputValue: [17, 18, 19, 20].indexOf(stage) < 0 ? '' : memberType === 2 ? '00/00/000' : '',
                text: text,
                answer,
                memberType,
                solved
            })
        }

    }

    handlePress = () => {

        const {inputValue, answer, memberType} = this.state;
        const {id, stage} = this.props.game;

        if (inputValue.toLowerCase().search(answer.toLowerCase()) > -1) {
            this.props.makeAction(RIDDLE_SOLVED_REQUEST, {
                data: {
                    id,
                    stage: stage >= 16 ? stage + memberType : stage + 1,
                    device_id: getDeviceId(),
                }
            });

        } else {
            errorAlert('Error', 'Falsche Antwort')
        }
    };

    handleChange = (inputValue) => {
        this.setState({inputValue})
    };
    datePickerChange = (value) => {

        this.setState({
            inputValue: moment(value.nativeEvent.timestamp).format('M/DD/YYYY'),
            visible: false
        });
    };

    render() {
        const {game} = this.props;
        const {text, visible, memberType, solved, inputValue} = this.state;

        return (
            <View style={styles.squareContain}>
                <ImageBackground
                    source={game.stage === 14 ? require('../../assets/images/notes.png') : require('../../assets/images/square.png')}
                    style={{
                        ...styles.squareBackground, ...(game.stage === 14 ? {
                            alignItems: 'center',
                            justifyContent: 'center'
                        } : {})
                    }}
                >

                    <View style={styles.squareContent}>
                        <Text style={game.stage === 14 ? styles.notesText : styles.contentTitle}>
                            {i18n.t(text)}
                        </Text>
                        {game.stage === 10 ? <GuessColor/> : null}
                        {game.stage === 16 ? <Image style={{height: 200, width: 130}} source={require('../../assets/images/monument.jpeg')}/> : null}
                        {
                            [5, 17, 18, 19].indexOf(game.stage) >= 0 && !solved ?
                                <>
                                    {

                                            memberType === 1 || game.stage === 5 ?
                                                <View style={styles.inputBox}>
                                                    <TextInput
                                                        style={styles.input}
                                                        onChangeText={(text) => { this.handleChange(text)}}
                                                        onSubmitEditing={this.handlePress}
                                                    />
                                                </View>
                                                :

                                                <View>
                                                    <TouchableOpacity style={styles.dateBox}
                                                                      onPress={() => this.setState({visible: true})}>
                                                        <Text style={styles.dateText}> {inputValue} </Text>
                                                        <Icon name="ios-calendar" size={40}
                                                              color="#000000"/>
                                                    </TouchableOpacity>
                                                    {
                                                        visible ?
                                                            <DateTimePicker
                                                                testID="datePicker"
                                                                minimumDate={moment("1/1/1800").valueOf()}
                                                                mode={'date'}
                                                                value={new Date()}
                                                                is24Hour={true}
                                                                display="default"
                                                                onChange={this.datePickerChange}
                                                            />
                                                            : null
                                                    }

                                                </View>
                                    }

                                    <View style={{width: '90%'}}>
                                        <NavigateButton
                                            title="Antwort aktivieren"
                                            onPress={this.handlePress}
                                            color={'#39abd7'}
                                            textColor={'#39abd7'}
                                            customStyles={{backgroundColor: 'rgba(245, 245, 245, 0.6)'}}
                                        />
                                    </View>
                                </>
                                : game.stage === 14 ?
                                <View style={{width: '90%', backgroundColor: 'rgba(255,255,255, 0.85)', marginTop: 80}}>
                                    <NavigateButton
                                        title={i18n.t('buttons.start_singing')}
                                        onPress={() => {this.props.navigation.navigate('Singing')}}
                                        color={'#39abd7'}
                                        textColor={'#39abd7'}
                                        customStyles={{marginBottom: 0}}
                                    />
                                </View>
                                :null
                        }

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DynamicContent);
