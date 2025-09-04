---
description: This wiki demonstrates how to set a program to launch automatically at startup.
title: Make the C++ program auto-start on boot.
keywords:
  - reCamera
  - C++
  - Auto-start
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_the_cpp_program_auto_start_on_boot
last_update:
  date: 07/26/2025
  author: Liangyuxin

no_comments: false 

---

# Make the C++ program auto-start on boot

This document demonstrates how to set a program to launch automatically at startup.

## Method 1: Write a startup script

ReCamera uses a lightweight **SysVinit system** and performs initialization via **/etc/inittab**. When recamera is powered on, it reads the contents of **inittab** which starts the **/etc/init.d/rcS** with the following code:

```
# now run any rc scripts
::sysinit:/etc/init.d/rcS
```

The **rcS** file defines that the program will sequentially start scripts beginning with "S??":

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

In the **/etc/init.d** directory, you can add your program's auto-start script.(Scripts prefixed with "S" followed by a number, the number determine their boot execution order.)

Name example:

- **S10network**:  Starts early (lower number = earlier execution)
- **S99myprogram**: Starts late (higher number = later execution)

The content of the auto-start script must include:

- Variable Definition Section
  - It defines configuration parameters required for service operation.
  - Key Variables:
    - **DAEMON**: Path to the executable file
    - **PIDFILE**: Location of the process ID record file
    - **LD_LIBRARY_PATH**: Custom library path
- Functional Functions Section
  - It includes four main functions:
    - **start()**: Starts the service
    - **stop()**: Stops the service
    - **restart()**: Restarts the service
    - **status()**: Checks service status
- Main Control Logic
  - It calls the corresponding function based on input arguments.

You can refer to existing scripts to write your own script. Here is an example of **sccma-node** for reference:

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

Then, grant executable permissions to your script:

```
sudo chmod +x {your script}
ls -l
```

Place your program's executable file in the specified path, typically: **/usr/local/bin**:

```
sudo scp {your program} /usr/local/bin
sudo chmod +x {your program}
ls -l
```

Test whether the script and program can start normally:

```
sudo /etc/init.d/{your script} start
cd /usr/local/bin
sudo {your program}
```

If successed, restart your recamera.

## Method 2: Install the C++ project using opkg

You can also pre-configure the auto-start script within your C++ project ,then install it on the recamera.

**Add the Control directory**

In your project, you need to include the following **control** scripts:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/1.png" /></div>

- **preinst** (Pre-installation Script)
  - It executes before the package is installed.The function of this script is:
    - Check if the system meets installation requirements
    - Stop old version services that will be replaced
    - Backup existing configuration files
    - Verify dependencies are satisfied
    - Create necessary system users/groups
    - Execution Timing: Runs during dpkg -i or apt install, before files are deployed.

For example:

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

- **postinst** (Post-installation Script)
  - It executes after the package is fully installed.The function of this script is:
    - Start newly installed services
    - Update system caches or databases (e.g., ldconfig, update-rc.d)
    - Run initial configuration steps
    - Set file permissions/ownership
    - Update alternatives system (e.g., update-alternatives)
    - Display post-installation instructions
    - Execution Timing:Runs during dpkg -i or apt install, after all files are deployed.

For example:

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor start   
fi


exit 0
```

- **prerm** (Pre-removal Script)
  - It executes before the package is uninstalled.The function of this script is:
    - Stop related services gracefully
    - Check if processes are using the software (prevent forced removal)
    - Backup user data before deletion
    - Clean up temporary files or runtime resources
    - Execution Timing:Runs during dpkg -r or apt remove, before files are deleted.

For example:

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

**Add the rootfs directory**

Then put the auto-start script into the corresponding path:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/2.png" /></div>

Put the entire project into a Linux cross-compilation environment for compilation and packaging. Before packaging, you must check whether the files are in Linux-compatible LF line ending format. If CRLF format (Windows-style) is found, convert them first.

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

In the recamera terminal,use opkg to install:

```
sudo opkg install /tmp/{your project.deb}
```

If your project was previously installed, uninstall it first.

```
sudo opkg remove {your program}

sudo opkg install /tmp/{your project.deb}
```

For more details, please refer to our [GitHub repository](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
