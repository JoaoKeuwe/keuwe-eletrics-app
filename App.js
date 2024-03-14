import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
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
    marginBottom: "5rem",
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  span: {
    fontSize: 45,
    color: "#00A8A8",
    marginLeft: -10,
  },
  text: {
    fontSize: 35,
    marginBottom: 20,
    color: "white",
  },
  button: {
    width: "100%",
    borderRadius: 10,
    fontSize: 25,
    textAlign: 'center',
    color: "white",
    backgroundColor: "#00A8A8",
    height: 35,
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
  const [cidade, setCidade] = useState("");

  const handlePress = () => {
    // Navigate to the CarSelection screen
    navigation.navigate("CarSelection");
  };

  return (
    <ImageBackground
      source={require("./assets/login.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Bem vindo ao <br /> <span style={styles.span}>Keuwe Eletrics</span> </Text>
    
        <TouchableOpacity style={styles.button} title="Entrar" onPress={handlePress} >Entrar</TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CarSelection" component={CarSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
