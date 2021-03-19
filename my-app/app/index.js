import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from "./components/home/home.component";

class NoteTaker extends Component {
    render() {
     //   const {...extraProps} = this.props;
      //  console.log(this.props);
      //  console.log(extraProps);
        return (
            <Home/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default NoteTaker;