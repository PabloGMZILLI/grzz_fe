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
                            Lorem ipsum condimentum justo eleifend dapibus
                            aliquam gravida aenean pharetra ipsum, placerat quis
                            nisl ultrices lacinia mauris malesuada condimentum
                            ac varius, ultricies libero porttitor tempor
                            torquent nisl porta lacinia justo. malesuada auctor
                            eros morbi posuere a taciti rutrum, justo accumsan
                            vestibulum torquent mollis at dolor, libero tellus
                            libero eget nisi duis. lectus neque habitasse mollis
                            conubia quis facilisis, porttitor varius curae
                            interdum augue quam vestibulum, aenean aliquet velit
                            mauris morbi. nisl ornare enim scelerisque hendrerit
                            per vulputate accumsan lobortis nulla, ante dictum
                            erat lobortis morbi faucibus molestie pretium
                            habitant, molestie commodo curabitur et ante ut
                            nullam donec.
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
