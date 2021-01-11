import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from "./styles";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";

class NavigateButton extends Component {


    render() {
        let {title, color, onPress, oriented, textColor, customStyles} = this.props;

        return (
            <TouchableOpacity onPress={onPress} style={{...styles.container , borderColor: color ? color : "#e48146", ...( customStyles || {} ) }}>
                <View style={{...styles.square, left: 0, top: 0, backgroundColor: color ? color : "#e48146"}}/>
                <View style={{...styles.square, right: 0, top: 0, backgroundColor: color ? color : "#e48146"}}/>
                <View style={{...styles.square, left: 0, bottom: 0, backgroundColor: color ? color : "#e48146"}}/>
                <View style={{...styles.square, right: 0, bottom: 0, backgroundColor: color ? color : "#e48146"}}/>

                <Text style={{ ...( !oriented ? styles.text : styles.textOriented ), color: textColor ? textColor : "#ffffff"} }>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigateButton)
