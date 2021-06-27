import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Avatar, Icon, Badge, Text } from "react-native-elements";
import mainStyle from "../../styles/main";
import { BarChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";

export default function EmployeePerformace({ route, navigation }) {
    const { cityList } = route.params;

    console.log(route.params);

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
                            {!cityList ? (
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
                                        formatLabel={(_, index) =>
                                            `${cityList[index].compactName} - ${cityList[index].percent}%`
                                        }
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
                            {!cityList ? (
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
