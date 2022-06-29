import React from 'react';
import {View,Text} from 'react-native'
import {Container,InputGroup,BoxImagePicker,TouchImagePicker,TextImagePicker,LabelImagePicker} from './style'
import LogoSmartcure from '../../assets/svgs/logo.svg'
import Constants from 'expo-constants'
// import * as Permissions from 'expo-permissions'
// import * as ImagePicker from 'expo-image-picker';

export default RegisterConitinue = () => {
    const imagePickerCall = async () => {
        // if(Constants.platform.ios){
        //    const {status} =  await Permissions.askAsync(Permissions.CAMERA_ROLL);
        //    if(status === "granted"){
        //        alert("Nós Precisamos dessa permissão!")
        //        return
        //    }
        // }
        // const data = await ImagePicker.launchImageLibraryAsync({

        // })
        // console.log(data)

    }
    return(

        <Container>
            <LogoSmartcure width="100%" height="50px" />
            <InputGroup>
                <BoxImagePicker>
                    <TouchImagePicker>
                        <TextImagePicker></TextImagePicker>
                    </TouchImagePicker>
                </BoxImagePicker>
                <LabelImagePicker>Adicione a sua logo-marca ou foto de perfil</LabelImagePicker>
            </InputGroup>
        </Container>
    )
}