---
description: “夸克（Quark）”迷你开发者套件
title: “夸克（Quark）”迷你开发者套件
keywords:
- Edge Quantum_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Quantum-Mini-Linux-Development-Kit
last_update:
  date: 2/1/2023
  author: Matthew
---

# “夸克（Quark）”迷你开发者套件

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Quantum-Mini-Linux-Dev-Kit.png)

夸克迷你开发者套件Atom-N可能是市面上最小的Linux卡片电脑, 本套件包含一个搭载四核CPU的高度集成SOM核心板，以及一个多功能IO扩展底板，可以在40mm x 35mm的尺寸上运行Linux系统, 并具备出色的扩展功能。您可以将它用于搭建个人服务器、开发智能语音助手、设计机器人等场景。

开发板的核心是一块名为Quark-N的SOM核心板，它基于Allwinner H3, 架构为四核Cortex-A7 CPU + Mali400 MP2 GPU，PCBA使用6层高密度沉金PCB工艺制造，集成了完整的片上ARM-Linux系统（包含CPU、DDR、eMMC），**核心板尺寸只有惊人的2x3cm**！

此外，H3上的绝大多数GPIO都通过M.2 Key-A金手指接口引出了，以最小化底板的设计难度。Atom-N的底板原理图和PCB文件完全开源，且提供核心板的PCB库，**您可以轻松地设计两层板PCB作为底板，以实现您的有趣想法。**

> 由于核心板Quark-N上已经包含了eMMC，因此底板的设计甚至可以不考虑SD卡，理论上只要在底板上提供电源，添加一个用于终端交互的串口，就能完整地运行调试系统了！

![img](https://files.seeedstudio.com/products/114992462/connection.png)

本开发套件的底板名为 Atom-N，通过M.2接口连接Quark-N。

Atom-N上扩展搭载了麦克风、MPU6050 IMU（加速度计和陀螺仪）、板载4个按键、1.35寸的IPS显示屏、Wi-Fi/蓝牙模块、喇叭功放、两个USB-A接口、以及2.0mm排针的额外GPIO（包含I2C、SPI、UART等）。

您可以基于Atom-N方便地进行项目原型验证，然后设计自己的底板用于实际项目。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.368f1debxu4SfD&ft=t&id=631246135630"><strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
    </a>
</div>

## 产品特性[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_1)

- 体积超小 (**31mm x 22mm**) 和高度集成的四核Cortex-A7 Linux SoM
- 带有丰富外围设备和接口的底板(**40mmx35mm**) : 麦克风，陀螺仪，加速度计，4个按钮和TFT显示屏等
- 集成了完整的ARM-Linux系统以进行高级开发
- 无线连接能力(Wi-Fi + 蓝牙)
- 具有m.2接口可以轻松设计您的底板
- 广泛的应用场景，例如个人服务器，智能语音助手和机器人开发等
- USB Type-C功能：带USB-TTL可以直接用于串口登录终端

## 规格参数[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_2)

| 规格参数                 | 详情                                                         |
| :----------------------- | :----------------------------------------------------------- |
| **Quark-N SoM**          |                                                              |
| CPU                      | Allwinner H3, 四核Cortex-A7 @ 1GHz                           |
| GPU                      | ARM Mali400 MP2 GPU                                          |
| 内存                     | 512MB LPDDR3 RAM                                             |
| 存储                     | 16GB eMMC                                                    |
| 接口                     | 以太网, SPI, I2C, UART, 可复用的GPIO, MIC, LINEOUT           |
| GPIO                     | 2.0mm间距26针式接头连接器，包括USB OTG，USB串口，I2C，UART，SPI，I2S，GPIO |
| PCB                      | 6层高密度沉金设计                                            |
| 工作温度                 | 0-80°C                                                       |
| 尺寸                     | 31mmx22mm                                                    |
| **Atom-N Carrier Board** |                                                              |
| 插槽                     | Quark-N的m.2接口                                             |
| USB                      | USB 2.0×2 USB Type-C×1                                       |
| 无线连接                 | RTL8723BU:  Wi-Fi: IEEE 802.11 b/g/n @2.4GHz  蓝牙: BT V2.1/ BT V3.0/ BT V4.0 |
| 板载外设                 | 1 x 麦克风  1 x MPU6050运动传感器(陀螺仪 + 加速度计)  4 x 按钮 (GPIO-KEY, Uboot, Recovery, Reset)  1 x TFT 显示屏 |
| 外部存储                 | Micro SD卡插槽                                               |
| 尺寸                     | 40mm*35mm                                                    |

## 硬件总览[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_3)

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/hardwareoverview1.png)

