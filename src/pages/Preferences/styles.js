import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  headertitle: {
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center"
  },
  listItem: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    display: "flex",
    borderRadius: 10,
  },
  itemContent: {
    fontSize: 14,
  },
  list: {
    width: "100%",
    height: "100%",
  },
  listContainer: {
    margin: 15
  },
  panel: {
    flex: 1,
    alignItems: "center",
  },
});
