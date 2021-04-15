import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Avatar, Icon, Badge, Text } from "react-native-elements";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const adminOptions = [
  {
    title: "Desempenho Geral dos Colaboradores",
    path: "EmployeePerformace",
  },
  {
    title: "Questionarios",
    path: "EmployeePerformace",
  },
  {
    title: "Colaboradores",
    path: "EmployeePerformace",
  },
];

export default function Painel() {
  var nav = useNavigation();

  return (
    <View style={styles.panel}>
      <SafeAreaView style={styles.list}>
        <ScrollView>
          <Text
            h2
            style={{
              marginTop: 40,
              marginLeft: 20,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            Painel Admin
          </Text>
          {adminOptions.map((item, i) => {
            return (
              <ListItem
                key={i}
                bottomDivider
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
      </SafeAreaView>
    </View>
  );
}
