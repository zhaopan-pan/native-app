import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default class Setting extends React.Component {
    render(){
            return(
      <View style={styles.contains}>
                <TouchableNativeFeedback>
                <View style={styles.handle}>
                  {/* <View style={styles.handle_icon}> */}
                    {/* <Icon name={"gear"} size={20} color={'#BBB'} /> */}
                  {/* </View> */}
                  <Text style={styles.setting}>about</Text>
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
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: 15,
    //   marginTop: 15
    },
    handle_icon: {
      flex: 0.11,
  
    },
    setting: {
      fontSize: 18,
    }
  });