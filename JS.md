### 查找数组中对象里元素的位置，返回值为数字

```js
function cha(arr, item) {
              for (let i = 0, iLen = arr.length; i < iLen; i++) {
              if (arr[i].deliveryId === item.deliveryId) {
                return i
              }
            }
            }
//法二
const foundIndex = letters.findIndex((item) => item.value === "y");
// letters为数组，y为要查的元素，foundindex返回为对象的下标数字（0、 1、 2、 3、 4...）
```

### 将数组数据中的字符串转换布尔值，并加入新对象

```js
function huan(array) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          if (element.isEnable == '1') {
            element.isEnable = true
          }else{
            element.isEnable = false
          }
          element.xuan = true
        }
        return array
      }
```

### 将数组中对象的属性提取出来

```js
	let arr = [{ name: "河南", pop: "121" }, { name: "郑州" }];
		//   Array.from方法
      var userName = Array.from(arr, ({ name }) => name);
      //   map方法
      var userName1 = arr.map((item) => {
        return item.name;
      });
      // foreach 方法
      var userName2 = [];
      arr.forEach((item) => {
        userName2.push(item.name);
      });
//['河南', '郑州']
let obj2 = {};
obj2["name"] = userName.join();
// obj2   {name: '河南,郑州'}
```

法二

```js

        var data = [ {value: 1048, name: 'jack' ,code:123},
                     { value: 735, name: 'zerk' ,code:234},
                     { value: 580, name: 'mark' ,code:456},];
        var newData = [];
         data.map((item,index) =>{
            newData.push({
                value:item.value,
                name:item.name
            })
        });
        console.log(newData);
		// {value: 1048, name: 'jack'},
		// { value: 735, name: 'zerk' },
    	// { value: 580, name: 'mark' }

```
### 提取数组中元素

```js
const add = [
        { data: 12113 },
        { data: 121 ,data2:1213},
        { data: 121 },
        { data: 121 },
        [{ data: "qwqw" }, { data5: "qwqw" }],
      ];

      const newadd = add.map((a) => a.data);

      console.log(newadd, 121);
      // 将add数组中的所有data的数据提取出来
	// (5) [12113, 121, 121, 121, undefined] 121
```

### 通过value在数组中查找数组中的对象中的label

```js
var data = [ {value: 1, label: 'jack' },
            { value: 2, label: 'zerk' },
            { value: 3, label: 'mark' },];

// 回显数据字典
export function selectDictLabel(datas, value) {
  if (value === undefined) {
    return "";
  }
  var actions = [];
  Object.keys(datas).some((key) => {
    if (datas[key].value == ('' + value)) {
      actions.push(datas[key].label);
      return true;
    }
  })
  if (actions.length === 0) {
    actions.push(value);
  }
  return actions.join('');
}
```



### 跨平台通讯

