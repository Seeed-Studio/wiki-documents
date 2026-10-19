---
description: XIAO W5500 Ethernet Adapter 入门指南
title: XIAO W5500 Ethernet Adapter 入门指南
keywords:
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 9
slug: /xiao_w5500_ethernet_adapter
sku: 113100042
last_update:
  date: 10/13/2026
  author: Citric
createdAt: '2025-06-10'
updatedAt: '2026-08-03'
url: https://wiki.seeedstudio.com/cn/xiao_w5500_ethernet_adapter/
---

## 介绍

这是一款紧凑型 PoE 开发板，搭载 XIAO ESP32S3 Plus，集成隔离 PoE 模块和基于 TPS563201 的电源转换，为微控制器提供干净稳定的 5V 供电。非常适合物联网项目、智能家居设备和工业自动化场景——在这些应用中，可靠的以太网连接与低功耗无线处理的多功能组合，可以简化安装并提升系统性能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

### 特性

- **高性能微控制器**：基于 XIAO ESP32S3 Plus 平台打造，本开发板提供强大的处理能力和高效的无线连接，非常适合复杂的物联网和嵌入式应用。

- **集成隔离 PoE 与电源转换**：配备高可靠性的 PoE 模块并带有隔离功能，开发板可安全接收 12V 以太网供电输入。高效率的 TPS563201 降压转换器随后将 12V 降至稳定的 5V 电源轨，为 XIAO ESP32S3 Plus 提供最佳供电。

- **可靠的以太网连接**：板载 W5500 以太网芯片和标准 RJ45 接口，确保稳定的有线网络接入，实现无缝的数据传输和远程管理。

- **多样化 I/O 选项**：采用双面 I/O 输出设计，便于扩展功能并连接多种传感器和外设，从而根据需求精确定制你的应用。

- **紧凑且即插即用的设计**：在小巧的尺寸中集成 PoE、隔离电路和以太网连接，使该开发板简化原型制作，并能高效部署于智能家居、工业自动化或网络设备等项目中。

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
   <td>2.4GHz 棒状天线（2.81dBi）</td>
  </tr>
  <tr>
   <td>USB Type-C</td>
   <td>输入电压（Type-C）：5V</td>
  </tr>
  <tr>
   <td>PoE 芯片</td>
   <td>MQ7813T120</td>
  </tr>
  <tr>
   <td>PoE 电源</td>
   <td>PoE IEEE802.3af<br />输出电流：12V/1.1A<br />高效率 86%（输入 48V，负载 12V@1.1A）</td>
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
   <td>按键</td>
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

## 硬件概览

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Product Appearance" label="产品外观">

下图展示了 XIAO W5500 Ethernet Adapter 的外部设计。你可以看到其紧凑的外形尺寸、以太网端口，以及用于连接 XIAO 系列微控制器的接口。这样的设计便于在对空间和可靠性要求较高的各类项目中进行集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/2.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/3.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value="Inside the Product" label="产品内部">

下图展示了 XIAO W5500 Ethernet Adapter 的内部结构。你可以看到内部 PCB 布局、W5500 以太网控制芯片，以及用于实现稳定以太网通信和可选以太网供电（PoE）功能的相关电路。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/1.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 入门指南

### 接线说明

将 XIAO W5500 Ethernet Adapter 连接到网络，推荐以下两种方式：

1. **使用支持 PoE 的交换机或路由器：**
   - 使用标准 RJ45 以太网线将设备直接连接到支持 PoE 的交换机或路由器。此连接方式可以通过同一根网线同时传输数据和电源，因此你无需为 XIAO 板单独供电。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/4.jpg" style={{width:600, height:'auto'}}/></div>

2. **使用标准以太网线：**
   - 如果你使用的是普通以太网线（不带 PoE），请将一端连接到你的网络，另一端连接到 XIAO W5500 Ethernet Adapter。在这种情况下，你还必须通过 USB-C 接口为 XIAO 板提供稳定的 5V 供电，因为以太网线只会提供数据连接。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/6.jpg" style={{width:600, height:'auto'}}/></div>

> **提示：** 请确保你的以太网线长度足够且状态良好，以保证通信可靠。

### 复位按键

