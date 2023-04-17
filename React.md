### 两个项目嵌套（iframe的使用）

```jsx
import React, {
    Component
} from 'react';
import "@/config.js";
export default class AdvancedAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Url: "https://mp.csdn.net/postedit",
        };
    }
    render() {
        return (
            <div className="iframe-page">
                <iframe id="bdIframe" src={this.state.Url} style={{ border: 0, width: "100%", height: "100%", minHeight: "calc(100vh - 117px)", }} />
            </div>
        );
    }
}
```

iframe页面的宽高设置是一个棘手的问题：我们有时要根据设备宽高动态获取。

```js
 componentDidMount() {
        console.log(this.state.Url)
        // /**
        //     * iframe-宽高自适应显示
        //     */
        // const oIframe = document.getElementById("bdIframe");
        // const deviceWidth = document.documentElement.clientWidth;
        // const deviceHeight = document.documentElement.clientHeight;
        // oIframe.style.width = Number(deviceWidth)+ "px"; //数字是页面布局宽度差值
        // oIframe.style.height = Number(deviceHeight) + "px"; //数字是页面布局高度差 
    }
```

当用到.env时变量属性必须是REACT_APP开头的
