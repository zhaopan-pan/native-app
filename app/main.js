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
  View
} from 'react-native';
import { Router, Scene, Actions } from "react-native-router-flux";

import Home from "./components/index/home";
import Personal from "./components/personal/personal";




export default class Main extends React.Component {

  
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="tabbar" tabs tabBarStyle={{ backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#BBB' }}>
            <Scene key="tab1" tabBarLabel="首页" >
              <Scene key="home" component={Home} title="home" initial={true} />
            </Scene>
            <Scene key="tab2" tabBarLabel="个人中心">
              <Scene key="personal" component={Personal} title="Personal" />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}


