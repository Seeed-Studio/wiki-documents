---
description: XIAO W5500 以太网适配器入门指南
title: XIAO W5500 以太网适配器入门指南
keywords:
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 9
slug: /cn/xiao_w5500_ethernet_adapter
last_update:
  date: 06/04/2025
  author: Citric
---

## 介绍

一款紧凑的 PoE 开发板，搭载 XIAO ESP32S3 Plus，集成隔离式 PoE 模块和基于 TPS563201 的电源转换器，提供干净的 5V 电源为微控制器供电。非常适合物联网项目、智能家居设备和工业自动化——可靠的以太网连接和低功耗无线处理的多功能组合简化了安装并提升了系统性能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/xiao_w5500_ethernet_adapter" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

### 特性

- **高性能微控制器**：基于 XIAO ESP32S3 Plus 平台构建，我们的开发板提供强大的处理能力和高效的无线连接，非常适合复杂的物联网和嵌入式应用。

- **集成隔离式 PoE 和电源转换**：配备带内置隔离的强大 PoE 模块，开发板安全接受 12V 以太网电源输入。高效的 TPS563201 降压转换器将 12V 降压至稳定的 5V 电源轨，为 XIAO ESP32S3 Plus 提供最佳电源。

- **可靠的以太网连接**：配备板载 W5500 以太网芯片和标准 RJ45 接口，开发板确保稳定的有线网络访问，实现无缝数据传输和远程管理。

- **多功能 I/O 选项**：双面 I/O 输出，您可以轻松扩展功能并与各种传感器和外设接口，根据确切规格定制您的应用。

- **紧凑且即用型设计**：在小尺寸中结合集成 PoE、隔离电路和以太网连接，该开发板简化了原型制作，并能在智能家居、工业自动化或网络设备项目中高效部署。

### 规格参数

<div class="table-center">
	<table align="center">
		<tr>
			<th>参数</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>MCU</td>
			<td>XIAO ESP32-S3 Plus</td>
		</tr>
		<tr>
			<td>天线</td>
			<td>2.4GHz 棒状天线 (2.81dBi)</td>
		</tr>
		<tr>
			<td>USB Type-C</td>
			<td>输入电压 (Type-C): 5V</td>
		</tr>
		<tr>
			<td>PoE 芯片</td>
			<td>MQ7813T120</td>
		</tr>
		<tr>
			<td>PoE 电源</td>
			<td>PoE IEEE802.3af<br />输出电流: 12V/1.1A<br />高效率 86% (输入 48V，负载 12V@1.1A)</td>
		</tr>
		<tr>
			<td>以太网芯片</td>
			<td>WIZnet W5500</td>
		</tr>
		<tr>
			<td>以太网接口</td>
			<td>RJ45<br />10 或 100Mbps 以太网</td>
		</tr>
		<tr>
			<td>TCP/IP 协议</td>
			<td>TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE</td>
		</tr>
		<tr>
			<td>LED 指示灯</td>
			<td>电源 x 1<br />用户 x 1</td>
		</tr>
		<tr>
			<td>按钮</td>
			<td>复位</td>
		</tr>
		<tr>
			<td>I/O 接口</td>
			<td></td>
		</tr>
		<tr>
			<td>产品尺寸</td>
			<td>83 x 118 x 26 mm</td>
		</tr>
		<tr>
			<td>产品重量</td>
			<td>75g</td>
		</tr>
		<tr>
			<td>外壳</td>
			<td>白色 3D 打印</td>
		</tr>
	</table>
</div>

## 硬件概述

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Product Appearance" label="产品外观">

下面的图片展示了 XIAO W5500 以太网适配器的外观设计。您可以看到紧凑的外形尺寸、以太网端口以及用于连接 XIAO 系列微控制器的接口。这种设计便于集成到各种对空间和可靠性要求较高的项目中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/2.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/3.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value="Inside the Product" label="产品内部">

