import {StyleSheet, Dimensions} from 'react-native'
import data from "../../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({

    modalContain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red'
    },
    modalView: {
        margin: win.width / deviceSizes.width * 20,
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 387,
        padding: win.width / deviceSizes.width * 35,
        paddingBottom: win.width / deviceSizes.width * 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative'
    },
    modalElement: {
        width: win.width / deviceSizes.width * 100,
        height: win.width / deviceSizes.width * 130,
        resizeMode: 'contain'
    },
    modalText: {
        textAlign: 'center',
        fontFamily: 'CormorantGaramond/bold',
        fontSize: win.width / deviceSizes.width * 32
    },

    count: {
        backgroundColor: '#39abd7',
        width: win.width / deviceSizes.width * 35,
        height: win.width / deviceSizes.width * 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: win.width / deviceSizes.width * 35,
        marginRight: win.width / deviceSizes.width * 10,
    },
    blue: {
        color: '#39abd7',
    },
    element: {
        width: win.width / deviceSizes.width * 189,
        height: win.width / deviceSizes.width * 188,
        marginBottom: win.width / deviceSizes.width * 12
    },

    modalClose: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 34,
        height: 34,
        top: 19,
        right: 19
    },
    closeImage: {
        width: 24,
        height: 24,


    }
});

export {styles}
