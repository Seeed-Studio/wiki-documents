---
description: RS232_Shield
title: RS232 Shield

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RS232_Shield
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_Photo.jpg" alt="pir" width={600} height="auto" /></p>

RS232 Shield 是工业设备的标准通信端口。该模块基于 MAX232，这是一个双驱动器/接收器，包含一个电容式电压发生器，可从单个 5V 电源提供 TIA/EIA-232-F 电压电平。该扩展板集成了 DB9 连接器（母头），可连接各种具有 RS232 接口的设备。此外，RS232 引脚头将便于您的连接和调试。它提供焊接区域以充分利用其上的额外空间，这对于原型制作非常方便。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS232-Shield-p-1910.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 规格参数
-------------

-   符合或超过 TIA/EIA-232-F 和 ITU 标准
-   工作速率高达 120 kbit/s
-   低供电电流
-   LED 指示灯
-   DB9 连接器（母头）
-   焊接区域


## 接口功能
------------------

**使用方法**

首先，我们可以通过计算机进行测试。

### 硬件安装

1. Seeeduino v3.0、Mini USB 线缆、RS232 Shield、RS232 转 USB 线缆。
2. 按如下方式进行连接。跳线帽可用于从数字引脚中选择软件串口。您可以将它们设置为 D7(232_TX) 和 D6(232_RX)，并修改代码为 "*SoftwareSerial mySerial(7, 6); // 232_TX, 232_RX*"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage.jpg" alt="pir" width={600} height="auto" /></p>

### 软件部分

-   1) 打开 Arduino IDE，并粘贴以下代码。

```cpp
 
#include <SoftwareSerial.h>
 
SoftwareSerial mySerial(7, 6); //232_TX,232_RX
 
void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }
 
 
    Serial.println("Goodnight moon!");
 
    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    mySerial.println("Hello, world?");
}
 
void loop() // run over and over
{
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

-   2) 上传代码。注意您应该选择正确的开发板类型和 COM 端口。
-   3) 打开串口监视器。

您可以看到：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage1.jpg" alt="pir" width={600} height="auto" /></p>


<div>
  ## 原理图在线查看器
  <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
  </div>
</div>


资源
--------

-   [RS232 Shield eagle 文件](https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip)
-   [RS232_Shield_v1.0.pdf](https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.pdf)
-   [数据手册 MAX232D.pdf](https://files.seeedstudio.com/wiki/RS232_Shield/res/MAX232D.pdf)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/RS232_Shield -->

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