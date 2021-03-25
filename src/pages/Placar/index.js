import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import styles from "./styles";
import Header from "../../widgets/header/index"

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
    name: "Carlos",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "4",
    name: "Carlos",
    lastName: "Silva",
    points: 50670
  },
  {
    id: "5",
    name: "Carlos",
    lastName: "Silva",
    points: 50670
  }
];

export default function placar() {

  const renderItem = ({ index, item }) => (
    <View style = { styles.listItem }>
      <Text>{`${index + 1} - ${item.name} ${item.lastName}`}</Text>
      <Text>{`Pontos: ${item.points}`}</Text>
    </View>
  );

  return (
    <>
      <Header title = {'Top 10'} />
      <View style = { styles.panel }>
        <SafeAreaView style={ styles.list }>
          <FlatList
            data = {topList}
            renderItem = {renderItem}
            keyExtractor = { item => item.id }
          />
        </SafeAreaView>
      </View>
    </>
  );
}