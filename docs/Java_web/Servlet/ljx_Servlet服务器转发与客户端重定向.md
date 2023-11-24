# 一.服务器端内部转发和客户端重定向

## （一）.服务器端内部转发`RequestDispatcher`的`forward()`方法

![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/forward.png)

服务器内部转发客户端的请求，最终对其进行回应。

## (二).客户端重定向

`HttpServletResponse`接口的`sendRedirect()`方法可以用于将响应重定向到另一个资源，资源可能是`servlet`，`jsp`或`html`文件。它接受相对和绝对URL。
它在**客户端**工作，因为它使用浏览器的URL栏来发出另一个请求。 所以，它可以在服务器内部和外部工作。

![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/redirect.png)

服务器让客户端去访问另一个页面功能。

## (三）.forward()和sendRedirect()方法的区别

`RequestDispatcher`的`forward()`方法和`HttpServletResponse`接口的`sendRedirect()`方法之间存在很多差异。如下面给出：

forward()方法|sendRedirect()方法
--|--|
`forward()`方法在服务器端工作。|`sendRedirect()`方法在客户端工作。
它将相同的请求和响应对象发送到另一个servlet。|它总是发送一个新的请求。
它只能在服务器内工作。|它可以在服务器内外使用。
示例: `request.getRequestDispacher("servlet2").forward(request,response);`|示例: `response.sendRedirect("servlet2");`

**`sendRedirect()`方法的语法**
~~~java
public void sendRedirect(String URL)throws IOException;
~~~
**`sendRedirect()`方法的示例**
~~~java
response.sendRedirect("http://www.baidu.com");
~~~

## (四）.sendRedirect()方法的示例

RedirectServlet.java
~~~java
public class RedirectServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // 设置服务器端内容类型器
        response.setContentType("text/html");
        // 获取服务器端输出对象
        PrintWriter out = response.getWriter();

        // 直接重定向到：www.baidu.com
        response.sendRedirect("https://www.baidu.com");

        out.close();
    }
}
~~~

BaiduSearch.java
~~~java
public class BaiduSearch extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // 获取用户输入的关键字
        String keyword =request.getParameter("keyword");
        System.out.println(keyword);
        String url = "https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd="+keyword+"&oq=serious&rsv_pq=b7e075bf00169b14&rsv_t=6c67hEJVKkO%2Bkg08XTXPh9dlymb7lzNfD9TVjJHyHFxBgPqqSGuCNRywm30&rqlang=cn&rsv_enter=1&prefixsug=%25E4%25BD%25A0%25E5%25A5%25BD&rsp=1&rsv_dl=ts_1&inputT=8774";
        System.out.println(url);
        // 重定向的百度搜索
        response.sendRedirect(url);
    }
}
~~~

redirect.html
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Search by KeyWord</title>
</head>
<body>
    <div style="text-align: center">
        <form action="BaiduSearch">
            关键字:<input type="text" name="keyword"><input type="submit" value="百度搜索">
        </form>
    </div>
</body>
</html>
~~~

web.xml
~~~xml
?xml version="1.0" encoding="UTF-8"?>

<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         id="WebApp_ID" version="3.1">
    <display-name>ServletRequest</display-name>
    <welcome-file-list>
        <welcome-file>redirect.html</welcome-file>
    </welcome-file-list>
    <servlet>
        <servlet-name>RedirectServlet</servlet-name>
        <servlet-class>RedirectServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>RedirectServlet</servlet-name>
        <url-pattern>/RedirectServlet</url-pattern>
    </servlet-mapping>
    <servlet>
        <servlet-name>BaiduSearch</servlet-name>
        <servlet-class>BaiduSearch</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>BaiduSearch</servlet-name>
        <url-pattern>/BaiduSearch</url-pattern>
    </servlet-mapping>
</web-app>
~~~

### （五）.转发和重定向实践用例

#### 1.转发

```java
public class Demo_servlet03 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("这是第一次访问的servlet，等下内部转发给另一个servlet");
        request.getRequestDispatcher("demo04").forward(request,response);
    }
}
```

服务器内部转发：一次请求响应的，对于客户端而言，内部经过多少次转发，它是不知道的。且地址栏不发生变化。

```java
public class Demo_servlet04 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("这里是：demo04");

    }
}
```

#### 2.重定向

```java
public class Demo_servlet03 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //System.out.println("这是第一次访问的servlet，等下内部转发给另一个servlet");
        //request.getRequestDispatcher("demo04").forward(request,response);
        //客户端重定向,简单高效
        System.out.println("先访问到demo03，然后重定向到demo04");
        response.sendRedirect("demo04");

    }
}
```

```java
public class Demo_servlet04 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("这里是：demo04");
    }
}
```

重定向：是两次请求响应的过程，客户端肯定知道请求URL是有发生改变的，地址栏会发生变化。

