import React, { useState, useContext, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from "react-native";

import * as QuizService from "../../services/QuizService";
import AuthContext from "../../contexts/auth";

import mainStyle from "../../Styles/main";

export default function NewQuiz({ route, navigation }) {
    const quiz = route.params;
    const [title, setTitle] = useState(quiz ? quiz.title : "");
    const [disabledButton, setDisabledButton] = useState(false);
    const [workspace, setWorkspace] = useState(
        quiz ? quiz.workspace : ""
    );
    const { user } = useContext(AuthContext);

    function saveQuiz() {
        QuizService.createFullQuiz(
            {
                name: title,
                to_workspace: workspace,
                questions: [],
            },
            user.id
        ).then((res) => {
            navigation.navigate("ManageQuestions");
        });
    }

    useEffect(() => {
        (title.length > 0 && workspace.length > 0) ? setDisabledButton(false) : setDisabledButton(true)
      }, [title, workspace]);

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
                                placeholder="Área destinada o questionário"
                                placeholderTextColor="#a9a9a9"
                                value={workspace}
                                onChangeText={(text) => setWorkspace(text)}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, width: '100%', marginTop: 10, alignItems: 'center' }} >
                    <TouchableOpacity
                        style={[ disabledButton ? mainStyle.disabledButton : mainStyle.redButton, { width: '96%'} ]}
                        onPress={() => saveQuiz()}
                        disabled={disabledButton}
                    >
                        <Text style={mainStyle.buttonText}>{ quiz ? "Editar questionário" : "Adicionar questionário" }</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
