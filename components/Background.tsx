import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from '../components/style'
import Header from './Header';
import RegisterForm from './RegisterForm';
const backgroundImage=require("../resources/registerBackground.png");

const background = () => {
  return (
    <View style={{backgroundColor:'black',width :'100%',height:'100%'}}>
      <ImageBackground source={backgroundImage} style={styles.registerBackgroundStyle}>
        <Header/>
        <RegisterForm/>
      </ImageBackground> 
    </View>
  )
}

export default background