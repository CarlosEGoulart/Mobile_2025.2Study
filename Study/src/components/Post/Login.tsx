import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React = require('react');

export default function Login() {
  const [username, onChangeUser] = React.useState("");
  const [password, onChangePass] = React.useState("");
  const [passConfirm, onChangeConfirm] = React.useState("");
  const [passValid, setPassValid] = React.useState(false);

  const handleLogin = () => {
    console.log("Usuario: " + username);
    console.log("Senha: " + password);
    console.log("Confirmação de senha: " + passConfirm);
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
    else{
      setPassValid(false);
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

      <Button title="Reset Password" onPress={handleReset} disabled={!passValid}></Button>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#303030ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#202020ff',
    backgroundColor: '#dbdbdbff',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1d1d1dff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

});

