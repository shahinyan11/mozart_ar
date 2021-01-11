import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data;

const styles = StyleSheet.create({
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
        // paddingTop: 10,
        alignItems: 'center',
        paddingHorizontal: win.width / deviceSizes.width * 12
    },
    topColOriented: {
        paddingTop: 10,
        alignItems: 'center',
        paddingHorizontal: win.height / deviceSizes.width * 12
    },
    bottomCol: {
        flex: 1,
        paddingTop: 35,
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingBottom: 30
    },
    description: {
        fontFamily: 'Montserrat/regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 14,
        paddingHorizontal: win.width / deviceSizes.width * 12
    },
    descriptionOriented: {
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
        fontSize: win.width / deviceSizes.width * 30,
    },
    titleOriented: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        marginBottom: 5,
        fontSize: win.height / deviceSizes.width * 30,
    },

    mainTitle: {
        fontSize: win.width / deviceSizes.width * 40,
        // marginLeft: win.width / deviceSizes.width * 20,
    },
    mainTitleOriented: {
        fontSize: win.height / deviceSizes.width * 40,
        // marginLeft: win.width / deviceSizes.width * 20,
    },
    touchBack: {
        position: 'absolute',
        left: 0,
        paddingRight: 15
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
        marginTop: 20,
        paddingTop: 15,
        flexDirection: 'row',
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 385,
        // opacity: 0.2
    },
    squareBackgroundOriented: {
        resizeMode: 'contain',
        marginTop: 25,
        paddingTop: 15,
        flexDirection: 'row',
        width: win.height / deviceSizes.width * 390,
        height: win.height / deviceSizes.width * 385,
        // opacity: 0.2
    },
    squareContent: {
        alignItems: 'center',
        flex: 1,
    },
    contentTitle: {
        fontFamily: 'CormorantGaramond/italic',
        color: "#39abd7",
        marginBottom: 5,
        fontSize: win.width / deviceSizes.width * 20,
        width: win.width / deviceSizes.width * 365
    },
    notesText: {
        color: "red",
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: win.width / deviceSizes.width * 22,
        width: win.width / deviceSizes.width * 365,
        backgroundColor: 'rgba(255,255,255, 0.8)'
    },
    contentTitleOriented: {
        fontFamily: 'CormorantGaramond/italic',
        color: "#39abd7",
        marginBottom: 10,
        fontSize: win.height / deviceSizes.width * 25,
        width: win.height / deviceSizes.width * 365
    },
    // centerText: {
    //     fontFamily: 'CormorantGaramond/italic',
    //     color: "#39abd7",
    //     marginBottom: 16,
    //     fontSize: win.width / deviceSizes.width * 20,
    //     width: win.width / deviceSizes.width * 365
    // },
    // centerTextOriented: {
    //     fontFamily: 'CormorantGaramond/italic',
    //     color: "#39abd7",
    //     marginBottom: 16,
    //     fontSize: win.height / deviceSizes.width * 20,
    //     width: win.height / deviceSizes.width * 365
    // },

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
    inputBox: {
        width: win.width / deviceSizes.width * 390,
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
    dateBox:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 40,
    },
    dateText: {
        paddingVertical: 5,
        marginRight: 10,
        borderColor: 'gray',
        borderWidth: 1 ,
        backgroundColor: 'white',
        textAlign: 'center',

    },

});

export {styles}
