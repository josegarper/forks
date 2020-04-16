import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
import { Rating } from "react-native-elements";
import Carousel from "../../components/Carousel";
import * as firebase from "firebase";

const screenWidth = Dimensions.get("window").width;

export default function Restaurant(props) {
  const { navigation, route } = props;
  const { restaurant } = route.params.restaurant.item;
  const [imagesRestaurant, setImagesRestaurant] = useState([]);
  console.log(imagesRestaurant);

  useEffect(() => {
    const arrayUrls = [];
    (async () => {
      await Promise.all(
        restaurant.images.map(async (idImage) => {
          await firebase
            .storage()
            .ref(`restaurant-images/${idImage}`)
            .getDownloadURL()
            .then((imageUrl) => {
              arrayUrls.push(imageUrl);
            });
        })
      );
      setImagesRestaurant(arrayUrls);
    })();
  }, []);

  return (
    <ScrollView style={StyleSheet.viewBody}>
      <Carousel
        arrayImages={imagesRestaurant}
        width={screenWidth}
        height={250}
      />
      <TitleRestaurant
        name={restaurant.name}
        description={restaurant.description}
        rating={restaurant.rating}
      />
    </ScrollView>
  );
}

function TitleRestaurant(props) {
  const { name, description, rating } = props;
  return (
    <View style={styles.viewRestaurantBody}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.nameRestaurant}>{name}</Text>
        <Rating
          style={styles.rating}
          imageSize={20}
          readonly
          startingValue={parseFloat(rating)}
        />
      </View>
      <Text style={styles.descriptionRestaurant}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
  },
  viewRestaurantBody: {
    margin: 15,
  },
  nameRestaurant: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rating: {
    position: "absolute",
    right: 0,
  },
  descriptionRestaurant: {
    marginTop: 5,
    color: "grey",
  },
});
