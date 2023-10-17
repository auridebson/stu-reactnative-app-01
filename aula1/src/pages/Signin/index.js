import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Signin() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                    placeholder="Digite um e-mail..." 
                    style={styles.input} 
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    placeholder="Sua senha" 
                    style={styles.input} 
                />

                <TouchableOpacity
                onPress={() => navigation.navigate('Cadastro')}
                style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 28,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 12
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 6,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#1a1a1a'
    }
})