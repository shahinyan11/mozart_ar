import React, {Component} from 'react'
import {Text, View, ImageBackground, ScrollView, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import {connect} from "react-redux";
import {ViroARSceneNavigator} from "react-viro";

import SquareNavigateButton from "../../components/SquareNavigateButton";
import ProgressBar from "../../components/ProgressBar";
import {HIDE_MOZART} from "../../actionsTypes";
import MarkerRecognize from "../../components/MarkerRecognize";
import {makeAction} from "../../makeAction";
import data from "../../services/data";

import {styles} from './styles';


class CameraAr extends Component {


    componentWillUnmount(){
        console.log('unmount')
    }

    _navigate = (screen, type) => {
        if(this.props.game.stage === 2){
            this.props.makeAction(HIDE_MOZART);
        }
        this.props.navigation.navigate(screen, {type})
    };


    render() {
        const {squareNavigateButtons} = data;
        const {oriented, navigation, video} = this.props;
        let control = 0;
        return (
            <ScrollView style={!oriented ? styles.scrollView : styles.scrollViewOriented}
                        contentContainerStyle={{flexGrow: 1}}>
                <ImageBackground source={require('../../assets/images/background_1.png')}
                                 style={styles.backgroundImage}>
                    {/*{screenLoader ? <ScreenLoader/> : null}*/}
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
                                    style={!oriented ? styles.title : styles.titleOriented}>CameraAr</Text>
                            </View>
                        </View>
                        <View style={!oriented ? styles.squareContain : styles.squareContainOriented}>

                            <ImageBackground
                                source={require('../../assets/images/square.png')}
                                style={!oriented ? styles.squareBackground : styles.squareBackgroundOriented}
                            >
                                <ViroARSceneNavigator initialScene={{
                                    scene: MarkerRecognize,
                                    passProps: {
                                        navigation,
                                        video,
                                    }
                                }}/>
                            </ImageBackground>

                        </View>
                    </LinearGradient>
                    <LinearGradient style={styles.bottomCol} colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}>
                        <View style={!oriented ? styles.bottomContent : styles.bottomContentOriented}>
                            {
                                squareNavigateButtons.map((value) => {
                                    if (value.id !== 5) {
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
    screenLoader: state.loaderReducer.screenLoader,
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CameraAr);
