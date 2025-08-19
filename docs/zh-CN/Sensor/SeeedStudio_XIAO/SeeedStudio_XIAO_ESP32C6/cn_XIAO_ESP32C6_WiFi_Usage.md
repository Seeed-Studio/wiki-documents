---
description: 使用 Seeed Studio XIAO ESP32C6 的 WiFi 功能。
title: WiFi 使用方法
keywords:
  - esp32c6
  - xiao
  - arduino
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_wifi_usage_esp32c6
sidebar_position: 3
last_update:
  date: 04/11/2024
  author: Spencer
---

# 使用 Seeed Studio XIAO ESP32C6 的 WiFi 功能

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio XIAO ESP32C6 是一款嵌入式开发板，凭借其对 2.4GHz Wifi - 802.11b/g/n 和蓝牙低功耗 (BLE) 5.0 双无线通信的支持，展现出卓越的射频性能。这种能力使 XIAO ESP32C6 能够为广泛的物联网 (IoT) 应用提供可靠和高速的无线连接。该开发板配备板载陶瓷天线，无需外部天线，简化了设计过程。ESP32C6 芯片还具有低功耗特性，适用于电池供电的物联网设备。在本教程中，我们将探索如何利用 XIAO ESP32C6 的 Wi-Fi 功能连接到 Wi-Fi 网络并执行基本的网络任务。

:::tip
GPIO14 用于选择使用内置天线还是外部天线。在此之前，您需要将 GPIO3 设置为低电平来开启此功能。如果 GPIO14 设置为低电平，则使用内置天线；如果设置为高电平，则使用外部天线。默认为低电平。如果您想将其设置为高电平，可以参考以下代码。

```cpp
void setup() {
  pinMode(3, OUTPUT);
  digitalWrite(3, LOW);//开启此功能
  delay(100);
  pinMode(14, OUTPUT); 
  digitalWrite(14, HIGH);//使用外部天线
}
```

## WiFi库的常用接口

ESP32-C6提供了广泛的WiFi网络功能。通常，我们可以在ESP32的内置包中查看WiFi库的功能，并选择相应的功能来实现所需的功能。接下来，我们将列出一些常用的接口并介绍它们的用法。

### 通用WiFi功能

- `WiFiGenericClass::getHostname()` -- 是ESP32 WiFi库中的一个函数，它以字符串形式返回设备的主机名。主机名是在网络上标识设备的唯一名称。此函数检索之前使用`WiFiGenericClass::setHostname()`设置的主机名。如果没有设置主机名，将返回默认主机名。

- `WiFiGenericClass::persistent(bool persistent)` -- 是一个用于启用或禁用ESP32 WiFi库持久模式的方法。当启用持久模式时，Wi-Fi配置存储在非易失性存储器(NVM)中，即使在断电或重置后也会保留。当禁用持久模式时，配置存储在RAM中，在断电或重置后会丢失。

	- **输入参数**
		- **persistent**: 如果参数为true，则启用持久模式。如果参数为false，则禁用持久模式。

- `WiFiGenericClass::enableLongRange(bool enable)` -- 该函数用于启用或禁用WiFi模块的长距离(LR)功能。启用时，LR功能允许模块连接到比平常更远的WiFi网络，但数据传输速率较低。

	- **输入参数**
		- **enable**: 该参数应设置为true以启用该功能，设置为false以禁用该功能。

- `WiFiGenericClass::mode(wifi_mode_t m)` -- 该函数用于设置设备的WiFi模式。

	- **输入参数**
		- **m**: m参数指定要设置的模式，可以是wifi_mode_t枚举中定义的以下常量之一：
			- **WIFI_MODE_NULL**: 禁用WiFi站点和接入点模式。
			- **WIFI_MODE_STA**: 启用WiFi站点模式以连接到现有WiFi网络。
			- **WIFI_MODE_AP**: 启用接入点模式以创建新的WiFi网络。
			- **WIFI_MODE_APSTA**: 同时启用WiFi站点和接入点模式。

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- 该函数为WiFi模块设置省电模式。

	- **输入参数**
		- **sleepType**: sleepType参数是一个枚举类型，指定要使用的省电模式类型。有三种可能的睡眠类型：
			- **WIFI_PS_NONE**: 这是默认睡眠模式，WiFi模块不进入省电模式。
			- **WIFI_PS_MIN_MODEM**: 在此模式下，WiFi模块关闭其调制解调器，同时保持与接入点(AP)的连接。
			- **WIFI_PS_MAX_MODEM**: 在此模式下，WiFi模块同时关闭调制解调器和站点，这会导致与AP断开连接。

