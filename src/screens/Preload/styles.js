import react from "react"
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex:1;
    background:#B53F78;
    justify-content: center;
    align-items:center
`;
export const LoadingItem = styled.ActivityIndicator`
    margin-top:50px;
`;
export const TitleItem = styled.Text`
    color:#fff;
    font-size:0.8em;
`