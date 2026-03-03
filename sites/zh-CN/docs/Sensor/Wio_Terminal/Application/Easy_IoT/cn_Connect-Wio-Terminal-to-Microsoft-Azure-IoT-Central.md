---
title: 将 Wio Terminal 连接到 Microsoft Azure IoT Central
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/
slug: /cn/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 将 Wio Terminal 连接到 Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>


## 介绍
在本教程中，我们将引导您完成将 Wio Terminal 连接到 Microsoft Azure IoT Central 的过程，并从 Wio Terminal 上的板载传感器/硬件（如 3 轴加速度计、光传感器、3 个按钮）向 Microsoft Azure IoT Central 发送遥测数据。然后您将能够在交互式仪表板上可视化传感器数据。您还可以使用 Azure IoT Central 来控制硬件，例如让 Wio Terminal 上的板载蜂鸣器发出蜂鸣声。Microsoft Azure IoT Central 支持 HTTP、MQTT 和 AMQP 协议进行通信，但是在本教程中我们将使用 MQTT 协议。

### 什么是 Microsoft Azure？

[Microsoft Azure](https://azure.microsoft.com) 是微软的公有云计算平台。您可以使用 Microsoft Azure 通过微软管理的数据中心来构建、测试、部署和管理应用程序和服务。

此外，它提供一系列云服务，包括计算、分析、存储和网络。Microsoft Azure 提供软件即服务 (SaaS)、平台即服务 (PaaS)、基础设施即服务 (IaaS) 和无服务器。最后，它支持许多不同的编程语言、工具和框架。

### 什么是 Microsoft Azure IoT？

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) 是微软管理的云服务集合，用于连接、监控和控制数十亿个 IoT 资产。它包括设备和设备的安全性和操作系统，以及数据和分析，帮助企业构建、部署和管理 IoT 应用程序。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>


### 什么是 Microsoft Azure IoT Central？

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) 是一个完全托管的全球 IoT SaaS（软件即服务）解决方案，可以轻松地大规模连接、监控和管理您的 IoT 资产。它高度安全，随着您的业务增长而扩展，确保您的投资可重复，并与您现有的业务应用程序集成。它还弥合了您的业务应用程序和 IoT 数据之间的差距。最后，它提供集中管理来重新配置和更新您的设备。

### 什么是 IoT 即插即用？

