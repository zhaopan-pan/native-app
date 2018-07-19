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
      <View style={styles.contains}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        // hidden={true}/
        />
        <TouchableNativeFeedback
          onPress={() => Actions.About()}
        >
          <View style={styles.handle}>
            <Text style={styles.setting}>about</Text>
            <View style={styles.arrow_right}>
              <Icon name={"chevron-right"} size={20} color={'#BBB'} />
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

}



const styles = StyleSheet.create({
  contains: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ebe7e7"
  },
  //加边距
  container_margin: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,

  },
  handle: {
    flex: 0.08,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
    //   marginTop: 15
  },
  handle_icon: {
    flex: 0.11,

  },
  arrow_right: {
    // flex: 0.11,
  }
  ,
  setting: {
    fontSize: 18,
  }
});