import {Alert, Dimensions} from "react-native";

export function errorAlert(title, message){
    Alert.alert(
        title,
        message,
        // [
        //     { text: "Cancel", onPress: () => {}, style: "cancel" },
        //     { text: "OK", onPress: () => {} }
        // ],
        // { cancelable: false }

    );
}


export function isOriented () {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};