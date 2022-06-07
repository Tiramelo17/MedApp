import React, {useState} from 'react'
import {View, Text, StyleSheet,TextInput, Alert,Image, TouchableOpacity} from 'react-native'

import Constants from 'expo-constants'

import CustomButton from '../components/CustomButton'

import Style from './LoginScreenStyles'

import * as LoginClienteAPI from '../APIs/ClienteAPI'
import logo from '../imagens/logo.jpeg'

export default ({navigation, route}) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  
const limparVariaveis = () => {
    setEmail('')
    setSenha('')
  }
  const validaEmail = async () => {
      const dados = await LoginClienteAPI.loginCliente(email,senha);
      console.log('Resposta dados: '+ dados.response)
      limparVariaveis()
      if(dados.msg !== 'Sucesso'){
        Alert.alert(dados.response)
      } else {
        navigation.navigate('home')
      }    
  }

  return(
    <View style={Style.container}>
        <View style = {Style.view}>
            <Image  source={logo} style = {Style.img}/>     
        </View>
    <View  style={Style.input}>
     <View style={Style.textInput}> 
        <TextInput
          style={{paddingLeft:10, marginTop:5}}
          placeholder="Email"
          onChangeText={newEmail => setEmail(newEmail)}
          defaultValue={email}
      />
    </View>

    <View style={Style.textInput}> 
      <TextInput
          style={{paddingLeft:10, marginTop:5}}
        placeholder="Password"
        onChangeText={newSenha => setSenha(newSenha)}
        defaultValue={senha}
    />
    </View>
    <TouchableOpacity>
      <Text>esqueceu a senha?</Text>
    </TouchableOpacity> 
      <View style={Style.buttons}>
        <CustomButton title= 'Login' color = '#6046F2' onPress={()=> validaEmail()}/>
      
        <View style = {Style.cadastro} >
          <TouchableOpacity onPress={() => {navigation.navigate('cadastro')}}>
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