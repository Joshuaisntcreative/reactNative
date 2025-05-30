import { TextInput, useColorScheme  } from 'react-native'
import { colours } from '../constants/Colors'


const ThemedTextInput = ( { style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = colours[colorScheme] ?? colours.light
  return (
    <TextInput 
        style = {[
            {
                backgroundColor: theme.uiBackground,
                color: theme.text,
                padding: 20,
                borderRadius: 6
            },
            style
        ]}
        //outputs all the other props
        {...props}
    />
  )
}

export default ThemedTextInput