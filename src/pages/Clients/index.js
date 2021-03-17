import React from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
  
const Client = ({name, phone}) => {
    const nav = useNavigation();
    function navigateToDetailsPage() {
        nav.navigate('Informações da Cliente');
    }
    return (
        <TouchableOpacity style={styles.client} onPress={ navigateToDetailsPage } > 
            <Text style={styles.clientProp}>Nome:</Text>
            <Text style={styles.clientValue}>{name}</Text>
            <Text style={styles.clientProp}>Telefone:</Text>
            <Text style={styles.clientValue}>{phone}</Text>
            <Text style={styles.clientProp}>Data do Aniversario:</Text>
            <Text style={styles.clientValue}>12/05/1985</Text>
        </TouchableOpacity>
    );
}

const Clients = () => {
    const nav = useNavigation();

    function navigateToAddPage() {
        nav.navigate('Adicionar Cliente');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Minhas Clientes</Text>
            <Text style={styles.headerText}>Você tem 0 Clientes cadastradas</Text>
            <FlatList
                style={styles.clientList}
                data={ [1,2,3,4,5,6,7,8] }
                keyExtractor={client => String(client)}
                showsVerticalScrollIndicator={false}
                renderItem={() => <Client name='Margarete' phone='54 992394641' /> }
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={ navigateToAddPage }
            >
                <Feather name='plus-circle' size={60} color='#ffff' />
            </TouchableOpacity>
        </View>
    );
}

export default Clients;