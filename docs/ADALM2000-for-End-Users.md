---
name: ADALM2000-M2K CN Version for End Users
category: 
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 102991188
tags:
---


## 1.ADALM2000简介

ADALM2000主动学习模块配套硬件和外设：

- 带差分输入的双通道示波器
- 双通道任意函数发生器
- 16通道数字逻辑分析仪（3.3V CMOS，容差范围1.8V~5V，速率100MS/s）
- 16通道模式发生器（3.3V CMOS，速率100MS/s）
- 可用于连接多个仪器的双输入/输出数字触发信号（3.3V CMOS）
- 双通道电压表（交/直流 ±20V）
- 网络分析仪——电路的伯德图、奈奎斯特图和尼科尔斯传输特性曲线，范围：1Hz ~ 10MHz
- 频谱分析仪——功率谱和频谱测量（噪声基底、无杂散动态范围、信噪比及总谐波失真等）
- 数字总线分析仪（串行外设接口、I²C、通用异步收发传输器、并行）
- 两个可编程电源（0…+5V、0…-5V）
- 用于主机连接流数据的USB
    - USB 2（480 Mbps）
    - 用于与RF设备通信的libiio USB设备
    - 网络设备
        - 远程网络驱动接口规范（[RNDIS](https://en.wikipedia.org/wiki/RNDIS)）
        - 默认情况下IP地址为 `192.168.2.1`
    - USB串行设备
        - 通过USB通信设备类抽象控制模型（[USB CDC ACM](https://en.wikipedia.org/wiki/USB_communications_device_class)）规范访问M2K设备上的Linux控制台
    - 大容量存储设备：主机会将其识别为一个磁盘，磁盘里您将能看见软件更新链接和设备序列号
- 外部电源
    - 外部适配器 ([可选用此款来自 Seeed 的适配器](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-17798475645.13.2a7833dbPEbZ47&id=600246322249))


### 1.1 为什么叫 “ADALM2000”

“ADALM2000”名称延续自第一代产品“ADALM1000”，ADALM2000的性能相比前一代产品有了很大的提升。与昂贵且体积庞大的传统实验设备不同，它将高性能实验设备缩小到口袋大小，为电气工程专业的学生和爱好者们探索频率达数十兆赫兹的信号与系统提供了便利条件。


### 1.2 ADALM2000 内部概览

**模块图**



<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/m2k_simple_block_diagram.png" alt="m2k simple block diagram" title="m2k simple block diagram" />
  <figcaption><b>图 1</b>. <i>m2k simple 模块图</i></figcaption>
</figure>
</div>



**引脚图**


<div align="center">
<figure>
  <a href="https://raw.githubusercontent.com/SeeedDocument/ADALM2000-M2K-CN-Version/master/img/adalm2000_pinout.png" target="_blank"><img src="https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/adalm2000_pinout.png" alt="ADALM2000 Pinout" title="ADALM2000 Pinout" />
  <figcaption><b>图 2</b>. <i>ADALM2000 引脚图</i></figcaption></a>
</figure>
</div>


**接线图**


<div align="center">
<figure>
  <a href="https://raw.githubusercontent.com/SeeedDocument/ADALM2000-M2K-CN-Version/master/img/adalm2000-pin-wires.png" target="_blank"><img src="https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/adalm2000-pin-wires.png" alt="ADALM2000 Pin Wires" title="ADALM2000 Pin Wires" />
  <figcaption><b>图 3</b>. <i>ADALM2000 连线图</i></figcaption></a>
</figure>
</div>



## 2.快速入门指南

对于大多数不熟悉产品或未仔细阅读说明书的用户，以下是快速启动的基本操作：

- 1、安装驱动程序
    - [Windows](#31-windows-driver)、[Linux](#32-linux-driver) 或 [MAC](#33-mac-os-x-diver)
- 2、连接USB，检查设备是否正常工作
    - [Windows](#31-windows-driver)、[Linux](#32-linux-driver) 或 [MAC](#33-mac-os-x-diver)
- 3、安装 [Scopy](http://wiki.seeedstudio.com/ADALM2000-M2K-Scopy)



## 3.软件介绍及设备驱动安装

### 3.1 Windows Driver (驱动)

ADALM-PLUTO和ADALM2000的软件有几个方面不同: 

- 设备驱动程序，它允许您的PC正确设置PC和实际设备之间的通信。
- 应用程序代码，比如MATLAB, Simulink, GNU Radio, iio-oscilloscope (即osc),或scopy

下载和运行 driver installer 即可安装驱动程序。

[Windows USB drivers for PlutoSDR and M2k (Windows 32-bit / 64-bit)](https://github.com/analogdevicesinc/plutosdr-drivers-win/releases)


!!!Tip
    安装包支持Windows 10, Windows 8.1, Windows 8, Windows 7 Service Pack 1。如果遇到问题，[请向我们反馈](http://ez.analog.com/community/university-program)。


完成后，您应该会看到如下图片所示的： 


<div align="center">
<figure>
  <a href="https://raw.githubusercontent.com/SeeedDocument/ADALM2000-M2K-CN-Version/master/img/diver-ready.jpg" target="_blank"><img src="https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/diver-ready.jpg" alt="ADALM2000 Diver ready" title="ADALM2000 Diver ready" />
  <figcaption><b>图 4</b>. <i>Diver 安装完成</i></figcaption></a>
</figure>
</div>



####　3.1.1 驱动卸载

进入控制面板，选择程序和功能，双击或右键选择卸载。卸载 PlutoSDR-M2k-USB-Win-Drivers 程序包时会自动卸载 Windows Driver Packages (USBser, WinUSB和Net)。


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/drivers-uninst.png" alt="ADALM2000 Diver uninstall" title="ADALM2000 Diver uninstall" />
  <figcaption><b>图 5</b>. <i>Diver 卸载</i></figcaption>
</figure>
</div>



####　3.1.2 USB设备


安装驱动程序并插入设备（Pluto or M2K）后，以下子系统将会可用：

- USB复合设备（单个USB装置内含多种功能，在操作系统中显示为多个设备）
- USB以太网/RNDIS装置（远程网络驱动接口规范 [RNDIS](https://en.wikipedia.org/wiki/RNDIS) 是主要运用在USB上层的微软专有协议，它为大多数版本的 Windows, Linux及OS X操作系统提供了虚拟以太网连接。对于主机而言，USB设备就是一张外部以太网卡。）
- USB大容量存储（[USB大容量存储](https://en.wikipedia.org/wiki/USB_mass_storage_device_class)是由USB开发者论坛定义的一系列协议，它让任何主机计算设备都能访问这台USB设备，并允许主机和USB设备之间进行文件传输。对于主机而言，USB设备就是一个外部硬盘驱动器。）
- 串行控制台（115200-8N1），在COM15上表示为此，但在您的PC上会有所不同。
- IIO USBD。
- Linux文件保存装置USB设备（确保USB大容量存储正常工作）


####　3.1.3 串行端口

您需要找到您最喜欢的终端程序，这里列举了一些我们使用的程序。（我们不提供支持，如果遇到问题，请自行查询网络或谷歌。）

- [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
- [Tera Term](https://en.osdn.jp/projects/ttssh2/releases/)
- 或者其他终端程序


终端设置为115200波特、8位、无奇偶校验、1位停止位，表示为115200-8N1。默认用户名为 `root`，根密码为 `analog` 

找到串行端口（它会随着您每次插入设备而改变）以检查设备管理器（见上文）。


####　3.1.4 大容量存储

打开驱动器，以下图为例，双击进入D盘以访问info.html页面。


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/pluto_drive.png" alt="pluto drive" title="pluto_drive" />
  <figcaption><b>图 6</b>. <i>大容量存储驱动器</i></figcaption>
</figure>
</div>


####　3.1.5 以太网


!!!Danger
    - 像Pluto或M2K上的大部分网络设置一样，以太网的使用非常方便，但这也意味着伴有一定的风险。
    - 例如，Pluto的根密码是 `analog`，我们将其发布到网上，这可能导致有人通过IP连接控制此设备并将其用于恶意目的。
    - 在网络和Pluto默认映像连接时，请勿将该网络直接连上互联网。


很遗憾，主机不能解析USB设备的IP地址，您在任何类型的网络工作之前都需要知道这一点。要确定IP地址，这里会介绍两种主要的方法：


- **1.确定IP地址**

IP地址是由设备设置的。进入ADALM-PLUTO大容量存储设备，在 `info.html` 页面可以找到相关信息。进入页面后，点击页面顶端的 `version`：


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/version_button.png" alt="version" title="version" />
  <figcaption><b>图 7</b>. <i>在版本信息中查看IP</i></figcaption>
</figure>
</div>


然后就可以看到Pluto和主机的IP地址。


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/pluto_ip_addr.png" alt="check ip" title="check ip" />
  <figcaption><b>图 8</b>. <i>在版本信息中查看IP</i></figcaption>
</figure>
</div>


在此例中，Pluto设备的IP地址为 `192.168.2.1`（默认下所有设备都是如此），如果您需要改变IP（如果您有多个设备）时，请查看 [customizing Pluto](https://wiki.analog.com/university/tools/pluto/users/customizing) 文档。


- **2.从串口查看**

打开您常用的串行应用程序, 您将看到如下的界面：


```
Welcome to Pluto
pluto login: root
Password: analog
Welcome to:

  ______ _       _        _________________
  | ___ \ |     | |      /  ___|  _  \ ___ \
  | |_/ / |_   _| |_ ___ \ `--.| | | | |_/ /
  |  __/| | | | | __/ _ \ `--. \ | | |    /
  | |   | | |_| | || (_) /\__/ / |/ /| |\ \
  \_|   |_|\__,_|\__\___/\____/|___/ \_| \_|

http://wiki.analog.com/university/tools/pluto

# ifconfig usb0
usb0      Link encap:Ethernet  HWaddr 00:05:F7:64:30:10
          inet addr:192.168.2.1  Bcast:192.168.2.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:502 errors:0 dropped:115 overruns:0 frame:0
          TX packets:7 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:66132 (64.5 KiB)  TX bytes:2420 (2.3 KiB)

```


- **3.IIO 设备**

IIO设备显示在设备管理器中，您可以让它与设备建立本地连接。
打开Windows控制台，您应该会看见以下内容：


```
c:/ iio_info -s
Library version: 0.16 (git tag: 5cdeaaa)
Compiled with backends: local xml ip usb serial
Available contexts:
	0: 0456:b673 (Analog Devices Inc. PlutoSDR (ADALM-PLUTO)), serial=104473222a87000618000600473ed57ae0 [usb:3.8.5]

c:\ iio_attr -a -C
Using auto-detected IIO context at URI "usb:3.8.5"
IIO context with 8 attributes:
local,kernel: 4.6.0-g651ed13
usb,idVendor: 0456
usb,idProduct: b673
usb,release: 2.0
usb,vendor: Analog Devices Inc.
usb,product: PlutoSDR (ADALM-PLUTO)
usb,serial: 104473222a87000618000600473ed57ae0
usb,libusb: 1.0.22.11312

```


### 3.2 Linux Driver (驱动)

请先确保内核中安装了以下模块：

- cdc-acm,cdc_ether
- rndis_host
- rndis_wlan
- usbnet

大部分现在发行的版本中，默认情况下以上模块均会被安装和编译，您只需将USB数据线插入Linux设备。我们在以下系统中进行了测试和验证：

- Ubuntu 16.04 LTS
- Red Hat Enterprise Linux 7 <sup>1)</sup>
- SUSE Linux Enterprise Desktop 12 <sup>2)</sup>
- Debian 8.x
- Debian 9.1
- SUSE Leap 15


>1)  我们的支持服务遵循Red Hat关于RHEL次要版本的支持政策。  

>2)  我们的支持服务遵循SUSE关于Enterprise Desktop次要版本的支持政策。

ADALM-PLUTO和ADALM2000在其他发行的版本中可能也能使用，但我们所能提供的技术支持十分有限。  

没有root权限时，为了访问某些USB的功能，建议安装PlutoSDR或ADALM2000 udev rules。只需下载 [53-adi-plutosdr-usb.rules](https://raw.githubusercontent.com/analogdevicesinc/plutosdr-fw/master/scripts/53-adi-plutosdr-usb.rules)或 [53-adi-m2k-usb.rules](https://raw.githubusercontent.com/analogdevicesinc/m2k-fw/master/scripts/53-adi-m2k-usb.rules) 并将其复制到 `/etc/udev/rules.d/` 文件夹中即可，您也可以使用这个 [plutosdr-m2k-udev.deb package](https://wiki.analog.com/_media/university/tools/pluto/drivers/plutosdr-m2k-udev_1.0_amd64.deb) 同时安装两者。安装debian包时，使用以下两者中任意一个即可：

```
sudo apt-get install ./plutosdr-m2k-udev.deb
```
或

```
sudo dpkg -i plutosdr-m2k-udev.deb
```

之后重新加载rules或重启udev时，只需使用

```
udevadm control --reload-rules
```
或
```
sudo service udev restart
```


####　3.2.1 Dmesg实例

插入Pluto或M2K时，您可以看到内核信息：

```
[ 1776.708333] usb 8-2: new high-speed USB device number 3 using ehci-pci
[ 1776.843799] usb 8-2: New USB device found, idVendor=0456, idProduct=b673
[ 1776.843811] usb 8-2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[ 1776.843818] usb 8-2: Product: PLUTO
[ 1776.843824] usb 8-2: Manufacturer: Analog Devices Inc.
[ 1776.843830] usb 8-2: SerialNumber: 00000001
[ 1776.853016] rndis_host 8-2:2.0 usb0: register 'rndis_host' at usb-0000:00:1d.7-2, RNDIS device, 9e:18:bb:fa:07:c6
[ 1776.853957] cdc_acm 8-2:2.2: This device cannot do calls on its own. It is not a modem.
[ 1776.854080] cdc_acm 8-2:2.2: ttyACM0: USB ACM device
[ 1776.855371] usb-storage 8-2:2.4: USB Mass Storage device detected
[ 1776.855559] scsi9 : usb-storage 8-2:2.4
[ 1777.852893] scsi 9:0:0:0: Direct-Access     Linux    File-Stor Gadget 0406 PQ: 0 ANSI: 2
[ 1777.853329] sd 9:0:0:0: Attached scsi generic sg2 type 0
[ 1777.854618] sd 9:0:0:0: [sdb] 16384 512-byte logical blocks: (8.38 MB/8.00 MiB)
[ 1777.856248] sd 9:0:0:0: [sdb] Write Protect is off
[ 1777.856252] sd 9:0:0:0: [sdb] Mode Sense: 0f 00 00 00
[ 1777.856863] sd 9:0:0:0: [sdb] Write cache: enabled, read cache: enabled, doesn't support DPO or FUA
[ 1777.859892]  sdb:
[ 1777.862868] sd 9:0:0:0: [sdb] Attached SCSI removable disk
[ 1778.022282] FAT-fs (sdb): utf8 is not a recommended IO charset for FAT filesystems, filesystem will be case sensitive!

```

展示以太网、串行和大容量存储三种设备及与标准Linux系统的接口程序。如果您看见了以下内容：

```
[ 84.257337] usb usb1-port2: unable to enumerate USB device
```

解决方法是使用外部集线器。


####　3.2.2 串行端口

!!!Note
        对于suse或其他Linux版本，确保您也属于“dialout”组别。


```
analog@imhotep:~$ cat ~/.kermrc
set line /dev/ttyACM0
set speed 115200
set carrier-watch off
set flow-control none
analog@imhotep:~$ kermit -l /dev/ttyACM0 -b 115200
C-Kermit 9.0.302 OPEN SOURCE:, 20 Aug 2011, for Linux+SSL+KRB5 (64-bit)
 Copyright (C) 1985, 2011,
  Trustees of Columbia University in the City of New York.
Type ? or HELP for help.
(/home/analog/github/iio-oscilloscope/) C-Kermit>c
Connecting to /dev/ttyACM0, speed 115200
 Escape character: Ctrl-\ (ASCII 28, FS): enabled
Type the escape character followed by C to get back,
or followed by ? to see other options.
----------------------------------------------------

Login timed out after 60 seconds

Welcome to Pluto
pluto login: root
Password: analog
# uname -a
Linux pluto 4.6.0-g88f1b2c #7 SMP PREEMPT Wed Nov 2 18:21:13 CET 2016 armv7l GNU/Linux
# exit

Welcome to Pluto
pluto login: Ctrl-\
(Back at imhotep.analog.com)
----------------------------------------------------
(/home/analog/github/iio-oscilloscope/) C-Kermit>exit
Closing /dev/ttyACM0...OK

```

####　3.2.3 大容量存储

```
analog@imhotep:~$ mount | grep -i pluto
/dev/sdb1 on /media/analog/PlutoSDR type vfat (rw,nosuid,nodev,relatime,uid=1000,gid=1000,fmask=0022,dmask=0022,codepage=437,iocharset=utf8,shortname=mixed,showexec,utf8,flush,errors=remount-ro,uhelper=udisks2)
analog@imhotep:~$ ls -l /media/analog/PlutoSDR/
total 8
-rw-r--r-- 1 analog analog  206 Dec 31  1979 config.txt
-rw-r--r-- 1 analog analog 4721 Dec 31  1979 info.html
analog@imhotep:~$ firefox /media/analog/PlutoSDR/info.html

```

####　3.2.4 以太网


!!!Danger
        - 像Pluto或M2K上的大部分网络设置一样，以太网的使用非常方便，但这也意味着伴有一定的风险。
        - 例如，Pluto的根密码是`analog`，我们将其发布到网上，这可能导致有人通过IP连接控制此设备并将其用于恶意目的。
        - 在网络和Pluto默认映像连接时，切勿将该网络直接连上互联网。


很遗憾，主机不能解析USB设备的IP地址，您在任何类型的网络工作之前都需要知道这一点。要确定IP地址，这里会介绍两种主要的方法：



```
analog@imhotep:~$ /sbin/ifconfig
enx00e022d6d804: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.2.10  netmask 255.255.255.0  broadcast 192.168.2.255
        inet6 fe80::2e0:22ff:fed6:d804  prefixlen 64  scopeid 0x20<link>
        ether 00:e0:22:d6:d8:04  txqueuelen 1000  (Ethernet)
        RX packets 4  bytes 1030 (1.0 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 47  bytes 10604 (10.3 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
analog@imhotep:~$ ip addr show
7: c: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN group default qlen 1000
    link/ether 00:e0:22:d6:d8:04 brd ff:ff:ff:ff:ff:ff
    inet 192.168.2.10/24 brd 192.168.2.255 scope global dynamic enx00e022d6d804
       valid_lft 862988sec preferred_lft 862988sec
    inet6 fe80::2e0:22ff:fed6:d804/64 scope link 
       valid_lft forever preferred_lft forever

```

基于 debian 的发行版中（我的主机也是基于debian），systemd 会产生一串字符 `enx00e022d6d804`，前缀 enu*（有时候是wlu*）用于解析USB端口，剩下的 `00e022d6d804` 指的是主机USB MAC地址。USB路径并不是一成不变或可预测的（它随着您插入的端口的改变而改变），因此这串字符并不是用来表示USB路径的。


- **SSH 配置**

建议添加一个很小的文件 [ssh config file](https://github.com/analogdevicesinc/plutosdr_scripts/blob/master/ssh_config)，这个文件对于解析USB设备很有帮助。它保存在github中，提取原始文本文件很容易。如果您有 `~/.ssh/config` 文件，您可以跳过这步。如果您没有，[点击此链接](https://raw.githubusercontent.com/analogdevicesinc/plutosdr_scripts/master/ssh_config)，将其复制粘贴进系统文件 `/etc/ssh/ssh_config` 中或用户指定文件 `~/.ssh/config` 中。


```
analog@imhotep:~$ wget https://raw.githubusercontent.com/analogdevicesinc/plutosdr_scripts/master/ssh_config -O ~/.ssh/config
--2017-01-26 19:47:51--  https://raw.githubusercontent.com/analogdevicesinc/plutosdr_scripts/master/ssh_config
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 151.101.116.133
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|151.101.116.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 366 [text/plain]
Saving to: ‘~/.ssh/config’

~/.ssh/config         100%[===============>]     366  --.-KB/s    in 0s      

2017-01-26 19:47:51 (6.49 MB/s) - ‘~/.ssh/config’ saved [366/366]

```

每次Pluto启动时ssh key都会改变，因此我们希望从不保存 key （所以我们将它保存在 `/dev/null`）。由于不用一直编辑 `known_hosts` 文件，操作会变得简单，但却容易遭到攻击。

```
adi-mm:tests analogdevices$ ssh plutosdr
Warning: Permanently added 'pluto' (ECDSA) to the list of known hosts.
root@pluto's password: analog
# uname -a
Linux pluto 4.6.0-08511-gc1315e6-dirty #247 SMP PREEMPT Mon Oct 24 16:46:25 CEST 2016 armv7l GNU/Linux
# exit
Connection to 192.168.2.1 closed.
adi-mm:tests analogdevices$ 

```

如果您安装了 `sshpass`，则不需要手动输入密码：

```
analog@imhotep:~/pluto$ sshpass -panalog ssh plutosdr
Warning: Permanently added 'pluto' (ECDSA) to the list of known hosts.
Welcome to:
______ _       _        _________________
| ___ \ |     | |      /  ___|  _  \ ___ \
| |_/ / |_   _| |_ ___ \ `--.| | | | |_/ /
|  __/| | | | | __/ _ \ `--. \ | | |    /
| |   | | |_| | || (_) /\__/ / |/ /| |\ \
\_|   |_|\__,_|\__\___/\____/|___/ \_| \_|

http://wiki.analog.com/university/tools/pluto
# 

```


- **IIO devices**

对于SUSE，进入https://software.opensuse.org/package/libiio 选择 repo 并一键安装。

```
analog@imhotep:~$ sudo apt-get install libiio-utils
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following NEW packages will be installed:
  libiio-utils
0 upgraded, 1 newly installed, 0 to remove and 191 not upgraded.
Need to get 13.9 kB of archives.
After this operation, 74.8 kB of additional disk space will be used.
Get:1 http://ftp.us.debian.org/debian stretch/main amd64 libiio-utils amd64 0.7-1 [13.9 kB]
Fetched 13.9 kB in 0s (70.1 kB/s)     
Selecting previously unselected package libiio-utils.
(Reading database ... 279782 files and directories currently installed.)
Preparing to unpack .../libiio-utils_0.7-1_amd64.deb ...
Unpacking libiio-utils (0.7-1) ...
Setting up libiio-utils (0.7-1) ...

```

确保您可以找到IIO设备：


```
analog@imhotep:~$ iio_info -n 192.168.2.1 | grep device
IIO context has 5 devices:
	iio:device0: adm1177
	iio:device1: ad9361-phy
	iio:device2: xadc
	iio:device3: cf-ad9361-dds-core-lpc
	iio:device4: cf-ad9361-lpc

```

从IIO设备缓存区中读取：

```
analog@imhotep:~$ iio_readdev -n 192.168.2.1 -s 64 cf-ad9361-lpc | hexdump -x
0000000    ff8d    003b    002a    0013    006c    0045    ffdb    0001
0000010    ffc1    ffd5    ffc0    0030    ffbf    0068    0042    008f
0000020    0027    007e    fff5    ffe2    ffea    ffbb    ffd1    0039
0000030    ffd1    006e    0030    0058    0025    0034    001b    ffa0
0000040    ffde    ffe9    ff88    006a    ffff    0038    0071    0012
0000050    0031    ffdf    ffd7    ffc3    ff72    ffed    ffae    0016
0000060    0002    005d    001c    0031    ffff    ffef    ffec    ffe9
0000070    ff97    fff6    ffac    0024    0012    0047    00d6    0095
0000080    0087    0076    ffe4    0036    ff96    fffa    ff6b    0047
0000090    ffd8    0068    008e    0040    0133    ffc8    006a    ffc4
00000a0    ff8d    ff9d    ff89    ff9d    0005    0012    002c    0073
00000b0    0036    005c    006c    fff6    005d    ffff    fffc    ffce
00000c0    ffbc    ffdc    fff5    004d    0037    008a    004b    0045
00000d0    0044    ffad    0012    ff90    fff8    ffa3    ffa6    ffef
00000e0    ffe8    0079    0086    0097    005e    0041    005f    0005
00000f0    007b    ffe6    0025    ffa3    ffef    0011    ffef    0044

```


### 3.3 Mac OS X Diver (驱动)


确保安装以下驱动程序：  

- [HoRNDIS](http://joshuawise.com/horndis)（发音为“horrendous”）是一个Mac OS X驱动程序，它允许用户使用RNDIS通过网络访问Pluto，匹配Mac OS X版本10.6.8到10.12。虽然安装时您需要注意某些驱动程序，但经过测试，HoRNDIS在作者本人和其他人的PC上能全时运行。然而毕竟RNDIS是微软指定的规范，苹果是不可能原生支持的。


驱动程序和文件应该兼容：  

- macOS El Capitan 10.11
- macOS Yosemite 10.10

安装完成后会要求重启电脑。


####　3.3.1 串行端口

```
adi-mm:tests analogdevices$ ls -l /dev/tty.* 
crw-rw-rw-  1 root  wheel   17,   0 Nov  7 15:13 /dev/tty.Bluetooth-Incoming-Port
crw-rw-rw-  1 root  wheel   17,   2 Nov  7 15:28 /dev/tty.usbmodem1414
adi-mm:tests analogdevices$ screen /dev/tty.usbmodem1414 115200

Welcome to Pluto
pluto login: root
Password: analog
# uname -a
Linux pluto 4.6.0-08511-gc1315e6-dirty #247 SMP PREEMPT Mon Oct 24 16:46:25 CEST 2016 armv7l GNU/Linux
# 
CNTRL-A CNTRL-\
Really quit and kill all your windows [y/n] y
[screen is terminating]
adi-mm:tests analogdevices$ 

```

####　3.3.2 大容量存储

```
adi-mm:tests analogdevices$ mount | grep Pluto
/dev/disk1s1 on /Volumes/PlutoSDR (msdos, local, nodev, nosuid, noowners)

```

####　3.3.3 以太网

!!!Danger
        - 像Pluto或M2K上的大部分网络设置一样，以太网的使用非常方便，但这也意味着伴有一定的风险。
        - 例如，Pluto的根密码是 `analog`，我们将其发布到网上，这可能导致有人通过IP连接控制此设备并将其用于恶意目的。
        - 在网络和Pluto默认映像连接时，请勿将该网络直接连上互联网。


很遗憾，主机不能解析USB设备的IP地址，您在任何类型的网络工作之前都需要知道这一点。要确定IP地址，这里会介绍两种主要的方法：

当 [HoRNDIS](http://joshuawise.com/horndis) 安装完成后，当您点击System Preferences → Network时应该看见以下内容：


![](https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/mac-warning.jpg)



<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/ADALM2000-M2K-CN-Version/raw/master/img/screen_shot_2017-01-12_at_2.36.55_pm.png" alt="PlutoSDR" title="PlutoSDR" />
  <figcaption><b>图 9</b>. <i>查看 PlutoSDR 加载状态</i></figcaption>
</figure>
</div>

程序正确安装时，`dmesg` 中会显示：

```
adi-mm:build analogdevices$ sudo dmesg
HoRNDIS: init: HoRNDIS tethering driver for Mac OS X, by Joshua Wise (rel8 final)
HoRNDIS: probe: probe: came in with a score of 60000
HoRNDIS: message: unknown message type e000401f
HoRNDIS: message: unknown message type e0000230
HoRNDIS: probe: probe: looks like we're good (2/2/255)
USBMSC Identifier (non-unique): 100000235523730700230012090216da47 0x456 0xb673 0x406, 2
HoRNDIS: message: kIOMessageServiceIsAttemptingOpen
HoRNDIS: openInterfaces: data interface: okay, I got one, and it was a 0x0a/0x00/0x00
HoRNDIS: message: kIOMessageServiceIsAttemptingOpen
HoRNDIS: rndisInit: their MTU 1486
HoRNDIS: setMaxTransferUnit: Excuse me, but I said you could have an MTU of 1486, and you just tried to set an MTU of 1500.  Good try, buddy.
HoRNDIS: init: starting up with MTU 1486
en4: attached with 4 suspended link-layer multicast membership(s)
HoRNDIS: message: kIOMessageServiceIsAttemptingOpen
HoRNDIS: message: kIOMessageServiceIsRequestingClose
HoRNDIS: message: kIOMessageServiceIsAttemptingOpen
HoRNDIS: message: kIOMessageServiceIsRequestingClose
en4: failed to restore 4 suspended link-layer multicast membership(s) (err=102)

```

```
adi-mm:tests analogdevices$ ifconfig  | grep -B 3 -A 3 192
en4: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1486
	ether 00:e0:22:6d:b2:d8 
	inet6 fe80::2e0:22ff:fe6d:b2d8%en4 prefixlen 64 scopeid 0xa 
	inet 192.168.2.10 netmask 0xffffff00 broadcast 192.168.2.255
	nd6 options=1<PERFORMNUD>
	media: autoselect
	status: active

```

**SSH 配置**

建议添加一个很小的文件 [ssh config file](https://github.com/analogdevicesinc/plutosdr_scripts/blob/master/ssh_config)，这个文件对于解析USB设备很有帮助。它保存在github中，提取原始文本文件很容易。如果您有 `~/.ssh/config` 文件，您可以跳过这步。如果您没有，[点击此链接](https://raw.githubusercontent.com/analogdevicesinc/plutosdr_scripts/master/ssh_config)，将其复制粘贴进系统文件 `/etc/ssh/ssh_config` 中或用户指定文件 `~/.ssh/config` 中。


```
analog@imhotep:~$ wget https://raw.githubusercontent.com/analogdevicesinc/plutosdr_scripts/master/ssh_config -O ~/.ssh/config
--2017-01-26 19:47:51--  https://raw.githubusercontent.com/analogdevicesinc/plutosdr_scripts/master/ssh_config
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 151.101.116.133
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|151.101.116.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 366 [text/plain]
Saving to: ‘~/.ssh/config’

~/.ssh/config         100%[===============>]     366  --.-KB/s    in 0s      

2017-01-26 19:47:51 (6.49 MB/s) - ‘~/.ssh/config’ saved [366/366]

```

每次Pluto启动时ssh key都会改变，因此我们希望从不保存 key （所以我们将它保存在 `/dev/null`）。由于不用一直编辑 `known_hosts` 文件，操作会变得简单，但却容易遭到攻击。

```
adi-mm:tests analogdevices$ ssh plutosdr
Warning: Permanently added 'pluto' (ECDSA) to the list of known hosts.
root@pluto's password: analog
# uname -a
Linux pluto 4.6.0-08511-gc1315e6-dirty #247 SMP PREEMPT Mon Oct 24 16:46:25 CEST 2016 armv7l GNU/Linux
# exit
Connection to 192.168.2.1 closed.
adi-mm:tests analogdevices$ 

```

如果您安装了 `sshpass`，则不需要手动输入密码：

```
analog@imhotep:~/pluto$ sshpass -panalog ssh plutosdr
Warning: Permanently added 'pluto' (ECDSA) to the list of known hosts.
Welcome to:
______ _       _        _________________
| ___ \ |     | |      /  ___|  _  \ ___ \
| |_/ / |_   _| |_ ___ \ `--.| | | | |_/ /
|  __/| | | | | __/ _ \ `--. \ | | |    /
| |   | | |_| | || (_) /\__/ / |/ /| |\ \
\_|   |_|\__,_|\__\___/\____/|___/ \_| \_|

http://wiki.analog.com/university/tools/pluto
# 

```

## 4.ADALM2000 (M2K) 固件更新

更新固件最简单的方法是使用包含在默认映像里的大容量存储设备，但当用户不使用默认映像时该方法可能失效。

!!!Attention
        将其他固件映像加载到M2K这样的设备时存在一定的[安全风险](https://en.wikipedia.org/wiki/Firmware#BADUSB)。由于我们的学习工具向来都是开放且无障碍的，请从受信任途径获取固件映像。


ADI 默认固件镜像下载地址：

- [Latest ADALM2000 (M2k) Release](https://github.com/analogdevicesinc/m2k-fw/releases/latest)


以上 ZIP 下载包里应该包括以下文件：

|文件名|用途|
|------|-------|
|boot.dfu|用于第一阶段引导加载程序和U-boot |
|boot.frm|第一阶段引导加载程序和U-boot的配置环境|
|m2k.dfu|M2K固件的 DFU 文件，内含FPGA位文件、Linux内核（所有驱动）和基于RAM的文件系统|
|m2k.frm|M2K固件的 固件 文件，内含FPGA位文件、Linux内核（所有驱动）和基于RAM的文件系统|
|uboot-env.dfu|包含默认U-boot 配置环境的 DFU 文件|


### 4.1 使用大容量存储更新

将 `m2k.frm` 复制到大容量存储设备中，然后将其弹出。LED1将会快速闪烁。

!!!Danger
        LED1快速闪烁时请勿将设备移除！否则可能造成不可逆损坏。

#### 4.1.1 Windows/OSX 固件更新

- 1、打开M2K大容量存储设备
- 2、下载并打开固件文件
- 3、将文件复制到大容量存储设备
- 4、弹出大容量存储设备（不要强行拔出）
- 5、LED1开始闪烁，这意味着设备正在执行程序，期间请勿移除电源（或USB），过程大约4分钟。
- 6、稍等片刻，请勿提前拔出设备。
- 7、程序执行结束，大容量存储设备将重新显示出来。
- 8、移除设备并正常使用。

#### 4.1.2 Linux 固件更新

**GUI**  

**Command Line （命令行）**

与GUI指令完全相同，复制文件、弹出设备和重启设备。由于弹出需要基础设备，操作会相对复杂一些。（需要 `/dev/sdb` 而非 `/dev/sdb1`）

```
analog@imhotep:~/m2k$ cp ./m2k.frm /media/analog/ADALM2000/
analog@imhotep:~/m2k$ mount | grep ADALM2000 | awk '{print $1}'
/dev/sdb1 
analog@imhotep:~/m2k$ sudo eject /dev/sdb

```

### 4.2 使用 DFU 更新

[USB Device Firmware Upgrade (DFU)](https://en.wikipedia.org/wiki/USB#Device_Firmware_Upgrade) 是由 USB 开发者论坛提供的官方 USB 设备类型规范。它指定了一种与供应商和设备无关的更新USB设备固件的方法。其思路是保留一个独立于供应商的升级工具作为操作系统的一部分，之后可以下载到设备中（给定一个特定的固件映像）。固件升级期间（M2K处于DFU模式时），M2K改变操作模式（不再使用标准PID/VID，而是成为一个闪存编程器）。

#### 4.2.1 进入 DFU 模式

- **如何手动进入DFU模式？**

通常情况下，推荐的固件升级是通过大容量存储设备。手动进入DFU模式有三种方法：  

- 1、用牙签、回形针之类的小物件按压设备按键，并接上USB数据线供电。

- 2、在设备Linux控制台中输入device_reboot sf。进入控制台有三种方法：
        
    - USB控制台USB CDC ACM，即使用putty、minicom或tera Term等串口工具的ttyACM0
    - 使用 [ADALM-JTAGUART](https://wiki.analog.com/university/tools/jtaguart) 的 UART 工具台
    - 使用 ssh/slogin 的网络控制台

- 3、直接在U-boot串行控制台中输入：`run dfu_sf`。只有使用 [ADALM-JTAGUART](https://wiki.analog.com/university/tools/jtaguart) 时才能访问 uboot 命令控制台


- **设备何时会自动进入DFU模式？**  

启动多组件FIT（Flattened Image Tree）映像失败时设备将进入DFU模式，原因可能是之前的固件更新错误或损坏导致的校验失败。


- **如何检查设备是否处于DFU模式？**

设备处于DFU模式时，DONE LED灯灭而LED1灯常亮.


#### 4.2.2 在 DFU 模式下更新

如何使用DFU模式更新固件？如何重写uboot默认环境？

- **Windows**  

M2K 驱动程序包捆绑了一个 dfu 小程序。[UPDATE.BAT](https://raw.githubusercontent.com/analogdevicesinc/plutosdr_scripts/master/UPDATE.BAT) 是简化升级过程的 Windows 命令控制台批处理脚本。

- 1、下载并保存 [UPDATE.BAT](https://raw.githubusercontent.com/analogdevicesinc/plutosdr_scripts/master/UPDATE.BAT)
- 2、下载并解压最新的 [M2k release](https://github.com/analogdevicesinc/m2k-fw/releases)
- 3、打开Windows命令提示符
- 4、以m2k.dfu文件所在路径执行UPDATE.BAT。（如果需要重写默认的uboot环境，使用 uboot-env.dfu文件）
- 5、等待脚本执行完毕


```
Microsoft Windows [Version 6.1.7601]
Copyright (c) 2009 Microsoft Corporation.  All rights reserved.

C:\tmp>UPDATE.BAT c:\tmp\m2k.dfu
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Opening DFU capable USB device...
ID 0456:b674
Run-time device DFU version 0110
Claiming USB DFU Interface...
Setting Alternate Setting #1 ...
Determining device status: state = dfuIDLE, status = 0
dfuIDLE, continuing
DFU mode device DFU version 0110
Device returned transfer size 4096
Copying data from PC to DFU device
Download        [=========================] 100%      8694467 bytes
Download done.
state(7) = dfuMANIFEST, status(0) = No error condition is present
state(2) = dfuIDLE, status(0) = No error condition is present
Done!

C:\tmp>

```

- **Linux**  

```
dfu-util -a firmware.dfu -D m2k.dfu

```

`m2k.dfu` 是 dfu 格式的固件文件

- **OSX**

OSX 默认安装是不含 `dfu-util` 文件的，您可以使用 brew 指令进行安装

```
brew install dfu-util

```

升级固件与Linux相同:

```
dfu-util -a firmware.dfu -D m2k.dfu

```

`m2k.dfu` 是 dfu 格式的固件文件


## 5. Scopy 使用指南


Scope是一个具有强大信号分析能力的多功能软件工具包。

[Scopy 使用指南](http://wiki.seeedstudio.com/ADALM2000-M2K-Scopy)


## 6. Alice 使用指南

本文档用作ALICE桌面软件界面的用户指南，该界面是为与ADALM2000主动学习工具包硬件一起使用而编写的。 

[Alice 使用指南](http://wiki.seeedstudio.com/ADALM2000-M2K-Alice)