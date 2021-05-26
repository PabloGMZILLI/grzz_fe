import React, { useContext } from "react";
import { View } from "react-native";
import { Avatar, Text, Divider, Icon, SocialIcon } from "react-native-elements";
import AuthContext from "../../contexts/auth";
import styles from "./styles";

export default function BillboardDetails({ route, navigation }) {
    const { user } = useContext(AuthContext);
    var item = route.params;
    if (!item && user) {
        item = user;
    }
    console.log(item);
    if (item) {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.avatar}>
                        <Avatar
                            rounded
                            title={
                                item.name[0].toUpperCase() +
                                item.lastname[0].toUpperCase()
                            }
                            containerStyle={{
                                backgroundColor: "#BDBDBD",
                                marginTop: 10,
                            }}
                            size={70}
                        />
                        <View style={{ marginLeft: 20, marginTop: 0 }}>
                            <Text style={{ fontSize: 35 }}>
                                {item.name[0].toUpperCase() +
                                    item.name.substr(1)}{" "}
                                {item.lastname[0].toUpperCase() +
                                    item.lastname.substr(1)}
                            </Text>
                            <Text h4>Recursos Humanos</Text>
                        </View>
                    </View>
                    {item.account_type == "admin" ? (
                        <>
                            <Divider style={{ marginVertical: 10 }} />
                            <View>
                                <Text h3 style={{ marginBottom: 10 }}>
                                    Desempenho:
                                </Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon
                                        name="trophy"
                                        type="font-awesome"
                                        color="blue"
                                        size={80}
                                    />
                                    <View style={{ marginLeft: 20 }}>
                                        <Text h3>Platina</Text>
                                        <Text h4>
                                            Melhor pontuacao: {item.points}
                                        </Text>
                                        <Text h4>
                                            Tipo de avaliacao: {item.workspace}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    ) : (
                        <></>
                    )}

                    <Divider style={{ marginVertical: 10 }} />
                    <View>
                        <Text h3 style={{ marginBottom: 10 }}>
                            Dados:
                        </Text>
                        <Text h4>Cidade sede: {item.city}</Text>
                        <Text h4>Função: {item.workspace}</Text>
                    </View>
                    <Divider style={{ marginVertical: 10 }} />
                    <Text h3 style={{ marginBottom: 10 }}>
                        Rede sociais:
                    </Text>
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
            </>
        );
    }
}
