---
description: 使用 Ubidots 进行开发
title: Ubidots 使用指南
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Getting_started_with_Ubidots
last_update:
  date: 2023/1/13
  author: shuxu hu
---
# 使用 Ubidots 进行开发

**Ubidots** 是一个系统集成商、物联网创业者和 OEM 厂商可以轻松构建物联网 (IoT) 应用程序和连接服务的平台，提供数据收集、分析和可视化工具。在套件的规划中，我们选择了 Ubidots 平台作为一种替代方案，无需使用 LoRaWAN®，您可以通过 Wio Terminal 自带的 WiFi 功能，通过 MQTT 协议将所需的传感器数据发送到 Ubidots 仪表板进行数据展示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/1.png" /></div>

在本章节中，我们将向您展示如何通过 Arduino 编程将传感器数据发送到 Ubidots。

## 前期准备

### 连接

SeseCAP - K1100 套件中的传感器可以通过 Grove 电缆连接到 Wio Terminal 下的 Grove 接口。下表描述了每个传感器连接的 Grove 接口的位置。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_ubidots/2.png" /></div>

<table align="center">
  <tbody><tr>
      <th align="center">传感器类型</th>
      <th align="center">通信协议</th>
      <th align="center">连接的 Grove 接口</th>
    </tr>
    <tr>
      <td align="center">Grove 温湿度传感器 (SHT40)</td>
      <td align="center">I2C</td>
      <td align="center">Wio Terminal <strong>左侧</strong> Grove 接口</td>
    </tr>
    <tr>
      <td align="center">Grove VOC 和 eCO2 气体传感器 (SGP30)</td>
      <td align="center">I2C</td>
      <td align="center">Wio Terminal <strong>左侧</strong> Grove 接口</td>
    </tr>
    <tr>
      <td align="center">Grove 视觉 AI 模块</td>
      <td align="center">I2C</td>
      <td align="center">Wio Terminal <strong>左侧</strong> Grove 接口</td>
    </tr>
    <tr>
      <td align="center">Grove 土壤湿度传感器</td>
      <td align="center">ADC</td>
      <td align="center">Wio Terminal <strong>右侧</strong> Grove 接口</td>
    </tr>
  </tbody></table>

### 软件准备

**步骤 1.** 您需要安装 Arduino 软件。

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**步骤 2.** 启动 Arduino 应用程序。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**步骤 3.** 将 Wio Terminal 添加到 Arduino IDE。

打开 Arduino IDE，点击 `文件 > 首选项`，并将以下 URL 复制到附加开发板管理器 URLs 中：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

点击 `工具 > 开发板 > 开发板管理器`，在开发板管理器中搜索 **Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**步骤 4.** 选择您的开发板和端口

您需要在 `工具 > 开发板` 菜单中选择与您的 Arduino 对应的条目，选择 **Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

从 `工具 -> 端口` 菜单中选择 Wio Terminal 开发板的串口设备。这通常是 COM3 或更高（COM1 和 COM2 通常保留给硬件串口）。要确认，可以断开 Wio Terminal 开发板并重新打开菜单；消失的条目应该是 Arduino 开发板。重新连接开发板并选择该串口。

:::tip
对于 Mac 用户，端口可能类似于 `/dev/cu.usbmodem141401`。
:::
如果您无法上传代码，大多数情况下是因为 Arduino IDE 无法将 Wio Terminal 切换到引导加载模式（可能是因为 MCU 停止运行或您的程序正在处理 USB）。解决方法是手动将 Wio Terminal 切换到引导加载模式。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**步骤 5.** 安装所需传感器的库

<table align="center">
  <tbody><tr>
      <th align="center">传感器类型</th>
      <th align="center">链接 1</th>
      <th align="center">链接 2</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal IMU 传感器</td>
      <td align="center"><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank">下载</a></td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td align="center">Grove 温湿度传感器 (SHT40)</td>
      <td align="center"><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank">下载</a></td>
      <td align="center"><a href="https://github.com/Sensirion/arduino-core" target="_blank">下载</a></td>
    </tr>
    <tr>
      <td align="center">Grove VOC 和 eCO2 气体传感器 (SGP30)</td>
      <td align="center"><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank">下载</a></td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td align="center">Grove 视觉 AI 模块</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank">下载</a></td>
      <td align="center">-</td>
    </tr>
  </tbody></table>

