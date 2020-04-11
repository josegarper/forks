import React from "react";
import { SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";

export default function LoginFacebook() {
  const login = () => {
    console.log("Iniciando sesión con Facebook");
  };
  return (
    <SocialIcon
      title="Iniciar sesión con Facebook"
      button
      type="facebook"
      onPress={login}
    />
  );
}
