import { StyleSheet } from "react-native";

export default StyleSheet.create({
    icon: {
        flex: 1,
        height: 45,
        justifyContent: 'center',
        width: '50%'
    },
    icons: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'center',
        padding: 10,
    },
    questionsContainer: {
        position: 'relative',
        marginTop: 15,
        padding: 10,
    },
    question: {
        flex: 1,
        flexDirection: "column",
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