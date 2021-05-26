import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#b8e0de',
    },
    title: {
        fontSize: 45,
        marginBottom: 5,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerText: {
        paddingTop: 2,
        fontSize: 14,
        color: '#000000',
        textAlign: 'center',
    },
    header: {
        padding: 10,
        marginHorizontal: -50,
        marginTop: Constants.statusBarHeight,
       // backgroundColor: 'white',
        borderRadius: 15,
    },
    description : {
        fontSize: 12,
        lineHeight: 15,
        color: '#737380'
    },
    quizContainer: {
        position: 'relative',
        marginTop: 10,
        marginBottom: 80,
        padding: 10,
        //backgroundColor: '#cce0df',
        borderRadius: 15,
    },
    emptyMessage: {
        position: 'relative',
        marginTop: 10,
        marginBottom: 80,
        padding: 10,
        textAlign: 'center'
    },
    quiz: {
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
    quizProp: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    editButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
    },
    howAnswer: {
        position: 'relatiave',
        bottom: 60,
        width: '100%',
        backgroundColor: '#EF4358',
        borderRadius:15,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.21,
        shadowRadius: 10,
        elevation: 8,
    }

})