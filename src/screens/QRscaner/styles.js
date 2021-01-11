import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data
import {backgroundColors} from "../../assets/styles";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: win.width / deviceSizes.width * 350,
        padding: 35,
        paddingBottom: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        position: 'absolute',
        bottom: 15,
        right: 20,
        backgroundColor: "#2196F3",
        borderRadius: 5,
        width: 80,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    element: {
        width: win.width / deviceSizes.width * 189,
        height: win.width / deviceSizes.width * 188,
        marginBottom: 12
    },
    scrollView: {
        minHeight: win.height,
    },
    scrollViewOriented: {
        minHeight: win.width,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    topCol: {
        flex:1,
        alignItems: 'center',
        padding: win.width / deviceSizes.width * 2
    },
    topColOriented: {
        paddingTop: 10,
        alignItems: 'center',
        padding: win.height / deviceSizes.width * 5
    },
    bottomCol: {
        paddingTop: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingBottom: 20
    },
    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: win.width / deviceSizes.width * 390
    },
    titleContainOriented: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: win.height / deviceSizes.width * 390
    },
    title: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        marginBottom: 5,
        fontSize: win.width / deviceSizes.width * 40,
    },
    titleOriented: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        marginBottom: 5,
        fontSize: win.height / deviceSizes.width * 40,
    },
    touchBack: {
        position: 'absolute',
        left: 0,
        paddingRight: 15
    },
    squareContain: {
        zIndex: 100,
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '100%',

    },
    squareContainOriented: {
        zIndex: 100,
        alignItems: 'center',
        width: win.height / deviceSizes.width * 390,
        height: win.height / deviceSizes.width * 390,
    },
    squareBackground: {
        resizeMode: 'contain',
        position: 'relative',
        marginTop: 25,
        padding: 10,
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 385,
        // opacity: 0.2
    },
    RNCamera : {
        width: '100%',
        height: '100%',
    },
    squareBackgroundOriented: {
        resizeMode: 'contain',
        marginTop: 25,
        padding: 10,
        flexDirection: 'row',
        width: win.height / deviceSizes.width * 390,
        height: win.height / deviceSizes.width * 385,
        // opacity: 0.2
    },
    squareContent: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    contentTitle: {
        fontFamily: 'CormorantGaramond/italic',
        color: "#39abd7",
        marginBottom: 10,
        fontSize: win.width / deviceSizes.width * 25,
        width: win.width / deviceSizes.width * 365
    },
    contentTitleOriented: {
        fontFamily: 'CormorantGaramond/italic',
        color: "#39abd7",
        marginBottom: 10,
        fontSize: win.height / deviceSizes.width * 25,
        width: win.height / deviceSizes.width * 365
    },
    centerText: {
        fontFamily: 'CormorantGaramond/italic',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: win.width / deviceSizes.width * 20,
        width: win.width / deviceSizes.width * 365
    },
    centerTextOriented: {
        fontFamily: 'CormorantGaramond/italic',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: win.height / deviceSizes.width * 20,
        width: win.height / deviceSizes.width * 365
    },
    bottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: win.width,
    },
    bottomContentOriented: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: win.height,
    },
});

export {styles}
