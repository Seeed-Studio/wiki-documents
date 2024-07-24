---
title: 将Wio Terminal连接到Microsoft Azure IoT Central
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/
slug: /cn/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central
last_update:
  date: 3/11/2024
  author: 金菊
---

# 将Wio Terminal连接到Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>


## 简介 

在本教程中，我们将指导您将Wio Terminal连接到Microsoft Azure IoT Central，并将Wio Terminal上的传感器/硬件（如三轴加速度计、光传感器、3个按钮）的遥测数据发送到Microsoft Azure IoT Central。然后，您将能够在交互式仪表板上可视化传感器数据。您还将能够使用Azure IoT Central来控制硬件，例如触发Wio Terminal上的蜂鸣器发出声音。Microsoft Azure IoT Central支持HTTP、MQTT和AMQP通信协议，但在本教程中我们将使用MQTT协议。

### 什么是Microsoft Azure？

[Microsoft Azure](https://azure.microsoft.com) 是微软的公共云计算平台。您可以使用Microsoft Azure通过由微软管理的数据中心构建、测试、部署和管理应用程序和服务。

此外，它提供了一系列云服务，包括计算、分析、存储和网络。Microsoft Azure提供软件即服务（SaaS）、平台即服务（PaaS）、基础设施即服务（IaaS）和无服务器服务。最后，它支持许多不同的编程语言、工具和框架。

### 什么是Microsoft Azure IoT？

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) 是由微软管理的一系列云服务，用于连接、监控和控制数十亿个物联网资产。它包括用于设备和设备的安全性和操作系统，以及帮助企业构建、部署和管理物联网应用程序的数据和分析功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>


### 什么是Microsoft Azure IoT Central？

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) 是一个完全托管的全球物联网SaaS（软件即服务）解决方案，可轻松连接、监控和管理规模化的物联网资产。它具有高度安全性，在您的业务增长时可以进行扩展，并确保您的投资可重复使用，并与现有的业务应用程序集成。它还弥合了业务应用程序和物联网数据之间的差距。最后，它提供集中管理，以重新配置和更新设备。

### 什么是IoT Plug and Play？

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) 使解决方案构建者能够在没有任何手动配置的情况下将智能设备集成到其解决方案中。在IoT Plug and Play的核心是设备模型，设备使用该模型向IoT Plug and Play启用的应用程序广告其能力。它包含以下内容：

- 属性：表示设备或其他实体的只读或可写状态
- 遥测：设备发送的数据
- 命令：描述设备上可以执行的功能或操作

IoT Plug and Play认证设备消除了在Azure IoT Central中配置设备的麻烦，例如创建模板和添加功能和接口。

### IoT Plug and Play认证设备

