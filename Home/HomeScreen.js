import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

import Constants from 'expo-constants'

import CustomButton from '../components/CustomButton'
import logo from '../imagens/logo.jpeg'


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
           <View style={styles.view}>
            <Image  source={logo}/> 
           </View>
           <View style={styles.button}>
            <CustomButton title= 'Cadastrar Médico' color = '#6046F2' onPress={()=> navigation.navigate('listaMedicos')
}/>
            <CustomButton title= 'Ficha Médica' color = '#6046F2' onPress={()=> navigation.navigate('fichaMedica')
}/>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#24CBAF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }, button : {
      height: '50%',
      width: '60%',
      justifyContent: 'space-around'

  }, view: {
      height: '50%'
  }
})