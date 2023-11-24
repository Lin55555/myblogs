演示场景：可以用一个servlet的service方法中获取session进行setAtttribute，一个servlet的service方法获取session进行getAttribute,然后将该值打印输出，如果用另一个浏览器新建session，是不能获取得到该值的。

```java

public class Demo_servlet01  extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getSession().setAttribute("name","lili");

    }
}
```

```java

public class Demo_servlet02 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Object NAME=request.getSession().getAttribute("name");
        System.out.println(NAME);
    }
}
```

session的保存作用域：是具体的某一个session所对应的，不能被另一个session所获取。

常用的API：session.setAttribute(k,v).   Session.getAttribute(K)  removeAttribute(k)

