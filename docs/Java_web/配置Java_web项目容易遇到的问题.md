# 一.出现http-500状态码报错
    这种情况一般出现在服务器tomcat配置还有web项目配置有问题的情况下，最好是按顺序检查如下步骤
# 二.正常常见web应用的步骤
## （一）.在project下面创建module

![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/01_create_module.png)

##  （二）.在你建的 module 上右键选择 add framework support
![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/02_add_module_support.png)
选择那个web应用的

##  （三）.在你的module里面引入jar包等依赖
![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/03_add_jar_lib.png)
最好直接在项目 project 下新建一个目录，起名字为 lib 文件夹，这样可以被多个模块共用，省的重复建包
需要导入的包：
            1.用于连接数据库的jar包，要和数据库版本匹配
            2.还有就是tomcat服务的jar包
            3.
然后在 lib 文件夹右键点击 Add as Library

##  （四）.添加模块依赖
![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/04_add_module_support.png)
导入 Tomcat 依赖和 Lib 依赖，其中包含 JSP 和 Servlet 需要用到的一些 API，以及 JDBC 和数据库进行连接的库
![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/04_add_module_support01.png)

##  (五).部署到tomcat（最容易出错的地方）
### 1.添加工件
![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/05_add_arti.png)
每次重新部署，最好把这个工件先删除一下，不然容易出错（很多次都是在这里出问题，最好检查一下目录)
选择的包类型也要注意，要得是 war expoled

### 2.导入工件部署到tomcat中
第一次使用tomcat的时候需要导入tomcat，可以自行搜索个攻略。
![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/06_put_tomcat.png)
这里配置的时候需要注意路径的问题，还有要应用一下再保存。
![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/07_put_tomcat01.png)

