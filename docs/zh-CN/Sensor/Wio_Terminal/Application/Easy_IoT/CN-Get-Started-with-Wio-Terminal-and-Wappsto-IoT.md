---
description: Wio Terminal和Wappsto IoT入门指南
title: Wio Terminal和Wappsto IoT入门指南
keywords:
- Wio_terminal Easy_IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Get-Started-with-Wio-Terminal-and-Wappsto-IoT
last_update:
  date: 3/11/2024
  author: 金菊
---

# Wio Terminal和Wappsto IoT入门指南

## 概述

**Wio Terminal** 是一款基于SAMD51的微控制器，配备 **Realtek RTL8720DN** 无线连接功能，与Arduino和MicroPython兼容。目前，仅支持Arduino的无线连接功能。它运行在 **120MHz** 最高可提升至200MHz），具有 **4MB** 外部闪存和 **192KB** RAM。它支持蓝牙和Wi-Fi，为物联网项目提供支持。Wio Terminal本身配备了 **2.4英寸LCD屏幕, 内置IMU（LIS3DHTR）, 麦克风, 蜂鸣器, microSD卡插槽, 光传感器和红外发射器（IR 940nm）** 此外，它还具有两个多功能的Grove端口，用于 [Grove Ecosystem](https://www.seeedstudio.com/grove.html) 。

Wappsto是一个强大而智能的应用程序，可以轻松设置自动从各种来源获取数据。它具有集成的标准仪表板，用于监视和分析数据。

Wappsto是一个强大而智能的应用程序，可以轻松设置自动从各种来源获取数据。它具有集成的标准仪表板，用于监视和分析数据。

Wappsto by Seluxit是一个功能强大的物联网平台，具有易于定制的仪表板，可以轻松可视化实时或历史数据，以及许多其他功能，包括云自动化。

Wappsto的iOS和Android应用程序还可以让您即时查看和控制设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" alt="pir" width={500} height="auto" /></p>

## Wappsto 功能

在连接Wappsto时，您可以执行以下功能。有关更多信息，请在 [此处](https://www.seluxit.com/iot-products/iot-solution-builder/wapps)了解如何更好地使用您的数据。

### 仪表板功能

#### 仪表板类型

1. 空白仪表板 - 静态干净的画布，可混合和匹配小部件
2. 车队管理 - 动态干净的画布，可混合和匹配小部件 - 可轻松在设备之间切换，以获取可能的异常值概览。
3. 地理位置仪表板 - 设备的地图概览，可以根据设备警报进行过滤。<br />
![](https://media-exp1.licdn.com/dms/image/C4E22AQEUQmsBHpzjaw/feedshare-shrink_2048_1536/0/1646730023138?e=1651708800&v=beta&t=cTkLbXeXVVgWV9a-Is62CDUlb3s4t-GqqSpBsusyy8A)
<!-- 图片链接有问题 -->

- 使用筛选列表过滤器的地理位置定位:
![](https://media-exp1.licdn.com/dms/image/C4E22AQHzGNNMQWDfLw/feedshare-shrink_2048_1536/0/1646902827428?e=1651708800&v=beta&t=hChKemrGzqtM53xwikfvONJu_2DyrCSMX17jMKXuybc)
<!-- 图片链接有问题 -->

#### 空白和车队管理仪表盘小部件

1. 过滤列表 - 在地理位置仪表板中配置设备值限制，触发警报和视觉提示。
 ![](https://media-exp1.licdn.com/dms/image/C4E22AQGPxAJgcCVbKw/feedshare-shrink_2048_1536/0/1646809215991?e=1651708800&v=beta&t=-XvhET6EEvVJetMns_UcJ9AY8hBIcVw_R8XEi0vUZhI)
<!-- 图片链接有问题 -->

2. 历史位置小部件 - 基于配置的时间范围内设备位置在地图上绘制（每分钟最多1个标记，标记之间最小距离为50米）。
![](https://media-exp1.licdn.com/dms/image/C4E22AQE8TWlSnbBS0Q/feedshare-shrink_2048_1536/0/1647252033404?e=2147483647&v=beta&t=YWuyjUFveAiTut4AwMgXFRZL5BiaqJYKV8MeYcwq31E)

3. 图表小部件 - 选择和配置多个数据源、时间范围、图表样式和聚合方法。也可以切换为显示实时数据。
![](https://media-exp1.licdn.com/dms/image/C4E22AQERLllOaWHaeA/feedshare-shrink_1280/0/1647331243930?e=1651708800&v=beta&t=wxkgoFKpxV8A2j-KsXqKRm6t6gnAEorUuR4UaSsu1pk)
<!-- 图片链接有问题 -->

4. 实时数据示例：
![](https://media-exp1.licdn.com/dms/image/C4E22AQHexShrPAZxHw/feedshare-shrink_1280/0/1647856842400?e=1651708800&v=beta&t=CziKwYL3y3drg7PyCN-NcC3t6lRjqTxoMoguKy9h_yE)
<!-- 图片链接有问题 -->

5. 值列表小部件 - 在框中显示实时数据和控制/期望状态值。
![](https://media-exp1.licdn.com/dms/image/C4E22AQHLKi07FF-vjg/feedshare-shrink_1280/0/1647414020945?e=2147483647&v=beta&t=5PjZ0-bA5knscCdfUufKY7b98tXlXbWtpIfFjsZ_ykg)

6. 指南针小部件 - 显示单个设备的角度和实时数据。
![](https://media-exp1.licdn.com/dms/image/C4E22AQH0uYCQd8y7XQ/feedshare-shrink_1280/0/1647522120991?e=2147483647&v=beta&t=9Biv-IoQukTwfiyEd1siexYGwS5EX5uCaVl_dROZYsI)

7. 液态图表小部件 - 显示单个设备的相对水平和实时数据。
![](https://media-exp1.licdn.com/dms/image/C4E22AQEPNSFj-MKSVw/feedshare-shrink_2048_1536/0/1647609902322?e=2147483647&v=beta&t=suXEme0-tfR6PQQIAzU7xw8hD7CBTGLZ8aAOxogm7t0)

8. 仪表盘小部件 - 在仪表盘中显示单个值的实时数据，可配置的颜色方案和限制。
![](https://media-exp1.licdn.com/dms/image/C4E22AQGwQ7COEUwKwA/feedshare-shrink_1280/0/1647939626856?e=2147483647&v=beta&t=NfZBE7e7R-kUNNRUpEiEyRYVO-xXBwrI13NjtvqZHjU)

9. 当前位置小部件 - 在其他小部件旁边显示一个或多个设备的当前位置。
![](https://media-exp1.licdn.com/dms/image/C4D22AQFCTjZrX8RU4g/feedshare-shrink_2048_1536/0/1648046103353?e=1651708800&v=beta&t=CFn2wQhscrECrcNU65PcI7HpuK7NhHtZKVMXQ9VzoWA)
<!-- 图片链接有问题 -->

10. 日志列表小部件 - 显示一个或多个设备或值的日志，与其他小部件一起显示。
![](https://media-exp1.licdn.com/dms/image/C4E22AQEFmHPALVfFhw/feedshare-shrink_2048_1536/0/1648126885539?e=2147483647&v=beta&t=eKmZ70IIQZAq3DR96JXB_nsmSsvBqe8gKIJfG0XZXZs)

### 云自动化和Web应用程序

1. Twitter 集成
2. Hue 集成
3. Shelly 集成
4. 天气预报集成（yr.no）
   - Blocks -  云自动化
   - Blockly NoCode 编程
   - Blockly javascript 编程
   - 设置在Wappsto上连接的所有设备和服务之间的自动化和交互
   - Twitter 和 Wappsto:交叉自动化示例： <https://bit.wappsto.com/project/wappsto-blocks/>

### Wappsto的常被忽视的功能

1. 分布式云服务，具有多个备份
2. 设备共享
3. 端到端加密（传输加密）
4. 设备安全性（唯一设备和网络密钥）
5. 数据转发
6. 数据提取（CSV）
7. 跨平台智能登录（电子邮件、谷歌、Facebook、Apple登录）
8. 多平台：网站+智能手机应用程序

## 入门指南

### 所需硬件

- Wio Terminal x 1
- 计算机 x 1
- USB Type-C 数据线 x 1

### 所需软件

请检查此 [连接](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#software)。

## 更新 Wio Terminal WiFi 固件

请检查此 [连接](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware)。

## Wappsto 先决条件

### Wappsto 帐户

假设您已在 [Wappsto](https://wappsto.com/)上创建了帐户，如果没有，请先创建一个。

### 在电脑上安装Arduino IDE

如果您没有安装，请参阅 <https://www.arduino.cc/en/Guide>

#### 安装 ArduinoJson 库

从库管理器中安装 ArduinoJson 库-详细信息请参阅 <https://arduinojson.org/v6/doc/installation/> 。

#### 安装此 Wappsto 库

要在 Arduino IDE 中安装此库，请将此项目下载为 zip 文件，点击 "Code"，然后选择 "Download ZIP"。
然后选择 "Sketch"->"Include Library"->"Add .Zip Library..."，详细信息请参阅 <https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries> 。

### 生成设备的证书和 ID

为了使您的物理设备向 Wappsto 标识自己，它需要一个网络 ID、服务器 CA 证书和客户端证书/密钥-所有这些都需要在 Wappsto.com 上生成，并放置在（如果与示例匹配）名为 wappsto_config.h 的文件中。

#### wappsto_config.h

为了帮助生成此文件，您可以使用此存储库中的 **Python Script** 位于 generate_config_header 文件夹中。
首次运行时，您可能需要安装所需的库。

```
cd <path to downloaded arduino_wappstoiot>
cd generate_config_header
pip install -r requirements.txt
```

要生成一个头文件：

1. 进入 `generate_config_header` 文件夹：

```
cd generate_config_header
```

2. 使用以下命令：

```
python main.py --type arduino
```

3. 然后您将被要求使用Wappsto上您的用户的电子邮件和密码进行登录。

4. 将新生成的文件 `wappsto_config.h` 复制到您的Arduino示例文件夹中。请注意，如果生成正确，它应该有一个有效的UUID (类似但不同于 `"d7fafe76-b020-4594-8f2a-aae11c6b6589"` 的字符串) ,定义为 `const char* network_uuid =`  行。

请注意，如果您同时安装了Python 2和Python 3，您可能需要使用以下命令：

```
pip3 install -r requirements.txt
python3 main.py --type arduino
```

如果您遇到以下错误：

```
ImportError: cannot import name 'soft_unicode' from 'markupsafe' 
```

这是由于另一个库的依赖关系发生了变化，可以使用此命令修复。

```
pip install -U MarkupSafe==0.20
```

#### 认领和所有权-不允许访问值

如果您创建的设备出现“不允许访问”值的错误，这是因为您要么还没有认领它，要么所有权已被重置。

由于您将成为制造商，您仍然可以在网络列表中看到设备，您可以看到它在线，但是您将无法查看值或控制设备。

要认领设备，请转到 <https://wappsto.com/devices> 上的"IoT Devices"选项卡，点击右上角的"+ Add an IoT device"按钮，然后在框中输入网络UUID。

如果您点击网络的删除按钮，将会取消设备的所有权，以便其他用户可以认领它。一旦设备被认领，其他用户将无法再次认领它。

## Wappsto库

### 所需结构

网络ID由 [Wappsto](https://wappsto.com/) 生成，并与证书关联。

```
├── "Network Name"
│   └── "Device 1 name"
│   |   └── "Value 1 name"
│   |   └── "Value 2 name"
|   |   ...
│   └── "Device 2 name"
│       └── "Value 1 name"
│       └── "Value 2 name"
...

```

请注意 "name" 具有额外的功能和规则。

- 网络中不能有具有相同名称的设备。
- 单个设备不能具有相同名称的值。（如上面的示例，可以在不同设备下使用相同的名称。）

在创建之前，库将向 Wappsto 查询是否存在具有该名称的设备/值，因此它将链接到正确的值。如果没有名称匹配的项，将创建一个新的。如果父级具有具有相同名称的多个子级，库将选择第一个可用的。

如果更改名称，将创建一个新的，但旧的不会被删除。您需要自己处理这个问题，例如使用 <https://wappsto.com/devices>

### 初始化 Wappsto

在创建 Wappsto 对象时，需要一个 WiFiClientSecure 的引用，示例代码如下：

```c
WiFiClientSecure client;
Wappsto wappsto(&client);
```

#### 设置配置并连接

```c
#include "wappsto_config.h"
...
wappsto.config(network_uuid, ca, client_crt, client_key);
if(wappsto.connect()) {
    // Connected
} else {
    // Failed to connect
}
```

### 可选的配置参数、日志和 ping

除了必需的命令之外，您还可以设置 ping 间隔和日志级别：

```c
wappsto.config(network_uuid, ca, client_crt, client_key, ping interval in minutes, log level);
```

- ping 间隔将从设备发送一个短数据包到 Wappsto，以保持连接活动。如果您的设备很少发送数据，添加此功能可能是一个好主意，以避免连接超时。
- ping 间隔将从设备发送一个短数据包到 Wappsto，以保持连接活动。如果您的设备很少发送数据，添加此功能可能是一个好主意，以避免连接超时。

```
   VERBOSE
   INFO
   WARNING
   ERROR
   NO_LOGS <- Default
```

### 创建您的网络

```c
myNetwork = wappsto.createNetwork("Network Name");
```

### 创建设备

```c
DeviceDescription_t myDeviceDescription = {
    .name = "Device name",
    .product = "Product name",
    .manufacturer = "Company name",
    .description = "Description of the product",
    .version = "1.0",
    .serial = "00001",
    .protocol = "Json-RPC",
    .communication = "WiFi",
};

myDevice = myNetwork->createDevice("Device Name", &myDeviceDescription);
```

#### 值

值可能是您最感兴趣的内容之一，可以是以下之一：

- 数字 - 整数或小数，这些将被记录并显示为图表。
- 字符串 - 人类可读的字符串（UTF-8）
- Blob - 数据，例如 base64 编码的图像、十六进制值等。
- Xml - 完整的 XML 文档

#### 读写数据

每个值可以有一个或两个数据点：

- 每个值可以有一个或两个数据点： [读取]
- 控制：从服务器发送到设备以控制设备的数据 [写入]

您的值可能是其中之一或两者都是。

### 值参数

为了解释这些参数，我们将使用一个放置在客厅中的温度值作为示例。

- name：值的名称，在这里是 "Living room"
- type：对于 UI 来找到正确类型的值，这里是 "temperature"
- The PERMISSION_e 参数告诉库是否应为此值创建报告和/或控制。
  - 读取 -> 报告状态
  - 写入 -> 控制状态
  - 读写 -> 报告和控制状态
- min: （仅适用于数字）最低值（由 UI 使用）
- max: 对于数字，是最大数字；对于字符串/ Blob，是最大长度
- step: （仅适用于数字）数字的步长，例如整数为 1，小数为 0.1
- unit: （仅适用于数字）该数字是否有单位，在温度示例中是 °C

第一次创建值时，数字值将为 NA，字符串/ Blob 将为空，报告和控制均如此。

如果值已经存在，则值的数据不会更改。如果您希望在设备重新启动时更新值，则必须调用报告/控制。

#### 创建数字值

```c
ValueNumber_t myNumberValueParameters = {   .name = "Living room",
                                            .type = "temperature", // value type
                                            .permission = READ_WRITE,
                                            .min = -20,
                                            .max = 100,
                                            .step = 0.1,
                                            .unit = "°C",
                                            .si_conversion = ""};

myNumberValue = myDevice->createValueNumber(&myNumberValueParameters);
```

#### 创建字符串值

```c
ValueString_t myStringValueParameters = { .name = "Value String Name",
                                          .type = "value type",
                                          .permission = READ_WRITE,
                                          .max = 200,
                                          .encoding = ""};

myStringValue = myDevice->createValueString("Value String Name", "value type", READ_WRITE, &myStringValueParameters);
```

#### 创建 Blob 值

```c
ValueBlob_t myBlobValueParameters =  { .name = "Value Blob Name",
                                       .type = "value type",
                                       .permission = READ_WRITE,
                                       .max = 200,
                                       .encoding = ""};

myBlobValue = myDevice->createValueBlob(&myBlobValueParameters);
```

#### 创建 XML 值

```c
ValueXml_t myXmlValueParameters =  { .name = "Value Xml Name",
                                     .type = "value type",
                                     .permission = READ_WRITE,
                                     .xsd = "test",
                                     .namespace = "test"};

myXmlValue = myDevice->createValueXml(&myXmlValueParameters);
```

#### 发送值报告

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.report("987");    // You can send numbers as a string you format
myNumberValue.report(myInt);    // Report the number as an int
myNumberValue.report(myDouble); // Report the number as a double


myStringValue.report("Example string");

myBlobValue.report("A5FF2C");

```

#### 设置控制值

通常，控制值只会从 wappsto.com 更新，但在启动或其他情况下，您可能需要设置当前值。
设置方法与报告类似：

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.control("987");    // You can send numbers as a string you format
myNumberValue.control(myInt);    // Set control as an int
myNumberValue.control(myDouble); // Set control as a double


myStringValue.control("Example string");

myBlobValue.control("A5FF2C");

```

## 在您的循环函数中添加 Wappsto

为了使 Wappsto 能够接收数据（控制、刷新和 ping），它必须包含在您的 Arduino 循环函数中-如果没有，您将永远不会收到任何带有数据的回调，而且连接可能会超时。

同时建议不要在循环中阻塞较长时间。

```
wappsto.dataAvailable();
```

### 接收值控制请求

您可以选择将控制数据转换为双精度浮点数，或者直接使用字符串。

```c
// Receive control with a number (double)
void controlNumberCallback(Value *value, double data, String timestamp)
{
    // handle control request
}

// Receive control with a string
void controlStringCallback(Value *value, String data, String timestamp)
{
    // handle control request
}

...
myNumberValue->onControl(&controlNumberCallback);
myStringValue->onControl(&controlStringCallback);
```

### 接收值刷新请求（仅报告值）

```c
void refreshNumberCallback(Value *value)
{
    // handle refresh request
}
...
myNumberValue->onRefresh(&refreshNumberCallback);

```

### 获取值的最新数据和时间戳

您可以通过使用以下函数访问最后接收/发送的数据和时间戳。
例如，在重新启动后，将检索在 Wappsto.com 中设置的最后一个控制状态，以便您的程序可以从该状态开始。

_注_ 从空值中检索 numberData 将返回 0；

```c
String ctrlData = myNumberValue.getControlData();

double ctrlDataNumber = myNumberValue.getControlNumberData();

String ctrlTime = myNumberValue.getControlTimestamp();

String reportData = myNumberValue.getReportData();

double reportDataNumber = myNumberValue.getReportNumberData();

String reportTime = myNumberValue.getReportTimestamp();
```

更多示例，请参阅示例文件夹中的代码，或在 Arduino IDE 中选择 'File -> Examples -> Wappsto'。

### 温度检测演示

在这里，我们将使用提供的温度示例，并在 Wappsto 上显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto2.png" alt="pir" width={500} height="auto" /></p>

- **步骤 1**. 上传代码后，您可以在 Wappsto 网站的 "IoT Devices" 中看到连接成功的显示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto3.png" alt="pir" width={800} height="auto" /></p>

- **步骤 2**. 在左侧单击 "Dashboards" 列，并选择 "Add widget"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto4.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3**. 这些提供的模块可以以多种方式显示数据，这里我们选择 "Chart"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto5.png" alt="pir" width={800} height="auto" /></p>

- **步骤 4**. 选择之前上传的 "Temperature Example"，然后点击 "Next"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto6.png" alt="pir" width={800} height="auto" /></p>

- **步骤 5**. 配置显示的数据。这里我们将数据设置为 "Line"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto7.png" alt="pir" width={800} height="auto" /></p>

- **步骤 6**. 设置完成后，我们就可以在仪表板上看到输出的数据了。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto8a.jpeg" alt="pir" width={800} height="auto" /></p>
