import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data;

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
    questionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    colors: {
        height: 25,
        width: 25,
        marginHorizontal: 7,
        marginVertical: 5,
    },
    pickerView: {
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 10
    },

    picker: {
        marginLeft: 20,
        height: 40,
        width: win.width / deviceSizes.width * 100,
        // borderColor: 'black',
        // borderWidth: 2 ,
    },
    pickerItem: {
        backgroundColor: 'red'
    },
    hints: {
        fontFamily: 'CormorantGaramond/italic',
        color: "#39abd7",
        marginBottom: 5,
        fontSize: win.width / deviceSizes.width * 15,
        width: win.width / deviceSizes.width * 365,
        marginVertical: 2,
    },

    question: {
        fontFamily: 'CormorantGaramond/italic',
        color: "#39abd7",
        marginBottom: 5,
        fontSize: win.width / deviceSizes.width * 18,
        // width: win.width / deviceSizes.width * 365
        // flex: 0.6
    },

});

export {styles}
