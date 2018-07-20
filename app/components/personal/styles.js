import {
    StyleSheet,
  } from 'react-native';

const styles = StyleSheet.create({
    contains: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#ebe7e7"
    },
    //加边距
    container_margin: {
      flex: 1,
      marginRight: 15,
      marginLeft: 15,
  
    },
    userInfo: {
      flex: 0.2,
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#514a4a',
      // height:100
    },
    personal_img: {
      flex: 1,
      flexDirection: "row",
      // backgroundColor: "pink",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15
    }
    ,
    img: {
      height: 80,
      width: 80,
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      borderBottomLeftRadius: 80,
      borderBottomRightRadius: 80,
    },
    usename: {
      color: "white",
      fontSize: 18,
      // backgroundColor: "blue",
      height: 80,
      width: 80,
      lineHeight: 60,
      textAlign: "left",
      marginLeft: 20
    },
    handle: {
      flex: 0.08,
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: 15,
      marginTop: 15
    },
    handle_icon: {
      flex: 0.11,
  
    },
    setting: {
      fontSize: 18,
    }
  });

  export default styles;