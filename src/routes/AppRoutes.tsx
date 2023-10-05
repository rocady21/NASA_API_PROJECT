import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {RootStackParams} from "../types"
import Home from "../views/Home/Home"
import Details from "../views/Home/Details"
const Stack = createNativeStackNavigator<RootStackParams>()
const RouteStyleOption = {
    headerStyle:{
        backgroundColor:"rgba(7,26,93,255)",

    },
    headerTitleStyle:{
        color:"#fff",

    }
}
const AppRoutes = ()=> {
    console.log("Xd");
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={RouteStyleOption}/>
                <Stack.Screen name="Details" component={Details} options={RouteStyleOption}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppRoutes