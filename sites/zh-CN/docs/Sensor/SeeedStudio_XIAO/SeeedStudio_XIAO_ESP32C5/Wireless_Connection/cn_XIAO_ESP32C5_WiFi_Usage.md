---
title: WiFi 使用
description: Seeed Studio XIAO ESP32-C5 的 WiFi 使用
keywords:
  - xiao
  - esp32c5
  - wifi_usage
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_wifi_usage
sidebar_class_name: hidden
last_update:
  date: 01/06/2026
  author: Zeller
createdAt: '2025-12-30'
updatedAt: '2026-01-20'
url: https://wiki.seeedstudio.com/cn/xiao_esp32c5_wifi_usage/
---

# Seeed Studio XIAO ESP32-C5 的 WiFi 使用

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

Seeed Studio XIAO ESP32-C5 支持双频 2.4 GHz 和 5 GHz Wi-Fi，具有双频 Wi-Fi 6 (802.11ax) 无线电，并向后兼容 802.11a/b/g/n/ac 标准。此外，这款开发板支持 U.FL 天线连接，旨在增强 XIAO ESP32-C5 的无线连接性能。在本教程中，我们将探索如何利用 XIAO ESP32-C5 的 Wi-Fi 功能连接到 Wi-Fi 网络并执行基本的网络任务。<br/>
以下教程使用 Arduino IDE 进行编译和上传。如果您还没有使用 Arduino IDE 的经验，请访问 [Seeed Studio XIAO ESP32-C5 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32c5_getting_started/)。<br/>

## 入门指南

### 天线安装

在 Seeed Studio XIAO ESP32-C5 的包装内，有一个专用的 **Wi-Fi/BT 天线连接器**。为了获得最佳的 WiFi/蓝牙信号强度，您需要取出包装中包含的天线并将其连接到连接器上。<br/>
:::tip
如果您想获得更强的信号增益效果，可以购买并安装 **2.4G/5G 外置天线（带 RP-SMA 公头连接器）** — 它比包装中包含的内置 FPC 天线提供更高的增益！
:::
<div class="table-center">
 <table>
  <tr>
   <th>2.4G/5G 外置天线（带 RP-SMA 公头连接器）</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## WiFi 库的常用接口

- XIAO ESP32-C5 提供了广泛的 Wi-Fi 网络功能。通常，我们可以在 ESP32 的内置包中查看 WiFi 库的功能，并选择相应的功能来实现所需的功能。接下来，我们将列出一些常用的接口并介绍它们的用法。