:::note
 上表中未列出的传感器表示无需单独下载库。
:::
**步骤 6.** Wi-Fi 所需的库

我们需要以下库来开始在 Wio Terminal 上使用 Wi-Fi。您可以通过在 Arduino 库管理器的搜索框中输入库名称来搜索这些库。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/20.png" /></div>

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - 搜索 `seeed rpcwifi`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/21.png" /></div>

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - 搜索 `seeed rpcunified`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/23.png" /></div>

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - 搜索 `seeed mbedtls`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/24.png" /></div>

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - 搜索 `seeed fs`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/25.png" /></div>

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - 搜索 `seeed sfud`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/26.png" /></div>

- [**PubSubClinet**](https://github.com/knolleary/pubsubclient) - 搜索 `PubSubClient`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/22.png" /></div>

## 操作步骤

**步骤 1.** 注册并登录 Ubidots

如果这是您第一次使用 Ubidots，请访问 [Ubidots 网站](https://ubidots.com/) 并注册一个账户。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

注册完成后，请使用您的账户登录 Ubidots。

**步骤 2.** 分配您的唯一 **Ubidots TOKEN**

每次向 Ubidots 发出的请求都需要一个 TOKEN。获取 TOKEN 的最简单方法是从用户下拉菜单中点击“API Credentials”。

在用户下拉菜单中点击 API Credentials：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**：用于 API 请求的临时且可撤销的密钥。请保存 TOKEN，我们稍后会用到。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::note
所有 API 调用仅接受您的 **TOKEN**。不要尝试使用您的 API Key，它不会起作用！您还可以在用户下拉菜单的 My Profile 设置中访问所有 Ubidots API Keys 部分。选择 **My Profile** –> **API Credentials** 查看与您的特定 Ubidots 账户相关的 API TOKEN 列表。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**步骤 3.** 准备必要的信息

为了建立 MQTT 连接，我们需要提前准备以下信息。

- **WiFi SSID**
  - 填写 Wio Terminal 可以连接的 WiFi SSID。Wio Terminal 将搜索其周围的 WiFi 并尝试连接。
- **WiFi SSID 的密码**
  - 填写 Wio Terminal 可以连接的 WiFi SSID 的密码。
- **Ubidots TOKEN**
  - 这是在 **步骤 2** 中生成的 TOKEN。
- **变量标签**
  - 这是用户提供给 Ubidots 的传感器值的名称。Ubidots 根据用户提供的此名称匹配不同的数据。如果变量标签在第一次发送数据之前不存在，Ubidots 将自动创建它们。
- **设备标签**
  - 这是设备的名称，用户提供的设备名称将被 Ubidots 用来识别设备。如果设备标签在第一次发送数据之前不存在，Ubidots 将自动创建它们。
- **MQTT 客户端名称**
  - 这是特殊的，因为它是您的设备将被代理识别的 ID，因此它 **必须** 是唯一的。如果您的设备尝试使用已被其他设备占用的 ID 连接，连接将被拒绝。请创建一个由 8-12 个以上字母数字字符组成的唯一 MQTT 客户端名称，并将其相应地输入到代码中。
  如果需要帮助创建唯一的 MQTT 客户端名称，请查看此 [随机 ASCII 生成器](https://www.random.org/strings/)，或者简单地使用设备的 MAC 地址，因为每个 MAC 地址都是全球唯一的。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

在下面的程序开头，我们将在代码顶部定义这些要求，请根据需要填写您的信息。

```cpp
// 示例
#define WIFISSID "<YOUR-WIFISSD>" // 在此处填写您的 WifiSSID
#define PASSWORD "<YOUR-WIFI-PASSWORD>" // 在此处填写您的 WiFi 密码
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // 在此处填写您的 Ubidots TOKEN
#define VARIABLE_LABEL "light" // 分配变量标签
#define DEVICE_LABEL "wio-terminal" // 分配设备标签
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT 客户端名称
```

### 将内置传感器数据发送到 Ubidots

如果您想将 Wio Terminal 内置传感器的检测数据发送到 Ubidots，请将以下完整代码粘贴到 Arduino 中并上传到 Wio Terminal。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include"LIS3DHTR.h"

LIS3DHTR<TwoWire> lis;

// 必需信息
#define WIFISSID "<YOUR-WIFISSD>" // 在此处填写您的 WifiSSID
#define PASSWORD "<YOUR-WIFI-PASSWORD>" // 在此处填写您的 WiFi 密码
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // 在此处填写您的 Ubidots TOKEN
#define VARIABLE_LABEL1 "light" // 分配变量标签
#define VARIABLE_LABEL2 "IMUx"
#define VARIABLE_LABEL3 "IMUy"
#define VARIABLE_LABEL4 "IMUz"
#define VARIABLE_LABEL5 "sound"
#define DEVICE_LABEL "wio-terminal" // 分配设备标签
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT 客户端名称

const long interval = 100;
unsigned long previousMillis = 0;

TFT_eSPI tft;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

// 传感器值
static int lightValue = 0;
static float imuxValue = 0;
static float imuyValue = 0;
static float imuzValue = 0;
static int soundValue = 0;

// 存储要发送的值的空间
static char str_light[6];
static char str_imux[6];
static char str_imuy[6];
static char str_imuz[6];
static char str_sound[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 循环直到重新连接
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // 尝试连接
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // 等待 2 秒后重试
    delay(2000);
    }
  }
}

// 读取内置传感器值
void read_builtin()
{
  lightValue = analogRead(WIO_LIGHT);
  Serial.print("Light = ");
  Serial.println(lightValue);
  
  imuxValue = lis.getAccelerationX();
  Serial.print("IMU_x = ");
  Serial.println(imuxValue);
  imuyValue = lis.getAccelerationY();
  Serial.print("IMU_y = ");
  Serial.println(imuyValue);
  imuzValue = lis.getAccelerationZ();
  Serial.print("IMU_z = ");
  Serial.println(imuzValue);
  
  soundValue = analogRead(WIO_MIC);
  Serial.print("Sound = ");
  Serial.println(soundValue);
}

// 发送数据到 Ubidots
void send_data()
{
  dtostrf(lightValue, 4, 0, str_light);
  dtostrf(imuxValue, 4, 3, str_imux);
  dtostrf(imuyValue, 4, 3, str_imuy);
  dtostrf(imuzValue, 4, 3, str_imuz);
  dtostrf(soundValue, 4, 0, str_sound);

  if (!client.connected()) {
    reconnect();
  }
  
  // 构建主题
  sprintf(topic, "%s", ""); // 清空主题内容
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  // 构建负载
  sprintf(payload, "%s", ""); // 清空负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_light); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // 清空负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_imux); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // 清空负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL3); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_imuy); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // 清空负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL4); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_imuz); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // 清空负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL5); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_sound); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);
  pinMode(WIO_MIC, INPUT);
  pinMode(WIO_LIGHT, INPUT);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // 数据输出速率
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G);
  
//  while(!Serial);

  // 将 WiFi 设置为站点模式并断开之前连接的 AP
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);

}

