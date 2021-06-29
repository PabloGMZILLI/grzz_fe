import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Icon, Text, Badge } from "react-native-elements";
import styles from "./styles";
import mainStyle from "../../styles/main";
import * as headquarters from "../../global/headquarters";

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

export default function Reports({ route, navigation }) {
    const [loadedGraphData, setLoadedGraphData] = useState(false);
    const [headquartersData, setHeadquartersData] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            async function loadCityList() {
                await headquarters
                    .genereteHeadquartersRanking()
                    .then((data) => {
                        setHeadquartersData(data);
                        setLoadedGraphData(true);
                        console.log("headquarters", headquartersData);
                    });
            }
            loadCityList();
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={[styles.panel, mainStyle.background]}>
            <SafeAreaView style={styles.list}>
                <View style={[mainStyle.container, styles.listContainer]}>
                    <ScrollView>
                        {adminOptions.map((item, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    bottomDivider={
                                        i === adminOptions.length - 1
                                            ? null
                                            : true
                                    }
                                    onPress={() => {
                                        if (
                                            item.path === "EmployeePerformace"
                                        ) {
                                            navigation.navigate(item.path, {
                                                cityList: headquartersData,
                                            });
                                        } else {
                                            navigation.navigate(item.path);
                                        }
                                    }}
                                >
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            {item.path ===
                                            "EmployeePerformace" ? (
                                                <Text>
                                                    <Text>{item.title}</Text>
                                                    <Badge
                                                        status={
                                                            loadedGraphData
                                                                ? "success"
                                                                : "error"
                                                        }
                                                        value={
                                                            loadedGraphData
                                                                ? "Carregado"
                                                                : "Carregando"
                                                        }
                                                        containerStyle={{
                                                            marginLeft: 10,
                                                        }}
                                                    />
                                                </Text>
                                            ) : (
                                                <Text>{item.title}</Text>
                                            )}
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
