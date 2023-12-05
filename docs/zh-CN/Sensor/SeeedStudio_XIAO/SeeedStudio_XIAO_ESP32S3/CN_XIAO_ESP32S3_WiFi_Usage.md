---
description: WiFi usage with Seeed Studio XIAO ESP32S3.
title: Wi-Fi 使用
keywords:
- esp32s3
- xiao
- wifi usage
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_wifi_usage
last_update:
  date: 11/09/2023
  author: Chen Lei
---

#  使用 XIAO ESP32S3（Sense）的 Wi-Fi 功能

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Seeed Studio XIAO ESP32S3是一款嵌入式开发板，由于支持2.4GHz Wifi-802.11b/g/n和蓝牙低能耗（BLE）双无线通信，因此具有出色的射频性能。这种功能使XIAO ESP32S3能够为广泛的物联网（IoT）应用提供可靠和高速的无线连接。此外，该板支持U.FL天线连接，可以将通信范围扩展到100米以上，是需要远程无线连接的项目的理想选择。在本教程中，我们将探讨如何利用XIAO ESP32S3的Wi-Fi功能连接到Wi-Fi网络并执行基本的联网任务。

##入门

###天线的安装

在XIAO ESP32S3正面的左下角，有一个单独的“WiFi/BT天线连接器”。为了获得更好的WiFi/蓝牙信号，您需要取出包装内的天线并将其安装在连接器上。

天线的安装有一个小技巧，如果你直接用力按压，你会发现很难按压，你的手指会受伤！安装天线的正确方法是先将天线连接器的一侧放入连接器块中，然后在另一侧向下压一点，天线就安装好了。

拆下天线也是这样，不要用蛮力直接拉天线，一侧用力提起，天线很容易取下。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

:::笔记 
如果未安装天线，则可能无法连接到WiFi网络。
如果你有条件，我建议你使用大棒天线，这样会得到更好的体验。
:::

##WiFi库常用接口

ESP32-S3提供广泛的WiFi网络功能。通常，我们可以在ESP32的内置包中看到WiFi库的功能，并选择相应的功能来实现所需的功能。接下来，我们将列出一些常用的接口，并介绍它们的用法。

###通用WiFi功能

- `WiFiGenericClass:：getHostname（）`--是ESP32 WiFi库中的一个函数，它以字符串形式返回设备的主机名。主机名是一个唯一的名称，用于标识网络上的设备。此函数检索以前使用`WiFiGenericClass:：setHostname（）`设置的主机名。如果未设置主机名，则将返回默认主机名。

- `WiFiGenericClass:：persistent（bool persistent）`--是一种用于启用或禁用ESP32 WiFi库的持久模式的方法。启用持久模式时，Wi-Fi配置存储在非易失性存储器（NVM）中，即使在电源循环或重置后也会保留。禁用持久模式时，配置存储在RAM中，并在电源循环或重置后丢失。

  - **输入参数**

    - **persistent**：如果参数为true，则启用持久模式。如果参数为false，则禁用持久模式。

- `WiFiGenericClass:：enableLongRange（bool-enable）`--该功能用于启用或禁用WiFi模块的远程
（LR）功能。启用后，LR功能允许模块连接到比平时更远但数据速率较低的WiFi网络。

  - **输入参数**

    - **enable**：该参数应设置为true以启用该功能，设置为false以禁用该功能。

- `WiFiGenericClass:：mode（wifi_mode_t m）`--该功能用于设置设备的wifi模式。

  - **输入参数**

    - **m**：m参数指定要设置的模式，可以是wifi_mode_t枚举中定义的以下常量之一：

        - **WIFI_MODE_NULL**：禁用WIFI站点和接入点模式。

        - **WIFI_MODE_STA**：启用WIFI站点模式以连接到现有WIFI网络。

        - **WIFI_MODE_AP**：启用接入点模式以创建新的WIFI网络。

        - **WIFI_MODE_APSTA**：启用WIFI站点和接入点模式。

