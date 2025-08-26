import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [username, onChangeUser] = React.useState("");
  const [password, onChangePass] = React.useState("");
  const [passConfirm, onChangeConfirm] = React.useState("");
  const [passValid, setPassValid] = React.useState(false);

  const handleLogin = () => {
    console.log("Usuario: " + username);
    console.log("Senha: " + password);
  };

  let handleReset = () => {
    onChangePass("");
    onChangeConfirm("");
    console.log("Senha resetada");
  };

  React.useEffect(() => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (
      password.length >= 6 &&
      hasLetter &&
      hasNumber &&
      hasSpecial &&
      password === passConfirm
    ) {
      setPassValid(true);
    } 
    
  }, [password, passConfirm]);

  return (
    <View>
      <Text>User</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu Login"
        onChangeText={onChangeUser}
        value={username}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua Senha"
        onChangeText={onChangePass}
        value={password}
        secureTextEntry={true}
      />

      <Text>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        onChangeText={onChangeConfirm}
        value={passConfirm}
        secureTextEntry={true}
      />


      <Button
        title="Reset Password"
        onPress={handleReset}
        disabled={!passValid}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
