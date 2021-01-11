import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native'
import {styles} from "./styles";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import i18n from "../../services/i18next"

class SquareNavigateButton extends Component {


    render() {
        let {data, onPress, textStyle, color} = this.props;
        const{text, icon} = data;
        return (
            <TouchableOpacity onPress={onPress} style={{...styles.container, borderColor: color ? color : "#e48146"}}>
                <View style={{...styles.square, left: 0, top: 0, backgroundColor: color ? color : "#e48146"}}/>
                <View style={{...styles.square, right: 0, top: 0, backgroundColor: color ? color : "#e48146"}}/>
                <View style={{...styles.square, left: 0, bottom: 0, backgroundColor: color ? color : "#e48146"}}/>
                <View style={{...styles.square, right: 0, bottom: 0, backgroundColor: color ? color : "#e48146"}}/>

                <Image source={icon} style={{height:44, width:43}}/>

                <Text style={ {...styles.text, ...( textStyle || {} )} }>
                    {i18n.t(text)}
                </Text>
            </TouchableOpacity>
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
)(SquareNavigateButton)
