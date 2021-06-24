import React, { useContext, useState } from "react";
import { View, SafeAreaView, ScrollView, TextInput, ActivityIndicator, TouchableOpacity } from "react-native";
import {
    ListItem,
    Text,
    Card,
    Icon,
    Avatar,
} from "react-native-elements";

import * as QuizService from "../../services/QuizService";
import AuthContext from "../../contexts/auth";

import mainStyle from "../../styles/main";

export default function QuestionDetails({ route, navigation }) {
    const { quizId, question } = route.params;
    const { user } = useContext(AuthContext);
    const [deleteLoading, setDeleteLoading] = useState(false);

    async function deleteQuestion(questionId, userId) {
        setDeleteLoading(true);
        await QuizService.deleteQuestion(questionId, userId);
        navigation.navigate("ManageQuestions");
    }
    if (question) {

        return (
            <View style={{ flex: 1, alignItems: "center" }} >
                <SafeAreaView style={{ width: "100%", height: "100%" }}>
                    <ScrollView>
                        <View style={[mainStyle.container, { marginTop: 10 }]}>
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
                                    editable={false}
                                />
                            </View>
                            <View style={mainStyle.inputView}>
                                <TextInput
                                    style={mainStyle.TextInput}
                                    placeholder="Tempo máximo para responder"
                                    placeholderTextColor="#a9a9a9"
                                    value={question && question.max_time ? (question.max_time).toString() : ''}
                                    onChangeText={(number) => setMaxTimer(number)}
                                    keyboardType="numeric"
                                    editable={false}
                                />
                            </View>
                            <View style={mainStyle.inputView}>
                                <TextInput
                                    style={mainStyle.TextInput}
                                    placeholder="Pontos"
                                    placeholderTextColor="#a9a9a9"
                                    value={question && question.points ? (question.points).toString() : ''}
                                    onChangeText={(number) => setPoints(number)}
                                    keyboardType="numeric"
                                    editable={false}
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
                                                containerStyle={[mainStyle.shadow, {
                                                    backgroundColor:
                                                        question.correct_answer_id == item.id
                                                            ? "green"
                                                            : "red",
                                                }]}
                                            />
                                            <Text>{item.answer}</Text>
                                        </ListItem>
                                    );
                                })}
                            </Card>
                            <View style={{ flex: 1, width: '100%', alignItems: 'center' }} >
                                <TouchableOpacity
                                    style={[mainStyle.redButton, { width: '96%', backgroundColor: "#48d241", flexDirection: 'row', alignItems: 'center' }]}
                                    onPress={() =>
                                        navigation.navigate("NewQuestion", { question })
                                    }
                                >
                                    <Icon name="edit" type="font-awesome-5" color="white" size={20} iconStyle={{ marginRight: 10 }} />
                                    <Text style={mainStyle.buttonText}>Editar questão</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[mainStyle.redButton, { width: '96%', backgroundColor: "red", flexDirection: 'row', alignItems: 'center' }]}
                                    onPress={() => deleteQuestion(question.id, user.id)}
                                >
                                    
                                    {deleteLoading ?
                                        <ActivityIndicator size="large" color="white" />
                                        :
                                        <View style={{flexDirection: "row", alignItems: "center"}}>
                                            <Icon name="trash" type="font-awesome-5" color="white" size={20} iconStyle={{ marginRight: 10 }} />
                                            <Text style={mainStyle.buttonText}>Apagar questão</Text>
                                        </View>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    } else {
        <Text>Ocorreu algum erro</Text>
    }
}
