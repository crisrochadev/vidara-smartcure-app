import React from 'react';
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    background-color: #FDFFB6;
    flex:1;
    justify-content: center;
    align-items: center;
`
export const BoxImagePicker = styled.View`
    width:15%;
    height:100%;
    background-color: #BDB2FF;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    align-items: center;
    justify-content: center;
`
export const TouchImagePicker = styled.TouchableOpacity`
    width:15%;
    height:100%;
    background-color: #BDB2FF;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    align-items: center;
    justify-content: center;
`
export const InputGroup = styled.View`
    flex-direction: row;
    width:80%;
    height:50px;
    margin-top:20px;
`
export const InputEmail = styled.TextInput`
    border:2px solid #BDB2FF;
    width:85%;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    padding-left:10px;
    font-size: 16px;
    font-weight: bold;
`
export const InputPassword = styled.TextInput`
    border:2px solid #BDB2FF;
    width:70%;
    padding-left:10px;
    font-size: 16px;
    font-weight: bold;
`
export const ButtonLogin = styled.TouchableOpacity`
    margin-top:20px;
    width:80%;
    height:50px;
    border-radius:5px;
    background-color: #BDB2FF;
    justify-content: center;
    align-items: center;
`
export const TextImagePicker = styled.Text`
    color:#FDFFB6;
    font-weight: 900;
    font-size:20px;
`
export const TextGroup = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width:80%;
    height:30px;
    margin-top:20px;
`
export const TouchText = styled.TouchableOpacity`
    width:100%;
    height:100%;
    flex-direction: row;
    justify-content: space-between;
`
export const LabelImagePicker = styled.Text`
    font-size:18px;
    font-weight: 900;
    color:#BDB2FF;
`
export const ChangePassText = styled.Text`
    font-size:18px;
    font-weight: 900;
    color:#FFC6FF;
`
export const TextLogin = styled.Text`
    color:#BDB2FF;
    font-size: 18px;
    margin-top:20px;
`
export const ButtonGoogle = styled.TouchableOpacity`
    width:50%;
    height:100%;
    background-color:#fff;
    justify-content: center;
    align-items: center;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
`
export const ButtonFacebook = styled.TouchableOpacity`
   width:50%;
    height:100%;
    background-color:#3B5998;
    justify-content: center;
    align-items: center;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
`