---
description: Wifi Shield V1.0
title: Wifi Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wifi_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield.jpg)

这款 Wifi Shield 使用 RN171 wifi 模块为您的 Arduino/Seeeduino 提供串行以太网功能。使用此扩展板，只需两个引脚即可将您的设备连接到 802.11b/g 无线网络。它配备独立天线，可覆盖更广范围并传输更强信号。支持常见的 TCP、UDP 和 FTP 通信协议，此 Wifi Shield 可满足大多数无线网络项目的需求，如智能家居网络、机器人控制或个人气象站等。我们为此扩展板准备了简单便捷的命令集，让您可以使用简洁明了的代码来运行功能。

# 特性 #

- 兼容 Arduino、Seeeduino、Arduino Mega 和 Seeeduino Mega

- 主机数据速率：UART 高达 1 Mbps，SPI 从机模式下 2 Mbps

- Shield 上 RN171 的 UART 串口可通过跳线连接到 Arduino

- RN171 的 SPI 引脚已引出

- 配备两个 Grove 连接器，便于将 I2C 和数字 IO Grove 模块连接到 Arduino

- 安全 WiFi 认证：WEP-128、WPA-PSK (TKIP)、WPA2-PSK (AES)

- 内置网络应用：DHCP 客户端、DNS 客户端、ARP、ICMP ping、FTP、TELNET、HTTP、UDP、TCP

# 规格参数 #

<table cellspacing="0" width="80%">
  <tbody>
    <tr>
      <th scope="col">项目</th>
      <th scope="col">最小值</th>
      <th scope="col">典型值</th>
      <th scope="col">最大值</th>
      <th scope="col">单位</th>
    </tr>
    <tr>
      <th scope="row">电压</th>
      <td>3.3</td>
      <td>5</td>
      <td>5.5</td>
      <td>VDC</td>
    </tr>
    <tr>
      <th scope="row">电流</th>
      <td>25</td>
      <td>60</td>
      <td>400</td>
      <td>mA</td>
    </tr>
    <tr>
      <th scope="row">发射功率</th>
      <td colspan="3">0-10</td>
      <td>dBm</td>
    </tr>
    <tr>
      <th scope="row">频率</th>
      <td colspan="3">2402~2480</td>
      <td>MHz</td>
    </tr>
    <tr>
      <th scope="row">网络速率</th>
      <td colspan="4">802.11b 为 1-11 Mbps / 802.11g 为 6-54Mbps</td>
    </tr>
    <tr>
      <th scope="row">尺寸</th>
      <td colspan="3">60x56x19</td>
      <td>mm</td>
    </tr>
    <tr>
      <th scope="row">净重</th>
      <td colspan="3">20±2</td>
      <td>g</td>
    </tr>
  </tbody>
</table>

# 接口功能

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield009.jpg)

# 使用方法 #

我们提供的示例展示了如何将此 Wifi Shield 连接到以太网，并在扩展板和虚拟服务器之间进行数据交换。

### 硬件安装 ###

您收到的包装应包含以下部件：一个 Wifi Shield、一个天线和一个天线连接器。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield001.jpg)

按照下图将这些部件组装在一起。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield002.jpg)

将扩展板安装到您的 Arduino/Seeeduino 上

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield003.jpg)

好的，现在开始编写代码。

### 软件编程 ###

首先您必须确保计算机上已安装 Arduino1.0。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Tb2.jpg)
在此处下载 wifishield 库 [Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) 并将其解压到 Arduino 的 libraries 文件夹中，路径为：<code>..\arduino-1.0\libraries</code>
在 Arduino-1.0 中打开新的草图，然后将以下代码复制到您的草图中。

```cpp
#include "Wifly.h"
#include <SoftwareSerial.h>
WiflyClass Wifly(2,3);
void setup()
{
 Serial.begin(9600);//use the hardware serial to communicate with the PC
 Wifly.init();//Initialize the wifishield
 Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router
 Wifly.join("SSID");
 Wifly.checkAssociated();
 while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
 Wifly.writeToSocket("Connected!");
}
void loop()
{
 if(Wifly.canReadFromSocket())
 {
   Serial.print(Wifly.readFromSocket());
 }
 if(Serial.available())
 {
   Wifly.print((char)Serial.read());
 }
}

```

您需要根据具体配置对此草图进行一些修改。

1.选择引脚连接 WIFI 模块的串口

```txt
WiflyClass Wifly(2,3);

```

这里的参数 2 和 3 分别代表软件串口的 RX 和 TX。基于此，D2 和 D3 引脚应按下图所示短接。您可以根据需要更改引脚号，只需确保在短接引脚上做相应更改。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield004.jpg)

2.填写无线网络信息

```
Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router
Wifly.join("SSID");
```

将目标网络名称填入 SSID，将密码填入 PASSWORD。例如，如果您想加入 China-NET 网络且密码为 12345678，则此行代码应更改为：

```
Wifly.setConfig("China-NET","12345678");//here to set the ssid and password of the Router
Wifly.join("China-NET");
```

**注意：**

1.路由器安全类型仅支持 WEP-128、WPA-PSK (TKIP)、WPA2-PSK (AES)

2.路由器必须连接到互联网

3.填写远程服务器信息

```
while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
```

在上面这行中，"192.168.1.164" 是虚拟服务器的远程 IP 地址，"90" 是端口信息。

我们提供了 TCP 客户端软件 [YFTCPServer.zip](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/YFTCPServer.zip) 和串口软件 [SCCOM](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Sscom32E.zip) 用于测试。

打开 TCP 客户端软件，您将看到：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield005.jpg)

根据从该软件获取的信息更改您的代码行。

```
while(!Wifly.connect("192.168.1.164","90"));//连接远程服务
```

上传代码。

现在先运行TCP客户端软件，然后运行串口软件，点击"OpenCom"按钮，等待直到虚拟软件屏幕上打印出消息`<--Connected!`。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield006.jpg)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield007.jpg)

现在您可以通过此串口软件与Wifi Shield进行通信。

有关RN171的更多详细信息，您可以在此处下载数据手册 [RN171 数据手册](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 资源 #

- **[Eagle]**[Wifi Shield Eagle文件](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip)
- **[PDF]**[wifi Shield V1.0 PCB](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0.pdf)
- **[PDF]**[wifi Shield V1.0 原理图](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0%20SCH.pdf)
- **[数据手册]**[RN171 数据手册](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf)
- **[库文件]**[Wifi Shield 库文件](https://github.com/Seeed-Studio/WiFi_Shield)

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