import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#b8e0de',
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 2,
        height: '100%'
    },
    title: {
        fontSize: 40,
        paddingTop: Constants.statusBarHeight + 20,
        marginBottom: 10,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resultsTexts: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
    },
    textContainer: {
        marginTop: 10,
        padding:10,
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
    },
    editButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    button: {
        marginTop: 30,
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: '#EF4358',
        borderRadius:15,
        padding: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.21,
        shadowRadius: 10,
        elevation: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
    },

})