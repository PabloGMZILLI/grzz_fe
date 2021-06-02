import React, { useState, useLayoutEffect } from "react";
import { View, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import { ListItem, Avatar, Icon, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as RankingService from "../../services/RankingService";

import mainStyle from "../../Styles/main";
import styles from "./styles";

export default function Billboard() {
    const [ranking, setRanking] = useState([]);
    var nav = useNavigation();

    useLayoutEffect(() => {
        RankingService.getRanking().then((res) => setRanking(res));
    }, []);
    function nameNormalized(name, lastname) {
        let fullname = "";
        let firstname = name[0].toUpperCase() + name.substr(1);
        if ( (name.length + lastname.length) >= 10) {
            fullname = firstname + " " + lastname[0].toUpperCase() + lastname.substr(1, 3) + "...";
        } else {
            fullname = firstname + " " + lastname[0].toUpperCase() + lastname.substr(1);
        }
        return fullname;
    }

    if (ranking) {
        return (
            <View style={styles.panel}>
                <SafeAreaView style={styles.list}>
                    <ScrollView>
                        <View style={[mainStyle.header, {
                            marginBottom: 10, alignItems: 'center'
                        }]}>
                            <Text h2 style={{ fontWeight: "bold" }} >
                                Classificação
                            </Text>
                        </View>
                        <View style={[mainStyle.container, { marginHorizontal: 10 }]}>
                            {ranking.map((item, i) => (
                                <ListItem
                                    key={i}
                                    bottomDivider={(i === ranking.length - 1) ? null : true}
                                    onPress={() =>
                                        nav.navigate("BillboardDetails", { item, administrative: false })
                                    }
                                >
                                    <Text style={{width:18}} h5>{i + 1}</Text>
                                    <Avatar
                                        rounded
                                        size="small"
                                        title={
                                            item.name[0].toUpperCase() +
                                            item.lastname[0].toUpperCase()
                                        }
                                        containerStyle={{
                                            backgroundColor: "#EF4358",
                                        }}
                                    />
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            <Text  style={{ width: 50}} h5>
                                                {nameNormalized(item.name, item.lastname)}
                                            </Text>
                                        </ListItem.Title>
                                        <ListItem.Subtitle>
                                            {item.workspace}
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
                                    <View style={{flex: 1, flexDirection: "row", alignContent: "center", marginRight: 0}}>
                                        <Icon
                                            name="trophy"
                                            type="font-awesome"
                                            color={i == 0 ? "orange" : "gray"}
                                        />
                                        <Text style={{marginLeft: 5}}>{item.points}</Text>
                                    </View>
                                    <Icon
                                        name="chevron-right"
                                        type="font-awesome-5"
                                        color="#517fa4"
                                        size={14}
                                    />
                                </ListItem>
                            ))}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    } else {
        return <View style={{flex: 1, alignContent: "center", justifyContent: "center"}}><ActivityIndicator size="large" color="#EF4358" /></View>
    }
}
