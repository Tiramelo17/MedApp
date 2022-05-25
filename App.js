import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Login/LoginScreen'
import HomeScreen from './Home/HomeScreen'


const Stack = createNativeStackNavigator();


export default () => {
/* 
  useEffect( ()=> {
    registrarContatos()
  },[])
  
  const registrarContatos = async () => {
    const contatos = [
    {id: 1, foto: fotoSabrina,tipo: 'Filha', nome: 'Sabrina', telefone: '316666666'},
    {id: 2, foto: foto, tipo: 'Filha', nome: 'Kamila', telefone: '3188888888'},
    {id: 3, foto: foto,tipo: 'Filha', nome: 'Ana Clara', telefone: '317777777'},
    {id: 4, foto: foto, tipo: 'Filha', nome: 'Larissa', telefone: '319999999'},
    ]

    const contatosEmTexto = JSON.stringify(contatos)

    await AsyncStorage.setItem('contatos',contatosEmTexto)
    console.log('Contatos registrados com Sucesso: '+ contatosEmTexto)
  }
   */
  
  return(
    // <HomeScreen/>
    // <HomeScreen/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {
        backgroundColor: '#24CBAF'},
        headerTintColor: 'white'
        }}

        initialRouteName='login'
      >
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown : false}} />
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

