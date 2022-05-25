import React from 'react'
import {StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  buttons: {
    justifyContent: 'space-around',
    flex: 1,
    padding: 20
  },
  view:{
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#24CBAF',
    marginTop:  Constants.statusBarHeight
  },
  text:{
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  img:{
    width: 100,
    height: 100,
    borderColor: 'black',
    borderRadius: 100,
    margin: 10
  },
  textoLogo: {
    flexDirection: 'row'
  }
})


export default styles;