import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'

const Contact = () => {
  return (
    <ThemedView style = {styles.container}>
      <ThemedText style = {styles.title}>
      Contact
      </ThemedText>



      <Link  href = "/" style = {styles.link}>
      <ThemedText>
       Back Home
      </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#rgb(201, 76, 76);'
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