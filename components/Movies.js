import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const baseUrl = 'https://api.otaviolube.com';

export default function Filmes({ filmes, handleFilmeSelect }) {
  return (
    <View style={styles.container}>
      {filmes.map(filme => (
        <View key={filme.id} style={styles.filme}>
          {filme.poster ? (
            <Image
              style={styles.poster}
              source={{ uri: baseUrl + filme.attributes.poster.data.attributes.url }}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholder} />
          )}
          <View style={styles.infoContainer}>
            <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
            <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
            <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
            <View style={styles.linha}>
              <Text style={styles.label}>Lançamento:</Text>
              <Text style={styles.valor}>
                {new Date(filme.attributes.publishedAt).toLocaleDateString()}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleFilmeSelect(filme)}
            >
              <Text style={styles.textoBotao}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
      },
      filme: {
        flexDirection: 'row',
        backgroundColor: '#fff59d',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
        elevation: 2,
      },
      poster: {
        width: 100,
        height: 150,
        marginRight: 10,
        borderRadius: 10,
      },
      infoContainer: {
        flex: 1,
        marginLeft: 10,
      },
      titulo: {
        backgroundColor: '#f1c40f',
        borderRadius: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
      subtitulo: {
        backgroundColor: '#f9e79f',
        borderRadius: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
      sinopse: {
        backgroundColor: '#fdebd0',
        borderRadius: 5,
        fontSize: 14,
        color: '#000000',
        marginBottom: 10,
        padding: 10,
      },
      linha: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      label: {
        fontSize: 14,
        color: '#f1c40f',
        marginRight: 5,
        fontWeight: 'bold',
      },
      valor: {
        fontSize: 14,
        color: '#000000',
        fontWeight: 'bold',
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