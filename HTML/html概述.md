## HTML概述
    HTML全名超文本标记语言，为网页使用语言，定义了网页的结构和内容。浏览器访问网站，其实就是从服务器下载HTML代码，然后渲染出网页;
    浏览器网页开发涉及三种技术：HTML（定义网页结构和内容），CSS（定义网页样式），JavaScript（定义网页与用户的互动行为）。
    html标签名大小写不敏感但一般习惯使用小写。
### HTML基本结构
```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
</body>
</html>
```
* `<!doctype>` 表示文档类型，告诉浏览器如何解析网页，其本质不是标签，更像一个处理指令。`<!DOCTYPE html>`即为浏览器会按照HTML 5的规则处理网页
* `<html>` 网页的顶层容器，一个网页只能有一个 `<html>`标签
* `<head>` 容器标签，放置网页元信息，为`<html>`的第一个子元素，若网页不包含`<head>`，浏览器会自动创建一个
* `<mate>` 用于设置或说明网页的元数据，必须放在`<head>`里面。一个`<mate>`标签就是一项元数据，网页可以有多个`<mate>`,该标签有5个属性
    * charset 用来制定网页的编码方式，若设置不正确，浏览器会显示乱码，通常我们那使用的是utf-8 `<meta charset="utf-8">`
    * name属性 表示元数据的名字，content属性 表示元数据的值，两者合在一起使用，可以为网页指定一项元数据 eg `<meta name="author" content="yunf">`
    * http-equiv属性用来覆盖HTTP回应的头信息字段，可用于模拟一个HTTP响应头。content属性为对应的字段内容，这两个属性与HTTP协议相关，属于高级用法
    ```
    // conteent-type 规定文档的字符编码
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">

    // refresh 定义文档自动刷新时间间隔，应慎重使用，因为会使得页面不受用户控制
    <meta http-equiv="refresh" content="300">

    // default-style规定要使用的预定义的样式表。
    <meta http-equiv="default-style" content="the document's preferred stylesheet">
    ```
* `<title>` 标签用于指定网页的标题，会显示在浏览器窗口的标题栏
* `<body>` 容器标签，用于放置网页的主体内容