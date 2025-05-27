import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import {colours} from '../constants/Colors'



const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = colours[colorScheme] ?? colours.light
  return (
    <View
    style = {[{ backgroundColor : theme.uiBackground}, styles.card, style]}
    {...props}
    />
  )
}

export default ThemedCard

const styles=  StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})