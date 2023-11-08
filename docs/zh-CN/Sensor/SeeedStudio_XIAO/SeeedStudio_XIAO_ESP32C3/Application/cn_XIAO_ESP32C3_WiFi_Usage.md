---
description: Seeed Studio XIAO ESP32C3上的WiFi使用。
title: WiFi
keywords:
- Xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_WiFi_Usage
last_update:
  date: 29/10/2023
  author: Xin Ping Li
---

# 无线网络使用

Seeed Studio XIAO ESP32C3支持IEEE 802.11b/g/n的WiFi连接。本wiki将介绍该板子上WiFi使用的基本知识。

> ⚠️当您尝试使用该板作为热点(接入点)时，请小心。可能会有过热的问题，导致烧伤。

## 硬件设置

- **步骤 1.** 将附带的**WiFi/蓝牙天线**连接到电路板上的**IPEX连接器**
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **步骤  2.**通过USB Type-C数据线将XIAO ESP32C3连接到您的计算机

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## 扫描WiFi网络(站模式)

在本例中，我们将使用XIAO ESP32C3扫描其周围可用的WiFi网络。在这里，单板将配置为STA (Station)模式。

- **步骤 1.** 将下面的代码复制粘贴到Arduino IDE中

```cpp
#include "WiFi.h"

void setup()
{
    Serial.begin(115200);

    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);

    Serial.println("Setup done");
}

void loop()
{
    Serial.println("scan start");

    // WiFi.scanNetworks will return the number of networks found
    int n = WiFi.scanNetworks();
    Serial.println("scan done");
    if (n == 0) {
        Serial.println("no networks found");
    } else {
        Serial.print(n);
        Serial.println(" networks found");
        for (int i = 0; i < n; ++i) {
            // Print SSID and RSSI for each network found
            Serial.print(i + 1);
            Serial.print(": ");
            Serial.print(WiFi.SSID(i));
            Serial.print(" (");
            Serial.print(WiFi.RSSI(i));
            Serial.print(")");
            Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN)?" ":"*");
            delay(10);
        }
    }
    Serial.println("");

    // Wait a bit before scanning again
    delay(5000);
}
```

**步骤 2.** 上传代码并打开串行监视器开始扫描WiFi网络

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-1.jpg" alt="pir" width={500} height="auto" /></div>

## 连接WiFi网络

在本例中，我们将使用XIAO ESP32C3连接WiFI网络。

- **步骤 1.** 将下面的代码复制粘贴到Arduino IDE中
```cpp
#include <WiFi.h>

const char* ssid     = "your-ssid";
const char* password = "your-password";   

void setup()
{
    Serial.begin(115200);
    delay(10);

    // We start by connecting to a WiFi network

    Serial.println();
    Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
}  
void loop()
{
  }
```

**步骤 2.** 上传代码，打开串口监视器，检查单板是否连接WiFI网络


<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-2.jpg" alt="pir" width={500} height="auto" /></div>

## 用作接入点

在本例中，我们将使用XIAO ESP32C3作为WiFi接入点，其他设备可以连接到它。这类似于手机的WiFi热点功能。

- **步骤 1.** 将下面的代码复制粘贴到Arduino IDE中

```cpp
#include "WiFi.h"
void setup()
{
  Serial.begin(115200);
  WiFi.softAP("ESP_AP", "123456789");
}

void loop()
{
  Serial.print("Host Name:");
  Serial.println(WiFi.softAPgetHostname());
  Serial.print("Host IP:");
  Serial.println(WiFi.softAPIP());
  Serial.print("Host IPV6:");
  Serial.println(WiFi.softAPIPv6());
  Serial.print("Host SSID:");
  Serial.println(WiFi.SSID());
  Serial.print("Host Broadcast IP:");
  Serial.println(WiFi.softAPBroadcastIP());
  Serial.print("Host mac Address:");
  Serial.println(WiFi.softAPmacAddress());
  Serial.print("Number of Host Connections:");
  Serial.println(WiFi.softAPgetStationNum());
  Serial.print("Host Network ID:");
  Serial.println(WiFi.softAPNetworkID());
  Serial.print("Host Status:");
  Serial.println(WiFi.status());
  delay(1000);
}
```

**步骤 2.** 上传代码并打开Serial Monitor查看有关WiFI接入点的更多细节

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-3.png" alt="pir" width={700} height="auto" /></div>

**步骤  3.** 扫描个人电脑或移动电话上的WiFi网络，您将能够使用我们在代码中指定的密码连接到这个新创建的网络

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-4.png" alt="pir" width="{300}" height="auto" /></div>

现在您将看到串行监视器上的主机连接数**已更新为1**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-5.png" alt="pir" width={700} height="auto" /></div>

## XIAO ESP32C3 & 家庭助手

我们很高兴地宣布，我们已经支持XIAO ESP32C3访问ESPHome和家庭助手!
有关本节的更多信息，请参考相关教程。

- [使用ESPHome将Grove模块连接到家庭助理](https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/)
- [LinkStar家庭助手](https://wiki.seeedstudio.com/h68k-ha-esphome/)

## 技术支持和产品讨论
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
