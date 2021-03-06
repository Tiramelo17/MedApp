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
    marginTop: 70,
    width: '80%',
    marginLeft: 30
  },
  view:{
    marginTop: 40,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#24CBAF',
    
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
    marginTop: 20,
    alignItems: 'center',
    height: '100%',
  }, textInput: {
    marginTop: 10,
    backgroundColor: '#24CBAF',
    width:'100%',
    borderRadius: 10,  
    borderWidth: 2,
    borderColor: "black",
  }
})


export default styles;