---
description:  Wifi Shield V1.1
title:  Wifi Shield V1.1
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wifi_Shield_V1.1
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Wifi Shield V1.1‏‎
category: Discontinued
bzurl:
oldwikiname: Wifi_Shield_V1.1‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Wifi_Shield_V1-1
sku:
tags:
--- -->

这款 Wifi Shield 使用 RN171 wifi 模块为您的 Arduino/Seeeduino 提供串行以太网功能。使用这款扩展板，只需两个引脚即可将您的设备连接到 802.11b/g 无线网络。它配备独立天线，可以覆盖更广的范围并传输更强的信号。支持常见的 TCP、UDP 和 FTP 通信协议，这款 Wifi Shield 可以满足大多数无线网络项目的需求，如智能家居网络、机器人控制或个人气象站等。我们为这款扩展板准备了简单便捷的命令集，让您可以使用简洁明了的代码来运行功能。

## 规格参数 ##

- 电压：3.3~5.5 V

- 电流：25~400mA

- 发射功率：0-10 dBm

- 频率：2402~2480 MHz

- 信道：0~13

- 网络速率：802.11b 为 1-11 Mbps / 802.11g 为 6-54Mbps

- 尺寸：60X56X19 mm

- 净重：24±1 g

- 安全 WiFi 认证：WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

- 内置网络应用：DHCP 客户端、DNS 客户端、ARP、ICMP ping、FTP、TELNET、HTTP、UDP、TCP

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_Interface_Function.jpg)

- **RN-171：**WIFLY GSX 802.11 b/g 无线局域网模块。

- **软件串口配置区域：** 选择您想要用作 RN171 的 RX 和 TX 的数字引脚。

- **复位按钮：** 复位 Wifi Shield。

- **状态指示灯说明：**
- 当没有连接时，两个 LED（D1，D5）将交替闪烁。

- 连接到路由器后，AP 关联状态指示灯（D1）将闪烁。

- 连接到路由器和 TCP 服务器后，AP 状态指示灯（D1）将常亮。

## 入门指南 ##

### 演示：Wifly_Test ###

从 github 下载 [Wifi Shield 库](https://github.com/Seeed-Studio/WiFi_Shield)，将其解压到 Arduino 的 libraries 文件夹中。

```cpp

#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN

// 引脚连接
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX
SoftwareSerial uart(2, 3);
WiFly wifly(&uart);
//WiFly wifly(&Serial1);     // for leonardo, use hardware serial - Serial1

void setup() {
  uart.begin(9600);

  Serial.begin(9600);
  Serial.println("--------- WIFLY TEST --------");

  // 等待 wifly 初始化
  delay(3000);

  uart.begin(9600);     // WiFly UART 波特率: 9600

  wifly.reset();

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  // 获取 WiFly 参数
  wifly.sendCommand("get everthing\r");
  char c;
  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
    Serial.print((char)c);
  }

  if (wifly.commandMode()) {
    Serial.println("Enter command mode. Send \"exit\"(with \\r) to exit command mode");
  }
}

void loop() {
  while (wifly.available()) {
    Serial.write(wifly.read());
  }

  while (Serial.available()) {
    wifly.write(Serial.read());
  }
}

```

1.将软件串口的 D2(RX) 和 D3(TX) 与 WiFi shield 的 TX 和 RX 连接。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_UART.jpg)

2.修改代码以更新您的接入点信息

```

#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN

```

3.将程序下载到 Arduino，打开串口监视器，设置波特率为 9600，设置回车键为回车符。WiFi Shield 将输出一些信息并进入命令模式。在命令模式下，您可以输入一些命令进行交互：

  **get wlan** - 获取 wlan 信息

  **join** - 加入网络

 **ping** seeedstudio.com - ping seeed!

  更多命令请参考 [WiFi 模块用户手册](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf)

  ![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/Wi-Fi_Info.png)

4.进一步使用，请尝试 WiFi shield 库的其他示例。

### 其他演示 ###

## 故障排除 ##

如果 Wifi Shield 不响应任何命令，请尝试按照[指南](https://seeeddoc.github.io/Wifly_171_troubleshooting/)进行恢复出厂设置

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[Eagle]** [WiFi Shield Eagle 文件](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip)
- **[PDF]**[wifi Shield V1.1 PCB](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1.pdf)
- **[PDF]**[wifi Shield V1.1 SCH](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1%20SCH.pdf)
- **[数据手册]**[RN-171 数据手册](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-171.pdf)
- **[库文件]**[Wifi Shield 库](https://github.com/Seeed-Studio/WiFi_Shield)
- **[手册]**[WiFi 模块用户手册](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf)

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