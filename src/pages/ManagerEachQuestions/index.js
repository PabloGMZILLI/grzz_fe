import React from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import {
    ListItem,
    Icon,
    Text,
} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import mainStyle from "../../Styles/main";

export default function ManagerEachQuestions({ route, navigation }) {
    var nav = useNavigation();
    const { quiz, id } = route.params;
    const questions = quiz.questions;

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
                    <View style={{flexDirection: "row", paddingHorizontal: 8}}> 
                        <View style={{ flex: 1, alignItems: 'center', marginRight: 10 }} >
                            <TouchableOpacity
                                style={[mainStyle.redButton, { backgroundColor: "#48d241", flexDirection: "row" }]}
                                onPress={ () =>
                                    nav.navigate("NewQuiz", {
                                        pageTitle: "Edição questionário ID " + quiz.id,
                                        quiz,
                                    })
                                }
                            >
                                <Text style={mainStyle.buttonText, {color: "white", fontSize: 18}}>Editar questionário</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }} >
                            <TouchableOpacity
                                style={[mainStyle.redButton]}
                                onPress={() =>
                                    nav.navigate("NewQuestion", {
                                        quizId: id,
                                    })
                                }
                            >
                                <Text style={mainStyle.buttonText, { fontSize: 18, color: "white" }}>Adicionar questão</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[mainStyle.container, { margin: 10 }]}>
                        {
                            questions && questions.length > 0 ?
                                <View style={{ flexDirection: "row", marginLeft: 15, borderBottomWidth: 2, borderBottomColor: "#d3d3d3", paddingBottom: 10 }}>
                                    <Text style={{ flex: 1, color: "#d3d3d3" }}>ID</Text>
                                    <Text style={{ flex: 6, color: "#d3d3d3" }}>Título da questão</Text>
                                </View>
                                : null
                        }
                        {questions && questions.length > 0 ?
                            questions.map((item, i) => {
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
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ flex: 1, color: "#d3d3d3" }}>{item.id}</Text>
                                                <Text style={{ flex: 5 }}>{item.question}</Text>
                                            </View>
                                        </ListItem.Content>
                                        <Icon
                                            name="chevron-right"
                                            type="font-awesome-5"
                                            color="#517fa4"
                                            size={14}
                                        />
                                    </ListItem>
                                );
                            })
                            :
                            <Text style={{ alignSelf: "center" }}>Nenhuma questão cadastrada</Text>
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
