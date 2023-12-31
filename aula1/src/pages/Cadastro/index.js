import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable'

import Api from '../../services/api'

export default function Cadastro() {
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [uf, setUf] = useState("")

    async function buscarCep() {
        if(cep == "") {
            Alert.alert("Cep inválido")
            setCep("")
        }

        try{
            const response = await Api.get(`/${cep}/json`)
            setLogradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setLocalidade(response.data.localidade)
            setUf(response.data.uf)

        }catch(error) {
            console.log("ERRO" + error)
        }
    }

    return (
        <View style={Styles.containerMain}>

            <View style={Styles.containerTopbar}>
                <Text style={Styles.containerTitle}>Cadastro de Usuário</Text>
            </View>

            <View style={Styles.containerCEP}>
                <TextInput 
                    placeholder="Digite seu cep"
                    value={cep}
                    onChangeText={(texto) => setCep(texto)}
                    style={{
                        borderColor:'#ccc', 
                        borderWidth:2, 
                        width: 200,
                        padding: 15,
                        fontSize: 18,
                        marginTop: 30, 
                        marginEnd:20, 
                        borderRadius: 10
                    }}
                />
                <TouchableOpacity style={Styles.searchButton} onPress={buscarCep}>
                    <Text style={Styles.textButton}>Buscar</Text> 
                </TouchableOpacity>

            </View>

            <TextInput style={Styles.containerFields}
                placeholder="Logradouro"
                value={logradouro}
                onChangeText={(texto) => setLogradouro(texto)}
            />
            <TextInput style={Styles.containerFields}
                placeholder="Bairro"
                value={bairro}
                onChangeText={(texto) => setBairro(texto)}
            />
            <TextInput style={Styles.containerFields}
                placeholder="Cidade"
                value={localidade}
                onChangeText={(texto) => setLocalidade(texto)}
            />

            <TextInput 
                style={Styles.containerUf}
                placeholder="Estado"
                value={uf}
                onChangeText={(texto) => setUf(texto)}
            />
            
        </View>
    )
}

const Styles = StyleSheet.create({
    containerMain:{
        flex: 1,
        flexDirection: 'column',
    },
    containerTopbar:{
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#38a69d'
    },
    containerTitle:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 20
    },
    containerCEP:{
        flexDirection: 'row',
        height: 100,
        marginHorizontal: 20
    },
    searchButton:{
        backgroundColor: '#38a69d',
        width: 120,
        height: 70,
        marginTop: 30,
        marginEnd: 20,
        borderRadius: 10,
        padding: 20
    },
    textButton:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    containerFields:{
        borderColor: '#ccc',
        borderWidth: 2,
        width: 340,
        fontSize: 18,
        marginTop: 10,
        padding: 15,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    containerUf:{
        borderColor: '#ccc',
        borderWidth: 2,
        width: 90,
        fontSize: 18,
        marginTop: 10,
        padding: 15,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10
    }
})

