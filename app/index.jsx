import { StyleSheet, Text} from 'react-native'
import {Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'




const Home = () => {
  return (
    <ThemedView style={styles.container}>
      
    <ThemedText style = {styles.title} title = {true}>The Number 1</ThemedText>
    {/* a component that spaces things more easily */}
    <Spacer height = {20}/>

    <ThemedText style = {styles.title}>Reading List App</ThemedText>


        <Link href = "/login" style = {styles.link}>
        <ThemedText>Login Page</ThemedText>
        </Link>
        <Link href = "/register" style = {styles.link}>
        <ThemedText>Register Page</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18
    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }


})