import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const baseUrl = 'https://api.otaviolube.com';

const Confirm = ({ filme, handleConfirm, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton}>
        <Text style={styles.goBackText}>Voltar Tela</Text>
      </TouchableOpacity>
      {filme.poster ? (
        <Image
          style={styles.poster}
          source={{ uri: baseUrl + filme.attributes.poster.data.attributes.url }}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
      <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
      <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
      <TouchableOpacity style={styles.botao} onPress={handleConfirm}>
        <Text style={styles.textoBotao}>Confirmar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f1c40f',
  },
  goBackText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  poster: {
    width: 130,
    height: 160,
    marginBottom: 10,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  sinopse: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#f1c40f',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Confirm;
