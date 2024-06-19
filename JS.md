
### 如何判断undefined和null
测试证明对undefined、null和空字符串取反为true，对其余任何值取反都为false。如：
```js
!undefined; // true
!null; // true
!''; // true
!1; // false
!'123'; // false
```
所以，如果想判断一个值是undefined、null和空字符串中的一种，只要用 ! 就可以。如：
```js
if (!data) {
    ...
}
```
同理，如果想判断一个值不是undefined、null和空字符串中的一种，则用 !! 就可以。如：
```js
if (!!data) {
    ...
}
```

### 将斜杠改为问号
```js
const url = 'https://w.url.cn/s/Ackphg4/cak=krNIw5qjllJUl1ldnrze8a';
const newUrl = url.replace(/\/cak/, '?cak');
console.log(newUrl);
// https://w.url.cn/s/Ackphg4?cak=krNIw5qjllJUl1ldnrze8a
```

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

// 2
     sortBys(field) { // field表示（vicechairmanlist1数组对象）需要排序的字段名称
	return (x, y) => {
	// return y[field] - x[field] // 数字大的在前面
	return x[field] - y[field] // 数字小的在前面
	 }
	},

   console.log(arr.sort(this.sortBys('one'))); // 使用
```

### 数组合并去重
```js
let arr1 = [3,5,2,3,6];
let arr2 = [5,2,4,6,8,7,9,2];
let arr = arr1.concat(arr2);  //合并数组
let arrNew= new Set(arr); //通过set集合去重
console.log("arrNew",Array.from(arrNew)); //将set集合转化为数组

// *********
let arr=[
    {id:1,name:'AAAA'},
    {id:2,name:'BBBB'}
]
let arr1=[
    {id:1,name:'AAAA'},
    {id:3,name:'CCCC'}
]
let arrs=[...arr,...arr1];
//根据id去重
let map=new Map();
for(let item of arrs){
    if(!map.has(item.id)){
        map.set(item.id,item)
    }
}
let newArr=[...map.values()];//把map中所有的值取出来放进数组
//****************
removedup(arr, batch) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  if (arr.length == 0) {
    return [];
  }
  let obj = {};
  let uniqueArr = arr.reduce(function (total, item) {
    obj[item[batch]] ? '' : (obj[item[batch]] = true && total.push(item));
    return total;
  }, []);
  return uniqueArr;
}
// arrObjList 需要去重的数组对象，  score 根据这个属性进行去重
let uniqueArrObjList = removedup(arrObjList, "score");
// **************遍历旧数组，把值加入新建的数组（当新数组中不存在该值时）
function uniqueArr(array) {
    var n = []; //一个新的临时数组
    //遍历当前数组
    for (var i = 0; i < array.length; i++) {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (n.indexOf(array[i]) == -1) n.push(array[i]);
    }
    return n;
}

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
// ---------------------------------------------------------------------
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}
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

### 截取
截取前面所有的字符
```js
let a = 'shangwu,xiawu';
let b = a.indexOf(',');
let c = a.substring(0,b)
console.log(c);
```
截取后面所有的字符
```js
let h = 'shangwu,xiawu';
let s = h.split(',');
console.log(s,'不加下标返回数组');
console.log(s[1],'获取想要的字符')
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

['1', '2', '7'].includes(scope.row.jtgjlx)
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

### 文件流下载
```js
export function download2(url, params, filename) {
  downloadLoadingInstance = Loading.service({ text: "正在下载数据，请稍候", spinner: "el-icon-loading", background: "rgba(0, 0, 0, 0.7)", })
  return service.post(url, params, {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'blob',
  }).then(async (data) => {
    console.log(data);
    const isBlob = blobValidate(data);
    if (isBlob) {
      const blob = new Blob([data], { type: 'application/zip' })
      saveAs(blob, filename)
    } else {
      const resText = await data.text();
      const rspObj = JSON.parse(resText);
      const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
      Message.error(errMsg);
    }
    downloadLoadingInstance.close();
  }).catch((r) => {
    console.error(r)
    Message.error('下载文件出现错误，请联系管理员！')
    downloadLoadingInstance.close();
  })
}
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

### 数组改为级联选择器

```js
export function deleteChildren(arr) {
  let childs = arr
  if (childs) {
    for (let i = childs.length; i--; i > 0) {
      if (childs[i].commodityName) {
        childs[i].label = childs[i].commodityCode
        // '*' + childs[i].commodityCategory + '*' +
        childs[i].value = '*' + childs[i].commodityCategory + '*' + childs[i].commodityName
        // delete childs[i].commodityName
        deleteChildren(childs[i].childrenList)
      }
      if (childs[i].buyerName) {
        childs[i].label = childs[i].buyerName
        childs[i].value = childs[i].buyerName
        deleteChildren(childs[i].childrenList)
      }
      if (childs[i].childrenList) {
        if (childs[i].childrenList.length) {
          childs[i].children = childs[i].childrenList
          deleteChildren(childs[i].childrenList)
        } else {
          delete childs[i].childrenList
        }
      }
    }
  }
  return arr
}
```

### 电子发票的商品计算逻辑

```js
handleBlur(data) {
      console.log(data);
      var row = data
      var hj = 0;
      for (var i = 0; i < this.form.dynamicItem.length; i++) {
        var je = this.form.dynamicItem[i].unitPrice
        var sl = this.form.dynamicItem[i].quantity
        var ze = this.form.dynamicItem[i].amount
        var shui = this.form.dynamicItem[i].taxRate
        var zez = this.form.dynamicItem[i].amountWithTax
        // debugger
        // if (je != "" && sl != "") {
        //   hj += (Number(je).toFixed(2)) * Number(sl);
        //   console.log(hj, 'hj');
        // }
        if (this.hs == true) {
          if (je != "" && zez != "" && sl == "") {
            this.form.dynamicItem[i].quantity = (Number(zez).toFixed(2)) / Number(je);
          }
          if (sl != "" && zez != "" && sl == "") {
            this.form.dynamicItem[i].unitPrice = (Number(zez).toFixed(2)) / Number(sl);
          }
          if (je != "" && sl != "") {
            this.form.dynamicItem[i].amountWithTax = (Number(je).toFixed(2)) * Number(sl);
            // this.form.dynamicItem[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
            if (zez != "") {
              if (row == 'unitPrice') {
                this.form.dynamicItem[i].amountWithTax = ''
                this.form.dynamicItem[i].amountWithTax = (Number(je).toFixed(2)) * Number(sl);
                this.form.dynamicItem[i].unitPrice = Number(je)
              } else {
                console.log(Number(zez));
                this.form.dynamicItem[i].amountWithTax = Number(zez)
                this.form.dynamicItem[i].unitPrice = ''
                this.form.dynamicItem[i].unitPrice = (Number(zez).toFixed(2)) / Number(sl);
              }
              // if (shui != '') {
              //   this.form.dynamicItem[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
              // }
            }
          }
        } else {
          if (je != "" && sl != "") {
            this.form.dynamicItem[i].amount = (Number(je).toFixed(2)) * Number(sl);
            // this.form.dynamicItem[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
            if (ze != "") {
              if (row == 'unitPrice') {
                this.form.dynamicItem[i].amount = ''
                this.form.dynamicItem[i].amount = (Number(je).toFixed(2)) * Number(sl);
                this.form.dynamicItem[i].unitPrice = Number(je)
              } else {
                this.form.dynamicItem[i].amount = Number(zez)
                this.form.dynamicItem[i].unitPrice = ''
                this.form.dynamicItem[i].unitPrice = (Number(zez).toFixed(2)) / Number(sl);
              }
              // if (shui != '') {
              //   this.form.dynamicItem[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
              // }
            }
          }
          if (je != "" && ze != "" && sl == "") {
            this.form.dynamicItem[i].quantity = (Number(ze).toFixed(2)) / Number(je);
          }
          if (sl != "" && ze != "" && sl == "") {
            this.form.dynamicItem[i].unitPrice = (Number(ze).toFixed(2)) / Number(sl);
          }
        }
      }
      console.log(total(this.form.dynamicItem));
      taxCalculation(this.form.dynamicItem)
      hj = total(this.form.dynamicItem)

      if (hj == 0) {
        this.dxhj = '零圆整'
      } else {
        this.dxhj = dealBigMoney(hj)
      }
      this.xxhj = hj.toFixed(2);
    },
```
封装的方法
```js
export function total(arr) {
  console.log(arr);
  let hj = 0;
  for (let i = 0; i < arr.length; i++) {
    var je = arr[i].unitPrice
    var sl = arr[i].quantity
    var ze = arr[i].amount
    var shui = arr[i].taxRate
    var zez = arr[i].amountWithTax
    arr[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
    hj += (Number(je).toFixed(2)) * Number(sl);
  }
  return hj
}

export function taxCalculation(arr) {
  for (let i = 0; i < arr.length; i++) {
    var je = arr[i].unitPrice
    var sl = arr[i].quantity
    var ze = arr[i].amount
    var shui = arr[i].taxRate
    var zez = arr[i].amountWithTax
    arr[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
  }
  return arr
}
```

### 数组插入数据方法
```js
// 为0时就是不删除元素
this.form.dynamicItem.splice(discountIndex, 0, this.discount)
```

### 日期格式化
```js
// 日期格式化
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
// parseTime(new Date())
```

### 中断js执行
```js
if (Number(childs[i].amountWithTax) == 0) {
      Message({ message: "校验失败，明细行第" + (i + 1) + "金额不能等于零!", type: 'error' })
      throw Promise.reject("校验失败，明细行第" + (i + 1) + "金额不能等于零!")
    }
```

### 实现文本域`textarea`文字添加删除

```html
<el-button @click.stop="addRemarks(formData, $event)" class="icon_selecting"></el-button>
```

```js
addRemarks(text, event) {
      let remark_text = '销方开户银行：' + text.yhmc + ';' + '销方银行账户: ' + text.yhzh + ';\n'
      let target = event.target;
      if (target.classList.contains("active")) {
        // 再次点击删除
        console.log('remark_text', remark_text);
        this.formData.remark = this.formData.remark.replace(remark_text, '');
        console.log(this.formData.remark);
      } else {
        if (this.formData.remark == '' || this.formData.remark == null) {
          this.formData.remark = '销方开户银行：' + text.yhmc + ';' + '销方银行账户: ' + text.yhzh + ';\n'
        } else {
          this.formData.remark = this.formData.remark + '销方开户银行：' + text.yhmc + ';' + '销方银行账户: ' + text.yhzh + ';\n'
        }
      }
      target.classList.toggle("active");
    },
```

