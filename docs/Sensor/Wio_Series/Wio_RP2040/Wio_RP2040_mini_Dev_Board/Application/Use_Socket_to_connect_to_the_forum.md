---
title: Use Socket to connect to the forum
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Use_Socket_to_connect_to_the_forum/
slug: /Use_Socket_to_connect_to_the_forum
last_update:
  date: 01/11/2022
  author: gunengyu
---
Socket is almost the base of the entire network communication. In this project, we will use Socket to connect to a designated server to obtain its information from the Internet. You can search many servers with telnet protocol on the Internet. By connecting to these servers, you can browse the web and forums, and even read character animation in the terminal!


We will connect to the "freechess.org" forum to get information in the terminal in this example.
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
**Pay attention to replace with your own WiFi name and password on line 17, then run the program and get the result in the Shell window.**
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_20.png)
You can also find other servers that support the telnet protocol on the Internet, and then fill in the server address and port as shown. Now, you can use the terminal to visit these websites!
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_21.png)
## 

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
