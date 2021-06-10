import React, { useState, useContext, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";

import * as QuizService from "../../services/QuizService";
import AuthContext from "../../contexts/auth";

import mainStyle from "../../Styles/main";

export default function NewQuiz({ route, navigation }) {
    const params = route.params;
    var quiz = null;
    if (params) {
        quiz = params.quiz;
    }
    const [title, setTitle] = useState(quiz ? quiz.name : "");
    const [disabledButton, setDisabledButton] = useState(false);
    const [workspace, setWorkspace] = useState(quiz ? quiz.to_workspace : "");
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const { user } = useContext(AuthContext);

    function saveQuiz() {
        setLoading(true);
        QuizService.createFullQuiz(
            {
                name: title,
                to_workspace: workspace,
                questions: [],
            },
            user.id
        ).then((res) => {
            console.log(res);
            navigation.navigate("ManageQuestions");
        });
    }

    function deleteQuiz() {
        setDeleteLoading(true);
        QuizService.deleteQuiz(
            quiz.id,
            user.id
        ).then((res) => {
            console.log(res);
            navigation.navigate("ManageQuestions");
        });
    }

    function updateQuiz() {
        setLoading(true);
        QuizService.updateQuiz(
            quiz.id,
            {
                name: title,
                to_workspace: workspace,
            },
            user.id
        ).then((res) => {
            console.log(res);
            navigation.navigate("ManageQuestions");
        });
    }

    useEffect(() => {
        (title.length > 0 && workspace.length > 0) ? setDisabledButton(false) : setDisabledButton(true)
    }, [title, workspace]);

    return (
        <View style={{ padding: 10 }}>
            <SafeAreaView
                style={{ width: "100%", height: "100%" }} >
                <ScrollView>
                    <View style={mainStyle.container}>
                        <View style={mainStyle.inputView}>
                            <TextInput
                                style={mainStyle.TextInput}
                                placeholder="Nome do questionário"
                                placeholderTextColor="#a9a9a9"
                                value={title}
                                onChangeText={(text) => setTitle(text)}
                                autoFocus={true}
                            />
                        </View>
                        <View style={mainStyle.inputView}>
                            <TextInput
                                style={mainStyle.TextInput}
                                placeholder="Setor em que o questionário é destinado"
                                placeholderTextColor="#a9a9a9"
                                value={workspace}
                                onChangeText={(text) => setWorkspace(text)}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, width: '100%', marginTop: 10, alignItems: 'center' }} >
                        {quiz ?
                        <TouchableOpacity
                            style={[mainStyle.redButton, { width: '96%', backgroundColor: "red", flexDirection: 'row', alignItems: 'center' }]}
                            onPress={() => deleteQuiz()}
                        >
                            
                            {deleteLoading ?
                                <ActivityIndicator size="large" color="white" />
                                :
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                    <Icon name="trash" type="font-awesome-5" color="white" size={20} iconStyle={{ marginRight: 10 }} />
                                    <Text style={mainStyle.buttonText}>Apagar questionário</Text>
                                </View>
                            }
                        </TouchableOpacity>
                        : null
                        }
                        <TouchableOpacity
                            style={[disabledButton ? mainStyle.disabledButton : mainStyle.redButton, { width: '96%' }]}
                            onPress={() => quiz ? updateQuiz() : saveQuiz()}
                            disabled={disabledButton}
                        >
                            {loading ?
                                <ActivityIndicator size="large" color="white" />
                                :
                                <Text style={mainStyle.buttonText}>{quiz ? "Salvar questionário" : "Adicionar questionário"}</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
