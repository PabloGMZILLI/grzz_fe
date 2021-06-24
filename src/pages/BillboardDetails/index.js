import React, { useContext, useState, useLayoutEffect, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { Avatar, Text, Icon, SocialIcon } from "react-native-elements";
import AuthContext from "../../contexts/auth";
import * as UserService from "../../services/UserService";
import Constants from "expo-constants";

import styles from "./styles";
import mainStyle from "../../styles/main";

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
        if (element) {
            return (
                <View key={index} style={styles.question}>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Quiz: </Text> {element.quiz_label}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Questão: </Text> {element.question_label}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Resposta selecionada: </Text> {element.answer_checked_label}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Resposta correta: </Text>{element.correct_answer_label}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Pontos ganhos: </Text> {element.points}</Text>
                    <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Tempo gasto: </Text> {(element.timespent > 60) ? (element.timespent / 60) + ' min/s' : element.timespent + ' segundos'} </Text>
                </View>
            )
        }
    }

    function nameNormalized(name, lastname) {
        let firstname = name[0].toUpperCase() + name.substr(1);
        let fullname = firstname + " " + lastname[0].toUpperCase() + lastname.substr(1);
        return fullname;
    }

    if (userDisplayed) {
        return (
            <View style={mainStyle.background}>
                <ScrollView>
                    <View style={[mainStyle.container,  { marginTop: Constants.statusBarHeight + 20,  flexDirection: "row"}]}>
                        <View style={{flex:1}}>
                        <Avatar
                            rounded
                            title={
                                userDisplayed.name[0].toUpperCase() +
                                userDisplayed.lastname[0].toUpperCase()
                            }
                            containerStyle={{
                                backgroundColor: "#EF4358",
                                marginTop: 10,
                                
                            }}
                            size={70}
                        />
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 0, flex: 4 }}>
                            <Text style={{ fontSize: 30 }}>
                                {nameNormalized(userDisplayed.name, userDisplayed.lastname)}
                            </Text>
                            <Text h4>Recursos Humanos</Text>
                        </View>
                    </View>
                    <View style={[mainStyle.container, {padding:15}]} >
                        <Text h4 style={{ marginBottom: 10, alignSelf: "center" }}>Dados</Text>
                        <Text style={{ fontSize: 20, marginBottom: 5 }}><Text style={{ fontWeight: 'bold' }}>Cidade sede:</Text> {userDisplayed.city}</Text>
                        <Text style={{ fontSize: 20, marginBottom: 5 }}><Text style={{ fontWeight: 'bold' }}>Função:</Text> {userDisplayed.workspace}</Text>
                        <Text style={{ fontSize: 20, marginBottom: 5 }}><Text style={{ fontWeight: 'bold' }}>Email:</Text> {userDisplayed.email}</Text>
                        <Text style={{ fontSize: 20, marginBottom: 5 }}><Text style={{ fontWeight: 'bold' }}>Data de aniversário:</Text> {userDisplayed.birthday}</Text>
                    </View>
                    <View style={[mainStyle.container, {padding:15}]} >
                        <Text h4 style={{ marginBottom: 10, alignSelf: "center" }}>Desempenho</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Icon
                                name="trophy"
                                type="font-awesome"
                                color="grey"
                                size={80}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text h4><Text style={{ fontWeight: 'bold' }}>Platina</Text></Text>
                                <Text h7>
                                    <Text style={{ fontWeight: 'bold' }}>Pontuação:</Text> {userDisplayed && userDisplayed.points ? (userDisplayed.points).toFixed(2) : null}
                                </Text>
                                <Text h7>
                                    <Text style={{ fontWeight: 'bold' }}>Tipo das avaliações:</Text> {userDisplayed && userDisplayed.workspace}
                                </Text>
                            </View>
                        </View>
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
                        <Text h4 style={{ marginBottom: 10, alignSelf: "center" }}>Rede sociais</Text>
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
    } else {
        <View style={{flex: 1, alignContent: "center", justifyContent: "center"}}><ActivityIndicator size="large" color="#EF4358" /></View>
    }
}
