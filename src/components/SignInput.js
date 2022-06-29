import React from "react"
import styled from "styled-components/native"

const InputArea = styled.View`
    width:100%;
    height:60px;
    color:#424242;
    background-color: #E5ECF4;
    flex-direction: row;
    border-radius:5px;
    padding-left: 15px;
    align-items: center;
    margin-bottom:15px;
`
const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color:#424242;
    margin-left:10px;
`

export default ({IconSvg, placeholder,value,onChangeText,password}) => {
    return(
        <InputArea>
            <IconSvg width="24" height="24" fill="#ef476f"/>
            <Input
                placeholder={placeholder}
                placeholderTextColor="#424242"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    )
}