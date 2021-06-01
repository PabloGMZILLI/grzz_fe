import React, { useContext, useState, useLayoutEffect, useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Text, Icon, SocialIcon } from "react-native-elements";
import AuthContext from "../../contexts/auth";
import * as UserService from "../../services/UserService";

import styles from "./styles";
import mainStyle from "../../Styles/main";

export default function BillboardDetails({ route, navigation }) {
    const { user } = useContext(AuthContext);
    const [userQuestions, setUserQuestions] = useState([]);
    const [showQuestions, toggleQuestions] = useState(false);
    const params = route.params;
    if (params) var { item, administrative } = params;

    var userDisplayed = item;
    if (!userDisplayed && user) userDisplayed = user;

    if (administrative) useLayoutEffect(() => {
        UserService.getUserQuestions(userDisplayed.id, user.id).then((res) => setUserQuestions(res));
    }, []);

    const Question = ({ element, index }) => {
        if (element){
            return (
                <View key={index} style={styles.question}>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Quiz: </Text> {element.quiz_label}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Questão: </Text> {element.question_label}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Resposta selecionada: </Text> {element.answer_checked_label}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Resposta correta: </Text>{element.correct_answer_label}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Pontos ganhos: </Text> {element.points}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Tempo gasto: </Text> { (element.timespent > 60) ? (element.timespent / 60)+ ' min/s' : element.timespent + ' segundos' } </Text>
                </View>
            )
        }
    }
    if (userDisplayed) {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.avatar}>
                        <Avatar
                            rounded
                            title={
                                userDisplayed.name[0].toUpperCase() +
                                userDisplayed.lastname[0].toUpperCase()
                            }
                            containerStyle={{
                                backgroundColor: "#BDBDBD",
                                marginTop: 10,
                            }}
                            size={70}
                        />
                        <View style={{ marginLeft: 20, marginTop: 0 }}>
                            <Text style={{ fontSize: 35 }}>
                                {userDisplayed.name[0].toUpperCase() +
                                    userDisplayed.name.substr(1)}{" "}
                                {userDisplayed.lastname[0].toUpperCase() +
                                    userDisplayed.lastname.substr(1)}
                            </Text>
                            <Text h4>Recursos Humanos</Text>
                        </View>
                    </View>
                    {userDisplayed.account_type == "admin" ? (
                        <>
                            <View style={mainStyle.container} >
                                <Text h3 style={{ marginBottom: 10 }}>Desempenho</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon
                                        name="trophy"
                                        type="font-awesome"
                                        color="blue"
                                        size={80}
                                    />
                                    <View style={{ marginLeft: 20 }}>
                                        <Text h4><Text style={{ fontWeight: 'bold' }}>Platina</Text></Text>
                                        <Text h7>
                                            <Text style={{ fontWeight: 'bold' }}>Melhor pontuação:</Text> {userDisplayed.points ? (userDisplayed).toFixed(2) : null }
                                        </Text>
                                        <Text h7>
                                            <Text style={{ fontWeight: 'bold' }}>Tipo de avaliação:</Text> {userDisplayed.workspace}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    ) : (
                        <></>
                    )}

                    <View style={mainStyle.container} >
                        <Text h3 style={{ marginBottom: 10 }}>Dados</Text>
                        <Text h7><Text style={{ fontWeight: 'bold' }}>Cidade sede:</Text> {userDisplayed.city}</Text>
                        <Text h7><Text style={{ fontWeight: 'bold' }}>Função:</Text> {userDisplayed.workspace}</Text>
                    </View>
                    {
                        administrative ?
                            <View style={mainStyle.container}>
                                <Text h3 style={{ marginBottom: 10 }}> Perguntas respondidas </Text>
                                <Text h7> Total de <Text style={{ fontWeight: 'bold' }}>{userQuestions.length}</Text> peguntas respondidas </Text>
                                <TouchableOpacity style={mainStyle.redButton} onPress={() => toggleQuestions(!showQuestions)}>
                                    <Text style={mainStyle.buttonText}>Exibir as respostas</Text>
                                </TouchableOpacity>
                                {
                                    showQuestions ?
                                        userQuestions.map((question, i) => (
                                            <Question key={i} element={question} />
                                        ))
                                        : null
                                }
                            </View>
                            : null
                    }
                    <View style={mainStyle.container}>
                        <Text h3>Rede sociais</Text>
                        <View style={styles.icons}>
                            <SocialIcon
                                style={styles.icon}
                                title="LinkedIn"
                                button
                                type="linkedin"
                            />
                            <SocialIcon
                                style={styles.icon}
                                title="WhatsApp"
                                button
                                type="whatsapp"
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
