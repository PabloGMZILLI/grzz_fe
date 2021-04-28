import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 15,
      },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    justifyContent: 'center'
  },
  buttonStyle: {
    color: "#FFF",
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
    width: "80%",
    height: 50,
    backgroundColor: "#EF4358",
    borderRadius: 15,
    shadowColor: "#000",
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.21,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonTextStyle: {
    fontSize: 15,
    color: '#FFF'
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
