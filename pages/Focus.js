import { StyleSheet, View, Text } from 'react-native'
import React , { useState } from 'react'
import { TextInput } from 'react-native-paper'
import RoundedButton from '../components/RoundedButton'
import { fontSizes,paddingSizes  } from '../utils/sizes'

const Focus = ({addSubject}) => {
  const [tmpItem, setTmpItem] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What Would you like to focus on ?</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText = { text => {setTmpItem(text)} }
         />
        <View style={styles.buttonContainer}>
          <RoundedButton 
            title='+' 
            onPress={() => addSubject(tmpItem)} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  titleContainer: {
    flex:0.5,
    padding:paddingSizes.lg,
    justifyContent: 'center'
  },
  title: {
    fontSize:fontSizes.lg,
    color:'white',
    fontWeight:"bold"
  },
  textInput: {
    marginTop:paddingSizes.md,
  },
  buttonContainer:{
    alignItems:'center',
    paddingTop:25
  }
})
export default Focus