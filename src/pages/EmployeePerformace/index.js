import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Avatar, Icon, Badge, Text } from "react-native-elements";
import { AreaChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import * as dateFns from "date-fns";

export default function EmployeePerformace() {
    const data = [
        {
            points: 700,
            date: dateFns.setMonth(new Date(2021, 1, 10), 1),
        },
        {
            points: 750,
            date: dateFns.setMonth(new Date(2021, 2, 25), 2),
        },
        {
            points: 850,
            date: dateFns.setMonth(new Date(2021, 3, 0), 3),
        },
        {
            points: 600,
            date: dateFns.setMonth(new Date(2021, 4, 0), 4),
        },
        {
            points: 743,
            date: dateFns.setMonth(new Date(2021, 5, 0), 5),
        },
        {
            points: 830,
            date: dateFns.setMonth(new Date(2021, 7, 0), 7),
        },
    ];

    const yLabel = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    const list = [
        { sede: "Passo Fundo", points: 900 },
        { sede: "Passo Fundo", points: 900 },
        { sede: "Passo Fundo", points: 900 },
        { sede: "Passo Fundo", points: 900 },
        { sede: "Passo Fundo", points: 900 },
        { sede: "Passo Fundo", points: 900 },
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
            <View style={{ flexDirection: "row" }}>
                <View style={{ padding: 20, height: 250, width: "100%" }}>
                    <AreaChart
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={{ top: 10, bottom: 10 }}
                        curve={shape.curveNatural}
                        svg={{ fill: "rgba(0, 179, 167, .8)" }}
                        yAccessor={({ item }) => item.points}
                        xAccessor={({ item }) => item.date}
                        xScale={scale.scaleTime}
                    >
                        <Grid />
                    </AreaChart>
                    <XAxis
                        data={data}
                        svg={{
                            fill: "black",
                            fontSize: 12,
                            fontWeight: "bold",
                            rotation: 30,
                            originY: 30,
                            y: 10,
                        }}
                        xAccessor={({ item }) => item.date}
                        scale={scale.scaleTime}
                        style={{ marginHorizontal: -15, height: 40 }}
                        contentInset={{ left: 10, right: 25 }}
                        formatLabel={(value) => dateFns.format(value, "MMM")}
                    />
                </View>
            </View>
            <View style={{ marginBottom: 100 }}>
                <SafeAreaView>
                    <ScrollView>
                        {list.map((item, i) => (
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>
                                        <Text h4>Sede: {item.sede}</Text>
                                    </ListItem.Title>
                                    <ListItem.Subtitle>
                                        Pontos gerais: {item.points} pontos
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
