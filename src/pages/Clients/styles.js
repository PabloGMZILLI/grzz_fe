import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 2,
    },
    header: {
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    headerText: {
        paddingTop: 5,
        fontSize: 12,
        color: '#737380',
        textAlign: 'right'
    },
    title: {
        fontSize: 25,
        paddingTop: Constants.statusBarHeight + 5,
        marginBottom: 10,
        color: '#ec85ff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description : {
        fontSize: 12,
        lineHeight: 15,
        color: '#737380'
    },
    clientList: {
        marginTop: 10
    },
    client: {
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 10
    },
    clientProp: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    clientValue: {
        fontSize: 15,
        marginBottom: 5,
        color: '#737380'
    },
    editButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: Constants.statusBarHeight + 20,
        right: 15,
        backgroundColor: '#ec85ff',
        borderRadius: 50
    }

})