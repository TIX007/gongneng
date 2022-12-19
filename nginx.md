### vue路由使用history模式刷新404

```nginx
location /{
    root  /website/wenfu_zszk/;
    index index.html;
 
    #解决404
    try_files $uri $uri/ /index.html;
  }
```

