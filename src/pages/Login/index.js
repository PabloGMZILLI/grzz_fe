import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from './styles';
import AuthContext from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, error } = useContext(AuthContext);
  const nav = useNavigation();

  function handleSign() {
    signIn(email, password);
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
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
      <Text style={styles.errorMsg}>{error ? error.message : null}</Text>
 
      <TouchableOpacity onPress={ () => nav.navigate('Register') }>
        <Text style={styles.forgot_button}>Não possuo conta</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={ () => handleSign() }>
        <Text style={styles.loginText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;