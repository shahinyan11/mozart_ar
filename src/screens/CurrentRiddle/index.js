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
import DynamicContent from "./DynamicContent";

class CurrentRiddle extends Component {

    _navigate = (screen, type) => {
        // this.props.navigation.navigate(screen, {video: true})
        this.props.navigation.navigate(screen, {type})
    };

    render() {
        const {squareNavigateButtons} = data;
        let control = 0;
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
                                <Text style={{...styles.title, ...styles.mainTitle}}>
                                    Aktuelles Rätsel
                                </Text>
                            </View>
                            <Text style={styles.title}>Linzergasse</Text>

                        </View>
                       <DynamicContent navigation={this.props.navigation}/>
                    </LinearGradient>
                    <LinearGradient style={styles.bottomCol} colors={["rgba(36, 25, 32, 0.5 )", "#241920"]}>
                        <View style={styles.bottomContent}>
                            {
                                squareNavigateButtons.map((value) => {
                                    if (value.id !== 2) {
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
)(CurrentRiddle);
