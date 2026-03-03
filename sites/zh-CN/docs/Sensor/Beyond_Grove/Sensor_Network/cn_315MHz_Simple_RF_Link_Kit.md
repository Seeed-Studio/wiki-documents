---
title: 315MHz 简易无线通信套件
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/315MHz_Simple_RF_Link_Kit/
slug: /cn/315MHz_Simple_RF_Link_Kit
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/315M_433M.jpg)

该套件用于在 315MHz 频率下进行单向无线通信，包括一个发射模块和一个接收模块。该套件的 Grove 配置允许在室内传输距离约为 40 米，或室外约为 100 米。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-315mhz-simple-rf-link-kit-p-1061.html?cPath=139_140)

## 特性

---

* GROVE 兼容接口。

* 使用 ASK（幅度键控）调制。

* 单向通信

## 规格

### 发射模块

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> 项目</th>
<th scope="col"> 最小值</th>
<th scope="col"> 典型值</th>
<th scope="col"> 最大值</th>
<th scope="col"> 单位</th>
</tr>
<tr>
<th scope="row"> 工作电压</th>
<td> 3.0</td>
<td> 5.0</td>
<td> 12.0</td>
<td> VDC</td>
</tr>
<tr>
<th scope="row"> 电流</th>
<td> 3</td>
<td> /</td>
<td> 10</td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> 工作模式</th>
<td colspan="3"> ASK</td>
<td> /</td>
</tr>
<tr>
<th scope="row"> 最大发射功率</th>
<td colspan="3"> 15</td>
<td> mW</td>
</tr>
<tr>
<th scope="row"> 工作距离</th>
<td> 40</td>
<td> /</td>
<td> 100</td>
<td> m</td>
</tr></table>

### 接收模块

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> 项目</th>
<th scope="col"> 典型值</th>
<th scope="col"> 单位</th>
</tr>
<tr>
<th scope="row"> 工作电压</th>
<td> 5</td>
<td> VDC</td>
</tr>
<tr>
<th scope="row"> 静态电流</th>
<td> 5</td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> 接收灵敏度</th>
<td> -103</td>
<td> dBm</td>
</tr>
<tr>
<th scope="row"> 工作频率</th>
<td> 315</td>
<td> MHz</td>
</tr></table>

## 应用场景

* 遥控

* 远程自动化

* 报警

## 使用方法

发射模块和接收模块都依赖单根线进行通信。虽然可以使用 Arduino 平台提供的 UART，但推荐使用 VirtualWire 库，该库使用幅度键控调制，能够提供更好的通信效果。

发射模块和接收模块都需要三根线：Vcc、Ground 和信号线。套件的两个部分的 Pin 2 均未连接。

* 将发射模块连接到 Arduino 上用于传输的 [Grove_-_Base_Shield](/cn/Base_Shield_V2 "Grove - Base Shield") 的数字 I/O 2。
Grove-433MHz_Simple_RF_Link_Kit
* 将接收模块连接到接收 Arduino 上 [Grove_-_Base_Shield](/cn/Base_Shield_V2 "Grove - Base Shield") 的数字 I/O 2。

**注意：** 硬件安装可以参考 [Grove - 433MHz 简易无线通信套件的使用方法](/cn/Grove-433MHz_Simple_RF_Link_Kit "Grove-433MHz_Simple_RF_Link_Kit")。

* 下载 [VirtualWire 库文件](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)，并将其解压到 Arduino IDE 的库文件路径：..\arduino-1.0\libraries。请参考 [这里](http://www.pjrc.com/teensy/td_libs_VirtualWire.html)。
* 上传以下代码到发射模块：

```
#include <VirtualWire.h>

//Grove - 315(433) RF link kit Demo v1.0
//by :https://www.seeedstudio.com/
//connect the sent module to D2 to use
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
    vw_send((uint8_t *)msg, strlen(msg));  // 每 400 毫秒发送一次 'hello'。
    delay(400);

}
```

* 上传以下代码到接收模块：

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
    vw_set_rx_pin(RF_RX_PIN);  // 设置接收引脚。
    vw_setup(2000); // 传输速度，单位为比特每秒。
    vw_rx_start(); // 启动 PLL 接收器。
}

void loop()
{
    uint8_t buf[VW_MAX_MESSAGE_LEN];
    uint8_t buflen = VW_MAX_MESSAGE_LEN;
    if(vw_get_message(buf, &buflen)) // 非阻塞 I/O
    {
        int i;
        // 接收到带有良好校验和的消息，输出 HEX
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

* 打开接收模块的串口监视器查看结果。

![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/Receive_Data.jpg)

这是一个简单的发射和接收实例，仅供参考。

## 版本追踪

<table>
<tr>
<th> 修订版</th>
<th> 描述</th>
<th> 发布日期</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> 初始公开发布</td>
<td width="200px"> 2011年10月3日</td>
</tr></table>

## 资源

* [文件:VirtualWire Library.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)

* [文件:315MHz_demo.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/315MHz_Demo.zip)

* [VirtualWire 文档](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>