---
description: BeagleBone® Blue
title: BeagleBone® Blue
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BeagleBone_Blue
last_update:
  date: 1/10/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover.jpg" /></div>

BeagleBone® Blue 基于 BeagleBone® Black 的极其成功的开源硬件设计，这是一款高扩展性、面向创客、社区支持的开源硬件计算机，由 BeagleBoard.Org 基金会创建。

BeagleBone® Blue 结合了 BeagleBone® Black Wireless 的高性能灵活 WiFi/Bluetooth WiLink™ 接口和 Strawson Design 的 Robotics Cape 的机器人功能。BeagleBone® Blue 配备了板载 2 节（2S）LiPo 电池管理系统，带有充电器和电池电量指示灯，8 个舵机输出，4 个直流电机驱动器，4 个正交编码器输入，以及包括 CAN 在内的多种 GPIO 和串行协议连接器，9 轴 IMU 和气压计，4 个 ADC 输入，PC USB 接口，USB 2.0 主机端口，复位按钮，电源按钮，两个用户可配置按钮和六个指示 LED。基于 Octavo Systems 的系统级封装（System-In-Package），集成了高性能 TI ARM 处理器和 512MB DDR3，BeagleBone® Blue 在大约 10 秒内启动 Linux，并通过单根 USB 数据线在不到 5 分钟内通过 Web 浏览器开始开发。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

----

* **处理器: Octavo Systems OSD3358 1GHz ARM® Cortex-A8**
  * 512MB DDR3 RAM
  * 集成电源管理
  * 2×32 位 200-MHz 可编程实时单元（PRUs）
  * ARM Cortex-M3
  * 板载 4GB 8 位 eMMC 闪存，预装 Debian Linux

* **连接性和传感器**
  * 电池：支持 2 节 LiPo，带平衡功能，9-18V 充电输入
  * 无线：802.11bgn，蓝牙 4.1 和 BLE
  * 电机控制：8 个 6V 舵机输出，4 个直流电机输出，4 个正交编码器输入
  * 传感器：9 轴 IMU，气压计
  * 连接性：高速 USB 2.0 客户端和主机
  * 用户界面：11 个用户可编程 LED，2 个用户可编程按钮
  * 易于连接的接口，可添加额外传感器，例如：
    * GPS、DSM2 无线电、UARTs、SPI、I2C、1.8V 模拟、3.3V GPIOs

