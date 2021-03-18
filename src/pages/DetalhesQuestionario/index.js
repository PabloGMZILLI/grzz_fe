import React from 'react';
import { Text, FlatList, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';
// esse detalhe da cliente, fornece um historico de agendamento da cliente e caso necessario é possivel editar as infos de cadastro da cliente.
 const DetalhesQuestionario = () => {
    const name ='maria';
    const phone ='5484956252';
    const date = '05/10';
    const hour = '14:00';
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
              
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informações da Cliente</Text>
            <View style={styles.clientContainer}>
                <View style={styles.editButton}>
                    <Feather name='edit' size={25} color='#ec85ff' />
                </View>
                <Text style={styles.clientProp}>Nome:</Text>
                <Text style={styles.clientValue}>{name}</Text>
                <Text style={styles.clientProp}>Telefone:</Text>
                <Text style={styles.clientValue}>{phone}</Text>
                <Text style={styles.lastTime}>O ultimo agendamento da cliente foi no dia {date} as {hour} horas.</Text>
            </View>
            <View style={styles.clientContainer}>
                <Text style={styles.clientPropHistoric}>Historico de agendamentos:</Text>
                <FlatList
                    data={ schedules }
                    keyExtractor={el => el.date + el.hour}
                    renderItem={ historicInfo }
                />
            </View>
        </View>
    );
}

export default DetalhesQuestionario;