import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Section = ({ onPress, title, myStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 25,
        ...myStyle,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "800", color: "black" }}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={{ justifyContent: "center" }} onPress={onPress}>
        <Text style={{ color: "green", fontSize: 14 }}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Section;
