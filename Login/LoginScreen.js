import React, {useState} from 'react'
import {View, Text, StyleSheet,TextInput, Alert, TouchableOpacity} from 'react-native'

import Constants from 'expo-constants'

import CustomButton from '../components/CustomButton'

import Style from './LoginScreenStyles'

import * as LoginClienteAPI from '../APIs/ClienteAPI'

export default ({navigation, route}) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validaEmail = async () => {
      const dados = await LoginClienteAPI.loginCliente(email,senha);
      console.log('Resposta dados: '+ dados)
      if(dados.msg !== 'Sucesso'){
        Alert.alert(dados.response)
      } else {
        navigation.navigate('home')
      }    
  }

  return(
    <View style={Style.container}>
        <View style = {Style.view}>
            <View style = {Style.textoLogo}>
            <Text style={Style.text}>MEDAPP </Text>
        </View>
  </View>
    <View  style={Style.input}>
      <TextInput
       style={Style.textInput}
        placeholder="     Email"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
    />

      <TextInput
        style={Style.textInput}
        placeholder="     Password"
        onChangeText={newSenha => setSenha(newSenha)}
        defaultValue={senha}
    />
    <TouchableOpacity>
      <Text>esqueceu a senha?</Text>
    </TouchableOpacity> 
      <View style={Style.buttons}>
        <CustomButton title= 'Login' color = '#6046F2' onPress={()=> validaEmail()}/>
      
        <View style = {Style.cadastro} >
          <TouchableOpacity>
              <Text>
                Cadastre-se
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  )
}