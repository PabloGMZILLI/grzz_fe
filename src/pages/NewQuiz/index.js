import React, { useState, useContext, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import {
    Input,
} from "react-native-elements";

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
                    <Text>Nome do novo questionário:</Text>
                    <Input
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <Text>Area de trabalho:</Text>
                    <Input
                        value={workspace}
                        onChangeText={(text) => setWorkspace(text)}
                    />
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