IoT Plug and Play认证设备是在 [Azure Certified Device Catalog](https://devicecatalog.azure.com) 中带有IoT Plug and Play徽标的设备。

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 是一个经过IoT Plug and Play认证的设备。

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>


要获得IoT Plug and Play认证，您需要满足一些条件，其中之一是将定义设备功能的DTDL（数字孪生定义语言）模型发布到GitHub上的 [Azure/ iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) 存储库中。

这使得使用IoT Plug and Play认证设备的云服务可以从此存储库了解设备的功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>


## 将Wio Terminal连接到Microsoft Azure IoT Central通过MQTT

如前所述，我们将使用MQTT协议在Wio Terminal和Microsoft Azure IoT Central之间进行通信。然而，如果您的要求是如此，您也可以使用HTTP桥接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>


### Microsoft Azure IoT Central设置 

首先，您需要访问Microsoft Azure IoT Central，登录到您的Microsoft帐户并为您的项目创建一个新的应用程序。

- **步骤  1:** 访问 [此处](https://apps.azureiotcentral.com) 创建一个新的应用程序。

- **步骤  2:**  点击左侧导航菜单中的 **Build** 然后点击 **Custom apps**

**注:** 如果提示，请登录您的Microsoft帐户。

- **步骤  3:** 填写 **Application name** 并在 **Free** 下选择 **Pricing plan** 。

**注:** 填写应用程序名称后，应用程序URL将自动生成。

- **步骤  4:** 点击 **Create** 以创建新的应用程序。

现在，您已成功设置Azure IoT Central！

### 设置Wio Terminal 

#### 更新RTL8720固件

我们需要为Wio Terminal上的Realtek RTL8720无线核心更新固件。请按照 [此 wiki](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview) 中的说明来更新RTL8720固件。

**注:** 确保根据发布说明中指定的版本更新 [firmware](https://github.com/SeeedJP/wioterminal-aziot-example/releases) 。

#### 下载并上传示例代码到Wio Terminal

我们首先使用一个示例代码，该代码将来自Wio Terminal上的内置传感器的遥测数据发送到Microsoft Azure IoT Central。

##### 下载示例代码

- **步骤  1:** 转到GitHub上的 [this repo](https://github.com/SeeedJP/wioterminal-aziot-example) 。
- **步骤  2:** 点击 **Releases**
- **步骤  3:** 在 **Latest release** 下，点击 **wioterminal-aziot-example.uf2** 来下载 .uf2 文件。

##### 上传示例代码到Wio Terminal

- **步骤  1:**  将Wio Terminal连接到电脑并打开它。
- **步骤  2:** 通过将电源开关向远离“ON”位置滑动，并释放，然后再次滑动并释放，进入 **Bootloader Mode** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>


**注:** 一旦Wio Terminal进入Bootloader模式，蓝色LED将以与闪烁不同的方式呼吸。

- **步骤  3:** 在电脑上打开文件资源管理器，您将看到一个名为 **Arduino** 的新的外部驱动器。

- **步骤  4:** 将之前下载的 **.uf2 file** 拖放到这个 **Arduino drive** 中。

- **步骤  5:** 关闭 Wio Terminal 。

现在，我们已成功将示例代码上传到Wio Terminal。

##### 配置Wi-Fi和Azure IoT

接下来，让我们继续配置Wi-Fi和Azure IoT连接。

- **步骤  1:**  按住3个按钮并打开Wio Terminal，进入配置模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>


- **步骤  2:** 打开类似于 [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) 的串行控制台应用程序。

- **步骤  3:** 输入正确的串行 **COM Port**, 将波特率设置为 **9600** 然后进入Wio Terminal。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>


- **步骤  4:** 在串行终端中按下 **ENTER** 键，然后输入 **help** 以查看配置使用方法。

- **步骤  5:** 通过输入 **set_wifissid** `your_WI-Fi_network_name` 设置Wi-Fi SSID。

**Note:** 请确保在每个字段之间添加单个空格

- **步骤  6:** 通过输入 **set_wifipwd** `your_WI-Fi_network_password` 设置Wi-Fi密码。

**Note:** 请确保在每个字段之间添加单个空格

- **步骤  7:** S访问之前创建的 [Azure IoT Central](https://apps.azureiotcentral.com) 应用程序，设置Azure IoT的连接信息。

- **步骤  8:** 从左侧导航菜单中导航到 `Administration > Device Connection` 将 **copy the ID scope**   复制到  **notepad** 中。

- **步骤  9:** 点击 **SAS-IoT-Devices** 将 **primary key** 复制到 **notepad** 中。

- **步骤  10:** 返回之前打开的串行终端，输入 **set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name` 

**注:** 请确保在每个字段之间添加单个空格，并可以根据您的选择决定一个  `device name` 。

- **步骤  11:** 通过将开关向下滑动远离“ON”位置并释放来重置 Wio Terminal 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>


现在，您将能够看到Wio终端的LCD显示它正在连接到Wi-Fi，然后连接到Azure IoT中心。之后，它将显示发送到Azure IoT Central的遥测数据。

### 在Microsoft Azure IoT Central上显示遥测数据 

我们将继续在Azure IoT Central仪表板上显示来自Wio终端的三轴加速度计、光传感器和3个按钮的传入遥测数据。

- **步骤  1:** 打开之前访问过的Azure IoT Central仪表板。

- **步骤  2:** 从左侧导航菜单中点击  **Devices** 。

- **步骤  3:** 在设备下方将看到 **Seeed Wio Terminal** 。点击它。

- **步骤  4:** 点击配置之前设置的 **device name** 的条目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/wio_demo.png" alt="pir" width={800} height="auto" /></p>


现在，您将能够在交互式仪表板上可视化来自内置的三轴加速度计的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/accel_demo.png" alt="pir" width={800} height="auto" /></p>


这是默认视图，我们需要进行一些更改以显示其他遥测数据。

- **步骤  5:** 从左侧导航菜单中点击 **Device templates** 然后点击 **Seeed Wio Terminal** 来配置模板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/device_template.png" alt="pir" width={400} height="auto" /></p>


- **步骤  6:** 在左侧导航菜单中点击 **Overview** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview.png" alt="pir" width={400} height="auto" /></p>


- **步骤  7:** 折叠 **select a telemetry** 下拉菜单，选择要可视化的遥测数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview_edit.png" alt="pir" width={800} height="auto" /></p>


- **步骤  8:** 点击 **Add tile** 您将看到该磁贴已添加到Azure IoT Central仪表板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_add.png" alt="pir" width={300} height="auto" /></p>


**注:** 您将看到该磁贴已添加到Azure IoT Central仪表板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/resize.png" alt="pir" width={400} height="auto" /></p>


- **步骤  9:**  对于3个按钮 (left, center, right) ，重复相同的步骤。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/draft_visual.png" alt="pir" width={850} height="auto" /></p>


**注:** 这里我们配置了以下内容：

|磁贴名称 | 磁贴大小 | 磁贴可视化 |
|-|-|-|
| 光强度 | 2 x 2 | 折线图 |
|左按钮 | 1 x 1 | 关键绩效指标（KPI） |
|右按钮 | 1 x 1 | 关键绩效指标（KPI）I |
|左按钮 | 2 x 2 | 关键绩效指标（KPI）I |

- **步骤  10:** 点击 **Save** 和 **Publish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/save.png" alt="pir" width={600} height="auto" /></p>


- **步骤  11:** 返回Azure IoT Central仪表板，您将能够可视化来自Wio终端的所有数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/final.png" alt="pir" width={750} height="auto" /></p>

- **步骤  12:** 您还可以点击 **Raw data** 标签以实时查看所有遥测数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/raw_data.png" alt="pir" width={700} height="auto" /></p>


#### 添加发送电子邮件的规则

IoT Central中的规则用作自定义响应工具，可以在连接的设备上主动监视的事件触发时触发
例如，在此演示中，我们可以设置IoT Central在光强度低于50时发送电子邮件。

- **步骤  1:** 在Azure IoT Central的左侧导航菜单中点击 **Rules** 。

- **步骤  2:** 点击 **+New** 或者 **Create a rule** 。

- **步骤  3:** 为规则输入名称。 

- **步骤  4:** 在 **Device template** 下, 选择 **Seeed Wio Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **步骤  5:** 在 **Conditions** 下, 打开 **time aggregation** ，并选择一个 **time window** 并在这里，我们将设置 **5 minutes** 。

**注:** 每隔 **xx** 分钟，规则在最后 **xx** 分钟的数据上进行一次评估。

- **步骤  6:** 在 **Telemetry** 下, 选择您选择的遥测数据。在这里，我们将设置为光强度 **Light intensity** 。

- **步骤  7:** 在 **Aggregation** 下, 选择 **Average** 。这将在设置的 **time window** 之前取得平均值。

- **步骤  8:** 在 **Operator** 下, 选择您选择的条件。在这里，我们将使用 **is less than** 条件。

- **步骤  9:** 在 **Value** 下输入一个值。在这里，我们将输入 **50** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>


- **步骤  10:** 在 **Actions** 下, 点击 **Email** 。

- **步骤  11:** 为电子邮件输入 **Display name**, **To address** 和 **Note** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>


**Note:** 请注意，此处的 **email address** 应添加到此 **Azure IoT Central Application** 中，并至少登录一次。

- 导航到 `Administration > Users` ,点击 **Assign user**, 填写 **Email**, 分配一个 **Role** 并点击 **Save** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>


- **步骤  12:** 点击 **Done** 。

- **步骤  13:** 最后，点击 **Save** 。

现在，我们已成功创建了一个发送电子邮件的规则。

### 通过Microsoft Azure IoT Central控制硬件 

您不仅可以在Azure IoT Central上查看遥测数据，还可以使用它来控制硬件。在这个演示中，我们可以控制Wio Terminal上的内置蜂鸣器，并指定蜂鸣器发出声音的持续时间。

- **步骤  1:** 点击 **Command** 选项卡。

- **步骤  2:** 在 **Duration** 列中输入一个 **value** 。

**注:** 值以毫秒为单位。例如：1000 = 1000毫秒 = 1秒。

- **步骤  3:** 单击 **Run**, 您将能够听到蜂鸣器在指定的持续时间内发出的蜂鸣声。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>


## 如何添加其他传感器？

您可以将任何传感器添加到Wio Terminal，并将连接的传感器的遥测数据发送到Azure IoT Central进行可视化显示。我们将连接一个 [Grove - Temperature & Humidity Sensor (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) 到Wio Terminal，并将温度和湿度数据发送到Azure IoT Central以在仪表板上可视化。

### Microsoft Visual Studio Code 设置步骤

#### 下载、安装和配置Visual Studio Code

如果我们想要将更多传感器添加到Wio终端以将遥测数据发送到Azure IoT Central，我们不能像之前那样简单地使用.uf2文件。因为代码已经编译在.uf2文件中。因此，如果我们想要向演示中添加更多代码，我们需要使用一个名为Microsoft Visual Studio Code的集成开发环境（IDE），添加必要的代码，然后将它们上传到 Wio Terminal 。

现在，让我们开始在计算机上安装Microsoft Visual Studio Code的过程：

- **步骤  1:** 访问 code.visualstudio.com 并单击 **Download** 。

**注:** 根据您的操作系统选择安装程序。

- **步骤  2:** 完成安装向导，完成安装过程。

- **步骤  3:** 打开Visual Studio Code。

- **步骤  4:** 从左侧导航菜单中单击 **Extensions** ，然后在搜索框中键入 **platformIO** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>


- **步骤  5:** 单击 **install** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>


#### 在Visual Studio Code上的演示代码

- **步骤  1:** 访问 [此链接](https://github.com/SeeedJP/wioterminal-aziot-example/releases) 以查找 [SeeedJP/wioterminal-aziot-example repo](https://github.com/SeeedJP/wioterminal-aziot-example) 中的可用发布版本。

- **步骤  2:** 导航到 **Latest release** ，在 **Assets** 下, 点击 **Source code (zip)**. 这将下载源代码的.zip文件。

- **步骤  3:** 解压缩 **.zip file** 。

- **步骤  4:** 返回到Visual Studio Code，导航到 `File > Open Folder...` 。

- **步骤  5:**  选择我们之前解压缩的文件夹，然后单击 **Select Folder** 。

- **步骤  6:**  从左侧导航菜单中导航到 `wioterminal-aziot-example-0.10 > include > config.h` from the left navigation menu

- **步骤  7:** 一旦打开了 **config.h** 找到 **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** 并将其更改为 **"dtmi:local:wioterminal_aziot_example;5"**

**注:** **dtmi:local:wioterminal_aziot_example;5** 是模型ID。

- **步骤  8:**  从左侧导航菜单中导航到 `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json` 。

- **步骤  9:** 一旦打开了 **seeedkk-wioterminal-wioterminal_aziot_example.json** ， 找到 **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** 并同样将其更改为 **"dtmi:local:wioterminal_aziot_example;5"** 。

**注:** **seeedkk-wioterminal-wioterminal_aziot_example.json** 是我们之前提到的DTDL模型。

当前该模型定义了 **acceleration, light intensity and button count** 的数据。我们将继续添加 **temperature and humidity** 到这个DTDL模型中。

- **步骤  10:** 在 **"contents": **下方添加以下代码:

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

**注:** 在这里， **name** 是我们稍后在代码中用来识别特定遥测数据的名称， **unit** 是与数据对应的单位， **displayName** 是在Azure IoT Central上显示的名称（英语使用"en"，日语使用"ja"）， **schema** 是数据类型。

- **步骤  11:** 从左侧导航菜单中导航到 `wioterminal-aziot-example-0.10 > platformio.ini` 。

- **步骤  12:** 打开 **platformio.ini** 文件后，在 **lib_deps** 下, 添加 **https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor** 。

```sh 
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```
**注:** 这是用于Grove - 温湿度传感器（DHT11）的库。

- **步骤  13:** 从左侧导航菜单中导航到 `wioterminal-aziot-example-0.10 > src > main.cpp` 。

- **步骤  14:** O打开 **main.cpp** 文件后，在 **#include "CliMode.h"** 行之后添加DHT11库。

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **步骤  15:** 在 **LIS3DHTR AccelSensor;** 行之后添加DHT11的定义和初始化。

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //Define signal pin of DHT sensor 
// #define DHTPIN PIN_WIRE_SCL //Use I2C port as Digital Port */
#define DHTTYPE DHT11 //Define DHT sensor type 
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor
```

**注:** DHT11传感器可以连接到Wio Terminal上的两个Grove端口。如果使用 **Digital Port** 则可以将引脚定义为 **0** 如果使用  **I2C port** ，则可以将引脚定义为 **PIN_WIRE_SCL** 。端口图将在本文档后面显示。

- **步骤  16:** 在 **SendTelemetry()** 函数下添加以下代码，以解析JSON文件和遥测数据。

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

- **步骤  17:** 在 **ntp.begin** 行之后添加以下代码，以启动DHT11传感器。

```cpp
dht.begin(); //start DHT sensor
```

现在，我们已经完成了此示例的所有代码。 

- **步骤  18:** 点击左侧导航菜单中的 **PlatformIO icon** 然后点击 **Build** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>


如果看到以下消息，则成功编译了代码:

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Microsoft Azure IoT Central设置

现在，我们需要创建一个自定义设备模板，以便可以在Azure IoT Central仪表板上可视化Wio Terminal的数据。

#### 创建新的设备模板

- **步骤  1:** 访问 Azure IoT Central ，点击左侧导航菜单中的 `Device templates`  。

- **步骤  2:** 点击 **+ New**, 点击 **IoT device** 然后点击 **Next:Customize** 。

- **步骤  3:** 在 **Device template name** 框中输入名称，然后点击 **Next:Review** 。

- **步骤  4:** 点击 **Create** 。

#### 导入自定义设备模型

- **步骤  1:** 点击 **Import a model** 。

- **步骤  2:** 导航到之前使用过的 **wioterminal-aziot-example-0.10** 文件夹，找到    **seeedkk-wioterminal-wioterminal_aziot_example.json** 文件，然后点击它。

- **步骤  3:** 点击 **Open** 。

- **步骤  4:** 点击 **Views** ，然后点击 **Generate default views** 。

- **步骤  5:** 点击 **Generate default dashboard view(s)** 。

- **步骤  6:** 导航到左侧菜单中的 **Overview** ，根据您的喜好自定义仪表板。

**注:** 我们之前在文档中提到了如何自定义仪表板。

- **步骤  7:** 遵循以下配置

|图块名称 | 图块大小 | 图块可视化 |
|-|-|-|
| 光强度 | 2 x 2 | 	折线图 |
| 光强度 | 1 x 1 | 最新值 |
| 温度（摄氏度）、湿度（%RH） | 2 x 2 | 	折线图 |
| 温度（摄氏度） | 1 x 1 | 最新值 |
| 湿度（%RH） | 1 x 1 | 最新值 |
| 左按钮 | 1 x 1 | KPI |
| 中间按钮 | 1 x 1 | KPI |
| 右按钮 | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>


- **步骤  8:** 点击 **Save** 点击 **Publish**

### Wio Terminal 设置

#### 硬件设置

- 将 **Grove - Temperature and Humidity Sensor (DHT11)** 连接到Wio Terminal上的 **Grove Digital Port** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>


#### 软件设置

##### 将代码上传到Wio Terminal

现在我们需要将代码上传到Wio Terminal，以将遥测数据发送到Azure IoT Central。

- **步骤  1:** 返回到VS Code，点击 **PlatformIO icon** 然后点击 **Upload** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>


##### Wi-Fi和Azure IoT配置

接下来，让我们继续配置Wi-Fi和Azure IoT连接，就像之前所做的那样。

- **步骤  1:**  按住3个按钮并打开Wio Terminal以进入配置模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>


- **步骤  2:** 打开串行控制台应用程序，例如 [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **步骤  3:** 输入正确的串行 **COM Port**, 将波特率设置为 **9600** ，然后进入Wio Terminal 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>


- **步骤  4:** 在键盘上按下 **ENTER** 然后在串行终端中输入 **help** 以查看配置用法。

**注:**  现在我们不需要输入Wi-Fi的SSID和密码，因为它们已经保存在先前的配置中。

- **步骤  5:** 设置Azure IoT的连接信息，访问之前在 [Azure IoT Central](https://apps.azureiotcentral.com) 中创建的应用程序。

- **步骤  6:** 从左侧导航菜单中导航到 `Administration > Device Connection` 然后将 **copy the ID scope** 复制到 **notepad** 。

- **步骤  7:** 点击 **SAS-IoT-Devices** ，将 **primary key** 复制到 **notepad** 。

- **步骤  8:** 访问先前打开的串行终端，输入 **set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name` 

**注:** 确保每个字段之间添加一个空格，并且您可以自己决定一个 `device name` 。

- **步骤  9:** 通过将开关向远离“ON”位置滑动并释放来重置Wio Terminal。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>


现在，您将能够看到Wio Terminal LCD显示它正在连接到Wi-Fi，然后连接到Azure IoT Hub。之后，它将显示将遥测数据发送到Azure IoT Central。

### 在Azure IoT Central上可视化

返回Azure IoT Central，从左侧导航菜单中点击 **Devices**, 然后点击您的 **Device name** 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>


现在，您将能够在Microsoft Azure IoT Central仪表板上可视化来自Wio Terminal的所有传感器数据！

## 技术支持 & 产品讨论

 感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们的产品拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
