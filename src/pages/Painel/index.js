import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Icon, Badge, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import mainStyle from "../../styles/main";
import styles from "./styles";

const adminOptions = [
    {
        title: "Relatórios",
        path: "Reports",
    },
    {
        title: "Configurações dos Questionários",
        path: "ManageQuestions",
    },
    {
        title: "Configurações dos Colaboradores",
        path: "",
    },
];

export default function Painel() {
    var nav = useNavigation();

    return (
        <View style={[styles.panel, mainStyle.background]}>
            <SafeAreaView style={styles.list}>
                <ScrollView>
                    <Text
                        h2
                        style={[ mainStyle.header, styles.headertitle ]}
                    >
                        Painel Admin
                    </Text>
                    <View style={[mainStyle.container, styles.listContainer]}>
                        {adminOptions.map((item, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    bottomDivider={(i === adminOptions.length - 1) ? null : true}
                                    onPress={() => nav.navigate(item.path)}
                                >
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            <Text>{item.title}</Text>
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
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
