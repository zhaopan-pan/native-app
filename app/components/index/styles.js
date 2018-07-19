import {
    StyleSheet,
  } from 'react-native';



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
      // margin: 15,
      // flex: 1,
      marginRight: 15,
      marginLeft: 15,
  
    },
  
    //单个容器
    item: {
      // flex: 0.2,
      // backgroundColor: 'powderblue',
      flexDirection: "row",
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
      // marginBottom
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
      marginRight: 0,
      // backgroundColor: "green",
      justifyContent: "center",
      alignItems: 'center',
    },
    img: {
      flex: 0.5,
      width: 122,
      height: 83,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  export default styles;