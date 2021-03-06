import React from 'react'
import {StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#24CBAF',
  },
  buttons: {
    flex: 1,
    marginTop: 70,
    width: '60%'
  },
  view:{
    alignItems: 'center',
    width: '100%',
    height: '20%'    
  },
  text:{
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6046F2'
  },
  textoLogo: {
    flexDirection: 'row'
  }, cadastro: {
    marginTop: 10,
    alignItems: 'center',
  }, input: {
    marginTop: 200,
    alignItems: 'center',
    height: '50%',
  }, textInput: {
    marginTop: 10,
    width: '80%',
    height: 40,
    backgroundColor: '#24CBAF',
    borderRadius: 10,  
    borderWidth: 2,
    borderColor: "black",
  }, img: {
    height: 300,
    width: 500
  }
})


export default styles;