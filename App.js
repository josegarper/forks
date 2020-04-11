import React from "react";
import { View, Text, YellowBox } from "react-native";
import Navigation from "./app/navigation/Navigation";
import { firebaseApp } from "./app/utils/Firebase";

YellowBox.ignoreWarnings(["Setting a timer"]);

export default function App() {
  return <Navigation />;
}
