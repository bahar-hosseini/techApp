import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,onPress,color="#ff6347"}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#ff6347',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    padding:15,
    width: '100%',
    marginVertical:5,

  },
  text:{
    color: '#fff',
    fontSize:18
  }
})