- `WiFiGenericClass:：setSleep（wifi_ps_type_tsleepType）`--该功能设置wifi模块的节能模式。

  - **输入参数**

    - **sleepType**：sleepType参数是一个枚举类型，用于指定要使用的节能模式的类型。有三种可能的睡眠类型：

    - **WIFI_PS_NONE**：这是默认的睡眠模式，在该模式下，WIFI模块不会进入省电模式。

    - **WIFI_PS_MIN_MODEM**：在此模式下，WIFI模块关闭其调制解调器，同时保持与接入点（AP）的连接。

    - **WIFI_PS_MAX_MODEM**：在此模式下，WIFI模块会关闭调制解调器和工作站，从而导致与AP断开连接。

###STA功能

- `WiFiSTAClass:：status（）`--返回连接状态。

  - **输出**：wl_status_t中定义的值之一。

    - **WL_NO_SHIELD**：此状态代码表示Wi-Fi模块不存在。

    - **WL_IDLE_STATUS**：此状态代码表示Wi-Fi模块未执行任何操作。

  - **WL_NO_SSID_AVAIL**：此状态代码表示扫描过程中未找到Wi-Fi网络。

  - **WL_SCAN_COMPLETED**：此状态代码表示Wi-Fi扫描已成功完成。

  - **WL_CONNECTED**：此状态代码表示ESP32已成功连接到Wi-Fi网络。

  - **WL_CONNECT_FAILED**：此状态代码表示连接到Wi-Fi网络失败。

  - **WL_CONNECTION_LOST**：此状态代码表示与Wi-Fi网络的连接已断开。

  - **WL_DISCONNECTED**：此状态代码表示ESP32以前连接到Wi-Fi网络，但当前未连接到任何网络。


- `WiFiSTAClass:：begin（const char*wpa2_sid，wpa2_auth_method_t method，const char*wpa2_identity，const char*wpa2_username，const char*wpa2_password，const查尔*ca_pem，const char*client_crt，const char*client_key，int32_t channel，const uint8_t*bssid，bool connect）`--使用wpa2 Enterprise AP启动Wifi连接。

  - **输入参数**（可选）

    - **ssid**：指向ssid字符串的指针。

    - **方法**：WPA2的身份验证方法（WPA2_AUTH_TLS、WPA2_AUT_PEAP、WPA2_AUTH_TTLS）

    - **wpa2_identity**：指向实体的指针

    - **wpa2_username**：指向用户名的指针

    - **wpa2_password**：指向密码的指针。

    - **ca_pem**：指向包含带有ca证书的.pem文件内容的字符串的指针

    - **client_crt**：指向具有客户端证书的.crt文件内容的字符串的指针

    - **client_key**：指向一个字符串的指针，该字符串包含带有客户端密钥的.key文件的内容

    - **通道**：可选。AP通道

    - **bssid**：可选。AP的BSSID/MAC

    - **连接**：可选。呼叫连接

- `WiFiSTAClass:：reconnect（）`--将强制断开连接，然后开始重新连接到AP。

    - **输出**：真/假。

- `WiFiSTAClass:：disconnect（bool-wifioff，bool-eramap）`--断开与网络的连接。

  - **输入参数**

    - **wifioff**：wifioff“true”可关闭Wi-Fi收音机。

    - **擦除**：擦除“true”，从NVS内存中擦除AP配置。

  - **输出**：真/假。

- `WiFiSTAClass:：config（ip地址local_ip、ip地址网关、ip地址子网、ip地址dns1和ip地址dns2）`--更改禁用dhcp客户端的ip配置设置。

- **输入参数**

    - **local_ip**：静态ip配置。

    - **网关**：静态网关配置。

    - **子网**：静态子网掩码。

    - **dns1**：静态DNS服务器1。

    - **dns2**：静态DNS服务器2。

- `WiFiSTAClass:：setAutoConnect（bool autoConnect）`--已弃用。将ESP32电台设置为在通电时自动或不自动连接到AP（已记录）。默认情况下启用自动连接。

  - **输入参数**

      - **autoConnect**：autoConnect布尔。

  - **输出**：False。

- `WiFiSTAClass:：waitForConnectResult（unsigned long timeoutLength）`--等待WiFi连接达到结果。

  - **输入参数**

        - **timeoutLength**：该参数指定等待建立连接的最长时间，以毫秒为单位。

  - **输出**：wl_status_t中定义的值之一。

- `WiFiSTAClass:：localIP（）`--获取站接口IP地址。

  - **输出**：IP地址站IP。

