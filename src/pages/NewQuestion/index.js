import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Input, Card, ListItem, Avatar, Button } from "react-native-elements";

export default function NewQuestion() {
    const [answers, setAnswers] = useState([
        {
            text: "Lorem ipsum dolor aliquam, interdum.",
            correct: false,
        },
        {
            text: "Lorem ipsum dolor aliquam, interdum.",
            correct: true,
        },
        {
            text: "Lorem ipsum dolor aliquam, interdum.",
            correct: false,
        },
    ]);

    return (
        <View style={{ padding: 10 }}>
            <Text>Titulo da questao:</Text>
            <Input />
            <Text>Descricao da questao:</Text>
            <Input />
            <Card>
                <Card.Title>Questoes</Card.Title>
                <Card.Divider />
                <Card.Divider />
                {answers.map((item, i) => {
                    console.log("item", item);
                    return (
                        <ListItem key={i} bottomDivider>
                            <Avatar
                                rounded
                                title={i + 1}
                                containerStyle={{
                                    backgroundColor: item.correct
                                        ? "green"
                                        : "red",
                                }}
                            />
                            <Text>{item.text}</Text>
                            <Button title="Apagar" />
                        </ListItem>
                    );
                })}
            </Card>
        </View>
    );
}
