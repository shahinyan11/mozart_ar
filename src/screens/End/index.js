import React, {Component} from 'react'
import {connect} from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import {View, ImageBackground, Text, ScrollView} from 'react-native'
import NavigateButton from "../../components/NavigateButton";
import ProgressBar from "../../components/ProgressBar";
import {makeAction} from "../../makeAction";
import {styles} from './styles'
import {Player} from "@react-native-community/audio-toolkit";
import i18n from "../../services/i18next";

class End extends Component {

    constructor(props) {
        super(props);

        new Player('flute.mp3').play();
    }

    handlePress = () => {
        this.props.navigation.navigate('MainMenu')
    };

    render() {
        const {oriented} = this.props;
        return (
            <ScrollView style={!oriented ? styles.scrollView : styles.scrollViewOriented}
                        contentContainerStyle={{flexGrow: 1}}>

                <LinearGradient style={styles.container}
                                colors={['rgba(36, 25, 32, 1)', 'rgba(36, 25, 32, 0.8)']}>

                    <ProgressBar navigation={this.props.navigation}/>

                    <View style={{flex:1}}>
                        <View>
                            <View style={styles.titleContain}>
                                <Text style={styles.title}>
                                    {i18n.t('screens.End.title')}
                                </Text>
                            </View>
                        </View>

                        <View style={!oriented ? styles.squareContain : styles.squareContainOriented}>
                            <ImageBackground source={require('../../assets/images/square.png')}
                                             style={!oriented ? styles.squareBackground : styles.squareBackgroundOriented}>
                                <View style={styles.imgMozartContainer}>
                                    <Text style={styles.text}>
                                        {i18n.t('screens.End.text')}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                    <NavigateButton
                        title="ZURÜCK ZUR ÜBERSICHT"
                        onPress={this.handlePress}
                        color={'#39abd7'}
                    />
                </LinearGradient>
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
)(End)
