import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import api from "../../services/api"
import { Router, Scene, Actions } from "react-native-router-flux";
import { green } from 'ansi-colors';




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
      <View style={styles.container_margin}>
        <View style={styles.sigleContainer}>
          {/* <View> */}
          <View style={styles.leftTitle} onPress={() => Actions.personal()}>
            <Text style={styles.title} 
            ellipsizeMode='tail'
            numberOfLines={2}
            >
            {listDate.title||""}
            </Text>
            <Text style={styles.titleRow}>
            
            </Text>
            <Text style={styles.author}>
            来源：{listDate.name}
            </Text>
        </View>
        <View style={styles.imgView}>
        <Image source={{ uri: 'https://www.baidu.com/img/bd_logo1.png?qua=high' }}
            style={styles.img} />
        </View>
        </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  //底色
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  //加边距
  container_margin:{
    margin: 15,
    flex: 1,
  },

  //单个容器
  sigleContainer:{
    flex: 0.2,
    height: 50, 
    backgroundColor: 'powderblue',
    flexDirection: "row",
    borderBottomColor:"#ccc",
    borderBottomWidth:1,
    marginBottom:10
  },
  leftTitle: {
    flex: 0.65,
    fontSize: 20,
    textAlign: 'left',
    backgroundColor:"green",
    marginTop:15,
    marginBottom :15,
    flexDirection: "column",
    // justifyContent:"center",
    // alignItems:'center',
  },
  title:{
    fontSize: 16,
    lineHeight:23,
    flex: 0.6,
    backgroundColor:"#CCC",
  },
  //占位行
  titleRow:{
    flex:0.2
  },
  author:{
    flex: 0.3,
    lineHeight:23,
    fontSize: 12,
    backgroundColor:"red"
      
  },
  imgView:{
    flex:0.35,
    margin:10,
    backgroundColor:"green",
    justifyContent:"center",
    alignItems:'center',
  },
  img:{
    flex:0.5,
    width:130,
    height:150
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});