void loop() {
  read_builtin();   // 读取内置传感器值
  send_data();   // 发送数据到 Ubidots
  delay(5000);
}
```

### 将 Grove 土壤湿度传感器数据发送到 Ubidots

如果您想将 Grove 土壤湿度传感器数据发送到 Ubidots，请将以下完整代码粘贴到 Arduino 中并上传到 Wio Terminal。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>

// 必需的信息
#define WIFISSID "<YOUR-WIFISSD>" // 在此处填写您的 WiFi SSID
#define PASSWORD "<YOUR-WIFI-PASSWORD" // 在此处填写您的 WiFi 密码
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // 在此处填写您的 Ubidots TOKEN
#define VARIABLE_LABEL "light" // 分配变量标签
#define DEVICE_LABEL "wio-terminal" // 分配设备标签
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT 客户端名称

const long interval = 100;
unsigned long previousMillis = 0;

TFT_eSPI tft;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

// 土壤湿度传感器引脚和传感器值
int sensorPin = A0;
static int soilValue = 0;

// 用于存储发送值的空间
char str_soil[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("收到消息 [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 循环直到重新连接
  while (!client.connected()) {
    Serial.println("尝试连接 MQTT...");

    // 尝试连接
    if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
      Serial.println("已连接");
    }
    else {
      Serial.print("连接失败, 错误代码=");
      Serial.print(client.state());
      Serial.println(" 2秒后重试");
      // 重试前等待2秒
      delay(2000);
    }
  }
}

// 读取土壤湿度传感器值
void read_soil()
{
  soilValue = analogRead(sensorPin);
  Serial.print("湿度 = ");
  Serial.println(soilValue);
}

// 将数据发送到 Ubidots
void send_data()
{
  dtostrf(soilValue, 4, 0, str_soil);

  if (!client.connected()) {
    reconnect();
  }
  
  // 构建主题
  sprintf(topic, "%s", ""); // 清空主题内容
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  // 构建有效负载
  sprintf(payload, "%s", ""); // 清空有效负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_soil); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号

  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

  // 将 WiFi 设置为站点模式并断开与之前连接的 AP 的连接
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("正在连接 WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("已连接到 WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_soil();   // 读取土壤湿度传感器值
  send_data();   // 将数据发送到 Ubidots
  delay(5000);
}
```

