import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {Button, Dialog, Provider, TextInput, Portal, TouchableRipple} from 'react-native-paper'

import foto from '../assets/doutor.png'
import CardMedico from './CardMedico'
import * as MedicoAPI from '../APIs/MedicoAPI'


import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons' 



export default ({navigation}) => {

  const [listaMedicos, setListaMedicos] = useState([])
  const [visible, setVisible] = React.useState(false)

  const [nome, setNome] = useState('')
  const [crm, setCrm] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [hospital, setHospital] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    carregarMedicos()
  }, [])

  const carregarMedicos = async () => {
    const medicos = await MedicoAPI.buscarMedico()
    setListaMedicos(medicos)
  }

  const addMedicos = async () => {
    try {
      await MedicoAPI.inserirMedico(nome, crm, especialidade, hospital, telefone, email, foto)
      const medicos = await MedicoAPI.buscarMedico()
      setListaMedicos(medicos)

      setVisible(false)
      setNome('')
      setCrm('')
      setEspecialidade('')
      setHospital('')
      setTelefone('')
      setEmail('')
    }catch(error) {
            console.log(error)
      }
  }

  const removerMedicos = async (_id) => {
    await MedicoAPI.deletarMedico(_id)

    const medicos = await MedicoAPI.deletarMedico()
    setListaMedicos(medicos)
  }

  const itemLista = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('listaMedicos', {...item})}>
      <CardMedico
        foto={item.foto}
        nome={item.nome}
        crm={item.crm}
        especialidade={item.especialidade}
        hospital={item.hospital}
        telefone={item.telefone}
        email={item.email}
        onDelete={() => removerMedicos(item.id)}
      />

    </TouchableOpacity>
  )

    return (
      <View style={styles.screen}>
      <Provider>
        <View>
          <FlatList
            data={listaMedicos}
            renderItem={itemLista}
            keyExtractor={(medico) => medico.id}
          />
          <TouchableRipple mode='outlined' onPress={() => setVisible(true)}
          rippleColor="#24CBAF" style={styles.ripple}>
            <AntDesign name="pluscircleo" size={32} color="#24CBAF" style={styles.icone} /> 
          </TouchableRipple>
        </View>
        <Portal>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <Dialog.Title style={styles.titulo}>Informe os dados do médico</Dialog.Title>
            <Dialog.Content>
              <TextInput 
                label='Nome'
                mode='outlined'
                placeholder='Maria José'
                value={nome}
                onChangeText={(text) => setNome(text)}
                outlineColor='#24CBAF'
                theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}} />

                <TextInput 
                label='CRM'
                mode='outlined'
                placeholder='CRM/MG 123456'
                value={crm}
                onChangeText={(text) => setCrm(text)}
                outlineColor='#24CBAF'
                theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}} />
              
              <TextInput 
                label='Especialidade'
                mode='outlined'
                placeholder='Cardiologista'
                value={especialidade}
                onChangeText={(text) => setEspecialidade(text)}
                outlineColor='#24CBAF'
                theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}} />

              <TextInput 
                label='Hospital'
                mode='outlined'
                placeholder='Mater Dei'
                value={hospital}
                onChangeText={(text) => setHospital(text)}
                outlineColor='#24CBAF'
                theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}} />
              
              <TextInput 
                label='Telefone'
                mode='outlined'
                placeholder='(31) 9 9999-9999'
                keyboardType='phone-pad'
                value={telefone}
                onChangeText={(text) => setTelefone(text)}
                outlineColor='#24CBAF'
                theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}} />
              
              <TextInput 
                label='Email'
                mode='outlined'
                placeholder='maria@hospital.br'
                keyboardType='email-address'
                value={email}
                onChangeText={(text) => setEmail(text)}
                outlineColor='#24CBAF'
                theme={{colors: { primary:'#24CBAF', underlineColor:'#24CBAF'}}} />

            </Dialog.Content>
            <Dialog.Actions>
              <Button icon='cancel' color='#24CBAF' onPress={() => setVisible(false)}>Cancelar</Button>
              <Button icon='check' color='#24CBAF' onPress={addMedicos}>Salvar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    </View>
  ) 
}

const styles = StyleSheet.create({
  titulo:{
    color: '#24CBAF'
  },
  ripple:{
    alignItems:'flex-end'
  },
  icone:{
    padding: 10,
    paddingRight: 15, 
    borderRadius: 5
  },
  screen:{
    flex: 1,
    backgroundColor: '#D8D2D2',
    borderTopRightRadius: 48,
    borderTopLeftRadius: 48,
    elevation: 25  
  }
})