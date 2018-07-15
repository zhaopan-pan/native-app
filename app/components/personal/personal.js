import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class Personal extends React.Component {
  render() {
    return (
      <View style={styles.contains}>
        <View style={styles.userInfo}>
          <View style={styles.personal_img}>
            <Image
              source={require('./img/kobe.jpg')}
              style={styles.img} />
            <Text style={styles.usename}>赵攀</Text>
          </View>
          <View>
          </View>
        </View>
        {/* <View style={styles.container_margin}> */}

        <TouchableNativeFeedback>

          <View style={styles.handle}>
            <View style={styles.handle_icon}>
              <Icon name={"gear"} size={20} color={'#BBB'} />
            </View>
            <Text style={styles.setting}>设置</Text>
          </View>
        </TouchableNativeFeedback>

        {/* </View> */}
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
  userInfo: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#514a4a',
    // height:100
  },
  personal_img: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "pink",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
  ,
  img: {
    height: 80,
    width: 80,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  usename: {
    color: "white",
    fontSize: 18,
    // backgroundColor: "blue",
    height: 80,
    width: 80,
    lineHeight: 60,
    textAlign: "left",
    marginLeft: 20
  },
  handle: {
    flex: 0.08,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
    marginTop: 15
  },
  handle_icon: {
    flex: 0.11,

  },
  setting: {
    fontSize: 18,
  }
});