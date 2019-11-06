> 这是坚持技术写作计划（含翻译）的第47篇，定个小目标999，每周最少2篇。


婚期定在10.1，毕竟是程序员，就自告奋勇的跟老婆说自己写个小程序做婚礼请柬。在网友分享的基础上，略作改进，整理了这篇零基础零成本小程序教程。（如果嫌麻烦，婚礼纪 啥的网上随便找个交差也行）

<!-- more -->

<a name="i0H1S"></a>
### 事前准备

- [Hbuilder X](https://www.dcloud.io/hbuilderx.html)
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)
- [注册小程序账号](https://developers.weixin.qq.com/miniprogram/introduction/)
- [版本控制软件-git](https://git-scm.com/downloads)

<a name="W8AtL"></a>
### 完善小程序设置
<a name="JXJxd"></a>
#### 补全信息获取小程序ID
![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573033130173-20b540b4-9c6a-4457-9978-4f20d301f5ee.png#align=left&display=inline&height=535&name=image.png&originHeight=535&originWidth=1679&search=&size=78558&status=done&width=1679)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573033168673-e5f4aa01-4bd3-493b-b5bb-311a4dca3646.png#align=left&display=inline&height=832&name=image.png&originHeight=832&originWidth=1180&search=&size=42814&status=done&width=1180)

<a name="BL7pX"></a>
### 配置hbuilder和uniapp

配置hbuilder

![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034148614-8b5ec86b-245c-4cd8-b84f-bb0d4923e91f.png#align=left&display=inline&height=332&name=image.png&originHeight=332&originWidth=242&search=&size=20729&status=done&width=242)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034171542-dd03a197-97a7-41ae-ae2d-883d8198dfa7.png#align=left&display=inline&height=75&name=image.png&originHeight=75&originWidth=830&search=&size=7171&status=done&width=830)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034189687-c203caea-daa1-4255-9974-a590857ca70f.png#align=left&display=inline&height=73&name=image.png&originHeight=73&originWidth=820&search=&size=9005&status=done&width=820)

从 github上clone下项目 

`git clone https://github.com/anjia0532/jiayuan.git` 

修改配置文件 `/common/js/metadata.js` 比如酒店坐标，新郎新娘电话等<br />修改小程序配置文件 `manifest.json` ![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034066448-14353f22-20c6-4ef7-952d-8c3b347be550.png#align=left&display=inline&height=271&name=image.png&originHeight=271&originWidth=1110&search=&size=46896&status=done&width=1110)

<a name="s9jX9"></a>
#### 运行微信小程序
![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034433907-0d1cb6a3-f126-4d96-9be1-2b266108917e.png#align=left&display=inline&height=353&name=image.png&originHeight=353&originWidth=586&search=&size=43227&status=done&width=586)

<a name="PNU0G"></a>
#### 开通云开发环境
![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034487888-5403d846-60a7-40d2-a6d8-2551b4e6a14e.png#align=left&display=inline&height=664&name=image.png&originHeight=664&originWidth=910&search=&size=154966&status=done&width=910)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034507642-0520d381-6aef-4fec-9e4e-d23ea46efb2d.png#align=left&display=inline&height=639&name=image.png&originHeight=639&originWidth=602&search=&size=44756&status=done&width=602)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034570809-ed298f8d-6338-4cf8-acdb-983b891718da.png#align=left&display=inline&height=282&name=image.png&originHeight=282&originWidth=1147&search=&size=25164&status=done&width=1147)

<a name="un7hn"></a>
#### 创建云开发数据库
![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034702654-6d1d3471-771f-43b2-b6a9-c43af016f13a.png#align=left&display=inline&height=260&name=image.png&originHeight=260&originWidth=1055&search=&size=38322&status=done&width=1055)<br />从 `static/databases` 复制文件名(去掉.json) 作为集合名称，创建。<br />分别导入数据，其中message和user是空集合，导入失败，不用管。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573034940830-44afbca4-858c-4b05-80d7-7e32526fbb69.png#align=left&display=inline&height=384&name=image.png&originHeight=384&originWidth=835&search=&size=35357&status=done&width=835)

设置数据库的读写权限<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573035007788-5a8ba49f-a552-452d-af24-d25f2b316cb5.png#align=left&display=inline&height=309&name=image.png&originHeight=309&originWidth=982&search=&size=35008&status=done&width=982)

<a name="wgWr6"></a>
#### 上传婚纱照
![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573035187508-2f382c26-68e0-4b70-b335-c5291e6f1efd.png#align=left&display=inline&height=714&name=image.png&originHeight=714&originWidth=1203&search=&size=106490&status=done&width=1203)<br />修改为婚纱照地址，也可以从json文件改完，重新导入。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573035278426-ea00c3d6-f7d1-447e-ba20-ca8598b53776.png#align=left&display=inline&height=320&name=image.png&originHeight=320&originWidth=927&search=&size=31837&status=done&width=927)

<a name="HEXjR"></a>
#### 创建并上传云函数
![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573035536387-9cacd79a-540b-4aaa-a8ef-0f3a4b881180.png#align=left&display=inline&height=267&name=image.png&originHeight=267&originWidth=954&search=&size=30443&status=done&width=954)


<a name="ektSb"></a>
#### 体验预览
![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573036063500-f50a7a32-82d5-41e9-bde3-dec25fa99594.png#align=left&display=inline&height=490&name=image.png&originHeight=490&originWidth=872&search=&size=69137&status=done&width=872)


<a name="SmzVb"></a>
#### 发给朋友体验

![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573036101498-d2cbaccc-63a6-465f-9dbc-287d849915c8.png#align=left&display=inline&height=877&name=image.png&originHeight=877&originWidth=1644&search=&size=88594&status=done&width=1644)

<a name="mtHHN"></a>
#### 发布
![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573036143517-21528daa-9af9-445a-b0bf-db3ef978346a.png#align=left&display=inline&height=445&name=image.png&originHeight=445&originWidth=297&search=&size=28710&status=done&width=297)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573036205532-a16e3b7a-191d-4941-a003-e9e07cd4daf3.png#align=left&display=inline&height=661&name=image.png&originHeight=661&originWidth=1090&search=&size=96811&status=done&width=1090)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573036218419-fb1dc7e7-a554-45c9-95c3-569baf046def.png#align=left&display=inline&height=227&name=image.png&originHeight=227&originWidth=660&search=&size=13144&status=done&width=660)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/226273/1573036263894-f4c0ba33-b4c3-476c-bb61-9f413275ef9f.png#align=left&display=inline&height=809&name=image.png&originHeight=809&originWidth=1792&search=&size=73346&status=done&width=1792)

<a name="8bNbS"></a>
## 后话

本文主要是个人需要，结合网上大牛的开源项目，略作修改放出的，可能会有各种需要调整的地方，欢迎留言。我会尽量帮助各位新人。

<a name="fb674066"></a>
## 招聘小广告

山东济南的小伙伴欢迎投简历啊 [加入我们](https://www.shunnengnet.com/index.php/Home/Contact/join.html) , 一起搞事情。<br />长期招聘，Java程序员，大数据工程师，运维工程师，前端工程师。

<a name="35808e79"></a>
## 参考资料

- [我的博客](https://anjia0532.github.io/2019/09/25/vue-wedding-invitation-wechat-applet/)
- [我的掘金](https://juejin.im/post/5dc2a1a26fb9a04a9f11c176)
- [mpvue+小程序云开发，纯前端实现婚礼邀请函](https://juejin.im/post/5c341e1d6fb9a049f66c4876)
