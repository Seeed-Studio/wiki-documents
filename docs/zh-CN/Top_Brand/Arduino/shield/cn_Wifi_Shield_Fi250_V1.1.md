---
description: Wifi Shield (Fi250) V1.1
title: Wifi Shield (Fi250) V1.1
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wifi_Shield_Fi250_V1.1
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Wifi Shield (Fi250) V1.1
category: Shield
bzurl: https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html
oldwikiname:  Wifi Shield (Fi250) V1.1
prodimagename:  Fi250_board1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_Fi250_V1_1
sku:    103030027
--- -->

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board1.jpg)

Wifi Shield (Fi250) V1.1 是一个与 Arduino 配合使用的经济型互联网解决方案。该 Wi-Fi 模块支持 IEEE 802.11b/g/n 模式，最大速度可达 65Mbit/s。Wifi Shield (Fi250) V1.1 集成了板载天线，便于在小型外壳中构建项目。该模块保留了一个 UFL 连接器，您可以使用外部天线来改善信号范围。板上有一个按键，只需按一次即可将 wifi shield 切换为 AP 模式。该模块配有计算机接口软件，您可以通过 USB-UART 转换器控制和升级模块。
wifi shield 包含一个 Micro SD 卡插槽，当 wifi shield 作为 TCP、UDP 服务器工作时，它就像一个记录器。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html)

## 规格参数

---
<table cellpadding="1" cellspacing="1" width="555">
  <tbody>
    <tr>
      <td>模块</td>
      <td>WIZnet FI250</td>
    </tr>
    <tr>
      <td>工作电压</td>
      <td>5V 或 3.3V（自动选择）</td>
    </tr>
    <tr>
      <td>电流</td>
      <td>300mA（最大值）</td>
    </tr>
    <tr>
      <td>单频段</td>
      <td>2.4GHz IEEE 802.11b/g/n</td>
    </tr>
    <tr>
      <td>天线</td>
      <td>板载 PCB 天线（保留 UFL 连接器）</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>1MB Flash 内存，128KB SRAM，1MB 串行 Flash</td>
    </tr>
    <tr>
      <td>接口</td>
      <td>UART（默认）/SPI（升级固件）</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td>69.0x53.5x23.5 mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td></td>
    </tr>
  </tbody>
</table>

## 使用方法

---
演示中我们使用 Arduino Leonardo，建议您使用硬件串口，软件串口不够快，无法与 Wifi 模块通信。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board.jpg)

### TCP 客户端

安装 Wifi Shield (Fi250) 库，下载演示代码 Wizfi250_Client。

```cpp
/*
//此演示使用 Arduino Leonardo 或 Seeeduino Lite。跳线连接 D0-WIFI_TX，D1_WIFI_RX；让 boot 引脚不连接
*/
#include <Arduino.h>
#include "WizFi250.h"

#define SSID      "STEST" //设置您的 SSID
#define KEY       "87654321" //设置您的密码
#define AUTH       "WPA2" // 设置加密类型


#define  HOST_IP       "192.168.168.185" //设置 TCP 服务器 IP
#define  REMOTE_PORT    9090 //设置端口
#define LOCAL_PORT      1234  //设置端口

#define spi_CS  8

WizFi250 wizfi250(&Serial1);
boolean returnValue=false;
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    Serial.println("--------- WIZFI250 TEST --------");
    // 等待 Wizfi250 初始化
    delay(1000);
    Serial.println("Join " SSID );
    wizfi250.reset();
    delay(1000);
    wizfi250.sendCommand("AT+WLEAVE\r");
    delay(1000);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
        Serial.println("Please Restart");
    } else {

        Serial.println("Successfully join " SSID);
        wizfi250.sendCommand("AT+WSTAT\r");
        delay(5);
        char c;
        while(wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
        delay(2000);
        returnValue=wizfi250.connect(HOST_IP,REMOTE_PORT,LOCAL_PORT);
        if(returnValue)
        Serial.println("Now you can send data to Server or receive data from Server!");
    }
}
void loop() {
    if(wizfi250.available()) {
        Serial.print((char)wizfi250.read());
    }
    if(Serial.available()) {
        wizfi250.print((char)Serial.read());
    }
}
```

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client.bmp)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client_arduino.png)

