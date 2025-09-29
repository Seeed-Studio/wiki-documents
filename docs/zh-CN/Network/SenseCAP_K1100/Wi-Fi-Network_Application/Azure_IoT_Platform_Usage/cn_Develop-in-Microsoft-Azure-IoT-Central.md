---
description: 在 Microsoft Azure IoT Central 中开发
title: 在 Microsoft Azure IoT Central 中开发
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Develop-in-Microsoft-Azure-IoT-Central
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# 在 Microsoft Azure IoT Central 中开发


### 添加规则以发送电子邮件

IoT Central 中的规则是一个可自定义的响应工具，用于在连接设备的主动监控事件上触发操作。
例如，在本演示中，我们可以设置 IoT Central 在光强度低于 50 时发送电子邮件。

- **步骤 1：** 在 Azure IoT Central 的左侧导航菜单中点击 **Rules**。

- **步骤 2：** 点击 **+New** 或 **Create a rule**。

- **步骤 3：** 输入规则的名称。

- **步骤 4：** 在 **Device template** 下，选择 **Seeed Wio Terminal**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>


- **步骤 5：** 在 **Conditions** 下，开启 **time aggregation** 并选择一个你选择的 **time window**。这里我们将其设置为 **5 分钟**。

**注意：** 每隔 **xx** 分钟，规则会对过去 **xx** 分钟的数据进行一次评估。

- **步骤 6：** 在 **Telemetry** 下，选择你选择的遥测数据。这里我们将其设置为 **Light intensity**。

- **步骤 7：** 在 **Aggregation** 下，选择 **Average**。这将在之前设置的 **time window** 内取平均值。

- **步骤 8：** 在 **Operator** 下，选择一个你选择的条件。这里我们使用 **is less than** 条件。

- **步骤 9：** 在 **Value** 下，输入一个值。这里我们输入 **50**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>


- **步骤 10：** 在 **Actions** 下，点击 **Email**。

- **步骤 11：** 输入电子邮件的 **Display name**、**To address** 和 **Note**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>


**注意：** 请注意，这里的 **email address** 必须已添加到此 **Azure IoT Central Application** 中，并且至少登录过一次。

- 导航到 `Administration > Users`，点击 **Assign user**，填写 **Email**，分配一个 **Role**，然后点击 **Save**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>


- **步骤 12：** 点击 **Done**。

- **步骤 13：** 最后，点击 **Save**。

现在我们已经成功创建了一个发送电子邮件的规则。

### 从 Microsoft Azure IoT Central 控制硬件

你不仅可以在 Azure IoT Central 上查看遥测数据，还可以用它来控制硬件。在本演示中，我们将能够控制 Wio Terminal 的内置蜂鸣器，并指定蜂鸣器发出声音的持续时间。

- **步骤 1：** 点击 **Command** 选项卡。

- **步骤 2：** 在 **Duration** 下的列中输入一个 **value**。

**注意：** 值的单位是毫秒。例如：1000 = 1000ms = 1s。

- **步骤 3：** 当你点击 **Run** 时，你将能够听到蜂鸣器发出指定时间的蜂鸣声。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## 如何添加其他传感器？

