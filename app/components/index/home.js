import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import api from "../../services/api"
import { Router, Scene, Actions } from "react-native-router-flux";
import { green } from 'ansi-colors';




export default class Home extends React.Component {
  constructor() {
    super(),
      this.state = {
        listDate: {},
        dom: ""
      }
  }

  _header = () => {
    return (
      <Text style={{
        backgroundColor: '#4398ff',
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
      }}>我是头布局</Text>
    )
  };

  _footer = () => {
    return (
      <Text style={{
        backgroundColor: '#EB3695',
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
      }}>我是尾布局</Text>
    )
  };

  //行与行分割线
  _separator = () => {
    return <View style={{ height: 2, backgroundColor: 'yellow' }} />;
  }

  componentDidMount() {
    //今日头条api+"?count="+10
    const url = "http://is.snssdk.com/api/news/feed/v51/"
    const _this = this;
    api(url,
      args = {
        count: 5
      },
      "GET",
      function (data) {
        console.log(data);
        if (data) {
          const datas = data.data;
          _this.setState({
            listDate: datas
          }, () => {



          })

        } else {
          return;
        }
      }
    )
  }

  getView = (dataList) => {
    //字符串转对象
    // var obj = eval('(' + (dataList.item.content) + ')');
    var item = JSON.parse(dataList.item.content);
    console.log(item);
    console.log(item.middle_image);
    // console.log((item.middle_image.urld)===undefined);
    //图片地址
    let imgUrl = "";
    if (item.middle_image) {
      imgUrl = item.middle_image.url;
    } else {
      imgUrl = "";
    }
    if (item.cell_type != 0) {
      return;
    } else {
      return (<TouchableOpacity
        activeOpacity={0.8}
      >
        <View style={styles.container_margin}>
          <View style={styles.item}>
            <View style={styles.leftTitle} onPress={() => Actions.personal()}>
              <Text style={styles.title}
                ellipsizeMode='tail'
                numberOfLines={2}
              >
                {item.title || "标题"}
              </Text>
              {/* <Text style={styles.titleRow}/> */}
              <Text style={styles.author}>
                来源：{item.media_name || "来源"}
              </Text>
            </View>
            {/* item.middle_image.url */}
            <View style={styles.imgView}>
              <Image source={{ uri: imgUrl }}
                style={styles.img} />
            </View>
          </View>
        </View>
      </TouchableOpacity>)
    }
  }
  render() {
    const { listDate } = this.state
    console.log(listDate);
    return (
      <View style={styles.container}>

        <FlatList
          ListHeaderComponent={this._header}
          ListFooterComponent={this._footer}
          // ItemSeparatorComponent={this._separator}
          renderItem={this.getView}
          // onViewableItemsChanged={(info) => {
          //   console.warn(info);
          // }}
          data={listDate}>
        </FlatList>


      </View>
    )
  }

}

const styles = StyleSheet.create({
  //底色
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  //加边距
  container_margin: {
    margin: 15,
    flex: 1,
  },

  //单个容器
  item: {
    flex: 0.2,
    // backgroundColor: 'powderblue',
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  leftTitle: {
    flex: 0.65,
    // backgroundColor: "green",
    marginTop: 13,
    marginBottom: 13,
    flexDirection: "column",
    // justifyContent:"center",
    // alignItems:'center',
  },
  title: {
    flex: 0.8,
    fontSize: 17,
    lineHeight: 23,
    flex: 0.7,
    // backgroundColor: "#CCC",
  },
  //占位行
  // titleRow: {
  //   flex: 0.2
  // },
  author: {
    flex: 0.2,
    lineHeight: 23,
    fontSize: 12,
    // backgroundColor: "red",
    marginTop: 15,
    justifyContent: 'flex-end',
  },
  imgView: {
    flex: 0.35,
    margin: 13,
    marginRight:0,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: 'center',
  },
  img: {
    flex: 0.5,
    width: 117,
    height: 83,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});