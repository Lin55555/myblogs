修改WEB-INF目录下面的web.xml文件：

```xml

<welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.jsp</welcome-file>  
</welcome-file-list>

```

在javaweb项目启动时，就会在项目目录下面自上而下逐一查找这些文件，如果找到了这两个文件中的某一个文件，则以这个文件为welcom-file，也就是这个项目的默认页面。