:::tip
如果您想直接开始 Wi-Fi 使用教程，可以跳转到 [WiFi 使用示例](#wifi-usage-examples)。
:::

### 通用 WiFi 功能

- `WiFiGenericClass::getHostname()` -- 是 ESP32 WiFi 库中的一个函数，以字符串形式返回设备的主机名。主机名是在网络上标识设备的唯一名称。此函数检索之前使用 `WiFiGenericClass::setHostname()` 设置的主机名。如果没有设置主机名，将返回默认主机名。

- `WiFiGenericClass::persistent(bool persistent)` -- 是一个用于启用或禁用 ESP32 WiFi 库持久模式的方法。当启用持久模式时，Wi-Fi 配置存储在非易失性存储器 (NVM) 中，即使在断电或重置后也会保留。当禁用持久模式时，配置存储在 RAM 中，在断电或重置后会丢失。

 	- **输入参数**
  		- **persistent**：如果参数为 true，则启用持久模式。如果参数为 false，则禁用持久模式。

- `WiFiGenericClass::enableLongRange(bool enable)` -- 该函数用于启用或禁用 WiFi 模块的长距离 (LR) 功能。启用时，LR 功能允许模块连接到比平常更远的 WiFi 网络，但数据速率较低。

 	- **输入参数**
  		- **enable**：该参数应设置为 true 以启用该功能，设置为 false 以禁用该功能。

- `WiFiGenericClass::mode(wifi_mode_t m)` -- 该函数用于设置设备的 WiFi 模式。

 	- **输入参数**
  		- **m**：m 参数指定要设置的模式，可以是 wifi_mode_t 枚举中定义的以下常量之一：
   			- **WIFI_MODE_NULL**：禁用 WiFi 站点和接入点模式。
   			- **WIFI_MODE_STA**：启用 WiFi 站点模式以连接到现有的 WiFi 网络。
   			- **WIFI_MODE_AP**：启用接入点模式以创建新的 WiFi 网络。
   			- **WIFI_MODE_APSTA**：同时启用 WiFi 站点和接入点模式。

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- 该函数为 WiFi 模块设置省电模式。

 	- **输入参数**
  		- **sleepType**：sleepType 参数是一个枚举类型，指定要使用的省电模式类型。有三种可能的睡眠类型：
   			- **WIFI_PS_NONE**：这是默认睡眠模式，WiFi 模块不进入省电模式。
   			- **WIFI_PS_MIN_MODEM**：在此模式下，WiFi 模块关闭其调制解调器，同时保持与接入点 (AP) 的连接。
   			- **WIFI_PS_MAX_MODEM**：启用最激进的 Wi-Fi 省电模式。它可以显著增加睡眠时间，但可能引入更高的延迟和降低的吞吐量，在某些网络中可能影响连接稳定性。

### STA 功能

- `WiFiSTAClass::status()` -- 返回连接状态。

 	- **输出**：wl_status_t 中定义的值之一。
  		- **WL_NO_SHIELD**：此状态码表示 Wi-Fi 模块不存在。
    - **WL_IDLE_STATUS**：此状态码表示 Wi-Fi 模块未执行任何操作。
    - **WL_NO_SSID_AVAIL**：此状态码表示在扫描期间未找到 Wi-Fi 网络。
    - **WL_SCAN_COMPLETED**：此状态码表示 Wi-Fi 扫描已成功完成。
    - **WL_CONNECTED**：此状态码表示 ESP32 已成功连接到 Wi-Fi 网络。
    - **WL_CONNECT_FAILED**：此状态码表示连接到 Wi-Fi 网络失败。
    - **WL_CONNECTION_LOST**：此状态码表示与 Wi-Fi 网络的连接已丢失。
    - **WL_DISCONNECTED**：此状态码表示 ESP32 之前连接到 Wi-Fi 网络，但当前未连接到任何网络。

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- 开始与 WPA2 企业级 AP 的 Wifi 连接。

 	- **输入参数**（可选）
  		- **ssid**：指向 SSID 字符串的指针。
  		- **method**：WPA2 的认证方法（WPA2_AUTH_TLS、WPA2_AUTH_PEAP、WPA2_AUTH_TTLS）
  		- **wpa2_identity**：指向实体的指针
  		- **wpa2_username**：指向用户名的指针
  		- **wpa2_password**：指向密码的指针。
  		- **ca_pem**：指向包含 CA 证书的 .pem 文件内容字符串的指针
  		- **client_crt**：指向包含客户端证书的 .crt 文件内容字符串的指针
  		- **client_key**：指向包含客户端密钥的 .key 文件内容字符串的指针
  		- **channel**：可选。AP 的信道
  		- **bssid**：可选。AP 的 BSSID / MAC
  		- **connect**：可选。调用连接

- `WiFiSTAClass::reconnect()` -- 将强制断开连接，然后开始重新连接到 AP。

 	- **输出**：True/False。

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- 断开与网络的连接。

 	- **输入参数**
  		- **wifioff**：wifioff `true` 关闭 Wi-Fi 无线电。
  		- **eraseap**：eraseap `true` 从 NVS 存储器中擦除 AP 配置。

 	- **输出**：True/False。

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- 更改 IP 配置设置，禁用 dhcp 客户端。

 	- **输入参数**
  		- **local_ip**：静态 IP 配置。
  		- **gateway**：静态网关配置。
  		- **subnet**：静态子网掩码。
  		- **dns1**：静态 DNS 服务器 1。
  		- **dns2**：静态 DNS 服务器 2。

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- 已弃用。设置 ESP32 站点在通电时是否自动连接到 AP（已记录）。默认启用自动连接。

 	- **输入参数**
  		- **autoConnect**：autoConnect 布尔值。

 	- **输出**：False。

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- 等待 WiFi 连接达到结果。

 	- **输入参数**
  		- **timeoutLength**：该参数指定等待建立连接的最大时间，以毫秒为单位。

 	- **输出**：wl_status_t 中定义的值之一。

- `WiFiSTAClass::localIP()` -- 获取站点接口 IP 地址。

 	- **输出**：IPAddress 站点 IP。

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- 获取站点接口 MAC 地址。

 	- **输入参数**
  		- **mac**（可选）：指向长度为 WL_MAC_ADDR_LENGTH 的 uint8_t 数组的指针。

 	- **输出**：指向 uint8_t * 的指针。

- `WiFiSTAClass::SSID()` -- 返回与网络关联的当前 SSID。

 	- **输出**：SSID。

- `WiFiSTAClass::RSSI(void)` -- 返回当前网络 RSSI。

 	- **输出**：RSSI。

### AP 功能

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- 这是 XIAO ESP32-C5 WiFi 库中的一个函数。它用于设置 SoftAP（程序接入点），允许其他设备连接到 XIAO ESP32-C5 并访问其资源。

 	- **输入参数**
  		- **ssid**：              指向 SSID 的指针（最多 63 个字符）。
    - **passphrase**：        （WPA2 最少 8 个字符，开放网络使用 NULL）。
    - **channel**：           WiFi 信道号，1 - 13。
    - **ssid_hidden**：       网络隐藏（0 = 广播 SSID，1 = 隐藏 SSID）。
    - **max_connection**：    最大同时连接客户端数，1 - 4。

 	- **输出**：True/False。

- `WiFiAPClass::softAPgetStationNum()` -- 获取连接到 softAP 接口的站点/客户端数量。

 	- **输出**：站点数量。

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- 用于配置 SoftAP 的函数。

 	- **输入参数**
  		- **local_ip**：      接入点 IP。
  		- **gateway**：       网关 IP。
  		- **subnet**：        子网掩码。

 	- **输出**：True/False。

- `WiFiAPClass::softAPIP()` -- 获取 softAP 接口 IP 地址。

 	- **输出**：IPAddress softAP IP。

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- 获取 softAP 接口 MAC 地址。

 	- **输入参数**
  		- **mac**（可选）：   指向长度为 WL_MAC_ADDR_LENGTH 的 uint8_t 数组的指针。

 	- **输出**：指向 uint8_t* 的指针或字符串 mac。

### WiFi 扫描功能

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- 开始扫描可用的 WiFi 网络。

 	- **输入参数**
  		- **async**：该参数是一个布尔值，决定是否异步执行扫描。如果设置为 true，函数立即返回，扫描结果可以稍后通过调用 getScanResults() 函数获取。如果设置为 false，函数将阻塞直到扫描完成。
  		- **show_hidden**：该参数是一个布尔值，决定函数是否应在扫描结果中包含隐藏网络。
  		- **passive**：该参数是一个布尔值，决定函数是否应执行被动扫描。如果设置为 true，函数在扫描期间不会传输任何数据包，这可能需要更长时间，但在某些情况下可能有用。
  		- **max_ms_per_chan**：该参数是扫描每个信道的最大时间（毫秒）。
  		- **channel**：该参数是要扫描的 Wi-Fi 信道。如果设置为 0，函数将扫描所有可用信道。
  		- **ssid**：该参数是指向包含要扫描网络 SSID 的以空字符结尾的字符串的指针。如果设置为 nullptr，函数将扫描所有可用网络。
  		- **bssid**：该参数是指向包含要扫描的接入点 MAC 地址的 6 字节数组的指针。如果设置为 nullptr，函数将扫描所有接入点。

 	- **输出**：此函数的返回值是一个整数，表示扫描到的网络数量。

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- 将扫描到的 wifi 的所有信息加载到指针参数中。

 	- **输入参数**
  		- **i**：该函数用于检索指定索引 i 处扫描网络的信息。
  		- **ssid**：ssid 参数是对 String 变量的引用，函数在其中存储网络的 SSID。
  		- **encType**：encType 参数是对 uint8_t 变量的引用，函数在其中存储网络的加密类型（0 = 开放，1 = WEP，2 = WPA_PSK，3 = WPA2_PSK，4 = WPA_WPA2_PSK）。
  		- **rssi**：rssi 参数是对 int32_t 变量的引用，函数在其中存储网络的接收信号强度指示（RSSI）。
  		- **bssid**：bssid 参数是对 uint8_t* 指针的引用，函数在其中存储网络的 BSSID（MAC 地址）。
  		- **channel**：channel 参数是对 int32_t 变量的引用，函数在其中存储网络的信道号。

 	- **输出**：True/False。

- `WiFiScanClass::SSID(uint8_t i)` -- 返回网络扫描期间发现的 SSID。

 	- **输入参数**
  		- **i**：指定要从哪个网络项目获取信息。

 	- **输出**：扫描网络列表中指定项目的 SSID 字符串。

- `WiFiScanClass::RSSI(uint8_t i)` -- 返回在 scanNetworks 期间发现的网络的 RSSI。

 	- **输入参数**
  		- **i**：指定要从哪个网络项目获取信息。

 	- **输出**：扫描网络列表中指定项目的 RSSI 有符号值。

### WiFi 客户端功能

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- 此函数在 WiFiClient 库中用于连接到具有指定超时值的远程 IP 地址和端口。

 	- **输入参数**
  		- **ip**：   要连接的服务器的 IP 地址。
  		- **port**： 要连接的服务器的端口号。
  		- **timeout**（可选）： 等待连接建立的最大时间（毫秒）。如果在此时间内未建立连接，函数将返回错误。如果 timeout 设置为 0，函数将无限期等待连接建立。

- `WiFiClient::stop()` -- 该函数用于断开客户端与服务器的连接并释放客户端使用的套接字/端口。一旦调用该函数，客户端就不能再发送或接收数据。

- `WiFiClient::setTimeout(uint32_t timeout_ms)` -- 该函数设置客户端等待连接建立或接收数据的最大毫秒数。如果连接或数据传输时间超过指定的超时时间，连接将被关闭。

 	- **输入参数**
  		- **timeout_ms**：   超时的毫秒数。

- `WiFiClient::write(uint8_t data)` -- 通过 WiFiClient 实例向连接的服务器写入单个字节的数据。或者 `WiFiClient::write(const uint8_t *buf, size_t size)`。

 	- **输入参数**
  		- **data**：   是需要通过已建立的网络连接发送的单个字节数据。

- `WiFiClient::read()` -- 该函数从连接的服务器读取单个字节的传入数据。它将读取的字节作为整数值返回。如果没有可用数据，它返回 -1。或者 `read(uint8_t *buf, size_t size)`。

 	- **输出**：表示接收字节数的整数值。如果返回值为 0，表示服务器已关闭连接。

- `WiFiClient::peek()` -- 该函数用于检查是否有任何数据可从服务器读取，而不实际读取它。

 	- **输出**：它返回下一个传入数据字节，而不从接收缓冲区中删除它。如果没有可用数据，它返回 -1。

- `WiFiClient::available()` -- 该函数用于检查有多少字节的数据可从服务器读取。

 	- **输出**：它返回一个整数值，表示可读取的字节数。

### WiFi 服务器功能

- `WiFiServer::stopAll()` -- 此函数是 Arduino WiFi 库中 WiFiServer 类的一个方法。此方法停止使用 WiFiServer 类创建的所有服务器实例。当您想要一次停止所有服务器而不是为每个实例单独调用 `stop()` 方法时，这很有用。

- `WiFiServer::begin(uint16_t port, int enable)` -- 该函数用于在指定端口上启动服务器。服务器将监听传入的客户端连接。

 	- **输入参数**
  		- **port**： 要监听的端口号。
  		- **enable**（可选）： 一个标志，指示服务器启动后是否应立即启用。此标志默认设置为 true。

- `WiFiServer::hasClient()` -- 该函数用于检查服务器上是否有任何传入的客户端连接可用。此函数可以在循环中使用以持续检查新连接。

 	- **输出**：如果客户端已连接，它返回一个 WiFiClient 对象，如果没有客户端等待连接，则返回 NULL 指针。

- `WiFiServer::end()` -- 该函数用于停止服务器并释放相关资源。一旦调用，服务器就不能再接受新的客户端连接。任何现有的客户端连接将保持打开状态，直到它们被客户端或服务器关闭。`WiFiServer::close()` 和 `WiFiServer::stop()` 具有相同的功能。

### WiFi 多重功能

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- 用于向 WiFiMulti 对象将尝试连接的可用 AP 列表中添加新的接入点（AP）。

 	- **输入参数**
  		- **ssid**： 指向 SSID 的指针（最多 63 个字符）。
  		- **passphrase**： （WPA2 最少 8 个字符，开放网络使用 NULL）。

 	- **输出**：True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- 该函数尝试按顺序连接到保存的接入点之一，直到成功连接到其中一个。

 	- **输入参数**
  		- **connectTimeout**： 该参数指定等待连接的最大时间（毫秒）。如果 connectTimeout 设置为 0，函数将不会超时，并将无限期尝试连接。

 	- **输出**：状态

## WiFi 使用示例

接下来，我们将使用 XIAO ESP32-C5 来演示如何使用一些基本的 Wi-Fi 功能。

### 扫描网络

XIAO ESP32-C5 支持双频 2.4 GHz 和 5 GHz Wi-Fi，在扫描模式下可以扫描周围的 2.4 GHz 和 5 GHz Wi-Fi 网络以及它们的信号强度。

#### 程序

下面是一个示例程序，展示 XIAO ESP32-C5 如何扫描周围的 Wi-Fi 网络。

- 参考代码

<details>

<summary>WiFiScan.ino</summary>

```cpp
/*
 *  This sketch demonstrates how to scan WiFi networks. For chips that support 5GHz band, separate scans are done for all bands.
 *  The API is based on the Arduino WiFi Shield library, but has significant changes as newer WiFi functions are supported.
 *  E.g. the return value of `encryptionType()` different because more modern encryption is supported.
 */
#include "WiFi.h"

void setup() {
  Serial.begin(115200);
  // Enable Station Interface
  WiFi.STA.begin();
  Serial.println("Setup done");
}

void ScanWiFi() {
  Serial.println("Scan start");
  // WiFi.scanNetworks will return the number of networks found.
  int n = WiFi.scanNetworks();
  Serial.println("Scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    Serial.println("Nr | SSID                             | RSSI | CH | Encryption");
    for (int i = 0; i < n; ++i) {
      // Print SSID and RSSI for each network found
      Serial.printf("%2d", i + 1);
      Serial.print(" | ");
      Serial.printf("%-32.32s", WiFi.SSID(i).c_str());
      Serial.print(" | ");
      Serial.printf("%4ld", WiFi.RSSI(i));
      Serial.print(" | ");
      Serial.printf("%2ld", WiFi.channel(i));
      Serial.print(" | ");
      switch (WiFi.encryptionType(i)) {
        case WIFI_AUTH_OPEN:            Serial.print("open"); break;
        case WIFI_AUTH_WEP:             Serial.print("WEP"); break;
        case WIFI_AUTH_WPA_PSK:         Serial.print("WPA"); break;
        case WIFI_AUTH_WPA2_PSK:        Serial.print("WPA2"); break;
        case WIFI_AUTH_WPA_WPA2_PSK:    Serial.print("WPA+WPA2"); break;
        case WIFI_AUTH_WPA2_ENTERPRISE: Serial.print("WPA2-EAP"); break;
        case WIFI_AUTH_WPA3_PSK:        Serial.print("WPA3"); break;
        case WIFI_AUTH_WPA2_WPA3_PSK:   Serial.print("WPA2+WPA3"); break;
        case WIFI_AUTH_WAPI_PSK:        Serial.print("WAPI"); break;
        default:                        Serial.print("unknown");
      }
      Serial.println();
      delay(10);
    }
  }

  // Delete the scan result to free memory for code below.
  WiFi.scanDelete();
  Serial.println("-------------------------------------");
}
void loop() {
  Serial.println("-------------------------------------");
  Serial.println("Default wifi band mode scan:");
  Serial.println("-------------------------------------");
#if ESP_IDF_VERSION >= ESP_IDF_VERSION_VAL(5, 4, 2)
  WiFi.setBandMode(WIFI_BAND_MODE_AUTO);
#endif
  ScanWiFi();
#if CONFIG_SOC_WIFI_SUPPORT_5G
  // Wait a bit before scanning again.
  delay(1000);
  Serial.println("-------------------------------------");
  Serial.println("2.4 Ghz wifi band mode scan:");
  Serial.println("-------------------------------------");
  WiFi.setBandMode(WIFI_BAND_MODE_2G_ONLY);
  ScanWiFi();
  // Wait a bit before scanning again.
  delay(1000);
  Serial.println("-------------------------------------");
  Serial.println("5 Ghz wifi band mode scan:");
  Serial.println("-------------------------------------");
  WiFi.setBandMode(WIFI_BAND_MODE_5G_ONLY);
  ScanWiFi();
#endif
  // Wait a bit before scanning again.
  delay(10000);
}
```

</details>

#### 效果展示

- 上传程序后，打开 Arduino IDE 的串口监视器，将输出扫描到的 Wi-Fi 信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_1.png" style={{width:800, height:'auto'}}/></div>

### 连接到 Wi-Fi 网络

在 Wi-Fi 覆盖范围内，您可以通过 XIAO ESP32-C5 支持的 STA 模式连接到特定的 Wi-Fi 网络，前提是您知道目标 Wi-Fi 网络的 SSID 和密码。

#### 程序

接下来，提供一个示例程序来展示 XIAO ESP32-C5 如何连接到指定的 Wi-Fi 网络。

:::tip
XIAO ESP32-C5 支持双频 Wi-Fi（2.4 GHz 和 5 GHz），您可以根据家庭网络选择连接。
:::

- 参考代码

```cpp
#include <WiFi.h>

// Replace with your network credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

void setup() {
    Serial.begin(115200);

    // Explicitly set mode to Station
    WiFi.mode(WIFI_STA);

    Serial.printf("Connecting to %s ", ssid);
    WiFi.begin(ssid, password);

    // Wait for connection
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("\nCONNECTED!");

    // Print connection details
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());
    Serial.print("Subnet Mask: ");
    Serial.println(WiFi.subnetMask());
    Serial.print("Gateway IP: ");
    Serial.println(WiFi.gatewayIP());
    Serial.print("DNS IP: ");
    Serial.println(WiFi.dnsIP());

    // C5 Specific: Check which band and channel we are on
    Serial.print("Channel: ");
    Serial.println(WiFi.channel());
    Serial.print("RSSI (Signal Strength): ");
    Serial.println(WiFi.RSSI());
}

void loop() {
    // Check if WiFi is still connected
    if (WiFi.status() != WL_CONNECTED) {
        Serial.println("WiFi lost. Reconnecting...");
        WiFi.disconnect();
        WiFi.reconnect();
    }
    delay(5000);
}
```

#### 效果展示

- 上传程序后，打开 Arduino IDE 的串口监视器，将输出连接的 Wi-Fi 网络的 IP 地址等信息。
- 我在我的环境中连接到了 5 GHz 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_2.png" style={{width:800, height:'auto'}}/></div>

### AP 模式

XIAO ESP32-C5 可以作为热点供其他设备连接。换句话说，您可以使用支持 Wi-Fi 的设备连接到 XIAO ESP32-C5，而无需连接到您的路由器。

简单来说，当您将 XIAO ESP32-C5 配置为接入点时，您创建了它自己的独立 Wi-Fi 网络，附近的 Wi-Fi 设备（站点）可以连接到该网络（例如您的智能手机或计算机）。

#### 程序

接下来，提供一个示例程序来展示 XIAO ESP32-C5 如何创建热点并允许其他设备连接到它。

- 参考代码

```cpp
#include <WiFi.h>

const char* ap_ssid = "XIAO ESP32-C5";
const char* ap_password = "password1234";

int previous_station_count = 0;

void setup() {
    Serial.begin(115200);

    // Initialize built-in LED pin
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW); // Initial state: LED off

    // Set mode to Access Point
    WiFi.mode(WIFI_AP);

    // Configure AP
    // Arguments: SSID, Password, Channel (1-13 for 2.4G), Hidden (0/1), Max Connections
    // Note: Forcing 5GHz AP usually requires lower-level IDF calls in current Arduino Core,
    // so this will likely default to 2.4GHz.
    bool result = WiFi.softAP(ap_ssid, ap_password, 1, 0, 4);

    if (result) {
        Serial.println("AP Started Successfully");
    } else {
        Serial.println("AP Start Failed");
    }

    // Print IP Address of the AP (Default is usually 192.168.4.1)
    Serial.print("AP IP Address: ");
    Serial.println(WiFi.softAPIP());
}

void loop() {
    // Get current number of connected stations
    int current_station_count = WiFi.softAPgetStationNum();
    Serial.printf("Stations connected: %d\n", current_station_count);

    // Check if any device has connected or disconnected
    if (current_station_count > 0 && previous_station_count == 0) {
        // New device connected, turn on LED
        digitalWrite(LED_BUILTIN, HIGH);
        Serial.println("Device connected - LED ON");
    } else if (current_station_count == 0 && previous_station_count > 0) {
        // All devices disconnected, turn off LED
        digitalWrite(LED_BUILTIN, LOW);
        Serial.println("All devices disconnected - LED OFF");
    }

    previous_station_count = current_station_count;
    delay(2000);
}
```

#### 效果展示

- 编译并上传程序后，您可以通过 WLAN 功能发现 AP 热点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_3.png" style={{width:800, height:'auto'}}/></div>

- 成功连接后，串口监视器将打印 IP 地址，同时板载用户 LED 将点亮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_4.png" style={{width:800, height:'auto'}}/></div>

### WiFi 和 MQTT 使用

MQTT 协议在物联网设备中广泛使用，XIAO ESP32-C5 支持此协议——这意味着您可以使用 XIAO ESP32-C5 开发许多有趣的物联网项目。

#### 程序

接下来，将提供一个参考程序来展示如何在 XIAO ESP32-C5 上使用 MQTT 协议。

- 安装 `PubSubClient` 库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_1.png" style={{width:600, height:'auto'}}/></div>

- 参考代码

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// Using a public MQTT broker for demonstration
const char* mqtt_server = "broker.emqx.io";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

// Callback function: Executed when a message is received
void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Message arrived [");
    Serial.print(topic);
    Serial.print("] ");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}

void reconnect() {
    // Loop until we're reconnected
    while (!client.connected()) {
        Serial.print("Attempting MQTT connection...");
        String clientId = "ESP32C5Client-";
        clientId += String(random(0xffff), HEX);

        // Attempt to connect
        if (client.connect(clientId.c_str())) {
            Serial.println("connected");
            // Once connected, subscribe to a topic
            client.subscribe("esp32c5/test/topic");
        } else {
            Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println(" try again in 5 seconds");
            delay(5000);
        }
    }
}

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nWiFi Connected");

    // Configure MQTT Server
    client.setServer(mqtt_server, mqtt_port);
    client.setCallback(callback);
}