## 入门指南[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_4)

### 需要准备的硬件[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_5)

- 一台开发用的电脑
- [MicroSD卡](https://www.seeedstudio.com/micro-SD-Card-with-Card-Reader-32GB-Class-10-p-4082.html) (建议大于16GB)
- 键盘和鼠标（可选）

**全志H3芯片的发热量比较大，所以Atom-N运行时建议一定要安装散热片。**

原装附赠的散热片效果比较差，建议购买专门设计的配套散热片：

![img](https://pengzhihui-markdown.oss-cn-shanghai.aliyuncs.com/img/20210111180314.png)

另外有一个带风扇的主动散热器可选，相关设计文件都是开源的也可以自己加工：

![img](https://pengzhihui-markdown.oss-cn-shanghai.aliyuncs.com/img/20210111180352.png)

### 下载最新的系统镜像[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_6)

- 点击 **[此处](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/quark-n-21-1-11.zip)** 下载最新系统镜像：

**最新版本**: 2021-1-11

**sha256**: 8f466adf56468b05d622eba27eb7b1a11ef6d4b943272984730a73ddff7cf59a

### Step.1 - 了解Quark-N的启动方式[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#step1-quark-n)

与树莓派一样，Quark-N可以通过SD卡上面烧录的镜像启动系统，但是也可以通过SOM上搭载的eMMC启动系统。启动顺序是这样的：

- 当检测到SD卡插入且包含可启动的系统时，会进入SD卡系统
- 否则如果eMMC中有可启动的系统的话，就会进入eMMC的系统

> 另外值得注意的是，不论是从SD卡启动还是从eMMC启动，当前运行系统所在的储存设备名都是`/dev/mmcblk0`，操作相关文件的时候不要弄错了。

**比较合理的开发模式是：**

1. 使用Atom-N开发套件验证您的项目，运行在SD卡中的镜像系统
2. 验证完成项目之后通过Atom-N底板将SD卡中调试好的系统通过`dd命令`等方式拷贝到eMMC
3. 设计自己的底板（无需添加SD卡），插上调试好的Quark-N顺利部署系统

### Step.2 - 给SD卡烧录镜像[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#step2-sd)

下载开源烧录软件 [balenaEtcher](https://www.balena.io/etcher/)，选择与你操作系统对应的软件版本(Windows/macOS/Linux)：

![img](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg)

选择下载好的系统镜像, 选择您的SD卡，点击Flash等待烧录完成.

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/flash-img.png)

### Step.3 - 启动系统[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#step3-)

现在将SD卡插入Atom-N的SD卡槽， **插入Type-C给开发板供电 (USB Serial direction)**

**您会看到电脑上识别到一个USB串口**，可以用这个串口登录Quark-N进行终端交互，或者用相关命令连接WiFi后通过SSH登录。

您会看见**Quark-N**上的有两个系统状态灯：

- 其中白色的为系统心跳LED，根据CPU的负载会有规律的闪烁
- 黄色的为电源指示LED，当关机时会熄灭

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/bootup-n.png)

**注意**，早批次的Atom-N插入USB Type-C的两个方向功能时不一样的，一面是USB Serial ，旋转180度后插入则为USB OTG，现在批次的会取消USB-OTG的功能，两面都为USB串口。

### 系统默认用户和密码[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_7)

- **普通用户**:

```
users: pi
password: quark
```

- **Root用户**:

```
users: root
password: quark
```

## 系统配置[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_8)

你可以使用这个`npi-config`命令来配置系统，如用户、系统语言、时区、ssh等等.

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/npi-config.png)

> 注意，系统已经默认配置好, 如果你不知道如何配置系统，请保持默认配置.

## Wi-Fi[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#wi-fi)

在这里，我们使用NetworkManager来管理网络，但请按照以下步骤连接到Wi-Fi：

- 切换到root用户:

```
$ su root
```

- 开启Wi-Fi：

```
$ nmcli r wifi on
```

- 扫描附近的Wi-Fi:

```
$ nmcli dev wifi
```

- 连接到特定的Wi-Fi:

```
$ nmcli dev wifi connect "SSID" password "PASSWORD" ifname wlan0
```

- 重启网卡设备

```shell
sudo ifconfig wlan0 down
sudo ifconfig wlan0 up
```

连接成功后，下次开机，WiFi 也会自动连接。

如果你的USB WiFi无法正常工作, 大概率是因为文件系统里缺少了对应的USB WiFi固件。

可以通过下列命令安装所有的USB WiFi固件:

```shell
apt-get install linux-firmware
```

有关NetworkManager的更多参考，请阅读[here](http://wiki.friendlyarm.com/wiki/index.php/Use_NetworkManager_to_configure_network_settings).

### 软件更新 (可选择)[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_9)

第一次连接到网络后，最好先更新软件:

```
$ sudo apt-get update
```



## 使用EMMC启动[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_10)

需要使用EMMC启动夸克的镜像，首先需要将镜像拷贝到TF卡上。

通过SSH或远程桌面连接进入夸克的终端，输入如下命令：

```shell
sudo dd if=/dev/mmcblk0 of=/dev/mmcblk1 bs=512 count="EMMC的Block数+1" &
sudo watch -n 5 pkill -USR1 ^dd$
```

其中EMMC的Block数可以使用`parted`命令或使用图形化的`GParted`查看。

## 定制命令行欢迎信息

欢迎信息主要是这个目录下的脚本来打印的：

```shell
/etc/update-motd.d/
```

比如要修改 FriendlyELEC 的大字LOGO，可以修改/etc/update-motd.d/10-header 这个文件，比如要将LOGO改为Seeed，可将以下行：

```shell
TERM=linux toilet -f standard -F metal $BOARD_VENDOR
```

改为：

```shell
TERM=linux toilet -f standard -F metal Seeed
```



## 更换软件包源和pip源

```shell
wget //112.124.9.243/aptsouce.sh
chmod 755 aptsouce.sh
sudo -H ./aptsouce.sh
sudo apt-get update
```



## 远程桌面连接[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_10)

如前所述，系统镜像中包含[`xrdp服务`](https://github.com/neutrinolabs/xrdp) 并在正常情况下默认运行，因此您可以使用Windows自带的`远程桌面连接`软件进入Quark-N的桌面：

- 使用 `ifconfig` 获取开发板的ip地址
- 在Windows电脑上搜索`远程桌面连接`，打开软件
- **在同一局域网中，输入开发板的IP地址并登录**，现在您可以进行远程桌面控制了！

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/remote-desk.png)

## 蓝牙[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_11)

系统镜像中具有内置的蓝牙驱动程序，您可以按照以下步骤启动蓝牙：

```
$ bluetoothctl
```

进入 `bluetoothctl` 界面后。运行scan扫描列出附近所有的蓝牙设备：

```
$ scan on
```

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-scan.png)

复制设备的MAC地址，然后使用以下命令连接到设备：

```
$ pair A4:xx:xx:xx:xx:30
$ trust A4:xx:xx:xx:xx:30
$ connect A4:xx:xx:xx:xx:30
```

现在您的开发板已连接到蓝牙设备。输入`quit`回终端。在开发板上播放音乐，然后您将在蓝牙扬声器设备上听到音乐！

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-connect.png)

