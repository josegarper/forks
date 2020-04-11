import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function RegisterForm() {
  return (
    <View style={styles.formContainer} behavior="padding">
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        onChange
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