void loop() {
    if (!client.connected()) {
        reconnect();
    }
    client.loop();

    // Publish a message every 2 seconds
    static unsigned long lastMsg = 0;
    unsigned long now = millis();
    if (now - lastMsg > 2000) {
        lastMsg = now;
        Serial.println("Publishing message...");
        client.publish("esp32c5/test/topic", "Hello from XIAO ESP32-C5");
    }
}
```

#### 效果展示

- 下载任何支持 MQTTX 代理客户端的软件；这里使用 MQTTX [MQTTx](https://mqttx.app/downloads)

- 打开 MQTTX 并添加客户端信息。这里使用默认客户端地址，所以您只需要添加客户端 ID `ESP32C5Client` 并设置测试客户端名称；其余配置可以保持默认。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_5.png" style={{width:800, height:'auto'}}/></div><br/>

- 上传代码并使用 MQTTX 连接。连接成功后，点击左侧的 `New Subscription` 添加订阅。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_6.png" style={{width:800, height:'auto'}}/></div><br/>

- 配置订阅信息：输入 `esp32c5/test/topic` 并为 QoS 选择 0 或 1。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_7.png" style={{width:800, height:'auto'}}/></div><br/>

- 配置成功后，您可以看到 XIAO ESP32-C5（作为客户端）每 2 秒发布的消息。您也可以在选择主题后向客户端发送消息，客户端收到后会发布它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
broker.emqx.io 是一个由所有用户共享的公共代理。任何订阅相同主题的人都可以查看您的消息。它仅用于测试目的，不适合传输敏感数据。
:::

### WiFi & HTTP /HTTPS

- 您可以参考我们为 XIAO ESP32C3 编写的访问 ChatGPT 的示例，其中详细介绍了如何使用 WiFiClient 和 HTTPClient：[学习在 XIAO ESP32C3 上使用 WiFiClient 和 HTTPClient - XIAO ESP32C3 & ChatGPT 实战](https://wiki.seeedstudio.com/cn/xiaoesp32c3-chatgpt/)

- 如果您只想探索 HTTP 的简单用法，也可以按照以下步骤进行测试和验证。

#### 程序

- 安装 `HTTPClient` 库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_2.png" style={{width:600, height:'auto'}}/></div><br/>

- 参考代码

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h> // Required for HTTPS

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// HTTPS Endpoint
const char* serverUrl = "https://jsonplaceholder.typicode.com/todos/1";

// Root CA Certificate (Optional for simple testing if setInsecure is used)
// To be secure, you should use the actual root CA of the website.
// For this example, we will use setInsecure().

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nConnected");
}

void loop() {
    if ((WiFi.status() == WL_CONNECTED)) {

        // 1. Create WiFiClientSecure object
        WiFiClientSecure client;

        // IGNORE SSL certificate validation (Good for testing, NOT for production)
        client.setInsecure(); 

        // 2. Create HTTPClient object
        HTTPClient http;

        Serial.print("[HTTPS] begin...\n");

        // 3. Initialize connection
        if (http.begin(client, serverUrl)) { 
            Serial.print("[HTTPS] GET...\n");

            // 4. Send GET request
            int httpCode = http.GET();

            // 5. Check return code
            if (httpCode > 0) {
                Serial.printf("[HTTPS] GET... code: %d\n", httpCode);

                if (httpCode == HTTP_CODE_OK || httpCode == 301 || httpCode == 302) {
                    String payload = http.getString();
                    Serial.println(payload);
                }
            } else {
                Serial.printf("[HTTPS] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
            }

            // 6. Close connection
            http.end();
        } else {
            Serial.printf("[HTTPS] Unable to connect\n");
        }
    }

    delay(10000);
}
```

