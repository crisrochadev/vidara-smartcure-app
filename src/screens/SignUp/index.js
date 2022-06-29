import React, { useState } from "react";
import { Text } from "react-native";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignButtonText,
  SignButtonTextBold,
} from "./styles";
import NailLogo from "../../assets/images/nail.svg";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../assets/images/mail.svg";
import { useNavigation } from "@react-navigation/native";
import LockIcon from "../../assets/images/lock.svg";
import UserIcon from "../../assets/images/user.svg";
import {UserContext} from "../../contexts/UserContext"

export default Preload = () => {
  const {dispatch: userDispatch} = useContext(UserContext)
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [nameField, setnameField] = useState("");

  const handleSignClick =  () => {
    
  };
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };
  return (
    <Container>
      <NailLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          IconSvg={UserIcon}
          placeholder="Digite seu Nome"
          value={nameField}
          onChangeText={(t) => setnameField(t)}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu Email"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua Senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignButtonText>Já possui uma conta? </SignButtonText>
        <SignButtonTextBold>Faça Login</SignButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