### 将 Grove VOC 和 eCO2 气体传感器数据发送到 Ubidots

如果您想将 Grove VOC 和 eCO2 气体传感器数据发送到 Ubidots，请将以下完整代码粘贴到 Arduino 中并上传到 Wio Terminal。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include "sensirion_common.h"
#include "sgp30.h"

#define WIFISSID "<YOUR-WIFISSD>" // 在此处填写您的 WiFi SSID
#define PASSWORD "<YOUR-WIFI-PASSWORD>" // 在此处填写您的 WiFi 密码
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // 在此处填写您的 Ubidots TOKEN
#define VARIABLE_LABEL1 "voc" // 分配变量标签
#define VARIABLE_LABEL2 "co2"
#define DEVICE_LABEL "wio-terminal" // 分配设备标签
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT 客户端名称

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

TFT_eSPI tft = TFT_eSPI();

static unsigned short int VOC = 0;
static unsigned short int CO2 = 0;

// 用于存储发送值的空间
char str_voc[6];
char str_co2[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("收到消息 [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 循环直到重新连接
  while (!client.connected()) {
    Serial.println("尝试连接 MQTT...");

    // 尝试连接
    if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
      Serial.println("已连接");
    }
    else {
      Serial.print("连接失败, 错误代码=");
      Serial.print(client.state());
      Serial.println(" 2秒后重试");
      // 重试前等待2秒
      delay(2000);
    }
  }
}

void read_sgp30()
{
  s16 err = 0;
  sgp_measure_iaq_blocking_read(&VOC, &CO2);
  if (err == STATUS_OK) {
      Serial.print("tVOC 浓度:");
      Serial.print(VOC);
      Serial.println("ppb");

      Serial.print("CO2eq 浓度:");
      Serial.print(CO2);
      Serial.println("ppm");
  } else {
      Serial.println("读取 IAQ 值时出错\n");
  }
}

