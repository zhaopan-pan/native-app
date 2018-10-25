
/**
 * 封装fetch方法
 * @param {请求参数} paramsObj 
 * @param {*} callback 
 */

function api(paramsObj, callback) {
    let url=paramsObj.url;
    let params=paramsObj.resParameters||"";
    console.log(params);
    let paramsArr = [];
    //拼接get请求参数
    if (params) {
        for (const i in params) {
            if (params.hasOwnProperty(i)) {
                const val = params[i];
                paramsArr.push(i + "=" + val);
            } else {
                console.log("没有参数");
            }
        }
        if (paramsArr.length > 0) {
            url = url + "?" + paramsArr.join("&");
            console.log(url);
        }

    }
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: "GET",
            headers: {
                dataType: "json",
            }
        })
            //数据解析方式
            .then((response) => response.json())
            .then((rs) => {
                // console.log(typeof rs);
                if (rs !== null || rs !== {}) {
                    resolve(rs);
                } else {
                    return;
                }
            }).catch((err) => {
                console.log(err);
                if (err) {
                    reject(err);
                } else {
                    return;
                }
            })

    });

}

module.exports = api;