* **软件兼容性**
  * [Debian](http://elinux.org/Beagleboard:BeagleBoneBlack_Debian)
  * [ROS](https://dscl.lcsr.jhu.edu/home/courses/me530707_2017_edumip_ros)
  * [ArduPilot](https://github.com/mirkix/ardupilotblue)
  * 使用 [LabVIEW](https://github.com/ktalke12/Labview-MiP) 进行图形化编程
  * 基于 Node.js 的 Cloud9 IDE，带有 BoneScript 库
  * 以及更多

## 规格

----

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-dlfj{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n.tg .tg-14gg{background-color:#ffffff;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-88pu{background-color:#ffffff;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 824}}>
    <colgroup>
      <col style={{width: 275}} />
      <col style={{width: 252}} />
      <col style={{width: 297}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls">项目</th>
        <th className="tg-l5ls" colSpan={2}>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-q7v3">处理器<br />(集成在<br />OSD3358 中)</td>
        <td className="tg-dlfj" colSpan={2}>● AM335x 1GHz ARM® Cortex-A8<br />● SGX530 图形加速器<br />● NEON 浮点加速器<br />● 2x PRU 32 位 200MHz 微控制器</td>
      </tr>
      <tr>
        <td className="tg-q7v3">内存</td>
        <td className="tg-dlfj" colSpan={2}>● 512MB DDR3 800MHz RAM（集成在 OSD3358 中）<br />● 板载 4GB 8 位 eMMC 闪存<br />● SD/MMC 连接器用于 microSD</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={18}><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />连接性<br /></td>
        <td className="tg-dlfj">高速 USB 2.0 客户端端口</td>
        <td className="tg-14gg">通过 microUSB 访问 USB0，客户端模式</td>
      </tr>
      <tr>
        <td className="tg-dlfj">高速 USB 2.0 主机端口</td>
        <td className="tg-14gg">通过 Type A 插座访问 USB1，500mA LS/FS/HS</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={6}><br /><br />WiLink1835 <br />WiFi 802.11 b/g/n 2.4GHz<br />支持以下模式：</td>
        <td className="tg-88pu">2x2 MIMO</td>
      </tr>
      <tr>
        <td className="tg-88pu">AP</td>
      </tr>
      <tr>
        <td className="tg-88pu">SmartConfig</td>
      </tr>
      <tr>
        <td className="tg-88pu">STA</td>
      </tr>
      <tr>
        <td className="tg-88pu">Wi-Fi Direct</td>
      </tr>
      <tr>
        <td className="tg-88pu">基于 802.11s 的 Wi-Fi 网状网络</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={3}><br />串行端口<br /></td>
        <td className="tg-14gg">UART0、UART1、UART5 可通过 4 针 JST 连接器访问</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART2 可通过 6 针 JST 连接器访问（EM-506 GPS 风格连接器）</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART4 RX 可通过 3 针 DSM2 连接器访问</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>WiLink 1835 蓝牙 4.1，支持 BLE</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>I2C1 可通过 4 针 JST 连接器访问</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>SPI1 CS0 (S1.1) 和 SPI1 CS1 (S1.2) 可通过 6 针 JST 连接器访问</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>CAN 可通过 4 针 JST 连接器访问（包括 TCAN1051 CAN 收发器）</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>8 个 GPIO（GP0 和 GPI1）可通过 6 针 JST 连接器访问</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>ADC 输入 0 到 3 可通过 6 针 JST 连接器访问</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>3.3VDC 和 5VDC 电源输出通过 4 针 JST 连接器提供</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br />电源管理</td>
        <td className="tg-dlfj" colSpan={2}>TPS65217C PMIC 与单独的 LDO 一起使用，为系统提供电源（集成在 OSD3358 中）</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>2 节（2S）LiPo 电池充电器（由 9 – 18VDC DC 插孔供电）：<br />i. 4 个电池电量 LED；<br />ii. 1 个充电器 LED</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>6VDC 4A 稳压器，用于驱动舵机输出</td>
      </tr>
      <tr>
        <td className="tg-q7v3">调试支持</td>
        <td className="tg-dlfj" colSpan={2}>JTAG 测试点</td>
      </tr>
      <tr>
        <td className="tg-q7v3">电源来源</td>
        <td className="tg-dlfj" colSpan={2}>i. microUSB USB，<br />ii. 2 节（2S）LiPo 电池连接器，<br />iii. 9 - 18VDC DC 插孔</td>
      </tr>
      <tr>
        <td className="tg-q7v3">用户输入/输出</td>
        <td className="tg-dlfj" colSpan={2}>i. 电源按钮；ii. 复位按钮；iii. 启动按钮；iv. 2 个用户可配置按钮；<br />v. 6 个用户可配置 LED；vi. 电源 LED</td>
      </tr>
      <tr>
        <td className="tg-q7v3">电机控制（需要 DC 插孔或 2S 电池供电）</td>
        <td className="tg-dlfj" colSpan={2}>i. 4 个直流电机驱动器，<br />ii. 4 个正交编码器输入，<br />iii. 8 个舵机输出</td>
      </tr>
      <tr>
        <td className="tg-q7v3">传感器<br /></td>
        <td className="tg-dlfj" colSpan={2}>i. 9 轴 IMU，<br />ii. 气压计</td>
      </tr>
    </tbody>
  </table>
</div>

--------

## 应用场景

* 物联网

* 智能家居
* 工业
* 自动化与过程控制
* 人机界面
* 电机控制
* 无人机控制
* 机器人

## 硬件概览

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Hardware_overviw.png" /></div>

## 入门指南

----

### 准备工作

#### 第一步：更新最新镜像

当您从 Seeed 收到 BeagleBone® Blue 时，镜像已经烧录到板载 eMMC 中。这意味着您可以跳过此步骤。然而，我们强烈建议您更新到最新镜像。

**i.** 点击并从 [beagleboard.org](https://beagleboard.org/latest-images) 下载最新镜像。

:::note
如果您不需要使用图形用户界面 (GUI)，"IoT" 镜像提供了更多的磁盘空间。由于文件较大，下载可能需要 30 分钟或更长时间。
:::

Debian 发行版已为该板提供。您下载的文件将具有 `.img.xz` 扩展名。这是 SD 卡的压缩扇区镜像。

**ii.** 使用 SD 卡读卡器将 SD 卡插入您的 PC 或 MAC。您需要一个容量超过 4G 的 SD 卡。

**iii.** 下载并安装 [Etcher](https://etcher.io/)

点击下载 Etcher，并直接将 ```*.img.xz``` 文件烧录到您的 SD 卡。或者将 ```*.img.xz``` 文件解压为 ```*.img``` 文件，然后使用其他镜像写入工具烧录到 SD 卡。

点击加号图标添加您刚刚下载的镜像，软件会自动选择您插入的 SD 卡。然后点击 Flash! 开始烧录。烧录过程大约需要 20 分钟。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/v2-flash-sd.png" /></div>

然后弹出 SD 卡并将其插入您的 BeagleBone® Blue。

#### 第二步：供电和启动

使用 Micro-USB 数据线将 BeagleBone® Blue 连接到您的电脑。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/connect.jpg" /></div>

:::caution
请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击此处购买。如果您想使用 BeagleBone® Blue 的电机控制模块，通过 USB 端口供电不足，您需要使用 DC-DC 端口或 2S 电池。
:::

您会看到电源 (PWR 或 ON) LED 稳定亮起。大约一分钟后，您应该会看到其他 LED 按默认配置开始闪烁。

* USR0 通常在启动时配置为以心跳模式闪烁
* USR1 通常在启动时配置为在 SD (microSD) 卡访问期间亮起
* USR2 通常在启动时配置为在 CPU 活动期间亮起
* USR3 通常在启动时配置为在 eMMC 访问期间亮起
* WIFI LED 通常在启动时配置为在连接到 WiFi 网络时亮起 (仅限 BeagleBone® Blue)

使用最新镜像时，您的操作系统应该不再需要安装驱动程序即可通过 USB 网络访问 BeagleBone。如果您使用的是较旧的镜像、较旧的操作系统或需要额外的驱动程序以通过串口访问较旧的板，以下是旧驱动程序的链接。

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-gvcd{background-color:#ffffff;border-color:#000000;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-l0dh{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;text-decoration:underline;\n  vertical-align:top}\n.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}\n.tg .tg-wzu8{background-color:#ffffff;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 826}}>
    <colgroup>
      <col style={{width: 148}} />
      <col style={{width: 155}} />
      <col style={{width: 523}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-wzu8">操作系统</th>
        <th className="tg-wzu8">USB 驱动程序</th>
        <th className="tg-wzu8">备注</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-v0nz">Windows <br />(64 位)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe" target="_blank" rel="noopener noreferrer">64 位安装程序</a><br /></td>
        <td className="tg-gvcd" rowSpan={2}>如果不确定，请先尝试 64 位安装程序。<br /><br />● Windows 驱动程序认证警告可能会弹出两到三次。点击 "忽略"、"安装" 或 "运行"<br />● 要检查您运行的是 32 位还是 64 位 Windows，请参见此处<a href="https://support.microsoft.com/kb/827218" target="_blank" rel="noopener noreferrer">链接</a>。<br />● 在没有最新服务版本的系统上，您可能会遇到错误 (0xc000007b)。在这种情况下，请点击此处安装并重试。<br />● 您可能需要重启 Windows。<br />● 这些驱动程序已测试可在 Windows 10 上运行。</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Windows <br />(32 位)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe" target="_blank" rel="noopener noreferrer">32 位安装程序</a><br /></td>
      </tr>
      <tr>
        <td className="tg-v0nz">Mac OS X<br /></td>
        <td className="tg-v0nz"> <a href="https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg" target="_blank" rel="noopener noreferrer">网络</a> <a href="https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg" target="_blank" rel="noopener noreferrer">串口</a></td>
        <td className="tg-gvcd">安装网络和串口驱动程序。</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Linux</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh" target="_blank" rel="noopener noreferrer">mkudevrule.sh</a></td>
        <td className="tg-gvcd">无需安装驱动程序，但您可能会发现一些 udev 规则有用。</td>
      </tr>
    </tbody>
  </table>
</div>

#### 第三步：浏览 Beagle

使用 Chrome 或 Firefox 浏览器（Internet Explorer 不支持），访问运行在开发板上的 Web 服务器。它将加载一个展示页面，显示开发板的功能。使用键盘上的箭头键导航展示页面。

启动完成后，您的电脑上应该会显示一个网络适配器。您可以点击进入 [Cloud 9 IDE](http://beaglebone.local:3000/)。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cloud9.png" /></div>

#### 第四步：连接 WiFi

打开一个新的终端，然后输入以下命令：

```
root@beaglebone:/var/lib/cloud9# connmanctl
connmanctl> enable wifi
Enabled wifi
connmanctl> tether wifi disable
Error disabling wifi tethering: Already disabled
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO seeed                wifi_f45eabf743ad_7365656564_managed_psk
    CHAIHUOMAKERS        wifi_f45eabf743ad_4348414948554f4d414b455253_managed_psk
    DIRECT-99-HP DeskJet 4670 series wifi_f45eabf743ad_4449524543542d39392d4850204465736b4a6574203436373020736572696573_managed_psk
    mostfun-5bf7         wifi_f45eabf743ad_6d6f737466756e2d35626637_managed_psk
    DIRECT-TNDESKTOP-71PTKLKmsXO wifi_f45eabf743ad_4449524543542d544e4445534b544f502d373150544b4c4b6d73584f_managed_psk
    HPKJ                 wifi_f45eabf743ad_48504b4a_managed_psk
    ChinaNet-yTGy        wifi_f45eabf743ad_4368696e614e65742d79544779_managed_psk
    GPKJ1                wifi_f45eabf743ad_47504b4a31_managed_psk
    GUMO                 wifi_f45eabf743ad_47554d4f_managed_psk
    jdsfkf               wifi_f45eabf743ad_6a6473666b66_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_f45eabf743ad_7365656564_managed_psk
Error /net/connman/service/wifi_f45eabf743ad_7365656564_managed_psk: Already connected
connmanctl> quit
root@beaglebone:/var/lib/cloud9# ifconfig wlan0
wlan0     Link encap:Ethernet  HWaddr f4:5e:ab:f7:43:ad  
          inet addr:192.168.199.145  Bcast:192.168.199.255  Mask:255.255.255.0
          inet6 addr: fe80::f65e:abff:fef7:43ad/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST DYNAMIC  MTU:1500  Metric:1
          RX packets:8920 errors:0 dropped:0 overruns:0 frame:0
          TX packets:3531 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1166820 (1.1 MiB)  TX bytes:3352208 (3.1 MiB)

root@beaglebone:/var/lib/cloud9#
```

当您输入 ```ifconfig wlan0``` 并看到类似于 192.168.199.145 的互联网地址时，恭喜您，已经成功连接到 WiFi。

当 BeagleBone® Blue 连接到互联网后，我们强烈建议您使用以下命令更新您的 BeagleBone® Blue：

```
sudo apt-get update
sudo apt-get upgrade
```

更新可能需要较长时间，但这是值得的。

### 示例 1：LED 闪烁

这是一个 JavaScript 示例。

点击 Cloud9 IDE 顶部右上角的 **File->New File->** 按钮。

:::注意
创建文件后，请不要忘记保存文件，同时添加文件类型。
:::

复制以下代码并点击 **Run**：

```
var b = require('bonescript');

var state = b.LOW;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("USR2", b.OUTPUT);
b.pinMode("USR3", b.OUTPUT);
setInterval(toggle, 1000);

function toggle() {
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite("USR2", state);
}
```

然后您将看到 USER2 LED 闪烁。

### 示例 2：使用 GPIO 控制 Grove-LED

**步骤 1.** 请准备以下部件：

| BeagleBone® Blue | Grove - LED 插座套件 | Grove 转接线（6针） |
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-White-LED-p-2016.jpeg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[立即购买](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-to-Beaglebone-Blue-6-Pin-Female-JST%2FSH-Conversion-Cable-%2810-pcs-pack%29-p-3027.html)|

**步骤 2.** 将 LED 插座套件连接到 BeagleBone® Blue 的 6 针 **GPIO** 接口。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/LED.jpg" /></div>

**步骤 3.** 在 Cloud9 IDE 中打开一个新的终端，将以下代码输入到终端中：

```
cd /sys/class/gpio
echo 49 >export
cd gpio49
echo out >direction
while sleep 1;
do echo 0 >value;
sleep 1;
echo 1 >value;
done
```

现在您将看到 LED 以心跳模式闪烁。

### 示例 3：使用 UART 控制 Grove-GPS

**步骤 1.** 请准备以下部件：

| BeagleBone® Blue | Grove - GPS 模块 | Grove 转接线（4针） |
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-GPS.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[立即购买](https://www.seeedstudio.com/grove-gps-p-959.html)|[立即购买](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**步骤 2.** 将 Grove-GPS 传感器连接到 BeagleBone® Blue 的 4 针 **UART1** 接口。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS_hARD.jpg" /></div>

**步骤 3.** 在 Cloud9 IDE 中打开一个新的终端，在该终端中输入以下代码。

```
apt install tio
tio /dev/ttyO1 -b 9600
```

然后，您将在终端中看到 GPS 信息，如下图所示。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS.png" /></div>

### 示例 4 使用 Grove-数字光传感器的 I2C 接口

**步骤 1.** 请准备以下部件清单中的物品。

| BeagleBone® Blue | Grove - LED 插座套件 | Grove 转接线（4针） |
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_Light_Sensor.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[立即购买](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|[立即购买](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**步骤 2.** 将 Grove-数字光传感器连接到 BeagleBone® Blue 的 4 针 **I2C** 接口。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_light.jpg" /></div>

**步骤 3.** 在 Cloud9 IDE 中打开一个新的终端，在该终端中输入以下代码。

```
cd /sys/bus/i2c/devices/i2c-1;
echo tsl2561 0x29 >new_device;
watch -n0 cat 1-0029/iio\:device0/in_illuminance0_input

```

然后，您将获得光照值，如下图所示。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_520.png" /></div>

## Grove 兼容性列表

Grove 是一种模块化、标准化连接器原型系统。Grove 采用积木式方法来组装电子设备。与基于跳线或焊接的系统相比，它更容易连接、实验和构建，并简化了学习系统，但不会简化到过于简单的程度。市场上的一些其他原型系统将复杂度降低到积木的水平。这种方式可以学到一些好东西，但 Grove 系统允许您构建真正的系统。它需要一些学习和专业知识来连接设备。

以下是与 BeagleBone® Blue 配合良好的 Grove 模块列表。

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-fhi2{background-color:#ffffff;color:#000000;font-size:20px;font-weight:bold;text-align:center;vertical-align:top}\n.tg .tg-366q{background-color:#ffffff;color:#000000;font-size:18px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fhi2">SKU</th>
        <th className="tg-fhi2">项目</th>
        <th className="tg-fhi2">I/O 类型</th>
        <th className="tg-fhi2">工作电压</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-366q">101020017</td>
        <td className="tg-366q">Grove - 旋转角度传感器</td>
        <td className="tg-366q">模拟</td>
        <td className="tg-366q">可在 1.8V 工作</td>
      </tr>
      <tr>
        <td className="tg-366q">101020048</td>
        <td className="tg-366q">Grove - 旋转角度传感器(P)</td>
        <td className="tg-366q">模拟</td>
        <td className="tg-366q">可在 1.8V 工作</td>
      </tr>
      <tr>
        <td className="tg-366q">101020036</td>
        <td className="tg-366q">Grove - 滑动电位器</td>
        <td className="tg-366q">模拟</td>
        <td className="tg-366q">可在 1.8V 工作</td>
      </tr>
      <tr>
        <td className="tg-366q">101020031</td>
        <td className="tg-366q">Grove - 压电振动传感器</td>
        <td className="tg-366q">模拟</td>
        <td className="tg-366q">可在 1.8V 工作</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - 按钮</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - 按钮(P)</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020001</td>
        <td className="tg-366q">Grove - 编码器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - 开关(P)</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - 倾斜开关</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - 水传感器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - 碰撞传感器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020030</td>
        <td className="tg-366q">Grove - 鼠标编码器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - 绿色 LED</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - 红色 LED</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020172</td>
        <td className="tg-366q">Grove - 线路探测器 v1.1</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - 水传感器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020019</td>
        <td className="tg-366q">Grove - 温湿度传感器 Pro</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020020</td>
        <td className="tg-366q">Grove - PIR 动作传感器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020052</td>
        <td className="tg-366q">Grove - GSR 传感器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020175</td>
        <td className="tg-366q">Grove - 红外距离中断器 v1.2</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020033</td>
        <td className="tg-366q">Grove - 耳夹心率传感器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020037</td>
        <td className="tg-366q">Grove - 触摸传感器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020030</td>
        <td className="tg-366q">Grove - 数字光传感器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020232</td>
        <td className="tg-366q">Grove - 语音识别器 v1.0</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - 碰撞传感器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020005</td>
        <td className="tg-366q">Grove - EL 驱动器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030009</td>
        <td className="tg-366q">Grove - 白色 LED</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030010</td>
        <td className="tg-366q">Grove - 蓝色 LED</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - 红色 LED</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - 绿色 LED</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030014</td>
        <td className="tg-366q">Grove - 多色闪烁 LED (5mm)</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020001</td>
        <td className="tg-366q">Grove - 可变色 LED</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020005</td>
        <td className="tg-366q">Grove - LED 串灯</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020048</td>
        <td className="tg-366q">Grove - 可链式 RGB LED v2.0</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - 开关(P)</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - 按钮(P)</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - 按钮</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020038</td>
        <td className="tg-366q">Grove - 磁性开关</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - 倾斜开关</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020005</td>
        <td className="tg-366q">Grove - 继电器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">107020000</td>
        <td className="tg-366q">Grove - 蜂鸣器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020014</td>
        <td className="tg-366q">Grove - 干簧继电器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020003</td>
        <td className="tg-366q">Grove - 振动电机</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">108020021</td>
        <td className="tg-366q">Grove - 迷你风扇 v1.1</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020004</td>
        <td className="tg-366q">Grove - 固态继电器</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020007</td>
        <td className="tg-366q">Grove - 螺丝端子</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020008</td>
        <td className="tg-366q">Grove - MOSFET</td>
        <td className="tg-366q">数字</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020212</td>
        <td className="tg-366q">Grove - 温湿度传感器(SHT31)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020192</td>
        <td className="tg-366q">Grove - 气压传感器 (BMP280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020080</td>
        <td className="tg-366q">Grove - IMU 9DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020054</td>
        <td className="tg-366q">Grove - 三轴数字加速度计(±16g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020252</td>
        <td className="tg-366q">Grove - IMU 10DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020193</td>
        <td className="tg-366q">Grove - 气压传感器(BME280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020082</td>
        <td className="tg-366q">Grove - 带外壳的指夹心率传感器</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020050</td>
        <td className="tg-366q">Grove - 三轴数字陀螺仪</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020024</td>
        <td className="tg-366q">Grove - 指夹心率传感器</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020081</td>
        <td className="tg-366q">Grove - 六轴加速度计&amp;指南针 v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020071</td>
        <td className="tg-366q">Grove - 三轴数字加速度计(±400g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030008</td>
        <td className="tg-366q">Grove - OLED 显示屏 0.96''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030011</td>
        <td className="tg-366q">Grove - OLED 显示屏 1.12''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020006</td>
        <td className="tg-366q">Grove - I2C 集线器</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020013</td>
        <td className="tg-366q">Grove - I2C ADC</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">113020003</td>
        <td className="tg-366q">Grove - GPS</td>
        <td className="tg-366q">UART</td>
        <td className="tg-366q">3.3V</td>
      </tr>
    </tbody>
  </table>
</div>

## 常见问题解答 (FAQs)

请点击此处查看所有 BeagleBone® Blue 的常见问题解答。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

-----

* **[原理图]** [BeagleBone® Blue 原理图](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip)
* **[Grove]** [BeagleBone® Blue Grove 兼容性列表.xlsx](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/res/Beaglebone%20Blue%20Grove%20Compatibility%20List.xlsx)
* **[更多阅读]** [BeagleBoard 主页面](http://beagleboard.org/)
* **[更多阅读]** [BeagleBoard 入门指南](http://beagleboard.org/getting-started)
* **[更多阅读]** [故障排除](http://beagleboard.org/getting-started#troubleshooting)
* **[更多阅读]** [硬件文档](http://beagleboard.org/getting-started#hardware)
* **[更多阅读]** [BeagleBoard 项目](http://beagleboard.org/project)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>