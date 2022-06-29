import react from "react"
import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
    background-color: #ef476f;
    flex:1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
    padding:40px;
    width:100%;
`;
export const CustomButton = styled.TouchableOpacity`
    height:60px;
    background: #424242 ;
    border-radius:5px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color:#B53F78;
    font-weight: 900;
`;
export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top:50px;
    margin-bottom:20px;
`;
export const SignButtonText = styled.Text`
    font-size:16px;
    color:#F7A0C6 ;
`;
export const SignButtonTextBold = styled.Text`
    font-size:16px;
    color:#F7A0C6 ;
    font-weight: bold;
    margin-left:5px;
`;


//InputArea,CustomButton,CustomButtonText,SignMessageButton,SignButtonText,SignButtonTextBold