import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Inicial } from './src/telas/Inicial'
import { Usuarios } from './src/telas/Usuarios'
import { Login } from './src/telas/Login'
import { Cadastro } from './src/telas/Cadastro'
import { AmbienteEquipamento } from './src/telas/AmbienteEquipamento'
import { Sobre } from './src/telas/Sobre'
import { ListaUsuarios } from './src/componentes/ListaUsuarios'
import { ListaAmbienteEquip } from './src/componentes/ListaAmbienteEquip'
import { FormularioAmbienteEquip } from './src/componentes/FormularioAmbienteEquip'

// Criação do componente JSX
export default function App() {

  // Estrutura
  return (
    <View style={styles.conteiner}>
      <StatusBar barStyle='light-content' />
      <AmbienteEquipamento/>
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  conteiner: {
    flex: 1
  }
});

