import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback,} from 'react-native'
import {Link } from 'expo-router'
import {colours} from '../../constants/Colors'
import { useState } from 'react'
//themed components

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'


const register = () => {

    //email and set value are being destructured
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState('')

    const handleSubmit = () =>
    {
        console.log("Register form pressed", email, password)
    }



  return (
<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <ThemedView style = {styles.container}>

    <Spacer />
    <ThemedText title = {true} style = {styles.title}>
        Register For an Account
    </ThemedText>


    
    <ThemedButton onPress = {handleSubmit}>
        <Text style = {{color: '#f2f2f2'}}>Register Account</Text>
    </ThemedButton>

    <ThemedTextInput
        //inline style props specific to each use themedinput
        style= {{ width: '80%',marginBottom: 20 }}
        placeholder = "Email"
        //all the ...props 
        keyboardType = "email-address"
        onChangeText = {setEmail}
        value = {email}
     />

    <ThemedTextInput
        //inline style props specific to each use themedinput
        style= {{ width: '80%',marginBottom: 20 }}
        placeholder = "Password"
        //all the ...props 
        onChangeText = {setPassword}
        value = {password}
        secureTextEntry
     />


    <Spacer height = {100}/>
    <Link href = '/login'>
    <ThemedText style = { { textAlign: 'center'}}>
       Register
    </ThemedText>
    </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default register

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom:30
    },

})