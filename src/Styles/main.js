import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2,
        elevation: 4,
        marginBottom: 10
    },
    whiteButton: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#FFF',
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
    },
    redButton: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#EF4358',
        borderRadius:15,
        padding: 10,
        shadowColor: "#000",
        marginVertical: 10,
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