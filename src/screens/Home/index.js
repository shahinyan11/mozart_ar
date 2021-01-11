import React, {Component} from 'react'
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from "react-redux";

import NavigateButton from "../../components/NavigateButton";
import ProgressBar from "../../components/ProgressBar";
import {makeAction} from "../../makeAction";

import {styles} from './styles'
import i18n from "../../services/i18next"

class Home extends Component {

    constructor(props) {
        super(props);
    }

    handlePress = (screen) => {
        this.props.navigation.navigate(screen)
    };

    render() {
        const {game, oriented} = this.props;
        return (
            <ScrollView style={!oriented ? styles.scrollView : styles.scrollViewOriented}
                        contentContainerStyle={{flexGrow: 1}}>

                <ImageBackground source={require('../../assets/images/background_1.png')}
                                 style={styles.backgroundImage}>
                    {/*{screenLoader ? <ScreenLoader/> : null}*/}

                    <LinearGradient style={styles.topCol}
                                    colors={['rgba(207, 149, 125, 0.5)', 'rgba(207, 149, 125, 0.5)']}>

                        <ProgressBar navigation={this.props.navigation}/>
                        <View>
                            <Text style={styles.mainTitle}>
                                {i18n.t('screens.Home.mainTitle')}
                            </Text>
                            <Text style={styles.title}>
                                {i18n.t('screens.Home.title')}
                            </Text>
                        </View>

                        <View style={!oriented ? styles.squareContain : styles.squareContainOriented}>
                            <ImageBackground source={require('../../assets/images/square.png')}
                                             style={!oriented ? styles.squareBackground : styles.squareBackgroundOriented}>
                                <View style={styles.imgMozartContainer}>
                                    <Image style={!oriented ? styles.imgMozart : styles.imgMozartOriented}
                                           source={require('../../assets/images/mozart1.png')}/>
                                </View>
                                <View style={styles.titlesContainer}>
                                    <Image source={require('../../assets/images/begibDichAuf.png')}
                                           style={[styles.imagTexts, {width: 131, marginLeft: -8}]}/>
                                    <Image source={require('../../assets/images/einSpannendes.png')}
                                           style={[styles.imagTexts, {width: 136, marginLeft: -2}]}/>
                                    <Image source={require('../../assets/images/abenteuerQue.png')}
                                           style={[styles.imagTexts, {width: 140}]}/>
                                    <Image source={require('../../assets/images/durchSalzburg.png')}
                                           style={[styles.imagTexts, {width: 138, marginLeft: -2}]}/>
                                    <Image source={require('../../assets/images/undFindeMein.png')}
                                           style={[styles.imagTexts, {width: 136, marginLeft: -8}]}/>
                                    <Image source={require('../../assets/images/vermachtnis.png')}
                                           style={[styles.imagTexts, {width: 123, marginLeft: -18}]}/>
                                </View>
                            </ImageBackground>
                        </View>
                    </LinearGradient>
                    <LinearGradient style={styles.bottomCol} colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}>
                        <NavigateButton
                            title={i18n.t('buttons.introduction_intro')}
                            onPress={() => {
                                this.handlePress('Intro')
                            }}

                        />
                        <NavigateButton
                            title={i18n.t('buttons.starting_point')}
                            onPress={() => {
                                this.handlePress('StartingPoint')
                            }}
                        />

                        <NavigateButton
                            title={i18n.t('buttons.start_game')}
                            onPress={() => {
                                this.handlePress(game ? 'MainMenu' : 'StartGame')
                            }}
                            color={'#39abd7'}
                        />
                    </LinearGradient>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    screenLoader: state.loaderReducer.screenLoader,
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
)(Home)
