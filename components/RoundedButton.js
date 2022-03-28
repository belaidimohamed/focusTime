import { TouchableOpacity,  StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RoundedButton({
  style={},
  textStyle = {},
  size = 50 ,
  ...props
}) {
  return (
    <TouchableOpacity style={[styles(size).radius , style]} onPress={props.onPress}>
      <Text style={[styles(size).text ,textStyle]}> 
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = (size) => StyleSheet.create({
  radius: {
    borderRadius : size/2,
    width:size,
    height:size,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#fff',
    borderWidth:2

  },
  text: {
    color:'green',
    fontWeight: 'bold',
    fontSize:size/3
  }
})