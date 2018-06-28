import React, { Component } from 'react';

export default class Api extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url:this.props.url,
            args:this.props.args,
         }
    }
    componentWillMount(){
        const {url,props}=this.state;
        console.log(url);
        console.log(props);
    }
    render() { 
        return (  
            <div></div>
        )
    }
}
 
export default Api;

 function apiGet(url,args={},callback){
    console.log(url);
    console.log(args);
    let data;
    fetch(url,{
        method:"GET",
        args:args
      })
      //数据解析方式
      .then((response) => response.json())
      .then((result)=>{
        data=result;
      }).catch((err)=>{
        console.log(err);
        data=err;
      })
      return callback(data);
}