XIAO W5500 Ethernet Adapter 配备了一个复位按键。如果设备上的程序未按预期运行，或者你需要重启系统，只需按下一次复位按键。设备将会重新启动并重新初始化程序，有助于从异常状态或错误中恢复。

## ESP32 Arduino Ethernet 库

XIAO W5500 Ethernet Adapter 使用 ESP32 Arduino Ethernet 库来实现网络连接。该库提供了一组 API 和示例，用于管理以太网连接、处理事件，以及在基于 ESP32 的开发板上构建网络应用。

有关更多详细信息、高级用法以及最新更新，请参考乐鑫官方文档：[ESP32 Arduino Ethernet Library Documentation](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ethernet.html)

## XIAO 示例

在你安装好所需库并了解基本功能之后，我们来一起体验一些适用于 XIAO W5500 Ethernet Adapter 的实用示例。这些演示将帮助你快速上手，并展示如何将代码适配到你自己的项目中。

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

**步骤 2.** 选择你的开发板型号并将其添加到 Arduino IDE 中。

- 若要在后续示例中使用 **Seeed Studio XIAO ESP32-S3 Plus**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

**步骤 3.** 所需材料

要完成以下示例，你需要准备下面列出的硬件。除了 XIAO W5500 Ethernet Adapter 外，请确保你有一根长度适合你实际布置的以太网线。你可以使用支持以太网供电（PoE）的网线，也可以使用标准以太网线。如果使用标准以太网线（不带 PoE），请确保通过稳定的 5V 电源单独为 XIAO 板供电。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO W5500 Ethernet Adapter</th>
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

### 示例 1：以太网事件日志

**目的：**
本示例会将以太网事件记录到串口控制台，包括 MAC 地址和当前 IP 地址（由 DHCP 分配）。它演示了如何初始化 W5500 以太网接口并监控其状态。

**典型应用场景：**
可将此示例作为起点，用于验证你的硬件连接和网络连通性。它对于调试，以及在需要监控以太网状态或记录网络事件的项目中非常有用。

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

// SPI pins
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10


// React to Ethernet events:
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // This will happen during setup, when the Ethernet service starts
      Serial.println("ETH Started");
      //set eth hostname here
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // This will happen when the Ethernet cable is plugged 
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // This will happen when we obtain an IP address through DHCP:
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

      // Uncomment to automatically make a test connection to a server:
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // This will happen when the Ethernet cable is unplugged 
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // This will happen when the ETH interface is stopped but this never happens
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// Try to read something from a webserver:
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

// Initializing everything at start up / after reset:
void setup()
{
  // Wait for the hardware to initialize:
  delay(500);

  // This sketch will log some information to the serial console:
  Serial.begin(115200); // Assuming computer will be connected to serial port at 115200 bauds
  Serial.println("Setup...");

  Serial.println("Registering event handler for ETH events...");
  Network.onEvent(onEvent);

  // Starth Ethernet (this does NOT start WiFi at the same time)
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

在 115200 波特率下打开串口监视器以查看以太网事件和 IP 信息。代码将每隔 20 秒尝试连接一次 "baidu.com" 作为连通性测试。

**自定义：**

- 将 `testClient("baidu.com", 80);` 中的测试服务器更改为你自己的服务器或本地网络设备。
- 使用事件处理程序在网络事件发生时触发自定义操作。

### 示例 2：简单以太网 Web 服务器

**目的：**
此示例在 XIAO ESP32-S3 上使用 W5500 以太网适配器搭建一个基础的 HTTP Web 服务器。它会响应根 URL 的请求，并为未知路由提供一个简单的 404 处理程序。

**典型使用场景：**
非常适合需要通过有线以太网连接，直接从设备提供网页或 REST API 的 IoT 项目。

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

// SPI pins
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10

static bool eth_connected = false;
WebServer server(80);

// ESP32-POE doesn't have an onboard LED so if you want to use a LED you have to attach one to the extended pins on either UEXT or one of the 10 pin extentions.
// in this example the default value is 13 which is UEXT pin 6, or Extention 2 pin 1. If you want to attach the LED to another pin you need to change this value accordingly.
const int led_pin = D0;

// Web Server: handle a request to / (root of the server)
void handleRoot() {
  digitalWrite(led_pin, 1);
  server.send(200, "text/plain", "hello from esp32!");
  delay(100);    // Wait x ms so we have time to see the Led blinking
  digitalWrite(led_pin, 0);
}

// Web Server: handle a request to an unknown URI (unknown "File")
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
  // digitalWrite(led_pin, 0);  // If this is commented out, the LED will stay on in case of 404 error
}

