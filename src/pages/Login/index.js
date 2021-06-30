import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import AuthContext from "../../contexts/auth";
import styles from "./styles";
import mainStyle from "../../styles/main";
import * as UserService from "../../services/UserService";

const Login = ({ route, navigation }) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { signed, signIn } = useContext(AuthContext);
    const [disabledButton, setDisabledButton] = useState(false);

    async function handleSignIn() {
        UserService.loginUser(user, password).then((res) => {
            if (res) {
                signIn(res);
                navigation.replace("Home");
            }
        });
    }

    useEffect(() => {
        user.length > 0 && password.length > 0
            ? setDisabledButton(false)
            : setDisabledButton(true);
    }, [user, password]);
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
                    autoFocus={true}
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
                style={[
                    disabledButton
                        ? mainStyle.disabledButton
                        : mainStyle.redButton,
                    styles.loginBtn,
                ]}
                disabled={disabledButton}
                onPress={() => {
                    setLoading(true);
                    handleSignIn();
                }}
            >
                <Text style={styles.loginText}>
                    {loading ? (
                        <ActivityIndicator size="large" color="white" />
                    ) : (
                        "Entrar"
                    )}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default Login;
