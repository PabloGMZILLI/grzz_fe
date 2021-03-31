import React from 'react';
import { View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import styles from "./styles";
import Header from "../../widgets/header/index";
import { ListItem, Avatar, Icon, Badge, Text } from 'react-native-elements'

const topList = [
  {
    id: "1",
    name: "Maria",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "2",
    name: "Carlos",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "3",
    name: "Julia",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "4",
    name: "Daniel",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "5",
    name: "Irineu",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "6",
    name: "Tony",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "7",
    name: "Carlos",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "8",
    name: "Carlos",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "9",
    name: "Carlos",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "10",
    name: "Carlos",
    lastName: "Silva",
    points: 50670
  }
];

export default function placar() {

  return (
    <>
      <Header title={'Top 10'} />
      <View style={styles.panel}>
        <SafeAreaView style={styles.list}>
          <ScrollView>
            {
              topList.map((item, i) => (
                <ListItem key={i} bottomDivider>
                  <Text h4>{ i + 1 }</Text>
                  <Icon
                    name='trophy'
                    type='font-awesome'
                    color={i == 0 ? 'orange' : 'gray'}
                  />
                  <Avatar
                    rounded
                    title={item.name[0] + item.lastName[0]}
                    containerStyle={{ backgroundColor: "#BDBDBD" }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>
                    <Text h4>{item.name} {item.lastName}</Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>Pontos: {item.points}</ListItem.Subtitle>
                  </ListItem.Content>
                  <Icon
                    name='chevron-right'
                    type='font-awesome-5'
                    color='#517fa4'
                    size={14}
                  />
                </ListItem>
              ))
            }
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
}