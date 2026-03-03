---
title: 将 Wio Terminal 连接到 Google Cloud IoT Core
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/
slug: /cn/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 将 Wio Terminal 连接到 Google Cloud IoT Core

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

## 介绍
在本教程中，我们将引导您完成将 Wio Terminal 连接到 Google Cloud IoT Core 并从 Wio Terminal 向 Google Cloud IoT Core 发送遥测数据的过程。本教程将分为两个部分，第一部分将介绍如何使用现有的库来发送代码中预配置的遥测数据，第二部分将介绍如何向 Wio Terminal 添加您自己的传感器以向 Google Cloud IoT Core 发送遥测数据。Google Cloud IoT Core 支持 HTTP 和 MQTT 协议进行通信，但在本教程中我们将使用 MQTT 协议。


### 什么是 Google Cloud？
[Google Cloud](https://cloud.google.com/) 由一组物理资产（如计算机和硬盘驱动器）和虚拟资源（如虚拟机 (VM)）组成，这些资源包含在 Google 遍布全球的数据中心中。这种资源分布提供了多项好处，包括在发生故障时的冗余性，以及通过将资源放置在更靠近客户端的位置来减少延迟。

在云计算中，您可能习惯于将软件和硬件产品视为服务。这些服务提供对底层资源的访问。[可用的 Google Cloud 服务列表](https://cloud.google.com/products)很长，而且还在不断增长。当您在 Google Cloud 上开发网站或应用程序时，您可以将这些服务混合搭配成组合，提供您需要的基础设施，然后添加您的代码来实现您想要构建的场景。

### 什么是 Google Cloud Platform？
[Google Cloud Platform (GCP)](https://console.cloud.google.com/) 是云计算服务的集合。它提供一套管理工具，提供一系列模块化云服务，包括计算、数据存储、数据分析和机器学习。它提供基础设施即服务、平台即服务和无服务器计算环境。

### 什么是 Google Cloud IoT Core？
[Google Cloud Internet of Things (IoT) Core](https://cloud.google.com/iot/docs) 是一个完全托管的服务，用于安全连接和管理 IoT 设备，从几个到数百万个设备。从连接的设备中摄取数据，并构建与 Google Cloud Platform 其他大数据服务集成的丰富应用程序。

### 什么是 Google Cloud Console？

[Google Cloud Console](https://console.cloud.google.com/) 提供了一个基于 Web 的图形用户界面，您可以使用它来管理 Google Cloud Platform 资源。当您使用 Cloud Console 时，您创建一个新项目或选择一个现有项目，并使用您在该项目上下文中创建的资源。您可以创建多个项目，因此您可以使用项目以对您有意义的任何方式分离您的工作。例如，如果您想确保只有某些团队成员可以访问该项目中的资源，而所有团队成员可以继续访问另一个项目中的资源，您可能会启动一个新项目。

## 通过 MQTT 连接 Wio Terminal 到 Google Cloud IoT Core

如前所述，我们将使用可用的 MQTT 桥接器来实现 Wio Terminal 和 Google Cloud IoT Core 之间的通信。不过，如果您有需要，也可以使用 HTTP 桥接器。

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png)

### Google Cloud Console 设置

首先我们需要访问 Google Cloud Console，创建一个 Cloud IoT Core 设备注册表并注册一个设备。

#### 初始设置

- **步骤 1：** 访问[这里](https://console.cloud.google.com/)创建一个新项目

**注意：** 如果提示，请登录您的 Google 账户

- **步骤 2：** 点击**选择项目**菜单

- **步骤 3：** 点击**新建项目**并输入**项目名称**

- **步骤 4：** 点击**创建**

- **步骤 5：** 为您的 Cloud 项目启用计费。这是为了确保您不是机器人，您不会被收费。在导航菜单下选择"计费"并完成设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/1111111.png" alt="pir" width={500} height="auto" /></p>


- **步骤 6：** 访问[这里](https://console.cloud.google.com/flows/enableapi?apiid=cloudiot.googleapis.com%2Cpubsub&authuser=3&_ga=2.254170561.853675115.1607885458-878786893.1606048800)启用 Cloud IoT Core 和 Cloud Pub/Sub API

**注意：** 从下拉菜单中选择您之前创建的项目

#### 创建设备注册表

- **步骤 1：** 在 Cloud Console 中访问 [Google Cloud IoT Core 页面](https://console.cloud.google.com/iot/registries)

- **步骤 2：** 点击**创建注册表**

- **步骤 3：** 输入**注册表 ID**

**注意：** 这是您注册表的名称

- **步骤 4：** 选择一个**区域**

**注意：** 如果您在美国，请为区域选择 us-central1。如果您在美国以外，请选择您偏好的区域。

- **步骤 5：** 在**选择 Cloud Pub/Sub 主题**下拉列表中，选择**创建主题**并输入您偏好的**主题 ID**

- **步骤 6：** 点击**创建主题**

- **步骤 7：** 点击**显示高级选项**

- **步骤 8：** **设备状态主题**和**证书值**字段是可选的，所以留空

- **步骤 9：** 为**协议**选择 **MQTT**

- **步骤 10：** 在 Cloud IoT Core 页面上点击**创建**

现在我们已经创建了一个设备注册表，其中包含一个用于发布设备遥测事件的 Cloud Pub/Sub 主题

#### 生成设备密钥对（EC 密钥）

Cloud IoT Core 使用公钥（或非对称）身份验证

- 设备使用私钥来签署 [JSON Web Token (JWT)](https://cloud.google.com/iot/docs/how-tos/credentials/jwts)。令牌被传递给 Cloud IoT Core 作为设备身份的证明。
- 服务使用设备公钥（在发送 JWT 之前上传）来验证设备的身份。

Cloud IoT Core 支持 RSA 和椭圆曲线算法，我们将在本教程中使用椭圆曲线密钥。

- **步骤 1：** 在您的 PC 上创建一个新文件夹

- **步骤 2：** 从终端窗口导航到该文件夹并输入以下命令来生成 P-256 椭圆曲线密钥对

```sh
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

**注意：** 确保通过[此链接](https://slproweb.com/products/Win32OpenSSL.html)安装 **openssl** 并将目录位置添加到 PATH 中。

上述命令创建以下公钥/私钥对：

- **ec_private.pem**：必须安全存储在设备上并用于签署身份验证 JWT 的私钥。
- **ec_public.pem**：必须存储在 Cloud IoT Core 中并用于验证身份验证 JWT 签名的公钥。

#### 提取私钥

我们需要提取私钥字节并将它们复制到我们稍后在本教程中创建的 Arduino 项目中的私钥字符串中。现在保存这些密钥以供稍后使用。

- **步骤 1：** 打开终端窗口并导航到包含我们之前生成的椭圆曲线密钥对的文件夹。

- **步骤 2：** 输入以下命令

```sh
openssl ec -in ec_private.pem -noout -text
```

- **步骤 3：** 复制并粘贴生成的私钥字节到记事本中的 **priv:** 下方，保存以备后用。

#### 将设备添加到注册表

- **步骤 1：** 访问[注册表页面](https://console.cloud.google.com/iot/registries)并选择您之前创建的注册表

- **步骤 2：** 选择 **Devices** 选项卡并点击 **CREATE A DEVICE**

- **步骤 3：** 输入一个 **Device ID**

- **步骤 4：** **Device metadata** 字段是可选的，所以留空即可

- **步骤 5：** 点击 **COMMUNICATION, CLOUD LOGGING, AUTHENTICATION** 下拉菜单

- **步骤 6：** 为 **Device communication** 选择 **Allow**

- **步骤 7：** 在 **Authentication** 字段内，在 **Input method** 下选择 **Upload**

- **步骤 8：** 从 **Public key format** 下拉菜单中选择 **ES256**

- **步骤 9：** 在 **Public key value** 下，按 **BROWSE** 按钮，导航到我们之前创建的 **Elliptic Curve key pair** 文件夹并选择 **ec_public.pem**

- **步骤 10：** 点击 **Create**

现在您已经将设备添加到注册表中。ES256 密钥会出现在您设备的设备详情页面上。

#### 设置订阅者

现在我们已经创建了设备注册表，创建了主题并将设备添加到该注册表中，让我们继续创建一个订阅者来订阅我们创建的主题，以便从 Wio Terminal 获取遥测数据。

- **步骤 1：** 在 Google Cloud Console 的搜索栏中输入 **Pub**，并从结果中选择 **Pub/Sub**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/333333.png" alt="pir" width={700} height="auto" /></p>

- **步骤 2：** 在导航菜单中点击 **Subscriptions**

- **步骤 3：** 点击 **CREATE SUBSCRIPTION**

- **步骤 4：** 输入您选择的 **Subscription ID**

- **步骤 5：** 从 **Select a Cloud Pub/Sub topic** 下拉菜单中选择我们之前创建的 **Pub/Sub topic**

- **步骤 6：** 选择 **Pull** 作为传递类型

- **步骤 7：** 点击 **Create**

现在我们已经完成了 Google Cloud IoT Core 的设置。接下来，我们将继续设置 Wio Terminal 和 Arduino IDE。

### 使用 Wio Terminal 进行 Arduino 设置

#### 所需库

本教程需要两个库。
1. lwMQTT MQTT Arduino Library
2. Google Cloud IoT Arduino Library

要下载这些库：

- **步骤 1：** 打开 Arduino IDE
- **步骤 2：** 导航到 `Sketch > Include Library > Manage Libraries`
- **步骤 3：** 在搜索框中输入 **lwMQTT** 和 **Google Cloud IoT** 并安装这些库

#### 凭据和账户信息配置

现在我们需要在 **ciotc_config.h** 文件中设置 Wi-Fi 凭据和 Google Cloud IoT Core 信息。

- **步骤 1：** 在 Arduino IDE 中，`File > Examples > Google Cloud IoT JWT > Esp32-lwmqtt`

- **步骤 2：** 导航到 **ciotc_config.h**

- **步骤 3：** 更改 **Wifi network details**

```cpp
const char *ssid = "Enter_SSID";
const char *password = "Enter_Password";
```

- **步骤 4：** 更改 **Google Cloud IoT 详细信息**

```cpp
const char *project_id = "Enter_Project_ID";
const char *location = "Enter_location";
const char *registry_id = "Enter_Registry_ID";
const char *device_id = "Enter_Device_ID";
```

- **步骤 5：** 复制我们之前从 **ec_private.pem** 获得并保存到记事本中的私钥字节

```cpp
const char *private_key_str =
    "6e:b8:17:35:c7:fc:6b:d7:a9:cb:cb:49:7f:a0:67:"
    "63:38:b0:90:57:57:e0:c0:9a:e8:6f:06:0c:d9:ee:"
    "31:41";
```

**注意：** 密钥长度应为32对十六进制数字

#### 更改NTP时间方法

打开 **esp32-mqtt.h** 并用以下代码替换整个文件。这里我们用通过UDP获取NTP时间的实现替换了configTime函数。

```cpp
#include <Client.h>
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

#include <MQTT.h>

#include <CloudIoTCore.h>
#include <CloudIoTCoreMqtt.h>
#include "ciotc_config.h" // 使用您的配置更新此文件

// !!REPLACEME!!
// 用于命令和配置更新的MQTT回调函数
// 将您的消息处理代码放在这里。
void messageReceived(String &topic, String &payload){
  Serial.println("incoming: " + topic + " - " + payload);
}
///////////////////////////////

// 为此开发板初始化WiFi和MQTT
//Client *netClient;
CloudIoTCoreDevice *device;
CloudIoTCoreMqtt *mqtt;
MQTTClient *mqttClient;
unsigned long iat = 0;
String jwt;
WiFiUDP udp;

unsigned int localPort = 2390;
unsigned long devicetime;
const int NTP_PACKET_SIZE = 48; // NTP时间戳在消息的前48字节中
byte packetBuffer[NTP_PACKET_SIZE]; //用于保存传入和传出数据包的缓冲区

// 向给定地址的时间服务器发送NTP请求
unsigned long sendNTPpacket(const char* address) {
    // 将缓冲区中的所有字节设置为0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // 初始化形成NTP请求所需的值
    // (有关数据包的详细信息，请参见上面的URL)
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // Root Delay & Root Dispersion的8个零字节
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // 所有NTP字段都已赋值，现在
    // 您可以发送请求时间戳的数据包：
    udp.beginPacket(address, 123); //NTP请求发送到端口123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

unsigned long getNTPtime() {

    // 模块返回一个无符号长整型时间值，表示自1970年1月1日以来的秒数
    // unix时间，如果遇到问题则返回0

    //仅在连接时发送数据
    if (WiFi.status() == WL_CONNECTED) {
        //初始化UDP状态
        //这会初始化传输缓冲区
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(ntp_primary); // 向时间服务器发送NTP数据包
        // 等待查看是否有回复可用
        delay(1000);
        if (udp.parsePacket()) {
//            Serial.println("udp packet received");
//            Serial.println("");
            // 我们收到了一个数据包，从中读取数据
            udp.read(packetBuffer, NTP_PACKET_SIZE); // 将数据包读入缓冲区

            //时间戳从接收数据包的第40字节开始，长度为4字节，
            // 或两个字。首先，提取这两个字：

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // 将四个字节（两个字）组合成一个长整数
            // 这是NTP时间（自1900年1月1日以来的秒数）：
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix时间从1970年1月1日开始。以秒为单位，那是2208988800：
            const unsigned long seventyYears = 2208988800UL;
            // 减去七十年：
            unsigned long epoch = secsSince1900 - seventyYears;

            // 根据时区偏移量调整时间，以秒为单位，相对于UTC的+/-
            // WA时间相对于UTC的偏移量是+8小时（28,800秒）
            // + 格林威治标准时间以东
            // - 格林威治标准时间以西
//            long tzOffset = 28800UL;
            long tzOffset = 0UL;

            // WA本地时间
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // 无法成功解析udp数据包
            // 清理udp连接
            udp.stop();
            return 0; // 零表示失败
        }
        // 不经常调用ntp时间，stop释放资源
        udp.stop();
    }
    else {
        // 网络未连接
        return 0;
    }

}

///////////////////////////////
// 此开发板特定的辅助函数
///////////////////////////////
String getDefaultSensor(){
  return "Wifi: " + String(WiFi.RSSI()) + "db";
}

String getJwt(){
  Serial.println("Refreshing JWT");
  iat = getNTPtime();
  Serial.println(iat);
  jwt = device->createJWT(iat, jwt_exp_secs);

  Serial.println(jwt);
  return jwt;
}

void setupWifi(){
  Serial.println("Starting wifi");

  WiFi.mode(WIFI_STA);
  // WiFi.setSleep(false); // 可能有助于防止断开连接？似乎已从WiFi中删除
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED){
    delay(100);
  }

//  configTime(0, 0, ntp_primary, ntp_secondary);
  Serial.println("Waiting on time sync...");
//  Serial.println(getNTPtime());

  while (getNTPtime() < 1510644967){
    delay(10);
  }
}

void connectWifi(){
  Serial.print("checking wifi...");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(1000);
  }
}

///////////////////////////////
// 协调来自前面代码的各种方法。
///////////////////////////////
bool publishTelemetry(String data){
  return mqtt->publishTelemetry(data);
}

bool publishTelemetry(const char *data, int length){
  return mqtt->publishTelemetry(data, length);
}

bool publishTelemetry(String subfolder, String data){
  return mqtt->publishTelemetry(subfolder, data);
}

bool publishTelemetry(String subfolder, const char *data, int length){
  return mqtt->publishTelemetry(subfolder, data, length);
}

void connect(){
  connectWifi();
  mqtt->mqttConnect();
}


WiFiClientSecure netClient;
void setupCloudIoT(){
  device = new CloudIoTCoreDevice(
      project_id, location, registry_id, device_id,
      private_key_str);

  setupWifi();
//  netClient = new WiFiClientSecure();
  mqttClient = new MQTTClient(512);
  mqttClient->setOptions(180, true, 1000); // keepAlive, cleanSession, timeout
  mqtt = new CloudIoTCoreMqtt(mqttClient, &netClient, device);
  mqtt->setUseLts(true);
  mqtt->startMQTT();
}
```

#### 在 Esp32-lwmqtt.ino 中添加宏定义

在 **Esp32-lwmqtt.ino** 内部的宏定义中添加 Wio Terminal 开发板

```cpp
#if defined(ESP32) || defined(WIO_TERMINAL)
#define __ESP32_MQTT_H__
#endif
```

现在我们已经完成了 Arduino IDE 的设置。最后你需要将这段代码上传到 Wio Terminal。打开串口监视器，你将看到以下显示内容。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/4444444.png" alt="pir" width={700} height="auto" /></p>


### 显示遥测数据

现在我们需要显示来自 Wio Terminal 的传入遥测数据。在这个示例代码中，Wi-Fi 信号强度将作为遥测数据发送。


- **步骤 1：** 在 Google Cloud Console 中访问 **Pub/Sub**

**注意：** 你可以在 Google Cloud Console 的搜索栏中搜索 **Pub**

- **步骤 2：** 在导航菜单中导航到 **Subscriptions**

- **步骤 3：** 选择我们之前创建的订阅 ID

- **步骤 4：** 点击 **VIEW MESSAGES**

- **步骤 5：** 点击 **PULL**，你将看到如下传入的遥测数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/6666666.png" alt="pir" width={950} height="auto" /></p>


### 如何添加其他传感器？

你可以向 Wio Terminal 添加任何传感器，并将遥测数据发送到 Google Cloud IoT Core。为了简化，我们将使用 Wio Terminal 上的内置光传感器将光强度级别发送到 Google Cloud IoT Core。

#### Google Cloud IoT 设置

- **步骤 1：** 在 Google Cloud Console 中访问 **IoT Core**

**注意：** 你可以在 Google Cloud Console 的搜索栏中搜索 **IoT Core**

- **步骤 2：** 选择我们之前创建的注册表

- **步骤 3：** 在 **Cloud Pub/Sub topics** 下选择 **Add or edit topics**

- **步骤 4：** 点击 **ADD ADDITIONAL TOPIC**

- **步骤 5：** 从 **Select a Cloud Pub/Sub topic** 的下拉菜单中点击 **CREATE A TOPIC**

- **步骤 6：** 输入一个 **Topic ID** 并点击 **CREATE TOPIC**

- **步骤 7：** 在 **Subfolder** 列中输入一个 **Subfolder name**

**注意：** 子文件夹名称将用于在 Arduino 代码中关联到主题

- **步骤 8：** 点击 **UPDATE**

- **步骤 9：** 按照之前的说明创建一个 **新订阅**


#### Arduino 设置

导航到 **Esp32-lwmqtt.ino** 并添加以下内容

- **步骤 1：** 在循环后，为内置光传感器添加以下内容

```cpp
void loop() {
  int light = analogRead(WIO_LIGHT); //assign variable to store light sensor values 
  light = map(light,0,1023,0,100); //Map sensor values  
```

- **步骤 2：** 添加带有子文件夹名称的主题

```cpp
    publishTelemetry(getDefaultSensor());
    publishTelemetry("/light",String(light));
```

**注意：** 如果没有添加子文件夹名称，遥测数据将发送到默认主题。在这种情况下，如前所述的Wi-Fi信号强度遥测数据将发送到我们之前创建的第一个主题，即默认主题。

将代码上传到Wio Terminal后，作为订阅者从新创建的主题拉取数据，您将看到以下结果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/222222.png" alt="pir" width={950} height="auto" /></p>


### 如何添加其他传感器并在仪表板上可视化数据？

尽管Google Cloud IoT Core没有提供现成的仪表板来可视化传感器数据，但我们将解释如何通过使用InfluxDB和Grafana来实现这一点。

[InfluxDB](https://www.influxdata.com/) 是一个时间序列数据库，即InfluxDB中的每个数据都与特定的时间戳相关联，该时间戳显示与特定数据相关联的日期和时间。而[Grafana](https://grafana.com/) 是一个开源解决方案，用于运行数据分析，提取对大量数据有意义的指标，并通过可定制的仪表板监控应用程序。

基本上，我们将温度/湿度传感器连接到Wio Terminal，使用Google Cloud Function将数据从Pub/Sub传输到位于GKE（Google Kubernetes Engine）集群中的InfluxDB，并使用交互式仪表板在Grafana上显示来自InfluxDB的数据。

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

#### Arduino硬件设置

将Grove - 温湿度传感器（DHT11）连接到Wio Terminal的Grove - 数字/模拟端口（D0）。

#### Arduino软件设置

- **步骤1：** 访问[Grove - 温湿度传感器仓库](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)并将其下载为zip文件

- **步骤2：** 打开Arduino，导航到`Sketch > Include Library > Add .ZIP Library`并选择下载的库进行安装

导航到之前使用的**Esp32-lwmqtt.ino**并添加以下内容：

- **步骤1：** 在**#include "esp32-mqtt.h"**之后添加以下内容

```cpp
#include "DHT.h" //DHT库

#define DHTPIN 0 //定义DHT的信号引脚
#define DHTTYPE DHT11 //定义DHT传感器类型
DHT dht(DHTPIN, DHTTYPE); //初始化DHT传感器  
```

- **步骤 2：** 在 **setup** 中添加以下代码来启动 DHT 传感器

```cpp
dht.begin(); 
```

- **步骤 3：** 在 **void loop()** 中的 **if 循环** 内添加以下内容

```cpp
int temperature = dht.readTemperature(); //分配变量来存储温度
int humidity = dht.readHumidity(); //分配变量来存储湿度

String payload = String("{\"timestamp\":") + getNTPtime() +
                  String(",\"temperature\":") temperature +
                  String(",\"humidity\":") + humidity +
                  String("}");
publishTelemetry(payload); 
```

**注意：** 这里我们将所有数据作为字符串解析到 influxDB 中。解析**时间**很重要，因为 influxDB 是一个时间序列数据库。同时 **pushTelemetry** 函数会将数据发送到我们在本教程开始时创建的默认主题。

- **步骤 4：** 将代码上传到 Wio Terminal

#### Google Cloud IoT 设置

- **步骤 1：** 访问[此](https://github.com/lakshanthad/esp32-cloud-iot-core-k8s)仓库并将其下载为 zip 文件

- **步骤 2：** 解压下载的 zip 文件

- **步骤 3：** 打开 Google Cloud Console 并导航到 [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes/list)，等待系统初始化

- **步骤 4：** 点击右上角的按钮启动 Cloud shell

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/cloud_shell_1.png" alt="pir" width={700} height="auto" /></p>


- **步骤 5：** 输入以下命令为 gcloud 命令行工具设置默认值

```sh
export ZONE=<enter_zone> # 例如 us-central1-a，参见 https://cloud.google.com/compute/docs/regions-zones/#available
export PROJECT_ID=<enter_project-id> # 项目 ID 名称
gcloud config set project $PROJECT_ID
gcloud config set compute/zone $ZONE
```

- **步骤 6：** 输入以下命令创建一个包含一个 n1-standard-1 节点的 GKE 集群

```sh
gcloud container clusters create influxdb-grafana \
                --num-nodes 1 \
                --machine-type n1-standard-1 \
                --zone $ZONE
```

- **步骤 7：** 输入以下命令创建一个密钥来存储 InfluxDB 和 Grafana 认证信息

```sh
kubectl create secret generic influxdb-grafana \
  --from-literal=influxdb-user=admin \
  --from-literal=influxdb-password=passw0rd \
  --from-literal=grafana-user=admin \
  --from-literal=grafana-password=passw0rd
```

**注意：** 您可以根据自己的偏好更改 influxdb/grafana 用户名和密码

- **步骤 8：** 在 Google Shell 中点击 **Open Editor**

- **步骤 9：** 将之前下载并解压的文件夹拖放到 **Cloud Shell Editor** 中

- **步骤 10：** 点击 **Open Terminal** 返回终端。通过输入以下命令导航到 **05-influxdb_grafana_k8s** 目录

```sh
cd esp32-cloud-iot-core-k8s-master/05-influxdb_grafana_k8s
```

- **步骤 11：** 输入以下命令将 InfluxDB 和 Grafana 部署到 Kubernetes

```sh
kubectl create -f k8s/
```

#### Grafana 设置

- **步骤 1：** 输入以下命令检查服务的外部 IP / 端口

```sh
kubectl get services
```

- **步骤 2:** 复制 Grafana 的外部 IP

- **步骤 3:** 访问 `http://<grafana service external ip>:3000`

**注意:** 将之前复制的 Grafana 外部 IP 粘贴到 `<grafana service external ip>`

- **步骤 4:** 使用之前设置的凭据登录 Grafana

- **步骤 5:** 点击齿轮图标并导航到 `Configuration > Data Sources`

- **步骤 6:** 点击 **Add data source** 并选择 **influxDB**

- **步骤 7:** 在 **URL** 字段中输入以下内容

```sh
http://influxdb:8086
```

- **步骤 8：** 在 **Database** 字段中输入以下内容并点击 **Save & Test**

```sh
iot
```

**注意：** 如果您已经在 Grafana 上成功设置了 **InfluxDB** 数据源，您应该会看到消息 **Data source is working**

#### 创建 Google Cloud Function

现在我们需要创建一个 Google Cloud Function 来将数据从 Pub/Sub 上的主题传输到 InfluxDB，并使用交互式仪表板在 Grafana 上显示来自 InfluxDB 的数据。

- **步骤 1：** 返回到 **Google Cloud Console** 并打开 **Cloud Shell**

- **步骤 2：** 输入以下命令来启用 **Cloud Functions API**

```sh
gcloud services enable cloudfunctions.googleapis.com
```

- **步骤 3：** 通过输入以下命令导航到 **06-cloud_function** 目录

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **步骤 4：** 在 **vim 文本编辑器** 中打开 **main.py**

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **步骤 5：** 按键盘上的 **i** 键进入 **编辑模式**

- **步骤 6：** 在 **_get_influxdb_client 函数** 中修改 **InfluxDB 变量**（主机、端口、用户名、密码）

**注意：** 通过在 Cloud Shell 中输入以下命令并复制外部 IP 来获取 InfluxDB 主机

```sh
kubectl get services
```

- **步骤 7:** 通过输入 **:wq** 保存文件

- **步骤 8:** 通过输入以下命令部署 **Cloud Function**

```sh
export PUBSUB_TOPIC="enter_topic-name>"
export REGION="enter_region" # https://cloud.google.com/functions/docs/locations
gcloud functions deploy iotcore_pubsub_to_influxdb --runtime python37 --trigger-topic $PUBSUB_TOPIC --region $REGION
```

#### 返回 Grafana 设置

- **步骤 1:** 打开 Grafana 并导航到 `Dashboards > Manage`

- **步骤 2:** 点击 **New Dashboard** 并点击 **Add new panel**

- **步骤 3:** 导航到 **Visualization** 并点击 **Graph**

- **步骤 4:** 在 **Query** 下，在 **FROM** 选项卡中，点击 **select measurement** 并从下拉菜单中选择 **temperature**

- **步骤 5:** 点击 **+ Query** 并重复与 **步骤 12** 相同的步骤来添加 **humidity**

- **步骤 6:** 根据您的偏好更改其他设置

- **步骤 7:** 点击 **Apply**

- **步骤 8:** 点击 **Add panel** 和 **Add new panel**

- **步骤 9:** 导航到 **Visualization** 并点击 **Gauge**

- **步骤 10:** 在 **Query** 下，在 **FROM** 选项卡中，点击 **select measurement** 并从下拉菜单中选择 **temperature**

- **步骤 11:** 在 **Field** 选项卡中，在 **Unit** 下，从下拉菜单中选择 `Temperature > Celcius`

- **步骤 12:** 通过在 **Min** 和 **Max** 中输入来为仪表设置最小值和最大值

- **步骤 13:** 在 **Display name** 下，输入 `Temperature`

- **步骤 14:** 从 **步骤 15** 开始，对 **humidity** 重复相同的操作。

- **步骤 15:** 点击 **Apply**

您现在将看到在 Grafana 上创建的仪表板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/grafana_dash_1.png" alt="pir" width={900} height="auto" /></p>


## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>