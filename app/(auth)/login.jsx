import { StyleSheet, Pressable, Text} from 'react-native'
import {Link } from 'expo-router'
import {colours} from '../../constants/Colors'

//themed components

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const login = () => {

    const handleSubmit = () =>
    {
        console.log("Login form pressed")
    }

  return (
    <ThemedView style = {styles.container}>

    <Spacer />
    <ThemedText title = {true} style = {styles.title}>
        Login to Your Account
    </ThemedText>

    <ThemedButton onPressed = {handleSubmit}>
        <Text style = {{color: '#f2f2f2'}}>Login</Text>
    </ThemedButton>


    <Spacer height = {100}/>
    <Link href = '/register'>
    <ThemedText style = { { textAlign: 'center'}}>
        Register instead
    </ThemedText>
    </Link>
    </ThemedView>
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