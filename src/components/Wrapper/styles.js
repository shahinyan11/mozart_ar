import {StyleSheet, Dimensions} from 'react-native'
import data from "../../services/data";

const win = Dimensions.get('window');
const {deviceSizes} = data

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1000,
        backgroundColor:  'rgba(10, 10, 10, 0.95)',
        justifyContent:'center',
        alignItems: 'center',
        width: win.width ,
        height: win.height,
        paddingHorizontal: 15
    },
    refreshContain:{
        position: 'absolute',
        zIndex: 1000000000,
        top: 0,
        alignSelf: 'center',
        width: win.width / deviceSizes.width * 390 - 50,
        minHeight: 40,
    },
    image:{
        width: win.width / deviceSizes.width * 380,
        height: win.width / deviceSizes.width * 380
    },
    close: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    text: {
      color: 'white',
      fontSize: win.width / deviceSizes.width * 35
    }
});

export {styles}
