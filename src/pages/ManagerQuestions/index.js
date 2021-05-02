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

export default function ManagerQuestions() {
    const optionsList = [
        { title: "Questao 1", hitsRate: 80 },
        { title: "Questao 2", hitsRate: 45 },
        { title: "Questao 3", hitsRate: 70 },
        { title: "Questao 4", hitsRate: 50 },
        { title: "Questao 5", hitsRate: 30 },
    ];

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
                        title="Adicionar nova questao"
                        style={{ padding: 20 }}
                        buttonStyle={{ backgroundColor: "green" }}
                    />
                    {optionsList.map((item, i) => {
                        return (
                            <ListItem key={i} bottomDivider>
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
