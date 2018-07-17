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

export default class About extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableNativeFeedback> */}
                    <View style={styles.handle}>
                        {/* <View style={styles.handle_icon}> */}
                        {/* <Icon name={"gear"} size={20} color={'#BBB'} /> */}
                        {/* </View> */}
                        <View style={styles.appInfo}>
                            <Text style={styles.appEdition}>edition: 0.0.1</Text>
                        </View>
                        <View style={styles.footerInfo}>
                            <Text style={styles.author}>@created by zp</Text>
                            <Text style={styles.author}>著权在手，侵权必究</Text>
                        </View>

                    </View>
                {/* </TouchableNativeFeedback> */}
            </View>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // backgroundColor: "#ccc",
        justifyContent: "flex-end",
        alignItems: 'center',

    },
    //加边距
    container_margin: {
        flex: 1,
        marginRight: 15,
        marginLeft: 15,

    },
    //版本
    appInfo: {
        flex: 0.9,
        width: 200,
        // backgroundColor: "white",
    },
    appEdition: {
        textAlign: "center",
        lineHeight: 500,
        fontSize:18
    },
    //底部
    footerInfo:{
        flex: 0.1,
        width: 200,
        // backgroundColor: "green",
    },
    author:{
        textAlign: "center",
        fontSize:16

    },

    handle_icon: {
        flex: 0.11,

    },
    arrow_right: {
        // flex: 0.11,
    }
    ,
    setting: {
        fontSize: 18,
    }
});