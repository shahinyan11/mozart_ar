import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    scrollView: {
        minHeight: win.height,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: win.width / deviceSizes.width * 390,
        marginTop: 10
    },
    touchBack: {
        position: 'absolute',
        left: 0,
        paddingRight: 15
    },
    shadow: {
        shadowColor: 'white',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
    settingsButton: {
        position: 'absolute',
        right: 5,
        top: 5,
        zIndex: 100000
    },
    topCol: {
        paddingTop: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        flex: 1
    },
    bottomCol: {
        flex: 1,
        paddingTop: 52,
        alignItems: 'center',
        paddingBottom: 22
    },
    text: {
        color: "white",
        fontSize: 17
    },
    mainTitle: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        marginTop: 10,
        marginBottom: 5,
        fontSize: win.width / deviceSizes.width * 40
    },

    content: {
        paddingTop: 20,
        flex: 1
    },
    inputBox: {
        marginBottom: 20
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#39abd7',
        fontSize: 25
    },
    pickerBox: {
        borderWidth: 1,
        minHeight: 70,
        marginBottom: 20,
        paddingLeft: 20,
        // paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: "#39abd7",
        flexDirection: 'row'
    },
    killSession:{
        borderWidth: 1,
        minHeight: 70,
        marginBottom: 20,
        paddingLeft: 20,
        // paddingVertical: 10,
        alignItems: 'center',
        borderColor: "#39abd7",
        flexDirection: 'row'

    },
    arrowDown: {
        top: '120%',
        right: 20
    },
    square: {
        position: 'absolute',
        width: 4,
        height: 4,
        backgroundColor: "#39abd7"
    },

    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },

});

export {styles}
