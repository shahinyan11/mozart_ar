import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        width: win.width / deviceSizes.width * 390,
    },
    containerOriented:{
        marginTop: 5,
        flexDirection: 'row',
        alignItems:'center',
        width: win.height / deviceSizes.width * 390,
    },
    smallProgress: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: win.width / deviceSizes.width * 280,
    },
    bigProgress: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: win.width / deviceSizes.width * 340,
    },
    countDown:{
        textAlign: 'center',
        color: 'white',
        width: 60,
        marginLeft: 5,
        backgroundColor:'#39abd7'
    },

    flag:{
        position: 'absolute',
        right: -5,
        width: 18,
        height: 16
    },
    countDownContain:{
        alignItems: 'center',
        justifyContent: 'center',

    }

});

export {styles}