下面的图片展示了 XIAO W5500 以太网适配器的内部结构。在这里，您可以观察到内部 PCB 布局、W5500 以太网控制器芯片以及支持稳定以太网通信和可选以太网供电 (PoE) 功能的支撑电路。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/1.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>


## 入门指南


### 接线说明

有两种推荐的方式将您的 XIAO W5500 以太网适配器连接到网络：

1. **使用支持 PoE 的交换机或路由器：**
   - 使用标准 RJ45 以太网线缆将设备直接连接到支持 PoE 的交换机或路由器。这种设置允许通过同一根线缆传输数据和电力，因此您无需为 XIAO 板单独提供电源。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/4.jpg" style={{width:600, height:'auto'}}/></div>


2. **使用标准以太网线缆：**
   - 如果您使用的是普通以太网线缆（不支持 PoE），请将一端连接到您的网络，另一端连接到 XIAO W5500 以太网适配器。在这种情况下，您还必须通过 XIAO 板的 USB-C 端口提供稳定的 5V 电源，因为以太网线缆只能提供数据连接。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/6.jpg" style={{width:600, height:'auto'}}/></div>


> **提示：** 确保您的以太网线缆长度足够满足您的设置需求，并且状态良好，以确保可靠的通信。

### 复位按钮

XIAO W5500 以太网适配器配备了复位按钮。如果您的设备程序运行不正常或需要重启系统，只需按一次复位按钮。这将重启设备并重新初始化程序，有助于从意外状态或错误中恢复。


## ESP32 Arduino 以太网库

XIAO W5500 以太网适配器使用 ESP32 Arduino 以太网库进行网络连接。该库提供了一套 API 和示例，用于管理以太网连接、处理事件以及在基于 ESP32 的板上构建网络应用程序。

有关更多详细信息、高级用法和最新更新，请参考官方 Espressif 文档：[ESP32 Arduino 以太网库文档](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ethernet.html)

## XIAO 示例

现在您已经安装了所需的库并了解了基本功能，让我们探索一些 XIAO W5500 以太网适配器的实际示例。这些演示将帮助您入门并展示如何为您自己的项目调整代码。


**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div><br />

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE 中。

- 要在后续例程中使用 **Seeed Studio XIAO ESP32-S3 Plus**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

**步骤 3.** 所需材料

要完成以下示例，您需要下面列出的硬件。除了 XIAO W5500 以太网适配器外，请确保您有一根长度足够的以太网电缆用于您的设置。您可以使用具有以太网供电 (PoE) 功能的电缆，或标准以太网电缆。如果您使用标准以太网电缆（不带 PoE），请确保您的 XIAO 开发板单独使用稳定的 5V 电源供电。


<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO W5500 以太网适配器</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/5.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="/cn/xiao_w5500_ethernet_adapter" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### 演示 1：以太网事件记录器

**目的：**
此演示将以太网事件记录到串行控制台，包括 MAC 地址和当前 IP 地址（由 DHCP 分配）。它演示了如何初始化 W5500 以太网接口并监控其状态。

**典型用例：**
将此作为验证硬件设置和网络连接的起点。它对于调试以及需要监控以太网状态或记录网络事件的项目很有用。

