import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Constants from 'expo-constants'

import CustomButton from '../components/CustomButton'


export default ({navigation, route}) => {


const onClickSos =() => {
 alert('Alerta ativado, chamada de emergencia realizada se acalme')
}

const onClickRegistro =() => {
 alert('Tela de Registro ainda em construção')
}

const onClickRastreio =() => {
 alert('Tela de Rastreio ainda em construção')
}



  return(
    <View style={styles.container}>
      <View style={styles.buttons}>
      <CustomButton title= 'SOS' color = 'red' onPress={()=> navigation.navigate('contatos')}/>
      <CustomButton title= 'Registro' onPress={onClickRegistro}/>
      <CustomButton title= 'Rastreio' onPress={()=> navigation.navigate('rastreio')}/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  buttons: {
    justifyContent: 'space-around',
    flex: 1,
    padding: 20
  }
})