import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    scrollView: {
        // minHeight: win.height,
        flex:1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },

    topCol: {
        paddingTop: 10,
        alignItems: 'center',
        paddingHorizontal: win.width / deviceSizes.width * 12
    },
    topColOriented: {
        paddingTop: 10,
        alignItems: 'center',
        paddingHorizontal: win.height / deviceSizes.width * 12
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
    centerCol: {
        paddingHorizontal: win.width / deviceSizes.width * 20,
        flex: 1,
        paddingTop: 30,
        paddingBottom: 10,
    },

    bottomCol: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 40,
        alignItems: 'center'
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
    checkListText: {
        color: 'white',
        flex: 1
    },

    text: {
        color: 'white',
    },
    dot: {
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
    },
    titleContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: win.width / deviceSizes.width * 390,
    },
    titleContainOriented: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: win.height / deviceSizes.width * 390,
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
        marginLeft: win.width / deviceSizes.width * 20,
    },
    mainTitleOriented: {
        fontSize: win.height / deviceSizes.width * 40,
        marginLeft: win.height / deviceSizes.width * 20,
    },

    touchBack: {
        position: 'absolute',
        left: 0,
        paddingRight: 15
    },
    contentTitle: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#39abd7",
        fontSize: win.width / deviceSizes.width * 30,
        marginBottom: 10
    },
    contentTitleOriented: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#39abd7",
        fontSize: win.height / deviceSizes.width * 30,
        marginBottom: 10
    },

    centerText: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#39abd7",
        fontSize: win.width / deviceSizes.width * 20,
        width: win.width / deviceSizes.width * 365,
        marginBottom: 16
    },
    centerTextOriented: {
        fontFamily: 'CormorantGaramond/italic',
        textAlign: 'center',
        color: "#39abd7",
        fontSize: win.height / deviceSizes.width * 20,
        width: win.height / deviceSizes.width * 365,
        marginBottom: 16
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
    squareContent: {
        alignItems: 'center',
        justifyContent: 'center',
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

    checkTitle: {
        color: 'white',
        fontSize: win.width / deviceSizes.width * 16,
        marginBottom: 5
    },
    checkTitleOriented: {
        color: 'white',
        fontSize: win.height / deviceSizes.width * 16,
        marginBottom: 5
    },

    inputBox: {
        flexDirection:'row',
        marginBottom: 15,
        alignItems: "center",
        justifyContent: 'space-between'
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
