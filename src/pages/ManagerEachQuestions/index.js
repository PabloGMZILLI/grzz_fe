import React from "react";
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

export default function ManagerEachQuestions({ route, navigation }) {
    var nav = useNavigation();

    const questions = route.params;

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
                        title="Adicionar novo questao"
                        style={{ padding: 20 }}
                        buttonStyle={{ backgroundColor: "green" }}
                        onPress={() => nav.navigate("NewQuestion")}
                    />
                    {questions.map((item, i) => {
                        return (
                            <ListItem
                                key={i}
                                bottomDivider
                                onPress={() =>
                                    nav.navigate("QuestionDetails", item)
                                }
                            >
                                <ListItem.Content>
                                    <ListItem.Title>
                                        <Text>{item.title}</Text>
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
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