### STA功能

- `WiFiSTAClass::status()` -- 返回连接状态。

	- **输出**: wl_status_t中定义的值之一。
		- **WL_NO_SHIELD**: 此状态码表示Wi-Fi模块不存在。
    	- **WL_IDLE_STATUS**: 此状态码表示Wi-Fi模块未执行任何操作。
    	- **WL_NO_SSID_AVAIL**: 此状态码表示在扫描期间未找到Wi-Fi网络。
    	- **WL_SCAN_COMPLETED**: 此状态码表示Wi-Fi扫描已成功完成。
    	- **WL_CONNECTED**: 此状态码表示ESP32已成功连接到Wi-Fi网络。
    	- **WL_CONNECT_FAILED**: 此状态码表示连接到Wi-Fi网络失败。
    	- **WL_CONNECTION_LOST**: 此状态码表示与Wi-Fi网络的连接已丢失。
    	- **WL_DISCONNECTED**: 此状态码表示ESP32之前连接到Wi-Fi网络，但当前未连接到任何网络。

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- 启动与WPA2企业级AP的Wifi连接。

	- **输入参数** (可选)
		- **ssid**: 指向SSID字符串的指针。
		- **method**: WPA2的认证方法 (WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS)
		- **wpa2_identity**: 指向实体的指针
		- **wpa2_username**: 指向用户名的指针
		- **wpa2_password**: 指向密码的指针。
		- **ca_pem**: 指向包含CA证书的.pem文件内容的字符串的指针
		- **client_crt**: 指向包含客户端证书的.crt文件内容的字符串的指针
		- **client_key**: 指向包含客户端密钥的.key文件内容的字符串的指针
		- **channel**: 可选。AP的信道
		- **bssid**: 可选。AP的BSSID / MAC
		- **connect**: 可选。调用连接

- `WiFiSTAClass::reconnect()` -- 将强制断开连接，然后开始重新连接到AP。

	- **输出**: True/False。

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- 从网络断开连接。

	- **输入参数**
		- **wifioff**: wifioff `true`表示关闭Wi-Fi无线电。
		- **eraseap**: eraseap `true`表示从NVS存储器中擦除AP配置。
	
	- **输出**: True/False。

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- 更改IP配置设置，禁用dhcp客户端。

	- **输入参数**
		- **local_ip**: 静态ip配置。
		- **gateway**: 静态网关配置。
		- **subnet**: 静态子网掩码。
		- **dns1**: 静态DNS服务器1。
		- **dns2**: 静态DNS服务器2。

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- 已弃用。设置ESP32站点在上电时是否自动连接到AP（已记录）。默认启用自动连接。

- **输入参数**
		- **autoConnect**: autoConnect 布尔值。

	- **输出**: False。

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- 等待 WiFi 连接达到结果。

	- **输入参数**
		- **timeoutLength**: 该参数指定等待建立连接的最大时间，以毫秒为单位。

	- **输出**: wl_status_t 中定义的值之一。

- `WiFiSTAClass::localIP()` -- 获取站点接口 IP 地址。

	- **输出**: IPAddress 站点 IP。

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- 获取站点接口 MAC 地址。

	- **输入参数**
		- **mac** (可选): 指向长度为 WL_MAC_ADDR_LENGTH 的 uint8_t 数组的指针。

	- **输出**: 指向 uint8_t * 的指针。

- `WiFiSTAClass::SSID()` -- 返回与网络关联的当前 SSID。

	- **输出**: SSID。

- `WiFiSTAClass::RSSI(void)` -- 返回当前网络 RSSI。

	- **输出**: RSSI。

