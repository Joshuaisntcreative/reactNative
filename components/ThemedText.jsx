import { View, Text, useColorScheme } from 'react-native'
import { colours } from '../constants/Colors'


//takes in a style parameter and a boolean if the text is a title or not,

const ThemedText = ({style, title = false, ...props}) => {
const colorScheme = useColorScheme()
//sets the theme to whatever colorscheme app.json is set to
const theme = colours[colorScheme] ?? colours.light
//text color is set to the the title variable, 
const textColor = title ? theme.title : theme.text

    return (
        <Text
        style = {[{color: textColor}, style]}
        {...props}
        />
  )
}

export default ThemedText