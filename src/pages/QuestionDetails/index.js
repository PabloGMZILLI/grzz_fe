import React, { useContext, useState } from "react";
import { View, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import {
    ListItem,
    Text,
    Card,
    Button,
    Icon,
    Avatar,
} from "react-native-elements";

import * as QuizService from "../../services/QuizService";
import AuthContext from "../../contexts/auth";

import mainStyle from "../../Styles/main";

export default function QuestionDetails({ route, navigation }) {
    const { quizId, question } = route.params;
    const { user } = useContext(AuthContext);
    const [deleteLoading, setDeleteLoading] = useState(false);

    async function deleteQuestion(questionId, userId) {
        setDeleteLoading(true);
        await QuizService.deleteQuestion(questionId, userId);
        navigation.navigate("ManageQuestions");
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
            }}
        >
            <SafeAreaView
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <ScrollView>
                    <View style={mainStyle.container}>
                        <View style={{ alignItems: "center", backgroundColor: '#d3d3d3', borderRadius: 20, padding: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 20 }}>Questão id: <Text>{question.id}</Text></Text>
                        </View>
                        <View style={mainStyle.inputView}>
                            <TextInput
                                style={mainStyle.TextInput}
                                placeholder="Questão"
                                placeholderTextColor="#a9a9a9"
                                value={question.question}
                                onChangeText={(text) => setTitle(text)}
                            />
                        </View>
                        <View style={mainStyle.inputView}>
                            <TextInput
                                style={mainStyle.TextInput}
                                placeholder="Tempo maximo para responder"
                                placeholderTextColor="#a9a9a9"
                                value={question.max_time}
                                onChangeText={(number) => setMaxTimer(number)}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={mainStyle.inputView}>
                            <TextInput
                                style={mainStyle.TextInput}
                                placeholder="Pontos"
                                placeholderTextColor="#a9a9a9"
                                value={question.points}
                                onChangeText={(number) => setPoints(number)}
                                keyboardType="numeric"
                            />
                        </View>
                        <Card borderRadius={10} >
                            <Card.Title>Respostas</Card.Title>
                            <Card.Divider />
                            {question.answers.map((item, i) => {
                                return (
                                    <ListItem key={i} bottomDivider>
                                        <Avatar
                                            rounded
                                            title={i + 1}
                                            containerStyle={{
                                                backgroundColor:
                                                    question.correct_answer_id ==
                                                        item.id
                                                        ? "green"
                                                        : "red",
                                            }}
                                        />
                                        <Text>{item.answer}</Text>
                                    </ListItem>
                                );
                            })}
                        </Card>
                    </View>
                    <View style={{ flex: 1, width: '100%', marginTop: 10, alignItems: 'center' }} >
                        <TouchableOpacity
                            style={[mainStyle.redButton, { width: '96%', backgroundColor: "#48d241", flexDirection: 'row', alignItems: 'center' }]}
                            onPress={() =>
                                navigation.navigate("NewQuestion", { question })
                            }
                        >
                            <Icon name="edit" type="font-awesome-5" color="white" size={20} iconStyle={{ marginRight: 10, marginLeft: 100 }} />
                            <Text style={mainStyle.buttonText}>Editar questão</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[mainStyle.redButton, { width: '96%', backgroundColor: "red", flexDirection: 'row', alignItems: 'center'  }]}
                            onPress={() => deleteQuestion(question.id, user.id)}
                        >
                            <Icon name="trash" type="font-awesome-5" color="white" size={20} iconStyle={{ marginRight: 10, marginLeft: 100 }} />
                            <Text style={mainStyle.buttonText}>{deleteLoading ? "Apagando..." : "Apagar questao"}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
