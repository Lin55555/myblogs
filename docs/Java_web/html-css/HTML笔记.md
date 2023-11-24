# 一.什么是html

在浏览器客户端（Chrome ie safari)向服务器端发出http request （index.html）

```html
<html>
  <head>
    <body>
     
    </body>
  </head>
</html>

```

HTML：称之为**超文本标记语言 **，用于控制页面显示什么，是一种解释型语言，写错的不会显示。

CSS：**层叠样式表**，用于控制页面怎么显示。

Java script：页面特效，**是一门客户端脚本语言**，开发WEB程序的辅助语言之一，虽然说是辅助，但是其重要性也是很高的。

# 二. 常见的简单html标签

```html
<!--
    html页面由一个个标签组成，一个开始标签，一个结束标签。
   <title>是标题标签。
   <meta>标签进行编码方式的选择。
   <br/>  用来换行，为单标签，即开始标签和结束标签是同一个，斜杠放在单词后面。
   <p>标签表示段落。
   <img/> 标签表示图片，内含有很多个属性。src可以使用绝对路径和相对路径。还有width和height
   <h1>～<h6>标题标签
   <ol></ol>用于表示有序列表，属性start表示从...开始,属性type表示显示的样式，有A，i，和默认1。
   <ul></ul>表示的是无序列表,type可以选disc，circle，square,三种。
   <b></b>表示粗体 
   <i></i>表示斜体
   <u></u>表示下划线 ,以上三个标签是可以嵌套的
   <sub></sub>表示下标
   <sup></sup>表示上标
    四个比较符号
    &lt;小于
    &gt;大于
    &le;小于等于
    &ge;大于等于
    &reg; 注册商标®️
    &copy；版权符号©️,更多的html 实体可以直接百度搜索，很多。
		<span></span>包围段落之类的后续可以进行修饰
	 <a></a>用来表示超链接引用，两个属性，href用于引入链接，target用于指定打开新链接的方式
					-self:在本标签页
					-blank:在新窗口打开
					-parent:在父窗口打开
					-top:在顶层窗口打开
<div></div>独占一行的块标签，用ID，class属性来标记，用css来控制显示。
-->
```

```html
<html>
<head>
<title> HELLO <br/> </title>
<meta charset="GBK">
</head>
<body>
hello world！<br /> 你好，html！
  <p>
    这里是第一个段落。
  </p>
  <p>
    这是第二个段落。
  </p>
  <img  src='引用图片/img1.jpg' width="17" height="10" alt="这里是一张图片"/>
  <h1>
    标题一
  </h1>
  <h2>
    标题二
  </h2>
  水果排行榜：
  <ol type=“>
    <li>
      1.西瓜
    </li>
    <li>
    2.葡萄
    </li>
    <li>
    3.哈密瓜
    </li>
  </ol>
  <a href="www.baidu.com">百度一下</a>
</body>
</html>
```

#  三.表格标签的使用

表格常用标签：

```html
<table></table>
```

  用来创建一个表格，（border可以设置边框，width可以表示单元格的大小，cell spacing表示单元格和单元格之间的空隙，虽然大部分淘汰了，但是还能用）

<tr></tr> 行  align可以选择表格中文字的分布方式
<td></td>  列  里面可以嵌套入图片。

```html
<html>
  <body>
    <table border="1" cellspacing="0" cellpadding="3">
 <tr>
    <th>名称</th>
    <th>单价</th>
    <th>数量</th>
    <th>操作</th>
 </tr>
 <tr align="center">
    <td>菠萝</td>
    <td rowspan="2">2</td>
    <td>10</td>
    <td>删除.jpg</td>
 </tr>
 <tr align="center">
   <td>西瓜</td>
   <td>5</td>
   <td>删除.jpg</td>
 </tr>
 <tr align="center">
   <td>葡萄</td>
   <td>10</td>
   <td>2</td>
   <td>删除.jpg</td>
 </tr>
 <tr align="center" >
 <td>总计</td>
 <td colspan="3">100</td>
 </tr>
  </table>
  </body>
</html>
```

