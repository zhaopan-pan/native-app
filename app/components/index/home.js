import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import api from "../../services/api"
import { Router, Scene, Actions } from "react-native-router-flux";




export default class Home extends React.Component {
  constructor() {
    super(),
      this.state = {
        listDate: {}
      }
  }

  componentWillMount() {
    //今日头条api+"?count="+10
    const url = "http://is.snssdk.com/api/news/feed/v51/"
    const _this = this;
    api(url,
      args = {
        count: 10
      },
      "GET",
      function (data) {
        console.log(data);
        if (data) {
          const datas = data.data;
          _this.setState({
            listDate: datas
          })
        } else {
          return;
        }
      }
    )
  }

  render() {
    const { listDate } = this.state
    console.log(listDate);
    return (
      <View style={styles.container}>

        <View style={{ flex: 0.2, height: 50, backgroundColor: 'powderblue' }}>
          <Text style={styles.welcome} onPress={() => Actions.personal()}>
            Welcome to 首页dd
        </Text>
        </View>
        {/* <View style={{flex: 1, height:100,backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, height:100,backgroundColor: 'steelblue'}} /> */}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: 'center',
    backgroundColor: 'pink',
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