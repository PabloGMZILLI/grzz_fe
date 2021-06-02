import React, { useState, useLayoutEffect } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as QuizService from "../../services/QuizService";

import styles from './styles';

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    const nav = useNavigation();

    useLayoutEffect(() => {
        QuizService.getQuizzes().then((res) => setQuizzes(res));
    }, []);

    const Quiz = ({currentQuiz}) => {
        const nav = useNavigation();
        return (
            <TouchableOpacity
                style={styles.quiz}
                onPressIn={() => nav.navigate('Informações sobre o questionário', { "currentQuiz": currentQuiz })}
            >
                <Text style={styles.quizProp}>{currentQuiz.name}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Questionários</Text>
                <Text style={styles.headerText}>Clique sob o questionário desejado para iniciar</Text>
            </View>
            {quizzes.length >= 1 ?
                <FlatList
                    style={styles.quizContainer}
                    data={quizzes}
                    keyExtractor={element => String(element.id)}
                    showsVerticalScrollIndicator={true}
                    renderItem={element => <Quiz currentQuiz={element.item} />}
                /> :
                <Text style={styles.emptyMessage}> Não tem nenhum quiz disponivel pra você responder neste momento =/</Text>
            }

            <TouchableOpacity
                style={styles.howAnswer}
                onPress={() => { nav.navigate('Como responder'); }}
            >
                <Text style={styles.buttonText}>Como responder</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Quizzes;