---
title: Grove - 315MHz RF Kit
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-315MHz_RF_Kit/
slug: /cn/Grove-315MHz_RF_Kit
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/img/315MHz-Simple-RF-Link-Kit.jpg)

该套件用于在315MHz频率下进行单向无线通信，包含一个发射器模块和一个接收器模块。该套件的Grove配置允许室内约40米的传输距离，或室外约100米的传输距离。315MHz频率适合在美国无需许可证使用。如需在欧洲使用，请参见此产品的433MHz版本。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-315MHz-Simple-RF-Link-Kit-p-1061.html)

特性
--------

- Grove兼容接口。
- 使用ASK（幅移键控）调制。
- 单向通信。

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用创意
-----------------

- 遥控器
- 远程自动化
- 报警器

机械尺寸
-------------------

- 接收器：24mm x 42mm
- 发射器：20mm x 24mm

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

使用方法
-----

发射器和接收器模块都依赖单根导线进行通信。虽然使用Arduino平台提供的UART可以工作，但建议使用VirtualWire库，该库使用幅移键控进行调制，提供更好的通信效果。

发射器和接收器模块都需要三根导线：Vcc、地线和信号线。套件两个部分的引脚2都未连接。

### 硬件安装

将发射器模块连接到用于发射的Arduino上Grove-Base Shield V2的数字I/O 2。

将接收器模块连接到接收Arduino上Grove-Base Shield V2的数字I/O 2。

### 编程

发射器示例代码：

```
#include <VirtualWire.h>
 
int RF_TX_PIN = 2;
 
void setup()
{
  vw_set_tx_pin(RF_TX_PIN); // 设置发射引脚
  vw_setup(2000); // 传输速度，单位为比特每秒。
}
 
void loop()
{
  const char *msg = "hello";
  vw_send((uint8_t *)msg, strlen(msg));  // 每400ms发送一次'hello'。
  delay(400);
 
}
```

接收器示例代码：

```
#include <VirtualWire.h>
 
int RF_RX_PIN = 2;
 
void setup()
{
  Serial.begin(9600);
  Serial.println("setup");
  vw_set_rx_pin(RF_RX_PIN);  // 设置接收引脚。
  vw_setup(2000); // 传输速度，单位为比特每秒。
  vw_rx_start(); // 启动PLL接收器。
}
 
void loop()
{
  uint8_t buf[VW_MAX_MESSAGE_LEN];
  uint8_t buflen = VW_MAX_MESSAGE_LEN;
  if(vw_get_message(buf, &buflen)) // 非阻塞I/O
  {
    int i;
    // 接收到校验和正确的消息，输出十六进制
    Serial.print("Got: ");
    for(i = 0; i < buflen; ++i)
    {
      Serial.print(buf[i], HEX);
      Serial.print(" ");
    }
    Serial.println("");
  }
}
```

资源
---------

- 演示代码：[433MHz demo.zip](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/res/433MHz_demo.zip "File:433MHz demo.zip")
- [VirtualWire 1.27](http://www.airspayce.com/mikem/arduino/VirtualWire/VirtualWire-1.27.zip)
- [VirtualWire文档](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)
- [TI:LM358PSR](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/res/1110010P1.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_315MHz_RF_Kit -->

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