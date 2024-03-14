import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  text: {
    fontSize: 16,
  },
});

const carros = [
  {
    id: 1,
    marca: 'Tesla',
    modelo: 'Model S',
    preco: 265.35,
  },
  {
    id: 2,
    marca: 'BYD',
    modelo: 'Han EV',
    preco: 230.00,
  },
  {
    id: 3,
    marca: 'Porsche',
    modelo: 'Taycan',
    preco: 350.00,
  },
];

const CarSelectionScreen = () => {
  const [carroSelecionado, setCarroSelecionado] = useState(null);

  const handlePress = () => {
    // Handle "Continuar" button press here (optional)
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.marca} {item.modelo}</Text>
        <Text style={styles.text}>R$ {item.preco}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Encontre o elétrico perfeito para você</Text>
      <FlatList
        style={{ width: '100%' }}
        data={carros}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Button title="Continuar" onPress={handlePress} />
    </View>
  );
};

export default CarSelectionScreen;
