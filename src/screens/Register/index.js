import React, { useState } from "react";
// import auth from '@react-native-firebase/auth'
import { 
  Container,
  ButtonText, 
  InputEmail, 
  InputPassword, 
  ButtonLogin,
  InputGroup,
  BoxIconInputLeft,
  BoxIconInputRight,
  TextGroup,
  RegisterText,
  ChangePassText,
  TextLogin,
  ButtonGoogle,
  ButtonFacebook,
  TouchText
} from "./style";
import { useNavigation } from "@react-navigation/native";
import LogoSmartcure from "../../assets/svgs/logo2.svg";
import IconLock from "../../assets/svgs/lock.svg"
import IconEmail from "../../assets/svgs/email.svg"
import IconEye from "../../assets/svgs/eye.svg"
import IconGoogle from "../../assets/svgs/google.svg"
import IconFacebook from "../../assets/svgs/facebook.svg"




export default Register = () => {
  const navigation = useNavigation();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");


  const clickToLogin = () => {
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     navigation.reset({
    //       routes:[{name:"RegisterConitinue"}]
    //     })
    //   })
    //   .catch(err => {console.log("erro: ", err)})
  }
  const toRegister = () => {
   navigation.reset({
     routes:[{name:"Login"}]
   })
  }
  const loginWithGoogle = () => {}
  const loginWithFacebook = () => {}
  return (
    <Container>
      <LogoSmartcure width="100%" height="126px" />
      <InputGroup>
      <BoxIconInputLeft><IconEmail width="25px" height="25px"/></BoxIconInputLeft>
        <InputEmail onChangeText={newText => setEmail(newText)} keyboardType="email-address" placeholder="Seu E-mail"
        placeholderTextColor="#BDB2FF" value={email} />
      </InputGroup>
      <InputGroup>
      <BoxIconInputLeft><IconLock width="25px" height="25px"/></BoxIconInputLeft>
        <InputPassword
          onChangeText={newText => setPassword(newText)}
          value={password}
          placeholder="Sua Senha"
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="#BDB2FF"
        />
        <BoxIconInputRight><IconEye width="25px" height="25px"/></BoxIconInputRight>
      </InputGroup>
      <ButtonLogin onPress={clickToLogin}><ButtonText>Cadastrar</ButtonText></ButtonLogin>
      <TextGroup>
        <TouchText onPress={toRegister}>
            <RegisterText>Já Tem Cadastro?</RegisterText>
            <ChangePassText>Fazer Login</ChangePassText>
        </TouchText>
      </TextGroup>
      <TextLogin>Você pode se cadastrar com:</TextLogin>
      <InputGroup>
        <ButtonGoogle onPress={loginWithGoogle}>
            <IconGoogle width="100%" height="30px"/>
        </ButtonGoogle>
        <ButtonFacebook onPress={loginWithFacebook}>
            <IconFacebook width="100%" height="40px"/>
        </ButtonFacebook>
      </InputGroup>
    </Container>
  );
};
