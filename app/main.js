/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { Router, Scene, Actions, Modal } from "react-native-router-flux";
import Home from "./components/index/home";
import Personal from "./components/personal/personal";        //个人中心
import Setting from "./components/personal/setting/setting";  //设置
import ArticleDetail from "./components/index/articleDetail"; //文章详情

console.disableYellowBox = true    //关闭warning

class TabIcon extends React.Component {
  componentDidMount() {
    // console.log(this.props);
  }
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Icon name={this.props.tabIcon} size={20} color={this.props.focused ? "#FFDB42" : '#BBB'} />
        <Text style={{ color: this.props.focused ? '#FFDB42' : '#BBB', marginTop: 5, fontSize: 15 }}>
          {this.props.tabBarLabel}
        </Text>
      </View>

    )
  }
}
export default class Main extends React.Component {

  componentDidMount() {
    console.log("来来来！");
  }
  render() {
    return (
      <Router>
        <Modal>
          <Scene
            key="root"
            hideNavBar
          >
            <Scene
              key="tabbar"
              tabs
              tabBarPosition="bottom"
              tabBarStyle={mainStyle.tabBarStyle}
              animationEnabled={false}
              showLabel={false}
            >

              <Scene key="tab1" tabBarLabel="首页" icon={TabIcon} tabIcon="home"
                activeTintColor={'red'}
              >
                <Scene
                  key="ArticleDetail"
                  component={ArticleDetail}
                  title="文章详情"
                  hideTabBar
                  swipeEnabled={false}
                />
                <Scene
                  key="home"
                  component={Home}
                  title="新闻列表"
                  initial={true}
                />
              </Scene>
              {/* TabIcon */}
              <Scene key="tab2"
                tabBarLabel="个人中心"
                icon={TabIcon}
                tabIcon="person">
                <Scene
                  key="personal"
                  component={Personal}
                  // title="个人中心"
                  navigationBarStyle={mainStyle.tabHome}
                />
                <Scene
                  key="Setting"
                  component={Setting}
                  title="设置"
                  hideTabBar
                  swipeEnabled={false}
                  navigationBarStyle={mainStyle.settingTab}

                  // navTransparent={true}
                />
              </Scene>
            </Scene>
          </Scene>


        </Modal>
      </Router>
    );
  }
}

const mainStyle = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#FFF',
    borderTopColor: '#BBB',
    borderTopWidth: 1,
    height: 55,

  },
  tabHome: {
    backgroundColor: '#514a4a',
    display: "none"
  },
  settingTab: {
    backgroundColor: 'white',
    shadowColor:"white"
  }
})


