# 一.安装HomeBrew
## 1.介绍 
**Homebrew是一款包管理工具，目前支持macOS和linux系统。主要有四个部分组成: brew、homebrew-core 、homebrew-cask、homebrew-bottles**
1. brew:Homebew源代码仓库
2. Homebrew-core:Homebrew核心源
3. home brew- cask：提供Macos应用和大型二进制文件安装
4. homebrew-bottles:预编译二进制软件包
## 2.安装
- 官网安装命令：

- /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

- 常见的bug

   error: RPC failed; curl 56 LibreSSL SSL_read: SSL_ERROR_SYSCALL, errno 54
   fatal: The remote end hung up unexpectedly
   fatal: early EOF
   fatal: index-pack failed

- 解决办法：找一个中科大的源或者清华的源，速度起飞。
   
   # 二.给电脑配置ssh免密码登录
   
   ## 1.设置电脑允许远程登录
   
   偏好设置->共享->选择远程登录
   
   ## 2.配置ssh
   
   （1）.打开终端，输入ssh-keygen -t rsa,然后一直回车即可
   
   （2）.查看生成的公钥和私钥  cd ~/.ssh.     然后ls会看到两个文件
   
   ​     Id_rsa和id_rsa.pub
   
   （3）.执行以下命令 cat ~/.ssh/id_rsa.pub>>~/.ssh/authorized_keys
   
   （4）.测试，在终端输入ssh localhost.如果出现以下询问输入yes，不需要输入密码就能登录，说明配置成功
   
   ```java
   Are you sure you want to continue connecting (yes/no/
   ```

# 三.安装Hadoop

## 1.brew install hadoop

## 2.配置环境变量

（1）.brew info Hadoop 查看Hadoop安装路径

（2）.定义Hadoop_home变量并添加到PATH中去

 ```java
 # Hadoop
 export HADOOP_HOME=/usr/local/Cellar/hadoop/3.3.4/libexec
 export PATH=$PATH:HADOOP_HOME
 ```

（3）.刷新配置

```java
source ~/.zshrc. 使变量生效
```

（4）.配置core-site

`$HADOOOP_HOME/etc/hadoop/core-site.xml`文件中配置临时文件目录及 hdfs 文件访问地址

```java
<configuration>
  <property>
      <name>hadoop.tmp.dir</name>
      <value>/usr/local/Cellar/hadoop/hdfs/tmp</value>
  </property>
  <property>
      <name>fs.default.name</name>
      <value>hdfs://localhost:9000</value>
  </property>
</configuration>
```

（5）.配置mapped-site

`$HADOOOP_HOME/etc/hadoop/mapped-site.xml` 中配置

```java
<configuration>
     <property>
         <name>mapred.job.tracker</name>
         <value>localhost:9010</value>
     </property>
</configuration>
```

（6）.配置hdfs-site

`$HADOOOP_HOME/etc/hadoop/hdfs-site.xml` 中配置副本数

```
<configuration>
     <property>
         <name>dfs.replication</name>
         <value>2</value>
     </property>
</configuration>
```

（7）.**配置 hadoop-env**

```java
$HADOOOP_HOME/etc/hadoop/hadoop-env.sh` 中配置 `JAVA_HOME
```

（8）.初始化 HDFS NameNode

```
hdfs namenode -format
```

# 四.测试验证

## 1.启动hdfs

```
cd $HADOOP_HOME
../sbin/start-dfs.sh 
```

浏览器输入`http://localhost:9870`，出现界面则代表启动成功

终端输入hdfs dfsadmin -report可以查看hdfs report

## 2.启动yarn

```
cd $HADOOP_HOME
../sbin/start-yarn.sh 
```

浏览器输入 `http://localhost:8088`，出现界面则代表启动成功

# 五.遇到问题及解决

- **初始化 namenode 时提示 `ERROR: JAVA_HOME @@HOMEBREW_JAVA@@ does not exist.`**
   在 `$HADOOOP_HOME/etc/hadoop/hadoop-env.sh` 中配置 `JAVA_HOME`，和系统保持一致即可

- **提示 `WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable`**

  1. 从 [GitHub](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fhealchow%2Fhadoop-native-macos) 下载相应的 native 库
  2. 将 lib/native 复制到 `$HADOOP_HOME` 目录内
  3. `~/.zshrc` 添加下面配置并使用 `source` 令其生效

  

  ```shell
  export HADOOP_OPTS="$HADOOP_OPTS -Djava.library.path=$HADOOP_HOME/lib/native"
  ```



