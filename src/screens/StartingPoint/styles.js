import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    scrollView: {
        // minHeight: win.height,
        backgroundColor: '#241920'
    },
    scrollViewOriented: {
        // minHeight: win.width,
        backgroundColor: '#241920'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        zIndex: 100,
    },

    topCol: {
        paddingTop: 10,
        alignItems: 'center',
        paddingHorizontal: win.width / deviceSizes.width * 12,
    },
    topColOriented: {
        paddingTop: 10,
        alignItems: 'center',
        paddingHorizontal: win.height / deviceSizes.width * 12,
    },

    description:{
        fontFamily: 'Montserrat/regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 14,
        paddingHorizontal: win.width / deviceSizes.width * 12
    },
    descriptionOriented:{
        fontFamily: 'Montserrat/regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: win.height / deviceSizes.width * 14,
        paddingHorizontal: win.height / deviceSizes.width * 12
    },
    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: win.width / deviceSizes.width * 390,
        marginTop: 10
    },
    titleContainOriented: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: win.height / deviceSizes.width * 390,
        marginTop: 10
    },


    mainTitle: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 40,
        marginLeft: win.width / deviceSizes.width * 20,
        marginBottom: 5,
    },
    mainTitleOriented: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: win.height / deviceSizes.width * 40,
        marginLeft: win.height / deviceSizes.width * 20,
        marginBottom: 5,
    },
    touchBack:{
        position:'absolute',
        left: 0,
        paddingRight: 15
    },
    centerText: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#39abd7",
        fontSize: win.width / deviceSizes.width * 32,
        width: win.width / deviceSizes.width * 365,
        marginBottom: 16
    },
    centerTextOriented: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#39abd7",
        fontSize: win.height / deviceSizes.width * 32,
        width: win.height / deviceSizes.width * 365,
        marginBottom: 16
    },

    squareContain: {
        zIndex: 100,
        alignItems: 'center',
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 390,
    },
    squareContainOriented: {
        zIndex: 100,
        alignItems: 'center',
        width: win.height / deviceSizes.width * 390,
        height: win.height / deviceSizes.width * 390,
    },

    squareBackground: {
        resizeMode: 'contain',
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 385,
        marginTop: 25,
        paddingTop: 15,
        flexDirection: 'row',
        // opacity: 0.2
    },
    squareBackgroundOriented: {
        resizeMode: 'contain',
        width: win.height / deviceSizes.width * 390,
        height: win.height / deviceSizes.width * 385,
        marginTop: 25,
        paddingTop: 15,
        flexDirection: 'row',
        // opacity: 0.2
    },
    squareContent:{
        marginTop: 38,
        alignItems: 'center',
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    bottomCol: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 40
    },
    label: {
        color: 'white',
    },
    inputBox: {
        width: win.width / deviceSizes.width * 390,
        flexDirection:'row',
        marginBottom: 40,
        alignItems: "center",
    },
    inputBoxOriented: {
        width: win.height / deviceSizes.width * 390,
        flexDirection:'row',
        marginBottom: 40,
        alignItems: "center",
    },

    input: {
        paddingVertical: 2,
        marginLeft: 10,
        height: 30,
        width: win.width / deviceSizes.width * 220,
        borderColor: 'gray',
        borderWidth: 1 ,
        backgroundColor: 'white'
    },
    inputOriented: {
        paddingVertical: 2,
        marginLeft: 10,
        height: 30,
        width: win.height / deviceSizes.width * 220,
        borderColor: 'gray',
        borderWidth: 1 ,
        backgroundColor: 'white'
    }

});

export {styles}