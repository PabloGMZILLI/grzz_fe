import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, ScrollView, TextInput } from "react-native";
import { Button } from "react-native-elements";

import * as QuizService from "../../services/QuizService";
import AuthContext from "../../contexts/auth";
import mainStyle from "../../Styles/main";

export default function NewQuestionnaire({ route, navigation }) {
    const { questionnaire } = route.params;

    const [title, setTitle] = useState(questionnaire ? questionnaire.name : "");
    const [workspace, setWorkspace] = useState(
        questionnaire ? questionnaire.to_workspace : ""
    );
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);

    function saveQuestionnaire() {
        setLoading(true);

        let newQuestionnaire = {
            name: title,
            to_workspace: workspace,
            questions: [],
        };

        if (questionnaire) {
            QuizService.deleteQuiz(questionnaire.id, user.id);
            newQuestionnaire.questions = questionnaire.questions;
        }

        QuizService.createFullQuiz(newQuestionnaire, user.id)
            .then((res) => {
                navigation.navigate("ManageQuestions");
            })
            .catch((error) => {
                setLoading(false);
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
                    <View style={mainStyle.inputView}>
                        <TextInput
                            value={title}
                            placeholder="Nome do novo questionario"
                            placeholderTextColor="#a9a9a9"
                            style={mainStyle.TextInput}
                            onChangeText={(text) => setTitle(text)}
                        />
                    </View>
                    <Text>Area de trabalho:</Text>
                    <View style={mainStyle.inputView}>
                        <TextInput
                            value={workspace}
                            placeholder="Area de trabalho"
                            placeholderTextColor="#a9a9a9"
                            style={mainStyle.TextInput}
                            onChangeText={(text) => setWorkspace(text)}
                        />
                    </View>
                    <Button
                        title={
                            questionnaire
                                ? "Editar questao"
                                : "Adicionar questao"
                        }
                        buttonStyle={mainStyle.redButtonElements}
                        onPress={() => saveQuestionnaire()}
                        loading={loading}
                        disabled={
                            loading
                                ? false
                                : title.length > 0 && workspace.length > 0
                                ? false
                                : true
                        }
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
