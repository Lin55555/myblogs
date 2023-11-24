会话只是指一段指定的时间间隔。
会话跟踪是维护用户状态(数据)的一种方式。它也被称为servlet中的会话管理。
Http协议是一个无状态的，所以我们需要使用会话跟踪技术来维护用户状态。 每次用户请求服务器时，服务器将请求视为新请求。 所以需要保持一个用户的状态来识别特定的用户。
HTTP是无状态的，这意味着每个请求被认为是新的请求。如下图所示：

# 一.为什么使用会话跟踪？

因为需要用于识别特定的用户。

# 二.会话跟踪技术

会话跟踪中使用的技术有四种：

* Cookies，是一种客户端机制
* 隐藏表格
* 域网址重写
* HttpSession，是一种服务器端的机制

# 三.HttpSession常用的API

1.request.getsession()获取当前的对话，否则创建一个全新的会话

2.request.getsession(true)，效果和不带参数一样

3.request.getsession(false)，获取当前的对话，没有则返回null，不会创建新的

4.session.getId()，获取当前会话的id

5.session.isNEW()，判断是否为新的

6.session.setMaxInactiveInterval()，设置最大不激活时间间隔

7.session.invalidate()，强制让会话失效

8.session.getCreationTime()，获取创建时间

# 四.session保存作用域

session保存作用域
      - session保存作用域是和具体的某一个session对应的，一个session set的数据不可以被另一个session所获取！
      - 常用的API：
        void session.setAttribute(k,v)
        Object session.getAttribute(k)
        void removeAttribute(k)
