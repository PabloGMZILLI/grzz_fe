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
    info: {
        fontSize: 15,
        color: '#000000',
        textAlign: 'center',
    },
    infoResponse: {
        fontSize: 15,
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonsContainer: {
        paddingVertical: 20,
        position: 'relative',
        marginVertical: '30%'
    },
    editButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    button: {
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