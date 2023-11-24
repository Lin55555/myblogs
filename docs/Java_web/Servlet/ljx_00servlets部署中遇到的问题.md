# 一.servlets部署中遇到的问题

创建Java_web项目的流程：

1.先创建一个project

2.在project下面创建一个module，在模块结构下面引入web(此时要注意路径)

3.此时它会提示要创建一个artifacts（因为后续部署到tomcat web容器上的时候是需要artifacts的）

4.根据提示去创建一个artifacts，这个时候要注意选择的类型，然后注意路径便可以创建一个工件了



容易出现的问题：

1.先有artifacts再去引入mysql的jar包，此时部署包里面不包含它，要删除工件，再重新创建部署后者根据提示进行fix

2.启动tomcat后出现了404报错：

  一般是部署过程中的tomcat配置路径出现错误，URL的值指的是tomcat启动之后自动打开指定的浏览器，然后访问该地址下的index.html（这个可以在welcome—list里面修改）。

3.启动tomcat之后出现了500报错：

  一般是服务器内部出现问题，大概率是依赖出现了问题，或者部署工件出错

4.启动tomcat之后出现了405报错：当前请求方法不支持，必须进行对应。

