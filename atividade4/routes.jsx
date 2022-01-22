import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from './Cadastro';
import Home from "./Home";
import Imc from "./IMC";
import Perfil from "./Perfil";
import Resultado from "./Resultado";
import Sobre from "./Sobre";




const Pilha = createStackNavigator();
const rota = createStackNavigator();


  function Routes(){
    return(
        
            <Pilha.Navigator initialRouteName="Home">
            <Pilha.Screen name = 'Home' component = {Home}/>
            <Pilha.Screen name = 'Cadastro' component = {Cadastro}/>
            <Pilha.Screen name = 'Imc' component = {Imc}/>
            <Pilha.Screen name = 'Sobre' component = {Sobre}/>
            <Pilha.Screen name = 'Resultado' component = {Resultado}/>
            </Pilha.Navigator>
    

    
    )
}

 function Routes1(){
    return(
        <NavigationContainer>
        <rota.Navigator>
            <rota.Screen name='Principal' component={Routes} options={{ headerShown: false }}>
            </rota.Screen>
            <rota.Screen name='Perfil' component={Perfil} options={{ headerShown: false }}>
            </rota.Screen>
        </rota.Navigator>
    </NavigationContainer>
)
}

export default Routes1