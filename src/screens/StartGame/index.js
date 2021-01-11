import React, {Component} from 'react'
import {connect} from "react-redux"
import {Text, View, ImageBackground, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import {getDeviceId} from "react-native-device-info";
import NavigateButton from "../../components/NavigateButton";
import {makeAction} from "../../makeAction"
import {errorAlert} from "../../helpers";
import {styles} from './styles'
import {JOIN_TO_GAME_REQUEST} from "../../actionsTypes";
import i18n from "../../services/i18next"

class StartGame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            voucher: ''
        }

    }


    nameChange = (name) => {
        this.setState({name})
    };
    voucherChange = (voucher) => {
        this.setState({voucher})
    };

    validateName = (name) => {

    };
    validateVoucher = (name) => {

    };

    handlePress = () => {
        const {name, voucher} = this.state;
        if (name !== '' && voucher !== '') {
            this.props.makeAction(JOIN_TO_GAME_REQUEST, {
                data: {
                    name,
                    voucher,
                    device_id: getDeviceId()
                }
            });
        } else {
            errorAlert('Error', 'Nicht alle Felder sind ausgefüllt')
        }
    };

    render() {
        const {oriented} = this.props;
        return (
            <ScrollView style={!oriented ? styles.scrollView : styles.scrollViewOriented}
                        contentContainerStyle={{flexGrow: 1}}
                        keyboardShouldPersistTaps={'handled'}>
                <ImageBackground source={require('../../assets/images/background_1.png')}
                                 style={styles.backgroundImage}>
                    {/*{screenLoader ? <ScreenLoader/> : null}*/}
                    <LinearGradient style={!oriented ? styles.topCol : styles.topColOriented}
                                    colors={['rgba(57, 171, 215, 0.5)', 'rgba(57, 171, 215, 0.5)']}>
                        <View>
                            <View style={!oriented ? styles.titleContain : styles.titleContainOriented}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    style={styles.touchBack}
                                >
                                    <Icon name="ios-arrow-back" size={40} color="#000000"/>
                                </TouchableOpacity>
                                <Text style={{...styles.title, ...styles.mainTitle}}>
                                    {i18n.t('screens.StartGame.mainTitle')}
                                </Text>
                            </View>
                            <Text style={styles.title}>
                                {i18n.t('screens.StartGame.title')}
                            </Text>
                        </View>

                        <View style={styles.squareContain}>
                            <ImageBackground
                                source={require('../../assets/images/square.png')}
                                style={styles.squareBackground}
                            >
                                <View style={styles.squareContent}>
                                    <Text style={styles.contentTitle}>
                                        {i18n.t('screens.StartGame.contentTitle')}
                                    </Text>
                                    <Text style={styles.centerText}>
                                        {i18n.t('screens.StartGame.centerText')}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        style={styles.centerCol}
                        colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}
                    >
                        <Text style={styles.checkTitle}>
                            {i18n.t('screens.StartGame.checkTitle')}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.dot}> . </Text>
                            <Text style={styles.checkListText}>
                                {i18n.t('screens.StartGame.text_1')}
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.dot}> . </Text>
                            <Text style={styles.checkListText}>
                                {i18n.t('screens.StartGame.text_2')}
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.dot}> . </Text>
                            <Text style={styles.checkListText}>
                                {i18n.t('screens.StartGame.text_3')}
                            </Text>
                        </View>
                    </LinearGradient>
                    <LinearGradient style={styles.bottomCol}
                                    colors={['rgba(57, 171, 215, 0.5)', 'rgba(57, 171, 215, 0.5)']}>
                        <View>
                            <Text style={styles.text}>
                                {i18n.t('screens.StartGame.text_4')}
                            </Text>
                            <View style={styles.inputBox}>
                                <Text style={styles.text}>
                                    {i18n.t('inputs.labels.player_name')}
                                </Text>
                                <TextInput
                                    style={!oriented ? styles.input : styles.inputOriented}
                                    onEndEditing={(e) => {
                                        this.validateName(e.nativeEvent.text)
                                    }}
                                    onChangeText={(text) => {
                                        this.nameChange(text)
                                    }}

                                />
                            </View>
                            <View style={styles.inputBox}>
                                <Text style={styles.text}>
                                    {i18n.t('inputs.labels.activation_code')}
                                </Text>
                                <TextInput
                                    style={!oriented ? styles.input : styles.inputOriented}
                                    onEndEditing={(e) => {
                                        this.validateVoucher(e.nativeEvent.text)
                                    }}
                                    onChangeText={(text) => {
                                        this.voucherChange(text)
                                    }}
                                />
                            </View>
                        </View>

                        <NavigateButton
                            title={i18n.t('buttons.start_new_game')}
                            onPress={ this.handlePress}
                        />
                        <NavigateButton
                            title={i18n.t('buttons.join_running_game')}
                            onPress={this.handlePress}
                        />
                    </LinearGradient>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    screenLoader: state.loaderReducer.screenLoader,
    errorMessage: state.errorsReducer.errorMessage,
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartGame);
