// LoginScreen.tsx

import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SocialIcon } from "react-native-elements";

const LoginScreen = () => {
  const handleLogin = () => {
    // Implement your login logic here
    console.log("Login button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.socialButton}
          onPress={() => console.log("Facebook login pressed")}
        />
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.socialButton}
          onPress={() => console.log("Google login pressed")}
        />
        <SocialIcon
          title="Sign In With Apple"
          button
          type="apple"
          iconColor="black"
          style={styles.socialButton}
          onPress={() => console.log("Apple login pressed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  formContainer: {
    width: "80%",
    maxWidth: 400,
  },
  input: {
    width: 300, //should be relative???
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginButton: {
    width: 300, //should be relative??
    height: 40,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  socialButton: {
    width: 300, //should be relative???
    height: 60,
    marginBottom: 10,
  },
});

export default LoginScreen;
