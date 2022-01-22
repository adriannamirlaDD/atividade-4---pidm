import React, {Component} from "react";
import {View, Text, Button, StyleSheet, Image} from 'react-native';

export class Perfil extends Component{
    render(){
        return(
            <View style={estilo.container}>
            <Text style = {estilo.texto}> Perfil </Text>
            <Image style={{height:190, width:190, margin: 10}} source={{uri:"https://jpimg.com.br/uploads/2021/12/design-sem-nome-7.png"}}/>
            <Text>
              Nome: {this.props.route.params.nome}
            </Text>
            <Text>
              Idade: {this.props.route.params.idade}
            </Text>
            <Text>
              Email: {this.props.route.params.email}
            </Text>
            
            <Button title="Home" onPress = {()=>{this.props.navigation.navigate('Home')}}></Button>

        </View>
            
        )
    }
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#964B00',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
      fontSize:24,
      fontWeight:'bold',
      fontFamily: 'Arial'
    }
      })

export default Perfil