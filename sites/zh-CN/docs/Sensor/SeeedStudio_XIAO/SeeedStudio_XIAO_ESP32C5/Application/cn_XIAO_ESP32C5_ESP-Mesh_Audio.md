---
description: ''
title: XIAO ESP32C5 ESP-Mesh 音频
keywords:
  - xiao esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_esp-mesh_audio
last_update:
  date: 12/12/2025
  author: Zeller
createdAt: '2025-12-15'
updatedAt: '2025-12-26'
url: https://wiki.seeedstudio.com/cn/xiao_esp32c5_esp-mesh_audio/
---

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_0.png" style={{width:800, height:'auto'}}/></div>

## [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)

以下是乐鑫系统对 **ESP-WIFI-MESH** 的官方介绍：

ESP-WIFI-MESH 是一个无线通信网络，节点采用网状拓扑结构组织，利用乐鑫 SoC 上的同时 AP-STA 功能。它提供了一个自组织和自愈合的网络，易于部署。ESP-WIFI-MESH 的网络拓扑可以在大面积区域内扩展到 1000 个节点，无需任何特定的 Wi-Fi 基础设施支持。ESP-WIFI-MESH 还可以用于覆盖家庭部署场景中的 Wi-Fi 盲点，即 Wi-Fi 信号无法到达的区域。

它具有以下特点：

1. **简单安全的设置**：支持移动应用 + 蓝牙 LE 网络配置，能够快速添加新节点并安全传递配置。
2. **自组织和自愈合**：节点将自动连接/重连，网络可以自动形成，并在节点故障时自愈。
3. **无需额外网关**：不需要额外的网关或基础设施。Mesh 网络可以扩展到数千个节点，适合大规模部署。
4. **IP 连接**：所有节点都支持 IP 通信，既能实现节点间的互连，也能访问外部网络（通过根节点 NAT 或桥接）。
5. **安全设计**：基于标准 Wi-Fi，节点间通信可以采用 WPA2 加密来确保数据传输安全。
6. **应用场景**：适用于智能照明、智能家居、自动化控制以及大型场所（如停车场、工厂、共享空间）的网络连接等各种场景。

更多详细信息，请参考乐鑫系统的官方链接：

- [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/esp-wifi-mesh.html)

## ESP-Mesh_Audio

接下来，我们将使用一个 XIAO ESP32-C5、一个支持 5 GHz 频段的路由器和一台计算机来模拟 Mesh 节点场景中的 5 GHz 频段音频传输。<br/>
在这里，您的计算机充当 **Mesh 子节点**，通过 5 GHz 路由器发送数据；C5 充当 **Mesh 根节点**，接收数据。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
如果您家中没有支持 5 GHz 频段的路由器，可以开启手机热点，将其设置为 5 GHz 频段，并确保您的计算机连接到此热点。
:::

### 创建 Arduino 项目

复制以下代码，并将 **ssid** 和 **password** 修改为您正在使用的 5 GHz 频段路由器的名称和密码。

```cpp
#include <WiFi.h>
#include <WiFiUdp.h>

const char* ssid = "Your_5G_Router_SSID";
const char* password = "Your_Router_Password";
#define UDP_PORT 4444

WiFiUDP udp;
uint8_t packetBuffer[1024]; // Buffer for storing received UDP packets

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  Serial.print("Connecting to 5GHz WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  // Start UDP listening
  udp.begin(UDP_PORT);
  Serial.printf("Listening on UDP port %d\n", UDP_PORT);
}

void loop() {
  int packetSize = udp.parsePacket();
  if (packetSize) {
    // Read received data
    int len = udp.read(packetBuffer, 1024);

    // Statistics and print: size of received packet, and signal strength (RSSI)
    // Signal strength is crucial for 5GHz audio transmission
    Serial.printf("[RECV] %d bytes from %s, RSSI: %d dBm\n", 
                  len, udp.remoteIP().toString().c_str(), WiFi.RSSI());

    // If you have an I2S speaker, you can call i2s_write here for playback
  }
}
```

### 获取 IP 地址

将代码上传到 XIAO ESP32-C5，打开串口监视器，如果成功连接到 5 GHz WiFi 路由器，将打印连接的 IP 地址。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_1.png" style={{width:800, height:'auto'}}/></div>

### 创建 Python 脚本

在使用 Python 脚本之前，您需要先安装 Python 3 环境。详细信息可以在线搜索相应的安装教程。<br/>

在 Windows 的任意文件夹中创建一个名为 send_audio.py 的文件，并将以下 Python 代码复制到其中。<br/>

将 Arduino IDE 串口监视器打印的 IP 地址填入代码中的 **TARGET_IP** 变量。

```py
import socket
import time
import random

# Set the target IP (View the IP printed out by the serial port of C5)
TARGET_IP = "192.168.x.x" # <--- Modify here!!!
TARGET_PORT = 4444

# Simulated Audio Parameters
# 16kHz sampling, 16-bit, mono -> 32000 bytes per second
# Send one packet every 20ms -> Each packet is 640 bytes
PACKET_SIZE = 640 
INTERVAL = 0.02 # 20ms

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
print(f"Start sending simulated audio to {TARGET_IP}:{TARGET_PORT}...")

sequence = 0

try:
    while True:
        # Generate simulated data (add serial numbers to facilitate packet loss detection)
        # The first 4 bytes are the serial numbers, followed by random noise
        payload = sequence.to_bytes(4, byteorder='big') + random.randbytes(PACKET_SIZE - 4)

        sock.sendto(payload, (TARGET_IP, TARGET_PORT))
        print(f"Sent packet #{sequence}, size: {len(payload)}")

        sequence += 1
        time.sleep(INTERVAL) # Control the transmission frequency

except KeyboardInterrupt:
    print("Stopped.")
    sock.close()
```

### 运行脚本文件

在存储 `send_audio.py` 的文件夹中右键单击，在此文件夹中打开终端。<br/>
输入 `python send_audio.py` 执行脚本。连接成功后，它将每 20 毫秒向 XIAO ESP32-C5 发送音频数据。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_3.png" style={{width:800, height:'auto'}}/></div>

Arduino IDE 的监视器窗口将返回您计算机的 IP 地址和字节数据，以及连接的 5 GHz WiFi 的信号强度。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_4.png" style={{width:800, height:'auto'}}/></div>

恭喜！此时，您已经学会了如何在 5 GHz WiFi 频段上传输音频，更多创新等待您去实现！

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