### Http 连接

安装 Wifi Shield (Fi250) 库，下载演示代码 Wizfi250_http。

```cpp
/*
//此演示使用 Arduino Leonardo 或 Seeeduino Lite。跳线连接 D0-WIFI_TX，D1_WIFI_RX；让 boot 引脚不连接
*/
#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WizFi250.h"

#define SSID      "STEST"   //设置您的 SSID
#define KEY       "87654321" //设置您的密码
#define AUTH       "WPA2" //设置加密类型

#define TSN_HOST_IP        "74.125.128.103" //google.com 服务器
//#define TSN_HOST_IP        "115.239.210.26" //baidu.com 服务器
//#define TSN_HOST_IP      "192.168.1.254"      // 广播
#define TSN_REMOTE_PORT    80
#define LOCAL_PORT     9000

#define spi_CS  8

//SoftwareSerial sprintSerial(4,5);   // 软件串口不稳定。
WizFi250 wizfi250(&Serial1);
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    digitalWrite(spi_CS,HIGH);
    Serial.println("--------- WIZFI250 TEST --------");
    // 等待 Wizfi250 初始化
    delay(1000);
    Serial.println("Join " SSID );
    delay(10);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
    } else {
        Serial.println("Successfully join  "  SSID);

        wizfi250.clear();

        wizfi250.connect(TSN_HOST_IP,TSN_REMOTE_PORT,LOCAL_PORT);
        delay(10);
        wizfi250.send("GET / HTTP/1.1\r\n\r\n");
    }
    char c;
    for(int i=0;i<320;i++){
        if (wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
    }
}
void loop() {
    while (wizfi250.available()) {
        Serial.write(wizfi250.read());
    }
    while (Serial.available()) {
        wizfi250.write(Serial.read());
    }
}
```

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_HTTP.jpg)

### 重置模块

* 如果您需要将模块重置为出厂默认设置，请快速按下功能按钮三次。MODE 和 WIFI LED 会闪烁，等待模块重置。

* 如果模块重置为默认设置，波特率会变为 115200。请注意这一点。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_reset.png)

### 一键设置 AP 模式

* 进入 AP 模式很简单。按下功能按钮，等待 WIFI LED 变为红色。您可以扫描 wifi 信号，WizFi250_AP_*******

* 按下 wifi shield Fi250 重置按钮退出 AP 模式。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI2350_AP.png)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI250APshow.png)

### 升级固件

升级固件的步骤如下所示：<big>通过 UART 直接连接您的 wifi shield(Fi250)，您可以使用 UartSBee 或其他 UART 工具</big>

在升级固件之前，您可能需要将模块设置为程序模式（短接 BOOT 跳线引脚）<big>[wizfi250firmware](http://wizwiki.net/wiki/doku.php?id=products:wizfi250:wizfi250firmware:start)</big>

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_update_firmware副本.png)

第一步操作

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware1.png)

第二步操作

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware2.png)

第三步操作

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware3.png)

* 当您更新成功后，移除跳线并重启模块。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Wifi_Shield_(Fi250)_V1.1_sch_pcb.zip](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip)

* [Wizfi250_programmer_s_guide.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_programmer_s_guide.pdf)

* [Wizfi250_quick_start_guide.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_quick_start_guide.pdf)

* [Wizfi250_datasheet.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_datasheet.pdf)

* [Wizfi250 库文件](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250.zip)

* [PDF_Wifi_Shield_(Fi250)_V1.1](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wifi_Shield-Fi250-V1.1.pdf)

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