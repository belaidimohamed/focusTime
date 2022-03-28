import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Focus from './pages/Focus';
import Timer from './pages/Timer';
import { paddingSizes } from './utils/sizes';
import FocusHistory from './pages/FocusHistory';

export default function App() {
  const [focusSubject , setFocusSubject] = useState(null)
  const [focusHistory, setfocusHistory] = useState([])
  const STATUSES = {
    COMPLETE: 1,
    CANCELED: 2
  }
  const addFocusHistorySubjectWithState = (subject,status) => {
    setfocusHistory([...focusHistory,{subject,status}])
  }
  const onClear = () => {
    
  }
  
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer 
          focusSubject = {focusSubject} 
          clearSubject ={() => {
            addFocusHistorySubjectWithState(focusSubject,STATUSES.CANCELED)
            setFocusSubject(null)
          }} 
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(focusSubject,STATUSES.COMPLETE)
            setFocusSubject(null)
          }} 
        />
      ) : ( 
      <>
        <Focus addSubject = {setFocusSubject}/>
        <FocusHistory focusHistory={focusHistory}
          onClear = {onClear}
        />
      </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:paddingSizes.xxl,
    backgroundColor: '#252250'
  }
})
