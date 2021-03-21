import React, { Component } from "react";
import { TextInput, View } from "react-native";
import PropTypes from "prop-types";
import style from "./textArea.component.style";

class TextArea extends Component {
  // static propTypes = {
  //   text: PropTypes.string,
  //   onTextChange: PropTypes.func,
  // };
  render() {
    const { text, onTextChange, ...extraProps } = this.props;
    //  console.log({ onTextChange });
    return (
      <TextInput
        // {...extraProps}
        style={[style.textArea, extraProps.style]}
        multiline={true}
        onChangeText={onTextChange}
        value={text}
        // onChangeText={(text) => {
        //   this.setState({ text });
        //   extraProps.parentCallback(text.length);
        //   console.log(this.state);
        // }}
        // value={this.state.text}
      />
    );
  }
}

export default TextArea;