// Handle Ethernet Events:
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // This will happen during setup, when the Ethernet service starts
      Serial.println("ETH Started");
      //set eth hostname here
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // This will happen when the Ethernet cable is plugged 
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // This will happen when we obtain an IP address through DHCP:
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

      // Uncomment to automatically make a test connection to a server:
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // This will happen when the Ethernet cable is unplugged 
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // This will happen when the ETH interface is stopped but this never happens
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// Try to read something from a webserver:
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

// Initializing everything at start up / after reset:
void setup()
{
  // Wait for the hardware to initialize:
  delay(500);

  // This sketch will log some information to the serial console:


  Serial.begin(115200); // Assuming computer will be connected to serial port at 115200 bauds
  Serial.print("Setup...");


  Serial.print("Registering event handler for ETH events...");
  Network.onEvent(onEvent);

  // Starth Ethernet (this does NOT start WiFi at the same time)
  Serial.print("Starting ETH interface...");
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);


  // multicast DNS (mDNS) allows to resolve hostnames to IP addresses without a DNS server
  if (MDNS.begin("esp32")) {  // using mDNS name "esp32"
    Serial.println("MDNS responder started");
  }

  // Web Server handlers: 
  // Handle a request to / (root of the server)
  server.on("/", handleRoot);
  // Minimalistic handling of another URI (LED will not flash on this one):
  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });
  // Handle all other URIs:
  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");

  pinMode( led_pin, OUTPUT);  // Initialize the LED pin as a digital output (on/off)
}

void loop ()
{
  server.handleClient();
  delay(2);//allow the cpu to switch to other tasks
}
```

当设备获取到 IP 地址（会显示在串口监视器中）后，打开浏览器并访问 `http://<your_device_ip>/`。根端点会返回 "hello from esp32!" 并闪烁一个 LED。尝试访问 `/inline` 或其他任意路径以查看不同的响应。

**自定义：**

- 使用 `server.on("/yourpath", handlerFunction);` 添加更多端点。
- 将传感器读数或设备控制集成到你的 Web 服务器响应中。

### 示例 3：以太网摄像头流媒体服务器

