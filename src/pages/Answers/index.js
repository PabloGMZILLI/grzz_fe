import React, { useState } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import CountDown from 'react-native-countdown-component';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import mock from '../../../mocks/quiz.json'

const selectedQuizz = (quizId, quizzes) => {
    var quiz;
    quizzes.map(element => {
        if (element.id == quizId) {
            quiz = element;
        }
    });
    return quiz;
}

const nextQuestion = (navigation, selectQuizz, position ) => {
    if ((position + 1) < selectQuizz.questions.length){
        return navigation.navigate('Answers', { quizId: selectQuizz.id, position: position, questionId: selectQuizz.questions[position].id });
    } else {
        return navigation.navigate('Home');
    }

}

const Answers = ({route, navigation}) => {
    let { quizId, questionId, position } = route.params;
    let selectQuizz = selectedQuizz(quizId, mock.quizzes);
    position == undefined ? position = 0 : position += 1;

    var question = selectQuizz.questions[position];

    return (
        <View>
            <View style={ styles.header }>
                <Text style={ styles.time }>Tempo restante: { <CountDown
                    until={question.max_time}
                    size={13}
                    onFinish={() => { () => nextQuestion(navigation, selectQuizz, position) }}
                    digitStyle={{backgroundColor: '#FFF'}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: null, s: null}}
                /> }</Text>
                <TouchableOpacity style={styles.buttonNext} onPressIn={ () => nextQuestion(navigation, selectQuizz, position) }> 
                    <Text style={ styles.btnTxt }>Próxima</Text>
                </TouchableOpacity>
            </View>
        <View style={ styles.container }>
            <View style={styles.questionContainer}>
                <Text style={ styles.question }>{ question.question }</Text>
            </View>
            <FlatList
                style={ styles.answersContainer }
                data={ question.answers }
                keyExtractor={ element => String(element.id)}
                showsVerticalScrollIndicator={true}
                renderItem={ element => <Answer id={ element.item.id } selected={false} answerText={ element.item.answer }/>
                }
            />
        </View>
        </View>
    );
 
}

const Answer = ( element ) => {
    const [selected, setSelected] = useState(false);
    // https://dev.to/alanrmachado/criando-seu-proprio-componente-checkbox-no-react-native-3np6
    return (
        <TouchableOpacity value={selected} style={styles.answer} onPressIn={ () => { setSelected(!selected); } } > 
            <Text style={styles.answerLabel}>{element.answerText}</Text>
            { selected ?  <Icon style={styles.CheckBox} name="check" size={15} color='#EF4358' /> : null }
        </TouchableOpacity>
    )
}

export default Answers;