#### 效果展示

:::tip
`https://jsonplaceholder.typicode.com` 是一个免费的模拟 REST API 测试服务，专门为开发和测试目的而设计。它不支持真实数据的永久修改或持久化。
:::

- 上传代码，然后您可以打开 `https://jsonplaceholder.typicode.com/todos/1` 和 Arduino IDE 中的串口监视器工具来检查信息是否一致。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_9.png" style={{width:800, height:'auto'}}/></div>

### WiFi-Mesh

以下是乐鑫系统对 **ESP-WIFI-MESH** 的官方介绍：

ESP-WIFI-MESH 是一个使用乐鑫 SoC 上的同时 AP-STA 功能，以网状拓扑组织节点的无线通信网络。它提供了一个自组织和自愈的网络，易于部署。ESP-WIFI-MESH 的网络拓扑可以在大面积内扩展到 1000 个节点，无需任何特定的 Wi-Fi 基础设施支持。ESP-WIFI-MESH 也可以用于覆盖家庭部署场景中的 Wi-Fi 盲点，即 Wi-Fi 信号无法到达的地方。

更多详细信息，请参考乐鑫系统的官方链接：

- [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)
- [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/esp-wifi-mesh.html)

接下来，我将向您展示一个 ESP-Mesh 的示例，对于这个示例，您需要准备至少两个 ESP32 设备。

