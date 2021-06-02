import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding:15
  },

  image: {
    marginBottom: 70,
    marginHorizontal: 20,
    width: '85%',
    height: 59,
    resizeMode: 'contain'
  },

  inputView: {
    backgroundColor: "#b8e0de",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 10
  },

  TextInput: {
    borderRadius: 30,
    width: "80%",
    color: '#000000',
    height: 50,
    flex: 1,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    height: 50,
  },
  loginText: {
    fontSize: 15,
    color: '#FFF'
  },
});
