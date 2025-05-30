import { SafeAreaView, View, useColorScheme } from 'react-native'
import { colours } from "../constants/Colors.jsx";
import { useSafeAreaInsets } from 'react-native-safe-area-context'
//Instead of using view component and styling each view separately, we will style one component called Themed View 
//Themed view will then be used all around the program to style

const ThemedView = ({style, safe = false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = colours[colorScheme] ?? colours.light


    
  if(!safe) return (
    //returns a styling template the props objects will be 
    <View style = {[{backgroundColor: theme.background}, style]}
    {...props}
    />
  )

  const insets = useSafeAreaInsets()
  return (
    <View
      style = {[{
        backgroundColor: theme.background,
        paddingTop : insets.top,
        paddingBottom : insets.bottom,
      },
        style
      ]}
    {...props}
    />
  )
}

export default ThemedView