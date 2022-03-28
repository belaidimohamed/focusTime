import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import RoundedButton from '../components/RoundedButton'
import { FlatList, SafeAreaView } from 'react-native';

export default function FocusHistory({focusHistory , onClear}) {
  const clearHistory = () => {
    onClear();
  }
  const HistoryItem = ({item,index}) => {
    return(
      <Text style= {{padding:10}}>
        {JSON.stringify(item)}
      </Text>
    )
  }
  return (
    <>
      <SafeAreaView style = {{flex:0.5}}>
        <Text>
          Things we've focused on :
          {!!focusHistory.length &&
            <FlatList 
              style = {{flex:1}}
              contentContainerStyle = {{flex:1,alignItems:'center'}}
              data = {focusHistory}
              renderItem={HistoryItem}
            />
          }
        </Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})