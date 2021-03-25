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
        width: "90%",
    },
    panel: {
        flex: 1,
        alignItems: 'center'
    }
});