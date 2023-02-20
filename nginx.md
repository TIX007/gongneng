### vue路由使用history模式刷新404

```nginx
location /{
    root  /website/wenfu_zszk/;
    index index.html;
 
    #解决404
    try_files $uri $uri/ /index.html;
  }
```

### vue3+vite打包上线 nginx代理解决跨域

```nginx
 listen       80;//端口，随便写，自定义
        server_name  xxxx;//本机ip地址 或者localhost即可
        #charset koi8-r;
        #access_log  logs/host.access.log  main;

        location / {
            root   E:\\vue3\\vue_common\\taxi_manager_vue3\\dist;//切记，windows中要用双斜杠，不然会报错，踩了一天坑
            index  index.html index.htm;
            try_files $uri $uri/ @router;
        }
        #proxy代理部分
          location  /api/ {	
		#rewrite    ^(.*)api(.*)$   $1/$2; break;
	proxy_pass http://10.xx.xx.220; # 代理接口地址,服务器api的地址，我的项目，220后面不能加/，不然post请求会报404，一般404就是nginx代理设置没有对
          }
          #nginx代理vue3，这块也是要有的，路由设置
         location @router {
        rewrite ^.*$ /index.html last;
         }

```