您可以将任何传感器添加到 Wio Terminal，并将连接传感器的遥测数据发送到 Azure IoT Central。我们将连接一个 [Grove - 温湿度传感器 (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) 到 Wio Terminal，并将温度和湿度数据发送到 Azure IoT Central，以便在仪表板上进行可视化！

### Microsoft Visual Studio Code 设置

#### 下载、安装和配置 Visual Studio Code

如果我们想向 Wio Terminal 添加更多传感器以发送遥测数据到 Azure IoT Central，我们不能像之前那样轻松使用 .uf2 文件，因为代码已经编译在该 .uf2 文件中。因此，如果我们想向演示中添加更多代码，我们需要使用一个名为 Microsoft Visual Studio Code 的 IDE，添加必要的代码并最终将其上传到 Wio Terminal。

现在，让我们开始在计算机上安装 Microsoft Visual Studio Code。

- **步骤 1：** 访问 code.visualstudio.com 并点击 **下载**

**注意：** 根据您的操作系统选择安装程序

- **步骤 2：** 按照安装向导完成安装

- **步骤 3：** 打开 Visual Studio Code

- **步骤 4：** 从左侧导航菜单中点击 **扩展**，然后在搜索框中输入 **platformIO**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>

- **步骤 5：** 点击 **安装**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>

#### 在 Visual Studio Code 中的演示代码

- **步骤 1：** 访问 [此链接](https://github.com/SeeedJP/wioterminal-aziot-example/releases) 查找 [SeeedJP/wioterminal-aziot-example 仓库](https://github.com/SeeedJP/wioterminal-aziot-example) 中的可用版本

- **步骤 2：** 导航到 **最新版本**，在 **Assets** 下点击 **Source code (zip)**。这将下载源代码为 .zip 文件

- **步骤 3：** 解压 **.zip 文件**

- **步骤 4：** 返回到 Visual Studio Code，导航到 `File > Open Folder...`

- **步骤 5：** 选择我们之前解压的文件夹并点击 **选择文件夹**

- **步骤 6：** 从左侧导航菜单导航到 `wioterminal-aziot-example-0.10 > include > config.h`

- **步骤 7：** 打开 **config.h** 后，找到 **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** 并将其更改为 **"dtmi:local:wioterminal_aziot_example;5"**

**注意：** **dtmi:local:wioterminal_aziot_example;5** 是模型 ID

- **步骤 8：** 从左侧导航菜单导航到 `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json`

- **步骤 9：** 打开 **seeedkk-wioterminal-wioterminal_aziot_example.json** 后，找到 **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** 并将其更改为 **"dtmi:local:wioterminal_aziot_example;5"**

**注意：** **seeedkk-wioterminal-wioterminal_aziot_example.json** 是我们之前提到的 DTDL 模型

当前模型定义了 **加速度、光强和按钮计数** 数据。我们将继续向此 DTDL 模型添加 **温度和湿度**。

- **步骤 10：** 在 **"contents": [** 下添加以下代码：

```sh
  "contents": [
    {
      "@type": [
        "Telemetry",
        "Temperature"
      ],
      "name": "temp",
      "unit": "degreeCelsius",
      "displayName": {
        "en": "Temperature (C)",
        "ja": "温度"
      },
      "schema": "integer"
    },
    {
      "@type": "Telemetry",
      "name": "humi",
      "displayName": {
        "en": "Humidity (%RH)",
        "ja": "湿度"
      },
      "schema": "integer"
    },
```

**注意：** 这里，**name** 是我们稍后在代码中用来识别特定遥测数据的名称，**unit** 是数据对应的单位，**displayName** 是在 Azure IoT Central 上显示的名称（"en" 表示英文/"ja" 表示日文），**schema** 是数据类型。

- **步骤 11：** 从左侧导航菜单导航到 `wioterminal-aziot-example-0.10 > platformio.ini`

- **步骤 12：** 打开 **platformio.ini** 后，在 **lib_deps** 下添加 **https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor**

```sh 
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```

**注意：** 这是 Grove - 温湿度传感器 (DHT11) 的库

- **步骤 13：** 从左侧导航菜单导航到 `wioterminal-aziot-example-0.10 > src > main.cpp`

- **步骤 14：** 打开 **main.cpp** 后，在 **#include "CliMode.h"** 之后添加 DHT11 库

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **步骤 15：** 在 **LIS3DHTR AccelSensor;** 之后添加 DHT11 定义和初始化

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //定义 DHT 传感器的信号引脚
// #define DHTPIN PIN_WIRE_SCL //使用 I2C 端口作为数字端口
#define DHTTYPE DHT11 //定义 DHT 传感器类型
DHT dht(DHTPIN, DHTTYPE); //初始化 DHT 传感器
```

**注意：** DHT11 传感器可以连接到 Wio Terminal 的两个 Grove 端口。如果使用 **数字端口**，引脚可以定义为 **0**；如果使用 **I2C 端口**，引脚可以定义为 **PIN_WIRE_SCL**。端口图将在本文档后面显示。

- **步骤 16：** 在 **SendTelemetry()** 函数下添加以下代码以解析 JSON 文件以及遥测数据：

```cpp
static az_result SendTelemetry()
{
    float accelX;
    float accelY;
    float accelZ;
    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);

    int light;
    light = analogRead(WIO_LIGHT) * 100 / 1023;

    int temp; //分配变量存储温度
    int humi; //分配变量存储湿度
    temp = dht.readTemperature(); //读取温度
    humi = dht.readHumidity(); //读取湿度

    char telemetry_topic[128];
    if (az_result_failed(az_iot_hub_client_telemetry_get_publish_topic(&HubClient, NULL, telemetry_topic, sizeof(telemetry_topic), NULL)))
    {
        Log("Failed az_iot_hub_client_telemetry_get_publish_topic" DLM);
        return AZ_ERROR_NOT_SUPPORTED;
    }

    az_json_writer json_builder;
    char telemetry_payload[200];
    AZ_RETURN_IF_FAILED(az_json_writer_init(&json_builder, AZ_SPAN_FROM_BUFFER(telemetry_payload), NULL));
    AZ_RETURN_IF_FAILED(az_json_writer_append_begin_object(&json_builder));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("temp")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, temp));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("humi")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, humi));
