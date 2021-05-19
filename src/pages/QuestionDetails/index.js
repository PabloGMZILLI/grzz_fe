import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import {
    ListItem,
    Text,
    Card,
    Button,
    Icon,
    Avatar,
} from "react-native-elements";

export default function QuestionDetails({ route, navigation }) {
    const question = route.params;

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
                    <View style={{ padding: 20 }}>
                        <Text h1>{question.title}</Text>
                        <Text h4 style={{ marginTop: 10 }}>
                            Taxa de acertos: {question.hitsRate}%
                        </Text>
                    </View>

                    <Card>
                        <Card.Title>Descricao</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            {question.description}
                        </Text>
                    </Card>
                    <Card>
                        <Card.Title>Respostas</Card.Title>
                        <Card.Divider />
                        {question.answers.map((item, i) => {
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
                                </ListItem>
                            );
                        })}
                    </Card>
                    <Button
                        title="Editar questao"
                        style={{ padding: 20, paddingBottom: 0 }}
                        buttonStyle={{ backgroundColor: "orange", padding: 15 }}
                        onPress={() =>
                            navigation.navigate("NewQuestion", question)
                        }
                        icon={
                            <Icon
                                name="trash"
                                type="font-awesome-5"
                                color="white"
                                size={15}
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                    />
                    <Button
                        title="Apagar questao"
                        style={{ padding: 20, paddingBottom: 0 }}
                        buttonStyle={{ backgroundColor: "red", padding: 15 }}
                        icon={
                            <Icon
                                name="trash"
                                type="font-awesome-5"
                                color="white"
                                size={15}
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