[IoT 即插即用](https://docs.microsoft.com/en-us/azure/iot-pnp)使解决方案构建者能够将智能设备与其解决方案集成，而无需任何手动配置。IoT 即插即用的核心是设备模型，设备使用该模型向支持 IoT 即插即用的应用程序宣传其功能。它包含：

- 属性：表示设备或其他实体的只读或可写状态
- 遥测：设备发送的数据
- 命令：描述可以在设备上执行的功能或操作

IoT 即插即用认证设备消除了在 Azure IoT Central 中配置设备的麻烦，例如创建模板和添加功能和接口。

### IoT 即插即用认证设备

IoT 即插即用认证设备是在 [Azure 认证设备目录](https://devicecatalog.azure.com)中列出的带有 IoT 即插即用徽章的设备。

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 是一个 IoT 即插即用认证设备。

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>


要获得 IoT 即插即用认证，您需要满足一些标准，其中之一是将定义设备功能的 DTDL（数字孪生定义语言）模型发布到 GitHub 上的 [Azure/iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models)。

这允许使用 IoT 即插即用认证设备的云服务从此存储库了解设备功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## 通过 MQTT 将 Wio Terminal 连接到 Microsoft Azure IoT Central

如前所述，我们将使用 MQTT 进行 Wio Terminal 和 Microsoft Azure IoT Central 之间的通信。不过，如果您有需要，也可以使用 HTTP 桥接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>


### Microsoft Azure IoT Central 设置

首先，您需要访问 Microsoft Azure IoT Central，登录您的 Microsoft 账户并为您的项目创建一个新应用程序。

- **步骤 1：** 访问[这里](https://apps.azureiotcentral.com)创建新应用程序

- **步骤 2：** 从左侧导航菜单点击**构建**，然后点击**自定义应用**

**注意：** 如果提示，请登录您的 Microsoft 账户

- **步骤 3：** 填写**应用程序名称**并在**定价计划**下选择**免费**。

**注意：** 当您填写应用程序名称时，应用程序 URL 将自动创建

- **步骤 4：** 点击**创建**来创建新应用程序

现在您已经成功设置了 Azure IoT Central！

### 设置 Wio Terminal

#### 更新 RTL8720 固件

我们需要为 Wio Terminal 上的 Realtek RTL8720 无线核心更新固件。请按照[这个 wiki](https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview) 来更新 RTL8720 固件。

**注意：** 确保根据发布说明中指定的版本更新[固件](https://github.com/SeeedJP/wioterminal-aziot-example/releases)。

#### 下载并上传演示代码到 Wio Terminal

我们将首先使用一个演示代码，该代码将 Wio Terminal 上板载传感器的遥测数据发送到 Microsoft Azure IoT Central。

##### 下载演示代码

- **步骤 1：** 导航到 GitHub 上的[这个仓库](https://github.com/SeeedJP/wioterminal-aziot-example)
- **步骤 2：** 点击**发布**
- **步骤 3：** 在**最新发布**下，点击**wioterminal-aziot-example.uf2**下载 .uf2 文件

##### 将演示代码上传到 Wio Terminal

- **步骤 1：** 将 Wio Terminal 连接到 PC 并打开电源
- **步骤 2：** 通过将电源开关向远离"ON"位置的方向滑动，释放，再次滑动并释放来进入**引导加载程序模式**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>


**注意：** 一旦 Wio Terminal 进入引导加载程序模式，蓝色 LED 将开始以不同于闪烁的方式呼吸

- **步骤 3：** 在您的 PC 上打开文件资源管理器，您将看到一个名为**Arduino**的新外部驱动器

- **步骤 4：** 将之前下载的**.uf2 文件**拖入这个**Arduino 驱动器**。

- **步骤 5：** 关闭 Wio Terminal

现在我们已经成功将演示代码上传到 Wio Terminal

##### Wi-Fi 和 Azure IoT 配置

接下来，让我们继续配置 Wi-Fi 和 Azure IoT 连接

- **步骤 1：** 按住 3 个按钮并打开 Wio Terminal 以进入配置模式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>


- **步骤 2：** 打开串行控制台应用程序，如[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **步骤 3：** 输入正确的串行**COM 端口**，设置**9600**作为波特率并进入 Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>


- **步骤 4：** 在键盘上按**ENTER**并在串行终端中输入**help**来查看配置用法

- **步骤 5：** 通过输入**set_wifissid** `your_WI-Fi_network_name`设置 Wi-Fi SSID

**注意：** 确保在字段之间添加单个空格

- **步骤 6：** 通过输入**set_wifipwd** `your_WI-Fi_network_password`设置 Wi-Fi 密码

**注意：** 确保在字段之间添加单个空格

- **步骤 7：** 通过访问之前在[Azure IoT Central](https://apps.azureiotcentral.com)上创建的应用程序来设置 Azure IoT 的连接信息

- **步骤 8：** 从左侧导航菜单导航到`管理 > 设备连接`，并**将 ID 范围复制**到**记事本**

- **步骤 9：** 点击**SAS-IoT-Devices**并将**主密钥**复制到**记事本**

- **步骤 10：** 访问之前打开的串行终端并输入**set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name`

**注意：** 确保在每个字段之间添加单个空格，您可以决定自己选择的`设备名称`。

- **步骤 11：** 通过将开关向远离 ON 位置的方向滑动并释放来重置 Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>


现在您将能够看到 Wio Terminal LCD 显示它正在连接到 Wi-Fi，然后连接到 Azure IoT Hub。之后它将显示正在发送到 Azure IoT Central 的遥测数据。

### 在 Microsoft Azure IoT Central 上显示遥测数据

我们将继续在 Azure IoT Central 仪表板上显示来自 Wio Terminal 的 3 轴加速度计、光传感器和 3 个按钮的传入遥测数据。

- **步骤 1：** 打开您之前访问的 Azure IoT Central 仪表板

- **步骤 2：** 从左侧导航菜单点击**设备**

- **步骤 3：** 您将看到**Seeed Wio Terminal**出现在设备下。点击它

- **步骤 4：** 点击带有您之前配置的**设备名称**的条目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/wio_demo.png" alt="pir" width={800} height="auto" /></p>

现在您将能够在交互式仪表板上可视化来自板载3轴加速度计的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/accel_demo.png" alt="pir" width={800} height="auto" /></p>


这是默认视图，我们需要进行一些更改以显示其他遥测数据。

- **步骤 5：** 从左侧导航菜单点击 **设备模板**，然后点击 **Seeed Wio Terminal** 来配置模板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/device_template.png" alt="pir" width={400} height="auto" /></p>


- **步骤 6：** 点击左侧导航菜单中的 **概述**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview.png" alt="pir" width={400} height="auto" /></p>


- **步骤 7：** 展开 **选择遥测** 下拉菜单，选择您想要可视化的遥测数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview_edit.png" alt="pir" width={800} height="auto" /></p>


- **步骤 8：** 点击 **添加磁贴**，您将看到磁贴被添加到 Azure IoT Central 仪表板中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_add.png" alt="pir" width={300} height="auto" /></p>


**注意：** 您可以根据自己的偏好调整磁贴的大小或更改可视化方式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/resize.png" alt="pir" width={400} height="auto" /></p>


- **步骤 9：** 对3个按钮（左、中、右）重复相同的操作

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/draft_visual.png" alt="pir" width={850} height="auto" /></p>


**注意：** 这里我们配置了以下内容：

| 磁贴名称 | 磁贴大小 | 磁贴可视化 |
|-|-|-|
| 光强度 | 2 x 2 | 折线图 |
| 左按钮 | 1 x 1 | KPI |
| 右按钮 | 1 x 1 | KPI |
| 中间按钮 | 2 x 2 | KPI |

- **步骤 10：** 点击 **保存** 和 **发布**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/save.png" alt="pir" width={600} height="auto" /></p>


- **步骤 11：** 返回 Azure IoT Central 仪表板，您将能够可视化来自 Wio Terminal 的所有数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/final.png" alt="pir" width={750} height="auto" /></p>

- **步骤 12：** 您还可以点击 **原始数据** 选项卡来实时查看所有遥测数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/raw_data.png" alt="pir" width={700} height="auto" /></p>


#### 添加规则以发送电子邮件

IoT Central 中的规则作为可自定义的响应工具，在来自连接设备的主动监控事件上触发。
例如，在此演示中，我们可以设置 IoT Central 在光强度水平低于50时发送电子邮件。

- **步骤 1：** 在 Azure IoT Central 的左侧导航菜单中点击 **规则**。

- **步骤 2：** 点击 **+新建** 或 **创建规则**

- **步骤 3：** 为规则输入名称

- **步骤 4：** 在 **设备模板** 下，选择 **Seeed Wio Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **步骤 5：** 在 **条件** 下，打开 **时间聚合** 并选择您选择的 **时间窗口**。这里我们将其设置为 **5分钟**

**注意：** 每 **xx** 分钟，规则会对最近 **xx** 分钟的数据评估一次

- **步骤 6：** 在 **遥测** 下，选择您选择的遥测数据。这里我们将其设置为 **光强度**

- **步骤 7：** 在 **聚合** 下，选择 **平均值**。这将在之前设置的 **时间窗口** 期间取平均值

- **步骤 8：** 在 **操作符** 下，选择您选择的条件。这里我们将使用 **小于** 条件

- **步骤 9：** 在 **值** 下，输入一个值。这里我们将输入 **50**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>


- **步骤 10：** 在 **操作** 下，点击 **电子邮件**

- **步骤 11：** 为电子邮件输入 **显示名称**、**收件人地址** 和 **备注**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>


**注意：** 请注意，这里的 **电子邮件地址** 应该已添加到此 **Azure IoT Central 应用程序** 中，并且至少登录过一次。

- 导航到 `管理 > 用户`，点击 **分配用户**，填写 **电子邮件**，分配一个 **角色** 并点击 **保存**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>


- **步骤 12：** 点击 **完成**

- **步骤 13：** 最后，点击 **保存**

现在我们已经成功创建了一个发送电子邮件的规则

### 从 Microsoft Azure IoT Central 控制硬件

您不仅可以在 Azure IoT Central 上查看遥测数据，还可以使用它来控制硬件。在此演示中，我们将能够控制 Wio Terminal 上的内置蜂鸣器，并指定蜂鸣器响铃的持续时间

- **步骤 1：** 点击 **命令** 选项卡

- **步骤 2：** 在 **持续时间** 下的列中输入一个 **值**

**注意：** 值以毫秒为单位。例如：1000 = 1000毫秒 = 1秒

- **步骤 3：** 当您点击 **运行** 时，您将能够听到蜂鸣器在上面指定的持续时间内发出蜂鸣声

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## 如何添加其他传感器？

您可以向 Wio Terminal 添加任何传感器，并将连接传感器的遥测数据发送到 Azure IoT Central。我们将连接一个 [Grove - 温湿度传感器 (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) 到 Wio Terminal，并将温湿度数据发送到 Azure IoT Central 以在仪表板上可视化！

### Microsoft Visual Studio Code 设置

#### 下载、安装和配置 Visual Studio Code

如果我们想要向 Wio Terminal 添加更多传感器以便将遥测数据发送到 Azure IoT Central，我们不能像之前那样轻松使用 .uf2 文件。因为代码已经编译在那个 .uf2 文件中。所以，如果我们想要向演示添加更多代码，我们需要使用一个名为 Microsoft Visual Studio Code 的 IDE，添加必要的代码并最终将它们上传到 Wio Terminal。

现在，让我们开始在计算机上安装 Microsoft Visual Studio Code

- **步骤 1：** 访问 code.visualstudio.com 并点击 **Download**

**注意：** 根据您的操作系统选择安装程序

- **步骤 2：** 完成安装向导并完成安装

- **步骤 3：** 打开 Visual Studio Code

- **步骤 4：** 从左侧导航菜单点击 **Extensions**，并在搜索框中输入 **platformIO**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>


- **步骤 5：** 点击 **install** 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>


#### Visual Studio Code 上演示的代码

- **步骤 1：** 访问 [此链接](https://github.com/SeeedJP/wioterminal-aziot-example/releases) 查找 [SeeedJP/wioterminal-aziot-example 仓库](https://github.com/SeeedJP/wioterminal-aziot-example) 中的可用版本

- **步骤 2：** 导航到 **Latest release**，在 **Assets** 下点击 **Source code (zip)**。这将下载源代码作为 .zip 文件

- **步骤 3：** 解压 **.zip 文件** 

- **步骤 4：** 回到 Visual Studio Code 并导航到 `File > Open Folder...`

- **步骤 5：** 选择我们之前解压的文件夹并点击 **Select Folder**

- **步骤 6：** 从左侧导航菜单导航到 `wioterminal-aziot-example-0.10 > include > config.h`

- **步骤 7：** 一旦 **config.h** 打开，查找 **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** 并将其更改为 **"dtmi:local:wioterminal_aziot_example;5"**

**注意：** **dtmi:local:wioterminal_aziot_example;5** 是模型 ID 

- **步骤 8：** 从左侧导航菜单导航到 `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json`

- **步骤 9：** 一旦 **seeedkk-wioterminal-wioterminal_aziot_example.json** 打开，查找 **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** 并同样将其更改为 **"dtmi:local:wioterminal_aziot_example;5"**

**注意：** **seeedkk-wioterminal-wioterminal_aziot_example.json** 是我们之前提到的 DTDL 模型

目前模型定义了 **加速度、光强度和按钮计数** 数据。我们将继续向此 DTDL 模型添加 **温度和湿度**。

- **步骤 10：** 在 **"contents": [** 下方添加以下代码：

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

**注意：** 这里，**name** 是我们稍后在代码中用来识别特定遥测数据的，**unit** 是对应数据的单位，**displayName** 是在 Azure IoT Central 上显示的名称（"en" 表示英语/"ja" 表示日语），**schema** 是数据类型

- **步骤 11：** 从左侧导航菜单导航到 `wioterminal-aziot-example-0.10 > platformio.ini`

- **步骤 12：** 一旦 **platformio.ini** 打开，在 **lib_deps** 下添加 **https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor**

```sh 
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```
**注意：** 这是 Grove - 温湿度传感器 (DHT11) 的库

- **步骤 13：** 从左侧导航菜单导航到 `wioterminal-aziot-example-0.10 > src > main.cpp`

- **步骤 14：** 一旦 **main.cpp** 打开，在 **#include "CliMode.h"** 行后添加 DHT11 库

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **步骤 15：** 在 **LIS3DHTR AccelSensor;** 行后添加 DHT11 定义和初始化

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //Define signal pin of DHT sensor 
// #define DHTPIN PIN_WIRE_SCL //Use I2C port as Digital Port */
#define DHTTYPE DHT11 //Define DHT sensor type 
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor
```

**注意：** DHT11 传感器可以连接到 Wio Terminal 上的两个 Grove 端口。如果使用 **数字端口**，引脚可以定义为 **0**，如果使用 **I2C 端口**，引脚可以定义为 **PIN_WIRE_SCL**。端口图将在本文档后面显示

- **步骤 16：** 在 **SendTelemetry()** 函数下添加以下代码来解析 json 文件以及遥测数据

```cpp
static az_result SendTelemetry()
{
    float accelX;
    float accelY;
    float accelZ;
    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);

    int light;
    light = analogRead(WIO_LIGHT) * 100 / 1023;

    int temp; //assign variable to store temperature
    int humi; //assign variable to store humidity
    temp = dht.readTemperature(); //read temperature
    humi = dht.readHumidity(); //read humidity

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
dht.begin(); //start DHT sensor
```

现在我们已经完成了此演示的所有代码。

- **步骤 18：** 从左侧导航菜单点击 **PlatformIO 图标**，然后点击 **Build**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>


如果您看到以下消息，说明您已成功编译代码：

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Microsoft Azure IoT Central 设置

现在我们需要创建一个自定义设备模板，以便在 Azure IoT Central 仪表板上可视化来自 Wio Terminal 的数据

#### 创建新设备模板

- **步骤 1：** 访问 Azure IoT Central，从左侧导航菜单点击 `Device templates`

- **步骤 2：** 点击 **+ New**，点击 **IoT device**，然后点击 **Next:Customize**

- **步骤 3：** 在 **Device template name** 框中输入名称，然后点击 **Next:Review**

- **步骤 4：** 点击 **Create**

#### 导入自定义设备模型

- **步骤 1：** 点击 **Import a model**

- **步骤 2：** 导航到我们之前使用的 **wioterminal-aziot-example-0.10** 文件夹，找到 **seeedkk-wioterminal-wioterminal_aziot_example.json** 文件并点击它

- **步骤 3：** 点击 **Open**

- **步骤 4：** 从左侧菜单点击 **Views**，然后点击 **Generate default views**

- **步骤 5：** 点击 **Generate default dashboard view(s)**

- **步骤 6：** 从左侧菜单导航到 **Overview**，根据您的偏好自定义仪表板。

**注意：** 我们在本文档中之前已经提到了如何自定义仪表板

- **步骤 7：** 按照以下配置

| 磁贴名称 | 磁贴大小 | 磁贴可视化 |
|-|-|-|
| Light Intensity | 2 x 2 | Line chart |
| Light Intensity | 1 x 1 | Last Known Value |
| Temperature (C), Humidity (%RH) | 2 x 2 | Line chart |
| Temperature (C) | 1 x 1 | Last Known Value |
| Humidity (%RH) | 1 x 1 | Last Known Value |
| Left button | 1 x 1 | KPI |
| Middle button | 1 x 1 | KPI |
| Right button | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 8：** 点击 **Save** 和 **Publish**

### Wio Terminal 设置

#### 硬件设置

- 将 **Grove - Temperature and Humidity Sensor (DHT11)** 连接到 Wio Terminal 上的 **Grove Digital Port**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>


#### 软件设置

##### 将代码上传到 Wio Terminal

现在我们需要将代码上传到 Wio Terminal，以将遥测数据发送到 Azure IoT Central

- **步骤 1：** 回到 VS Code，点击 **PlatformIO 图标**，然后点击 **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>


##### Wi-Fi 和 Azure IoT 配置

接下来，让我们继续配置 Wi-Fi 和 Azure IoT 连接，就像我们之前做的那样

- **步骤 1：** 按住 3 个按钮并打开 Wio Terminal 以进入配置模式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>


- **步骤 2：** 打开串口控制台应用程序，如 [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **步骤 3：** 输入正确的串口 **COM Port**，设置波特率为 **9600** 并进入 Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>


- **步骤 4：** 在键盘上按 **ENTER**，在串口终端中输入 **help** 以查看配置用法

**注意：** 现在我们不需要输入 WiFi SSID 和密码，因为它们已经从之前的配置中保存了

- **步骤 5：** 通过访问之前在 [Azure IoT Central](https://apps.azureiotcentral.com) 上创建的应用程序来设置 Azure IoT 的连接信息

- **步骤 6：** 从左侧导航菜单导航到 `Administration > Device Connection`，并将 **ID scope** 复制到**记事本**中

- **步骤 7：** 点击 **SAS-IoT-Devices** 并将 **primary key** 复制到**记事本**中

- **步骤 8：** 访问之前打开的串口终端，输入 **set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name`

**注意：** 确保在每个字段之间添加一个空格，您可以决定选择的 `device name`。

- **步骤 9：** 通过将开关滑动到远离 ON 位置并释放来重置 Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>


现在您将能够看到 Wio Terminal LCD 显示它正在连接到 Wi-Fi，然后连接到 Azure IoT Hub。之后，它将显示正在发送到 Azure IoT Central 的遥测数据。

### 在 Azure IoT Central 上可视化

回到 Azure IoT Central，从左侧导航菜单点击 **Devices**，点击您的 **Device name**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>


现在您将能够在 Microsoft Azure IoT Central 仪表板上可视化来自 Wio Terminal 的所有传感器数据！

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