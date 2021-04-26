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
    width: '100%',
    height: 59,
    resizeMode: 'contain'
  },

  inputView: {
    backgroundColor: "#b8e0de",
    borderRadius: 30,
    width: "100%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 10
  },

  TextInput: {
    outlineColor: "#EF4358",
    borderRadius: 30,
    width: "100%",
    color: '#000000',
    height: 50,
    flex: 1,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#EF4358",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.21,
    shadowRadius: 10,
    elevation: 8,
  },
  loginText: {
    fontSize: 15,
    color: '#FFF'
  },
});
