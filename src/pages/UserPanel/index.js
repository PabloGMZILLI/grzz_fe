import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";
import { ListItem, Avatar, Icon, Text } from "react-native-elements";

import axios from "../../instances/axios";

export default function UserPanel({ route, navigation }) {
    const [userList, setUserList] = useState([
        { name: "Carlos", lastname: "Silva", type: "Admin" },
        { name: "Maria", lastname: "Silva", type: "Usuario" },
    ]);

    if (userList) {
        return (
            <View style={styles.panel}>
                <SafeAreaView style={styles.list}>
                    <ScrollView>
                        {userList.map((item, i) => (
                            <ListItem key={i} bottomDivider>
                                <Text h4>{i + 1}</Text>
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
                                        Tipo: {item.type}
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
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    } else {
        return <View style={styles.loader}></View>;
    }
}