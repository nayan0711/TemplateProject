import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function RegisterForm() {
    const [checked, setChecked] = useState(false)
    return (
        <View>
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

                <View>
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
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
                <TouchableOpacity>
                <Text>Click Me!</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}