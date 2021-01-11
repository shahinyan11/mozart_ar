import React, {Component} from 'react';
import {connect} from "react-redux";
import FlashMessage from "react-native-flash-message";
import {getDeviceId} from "react-native-device-info";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    RefreshControl,
    ScrollView,
} from 'react-native'

import {makeAction} from "../../makeAction";
import ModalElement from "../Modals/ModalElement";
import {styles} from "./styles";
import {
    HIDE_QR_CODE,
    BLOCK_QR_APPEARING,
    GET_USER_ACTIVE_GAME_REQUEST
} from "../../actionsTypes";


class WrapperComponent extends Component {

    handleClose = () => {
        if(this.props.game.stage  < 12){
            Alert.alert(
                "QR Code",
                ' Wenn Sie diesen QR-Code nicht mehr auf Ihrem Bildschirm sehen möchten, klicken Sie auf "Nicht mehr anzeigen" und wenn diesmal nur auf "Schließen" ',
                [
                    {
                        text: "Nicht mehr anzeigen",
                        onPress: this.alwaysClose,
                        style: "cancel"
                    },
                    {
                        text: "Schließen",
                        onPress: this.simpleClose
                    }
                ],
                { cancelable: false }
            );
        }else{
            this.simpleClose()
        }

    };

    simpleClose = () => {
        this.props.makeAction(HIDE_QR_CODE);
    };
    alwaysClose = () => {
        const {QRCodeData} = this.props;
        this.props.makeAction(BLOCK_QR_APPEARING, {data :{followingId: QRCodeData.id}});
    };

    onRefresh = () => {
        this.props.makeAction(GET_USER_ACTIVE_GAME_REQUEST, {data: {device_id: getDeviceId()}});
    };


    render() {
        const {QRCodeData,screenLoader} = this.props;
        return (
            <ScrollView contentContainerStyle={{flex: 1, ...( screenLoader ? { alignItems: 'center', justifyContent: 'center'} : {} )}}
                        keyboardShouldPersistTaps={'handled'}
            >
                <ScrollView
                    style={styles.refreshContain}
                    refreshControl={<RefreshControl refreshing={screenLoader} onRefresh={this.onRefresh}/>}
                />
                {
                    QRCodeData ?
                        <View style={styles.container}>
                            <TouchableOpacity
                                onPress={this.handleClose}
                                style={styles.close}
                            >
                                <Text style={styles.text}>X</Text>
                            </TouchableOpacity>
                            <Image source={QRCodeData.src}
                                   style={{width: 200, height: 200}}/>
                        </View>
                        : null
                }
                <FlashMessage position="top"/>
                <ModalElement/>

                {this.props.children}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    QRCodeData: state.gameReducer.QRCodeData,
    game: state.gameReducer.game,
    screenLoader: state.loaderReducer.screenLoader,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperComponent)
