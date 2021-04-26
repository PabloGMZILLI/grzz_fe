import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from './styles';
import AuthContext from '../../contexts/auth';
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signed, signIn } = useContext(AuthContext);

  function handleSign() {
    console.log(signed);
    signIn();
    console.log(signed);

  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nome"
          placeholderTextColor="#a9a9a9"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha"
          placeholderTextColor="#a9a9a9"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Esqueci minha senha</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={ () => { handleSign() } }>
        <Text style={styles.loginText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;