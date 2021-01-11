import React, {Component} from 'react';
import {connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableHighlight,
    Modal
} from 'react-native'

import {HIDE_MODAL_ELEMENT} from "../../../actionsTypes";
import {makeAction} from "../../../makeAction";
import i18n from "../../../services/i18next";
import {styles} from "./styles";

class ModalElement extends Component {


    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidUpdate(prevProps){
        const {count} = this.props.modalElement;
        if(count !== prevProps.modalElement.count){
            const rightCount = count || 4 - this.props.game?.collected_elements.length;
            this.setState({
                count: rightCount
            })
        }

    }

    hideModalElement = () => {
        this.props.makeAction(HIDE_MODAL_ELEMENT)
    };

    render() {
        const {count} = this.state;
        const {modalElement} = this.props;
        const collected_elements = this.props.game?.collected_elements;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalElement.visibility}
            >
                <LinearGradient style={styles.modalContain} colors={["#241920", "rgba(36, 25, 32, 0.75)"]}>
                    <ImageBackground style={styles.modalView} source={require('../../../assets/images/mask.png')}>
                        <Image style={styles.modalElement} source={modalElement.element?.srcModal}/>
                        <Text style={styles.modalText}>
                            {i18n.t(`modals.take_element_front`)}
                            <Text style={[styles.modalText, styles.blue]}>
                                {i18n.t(`words.${modalElement.element?.name}`)}
                            </Text>
                            {i18n.t(`modals.take_element_end`)}
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <Text style={styles.count}> {count} </Text>
                            <Text style={[styles.modalText, styles.blue]}>
                                {i18n.t('modals.remained')}
                            </Text>
                        </View>

                        <TouchableHighlight style={styles.modalClose} onPress={this.hideModalElement}>
                            <Image style={styles.closeImage} source={require('../../../assets/images/close.png')}/>
                        </TouchableHighlight>

                    </ImageBackground>
                </LinearGradient>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    modalElement: state.modalReducer.modalElement,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalElement)
