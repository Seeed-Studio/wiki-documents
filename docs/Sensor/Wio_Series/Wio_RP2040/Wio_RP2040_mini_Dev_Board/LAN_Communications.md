---
title: LAN_Communications
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/LAN_Communications/
slug: /LAN_Communications
last_update:
  date: 01/11/2022
  author: gunengyu
---

### 1. Configure the LAN Server

This project requires the Server and the main control board to work in the same local area network. The principle: Setup one PC as a server, connect the main control board to the Server through the local area network, and then PC and board communicate through a fixed port.
First, download and install the network debugging assistant (Net Assistant network debugging assistant software in this project).
If the installation is successful, open the software, select "TCP Server" in the upper left corner to set the "Protocol", and then set the "Local host addr" and "Local host port" below. If all were done, click "Open" to enter the Server.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_8.png)
### 2. Debug MicroPython program
Enter the following code into the code editor:
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
Please fill in line 17 (the name and password of the WiFi ) and line 22（the IP address and port number of the computer server). Then run the program, you should see the message sent by the main control board in the Data log of the network debugging assistant.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_9.png)

---

If you want to run other codes after running a program with network functions, please click the "RUN" button on the main control board to restart. After restarting, the main control board can run other programs.

---

## Tech Support & Product Discussion
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

