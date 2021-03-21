import React, { Component } from "react";
import Home from "./components/home/home.component";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

class App extends Component {
  render = () => (
    <View>
      <Text>Enter your text {this.props.count}</Text>
    </View>
  );
}

const mapStateToProps = (state) => {
  return { count: state };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
