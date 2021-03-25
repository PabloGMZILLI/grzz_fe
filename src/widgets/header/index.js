import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

export default function Header(props) {
  return (
    <View style = { styles.header }>
      <Text style = { styles.title }>{props.title}</Text>
    </View>
  );
}