#### 程序

- 安装 `Alteriom PainlessMesh` 库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_3.png" style={{width:600, height:'auto'}}/></div>

- 安装 `AsyncTCP` 库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_4.png" style={{width:600, height:'auto'}}/></div>

- 参考代码

```cpp
#include "painlessMesh.h"

#define   MESH_PREFIX     "ESP32_C5_MESH"
#define   MESH_PASSWORD   "mesh_password123"
#define   MESH_PORT       5555

painlessMesh  mesh;
Scheduler userScheduler; // to control your personal task

void sendMessage(); // Prototype

// Define a task to send messages every 1 second
Task taskSendMessage(1000, TASK_FOREVER, &sendMessage);

void sendMessage() {
    String msg = "Hello from node ";
    msg += mesh.getNodeId();
    mesh.sendBroadcast(msg);
    Serial.printf("Sent broadcast: %s\n", msg.c_str());
}

// Callback: When a message is received
void receivedCallback( uint32_t from, String &msg ) {
    Serial.printf("Received from %u msg=%s\n", from, msg.c_str());
}

// Callback: When a new connection is established
void newConnectionCallback(uint32_t nodeId) {
    Serial.printf("New Connection, nodeId = %u\n", nodeId);
}

// Callback: When connection changes
void changedConnectionCallback() {
    Serial.printf("Changed connections\n");
}

// Callback: Time adjustment
void nodeTimeAdjustedCallback(int32_t offset) {
    Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(), offset);
}

void setup() {
    Serial.begin(115200);

    // Debug messages
    mesh.setDebugMsgTypes( ERROR | STARTUP );  

    // Initialize Mesh
    mesh.init( MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT );

    // Register Callbacks
    mesh.onReceive(&receivedCallback);
    mesh.onNewConnection(&newConnectionCallback);
    mesh.onChangedConnections(&changedConnectionCallback);
    mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);

    // Add task to scheduler
    userScheduler.addTask( taskSendMessage );
    taskSendMessage.enable();
}

void loop() {
    // Keep the mesh network running
    mesh.update();
}
```

