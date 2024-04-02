import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'
import { FormularioAmbienteEquip } from '../componentes/FormularioAmbienteEquip'
import { ListaAmbienteEquip } from "../componentes/ListaAmbienteEquip"
import uuid from 'react-native-uuid'


export const AmbienteEquipamento = () => { 

    const [item, setItem] = useState([])

    const adicionarItem = (descricao, statusOperacional, instrucaoSeg, contatoResponsavel, latitude, longitude) => {

        let novoItem = {
            codigo: uuid.v4(),
            descricao: descricao,
            statusOperacional: statusOperacional,
            instrucaoSeg: instrucaoSeg,
            contatoResponsavel: contatoResponsavel,
            latitude: latitude,
            longitude: longitude
        } 

        setItem([...item, novoItem])
        console.log(novoItem)
    }


    const removerItem = (codigo) => {

        setItem( item.filter(
            item => item.codigo !== codigo
        ) )
    }

    return(
        <View style={estilos.conteiner}>

            <Cabecalho 
                titulo="Cadastro de itens"
            />

            <FormularioAmbienteEquip 
                adicionar={adicionarItem}
            />  

            <ListaAmbienteEquip 
                colecao={item}
                remover={removerItem}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: '#080a0c'
    },
  });