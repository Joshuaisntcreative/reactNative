import { View, useColorScheme } from 'react-native'
import { colours } from "../constants/Colors.jsx";

//Instead of using view component and styling each view separately, we will style one component called Themed View 
//Themed view will then be used all around the program to style

const ThemedView = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = colours[colorScheme] ?? colours.light


    
  return (
    //returns a styling template the props objects will be 
    <View style = {[{backgroundColor: theme.background}, style]}
    {...props}
    />
  )
}

export default ThemedView