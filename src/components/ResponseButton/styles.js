import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: win.width / deviceSizes.width * 390,
        minHeight: 50,
        marginBottom: 15,
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerOriented: {
        borderWidth: 1,
        width: win.height / deviceSizes.width * 390,
        minHeight: 50,
        marginBottom: 15,
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'BreeSerif/regular',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 20,
        letterSpacing: 2.5
    },
    titleOriented: {
        fontFamily: 'BreeSerif/regular',
        color: "#ffffff",
        fontSize: win.height / deviceSizes.width * 20,
        letterSpacing: 2.5
    },
    titleActive:{
        fontFamily: 'BreeSerif/regular',
        color: '#ffffff',
        fontSize: win.width / deviceSizes.width * 14,
        letterSpacing: 1.75
    },
    titleActiveOriented:{
        fontFamily: 'BreeSerif/regular',
        color: '#ffffff',
        fontSize: win.height / deviceSizes.width * 14,
        letterSpacing: 1.75
    },
    text: {
        // fontFamily: 'BreeSerif/regular',
        color: "#ffffff",
        textAlign: 'center',
        lineHeight: 22
        // fontSize: win.width / deviceSizes.width * 20,
        // letterSpacing: 2.5
    },

    square:{
        position: 'absolute',
        width: 4,
        height: 4,
    },
    closeIcon:{
        position: 'absolute',
        right: 10,
        top: 10
    },
    imagesContent:{},
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    image: {
        height: 100,
        width: 80,
    }

});

export {styles}