<html>
  <body>
    <table border="1" cellspacing="0" cellpadding="3">
 <tr>
    <th>名称</th>
    <th>单价</th>
    <th>数量</th>
    <th>操作</th>
 </tr>
 <tr align="center">
    <td>菠萝</td>
    <td rowspan="2">2</td>
    <td>10</td>
    <td>删除.jpg</td>
 </tr>
 <tr align="center">
   <td>西瓜</td>
   <td>5</td>
   <td>删除.jpg</td>
 </tr>
 <tr align="center">
   <td>葡萄</td>
   <td>10</td>
   <td>2</td>
   <td>删除.jpg</td>
 </tr>
 <tr align="center" >
 <td>总计</td>
 <td colspan="3">100</td>
 </tr>
  </table>
  </body>
</html>

# 四.表单标签的使用

表单常用标签的学习：
表单其实就是一个容器，承载我们要上传的数据。

```html
表单常用标签的学习：
表单其实就是一个容器，承载我们要上传的数据。
<form>
<input type="text" name="nickname"/> 表示文本框，name属性必须选中，否则数据无法发送给服务器
<input type="password" name="pwd"/> 表示的是密码框
<input type="radio"   name="gender" value="male"/>男 表示单选按钮，name属性值保持一致时才能有互斥的效果，可以通过checked属性设置默认选中
<input type="checkbox" name="hobby" value="basketball" checked/>篮球<br/> 表示复选框，name属性值建议保持一致，这样服务器端获取值时时一个数组
select 表示下拉列表，每个选项都是option，value是发送给服务器的值，selected表示默认选中
textarea 表示多行文本框，它的value就是开始结束标签之间的内容
 <input type="submit" value="注册"/>
    <input type="reset" value="重置"/>
    <input type="button" value="这是一个普通按钮"/>
</form>
```

<form action="demo.html" method="post">
    昵称：<input type="text" name="nickname"/> <br />
    密码：<input type="password" name="pwd"/> <br />
    性别：<input type="radio"   name="gender" value="male"/>男
         <input type="radio"   name="gender" value="female" checked="checked"/>女 <br/>
    爱好：<input type="checkbox" name="hobby" value="basketball" checked/>篮球<br/>
         <input type="checkbox" name="hobby" value="football"/>足球<br/>
         <input type="checkbox" name="hobby" value="run"/>跑步<br/>
    星座：<select name="star">
        <option value="1">白羊座</option>
        <option value="2">金牛座</option>
        <option value="3">射手座</option>
        <option value="4">魔蝎座</option>
        <option value="5">天枰座</option>
        <option value="6">双子座</option>
        <option value="7">天蝎座</option>
        </select> <br />
    备注：<textarea name="remark" rows="4" cols="50">
    </textarea><br />
    <input type="submit" value="注册"/>
    <input type="reset" value="重置"/>
    <input type="button" value="这是一个普通按钮"/>
</form>

# 五.frame和iframe的使用

frameset  和iframe的应用

frameset表示框架标签，目前已经淘汰

frame表示的是框架中页面的真实引用

iframe：在一个页面里面嵌入一个字页面

```html
<html>
  <head></head>
  <frameset rows="20%,*" frameborder="no">
    <frame src="frame/top.html"/>
    <frameset cols="15%,*">
      <frame src="frame/left.html"/>
      <frameset rows="80%,*">
      <frame src="frame/main.html"/>
        <frame src="frame/botton.html"/>
      </frameset>
    </frameset>
    
  </frameset>
</html>
```

# 六.总结

1.html是解释型的文本标记语言，不区分大小写。

2.html,head,title,meta,body,br,p,hr,div,table,form,u,i,b,sup,sub,span,ul,Ol,li,tr,td,h1-h6,a,input,select,textarea,img等众多标签的应用。

3.主要讲了表格还有表单标签的应用。

 
