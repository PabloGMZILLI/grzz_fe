import React, { useState, useLayoutEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Avatar, Icon, Badge, Text } from "react-native-elements";
import * as RankingService from "../../services/RankingService";
import mainStyle from "../../Styles/main";
import { BarChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";

export default function EmployeePerformace() {
    const [ranking, setRanking] = useState([]);
    const [cityList, setCityList] = useState([]);
    const handleError = [{ error: "error" }];

    useLayoutEffect(() => {
        RankingService.getRanking().then((data) => {
            setRanking(data);
            CreateCitiesList(data);
        });
    }, []);

    function CreateCitiesList(data) {
        if (data.length > 0) {
            let tempCities = [];
            let duplicates = [...tempCities];
            let citiesWithPoints = [];

            data.forEach((item) => {
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
                let cityNameSplit = city.split(" ");
                let compactName = "";

                cityNameSplit.forEach((word) => {
                    compactName + word[0];
                });

                citiesWithPoints.push({
                    compactName: compactName.toUpperCase(),
                    city: city,
                    users: 0,
                    points: 0,
                    passed: 0,
                    rejected: 0,
                });
            });

            data.forEach((user) => {
                citiesWithPoints.forEach((city) => {
                    if (user.city.toLowerCase() == city.city) {
                        city.points = city.points + user.points;
                        city.users = city.users + 1;
                        city.passed =
                            user.points >= 700 ? city.passed + 1 : city.passed;
                        city.rejected =
                            user.points < 700
                                ? city.rejected + 1
                                : city.rejected;
                    }
                });
            });

            setCityList(citiesWithPoints);
        }
    }

    return (
        <View style={{ backgroundColor: "#b8e0de", height: "100%" }}>
            <View style={{ alignItems: "center", marginVertical: 30 }}>
                <Text
                    h4
                    style={{
                        fontWeight: "bold",
                    }}
                >
                    Performace geral dos colaboradores
                </Text>
            </View>
            <View style={{ marginBottom: 100 }}>
                <SafeAreaView>
                    <View style={[mainStyle.container]}>
                        <ScrollView>
                            {cityList ? (
                                <View
                                    style={{
                                        alignItems: "center",
                                        marginVertical: 20,
                                    }}
                                >
                                    <Text>Nenhum usuario encontrado!</Text>
                                </View>
                            ) : (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        height: 200,
                                        paddingVertical: 16,
                                    }}
                                >
                                    <YAxis
                                        data={cityList}
                                        style={{ width: "21%" }}
                                        yAccessor={({ index }) => index}
                                        scale={scale.scaleBand}
                                        contentInset={{
                                            top: 10,
                                            bottom: 10,
                                        }}
                                        spacing={0.2}
                                        svg={{
                                            fill: "black",
                                            fontSize: 12,
                                            fontWeight: "bold",
                                        }}
                                        formatLabel={(_, index) => {
                                            `${cityList[index].compactName} - ${cityList[index].points}%`;
                                        }}
                                    />
                                    <BarChart
                                        style={{ marginLeft: 8, width: "75%" }}
                                        data={cityList}
                                        horizontal={true}
                                        yAccessor={({ item }) => item.points}
                                        svg={{ fill: "#00B3A7" }}
                                        contentInset={{ top: 10, bottom: 10 }}
                                        spacing={0.2}
                                        gridMin={0}
                                    >
                                        <Grid
                                            direction={Grid.Direction.VERTICAL}
                                        />
                                    </BarChart>
                                </View>
                            )}
                        </ScrollView>
                    </View>
                    <View style={[mainStyle.container]}>
                        <ScrollView>
                            {cityList ? (
                                <View
                                    style={{
                                        alignItems: "center",
                                        marginVertical: 20,
                                    }}
                                >
                                    <Text>Nenhum usuario encontrado!</Text>
                                </View>
                            ) : (
                                cityList.map((item, i) => (
                                    <ListItem key={i} bottomDivider>
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                <Text h4>
                                                    Sede: {item.city}
                                                </Text>
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                Pontos gerais:{" "}
                                                {item.points == 0
                                                    ? 0
                                                    : item.points /
                                                      item.users}{" "}
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
                                ))
                            )}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
}
