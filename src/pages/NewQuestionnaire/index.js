import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import {
    Input,
    Card,
    ListItem,
    Avatar,
    Button,
    Switch,
} from "react-native-elements";

import * as QuizService from "../../services/QuizService";
import AuthContext from "../../contexts/auth";

export default function NewQuestionnaire({ route, navigation }) {
    const question = route.params;
    const [title, setTitle] = useState(question ? question.title : "");
    const [workspace, setWorkspace] = useState(
        question ? question.workspace : ""
    );
    const { user } = useContext(AuthContext);

    function saveQuestionnaire() {
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

    return (
        <View style={{ padding: 10 }}>
            <SafeAreaView
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <ScrollView>
                    <Text>Nome do novo questionario:</Text>
                    <Input
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <Text>Area de trabalho:</Text>
                    <Input
                        value={workspace}
                        onChangeText={(text) => setWorkspace(text)}
                    />
                    <Button
                        title={
                            question ? "Editar questao" : "Adicionar questao"
                        }
                        onPress={() => saveQuestionnaire()}
                        disabled={
                            title.length > 0 && workspace.length > 0
                                ? false
                                : true
                        }
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
