import React, { useState, useLayoutEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
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

    if (ranking) {
        return (
            <View style={styles.panel}>
                <SafeAreaView style={styles.list}>
                    <ScrollView>
                        <View style={[mainStyle.header, {
                            marginBottom: 10, alignItems: 'center'
                        }]}>
                            <Text
                                h2
                                style={{
                                    fontWeight: "bold"
                                }}
                            >
                                Classificação
                            </Text>
                        </View>
                        <View style={[mainStyle.container, {marginHorizontal: 10}]}>
                            {ranking.map((item, i) => (
                                <ListItem
                                    key={i}
                                    bottomDivider={(i === ranking.length - 1) ? null : true}
                                    onPress={() =>
                                        nav.navigate("BillboardDetails", { item, administrative: false })
                                    }
                                >
                                    <Text h4>{i + 1}</Text>
                                    <Icon
                                        name="trophy"
                                        type="font-awesome"
                                        color={i == 0 ? "orange" : "gray"}
                                    />
                                    <Avatar
                                        rounded
                                        title={
                                            item.name[0].toUpperCase() +
                                            item.lastname[0].toUpperCase()
                                        }
                                        containerStyle={{
                                            backgroundColor: "#BDBDBD",
                                        }}
                                    />
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            <Text h4>
                                                {item.name[0].toUpperCase() +
                                                    item.name.substr(1)}{" "}
                                                {item.lastname[0].toUpperCase() +
                                                    item.lastname.substr(1)}
                                            </Text>
                                        </ListItem.Title>
                                        <ListItem.Subtitle>
                                            Pontos: {item.points}
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
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
        return <View style={styles.loader}></View>;
    }
}
