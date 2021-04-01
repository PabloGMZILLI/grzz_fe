import React from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import mock from '../../../mocks/quiz.json'

const Questionarios = () => {
    const nav = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Questionários</Text>
                <Text style={styles.headerText}>Clique sob o questionário desejado para iniciar</Text>
            </View>
            <FlatList
                style={styles.quizContainer}
                data={ mock.quizzes }
                keyExtractor={ element => String(element.id)}
                showsVerticalScrollIndicator={true}
                renderItem={ element => <Questionario id={element.item.id} workspace={element.item.workspace} name={element.item.name}/> }
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={ () => {  nav.navigate('Como responder'); } }
            >
            <Text style={styles.buttonText}>Como responder</Text>
            </TouchableOpacity>
        </View>
    );
}

const Questionario = ( element ) => {
  const nav = useNavigation();
    return (
        <TouchableOpacity
            style={styles.quiz}
            onPressIn={ () => nav.navigate('Informações sobre o questionário', { "quizId": element.id } ) }
            > 
            <Text style={styles.quizProp}>{element.name}</Text>
        </TouchableOpacity>
    );
}

export default Questionarios;