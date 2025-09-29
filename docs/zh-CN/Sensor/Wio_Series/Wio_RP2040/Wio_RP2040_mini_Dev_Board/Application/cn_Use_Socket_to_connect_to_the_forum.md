---
title: 使用 Socket 连接到论坛
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Use_Socket_to_connect_to_the_forum/
slug: /cn/Use_Socket_to_connect_to_the_forum
last_update:
  date: 01/11/2022
  author: gunengyu
---
Socket 几乎是整个网络通信的基础。在这个项目中，我们将使用 Socket 连接到指定的服务器，从互联网获取其信息。您可以在互联网上搜索许多支持 telnet 协议的服务器。通过连接到这些服务器，您可以浏览网页和论坛，甚至在终端中阅读字符动画！


在这个示例中，我们将连接到"freechess.org"论坛，在终端中获取信息。
将以下代码输入到代码编辑器中：
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
    addr_info = usocket.getaddrinfo('freechess.org',5000)
    print(addr_info)
    addr = addr_info[0][-1]
    print(addr)
    s=usocket.socket()
   # addr=('171.160.169.200',23)
    s.connect(addr)
   # s.send('Hello!')
while True:
    data = s.recv(500)
    print(str(data, 'utf8'), end = '')
```
**注意在第17行替换为您自己的WiFi名称和密码，然后运行程序并在Shell窗口中获取结果。**
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_20.png)
您也可以在互联网上找到其他支持 telnet 协议的服务器，然后如图所示填入服务器地址和端口。现在，您可以使用终端访问这些网站！
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_21.png)
## 

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>