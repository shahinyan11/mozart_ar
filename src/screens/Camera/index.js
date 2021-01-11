import React, {Component} from 'react'
import {connect} from "react-redux";
import CameraAr from "../CameraAr";
import QRscaner from "../QRscaner";
import {makeAction} from "../../makeAction";

class Camera extends Component {

    render() {
        const {navigation, cameraVisibility} = this.props;
        const {type} = navigation.state.params;
        const video = navigation.state.params?.video;

        return (
            <>
                {
                     type === 'qr' && cameraVisibility ?
                        <QRscaner navigation={navigation}/>
                        :  type !== 'qr' && cameraVisibility ?
                        <CameraAr navigation={navigation} video={video}/>
                        : null
                }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    screenLoader: state.loaderReducer.screenLoader,
    language: state.mainReducer.language,
    cameraVisibility: state.visibilityReducer.cameraVisibility,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Camera);
