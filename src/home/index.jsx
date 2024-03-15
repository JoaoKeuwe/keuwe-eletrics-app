import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 30,
    marginLeft: 10,
    padding: 10,
    gap: 20,
    width: windowWidth / 2 - 20,
    shadowColor: "#0bc5b9",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  span:{
    color: "#00A8A8",
    fontWeight: 'bold'
  }
});

const CarSelectionScreen = ({ navigation }) => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    importCarros();
  }, []);

  const importCarros = () => {
    const data = require('../utils/cars.json');
    setCarros(data);
  };

  const handlePress = () => {
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Detalhes', { carro: item })}
      >
        <Image
          style={{ width: 170, height: 100, borderRadius: 10 }}
          source={{ uri: item.imagem }}
        />
        <View >
          <Text style={styles.itemText}>{item.marca} {item.modelo}</Text>
          <Text>R$ {item.preco}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/promotion.png')} />
      </View>
      <Text style={{ fontSize: 35, marginBottom: 30, textAlign: 'center' }}>Encontre o elétrico perfeito para <Text style={styles.span}>você</Text> </Text>
      <FlatList
        data={carros}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
      <Button
        title="Continuar"
        onPress={handlePress}
        style={styles.button}
        color="blue"
      />
    </View>
  );
};

export default CarSelectionScreen;
