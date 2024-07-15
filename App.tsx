// App.tsx

import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import LoginScreen from "./screens/login-screen.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <LoginScreen />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
