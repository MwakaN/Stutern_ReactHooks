import { Text, View } from "react-native";
import React, { Component } from "react";
import { Button } from "react-native";

export class Community extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  addIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 3,
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{padding: 9, fontSize: 33}}>{this.state.counter}</Text>
       <Button onPress={this.addIncrement.bind(this)} title="add">+</Button>
       <Button onPress={this.decrement.bind(this)} title="subtract">-</Button>
       {/* <Button onPress={this.}/> */}
      </View>
    );
  }
}

export default Community;
