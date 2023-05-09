import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const FoodSection = ({ item, marginLeft, marginRight, onPressItem, children }) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 20,
        paddingTop: 20,
        borderRadius: 12,
        height: 90,
        width: 260,
      }}
      onPress={onPressItem}
    >

         <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            position: "absolute",
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 12,
            top: 8,
            marginLeft: 10         
          }}
        >
          <View style={{ paddingRight: 12 }}>
            <Image
              source={require("../assets/images/food5.jpg")}
              style={{ width: 60, height: 60, borderRadius: 15}}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}> Big Fried Chicken</Text>
            <Text style={{ fontWeight: "100", fontSize: 10 }}> Gaminbar . 9.2Km</Text>
            <View style={{flexDirection: "row"}}>
            <Image
              source={require("../assets/icons/star.png")}
              style={{ width: 14, height: 14 }}
              />
              <Text style={{ fontWeight: "bold" }}> 4.4</Text>
            </View>
            </View>
          <View style={{ justifyContent: "center", paddingRight: 6 }}>
           
          </View>
          <View>
            
          <Text style={{ fontWeight: "bold", textAlign: "right", color:'green', marginLeft:80}}> $4.4</Text>
          </View>
        </View>
          </TouchableOpacity>
  );
};

export default FoodSection;
