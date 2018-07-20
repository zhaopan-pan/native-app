import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import api from "../../services/api"
import { Router, Scene, Actions } from "react-native-router-flux";
import { green } from 'ansi-colors';
import styles from "./styles"




export default class Home extends React.Component {
  constructor() {
    super(),
      this.state = {
        listDate: [],  //存放数据
        dom: "",
        refreshing: false,//当前的刷新状态
        index: "",         //保存索引
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
    this.getData();

    console.log(this.a);

  }
  a = (num) => {
    return 12
  }
  getData = (num) => {
    const _this = this;
    var timestamp = new Date().getTime();
    //今日头条api+"?count="+10
    const url = "http://is.snssdk.com/api/news/feed/v51/";
    api(url,
      args = {
        pageToken: 2
        // count: 8 + (num || 0)
      },
      "GET",
      function (rs) {
        console.log(rs);
        if (rs.data) {
          const datas = rs.data;
          _this.setState({
            listDate: datas
          }, () => {
            _this.setState({
              refreshing: false
            })
          })
        } else {
          console.log(rs);
          return;
        }
      }
    )

  }

  // getState=(index,cb)=>{
  //   if(this.state.index==index){
  //     cb(true);
  //   }else{
  //   this.setState({
  //     index:index
  //   })
  //   }
  // }
  getView = (dataList) => {
    // console.log(dataList);
    // let a=0;
    // console.log("第"+dataList.index);
    // a++;
    //字符串转对象
    // var obj = eval('(' + (dataList.item.content) + ')');
    var item = JSON.parse(dataList.item.content);
    // console.log(item);
    // console.log((item.middle_image.urld)===undefined);
    //图片地址
    let imgUrl = "";
    if (item.middle_image) {
      imgUrl = item.middle_image.url;
    } else {
      imgUrl = "";
    }
    //只显示新闻
    if (item.cell_type != 0) {
      return;
    } else {
      return (<TouchableOpacity
        activeOpacity={0.8}
        onPress={() => Actions.ArticleDetail(item.article_url)}
      >
        <View style={styles.container_margin}>

          <View style={styles.item}>
            <View style={styles.leftTitle}>
              {/* <View style={styles.leftTitle} onPress={() => console.log("摸摸摸")}> */}
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
      </TouchableOpacity >)
    }
  }

  /**
   * 给列表设置id
   * @param item
   * @param index
   */
  _keyExtractor = (item, index) => index.toString();



  //下拉刷新
  _onRefresh = () => {
    this.setState({
      refreshing: true
    })
    this.getData()
    console.log("啦啦啦啦");
  }
  //上拉刷新
  _onEndReached = () => {
    console.log("上啦上啦！！");
    this.setState({
      refreshing: true
    })
  }
  // _onRefresh = () => alert('onRefresh: nothing to refresh :P');
  render() {
    const { listDate } = this.state
    console.log(listDate.length);
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          StatusBarAnimation={"fade"}
          // translucent={true}
        // hidden={true}/
        />
        {/* {listDate.length>0? */}
        <FlatList
          data={listDate.length > 0 ? listDate : ""}
          keyExtractor={this._keyExtractor}
          // ListHeaderComponent={this._header}
          ListFooterComponent={this._footer}
          // ItemSeparatorComponent={this._separator}
          renderItem={this.getView}
          // onViewableItemsChanged={(info) => {
          //   console.warn(info);
          // }}
          // keyExtractor={(item,index)=>console.log(item,index)}
          //下拉刷新
          onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
          //上拉刷新
          onEndReached={() => this._onEndReached}
          onEndReachedThreshold={0}
        >

        </FlatList>
        {/* :""} */}

      </View>

    )
  }

}

