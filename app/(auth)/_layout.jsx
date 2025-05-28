import {Stack} from "expo-router"
import { StatusBar } from "react-native"
//layout template for the login and register pages
export default function AuthLayout(){
    return(
        <>
        <StatusBar style = "auto" />
        <Stack
            screenOptions = {{ headerShown: true, animation: "none" }}
        />
        </>
    )
}