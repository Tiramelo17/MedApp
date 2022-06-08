import React, {useState} from 'react'
import {View, Text, StyleSheet,TextInput, Alert, TouchableOpacity, ScrollView} from 'react-native'

import Constants from 'expo-constants'

import CustomButton from '../components/CustomButton'

import Style from './CadastroScreenStyle'

import * as LoginClienteAPI from '../APIs/ClienteAPI'

export default ({navigation, route}) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setcpf] = useState('');
  const [rua, setRua] = useState('');
  const [numCasa, setNumCasa] = useState('');
  const [cel, setCel] = useState('');
  const [bairro, setBairro] = useState('');
  const [sexo, setSexo] = useState('');

  const limparVariaveis = () => {
    setEmail('')
    setSenha('')
    setNome('')
    setcpf('')
    setRua('')
    setNumCasa('')
    setCel('')
    setBairro('')
    setSexo('')
  }
  const cadastroCliente = async () => {
      console.log('fodas')
      var cliente = {
        nome: nome,
        cpf: cpf,
        email: email,
        sexo: sexo,
        senha: senha,
        rua: rua,
        bairro: bairro,
        numeroCasa: numCasa,
        cel: cel
      }
      const dados = await LoginClienteAPI.cadastroCliente(cliente);
      console.log('Resposta dados: '+ dados)
      limparVariaveis()
      if(dados.msg !== 'Sucesso'){
        Alert.alert(dados.response)
      } else {
        navigation.navigate('login')
      }    
  }
  return(
<View style={Style.container}>
          <View style = {Style.view}>
              <View style = {Style.textoLogo}>
                <Text style={Style.text}>Cadastro </Text>
              </View>
          </View>
<View  style={Style.input}>
      
   <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{height:'100%', width: '80%'}}>
      <View style={Style.textInput}> 
        <TextInput
          style={{paddingLeft:10, marginTop:5}}
          placeholder="Nome"
          onChangeText={newNome => setNome(newNome)}
          defaultValue={nome}
          />
      </View>

      <View style={Style.textInput}> 
        <TextInput
          style={{paddingLeft:10, marginTop:5}}
          placeholder="CPF"
          onChangeText={newCpf => setcpf(newCpf)}
          defaultValue={cpf}
          />
      </View>

    
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
          placeholder="Sexo(F/M)"
          onChangeText={newSexo => setSexo(newSexo)}
          defaultValue={sexo}
          />
       </View>

       <View style={Style.textInput}> 
        <TextInput
          style={{paddingLeft:10, marginTop:5}}
          placeholder="Rua"
          onChangeText={newRua => setRua(newRua)}
          defaultValue={rua}
        />
       </View>

      <View style={Style.textInput}> 
        <TextInput
          style={{paddingLeft:10, marginTop:5}}
          placeholder="Bairro"
          onChangeText={newBairro => setBairro(newBairro)}
          defaultValue={bairro}
      />
        
        </View>

      <View style={Style.textInput}> 
        <TextInput
          style={{paddingLeft:10, marginTop:5}}
          placeholder="Numero da casa:"
          onChangeText={newNum => setNumCasa(newNum)}
          defaultValue={numCasa}
      />
      </View>
     
      <View style={Style.textInput}> 
        <TextInput
          style={{paddingLeft:10, marginTop:5}}
          placeholder="Telefone: (31) 98823-2556"
          onChangeText={newCel => setCel(newCel)}
          defaultValue={cel}
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

      <View style={Style.buttons}>
         <CustomButton title= 'Cadastrar' color = '#6046F2' onPress={()=> cadastroCliente()}/>
      </View>
      
       </ScrollView>
      </View>
   </View>
  )
}