void send_data()
{
  dtostrf(VOC, 4, 0, str_voc);
  dtostrf(CO2, 4, 0, str_co2);
  
  if (!client.connected()) {
    reconnect();
  }
  
  // 构建主题
  sprintf(topic, "%s", ""); // 清空主题内容
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  // 构建有效负载
  sprintf(payload, "%s", ""); // 清空有效负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_voc); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  Serial.println(payload);
  delay(500);

  sprintf(payload, "%s", ""); // 清空有效负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_co2); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  Serial.println(payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  while (sgp_probe() != STATUS_OK) {
      Serial.println("SGP 初始化失败");
  }
  sgp_set_absolute_humidity(13000);
  sgp_iaq_init();

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  
//  while(!Serial);

  // 将 WiFi 设置为站点模式并断开与之前连接的 AP 的连接
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("正在连接 WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("已连接到 WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_sgp30();    // 读取 sgp30 传感器值
  send_data();     // 将数据发送到 Ubidots
  delay(5000);
}
```

### 将 Grove 温湿度传感器数据发送到 Ubidots

如果您想将 Grove 温湿度传感器数据发送到 Ubidots，请将以下完整代码粘贴到 Arduino 中并上传到 Wio Terminal。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

#define WIFISSID "<YOUR-WIFISSD>" // 在此处填写您的 WiFi SSID
#define PASSWORD "<YOUR-WIFI-PASSWORD" // 在此处填写您的 WiFi 密码
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // 在此处填写您的 Ubidots TOKEN
#define VARIABLE_LABEL1 "temperature" // 分配变量标签
#define VARIABLE_LABEL2 "humidity"
#define DEVICE_LABEL "wio-terminal" // 分配设备标签
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT 客户端名称

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

TFT_eSPI tft = TFT_eSPI();
SensirionI2CSht4x sht4x;

static float temp = 0;
static float humi = 0;

// 用于存储发送值的空间
char str_temp[6];
char str_humi[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("收到消息 [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 循环直到重新连接
  while (!client.connected()) {
    Serial.println("尝试 MQTT 连接...");

  // 尝试连接
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("已连接");
  }
  else {
    Serial.print("连接失败, 错误代码=");
    Serial.print(client.state());
    Serial.println(" 2秒后重试");
    // 重试前等待2秒
    delay(2000);
    }
  }
}

void read_sht40()
{
  uint16_t error;
  char errorMessage[256];
  error = sht4x.measureHighPrecision(temp, humi);
  if (error) {
      Serial.print("执行 measureHighPrecision() 时出错: ");
      errorToString(error, errorMessage, 256);
      Serial.println(errorMessage);
  } else {
      Serial.print("温度:");
      Serial.print(temp);
      Serial.print("\t");
      Serial.print("湿度:");
      Serial.println(humi);
  }
}

void send_data()
{
  dtostrf(temp, 4, 2, str_temp);
  dtostrf(humi, 4, 2, str_humi);
  
  if (!client.connected()) {
    reconnect();
  }
  
  // 构建主题
  sprintf(topic, "%s", ""); // 清空主题内容
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  // 构建负载
  sprintf(payload, "%s", ""); // 清空负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_temp); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // 清空负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_humi); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  Wire.begin();
  sht4x.begin(Wire);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  
//  while(!Serial);

  // 将 WiFi 设置为站点模式并断开之前连接的 AP
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("正在连接 WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("已连接到 WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_sht40();    // 读取 sht40 传感器值
  send_data();     // 将数据发送到 Ubidots
  delay(5000);
}
```

### 将 Grove Vision Ai 模块数据发送到 Ubidots

如果您想将 Grove Vision Ai 模块数据发送到 Ubidots，请将以下完整代码粘贴到 Arduino 中并上传到 Wio Terminal。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include"LIS3DHTR.h"
#include "Seeed_Arduino_GroveAI.h"

// 必需信息
#define WIFISSID "<YOUR-WIFISSD>" // 在此处填写您的 WiFi SSID
#define PASSWORD "<YOUR-WIFI-PASSWORD" // 在此处填写您的 WiFi 密码
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // 在此处填写您的 Ubidots TOKEN
#define VARIABLE_LABEL1 "num" // 分配变量标签
#define VARIABLE_LABEL2 "confidence"
#define DEVICE_LABEL "wio-terminal" // 分配设备标签
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT 客户端名称

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

GroveAI ai(Wire);
uint8_t state = 0;
TFT_eSPI tft = TFT_eSPI();

static int num = 0;
static int conf = 0;

// 用于存储发送值的空间
char str_num[6];
char str_conf[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("收到消息 [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 循环直到重新连接
  while (!client.connected()) {
    Serial.println("尝试 MQTT 连接...");

  // 尝试连接
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("已连接");
  }
  else {
    Serial.print("连接失败, 错误代码=");
    Serial.print(client.state());
    Serial.println(" 2秒后重试");
    // 重试前等待2秒
    delay(2000);
    }
  }
}

