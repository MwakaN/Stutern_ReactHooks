import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const FoodDetails = (props) => {
  console.log('my properties', props);

  const route = useRoute();
  console.log("route details", route.params);

  const { title } = route.params.foodItemDetails;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{title}</Text>
    </View>
  );
};

export default FoodDetails;
