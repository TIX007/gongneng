2. 安装 NPM 配置工具。打开命令提示符（Windows）或终端（macOS和Linux），输入以下命令：
```
npm install -g npm-config
```
这将安装 NPM 配置工具，允许您轻松地管理 NPM 配置选项。
3. 设置代理。在命令提示符或终端中，输入以下命令：
```
npm config set proxy http://ip.duoip.cn:8080
```
这将设置 NPM 的代理服务器为 ip.duoip.cn，端口为 8080。
4. 设置代理用户名和密码。如果您的代理服务器需要身份验证，请按照以下步骤操作：

首先，使用以下命令设置代理用户名：
```
npm config set proxy-username your_username
```
将 `your_username` 替换为您的实际代理用户名。

接下来，设置代理密码：
```
npm config set proxy-password your_password
```
将 `your_password` 替换为您的实际代理密码。
5. 验证代理设置。使用以下命令查看 NPM 配置：
```
npm config list
```
这将显示您的 NPM 配置，包括代理服务器、代理端口、代理用户名和代理密码。


### 打包发布
```
npm publish  
```

### 选择打包发布目录  
```
  npm publish ./build
```

### 下载过慢
npm 下载过慢在最后加     --registry=https://registry.npmmirror.com



### 取消npm的https认证
npm config set strict-ssl false
取消yarn的https认证
yarn config set strict-ssl false
git取消https认证
git config --global http.sslVerify false

### npm报Error: error:0308010C

问题描述：
        报错：Error: error:0308010C:digital envelope routines::unsupported


报错原因：
         因为 node.js V17版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制

方案1：打开IDEA 终端，直接输入

Linux & Mac OS：

export NODE_OPTIONS=--openssl-legacy-provider
Windows：

set NODE_OPTIONS=--openssl-legacy-provider