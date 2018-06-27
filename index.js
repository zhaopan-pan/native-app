import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Main from './app/main';

export default class Myapp extends Component {
    render(){
        return(
            <Main/>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => Myapp);
