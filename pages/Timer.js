import { StyleSheet, Text, View , Vibration , Platform } from 'react-native'
import React , { useState } from 'react'
import Countdown from '../components/Countdown'
import { paddingSizes } from '../utils/sizes'
import RoundedButton from '../components/RoundedButton'
import { ProgressBar } from 'react-native-paper'
import Timing from '../components/Timing'
import { useKeepAwake } from 'expo-keep-awake';

export default function Timer({focusSubject, onTimerEnd , clearSubject}) {
  useKeepAwake()
  const [isStarted, setisStarted] = useState(false)
  const [progress, setprogress] = useState(1)
  const [minutes, setminutes] = useState(0.1)

  const onProgress = (progress) => {
    setprogress(progress)
  }
  const vibrate = () => {
    if('ios' === 'ios'){
      const interval = setInterval(() => {
        Vibration.vibrate()
      }, 1000);
      setTimeout(() => {
        clearInterval(interval)
      }, 5000);
    } 
    else {
      Vibration.vibrate(50000)
    }
  }
  const onEnd = () => {
    vibrate()
    setminutes(0.1)
    setprogress(1)
    setisStarted(false)
    onTimerEnd()
  }
  const changeTime = (min) => {
    setminutes(min)
    setprogress(1)
    setisStarted(false)
  }
  return (
    <>
    <View style = {styles.container}>
      <View style = {styles.countdown}>
        <Countdown 
          minutes={minutes} onProgress={onProgress} 
          isPaused = {!isStarted} onEnd = {onEnd} />
        <ProgressBar  progress = {progress} color='green' style={{marginTop:30,height: 10,width:250}} />

      </View>
      <View style = {styles.buttonWrapper}>
        <Timing onChangeTime = {changeTime} />
      </View>
      <Text style = {styles.text}>Focusing on :</Text>
      <Text style = {styles.text}>{focusSubject}</Text>

      <View style = {styles.buttonWrapper}>
        <RoundedButton size = {100} title= {!isStarted ? "start" : "stop"} onPress={() => {isStarted ?  setisStarted(false) : setisStarted(true)}} />
      </View>
    </View>
    <View style = {styles.cancelWrapper}>
    <RoundedButton textStyle={{'color':'orange'}} size = {50} title= "-" onPress={() => {clearSubject() }} />
    </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center'
  },
  text: {
    color: 'white',
    fontSize:20,
  },
  countdown: {
    paddingTop:50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper: {
    padding: 20,
    paddingTop:30,
    flexDirection: 'row'
  },
  cancelWrapper: {
    paddingBottom:25,
    paddingLeft:25,
  }
})