### 前端打印方法
方法一：直接调用打印页面弹窗

```js
printClick() {
// 获取原有页面的html内容
 let oldStr = window.document.body.innerHTML;
 // 根据id获取打印的html内容
 let newStr = document.getElementById('test').innerHTML;
 // html页面内容赋值
 window.document.body.innerHTML = newStr;
 // 调用打印弹窗
 window.print();
 // 页面内容还原
 //window.document.body.innerHTML = oldStr;
 // 打印完成后重新加载页面
 window.location.reload()
 }
```

方法二：把打印内容嵌入到页面，调用打印弹窗

```js
printClick() {
  const printContentHtml = document.getElementById('test').innerHTML
  const iframe = document.createElement('iframe')
  iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;')
  document.body.appendChild(iframe)
  iframe.contentDocument.write(printContentHtml)
  iframe.contentDocument.close()
  iframe.contentWindow.print()
  document.body.removeChild(iframe)
 }
```

方法三：打开新页面打印

```js
printClick() {
   const printContentHtml = window.document.body.innerHTML;
   const printPage = window.open()
   printPage.document.write(printContentHtml)
   printPage.document.close()
   printPage.print()
   printPage.close()
 }
```

### WebSocket的简单封装示例

```js
export class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.ws = null;
    this.heartbeatTimer = null;
    this.onopen = null;
    this.onclose = null;
    this.onmessage = null;
    this.onerror = null;
  }

  connect() {
    if (!this.ws) {
      this.ws = new WebSocket(this.url);
      this.ws.onopen = (event) => {
        console.log('WebSocket连接已打开');
        if (this.onopen) {
          this.onopen(event);
        }
        this.startHeartbeat();
      };
      this.ws.onclose = (event) => {
        console.log('WebSocket连接已关闭');
        if (this.onclose) {
          this.onclose(event);
        }
        this.stopHeartbeat();
        this.reconnect();
      };
      this.ws.onmessage = (event) => {
        console.log('WebSocket收到消息');
        if (this.onmessage) {
          this.onmessage(event);
        }
        if (event.data === 'pong') {
          // 心跳响应，重置定时器
          clearInterval(this.heartbeatTimer);
          this.startHeartbeat();
        }
      };
      this.ws.onerror = (event) => {
        console.error('WebSocket发生错误');
        if (this.onerror) {
          this.onerror(event);
        }
      };
    }
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  send(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      console.log('WebSocket发送消息');
      this.ws.send(message);
    } else {
      console.error('WebSocket未连接');
    }
  }

  startHeartbeat() {
    // 每隔一段时间发送心跳消息
    this.heartbeatTimer = setInterval(() => {
      console.log('WebSocket发送心跳');
      this.send('ping');
    }, 30000);
  }

  stopHeartbeat() {
    clearInterval(this.heartbeatTimer);
  }

  reconnect() {
    setTimeout(() => {
      console.log('WebSocket重新连接中...');
      this.connect();
    }, 5000);
  }
}
```
用法
```js
import { WebSocketClient } from '@/utils/request'

const ws = new WebSocketClient('wss://www.example.com/websocket');
ws.onopen = (event) => {
  console.log('WebSocket连接已打开');
};
ws.onclose = (event) => {
  console.log('WebSocket连接已关闭');
};
ws.onmessage = (event) => {
  console.log('WebSocket收到消息：' + event.data);
};
ws.onerror = (event) => {
  console.error('WebSocket发生错误');
};
ws.connect();
ws.disconnect(); //关闭 WebSocket
```

### 浏览器遮挡事件
```js
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // 页面变为可见状态时执行的操作
  } else if (document.visibilityState === 'hidden') {
    // 页面变为不可见状态时执行的操作
  }
});
```

### 数字转大写数字

```js
// 数字转大写
export function dealBigMoney(n) {
  var fraction = ['角', '分'];
  var digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  var unit = [
    ['圆', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  var head = n < 0 ? '负' : '';
  n = Math.abs(n);

  var s = '';

  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }

  s = s || '整';
  n = Math.floor(n);

  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}
```

### 数组改为级联选择器

```js
export function deleteChildren(arr) {
  let childs = arr
  if (childs) {
    for (let i = childs.length; i--; i > 0) {
      if (childs[i].commodityName) {
        childs[i].label = childs[i].commodityCode
        // '*' + childs[i].commodityCategory + '*' +
        childs[i].value = '*' + childs[i].commodityCategory + '*' + childs[i].commodityName
        // delete childs[i].commodityName
        deleteChildren(childs[i].childrenList)
      }
      if (childs[i].buyerName) {
        childs[i].label = childs[i].buyerName
        childs[i].value = childs[i].buyerName
        deleteChildren(childs[i].childrenList)
      }
      if (childs[i].childrenList) {
        if (childs[i].childrenList.length) {
          childs[i].children = childs[i].childrenList
          deleteChildren(childs[i].childrenList)
        } else {
          delete childs[i].childrenList
        }
      }
    }
  }
  return arr
}
```

### 电子发票的商品计算逻辑

```js
handleBlur(data) {
      console.log(data);
      var row = data
      var hj = 0;
      for (var i = 0; i < this.form.dynamicItem.length; i++) {
        var je = this.form.dynamicItem[i].unitPrice
        var sl = this.form.dynamicItem[i].quantity
        var ze = this.form.dynamicItem[i].amount
        var shui = this.form.dynamicItem[i].taxRate
        var zez = this.form.dynamicItem[i].amountWithTax
        // debugger
        // if (je != "" && sl != "") {
        //   hj += (Number(je).toFixed(2)) * Number(sl);
        //   console.log(hj, 'hj');
        // }
        if (this.hs == true) {
          if (je != "" && zez != "" && sl == "") {
            this.form.dynamicItem[i].quantity = (Number(zez).toFixed(2)) / Number(je);
          }
          if (sl != "" && zez != "" && sl == "") {
            this.form.dynamicItem[i].unitPrice = (Number(zez).toFixed(2)) / Number(sl);
          }
          if (je != "" && sl != "") {
            this.form.dynamicItem[i].amountWithTax = (Number(je).toFixed(2)) * Number(sl);
            // this.form.dynamicItem[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
            if (zez != "") {
              if (row == 'unitPrice') {
                this.form.dynamicItem[i].amountWithTax = ''
                this.form.dynamicItem[i].amountWithTax = (Number(je).toFixed(2)) * Number(sl);
                this.form.dynamicItem[i].unitPrice = Number(je)
              } else {
                console.log(Number(zez));
                this.form.dynamicItem[i].amountWithTax = Number(zez)
                this.form.dynamicItem[i].unitPrice = ''
                this.form.dynamicItem[i].unitPrice = (Number(zez).toFixed(2)) / Number(sl);
              }
              // if (shui != '') {
              //   this.form.dynamicItem[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
              // }
            }
          }
        } else {
          if (je != "" && sl != "") {
            this.form.dynamicItem[i].amount = (Number(je).toFixed(2)) * Number(sl);
            // this.form.dynamicItem[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
            if (ze != "") {
              if (row == 'unitPrice') {
                this.form.dynamicItem[i].amount = ''
                this.form.dynamicItem[i].amount = (Number(je).toFixed(2)) * Number(sl);
                this.form.dynamicItem[i].unitPrice = Number(je)
              } else {
                this.form.dynamicItem[i].amount = Number(zez)
                this.form.dynamicItem[i].unitPrice = ''
                this.form.dynamicItem[i].unitPrice = (Number(zez).toFixed(2)) / Number(sl);
              }
              // if (shui != '') {
              //   this.form.dynamicItem[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
              // }
            }
          }
          if (je != "" && ze != "" && sl == "") {
            this.form.dynamicItem[i].quantity = (Number(ze).toFixed(2)) / Number(je);
          }
          if (sl != "" && ze != "" && sl == "") {
            this.form.dynamicItem[i].unitPrice = (Number(ze).toFixed(2)) / Number(sl);
          }
        }
      }
      console.log(total(this.form.dynamicItem));
      taxCalculation(this.form.dynamicItem)
      hj = total(this.form.dynamicItem)

      if (hj == 0) {
        this.dxhj = '零圆整'
      } else {
        this.dxhj = dealBigMoney(hj)
      }
      this.xxhj = hj.toFixed(2);
    },
```
封装的方法
```js
export function total(arr) {
  console.log(arr);
  let hj = 0;
  for (let i = 0; i < arr.length; i++) {
    var je = arr[i].unitPrice
    var sl = arr[i].quantity
    var ze = arr[i].amount
    var shui = arr[i].taxRate
    var zez = arr[i].amountWithTax
    arr[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
    hj += (Number(je).toFixed(2)) * Number(sl);
  }
  return hj
}

export function taxCalculation(arr) {
  for (let i = 0; i < arr.length; i++) {
    var je = arr[i].unitPrice
    var sl = arr[i].quantity
    var ze = arr[i].amount
    var shui = arr[i].taxRate
    var zez = arr[i].amountWithTax
    arr[i].taxAmount = ((Number(je).toFixed(2)) * Number(sl) / (1 + Number(shui)) * Number(shui)).toFixed(2);
  }
  return arr
}
```

### 数组插入数据方法
```js
// 为0时就是不删除元素
this.form.dynamicItem.splice(discountIndex, 0, this.discount)
```

### 日期格式化
```js
// 日期格式化
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
// parseTime(new Date())
```

### 中断js执行
```js
if (Number(childs[i].amountWithTax) == 0) {
      Message({ message: "校验失败，明细行第" + (i + 1) + "金额不能等于零!", type: 'error' })
      throw Promise.reject("校验失败，明细行第" + (i + 1) + "金额不能等于零!")
    }
```

### 实现文本域`textarea`文字添加删除

```html
<el-button @click.stop="addRemarks(formData, $event)" class="icon_selecting"></el-button>
```

```js
addRemarks(text, event) {
      let remark_text = '销方开户银行：' + text.yhmc + ';' + '销方银行账户: ' + text.yhzh + ';\n'
      let target = event.target;
      if (target.classList.contains("active")) {
        // 再次点击删除
        console.log('remark_text', remark_text);
        this.formData.remark = this.formData.remark.replace(remark_text, '');
        console.log(this.formData.remark);
      } else {
        if (this.formData.remark == '' || this.formData.remark == null) {
          this.formData.remark = '销方开户银行：' + text.yhmc + ';' + '销方银行账户: ' + text.yhzh + ';\n'
        } else {
          this.formData.remark = this.formData.remark + '销方开户银行：' + text.yhmc + ';' + '销方银行账户: ' + text.yhzh + ';\n'
        }
      }
      target.classList.toggle("active");
    },
```

