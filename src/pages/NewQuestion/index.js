import React, { useState, useContext, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import {
    Input,
    Card,
    ListItem,
    Avatar,
    Button,
} from "react-native-elements";

import * as QuizService from "../../services/QuizService";
import AuthContext from "../../contexts/auth";
import mainStyle from "../../Styles/main";

import mainStyle from "../../Styles/main";

export default function NewQuestion({ route, navigation }) {
    const question = route.params;
    const [answers, setAnswers] = useState(question ? question.answers : []);
    const [tempAnswer, setTempAnswer] = useState("");
    const [title, setTitle] = useState(question ? question.title : "");
    const [description, setDescription] = useState(
        question ? question.description : ""
    );
    const [points, setPoints] = useState(question ? question.points : "");
    const [maxTimer, setMaxTimer] = useState(question ? question.points : "");
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);

    function setCorrectAnswer(index) {
        let tempList = [];

        answers.forEach((item, i) => {
            tempList.push({
                answer: item.answer,
                correct: i == index ? true : false,
            });
        });
        setAnswers(tempList);
    }

    function addAnswer(text) {
        if (text.length > 0) {
            setAnswers(
                answers.concat({
                    answer: text,
                    correct: answers.length == 0 ? true : false,
                })
            );
        }
    }

    function removeAnswer(index) {
        let tempList = [];

        answers.forEach((item, i) => {
            if (index !== i) {
                tempList.push({
                    answer: item.answer,
                    correct: item.correct,
                });
            }
        });
        setAnswers(tempList);
    }

    useEffect(() => {
        answers.length > 0 &&
        title.length > 0 &&
        description.length > 0
            ? setDisabledButton(false)
            : setDisabledButton(true)
      }, [answers, title, description]);

    function saveQuestion() {
        setLoading(true);
        let tempSentAnswers = answers;

        tempSentAnswers.forEach((item) => {
            if (item.correct == false) {
                delete item.correct;
            }
            console.log(item);
        });

        QuizService.addQuestion(
            id,
            {
                question: title,
                points: points,
                max_time: maxTimer,
                answers: tempSentAnswers,
            },
            user.id
        )
            .then(() => navigation.navigate("ManageQuestions"))
            .catch((error) => {
                setLoading(false), console.log(error);
            });
    }

    return (
        <View style={{ padding: 10 }}>
            <SafeAreaView
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <ScrollView>
                    <View style={mainStyle.container}>
                        <Text>Titulo da questao:</Text>
                        <Input
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                        />
                        <Text>Descricao da questao:</Text>
                        <Input
                            value={description}
                            onChangeText={(text) => setDescription(text)}
                        />
                        <Text>Tempo maximo para responder:</Text>
                        <Input
                            value={maxTimer}
                            onChangeText={(number) => setMaxTimer(number)}
                            keyboardType="numeric"
                        />
                    </View>

                    <Text>Pontos:</Text>
                    <View style={mainStyle.inputView}>
                        <TextInput
                            style={mainStyle.TextInput}
                            placeholder="Pontos"
                            placeholderTextColor="#a9a9a9"
                            value={points}
                            onChangeText={(number) => setPoints(number)}
                            keyboardType="numeric"
                        />
                        <Card borderRadius={10}>
                            <Card.Title>Respostas</Card.Title>
                            <Card.Divider />
                            {answers.length > 0 ? (
                                answers.map((item, i) => {
                                    return (
                                        <ListItem key={i} bottomDivider>
                                            <Avatar
                                                rounded
                                                title={i + 1}
                                                containerStyle={{
                                                    backgroundColor: item.correct
                                                        ? "green"
                                                        : "red",
                                                }}
                                                onPress={() => setCorrectAnswer(i)}
                                            />
                                            <ListItem.Content>
                                                <Text>{item.answer}</Text>
                                            </ListItem.Content>
                                            <Button
                                                title="X"
                                                buttonStyle={{
                                                    backgroundColor: "red",
                                                    borderRadius: 50,
                                                    width: 28,
                                                    height: 28,
                                                    borderColor: "black",
                                                    borderWidth: 1,
                                                 }}
                                                onPress={() => removeAnswer(i)}
                                            />
                                        </ListItem>
                                    );
                                })
                            ) : (
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ marginTop: 10 }}>
                                        Nenhuma resposta adicionada!
                                    </Text>
                                </View>
                            )}
                        </Card>
                        <Text style={{ marginTop: 10 }}>Nova resposta:</Text>
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <View style={{ width: "70%" }}>
                                <Input
                                    value={tempAnswer}
                                    onChangeText={(text) => setTempAnswer(text)}
                                />
                            </View>
                            <View style={{ width: "30%" }}>
                                <TouchableOpacity
                                    style={ mainStyle.redButton }
                                    onPress={() => {
                                        addAnswer(tempAnswer);
                                        setTempAnswer("");
                                    }}
                                >
                                    <Text style={ [mainStyle.buttonText, {fontSize: 15}]}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                     <View style={{ flex: 1, width: '100%', marginTop: 10, alignItems: 'center' }} >
                        <TouchableOpacity
                            style={[ disabledButton ? mainStyle.disabledButton : mainStyle.redButton, { width: '96%'} ]}
                            onPress={() => saveQuiz()}
                            disabled={ disabledButton }
                        >
                            <Text style={mainStyle.buttonText}>{ loading
                                ? "Salvando..."
                                : question
                                ? "Editar questão"
                                : "Salvar questão" }</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
