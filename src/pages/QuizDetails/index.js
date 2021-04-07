import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import mock from '../../../mocks/quiz.json'

import styles from './styles';

const selectedQuizz = (quizId, quizzes) => {
    var quiz;
    quizzes.map(element => {
        if (element.id == quizId) {
            quiz = element;
        }
    });
    return quiz;
}

const QuizDetails = ({route, navigation}) => {
    const { quizId } = route.params;
    let selectQuizz = selectedQuizz(quizId, mock.quizzes);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectQuizz.name}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.info}>Total de perguntas do questionário: { selectQuizz.questions.length }</Text>
                <Text style={styles.info}>Destinado para: { selectQuizz.to_workspace } </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPressIn={() => { navigation.navigate('Answers', { "quizId": selectQuizz.id }); } } >
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPressIn={() => { navigation.goBack(); } } >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default QuizDetails;