### 前端打印方法
方法一：直接调用打印页面弹窗

```js
printClick() {
// 获取原有页面的html内容
 let oldStr = window.document.body.innerHTML;
 // 根据id获取打印的html内容
 let newStr = document.getElementById('test').innerHTML;
 // html页面内容赋值
 window.document.body.innerHTML = newStr;
 // 调用打印弹窗
 window.print();
 // 页面内容还原
 //window.document.body.innerHTML = oldStr;
 // 打印完成后重新加载页面
 window.location.reload()
 }
```

方法二：把打印内容嵌入到页面，调用打印弹窗

```js
printClick() {
  const printContentHtml = document.getElementById('test').innerHTML
  const iframe = document.createElement('iframe')
  iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;')
  document.body.appendChild(iframe)
  iframe.contentDocument.write(printContentHtml)
  iframe.contentDocument.close()
  iframe.contentWindow.print()
  document.body.removeChild(iframe)
 }
```

方法三：打开新页面打印

```js
printClick() {
   const printContentHtml = window.document.body.innerHTML;
   const printPage = window.open()
   printPage.document.write(printContentHtml)
   printPage.document.close()
   printPage.print()
   printPage.close()
 }
```

### WebSocket的简单封装示例

```js
export class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.ws = null;
    this.heartbeatTimer = null;
    this.onopen = null;
    this.onclose = null;
    this.onmessage = null;
    this.onerror = null;
  }

  connect() {
    if (!this.ws) {
      this.ws = new WebSocket(this.url);
      this.ws.onopen = (event) => {
        console.log('WebSocket连接已打开');
        if (this.onopen) {
          this.onopen(event);
        }
        this.startHeartbeat();
      };
      this.ws.onclose = (event) => {
        console.log('WebSocket连接已关闭');
        if (this.onclose) {
          this.onclose(event);
        }
        this.stopHeartbeat();
        this.reconnect();
      };
      this.ws.onmessage = (event) => {
        console.log('WebSocket收到消息');
        if (this.onmessage) {
          this.onmessage(event);
        }
        if (event.data === 'pong') {
          // 心跳响应，重置定时器
          clearInterval(this.heartbeatTimer);
          this.startHeartbeat();
        }
      };
      this.ws.onerror = (event) => {
        console.error('WebSocket发生错误');
        if (this.onerror) {
          this.onerror(event);
        }
      };
    }
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  send(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      console.log('WebSocket发送消息');
      this.ws.send(message);
    } else {
      console.error('WebSocket未连接');
    }
  }

  startHeartbeat() {
    // 每隔一段时间发送心跳消息
    this.heartbeatTimer = setInterval(() => {
      console.log('WebSocket发送心跳');
      this.send('ping');
    }, 30000);
  }

  stopHeartbeat() {
    clearInterval(this.heartbeatTimer);
  }

  reconnect() {
    setTimeout(() => {
      console.log('WebSocket重新连接中...');
      this.connect();
    }, 5000);
  }
}
```
用法
```js
import { WebSocketClient } from '@/utils/request'

const ws = new WebSocketClient('wss://www.example.com/websocket');
ws.onopen = (event) => {
  console.log('WebSocket连接已打开');
};
ws.onclose = (event) => {
  console.log('WebSocket连接已关闭');
};
ws.onmessage = (event) => {
  console.log('WebSocket收到消息：' + event.data);
};
ws.onerror = (event) => {
  console.error('WebSocket发生错误');
};
ws.connect();
ws.disconnect(); //关闭 WebSocket
```

### 浏览器遮挡事件
```js
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // 页面变为可见状态时执行的操作
  } else if (document.visibilityState === 'hidden') {
    // 页面变为不可见状态时执行的操作
  }
});
```

### 数字转大写数字

```js
// 数字转大写
export function dealBigMoney(n) {
  var fraction = ['角', '分'];
  var digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  var unit = [
    ['圆', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  var head = n < 0 ? '负' : '';
  n = Math.abs(n);

  var s = '';

  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }

  s = s || '整';
  n = Math.floor(n);

  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}
```

### MQTT协议中的方法
Connect。等待与服务器建立连接。
Disconnect。等待MQTT客户端完成所做的工作，并与服务器断开TCP/IP会话。
Subscribe。等待完成订阅。
UnSubscribe。等待服务器取消客户端的一个或多个topics订阅。
Publish。MQTT客户端发送消息请求，发送完成后返回应用程序线程。

### js迭代器
  使用场景如多个弹框广告或者提示
``` js

 const infos = {
        friends: ['kobe', 'james', 'curry'],
        [Symbol.iterator]: function () {
          let index = 0
          const infosIterator = {
            next: () => {
              // done: Boolean
              // value: 具体值/undefined
              if (index < this.friends.length) {
                return {
                  done: false,
                  value: this.friends[index++],
                }
              } else {
                return { done: true }
              }
            },
          }
          return infosIterator
        },
      }

      const iterator = infos[Symbol.iterator]()
      console.log(iterator.next())
      console.log(iterator.next())
      console.log(iterator.next())
      console.log(iterator.next())

```

### url参数转对象

```js
const queryString = "?name=jimmy&age=18&height=1.88";
const queryParams = new URLSearchParams(queryString) // URLSearchParams 
const paramObj = Object.fromEntries(queryParams);
console.log(paramObj); // { name: 'jimmy', age: '18', height: '1.88' }
```

### 跨域解决方案--jsonp
```js
axios({
        type: "GET",
        dataType: "jsonp",
        contentType: 'application/json; charset=utf-8',
        async: false,//非异步
        url: this.ServiceUrl,
      }).then((response) => {
        let jsonData = response.data
        var data = JSON.parse(jsonData.match(/\((.*?)\)/)[1]);
        let { StartScanResult } = data;
        let cers = StartScanResult.split('#%')
        var names =
          "clzzqymc,clpp,clmc,clxh,vin,fdjh,pzxlh,csys,hgzbh,fzrq,zsqdrq,sjscrq"
            .split(',');
        if (cers.length != 12) {
          this.$message.warning("长度错误，" + cers.length)
          return false;
        } else {
          let newdata = mergeArraysToObject(names, cers)
          console.log(newdata, 'newdata***');
          this.formData.hgzh = newdata.hgzbh;
          this.formData.fdjhm = newdata.fdjh;
          this.formData.cjh = newdata.vin;
          this.formData.cpxh = newdata.clpp + newdata.clxh;
          this.formData.cldw = newdata.zzl;
          this.formData.xcrs = newdata.edzk;
        }
      }).catch((error) => {
      });
```

### 跨域解决方案
```js
// npm i jsonp
// 自动添加的是callback,如需增加别的就在?后面加如'jsoncallback'的东西
// ServiceUrl: "http://127.0.0.1:40004/ScanWcfGetServer/StartScan?jsoncallback=JSON.stringify&type=0&key=PER4-54LD-WXQI-DK87&_=1717470797295",
jsonp(this.ServiceUrl, { param: 'jsoncallback' }, (err, data) => {
        let { StartScanResult } = data;
        let cers = StartScanResult.split('#%')
        var names =
"QX,hgzbh,fzrq,clzzqymc,cllx_d,cllx,clpp,clxh,csys,byzd1,byzd2,byzd3,vin,byzd4,fdjh,fdjxh,ylzl,pfbz,pl,gl,zxxs,lj_q,lj_h,lts,ltgg,gbthps,zj,zh,zs,wkcc_c,wkcc_k,wkcc_g,hxnbcc_c,hxnbcc_k,hxnbcc_g,zzl,hdzzl,zbzl,zzllyxs,zqyzzl,edzk,bgcazzdyxzzl,jsszcrs,zxzgs"
            .split(',');
        if (!(cers.length == 32 || cers.length == 44)) {
          this.$message.warning("特种车辆合格证或零件不支持，" + cers.length)
          return false;
        } else {
          let newdata = mergeArraysToObject(names, cers)
          console.log(newdata, 'newdata***');
          this.formData.hgzh = newdata.hgzbh;
          this.formData.fdjhm = newdata.fdjh;
          this.formData.cjh = newdata.vin;
          this.formData.cpxh = newdata.clpp + newdata.clxh;
          this.formData.cldw = newdata.zzl / 1000;
          this.formData.xcrs = newdata.edzk;
          this.cjhQuery(this.formData.cjh);
        }
      })
```

