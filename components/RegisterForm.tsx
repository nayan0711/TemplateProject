import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
//import styles from './style'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default function RegisterForm() {
    const [checked, setChecked] = useState(false)
    return (
        <View>
            <ScrollView>
            <View style={styles.registerContainer}>
                
                <View>
                    <Text style={{ fontSize: 30, color: 'black' }}>Register</Text>
                </View>
                <View>
                    <TextInput placeholder='First Name' style={styles.registerInputStyle}></TextInput>
                </View>
                <View>
                    <TextInput placeholder='Last Name' style={styles.registerInputStyle}></TextInput>
                </View>
                <View>
                    <TextInput placeholder='Your Mail' style={styles.registerInputStyle} autoCapitalize='none'></TextInput>
                </View>

                <View style={{marginTop:10}}>
                    <BouncyCheckbox
                        size={20}
                        fillColor="blue"
                        unfillColor="#FFFFFF"
                        text="I agree to the terms & conditions"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        onPress={() => {
                            // Handle checked state
                            setChecked(true)
                        }}
                    />
                </View>
                <View>
                <View style={{flex:1}}>
                        <TouchableOpacity>
                            <Text>Click me</Text>
                        </TouchableOpacity>
                </View>
                
                <View style={{flex:1}}>
                        <TouchableOpacity>
                            <Text>Click me</Text>
                        </TouchableOpacity>
                </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}
import { StyleSheet } from "react-native";
 const styles=StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        fontSize:50,
        margin:20,
        alignItems:'center',
        marginTop:35,

    },
    backBtnStyle:{
        height:40,
        width:40,
        
    },
    bellBtnStyle:{
        height:35,
        width:35,
        alignItems:'flex-end',
        resizeMode: 'cover', 
        marginLeft:50,
    },
    homeBtnStyle:{
        height:30,
        width:30,
        alignItems:'flex-end',
        marginHorizontal:28,
        resizeMode: 'cover', 
    },
    registerBackgroundStyle:{
       flex :1,  
    },
    registerContainer:{
        height:'100%',
        width:'90%',
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        alignItems: 'center',
    },
    registerInputStyle:{
        borderColor:'gray',
        borderWidth:1,
        width:300,
        marginTop:20,
        borderRadius:100,
    },
    checkbox: {
        alignSelf: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 16,
    },

})