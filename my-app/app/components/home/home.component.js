import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import style from "./home.component.style";
import TextArea from "../textArea/textArea.component";

class Home extends Component {
  state = { text: "rana", title: "" };
  setText = (text) => this.setState({ text });

  render() {
    return (
      <View style={style.container}>
        <Text>Enter your text1</Text>
        <TextArea text={this.state.text} onTextChange={this.setText} />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default Home;
