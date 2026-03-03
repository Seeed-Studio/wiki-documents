---
description: 高级 WiFi 使用
title: 高级 WiFi 使用
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Advanced-WiFi
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# 高级 Wi-Fi 使用

本篇 Wiki 介绍了一些 Wi-Fi 的高级库使用方法，例如 **HTTPClient、DNSServer 和 WebServer** 库。通过实现这些库，您可以使用简单的 API 开发 IoT 项目。

请确保您已按照 [**网络概述**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview/) 更新了 **最新固件和依赖库**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" /></div>

:::note
请确保 **RTL8720 固件版本 >= v2.0.2**
:::

## HTTPClient 使用

HTTPClient 用于轻松地向 Web 服务器发起 **HTTP GET、POST 和 PUT** 请求。以下是一些示例，帮助您快速入门！

### HTTP GET 示例

这是一个使用 HTTPClient 进行简单 HTTP 连接并将响应打印到串口监视器的示例。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTP.png" /></div>

- 将 `yourNetwork` 和 `yourPassword` 替换为您的 WiFi **ssid** 和 **密码**。

- 将代码上传到 Wio Terminal。

```cpp
#include <rpcWiFi.h>
#include <HTTPClient.h>

const char* ssid = "yourNetwork";
const char* password =  "yourPassword";

void setup() {

  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) { // 检查连接状态
    delay(500);
    Serial.println("正在连接...");
  }
  Serial.print("已连接到 WiFi 网络，IP 地址为: ");
  Serial.println(WiFi.localIP());
}

void loop() {
    // 等待 WiFi 连接
    if((WiFi.status() == WL_CONNECTED)) {
        HTTPClient http;
        Serial.print("[HTTP] 开始...\n");
        // 配置目标服务器和 URL
        http.begin("http://www.example.com/index.html"); // HTTP
        Serial.print("[HTTP] GET...\n");
        // 开始连接并发送 HTTP 头
        int httpCode = http.GET();
        // httpCode 在出错时为负值
        if(httpCode > 0) {
            // HTTP 头已发送，服务器响应头已处理
            Serial.printf("[HTTP] GET... 状态码: %d\n", httpCode);
            // 服务器上找到文件
            if(httpCode == HTTP_CODE_OK) {
                String payload = http.getString();
                Serial.println(payload);
            }
        } else {
            Serial.printf("[HTTP] GET... 失败，错误: %s\n", http.errorToString(httpCode).c_str());
        }
        http.end();
    }
    delay(5000);
}
```

### HTTPs GET 示例

这是使用 HTTPClient 库进行 **HTTPs 连接** 的示例。您可以参考此示例向您想访问的网站发送 HTTPs GET 请求！

