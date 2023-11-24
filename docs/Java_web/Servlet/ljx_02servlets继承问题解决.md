# 一.servlet继承关系理解

![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/08_servlets_inherit.png)

![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/08_servlets_inherit01.png)

![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/08_servlets_inherit02.png)

![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/08_servlets_inherit03.png)

我们可以看得到javax.servlet.http.httpservlet是一个抽象类，继承自javax.servlet.genericServlet，javax.servlet.genericServlet又继承自servlet接口

httpservlet-->genericServlet->servlet接口

# 二.Servlet接口下的主要方法

![avatar](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/08_servlets_inherit03.png)

## 1.service方法详解

在javax.servlet.genericServlet下，该方法还是抽象的，但是在javax.servlet.http.httpservlets中实现了该方法：

![image-20230922112933459](/Users/kin/Desktop/My_coding/myblogs/docs/Java_web/img/10_httpServlet.png)

1.String method=reg.getmethod();获取请求的方式

2.通过各种判断，根据不同的请求方式，去调用不同的do方法

3.在httpServlet这个抽象类中，do方法都差不多

其中的判断逻辑如下：

```java
protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String method = req.getMethod();
        long lastModified;
        if (method.equals("GET")) {
            lastModified = this.getLastModified(req);
            if (lastModified == -1L) {
                this.doGet(req, resp);
            } else {
                long ifModifiedSince;
                try {
                    ifModifiedSince = req.getDateHeader("If-Modified-Since");
                } catch (IllegalArgumentException var9) {
                    ifModifiedSince = -1L;
                }

                if (ifModifiedSince < lastModified / 1000L * 1000L) {
                    this.maybeSetLastModified(resp, lastModified);
                    this.doGet(req, resp);
                } else {
                    resp.setStatus(304);
                }
            }
        } else if (method.equals("HEAD")) {
            lastModified = this.getLastModified(req);
            this.maybeSetLastModified(resp, lastModified);
            this.doHead(req, resp);
        } else if (method.equals("POST")) {
            this.doPost(req, resp);
        } else if (method.equals("PUT")) {
            this.doPut(req, resp);
        } else if (method.equals("DELETE")) {
            this.doDelete(req, resp);
        } else if (method.equals("OPTIONS")) {
            this.doOptions(req, resp);
        } else if (method.equals("TRACE")) {
            this.doTrace(req, resp);
        } else {
            String errMsg = lStrings.getString("http.method_not_implemented");
            Object[] errArgs = new Object[]{method};
            errMsg = MessageFormat.format(errMsg, errArgs);
            resp.sendError(501, errMsg);
        }

    }
```

do方法举例：

```java
 protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String msg = lStrings.getString("http.method_get_not_supported");
        this.sendMethodNotAllowed(req, resp, msg);
    }

```

```java
    private void sendMethodNotAllowed(HttpServletRequest req, HttpServletResponse resp, String msg) throws IOException {
        String protocol = req.getProtocol();
        if (protocol.length() != 0 && !protocol.endsWith("0.9") && !protocol.endsWith("1.0")) {
            resp.sendError(405, msg);
        } else {
            resp.sendError(400, msg);
        }

    }
```

如果在没有重写dopost方法的情况下，进行方法调用，将会报405状态码。

