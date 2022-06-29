import React,{ useState, useContext}  from "react";
import { Text } from "react-native";
import { Container, HeaderArea, Avatar } from "./style";
import LogoSmartcure from "../../assets/images/nail";
import { UserContext } from "../../contexts/UserContext";

export default ContinueRegister = () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  return (
    <Container>
      <HeaderArea>
        <LogoSmartcure width="100%" height="50px" />
        { userDispatch.playload.avatar ? 
        <Avatar
        source={{
            uri:userDispatch.playload.avatar
        }}
        />
        : 
        <Avatar
        source={{
            uri:"../../assets/images/user.svg"
        }}
        />
        }
            
      </HeaderArea>
    </Container>
  );
};
