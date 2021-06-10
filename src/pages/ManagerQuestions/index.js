import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
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
    const [loading, setLoading] = useState(  true );
    const [test, setTest] = useState(  true );

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            QuizService.getQuizzes().then((data) => setOptionsList(data));
        });
        setLoading(false);
        return unsubscribe;
    }, [navigation]);

    if (test) {
        setOptionsList([]);
        setTest(false);
    }


    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: '#b8e0de' }}>
            <SafeAreaView style={{ width: "100%", height: "100%" }}>
                <ScrollView>
                    <View style={{ flex: 1, width: '100%', marginTop: 10, alignItems: 'center' }} >
                    <TouchableOpacity style={[mainStyle.redButton, { width: '80%'}]} onPress={() => nav.navigate("NewQuiz")}>
                        <Text style={mainStyle.buttonText}>Adicionar novo questionário</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={[mainStyle.container, {margin: 10}]}>
                        {
                            loading ?
                            <View style={{flex: 1, alignContent: "center", justifyContent: "center"}}>
                                <ActivityIndicator size="large" color="#EF4358" />
                            </View>
                            : null
                        }
                        {
                            optionsList && optionsList.length > 0 ?
                                <View style={{ flexDirection: "row", marginLeft: 15, borderBottomWidth: 2, borderBottomColor: "#d3d3d3", paddingBottom: 10 }}>
                                    <Text style={{ flex: 1, color: "#d3d3d3" }}>ID</Text>
                                    <Text style={{ flex: 6, color: "#d3d3d3" }}>Título do questionário</Text>
                                </View>
                                : <Text style={{ alignSelf: "center" }}>Nenhum questionário cadastrado</Text>
                        }
                        { optionsList.map((item, i) => {
                            const pageTitle = "Questionário ID " + optionsList[i].id;
                            return (
                                    <ListItem
                                        key={i}
                                        bottomDivider={(i === optionsList.length - 1) ? null : true}
                                        onPress={() =>
                                            nav.navigate("ManagerEachQuestions", {
                                                pageTitle: pageTitle,
                                                quiz: item,
                                                id: item.id,
                                            })
                                        }
                                    >
                                        <ListItem.Content style={{flexDirection: "row"}}>
                                            <Text style={{ flex: 1, color: "#d3d3d3" }}>{item.id}</Text>
                                            <View style={{ flex: 6 }}>
                                                <Text style={{alignContent: "center"}}>{item.name}</Text>
                                                <Text>Setor: {item.to_workspace}</Text>
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
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
