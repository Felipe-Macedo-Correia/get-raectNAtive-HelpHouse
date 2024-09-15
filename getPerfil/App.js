import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App(){  
  const [data, setData] = useState({});
  const userId = 2; 

  const getClienteById = async () => {
     try {
      const response = await fetch(`http://127.0.0.1:8000/api/cli/${userId}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    getClienteById();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {data.idContratante ? (
        <Text>id: {data.idContratante}, nome: {data.nomeContratante}, CPF: {data.cpfContratante}</Text>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};
