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

export default function ManagerQuestions() {
    var nav = useNavigation();

    const optionsList = [
        {
            area: "RH",
            questions: [
                {
                    title: "Questao 1",
                    hitsRate: 80,
                    answers: [
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: true,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
                {
                    title: "Questao 2",
                    hitsRate: 45,
                    answers: [
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: true,
                        },
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
                {
                    title: "Questao 3",
                    hitsRate: 70,
                    answers: [
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
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
                {
                    title: "Questao 4",
                    hitsRate: 50,
                    answers: [
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
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
                {
                    title: "Questao 5",
                    hitsRate: 30,
                    answers: [
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: true,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
            ],
        },
        {
            area: "Gestao",
            questions: [
                {
                    title: "Questao 1",
                    hitsRate: 80,
                    answers: [
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: true,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
                {
                    title: "Questao 2",
                    hitsRate: 45,
                    answers: [
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: true,
                        },
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
                {
                    title: "Questao 3",
                    hitsRate: 70,
                    answers: [
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
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
                {
                    title: "Questao 4",
                    hitsRate: 50,
                    answers: [
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
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
                {
                    title: "Questao 5",
                    hitsRate: 30,
                    answers: [
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: true,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                        {
                            text: "Lorem ipsum dolor aliquam, interdum.",
                            correct: false,
                        },
                    ],
                    description: `Lorem ipsum condimentum justo eleifend dapibus aliquam gravida aenean pharetra ipsum, placerat quis nisl ultrices lacinia mauris malesuada condimentum ac varius, ultricies libero porttitor tempor torquent nisl porta lacinia justo. malesuada auctor eros morbi posuere a taciti rutrum, justo accumsan vestibulum torquent mollis at dolor, libero tellus libero eget nisi duis. lectus neque habitasse mollis conubia quis facilisis, porttitor varius curae interdum augue quam vestibulum, aenean aliquet velit mauris morbi. nisl ornare enim scelerisque hendrerit per vulputate accumsan lobortis nulla, ante dictum erat lobortis morbi faucibus molestie pretium habitant, molestie commodo curabitur et ante ut nullam donec.`,
                },
            ],
        },
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
                                    nav.navigate(
                                        "ManagerEachQuestions",
                                        item.questions
                                    )
                                }
                            >
                                <ListItem.Content>
                                    <ListItem.Title>
                                        <Text>{item.area}</Text>
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
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
