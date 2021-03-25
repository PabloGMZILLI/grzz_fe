import React, { useState } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import CountDown from 'react-native-countdown-component';

import styles from './styles';

const mock =
    [
        {	
			"question" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			"points" : 10,
			"max_time": 299,
            "correct_answer_id": 1,
			"answers": [ { "id": 0, "answer": "Resposta errada"}, { "id": 1, "answer": "Porque sim"}, { "id": 2, "answer": "Por que sou humano"}, { "id": 3, "answer": "Porque queremos"} , { "id": 4, "answer": "Vai saber" } ]
		},
		{	
			"question" : "Pergunta 2",
			"points" : 10,
			"max_time": 300,
            "correct_answer_id": 0,
			"answers": [  { "id": 0, "answer": "Resposta certa 2" }, { "id": 1, "answer": "Errada"}, { "id": 2, "answer": "Porque sim"}, { "id": 3, "answer": "Porque queremos" }, { "id": 4, "answer": "Vai saber"} ]
		}
    ];

const secToMin = (seconds) => {
    let timeLeft = (seconds/60).toFixed(2);
    console.log(timeLeft);
    return timeLeft;
}
const Answers = () => {
    var question = mock[0];
    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Text style={ styles.time }>Tempo restante: { <CountDown
                    until={question.max_time}
                    size={15}
                    onFinish={() => alert('Finished')}
                    digitStyle={{backgroundColor: '#FFF'}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: null, s: null}}
                /> }</Text>
                <TouchableOpacity style={styles.buttonNext} onPressIn={ () => {} }> 
                    <Text style={ styles.btnTxt }>Próxima</Text>
                </TouchableOpacity>
            </View>
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