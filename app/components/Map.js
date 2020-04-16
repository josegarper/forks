import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function Map(props) {
  const { location, name, height } = props;

  return (
    <MapView
      style={{
        width: "100%",
        height: height,
      }}
      initialRegion={location}
      onPress={() => console.log("Abriendo APP Map")}
    >
      <MapView.Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
    </MapView>
  );
}