> **您也可以在远程桌面中通过状态栏的蓝牙图标进行图形化的连接配对。**

## LCD屏幕[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#lcd)

LCD屏幕使用**SPI**与CPU进行通信，并且其驱动程序内置于系统镜像中，因此在启动系统时应该能够看到系统消息日志：

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/LCD.png)

- 如果将USB键盘和鼠标连接到开发板，则这将成为最小体积的电脑！
- 有一个使用python编写的pygame示例，演示了LCD使用。
- 进入文件:

```
$ cd WorkSpace/PyGame
```

- 运行示例：

```
$ sudo python hello_world.py
```

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/pygame.png)

您也可以在LCD屏幕下输入`s-tui`命令，可以将屏幕用于显示系统的监控信息。

## 麦克风[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_12)

Atom-N（载板）上还有一个内置麦克风，使其具备机器学习功能！我们提供了简单的测试示例，可以轻松使用随镜像预先安装的 **Audacity** 软件。

- 使用远程桌面登录开发板。
- 打开Audacity软件。
- 开始录制并与麦克风交谈，您会看到声波！

注意

你可以使用 `arecord -l`命令来寻找麦克风.

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/mic.png)

如果想基于麦克风进行进一步开发，可以在 `WorkSpace/WuKong` 中找到并使用 **[WuKong Robot](https://github.com/wzpan/wukong-robot)** 和 [**snowboy**](https://github.com/Kitt-AI/snowboy).

## GPIO[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#gpio)

对于GPIO访问，因为是基于Linux所以十分方便，并且可以使用Python轻松控制。

- 进入到项目文件夹:

```
$ cd WorkSpace/GPIO
```

- 运行GPIO示例:

```
$ sudo python gpio_key_led.py
```

现在，您可以按用户按钮，您应该能够看到串口输出，并且Quark-N（SoM）上的LED变暗！

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/gpio.png)

