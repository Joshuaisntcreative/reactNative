import { StyleSheet, Text, View , useColorScheme} from 'react-native'
import { Link } from 'expo-router'
import { colours } from "../constants/Colors.jsx";

const About = () => {
  
  //initalizes the light and dark mode in ColorScheme and uses it in the const theme
  const colorScheme = useColorScheme(); 
  const theme = colours[colorScheme] ?? colours.light


  return (
    <View style = {[styles.container, {backgroundColor: theme.background}] }>
      <Text style = {styles.title}>About</Text>
      
      <Link  href = "/" style = {styles.link}>Back Home</Link>
    </View>
  )
}

export default About

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