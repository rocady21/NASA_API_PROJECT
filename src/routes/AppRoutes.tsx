import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {RootStackParams} from "../types"
import Home from "../views/Home/Home"
import Details from "../views/Home/Details"
const Stack = createNativeStackNavigator<RootStackParams>()

const AppRoutes = ()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppRoutes