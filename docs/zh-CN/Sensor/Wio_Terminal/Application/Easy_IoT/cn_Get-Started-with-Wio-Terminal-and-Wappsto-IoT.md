---
description: 开始使用 Wio Terminal 和 Wappsto IoT
title: 开始使用 Wio Terminal 和 Wappsto IoT
keywords:
- Wio_terminal Easy_IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Get-Started-with-Wio-Terminal-and-Wappsto-IoT
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# 开始使用 Wio Terminal 和 Wappsto IoT

## 概述

**Wio Terminal** 是一款基于 SAMD51 的微控制器，具有由 **Realtek RTL8720DN** 提供的无线连接功能，兼容 Arduino 和 MicroPython。目前，无线连接仅支持 Arduino。它运行在 **120MHz**（可提升至 200MHz），具有 **4MB** 外部闪存和 **192KB** RAM。它支持蓝牙和 Wi-Fi，为物联网项目提供骨干网络。Wio Terminal 本身配备了 **2.4" LCD 屏幕、板载 IMU(LIS3DHTR)、麦克风、蜂鸣器、microSD 卡槽、光传感器和红外发射器(IR 940nm)。** 除此之外，它还有两个多功能 Grove 端口用于 [Grove 生态系统](https://www.seeedstudio.com/grove.html)，以及 40 个兼容树莓派的引脚 GPIO 用于更多扩展。

Wappsto 是一个强大、智能的应用程序，可以轻松设置为自动从各种来源获取数据。它具有集成的标准仪表板，用于监控和分析您的数据。

Wappsto 还提供工具，允许开发人员创建物联网应用程序作为具有集成和自动化功能的 Web 应用程序。Wappsto 中还集成了一个市场，开发人员和用户可以在其中分享他们的应用程序。

Seluxit 的 Wappsto 是一个强大的物联网平台，具有易于定制的仪表板，使可视化实时或历史数据变得轻而易举，还有许多其他功能，包括云自动化。

适用于 iOS 和 Android 的 Wappsto 应用程序，让您可以随时查看和控制设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" alt="pir" width={500} height="auto" /></p>

## Wappsto 功能

连接到 Wappsto 时，您可以操作以下功能。有关更多信息，您可以在[这里](https://www.seluxit.com/iot-products/iot-solution-builder/wapps)了解如何更好地利用您的数据。

### 仪表板功能

#### 仪表板类型

1. 空白仪表板 - 静态干净的画布，可混合和匹配小部件
2. 车队管理 - 动态干净的画布，可混合和匹配小部件 - 轻松在设备之间切换以获得可能异常值的概览。
3. 地理位置仪表板 - 设备的地图概览，可以基于设备警报进行过滤。<br />
![](https://media-exp1.licdn.com/dms/image/C4E22AQEUQmsBHpzjaw/feedshare-shrink_2048_1536/0/1646730023138?e=1651708800&v=beta&t=cTkLbXeXVVgWV9a-Is62CDUlb3s4t-GqqSpBsusyy8A)
<!-- 图片链接有问题 -->

- 使用过滤列表过滤器的地理位置：
![](https://media-exp1.licdn.com/dms/image/C4E22AQHzGNNMQWDfLw/feedshare-shrink_2048_1536/0/1646902827428?e=1651708800&v=beta&t=hChKemrGzqtM53xwikfvONJu_2DyrCSMX17jMKXuybc)
<!-- 图片链接有问题 -->

#### 空白和车队管理仪表板小部件

1. 过滤列表 - 配置设备值限制，触发警报和地理位置仪表板中的视觉提示。
 ![](https://media-exp1.licdn.com/dms/image/C4E22AQGPxAJgcCVbKw/feedshare-shrink_2048_1536/0/1646809215991?e=1651708800&v=beta&t=-XvhET6EEvVJetMns_UcJ9AY8hBIcVw_R8XEi0vUZhI)
<!-- 图片链接有问题 -->

2. 历史位置小部件 - 基于配置时间范围内的设备位置在地图上绘制。（每分钟最多 1 个标记，标记之间最少 50 米距离）
![](https://media-exp1.licdn.com/dms/image/C4E22AQE8TWlSnbBS0Q/feedshare-shrink_2048_1536/0/1647252033404?e=2147483647&v=beta&t=YWuyjUFveAiTut4AwMgXFRZL5BiaqJYKV8MeYcwq31E)

3. 图表小部件 - 选择和配置多个数据源、时间范围、图表样式和聚合方法。它也可以切换为显示实时数据。
![](https://media-exp1.licdn.com/dms/image/C4E22AQERLllOaWHaeA/feedshare-shrink_1280/0/1647331243930?e=1651708800&v=beta&t=wxkgoFKpxV8A2j-KsXqKRm6t6gnAEorUuR4UaSsu1pk)
<!-- 图片链接有问题 -->

4. 实时数据示例：
![](https://media-exp1.licdn.com/dms/image/C4E22AQHexShrPAZxHw/feedshare-shrink_1280/0/1647856842400?e=1651708800&v=beta&t=CziKwYL3y3drg7PyCN-NcC3t6lRjqTxoMoguKy9h_yE)
<!-- 图片链接有问题 -->

5. 数值列表小部件 - 在框中显示实时数据以及控制/期望状态值。
![](https://media-exp1.licdn.com/dms/image/C4E22AQHLKi07FF-vjg/feedshare-shrink_1280/0/1647414020945?e=2147483647&v=beta&t=5PjZ0-bA5knscCdfUufKY7b98tXlXbWtpIfFjsZ_ykg)

6. 指南针小部件 - 显示单个设备的角度和实时数据。
![](https://media-exp1.licdn.com/dms/image/C4E22AQH0uYCQd8y7XQ/feedshare-shrink_1280/0/1647522120991?e=2147483647&v=beta&t=9Biv-IoQukTwfiyEd1siexYGwS5EX5uCaVl_dROZYsI)

7. 液体图表小部件 - 显示单个设备的相对水平和实时数据。
![](https://media-exp1.licdn.com/dms/image/C4E22AQEPNSFj-MKSVw/feedshare-shrink_2048_1536/0/1647609902322?e=2147483647&v=beta&t=suXEme0-tfR6PQQIAzU7xw8hD7CBTGLZ8aAOxogm7t0)

8. 仪表盘小部件 - 在仪表盘中显示单个值的实时数据，具有可配置的颜色方案和限制。
![](https://media-exp1.licdn.com/dms/image/C4E22AQGwQ7COEUwKwA/feedshare-shrink_1280/0/1647939626856?e=2147483647&v=beta&t=NfZBE7e7R-kUNNRUpEiEyRYVO-xXBwrI13NjtvqZHjU)

9. 当前位置小部件 - 显示一个或多个设备的当前位置以及其他小部件。
![](https://media-exp1.licdn.com/dms/image/C4D22AQFCTjZrX8RU4g/feedshare-shrink_2048_1536/0/1648046103353?e=1651708800&v=beta&t=CFn2wQhscrECrcNU65PcI7HpuK7NhHtZKVMXQ9VzoWA)
<!-- 图片链接有问题 -->

10. 日志列表小部件 - 显示一个或多个设备或值的日志，以及其他小部件。
![](https://media-exp1.licdn.com/dms/image/C4E22AQEFmHPALVfFhw/feedshare-shrink_2048_1536/0/1648126885539?e=2147483647&v=beta&t=eKmZ70IIQZAq3DR96JXB_nsmSsvBqe8gKIJfG0XZXZs)

### 云自动化和 Web 应用程序

1. Twitter 集成
2. Hue 集成
3. Shelly 集成
4. 天气预报集成 (yr.no)
   - 块 - 云自动化
   - Blockly 无代码编程
   - Blockly javascript 编程
   - 在您连接到 Wappsto 的所有设备和服务之间设置自动化和交互
   - Twitter 和 Wappsto:bit 交叉自动化示例：[https://bit.wappsto.com/project/wappsto-blocks/](https://bit.wappsto.com/project/wappsto-blocks/)

### Wappsto 的一些容易被忽视的功能

1. 具有多重备份的分布式云服务
2. 设备共享
3. 端到端加密（传输加密）
4. 设备安全（唯一的设备和网络密钥）
5. 数据转发
6. 数据提取（CSV）
7. 跨平台智能登录（邮箱、谷歌、Facebook、苹果登录）
8. 多平台：网站 + 智能手机应用程序。

## 入门指南

### 硬件要求

- Wio Terminal x 1
- 计算机 x 1
- USB Type-C 数据线 x 1

### 软件要求

请查看此[链接](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/#software)。

## 更新 Wio Terminal WiFi 固件

请查看此[链接](https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware)。

## Wappsto 先决条件

### Wappsto 账户

假设您已经在 [Wappsto](https://wappsto.com/) 上创建了账户，如果没有，请先创建一个。

### 在您的 PC 上安装 Arduino IDE

如果您没有安装，请参阅 [https://www.arduino.cc/en/Guide](https://www.arduino.cc/en/Guide)

#### 安装 ArduinoJson 库

从库管理器中您需要安装 ArduinoJson 库 - 更多详情请参阅 [https://arduinojson.org/v6/doc/installation/](https://arduinojson.org/v6/doc/installation/)。

#### 安装此 wappsto 库

要在 Arduino IDE 中安装此库，请将此项目下载为 zip 文件，点击"Code"并选择"Download ZIP"。
然后选择"Sketch"->"Include Library"->"Add .Zip Library..."详情请参阅 [https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries)。

### 为新设备生成证书和 ID

为了让您的物理设备向 Wappsto 标识自己，它需要一个网络 ID、服务器 CA 证书和客户端证书/密钥 - 所有这些都必须在 Wappsto.com 上生成并放置在（如果与示例匹配）名为 wappsto_config.h 的文件中。

#### wappsto_config.h

为了帮助生成此文件，您可以使用此存储库中包含的 **Python 脚本**，位于 generate_config_header 文件夹中。
首次运行时，您可能需要安装所需的库

```
cd <path to downloaded arduino_wappstoiot>
cd generate_config_header
pip install -r requirements.txt
```

生成头文件：

1. 进入 `generate_config_header` 文件夹：

```
cd generate_config_header
```

2. 使用命令：

```
python main.py --type arduino
```

3. 然后您将被要求使用您在 Wappsto 上的用户邮箱和密码登录。

4. 将新生成的文件 `wappsto_config.h` 复制到您的 Arduino 草图文件夹中。注意，如果生成正确，它应该有一个有效的 UUID（类似但不同于此字符串 `"d7fafe76-b020-4594-8f2a-aae11c6b6589"`）为 `const char* network_uuid =` 行定义。

注意，如果您同时安装了 python2 和 python3，您可能需要使用

```
pip3 install -r requirements.txt
python3 main.py --type arduino
```

如果您遇到如下错误：

```
ImportError: cannot import name 'soft_unicode' from 'markupsafe' 
```

这是由于另一个库的依赖项发生了变化，可以使用此命令修复。

```
pip install -U MarkupSafe==0.20
```

#### 声明和所有权 - 不允许访问值

如果您在创建的设备上遇到"不允许访问"值的情况，这是因为您要么没有声明它，要么所有权已被重置。

由于您是制造商，您仍然会在网络列表中看到该设备，您可以看到它在线，但您将无法看到值或控制设备。

要声明设备，请转到 [https://wappsto.com/devices](https://wappsto.com/devices) 上的"IoT Devices"选项卡，点击右上角的"+ Add an IoT device"按钮，并在框中输入网络 UUID。

如果您点击网络的删除按钮，它将移除设备的所有权，以便其他用户可以声明。一旦设备被声明，就不能被其他人声明。

## 这个 Wappsto 库

### 必需的结构

网络 ID 由 [Wappsto](https://wappsto.com/) 生成，并与证书关联。

```
├── "网络名称"
│   └── "设备 1 名称"
│   |   └── "值 1 名称"
│   |   └── "值 2 名称"
|   |   ...
│   └── "设备 2 名称"
│       └── "值 1 名称"
│       └── "值 2 名称"
...

```

请注意，设备和值对象的"名称"具有额外的功能和规则。

- 网络不能有相同名称的设备。
- 单个设备不能有相同名称的值。（如上例所示，允许在不同设备下使用相同名称。）

库会在创建之前询问 Wappsto 是否存在具有该名称的设备/值，因此它会链接到正确的值。如果没有任何东西具有此名称，将创建一个新的。如果父级有多个同名的子级，库将选择第一个可用的。

如果您更改名称，将创建一个新的，但旧的不会被删除。您必须自己删除，例如使用 [https://wappsto.com/devices](https://wappsto.com/devices)

### 初始化 Wappsto

创建 Wappsto 时需要对 WiFiClientSecure 的引用，示例。

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
    // 已连接
} else {
    // 连接失败
}
```

### 可选配置参数、日志和 ping

除了强制命令外，您还可以设置 ping 间隔和日志级别：

```c
wappsto.config(network_uuid, ca, client_crt, client_key, ping interval in minutes, log level);
```

- ping 间隔将从设备向 wappsto 发送一个短包以保持连接活跃。如果您的设备很少发送数据，添加此功能以避免连接超时可能是个好主意。
- 日志级别可以将 wappsto 库的信息打印到串行调试端口 - 可能的级别如下：

```
   VERBOSE
   INFO
   WARNING
   ERROR
   NO_LOGS <- 默认
```

### 创建您的网络

```c
myNetwork = wappsto.createNetwork("网络名称");
```

### 创建设备

```c
DeviceDescription_t myDeviceDescription = {
    .name = "设备名称",
    .product = "产品名称",
    .manufacturer = "公司名称",
    .description = "产品描述",
    .version = "1.0",
    .serial = "00001",
    .protocol = "Json-RPC",
    .communication = "WiFi",
};

myDevice = myNetwork->createDevice("设备名称", &myDeviceDescription);
```

#### 值

值可能是您最感兴趣的，可以是以下之一：

- Number - 整数或小数，这些将被记录并显示为图表。
- String - 人类可读的字符串（UTF-8）
- Blob - 数据，例如 base64 编码的图像、十六进制值等。
- Xml - 完整的 xml 文档

#### 读取和写入数据

每个值可以有一个或两个数据点：

- Report：在设备上读取并报告给服务器的数据 [READ]
- Control：从服务器发送到设备以控制它的数据 [WRITE]

您的值可以是其中之一或两者兼有。

### 值参数

为了解释参数，我们将使用放置在客厅的温度值示例。

- name：值的名称，这里是"客厅"
- type：是 UI 查找正确类型值的帮助，这里是"temperature"
- PERMISSION_e 参数告诉库是否应该为此值创建 report 和/或 control。
  - READ -> report 状态
  - WRITE -> control 状态
  - READ_WRITE -> report 和 control 状态
- min：（仅限数字）最小数字（供 UI 使用）
- max：对于数字是最大数字，对于字符串/blob 是最大长度
- step：（仅限数字）数字的步长，例如整数为 1，小数为 0.1
- unit：（仅限数字）此数字是否有单位，在温度示例中是 °C

第一次创建值时，数字将具有值 NA，字符串/blob 将为空，对于 control 和 report 都是如此。

如果值存在，值的数据不会改变。如果您希望设备重启时值更新，您必须调用 report/control。

#### 创建数字值

```c
ValueNumber_t myNumberValueParameters = {   .name = "客厅",
                                            .type = "temperature", // 值类型
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
ValueString_t myStringValueParameters = { .name = "值字符串名称",
                                          .type = "值类型",
                                          .permission = READ_WRITE,
                                          .max = 200,
                                          .encoding = ""};

myStringValue = myDevice->createValueString("值字符串名称", "值类型", READ_WRITE, &myStringValueParameters);
```

#### 创建 blob 值

```c
ValueBlob_t myBlobValueParameters =  { .name = "值 Blob 名称",
                                       .type = "值类型",
                                       .permission = READ_WRITE,
                                       .max = 200,
                                       .encoding = ""};

myBlobValue = myDevice->createValueBlob(&myBlobValueParameters);
```

#### 创建 xml 值

```c
ValueXml_t myXmlValueParameters =  { .name = "值 Xml 名称",
                                     .type = "值类型",
                                     .permission = READ_WRITE,
                                     .xsd = "test",
                                     .namespace = "test"};

myXmlValue = myDevice->createValueXml(&myXmlValueParameters);
```

#### 发送值报告

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.report("987");    // 您可以将数字作为您格式化的字符串发送
myNumberValue.report(myInt);    // 将数字作为 int 报告
myNumberValue.report(myDouble); // 将数字作为 double 报告


myStringValue.report("示例字符串");

myBlobValue.report("A5FF2C");

```

#### 设置控制值

通常控制值只会从 wappsto.com 更新，但您可能需要在启动时或其他情况下设置当前值。
设置方法与报告类似：

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.control("987");    // 您可以将数字作为格式化的字符串发送
myNumberValue.control(myInt);    // 将控制设置为 int
myNumberValue.control(myDouble); // 将控制设置为 double


myStringValue.control("Example string");

myBlobValue.control("A5FF2C");

```

## 在您的循环函数中添加 wappsto

为了让 Wappsto 能够接收数据（控制、刷新和 ping），必须将其包含在您的 Arduino 循环函数中 - 否则您将永远不会收到任何带有数据的回调，连接可能会遇到超时。

还建议不要长时间阻塞循环。

```
wappsto.dataAvailable();
```

### 接收值控制请求

您可以选择是否希望将控制数据转换为 double，或者是否希望直接获取字符串。

```c
// 接收带有数字（double）的控制
void controlNumberCallback(Value *value, double data, String timestamp)
{
    // 处理控制请求
}

// 接收带有字符串的控制
void controlStringCallback(Value *value, String data, String timestamp)
{
    // 处理控制请求
}

...
myNumberValue->onControl(&controlNumberCallback);
myStringValue->onControl(&controlStringCallback);
```

### 接收值刷新请求（仅报告值）

```c
void refreshNumberCallback(Value *value)
{
    // 处理刷新请求
}
...
myNumberValue->onRefresh(&refreshNumberCallback);

```

### 从值中获取最后的数据和时间戳

您可以使用这些函数访问最后接收/发送的数据和时间戳。
例如，在新启动后，将检索在 Wappsto.com 中设置的最后控制状态，因此您的程序可以从该状态开始。

_注意_ 从空值检索 numberData 将返回 0；

```c
String ctrlData = myNumberValue.getControlData();

double ctrlDataNumber = myNumberValue.getControlNumberData();

String ctrlTime = myNumberValue.getControlTimestamp();

String reportData = myNumberValue.getReportData();

double reportDataNumber = myNumberValue.getReportNumberData();

String reportTime = myNumberValue.getReportTimestamp();
```

更多示例请参见示例文件夹中的代码，或在 Arduino IDE 中查看"文件 -> 示例 -> Wappsto"。

### 温度检测演示

这里我们将使用提供的温度示例并在 Wappsto 上显示，如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto2.png" alt="pir" width={500} height="auto" /></p>

- **步骤 1**. 上传代码后，您可以看到它在 Wappsto 网站的"IoT Devices"中显示连接成功。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto3.png" alt="pir" width={800} height="auto" /></p>

- **步骤 2**. 点击左侧的"Dashboards"栏并选择"Add widget"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto4.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3**. 这些提供的块可以以多种方式显示数据，这里我们选择"Chart"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto5.png" alt="pir" width={800} height="auto" /></p>

- **步骤 4**. 选择我们之前上传的"Temperature Example"并点击"Next"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto6.png" alt="pir" width={800} height="auto" /></p>

- **步骤 5**. 配置显示的数据。这里我们将数据设置为"Line"显示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto7.png" alt="pir" width={800} height="auto" /></p>

- **步骤 6**. 全部设置完成后，我们能够在 Dashboards 中看到数据输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto8a.jpeg" alt="pir" width={800} height="auto" /></p>