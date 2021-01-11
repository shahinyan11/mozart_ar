import React, {Component} from 'react'
import {connect} from "react-redux";
import {Text, View, ImageBackground, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';

import {CHANGE_LANGUAGE, REMOVE_USER_JOINS_REQUEST} from "../../actionsTypes";
import ProgressBar from "../../components/ProgressBar";
import {makeAction} from "../../makeAction";
import DownIcon from "../../assets/svgs/DownIcon";
import {styles} from './styles'
import i18n from "../../services/i18next"
import Icon from "react-native-vector-icons/Ionicons";
import {getDeviceId} from "react-native-device-info";


class Settings extends Component {

    handlePress = (screen) => {
        this.props.navigation.navigate(screen)
    };

    changeLanguage=(language)=>{
        i18n.changeLanguage(language);
        this.props.makeAction(CHANGE_LANGUAGE, {data:{language}});
    };

    killSession =()=>{
        this.props.makeAction(REMOVE_USER_JOINS_REQUEST, {data: {device_id: getDeviceId()}});
    };

    render() {
        const {language} = this.props;
        return (
            <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>

                <ImageBackground style={styles.backgroundImage}
                                 source={require('../../assets/images/background_1.png')}>

                    <LinearGradient style={styles.topCol} colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}>

                        <ProgressBar navigation={this.props.navigation} hideSettingsIcon={true}/>
                        <View style={styles.titleContain}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.touchBack}
                            >
                                <Icon name="ios-arrow-back" size={40} iconStyle={styles.shadow} color="#000000"/>

                            </TouchableOpacity>
                            <Text style={styles.mainTitle}>
                                {i18n.t('screens.Settings.mainTitle')}
                            </Text>
                        </View>
                        <View style={{width: '100%'}}>
                            <View style={styles.content}>
                                <View style={styles.inputBox}>
                                    <Text style={styles.text}> Name </Text>
                                    <TextInput style={{...styles.text, ...styles.textInput}} value={'Sasha'}/>
                                </View>
                                {/*<View style={styles.inputBox}>*/}
                                    {/*<Text style={styles.text}> Form Field </Text>*/}
                                    {/*<TextInput style={{...styles.text, ...styles.textInput}} value={'Lorem Ipsum'}/>*/}
                                {/*</View>*/}
                                <View style={styles.pickerBox}>
                                    <View style={{...styles.square, left: 0, top: 0}}/>
                                    <View style={{...styles.square, right: 0, top: 0}}/>
                                    <View style={{...styles.square, left: 0, bottom: 0}}/>
                                    <View style={{...styles.square, right: 0, bottom: 0}}/>

                                    <Text style={styles.text}>
                                        {i18n.t('inputs.labels.language')}
                                    </Text>

                                    <View style={{flex: 0.95}}>
                                        <RNPickerSelect
                                            onValueChange={this.changeLanguage}
                                            itemKey={language}
                                            placeholder={{}}
                                            Icon={() => {
                                                return (
                                                    <View style={styles.arrowDown}>
                                                        <DownIcon fill={'#39abd7'}/>
                                                    </View>
                                                )
                                            }}
                                            items={[
                                                {key: 'en', label: i18n.t('words.english'), value: 'en', color: 'white'},
                                                {key: 'ge', label: i18n.t('words.german'), value: 'ge', color: 'white'},
                                            ]}
                                        />
                                    </View>

                                </View>
                                <TouchableOpacity
                                    style={styles.killSession}
                                    onPress={this.killSession}
                                >
                                    <Text style={{width: '100%', textAlign: 'center', color: 'white', fontSize: 30}}>Kill Session</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    screenLoader: state.loaderReducer.screenLoader,
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)
