import React, {Component} from 'react'
import {Text, View, ImageBackground, ScrollView, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import data from "../../services/data";
import SquareNavigateButton from "../../components/SquareNavigateButton";
import ProgressBar from "../../components/ProgressBar";
import {styles} from './styles';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import i18n from "../../services/i18next"

class MainMenu extends Component {

    _navigate = (screen, type) => {
        this.props.navigation.navigate(screen, {type})
    };

    render() {
        const {squareNavigateButtons} = data;
        const {game, oriented} = this.props;
        let control = 0;

        return (
            <ScrollView style={!oriented ? styles.scrollView : styles.scrollViewOriented}
                        contentContainerStyle={{flexGrow: 1}}>
                <ImageBackground source={require('../../assets/images/background_1.png')}
                                 style={styles.backgroundImage}>
                    <LinearGradient style={!oriented ? styles.topCol : styles.topColOriented}
                                    colors={['rgba(207, 149, 125, 0.5)', 'rgba(207, 149, 125, 0.5)']}>

                        <ProgressBar navigation={this.props.navigation}/>

                        <View>
                            <View style={!oriented ? styles.titleContain : styles.titleContainOriented}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    style={styles.touchBack}
                                >
                                    <Icon name="ios-arrow-back" size={40} color="#000000"/>
                                </TouchableOpacity>
                                <Text
                                    style={!oriented ? {...styles.title, ...styles.mainTitle} : {...styles.titleOriented, ...styles.mainTitleOriented}}>Hauptauswahl</Text>
                            </View>
                            <Text style={styles.title}>
                                {i18n.t('screens.MainMenu.title')}
                            </Text>

                        </View>
                        <View style={!oriented ? styles.squareContain : styles.squareContainOriented}>
                            <ImageBackground
                                source={require('../../assets/images/square.png')}
                                style={!oriented ? styles.squareBackground : styles.squareBackgroundOriented}
                            >
                                <View style={styles.squareContent}>
                                    <Text style={styles.contentTitle}>
                                        {i18n.t('screens.MainMenu.text_1')}
                                    </Text>
                                    {
                                        game.game_members.map((value) => (
                                            <Text key={value.id}
                                                  style={!oriented ? styles.centerText : styles.centerTextOriented}>
                                                {value.name}
                                            </Text>
                                        ))
                                    }
                                    <Text style={styles.contentTitle }>
                                        {i18n.t('screens.MainMenu.text_2')}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </LinearGradient>
                    <LinearGradient style={styles.bottomCol} colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}>
                        <View style={{width: '100%', paddingBottom: 20}}>
                            <Text style={styles.text}>
                                {i18n.t('screens.MainMenu.text_3')}
                            </Text>
                            <Text style={styles.text}>
                                {i18n.t('screens.MainMenu.text_4')}
                            </Text>
                        </View>
                        <View style={!oriented ? styles.bottomContent : styles.bottomContentOriented}>
                            {
                                squareNavigateButtons.map((value) => {
                                    if (value.id !== 1) {
                                        control += 1;
                                        return (
                                            <SquareNavigateButton
                                                key={value.id}
                                                data={value}
                                                color={control > 3 ? '#39abd7' : '#e48146'}
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
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </ScrollView>
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
)(MainMenu);
