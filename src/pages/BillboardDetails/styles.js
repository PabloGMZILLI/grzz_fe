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
        borderRadius: 15,
        marginBottom:20
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
        padding: 10
    },
    questionsContainer: {
        position: 'relative',
        marginTop: 15,
        padding: 10,
    },
    question: {
        flex: 1,
        flexDirection: "column",
        alignItems: "left",
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2,
        elevation: 4,
    },
});