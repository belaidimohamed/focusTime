import { StyleSheet, Text, View } from 'react-native'
import React , {useState , useEffect} from 'react'
import { fontSizes, paddingSizes } from '../utils/sizes'

const minutesToMillis = (min) => min * 1000 * 60
const formatTime = (time) => time <10 ? `0${time}` : time ;

export default function Countdown({
  minutes = 2,
  isPaused = true,
  onProgress,
  onEnd
}) {
  const [millis, setmillis] = useState(minutesToMillis(minutes))

  const interval = React.useRef(null)
  const countDown = () => {
    setmillis((time)=> {
      if (time===0) {
        clearInterval(interval.current)
        onEnd();
        return time;
      }
      else  {
        const timeLeft = time -1000
        onProgress(timeLeft / minutesToMillis(minutes))
        return timeLeft
      } 
    })
  }
  useEffect(()=> {
    setmillis(minutesToMillis(minutes))
  },[minutes])

  useEffect(()=> {
    if(isPaused) return ;
    interval.current = setInterval(countDown,1000)
    return () => clearInterval(interval.current)
  },[isPaused])
  
  const minute = Math.floor(millis /1000/60)%60 
  const seconds = Math.floor(millis /1000)%60 

  return (
    <View>
      <Text style = {styles(millis).text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    </View>
  )
}

const styles = (millis) => StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    padding: paddingSizes.lg,
    borderRadius: 15,
    color: 'white',
    backgroundColor: millis !== 0 ? 'rgba(94,132,226,0.3)'  : 'green'
  }
})