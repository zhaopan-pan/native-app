import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ApiGet from "../../services/api"
import { Router, Scene, Actions } from "react-native-router-flux";




export default class Home extends React.Component {

  componentWillMount() {
    //今日头条api+"?count="+10
    const url = "http://is.snssdk.com/api/news/feed/v51/"
    // fetch(url,{
    //   method:"GET",
    //   args:{
    //     count:10
    //   }
    // })
    // //数据解析方式
    // .then((response) => response.json())
    // .then((data)=>{
    //   console.log(data);
    // }).catch((err)=>{
    //   console.log(err);
    // })

    console.log("1111"+ApiGet);
    // apiGet(url,
    //   args={
    //     count: 10
    //   },function(data){
    //     console.log(data);
    //   }
    // )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => Actions.personal()}>
          Welcome to 首页
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    height: 600
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