- `WiFiSTAClass:：macAddress（uint8_t*mac）`--获取站接口mac地址。

  - **输入参数**

      - **mac**（可选）：指向uint8_t数组的指针，长度为WLMAC_ADDR_length。

  - **输出**：指向uint8_t*的指针。

- `WiFiSTAClass:：SSID（）`--返回与网络关联的当前SSID。

  - **输出**：SSID。

- `WiFiSTAClass:：RSSI（void）`--返回当前网络RSSI。

  - **输出**：RSSI。

###AP功能

- `WiFiAPClass:：softAP（const char*ssid，const char*passphrase，int channel，int ssid_hidden，int max_connection，bool ftm_responser）`--这是ESP32-S3的WiFi库中的一个函数。它用于设置SoftAP（软件接入点），允许其他设备连接到ESP32-S3并访问其资源。

- **输入参数**

    - **ssid**：指向ssid的指针（最大63个字符）。

    - **密码短语**：（对于WPA2最小8个字符，对于开放使用NULL）。

    - **信道**：WiFi信道编号，1-13。

    - **ssid_hidden**：网络伪装（0=广播ssid，1=隐藏ssid）。

    - **max_connection**：同时连接的最大客户端数，1-4。

  - **输出**：真/假。

- `WiFiAPClass:：softAPgetStationNum（）`--获取连接到softAP接口的工作站/客户端的计数。

    - **输出**：电台计数。

- `WiFiAPClass:：softAPConfig（ip地址local_ip，ip地址网关，ip地址子网，ip地址dhcp_lese_start）`--用于配置SoftAP的函数。

- **输入参数**

    - **local_ip**：接入点ip。

    - **网关**：网关IP。

    - **子网**：子网掩码。

- **输出**：真/假。

- `WiFiAPClass:：softAPIP（）`--获取softAP接口的IP地址。

  - **输出**：IP地址softAP IP。

- `WiFiAPClass:：softAPmacAddress（uint8_t*mac）`--获取softAP接口mac地址。

  - **输入参数**

    - **mac**（可选）：指向uint8_t数组的指针，长度为WLMAC_ADDR_length。

  - **输出**：指向uint8_t*或字符串mac的指针。

###WiFi扫描功能

- `WiFiScanClass:：scanNetworks（bool async，bool show_hidden，bool passive，uint32_t max_ms_per_chan，uint8_t channel，const char*ssid，const uint8_t*bssid）`--开始扫描可用的WiFi网络。

  - **输入参数**

    - **async**：该参数是一个布尔值，用于确定是否应异步执行扫描。如果设置为true，函数将立即返回，扫描结果

