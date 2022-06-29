import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import Preload from "../screens/Preload"
import ContinueRegister from "../screens/ContinueRegister"
import DashboardPage from "../screens/DashboardPage"

const Stack = createStackNavigator()

export default MainStack = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ContinueRegister" component={ContinueRegister} />
            <Stack.Screen name="DashboardPage" component={DashboardPage} />
        </Stack.Navigator>
    )
}