import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {UserMinus} from 'phosphor-react-native'


export const Item = ({descricao, statusOperacional, instrucaoSeg, contatoResponsavel, latitude, longitude, excluir}) => {
    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerUsuario}>
                <Text style={estilos.texto}>Descrição: {descricao}</Text>
                <Text style={estilos.texto}>Status Operacional: {statusOperacional}</Text>
                <Text style={estilos.texto}>Instruções: {instrucaoSeg}</Text>
                <Text style={estilos.texto}>Contato: {contatoResponsavel}</Text>
                <Text style={estilos.texto}>latitude: {latitude}</Text>
                <Text style={estilos.texto}>longitude: {longitude}</Text>
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={excluir}
            >
                <Text>
                    <UserMinus 
                        size={28} 
                        color="#FFF"
                    />               
                </Text>
            </TouchableOpacity>            

        </View>
    )
}


const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        margin: 5,
        borderRadius: 5,
    },
    conteinerUsuario: {
        flex: 1,
        paddingStart: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },    
    texto: {
        color: '#010228',
        fontSize: 16,
        fontWeight: '600'
    },
    botao: {
        width: 60,
        marginStart: 10,
        backgroundColor: '#ff477e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    
})