:::note
您可以参考 [**此处**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Wi-Fi/#obtaining-websites-root-ca) 获取网站的根 CA。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTPs.png" /></div>

- 将 `yourNetwork` 和 `yourPassword` 替换为您的 WiFi **ssid** 和 **密码**。

- 将代码上传到 Wio Terminal。

```cpp
#include <rpcWiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>

const char* ssid = "yourNetwork";
const char* password =  "yourPassword";

const char* test_root_ca = \
                            "-----BEGIN CERTIFICATE-----\n"
                            "MIIESjCCAzKgAwIBAgINAeO0mqGNiqmBJWlQuDANBgkqhkiG9w0BAQsFADBMMSAw\n"
                            "HgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMjETMBEGA1UEChMKR2xvYmFs\n"
                            "U2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0xNzA2MTUwMDAwNDJaFw0yMTEy\n"
                            "MTUwMDAwNDJaMEIxCzAJBgNVBAYTAlVTMR4wHAYDVQQKExVHb29nbGUgVHJ1c3Qg\n"
                            "U2VydmljZXMxEzARBgNVBAMTCkdUUyBDQSAxTzEwggEiMA0GCSqGSIb3DQEBAQUA\n"
                            "A4IBDwAwggEKAoIBAQDQGM9F1IvN05zkQO9+tN1pIRvJzzyOTHW5DzEZhD2ePCnv\n"
                            "UA0Qk28FgICfKqC9EksC4T2fWBYk/jCfC3R3VZMdS/dN4ZKCEPZRrAzDsiKUDzRr\n"
                            "mBBJ5wudgzndIMYcLe/RGGFl5yODIKgjEv/SJH/UL+dEaltN11BmsK+eQmMF++Ac\n"
                            "xGNhr59qM/9il71I2dN8FGfcddwuaej4bXhp0LcQBbjxMcI7JP0aM3T4I+DsaxmK\n"
                            "FsbjzaTNC9uzpFlgOIg7rR25xoynUxv8vNmkq7zdPGHXkxWY7oG9j+JkRyBABk7X\n"
                            "rJfoucBZEqFJJSPk7XA0LKW0Y3z5oz2D0c1tJKwHAgMBAAGjggEzMIIBLzAOBgNV\n"
                            "HQ8BAf8EBAMCAYYwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMBIGA1Ud\n"
                            "EwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFJjR+G4Q68+b7GCfGJAboOt9Cf0rMB8G\n"
                            "A1UdIwQYMBaAFJviB1dnHB7AagbeWbSaLd/cGYYuMDUGCCsGAQUFBwEBBCkwJzAl\n"
                            "BggrBgEFBQcwAYYZaHR0cDovL29jc3AucGtpLmdvb2cvZ3NyMjAyBgNVHR8EKzAp\n"
                            "MCegJaAjhiFodHRwOi8vY3JsLnBraS5nb29nL2dzcjIvZ3NyMi5jcmwwPwYDVR0g\n"
                            "BDgwNjA0BgZngQwBAgIwKjAoBggrBgEFBQcCARYcaHR0cHM6Ly9wa2kuZ29vZy9y\n"
                            "ZXBvc2l0b3J5LzANBgkqhkiG9w0BAQsFAAOCAQEAGoA+Nnn78y6pRjd9XlQWNa7H\n"
                            "TgiZ/r3RNGkmUmYHPQq6Scti9PEajvwRT2iWTHQr02fesqOqBY2ETUwgZQ+lltoN\n"
                            "FvhsO9tvBCOIazpswWC9aJ9xju4tWDQH8NVU6YZZ/XteDSGU9YzJqPjY8q3MDxrz\n"
                            "mqepBCf5o8mw/wJ4a2G6xzUr6Fb6T8McDO22PLRL6u3M4Tzs3A2M1j6bykJYi8wW\n"
                            "IRdAvKLWZu/axBVbzYmqmwkm5zLSDW5nIAJbELCQCZwMH56t2Dvqofxs6BBcCFIZ\n"
                            "USpxu6x6td0V7SvJCCosirSmIatj/9dSSVDQibet8q/7UK4v4ZUN80atnZz1yg==\n"
                            "-----END CERTIFICATE-----\n";

WiFiClientSecure client;

void setup() {

  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) { // 检查连接状态
    delay(500);
    Serial.println("正在连接...");
  }
  Serial.print("已连接到 WiFi 网络，IP 地址为: ");
  Serial.println(WiFi.localIP());
  client.setCACert(test_root_ca);
}

void loop() {
  if(&client) {
    {
      // 为 HTTPClient https 添加作用域块，确保在 WiFiClientSecure *client 之前销毁
      HTTPClient https;
      Serial.print("[HTTPS] 开始...\n");
      if (https.begin(client, "https://www.google.com/index.html")) {  // HTTPS
        Serial.print("[HTTPS] GET...\n");
        // 开始连接并发送 HTTP 头
        int httpCode = https.GET();
        // httpCode 在出错时为负值
        if (httpCode > 0) {
          // HTTP 头已发送，服务器响应头已处理
          Serial.printf("[HTTPS] GET... 状态码: %d\n", httpCode);
          // 服务器上找到文件
          if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
            String payload = https.getString();
            Serial.println(payload);
          }
        } else {
          Serial.printf("[HTTPS] GET... 失败，错误: %s\n", https.errorToString(httpCode).c_str());
        }
        https.end();
      } else {
        Serial.printf("[HTTPS] 无法连接\n");
      }
      // 结束额外作用域块
    }
  } else {
    Serial.println("无法创建客户端");
  }
  Serial.println();
  Serial.println("等待 10 秒后进行下一轮...");
  delay(10000);
}
```

### HTTP POST 示例

这是一个使用 Wio Terminal 的 HTTPClient 向 Web 服务器发送 **HTTP POST 请求** 的示例。在本示例中，我们使用 Python 在 PC 上设置一个简单的 Web 服务器，用于接收和响应 HTTP 请求。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTP-POST.png" /></div>

#### Python 服务器代码

首先，我们需要使用 `pip` 安装 Python 中所需的 **bottle 库**。在终端中运行以下命令以安装 bottle：

```sh
pip install bottle
```

导入 bottle 后，复制以下代码并保存为 **`simple-server.py`**。你也可以更改端口为其他你喜欢的值，但请确保与 Arduino 端的设置一致。

```py
from bottle import run, request, post

@post('/')
def index():
    data = request.body.read()
    print(data)

run(host='0.0.0.0', port=1880, debug=True)
```

#### Arduino 代码

- 将 `yourNetwork` 和 `yourPassword` 替换为你的 WiFi **SSID** 和 **密码**。

- 将代码上传到 Wio Terminal。

- 检查终端，你可以看到来自 Wio Terminal 的 HTTP 请求消息。

```cpp
#include <rpcWiFi.h>
#include <HTTPClient.h>

const char* ssid = "yourNetwork";
const char* password =  "yourPassword";

// 将以下 IP 替换为运行服务器的计算机的 IP，确保端口也匹配
const char* yourLocalIp =  "http://10.0.0.233:1880/";

void setup() {

  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) { // 检查连接状态
    delay(500);
    Serial.println("Connecting..");
  }
  Serial.print("Connected to the WiFi network with IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {

 if(WiFi.status()== WL_CONNECTED){   // 检查 WiFi 连接状态

   HTTPClient http;

   http.begin(yourLocalIp);  // 指定 HTTP 请求的目标地址
   http.addHeader("Content-Type", "text/plain");             // 指定内容类型头

   int httpResponseCode = http.POST("Hello Bottle, from Wio Terminal");   // 发送实际的 POST 请求

   if(httpResponseCode>0){
    Serial.print("HTTP Response Code: ");
    Serial.println(httpResponseCode);   // 打印返回码
   }else{
    Serial.print("Error on sending request: ");
    Serial.println(httpResponseCode);
   }

   http.end();  // 释放资源

 }else{
    Serial.println("Error in WiFi connection");
 }
  delay(5000);  // 每 5 秒发送一次请求
}
```

## Web 服务器使用

借助 **WebServer 库**，你可以在 Wio Terminal 上设置运行的 Web 服务器。通过使用连接到同一网络的计算机上的浏览器访问服务器，你可以 **从网页控制硬件、读取传感器值** 等等！

### 简单的 HelloServer 示例

此示例在连接的网络上使用 Wio Terminal 设置了一个简单的 Web 服务器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/helloServer.png" /></div>

- 将 `yourNetwork` 和 `yourPassword` 替换为你的 WiFi **SSID** 和 **密码**。

- 将代码上传到 Wio Terminal。

- 使用浏览器通过同一网络访问 Wio Terminal 的 IP 地址以访问 Web 服务器。

```cpp
#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>

const char *ssid = "yourNetwork";
const char *password = "yourPassword";

WebServer server(80);

const int led = 13;

void handleRoot() {
  digitalWrite(led, 1);
  server.send(200, "text/plain", "hello from Wio Terminal!");
  digitalWrite(led, 0);
}

void handleNotFound() {
  digitalWrite(led, 1);
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
  digitalWrite(led, 0);
}

void setup(void) {
  pinMode(led, OUTPUT);
  digitalWrite(led, 0);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  // 等待连接
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);

  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });

  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");
}

void loop(void) {
  server.handleClient();
}
```

### HTTP 认证 Web 服务器示例

此示例设置了一个需要认证过程的 Web 服务器，在某些需要安全性的情况下非常有用。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/auth.gif" /></div>

- 将 `yourNetwork` 和 `yourPassword` 替换为你的 WiFi **SSID** 和 **密码**。

- 将代码上传到 Wio Terminal。

- 使用浏览器通过同一网络访问 Wio Terminal 的 IP 地址，并输入预设的用户名和密码。

```cpp
#include <rpcWiFi.h>
#include <WebServer.h>

const char *ssid = "yourNetwork";
const char *password = "yourPassword";

WebServer server(80);

const char* www_username = "admin";
const char* www_password = "password";

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  if (WiFi.waitForConnectResult() != WL_CONNECTED) {
    Serial.println("WiFi Connect Failed! Rebooting...");
    delay(1000);
    NVIC_SystemReset(); // 重置 Wio Terminal
  }

  server.on("/", []() {
    if (!server.authenticate(www_username, www_password)) {
      return server.requestAuthentication();
    }
    server.send(200, "text/plain", "Login OK");
  });
  server.begin();

  Serial.print("Open http://");
  Serial.print(WiFi.localIP());
  Serial.println("/ in your browser to see it working");
}

void loop() {
  server.handleClient();
}
```

## DNSServer 使用

我们已经讨论了 **WebServer**，即通过 **IP 地址**访问它。但如果你想通过输入域名（例如 `www.google.com`）来访问它，那么你需要使用 **DNSServer**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/DNS.gif" /></div>

- 使用 DNSServer 必须在 **AP 模式**下。

- 引入对应的库 `#include <DNSServer.h>`。

- 声明 `DNSServer` 对象。

- 使用 `start()` 方法启动 DNS 服务器。

- 使用 `processNextRequest()` 方法处理来自客户端的请求。

- 将代码上传到 Wio Terminal，并将你的电脑连接到 `DNSServer example` Wi-Fi。

- 输入 `www.wioterminal.com` 和 `www.wioterminal.com/p1`。

```cpp
#include <rpcWiFi.h>
#include <DNSServer.h>
#include <WebServer.h>

IPAddress local_IP(192, 168, 1, 1);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 255, 0);

const byte DNS_PORT = 53;

DNSServer dnsServer;
WebServer webserver(80);

void handleRoot()
{
  webserver.send(200, "text/plain", "通过域名访问根页面");
}

void handleP1()
{
  webserver.send(200, "text/plain", "通过域名访问页面 1");
}

void setup()
{
  WiFi.mode(WIFI_AP);
  WiFi.softAPConfig(local_IP, gateway, subnet);
  WiFi.softAP("DNSServer example");

  webserver.on("/", handleRoot);
  webserver.on("/p1", handleP1);

  dnsServer.start(DNS_PORT, "www.wioterminal.com", local_IP); // 启动 DNS 服务，example.com 是注册的域名。
  webserver.begin();
}

void loop()
{
  dnsServer.processNextRequest();
  webserver.handleClient();
}
```

## mDNS 使用

**什么是多播 DNS (mDNS)?**

[多播 DNS (mDNS)](https://en.wikipedia.org/wiki/Multicast_DNS) 协议在不包含本地名称服务器的小型网络中，将主机名解析为 IP 地址。多播 DNS 专为小型网络设计，旨在提高其用户友好性。其理念是用户可以在私密的局域网中无障碍地连接设备。

### 安装 Seeed_Arduino_rpcmDNS

1. 访问 [**Seeed_Arduino_rpcmDNS**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcmDNS) 仓库，并将整个仓库下载到本地。

2. 现在，可以将 Seeed_Arduino_rpcmDNS 库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择刚刚下载的 `Seeed_Arduino_rpcmDNS` 文件。

### mDNS Web Server 示例

这是一个在 Wio Terminal 上设置 mDNS Web 服务器的示例，使得同一网络中的其他设备可以通过定义的站点浏览 Web 服务器。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-webserver.png" /></div>

- 将 `yourNetwork` 和 `yourPassword` 替换为你的 WiFi **SSID** 和 **密码**。

- 将代码上传到 Wio Terminal。

- 在同一网络中，通过浏览器输入 [http://WioTerminal.local/](http://WioTerminal.local/) 访问 Web 服务器，并输入预设的用户名和密码。

```cpp
#include <rpcWiFi.h>
#include <RPCmDNS.h>
#include <WiFiClient.h>

const char* ssid     = "yourNetwork";
const char* password = "yourPassword";

// TCP 服务器将在端口 80 响应 HTTP 请求
WiFiServer server(80);

void setup(void)
{  
    Serial.begin(115200);
    while(!Serial){
        ;
    }
    Serial.printf("设置开始 \r\n");
    // 连接到 WiFi 网络
    WiFi.begin(ssid, password);
    Serial.println("");

    // 等待连接
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.print("已连接到 ");
    Serial.println(ssid);
    Serial.print("IP 地址: ");
    Serial.println(WiFi.localIP());

    // 设置 mDNS 响应器：
    // - 第一个参数是域名，在本例中
    //   完全限定域名是 "esp8266.local"
    // - 第二个参数是要广播的 IP 地址
    //   我们在 WiFi 网络上发送我们的 IP 地址
    if (!MDNS.begin("WioTerminal")) {
        Serial.println("设置 mDNS 响应器时出错！");
        while(1) {
            delay(1000);
        }
    }
    Serial.println("mDNS 响应器已启动");

    // 启动 TCP (HTTP) 服务器
    server.begin();
    Serial.println("TCP 服务器已启动");

    // 添加服务到 MDNS-SD
    MDNS.addService("http", "tcp", 80);

    Serial.printf("设置完成 \r\n");
}

void loop(void)
{
    // 检查是否有客户端连接
    WiFiClient client = server.available();
    if (!client) {
        return;
    }
    Serial.println("");
    Serial.println("新客户端");
    // 等待客户端数据可用
    while(client.connected() && !client.available()){
        delay(1);
    }
    // 读取 HTTP 请求的第一行
    String req = client.readStringUntil('\r');
    // HTTP 请求的第一行类似于 "GET /path HTTP/1.1"
    // 通过查找空格来提取 "/path" 部分
    int addr_start = req.indexOf(' ');
    int addr_end = req.indexOf(' ', addr_start + 1);
    if (addr_start == -1 || addr_end == -1) {
        Serial.print("无效请求: ");
        Serial.println(req);
        return;
    }
    req = req.substring(addr_start + 1, addr_end);
    Serial.print("请求: ");
    Serial.println(req);

    String s;
    if (req == "/")
    {
        IPAddress ip = WiFi.localIP();
        String ipStr = String(ip[0]) + '.' + String(ip[1]) + '.' + String(ip[2]) + '.' + String(ip[3]);
        s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>来自 Wio Terminal 的问候，IP 地址为 ";
        s += ipStr;
        s += "</html>\r\n\r\n";
        Serial.println("发送 200");
    }
    else
    {
        s = "HTTP/1.1 404 Not Found\r\n\r\n";
        Serial.println("发送 404");
    }
    client.print(s);

    client.stop();
    Serial.println("客户端处理完成");
}
```

### mDNS-SD 示例

这是一个 [mDNS-SD（服务发现）](https://en.wikipedia.org/wiki/Zero-configuration_networking#DNS-SD) 示例，允许你发现同一网络中的服务。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-sd.png" /></div>

- 将 `yourNetwork` 和 `yourPassword` 替换为您的 WiFi **ssid** 和 **密码**。

- 将代码上传到 Wio Terminal。

```cpp
#include <rpcWiFi.h>
#include <RPCmDNS.h>
#include <WiFiClient.h>

const char* ssid     = "yourNetwork";
const char* password = "yourPassword";

// TCP 服务器在端口 80 上响应 HTTP 请求
WiFiServer server(80);

void setup(void)
{  
    Serial.begin(115200);
    while(!Serial){
        ;
    }
    Serial.printf("Setup Start \r\n");
    // 连接到 WiFi 网络
    WiFi.begin(ssid, password);
    Serial.println("");

    // 等待连接
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.print("Connected to ");
    Serial.println(ssid);
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());

    // 设置 mDNS 响应器：
    // - 第一个参数是域名，在此示例中
    //   完全限定域名是 "esp8266.local"
    // - 第二个参数是要广播的 IP 地址
    //   我们在 WiFi 网络上发送我们的 IP 地址
    if (!MDNS.begin("WioTerminal")) {
        Serial.println("Error setting up MDNS responder!");
        while(1) {
            delay(1000);
        }
    }
    Serial.println("mDNS responder started");

    // 启动 TCP (HTTP) 服务器
    server.begin();
    Serial.println("TCP server started");

    // 将服务添加到 MDNS-SD
    MDNS.addService("http", "tcp", 80);

    Serial.printf("Setup Done \r\n");
}

void loop(void)
{
    // 检查是否有客户端连接
    WiFiClient client = server.available();
    if (!client) {
        return;
    }
    Serial.println("");
    Serial.println("New client");
    // 等待客户端数据可用
    while(client.connected() && !client.available()){
        delay(1);
    }
    // 读取 HTTP 请求的第一行
    String req = client.readStringUntil('\r');
    // HTTP 请求的第一行看起来像 "GET /path HTTP/1.1"
    // 通过查找空格来提取 "/path" 部分
    int addr_start = req.indexOf(' ');
    int addr_end = req.indexOf(' ', addr_start + 1);
    if (addr_start == -1 || addr_end == -1) {
        Serial.print("Invalid request: ");
        Serial.println(req);
        return;
    }
    req = req.substring(addr_start + 1, addr_end);
    Serial.print("Request: ");
    Serial.println(req);

    String s;
    if (req == "/")
    {
        IPAddress ip = WiFi.localIP();
        String ipStr = String(ip[0]) + '.' + String(ip[1]) + '.' + String(ip[2]) + '.' + String(ip[3]);
        s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>Hello from Wio Terminal at ";
        s += ipStr;
        s += "</html>\r\n\r\n";
        Serial.println("Sending 200");
    }
    else
    {
        s = "HTTP/1.1 404 Not Found\r\n\r\n";
        Serial.println("Sending 404");
    }
    client.print(s);

    client.stop();
    Serial.println("Done with client");
}
```

## WiFiManager 使用

我们已将知名的 WiFi Manager 移植到 Wio Terminal 平台，这样您可以使用手机或其他设备为 Wio Terminal 配置 Wi-Fi 设置！

### 安装 Seeed_Arduino_rpcWiFiManager

1. 访问 [**Seeed_Arduino_rpcWiFiManager**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFiManager) 仓库，并将整个仓库下载到本地。

2. 现在，可以将 Seeed_Arduino_rpcWiFiManager 库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择刚刚下载的 `Seeed_Arduino_rpcWiFiManager` 文件。

### WiFiManager 自动连接示例

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/wifimanager.gif" /></div>

此示例展示了自动连接功能。您可以使用该示例为 Wio Terminal 设置 WiFi。

- 将代码上传到 Wio Terminal。

- 如果 Wio Terminal 之前已连接到 WiFi，它将自动连接到相同的网络。如果无法连接到任何 WiFi，它将进入 AP 模式并发出 WiFi。使用您的手机连接到此 WiFi 并输入 WiFi 设置。

```cpp
#include <rpcWiFi.h>
#include <DNSServer.h>
#include <WebServer.h>
#include <WiFiManager.h>

void setup() {
    Serial.begin(115200);
    while(!Serial); // 等待串口打开

    WiFiManager wifiManager;
    // 取消注释 resetSettings() 将清除保存的设置
    //wifiManager.resetSettings();

    // 从 RTL8720 获取 ssid 和密码并尝试连接
    // 如果无法连接，它将启动一个具有指定名称的接入点
    // 此处为 "AutoConnectAP"
    // 并进入阻塞循环等待配置
    wifiManager.autoConnect("AutoConnectAP");
    // 或使用此方法生成自动名称 ESP + ChipID
    //wifiManager.autoConnect();

    // 如果到达这里，说明已成功连接到 WiFi
    Serial.println("connected...yeey :)");
    Serial.println(WiFi.localIP());
}

void loop() {
    // 在此处放置您的主代码，以重复运行：
}
```