> **提醒：**
> 此示例需要 [XIAO ESP32-S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html) 开发板上的摄像头模块。XIAO W5500 以太网适配器本身不包含摄像头，并且摄像头插座目前不单独销售。如果你之前购买过 XIAO ESP32-S3 Sense 开发板，可以在本示例中使用其摄像头。为了获得更整洁的安装效果，请参考 [Resources](#resources) 部分，其中提供了一个带摄像头孔、与本套装兼容的可 3D 打印外壳。

**目的：**
这个高级示例将 XIAO ESP32-S3 摄像头模块与 W5500 以太网适配器结合起来，通过以太网传输摄像头图像流。它演示了如何初始化摄像头、配置以太网接口，并启动用于视频流的 Web 服务器。

**典型使用场景：**
非常适合监控、远程监测或任何需要通过可靠有线连接进行实时图像传输的项目。

:::tip
以下程序仅适用于 .ino 文件，编译该程序需要一些头文件。你可以通过下方链接获取该项目的完整源代码。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example/tree/main/XIAO_PoE_CameraWebServer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />
:::

```cpp
#include "esp_camera.h"
#include <ETH.h>
#include <WiFi.h>  // For event handling

// Define the camera model being used
#define CAMERA_MODEL_XIAO_ESP32S3  // Has PSRAM

// Include camera pin definitions
#include "camera_pins.h"

#define USE_TWO_ETH_PORTS 0

// Ethernet PHY and SPI pin definitions (adjust according to your hardware)
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

// Global variable to track Ethernet connection status
static bool eth_connected = false;

// Function declarations
void startCameraServer();
void setupLedFlash(int pin);
void onEvent(arduino_event_id_t event, arduino_event_info_t info);

void setup() {
  Serial.begin(115200);
  delay(2000);
  // Register Ethernet event handler
  Network.onEvent(onEvent);

  // Initialize SPI and Ethernet
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  // Wait for Ethernet connection
  Serial.print("Waiting for Ethernet connection");
  while (!eth_connected) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("Ethernet connected");

  Serial.setDebugOutput(true);
  Serial.println();

  // Camera configuration structure
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
  config.pixel_format = PIXFORMAT_JPEG;  // Use JPEG for streaming
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // Adjust configuration based on PSRAM availability
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
  // Special pin setup for ESP-EYE
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // Initialize the camera
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  // Adjust sensor settings for specific camera modules
  sensor_t *s = esp_camera_sensor_get();
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // Vertical flip
    s->set_brightness(s, 1);   // Increase brightness
    s->set_saturation(s, -2);  // Decrease saturation
  }
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);  // Lower initial frame size
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

  // Setup LED flash if the pin is defined
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  // Start the camera web server
  startCameraServer();

  // Print the access URL to the serial monitor
  Serial.print("Camera Ready! Use 'http://");
  Serial.print(ETH.localIP());
  Serial.println("' to connect");
}

void loop() {
  // No additional processing needed; camera server runs in another task
  delay(10000);
}

// Ethernet event handler
void onEvent(arduino_event_id_t event, arduino_event_info_t info) {
  switch (event) {
    case ARDUINO_EVENT_ETH_START:
      Serial.println("ETH Started");
      // Set Ethernet hostname here
      ETH.setHostname("esp32-eth0");
      break;
    case ARDUINO_EVENT_ETH_CONNECTED:
      Serial.println("ETH Connected");
      break;
    case ARDUINO_EVENT_ETH_GOT_IP:
      Serial.printf("ETH Got IP: '%s'\n", esp_netif_get_desc(info.got_ip.esp_netif));
      Serial.println(ETH);
      eth_connected = true;
      break;
    case ARDUINO_EVENT_ETH_LOST_IP:
      Serial.println("ETH Lost IP");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_DISCONNECTED:
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_STOP:
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;
    default:
      break;
  }
}
```

打开串口监视器，在设备连接到网络后查找其 IP 地址。在浏览器中输入该 IP 地址即可访问摄像头视频流。

**自定义：**

- 在 `camera_config_t` 结构体中调整摄像头设置（分辨率、质量、帧大小）。
- 修改 Web 服务器代码以添加身份验证或额外的端点。
- 调整以太网引脚定义以匹配你的自定义硬件。

## 常见问题

### Q1：为什么 W5500 Adapter 的网络信号较差？有什么解决方案吗？

可以在所有使用 WiFi 的代码中加入一段用于调节功率的代码，通过调整发射功率，可以显著提升信号强度。

例如下面的代码片段，就是添加在 `Setup()` 函数内部用于调节功率的。

```cpp
    // 1. Set WiFi to Station mode
    WiFi.mode(WIFI_STA);

    // 2. Adjust WiFi transmit power (Key correction)
    int8_t power_dbm = 15;
    int8_t power_param = (int8_t)(power_dbm / 0.25);
    esp_err_t err = esp_wifi_set_max_tx_power(power_param);

    if (err == ESP_OK) {
        Serial.print("Successfully set WiFi TX Power to: ");
        Serial.print(power_dbm);
        Serial.println(" dBm");
    } else {
        Serial.println("Failed to set WiFi TX Power.");
    }

    // 3. Start connecting to WiFi
    WiFi.begin(ssid, password);

    Serial.print("Connecting to WiFi network: ");
    Serial.println(ssid);
```

已经验证，将功率设置为上述代码中的数值可以获得最佳效果。

## 资源

- **[PDF]** [W5500 数据手册](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/W5500_ds_datasheet.pdf)
- **[PDF]** [XIAO W5500 Ethernet Adapter SCH V30](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V30_20260803.pdf)
- **[STEP]** [XIAO W5500 Ethernet Adapter 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.step)
- **[STEP]** [XIAO W5500 Ethernet Adapter 外壳 3D STEP（无预钻摄像头孔）](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_shell.stp)
- **[STEP]** [XIAO W5500 Ethernet Adapter 盖板 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_covers.stp)
- **[KICAD]** [XIAO W5500 Ethernet Adapter PCB](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.kicad_pcb)
- **[GITHUB]** [XIAO W5500 Ethernet Adapter 仓库](https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
