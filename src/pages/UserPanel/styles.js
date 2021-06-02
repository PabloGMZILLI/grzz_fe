import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    listItem: {
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10,
        display: "flex",
        borderRadius: 10,
    },
    itemContent: {
        fontSize: 14
    },
    list: {
        width: "100%",
        height: "100%"
    },
    panel: {
        flex: 1,
        alignItems: 'center'
    },
    lottie: {
        width: 100,
        height: 100
    },
    loader: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    }
});