import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import {
    Input,
    Card,
    ListItem,
    Avatar,
    Button,
    Switch,
} from "react-native-elements";

export default function NewQuestionnaire({ route, navigation }) {
    const question = route.params;
    const [title, setTitle] = useState(question ? question.title : "");

    return (
        <View style={{ padding: 10 }}>
            <SafeAreaView
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <ScrollView>
                    <Text>Nome do novo questionario:</Text>
                    <Input
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <Button
                        title={
                            question ? "Editar questao" : "Adicionar questao"
                        }
                        disabled={title.length > 0 ? false : true}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
