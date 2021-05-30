import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import {
    ListItem,
    Avatar,
    Icon,
    Badge,
    Text,
    Button,
} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import * as QuizService from "../../services/QuizService";

export default function ManagerQuestions({ route, navigation }) {
    var nav = useNavigation();
    const [optionsList, setOptionsList] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            QuizService.getQuizzes().then((data) => setOptionsList(data));
        });
        return unsubscribe;
    }, [navigation]);

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
                    <Button
                        title="Adicionar nova questionario"
                        style={{ padding: 20 }}
                        buttonStyle={{ backgroundColor: "green" }}
                        onPress={() => nav.navigate("NewQuestionnaire")}
                    />
                    {optionsList.map((item, i) => {
                        return (
                            <ListItem
                                key={i}
                                bottomDivider
                                onPress={() =>
                                    nav.navigate("ManagerEachQuestions", {
                                        questions: item.questions,
                                        id: item.id,
                                    })
                                }
                            >
                                <ListItem.Content>
                                    <ListItem.Title>
                                        <Text>{item.name}</Text>
                                    </ListItem.Title>
                                    <ListItem.Subtitle>
                                        <Text>Area: {item.to_workspace}</Text>
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
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
