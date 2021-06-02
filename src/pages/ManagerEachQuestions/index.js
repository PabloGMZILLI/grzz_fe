import React from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { ListItem, Icon, Text, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import mainStyle from "../../Styles/main";

export default function ManagerEachQuestions({ route, navigation }) {
    const { questions, id, questionnaire } = route.params;

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
                    <View
                        style={{ flex: 1, width: "100%", alignItems: "center" }}
                    >
                        <TouchableOpacity
                            style={[mainStyle.redButton, { width: "80%" }]}
                            onPress={() =>
                                navigation.navigate("NewQuestion", {
                                    questions: null,
                                    id: id,
                                })
                            }
                        >
                            <Text style={mainStyle.buttonText}>
                                Adicionar questão
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                mainStyle.redButton,
                                { width: "80%", backgroundColor: "orange" },
                            ]}
                            onPress={() => {
                                console.log(questionnaire);
                                navigation.navigate("NewQuestionnaire", {
                                    questionnaire: questionnaire,
                                    id: id,
                                });
                            }}
                        >
                            <Text style={mainStyle.buttonText}>
                                Editar essa questionario
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[mainStyle.container, { margin: 10 }]}>
                        {questions.map((item, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    bottomDivider={
                                        i === questions.length - 1 ? null : true
                                    }
                                    onPress={() => {
                                        navigation.navigate("QuestionDetails", {
                                            question: item,
                                            id: id,
                                        });
                                        console.log(i);
                                    }}
                                >
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            <Text>{item.question}</Text>
                                        </ListItem.Title>
                                        <ListItem.Subtitle>
                                            Taxa de acertos: {item.hitsRate}%
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
                                    <Icon
                                        name="chevron-right"
                                        type="font-awesome-5"
                                        color="#517fa4"
                                        size={14}
                                    />
                                </ListItem>
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
