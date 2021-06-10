import React, { useState, useLayoutEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Avatar, Icon, Badge, Text } from "react-native-elements";
import { AreaChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import * as dateFns from "date-fns";
import * as RankingService from "../../services/RankingService";

export default function EmployeePerformace() {
    const [ranking, setRanking] = useState([]);
    const [cityList, setCityList] = useState([]);

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

    useLayoutEffect(() => {
        RankingService.getRanking().then((data) => {
            setRanking(data);
            CreateCitiesList();
        });
    }, []);

    function CreateCitiesList() {
        let tempCities = [];
        let duplicates = [...tempCities];
        let citiesWithPoints = [];

        ranking.forEach((item) => {
            tempCities.push(item.city.toLowerCase());
        });

        const cities = [...new Set(tempCities)];

        cities.forEach((item) => {
            const i = duplicates.indexOf(item);
            duplicates = duplicates
                .slice(0, i)
                .concat(duplicates.slice(i + 1, duplicates.length));
        });

        cities.forEach((city) => {
            citiesWithPoints.push({
                city: city,
                users: 0,
                points: 0,
            });
        });

        ranking.forEach((user) => {
            citiesWithPoints.forEach((city) => {
                if (user.city.toLowerCase() == city.city) {
                    city.points = city.points + user.points;
                    city.users = city.users + 1;
                }
            });
        });

        setCityList(citiesWithPoints);
    }

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
                        {cityList.map((item, i) => (
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>
                                        <Text h4>Sede: {item.city}</Text>
                                    </ListItem.Title>
                                    <ListItem.Subtitle>
                                        Pontos gerais:{" "}
                                        {item.points == 0
                                            ? 0
                                            : item.points / item.users}{" "}
                                        pontos
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