### AP 函数

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- 这是 ESP32-C6 WiFi 库中的一个函数。它用于设置 SoftAP（软件接入点），允许其他设备连接到 ESP32-C6 并访问其资源。

	- **输入参数**
		-  **ssid**:              指向 SSID 的指针（最多 63 个字符）。
 		-  **passphrase**:        （WPA2 最少 8 个字符，开放网络使用 NULL）。
 		-  **channel**:           WiFi 信道号，1 - 13。
 		-  **ssid_hidden**:       网络隐藏（0 = 广播 SSID，1 = 隐藏 SSID）。
 		-  **max_connection**:    最大同时连接客户端数，1 - 4。

	- **输出**: True/False。

- `WiFiAPClass::softAPgetStationNum()` -- 获取连接到 softAP 接口的站点/客户端数量。

	- **输出**: 站点数量。

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- 用于配置 SoftAP 的函数。

	- **输入参数**
		- **local_ip**:      接入点 IP。
		- **gateway**:       网关 IP。
		- **subnet**:        子网掩码。

	- **输出**: True/False。

- `WiFiAPClass::softAPIP()` -- 获取 softAP 接口 IP 地址。

	- **输出**: IPAddress softAP IP。

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- 获取 softAP 接口 MAC 地址。

	- **输入参数**
		- **mac** (可选):   指向长度为 WL_MAC_ADDR_LENGTH 的 uint8_t 数组的指针。

	- **输出**: 指向 uint8_t* 的指针或字符串 mac。

### WiFi 扫描函数

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- 开始扫描可用的 WiFi 网络。

	- **输入参数**
		- **async**: 该参数是一个布尔值，决定是否异步执行扫描。如果设置为 true，函数立即返回，扫描结果可以稍后通过调用 getScanResults() 函数获取。如果设置为 false，函数将阻塞直到扫描完成。
		- **show_hidden**: 该参数是一个布尔值，决定函数是否应在扫描结果中包含隐藏网络。
		- **passive**: 该参数是一个布尔值，决定函数是否应执行被动扫描。如果设置为 true，函数在扫描期间不会传输任何数据包，这可能需要更长时间，但在某些情况下很有用。
		- **max_ms_per_chan**: 该参数是扫描每个信道的最大时间，以毫秒为单位。
		- **channel**: 该参数是要扫描的 Wi-Fi 信道。如果设置为 0，函数将扫描所有可用信道。
		- **ssid**: 该参数是指向包含要扫描网络 SSID 的以空字符结尾的字符串的指针。如果设置为 nullptr，函数将扫描所有可用网络。
		- **bssid**: 该参数是指向包含要扫描的接入点 MAC 地址的 6 字节数组的指针。如果设置为 nullptr，函数将扫描所有接入点。

	- **输出**: 此函数的返回值是一个整数，表示扫描到的网络数量。

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- 将扫描到的 wifi 的所有信息加载到指针参数中。

	- **输入参数**
		- **i**: 该函数用于检索指定索引 i 处扫描网络的信息。
		- **ssid**: ssid 参数是对 String 变量的引用，函数在其中存储网络的 SSID。
		- **encType**: encType 参数是对 uint8_t 变量的引用，函数在其中存储网络的加密类型（0 = 开放，1 = WEP，2 = WPA_PSK，3 = WPA2_PSK，4 = WPA_WPA2_PSK）。
		- **rssi**: rssi 参数是对 int32_t 变量的引用，函数在其中存储网络的接收信号强度指示（RSSI）。
		- **bssid**: bssid 参数是对 uint8_t* 指针的引用，函数在其中存储网络的 BSSID（MAC 地址）。
		- **channel**: channel 参数是对 int32_t 变量的引用，函数在其中存储网络的信道号。

	- **输出**: True/False。

- `WiFiScanClass::SSID(uint8_t i)` -- 返回网络扫描期间发现的 SSID。

	- **输入参数**
		- **i**: 指定要从哪个网络项目获取信息。

	- **输出**: 扫描网络列表中指定项目的 SSID 字符串。

- `WiFiScanClass::RSSI(uint8_t i)` -- 返回 scanNetworks 期间发现的网络的 RSSI。

	- **输入参数**
		- **i**: 指定要从哪个网络项目获取信息。

	- **输出**: 扫描网络列表中指定项目的 RSSI 有符号值。

