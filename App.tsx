import { View, Text, SafeAreaView, ScrollView,ImageBackground } from 'react-native'
import React from 'react'
import Header  from './components/Header'
import styles from './components/style'
import Background from './components/Background'

const App = () => {
  return (
    <SafeAreaView>
      <Background/>
    </SafeAreaView>
  )
}

export default App