import {View, Text, FlatList, StyleSheet} from 'react-native'
import {Item} from './Item'


export const ListaAmbienteEquip = ({colecao, remover}) => {

    return(
        <View style={estilos.conteiner}>
  
            <FlatList 
                data={colecao}
                keyExtractor={item => item.codigo}
                renderItem={ ( { item } ) => (
                    <Item 
                        descricao={item.descricao}
                        statusOperacional={item.statusOperacional}
                        instrucaoSeg={item.instrucaoSeg}
                        contatoResponsavel={item.contatoResponsavel}
                        latitude={item.latitude}
                        longitude={item.longitude}
                        excluir={ () => remover(item.codigo) }
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={estilos.texto}>
                        Nenhum item armazenado.
                    </Text>
                )}                
            />

        </View>
    )
}


const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    texto: {
        color: '#fff',
        textAlign: 'center'
    }
})