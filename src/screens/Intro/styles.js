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
    backgroundImage: {
        flex: 1,
    },
    col: {

        paddingHorizontal: win.width / deviceSizes.width * 25,
    },
    colOriented: {
        paddingHorizontal: win.height / deviceSizes.width * 25,
    },
    col_1: {
        paddingHorizontal: win.width / deviceSizes.width * 12,
        alignItems: 'center'
    },
    col_1Oriented: {
        alignItems: 'center',
        paddingHorizontal: win.height / deviceSizes.width * 12
    },
    progressContain: {
        flex: 1,
        // height: 140,
        width: win.width,
        // paddingVertical: 10,
        alignItems: 'center'
    },
    progressContainOriented: {
        flex: 1,
        // height: 140,
        width: win.height,
        paddingVertical: 16,
        alignItems: 'center'
    },
    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: win.width / deviceSizes.width * 390
    },
    titleContainOriented: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: win.height / deviceSizes.width * 390
    },
    touchBack:{
        position:'absolute',
        top: 21,
        left: 0,
        paddingRight: 15
    },
    col_2: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        paddingBottom: 40
    },
    col_3: {
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 24
        // backgroundColor: 'red'
    },
    col_4: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 34,
        paddingBottom: 37,
        paddingHorizontal: 25,
    },
    col_5: {
        flex: 1,
        paddingTop: 32,
        alignItems: 'center',
        paddingBottom: 43
    },
    iconContain: {
        alignItems: 'center',
        width: win.width / deviceSizes.width * 180
    },
    iconContainOriented: {
        alignItems: 'center',
        width: win.height / deviceSizes.width * 180
    },
    mainTitle: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        marginTop: 12,
        marginBottom: 5,
        fontSize: win.width / deviceSizes.width * 45
    },
    mainTitleOriented: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        marginTop: 12,
        marginBottom: 5,
        fontSize: win.height / deviceSizes.width * 45
    },
    text: {
        fontFamily: 'Montserrat/regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: 14,
        marginTop: 15
    },

    nameContainer: {
        borderTopWidth: 1,
        borderColor: 'white',
        paddingTop: 8,
        marginTop: 8,
        marginBottom: -15,
        width: win.width / deviceSizes.width * 350
    },
    nameContainerOriented: {
        borderTopWidth: 1,
        borderColor: 'white',
        paddingTop: 8,
        marginTop: 8,
        marginBottom: -15,
        width: win.height / deviceSizes.width * 350
    },
    name: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: win.width / deviceSizes.width * 25,
    },
    nameOriented: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: win.height / deviceSizes.width * 25,
    },
    squareContain: {
        // flex:1,
        zIndex: 100,
        alignItems: 'center',
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 390,
    },
    squareContainOriented: {
        // flex:1,
        zIndex: 100,
        alignItems: 'center',
        width: win.height / deviceSizes.width * 390,
        height: win.height / deviceSizes.width * 390,
    },

    squareBackground: {
        resizeMode: 'contain',
        marginTop: 30,
        paddingTop: 15,
        // flexDirection: 'row',
        // opacity: 0.2
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 385,
    },
    squareBackgroundOriented: {
        resizeMode: 'contain',
        marginTop: 30,
        paddingTop: 15,
        // flexDirection: 'row',
        // opacity: 0.2
        width: win.height / deviceSizes.width * 390,
        height: win.height / deviceSizes.width * 385,
    },
    imgMozartContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imgMozart: {
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        width: win.width / deviceSizes.width * 295,
        height: win.width / deviceSizes.width * 350,
    },
    imgMozartOriented: {
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        width: win.height / deviceSizes.width * 295,
        height: win.height / deviceSizes.width * 350,
    },
    bottomText: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: win.width / deviceSizes.width * 28
    },
    bottomTextOriented: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#39abd7",
        marginBottom: 16,
        fontSize: win.height / deviceSizes.width * 28
    },
    imageSing: {
        width: win.width / deviceSizes.width * 210,
        height: win.width / deviceSizes.width * 210,
    },
    imageSingOriented: {
        width: win.height / deviceSizes.width * 210,
        height: win.height / deviceSizes.width * 210,
    }

});

export {styles}
