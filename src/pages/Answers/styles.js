import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    screenContainer: {
        height: '100%'
    },
        header: {
        padding: 10,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#EF4358',
        flexDirection: "row",
        alignContent: 'space-between',
        width: '100%'

    },
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
    answersContainer: {
        position: 'relative',
        marginTop: 15,
        padding: 10,
    },
    timer: {
        marginTop: 5,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        maxWidth: '60%',
        marginRight: '10%',
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    timerTxt: {
        fontSize: 17,
        color: 'black',
    },
    timerNumbers: {
        color: 'yellow'
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonNext: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        maxWidth: '30%',
        backgroundColor: 'white',
        borderRadius: 10,
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
        marginTop: 10,
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