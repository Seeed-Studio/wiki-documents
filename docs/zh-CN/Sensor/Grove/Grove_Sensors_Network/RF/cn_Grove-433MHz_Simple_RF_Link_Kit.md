---
title: Grove - 433MHz 简单射频链路套件
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-433MHz_Simple_RF_Link_Kit/
slug: /cn/Grove-433MHz_Simple_RF_Link_Kit
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/img/433MHz_Simple_RF.jpg)

该套件用于在433MHz频率下进行单向无线通信，包含一个发射器模块和一个接收器模块。该套件的Grove配置允许室内约40米的传输距离，或室外约100米的传输距离。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-433MHz-Simple-RF-link-kit-p-1062.html)

版本跟踪
---------------

| 版本 | 描述            | 发布日期     |
|----------|------------------------|-------------|
| v0.9b    | 初始公开发布 | 2011年10月3日 |

特性
--------

- Grove兼容接口。
- 使用ASK（幅移键控）调制。
- 单向通信。

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
-------------

### 发射器模块

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
工作电压
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
12.0
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
电流
</th>
<td>
3
</td>
<td>
/
</td>
<td>
10
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
工作模式
</th>
<td colspan="3">
ASK
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
发射功率（最大）
</th>
<td colspan="3">
15
</td>
<td>
mW
</td>
</tr>
<tr align="center">
<th scope="row">
工作距离
</th>
<td>
40
</td>
<td>
/
</td>
<td>
100
</td>
<td>
m
</td>
</tr>
</table>

### 接收器模块

| 项目                 | 典型值 | 单位 |
|----------------------|---------|------|
| 工作电压      | 5       | VDC  |
| 静态电流    | 5       | mA   |
| 接收器灵敏度 | -105    | dBm  |
| 工作频率  | 433.92  | MHz  |

应用创意
-----------------

- 遥控器
- 远程自动化
- 报警器

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

入门指南
---------------

发射器和接收器模块都依赖单根导线进行通信。虽然使用Arduino平台提供的UART可以工作，但建议使用VirtualWire库，该库使用幅移键控进行调制，提供更好的通信效果。

发射器和接收器模块都需要三根导线：Vcc、地线和信号线。套件两个部分的引脚2都未连接。

- 将发射器模块连接到用于发射的Arduino上Grove-Base Shield V2的数字I/O 2。

Error creating thumbnail: Invalid thumbnail parameters

- 将接收器模块连接到接收Arduino上Grove-Base Shield V2的数字I/O 2。

Error creating thumbnail: Invalid thumbnail parameters

- 下载[VirtualWire库](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)并将其解压到Arduino IDE的libraries文件夹中，路径为：..\\arduino-1.0\\libraries。请参考[这里](http://www.pjrc.com/teensy/td_libs_VirtualWire.html)。
- 为发射器模块上传以下代码：

```
    #include <VirtualWire.h>

    //Grove - 315(433) RF link kit Demo v1.0
    //by :https://www.seeedstudio.com/
    //connect the sent module to D2 to use  
    #include <VirtualWire.h>
     
    int RF_TX_PIN = 2;
     
    void setup()
    {
      vw_set_tx_pin(RF_TX_PIN); // Setup transmit pin
      vw_setup(2000); // Transmission speed in bits per second.
    }
     
    void loop()
    {
      const char *msg = "hello";
      vw_send((uint8_t *)msg, strlen(msg));  // Send 'hello' every 400ms.
      delay(400);
     
    }
```

- 为接收器模块上传以下代码：

```
    //Grove - 315(433) RF link kit Demo v1.0
    //by :https://www.seeedstudio.com/
    //connect the receive module to D2 to use ..
    #include <VirtualWire.h>
     
    int RF_RX_PIN = 2;
     
    void setup()
    {
      Serial.begin(9600);
      Serial.println("setup");
      vw_set_rx_pin(RF_RX_PIN);  // Setup receive pin.
      vw_setup(2000); // Transmission speed in bits per second.
      vw_rx_start(); // Start the PLL receiver.
    }
     
    void loop()
    {
      uint8_t buf[VW_MAX_MESSAGE_LEN];
      uint8_t buflen = VW_MAX_MESSAGE_LEN;
      if(vw_get_message(buf, &buflen)) // non-blocking I/O
      {
        int i;
        // Message with a good checksum received, dump HEX
        Serial.print("Got: ");
        for(i = 0; i < buflen; ++i)
        {
          Serial.print(buf[i], HEX);
          Serial.print(" ");
          //Serial.print(buf[i]);
        }
        Serial.println("");
      }
    }
```

- 打开接收器模块的串口监视器查看结果。

![](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/img/Receive_Data.jpg)

这只是一个简单的发射器和接收器实例作为参考。

资源
---------

- [VirtualWire 库.zip](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)
- [433MHz_demo.zip](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/315MHz_Demo.zip)
- [VirtualWire 文档](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)
- [TI:LM358PSR](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/1110010P1.pdf)
- [R433A 数据手册](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/ADI;ACTR433A.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_433MHz_Simple_RF_Link_Kit -->

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