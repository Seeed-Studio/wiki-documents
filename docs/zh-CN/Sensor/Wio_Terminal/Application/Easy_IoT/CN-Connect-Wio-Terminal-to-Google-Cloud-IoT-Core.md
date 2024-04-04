---
title: 将Wio Terminal连接到Google Cloud IoT Core
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/
slug: /cn/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core
last_update:
  date: 3/01/2024
  author: 金菊
---
# 将Wio Terminal连接到Google Cloud IoT Core

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

## 引言 
在本教程中，我们将带您逐步了解如何将Wio Terminal连接到Google Cloud IoT Core，并将来自Wio Terminal的遥测数据发送到Google Cloud IoT Core。这将分为两个部分，第一部分将介绍如何使用已预配置在代码中的令人兴奋的库发送遥测数据，而第二部分将介绍如何将自己的传感器添加到Wio Terminal，并将遥测数据发送到Google Cloud IoT Core。Google Cloud IoT Core支持HTTP和MQTT协议进行通信，但在本教程中，我们将使用MQTT协议。


### 什么是Google Cloud?
[Google Cloud](https://cloud.google.com/) 由一系列物理资产（如计算机和硬盘驱动器）和虚拟资源（如虚拟机）组成，这些资源位于全球各地的Google数据中心中。资源的分布提供了多个优势，包括在故障发生时的冗余备份和通过将资源靠近客户端来减少延迟。

在云计算中，您可能习惯将软件和硬件产品视为服务。这些服务提供对底层资源的访问。[Google Cloud提供的服务种类](https://cloud.google.com/products) 繁多，而且不断增长。当您在Google Cloud上开发您的网站或应用程序时，您可以将这些服务进行组合，以创建满足您需求的基础设施，并添加您的代码来实现您想要构建的场景。

### 什么是Google Cloud平台?
[Google Cloud 平台 (GCP)](https://console.cloud.google.com/)是一组云计算服务的集合。通过一系列管理工具，它提供了一系列模块化的云服务，包括计算、数据存储、数据分析和机器学习等。GCP提供基础设施即服务（IaaS）、平台即服务（PaaS）和无服务器计算环境。

### 什么是Google Cloud IoT Core?
[Google Cloud Internet of Things (IoT) Core](https://cloud.google.com/iot/docs) 是一个全面托管的服务，用于安全地连接和管理物联网设备，无论是几个还是数百万个设备。它可以接收来自连接设备的数据，并构建与Google Cloud Platform的其他大数据服务集成的丰富应用程序。

### 什么是Google Cloud Console?

[Google Cloud Console](https://console.cloud.google.com/) 提供了一个基于Web的图形用户界面，您可以使用它来管理Google Cloud Platform资源。当您使用Cloud Console时，您可以创建一个新项目或选择一个现有项目，并在该项目的上下文中使用您创建的资源。您可以创建多个项目，因此可以根据自己的需求将工作分隔开来。例如，如果您希望只有特定团队成员可以访问该项目中的资源，而所有团队成员仍可以访问另一个项目中的资源，那么您可以启动一个新项目。

## 将Wio Terminal通过MQTT连接到Google Cloud IoT Core

正如之前所解释的，我们将使用可用的MQTT桥来实现Wio Terminal与Google Cloud IoT Core之间的通信。然而，如果您有特定的要求，也可以使用HTTP桥接。

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png)

### Google Cloud Console 设置 

首先，我们需要访问Google Cloud Console，创建一个Cloud IoT Core设备注册表并注册设备。

#### 初始设置

- **步骤 1:** 访问 [此处](https://console.cloud.google.com/) 创建一个新项目

**注:** 如有提示，请使用您的Google账户登录

- **步骤 2:** 点击 **Select a project** 菜单

- **步骤 3:** 点击 **NEW PROJECT** 并输入一个 **项目名**

- **步骤 4:** 点击 **CREATE** 

- **步骤 5:** 为您的云项目启用计费。这是为了确保您不是机器人，并且不会产生费用。在导航菜单中选择"计费"，并按照设置进行操作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/1111111.png" alt="pir" width={500} height="auto" /></p>


- **步骤 6:** 访问 [此处](https://console.cloud.google.com/flows/enableapi?apiid=cloudiot.googleapis.com%2Cpubsub&authuser=3&_ga=2.254170561.853675115.1607885458-878786893.1606048800)启用Cloud IoT Core和Cloud Pub/Sub API

**注:** 从下拉菜单中选择您之前创建的项目

#### 创建设备注册表 

- **步骤 1:** 在Cloud控制台中访问 [Google Cloud IoT Core页面](https://console.cloud.google.com/iot/registries) 

- **步骤 2:** 点击 **Create Registry**

- **步骤 3:** 输入一个 **registry ID**

**注:** 这是您注册表的名称

- **步骤 4:** 选择一个 **Region**

**注:**  如果您在美国，请选择us-central1作为区域。如果您在美国以外，请选择您首选的区域。

- **步骤 5:** 在 **Select a Cloud Pub/Sub topic** 的下拉列表中, 选择 **Create a topic** 并输入您首选的 **Topic ID**

- **步骤 6:** 点击 **CREATE TOPIC**

- **步骤 7:** 点击 **SHOW ADVANCED OPTIONS**

- **步骤 8:**  **Device state topic** 和 **Certificate value** 字段是可选的，所以留空即可

- **步骤 9:** 选择 **MQTT** 作为 **Protocol**

- **步骤 10:** 在Cloud IoT Core页面上点击 **Create** 

现在我们已经创建了一个带有Cloud Pub/Sub主题的设备注册表，用于发布设备遥测事件。

#### 生成设备密钥对 (EC Keys)

Cloud IoT Core使用公钥（或非对称）身份验证：

- 设备使用私钥对 [JSON Web Token (JWT)](https://cloud.google.com/iot/docs/how-tos/credentials/jwts)进行签名。该令牌作为设备身份的证明传递给Cloud IoT Core。 
- 服务使用设备的公钥（在发送JWT之前上传）来验证设备的身份。

Cloud IoT Core支持RSA和椭圆曲线算法，本教程将使用椭圆曲线密钥。

- **步骤 1:** 在您的计算机上创建一个新文件夹。

- **步骤 2:** 从终端窗口导航到该文件夹，并输入以下命令生成P-256椭圆曲线密钥对：

```sh
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

**注:**  确保按照  [此链接](https://slproweb.com/products/Win32OpenSSL.html) 安装**openssl** 并将其目录位置添加到PATH中。

上述命令将生成以下公钥/私钥对：

- **ec_private.pem**: 私钥，必须安全存储在设备上，并用于对身份验证JWT进行签名。
- **ec_public.pem**: 公钥，必须存储在Cloud IoT Core中，并用于验证身份验证JWT的签名。

#### 提取私钥 

我们需要提取私钥的字节并将其复制到稍后在本教程中创建的Arduino项目的私钥字符串中。暂时保存这些密钥以备后用。

- **步骤 1:** 打开一个终端窗口，并导航到包含我们之前生成的椭圆曲线密钥对的文件夹。 

- **步骤 2:** 输入以下命令

```sh
openssl ec -in ec_private.pem -noout -text
```

- **步骤 3:** 将生成的私钥字节（在 **priv:** 下方）复制并粘贴到记事本中，并保存以备后用。

#### 将设备添加到注册表

- **步骤 1:** 访问 [Registries page](https://console.cloud.google.com/iot/registries) 并选择之前创建的注册表

- **步骤 2:** 选择 **Devices** 设备选项卡，然后点击 **CREATE A DEVICE**

- **步骤 3:** 输入一个 **Device ID**

- **步骤 4:**  **Device metadata** 字段是可选的，所以留空即可

- **步骤 5:** 点击 **COMMUNICATION, CLOUD LOGGING, AUTHENTICATION** 下拉菜单 

- **步骤 6:** 为  **Device communication**选择**Allow**

- **步骤 7:** 在 **Authentication** 身份验证字段中，在 **Input method**输入方法下拉菜单中, 选择 **Upload**

- **步骤 8:** 在**Public key format**公钥格式下拉菜单中选择 **ES256** 

- **步骤 9:** 在**Public key value**公钥值下方，点击 **BROWSE** 浏览按钮，导航到我们之前创建的**Elliptic Curve key pair** 并选择 **ec_public.pem**

- **步骤 10:** 点击 **Create**

现在您已将设备添加到注册表中。ES256密钥将显示在设备详细信息页面上。

#### 设置订阅者 

现在我们已经创建了设备注册表、创建了一个主题并将设备添加到该注册表中，接下来让我们继续创建一个订阅者，以订阅我们创建的主题，以便从Wio Terminal获取遥测数据。

- **步骤 1:** 在Google Cloud控制台的搜索栏中输入 **Pub** 然后从结果中选择 **Pub/Sub** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/333333.png" alt="pir" width={700} height="auto" /></p>

- **步骤 2:** 在导航栏点击 **Subscriptions** 

- **步骤 3:** 点击 **CREATE SUBSCRIPTION** 

- **步骤 4:** 输入您选择的 **Subscription ID** 

- **步骤 5:** 从**Select a Cloud Pub/Sub topic**下拉菜单中选择我们之前创建的 **Pub/Sub topic** 

- **步骤 6:** 将传递方式设置为 **Pull** 

- **步骤 7:** 点击 **Create** 

现在我们已经完成了Google Cloud IoT Core的设置。接下来，我们将继续设置Wio Terminal和Arduino IDE。

### 使用Arduino设置Wio Terminal 

#### 所需库 

我们需要两个库来完成本教程。 
1. lwMQTT MQTT Arduino 库
2. Google Cloud IoT Arduino 库

下载这些库:

- **步骤 1:** 打开 Arduino IDE
- **步骤 2:** 导航到 `Sketch > Include Library > Manage Libraries`
- **步骤 3:** 在搜索框中键入 **lwMQTT** 和 **Google Cloud IoT** 然后安装这些库

#### 配置凭据和帐户信息

现在我们需要在 **ciotc_config.h**文件中设置Wi-Fi凭据和Google Cloud IoT Core信息。

- **步骤 1:** 在Arduino IDE中，选择 `File > Examples > Google Cloud IoT JWT > Esp32-lwmqtt`

- **步骤 2:** 导航到 **ciotc_config.h**

- **步骤 3:** 更改 **Wifi network details**

```c++
const char *ssid = "Enter_SSID";
const char *password = "Enter_Password";
```

- **步骤 4:** 更改 **Google Cloud IoT details**

```c++
const char *project_id = "Enter_Project_ID";
const char *location = "Enter_location";
const char *registry_id = "Enter_Registry_ID";
const char *device_id = "Enter_Device_ID";
```

- **步骤 5:** 将我们从 **ec_private.pem** 中获取的私钥字节复制到记事本中保存的位置

```c++
const char *private_key_str =
    "6e:b8:17:35:c7:fc:6b:d7:a9:cb:cb:49:7f:a0:67:"
    "63:38:b0:90:57:57:e0:c0:9a:e8:6f:06:0c:d9:ee:"
    "31:41";
```

**注:** 密钥长度应为32对十六进制数字

#### 更改NTP时间方法

打开 **esp32-mqtt.h** 文件，并用以下代码替换整个文件。这里我们使用通过UDP获取NTP时间的实现替换了configTime函数。

```c++
#include <Client.h>
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

#include <MQTT.h>

#include <CloudIoTCore.h>
#include <CloudIoTCoreMqtt.h>
#include "ciotc_config.h" // Update this file with your configuration

// !!REPLACEME!!
// The MQTT callback function for commands and configuration updates
// Place your message handler code here.
void messageReceived(String &topic, String &payload){
  Serial.println("incoming: " + topic + " - " + payload);
}
///////////////////////////////

// Initialize WiFi and MQTT for this board
//Client *netClient;
CloudIoTCoreDevice *device;
CloudIoTCoreMqtt *mqtt;
MQTTClient *mqttClient;
unsigned long iat = 0;
String jwt;
WiFiUDP udp;

unsigned int localPort = 2390;
unsigned long devicetime;
const int NTP_PACKET_SIZE = 48; // NTP time stamp is in the first 48 bytes of the message
byte packetBuffer[NTP_PACKET_SIZE]; //buffer to hold incoming and outgoing packets

// send an NTP request to the time server at the given address
unsigned long sendNTPpacket(const char* address) {
    // set all bytes in the buffer to 0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // Initialize values needed to form NTP request
    // (see URL above for details on the packets)
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // 8 bytes of zero for Root Delay & Root Dispersion
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // all NTP fields have been given values, now
    // you can send a packet requesting a timestamp:
    udp.beginPacket(address, 123); //NTP requests are to port 123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

unsigned long getNTPtime() {

    // module returns a unsigned long time valus as secs since Jan 1, 1970 
    // unix time or 0 if a problem encounted

    //only send data when connected
    if (WiFi.status() == WL_CONNECTED) {
        //initializes the UDP state
        //This initializes the transfer buffer
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(ntp_primary); // send an NTP packet to a time server
        // wait to see if a reply is available
        delay(1000);
        if (udp.parsePacket()) {
//            Serial.println("udp packet received");
//            Serial.println("");
            // We've received a packet, read the data from it
            udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer

            //the timestamp starts at byte 40 of the received packet and is four bytes,
            // or two words, long. First, extract the two words:

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // combine the four bytes (two words) into a long integer
            // this is NTP time (seconds since Jan 1 1900):
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix time starts on Jan 1 1970. In seconds, that's 2208988800:
            const unsigned long seventyYears = 2208988800UL;
            // subtract seventy years:
            unsigned long epoch = secsSince1900 - seventyYears;

            // adjust time for timezone offset in secs +/- from UTC
            // WA time offset from UTC is +8 hours (28,800 secs)
            // + East of GMT
            // - West of GMT
//            long tzOffset = 28800UL;
            long tzOffset = 0UL;

            // WA local time 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // were not able to parse the udp packet successfully
            // clear down the udp connection
            udp.stop();
            return 0; // zero indicates a failure
        }
        // not calling ntp time frequently, stop releases resources
        udp.stop();
    }
    else {
        // network not connected
        return 0;
    }

}

///////////////////////////////
// Helpers specific to this board
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
  // WiFi.setSleep(false); // May help with disconnect? Seems to have been removed from WiFi
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
// Orchestrates various methods from preceeding code.
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

#### 在Esp32-lwmqtt.ino文件中添加宏定义

在**Esp32-lwmqtt.ino**文件中，将Wio Terminal板添加到宏定义中。

```c++
#if defined(ESP32) || defined(WIO_TERMINAL)
#define __ESP32_MQTT_H__
#endif
```

现在我们已经完成了Arduino IDE的设置。最后，您需要将此代码上传到Wio Terminal。打开串行监视器，您将看到以下内容显示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/4444444.png" alt="pir" width={700} height="auto" /></p>



### 显示遥测数据

现在我们需要显示来自Wio Terminal的传入遥测数据。在这个示例代码中，Wi-Fi信号强度将作为遥测数据发送。


- **步骤 1:** 在Google Cloud控制台中访问 **Pub/Sub**

**注:** 您可以在Google Cloud控制台的搜索栏中搜索 **Pub** 

- **步骤 2:** 导航到导航菜单中的 **Subscriptions** 

- **步骤 3:** 选择我们之前创建的订阅ID

- **步骤 4:** 点击 **VIEW MESSAGES**

- **步骤 5:** C点击 **PULL** 您将看到传入的遥测数据如下所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/6666666.png" alt="pir" width={950} height="auto" /></p>



### 如何添加其他传感器？

您可以向Wio Terminal添加任何传感器，并将遥测数据发送到Google Cloud IoT Core。为了简单起见，我们将使用Wio Terminal上的内置光传感器将光强度级别发送到Google Cloud IoT Core。

#### Google Cloud IoT设置

- **步骤 1:** 在Google Cloud控制台中访问 **IoT Core** 

**注:** 您可以在Google Cloud控制台的搜索栏中搜索 **IoT Core** 

- **步骤 2:** 选择我们之前创建的注册表

- **步骤 3:** 在Cloud **Pub/Sub topics** 下选择 **Add or edit topics**

- **步骤 4:** 点击 **ADD ADDITIONAL TOPIC**

- **步骤 5:** 从   **Select a Cloud Pub/Sub topic**的下拉菜单中选择**CREATE A TOPIC**

- **步骤 6:** 输入一个 **Topic ID** 然后点击 **CREATE TOPIC**

- **步骤 7:** 在 **Subfolder** 列中输入一个**Subfolder name**

**注:** 子文件夹名称将用于与Arduino代码中的主题相关联

- **步骤 8:** 点击 **UPDATE**

- **步骤 9:** 创建一个 **new subscription** 如前所述



#### Arduino 设置

打开 **Esp32-lwmqtt.ino** 文件并按照以下步骤进行操作：

- **步骤 1:**  在循环结束后，添加以下代码以使用内置光传感器：

```c++
void loop() {
  int light = analogRead(WIO_LIGHT); //assign variable to store light sensor values 
  light = map(light,0,1023,0,100); //Map sensor values  
```

- **步骤 2:**  在代码中添加使用子文件夹名称的主题

```c++
    publishTelemetry(getDefaultSensor());
    publishTelemetry("/light",String(light));
```

**注:** 如果未添加子文件夹名称，遥测数据将被发送到默认主题。在这种情况下，如前所述，Wi-Fi信号强度的遥测数据将被发送到之前创建的第一个主题，即默认主题。

在将代码上传到Wio Terminal后，作为一个订阅者从新创建的主题中接收数据，您将会看到以下结果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/222222.png" alt="pir" width={950} height="auto" /></p>


### 如何将其他传感器添加到Wio Terminal并在仪表板上可视化数据？

虽然Google Cloud IoT Core没有提供用于可视化传感器数据的即用仪表板，但我们可以使用InfluxDB和Grafana来实现。

[InfluxDB](https://www.influxdata.com/) 是一个时间序列数据库，每个数据都与一个时间戳相关联，显示与该数据相关的日期和时间。而  [Grafana](https://grafana.com/)  则是一个用于运行数据分析、提取有意义的指标并通过可自定义的仪表板监控应用程序的开源解决方案。

基本上，我们将连接一个温湿度传感器到Wio Terminal，使用Google Cloud Function将来自Pub/Sub的数据传输到位于GKE（Google Kubernetes Engine）集群中的InfluxDB，并使用交互式仪表板在Grafana上显示来自InfluxDB的数据。

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

#### Arduino的硬件设置

将Grove - 温湿度传感器（DHT11）连接到Wio Terminal的Grove - 数字/模拟端口（D0）。

#### Arduino的软件设置 

- **步骤 1:** 访问 [Grove - Temperature and Humidity Sensor repo](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) 并将其下载为zip文件

- **步骤 2:** 打开 Arduino, 导航到 `Sketch > Include Library > Add .ZIP Library` 然后选择下载的库进行安装

在之前使用的 **Esp32-lwmqtt.ino** Esp32-lwmqtt.ino文件中，按照以下步骤进行操作：

- **步骤 1:** 在 **#include "esp32-mqtt.h"**之后添加以下代码：

```c++
#include "DHT.h" //DHT library

#define DHTPIN 0 //Define Signal Pin of DHT
#define DHTTYPE DHT11 //Define DHT Sensor Type
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor  
```

- **步骤 2:** 在 **setup** 函数中添加以下代码以启动DHT传感器

```c++
dht.begin(); 
```

- **步骤 3:**  在**void loop()**函数的**if loop**内部添加以下代码：

```c++
int temperature = dht.readTemperature(); //Assign variable to store temperature
int humidity = dht.readHumidity(); //Assign variable to store humidity

String payload = String("{\"timestamp\":") + getNTPtime() +
                  String(",\"temperature\":") temperature +
                  String(",\"humidity\":") + humidity +
                  String("}");
publishTelemetry(payload); 
```
**Note:** 在这里，我们将所有数据解析为字符串，并将其发送到InfluxDB。 **time** 非常重要，因为InfluxDB是一个时间序列数据库。此外， **pushTelemetry** 函数将会将数据发送到我们在本教程一开始创建的默认主题。

- **步骤 4:** 将代码上传到Wio Terminal

#### Google Cloud IoT 设置

- **步骤 1:** 访问 [此存储库](https://github.com/lakshanthad/esp32-cloud-iot-core-k8s) 并将其下载为zip文件

- **步骤 2:** 解压下载的zip文件 

- **步骤 3:** 打开Google Cloud控制台，并导航到 [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes/list) ，等待系统初始化

- **步骤 4:** 通过点击右上角的按钮启动 Cloud shell

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/cloud_shell_1.png" alt="pir" width={700} height="auto" /></p>


- **步骤 5:** 输入以下命令来设置gcloud命令行工具的默认值

```sh
export ZONE=<enter_zone> # e.g. us-central1-a, see https://cloud.google.com/compute/docs/regions-zones/#available
export PROJECT_ID=<enter_project-id> # project ID name 
gcloud config set project $PROJECT_ID
gcloud config set compute/zone $ZONE
```

- **步骤 6:** 输入以下命令来创建一个包含一个n1-standard-1节点的GKE集群

```sh
gcloud container clusters create influxdb-grafana \
                --num-nodes 1 \
                --machine-type n1-standard-1 \
                --zone $ZONE
```

- **步骤 7:** 输入以下命令来创建一个用于存储InfluxDB和Grafana身份验证信息的密钥

```sh
kubectl create secret generic influxdb-grafana \
  --from-literal=influxdb-user=admin \
  --from-literal=influxdb-password=passw0rd \
  --from-literal=grafana-user=admin \
  --from-literal=grafana-password=passw0rd
```

**注:** 您根据您的喜好更改InfluxDB和Grafana的用户名和密码

- **步骤 8:** 在Google Shell中点击 **Open Editor** 

- **步骤 9:** 将之前下载并解压的文件夹拖放到 **Cloud Shell Editor**中

- **步骤 10:** 点击 **Open Terminal** 返回到终端，通过输入以下命令导航到 **05-influxdb_grafana_k8s** 目录

```sh
cd esp32-cloud-iot-core-k8s-master/05-influxdb_grafana_k8s
```

- **步骤 11:** 输入以下命令将InfluxDB和Grafana部署到Kubernetes集群中

```sh
kubectl create -f k8s/
```
#### Grafana 设置

- **步骤 1:** 输入以下命令来检查服务的外部IP地址/端口

```sh
kubectl get services
```

- **步骤 2:** 复制Grafana的外部IP地址

- **步骤 3:** 在浏览器中访问 `http://<grafana service external ip>:3000`

**Note:** 将之前复制的Grafana外部IP粘贴到 `<grafana service external ip>`中

- **步骤 4:** 使用之前设置的凭据登录到Grafana

- **步骤 5:** 点击齿轮图标，导航到 `Configuration > Data Sources`

- **步骤 6:** 点击 **Add data source** 选择 **influxDB**

- **步骤 7:** 在 **URL** 字段中输入以下内容

```sh
http://influxdb:8086
```

- **步骤 8:** 在 **Database** 字段中输入以下内容，然后点击 **Save & Test**

```sh
iot
```

**注:** 如果成功在Grafana上设置了**InfluxDB**数据源，您将看到 **Data source is working**的消息

#### 创建一个Google Cloud函数

现在我们需要创建一个Google Cloud函数，将Pub/Sub上的主题数据传输到InfluxDB，并使用交互式仪表板在Grafana上显示InfluxDB中的数据。

- **步骤 1:** 返回到 **Google Cloud Console** 打开 **Cloud Shell**

- **步骤 2:** 输入以下命令来启用 **Cloud Functions API**

```sh
gcloud services enable cloudfunctions.googleapis.com
```

- **步骤 3:** 通过输入以下命令导航到 **06-cloud_function** 目录

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **步骤 4:**  使用 **vim文本编辑器** 打开 **main.py**

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **步骤 5:** 在键盘上按下 **i** 进入 **编辑模式**

- **步骤 6:** 修改**_get_influxdb_client function**中的 **InfluxDB variables** 主机、端口、用户名、密码）

**注:** 在Cloud Shell上输入以下命令以获取InfluxDB主机的外部IP地址，并将其复制

```sh
kubectl get services
```

- **步骤 7:** 输入 **:wq**来保存文件

- **步骤 8:** 输入以下命令来部署 **Cloud Function**  

```sh
export PUBSUB_TOPIC="enter_topic-name>"
export REGION="enter_region" # https://cloud.google.com/functions/docs/locations
gcloud functions deploy iotcore_pubsub_to_influxdb --runtime python37 --trigger-topic $PUBSUB_TOPIC --region $REGION
```

#### 返回Grafana设置

- **步骤 1:** 打开Grafana，导航到 `Dashboards > Manage`

- **步骤 2:** 点击 **New Dashboard** 然后点击 **Add new panel**

- **步骤 3:** 导航到 **Visualization** 点击 **Graph**

- **步骤 4:** 在 **Query**下, 在 **FROM** 选项卡中, 点击 **select measurement** 然后从下拉菜单中选择 **temperature** 

- **步骤 5:**  点击 **+ Query** 并重复 **step 12** 的步骤来选择 **humidity**

- **步骤 6:** 根据您的偏好更改其他设置

- **步骤 7:** 点击 **Apply**

- **步骤 8:** 点击 **Add panel** 然后点击 **Add new panel**

- **步骤 9:** 导航到 **Visualization** 点击 **Gauge**

- **步骤 10:** 在 **Query**下, 在 **FROM** 选项卡中，点击 **select measurement** 然后从下拉菜单中选择 **temperature** 

- **步骤 11:** 在 **Field** 选项卡中, 在 **Unit**, 下，从下拉菜单中选择 `Temperature > Celcius`

- **步骤 12:** 通过在 **Min** 和 **Max**中输入值为仪表设置最小和最大值

- **步骤 13:** 在 **Display name**下, 输入 `Temperature`

- **步骤 14:** 通过按照 **step 15**  重复相同的步骤 ，为**humidity**设置仪表

- **步骤 15:** 点击 **Apply**

现在您将在Grafana上看到创建的仪表板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/grafana_dash_1.png" alt="pir" width={900} height="auto" /></p>



## 技术支持 & 产品讨论

 如果您遇到任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/) 。
中。感谢您选择我们的产品！我们将为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