### 机动车统一销售发票打印
```js
export function printJdcfp(T, _) {
  console.log(T, "123465798"),
    LODOP.SET_PRINT_PAGESIZE(1, 2410, 1770, "CreateCustomPage"),
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", !0),
    "87" != T.fplxdm && (LODOP.ADD_PRINT_TEXT(50, 705, 131, 20, T.fpdm),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
      LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
      LODOP.ADD_PRINT_TEXT(72, 705, 125, 20, T.fphm),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
      LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1)),
    LODOP.ADD_PRINT_TEXT(127, 209, "51.3mm", 20, T.fpdm),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.ADD_PRINT_TEXT(155, 207, 196, 20, T.zzfphm),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.ADD_PRINT_TEXT(184, 207, 196, 20, T.jqbh),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -2),
    printJdcfpSkmOneByOne("", 115, 447),
    "87" == T.fplxdm ? (LODOP.ADD_PRINT_TEXT(127, 458, "80mm", 20, T.mmqOne),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.ADD_PRINT_TEXT(155, 458, "80mm", 20, T.mmqTwo),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.ADD_PRINT_TEXT(170, 458, "80mm", 20, T.mmqThree),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(155, 458, "80mm", 20, T.skm),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10));
  var P = "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwmc.length : T.ghfmc.length;
  P < 20 ? (LODOP.ADD_PRINT_TEXT(240, 185, 260, 45, "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwmc : T.ghfmc),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
    LODOP.ADD_PRINT_TEXT(245, 185, 247, 15, T.sfzhm),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : P >= 20 && P < 45 ? (LODOP.ADD_PRINT_TEXT(229, 185, 260, 45, "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwmc : T.ghfmc),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
      LODOP.ADD_PRINT_TEXT(247, 185, 247, 15, T.sfzhm),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : P >= 45 && (LODOP.ADD_PRINT_TEXT(225, 185, 260, 45, "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwmc : T.ghfmc),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
        LODOP.ADD_PRINT_TEXT(253, 185, 247, 15, T.sfzhm),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)),
    LODOP.ADD_PRINT_TEXT(234, 604, 238, 30, "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwdm : T.ghfsbh),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
  var O = "87" == T.fplxdm || "03" == T.fplxdm ? T.zbmx[0].spmc.split("*")[2].length : T.cllx.length;
  O < 13 ? (LODOP.ADD_PRINT_TEXT(280, 187, 165, 21, "87" == T.fplxdm || "03" == T.fplxdm ? T.zbmx[0].spmc.split("*")[2] : T.cllx),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : O >= 13 && (LODOP.ADD_PRINT_TEXT(277, 187, 160, 21, "87" == T.fplxdm || "03" == T.fplxdm ? T.zbmx[0].spmc.split("*")[2] : T.cllx),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5));
  var L = "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cpxh.length : T.cpxh.length;
  L < 20 ? (LODOP.ADD_PRINT_TEXT(280, 411, 260, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cpxh : T.cpxh),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : L >= 20 && (LODOP.ADD_PRINT_TEXT(282, 411, 260, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cpxh : T.cpxh),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5));
  var E = "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cd.length : T.cd.length;
  E < 10 ? (LODOP.ADD_PRINT_TEXT(280, 709, 127, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cd : T.cd),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : E >= 10 && (LODOP.ADD_PRINT_TEXT(278, 703, 130, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cd : T.cd),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5));
  var D = "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].hgzh.length : T.hgzh.length;
  D < 23 ? (LODOP.ADD_PRINT_TEXT(316, 185, 168, 25, "87" == T.fplxdm || "03" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].hgzh : T.hgzh),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : D >= 23 && (LODOP.ADD_PRINT_TEXT(316, 185, 168, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].hgzh : T.hgzh),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)),
    LODOP.ADD_PRINT_TEXT(316, 447, 190, 19, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].jkzmsh : T.jkzmsh),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
    LODOP.ADD_PRINT_TEXT(316, 716, 134, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].sjdh : T.sjdh),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
    LODOP.ADD_PRINT_TEXT(349, 187, 259, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].fdjhm : T.fdjhm),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
    LODOP.ADD_PRINT_TEXT(350, 591, 248, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cjh : T.clsbdh),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    "87" == T.fplxdm && ("00" !== T.fpzt && "03" !== T.fpzt || LODOP.ADD_PRINT_IMAGE(384, 190, 392, 20, "data:image/bmp;base64,Qk0GAwAAAAAAADYAAAAoAAAADwAAAA8AAAABABgAAAAAANACAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////AAAA////////////////////////////////////////////////////////////AAAA////////////////AAAAAAAAAAAAAAAAAAAAAAAA////////////////////AAAA////////////AAAAAAAA////////////////AAAAAAAA////////////////AAAA////////AAAAAAAA////////////////////////AAAAAAAA////////////AAAA////AAAAAAAA////AAAAAAAA////////AAAAAAAA////AAAAAAAA////////AAAA////AAAAAAAA////////AAAAAAAAAAAAAAAA////////AAAAAAAA////////AAAA////AAAAAAAA////////////AAAAAAAA////////////AAAAAAAA////////AAAA////AAAAAAAA////////AAAAAAAAAAAAAAAA////////AAAAAAAA////////AAAA////AAAAAAAA////AAAAAAAA////////AAAAAAAA////AAAAAAAA////////AAAA////////AAAAAAAA////////////////////////AAAAAAAA////////////AAAA////////////AAAAAAAA////////////////AAAAAAAA////////////////AAAA////////////////AAAAAAAAAAAAAAAAAAAAAAAA////////////////////AAAA////////////////////////////////////////////////////////////AAAA////////////////////////////////////////////////////////////AAAA"));
  var S = je2Upper(T.jshj) + ""
    , A = 1 * T.jshj;
  "87" == T.fplxdm ? LODOP.ADD_PRINT_TEXT(384, "01" === T.fpzt || "04" === T.fpzt ? 190 : 204, 392, 20, "01" === T.fpzt || "04" === T.fpzt ? "负数：" + S : S) : LODOP.ADD_PRINT_TEXT(384, "01" === T.fpzt || "04" === T.fpzt ? 190 : 187, 392, 20, "01" === T.fpzt || "04" === T.fpzt ? "负数：" + S : S),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.ADD_PRINT_TEXT(384, 662, 170, 20, ("87" == T.fplxdm ? "￥" : "") + A.toFixed(2)),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
  var e = T.xhdwmc.length;
  e < 30 ? (LODOP.ADD_PRINT_TEXT(420, 187, 390, 26, T.xhdwmc),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : e >= 30 && (LODOP.ADD_PRINT_TEXT(418, 187, 390, 26, T.xhdwmc),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)),
    LODOP.ADD_PRINT_TEXT(422, 619, 184, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwdzdh.split(" ")[1] : T.dh),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    LODOP.ADD_PRINT_TEXT(453, 188, 360, 25, T.xhdwdm),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    LODOP.ADD_PRINT_TEXT(456, 619, 220, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwyhzh.split(" ")[1] : T.zh),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
  var N = "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwdzdh.split(" ")[0].length : T.dz.length;
  N < 22 ? (LODOP.ADD_PRINT_TEXT(490, 185, 305, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwdzdh.split(" ")[0] : T.dz),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : N >= 22 && (LODOP.ADD_PRINT_TEXT(494, 187, 285, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwdzdh.split(" ")[0] : T.dz),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 8));
  var I, n, R = "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwyhzh.split(" ")[0].length : T.khyh.length;
  R < 23 ? (LODOP.ADD_PRINT_TEXT(492, 541, 295, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwyhzh.split(" ")[0] : T.khyh),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : R >= 23 && (LODOP.ADD_PRINT_TEXT(486, 539, 295, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwyhzh.split(" ")[0] : T.khyh),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5));
  var t = T.zbmx[0].lslbs;
  if ("1" === t && (I = "免税",
    n = "***"),
    "2" === t && (I = "不征税",
      n = "***"),
    "3" === t && (I = "0%",
      n = "***"),
    "" === t || null === t || "0" == t) {
    var o = T.zbmx[0].sl;
    0 === o ? (I = "0%",
      n = "***") : "87" == T.fplxdm ? (I = 100 * o + "%",
        n = "￥" + (1 * T.se).toFixed(2)) : (I = o,
          n = (1 * T.se).toFixed(2))
  }
  LODOP.ADD_PRINT_TEXT(527, 194, 77, 26, I),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.ADD_PRINT_TEXT(525, 342, 169, 25, n),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
  var i = T.swjgmc.length;
  i < 20 ? (LODOP.ADD_PRINT_TEXT(525, 577, 256, 35, T.swjgmc),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
    LODOP.ADD_PRINT_TEXT(537, 577, 195, 20, T.swjgdm),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : i >= 20 && i < 40 ? (LODOP.ADD_PRINT_TEXT(521, 577, 256, 35, T.swjgmc),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
      LODOP.ADD_PRINT_TEXT(539, 577, 195, 20, T.swjgdm),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : i >= 40 && (LODOP.ADD_PRINT_TEXT(520, 577, 256, 35, T.swjgmc),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
        LODOP.ADD_PRINT_TEXT(544, 577, 195, 20, T.swjgdm),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)),
    console.log(T.hjje, "fpmx.hjjefpmx.hjjefpmx.hjje"),
    LODOP.ADD_PRINT_TEXT(571, 213, 170, 19, ("87" == T.fplxdm ? "￥" : "") + ("87" == T.fplxdm || "03" == T.fplxdm ? T.hjje.toFixed(2) : (1 * T.bhsj).toFixed(2))),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1);
  var r, Y = "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cldw.length : T.dw.length;
  Y >= 5 ? (LODOP.ADD_PRINT_TEXT(572, 668, 60, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cldw : T.dw),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : (LODOP.ADD_PRINT_TEXT(572, 668, 44, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cldw : T.dw),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)),
    LODOP.ADD_PRINT_TEXT(572, 784, 50, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].xcrs : T.xcrs),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
    LODOP.ADD_PRINT_TEXT(602, 450, 100, 20, T.kpr),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.ADD_PRINT_TEXT(572, 452, 176, 30, T.tdys[0].wspzhm),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
    r = T.kprq,
    r = r.substring(0, 4) + "-" + r.substring(4, 6) + "-" + r.substring(6, 8),
    LODOP.ADD_PRINT_TEXT(84, 157, 120, 20, r),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.ADD_PRINT_SHAPE(2, 103, 82, 745, 497, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 103, 434, 393, 119, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 103, 184, 1, 497, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(127, 92, 85, 20, "机打代码"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    LODOP.ADD_PRINT_SHAPE(0, 221, 82, 352, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 270, 82, 745, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 305, 82, 745, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 339, 82, 745, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 376, 82, 745, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 410, 82, 745, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 481, 82, 745, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 445, 82, 745, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 515, 82, 745, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 560, 82, 745, 1, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(1, 103, 406, 1, 119, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 221, 434, 1, 49, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, 222, 601, 1, 47, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 269, 342, 65, 36, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 269, 661, 40, 36, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 304, 342, 95, 35, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 304, 637, 63, 35, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 339, 437, 150, 37, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 409, 569, 44, 72, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 480, 475, 62, 35, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 514, 278, 62, 46, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 514, 491, 82, 46, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 559, 357, 90, 41, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 559, 625, 40, 41, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(2, 559, 704, 62, 41, 0, 1, "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(155, 92, 85, 20, "机打号码"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    LODOP.ADD_PRINT_TEXT(184, 92, 85, 20, "机器编号"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    LODOP.ADD_PRINT_TEXT(128, 411, 21, 79, "税控码"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "AlignJustify", 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    "87" == T.fplxdm || "03" == T.fplxdm ? LODOP.ADD_PRINT_TEXT(240, 92, 89, 45, "购买方名称") : LODOP.ADD_PRINT_TEXT(223, 92, 89, 45, "购买方名称及\n身份证号码/\n组织结构代码"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(281, 92, 90, 20, "车辆类型"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(281, 347, 64, 20, "厂牌型号"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(281, 670, 39, 20, "产地"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    "87" == T.fplxdm || "03" == T.fplxdm ? LODOP.ADD_PRINT_TEXT(223, 469, 100, 50, "纳税人识别号/\n身份证号码/\n组织结构代码") : LODOP.ADD_PRINT_TEXT(235, 469, 100, 20, "纳税人识别号"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(313, 92, 90, 20, "合格证号"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(350, 92, 80, 20, "发动机号码"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(313, 345, 80, 20, "进口证明号"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(313, 639, 63, 20, "商检单号"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(350, 440, 155, 25, "车辆识别号代码/车架号码"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(384, 92, 95, 20, "价税合计"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(384, 627, 41, 20, "小写"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(420, 92, 95, 20, "销货单位名称"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(420, 573, 39, 20, "电话"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(456, 573, 36, 20, "账号"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(456, 92, 90, 20, "纳税人识别号"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(491, 92, 90, 20, "地址"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(522, 92, 95, 41, "增值税税率\n或 征 收 率"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(522, 285, 53, 35, "增值税\n税 额"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(491, 481, 63, 20, "开户银行"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(522, 495, 84, 36, "主管税务\n机关及代码"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(571, 92, 85, 20, "不含税价"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(571, 185, 41, 20, "小写"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.ADD_PRINT_TEXT(571, 360, 85, 20, "完税凭证号码"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(571, 630, 36, 20, "吨位"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(571, 709, 65, 20, "限乘人数"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(602, 81, 100, 20, "销货单位盖章"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(602, 384, 55, 20, "开票人"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(602, 631, 142, 20, "备注：一车一票"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(84, 86, 75, 20, "开票日期"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    "87" != T.fplxdm && (LODOP.ADD_PRINT_TEXT(50, 629, 75, 20, "发票代码"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
      LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
      LODOP.ADD_PRINT_TEXT(73, 630, 74, 20, "发票号码"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
      LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1)),
    LODOP.ADD_PRINT_TEXT(11, 285, 368, 30, "机 动  车  销  售  统  一  发  票"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(54, 379, 153, 30, "发   票   联"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_IMAGE(15, 90, 66, 66, "data:image/png;base64," + T.ewm),
    LODOP.SET_PRINT_STYLEA(0, "Stretch", 1)
}

function printJdcfpSkmOneByOne(T, _, P) {
  console.log(T, "??????????????");
  for (var O = 2, L = 0; L < 5; L++)
    for (var E = T.substring(38 * L, 38 * L + 38), D = 0, S = 0; S < 38; S++)
      0 !== S && S % O === 0 && S % 8 !== 0 && D++,
        LODOP.ADD_PRINT_TEXT(_ + 18 * L, P + 10 * S - D, 15, 15, E.charAt(S)),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)
}

function je2Upper(T) {
  T = Number(T).toFixed(2);
  var _ = ""
    , P = "仟佰拾亿仟佰拾万仟佰拾圆角分";
  T += "00",
    "-" === T.charAt(0) && (T = T.substring(1));
  var O = T.indexOf(".");
  O >= 0 && (T = T.substring(0, O) + T.substr(O + 1, 2)),
    P = P.substr(P.length - T.length);
  for (var L = 0; L < T.length; L++)
    _ += "零壹贰叁肆伍陆柒捌玖".substr(T.substr(L, 1), 1) + P.substr(L, 1);
  return _.replace(/零角零分$/, "整").replace(/零[仟佰拾]/g, "零").replace(/零{2,}/g, "零").replace(/零([亿|万])/g, "$1").replace(/零+圆/, "圆").replace(/亿零{0,3}万/, "亿").replace(/^圆/, "零圆").replace(/零分$/, "整").replace(/^零圆/, "").replace(/^整$/, "零圆整")
}

export function getSavePrinter(T) {
  const _ = window.localStorage.getItem("key") ? JSON.parse(window.localStorage.getItem("key")) : {};
  if (_) {
    if (_.printer && Array.isArray(_.printer) && _.printer.length) {
      const P = _.printer.filter(_ => _.paramType == T);
      return P[0].printName
    }
    return null
  }
  return null
}

export let FPdata = {
  DZDH: null,
  GFKHDH: null,
  GFKHYX: null,
  bbh: null,
  bchcbz: null,
  bmbbbh: null,
  bz: "",
  ceburl: null,
  czydm: "",
  dfgtgmbq: null,
  dphgzbh: null,
  dqsj: "2024-03-11 11:22:46",
  dxtsbz: null,
  ewm: "iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAIAAADeJhTwAAACbElEQVR42u3aUW7EIAwFwL3/pdsTVNoUP2PI5HOVhIWJZGzz+QSunz+ub+7Z9ezTeX1OuWDAgAGjeRETE64aa2UuTxe9dS4wYMCAcRDGSkB7+vtKgE18QFXzXVpnGDBgwHg5RiLwVi3iylgwYMCAAaMPo6oAV4X36gAOAwYMGP/ASCRQ6YRu2rzGVW1hwIABI9ObKeulv+H3Y06HwIABA0bhwiWuRHOpqvCXDs6P1woGDBgwhmOcUrBLJE27kjUYMGDAOBWjs9C2KzdKo5a9HwYMGDAOwkg0W1bG7QzCK/dUNbtgwIABYzpG1UGCNGSi2FfVNIskvDBgwIAxEKMs4ISfndYIiiSYMGDAgHEQRlWQTDSRqia8q4gZeRgGDBgwhvczJk8mHZDTmwgYMGDAOAmjM64kAnI6yMf/DwwYMGBchlHVkEkXDXcVFpeSWRgwYMAYjpEu0k1L3DqT1kijCQYMGDAOwuiccDrJ6twUPIaBAQMGjIEY6eSrqlmUOMywCxUGDBgwbsNIDJYI+FXPjq7awoABA8bF/YxpRcZdhcKlsWDAgAHjIIyqZGpysE1/KGVVWxgwYMA4CCNRjNvV9E9sFlYCOAwYMGDcgJFY9MR70sE/kQB+9X4YMGDAGIixK5nqTPo6/8PSWDBgwIAxHKOzwdIZMHdtTCI7KxgwYMAYiDEtSCYmXFVkrCpKwoABA8YNGNMWbkISl9jUlJ3egAEDBozLMKoCY6LRlGiOlVVwYcCAAePlGGnIxD0J7G1JHwwYMGAUYnQW3RKJZCLwHl+1hQEDBox8vlJ2MCAe9MKFwl0fGQwYMGAMwfgFe/d+KnUF3yIAAAAASUVORK5CYII=",
  fdjhm: null,
  fhr: "",
  finalJym: null,
  fjys: null,
  fpcbh: null,
  fpdm: "165002223698",
  fphm: "24652000000011962820",
  fplxdm: "87",
  fpqqlsh: "70b1f13c-cb7e-4cc5-9797-e9834c226566",
  fpzt: "00",
  fullAddress: null,
  fwfsd: null,
  ghdwdm: "652701196709021314",
  ghdwdzdh: " ",
  ghdwmc: "吐尔逊·努尔买买提",
  ghdwyhzh: " ",
  gmfjbr: null,
  hcFphm: null,
  hczt: null,
  hdjsjg: null,
  hjje: 1980.2,
  hjzkje: null,
  hjzkse: null,
  hssign: null,
  hsslbs: null,
  id: "2eb839f1-af53-490a-ad4b-4809fc16edc4",
  ip: "36.96.15.129",
  jbrgjlx: null,
  jbrsfzjhm: null,
  jbrsfzjlx: null,
  jbrzrrnsrsbh: null,
  jqbh: null,
  jshj: 2e3,
  jym: null,
  jzxmmc: null,
  kce: 0,
  kdsbz: null,
  kpddm: null,
  kpdwdm: "92652701MA7A6KHB41",
  kpjh: null,
  kpr: "刘曼曼",
  kprq: "20240306115755",
  mmqOne: "数电票号码：24652000000011962820",
  mmqThree: "https://inv-veri.chinatax.gov.cn/",
  mmqTwo: "全国增值税发票查验平台：",
  ncpsgzjlx: null,
  qdbz: null,
  qmbz: null,
  qmcs: null,
  qmz: null,
  rzzt: null,
  scbsbz: null,
  scbz: null,
  sccgsj: null,
  se: 19.8,
  sfsdts: null,
  sfwzzfp: "1",
  sfyytljdj: null,
  sjcjhsje: null,
  skm: null,
  skr: "",
  slsm: null,
  spbmjc: null,
  spsm: null,
  ssyf: null,
  swjgdm: "16527010400",
  swjgmc: "国家税务总局博乐市税务局城区税务所",
  tdys: [{
    bxdh: null,
    cd: "江苏省",
    cjh: "HJ2MH2C0XPA242097",
    cldw: "0.477",
    cllxDm: null,
    cphcbdjh: null,
    cphm: null,
    cpxh: "凌摩牌/SUNSUKILM1000DZH-2",
    cxr: null,
    cxrq: null,
    ddd: null,
    dengj: null,
    djzh: null,
    dsccsje: null,
    dsjehj: null,
    fdjhm: "230242097",
    fpdm: "165002223698",
    fphm: "24652000000011962820",
    fpmxxh: "1",
    gtgmf: null,
    hgzh: "YZ3611231000775",
    id: "6699d332-f683-420e-898f-f5b3bb8c0a91",
    jdctzclsbdhuuid: null,
    jkzmsh: "进口证明书号",
    jtgjlx: null,
    mfdh: null,
    mfdz: null,
    mfmc: null,
    mfsbh: null,
    mxid: "2eb839f1-af53-490a-ad4b-4809fc16edc4",
    qyd: null,
    scqymc: "阳光铃木电动车无锡有限公司",
    sfzjhm: null,
    sfzjlx: null,
    sjdh: "商检单号",
    skssq: null,
    tdyslxDm: null,
    wspzhm: "完税凭证号码",
    xcrs: "1",
    xhdwdm: "92652701MA7A6KHB41",
    ysgjhp: null,
    ysgjzl: null,
    yshwmc: null,
    zjhm: null,
    zjlx: null,
    znj: null,
    zrdclglsmc: null,
    zzfphm: "00345854"
  }],
  tdyslxDm: null,
  tdzzsxmbh: null,
  tqm: null,
  tscbz: null,
  tspz: null,
  tzdbh: null,
  tzdh: null,
  wqhtbabh: null,
  xfbz: "qdxf",
  xhdwdm: "92652701MA7A6KHB41",
  xhdwdzdh: "新疆博州博乐市友谊路北侧（与团结路交叉处） 18690937226",
  xhdwmc: "博乐市新雁电动车销售部",
  xhdwyhzh: "中国农业银行股份有限公司博乐团结路支行 30245801040004919",
  yfpdm: null,
  yfphm: "",
  yqbz: null,
  zbmx: [{
    bb: null,
    cepzmx: null,
    cqzsh: null,
    djmxxh: null,
    dw: "",
    fpdm: "",
    fphm: "24652000000011962820",
    fphxz: "0",
    fpmxxh: "1",
    ggxh: "",
    hsbz: "0",
    hsdj: null,
    hsje: null,
    id: "ef2f4391-73f3-44db-a757-6a9b8abac5cb",
    je: "1980.200000000000000000",
    jqbh: null,
    kpdwdm: "92652701MA7A6KHB41",
    kprq: "20240306115755",
    lslbs: "0",
    mxid: "2eb839f1-af53-490a-ad4b-4809fc16edc4",
    se: "19.8",
    sl: "0.01",
    spbm: "1090312040000000000",
    spdj: null,
    spmc: "*机动车*电动正三轮摩托车",
    spsl: null,
    spsm: null,
    xhdwdm: "92652701MA7A6KHB41",
    xsdjbh: null,
    yhzcbs: "0",
    zxbm: null,
    zzstsgl: ""
  }],
  zfdqsj: null,
  zffs: null,
  zfr: null,
  zfrdm: null,
  zfrq: null,
  zfyy: null,
  zhsl: null,
  zkbz: null,
  zlqqz: null,
  zsfs: "0",
  zyspmc: "*机动车*电动正三轮摩托车",
  zzfphm: "00345854"
}
//用法
Jdcpdy(T, _, P, O) {
      console.log(T, _, P, O);
      // check();
      var L = {
        "zzsp_width": "230",
        "zzsp_height": "159",
        "ybj_zzsp": -5,
        "zbj_zzsp": -100,
        "sbj_zzsp_qd": "0",
        "zbj_zzsp_qd": "-5",
        "zzsp_qd_width": "210",
        "zzsp_qd_height": "297",
        "zzsz_width": "230",
        "zzsz_height": "159",
        "sbj_zzsz": "0",
        "zbj_zzsz": "-10",
        "sbj_zzsz_qd": "0",
        "zbj_zzsz_qd": "-5",
        "zzsz_qd_width": "210",
        "zzsz_qd_height": "297",
        "ybj_jp": "-10",
        "zbj_jp": "0",
        "bans": "06",
        "sfdyewm": true,
        "jdcsbz": "0",
        "jdczbz": "0",
        "escsbz": "0",
        "esczbz": "0",
        "dyqxzdyj": false,
        "jqxzbs": "0",
        "printer": [
          {
            "czydm": "wjtc",
            "paramType": "4",
            "printName": 2
          },
          {
            "czydm": "wjtc",
            "paramType": "1",
            "printName": 7
          },
          {
            "czydm": "wjtc",
            "paramType": "5",
            "printName": ""
          }
        ],
        "directPrint": false,
        "pldyType": "1"
      };
      console.log(L);
      // var E = JSON.parse(L),
      var E = L,
        D = "0",
        S = "0";
      null != E && (D = Number(E.jdcsbz),
        S = Number(E.jdczbz)),
        LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_SETUP", !0),
        LODOP.PRINT_INITA((D || 0) + "mm", (S || 0) + "mm", "241mm", "177mm", "机动车销售统一发票"),
        printJdcfp(FPdata);
      var A = getSavePrinter("1");
      void 0 === A && null === A || LODOP.SET_PRINTER_INDEX(A),
        // 0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        LODOP.PREVIEW()
    },

```

### 二手车销售发票打印

```js
export function printEscFullfp(T, _) {
  LODOP.SET_PRINT_PAGESIZE(1, "216.51mm", "178.01mm", "CreateCustomPage"),
    LODOP.ADD_PRINT_SHAPE(2, "30.27mm", "9mm", "200mm", "131mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "51.01mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "58.21mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "66.2mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(1, "74mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "81.81mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "89.51mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "97.29mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "105.09mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "113mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "120.6mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "128.4mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "144.01mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "151.9mm", "9.21mm", "200mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(1, "30.27mm", "28.71mm", "0.21mm", "21.01mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "30.27mm", "100.99mm", "0.21mm", "21.01mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(1, "30.22mm", "109.01mm", "0.21mm", "21.01mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "51.01mm", "49mm", "0.21mm", "100.7mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "51.01mm", "114.91mm", "0.21mm", "7.2mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "66.2mm", "114.91mm", "0.21mm", "7.81mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "51.01mm", "152.51mm", "0.21mm", "30.8mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "58.21mm", "164.49mm", "0.21mm", "7.99mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "74mm", "164.49mm", "0.21mm", "31.09mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "81.81mm", "84.01mm", "0.21mm", "15.5mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "81.81mm", "102mm", "0.21mm", "15.5mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "81.81mm", "142.9mm", "0.21mm", "15.5mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "97.29mm", "152.51mm", "0.21mm", "7.81mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "113mm", "134.99mm", "0.21mm", "7.59mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "113mm", "152.51mm", "0.21mm", "7.59mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "120.6mm", "164.49mm", "0.21mm", "7.81mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "120.6mm", "177.01mm", "0.21mm", "7.81mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "128.4mm", "110.99mm", "0.21mm", "15.61mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "128.4mm", "128.91mm", "0.21mm", "15.61mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "144.01mm", "165.5mm", "0.21mm", "7.91mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "144.01mm", "177.01mm", "0.21mm", "7.81mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_SHAPE(0, "136.5mm", "110.99mm", "98mm", "0.21mm", 0, 1),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT("34.32mm", "9.95mm", "20mm", "16.48mm", "机打代码\n机打号码\n机器编号"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 3),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    LODOP.ADD_PRINT_TEXT("8.23mm", "70.54mm", "78mm", "6.11mm", "二手车销售统一发票"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 8),
    LODOP.ADD_PRINT_TEXT(73, 322, 200, 20, "发票联"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
    LODOP.ADD_PRINT_TEXT(89, 36, 100, 19, "开票日期："),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    LODOP.ADD_PRINT_TEXT(125, 383, 31, 71, "税控码"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 5),
    LODOP.ADD_PRINT_TEXT(201, 44, 154, 19, "买方单位/个人 "),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 9),
    LODOP.ADD_PRINT_TEXT(231, 34, 158, 20, "买方单位/个人住址"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 4),
    LODOP.ADD_PRINT_TEXT(258, 38, 154, 19, "卖方单位/个人"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 9),
    LODOP.ADD_PRINT_TEXT(289, 34, 158, 20, "卖方单位/个人住址"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 4),
    LODOP.ADD_PRINT_TEXT(318, 42, 169, 20, "车牌照号"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 28),
    LODOP.ADD_PRINT_TEXT(348, 33, 160, 20, "车架号/车辆识别代码"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    LODOP.ADD_PRINT_TEXT(377, 40, 157, 20, "车价合计（大写）"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 6),
    LODOP.ADD_PRINT_TEXT(406, 40, 151, 20, "经营、拍卖单位"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 8),
    LODOP.ADD_PRINT_TEXT(435, 39, 147, 20, "经营、拍卖单位地址"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    LODOP.ADD_PRINT_TEXT(466, 31, 170, 20, "开户银行、账户"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 8),
    LODOP.ADD_PRINT_TEXT(509, 21, 195, 20, "二手车市场"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 16),
    LODOP.ADD_PRINT_TEXT(553, 43, 144, 20, "开户银行、账户"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 7),
    LODOP.ADD_PRINT_TEXT(586, 40, 100, 20, "备 注："),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 5),
    LODOP.ADD_PRINT_TEXT(616, 40, 147, 20, "开票单位（盖章）"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    LODOP.ADD_PRINT_TEXT(616, 472, 153, 20, "开票人"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
    LODOP.ADD_PRINT_TEXT(489, 425, 71, 19, "纳 税 人  "),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(503, 418, 73, 20, "识 别 号"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(525, 425, 61, 20, "地    址"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(553, 617, 63, 20, "电话"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(465, 617, 58, 20, "电话"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(431, 514, 63, 20, "纳 税 人"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(444, 512, 66, 20, "识 别 号"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(201, 437, 143, 20, "单位代码/身份证号码"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(230, 574, 52, 20, "电话"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(259, 437, 143, 20, "单位代码/身份证号码"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(288, 574, 52, 20, "电话"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(318, 314, 79, 20, "登记证号"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(348, 314, 79, 20, "厂牌型号"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(318, 533, 100, 20, "车 辆 类 型"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.ADD_PRINT_TEXT(341, 533, 100, 20, "转入地车辆"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(355, 533, 100, 20, "管理所名称"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
    LODOP.ADD_PRINT_TEXT(377, 565, 70, 20, "小写"),
    LODOP.SET_PRINT_STYLEA(0, "FontColor"),
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
    LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2);
  var P = T.kprq
    , O = P.substring(0, 4)
    , L = P.substring(4, 6)
    , E = P.substring(6, 8);
  P = O + "-" + L + "-" + E,
    LODOP.ADD_PRINT_TEXT(89, 108, 122, 20, P),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    LODOP.ADD_PRINT_TEXT(122, 127, 237, 20, T.fpdm),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.ADD_PRINT_TEXT(145, 127, 235, 20, T.zzfphm),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    LODOP.ADD_PRINT_TEXT(168, 127, 238, 20, T.jqbh),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    countStrLength(T.ghdwmc) <= 36 ? (LODOP.ADD_PRINT_TEXT(200, 190, 243, 40, T.ghdwmc),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : countStrLength(T.ghdwmc) <= 40 ? (LODOP.ADD_PRINT_TEXT(200, 190, 251, 40, T.ghdwmc),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9)) : (LODOP.ADD_PRINT_TEXT(195, 190, 243, 40, T.ghdwmc),
          LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
          LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    LODOP.ADD_PRINT_TEXT(198, 576, 215, 20, T.ghdwdm),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
  var D = T.ghdwdzdh.split(" ")[0]
    , S = T.ghdwdzdh.split(" ")[1];
  console.log("goufangdizhdianhu", countStrLength(D)),
    countStrLength(D) <= 55 ? (LODOP.ADD_PRINT_TEXT(229, 190, 384, 20, D),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(224, 190, 384, 20, D),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    countStrLength(S) <= 15 ? (LODOP.ADD_PRINT_TEXT(233, 627, 164, 20, S),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(225, 627, 164, 20, S),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    countStrLength(T.tdys[0].mfmc) <= 36 ? (LODOP.ADD_PRINT_TEXT(258, 190, 243, 20, T.tdys[0].mfmc),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : countStrLength(T.tdys[0].mfmc) <= 40 ? (LODOP.ADD_PRINT_TEXT(258, 190, 251, 20, T.tdys[0].mfmc),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9)) : (LODOP.ADD_PRINT_TEXT(253, 190, 240, 20, T.tdys[0].mfmc),
          LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
          LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    LODOP.ADD_PRINT_TEXT(258, 576, 207, 20, T.tdys[0].mfsbh),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    console.log("卖方地址", countStrLength(T.tdys[0].mfdz)),
    countStrLength(T.tdys[0].mfdz) <= 55 ? (LODOP.ADD_PRINT_TEXT(290, 190, 384, 20, T.tdys[0].mfdz),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(283, 190, 384, 20, T.tdys[0].mfdz),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    countStrLength(T.tdys[0].mfdh) <= 15 ? (LODOP.ADD_PRINT_TEXT(289, 627, 164, 20, T.tdys[0].mfdh),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(281, 627, 164, 20, T.tdys[0].mfdh),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    countStrLength(T.tdys[0].cphm) <= 10 ? (LODOP.ADD_PRINT_TEXT(318, 186, 125, 20, T.tdys[0].cphm),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(312, 192, 125, 20, T.tdys[0].cphm),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    countStrLength(T.tdys[0].djzh) <= 14 ? (LODOP.ADD_PRINT_TEXT(318, 392, 145, 20, T.tdys[0].djzh),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(315, 390, 154, 20, T.tdys[0].djzh),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    countStrLength(T.zyspmc.split("*")[2]) <= 16 ? (LODOP.ADD_PRINT_TEXT(318, 627, 160, 20, T.zyspmc.split("*")[2]),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(313, 630, 160, 20, T.zyspmc.split("*")[2]),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    countStrLength(T.tdys[0].cjh) <= 13 ? (LODOP.ADD_PRINT_TEXT(348, 188, 131, 20, T.tdys[0].cjh),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(348, 188, 131, 20, T.tdys[0].cjh),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    console.log("厂牌型号", countStrLength(T.tdys[0].cpxh)),
    countStrLength(T.tdys[0].cpxh) > 28 ? (LODOP.ADD_PRINT_TEXT(340, 390, 158, 20, T.tdys[0].cpxh),
      LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 9)) : countStrLength(T.tdys[0].cpxh) > 25 ? (LODOP.ADD_PRINT_TEXT(348, 390, 180, 20, T.tdys[0].cpxh),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : countStrLength(T.tdys[0].cpxh) > 22 ? (LODOP.ADD_PRINT_TEXT(348, 390, 160, 20, T.tdys[0].cpxh),
          LODOP.SET_PRINT_STYLEA(0, "FontSize", 9)) : (LODOP.ADD_PRINT_TEXT(348, 393, 160, 20, T.tdys[0].cpxh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)),
    countStrLength(T.tdys[0].zrdclglsmc) <= 20 ? (LODOP.ADD_PRINT_TEXT(347, 626, 175, 20, T.tdys[0].zrdclglsmc),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : countStrLength(T.tdys[0].zrdclglsmc) <= 58 ? (LODOP.ADD_PRINT_TEXT(343, 626, 175, 20, T.tdys[0].zrdclglsmc),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(340, 625, 175, 20, T.tdys[0].zrdclglsmc),
          LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
          LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    "00" !== T.fpzt && "03" !== T.fpzt || (LODOP.ADD_PRINT_IMAGE(377, 188, 378, 20, "data:image/bmp;base64,Qk0GAwAAAAAAADYAAAAoAAAADwAAAA8AAAABABgAAAAAANACAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////AAAA////////////////////////////////////////////////////////////AAAA////////////////AAAAAAAAAAAAAAAAAAAAAAAA////////////////////AAAA////////////AAAAAAAA////////////////AAAAAAAA////////////////AAAA////////AAAAAAAA////////////////////////AAAAAAAA////////////AAAA////AAAAAAAA////AAAAAAAA////////AAAAAAAA////AAAAAAAA////////AAAA////AAAAAAAA////////AAAAAAAAAAAAAAAA////////AAAAAAAA////////AAAA////AAAAAAAA////////////AAAAAAAA////////////AAAAAAAA////////AAAA////AAAAAAAA////////AAAAAAAAAAAAAAAA////////AAAAAAAA////////AAAA////AAAAAAAA////AAAAAAAA////////AAAAAAAA////AAAAAAAA////////AAAA////////AAAAAAAA////////////////////////AAAAAAAA////////////AAAA////////////AAAAAAAA////////////////AAAAAAAA////////////////AAAA////////////////AAAAAAAAAAAAAAAAAAAAAAAA////////////////////AAAA////////////////////////////////////////////////////////////AAAA////////////////////////////////////////////////////////////AAAA"),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10));
  var A = je2Upper(T.jshj);
  if (LODOP.ADD_PRINT_TEXT(378, 202, 378, 20, "01" === T.fpzt ? "负数：" + A : A),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.ADD_PRINT_TEXT(376, 620, 185, 20, "￥" + (1 * T.jshj).toFixed(2)),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
    countStrLength(T.jypmdwmc) <= 64 ? (LODOP.ADD_PRINT_TEXT(407, 190, 600, 20, T.jypmdwmc),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(405, 190, 600, 20, T.jypmdwmc),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    countStrLength(T.jypmdwdz) <= 26 ? (LODOP.ADD_PRINT_TEXT(436, 188, 326, 20, T.jypmdwdz),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(436, 190, 326, 20, T.jypmdwdz),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    LODOP.ADD_PRINT_TEXT(436, 576, 210, 20, T.jypmdwsbh),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
    countStrLength(T.jypmdwyhzh) <= 58 ? (LODOP.ADD_PRINT_TEXT(466, 188, 435, 20, T.jypmdwyhzh),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(464, 188, 435, 20, T.jypmdwyhzh),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    countStrLength(T.jypmdwdh) <= 12 ? (LODOP.ADD_PRINT_TEXT(466, 671, 130, 20, T.jypmdwdh),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(460, 671, 130, 20, T.jypmdwdh),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    "08" == T.tdys[0].escyqrhyxz) {
    countStrLength(T.xhdwmc) <= 28 ? (LODOP.ADD_PRINT_TEXT(405, 188, 243, 56, T.xhdwmc),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(405, 188, 237, 56, T.xhdwmc),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
      LODOP.ADD_PRINT_TEXT(436, 583, 291, 20, T.xhdwdm),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
      countStrLength(T.xhdwyhzh) <= 60 ? (LODOP.ADD_PRINT_TEXT(463, 188, 441, 20, T.xhdwyhzh),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(469, 188, 441, 20, T.xhdwyhzh),
          LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
          LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4));
    var e = T.xhdwdzdh.split(" ")[0]
      , N = T.xhdwdzdh.split(" ")[1];
    countStrLength(N) <= 12 ? (LODOP.ADD_PRINT_TEXT(470, 671, 128, 20, N),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(467, 671, 128, 20, N),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
      countStrLength(e) <= 38 ? (LODOP.ADD_PRINT_TEXT(436, 188, 310, 20, e),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(430, 188, 310, 20, e),
          LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
          LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4))
  } else {
    countStrLength(T.xhdwmc) <= 28 ? (LODOP.ADD_PRINT_TEXT(493, 188, 243, 56, T.xhdwmc),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(493, 188, 237, 56, T.xhdwmc),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
      LODOP.ADD_PRINT_TEXT(496, 493, 291, 20, T.xhdwdm),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
      countStrLength(T.xhdwyhzh) <= 60 ? (LODOP.ADD_PRINT_TEXT(553, 187, 441, 20, T.xhdwyhzh),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(549, 187, 441, 20, T.xhdwyhzh),
          LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
          LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4));
    e = T.xhdwdzdh.split(" ")[0],
      N = T.xhdwdzdh.split(" ")[1];
    countStrLength(N) <= 12 ? (LODOP.ADD_PRINT_TEXT(550, 671, 128, 20, N),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(547, 671, 128, 20, N),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
      countStrLength(e) <= 38 ? (LODOP.ADD_PRINT_TEXT(521, 489, 310, 20, e),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(519, 492, 310, 20, e),
          LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
          LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4))
  }
  countStrLength(T.bz) <= 120 ? (LODOP.ADD_PRINT_TEXT(583, 122, 677, 40, T.bz),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(578, 115, 680, 40, T.bz),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
      LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
    LODOP.ADD_PRINT_TEXT(616, 585, 114, 20, T.kpr),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.ADD_PRINT_TEXT(125, 425, 361, 43, T.mmqOne),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.ADD_PRINT_TEXT(145, 425, 361, 43, T.mmqTwo),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.ADD_PRINT_TEXT(165, 425, 361, 43, T.mmqThree),
    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
    LODOP.ADD_PRINT_IMAGE(15, 40, 66, 66, "data:image/png;base64," + T.ewm),
    LODOP.SET_PRINT_STYLEA(0, "Stretch", 1),
    "00" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(40, 120, 120, 66, tdysFilter(T.tdyslxDm)),
      LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : "01" === T.fpzt && (LODOP.ADD_PRINT_TEXT(40, 120, 120, 66, "销项负数"),
        LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10))
}

function countStrLength(T) {
  var _ = T + "";
  if (!_)
    return 0;
  for (var P = 0, O = 0; O < _.length; O++) {
    var L = _.charCodeAt(O);
    L >= 1 && L <= 126 || L >= 65439 && L <= 65376 ? P++ : P += 2
  }
  return P
}

function tdysFilter(T) {
  switch (T) {
    case "01":
      return "成品油";
    case "14":
      return "机动车";
    case "52":
      return "反向开具";
    default:
      return ""
  }
}

function je2Upper(T) {
  T = Number(T).toFixed(2);
  var _ = ""
    , P = "仟佰拾亿仟佰拾万仟佰拾圆角分";
  T += "00",
    "-" === T.charAt(0) && (T = T.substring(1));
  var O = T.indexOf(".");
  O >= 0 && (T = T.substring(0, O) + T.substr(O + 1, 2)),
    P = P.substr(P.length - T.length);
  for (var L = 0; L < T.length; L++)
    _ += "零壹贰叁肆伍陆柒捌玖".substr(T.substr(L, 1), 1) + P.substr(L, 1);
  return _.replace(/零角零分$/, "整").replace(/零[仟佰拾]/g, "零").replace(/零{2,}/g, "零").replace(/零([亿|万])/g, "$1").replace(/零+圆/, "圆").replace(/亿零{0,3}万/, "亿").replace(/^圆/, "零圆").replace(/零分$/, "整").replace(/^零圆/, "").replace(/^整$/, "零圆整")
}

export function getSavePrinter(T) {
  const _ = window.localStorage.getItem("key") ? JSON.parse(window.localStorage.getItem("key")) : {};
  if (_) {
    if (_.printer && Array.isArray(_.printer) && _.printer.length) {
      const P = _.printer.filter(_ => _.paramType == T);
      return P[0].printName
    }
    return null
  }
  return null
}

export let FPdata = {
  DZDH: null,
  GFKHDH: null,
  GFKHYX: null,
  bbh: null,
  bchcbz: null,
  bmbbbh: null,
  bz: "",
  ceburl: null,
  czydm: "",
  dfgtgmbq: null,
  dphgzbh: null,
  dqsj: "2024-03-07 10:58:37",
  dxtsbz: null,
  ewm: "iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAIAAADeJhTwAAACa0lEQVR42u3aUY7DIAwFwN7/0t0rbMR7BtLhs2qT4kEy2Hw+hfH9x3j626fPf/rbp/P63DJgwIABY2MQUxNeCXRqXqnFlIobDBgwYNyKsZLQdgGkFlBqvktxhgEDBgwY1UPc5MYEBgwYMGB0MVYOa+0C5eR8YcCAAeNtGCccoBrFyl3FzSOqtjBgwIARxGj00n/h82tuh8CAAQNGMHCN0U7gqUNfIzk/ngsMGDBgHI7RLvBNHsom82U7PjBgwIBxIsYJya2N3UaNPR8GDBgwDsdIwaz8oUmYye/Ud1MwYMCAcQhGIzmngp7aaLT/w1IcYMCAAeNAjF3JdvJiwK4G0eNFAAMGDBiXYqxMuB2UVJPqUxixqi0MGDBgXISRSrCNwmIKu7GRWXoXDBgwYFyEkUq27WbULc0lGDBgwHgbRuMw2NgUTF5mSC3E2OEaBgwYMA7EaCThEwqOuwqFsaQNAwYMGIdjpJJVu8D3qkIhDBgwYLygudQuIE5+p1FwjDXfYMCAAeNSjEbDJ1XUe22hEAYMGDBe0M9oXySYbDpNFgqX3gUDBgwYl2JMJuFGMpw8zMbmCwMGDBgXYcSKX4Vk2E7+jcsSj58JAwYMGJdiTCbG9gGwURitFExhwIAB40CMb3mkVkrjP+zaUIx2u2DAgAGj8656g2VyAu2E3NjIwIABA8ZNGJNJMnXBYLIg2Di0woABA8YbMNoJLRXoxsWAxg5nKYHDgAEDxg9iTAa0Dd9YcDBgwIABIxO49gEzlcBXmmwwYMCAcSvGaRcP2k2t1GENBgwYMH4Fo1EUayfbXc2iRqMJBgwYMA7H+AMErV87E8aWaAAAAABJRU5ErkJggg==",
  fdjhm: null,
  fhr: "",
  finalJym: null,
  fjys: null,
  fpcbh: null,
  fpdm: "042002300117",
  fphm: "24422000000016905158",
  fplxdm: "88",
  fpqqlsh: "095148b3-8336-46f8-861e-fd63aa96d1de",
  fpzt: "00",
  fullAddress: null,
  fwfsd: null,
  ghdwdm: "211021198109182927",
  ghdwdzdh: "辽宁省鞍山市铁西区新城办事处沟家寨村36号 15104162665",
  ghdwmc: "吴晓梅",
  ghdwyhzh: " ",
  gmfjbr: null,
  hcFphm: null,
  hczt: null,
  hdjsjg: null,
  hjje: 5e3,
  hjzkje: null,
  hjzkse: null,
  hssign: null,
  hsslbs: null,
  id: "7ab2b224-d4f7-4c70-9672-53fa3d16e383",
  ip: "171.113.24.174",
  jbrgjlx: null,
  jbrsfzjhm: null,
  jbrsfzjlx: null,
  jbrzrrnsrsbh: null,
  jqbh: null,
  jshj: 5e3,
  jym: null,
  jzxmmc: null,
  kce: 0,
  kdsbz: null,
  kpddm: null,
  kpdwdm: "91420115558406739L",
  kpjh: null,
  kpr: "叶苗",
  kprq: "20240306155416",
  mmqOne: "数电票号码：24422000000016905158",
  mmqThree: "https://inv-veri.chinatax.gov.cn/",
  mmqTwo: "全国增值税发票查验平台：",
  ncpsgzjlx: null,
  qdbz: null,
  qmbz: null,
  qmcs: null,
  qmz: null,
  rzzt: null,
  scbsbz: null,
  scbz: null,
  sccgsj: null,
  se: 0,
  sfsdts: null,
  sfwzzfp: "1",
  sfyytljdj: null,
  sjcjhsje: null,
  skm: null,
  skr: "",
  slsm: null,
  spbmjc: null,
  spsm: null,
  ssyf: null,
  swjgdm: null,
  swjgmc: null,
  tdys: [{
    bxdh: null,
    cd: null,
    cjh: "LBELMBJB5BY097078",
    cldw: null,
    cllxDm: null,
    cphcbdjh: null,
    cphm: "鄂AU5115",
    cpxh: "北京现代牌BH6440MY",
    cxr: null,
    cxrq: null,
    ddd: null,
    dengj: null,
    djzh: "420006716783",
    dsccsje: null,
    dsjehj: null,
    fdjhm: null,
    fpdm: "042002300117",
    fphm: "24422000000016905158",
    fpmxxh: "1",
    gtgmf: null,
    hgzh: null,
    id: "d9ce9a8c-c6fb-4563-af19-099d44f81fea",
    jdctzclsbdhuuid: null,
    jkzmsh: null,
    jtgjlx: null,
    mfdh: "18995595960",
    mfdz: "武汉市武昌区文昌门6-8号",
    mfmc: "范劭石",
    mfsbh: "420106196912300436",
    mxid: "7ab2b224-d4f7-4c70-9672-53fa3d16e383",
    qyd: null,
    scqymc: null,
    sfzjhm: null,
    sfzjlx: null,
    sjdh: null,
    skssq: null,
    tdyslxDm: null,
    wspzhm: null,
    xcrs: null,
    xhdwdm: "91420115558406739L",
    ysgjhp: null,
    ysgjzl: null,
    yshwmc: null,
    zjhm: null,
    zjlx: null,
    znj: null,
    zrdclglsmc: "武汉市车管所",
    zzfphm: "00748351"
  }],
  tdyslxDm: "51",
  tdzzsxmbh: null,
  tqm: null,
  tscbz: null,
  tspz: null,
  tzdbh: null,
  tzdh: null,
  wqhtbabh: null,
  xfbz: "qdxf",
  xhdwdm: "91420115558406739L",
  xhdwdzdh: "武汉市江夏区藏龙岛科技园研发大楼二楼 18627749508",
  xhdwmc: "武汉金鑫龙腾汽车产业园有限责任公司",
  xhdwyhzh: "中国银行武汉市江夏支行 565168383017",
  yfpdm: null,
  yfphm: "",
  yqbz: null,
  zbmx: [{
    bb: null,
    cepzmx: null,
    cqzsh: null,
    djmxxh: null,
    dw: "",
    fpdm: "",
    fphm: "24422000000016905158",
    fphxz: "0",
    fpmxxh: "1",
    ggxh: "",
    hsbz: "0",
    hsdj: null,
    hsje: null,
    id: "0cd8536d-3e1f-4e6d-8124-1f1dc1141fd4",
    je: "5000.000000000000000000",
    jqbh: null,
    kpdwdm: "91420115558406739L",
    kprq: "20240306155416",
    lslbs: "0",
    mxid: "7ab2b224-d4f7-4c70-9672-53fa3d16e383",
    se: null,
    sl: null,
    spbm: "1090305010300000000",
    spdj: null,
    spmc: "*机动车*小型普通客车",
    spsl: null,
    spsm: null,
    xhdwdm: "91420115558406739L",
    xsdjbh: null,
    yhzcbs: "0",
    zxbm: null,
    zzstsgl: ""
  }],
  zfdqsj: null,
  zffs: null,
  zfr: null,
  zfrdm: null,
  zfrq: null,
  zfyy: null,
  zhsl: null,
  zkbz: null,
  zlqqz: null,
  zsfs: "0",
  zyspmc: "*机动车*小型普通客车",
  zzfphm: "00748351"
}

//使用
Jdcpdy(T, _, P, O) {
      console.log(T, _, P, O);
      // check();
      var L = {
        "zzsp_width": "230",
        "zzsp_height": "159",
        "ybj_zzsp": -5,
        "zbj_zzsp": -100,
        "sbj_zzsp_qd": "0",
        "zbj_zzsp_qd": "-5",
        "zzsp_qd_width": "210",
        "zzsp_qd_height": "297",
        "zzsz_width": "230",
        "zzsz_height": "159",
        "sbj_zzsz": "0",
        "zbj_zzsz": "-10",
        "sbj_zzsz_qd": "0",
        "zbj_zzsz_qd": "-5",
        "zzsz_qd_width": "210",
        "zzsz_qd_height": "297",
        "ybj_jp": "-10",
        "zbj_jp": "0",
        "bans": "06",
        "sfdyewm": true,
        "jdcsbz": "0",
        "jdczbz": "0",
        "escsbz": "0",
        "esczbz": "0",
        "dyqxzdyj": false,
        "jqxzbs": "0",
        "printer": [
          {
            "czydm": "wjtc",
            "paramType": "4",
            "printName": 2
          },
          {
            "czydm": "wjtc",
            "paramType": "1",
            "printName": 7
          },
          {
            "czydm": "wjtc",
            "paramType": "5",
            "printName": ""
          }
        ],
        "directPrint": false,
        "pldyType": "1"
      };
      console.log(L);
      // var E = JSON.parse(L),
      var E = L,
        D = "0",
        S = "0";
      null != E && (D = Number(E.jdcsbz),
        S = Number(E.jdczbz)),
        LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_SETUP", !0),
        LODOP.PRINT_INITA((D || 0) + "mm", (S || 0) + "mm", "241mm", "177mm", "二手车销售统一发票"),
        printEscFullfp(FPdata);
      var A = getSavePrinter("1");
      void 0 === A && null === A || LODOP.SET_PRINTER_INDEX(A),
        // 0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        LODOP.PREVIEW()
    },
```