### WiFi 客户端函数

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- 此函数在 WiFiClient 库中用于连接到具有指定超时值的远程 IP 地址和端口。

	- **输入参数**
		- **ip**:   要连接的服务器的 IP 地址。
		- **port**: 要连接的服务器的端口号。
		- **timeout** (可选): 等待建立连接的最大时间，以毫秒为单位。如果在此时间内未建立连接，函数将返回错误。如果 timeout 设置为 0，函数将无限期等待建立连接。

- `WiFiClient::stop()` -- 该函数用于断开客户端与服务器的连接并释放客户端使用的套接字/端口。一旦调用该函数，客户端将无法再发送或接收数据。

- `WiFiClient::setTimeout(uint32_t seconds)` -- 该函数设置客户端等待建立连接或接收数据的最大秒数。如果连接或数据传输时间超过指定的超时时间，连接将被关闭。

	- **输入参数**
		- **seconds**:   超时时间的秒数。

- `WiFiClient::write(uint8_t data)` -- 通过 WiFiClient 实例向连接的服务器写入单个字节的数据。或者使用 `WiFiClient::write(const uint8_t *buf, size_t size)`。

	- **输入参数**
		- **data**:   需要通过已建立的网络连接发送的单个字节数据。

- `WiFiClient::read()` -- 该函数从连接的服务器读取单个字节的传入数据。它返回读取的字节作为整数值。如果没有可用数据，则返回 -1。或者使用 `read(uint8_t *buf, size_t size)`。

	- **输出**: 表示接收字节数的整数值。如果返回值为 0，表示服务器已关闭连接。

- `WiFiClient::peek()` -- 该函数用于检查是否有任何数据可从服务器读取，而不实际读取它。

	- **输出**: 它返回下一个传入数据字节，而不从接收缓冲区中移除它。如果没有可用数据，则返回 -1。

- `WiFiClient::available()` -- 该函数用于检查有多少字节的数据可从服务器读取。

	- **输出**: 它返回一个整数值，表示可读取的字节数。

### WiFi Server 函数

- `WiFiServer::stopAll()` -- 该函数是 Arduino WiFi 库中 WiFiServer 类的一个方法。该方法停止使用 WiFiServer 类创建的所有服务器实例。当您想要一次性停止所有服务器而不是为每个实例单独调用 `stop()` 方法时，这很有用。

- `WiFiServer::begin(uint16_t port, int enable)` -- 该函数用于在指定端口上启动服务器。服务器将监听传入的客户端连接。

	- **输入参数**
		- **port**: 要监听的端口号。
		- **enable** (可选): 一个标志，指示服务器在启动后是否应立即启用。该标志默认设置为 true。

- `WiFiServer::hasClient()` -- 该函数用于检查服务器上是否有任何传入的客户端连接可用。该函数可以在循环中使用以持续检查新连接。

	- **输出**: 如果有客户端已连接，则返回 WiFiClient 对象，如果没有客户端等待连接，则返回 NULL 指针。

- `WiFiServer::end()` -- 该函数用于停止服务器并释放相关资源。一旦调用，服务器将无法再接受新的客户端连接。任何现有的客户端连接将保持打开状态，直到被客户端或服务器关闭。`WiFiServer::close()` 和 `WiFiServer::stop()` 具有相同的功能。

### WiFi Multiple 函数

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- 该函数用于向 WiFiMulti 对象将尝试连接的可用接入点 (AP) 列表中添加新的接入点。

	- **输入参数**
		- **ssid**: 指向 SSID 的指针（最多 63 个字符）。
		- **passphrase**: （WPA2 最少 8 个字符，开放网络使用 NULL）。

	- **输出**: True/False


- `WiFiMulti::run(uint32_t connectTimeout)` -- 该函数尝试按顺序连接到已保存的接入点之一，直到成功连接到其中一个。

	- **输入参数**
		- **connectTimeout**: 该参数指定等待连接的最大时间（以毫秒为单位）。如果 connectTimeout 设置为 0，函数将不会超时，并将无限期地尝试连接。

	- **输出**: 状态

## 扫描附近的WiFi网络

以下是使用XIAO ESP32C6扫描附近WiFi网络的示例程序。

:::info
XIAO C6仅支持`2.4GHz`频段。
:::

在您的Arduino IDE中，转到**文件 > 示例 > WiFi > WiFiScan**。这将加载一个扫描XIAO ESP32C6范围内WiFi网络的程序。

