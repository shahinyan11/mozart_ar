import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container: {
        borderColor: "#e48146",
        borderWidth: 1,
        width: win.width / deviceSizes.width * 390,
        maxWidth: '100%',
        height: 50,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerOriented: {
        borderColor: "#e48146",
        borderWidth: 1,
        width: win.height / deviceSizes.width * 390,
        height: 50,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'BreeSerif/regular',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 20,
        letterSpacing: 2.5,
        textAlign: 'center'
    },
    textOriented: {
        fontFamily: 'BreeSerif/regular',
        color: "#ffffff",
        fontSize: win.height / deviceSizes.width * 20,
        letterSpacing: 2.5
    },

    square:{
        position: 'absolute',
        backgroundColor: "#e48146",
        width: 4,
        height: 4,
    }

});

export {styles}
