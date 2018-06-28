/**
 * 封装fetch方法
 * @param {请求路径} url 
 * @param {参数} params 
 * @param {请求方式} method 
 * @param {回调} callback 
 */

  function api(url,params={},method,callback){
    console.log(url);
    console.log(params);
    let paramsArr=[];
    if(params){
        for (const i in params) {
            if (args.hasOwnProperty(i)) {
                const val = params[i];
                console.log(i);
                console.log(val);
                paramsArr.push(i+"="+val);
            }else{
                console.log("没有参数");
            }
        }
        if(paramsArr.length>0){
            url=url+"?"+paramsArr.join("&");
            console.log(url);
        }

    }
    // let data;
    fetch(url,{
        method:method,
      })
      //数据解析方式
      .then((response) => response.json())
      .then((rs)=>{
        console.log(typeof rs);
        if(rs!==null||rs!=={}){
            callback(rs);
        }else{
            return;
        }
      }).catch((err)=>{
        console.log(err);
        callback(err);
      })
}

module.exports=api;