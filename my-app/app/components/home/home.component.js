import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import style from "./home.component.style";
import TextArea from "../textArea/textArea.component";

class Home extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Hello world</Text>
        <TextArea />
      </View>
    );
  }
}

export default Home;
