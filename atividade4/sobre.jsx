import React, {Component} from "react";
import {View, Text, Button,StyleSheet } from 'react-native';

export class Sobre extends Component{
    render(){
        return(
            <View style ={estilo.container}>
                <Text style ={estilo.texto}>Sobre nós</Text>
                <Text style ={estilo.texto}>
                    Este é um trabalho desenvolvido 
                    pela disciplina de Pidm para calcular 
                    seu IMC de forma rápida e prática
                </Text>
            </View>
        )
    }
}
const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#A38068',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        fontSize: 24,
        fontWeight:'bold',
        fontFamily: 'Arial'
    }
})
export default Sobre;