注意

LED位于Quark-N（SoM）上，而没有引出至Atom-N（载板）上。

## OpenCV[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#opencv)

系统镜像中还内置了OpenCV ，可以通过接入USB 摄像头实现人脸识别功能

- 您将需要一个USB相机。将USB相机连接到开发板的USB端口A。
- 进入项目文件夹:

```
$ cd WorkSpace/OpenCV
```

- 运行demo:

```
$ python FaceDetectOnTft.py
```

您可以在开发板的LCD屏幕上看到视频！！

![img](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/facedetect.png)

##  从Ubuntu 16.04 升级到Ubuntu 18.04 LTS

首先更新系统到最新版本，运行如下命令：

```shell
sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove
sudo apt dist-upgrade
```

安装update-manager-core，执行如下命令：

```shell
sudo apt-get install update-manager-core
```

执行系统升级，执行如下命令：

```shell
sudo do-release-upgrade
```

###  升级过程中遇到的问题

提示 “Your python3 install is corrupted. Please fix the ‘/usr/bin/python3’ symlink.”，执行如下命令：

```shell
sudo ln -sf /usr/bin/python2.7 /usr/bin/python
sudo ln -sf /usr/bin/python3.5 /usr/bin/python3
```

如果还有问题仍然阻止升级，那么我们需要查看升级日志，来确定具体为什么原因无法升级

```shell
cat /var/log/dist-upgrade/main.log
```

## 从Ubuntu 16.04 升级到Ubuntu 18.04 LTS

升级的基本的步骤，和从16.04到18.04的步骤1、2、3里的命令是一样的

*注意，需要先从16.04升级到18.04*

## 其他[](https://wiki.seeedstudio.com/cn/Quantum-Mini-Linux-Development-Kit/#_13)

开发板中还有更多示例用法， `WorkSpace` 中包括了例如 **TensorFlow Lite**, **[WuKong Robot](https://github.com/wzpan/wukong-robot)**, [**snowboy**](https://github.com/Kitt-AI/snowboy) 等等. 请进入这个网址了解更多信息!

[Quark-N的使用小技巧 作者@coolflyreg163](https://gitee.com/coolflyreg163/quark-n)

[“Quark开发板”使用过程与心得 作者@Zi_Gao的小站](https://www.zigao.info/812)
