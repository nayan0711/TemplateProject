
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'
import {headerHeading} from '../constants'

const backBtn=require("../resources/backBtn.png")
const bellIcon=require("../resources/bellIcon.png")
const homeBtn=require("../resources/homeBtn.png")

export default function Header() {
  return (
    <View style={styles.headerContainer}>
       
        <View>
        <Image
        source={backBtn} style={styles.backBtnStyle}/>
        </View>
        <View>
        <Text style={{marginHorizontal:20, fontSize:20, fontWeight:'600'}}>{headerHeading}</Text>
        </View>
        <View>
        <Image
        source={bellIcon} style={styles.bellBtnStyle}/>
        </View>
        <View>
        <Image
        source={homeBtn} style={styles.homeBtnStyle}/>
        </View>
        
    </View>
  )
}
