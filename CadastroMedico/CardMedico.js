import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import * as Linking from 'expo-linking'

import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'


export default ({foto, nome, crm, especialidade, hospital, telefone, email, onDelete, onEdit}) => {

  const enviarMsg = () => {
      const msg = `Olá Dr(a). ${nome}, quero marcar uma consulta!`
      Linking.openURL(`whatsapp://send?text=${msg}&phone=+55${telefone}`)
  }
   
  return(

    <View style={styles.card}>
      <Image source={foto} style={styles.imagem} />
      <View style={styles.conteudo}>
        <Text>{nome}</Text>
        <Text>{crm}</Text>
        <Text>{especialidade}</Text>
        <Text>{hospital}</Text>
        <Text>{telefone}</Text>
        <Text>{email}</Text>
      </View>
      <TouchableOpacity onPress={enviarMsg} style={styles.icones}>
        <FontAwesome name="whatsapp" size={24} color="#24CBAF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onEdit} style={styles.icones}>
        <AntDesign name="edit" size={24} color="#24CBAF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.icones}>
        <FontAwesome name="trash-o" size={24} color="#24CBAF" />
      </TouchableOpacity>  
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    padding: 5,
    alignItems: 'center'
  },
  imagem:{
    marginRight: 10,
    height: 90,
    width: 70,
    borderRadius: 100
  },
  conteudo:{
    flexGrow: 1
  },
  icones:{
    padding: 5
  }
})