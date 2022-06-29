import React, {useEffect} from "react"
import { Text,View } from "react-native"
import {Container, LoadingItem, TitleItem} from "./styles"
import NailLogo from "../../assets/images/nail.svg"
import {useNavigation} from "@react-navigation/native"


export default Preload = () => {
    const navigation = useNavigation()
    useEffect(() => {
        

    },[])
    return(
        <Container>
            <NailLogo width="100%" height="142" />
           
            <LoadingItem size="large" color="#424242"/>
        </Container>
    )
}