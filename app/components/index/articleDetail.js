import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';


const defaultUrl = "http://www.xinhuanet.com/politics/2018-07/05/c_1123085019.htm";
export default class ArticleDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            sourceUrl: defaultUrl
        }
    }
    componentWillMount(){
        console.log(this.props.data);
        this.setState({
            sourceUrl:this.props.data
        })
    }
    render() {
        const { sourceUrl } = this.state;
        console.log(sourceUrl);
        return (
            <View style={styles.container}>
                <WebView
                    source={{
                        uri: sourceUrl
                    }}
                    style={{ width: '100%', height: '100%' }}
                    // 设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例
                    scalesPageToFit ={true}  
                    onError={err => console.log("失败了：" + err)}
                    onLoad={suce => console.log("成功了！：" + suce)}
                    onLoadStart={loadStar=> console.log("加载开始了！：" + loadStar)}
                    onLoadEnd={loadEnd => console.log("加载结束了！：" + loadEnd)}
                    renderError={reErr => console.log("显示错误::" + reErr)}
                    startInLoadingState={true}
                // scrollEnabled={false}
                // automaticallyAdjustContentInsets={true}
                // contentInset={{ top: 0, left: 0 }}
                // onNavigationStateChange={(title) => {
                //     if (title.title != undefined) {
                //         this.setState({
                //             height: (parseInt(title.title) + 20)
                //         })
                //     }
                // }}
                >
                </WebView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%' 
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});