```

- **步骤 17：** 在 **ntp.begin** 行之后添加以下代码，以启动 DHT11 传感器

```cpp
dht.begin(); // 启动 DHT 传感器
```

现在我们已经完成了本次演示的所有代码。

- **步骤 18：** 点击左侧导航菜单中的 **PlatformIO 图标**，然后点击 **Build**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>

如果看到以下消息，说明代码已成功编译：

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Microsoft Azure IoT Central 设置

现在我们需要创建一个自定义设备模板，以便在 Azure IoT Central 仪表板上可视化来自 Wio Terminal 的数据。

#### 创建新设备模板

- **步骤 1：** 访问 Azure IoT Central 并从左侧导航菜单中点击 `Device templates`

- **步骤 2：** 点击 **+ New**，选择 **IoT device**，然后点击 **Next:Customize**

- **步骤 3：** 在 **Device template name** 框中输入一个名称，然后点击 **Next:Review**

- **步骤 4：** 点击 **Create**

#### 导入自定义设备模型

- **步骤 1：** 点击 **Import a model**

- **步骤 2：** 导航到之前使用的 **wioterminal-aziot-example-0.10** 文件夹，找到 **seeedkk-wioterminal-wioterminal_aziot_example.json** 文件并点击它

- **步骤 3：** 点击 **Open**

- **步骤 4：** 从左侧菜单中点击 **Views**，然后点击 **Generate default views**

- **步骤 5：** 点击 **Generate default dashboard view(s)**

- **步骤 6：** 从左侧菜单导航到 **Overview**，根据您的偏好自定义仪表板。

**注意：** 我们之前在文档中提到过如何自定义仪表板。

- **步骤 7：** 按以下配置进行设置

| 瓦片名称 | 瓦片大小 | 瓦片可视化方式 |
|-|-|-|
| 光强度 | 2 x 2 | 折线图 |
| 光强度 | 1 x 1 | 最近值 |
| 温度 (C)、湿度 (%RH) | 2 x 2 | 折线图 |
| 温度 (C) | 1 x 1 | 最近值 |
| 湿度 (%RH) | 1 x 1 | 最近值 |
| 左按钮 | 1 x 1 | KPI |
| 中按钮 | 1 x 1 | KPI |
| 右按钮 | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 8：** 点击 **Save** 和 **Publish**

### Wio Terminal 设置

#### 硬件设置

- 将 **Grove - 温湿度传感器 (DHT11)** 连接到 Wio Terminal 的 **Grove 数字端口**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>

#### 软件设置

##### 上传代码到 Wio Terminal

现在我们需要将代码上传到 Wio Terminal，以便将遥测数据发送到 Azure IoT Central。

- **步骤 1：** 返回 VS Code，点击 **PlatformIO 图标**，然后点击 **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>

##### Wi-Fi 和 Azure IoT 配置

接下来，我们像之前一样配置 Wi-Fi 和 Azure IoT 连接。

- **步骤 1：** 按住 3 个按钮并打开 Wio Terminal 以进入配置模式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **步骤 2：** 打开一个串口控制台应用程序，例如 [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **步骤 3：** 输入正确的串口 **COM Port**，将波特率设置为 **9600**，然后进入 Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **步骤 4：** 在键盘上按 **ENTER**，然后在串口终端中输入 **help** 以查看配置用法

**注意：** 现在我们不需要输入 WiFi SSID 和密码，因为它们已经从之前的配置中保存。

- **步骤 5：** 通过访问之前在 [Azure IoT Central](https://apps.azureiotcentral.com) 上创建的应用程序，设置 Azure IoT 的连接信息

- **步骤 6：** 从左侧导航菜单中导航到 `Administration > Device Connection`，并将 **ID scope** 复制到 **记事本**

- **步骤 7：** 点击 **SAS-IoT-Devices** 并将 **primary key** 复制到 **记事本**

- **步骤 8：** 打开之前的串口终端，输入 **set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name`

**注意：** 确保每个字段之间添加一个空格，您可以自行决定 `device name`。

- **步骤 9：** 将 Wio Terminal 的开关滑到远离 ON 位置并释放以重置设备

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

现在，您将能够看到 Wio Terminal 的 LCD 显示屏显示它正在连接到 Wi-Fi，然后连接到 Azure IoT Hub。之后，它将显示正在发送到 Azure IoT Central 的遥测数据。

### 在 Azure IoT Central 上可视化

返回 Azure IoT Central，从左侧导航菜单中点击 **Devices**，然后点击您的 **Device name**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>

现在，您将能够在 Microsoft Azure IoT Central 仪表板上可视化来自 Wio Terminal 的所有传感器数据！