import React, {Component} from 'react';
import {ViroARScene} from 'react-viro';
import {connect} from "react-redux";
import {makeAction} from "../../makeAction";
import LinzerGasseStart from "./LinzerGasseStart";
import RecognizeParacelsus from "./RecognizeParacelsus";
import MirabellGarden from "./MirabellGarden";
import MozartHouse from "./MozartHouse";
import MozartBirthplace from "./MozartBirthplace";
import ZumZirkelwirt from "./ZumZirkelwirt";
import Kapuzinerkloster from "./Kapuzinerkloster";
import MozartMonument from "./MozartMonument";
import Papageno from "./Papageno";
import Cup from "./Cup";

class MarkerRecognize extends Component {
    render() {
        const {game, navigation, video, visibilityMozart} = this.props;
        return (
            <ViroARScene>
                {
                    game.stage === 1 || visibilityMozart  ?
                        <LinzerGasseStart />
                        : game.stage === 3 ?
                            <Cup navigation={navigation}/>
                            : game.stage === 4 ?
                                <MozartHouse navigation={navigation}/>
                                : game.stage === 6 ?
                                    <MirabellGarden navigation={navigation}/>
                                    : game.stage === 9 ?
                                        <MozartBirthplace navigation={navigation}/>
                                        : game.stage === 11 ?
                                            <ZumZirkelwirt navigation={navigation}/>
                                            : game.stage === 12 ?
                                                <Papageno navigation={navigation}/>
                                                : game.stage === 15 ?
                                                    <Kapuzinerkloster navigation={navigation}/>
                                                    : game.stage === 16 ?
                                                        <MozartMonument navigation={navigation}/>
                                                        :
                                                        <RecognizeParacelsus navigation={navigation} video={video}/>
                }
            </ViroARScene>
        )
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    visibilityMozart: state.gameReducer.visibilityMozart,

});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkerRecognize);
