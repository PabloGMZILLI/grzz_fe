import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import axios from '../../instances/axios';

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);

    const nav = useNavigation();
    async function getQuizzes() {
        await axios.get(`/quiz`)
            .then(res => {
                if (res.data) {
                    setQuizzes(res.data);
                }
            })
    }
    useEffect(() => {
        getQuizzes();
    }, []);

    const Quiz = (element) => {
        const nav = useNavigation();
        return (
            <TouchableOpacity
                style={styles.quiz}
                onPressIn={() => nav.navigate('Informações sobre o questionário', { "quizId": element.id })}
            >
                <Text style={styles.quizProp}>{element.name}</Text>
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
                    renderItem={element => <Quiz id={element.item.id} workspace={element.item.workspace} name={element.item.name} />}
                /> :
                <Text style={styles.emptyMessage} >Não tem nenhum quiz disponivel pra você responder neste momento =/</Text>
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