这对于检查您尝试连接的WiFi网络是否在您的开发板范围内或其他应用程序很有用。您的WiFi项目可能经常无法工作，因为由于WiFi信号强度不足，它可能无法连接到您的路由器。

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);

  // 将WiFi设置为站点模式，如果之前连接过AP则断开连接
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("Starting Wi-Fi scan...");

  // WiFi.scanNetworks将返回找到的网络数量
  int numNetworks = WiFi.scanNetworks();
  Serial.println("Scan done");

  if (numNetworks == 0) {
    Serial.println("No networks found");
  } else {
    Serial.print(numNetworks);
    Serial.println(" networks found");
    for (int i = 0; i < numNetworks; i++) {
      // 打印找到的每个网络的SSID和RSSI
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
      delay(10);
    }
  }
  Serial.println("");

  // 再次扫描前等待一段时间
  delay(5000);
}
```

上传并运行程序，您应该会看到串口监视器打印出 XIAO ESP32C6 可以搜索到的附近 WiFi 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### 程序注释

要使用 XIAO ESP32C6 WiFi 功能，您需要做的第一件事是在代码中包含 **WiFi.h** 库，如下所示：

```cpp
#include <WiFi.h>
```

XIAO ESP32C6 可以作为 WiFi 站点、接入点或两者兼而有之。要设置 WiFi 模式，请使用 `WiFi.mode()` 并将所需模式设置为参数。

```cpp
WiFi.mode(WIFI_STA);
```

当ESP32设置为Wi-Fi站点模式时，它可以连接到其他网络（如您的路由器）。

`WiFi.scanNetworks()`返回找到的网络数量。扫描完成后，您可以访问每个网络的参数。`WiFi.SSID()`打印特定网络的SSID。

`WiFi.RSSI()`返回该网络的RSSI。RSSI代表接收信号强度指示器。它是RF客户端设备从接入点或路由器接收到的功率级别的估计测量值。

最后，`WiFi.encryptionType()`返回网络加密类型。该特定示例在开放网络的情况下放置一个*。但是，该函数可以返回以下选项之一（不仅仅是开放网络）：
- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## 连接到WiFi网络

要将ESP32连接到特定的Wi-Fi网络，您必须知道其SSID和密码。此外，该网络必须在ESP32 WiFi范围内（要检查这一点，您可以使用前面的示例来扫描WiFi网络）。

以下是使用XIAO ESP32C6连接到指定网络的示例。其中函数`initWiFi()`在程序中起到连接网络的作用。

> 要连接到Wi-Fi网络，您可以使用`WiFi.begin()`函数。此函数将网络的SSID和密码作为参数。

```cpp
#include "WiFi.h"

// Replace with your network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void initWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println();
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  initWiFi();
}

