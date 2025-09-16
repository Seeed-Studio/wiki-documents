---
description: 使用 XIAO ESP32C6 和传感器与 AWS IoT Core 实现能够进行异常检测的 AI 设备。
title: 为 XIAO ESP32C6 使用 AWS IoT Core 赋能 AI
keywords:
- xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32c6_aws_iot
last_update:
  date: 03/29/2024
  author: Citric
---

# 为 XIAO ESP32C6 使用 AWS IoT Core 赋能 AI

本 Wiki 作为部署先进物联网系统的综合指南，该系统利用 AWS 服务和 XIAO ESP32C6 微控制器的强大功能来监控和分析环境数据。从无缝收集传感器数据开始，本文档详细介绍了将这些信息传输并分别存储到 AWS IoT Core 和 AWS Analytics 的复杂过程。它深入探讨了如何利用 AWS Sagemaker 在正常环境模式下训练机器学习模型，强调了系统学习和适应其操作环境以提高效率的能力。

此外，本 Wiki 概述了使用 XIAO ESP32C6 实现实时异常检测的方法，这是一个关键组件，能够主动扫描偏离正常状态的情况并迅速触发警报。它涵盖了设置警报机制的端到端过程，该机制会通知利益相关者异常情况，确保及时关注和采取行动。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/0.jpg" style={{width:1000, height:'auto'}}/></div>

