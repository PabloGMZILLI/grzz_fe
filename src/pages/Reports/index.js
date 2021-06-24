import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Icon, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import mainStyle from "../../styles/main";

const adminOptions = [
    {
        title: "Questionários",
        path: "",
    },
    {
        title: "Por Colaborador",
        path: "UserPanel",
    },
    {
        title: "Por Sede",
        path: "EmployeePerformace",
    },
    {
        title: "Exportar Relatórios",
        path: "",
    },
];

export default function Reports() {
    var nav = useNavigation();

    return (
        <View style={[styles.panel, mainStyle.background]}>
            <SafeAreaView style={styles.list}>
                <View style={[mainStyle.container, styles.listContainer]}>
                    <ScrollView>
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
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
}
