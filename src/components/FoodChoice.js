import { View, Text, Image, TouchableOpacity, Platform, ImageBackground, Button, Alert, StyleSheet, Modal} from 'react-native'
import React, { useState } from 'react'


const FoodChoice = () => {
  const [search, setSearch] = useState("");

  return (
    <View
    style={{
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "white",
      position: "absolute",
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 12,
      top: 25, 
      height: 280,
      width: 340,
      marginLeft: 8
          
    }}
  >

         <View style={{ paddingRight: 12 }}>
            <Image
              source={require("../assets/images/food6.jpg")}
              style={{ width: 320, height: 265, borderRadius: 15}}
            />
          </View> 

          <View style={{flexDirection: "row", marginTop: 20, justifyContent: 'space-between',}}>
          <Text style={{ fontWeight: "bold", fontSize: 20}}> Chicken Pizza</Text>
            <Image
              source={require("../assets/icons/count.png")}
              style={{ width: 100, height: 40, borderRadius: 8}}
              />
              </View>

              <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
              <View style={{flexDirection: "row", marginTop: 20}}>
              <Image
              source={require("../assets/icons/pin.png")}
              style={{ width: 20, height: 25, borderRadius:6}}
              />
              <Text style={{ fontWeight: "400", fontSize: 14}}> 2.1 Km</Text>
              </View>

              <View style={{flexDirection: "row", marginTop: 20}}>
              <Image
              source={require("../assets/icons/rating.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
              <Text style={{ fontWeight: "400", fontSize: 14}}> 4.7 Ratings</Text>
              </View>
              <View style={{flexDirection: "row", marginTop: 20}}>
              <Image
              source={require("../assets/icons/food.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
              <Text style={{ fontWeight: "400", fontSize: 14}}> 20-25 Min</Text>
              </View>

              </View>

              <View style={{flexDirection: "column", marginTop: 20}}>
              <Text style={{ fontWeight: "bold", fontSize: 20}}>Description</Text>
              <Text style={{fontSize: 15, marginTop:10}}>Pizza, delicious dish of Italian origin consisting of a flattened disk of bread dough topped with different ingredients.</Text>
              </View>

              <View style={{ marginTop: 20}}>
                <Image
              source={require("../assets/images/locator.jpg")}
              resizeMode="cover"
              style={{ width: 320, height: 150, borderRadius:10 }}
             ></Image>
              </View>

              <View style={{flexDirection: "row", marginTop: 10, justifyContent: 'space-evenly',}}>
              <View>
              <TouchableOpacity style={{ padding:12, paddingLeft: 25, paddingRight: 25, flexDirection: "row", backgroundColor: 'white', borderRadius:50, borderColor: 'green', borderStyle: 'solid'}}>
              <Image
              source={require("../assets/icons/chat.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
        <Text style={{ color: 'green', fontWeight: 800, marginLeft:5}}>CHAT</Text>
      </TouchableOpacity>
              </View>

              <View>
              <TouchableOpacity style={{ backgroundColor: 'green', padding: 12, borderRadius: 50 }}>
        <Text style={{ color: '#fff', fontWeight: 800}}>ADD TO CART</Text>
      </TouchableOpacity>

              </View>
              

              </View>
  </View>
  );
  };

  

export default FoodChoice