void loop() {
  // Your code here
}
```

上传并运行程序以打开串口监视器。连接到网络时，串口监视器将打印一串点，直到连接成功，然后将打印 XIAO 的 IP 地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### 程序注释

让我们快速了解一下这个函数是如何工作的。

首先，设置 WiFi 模式。如果 XIAO ESP32C6 将连接到另一个网络（接入点/热点），它必须处于站点模式。

```cpp
WiFi.mode(WIFI_STA);
```

然后，使用 `WiFi.begin()` 连接到网络。您必须将网络 SSID 和密码作为参数传递：

```cpp
WiFi.begin(ssid, password);
```

连接到WiFi网络可能需要一些时间，所以我们通常添加一个while循环，通过使用`WiFi.status()`持续检查连接是否已经建立。当连接成功建立时，它返回`WL_CONNECTED`。

如果你想获取WiFi连接强度，你可以在WiFi连接后简单地调用`WiFi.RSSI()`。

## softAP使用

如果你将XIAO ESP32C6设置为接入点（热点），你可以使用任何具有WiFi功能的设备连接到ESP32，而无需连接到你的路由器。

简单来说，当你将XIAO ESP32C6设置为接入点时，你创建了它自己的WiFi网络，附近的WiFi设备（站点）可以连接到它（比如你的智能手机或电脑）。

在你的Arduino IDE中，转到**文件 > 示例 > WiFi > WiFiAccessPoint**。这个示例将向你展示如何使用XIAO ESP32C6创建热点，并通过连接到热点的简单网页控制灯的开/关开关。

:::note
1. 我们对示例程序做了一些小的修改，注释掉了LED_BUILTIN，因为XIAO ESP32C6有自己的用户指示灯，我们不需要外部LED。
2. 只有当XIAO ESP32C6上的用户LED引脚设置为高电平时，LED才会关闭，只有当引脚设置为低电平时，它才会点亮。
3. 你还需要在程序中将热点名称和密码修改为你想要的。
:::

```cpp
/*
  WiFiAccessPoint.ino 创建一个WiFi接入点并在其上提供Web服务器。

  步骤：
  1. 连接到接入点 "yourAp"
  2. 将您的Web浏览器指向 http://192.168.4.1/H 来打开LED，或 http://192.168.4.1/L 来关闭LED
     或者
     在PuTTY终端上运行原始TCP命令 "GET /H" 和 "GET /L"，IP地址为192.168.4.1，端口为80

  为arduino-esp32创建于2018年7月4日
  作者：Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // 设置连接测试LED的GPIO引脚，或者如果您的开发板有内置LED，请注释掉此行

// 将这些设置为您所需的凭据。
const char *ssid = "XIAO_ESP32C6";
const char *password = "password";

WiFiServer server(80);


void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("正在配置接入点...");

  // 如果您希望AP开放，可以删除密码参数。
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP地址: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("服务器已启动");
}

void loop() {
  WiFiClient client = server.available();   // 监听传入的客户端

  if (client) {                             // 如果有客户端连接，
    Serial.println("新客户端。");           // 在串口打印消息
    String currentLine = "";                // 创建一个字符串来保存来自客户端的传入数据
    while (client.connected()) {            // 当客户端连接时循环
      if (client.available()) {             // 如果有来自客户端的字节可读，
        char c = client.read();             // 读取一个字节，然后
        Serial.write(c);                    // 在串口监视器中打印出来
        if (c == '\n') {                    // 如果字节是换行符

          // 如果当前行为空，则您收到了连续两个换行符。
          // 这是客户端HTTP请求的结束，因此发送响应：
          if (currentLine.length() == 0) {
            // HTTP头始终以响应代码开头（例如 HTTP/1.1 200 OK）
            // 和内容类型，以便客户端知道即将到来的内容，然后是空行：
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // HTTP响应的内容跟在头部之后：
            client.print("点击<a href=\"/H\">这里</a>打开LED。<br>");
            client.print("点击<a href=\"/L\">这里</a>关闭LED。<br>");

            // HTTP响应以另一个空行结束：
            client.println();
            // 跳出while循环：
            break;
          } else {    // 如果您收到换行符，则清除currentLine：
            currentLine = "";
          }
        } else if (c != '\r') {  // 如果您收到除回车符之外的任何其他字符，
          currentLine += c;      // 将其添加到currentLine的末尾
        }

        // 检查客户端请求是否为 "GET /H" 或 "GET /L"：
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, LOW);                 // GET /H 打开LED
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, HIGH);                // GET /L 关闭LED
        }
      }
    }
    // 关闭连接：
    client.stop();
    Serial.println("客户端已断开连接。");
  }
}
```

上传并运行程序后，XIAO ESP32C6 将创建一个名为"XIAO_ESP32C6"的热点。您可以使用计算机或手机连接到此网络，密码为"password"。然后，在浏览器中打开"192.168.4.1"来访问控制LED开关的网页。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### 程序注释

在`setup()`中有一个部分使用`softAP()`方法将ESP32设置为接入点：

```cpp
WiFi.softAP(ssid, password);
```

接下来，我们需要使用 softAPIP() 方法获取接入点的 IP 地址，并在串口监视器中打印它。

```cpp
IPAddress myIP = WiFi.softAPIP();
Serial.print("AP IP address: ");
Serial.println(myIP);
server.begin();
```

这些是您需要在Web服务器代码中包含的代码片段，用于将XIAO ESP32C6设置为接入点。

## WiFi & MQTT 使用

XIAO ESP32C6是一个强大的主板，支持MQTT协议，使其成为需要设备间可靠高效通信的物联网项目的绝佳选择。

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

// Replace with your network credentials
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// MQTT broker IP address
const char* mqtt_server = "test.mosquitto.org";

// Initialize the WiFi and MQTT client objects
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // Connect to WiFi network
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");

  // Set the MQTT broker server IP address and port
  client.setServer(mqtt_server, 1883);

  // Connect to MQTT broker
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
    } else {
      Serial.print("Failed to connect to MQTT broker, rc=");
      Serial.print(client.state());
      Serial.println(" retrying in 5 seconds");
      delay(5000);
    }
  }

  // Subscribe to MQTT topic
  client.subscribe("test/topic");
}

void loop() {
  // Check if the MQTT client is connected
  if (!client.connected()) {
    // Reconnect to MQTT broker
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
      // Subscribe to MQTT topic after reconnection
      client.subscribe("test/topic");
    }
  }

  // Handle MQTT messages
  client.loop();

  // Publish a message to the MQTT broker
  client.publish("test/topic", "Hello from XIAO ESP32C6");
  delay(5000);
}
```

在这个示例程序中，XIAO ESP32C6 通过 WiFi 连接到网络并连接到指定的 MQTT 代理，订阅主题 **test/topic**，并每 5 秒向该主题发布一条消息。

当 XIAO ESP32C6 从 MQTT 代理接收到消息时，可以在 `client.onMessage` 回调函数中进行处理。您需要将示例程序中的变量 `ssid`、`password`、`mqtt_server` 等替换为您自己的网络和 MQTT 服务器信息。

:::tip
示例程序中提供的 MQTT 服务器地址是 `test.mosquitto.org`，仅用于测试目的。请不要向此地址发送任何个人信息，因为任何人都可以使用此链接获取您的信息。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>


## WiFi 和 HTTP/HTTPS 使用

这部分可以参考我们为 XIAO ESP32C3 访问 ChatGPT 编写的示例，其中详细介绍了 WiFiClient 和 HTTPClient 的使用方法。

- [学习在 XIAO ESP32C3 上使用 WiFiClient 和 HTTPClient - XIAO ESP32C3 与 ChatGPT 实战](https://wiki.seeedstudio.com/cn/xiaoesp32c3-chatgpt)

## WiFi Mesh

根据 [Espressif 文档](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html)：

"ESP-MESH 是一个构建在 Wi-Fi 协议之上的网络协议。ESP-MESH 允许分布在大型物理区域（室内和室外）的众多设备（称为节点）在单个 WLAN（无线局域网）下互连。ESP-MESH 具有自组织和自愈能力，意味着网络可以自主构建和维护。"

在传统的 Wi-Fi 网络架构中，单个节点（接入点 - 通常是路由器）连接到所有其他节点（站点）。每个节点都可以使用接入点与其他节点通信。但是，这受限于接入点的 Wi-Fi 覆盖范围。每个站点都必须在范围内才能直接连接到接入点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/42.png" style={{width:800, height:'auto'}}/></div>

使用 ESP-MESH，节点不需要连接到中央节点。节点负责中继彼此的传输。这允许多个设备分布在大型物理区域内。节点可以自组织并动态地相互通信，以确保数据包到达其最终节点目的地。如果任何节点从网络中移除，它能够自组织以确保数据包到达其目的地。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/43.png" style={{width:800, height:'auto'}}/></div>

[painlessMesh 库](https://gitlab.com/painlessMesh/painlessMesh) 允许我们以简单的方式使用 ESP32 开发板创建网状网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

如果弹出窗口提示我们下载一些依赖包来使用这个库，我们也需要一起下载它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

如果没有显示此窗口，您需要安装以下库依赖项：

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (by bblanchon)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

要开始使用 ESP-MESH，我们首先尝试库的基本示例。此示例创建一个网状网络，其中所有开发板向所有其他开发板广播消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

在上传代码之前，您可以设置 `MESH_PREFIX`（类似于 MESH 网络的名称）和 `MESH_PASSWORD` 变量（您可以设置为任何您喜欢的值）。

然后，我们建议您为每个开发板更改以下行，以便轻松识别发送消息的节点。例如，对于节点 1，按如下方式更改消息：

```cpp
String msg = "Hi from node 1 ";
```

好的，接下来我们将使用两个 XIAO ESP32C6 作为示例。组网后的概念图大致如下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

分别将程序上传到两个 XIAO，打开串口监视器并将波特率设置为 115200。（如果有两个 XIAO，您可能需要额外的串口软件），如果程序运行顺利，您将看到以下结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### 程序注释

首先包含 painlessMesh 库。然后，添加网格详细信息。`MESH_PREFIX` 指的是网格的名称。`MESH_PASSWORD`，顾名思义是网格密码。网格中的所有节点都应该使用相同的 `MESH_PREFIX` 和 `MESH_PASSWORD`。`MESH_PORT` 指的是您希望网格服务器运行的 TCP 端口。默认值是 **5555**。

建议在网格网络代码中避免使用 `delay()`。为了维护网格，需要在后台执行一些任务。使用 `delay()` 会阻止这些任务的执行，并可能导致网格失去稳定性/崩溃。相反，建议使用 `TaskScheduler` 来运行您的任务，这也是 painlessMesh 本身使用的方法。以下行创建了一个名为 `userScheduler` 的新 `Scheduler`。

```cpp
Scheduler userScheduler; // to control your personal task
```

创建一个名为 mesh 的 `painlessMesh` 对象来处理网状网络。

```cpp
painlessMesh  mesh;
```

创建一个名为 `taskSendMessage` 的任务，负责在程序运行期间每秒调用一次 `sendMessage()` 函数。

```cpp
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

`sendMessage()` 函数向消息网络中的所有节点发送消息（广播）。

```cpp
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

消息包含"Hello from node 1"文本，后跟开发板芯片ID。

要广播消息，只需在mesh对象上使用`sendBroadcast()`方法，并将要发送的消息(msg)作为参数传递。

```cpp
mesh.sendBroadcast(msg);
```

每次发送新消息时，代码都会改变消息之间的间隔（一到五秒）。

```cpp
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

接下来，创建了几个回调函数，当网格上发生特定事件时会调用这些函数。`receivedCallback()` 函数打印消息发送者（from）和消息内容（`msg.c_str()`）。

```cpp
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("startHere: Received from %u msg=%s\n", from, msg.c_str());
}
```

`newConnectionCallback()` 函数在新节点加入网络时运行。该函数只是打印新节点的芯片 ID。您可以修改该函数来执行任何其他任务。

```cpp
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

`changedConnectionCallback()` 函数在网络上的连接发生变化时运行（当节点加入或离开网络时）。

```cpp
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

`nodeTimeAdjustedCallback()` 函数在网络调整时间时运行，以便所有节点都同步。它打印偏移量。

```cpp
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

在 `setup()` 中，初始化串口监视器。选择所需的调试消息类型：

```cpp
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // all types on

mesh.setDebugMsgTypes( ERROR | STARTUP );  // set before init() so that you can see startup messages
```

使用之前定义的详细信息初始化网格。

```cpp
mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
```

将所有回调函数分配给其对应的事件。

```cpp
mesh.onReceive(&receivedCallback);
mesh.onNewConnection(&newConnectionCallback);
mesh.onChangedConnections(&changedConnectionCallback);
mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);
```

最后，将 taskSendMessage 函数添加到 userScheduler。调度器负责在正确的时间处理和运行任务。

```cpp
userScheduler.addTask(taskSendMessage);
```

最后，启用 taskSendMessage，这样程序就开始向网格发送消息。

```cpp
taskSendMessage.enable();
```

为了保持网格运行，在 `loop()` 中添加 `mesh.update()`。

```cpp
void loop() {
  // it will run the user scheduler as well
  mesh.update();
}
```

## 引用和参考

本文引用了 **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** 关于 ESP32 的网络内容，并在 Seeed Studio XIAO ESP32C6 上进行了验证。

特别感谢 **Random Nerd Tutorials** 的作者们的辛勤工作！

以下是原文的参考链接，欢迎通过以下原文链接了解更多关于 ESP32 网络的内容。

- [ESP32 Useful Wi-Fi Library Functions (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publish and Subscribe with Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH with ESP32 and ESP8266: Getting Started (painlessMesh library)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

有关使用 ESP32 开发板的更多信息，请阅读 Random Nerd Tutorials 的官方网站。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

并参考这些文档以了解更多关于 Arduino API 的详细信息：

- [WiFi - Arduino Reference](https://www.arduino.cc/en/Reference/WiFi)
- [Wi-Fi API - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>