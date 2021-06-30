import React, { useContext } from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { ListItem, Icon, Badge, Text } from "react-native-elements";
import mainStyle from "../../styles/main";
import styles from "./styles";
import AuthContext from "../../contexts/auth";

export default function Painel({ route, navigation }) {
    const { signed, signIn } = useContext(AuthContext);

    return (
        <View style={[styles.panel, mainStyle.background]}>
            <SafeAreaView style={styles.list}>
                <ScrollView>
                    <Text h2 style={[mainStyle.header, styles.headertitle]}>
                        Preferencias
                    </Text>
                    <View style={[mainStyle.container, styles.listContainer]}>
                        <TouchableOpacity
                            style={[
                                mainStyle.redButton,
                                {
                                    flexDirection: "row",
                                },
                            ]}
                            onPress={() => {
                                navigation.replace("Login");
                                signIn(null);
                            }}
                        >
                            <Text
                                style={
                                    (mainStyle.buttonText,
                                    { color: "white", fontSize: 18 })
                                }
                            >
                                Sair
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
