
import React, { Component } from 'react';
import {
    Image,
    View,
    StyleSheet,
} from 'react-native';
import Styles from "./style";


export default class StartPage extends React.Component {
    componentDidMount(){
        console.log(Styles);
    }
    render() {
        return (
            <View>
                <Image source={require("./img/tt.jpg")} style={Styles.img}/>
            </View>
        )
    }
}

