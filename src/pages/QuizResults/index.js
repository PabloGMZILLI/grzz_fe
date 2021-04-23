import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import mock from '../../../mocks/quiz.json'

import styles from './styles';

const QuizDetails = ({route}) => {
    let params = route.params;
    console.log(params);
    var navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultado</Text>
            <TouchableOpacity style={styles.button} onPressIn={() => { navigation.navigate('Home'); } } >
                    <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default QuizDetails;