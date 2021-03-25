import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#b8e0de',
    },
    headerText: {
        paddingTop: 2,
        fontSize: 14,
        color: '#000000',
        textAlign: 'center'
    },
    header: {
        padding: 10,
        marginHorizontal: -50,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#EF4358',
        marginBottom: 15,
        flexDirection: "row",
        alignContent: 'space-between'

    },
    answersContainer: {
        position: 'relative',
        marginTop: 15,
        padding: 10,
    },
    time: {
        marginTop:10,
        paddingTop: 5,
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        marginLeft: 50
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonNext: {
        marginTop:10,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        marginLeft: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2,
    },
    question: {
        fontSize: 15,
        textAlign: 'justify',
    },
    answer: {
        flexDirection: "row",
        alignItems: "center",
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
    answerLabel: {
        color: '#000000',
        marginRight: 6, // Para que não fique colado ao checkbox
    },
    CheckBox: { 
        marginLeft: 6 // Para que não fique colado ao checkbox
    },
    questionContainer: {
        padding:10,
        width: '100%',
        height: '35%',
        backgroundColor: 'rgba(240, 240, 240, 0.5)',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2,
    }

})