import React, {Component} from 'react'
import {Text, View, ImageBackground, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import NavigateButton from "../../components/NavigateButton";
import ProgressBar from "../../components/ProgressBar";
import ResponseButton from "../../components/ResponseButton";
import Icon from "react-native-vector-icons/Ionicons";
import QuestionMarkIcon from "../../assets/svgs/QuestionMarkIcon";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import {errorAlert} from "../../helpers";
import {styles} from './styles'
import i18n from "../../services/i18next"

class StartingPoint extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        };

        this.riddle = {
            answer: 'linzergasse',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'screens.StartingPoint.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2_solution',
                    text: 'screens.StartingPoint.hints.2'
                },
            ]
        }
    }

    handlePress = (screen) => {
        const {inputValue} = this.state;
        const {answer} = this.riddle;

        if ( inputValue.toLowerCase().search(answer) > -1 ) {
            this.props.navigation.navigate(screen)
        } else {
            errorAlert('Error', 'Falsche Antwort')
        }
    };

    handleChange = (inputValue) => {
        this.setState({inputValue})
    };


    render() {
        const {hints} = this.riddle;
        const {oriented, game} = this.props;

        return (
            <ScrollView style={styles.scrollView}
                        contentContainerStyle={{flexGrow: 1}}>
                <ImageBackground source={require('../../assets/images/background_1.png')}
                                 style={styles.backgroundImage}>
                    <LinearGradient style={styles.topCol}
                                    colors={['rgba(207, 149, 125, 0.5)', 'rgba(207, 149, 125, 0.5)']}>

                        <ProgressBar navigation={this.props.navigation}/>

                        <View>
                            <View style={styles.titleContain}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    style={styles.touchBack}
                                >
                                    <Icon name="ios-arrow-back" size={40} color="#000000"/>
                                </TouchableOpacity>
                                <Text style={styles.mainTitle}>
                                    {i18n.t('screens.StartingPoint.mainTitle')}
                                </Text>
                            </View>
                            <Text style={styles.description}>
                                {i18n.t('screens.StartingPoint.description')}
                            </Text>
                        </View>
                        <View style={styles.squareContain}>
                            <ImageBackground
                                source={require('../../assets/images/square.png')}
                                style={!oriented ? styles.squareBackground : styles.squareBackgroundOriented}
                            >
                                <View style={styles.squareContent}>
                                    <QuestionMarkIcon/>
                                    <Text style={styles.centerText}>
                                        {i18n.t('screens.StartingPoint.centerText')}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>

                    </LinearGradient>
                </ImageBackground>
                <LinearGradient style={styles.bottomCol} colors={["rgba(36, 25, 32, 0.8)", "#241920"]}>
                    <View style={!oriented ? styles.inputBox : styles.inputBoxOriented}>
                        <Text style={styles.label}>
                            {i18n.t('inputs.labels.solution')}:
                        </Text>
                        <TextInput
                            style={!oriented ? styles.input : styles.inputOriented}
                            onChangeText={(text) => {this.handleChange(text)}}
                            onSubmitEditing={() => {
                                this.handlePress(game ? 'MainMenu' : 'StartGame')
                            }}
                        />
                    </View>
                    {hints.map((value, index) => (
                        <ResponseButton
                            // openedButtonPress={()=>{
                            //     if(index === 0){
                            //         this.props.navigation.navigate('Notes',{type: 1});
                            //     }else if(index === 1){
                            //         this.props.navigation.navigate('Notes',{type: 2})
                            //     }
                            // }}
                            key={index}
                            title={i18n.t(value.title)}
                            text={i18n.t(value.text)}
                            color={value.id === 3 ? '#39abd7' : null}
                        />
                    ))}
                    <NavigateButton
                        title={i18n.t('buttons.activate_answer')}
                        onPress={() => {
                            this.handlePress(game ? 'MainMenu' : 'StartGame')
                        }}
                        color={'#39abd7'}
                        textColor={'#39abd7'}
                    />
                </LinearGradient>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartingPoint)
