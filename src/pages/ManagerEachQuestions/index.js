import React from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import {
    ListItem,
    Icon,
    Text,
    Button,
} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import mainStyle from "../../Styles/main";

export default function ManagerEachQuestions({ route, navigation }) {
    var nav = useNavigation();

    const { questions, id } = route.params;
    console.log('id: ', id);
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
                    <View style={{ flex: 1, width: '100%', alignItems: 'center' }} >
                        <TouchableOpacity
                            style={[mainStyle.redButton, { width: '80%' }]}
                            onPress={() =>
                                nav.navigate("NewQuestion", {
                                    quizId: id,
                                })
                            }
                        >
                            <Text style={mainStyle.buttonText}>Adicionar questão</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[mainStyle.container, { margin: 10 }]}>
                        {questions.map((item, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    bottomDivider={(i === questions.length - 1) ? null : true}
                                    onPress={() => {
                                        nav.navigate("QuestionDetails", {
                                            quizId: id,
                                            question: item
                                        })
                                    }
                                    }
                                >
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            <Text>{item.question}</Text>
                                        </ListItem.Title>
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
