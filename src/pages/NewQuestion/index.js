import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, ScrollView, TextInput } from "react-native";
import { Card, ListItem, Avatar, Button } from "react-native-elements";

import * as QuizService from "../../services/QuizService";
import AuthContext from "../../contexts/auth";
import mainStyle from "../../Styles/main";

export default function NewQuestion({ route, navigation }) {
    const { question, id } = route.params;

    const [answers, setAnswers] = useState(question ? question.answers : []);
    const [tempAnswer, setTempAnswer] = useState("");
    const [title, setTitle] = useState(question ? question.question : "");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(
        question ? question.points.toString() : ""
    );
    const [maxTimer, setMaxTimer] = useState(
        question ? question.max_time.toString() : ""
    );
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

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

        if (question) {
            QuizService.deleteQuestion(question.id, user.id);
        }

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
                    <Text>Titulo da questao:</Text>
                    <View style={mainStyle.inputView}>
                        <TextInput
                            style={mainStyle.TextInput}
                            placeholder="Titulo da questao"
                            placeholderTextColor="#a9a9a9"
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                        />
                    </View>

                    <Text>Descricao da questao:</Text>
                    <View style={mainStyle.inputView}>
                        <TextInput
                            style={mainStyle.TextInput}
                            placeholder="Descricao da questao"
                            placeholderTextColor="#a9a9a9"
                            value={description}
                            onChangeText={(text) => setDescription(text)}
                        />
                    </View>

                    <Text>Tempo maximo para responder:</Text>
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
                    </View>

                    <Card>
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
                                            buttonStyle={
                                                mainStyle.redButtonElements
                                            }
                                            title="Apagar"
                                            onPress={() => removeAnswer(i)}
                                        />
                                    </ListItem>
                                );
                            })
                        ) : (
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ marginTop: 10 }}>
                                    sem respostas!
                                </Text>
                            </View>
                        )}
                    </Card>
                    <Text style={{ marginTop: 10 }}>Nova resposta:</Text>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <View style={{ width: "70%" }}>
                            <View style={mainStyle.inputView}>
                                <TextInput
                                    style={mainStyle.TextInput}
                                    placeholder="Nova Resposta"
                                    placeholderTextColor="#a9a9a9"
                                    value={tempAnswer}
                                    onChangeText={(text) => setTempAnswer(text)}
                                />
                            </View>
                        </View>
                        <View style={{ width: "30%" }}>
                            <Button
                                buttonStyle={[
                                    mainStyle.redButtonElements,
                                    { marginLeft: 5 },
                                ]}
                                title="Adicionar"
                                onPress={() => {
                                    addAnswer(tempAnswer);
                                    setTempAnswer("");
                                }}
                            />
                        </View>
                    </View>
                    <Button
                        buttonStyle={mainStyle.redButtonElements}
                        title={
                            loading
                                ? "Salvando..."
                                : question
                                ? "Editar questao"
                                : "Salvar questao"
                        }
                        disabled={
                            answers.length > 0 &&
                            title.length > 0 &&
                            description.length > 0
                                ? false
                                : true
                        }
                        onPress={() => saveQuestion()}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
