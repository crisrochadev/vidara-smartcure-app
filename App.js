import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import {Text,View} from "react-native"
import MainStack from "./src/stacks/MainStack"
import UserContextProvider from "./src/contexts/UserContext"

export default () => {
  return(
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}