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
