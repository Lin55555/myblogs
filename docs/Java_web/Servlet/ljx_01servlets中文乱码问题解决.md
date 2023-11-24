# 中文乱码问题解决

1.设置编码

在tomcat之前，post和get方法都需要设置编码

 get方式下设置编码：

```
string fname = request.getParameter ( "fname" );
byte[] bytes = fname.getBytes ("ISO-8859-1");//将字符串打散成字节数组
fname = new string (bytes , "UTF-8");//将字节数组按照设定的编码重新组装成字符串

```

 post方式下设置编码：

```
request.setCharacterEncoding("UTF-8");
```

tomcat8之后

get方式目前不需要设置编码，只需设置post方法的编码





