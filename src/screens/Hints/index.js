import React, {Component} from 'react'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import ProgressBar from "../../components/ProgressBar";
import ResponseButton from "../../components/ResponseButton";
import Icon from "react-native-vector-icons/Ionicons";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import SquareNavigateButton from "../../components/SquareNavigateButton";
import data from "../../services/data";
import {getCurrentMemberType} from "../../services/helpers";
import {getDeviceId} from "react-native-device-info";
import i18n from "../../services/i18next";

class Hints extends Component {

    constructor(props) {
        super(props);

        const {stage, game_members} = this.props.game;
        const memberType = getCurrentMemberType(game_members, getDeviceId());

        this.state = {
            hints: [17, 18, 19, 20].indexOf(stage) < 0 ? data.riddles[stage].hints : data.riddles[stage][memberType].hints
        }
    }

    componentDidUpdate(prevProps) {
        const {stage, game_members} = this.props.game;
        const memberType = getCurrentMemberType(game_members, getDeviceId());
        if (stage !== prevProps.game.stage) {
            const {hints} = [17, 18, 19, 20].indexOf(stage) < 0 ? data.riddles[stage] : data.riddles[stage][memberType];
            this.setState({
                hints
            })
        }

    }

    _navigate = (screen, type) => {
        this.props.navigation.navigate(screen, {type})
    };

    render() {
        const {squareNavigateButtons} = data;
        const {hints} = this.state;
        const {game} = this.props;
        const correctAnswer = game.logic_riddle ? JSON.parse(game.logic_riddle).correctAnswer : 0 ;
        let control = 0;

        return (
            <ScrollView style={styles.scrollView}
                        contentContainerStyle={{flexGrow: 1}}>
                <LinearGradient style={styles.topCol}
                                colors={["rgba(36, 25, 32, 0.7)", "#241920"]}>

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
                                {i18n.t('screens.Hints.mainTitle')}
                            </Text>
                        </View>
                        <Text style={styles.description}>
                            {i18n.t('screens.Hints.text_1')}
                        </Text>
                        <Text style={styles.description}>
                            {i18n.t('screens.Hints.text_2')}

                        </Text>
                    </View>

                </LinearGradient>
                <LinearGradient style={styles.bottomCol} colors={["#241920", "rgba(36, 25, 32, 0.7)"]}>
                    {hints.map((value, index) => (
                        <ResponseButton
                            key={index}
                            title={i18n.t(value.title)}
                            text={value.id === 3 && game.stage === 10 ? i18n.t(value.text) + correctAnswer : i18n.t(value.text)}
                            color={value.id === 3 ? '#39abd7' : null}
                        />
                    ))}
                </LinearGradient>
                <LinearGradient style={styles.bottomCol} colors={["rgba(36, 25, 32, 0.7 )", "#241920",]}>
                    <Text style={styles.bottomText}>
                        {i18n.t('screens.Hints.text_3')}
                    </Text>
                </LinearGradient>
                <LinearGradient style={styles.bottomMenu} colors={["#241920", "rgba(36, 25, 32, 0.6)"]}>
                    <View style={styles.bottomContent}>
                        {
                            squareNavigateButtons.map((value) => {
                                if (value.id !== 7) {
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
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hints)