```cpp
#include <SPI.h>
#include <ETH.h>
#include <WiFi.h>

static bool eth_connected = false;

#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS   D1
#define ETH_PHY_IRQ  -1
#define ETH_PHY_RST  -1
#endif

// SPI 引脚
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10


// 响应以太网事件：
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // 这将在设置期间发生，当以太网服务启动时
      Serial.println("ETH Started");
      //在此设置以太网主机名
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // 这将在插入以太网电缆时发生
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // 这将在我们通过DHCP获得IP地址时发生：
      Serial.print("Got an IP Address for ETH MAC: ");
      Serial.print(ETH.macAddress());
      Serial.print(", IPv4: ");
      Serial.print(ETH.localIP());
      if (ETH.fullDuplex()) {
        Serial.print(", FULL_DUPLEX");
      }
      Serial.print(", ");
      Serial.print(ETH.linkSpeed());
      Serial.println("Mbps");
      eth_connected = true;

      // 取消注释以自动与服务器建立测试连接：
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // 这将在拔出以太网电缆时发生
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // 这将在ETH接口停止时发生，但这永远不会发生
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// 尝试从网络服务器读取内容：
void testClient(const char * host, uint16_t port)
{
  Serial.print("\nConnecting to ");
  Serial.print(host);
  Serial.print(":");
  Serial.println(port);

  NetworkClient client;
  if (!client.connect(host, port)) {
    Serial.println("connection failed");
    return;
  }
  client.printf("GET / HTTP/1.1\r\nHost: %s\r\n\r\n", host);
  while (client.connected() && !client.available());
  while (client.available()) {
    Serial.write(client.read());
  }

  Serial.println("closing connection\n");
  client.stop();
}

// 在启动/重置后初始化所有内容：
void setup()
{
  // 等待硬件初始化：
  delay(500);

  // 此示例将向串行控制台记录一些信息：
  Serial.begin(115200); // 假设计算机将以115200波特率连接到串行端口
  Serial.println("Setup...");
  
  Serial.println("Registering event handler for ETH events...");
  Network.onEvent(onEvent);
  
  // 启动以太网（这不会同时启动WiFi）
  Serial.println("Starting ETH interface...");
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  Serial.println("Waiting for Ethernet connection");
  while (!eth_connected) {
    delay(500);
    Serial.print(".");
  }
}

void loop()
{
  if (eth_connected) {
    testClient("baidu.com", 80);
  }
  delay(20000);
}
```

在115200波特率下打开串口监视器查看以太网事件和IP信息。代码将每20秒尝试连接到"baidu.com"作为连接测试。

**自定义：**
- 在`testClient("baidu.com", 80);`中更改测试服务器为您自己的服务器或本地网络设备。
- 使用事件处理程序在网络事件发生时触发自定义操作。

### 演示2：简单以太网Web服务器

**目的：**
此演示使用W5500以太网适配器在XIAO ESP32-S3上设置基本的HTTP Web服务器。它响应根URL的请求，并为未知路由提供简单的404处理程序。

**典型用例：**
适用于希望通过有线以太网连接直接从设备提供网页或REST API的物联网项目。

