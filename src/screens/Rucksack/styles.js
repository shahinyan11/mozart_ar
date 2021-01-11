import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    scrollView: {
        minHeight: win.height,
    },
    scrollViewOriented: {
        minHeight: win.width,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(57, 171, 215, 0.5)',
        justifyContent: 'space-between',
        paddingHorizontal: win.width / deviceSizes.width * 12
    },
    containerOriented: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(57, 171, 215, 0.5)',
        justifyContent: 'space-between',
        paddingHorizontal: win.height / deviceSizes.width * 12
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    col_1: {
        backgroundColor: 'rgba(230, 230, 230, 0.7)',
        paddingVertical: 10,
        alignItems: 'center',
        // position: 'absolute',
        zIndex: 100,
        top: 0,
        width: win.width,
        paddingHorizontal: win.width / deviceSizes.width * 25,
    },
    col_1Oriented: {
        backgroundColor: 'rgba(230, 230, 230, 0.7)',
        paddingVertical: 16,
        alignItems: 'center',
        // position: 'absolute',
        zIndex: 100,
        top: 0,
        width: win.height,
        paddingHorizontal: win.height / deviceSizes.width * 25,
    },
    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'center',
        width: win.width / deviceSizes.width * 390
    },
    titleContainOriented: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'center',
        width: win.height / deviceSizes.width * 390
    },
    mainTitle: {
        fontFamily: 'CormorantGaramond/boldItalic',
        textAlign: 'center',
        color: "white",
        fontSize: win.width / deviceSizes.width * 48,
    },
    pageIcon: {
        width: win.width / deviceSizes.width * 37,
        height: win.width / deviceSizes.width * 33,
        marginRight: win.width / deviceSizes.width * 10,

    },
    touchBack: {
        position: 'absolute',
        left: 0,
        paddingRight: 15
    },
    iconContain: {
        alignItems: 'center',
        width: win.width / deviceSizes.width * 180
    },
    iconContainOriented: {
        alignItems: 'center',
        width: win.height / deviceSizes.width * 180
    },

    elements: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 15,
    },
    backgroundSquare: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    item: {
        width: win.width / deviceSizes.width * 180,
        height: win.width / deviceSizes.width * 180,
        resizeMode: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    greenBorder: {
        borderWidth: 5,
        borderColor: "rgba(25, 128, 25, 0.5)",
    },
    dotImageOriented: {
        width: win.width / deviceSizes.width * 189,
        height: win.width / deviceSizes.width * 188,
        margin: 10,
        marginBottom: 12
    },

    text: {
        fontFamily: 'Montserrat/regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: 14,
        marginTop: 15
    },
    col_3: {
        height: 20,
        width: win.width,
    },
    col_3Oriented: {
        height: 20,
        width: win.height,
    },
    bottomText: {
        fontFamily: 'CormorantGaramond/boldItalic',
        textAlign: 'center',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: win.width / deviceSizes.width * 28
    },
    bottomTextOriented: {
        fontFamily: 'CormorantGaramond/boldItalic',
        textAlign: 'center',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: win.height / deviceSizes.width * 28
    }
});

export {styles}
