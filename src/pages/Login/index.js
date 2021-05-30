import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useCallback } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import AuthContext from "../../contexts/auth";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { signed, signIn } = useContext(AuthContext);

    function handleSign() {
        signIn(user, password);
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../../assets/logo.png")}
            />

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Nome"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={(user) => setUser(user)}
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

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                    setLoading(true);
                    handleSign();
                }}
            >
                <Text style={styles.loginText}>
                    {loading ? "Carregando..." : "ENTRAR"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default Login;
