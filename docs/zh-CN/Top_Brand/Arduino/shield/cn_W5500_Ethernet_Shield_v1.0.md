---
description: W5500_Ethernet_Shield_v1.0
title: W5500 以太网扩展板 v1.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/W5500_Ethernet_Shield_v1.0
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500.jpg" alt="pir" width={600} height="auto" /></p>

W5500 以太网扩展板 v1.0 可以为您的项目提供互联网连接功能。W5500 使用户能够通过单个芯片在其应用中实现互联网连接，该芯片内嵌了 TCP/IP 协议栈、10/100 以太网 MAC 和 PHY。该扩展板还具有两个 Grove 连接器和一个 microSD 卡插槽，以支持需要存储来自 Grove 传感器大量数据的项目。RJ45 端口（以太网电缆连接处）足够低，如果需要，可以在此扩展板上堆叠更多扩展板。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

--------

- 支持硬件 TCP/IP 协议：TCP、UDP、ICMP、IPv4、ARP、IGMP、PPPoE
- 同时支持 8 个独立套接字
- 支持掉电模式
- 支持通过 UDP 的网络唤醒功能
- 支持高速串行外设接口（SPI 模式 0、3）
- 内部 32KB 内存用于 TX/RX 缓冲区
- 内嵌 10BaseT/100BaseTX 以太网 PHY
- 支持自动协商（全双工和半双工，10 和 100* 基础）
- 不支持 IP 分片
- 3.3V 工作电压，兼容 5V I/O 信号
- LED 输出（全/半双工、链路、速度、活动）
- Micro-SD 卡插槽
- 用于 I2C 和 UART 的 Grove 连接器

## 硬件概述

-----------------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500_Interface.jpg" alt="pir" width={600} height="auto" /></p>

**硬件配置**

1. RJ45：以太网端口；
2. IC W5500：硬件 TCP/IP 以太网控制器；
3. 复位按钮：复位以太网扩展板；
4. SD 卡插槽：支持 FAT16 或 FAT32 格式的 Micro SD 卡；最大存储容量为 2GB。
5. I2C 接口
6. UART 接口

**Arduino 上的引脚使用**

1. D4：SD 卡片选
2. D10：W5200 片选
3. D11：SPI MOSI
4. D12：SPI MISO
5. D13：SPI SCK

:::note
W5500 和 SD 卡都通过 SPI 总线与 Arduino 通信。引脚 10 和引脚 4 是 W5500 和 SD 插槽的片选引脚。它们不能用作通用 I/O。
:::

使用方法
-----

我们将向您展示一个示例。此示例可以将数据上传到网页并将传感器数据存储到 SD 卡。

### 硬件

**零件清单：**
<table align="center">
  <tbody>
  <tr>
    <td><h3>名称</h3></td>
    <td><h3>功能</h3></td>
    <td><h3>数量</h3></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><span>W5500 以太网扩展板</span></a></h4></td>
    <td><h4>提供以太网连接</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html?queryID=dcb7226252c34d7139135b4fd97cafc5&objectID=627&indexName=bazaar_retailer_products" target="_blank"><span>Seeeduino V4.2</span></a></h4></td>
    <td><h4>控制器</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html" target="_blank"><span>Grove-温湿度传感器</span></a></h4></td>
    <td><h4>传感器</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Base Shield V2</span></a></h4></td>
    <td><h4>基础扩展板</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Micro SD 卡</h4></td>
    <td><h4>存储数据</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

**步骤：**

1. 将 W5500 以太网扩展板 v1.0 安装到您的 Arduino 上，将 Base Shield V2 安装到以太网扩展板上，并将 Grove-温湿度传感器连接到 Base Shield D5 Grove 端口，插入 SD 卡。
2. 使用标准以太网电缆将以太网扩展板连接到网络；
3. 通过 USB 电缆将 Arduino 连接到 PC；

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20hardware.jpg" alt="pir" width={600} height="auto" /></p>

### 软件

- 请按照[如何安装 Arduino 库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)的步骤来安装库。
- 点击下面的按钮下载 W5500 以太网扩展板库。

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/WIZ_Ethernet_Library-IDE1.6.x-master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/download%20W5500%20library.png" /></a></p>

- 下载完成后将库安装到您的 Arduino IDE 中。
- 将下面的代码复制到草图中然后上传：

