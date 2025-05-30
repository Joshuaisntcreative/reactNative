import { StyleSheet, Pressable, Text, TextInput} from 'react-native'
import {Link } from 'expo-router'
import {colours} from '../../constants/Colors'
import { useState } from 'react'
//themed components

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'



const login = () => {

    //email and set value are being destructured
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState('')


    const handleSubmit = () =>
    {
        console.log("Login form submitted", email, password)
    }

  return (
<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <ThemedView style = {styles.container}>

    <Spacer />
    <ThemedText title = {true} style = {styles.title}>
        Login to Your Account
    </ThemedText>

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

    <ThemedButton onPress = {handleSubmit}>
        <Text style = {{color: '#f2f2f2'}}>Login</Text>
    </ThemedButton>


    <Spacer height = {100}/>
    <Link href = '/register'>
    <ThemedText style = { { textAlign: 'center'}}>
        Register instead
    </ThemedText>
    </Link>
    </ThemedView>
</TouchableWithoutFeedback>
  )
}

export default login

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
    btn:{
        backgroundColor: colours.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: .8
    }

})