---
description: Google Cloud IoT
title: Google 使用指南
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Connect-Wio-Terminal-to-Google-Cloud
last_update:
  date: 2023/1/13
  author: shuxu hu
---
# 将 Wio Terminal 连接到 Google Cloud IoT Core

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" alt="pir" width={600} height="auto" /></p>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、CO2、EC 传感器以及一款 8 合 1 气象站。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>SenseCAP 工业传感器</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody></table>

## 介绍

在本教程中，我们将引导您完成将 Wio Terminal 连接到 Google Cloud IoT Core 的过程，并将遥测数据从 Wio Terminal 发送到 Google Cloud IoT Core。教程分为两个部分，第一部分将介绍如何使用现有的库来发送代码中预配置的遥测数据，而第二部分将介绍如何将您自己的传感器添加到 Wio Terminal 上，并将遥测数据发送到 Google Cloud IoT Core。Google Cloud IoT Core 支持 HTTP 和 MQTT 协议进行通信，但在本教程中我们将使用 MQTT 协议。

### 什么是 Google Cloud？

[Google Cloud](https://cloud.google.com/) 包括一组物理资产（如计算机和硬盘驱动器）以及虚拟资源（如虚拟机 (VM)），这些资源分布在 Google 全球的数据中心中。这种资源分布带来了多种优势，包括在发生故障时的冗余性，以及通过将资源定位在更靠近客户端的位置来减少延迟。

在云计算中，您可能习惯于将软件和硬件产品视为服务。这些服务提供对底层资源的访问。[Google Cloud 提供的服务列表](https://cloud.google.com/products) 很长，并且还在不断增长。当您在 Google Cloud 上开发网站或应用程序时，您可以将这些服务组合成满足您基础设施需求的组合，然后添加您的代码以实现您想要构建的场景。

### 什么是 Google Cloud Platform？

[Google Cloud Platform (GCP)](https://console.cloud.google.com/) 是一组云计算服务的集合。通过一系列管理工具，它提供了一系列模块化的云服务，包括计算、数据存储、数据分析和机器学习。它提供基础设施即服务 (IaaS)、平台即服务 (PaaS) 和无服务器计算环境。

### 什么是 Google Cloud IoT Core？

[Google Cloud Internet of Things (IoT) Core](https://cloud.google.com/iot/docs) 是一项完全托管的服务，用于安全地连接和管理 IoT 设备，从少量设备到数百万台设备。它可以从连接的设备中摄取数据，并构建与 Google Cloud Platform 的其他大数据服务集成的丰富应用程序。

### 什么是 Google Cloud Console？

[Google Cloud Console](https://console.cloud.google.com/) 提供了一个基于 Web 的图形用户界面，您可以使用它来管理 Google Cloud Platform 的资源。在使用 Cloud Console 时，您可以创建一个新项目或选择一个现有项目，并在该项目的上下文中使用您创建的资源。您可以创建多个项目，因此可以根据自己的需求使用项目来分隔工作。例如，如果您希望确保只有某些团队成员可以访问某个项目中的资源，而所有团队成员都可以继续访问另一个项目中的资源，则可以启动一个新项目。

## 将 Wio Terminal 连接到 Google Cloud IoT Core（通过 MQTT）

如前所述，我们将使用可用的 MQTT 桥接来实现 Wio Terminal 与 Google Cloud IoT Core 之间的通信。不过，如果需要，也可以使用 HTTP 桥接。

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png" alt="pir" width={600} height="auto" /></p>

### Google Cloud 控制台设置

首先，我们需要访问 Google Cloud 控制台，创建一个 Cloud IoT Core 设备注册表并注册一个设备。

#### 初始设置

- **步骤 1：** 访问 [此处](https://console.cloud.google.com/) 创建一个新项目

**注意：** 如果提示，请登录您的 Google 账户

- **步骤 2：** 点击 **选择项目** 菜单

- **步骤 3：** 点击 **新建项目** 并输入一个 **项目名称**

- **步骤 4：** 点击 **创建**

- **步骤 5：** 为您的云项目启用计费。这是为了确保您不是机器人，并且不会被收费。在导航菜单中选择“计费”，并完成设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/1111111.png" alt="pir" width={500} height="auto" /></p>

- **步骤 6：** 访问 [此处](https://console.cloud.google.com/flows/enableapi?apiid=cloudiot.googleapis.com%2Cpubsub&authuser=3&_ga=2.254170561.853675115.1607885458-878786893.1606048800) 启用 Cloud IoT Core 和 Cloud Pub/Sub API

**注意：** 从下拉菜单中选择您之前创建的项目

#### 创建设备注册表

- **步骤 1：** 访问 Cloud 控制台中的 [Google Cloud IoT Core 页面](https://console.cloud.google.com/iot/registries)

- **步骤 2：** 点击 **创建注册表**

- **步骤 3：** 输入一个 **注册表 ID**

**注意：** 这是您的注册表名称

- **步骤 4：** 选择一个 **区域**

**注意：** 如果您在美国，请选择 us-central1 作为区域。如果您在美国以外，请选择您首选的区域。

- **步骤 5：** 在 **选择一个 Cloud Pub/Sub 主题** 下拉列表中，选择 **创建主题** 并输入您首选的 **主题 ID**

- **步骤 6：** 点击 **创建主题**

- **步骤 7：** 点击 **显示高级选项**

- **步骤 8：** **设备状态主题** 和 **证书值** 字段是可选的，因此保持为空

- **步骤 9：** 为 **协议** 选择 **MQTT**

- **步骤 10：** 在 Cloud IoT Core 页面上点击 **创建**

现在我们已经创建了一个设备注册表，并为发布设备遥测事件创建了一个 Cloud Pub/Sub 主题。

#### 生成设备密钥对（EC 密钥）

Cloud IoT Core 使用公钥（或非对称）认证。

- 设备使用私钥签署 [JSON Web Token (JWT)](https://cloud.google.com/iot/docs/how-tos/credentials/jwts)。该令牌作为设备身份的证明传递给 Cloud IoT Core。
- 服务使用设备的公钥（在发送 JWT 之前上传）来验证设备的身份。

Cloud IoT Core 支持 RSA 和椭圆曲线算法，在本教程中我们将使用椭圆曲线密钥。

- **步骤 1：** 在您的电脑上创建一个新文件夹

- **步骤 2：** 从终端窗口导航到该文件夹，并输入以下命令以生成 P-256 椭圆曲线密钥对

```sh
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

**注意：** 请确保通过 [此链接](https://slproweb.com/products/Win32OpenSSL.html) 安装 **openssl**，并将目录位置添加到 PATH。

上述命令将创建以下公钥/私钥对：

- **ec_private.pem**：必须安全存储在设备上的私钥，用于签署认证 JWT。
- **ec_public.pem**：必须存储在 Cloud IoT Core 中的公钥，用于验证认证 JWT 的签名。

#### 提取私钥

我们需要提取私钥字节，并将其复制到稍后将在本教程中创建的 Arduino 项目中的私钥字符串中。现在保存这些密钥以备后用。

- **步骤 1：** 打开一个终端窗口，导航到我们之前生成椭圆曲线密钥对的文件夹。

- **步骤 2：** 输入以下命令

```sh
openssl ec -in ec_private.pem -noout -text
```

- **步骤 3：** 将生成的私钥字节（位于 **priv:** 下）复制并粘贴到记事本中保存，以备后用。

#### 将设备添加到注册表

- **步骤 1：** 访问 [注册表页面](https://console.cloud.google.com/iot/registries)，并选择您之前创建的注册表

- **步骤 2：** 选择 **设备** 标签并点击 **创建设备**

- **步骤 3：** 输入一个 **设备 ID**

- **步骤 4：** **设备元数据** 字段是可选的，因此保持为空

- **步骤 5：** 点击 **通信、云日志记录、认证** 下拉菜单

- **步骤 6：** 为 **设备通信** 选择 **允许**

- **步骤 7：** 在 **认证** 字段中，在 **输入方法** 下选择 **上传**

- **步骤 8：** 从 **公钥格式** 下拉菜单中选择 **ES256**

- **步骤 9：** 在 **公钥值** 下，点击 **浏览** 按钮，导航到我们之前创建的 **椭圆曲线密钥对** 文件夹，并选择 **ec_public.pem**

- **步骤 10：** 点击 **创建**

现在您已将设备添加到注册表中。设备的 ES256 密钥会显示在设备的详细信息页面上。

#### 设置订阅者

现在我们已经创建了一个设备注册表、一个主题并将设备添加到该注册表中，接下来我们将创建一个订阅者，以订阅我们创建的主题，从而获取来自 Wio Terminal 的遥测数据。

- **步骤 1：** 在 Google Cloud 控制台的搜索栏中输入 **Pub**，并从结果中选择 **Pub/Sub**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/333333.png" alt="pir" width={700} height="auto" /></p>

- **步骤 2：** 点击导航菜单中的 **订阅**

- **步骤 3：** 点击 **CREATE SUBSCRIPTION（创建订阅）**

- **步骤 4：** 输入一个您选择的 **Subscription ID（订阅 ID）**

- **步骤 5：** 从 **Select a Cloud Pub/Sub topic（选择一个 Cloud Pub/Sub 主题）** 下拉菜单中选择我们之前创建的 **Pub/Sub topic（主题）**

- **步骤 6：** 选择 **Pull** 作为交付类型

- **步骤 7：** 点击 **Create（创建）**

现在我们已经完成了 Google Cloud IoT Core 的设置。接下来，我们将开始设置 Wio Terminal 和 Arduino IDE。

### 使用 Arduino 设置 Wio Terminal

#### 所需库

本教程需要两个库。

1. lwMQTT MQTT Arduino 库
2. Google Cloud IoT Arduino 库

下载这些库的步骤如下：

- **步骤 1：** 打开 Arduino IDE
- **步骤 2：** 导航到 `Sketch > Include Library > Manage Libraries`
- **步骤 3：** 在搜索框中输入 **lwMQTT** 和 **Google Cloud IoT** 并安装这些库

#### 配置凭据和账户信息

现在我们需要在 **ciotc_config.h** 文件中设置 Wi-Fi 凭据和 Google Cloud IoT Core 信息。

- **步骤 1：** 在 Arduino IDE 中，导航到 `File > Examples > Google Cloud IoT JWT > Esp32-lwmqtt`

- **步骤 2：** 打开 **ciotc_config.h**

- **步骤 3：** 修改 **Wi-Fi 网络详情**

```cpp
const char *ssid = "Enter_SSID";
const char *password = "Enter_Password";
```

- **步骤 4：** 修改 **Google Cloud IoT 详情**

```cpp
const char *project_id = "Enter_Project_ID";
const char *location = "Enter_location";
const char *registry_id = "Enter_Registry_ID";
const char *device_id = "Enter_Device_ID";
```

- **步骤 5：** 复制我们之前从 **ec_private.pem** 文件中获取并保存到记事本中的私钥字节

```cpp
const char *private_key_str =
    "6e:b8:17:35:c7:fc:6b:d7:a9:cb:cb:49:7f:a0:67:"
    "63:38:b0:90:57:57:e0:c0:9a:e8:6f:06:0c:d9:ee:"
    "31:41";
```

**注意：** 密钥长度应为 32 对十六进制数字。

#### 修改 NTP 时间方法

打开 **esp32-mqtt.h** 文件，并用以下代码替换整个文件。在这里，我们用通过 UDP 获取 NTP 时间的实现替换了 configTime 函数。

```cpp
#include <Client.h>
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

#include <MQTT.h>

#include <CloudIoTCore.h>
#include <CloudIoTCoreMqtt.h>
#include "ciotc_config.h" // 更新此文件以包含您的配置

// !!REPLACEME!!
// MQTT 的回调函数，用于命令和配置更新
// 在此处放置您的消息处理代码。
void messageReceived(String &topic, String &payload){
  Serial.println("incoming: " + topic + " - " + payload);
}
///////////////////////////////

// 初始化此板的 WiFi 和 MQTT
//Client *netClient;
CloudIoTCoreDevice *device;
CloudIoTCoreMqtt *mqtt;
MQTTClient *mqttClient;
unsigned long iat = 0;
String jwt;
WiFiUDP udp;

unsigned int localPort = 2390;
unsigned long devicetime;
const int NTP_PACKET_SIZE = 48; // NTP 时间戳在消息的前 48 个字节中
byte packetBuffer[NTP_PACKET_SIZE]; // 用于存储传入和传出数据包的缓冲区

// 向给定地址的时间服务器发送 NTP 请求
unsigned long sendNTPpacket(const char* address) {
    // 将缓冲区中的所有字节设置为 0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // 初始化形成 NTP 请求所需的值
    packetBuffer[0] = 0b11100011;   // LI、版本、模式
    packetBuffer[1] = 0;     // 层级或时钟类型
    packetBuffer[2] = 6;     // 轮询间隔
    packetBuffer[3] = 0xEC;  // 对等时钟精度
    // 根延迟和根分散的 8 个字节为零
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // 所有 NTP 字段都已赋值，现在可以发送请求时间戳的数据包：
    udp.beginPacket(address, 123); // NTP 请求发送到端口 123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

unsigned long getNTPtime() {

    // 模块返回一个无符号长整型时间值，表示自 1970 年 1 月 1 日以来的秒数
    // 如果遇到问题，则返回 0

    // 仅在连接时发送数据
    if (WiFi.status() == WL_CONNECTED) {
        // 初始化 UDP 状态
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(ntp_primary); // 向时间服务器发送 NTP 数据包
        // 等待是否有回复
        delay(1000);
        if (udp.parsePacket()) {
            udp.read(packetBuffer, NTP_PACKET_SIZE); // 将数据包读入缓冲区

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            const unsigned long seventyYears = 2208988800UL;
            unsigned long epoch = secsSince1900 - seventyYears;

            long tzOffset = 0UL;
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            udp.stop();
            return 0; // 0 表示失败
        }
        udp.stop();
    }
    else {
        return 0;
    }

}

///////////////////////////////
// 此板特定的辅助函数
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
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED){
    delay(100);
  }

  Serial.println("Waiting on time sync...");
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
// 协调前面代码中的各种方法。
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
  mqttClient = new MQTTClient(512);
  mqttClient->setOptions(180, true, 1000); // keepAlive, cleanSession, timeout
  mqtt = new CloudIoTCoreMqtt(mqttClient, &netClient, device);
  mqtt->setUseLts(true);
  mqtt->startMQTT();
}
```

#### 在 Esp32-lwmqtt.ino 中添加宏定义

在 **Esp32-lwmqtt.ino** 文件中为 Wio Terminal 板添加宏定义：

```cpp
#if defined(ESP32) || defined(WIO_TERMINAL)
#define __ESP32_MQTT_H__
#endif
```

现在我们已经完成了 Arduino IDE 的设置。最后，您需要将此代码上传到 Wio Terminal。打开串口监视器，您将看到如下所示的输出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/4444444.png" alt="pir" width={700} height="auto" /></p>

### 显示遥测数据

现在我们需要显示来自 Wio Terminal 的传入遥测数据。在此示例代码中，Wi-Fi 信号强度将作为遥测数据发送。

- **步骤 1：** 访问 Google Cloud Console 中的 **Pub/Sub**

**注意：** 您可以在 Google Cloud Console 的搜索栏中搜索 **Pub**

- **步骤 2：** 在导航菜单中进入 **Subscriptions**

- **步骤 3：** 选择我们之前创建的订阅 ID

- **步骤 4：** 点击 **VIEW MESSAGES**

- **步骤 5：** 点击 **PULL**，您将看到如下所示的传入遥测数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/6666666.png" alt="pir" width={950} height="auto" /></p>

### 如何添加其他传感器？

您可以将任何传感器添加到 Wio Terminal，并将遥测数据发送到 Google Cloud IoT Core。为了简单起见，我们将使用 Wio Terminal 的内置光传感器，将光强度数据发送到 Google Cloud IoT Core。

#### Google Cloud IoT 设置

- **步骤 1：** 访问 Google Cloud Console 中的 **IoT Core**

**注意：** 您可以在 Google Cloud Console 的搜索栏中搜索 **IoT Core**

- **步骤 2：** 选择我们之前创建的注册表

- **步骤 3：** 在 **Cloud Pub/Sub topics** 下选择 **Add or edit topics**

- **步骤 4：** 点击 **ADD ADDITIONAL TOPIC**

- **步骤 5：** 在 **Select a Cloud Pub/Sub topic** 的下拉菜单中点击 **CREATE A TOPIC**

- **步骤 6：** 输入 **Topic ID** 并点击 **CREATE TOPIC**

- **步骤 7：** 在 **Subfolder** 列中输入 **Subfolder name**

**注意：** 子文件夹名称将在 Arduino 代码中用于与主题关联

- **步骤 8：** 点击 **UPDATE**

- **步骤 9：** 按照之前的说明创建一个 **新订阅**

#### Arduino 设置

导航到 **Esp32-lwmqtt.ino** 并添加以下内容：

- **步骤 1：** 在循环后，为内置光传感器添加以下内容：

```cpp
void loop() {
  int light = analogRead(WIO_LIGHT); // 分配变量以存储光传感器值
  light = map(light, 0, 1023, 0, 100); // 映射传感器值
```

- **步骤 2：** 添加带有子文件夹名称的主题：

```cpp
    publishTelemetry(getDefaultSensor());
    publishTelemetry("/light", String(light));
```

**注意：** 如果未添加子文件夹名称，遥测数据将发送到默认主题。在这种情况下，如前所述的 Wi-Fi 信号强度遥测数据将发送到我们之前创建的第一个主题，即默认主题。

将代码上传到 Wio Terminal 后，从新创建的主题中作为订阅者拉取数据，您将看到如下结果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/222222.png" alt="pir" width={950} height="auto" /></p>

### 如何添加其他传感器并在仪表板上可视化数据？

尽管 Google Cloud IoT Core 不提供现成的仪表板来可视化传感器数据，但我们将通过使用 InfluxDB 和 Grafana 来实现这一目标。

[InfluxDB](https://www.influxdata.com/) 是一个时间序列数据库，其中每条数据都与特定的时间戳相关联，显示与特定数据相关的日期和时间。而 [Grafana](https://grafana.com/) 是一个开源解决方案，用于运行数据分析、提取有意义的指标，并通过可定制的仪表板监控应用程序。

基本上，我们将连接一个温度/湿度传感器到 Wio Terminal，使用 Google Cloud Function 将数据从 Pub/Sub 传输到位于 GKE（Google Kubernetes Engine）集群中的 InfluxDB，并使用交互式仪表板在 Grafana 上显示来自 InfluxDB 的数据。

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" alt="pir" width={600} height="auto" /></p>

#### Arduino 硬件设置

将 Grove - 温湿度传感器 (DHT11) 连接到 Wio Terminal 的 Grove - 数字/模拟端口 (D0)。

#### Arduino 软件设置

- **步骤 1：** 访问 [Grove - 温湿度传感器仓库](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) 并将其下载为 zip 文件

- **步骤 2：** 打开 Arduino，导航到 `Sketch > Include Library > Add .ZIP Library`，选择下载的库以安装

导航到之前使用的 **Esp32-lwmqtt.ino** 并添加以下内容：

- **步骤 1：** 在 **#include "esp32-mqtt.h"** 之后添加以下内容：

```cpp
#include "DHT.h" // DHT 库

#define DHTPIN 0 // 定义 DHT 的信号引脚
#define DHTTYPE DHT11 // 定义 DHT 传感器类型
DHT dht(DHTPIN, DHTTYPE); // 初始化 DHT 传感器
```

- **步骤 2：** 在 **setup** 中添加以下内容以启动 DHT 传感器：

```cpp
dht.begin();
```

- **步骤 3：** 在 **void loop()** 的 **if 循环** 中添加以下内容：

```cpp
int temperature = dht.readTemperature(); // 分配变量以存储温度
int humidity = dht.readHumidity(); // 分配变量以存储湿度

String payload = String("{\"timestamp\":") + getNTPtime() +
                  String(",\"temperature\":") + temperature +
                  String(",\"humidity\":") + humidity +
                  String("}");
publishTelemetry(payload);
```

**注意：** 在将所有数据解析为字符串并存入 InfluxDB 时，解析 **时间** 非常重要，因为 InfluxDB 是一个时间序列数据库。此外，**pushTelemetry** 函数会将数据发送到我们在本教程开头创建的默认主题。

- **步骤 4：** 将代码上传到 Wio Terminal

#### Google Cloud IoT 设置

- **步骤 1：** 访问 [此处](https://github.com/lakshanthad/esp32-cloud-iot-core-k8s) 的仓库并下载为 zip 文件

- **步骤 2：** 解压下载的 zip 文件

- **步骤 3：** 打开 Google Cloud 控制台并导航到 [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes/list)，等待系统初始化

- **步骤 4：** 点击右上角的按钮启动 Cloud Shell

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/cloud_shell_1.png" alt="pir" width={700} height="auto" /></p>

- **步骤 5：** 输入以下命令为 gcloud 命令行工具设置默认值

```sh
export ZONE=<enter_zone> # 例如 us-central1-a，参考 https://cloud.google.com/compute/docs/regions-zones/#available
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

- **步骤 7：** 输入以下命令创建一个用于存储 InfluxDB 和 Grafana 认证信息的密钥

```sh
kubectl create secret generic influxdb-grafana \
  --from-literal=influxdb-user=admin \
  --from-literal=influxdb-password=passw0rd \
  --from-literal=grafana-user=admin \
  --from-literal=grafana-password=passw0rd
```

**注意：** 你可以根据自己的喜好更改 InfluxDB 和 Grafana 的用户名和密码

- **步骤 8：** 点击 Google Shell 中的 **Open Editor**

- **步骤 9：** 将之前下载并解压的文件夹拖放到 **Cloud Shell Editor**

- **步骤 10：** 点击 **Open Terminal** 返回终端。输入以下命令导航到 **05-influxdb_grafana_k8s** 目录

```sh
cd esp32-cloud-iot-core-k8s-master/05-influxdb_grafana_k8s
```

- **步骤 11：** 输入以下命令将 InfluxDB 和 Grafana 部署到 Kubernetes

```sh
kubectl create -f k8s/
```

#### Grafana 设置

- **步骤 1：** 输入以下命令检查服务的外部 IP 和端口

```sh
kubectl get services
```

- **步骤 2：** 复制 Grafana 的外部 IP

- **步骤 3：** 访问 `http://<grafana service external ip>:3000`

**注意：** 将之前复制的 Grafana 外部 IP 粘贴到 `<grafana service external ip>`

- **步骤 4：** 使用之前设置的凭据登录 Grafana

- **步骤 5：** 点击齿轮图标并导航到 `Configuration > Data Sources`

- **步骤 6：** 点击 **Add data source** 并选择 **influxDB**

- **步骤 7：** 在 **URL** 字段中输入以下内容

```sh
http://influxdb:8086
```

- **步骤 8：** 在 **Database** 字段中输入以下内容并点击 **Save & Test**

```sh
iot
```

**注意：** 如果成功设置了 **InfluxDB** 数据源，你应该会看到消息 **Data source is working**

#### 创建 Google Cloud Function

现在我们需要创建一个 Google Cloud Function，将数据从 Pub/Sub 的主题传输到 InfluxDB，并通过 Grafana 的交互式仪表板显示 InfluxDB 中的数据。

- **步骤 1：** 返回 **Google Cloud Console** 并打开 **Cloud Shell**

- **步骤 2：** 输入以下命令启用 **Cloud Functions API**

```sh
gcloud services enable cloudfunctions.googleapis.com
```

- **步骤 3：** 输入以下命令导航到 **06-cloud_function** 目录

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **步骤 4：** 在 **vim 文本编辑器** 中打开 **main.py**

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **步骤 5：** 按下键盘上的 **i** 进入 **编辑模式**

- **步骤 6：** 修改 **_get_influxdb_client 函数** 中的 **InfluxDB 变量**（主机、端口、用户名、密码）

**注意：** 通过在 Cloud Shell 中输入以下命令并复制外部 IP 获取 InfluxDB 主机

```sh
kubectl get services
```

- **步骤 7：** 输入 **:wq** 保存文件

- **步骤 8：** 输入以下命令部署 **Cloud Function**

```sh
export PUBSUB_TOPIC="enter_topic-name>"
export REGION="enter_region" # https://cloud.google.com/functions/docs/locations
gcloud functions deploy iotcore_pubsub_to_influxdb --runtime python37 --trigger-topic $PUBSUB_TOPIC --region $REGION
```

#### 返回 Grafana 设置

- **步骤 1：** 打开 Grafana 并导航到 `Dashboards > Manage`

- **步骤 2：** 点击 **New Dashboard** 并点击 **Add new panel**

- **步骤 3：** 导航到 **Visualization** 并点击 **Graph**

- **步骤 4：** 在 **Query** 下的 **FROM** 标签中，点击 **select measurement** 并从下拉菜单中选择 **temperature**

- **步骤 5：** 点击 **+ Query** 并为 **humidity** 重复 **步骤 12**

- **步骤 6：** 根据你的喜好更改其他设置

- **步骤 7：** 点击 **Apply**

- **步骤 8：** 点击 **Add panel** 并 **Add new panel**

- **步骤 9：** 导航到 **Visualization** 并点击 **Gauge**

- **步骤 10：** 在 **Query** 下的 **FROM** 标签中，点击 **select measurement** 并从下拉菜单中选择 **temperature**

- **步骤 11：** 在 **Field** 标签下的 **Unit** 中，从下拉菜单中选择 `Temperature > Celcius`

- **步骤 12：** 在 **Min** 和 **Max** 中输入仪表的最小值和最大值

- **步骤 13：** 在 **Display name** 中输入 `Temperature`

- **步骤 14：** 按照 **步骤 15** 的方法为 **humidity** 重复操作

- **步骤 15：** 点击 **Apply**

现在你将在 Grafana 上看到创建的仪表板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/grafana_dash_1.png" alt="pir" width={900} height="auto" /></p>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>