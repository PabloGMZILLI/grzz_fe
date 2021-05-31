import React, { useContext, useState, useLayoutEffect, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
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
    if (params) var { userDisplayed, administrative } = params;

    if (!userDisplayed && user) userDisplayed = user;

    console.log(showQuestions);

    if (administrative) useLayoutEffect(() => {
        UserService.getUserQuestions(userDisplayed.id, user.id).then((res) => setUserQuestions(res));
    }, []);


    const Question = ({ el }) => {
        console.log('aleluia: ');
        console.log(el);
        let elements = el.item;
        return (
            <View style={styles.question}>
                <Text style={{ fontSize: 15 }}>Quiz: {elements.quiz_id}</Text>
                <Text style={{ fontSize: 15 }}>Question: {elements.question_id}</Text>
                <Text style={{ fontSize: 15 }}>Resposta selecionada: {elements.answer_checked_id}</Text>
                <Text style={{ fontSize: 15 }}>Resposta correta :</Text>
                <Text style={{ fontSize: 15 }}>Pontos ganhos: {elements.points}</Text>
            </View>
        )
    }
    if (userDisplayed) {
        return (
            <>
                <View style={styles.container}>
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
                                        <Text h4><strong>Platina</strong></Text>
                                        <Text h7>
                                        <strong>Melhor pontuação:</strong> {(userDisplayed.points).toFixed(2)}
                                        </Text>
                                        <Text h7>
                                        <strong>Tipo de avaliação:</strong> {userDisplayed.workspace}
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
                        <Text h7><strong>Cidade sede:</strong> {userDisplayed.city}</Text>
                        <Text h7><strong>Função:</strong> {userDisplayed.workspace}</Text>
                    </View>
                    {
                        administrative ?
                            <View style={mainStyle.container}>
                                <Text h3 style={{ marginBottom: 10 }}> Perguntas respondidas </Text>
                                <Text h7> Total de <strong>{userQuestions.length}</strong> peguntas respondidas </Text>
                                <TouchableOpacity style={mainStyle.redButton} onPress={() => toggleQuestions(!showQuestions)}>
                                    <Text style={mainStyle.buttonText}>Exibir as questões</Text>
                                </TouchableOpacity>
                                {
                                    showQuestions ?
                                        <FlatList
                                            style={styles.questionsContainer}
                                            data={userQuestions}
                                            keyExtractor={(item, index) => 'key' + index}
                                            showsVerticalScrollIndicator={true}
                                            renderItem={
                                                element => {
                                                    return <Question el={element} />
                                                }
                                            }
                                        />
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
                </View>
            </>
        );
    }
}
