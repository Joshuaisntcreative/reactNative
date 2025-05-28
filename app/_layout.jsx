import { StatusBar, StyleSheet,useColorScheme} from 'react-native'
import {Stack } from 'expo-router'
import { colours } from "../constants/Colors.jsx";


const RootLayout = () => {


  const colorScheme = useColorScheme(); 
  const theme = colours[colorScheme] ?? colours.light


  return (
    <>
      <StatusBar value = 'auto'/>
      <Stack screenOptions={
        {
      
          headerStyle: {backgroundColor: theme.navBackground},
          headerTintColor: theme.title,
        }
      }>
        <Stack.Screen name ="index"  options = {{ title: 'Home'}}/>
        <Stack.Screen name ="about"  options = {{ title: 'About'}}/>
        <Stack.Screen name ="contact"  options = {{ title: 'Contact'}}/>

      </Stack>
    </>

  )
}

export default RootLayout

const styles = StyleSheet.create({})