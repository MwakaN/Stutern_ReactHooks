import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Section from "../components/Section";
import Section2 from "../components/Section2";
import HeaderContent from "../components/HeaderContent";
import { categories } from "./../external_data/externalData";
import FoodItem from "../components/FoodItem";
import FoodSection from "../components/FoodSection";
import FoodChoice from "../components/FoodChoice";


const Home = () => {
  const onNavigate = useNavigation();

  const onNavigation = (item) => {
    console.log("onPress Item", item);
    onNavigate.navigate("FoodChoice", {
      foodItemDetails: item,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/bgimg.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Header content */}
        <HeaderContent />

        {/* categories */}
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: "#F8F8F8",
          }}
        >
          <Section title="Recommended" />

          {/* list of food items */}
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              console.log("items", item);
              return (
                <FoodItem
                  item={item}
                  marginLeft={index == 0 ? 20 : 12}
                  marginRight={index == item.length - 1 ? 20 : 0}
                  onPressItem={() => onNavigation(item)}
                >
                 
                </FoodItem>
              );
          
            }}
          />
              <Section2 title="Right near you" />
              <FoodSection></FoodSection>
              
        </View>
        
        
      </ImageBackground>
      
    </View>
    
  );
};

export default Home;
