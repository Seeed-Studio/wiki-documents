---
description: Seeed BLE Shield v1
title: Seeed BLE Shield v1
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeed_BLE_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Seeed BLE Shield v1
category: Shield
bzurl: https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html
oldwikiname:   Seeed BLE Shield v1
prodimagename:  Seeed_BLE-4.png
surveyurl: https://www.research.net/r/Seeed_BLE_Shield_v1
sku:  113030013
--- -->
![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-4.png)

这款 Seeed BLE Shield 采用 HM-11 模块，为您的 Arduino/Seeeduino 提供串行 BLE 功能。它只需要微控制器的两个引脚就能与此扩展板通信。支持 BLE ComAssistant APK，这款 BLE Shield 可以更轻松地与您的手机通话，无需配对。您可以在许多场景中使用它，如机器人控制或遥控设备等。我们为这款扩展板准备了简单便捷的命令集，让您可以使用简洁明了的代码来运行功能。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html)

## 规格参数

---
<table>
  <tr>
    <th>规格参数</th>
    <th>数值</th>
  </tr>
  <tr>
    <td width="300px">蓝牙版本</td>
    <td width="500px">蓝牙规范 V4.0 BLE</td>
  </tr>
  <tr>
    <td>工作频率</td>
    <td>2.4GHz ISM 频段</td>
  </tr>
  <tr>
    <td>工作电流</td>
    <td>&lt; 15 mA</td>
  </tr>
  <tr>
    <td>源电流</td>
    <td>&lt; 30 mA</td>
  </tr>
  <tr>
    <td>睡眠电流</td>
    <td>&lt; 3 mA</td>
  </tr>
  <tr>
    <td>调制方式</td>
    <td>GFSK（高斯频移键控）</td>
  </tr>
  <tr>
    <td>射频功率</td>
    <td>-23dbm, -6dbm, 0dbm, 6dbm，可通过 AT 命令 AT+POWE 修改</td>
  </tr>
  <tr>
    <td>速度</td>
    <td>异步：6K 字节，同步：6K 字节</td>
  </tr>
  <tr>
    <td>灵敏度</td>
    <td>≤-84dBm（0.1% BER）</td>
  </tr>
  <tr>
    <td>安全性</td>
    <td>身份验证和加密</td>
  </tr>
  <tr>
    <td>服务</td>
    <td>中心和外围设备 UUID FFE0,FFE1</td>
  </tr>
  <tr>
    <td>供电电源</td>
    <td>5v</td>
  </tr>
  <tr>
    <td>工作温度</td>
    <td>–5 ~ +65 摄氏度</td>
  </tr>
  <tr>
    <td>尺寸</td>
    <td>68mm x 43mm</td>
  </tr>
  <tr>
    <td>PIN 码</td>
    <td>000000（默认）</td>
  </tr>
</table>

## 硬件概述

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/BLE_Shield.png)

* HM-11：基础模块是 HM-11，更多信息您可以参考 [HM-11](/cn/Bluetooth_V4.0_HM_11_BLE_Module) 的 wiki。

* 信号灯：如果没有连接 BLE，灯会闪烁，但在 BLE 连接后，灯会保持常亮。

* Grove 连接器：BLE 扩展板上有两个 Grove 连接器，您可以方便地将 Grove 产品插到板上。

* 硬件或软件串口：您可以选择七个数字引脚中的两个作为通信通道。只需将跳线插入排针即可。**丝印上有两个错误，请将"WIFI_TX"和"WIFI_RX"理解为"BLE_TX"和"BLE_RX"。**

* HM-11 的保留引脚：HM-11 模块有一些保留引脚，如 CTS1、RTS1 和 PIO2 等。

* 复位按钮：如果需要复位 BLE Shield，请按复位按钮。但是，如果 BLE Shield 插在主板（如 Arduino Uno）上，此复位按钮不会影响主板的状态。

## 应用

---

### 硬件连接

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-2.png)

将 Seeed BLE Shield 直接插到 Arduino/Seeeduino 上。**请注意 BLE Shield 上跳线的位置。**

### 软件串口通信

Seeed BLE Shield 可以作为主机或从机，您可以通过不同的演示程序来使用它。**如果您要使用以下软件串口程序，请参考前面图片中的连接方式。BLE_TX--&gt;D2, BLE_RX--&gt;D3。**

打开 Arduino IDE，复制以下程序并上传到 Arduino/Seeeduino 板上。然后两个 BLE Shield 就可以相互通信了。

**演示：BLE 从机**

```
#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

SoftwareSerial BLE(RxD,TxD);

void setup()
{
    Serial.begin(9600);
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBleConnection();

}

void loop()
{
    char recvChar;
    while(1){
        if(BLE.available()){//check if there's any data sent from the remote BLE shield
            recvChar = BLE.read();
            Serial.print(recvChar);
        }
        if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
            recvChar  = Serial.read();
            BLE.print(recvChar);
        }
    }
}

void setupBleConnection()
{
    BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
    BLE.print("AT+CLEAR"); //clear all previous setting
    BLE.print("AT+ROLE0"); //set the bluetooth name as a slaver
    BLE.print("AT+SAVE1");  //don't save the connect information
}
```

**演示：BLE 主机**

```
#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

SoftwareSerial BLE(RxD,TxD);

void setup()
{
    Serial.begin(9600);
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBleConnection();

}

void loop()
{
    char recvChar;
    while(1){
        if(BLE.available()){//check if there's any data sent from the remote BLE shield
            recvChar = BLE.read();
            Serial.print(recvChar);
        }
        if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
            recvChar  = Serial.read();
            BLE.print(recvChar);
        }
    }
}

void setupBleConnection()
{
    BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
    BLE.print("AT+CLEAR"); //clear all previous setting
    BLE.print("AT+ROLE1"); //set the bluetooth name as a master
    BLE.print("AT+SAVE1");  //don't save the connect information
}
```

### 硬件串口通信

此外，您可以通过 AT 命令使用 BLE Shield 而无需任何程序，**但您需要更改两个跳线的位置。BLE_TX--&gt;D1, BLE_RX--&gt;D0。**

然后打开一个串口工具，如 CoolTerm 或其他工具。以下是一些设置：**波特率：9600（默认），数据位：8，奇偶校验：无，停止位：1。**

首先，您可以向 BLE Shield 发送一个（或一些）"AT" 命令进行测试。如果它返回 "OK"，那么您可以执行以下步骤。**如果没有，您可以向 Arduino/Seeeduino 上传一个空白程序**，然后看看是否可以通过前面的操作从串口工具获得响应。

```
void setup()
{
}

void loop()
{
}
```

然后，向 BLE Shield 发送 "AT+ROLE0" 命令；它将返回 "OK+Set:0"，这意味着现在 BLE Shield 已准备好作为从机工作。

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-3.png)

### AT 命令

有关 AT 命令的更多信息，请参考 BLE 模块的数据手册。您可以从资源区域下载它。

## 相关阅读

---

* [Seeed BLE Shield 常见问题](/cn/Seeed_BLE_Shield)。_您也可以通过点击产品wiki页面右侧的"FAQ"按钮进入常见问题页面。_

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

[Seeed BLE Shield 原理图](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip)

[Android BLE 应用程序](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/HMBLEComAssistant.rar)

[BLE 模块数据手册](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/Bluetooth4_en.pdf)

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