#### 效果展示

- 将代码上传到两个 XIAO ESP32-C5 设备并打开任何串口工具来检查结果。

XIAO ESP32-C5 设备 1 开始网络组建并发送消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_10.png" style={{width:800, height:'auto'}}/></div><br/>

XIAO ESP32-C5 设备 2 加入网络并接收来自设备 1 的消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_11.png" style={{width:800, height:'auto'}}/></div>

### 示例：IoT 智能家居中枢

从上面的 Wi-Fi 示例中，您一定已经掌握了如何在 XIAO ESP32-C5 上使用 Wi-Fi。接下来，将展示一个示例，向您展示如何使用 Wi-Fi AP 模式和 HTTP 网络服务实现智能家居控制中枢——具体来说，如何使用 XIAO ESP32-C5 作为智能家居控制中枢来监控您家的状态。

- 安装 `ESPAsyncWebServer` 库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_5.png" style={{width:600, height:'auto'}}/></div><br/>

- 上传代码并连接到 `XIAO ESP32-C5` 热点。

<details>

<summary>参考代码</summary>

```cpp
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <DNSServer.h>

const char* ssid = "XIAO ESP32-C5";  // Hotspot name
const char* password = "12345678";  // Hotspot password (empty for no password, configurable)

DNSServer dnsServer;
AsyncWebServer server(80);

// HTML content for temporary website (You can modify the content here, e.g., add redirect to external website)
// const char index_html[] PROGMEM = R"rawliteral(
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Temporary Website</title>
//     <meta charset="UTF-8">
//     <!-- Optional: Add automatic redirect to external website -->
//     <!-- <meta http-equiv="refresh" content="5;url=https://example.com"> -->
// </head>
// <body>
//     <h1>Welcome to XIAO ESP32-C5 Temporary Website!</h1>
//     <p>You have connected to XIAO-ESP32-C5 hotspot. This is custom content.</p>
//     <form action="/" method="POST">
//         <input type="submit" value="Continue">
//     </form>
// </body>
// </html>
// )rawliteral";

const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>XIAO ESP32-C5 Control Center</title>
  <style>
    :root {
      --bg-color: #121212;
      --card-bg: #1e1e1e;
      --text-main: #e0e0e0;
      --text-sub: #a0a0a0;
      --accent: #00e5ff; /* Neon Blue */
      --active: #00ff9d; /* Active Green */
      --danger: #ff4081; /* Warning Red */
    }

    body {
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      margin: 0;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    h1 {
      font-weight: 300;
      letter-spacing: 1.5px;
      margin-bottom: 10px;
      text-align: center;
    }

    p.subtitle {
      color: var(--text-sub);
      font-size: 0.9rem;
      margin-top: 0;
      margin-bottom: 30px;
      text-align: center;
    }

    /* Container Layout */
    .container {
      width: 100%;
      max-width: 400px; /* Suitable width for mobile devices */
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Status Panel */
    .status-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .card {
      background-color: var(--card-bg);
      border-radius: 12px;
      padding: 15px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      border: 1px solid #333;
      transition: transform 0.2s;
    }

    .card:active {
      transform: scale(0.98);
    }

    .card-icon {
      font-size: 24px;
      margin-bottom: 5px;
      display: block;
    }

    .card-value {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--accent);
    }

    .card-label {
      font-size: 0.8rem;
      color: var(--text-sub);
    }

    /* Control Button Area */
    .control-group {
      background-color: var(--card-bg);
      border-radius: 16px;
      padding: 20px;
      border: 1px solid #333;
    }

    .control-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #333;
    }

    .control-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    /* Switch Style */
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 26px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #333;
      transition: .4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: var(--accent);
      box-shadow: 0 0 10px var(--accent);
    }

    input:checked + .slider:before {
      transform: translateX(24px);
    }

    /* Main Button */
    .main-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(45deg, var(--accent), #00b8d4);
      border: none;
      border-radius: 30px;
      color: #000;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .main-btn:active {
      opacity: 0.9;
      transform: scale(0.98);
    }

  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>XIAO ESP32-C5</h1>
      <p class="subtitle">IoT Smart Home Hub</p>
    </header>

    <div class="status-grid">
      <div class="card">
        <span class="card-icon">📡</span>
        <div class="card-value">Online</div>
        <div class="card-label">System Status</div>
      </div>
      <div class="card">
        <span class="card-icon">🌡️</span>
        <div class="card-value" id="temp-val">26.5°C</div>
        <div class="card-label">Indoor Temperature</div>
      </div>
      <div class="card">
        <span class="card-icon">💧</span>
        <div class="card-value">58%</div>
        <div class="card-label">Air Humidity</div>
      </div>
      <div class="card">
        <span class="card-icon">⏱️</span>
        <div class="card-value">12ms</div>
        <div class="card-label">Latency</div>
      </div>
    </div>

    <div class="control-group">
      <div class="control-item">
        <span>Living Room Main Light</span>
        <label class="switch">
          <input type="checkbox" id="btn-light" onchange="toggleDevice('light', this)">
          <span class="slider"></span>
        </label>
      </div>

      <div class="control-item">
        <span>Air Purifier</span>
        <label class="switch">
          <input type="checkbox" id="btn-fan" onchange="toggleDevice('fan', this)">
          <span class="slider"></span>
        </label>
      </div>

      <div class="control-item">
        <span>Auto Mode</span>
        <label class="switch">
          <input type="checkbox" checked onchange="toggleDevice('auto', this)">
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <form action="/" method="POST">
       <button type="submit" class="main-btn">Enter Advanced Settings</button>
    </form>

  </div>

  <script>
    // Simple JavaScript for demo interaction
    function toggleDevice(device, element) {
      var state = element.checked ? "ON" : "OFF";
      console.log(device + " is now " + state);

      // You can add fetch request to send to ESP32 here
      // fetch('/toggle?device=' + device + '&state=' + state);
    }

    // Simulate dynamic data fluctuation effect
    setInterval(() => {
        const temp = 26 + (Math.random() * 0.5);
        document.getElementById('temp-val').innerText = temp.toFixed(1) + "°C";
    }, 3000);
  </script>
</body>
</html>
)rawliteral";

// Handle all requests and redirect to temporary page
class CaptiveRequestHandler : public AsyncWebHandler {
public:
    CaptiveRequestHandler() {}
    virtual ~CaptiveRequestHandler() {}

    bool canHandle(AsyncWebServerRequest *request) {
        return true;  // Handle all requests
    }

    void handleRequest(AsyncWebServerRequest *request) {
        request->send_P(200, "text/html", index_html);  // Return HTML content
    }
};

void setup() {
    Serial.begin(115200);
    delay(10);

    // Set to AP (Access Point) mode
    WiFi.mode(WIFI_AP);
    WiFi.softAP(ssid, password);

    Serial.println("Hotspot created: " + String(ssid));
    Serial.print("IP Address: ");
    Serial.println(WiFi.softAPIP());

    // Start DNS server, redirect all domains to local IP
    dnsServer.start(53, "*", WiFi.softAPIP());

    // Configure Web Server: redirect all not found requests to temporary page
    server.addHandler(new CaptiveRequestHandler()).setFilter(ON_AP_FILTER);  // Only in AP mode
    server.onNotFound([](AsyncWebServerRequest *request) {
        request->send_P(200, "text/html", index_html);
    });

    server.begin();
    Serial.println("Web Server started");

    server.on("/toggle", HTTP_GET, [](AsyncWebServerRequest *request){
    String device = request->getParam("device")->value();
    String state = request->getParam("state")->value();

    Serial.print("Device: ");
    Serial.print(device);
    Serial.print(" State: ");
    Serial.println(state);

    if(device == "light" && state == "ON") {
        digitalWrite(LED_BUILTIN, LOW); // Assume LOW level turns on the LED
    } else {
        digitalWrite(LED_BUILTIN, HIGH);
    }

    request->send(200, "text/plain", "OK");
});
}

void loop() {
    dnsServer.processNextRequest();  // Process DNS requests
    delay(10);
}
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_12.png" style={{width:800, height:'auto'}}/></div><br/>

- 输入 IP 地址跳转到网页。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_13.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
网页上显示的控件和传感器是可自定义的。您可以根据具体需求添加新的控件并修改生成的网页。参考：[ESPAsyncWebServer](https://github.com/lacamera/ESPAsyncWebServer)
:::

:::tip
XIAO ESP32-C5 生成的 AP 热点默认无法连接到互联网。如果需要互联网连接，您可以采用以下两种方法之一：<br/>
方法 1：将 XIAO ESP32-C5 连接到 Home Assistant。参考：[将 XIAO ESP32-C5 连接到 Home Assistant](https://wiki.seeedstudio.com/cn/xiao_esp32c5_homeassistant/)<br/>
方法 2：使用 MQTT 服务将数据上传到云服务器。注意，此方法可能需要购买一定的服务积分。参考：[Goole Cloud](https://cloud.google.com/)<br/>
:::

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
