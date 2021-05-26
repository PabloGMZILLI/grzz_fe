import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import {
    Input,
    Card,
    ListItem,
    Avatar,
    Button,
    Switch,
} from "react-native-elements";

export default function NewQuestion({ route, navigation }) {
    const question = route.params;
    const [answers, setAnswers] = useState(question ? question.answers : []);
    const [tempAnswer, setTempAnswer] = useState("");
    const [title, setTitle] = useState(question ? question.title : "");
    const [description, setDescription] = useState(
        question ? question.description : ""
    );

    function setCorrectAnswer(index) {
        let tempList = [];

        answers.forEach((item, i) => {
            tempList.push({
                text: item.text,
                correct: i == index ? true : false,
            });
        });
        setAnswers(tempList);
    }

    function addAnswer(text) {
        if (text.length > 0) {
            setAnswers(
                answers.concat({
                    text,
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
                    text: item.text,
                    correct: item.correct,
                });
            }
        });
        setAnswers(tempList);
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
                    <Input
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <Text>Descricao da questao:</Text>
                    <Input
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
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
                                            <Text>{item.text}</Text>
                                        </ListItem.Content>
                                        <Button
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
                            <Input
                                value={tempAnswer}
                                onChangeText={(text) => setTempAnswer(text)}
                            />
                        </View>
                        <View style={{ width: "30%" }}>
                            <Button
                                title="Adicionar"
                                onPress={() => {
                                    addAnswer(tempAnswer);
                                    setTempAnswer("");
                                }}
                            />
                        </View>
                    </View>
                    <Button
                        title={
                            question ? "Editar questao" : "Adicionar questao"
                        }
                        disabled={
                            answers.length > 0 &&
                            title.length > 0 &&
                            description.length > 0
                                ? false
                                : true
                        }
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
