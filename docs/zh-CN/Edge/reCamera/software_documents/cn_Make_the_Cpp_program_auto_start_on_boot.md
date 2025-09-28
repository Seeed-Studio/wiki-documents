---
description: 本wiki演示如何设置程序在启动时自动启动。
title: 使C++程序在启动时自动启动。
keywords:
  - reCamera
  - C++
  - Auto-start
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/make_the_cpp_program_auto_start_on_boot
last_update:
  date: 07/26/2025
  author: Liangyuxin

no_comments: false 

---

# 使C++程序在启动时自动启动

本文档演示如何设置程序在启动时自动启动。

## 方法1：编写启动脚本

ReCamera使用轻量级的**SysVinit系统**，并通过**/etc/inittab**执行初始化。当recamera上电时，它读取**inittab**的内容，该文件启动**/etc/init.d/rcS**，代码如下：

```
# now run any rc scripts
::sysinit:/etc/init.d/rcS
```

**rcS** 文件定义程序将按顺序启动以"S??"开头的脚本：

```
for i in /etc/init.d/S??* ;do

     # Ignore dangling symlinks (if any).
     [ ! -f "$i" ] && continue

     case "$i" in
 *.sh)
     # Source shell script for speed.
     (
  trap - INT QUIT TSTP
  set start
  . $i
     )
     ;;
 *)
     # No sh extension, so fork subprocess.
     $i start
     ;;
    esac
done
```

在 **/etc/init.d** 目录中，您可以添加程序的自启动脚本。（以"S"开头后跟数字的脚本，数字决定它们的启动执行顺序。）

名称示例：

- **S10network**：早期启动（数字越小 = 执行越早）
- **S99myprogram**：晚期启动（数字越大 = 执行越晚）

自启动脚本的内容必须包括：

- 变量定义部分
  - 它定义服务运行所需的配置参数。
  - 关键变量：
    - **DAEMON**：可执行文件的路径
    - **PIDFILE**：进程ID记录文件的位置
    - **LD_LIBRARY_PATH**：自定义库路径
- 功能函数部分
  - 它包括四个主要函数：
    - **start()**：启动服务
    - **stop()**：停止服务
    - **restart()**：重启服务
    - **status()**：检查服务状态
- 主控制逻辑
  - 它根据输入参数调用相应的函数。

您可以参考现有脚本来编写自己的脚本。以下是 **sccma-node** 的示例供参考：

```
#!/bin/sh

### BEGIN INIT INFO
# Provides:          sscma-node
# Required-Start:    $all
# Required-Stop:     $all
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start SSCMA Node at boot time
# Description:       Start SSCMA Node service.
### END INIT INFO

DAEMON=/usr/local/bin/sscma-node
DAEMON_OPTS="--start"
NAME=sscma-node
DESC="SSCMA Node Service"
PIDFILE=/var/run/$NAME.pid
LOGFILE=/var/log/$NAME.log
USER=root

# Set up the library path if necessary
LD_LIBRARY_PATH=/mnt/system/lib:/mnt/system/usr/lib:/mnt/system/usr/lib/3rd:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH

start() {
    echo "Starting $DESC: $NAME"
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            echo "$NAME is already running (PID: $PID)."
            return 1
        else
            echo "Removing stale PID file."
            rm -f $PIDFILE
        fi
    fi
    start-stop-daemon -S -q -m -b -p $PIDFILE --exec $DAEMON -- $DAEMON_OPTS
    [ $? = 0 ] && echo "OK" || echo "FAIL"
}

stop() {
    echo "Stopping $DESC: $NAME"
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            start-stop-daemon -K -q -p $PIDFILE
            rm -f $PIDFILE
            [ $? = 0 ] && echo "OK" || echo "FAIL"
        else
            echo "Process not running but PID file exists, cleaning up."
            rm -f $PIDFILE
        fi
    else
        echo "$NAME is not running."
    fi
}

restart() {
    stop
    start
}

status() {
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            echo "$NAME is running (PID: $PID)."
        else
            echo "$NAME PID file exists but process is not running."
        fi
    else
        echo "$NAME is not running."
    fi
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac

exit 0
```

然后，给你的脚本授予可执行权限：

```
sudo chmod +x {your script}
ls -l
```

将程序的可执行文件放置在指定路径，通常是：**/usr/local/bin**：

```
sudo scp {your program} /usr/local/bin
sudo chmod +x {your program}
ls -l
```

测试脚本和程序是否能正常启动：

```
sudo /etc/init.d/{your script} start
cd /usr/local/bin
sudo {your program}
```

如果成功，请重启您的 recamera。

## 方法 2：使用 opkg 安装 C++ 项目

您也可以在 C++ 项目中预配置自动启动脚本，然后将其安装到 recamera 上。

**添加 Control 目录**

在您的项目中，您需要包含以下 **control** 脚本：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/1.png" /></div>

- **preinst**（预安装脚本）
  - 它在软件包安装之前执行。此脚本的功能是：
    - 检查系统是否满足安装要求
    - 停止将被替换的旧版本服务
    - 备份现有配置文件
    - 验证依赖关系是否满足
    - 创建必要的系统用户/组
    - 执行时机：在 dpkg -i 或 apt install 期间运行，在文件部署之前。

例如：

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

- **postinst**（安装后脚本）
  - 在软件包完全安装后执行。此脚本的功能是：
    - 启动新安装的服务
    - 更新系统缓存或数据库（例如，ldconfig、update-rc.d）
    - 运行初始配置步骤
    - 设置文件权限/所有权
    - 更新替代系统（例如，update-alternatives）
    - 显示安装后说明
    - 执行时机：在 dpkg -i 或 apt install 期间运行，在所有文件部署完成后。

例如：

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor start   
fi


exit 0
```

- **prerm**（预删除脚本）
  - 在软件包卸载之前执行。此脚本的功能是：
    - 优雅地停止相关服务
    - 检查是否有进程正在使用该软件（防止强制删除）
    - 在删除前备份用户数据
    - 清理临时文件或运行时资源
    - 执行时机：在 dpkg -r 或 apt remove 期间，文件被删除之前运行。

例如：

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

**添加 rootfs 目录**

然后将自启动脚本放入相应路径：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/2.png" /></div>

将整个项目放入 Linux 交叉编译环境中进行编译和打包。在打包之前，必须检查文件是否为 Linux 兼容的 LF 行结束符格式。如果发现 CRLF 格式（Windows 风格），请先进行转换。

```
dos2unix {your files}
```

Then,

```
cd {your project}
cmake -B build -DCMAKE_BUILD_TYPE=Release .
cmake --build build
cd build && cpack
scp {your project.deb} recamera@192.168.42.1:/tmp/
```

在 recamera 终端中，使用 opkg 安装：

```
sudo opkg install /tmp/{your project.deb}
```

如果你的项目之前已经安装过，请先卸载它。

```
sudo opkg remove {your program}

sudo opkg install /tmp/{your project.deb}
```

有关更多详细信息，请参考我们的 [GitHub 仓库](https://github.com/Seeed-Studio/OSHW-reCamera-Series)。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
