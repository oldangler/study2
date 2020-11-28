function getajax(httpUrl, callbackFn){
    // 1、创建ajax对象
    let xhr = new XMLHttpRequest()
    // 2、设置ajax的方法与路径
    xhr.open('GET', httpUrl);
    // 3、发送数据，可以为空
    xhr.send();
    // 4、监听是否有数据返回
    xhr.onreadystatechange = function(){
        if(xhr.status==200 && xhr.readyState==4){
            /* console.log(xhr);
            console.log(xhr.status);
            console.log(xhr.readyState); */

            // 5、处理数据
            callbackFn(xhr);
        }
    }
}


// 升级版ajax封装，将向闯入url中的参数单独分离出来作为一个对象传入
function getajaxest(httpUrl, data, callbackFn){
    // 1、创建ajax对象
    let xhr = new XMLHttpRequest()
    // 2、设置ajax的方法与路径
    xhr.open('GET', httpUrl+parsedata(data));
    // 3、发送数据，可以为空
    xhr.send();
    // 4、监听是否有数据返回
    xhr.onreadystatechange = function(){
        if(xhr.status==200 && xhr.readyState==4){
            /* console.log(xhr);
            console.log(xhr.status);
            console.log(xhr.readyState); */

            // 5、处理数据
            callbackFn(xhr);
        }
    }

    // 将得到的data对象转化为url中的参数字符串
    function parsedata(data){
        let str = '?';
        for(i in data){
            str += i +'='+ data[i] + '&';
        }
        return str.substring(0,str.length-1)
    }
}