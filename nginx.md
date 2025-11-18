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

### 负载均衡配置
```nginx
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    client_max_body_size 30m;

    upstream backend {
    		server 192.168.10.12:8010;
    		server 192.168.10.19:8010;
	}  //负载均衡配置

    server {
        listen       8000;
        server_name  www.shhuyou.com.cn;
		charset utf-8;

		location / {
			root   /usr/share/nginx/html/dist;
			try_files $uri $uri/ /index.html;
			index  index.html index.htm;
		}

		location /wx/ {
			proxy_pass http://backend/wx/;
			proxy_set_header        Host 127.0.0.1;
			proxy_set_header        X-Real-IP $remote_addr;
			proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
		}
  
		location /prod-api/ {
		    proxy_set_header Host $http_host;
		    proxy_set_header X-Real-IP $remote_addr;
		    proxy_set_header REMOTE-HOST $remote_addr;
		    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		    proxy_pass http://backend/;
		    proxy_connect_timeout    600;
		    proxy_read_timeout       600;
		    proxy_send_timeout       600;
		}
		
		location /websocket/ {  # websocket 请求所在的地址
		    proxy_pass http://192.168.10.12:8011;  # 后端 websocket 服务所在的地址
		    proxy_http_version 1.1;
		    proxy_set_header Upgrade $http_upgrade;
		    proxy_set_header Connection "Upgrade";
		    proxy_set_header X-Real-IP $remote_addr;
	 	    proxy_connect_timeout 600s;
		    proxy_read_timeout 600s;
		    proxy_send_timeout 60s;
		}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }	
}
```

### 文件上传大小及压缩加速

```nginx
    # 允许上传的最大文件大小，根据需求调整
    client_max_body_size 100M;
    
    # 缓冲区设置，优化大文件上传性能
    client_body_buffer_size 10M;
    sendfile on;                  # 启用高效文件传输
    tcp_nopush on;                # 减少网络包数量
    tcp_nodelay on;               # 低延迟传输
    keepalive_timeout 65;         # 长连接超时时间
    
    # 网络传输优化
    gzip on;                      # 启用压缩
    gzip_comp_level 3;            # 压缩级别（1-9，平衡CPU和带宽）
    gzip_min_length 1024;
```

### SSE配置

```nginx
location /prod-api/ {
        proxy_read_timeout 300s;  
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # proxy_pass http://8.130.97.148:8001/;
        proxy_pass https://adb.vehicle.hongyizz.com/;
        # proxy_pass https://sse.vehicle.hongyizz.com/;
        if ($request_method = 'OPTIONS') {
            return 204;
        }
    }
    
    location /resource/sse {
        send_timeout 600;
        keepalive_timeout 65;
        add_header 'Access-Control-Allow-Origin' '*';
        proxy_pass http://8.130.97.148:8001/resource/sse;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
```


