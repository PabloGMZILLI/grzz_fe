import React from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './styles';



const QuizDetails = ({ route, navigation }) => {
    const { currentQuiz } = route.params;

    if (currentQuiz) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{currentQuiz.name}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>Total de perguntas do questionário: {currentQuiz.questions.length}</Text>
                    <Text style={styles.info}>Destinado para: {currentQuiz.to_workspace} </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPressIn={() => { navigation.navigate('Answers', { "currentQuiz": currentQuiz }); }} >
                        <Text style={styles.buttonText}>Iniciar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPressIn={() => { navigation.goBack(); }} >
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else {
        return (
            <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#EF4358" />
            </View>
        );
    }
}

export default QuizDetails;