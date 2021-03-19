import React, { Component } from "react";
import { TextInput, View } from "react-native";
import PropTypes from "prop-types";
import style from "./textArea.component.style";

class TextArea extends Component {
  state = {
    text: "",
  };
  render() {
    const { ...extraProps } = this.props;
    return (
      <TextInput
        {...extraProps}
        style={[style.textArea, extraProps.style]}
        multiline={true}
        onChangeText={(text) => {
          this.setState({ text });
          console.log(this.state);
        }}
        value={this.state.text}
      />
    );
  }
}

export default TextArea;
