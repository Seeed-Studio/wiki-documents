---
title: WiFi串口收发模块
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/WiFi_Serial_Transceiver_Module/
slug: /cn/WiFi_Serial_Transceiver_Module
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/WiFi%20Serial%20Transceiver%20Module.jpg)

在本教程中，我们将使用Seeeduino控制ESP8266 WiFi模块从互联网请求一个静态页面。这是TCP套接字的基本使用，其他用途请参考模块的AT指令指南。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)

**材料清单：**

- [Seeeduino V3](https://www.seeedstudio.com/Seeeduino-V30-Atmega-328P-p-669.html) / Arduino Uno
- [ESP8266串口WiFi模块](https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)
- [UartSBee v4](https://www.seeedstudio.com/UartSBee-V4-p-688.html) / 其他USB转TTL转换器

!!!注意
    我们使用了软件串口来打印一些调试信息，因为Seeeduino板上只有一个硬件串口。但软件串口的限制是它无法以高于19200的波特率通信。因此，部分来自ESP模块的输出会被丢弃，因为ESP模块的波特率为57600，高于软件串口的波特率。如果您有一个带有多个硬件串口的板（例如Arduino Mega 2560），操作会更简单。

## 分步操作
---
- **步骤1**：按照下图连接模块

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Wifi_connection.jpg)

- **步骤2**：编程Seeeduino板。

   - 打开Arduino IDE并创建一个新草图；
   - 将以下代码粘贴到草图编辑器中（需要根据您的实际情况修改SSID和PASS宏）；

```c
#include <SoftwareSerial.h>
   #define SSID "xxxxxxxx"
   #define PASS "xxxxxxxx"
   #define DST_IP "220.181.111.85" //baidu.com
   SoftwareSerial dbgSerial(10, 11); // RX, TX
   void setup()
   {
     // 打开串口通信并等待端口打开：
     Serial.begin(57600);
     Serial.setTimeout(5000);
     dbgSerial.begin(9600); //软件串口不能超过19200
     dbgSerial.println("ESP8266 Demo");
     //测试模块是否准备好
     Serial.println("AT+RST");
     delay(1000);
     if(Serial.find("ready"))
     {
       dbgSerial.println("Module is ready");
     }
     else
     {
       dbgSerial.println("Module have no response.");
       while(1);
     }
     delay(1000);
     //连接到WiFi
     boolean connected=false;
     for(int i=0;i<5;i++)
     {
       if(connectWiFi())
       {
         connected = true;
         break;
       }
     }
     if (!connected){while(1);}
     delay(5000);
     //打印IP地址
     /*Serial.println("AT+CIFSR");
     dbgSerial.println("ip address:");
     while (Serial.available())
     dbgSerial.write(Serial.read());*/
     //设置单连接模式
     Serial.println("AT+CIPMUX=0");
   }
   void loop()
   {
     String cmd = "AT+CIPSTART=\"TCP\",\"";
     cmd += DST_IP;
     cmd += "\",80";
     Serial.println(cmd);
     dbgSerial.println(cmd);
     if(Serial.find("Error")) return;
     cmd = "GET / HTTP/1.0\r\n\r\n";
     Serial.print("AT+CIPSEND=");
     Serial.println(cmd.length());
     if(Serial.find(">"))
     {
       dbgSerial.print(">");
       }else
       {
         Serial.println("AT+CIPCLOSE");
         dbgSerial.println("connect timeout");
         delay(1000);
         return;
       }
       Serial.print(cmd);
       delay(2000);
       //Serial.find("+IPD");
       while (Serial.available())
       {
         char c = Serial.read();
         dbgSerial.write(c);
         if(c=='\r') dbgSerial.print('\n');
       }
       dbgSerial.println("====");
       delay(1000);
     }
     boolean connectWiFi()
     {
       Serial.println("AT+CWMODE=1");
       String cmd="AT+CWJAP=\"";
       cmd+=SSID;
       cmd+="\",\"";
       cmd+=PASS;
       cmd+="\"";
       dbgSerial.println(cmd);
       Serial.println(cmd);
       delay(2000);
       if(Serial.find("OK"))
       {
         dbgSerial.println("OK, Connected to WiFi.");
         return true;
         }else
         {
           dbgSerial.println("Can not connect to the WiFi.");
           return false;
         }
       }
```

- **步骤3**：打开串口监视器并按下Seeeduino板的复位按钮，您将看到输出。

最后，祝您玩得愉快！ :)

## 相关项目
---
[Recipe Community](https://www.seeedstudio.com/recipe/) 是一个非常棒的地方，创客们在这里分享他们的精彩作品。我们的创客们已经用 esp8266 制作了许多令人惊叹的项目，快来看看吧！

**WiFi 扫描器 - 探索周围的 WiFi 信号**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-WiFi_Scanner-Know_the_WiFi_Signal_around_you.jpg)

通过几个简单的步骤，制作属于自己的 WiFi 扫描器，你需要准备：

- 一个 NodeMcu 开发板
- 一个 I2C OLED 显示屏
- 一些连接线
- 最重要的是，对 ESP8266 的热情！

[那么，为什么不自己动手制作一个呢？](https://community.seeedstudio.com/project_detail.html?id=220)

**初级 IoT 项目：使用 NodeMcu &gt;ESP8266&lt;**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-Primary_IoT_Make_with_NodeMcu--ESP8266--.jpg)

一个在线温湿度监测器，所需材料包括：

- 一个 NodeMcu 开发板
- Grove - 温湿度传感器
- 一些连接线

另一个简单的技巧，[为什么不自己动手制作一个呢？](https://community.seeedstudio.com/project_detail.html?id=232)

还不够？更多 [ESP8266 的精彩项目](https://community.seeedstudio.com/discover.html?t=wio)。

还有更多精彩项目在 [Recipe](https://community.seeedstudio.com/projects.html#recipe)。

## 技术支持与产品讨论
如果您遇到任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>