- [**将传感器数据捕获到 AWS IoT Core**](#capture-sensor-data-to-aws-iot-core)。
- [**使用 AWS Analytics 存储数据**](#store-the-data-using-aws-analytics)。
- [**使用 AWS Sagemaker 在正常环境中训练数据**](#use-aws-sagemaker-to-train-data-in-normal-environments)。
- [**XIAO ESP32C6 用于异常环境检测**](#xiao-esp32c6-for-abnormal-environment-detection)。
- [**异常状态消息通知**](#abnormal-status-message-notification)。

通过探索本 Wiki，用户将详细了解每个组件在创建智能、响应式和强大的环境监控系统中的作用，并获得配置和维护方面的实用见解。

## 所需材料

本示例将介绍如何使用 XIAO ESP32C6 与 Grove DHT20 温湿度传感器来完成 AWS IoT Core 的 SageMaker 任务。以下是完成此例程所需的所有硬件设备。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C6</th>
   <th>DHT20</th>
   <th>扩展板</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/extensionboard.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 将传感器数据捕获到 AWS IoT Core

我们利用与 XIAO ESP32C6 开发板连接的多种传感器来实时收集环境数据，并将其上传到 AWS IoT Core。这为我们提供了一种可靠且安全的方法来处理来自各种传感器的大量数据流。

要注册 AWS IoT Core 并创建一个名为"XIAO_ESP32C6"的设备，请按照以下步骤操作。请注意，此过程假设您已经拥有 Amazon Web Services 账户。如果没有，您需要在继续之前[创建一个](https://aws.amazon.com/)。

### 步骤 1. 创建设备

打开您的网络浏览器并导航到 [AWS 管理控制台](https://aws.amazon.com/console/)。使用您的 AWS 账户凭据登录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/1.png" style={{width:1000, height:'auto'}}/></div>

进入 AWS 管理控制台后，找到页面顶部的**服务**下拉菜单。在**服务**菜单中，点击 **IoT Core**。如果找不到，请使用顶部的搜索栏搜索 **IoT Core**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/2.png" style={{width:1000, height:'auto'}}/></div>

在 AWS IoT Core 仪表板中，点击左侧导航窗格中的**所有设备**以展开选项。点击**设备**。在"设备"页面的角落点击**创建设备**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/3.png" style={{width:1000, height:'auto'}}/></div>

选择**创建单个设备**以继续注册一个设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/5.png" style={{width:800, height:'auto'}}/></div>

在**创建设备**页面上，输入 **XIAO_ESP32C6** 作为您设备的名称。（可选）如果需要，您还可以为您的设备添加类型、组或属性。对于简单设置，您可以跳过这些选项。点击"下一步"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/6.png" style={{width:900, height:'auto'}}/></div>

您现在将进入**配置设备证书**页面。AWS IoT Core 要求设备使用证书进行安全通信。请选择**自动生成新证书（推荐）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/7.png" style={{width:1000, height:'auto'}}/></div>

在**将策略附加到证书**页面上，如果您没有策略，需要通过点击**创建策略**来创建一个。您将被带到一个新页面，在那里您可以创建一个定义设备权限的策略。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/8.png" style={{width:1000, height:'auto'}}/></div>

创建并命名您的策略后，通过选中策略名称旁边的复选框并点击**创建**，将其附加到您新创建的证书。

我们需要以下权限：

- **iot:Publish**
- **iot:Connect**
- **iot:Receive**
- **iot:Subscribe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/9.png" style={{width:1000, height:'auto'}}/></div>

注册设备后，您将被重定向到设备详细信息页面，在那里您可以查看设备的信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/10.png" style={{width:1000, height:'auto'}}/></div>

配置您的设备（在本例中为 XIAO_ESP32C6）以使用您在创建设备时下载的证书和私钥。您需要按照特定设备的说明来设置 AWS IoT SDK 并建立与 AWS IoT Core 的安全连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/11.png" style={{width:600, height:'auto'}}/></div>

一旦您的设备设置完成并连接到 AWS IoT Core，您就可以通过订阅主题、发布消息以及使用 AWS IoT Core 规则引擎来处理 IoT 数据与其进行交互。

请记住保持您的证书和密钥的机密性，并遵循安全最佳实践。AWS IoT Core 文档提供了设置和管理 IoT 设备的详细指南和教程。

### 步骤 2. 基于证书准备头文件

创建一个名为 **secrets.h** 的新头文件，并将以下代码模板粘贴到头文件中。

```cpp
#include <pgmspace.h>

#define SECRET
#define THINGNAME "DHTsensor"

const char WIFI_SSID[] = "YOUR_SSID";              //change this
const char WIFI_PASSWORD[] = "YOUR_PASSWORD";           //change this
const char AWS_IOT_ENDPOINT[] = "YOUR_AWS_IOT_ENDPOINT";       //change this

// Amazon Root CA 1
static const char AWS_CERT_CA[] PROGMEM = R"EOF(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----
)EOF";

// Device Certificate                                               //change this
static const char AWS_CERT_CRT[] PROGMEM = R"KEY(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----


)KEY";

// Device Private Key                                               //change this
static const char AWS_CERT_PRIVATE[] PROGMEM = R"KEY(
-----BEGIN RSA PRIVATE KEY-----

-----END RSA PRIVATE KEY-----


)KEY";
```

这个 C++ 代码模板专为连接到 Wi-Fi 网络并与 AWS IoT 服务通信的 IoT 设备而设计。该模板包含各种字符串的占位符，您需要用实际的凭据和证书替换这些占位符。以下是填写每个部分的方法：

1. **Wi-Fi 凭据**：
   - `WIFI_SSID`：将 `"YOUR_SSID"` 替换为您的 Wi-Fi 网络的 SSID（名称）。
   - `WIFI_PASSWORD`：将 `"YOUR_PASSWORD"` 替换为您的 Wi-Fi 网络密码。

2. **AWS IoT 端点**：
   - `AWS_IOT_ENDPOINT`：将 `"YOUR_AWS_IOT_ENDPOINT"` 替换为您唯一的 AWS IoT 端点。此端点特定于您的 AWS IoT 账户和区域。您可以在 AWS IoT 控制台的设置中找到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/12.png" style={{width:1000, height:'auto'}}/></div>

3. **Amazon Root CA 1（证书颁发机构）**：
   - `AWS_CERT_CA`：在 `-----BEGIN CERTIFICATE-----` 和 `-----END CERTIFICATE-----` 标记之间，粘贴 AWS 提供的完整 Amazon Root CA 1 证书。此证书允许您的设备信任服务器的身份。

4. **设备证书**：
   - `AWS_CERT_CRT`：将 `-----BEGIN CERTIFICATE-----` 和 `-----END CERTIFICATE-----` 之间的占位符替换为您设备的 PEM 格式证书。此证书对您的设备是唯一的，用于向 AWS IoT 验证您的设备身份。

5. **设备私钥**：
   - `AWS_CERT_PRIVATE`：在 `-----BEGIN RSA PRIVATE KEY-----` 和 `-----END RSA PRIVATE KEY-----` 标记之间，粘贴您设备的 PEM 格式私钥。此密钥必须保密，绝不应共享，因为它用于在与 AWS IoT 通信时证明您设备的身份。

:::caution
**Amazon Root CA 1** 对应于 **RSA 2048 bit key:Amazon Root CA 1** 下载文件信息。
**设备证书** 对应于 **设备证书** 下载文件信息。
**设备私钥** 对应于 **私钥文件** 下载文件信息。

由于此代码包含敏感信息，如 Wi-Fi 凭据和私钥，因此保持其安全至关重要。不要公开共享修改后的代码或将其提交到公共存储库。
:::

### 步骤 3. 为 XIAO ESP32C6 上传数据采集程序

请将 Grove DHT20 传感器连接到 XIAO ESP32C6 的 IIC 接口。如果您想要便利性，我们建议您购买 [Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)。

然后，请在 Arduino 中创建一个新项目并将其保存到本地。将我们在**步骤 2** 中创建的 **secrets.h** 文件复制到与 .ino 文件相同的目录中。然后，请将下面的代码上传到 XIAO ESP32C6，数据将根据您提供的 AWS 凭据通过 MQTT 发送到指定主题。

<details>
<summary>点击此处预览完整代码</summary>

```cpp
#include "secrets.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"
#include "Wire.h"

//DHT setup
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*Notice: The DHT10 and DHT20 is different from other DHT* sensor ,it uses i2c interface rather than one wire*/
/*So it doesn't require a pin.*/
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

//MQTT setup
#define AWS_IOT_PUBLISH_TOPIC   "xiao_esp32c6/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "xiao_esp32c6/sub"

//store temp and humi data
float h;
float t;

//network setup
WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void connectAWS()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
 
  Serial.println("Connecting to Wi-Fi");
 
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
 
  // Configure WiFiClientSecure to use the AWS IoT device credentials
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);
 
  // Connect to the MQTT broker on the AWS endpoint we defined earlier
  client.setServer(AWS_IOT_ENDPOINT, 8883);
 
  // Create a message handler
  client.setCallback(messageHandler);
 
  Serial.println("Connecting to AWS IOT");
 
  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(100);
  }
 
  if (!client.connected())
  {
    Serial.println("AWS IoT Timeout!");
    return;
  }
 
  // Subscribe to a topic
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);
 
  Serial.println("AWS IoT Connected!");
}

void publishMessage()
{
  StaticJsonDocument<200> doc;
  doc["humidity"] = h;
  doc["temperature"] = t;
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); // print to client
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}
 
void messageHandler(char* topic, byte* payload, unsigned int length)
{
  Serial.print("incoming: ");
  Serial.println(topic);
 
  StaticJsonDocument<200> doc;
  deserializeJson(doc, payload);
  const char* message = doc["message"];
  Serial.println(message);
}

void setup() {

    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();

    connectAWS();
    dht.begin();
}

void loop() {
    h = dht.readHumidity();
    t = dht.readTemperature();

    if (isnan(h) || isnan(t) )  // Check if any reads failed and exit early (to try again).
    {
      Serial.println(F("Failed to read from DHT sensor!"));
      return;
    }
  
    Serial.print(F("Humidity: "));
    Serial.print(h);
    Serial.print(F("%  Temperature: "));
    Serial.print(t);
    Serial.println(F("°C "));
  
    publishMessage();
    client.loop();
    delay(1000);
}
```

</details>

### 步骤 4. MQTT 测试客户端

在 AWS IoT Core 中，我们需要在 MQTT 测试客户端中订阅 XIAO ESP32C6 发布的主题，以确定传感器数据是否成功上传到目标 AWS 账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/13.png" style={{width:1000, height:'auto'}}/></div>

如果程序正常工作，您应该每 1 秒看到一组温度和湿度的数据消息。

```json
{
    "humidity": 58,
    "temperature": 23.6
}
```

## 使用 AWS 分析服务存储数据

收集到的数据随后被转发到 AWS 分析服务，该服务不仅存储原始数据，还为我们提供强大的数据处理和分析工具。这些工具帮助我们从收集的数据中提取有价值的见解。

### 步骤 5. 配置 AWS IoT Analytics

在 AWS 控制台中导航到 AWS IoT Analytics。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/14.png" style={{width:1000, height:'auto'}}/></div>

在 **AWS IoT Analytics 入门**中，填写新创建资源的名称并输入您的订阅主题。（例如，`xiao_esp32c6/pub`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/15.png" style={{width:1000, height:'auto'}}/></div>

等待一段时间（大约十分钟）让所有资源创建完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/16.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 6. 创建规则

回到 AWS IoT Core，在左侧菜单栏的**消息路由**下点击**规则**。点击**创建规则**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/17.png" style={{width:1000, height:'auto'}}/></div>

为您的规则提供一个名称和可选的描述，以帮助识别其用途。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/18.png" style={{width:1000, height:'auto'}}/></div>

使用 AWS IoT SQL 语法定义规则查询语句。此语句指定过滤和处理传入 MQTT 消息的条件。您可以使用通配符、函数和操作符来匹配特定主题、从消息负载中提取数据并应用转换。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/19.png" style={{width:1000, height:'auto'}}/></div>

选择您创建的 IoT Analytics 通道作为规则操作的目标。点击**创建角色**按钮。在控制台中，为角色提供一个名称，例如 **XIAO_ESP32C6_Role**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/21.png" style={{width:1000, height:'auto'}}/></div>

检查您的规则配置，然后点击"创建规则"按钮保存并激活规则。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/22.png" style={{width:1000, height:'auto'}}/></div>

规则创建后，它开始处理与定义的规则查询语句匹配的传入 MQTT 消息。每当规则被触发时，规则操作就会执行，允许您根据特定需求路由和处理数据。

您可以在 AWS IoT 中创建多个规则来处理不同的场景和数据处理需求。规则提供了一种灵活且可扩展的方式来将您的 IoT 设备与各种 AWS 服务集成，并构建强大的 IoT 应用程序。

### 步骤 7. 存储传感器数据流

导航到 AWS IoT Analytics 服务。在 AWS IoT Analytics 仪表板中，点击左侧边栏中的**数据集**选项。找到包含您要下载数据的数据集，点击其名称打开数据集详情页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/25.png" style={{width:1000, height:'auto'}}/></div>

在下载数据集内容之前，您需要手动触发数据集生成。选择**立即运行**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/26.png" style={{width:1000, height:'auto'}}/></div>

AWS IoT Analytics 将处理数据并根据指定的时间范围准备数据集内容。基于每秒报告一次传感器数据，我们建议在正常环境中数据收集时间至少大于或等于一小时。这确保了数据的准确性。

等待数据集生成完成。您可以在数据集详情页面中监控进度。一旦状态变为"SUCCEEDED"，数据集内容就准备好下载了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/28.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/23.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果 XIAO 的程序工作正常，但您在数据集中看不到任何数据信息，您可以右键点击数据集的标签页并在新的浏览器页面中打开它，这可能会解决您的问题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/27.png" style={{width:500, height:'auto'}}/></div>

在数据集详情页面中，您将看到有关数据集的信息，包括其名称、状态和最后更新时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/24.png" style={{width:1000, height:'auto'}}/></div>
:::

## 使用 AWS Sagemaker 在正常环境中训练数据

通过 AWS Sagemaker，我们训练机器学习模型来识别表明正常环境的模式。Sagemaker 提供了一个综合平台，促进机器学习模型的开发、训练和部署，实现环境数据的智能处理。

### 步骤 8. 创建新的笔记本实例

在 AWS 管理控制台中导航到 Amazon SageMaker 服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/29.png" style={{width:1000, height:'auto'}}/></div>

在 SageMaker 仪表板中点击 **Notebook instances**。点击 **Create notebook instance** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/30.png" style={{width:1000, height:'auto'}}/></div>

填写必要信息，如实例类型和 IAM 角色。确保 IAM 角色具有**访问存储数据的 S3 存储桶的必要权限**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/34.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/31.png" style={{width:1000, height:'auto'}}/></div>

一旦实例状态为 **InService**，通过点击 **Open Jupyter** 链接打开 Jupyter 笔记本界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/32.png" style={{width:1000, height:'auto'}}/></div>

打开后，我们选择 **conda_python3** 作为我们的代码环境。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/45.png" style={{width:1000, height:'auto'}}/></div>

然后，我们需要上传我们收集的数据集。这个数据集我们在**步骤 7**中已经下载到本地计算机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/46.png" style={{width:1000, height:'auto'}}/></div>

然后，我们可以在 Jupyter Notebook 中输入我们准备好的程序。或者您可以选择直接上传我们提供的程序。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Jupyter_Notebook.ipynb" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

运行程序的第一部分来检查您导入的收集数据是否正常。您可能需要将代码中的文件名更改为您的文件名。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/47.png" style={{width:600, height:'auto'}}/></div>

### 步骤 9：运行所有 Jupyter Notebook

S3 用于存储训练数据集、测试数据集、模型工件等。在 SageMaker 中，数据源通常来自 S3 存储桶。
模型保存：训练好的模型也保存在 S3 中，用于后续部署和推理。

然后，请复制第二个代码块并命名字段 **bucket_name**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/48.png" style={{width:600, height:'auto'}}/></div>

然后，只需逐一运行 Jupyter Notebook 中的代码块。

:::note
在 Jupyter Notebook 中有一些路径或名称需要在运行前进行如下修改。

1. **In[22]** 代码块中 **ENDPOINT_NAME** 的值是运行 **In[19]** 代码块后的结果。
2. 请将 **In[3]** 和 **In[10]** 代码块的 **bucket_name** 设置为相同名称。
3. 最后一个代码块的 **API_ENDPOINT**，请使用您自己的值。

:::

### 步骤 10. 配置 AWS Lambda

Lambda 可以用作 SageMaker 工作流的触发器。例如，当数据上传到 S3 时，它可以触发 Lambda 函数来启动 SageMaker 训练或处理作业。

登录 AWS 管理控制台并导航到 AWS Lambda 服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/37.png" style={{width:1000, height:'auto'}}/></div>

点击 **Create function** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/38.png" style={{width:1000, height:'auto'}}/></div>

选择 **Author from scratch** 选项。为您的 Lambda 函数提供一个名称，例如 **XIAO-ESP32C6-FUNCTION**。
选择所需的运行时 **Python3.9**。为您的 Lambda 函数选择执行角色。您可以创建新角色或使用现有角色。如果创建新角色，选择 **Create a new role with basic Lambda permissions**。点击 **Create function** 按钮创建您的 Lambda 函数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/39.png" style={{width:1000, height:'auto'}}/></div>

导航到 IAM（身份和访问管理）控制台。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

然后找到我们刚刚创建的 Lambda 函数的名称并点击它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

在 IAM 角色页面中，点击 **Attach policies** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

为策略提供一个名称，例如 **AmazonSageMakerFullAccess**。点击 **Add perminassions** 按钮来添加权限。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/43.png" style={{width:1000, height:'auto'}}/></div>

返回到 Lambda 函数配置页面。创建一个新的测试事件或使用现有的测试事件。使用测试事件调用 Lambda 函数以确保它成功运行。监控 Lambda 函数的执行日志和输出以验证其行为。

```
{"data": [62.93016434, 24.31583405]}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/44.png" style={{width:1000, height:'auto'}}/></div>

将[以下代码片段](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Lambda.ipynb)复制到**代码**中。

```python
#lambda function with sns
import boto3
import json

ENDPOINT_NAME = 'randomcutforest-2024-03-18-10-47-37-165'# your endpoint past here
runtime = boto3.client('runtime.sagemaker')
email_client = boto3.client('sns')

def lambda_handler(event, context):
    input = event['data']
    
    serialized_input = ','.join(map(str, input))

    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME, 
                                       ContentType='text/csv', 
                                       Body=serialized_input)

    result_str = response['Body'].read().decode()
    result_json = json.loads(result_str)
    inference = result_json['scores'][0]['score']
    
    try:
        if(inference>3):
            response_sns = email_client.publish(
                TopicArn='arn:aws:sns:us-east-1:381491976713:dhco2Topic2',# your sns topic past here
                Message='Enviroment data is abnormal',
                Subject='Enviroment Status'
            )
    except Exception as e:
        print(f"error: {e}")

    return inference
```

:::caution
请注意修改代码中的内容为您自己的内容。
:::

然后点击 **Deploy** 按钮。

### 其他注意事项

- 确保您拥有正确的 IAM 角色和策略，以便 SageMaker 能够访问 S3 中的数据。
- 考虑使用 SageMaker 的自动模型调优功能来找到模型的最佳版本。
- 跟踪成本，因为在 SageMaker 上训练模型和部署端点可能会根据所使用的计算资源产生大量费用。

始终查阅最新的 AWS 文档以获取详细说明和最佳实践，因为 AWS 服务的界面和功能会经常更新。

## 异常状态消息通知

检测到异常状态后，系统立即通过消息通知机制向维护人员发送警报，确保及时干预和采取必要行动。

### 步骤 11. 配置 Amazon SNS

导航到 Amazon SNS 服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/49.png" style={{width:1000, height:'auto'}}/></div>

点击 **Create topic** 按钮。为您的主题提供一个名称，例如 "XIAO_ESP32C6_Topic"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/50.png" style={{width:1000, height:'auto'}}/></div>

在 SNS 主题仪表板中，点击新创建的主题。点击 **Create subscription** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/51.png" style={{width:1000, height:'auto'}}/></div>

选择订阅的协议，如 "Email"、"SMS"、"HTTP/HTTPS"、"AWS Lambda" 或 "Amazon SQS"。

根据所选协议提供端点详细信息。例如：

- 对于电子邮件订阅，输入电子邮件地址。
- 对于短信订阅，输入电话号码。
- 对于 HTTP/HTTPS 订阅，输入 URL 端点。
- 对于 AWS Lambda 订阅，选择 Lambda 函数。
- 对于 Amazon SQS 订阅，选择 SQS 队列。

点击 **Create subscription** 按钮创建订阅。如果需要，重复步骤 2-5 向主题添加更多订阅。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/52.png" style={{width:1000, height:'auto'}}/></div>

然后我们回到 Lambda 的代码，将代码中的 **TopicArn** 字段替换为 **SNS 中的 ARN 字段**。

### 步骤 12. 为 Lambda 授予 SNS 权限

导航到 IAM（身份和访问管理）控制台。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

然后找到我们刚创建的 Lambda 函数名称并点击它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

在 IAM 角色页面中，点击 **Attach policies** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

为策略提供一个名称，例如 **AmazonSNSFullAccess**。点击 **Add perminassions** 按钮添加权限。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/53.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 13. 配置 API Gateway

在 AWS 管理控制台中导航到 Amazon API Gateway 服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/54.png" style={{width:1000, height:'auto'}}/></div>

点击 **Create API** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/55.png" style={{width:1000, height:'auto'}}/></div>

选择 **REST API** 作为 API 类型并点击 **Build**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/56.png" style={{width:1000, height:'auto'}}/></div>

为您的 API 提供一个名称，例如 "XIAO_ESP32C6_API"。为您的 API 选择 **Regional** 端点类型。点击 **Create API** 按钮创建您的 REST API。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/57.png" style={{width:1000, height:'auto'}}/></div>

在 API Gateway 仪表板中，选择您新创建的 API。选择 **Create Resource**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/58.png" style={{width:1000, height:'auto'}}/></div>

为您的资源提供一个名称，例如 "XIAO_ESP32C6_Resource"。点击 **Create Resource** 按钮创建资源。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/59.png" style={{width:1000, height:'auto'}}/></div>

选择新创建的资源，选择 **Create Method**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/60.png" style={{width:1000, height:'auto'}}/></div>

从下拉列表中选择 **POST** 作为 HTTP 方法。选择 **Lambda Function** 作为集成类型。选择您的 Lambda 函数所在的区域。输入您的 Lambda 函数名称，例如 "XIAO_ESP32C6_Function"。
点击 **Create method** 按钮保存集成设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/61.png" style={{width:1000, height:'auto'}}/></div>

点击 **Deploy API**。选择一个部署阶段（例如 "prod"、"dev"）或创建一个新的。如果需要，为部署提供描述。点击 "Deploy" 按钮部署您的 API。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/63.png" style={{width:500, height:'auto'}}/></div>

在 API Gateway 仪表板中，选择您的 API 并导航到"Stages"部分。展开部署阶段并点击您资源的 POST 方法。在 **Invoke URL** 部分，复制提供的 URL。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/64.png" style={{width:1000, height:'auto'}}/></div>

最后，复制并粘贴 [api_gateway 代码](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/api_gateway.ipynb) 到 SageMaker Jupyter Notebook 的末尾（创建一个新的代码片段），并将代码中的 **API_ENDPOINT** 字段替换为 **Invoke URL**。

## XIAO ESP32C6 用于异常环境检测

一旦建立了正常环境的数据模型，XIAO ESP32C6 就会持续监控传感器数据以检测任何潜在的异常。作为一个强大的微控制器，它能够在数据指示异常情况时快速响应。

### 步骤 14. 为 XIAO ESP32C6 上传实时数据报告程序

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/GetResult/GetResult.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

从下方获取程序并将代码中的 api 字段替换为您的。然后编译并上传到 XIAO ESP32C6。然后恭喜您，步骤已经进行到这一点，您已经成功完成了整个项目步骤。一旦环境中出现异常，您将收到由 AWS SNS 服务发送给您的警告邮件通知。

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
