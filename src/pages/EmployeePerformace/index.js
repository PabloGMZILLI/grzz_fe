import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Avatar, Icon, Badge, Text } from "react-native-elements";

export default function EmployeePerformace() {
  return (
    <View>
      <SafeAreaView>
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
            Performace geral dos colaboradores
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