```cpp
//此示例使用W5500以太网扩展板、Seeeduino V4.2、Grove-温湿度传感器、
//Base Shield V2传感器和Micro SD卡来设计一个温湿度采集站。
//将温湿度传感器连接到base shield的D5 grove端口。
//它将温湿度数据发布到网页上
//并每5秒刷新一次，将数据存储到SD卡的datalog.txt文件中。

#include <SD.h>
#include <SPI.h>
#include <Ethernet.h>
#include <dht11.h>
dht11 DHT;
#define DHT11_PIN 5
const int chipSelect = 4;

// 请根据您的本地网络更新IP地址
#if defined(WIZ550io_WITH_MACADDRESS) // 使用WIZ550io分配的MAC地址
;
#else
byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
#endif  
IPAddress ip(192,168,0,177);

// 初始化以太网服务器库
// 使用您想要使用的IP地址和端口
// (端口80是HTTP的默认端口):
EthernetServer server(80);

void setup() {
 // 打开串行通信并等待端口打开:
  Serial.begin(9600);
   while (!Serial) {
    ; // 等待串行端口连接。仅Leonardo需要
  }

  // 启动以太网连接和服务器:
#if defined(WIZ550io_WITH_MACADDRESS)
  Ethernet.begin(ip);
#else
  Ethernet.begin(mac, ip);
#endif  
  server.begin();
  Serial.print("server is at ");
  Serial.println(Ethernet.localIP());

  //初始化SD卡
  Serial.print("Initializing SD card...");

  // 检查卡是否存在并可以初始化:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // 不再执行任何操作:
    return;
  }
  Serial.println("card initialized.");
}


void loop() {
  // 监听传入的客户端
  EthernetClient client = server.available();
  if (client) {
    Serial.println("new client");
    // http请求以空行结束
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        // 如果您已到达行尾（收到换行符）
        // 并且该行为空，则http请求已结束，
        // 因此您可以发送回复
        if (c == '\n' && currentLineIsBlank) {
          // 发送标准http响应头
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");  // 响应完成后连接将关闭
   client.println("Refresh: 5");  // 每5秒自动刷新页面
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");

          // 在网页上输出输入引脚的值
          int chk;
          chk = DHT.read(DHT11_PIN);    // 读取数据
          client.print("Humidity: ");
          client.print(DHT.humidity);
          client.println("<br />");
          client.print("Temperature: ");
          client.print(DHT.temperature);   

          //将输入引脚的值写入SD卡
          // 创建一个字符串来组装要记录的数据:
          String dataString = "";
          // 读取湿度和温度并附加到字符串:
          dataString = String(DHT.humidity) + String(DHT.temperature);
          // 打开文件。注意一次只能打开一个文件，
          // 所以在打开另一个文件之前必须关闭这个文件。
          File dataFile = SD.open("datalog.txt", FILE_WRITE);
          // 如果文件可用，写入它:
          if (dataFile) {
          dataFile.println(dataString);
          dataFile.close();
          // 也打印到串行端口:
          Serial.println(dataString);
          }
          // 如果文件没有打开，弹出错误:
          else {
          Serial.println("error opening datalog.txt");
          }
          break;
        }
        if (c == '\n') {
          // 您正在开始新行
          currentLineIsBlank = true;
        }
        else if (c != '\r') {
          // 您在当前行上获得了一个字符
          currentLineIsBlank = false;
        }
      }
    }
    // 给网络浏览器时间接收数据
    delay(1);
    // 关闭连接:
    client.stop();
    Serial.println("client disconnected");
  }
}

```

### 结果

现在，我们将展示结果。

1. 将您的SD卡插入计算机，您将看到一些温湿度信息。
2. 此外，我们可以从网页上看到信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20on%20web.png" alt="pir" width={600} height="auto" /></p>

是不是很简单？您可以开始您的项目了。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- [W5500以太网扩展板Eagle格式文件](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip)
- [W5500以太网扩展板PDF格式原理图](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.pdf)
- [W5500以太网扩展板PDF格式PCB](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500%20Ethernet%20Shield%20v1.0%20PCB.pdf)
- [W5500以太网扩展板库](https://github.com/embeddist/WIZ_Ethernet_Library-IDE1.6.x)
- [W5500以太网扩展板数据手册.pdf](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_datasheet_v1.0.2.pdf)
<!-- 此Markdown文件创建自 https://www.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0 -->

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