---
title: LAN_Communications
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/LAN_Communications/
slug: /cn/LAN_Communications
last_update:
  date: 01/11/2022
  author: gunengyu
---

### 1. 配置局域网服务器

此项目需要服务器和主控板在同一个局域网中工作。原理：将一台PC设置为服务器，通过局域网将主控板连接到服务器，然后PC和板子通过固定端口进行通信。
首先，下载并安装网络调试助手（本项目中使用Net Assistant网络调试助手软件）。
如果安装成功，打开软件，在左上角选择"TCP Server"设置"协议"，然后设置下面的"本地主机地址"和"本地主机端口"。如果全部完成，点击"打开"进入服务器。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_8.png)
### 2. 调试 MicroPython 程序
在代码编辑器中输入以下代码：
```python
import network
import usocket
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)

print("API list:")
dir(N1)

print("wifi list:")
lis = N1.scan()
for q in lis:
    print(q)
    
N1.connect("CHCK","depot0510")
if N1.isconnected():
    print("    ip               gateway           netmask            MAC            ssid")
    print(N1.ifconfig())
    s=usocket.socket()
    addr=('192.168.9.243',9999)
    s.connect(addr)
    s.send('Hello! Wio RP2040')
```
请填写第17行（WiFi的名称和密码）和第22行（计算机服务器的IP地址和端口号）。然后运行程序，您应该在网络调试助手的数据日志中看到主控板发送的消息。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_9.png)

---

如果您想在运行具有网络功能的程序后运行其他代码，请点击主控板上的"RUN"按钮重启。重启后，主控板可以运行其他程序。

---

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>