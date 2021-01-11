import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container: {
        borderColor: "#e48146",
        borderWidth: 1,
        width: win.width / deviceSizes.width * 122,
        height: win.width / deviceSizes.width * 96,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        fontFamily: 'BreeSerif/regular',
        color: "#000000",
        fontSize: win.width / deviceSizes.width * 14,
        textAlign: 'center',
    },

    square:{
        position: 'absolute',
        backgroundColor: "#e48146",
        width: 4,
        height: 4,
    },


});

export {styles}