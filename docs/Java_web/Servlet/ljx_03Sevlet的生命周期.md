# 一.Servlet生命周期详解

`servlet`有三种状态：初始化创建，就绪和结束。 如果`servlet`实例被创建，则`servlet`处于新状态。 调用`init()`方法后，`Servlet`进入就绪状态。 在就绪状态下，`servlet`执行所有任务。当web容器调用`destroy()`方法时，它转移到结束状态。

**1. 加载Servlet类**
类加载器负责加载servlet类。 当Web容器接收到servlet的第一个请求时，将加载servlet类，只加载一次！
**2. 创建Servlet实例**
Web容器在加载servlet类之后创建一个servlet的实例。servlet实例在servlet生命周期中只创建一次。
**3. 调用init方法**

只有第一次接收请求时，servlet会进行实例化(调用构造方法），初始化init()，然后服务(调用service()）。

好处：系统启动速度快

坏处：系统响应速度慢

Web容器在创建servlet实例后调用`init`方法一次。 `init`方法用于初始化servlet。 它是`javax.servlet.Servle`t接口的生命周期方法。init方法的语法如下：

~~~java
public void init(ServletConfig config) throws ServletException
~~~
**3.1设置初始化的时间**

默认是第一次请求时，实例化，初始化

```
通过在<servlet></servlet>标签里面设置<load-on-startup>来设置启动的先后顺序，数字越小表示启动越靠前，最小值是0（可以写个用例比较一下区别，一个是启动运行的时候就实例化->初始化，一个是启动后申请服务再进行实例化->初始化。可以单独重写一个post方法，然后在重写init方法，加点标识语打印即可说明）
```

**4. 调用service方法**
每当接收到servlet的请求时，Web容器都会调用`service`方法。如果servlet未初始化，则遵循上述前三个步骤，然后调用`service`方法。 如果servlet被初始化，它调用`service`方法。 请注意，servlet仅初始化一次。 Servlet接口的`service`方法的语法如下：

~~~java
public void service(ServletRequest request, ServletResponse response)   throws ServletException, IOException
~~~
**5. 调用destroy方法**
从服务中删除servlet实例之前，Web容器调用`destroy`方法。它使servlet有机会清理所有资源，例如内存，线程等。Servlet接口的`destroy`方法的语法如下：
~~~java
public void destroy()
~~~
在如下几种情况下，会调用destroy()
1. 该Servlet所在的web应用重新启动
在server.xml中配置该web应用的时候用到了
 ~~~xml
<Context path="/" docBase="e:\\project\\j2ee\\web" debug="0" reloadable="false" />
 ~~~
如果把 reloadable="false" 改为reloadable="true" 就表示有任何类发生的更新，web应用会自动重启当web应用自动重启的时候，destroy()方法就会被调用

2. 关闭tomcat的时候 destroy()方法会被调用，但是这个一般都发生的很快，不易被发现。

**6.被回收**
当该Servlet被销毁后，就满足垃圾回收的条件了。 当下一次垃圾回收GC来临的时候，就有可能被回收。

# 2.servlet的特点

单例/的线程不安全安全的

![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/servlet_unsafe.png)

如果多个线程访问同一个servlet的时候，比如说在有一个线程访问的情况下对标志进行逻辑判断的时候，另一个线程对标识位进行修改，容易产生错误。所以尽量不要在servlet中定义成员变量，或者进行逻辑判断。