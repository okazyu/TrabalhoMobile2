import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function () {
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        console.log(objeto.data);
        setFilmes(objeto.data);
      })
  }, []);

  return (
    <View style={styles.container}>
      { filmes.length > 0 ? filmes.map(filme =>
        <Text>
          {'\n\n'}TITULO: {filme.attributes.titulo}
          <Text>
            {'\n\n'}SINOPSE: {filme.attributes.sinopse}
          </Text>
        </Text>) : <Text>Carregando...</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent:'center'
  },
});