```cpp
#include <ETH.h>
#include <WebServer.h>
#include <ESPmDNS.h>


#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS   D1
#define ETH_PHY_IRQ  -1
#define ETH_PHY_RST  -1
#endif

// SPI 引脚
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10

static bool eth_connected = false;
WebServer server(80);

// ESP32-POE 没有板载 LED，所以如果你想使用 LED，你必须将其连接到 UEXT 或 10 引脚扩展之一的扩展引脚上。
// 在这个例子中，默认值是 13，即 UEXT 引脚 6，或扩展 2 引脚 1。如果你想将 LED 连接到另一个引脚，你需要相应地更改此值。
const int led_pin = 21;

// Web 服务器：处理对 /（服务器根目录）的请求
void handleRoot() {
  digitalWrite(led_pin, 1);
  server.send(200, "text/plain", "hello from esp32!");
  delay(100);    // 等待 x 毫秒，这样我们有时间看到 LED 闪烁
  digitalWrite(led_pin, 0);
}

// Web 服务器：处理对未知 URI（未知"文件"）的请求
void handleNotFound() {
  digitalWrite(led_pin, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  // digitalWrite(led_pin, 0);  // 如果这行被注释掉，LED 将在 404 错误的情况下保持点亮
}

// 处理以太网事件：
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // 这将在设置期间发生，当以太网服务启动时
      Serial.println("ETH Started");
      //在这里设置 eth 主机名
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // 这将在插入以太网电缆时发生
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // 这将在我们通过 DHCP 获得 IP 地址时发生：
      Serial.print("Got an IP Address for ETH MAC: ");
      Serial.print(ETH.macAddress());
      Serial.print(", IPv4: ");
      Serial.print(ETH.localIP());
      if (ETH.fullDuplex()) {
        Serial.print(", FULL_DUPLEX");
      }
      Serial.print(", ");
      Serial.print(ETH.linkSpeed());
      Serial.println("Mbps");
      eth_connected = true;

      // 取消注释以自动与服务器建立测试连接：
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // 这将在拔出以太网电缆时发生
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // 这将在 ETH 接口停止时发生，但这永远不会发生
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// 尝试从 Web 服务器读取内容：
void testClient(const char * host, uint16_t port)
{
  Serial.print("\nConnecting to ");
  Serial.print(host);
  Serial.print(":");
  Serial.println(port);

  NetworkClient client;
  if (!client.connect(host, port)) {
    Serial.println("connection failed");
    return;
  }
  client.printf("GET / HTTP/1.1\r\nHost: %s\r\n\r\n", host);
  while (client.connected() && !client.available());
  while (client.available()) {
    Serial.write(client.read());
  }

  Serial.println("closing connection\n");
  client.stop();
}

// 在启动/重置后初始化所有内容：
void setup()
{
  // 等待硬件初始化：
  delay(500);

  // 此示例将向串行控制台记录一些信息：


  Serial.begin(115200); // 假设计算机将以 115200 波特率连接到串行端口
  Serial.print("Setup...");
  

  Serial.print("Registering event handler for ETH events...");
  Network.onEvent(onEvent);
  
  // 启动以太网（这不会同时启动 WiFi）
  Serial.print("Starting ETH interface...");
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  
  // 多播 DNS (mDNS) 允许在没有 DNS 服务器的情况下将主机名解析为 IP 地址
  if (MDNS.begin("esp32")) {  // 使用 mDNS 名称 "esp32"
    Serial.println("MDNS responder started");
  }

  // Web 服务器处理程序：
  // 处理对 /（服务器根目录）的请求
  server.on("/", handleRoot);
  // 对另一个 URI 的最小化处理（LED 在这个上不会闪烁）：
  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });
  // 处理所有其他 URI：
  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");
  
  pinMode( led_pin, OUTPUT);  // 将 LED 引脚初始化为数字输出（开/关）
}

void loop ()
{
  server.handleClient();
  delay(2);//允许 CPU 切换到其他任务
}
```

一旦设备获得IP地址（在串口监视器中显示），打开浏览器并导航到 `http://<your_device_ip>/`。根端点将响应"hello from esp32!"并闪烁LED。尝试访问 `/inline` 或任何其他路径以查看不同的响应。

**自定义：**
- 使用 `server.on("/yourpath", handlerFunction);` 添加更多端点。
- 将传感器读数或设备控制集成到您的Web服务器响应中。


### 演示3：以太网摄像头流媒体服务器

