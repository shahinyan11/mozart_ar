import React, {Component} from 'react'
import {Text, View, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles'
import NavigateButton from "../../components/NavigateButton";
import ProgressBar from "../../components/ProgressBar";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import i18n from "../../services/i18next";

class Intro extends Component {

    constructor(props) {
        super(props);
    }

    handlePress = (screen) => {
        this.props.navigation.navigate(screen)
    };

    render() {
        const {oriented} = this.props;
        return (
            <ScrollView style={!oriented ? styles.scrollView : styles.scrollViewOriented}
                        contentContainerStyle={{flexGrow: 1}}>
                <ImageBackground source={require('../../assets/images/background_2.png')}
                                 style={styles.backgroundImage}>
                    <LinearGradient
                        style={!oriented ? styles.col_1 : styles.col_1Oriented}
                        colors={['rgba(207, 149, 125, 0.6)', 'rgba(207, 149, 125, 0.6)']}
                    >
                        <LinearGradient
                            style={!oriented ? {...styles.progressContain, ...styles.col} : {...styles.progressContainOriented, ...styles.colOriented}}
                            colors={['rgba(200, 145, 120, 1)', 'rgba(200, 145, 120, 0.2)']}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                        >
                            <ProgressBar navigation={this.props.navigation}/>

                            <View style={!oriented ? styles.titleContain : styles.titleContainOriented}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    style={styles.touchBack}
                                >
                                    <Icon name="ios-arrow-back" size={40} color="#000000"/>
                                </TouchableOpacity>
                                <Text style={!oriented ? styles.mainTitle : styles.mainTitleOriented}>
                                    {i18n.t('screens.Intro.mainTitle')}
                                </Text>
                            </View>
                        </LinearGradient>

                        <View>
                            <Text style={styles.text}>
                                {i18n.t('screens.Intro.text_1')}
                            </Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>
                                {i18n.t('screens.Intro.name')}
                            </Text>
                        </View>
                        <View style={!oriented ? styles.squareContain : styles.squareContainOriented}>
                            <ImageBackground source={require('../../assets/images/square.png')}
                                             style={!oriented ? styles.squareBackground : styles.squareBackgroundOriented}>
                                <View style={styles.imgMozartContainer}>
                                    <Image style={!oriented ? styles.imgMozart : styles.imgMozartOriented}
                                           source={require('../../assets/images/mozart1.png')}/>
                                </View>
                            </ImageBackground>
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        style={{...styles.col_2, ...styles.col}}
                        colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}
                    >
                        <Text style={styles.text}>
                            {i18n.t('screens.Intro.text_2')}
                        </Text>
                    </LinearGradient>
                    <LinearGradient
                        style={{...styles.col_3, ...styles.col}}
                        colors={['rgba(57, 171, 215, 0.5)', 'rgba(57, 171, 215, 0.5)']}
                    >
                        <Image
                            style={!oriented ? styles.imageSing : styles.imageSingOriented}
                            source={require('../../assets/images/sign.png')}
                        />
                        <Text style={styles.text}>
                            {i18n.t('screens.Intro.text_3')}
                        </Text>
                    </LinearGradient>
                    <View style={{...styles.col_4, ...styles.col}}>
                        <View style={!oriented ? styles.iconContain : styles.iconContainOriented}>
                            <Image style={{width: 77, height: 65}} source={require('../../assets/images/np-time.png')}/>
                            <Text style={{...styles.text, textAlign: 'left', color: '#241920'}}>
                                {i18n.t('screens.Intro.text_4')}
                            </Text>
                        </View>
                        <Image style={{width: 26, height: 255, bottom: -67}}
                               source={require('../../assets/images/group-5.png')}/>
                        <View style={!oriented ? styles.iconContain : styles.iconContainOriented}>
                            <Image style={{height: 67, width: 65}}
                                   source={require('../../assets/images/np-power.png')}/>
                            <Text style={{...styles.text, textAlign: 'right', color: '#241920'}}>
                                {i18n.t('screens.Intro.text_5')}
                            </Text>
                        </View>
                    </View>
                    <LinearGradient style={styles.col_2} colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}>
                        <Text style={!oriented ? styles.bottomText : styles.bottomTextOriented}>
                            {i18n.t('screens.Intro.text_6')}
                        </Text>

                        <NavigateButton
                            title="FINDE DEN STARTPUNKT"
                            onPress={() => {
                                this.handlePress('StartingPoint')
                            }}
                            additionalStyles={{borderColor: '#39abd7'}}
                        />
                    </LinearGradient>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intro)
