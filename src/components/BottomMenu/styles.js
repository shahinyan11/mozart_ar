import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({

    container: {
        width: win.width,
        position: 'absolute',
        bottom: 0
    },
    containerOriented: {
        width: win.height,
        position: 'absolute',
        bottom: 0
    },
    gradient:{
        backgroundColor: 'rgba(230, 230, 230, 0.7)',
        flex: 1
    },
    header: {
        height: 60,
        width: win.width,
        alignItems: 'center',
        paddingTop: 12,
    },
    headerOriented: {
        height: 60,
        width: win.height,
        alignItems: 'center',
        paddingTop: 12,
    },
    content: {
        width: win.width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    contentOriented: {
        width: win.height,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    text: {
        fontFamily: 'BreeSerif/regular',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 20,
        letterSpacing: 2.5
    },
    textOriented: {
        fontFamily: 'BreeSerif/regular',
        color: "#ffffff",
        fontSize: win.height / deviceSizes.width * 20,
        letterSpacing: 2.5
    },
});

export {styles}