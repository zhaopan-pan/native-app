import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { Actions } from "react-native-router-flux";

export default class Setting extends React.Component {


  a = () => {
    console.log("asdasdas");
  }
  render() {
    return (
      <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
       
      />
      <Text style={{padding: 10, fontSize: 42}}>
        
      </Text>
    </View>
    )
  }

}