```c
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
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

上传并运行程序，你应该会看到串行监视器打印出附近的WiFi网络，可以通过XIAO ESP32S3进行搜索。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

###程序注释

使用XIAO ESP32S3 WiFi功能需要做的第一件事是在代码中包含**WiFi.h**库，如下所示：

```c
#include <WiFi.h>
```

XIAO ESP32S3可以充当WiFi站、接入点或两者兼而有之。要设置WiFi模式，请使用“WiFi.mode（）”并将所需模式设置为参数。

```c
WiFi.mode(WIFI_STA);
```

当ESP32设置为Wi-Fi站时，它可以连接到其他网络（如路由器）。

`WiFi.scanNetworks（）`返回找到的网络数。扫描后，您可以访问有关每个网络的参数`WiFi。SSID（）`打印特定网络的SSID。
`WiFi。RSSI（）`返回该网络的RSSI。RSSI代表接收信号强度指示符。它是RF客户端设备从接入点或路由器接收的功率电平的估计度量。
最后，`WiFi.encryptionType（）`返回网络加密类型。这个具体的例子在开放网络的情况下给出了一个*。但是，该函数可以返回以下选项之一（而不仅仅是开放网络）：
- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

##连接到WiFi网络

要将ESP32连接到特定的Wi-Fi网络，您必须知道其SSID和密码。此外，该网络必须在ESP32 WiFi范围内（要进行检查，您可以使用前面的示例扫描WiFi网络）。

以下是使用XIAO ESP32S3连接到指定网络的示例。其中函数“initWiFi（）”在程序中扮演连接到网络的角色。
```c
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
  
}
```

上传并运行程序以打开串行监视器。当连接到网络时，串行监视器将打印一串点，直到连接成功，然后打印XIAO的IP地址。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

###程序注释

让我们快速了解一下这个函数是如何工作的。
首先，设置WiFi模式。如果XIAO ESP32S3将连接到另一个网络（接入点/热点），则它必须处于站点模式。

```c
WiFi.mode(WIFI_STA);
```

然后，使用 `WiFi.begin()` 连接到一个网络。您必须将网络的SSID和密码作为参数传递给该函数：

```c
WiFi.begin(ssid, password);
```

连接到WiFi网络可能需要一段时间，因此我们通常会添加一个while循环，通过使用“WiFi.status（）”来检查连接是否已经建立。当连接成功建立时，它会返回“WL_CONNECTED”。
如果你想获得WiFi连接强度，你可以在WiFi连接后简单地调用“WiFi.RSI（）”。

##softAP使用

如果您将XIAO ESP32S3设置为接入点（热点），您可以使用任何具有WiFi功能的设备连接到ESP32，而无需连接到路由器。
简单地说，当你将XIAO ESP32S3设置为接入点时，你就创建了自己的WiFi网络，附近的WiFi设备（站）可以连接到它（比如你的智能手机或电脑）。

在Arduino IDE中，转到**File > Examples > WiFi > WiFiAccessPoint**v。本示例将向您展示如何使用XIAO ESP32S3创建热点，并通过连接到热点的简单网页控制灯的开关。

：：：注释
1.我们通过注释LED_BUILTIN对示例程序进行了一些小的更改，因为XIAO ESP32S3有自己的用户指示器，我们不需要外部LED。
2.只有当XIAO ESP32S3上的用户LED引脚设置为高电平时，LED才会熄灭，只有当引脚设置为低电平时，才会点亮。
3.您还需要将程序中的热点名称和密码修改为您想要的名称和密码。
:::

```c
/*
  WiFiAccessPoint.ino creates a WiFi access point and provides a web server on it.

  Steps:
  1. Connect to the access point "yourAp"
  2. Point your web browser to http://192.168.4.1/H to turn the LED on or http://192.168.4.1/L to turn it off
     OR
     Run raw TCP "GET /H" and "GET /L" on PuTTY terminal with 192.168.4.1 as IP address and 80 as port

  Created for arduino-esp32 on 04 July, 2018
  by Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // Set the GPIO pin where you connected your test LED or comment this line out if your dev board has a built-in LED

// Set these to your desired credentials.
const char *ssid = "XIAO_ESP32S3";
const char *password = "password";

WiFiServer server(80);


void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Configuring access point...");

  // You can remove the password parameter if you want the AP to be open.
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("Server started");
}

void loop() {
  WiFiClient client = server.available();   // listen for incoming clients

  if (client) {                             // if you get a client,
    Serial.println("New Client.");           // print a message out the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        if (c == '\n') {                    // if the byte is a newline character

          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // the content of the HTTP response follows the header:
            client.print("Click <a href=\"/H\">here</a> to turn ON the LED.<br>");
            client.print("Click <a href=\"/L\">here</a> to turn OFF the LED.<br>");

            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {    // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }

        // Check to see if the client request was "GET /H" or "GET /L":
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, LOW);                 // GET /H turns the LED on
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, HIGH);                // GET /L turns the LED off
        }
      }
    }
    // close the connection:
    client.stop();
    Serial.println("Client Disconnected.");
  }
}
```

上传并运行程序后，XIAOESP32S3将创建一个名为“XIAO_ESP32S3”的热点。您可以使用计算机或手机连接到此网络，密码为“password”。然后，在浏览器中打开“192.168.4.1”以访问控制LED开关的网页。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### 程序注释

“setup（）”中有一节使用“softAP（）”方法将ESP32设置为接入点：

```c
WiFi.softAP(ssid, password);
```
接下来，我们需要使用softAPIP（）方法获取接入点IP地址，并将其打印在串行监视器中。

```c
IPAddress myIP = WiFi.softAPIP();
Serial.print("AP IP address: ");
Serial.println(myIP);
server.begin();
```

这些是您需要包含在web服务器草图中的代码片段，以便将XIAO ESP32S3设置为访问点。

## WiFi和MQTT使用

XIAO ESP32S3是一款功能强大的主板，支持MQTT协议，是需要设备间可靠高效通信的物联网项目的绝佳选择。

```c
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
  client.publish("test/topic", "Hello from XIAO ESP32S3");
  delay(5000);
}
```

在这个示例程序中，XIAO ESP32S3通过WiFi连接到网络，并连接到指定的MQTT代理，订阅主题**测试/主题**，并每5秒向该主题发布一条消息。

当XIAO ESP32S3从MQTT代理接收到消息时，可以在“client.onMessage”回调函数中对其进行处理。您需要将示例程序中的变量“ssid”、“password”、“mqtt_server”等替换为您自己的网络和mqtt服务器信息。

:::提示
示例程序中提供的MQTT服务器地址是“test.mosquitto.org”，仅用于测试目的。请不要将任何个人信息发送到此地址，因为任何人都可以使用此链接获取您的信息。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>


## WiFi和HTTP/HTTPS使用

这部分可以参考我们为XIAO ESP32C3编写的访问ChatGPT的示例，该示例详细介绍了WiFiClient和HTTPClient的使用。

- [学习在XIAO ESP32C3上使用WiFiClient和HTTPClient-XIAO ESP32_C3和ChatGPT在操作中](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt)

## 无线网状网

根据【Espressif文件】(https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html)：
“ESP-MESH是建立在Wi-Fi协议之上的网络协议。ESP-MESH允许分布在大物理区域（室内和室外）的许多设备（称为节点）在单个WLAN（无线局域网）下互连。ESP-MES是自组织和自我修复的，这意味着网络可以自主构建和维护。”
在传统的Wi-Fi网络架构中，单个节点（接入点——通常是路由器）连接到所有其他节点（站）。每个节点都可以使用接入点进行通信。然而，这仅限于接入点的wi-fi覆盖范围。每个站点都必须在直接连接到接入点的范围内。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/42.png" style={{width:800, height:'auto'}}/></div>

使用ESP-MESH，节点不需要连接到中心节点。节点负责中继彼此的传输。这允许多个设备分布在一个大的物理区域上。节点可以自组织并动态地相互通信，以确保数据包到达其最终节点目的地。如果从网络中删除了任何节点，它就能够自我组织，以确保数据包到达目的地。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/43.png" style={{width:800, height:'auto'}}/></div>

〔painless网格库〕(https://gitlab.com/painlessMesh/painlessMesh)允许我们以一种简单的方式创建一个带有ESP32板的网状网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

如果弹出一个窗口，提示我们下载一些依赖软件包以使用此库，我们还需要一起下载它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

If this window doesn’t show up, you’ll need to install the following library dependencies:

-[ArduinoJson]https://github.com/bblanchon/ArduinoJson（作者：bblanchon）
-[TaskScheduler]https://github.com/arkhipenko/TaskScheduler)
-[异步TCP]https://github.com/me-no-dev/AsyncTCP)（ESP32）
为了开始使用ESP-MESH，我们将首先对库的基本示例进行实验。此示例创建一个网状网络，其中所有板向所有其他板广播消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

在上传代码之前，您可以设置“MESH_PREFIX”（类似于MESH网络的名称）和“MESH_PASSWORD”变量（您可以将其设置为任何您喜欢的值）。

然后，我们建议您更改每个板的以下行，以便轻松识别发送消息的节点。例如，对于节点1，将消息更改如下：

```c
String msg = "Hi from node 1 ";
```

好的，接下来我们将以两个XIAO ESP32S3为例。网络连接后的概念图大致如下所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

U将程序分别加载到两个XIAO，打开串口监视器并将波特率设置为115200。（如果有两个XIAO，您可能需要额外的串口软件），如果程序运行顺利，您将看到以下结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### 程序注释

首先包括painlessMesh库。然后，添加网格细节。“MESH_PREFIX”是指网格的名称。顾名思义，“MESH_PASSWORD”就是网格密码。网格中的所有节点都应使用相同的“mesh_PREFIX”和“mesh_PASSWORD”。“MESH_PORT”是指您希望网格服务器运行的TCP端口。默认值为**5555**。
建议避免在网状网络代码中使用“delay（）”。为了维护网格，需要在后台执行一些任务。使用“delay（）”将阻止这些任务的发生，并可能导致网格失去稳定性/崩溃。相反，建议使用“TaskScheduler”来运行painless Mesh中使用的任务。下一行创建一个名为“userScheduler”的新“Scheduler”。

```c
Scheduler userScheduler; // to control your personal task
```

创建一个名为mesh的“painless mesh”对象来处理网格网络。
```c
painlessMesh  mesh;
```

创建一个名为“taskSendMessage”的任务，负责在程序运行期间每秒调用“sendMessage（）”函数。
```c
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

“sendMessage（）”函数向消息网络中的所有节点发送消息（广播）。
```c
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

该消息包含“Hello from node 1”文本，后跟板芯片ID。
要广播消息，只需在网格对象上使用“sendBroadcast（）”方法，并将要发送的消息（msg）作为参数传递。

```c
mesh.sendBroadcast(msg);
```

每次发送新消息时，代码都会更改消息之间的间隔（一到五秒）。

```c
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

接下来，将创建几个回调函数，这些函数将在网格上发生特定事件时调用。“receivedCallback（）”函数打印消息发送者（来自）和消息内容（“msg.c_str（）”）。
```c
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("startHere: Received from %u msg=%s\n", from, msg.c_str());
}
```

每当新节点加入网络时，就会运行“newConnectionCallback（）”函数。此函数只是打印新节点的芯片ID。您可以修改函数以执行任何其他任务。

```c
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

每当网络上的连接发生变化时（当节点加入或离开网络时），就会运行“changedConnectionCallback（）”函数。
```c
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

当网络调整时间时，会运行“nodeTimeAdjustedCallback（）”函数，以便同步所有节点。它打印偏移量。
```c
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

在“setup（）”中，初始化串行监视器。选择所需的调试消息类型：

```c
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // all types on

mesh.setDebugMsgTypes( ERROR | STARTUP );  // set before init() so that you can see startup messages
```
使用前面定义的细节初始化网格。
```c
mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
```

将所有回调函数分配给它们对应的事件。

```c
mesh.onReceive(&receivedCallback);
mesh.onNewConnection(&newConnectionCallback);
mesh.onChangedConnections(&changedConnectionCallback);
mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);
```

最后，将taskSendMessage函数添加到userScheduler中。调度程序负责在正确的时间处理和运行任务。
```c
userScheduler.addTask(taskSendMessage);
```

最后，启用taskSendMessage，以便程序开始向网格发送消息。

```c
taskSendMessage.enable();
```

若要保持网格运行，请将“mesh.update（）”添加到“loop（）”中。

```c
void loop() {
  // it will run the user scheduler as well
  mesh.update();
}
```

##故障排除

###Q1：当我使用softAP示例时，为什么我不能连接到XIAO ESP32S3热点？

这可能是由XIAO ESP32S3的天线强度不足或XIAO ESP32的过热引起的。在测试之后，当使用该示例时，XIAO ESP32S3的芯片可以达到50摄氏度的最高温度。如果长时间运行，这可能会导致网络异常。此时，您可以冷静下来，然后重试。
如果排除了过热的原因，则天线信号可能是问题的原因。附带天线的强度通常无法支持高强度的网络工作，因此如果需要，可以购买合适的条形天线使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/40.jpg" style={{width:600, height:'auto'}}/></div>

##引文和参考文献

这篇文章借鉴了网络内容**[Rrandom Nerd教程](https://randomnerdtutorials.com/)**’，并在Seeed Studio XIAO ESP32S3上进行了验证。
特别感谢**Random Nerd教程**的作者们的辛勤工作！
以下是原始文章的参考链接，欢迎您通过以下原始文章链接了解更多关于ESP32网络的信息。
-[ESP32有用的Wi-Fi库功能（Arduino IDE）](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
-[ESP32 MQTT–使用Arduino IDE发布和订阅](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
-[ESP-MESH与ESP32和ESP8266：入门（painlessMesh库）](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)
有关使用ESP32开发板的更多信息，请阅读Random Nerd教程的官方网站。
-[随机Nerd教程](https://randomnerdtutorials.com/)


##技术支持和产品讨论

。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>






