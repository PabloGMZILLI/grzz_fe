import React, { useState, useLayoutEffect, useContext } from "react";
import { View, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import { ListItem, Avatar, Icon, Text } from "react-native-elements";
import AuthContext from '../../contexts/auth';
import * as UserService from "../../services/UserService";

import mainStyle from "../../styles/main";
import styles from "./styles";

export default function UserPanel({ route, navigation }) {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useLayoutEffect(() => {
        UserService.getAllUser(user.id).then((res) => setUserList(res));
    }, []);

    function nameNormalized(name, lastname) {
        let fullname = "";
        let firstname = name[0].toUpperCase() + name.substr(1);
        if ((name.length + lastname.length) >= 12) {
            fullname = firstname + " " + lastname[0].toUpperCase() + lastname.substr(1, 3) + "...";
        } else {
            fullname = firstname + " " + lastname[0].toUpperCase() + lastname.substr(1);
        }
        return fullname;
    }

    if (userList) {
        return (
            <View style={[styles.panel, mainStyle.background]}>
                <SafeAreaView style={styles.list}>
                    <View style={[mainStyle.container, {marginTop: 10 }]}>
                        <ScrollView>
                            {
                                loading ?
                                    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
                                        <ActivityIndicator size="large" color="#EF4358" />
                                    </View>
                                    : null
                            }
                            {userList.map((item, i) => {
                                if (loading) setLoading(false);
                                return (
                                    <ListItem
                                        key={i}
                                        bottomDivider={(i === userList.length - 1) ? null : true}
                                        onPress={() => {
                                            navigation.navigate(
                                                "BillboardDetails",
                                                { item, administrative: true }
                                            );
                                        }}
                                    >
                                        <Avatar
                                            rounded
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
                                                <Text h5>
                                                    {nameNormalized(item.name, item.lastname)}
                                                </Text>
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                Tipo: {item.account_type}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <Icon
                                            name="chevron-right"
                                            type="font-awesome-5"
                                            color="#517fa4"
                                            size={14}
                                        />
                                    </ListItem>
                                )
                            }
                            )}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        );
    } else {
        return <View style={styles.loader}></View>;
    }
}
