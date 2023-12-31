import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

// DefaultConfig

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";
import { getDefaultConfig } from "expo/metro-config";

export default function Welcome() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                source={require('../../assets/images/img_kravmaga.png')}
                style={styles.containerImg}
                resizeMode="contain"
            />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Controle suas atividades e treinos de qualquer lugar</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity 
                onPress={ () => navigation.navigate('Signin')}
                style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View> 

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,

        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    containerImg:{
        width: '90%',
        borderTopLeftRadius: 150,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 150,
        borderBottomLeftRadius: 10
    },
    text:{
        color:'#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})