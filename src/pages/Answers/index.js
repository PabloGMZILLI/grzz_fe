import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from 'react-native-countdown-component';
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

const Answers = ({route}) => {
    let { quizId } = route.params;
    const nav = useNavigation();
    var selectQuizz = selectedQuizz(quizId, mock.quizzes);
    var questions = selectQuizz.questions;
    const [position, setPosition] = useState(0); // primeiro item do array
    const [currentQuestion, setCurrentQuestion] = useState(questions[position]); // estado inicial
    const [quiz, setQuiz] = useState(selectQuizz);

    const nextQuestion = (position) => {
        if ((position + 1) == questions.length) {
            nav.navigate('Resultado', quiz);
        } else {
            setPosition(position + 1);
        }
    }
    useEffect(() => {
        setCurrentQuestion(questions[position]);
      }, [position]);
    useEffect(() => {
        setQuiz( prevState => ({ ...prevState, 'questions': prevState.questions.map(
            el => el.id === currentQuestion.id ? currentQuestion : el
        )}));
    }, [currentQuestion]);

    const Answer = ( {elements} ) => {
        let currentAnswer = elements.item;
        const toggleChecked = () => {
            setCurrentQuestion( prevState => ({
                ...prevState,
                "answers": prevState.answers.map(
                        el => el.id === currentAnswer.id ? { ...el, checked: !el.checked } : { ...el, checked: false }
                    )
                })
            );
        };
         return (
          <TouchableOpacity style={styles.answer} onPressIn={ () => toggleChecked() } > 
               <Text style={styles.answerLabel}>{currentAnswer.answer}</Text>
              { currentAnswer.checked ?  <Icon style={styles.CheckBox} name="check" size={15} color='#EF4358' /> : null }
          </TouchableOpacity>
        )
    }

    if (currentQuestion){
        return (
            <View style={ styles.screenContainer } >
                <View style={ styles.header }>
                    <View style={ styles.timer }>
                        <Text style={ styles.timerTxt }>Tempo restante: </Text>
                        <CountDown
                            id={ currentQuestion.question }
                            until={currentQuestion.max_time}
                            size={15}
                            onFinish={() => nextQuestion(position) }
                            digitStyle={{backgroundColor: '#FFF'}}
                            timeToShow={['M', 'S']}
                            timeLabels={{m: null, s: null}}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonNext} onPressIn={ () => nextQuestion(position) }> 
                        <Text style={ styles.btnTxt }>Próxima</Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.container }>
                    <View style={styles.questionContainer}>
                        <Text style={ styles.question }>{ currentQuestion.question }</Text>
                    </View>
                    <FlatList
                        style={ styles.answersContainer }
                        data={ currentQuestion.answers }
                        keyExtractor={ element => String(element.id)}
                        showsVerticalScrollIndicator={true}
                        renderItem={
                            element => {
                                return <Answer elements={element} />
                            }
                        }
                    />
                </View>
            </View>
        );
    } else {
        return <Text>Ops, deu ruim</Text>
    }
}

export default Answers;