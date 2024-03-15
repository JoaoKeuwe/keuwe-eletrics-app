import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CarSelectionScreen from "./src/home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  span: {
    fontSize: 55,
    color: "#00A8A8",
    
  },
  text: {
    fontSize: 45,
    marginBottom: 20,
    color: "white",
  },
  button: {
    width: 200,
    borderRadius: 10,
    fontSize: 25,
    textAlign: "center",
    color: "white",
    backgroundColor: "#00A8A8",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
  const [cidade, setCidade] = useState("");

  const handlePress = () => {
    // Navigate to the CarSelection screen
    navigation.navigate("seleção de carros");
  };

  return (
    <ImageBackground
      source={require("./assets/login.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Bem vindo ao{"\n"} <Text style={styles.span}>Keuwe Eletrics</Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="seleção de carros" component={CarSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
