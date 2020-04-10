import React from "react";
import { View, Text } from "react-native";
import Navigation from "./app/navigation/Navigation";
import { firebaseApp } from "./app/utils/Firebase";

export default function App() {
  return <Navigation />;
}