// Vision AI 初始化
void VisionAI_Init()
{
  Serial.println("开始");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // 对象检测和预训练模型1
  {
    state = 1;
  }
  else
  {
    Serial.println("算法初始化失败。");
  }
}

// 读取 VisionAI 值：识别的字符数量，每个人的置信度
void read_VisionAI()  
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // 开始调用
    {
      while (1) // 等待调用完成
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }
      uint8_t len = ai.get_result_len(); // 接收检测到的人数
      if(len)
      {
         Serial.print("人数: ");

         num = len;
         Serial.println(num);

         object_detection_t data;       // 获取数据
         for (int i = 0; i < len; i++)
         {
            ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); // 获取结果
            Serial.print("置信度:");
            
            conf = data.confidence;
            Serial.println(conf);
          }
      }
     else
     {
       Serial.println("未识别到");
       num = 0;
       conf = 0;
     }
   }
    else
    {
      Serial.println("调用失败。");
      num = 0;
      conf = 0;
      delay(1000);
    }
  }
}

void send_data()
{
  dtostrf(num, 4, 0, str_num);
  dtostrf(conf, 4, 0, str_conf);
  
  if (!client.connected()) {
    reconnect();
  }
  
  // 构建主题
  sprintf(topic, "%s", ""); // 清空主题内容
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  // 构建负载
  sprintf(payload, "%s", ""); // 清空负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_num); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // 清空负载
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // 添加变量标签
  sprintf(payload, "%s%s", payload, str_conf); // 添加值
  sprintf(payload, "%s}", payload); // 关闭字典括号
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  Wire.begin();

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  VisionAI_Init();

  // 将 WiFi 设置为站点模式并断开之前连接的 AP
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("正在连接 WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("已连接到 WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_VisionAI(); // 读取 VisionAI 传感器值
  send_data();     // 将数据发送到 Ubidots
  delay(5000);
}
```

### Ubidots 面板

代码上传完成后，我们可以开始设置仪表板，以查看数据是如何上传的。

Ubidots 拥有非常简单的界面，如果您想查看设备的相关信息，可以在仪表板顶部选择 **Devices**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

点击设备名称，即可查看所有的历史标签。这是由代码中的 **VARIABLE_LABEL** 决定的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/19.png" /></div>

:::note
Ubidots 的免费版本仅支持创建 **一个 TOKEN** 和 **十个标签**。一旦超过十个标签，您上传的标签和数据将会被丢弃。
:::

如果您想查看设备的数据信息，可以选择 **Data**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/17.png" /></div>

您还可以在主页面左上角选择不同的仪表板界面。默认情况下，Ubidots 会自动为您创建一个名为 **Demo Dashboard** 的仪表板。一旦 Wio Terminal 联网并发送数据，您将能够看到一个名为 **wio terminal dashboard** 的仪表板。这是在代码中的 **DEVICE_LABEL** 定义的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/18.png" /></div>

您可以在当前仪表板下添加不同的面板，这需要您点击右上角的 **+** 号。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/13.png" /></div>

以下是 Ubidots 支持的面板列表。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/15.png" /></div>

下面以创建折线图表为例。如果您想绘制 IMU 传感器值的折线图，那么您需要创建三个标签，并且 **标签的名称需要与代码中的 VARIABLE_LABEL 匹配**，然后将其余的交给 Ubidots，它会自动为您生成图表。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/14.png" /></div>

Ubidots 还具有非常强大的自定义功能，例如是否显示数值、Y 轴名称以及显示多少数据，所有这些您都可以自由调整。

## 资源

本教程中使用的所有代码请点击图标访问。

<div>
  <p style={{}}><a href="https://github.com/limengdu/K1100_Ubidots" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/K1100_Ubidots" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® 标志是 Semtech Corporation 或其子公司的商标。
- LoRaWAN® 是根据 LoRa Alliance® 授权使用的标志。