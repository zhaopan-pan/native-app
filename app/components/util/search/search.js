import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
  //搜索
export const search=()=>{
    return (
      <View style={mainStyle.search}>
        <View style={mainStyle.component_margin}>
          <Text style={mainStyle.search_location}>
            重庆
          </Text>
          {/* <Icon name={"search"} size={20} color={'#BBB'}  style={mainStyle.searchImg}/> */}
          <TextInput
            style={mainStyle.search_input}
            placeholder="请输入搜索内容!"
            underlineColorAndroid='transparent'//去下划线
            TextInput={true}                     //是否可编辑
            onChangeText={(text) => console.log(text)}
          />
          <Icon name={"bell"} size={20} color={'#BBB'} />
        </View>

      </View>
    )
  }


  const mainStyle = StyleSheet.create({
    search: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      backgroundColor: "#a55858",
      height: "100%"
    },
    component_margin: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      marginRight: 15,
      marginLeft: 15,
      // position:"abusolute";
    },
    search_left: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    search_location: {
      fontSize: 20,
      color: "#fff"
    },
    search_input: {
      width: "70%",
      height: 35,
      backgroundColor: "white",
      fontSize: 16,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: "#ccc",
      marginLeft: 22,
      marginRight: 22,
      padding: 0,
      paddingLeft: 7
    },
    searchImg:{
      // position:"abusolute";
      left:20
    }
  })