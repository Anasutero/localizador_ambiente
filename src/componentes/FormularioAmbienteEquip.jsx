import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { UserPlus } from 'phosphor-react-native'


export const FormularioAmbienteEquip = ({adicionar}) => { 

    const [descricao, setDescricao] = useState('')
    const [statusOperacional, setStatusOperacional] = useState('')
    const [instrucaoSeg, setInstrucaoSeg] = useState('')
    const [contatoResponsavel, setContatoResponsavel] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerCampos}>
                <TextInput
                    style={estilos.campo}
                    placeholder='Descrição' 
                    placeholderTextColor='#fff'
                    onChangeText={setDescricao}
                    value={descricao}
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Status Operacional'
                    placeholderTextColor='#fff'
                    onChangeText={setStatusOperacional}
                    value={statusOperacional}      
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Instruções de Segurança'
                    placeholderTextColor='#fff'              
                    onChangeText={setInstrucaoSeg}
                    value={instrucaoSeg}
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Contato Responsavel'
                    placeholderTextColor='#fff'              
                    onChangeText={setContatoResponsavel}
                    value={contatoResponsavel}
                />      
                <TextInput 
                    style={estilos.campo}
                    placeholder='Latitude'
                    placeholderTextColor='#fff'                
                    onChangeText={setLatitude}
                    value={latitude}
                />    
                <TextInput 
                    style={estilos.campo}
                    placeholder='Longitude'
                    placeholderTextColor='#fff'                
                    onChangeText={setLongitude}
                    value={longitude}
                />                       
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={ () => adicionar(descricao, statusOperacional, instrucaoSeg, contatoResponsavel, latitude, longitude) }
            >
                <Text>
                    <UserPlus 
                        size={28} 
                        color="#fff"
                    />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
    },
    conteinerCampos: {
        flex: 1,
    },
    campo: {
        height: 50,
        backgroundColor: '#ff477e',
        color: '#fff',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        width: 60,
        height: 290,
        marginStart: 10,
        backgroundColor: '#ff477e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
  });