> **提醒：**
> 此演示需要来自 [XIAO ESP32-S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html) 开发板的摄像头模块。XIAO W5500以太网适配器本身不包含摄像头，摄像头插座目前也不单独销售。如果您之前购买了XIAO ESP32-S3 Sense开发板，您可以在此演示中使用其摄像头。为了整洁的安装，请参考[资源](#resources)部分，了解与此设置兼容的带摄像头孔的3D打印外壳。

**目的：**
这个高级演示将XIAO ESP32-S3摄像头模块与W5500以太网适配器结合，通过以太网流式传输摄像头图像。它演示了如何初始化摄像头、配置以太网接口并启动用于视频流的Web服务器。

**典型用例：**
非常适合监控、远程监视或任何需要通过可靠有线连接进行实时图像流传输的项目。

:::tip
以下程序仅适用于.ino文件，编译此程序需要一些头文件。您可以通过以下链接获取项目的完整源代码。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example/tree/main/XIAO_PoE_CameraWebServer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />
:::

```cpp
#include "esp_camera.h"
#include <ETH.h>
#include <WiFi.h>  // 用于事件处理

// 定义正在使用的摄像头模型
#define CAMERA_MODEL_XIAO_ESP32S3  // 具有PSRAM

// 包含摄像头引脚定义
#include "camera_pins.h"

#define USE_TWO_ETH_PORTS 0

// 以太网PHY和SPI引脚定义（根据您的硬件进行调整）
#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS D1
#define ETH_PHY_IRQ -1
#define ETH_PHY_RST -1
#endif

#define ETH_SPI_SCK D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10

// 用于跟踪以太网连接状态的全局变量
static bool eth_connected = false;

// 函数声明
void startCameraServer();
void setupLedFlash(int pin);
void onEvent(arduino_event_id_t event, arduino_event_info_t info);

void setup() {
  Serial.begin(115200);
  delay(2000);
  // 注册以太网事件处理程序
  Network.onEvent(onEvent);

  // 初始化SPI和以太网
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  // 等待以太网连接
  Serial.print("等待以太网连接");
  while (!eth_connected) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("以太网已连接");

  Serial.setDebugOutput(true);
  Serial.println();

  // 摄像头配置结构
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;  // 使用JPEG进行流传输
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // 根据PSRAM可用性调整配置
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  // ESP-EYE的特殊引脚设置
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // 初始化摄像头
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("摄像头初始化失败，错误代码 0x%x", err);
    return;
  }

  // 为特定摄像头模块调整传感器设置
  sensor_t *s = esp_camera_sensor_get();
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // 垂直翻转
    s->set_brightness(s, 1);   // 增加亮度
    s->set_saturation(s, -2);  // 降低饱和度
  }
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);  // 降低初始帧大小
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

  // 如果定义了引脚，则设置LED闪光灯
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  // 启动摄像头Web服务器
  startCameraServer();

  // 将访问URL打印到串行监视器
  Serial.print("摄像头就绪！使用 'http://");
  Serial.print(ETH.localIP());
  Serial.println("' 进行连接");
}

void loop() {
  // 不需要额外处理；摄像头服务器在另一个任务中运行
  delay(10000);
}

// 以太网事件处理程序
void onEvent(arduino_event_id_t event, arduino_event_info_t info) {
  switch (event) {
    case ARDUINO_EVENT_ETH_START:
      Serial.println("ETH 已启动");
      // 在此处设置以太网主机名
      ETH.setHostname("esp32-eth0");
      break;
    case ARDUINO_EVENT_ETH_CONNECTED:
      Serial.println("ETH 已连接");
      break;
    case ARDUINO_EVENT_ETH_GOT_IP:
      Serial.printf("ETH 获得IP: '%s'\n", esp_netif_get_desc(info.got_ip.esp_netif));
      Serial.println(ETH);
      eth_connected = true;
      break;
    case ARDUINO_EVENT_ETH_LOST_IP:
      Serial.println("ETH 丢失IP");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_DISCONNECTED:
      Serial.println("ETH 已断开连接");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_STOP:
      Serial.println("ETH 已停止");
      eth_connected = false;
      break;
    default:
      break;
  }
}
```

打开串口监视器，在设备连接到网络后查找设备的IP地址。在浏览器中输入IP地址以访问摄像头流。

**自定义：**
- 在 `camera_config_t` 结构中调整摄像头设置（分辨率、质量、帧大小）。
- 修改Web服务器代码以添加身份验证或其他端点。
- 调整以太网引脚定义以匹配您的自定义硬件。


## 资源

- **[PDF]** [W5500 数据手册](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/W5500_ds_datasheet.pdf)
- **[PDF]** [XIAO W5500 以太网适配器原理图](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20_SCH_20250422B.pdf)
- **[STEP]** [XIAO W5500 以太网适配器 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.step)
- **[STEP]** [XIAO W5500 以太网适配器外壳 3D STEP（无预钻摄像头孔）](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_shell.stp)
- **[STEP]** [XIAO W5500 以太网适配器盖板 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_covers.stp)
- **[KICAD]** [XIAO W5500 以太网适配器 PCB](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.kicad_pcb)
- **[GITHUB]** [XIAO W5500 以太网适配器仓库](https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example)


## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>