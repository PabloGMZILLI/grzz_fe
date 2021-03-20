import React from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import styles from './styles';
// esse detalhe da cliente, fornece um historico de agendamento da cliente e caso necessario é possivel editar as infos de cadastro da cliente.
const historicInfo = ( el ) => {
    return (
        <View style={ styles.clientHistoricContainer }>
            <View style={ styles.containerTest }>
                <Text style={styles.clientFirsLineProp}>Dia: </Text>
                <Text style={styles.clientFirsLineValue}>{el.item.date}</Text>
                <Text style={styles.clientSecondLineProp}>Hora: </Text>
                <Text style={styles.clientSecondLineValue}>{el.item.hour}</Text>
            </View>
            <View style={ styles.containerTest }>
                <Text style={styles.clientFirsLineProp}>Serviço: </Text>
                <Text style={styles.clientFirsLineValue}>{el.item.service}</Text>
                <Text style={styles.clientSecondLineProp}>Valor: </Text>
                <Text style={styles.clientSecondLineValue}>{el.item.price}</Text>
            </View>
        </View>
    )
}

const DetalhesQuestionario = () => {
    const nav = useNavigation();
    const schedules =
        [
            {
                "date": "14/10/2020",
                "hour": "14:00",
                "service": "mao",
                "price": "R$ 20,00"
            },
            {
                "date": "05/10/2020",
                "hour": "15:00",
                "service": "pe",
                "price": "R$ 25,00"
            },
            {
                "date": "24/09/2020",
                "hour": "10:00",
                "service": "mao e pe",
                "price": "R$ 45,00"
            },
            {
                "date": "30/09/2021",
                "hour": "10:00",
                "service": "mao e pe",
                "price": "R$ 45,00"
            },
            {
                "date": "30/10/2021",
                "hour": "08:00",
                "service": "mao e pe",
                "price": "R$ 45,00"
            },
            {
                "date": "30/10/2040",
                "hour": "08:00",
                "service": "mao e pe",
                "price": "R$ 45,00"
            },
            {
                "date": "30/10/3030",
                "hour": "08:00",
                "service": "mao e pe",
                "price": "R$ 45,00"
            }
        ];
              
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Questionario de efetivação</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.info}>Total de perguntas do questionário: 23</Text>
                <Text style={styles.info}>Destinado para: RH</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPressIn={() => { nav.navigate('Questionário'); } } >
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPressIn={() => { nav.goBack(); } } >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default DetalhesQuestionario;