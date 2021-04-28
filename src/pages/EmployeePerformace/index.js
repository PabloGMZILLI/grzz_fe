import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Avatar, Icon, Badge, Text } from "react-native-elements";
import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";

export default function EmployeePerformace() {
    const data = [75, 80, 60];

    const list = [
        { sede: "Passo Fundo" },
        { sede: "Passo Fundo" },
        { sede: "Passo Fundo" },
        { sede: "Passo Fundo" },
        { sede: "Passo Fundo" },
        { sede: "Passo Fundo" },
    ];

    return (
        <View>
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
            <View style={{ margin: 20 }}>
                <AreaChart
                    style={{ height: 200 }}
                    data={data}
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={shape.curveNatural}
                    svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
                >
                    <Grid />
                </AreaChart>
            </View>
            <View style={{ marginBottom: 10 }}>
                <SafeAreaView>
                    <ScrollView>
                        {list.map((item, i) => (
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>
                                        <Text h4>Sede: {item.sede}</Text>
                                    </ListItem.Title>
                                    <ListItem.Subtitle>
                                        Pontos gerais: 60 pontos
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
        </View>
    );
}
