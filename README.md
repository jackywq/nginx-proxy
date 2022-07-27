# 操作步骤

> 1.控制台输入以下命令，启动服务器，并运行在3000端口上
```bash
// 安装依赖
npm install

// 启动
node ./backend/app.js
```

> 2.输入以下命令切换到frontend文件夹下
```bash
cd frontend
```

> 3.在frontend文件夹下执行以下命令，将本地index.html代理到8000端口的本地服务器上去访问；
当我们访问localhost:8000端口时，接口会提示 `GET http://127.0.0.1:8000/api/login 404 (Not Found)`错误，找不到该请求
```bash
http-server -p 8000
```

> 4.所以此时我们需要nginx来做代理
思路：
  1. 启动一个nginx 8080端口的服务，访问localhost:8080/index.html
  2. localhost:8080/index.html 会正向代理到  localhost:8000/index.html上
  3. 将localhost:8080/api/login 会反向代理到  localhost:3000/api/login
  4. 这样index.html 和 api请求在同一个8080端口上，就不会形成跨域了。

**注意：** 正向代理的是客户端，反向代理的是服务器

- 相关配置[nginx.conf](./nginx.conf)


> 5.将nginx.conf 拷贝到 /usr/local/etc/nginx/nginx.conf文件上，并执行一下命令启动nginx
```bash
nginx
```

- 该示例参考[B站小野森森](https://www.bilibili.com/video/BV1mU4y1g74Y?p=1&vd_source=220e62323c197e0cc8dfbe5e1306923c)

