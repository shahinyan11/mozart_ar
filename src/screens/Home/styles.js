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
        resizeMode: 'contain',
    },
    settingsButton: {
        position: 'absolute',
        right: 5,
        top: 5,
        zIndex: 100000
    },
    topCol:{
        // paddingTop: 10,
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    bottomCol:{
        flex:1,
        paddingTop: 52,
        alignItems: 'center',
        paddingBottom: 22
    },
    text: {
        color: "grey",
        fontSize: 30,

    },
    mainTitle: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        marginTop: 10,
        marginBottom: 5,
        fontSize: win.width / deviceSizes.width * 40
    },
    mainTitleOriented:{
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#ffffff",
        marginTop: 10,
        marginBottom: 5,
        fontSize: win.height / deviceSizes.width * 40,
    },
    title: {
        fontFamily: 'Montserrat/regular',
        textAlign: 'center',
        color: "#ffffff",
        fontSize: 15,
    },
    squareContain:{
        zIndex: 100,
        alignItems: 'center',
        width: win.width / deviceSizes.width * 390,
        height: win.width / deviceSizes.width * 390,
    },
    squareContainOriented:{
        zIndex: 100,
        alignItems: 'center',
        width: win.height / deviceSizes.width * 390,
        height: win.height / deviceSizes.width * 390,
    },

    squareBackground: {
        resizeMode: 'contain',
        marginTop: 25,
        paddingTop: 15,
        flexDirection: 'row',
        // opacity: 0.2
        height: win.width / deviceSizes.width * 385,
        width: win.width / deviceSizes.width * 390,
    },
    squareBackgroundOriented: {
        resizeMode: 'contain',
        marginTop: 25,
        paddingTop: 15,
        flexDirection: 'row',
        // opacity: 0.2
        height: win.height / deviceSizes.width * 385,
        width: win.height / deviceSizes.width * 390,
    },
    imgMozartContainer: {
        flex: 0.65,
        justifyContent: 'flex-end',

    },
    imgMozart: {
        resizeMode: 'contain',
        position: 'absolute',
        left: -65,
        bottom: 0,
        height: win.width / deviceSizes.width * 350,
        width: win.width / deviceSizes.width * 295
    },
    imgMozartOriented: {
        resizeMode: 'contain',
        position: 'absolute',
        left: -65,
        bottom: 0,
        height: win.height / deviceSizes.width * 350,
        width: win.height / deviceSizes.width * 295,
    },

    titlesContainer:{
        position: 'absolute',
        paddingTop: 10,
        right: 5,
        flex: 0.35,
        height:'100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagTexts:{
        height: 32,
        margin:5
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