[](https://juejin.cn/post/6844903665694687240)

```js
//发送数据
otherWindow.postMessage(message, targetOrigin, [transfer]);
//接收数据
window.addEventListener("message", receiveMessage, false) ;
function receiveMessage(event) {
     var origin= event.origin;
     console.log(event);
}

```

### 数组拆分

```js
// size每组数组多少个，如：8
                // array需要拆分的数组
                function arrayChunk(array, size) {
                    let data = []
                    for (let i = 0; i < array.length; i += size) {
                        data.push(array.slice(i, i + size))
                    }
                    return data
                }
```

### 数字百分比化

```js
Math.round((scope.row.openvolume / scope.row.number) * 10000) / 100 + '％'
```



### 数组排序

```js
		let arr = [3,6,4,8,2,11]
        let news = arr.sort(function(a,b) {
            return a-b
        })
        console.log(news);  //[2, 3, 4, 6, 8, 11]

```

### 检查某个对象自身是否拥有某个属性

```js
// obj为要查的对象，property为要查的属性
function objHasOwnProp(obj, propertyKey) {
        return Object.prototype.hasOwnProperty.call(obj, propertyKey);
      }
```

### 获取URL参数

```js
		/**
       * [获取URL中的参数名及参数值的集合]
       * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
       * @param {[string]} urlStr [当该参数不为空的时候，则解析该url中的参数集合]
       * @return {[string]}       [参数集合]
       */
      function GetRequest(urlStr) {
        if (typeof urlStr == "undefined") {
          var url = decodeURI(location.search); //获取url中"?"符后的字符串
        } else {
          var url = "?" + urlStr.split("?")[1];
        }
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
          var str = url.substr(1);
          strs = str.split("&");
          for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(
              strs[i].split("=")[1]
            );
          }
        }
        return theRequest;
      }

      var parms_2 = GetRequest(
        "http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明"
      );
      console.log(parms_2); // {"uid":"admin","rid":"1","fid":"2","name":"小明"}
// ---------------------------------------------------------------------------
      function queryUrl(url) {
        let obj = {};
        if (url.indexOf("?") < 0) return obj;
        let arr = url.split("?");
        url = arr[1];
        let array = url.split("&");
        for (let i = 0; i < array.length; i++) {
          let arr2 = array[i];
          let arr3 = arr2.split("=");
          obj[arr3[0]] = arr3[1];
        }
        return obj;
      }
      console.log(
        queryUrl(
          "http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明"
        )
      );
```

### FormData数据为空原因是打印方法错误

```js
let form = new FormData();
form.append("212", "2121");
// form.forEach((key, val) => {
//   console.log("key %s: value %s", key, val);
// });
console.log(form.getAll("212"));
```

### 逗号隔开的字符串转数组

```
var a = 'a,b,c,d';
var arr = [];
arr  = a.split(',')
console.log(a) //  ['a', 'b', 'c', 'd']
```

### js多条件判断

```js
['iphoneX', 'iphone11', 'iphone12'].includes(x)
```

### Promise

- ###### Promise.all

  `Promise.all()`方法只适合所有异步操作都成功的情况，如果有一个操作失败，就无法满足要求。

  ```js
  Promise.all([occupations(), hobbies(), vehicles(), user()])
    .then(res => {
      this.occupationItems = res[0]
      this.hobbiesItems = res[1] 
      this.vehiclesItems = res[2]
      this.user = res[3]
    })
    .catch(console.error)
  
  ```

- ###### Promise.allSettled

  `Promise.allSettled()`方法，用来确定一组异步操作是否都结束了（不管成功或失败）。

  `Promise.allSettled()`方法接受一个数组作为参数，数组的每个成员都是一个 Promise 对象，并返回一个新的 Promise 对象。只有等到参数数组的所有 Promise 对象都发生状态变更（不管是`fulfilled`还是`rejected`），返回的 Promise 对象才会发生状态变更。

  ```js
  Promise.allSettled([occupations(), hobbies(), vehicles(), user()]);
  
  // 异步操作成功时
  {status: 'fulfilled', value: value}
  
  // 异步操作失败时
  {status: 'rejected', reason: reason}
  ```

  

### 复制文本

```js
    const copyText = (text) => {
        // clipboardData 在页面上将需要的东西复制到剪贴板上
        const clipboardData = window.clipboardData
        if (clipboardData) {
          clipboardData.clearData()
          clipboardData.setData('Text', text)
          return true
        } else if (document.execCommand) {  // 注意 document.execCommand 已弃用 但是有些浏览器依旧支持 用的时候记得看兼容情况
          // 通过创建 dom 元素，去把要复制的内容拿到 
          const el = document.createElement('textarea')
          el.value = text
          el.setAttribute('readonly', '')
          el.style.position = 'absolute'
          el.style.left = '-9999px'
          document.body.appendChild(el)
          el.select()
          // 拷贝当前内容到剪贴板
          document.execCommand('copy')
          // 删除 el 节点
          document.body.removeChild(el)
          return true
        }
        return false
      }
      copyText('hello!') // ctrl + v = copyText  | true

```

### 功能

```js
/**
 * 判断终端以及浏览器
 * userAgent string User-Agent信息
 */
export const readUserAgent = ua => {
  let data = {
    terminal: '',
    browser: '',
    terminalType: {}
  }
  data.terminalType = {
    trident: ua.indexOf('Trident') > -1, // IE内核
    presto: ua.indexOf('Presto') > -1, // opera内核
    webKit: ua.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1, // 火狐内核
    mobile: !!ua.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1, // android终端
    iPhone: ua.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: ua.indexOf('iPad') > -1, // 是否iPad
    webApp: ua.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
    weixin: ua.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
    qq: ua.match(/\sQQ/i) === ' qq' // 是否QQ
  }
  if (
    data.terminalType.ios ||
    data.terminalType.iPhone ||
    data.terminalType.iPad
  ) {
    data.terminal = '苹果'
  } else if (data.terminalType.android) {
    data.terminal = '安卓'
  } else {
    data.terminal = 'PC'
  }
  if (/msie/i.test(ua) && !/opera/.test(ua)) {
    data.browser = 'IE'
  } else if (/firefox/i.test(ua)) {
    data.browser = 'Firefox'
  } else if (/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua)) {
    data.browser = 'Chrome'
  } else if (/opera/i.test(ua)) {
    data.browser = 'Opera'
  } else if (/iPad/i.test(ua)) {
    data.browser = 'iPad'
  } else if (
    /webkit/i.test(ua) &&
    !(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua))
  ) {
    data.browser = 'Safari'
  } else {
    data.browser = '未知'
  }
  return data
}

// 格式化文件大小 单位：B、KB、MB、GB
const renderSize = value => {
  if (null == value || value == '') {
    return "0 B"
  }
  const unitArr = new Array("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
  let index = 0
  const srcsize = parseFloat(value)
  index = Math.floor(Math.log(srcsize) / Math.log(1024))
  let size = srcsize / Math.pow(1024, index)
  size = size.toFixed(2)
  if (unitArr[index]) {
    return size + unitArr[index]
  }
  return '文件太大'
}

const convertEnum = obj => {
  const list = []
  if (obj) {
    for (let key in obj) {
      list.push({
        text: obj[key],
        value: key
      })
    }
  }
  return list
}
const convertDict = (list = []) => {
  return list.map(item => {
    return {
      text: item.name,
      value: item.code
    }
  })
}

const copy = msg => {
  if (msg) {
    let oInput = document.createElement('input');     //创建一个隐藏input（重要！）
    oInput.value = msg;    //赋值
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
  }
}


export {renderSize, convertEnum, copy, convertDict}

```

### 文件流下载预览方法支持移动端

> 注意移动端文件流下载时请求方式必须是get请求否则会出现安卓端在线预览乱码现象

```js
// 通用下载方法
export function download(url, params, filename) {
  return service.post(url, params, {
    transformRequest: [(params) => { return tansParams(params) }],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType: 'blob'
  }).then(response => {
    const reader = new FileReader();
    reader.readAsDataURL(response.data);
    let disposition = response.headers["content-disposition"]
    let suffix = disposition.split('.')[1]
    let fileTypeMime = ''
    switch (suffix) {
      case 'doc':
        fileTypeMime = 'application/msword;charset=utf-8';
        break;
      case 'docx':
        fileTypeMime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8';
        break;
      case 'jpg':
      case 'jpeg':
        fileTypeMime = 'image/jpeg;charset=utf-8;charset=utf-8';
        break;
      case 'svg':
        showToast("暂不支持该类型文件下载");
        return;
      case 'txt':
        showToast("暂不支持该类型文件下载");
        return;
      case 'pdf':
        fileTypeMime = 'application/pdf;charset=utf-8';
        break;
      case 'ppt':
        fileTypeMime = 'application/vnd.ms-powerpoint;charset=utf-8';
        break;
      case 'pptx':
        fileTypeMime = 'application/vnd.openxmlformats-officedocument.presentationml.presentation;charset=utf-8';
        break;
      case 'xls':
        fileTypeMime = 'application/vnd.ms-excel;charset=utf-8';
        break;
      case 'xlsx':
        fileTypeMime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8';
        break;
      case 'zip':
        showToast("暂不支持该类型文件下载");
        return;
      case '7z':
        showToast("暂不支持该类型文件下载");
        return;
    }
    reader.onload = () => {
      // const url = reader.result;
      if (navigator.userAgent.indexOf('Android') > -1) {
        const downloader = document.createElement('a');
        const blob = new Blob([response.data], { type: fileTypeMime })
        let blobUrl = window.URL.createObjectURL(blob)
        // downloader.href = window.URL.createObjectURL(new Blob([response.data], { type: fileTypeMime }));
        window.location.href = blobUrl
        showToast(blobUrl);
        // downloader.href = 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf';
        // downloader.download = filename;
        // downloader.style.display = 'none';
        // document.body.appendChild(downloader);
        // downloader.click();
        // document.body.removeChild(downloader);
        downloads(blobUrl, filename)
        showToast('安卓');
      } else {
        const blob = new Blob([response.data], { type: fileTypeMime })
        let blobUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        console.log(blobUrl);
        // link.setAttribute('download', filename);
        document.body.appendChild(link);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        link.dispatchEvent(evt);
        document.body.removeChild(link);
        showToast('苹果');
      }
    };
  });
}
```

使用

```js
download('/doc/download', { id: row.id }, row.fileName)
window.location.href = "/app/doc/downloadApp?id="+ row.id
```

### MQTT协议中的方法
Connect。等待与服务器建立连接。
Disconnect。等待MQTT客户端完成所做的工作，并与服务器断开TCP/IP会话。
Subscribe。等待完成订阅。
UnSubscribe。等待服务器取消客户端的一个或多个topics订阅。
Publish。MQTT客户端发送消息请求，发送完成后返回应用程序线程。
