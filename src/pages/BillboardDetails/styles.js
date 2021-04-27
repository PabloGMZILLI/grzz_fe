import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#b8e0de',
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 20,
        height: '100%'
    },
    avatar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: 110,
        padding: 10,
        borderRadius: 15
    },
    icon: {
        height: 30,
        padding: 10,
        width: '50%'
    },
    icons: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'center',
    }
});