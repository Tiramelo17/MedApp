import React from 'react'
import {TouchableOpacity,Text, StyleSheet} from 'react-native'


export default ({title = 'SEM TITULO',color = '#24CBAF' , onPress}) => {
  return(
    <TouchableOpacity style = {[styles.button, {backgroundColor:color}]} onPress = {onPress}>
      <Text style = {styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

/*
Componentes simples como essa a gente faz assim: 
export default ({title = 'SEM TITULO',color = '#24CBAF' , onPress}) =>(
    <TouchableOpacity style = {[styles.button, {backgroundColor:color}]} onPress = {onPress}>
      <Text style = {styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
*/

const styles = StyleSheet.create({
  button: {
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  text: {
     color: 'black',
     fontSize: 25,
     fontWeight: 'bold',
     fontFamily: 'Roboto'
  }
})