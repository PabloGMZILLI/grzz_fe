import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 2,
    },
    clientContainer: {
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 10
    },
    title: {
        fontSize: 30,
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 15,
        marginBottom: 10,
        color: '#ec85ff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    lastTime : {
        fontSize: 14,
        marginBottom: 5,
        color: '#737380'
    },
    clientProp: {
        fontSize: 18,
        color: '#41414d',
        fontWeight: 'bold'
    },
    clientValue: {
        fontSize: 18,
        marginBottom: 5,
        color: '#737380'
    },
    clientPropHistoric: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    clientHistoric: {
        fontSize: 15,
        marginBottom: 5,
        color: '#737380',
        textAlign: "center"
        
    },
    // --------------------------------- Historico de Agendamentos ----------------------------------------
    clientHistoricContainer: {
        paddingTop: 30,
    },
    containerTest: {
        padding: 12,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fffcfe'
    },
    clientFirsLineProp: {
        fontSize: 16,
        color: '#41414d',
        fontWeight: 'bold',

    },
    clientSecondLineProp: {
        fontSize: 16,
        color: '#41414d',
        fontWeight: 'bold',
    },
    clientFirsLineValue: {
        fontSize: 16,
        color: '#737380'
    },
    clientSecondLineValue: {
        fontSize: 16,
        color: '#737380'
    },
    // ----------------------------------------------------------------------------------------
    editButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    }
})