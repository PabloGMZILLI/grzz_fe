import React, {useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import AuthContext from '../../contexts/auth';
import styles from './styles';
import axios from '../../instances/axios';

const QuizDetails = ({route}) => {
    var {quiz} = route.params;
    const { user } = useContext(AuthContext);
    var navigation = useNavigation();
    async function saveAnswer(quizId, questionId, answerId, timespent = 50) {
        await axios.post(`/answer/save`, {
            "user_id": user.id,
            "quiz_id": quizId,
            "question_id": questionId,
            "answer_checked_id" : answerId,
            "timespent": timespent
        });
    }
    //Pontuação do user
    var points = 0;
    //Id das questões que o user acertou
    var correctQuestions = [];
    //Calcular pontuação para enviar para o DB.
    quiz.questions.map(
        question => question.answers.map(
            answer => {
                if (answer.checked){
                    saveAnswer(quiz.id, question.id, answer.id);
                    if (answer.id == question.correct_answer_id) {
                        points = points + question.points
                        correctQuestions.push(question.id)
                    }
                }
            }    
        )
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultado</Text>
            <View style={styles.textContainer}>
                <Text style={ styles.resultsTexts }>Parabéns, o quiz "{quiz.name}" foi finalizado com sucesso!!</Text>
                <Text style={ styles.resultsTexts }>Você acertou {correctQuestions.length} questões</Text>
                <Text style={ styles.resultsTexts }>Sua pontuação foi {points} pontos</Text>
            </View>
            <TouchableOpacity style={styles.button} onPressIn={() => { navigation.navigate('Home'); } } >
                    <Text style={styles.buttonText}>Voltar para página incial</Text>
            </TouchableOpacity>
        </View>
    );
}

export default QuizDetails;