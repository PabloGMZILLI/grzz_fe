import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import {
    ListItem,
    Icon,
    Text,
} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import mainStyle from "../../Styles/main";

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
                    <View style={{ flex: 1, width: '100%', marginTop: 10, alignItems: 'center' }} >
                    <TouchableOpacity
                        style={[mainStyle.redButton, { width: '80%'}]}
                        onPress={() => nav.navigate("NewQuestionnaire")}
                    >
                        <Text style={mainStyle.buttonText}>Adicionar nova questionario</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={[mainStyle.container, {margin: 10}]}>
                    {optionsList.map((item, i) => {
                        return (
                                <ListItem
                                    key={i}
                                    bottomDivider={(i === optionsList.length - 1) ? null : true}
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
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
