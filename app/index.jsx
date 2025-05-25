import { StyleSheet, Text, View, Image } from 'react-native'

import {Link } from 'expo-router'
const Home = () => {
  return (
    <View style={styles.container}>


      <Text style = {{marginTop : 10, marginBottom: 30}}>The number 1</Text>


      <Text style = {styles.title}>
        Reading List App
        </Text>

        <Link href = "/about" style = {styles.link}> About Page</Link>
        <Link href = "/contact" style = {styles.link}> Contact Page</Link>

    </View>
  )
}

export default Home

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