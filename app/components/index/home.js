import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import { Router, Scene, Actions } from "react-native-router-flux";


  const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  export default class Home extends  React.Component {
    render(){
      return(
        <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=>Actions.personal()}>
          Welcome to React Native!!q11是的撒多撒
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.jsd!!!sssss
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
      )
    }

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'pink',
      height:600
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });