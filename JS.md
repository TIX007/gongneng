
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
