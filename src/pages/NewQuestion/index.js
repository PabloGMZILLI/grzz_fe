import React, { useState, useContext, useEffect } from "react";
import { Text, View, ActivityIndicator, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Card, ListItem, Avatar, Button } from "react-native-elements";

import * as QuizService from "../../services/QuizService";
import AuthContext from "../../contexts/auth";
import mainStyle from "../../Styles/main";

export default function NewQuestion({ route, navigation }) {
    const { quizId, question } = route.params;
    const [answers, setAnswers] = useState(question && question.answers ? question.answers : []);
    const [tempAnswer, setTempAnswer] = useState("");
    const [title, setTitle] = useState(question && question.question ? question.question : "");
    const [points, setPoints] = useState(question && question.points ? (question.points).toString() : "");
    const [maxTimer, setMaxTimer] = useState(question && question.max_time ? (question.max_time).toString() : "");
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);
    const questionId = question && question.id ? question.id : null;

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

    function saveQuestion() {
        setLoading(true);
        let tempSentAnswers = answers;

        tempSentAnswers.forEach((item) => {
            if (item.correct == false) {
                delete item.correct;
            }
        });
        if (questionId) {
            QuizService.updateQuestion(
                questionId,
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
        } else {
            QuizService.addQuestion(
                quizId,
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
    }

    useEffect(() => {
        answers.length > 0 &&
            title.length > 0
            ? setDisabledButton(false)
            : setDisabledButton(true)
    }, [answers, title]);

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
                        {questionId ?
                            <View style={{ alignItems: "center", backgroundColor: '#d3d3d3', borderRadius: 20, padding: 10, marginBottom: 10 }}>
                                <Text style={{ fontSize: 20 }}>Questão id: <Text>{question.id}</Text></Text>
                            </View>
                            : null}
                        <View style={mainStyle.inputView}>
                            <TextInput
                                style={mainStyle.TextInput}
                                placeholder="Titulo da questao"
                                placeholderTextColor="#a9a9a9"
                                value={title}
                                onChangeText={(text) => setTitle(text)}
                                autoFocus={true}
                            />
                        </View>
                        <View style={mainStyle.inputView}>
                            <TextInput
                                style={mainStyle.TextInput}
                                placeholder="Tempo maximo para responder"
                                placeholderTextColor="#a9a9a9"
                                value={maxTimer}
                                onChangeText={(number) => setMaxTimer(number)}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={mainStyle.inputView}>
                            <TextInput
                                style={mainStyle.TextInput}
                                placeholder="Pontos"
                                placeholderTextColor="#a9a9a9"
                                value={points}
                                onChangeText={(number) => setPoints(number)}
                                keyboardType="numeric"
                            />
                        </View>
                        <Card borderRadius={10}>
                            <Card.Title>Respostas</Card.Title>
                            <Card.Divider />
                            {answers.length > 0 ? (
                                answers.map((item, i) => {
                                    question && question.correct_answer_id == item.id ? setCorrectAnswer(i) : null;
                                    return (
                                        <ListItem key={i} bottomDivider>
                                            <Avatar
                                                rounded
                                                title={i + 1}
                                                containerStyle={{
                                                    backgroundColor: item.correct || question && question.correct_answer_id == item.id
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
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <View style={{ width: "80%" }}>
                                <View style={mainStyle.inputView}>
                                    <TextInput
                                        style={mainStyle.TextInput}
                                        placeholder="Adicionar nova resposta"
                                        placeholderTextColor="#a9a9a9"
                                        value={tempAnswer}
                                        onChangeText={(text) => setTempAnswer(text)}
                                    />
                                </View>
                            </View>
                            <View style={{ width: "17%", marginLeft: "3%" }}>
                                <TouchableOpacity
                                    style={mainStyle.redButton}
                                    onPress={() => {
                                        addAnswer(tempAnswer);
                                        setTempAnswer("");
                                    }}
                                >
                                    <Text style={[mainStyle.buttonText, { fontSize: 15 }]}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, width: '100%', marginTop: 10, alignItems: 'center' }} >
                        <TouchableOpacity
                            style={[disabledButton ? mainStyle.disabledButton : mainStyle.redButton, { width: '96%' }]}
                            onPress={() => saveQuestion()}
                            disabled={disabledButton}
                        >
                            {loading ?
                                <ActivityIndicator size="large" color="white" />
                                :
                                <Text style={mainStyle.buttonText}>{question ? "Atualizar questão" : "Salvar questão"}</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
