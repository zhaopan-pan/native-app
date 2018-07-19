import React, { Component} from 'react';
import { AppRegistry ,View} from 'react-native';
import Main from './app/main';
import ZpRouter from './app/router';
import SplashScreen from 'react-native-splash-screen'

export default class Myapp extends Component {

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
       setTimeout(() => {
         SplashScreen.hide();
      }, 2000);  // 这里可以自定义来设置显示时间,让其暂停1秒后,再跳转到主页面
    }


    render() {
        return (
                <Main />
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => Myapp);
