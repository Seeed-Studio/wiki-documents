---
title: Wio Node
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio_Node/
slug: /cn/Wio_Node
last_update:
  date: 01/11/2022
  author: gunengyu
---

构建物联网项目是令人兴奋的，因为您可以连接周围几乎所有的东西并控制它们。然而，有时构建物联网应用程序并不容易，因为它需要大量的艰苦工作，如硬件、编程、跳线和焊接等。即使是训练有素的用户也需要花费数小时来处理所有工作，更不用说初学者了。为了简化物联网项目的开发，Seeed 在 **[kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)** 上推出了 **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)**，并取得了巨大成功。Kickstarter 上的口号很好地定义了 Wio link 的主要特性：

**3 步骤。5 分钟。构建您自己的物联网应用程序！**

它如此简单，构建速度如此之快，然而它并不适用于所有条件。
如果我们只需要 2 个 grove 连接器怎么办？如果应用程序中空间有限但 Wio Link 尺寸过大怎么办？如果我们想要降低成本怎么办？所以在我们发布 Wio Link 之后，一个微型且经济的解决方案就被提上了日程，几个月来 Seeeder 重新设计并优化了 Wi-Fi 板，现在它来了，Wio 家族的新成员---**Wio Node**。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

正如其名称的含义一样，Wio Node 真正是一个在物联网项目中连接事物的 Wi-Fi 节点。如果 Wio Link 是大哥，那么 Wio Node 一定是 Wio 家族中的小弟弟，因为这个可爱的小家伙只有 Wio link 的四分之一大小，同时集成了 Wio Link 的所有基本功能。

Wio Node 的生态系统也由开放硬件 **Wio Node 板**、**开源 Wio Link 移动应用程序** 和 **开源物联网服务器实现** 组成。因此，Wio Link 的软件平台也适用于 Wio Node。

[![立即获取](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)

:::caution
Wio IFTTT 功能已停止服务。但 Wio APP 仍可使用。您可以使用 Wio APP 的 API 来读取传感器状态和控制执行器。
:::

## 特性

----

- 无需硬件编程或面包板或跳线或焊接。
- 支持大量 Grove 模块（查看移动应用程序中的列表）。
- 即插即用 Grove 模块
- 可视化配置而非微控制器编程。
- 通过云编译和 OTA 自动更新。
- 将现实世界带到虚拟平台。所有传感器都变成虚拟 RESTful API。
- Android 和 iOS 应用程序管理 Wio Node。
- 通过 Seeed 频道支持 IFTTT
- 核心模块 ESP-WROOM-02 通过 CE/FCC/TELEC 认证

## 规格参数

----
|常规|值|电源管理|值|
|:---|---|:---|---:|
|**尺寸**|28mm * 28mm|**每个 I/O 引脚直流电流**|12mA|
|**晶振**|26MHz|**输入电压（Micro USB）**| 5V|
|**闪存**|4MBytes (W25Q32B)|**输入电压（电池座）**|3.4~4.2V|
|**Wi-Fi 网络协议**|802.11b/g/n|**输出直流电流**|1000mA MAX
|**Wi-Fi 加密技术**|WEP/TKIP/AES|**工作电压**|3.3V|
|**扩展 Grove 连接器1**|UART0/I2C0/D0 |**充电电流**|500mA MAX|
|**扩展 Grove 连接器2**|Analog/I2C1/D1|

## 应用创意

----
Wio Node 设计精良，为以下项目提供简单经济的 Wi-Fi 解决方案：

- 智能家居
- 智能环境监测
- 趣味玩具
- 物联网
- 万物互联

实际上，在我们的[**项目库**](https://community.seeedstudio.com/projects.html?t=Wio)中有很多项目，快来访问找一些有趣的项目，甚至分享你自己的项目，我相信它会为你赢得很多粉丝。

|灌溉控制系统 |互联网LED墙 | 狗狗喂食机|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[立即制作](https://community.seeedstudio.com/project_detail.html?id=1274)    |[立即制作](https://community.seeedstudio.com/project_detail.html?id=1594) |[立即制作](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter监控器|未接来电监控器|老板键|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[立即制作](https://community.seeedstudio.com/project_detail.html?id=1081)    |[立即制作](https://community.seeedstudio.com/project_detail.html?id=1059) |[立即制作](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
一些项目是用 Wio Link 制作的，你可以用 Wio Node 替换它。
:::

## 硬件概述

----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|编号|名称|功能|
|---|----|--------|
|1  |Function|设置 Wio Node 工作模式|
|2  |ESP8266|基于 ESP8266 的微控制器|
|3  |Reset|重置设备|
|4  |Micro USB|为设备供电并为电池充电|
|5  | Battery Holder|JST2.0 连接器，连接 3.7V 锂电池|
|6  | Analog/I2C1/D1|Grove 接口，你可以连接数字/I2C/模拟类型的 Grove 模块|
|7  | UART/I2C0/D0|Grove 接口，你可以连接 UART/I2C/数字类型的 Grove 模块|

### 状态指示灯

在 FUNCTION 按钮附近有 2 个状态指示灯，一个蓝色的和一个红色的。蓝色指示灯是网络状态指示灯。它有以下闪烁模式：

- 呼吸灯 配置模式下
- 快速闪烁两次然后熄灭 1 秒 从路由器请求 IP 地址
- 快速闪烁一次然后熄灭 1 秒 连接到服务器
- 亮 1 秒然后熄灭 1 秒 节点在线
- 常亮 节点因无法获取 IP 或无法连接到服务器而死机
- 快速闪烁（亮 100 毫秒然后熄灭 100 毫秒）OTA

:::note
蓝色指示灯连接到 GPIO2，它也是 UART1 的 TX 引脚。下载固件时，UART1 会本能地转储在 UART0 上传输的数据。所以在下载固件时蓝色指示灯会闪烁。启动后，GPIO2 将被配置为 GPIO 而不是 UART1 的 TX。
:::
红色指示灯是另一个状态指示灯，指示 Grove 模块的电源状态。所有六个 Grove 接口的 VCC 汇聚在一起，可以用 GPIO 15 控制。当节点处于深度睡眠模式时，所有 Grove 模块也会失去电源。当 Grove 模块通电时红色指示灯会亮起，当 Grove 模块断电时会熄灭。

### 额外功能

Wio Node 内置锂电池充电器，所以当 USB 连接时，你可以通过 JST 2.0 接口为 3.7v 锂电池充电。

:::note

- 请轻柔地处理 USB micro type-B 插座，否则你可能会把插座从板子上弄断。

- 包装中不包含电池。但我们在[商城](https://www.seeedstudio.com/s/battery.html)为你准备了大量选择。
:::

## 开始使用

----
让我们用 Wio Node 构建一个非常基础的 LED 应用程序，在这个应用程序中，您将能够在大约 5 分钟内通过智能手机控制 LED。在开始之前，请确保您手头有以下物品：

|Wio Node|Grove - LED|Micro USB 线缆|
|--------|-----------|---------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[立即购买](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[立即购买](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[立即购买](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

:::note

- 还需要一部智能手机（Android OS 版本 4.1 或更高，iOS 版本 7 或更高）

- Grove - LED 已包含一根 Grove 线缆
:::

### **步骤 1：** 安装 Android/iOS 应用程序

您需要安装 Wio Link 应用程序来管理和配置您的 Wio Node 设备。

下载并安装 Android 或 iOS 应用程序。或者您可以前往苹果或谷歌应用商店搜索"Wio Link"，您会找到它。

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[获取 Android 应用](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[获取 iOS 应用](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

:::note
确保您的 Android OS 版本是 4.1 或更高，iOS 版本是 7 或更高。
:::

### **步骤 2：** 创建您的账户

- 如果这是您第一次使用 Wio 应用程序，它可能需要 GPS 授权，请批准它，然后注册。
- 如果您已经有账户，请在登录前检查服务器位置。

:::note
请注意服务器位置，因为错误的服务器位置会导致连接 Wio Node 时失败。
:::
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **步骤 3**：将 Wio Node 连接到互联网

- 按住 CONFIG 按钮直到蓝色 LED 变为呼吸模式（即以淡入淡出效果闪烁）。这意味着 Wio Node 已成功转入配置模式，可以被 Wio 应用程序检测到。
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Confiture%20button.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Confiture%20button.png)
- 点击"Add your first Device"。
- 选择 Wio Node
- "Go to Wi-Fi list"将引导您到智能手机的 Wi-Fi 设置界面。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node%201.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node%201.png)

- 如果您已成功使蓝色 LED 变为呼吸模式，您将在 Wi-Fi 列表中找到 Wio Node，连接到它！（通常在 Wi-Fi 列表中它不叫 Wio Node，在示例中，我的是 Wio_091016，您可能在列表中找到一个名为 wio_xxxxxx 的。）
- 连接后，您将收到通知，然后您可以返回应用程序
- 下一步是连接到您家里或公司的 Wi-Fi

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node2.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node2.png)

- 如果您要连接的 Wi-Fi 有密码，可能需要您输入密码
- 考虑到您将来可能需要连接超过 1 个 Wio Node，一个特殊的名称将使您能够轻松区分它们。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node3.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node3.png)

### **步骤 4：** 虚拟连接模块与 Wio Node 并更新固件

- 点击 Wio Node，您将进入主界面。
- 有 2 个 grove 连接器，选择左边的（D0）。
- 因为 LED 是输出设备。选择输出类别
- 找到看起来像灯泡的图标，选择它。
- 然后您会发现底部的矩形按钮变为红色，"View API"变为"Update Firmware"。选择"Update Firmware"

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20modules%20with%20Wio%20node.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20modules%20with%20Wio%20node.png)

- 由于您在应用程序中选择了 D0 端口连接 LED，您也需要将真实的 Grove-LED 连接到 Wio Node 的 D0 端口。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Wio_Node_Grove_LED.JPG)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Wio_Node_Grove_LED.JPG)

### **步骤 5**：使用 API 测试应用程序

- 现在您已成功将 LED 连接到 Wio Node，点击"View API"查看 Wio Node 的 API
- 在"Test Request"区域输入"1"或"0"，然后点击"Post"按钮，看看会发生什么。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/change%20the%20valure%20to%20see%20what%20will%20happen.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/change%20the%20valure%20to%20see%20what%20will%20happen.png)

## 开始使用 IFTTT 和 DoButton

-----
不知道如何编程？别担心，在 [IFTTT](https://en.wikipedia.org/wiki/IFTTT) 的帮助下，即使你对编程一无所知，你仍然能够构建一些简单的项目。

IFTTT 是 "If This Then That" 的缩写，它是一个免费的基于网络的服务，允许用户创建简单条件语句链，称为"配方"，这些配方基于其他网络服务（如 Gmail、Facebook、Instagram）的变化而触发。IFTTT 如何与 Wio Node 协作？如下图所示，Seeed 在 wio.seeed.io 提供云服务，可以与 IFTTT 和 Wio Node 交换数据并发送指令。因此，通过创建一些简单的配方，你能够在不编程的情况下进行创新。

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/WioLink-Workshop.png)

如果你没有 IFTTT 账户，点击[这里](https://ifttt.com/join)注册。

如果你已经有 IFTTT 账户，点击[这里](https://ifttt.com/recipes/search?q=seeed)连接 Seeed，或在 IFTTT 网站搜索 Seeed。在那里你会找到 Seeed 提供的 9 个配方来教你如何使用 IFTTT。
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)
什么是 DoButton？DoButton 是 IFTTT 的应用程序之一，它让你只需轻触一下就能创建自己的个性化按钮，非常适合构建物联网项目并通过智能手机控制它，这里有两个示例向你展示如何使用 IFTTT 和 DoButton 制作有用的应用程序。

### 示例

|**IFTTT**|**DoButton**|
|:---|:---|
|**[配方]**[无需编程的 DIY 自动花园灌溉](https://community.seeedstudio.com/project_detail.html?id=1080)|**[配方]**[当你不在家时如何喂养宠物](https://community.seeedstudio.com/project_detail.html?id=1066)|
|**[视频]**[如何使用 ITFFF](https://vimeo.com/148590984)|**[视频]**[如何使用 DoButton](https://vimeo.com/146988454)|

## 高级指南

----
觉得这些示例太简单？想要制作更复杂的项目？这里是高级用户使用 Wio Node 进行创新的最佳指南。通过这些指南，高级用户能够了解关于 Wio Node 的更多详细信息，部署私有服务器，甚至为 Wio Node 编写模块驱动程序。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

该指南涵盖：

- API 参考
- 服务器部署指南
- 高级用户指南
- 如何为 Wio Link 编写模块驱动程序？

:::note
    该指南是为 Wio Link 编写的，但同样适用于 Wio Node。
:::

## Grove 支持列表

|SKU       |名称                                        |接口 |驱动程序                 |链接       |
|----------|--------------------------------------------|----------|-------------------    |-----------|
|101020008 |    Grove - 湿度传感器                 |模拟    |自身                 | [链接](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - 光线传感器                    |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - 温度传感器              |模拟    |自身                 | [链接](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - 旋转角度传感器             |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - 光线传感器(P)                 |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
|101020023 |    Grove - 声音传感器                    |模拟    |自身                 | [链接](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020027 |    Grove - 电流传感器              |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html) |
|101020036 |    Grove - 滑动电位器             |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) |
|101020042 |    Grove - 80cm 红外接近传感器  |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html) |
|101020043 |    Grove - UV 传感器                       |模拟    |自身                 | [链接](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html) |
|101020048 |    Grove - 旋转角度传感器(P)          |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor(P)-p-1242.html) |
|101020063 |    Grove - 响度传感器                 |模拟    |自身                 | [链接](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html) |
|101020076 |    Grove - 亮度传感器                |模拟    |自身                 | [链接](https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html) |
|101020078 |    Grove - 空气质量传感器 v1.3         |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |
|101020003 |    Grove - 按钮                          |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|101020004 |    Grove - 开关(P)                       |数字   |通用数字输入  | [链接](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html) |
|101020005 |    Grove - 碰撞传感器                |数字   |通用数字输入  | [链接](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html) |
|101020009 |    Grove - 寻线器                     |数字   |通用数字输入  | [链接](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html) |
|101020018 |    Grove - 水传感器                    |数字   |通用数字输入  | [链接](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html) |
|101020020 |    Grove - PIR 运动传感器               |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html) |
|101020025 |    Grove - 倾斜开关                     |数字   |通用数字输入  | [链接](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html) |
|101020037 |    Grove - 触摸传感器                    |数字   |通用数字输入  | [链接](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html) |
|101020038 |    Grove - 磁性开关                 |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html) |
|101020046 |    Grove - 霍尔传感器                     |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Hall-Sensor-p-965.html) |
|101020049 |    Grove - 火焰传感器                    |数字   |通用数字输入  | [链接](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html) |
|111020000 |    Grove - 按钮(P)                       |数字   |通用数字输入  | [链接](https://www.seeedstudio.com/Grove-Button(P)-p-1243.html) |
|101020073 |    Grove - 电磁铁                   |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html) |
|101020090 |    Grove - 水雾化器 v1.0          |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/s/101020090.html#) |
|103020004 |    Grove - 固态继电器               |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html) |
|103020005 |    Grove - 继电器                           |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|103020008 |    Grove - MOSFET                          |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html) |
|103020010 |    Grove - 双线圈锁存继电器           |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html) |
|103020014 |    Grove - 干簧继电器                  |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html) |
|104020001 |    Grove - 可变色 LED              |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html) |
|104020002 |    Grove - 紫色 LED (3mm)                |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-Purple-LED-(3mm)-p-1143.html) |
|104020005 |    Grove - LED 灯串                |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) |
|104030005 |    Grove - 红色 LED                         |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) |
|104030007 |    Grove - 绿色 LED                       |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html) |
|104030009 |    Grove - 白色 LED                       |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) |
|104030010 |    Grove - 蓝色 LED                        |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html) |
|104030014 |    Grove - 多色闪光 LED (5mm)     |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-Multi-Color-Flash-LED-(5mm)-p-1141.html) |
|105020003 |    Grove - 振动马达                 |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html) |
|105020004 |    Grove - 迷你风扇                        |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html) |
|105020005 |    Grove - EL 驱动器                       |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html) |
|107020000 |    Grove - 蜂鸣器                          |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|107020001 |    Grove - 扬声器                         |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Speaker-p-1445.html) |
|101020034 |    Grove - 3轴数字指南针          |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) |
|101020039 |Grove - 3轴数字加速度计(±1.5g) |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html) |
|101020050 |    Grove - 3轴数字陀螺仪             |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html) |
|101020072 |    Grove - 气压传感器 (BMP180)       |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html) |
|101020083 |    Grove - 手势识别                         |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-Gesture-p-2463.html) |
|101020088 |    Grove - 多通道气体传感器         |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html) |
|103020013 |    Grove - I2C ADC                         |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) |
|104030008 |    Grove - OLED 显示屏 1.12''             |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|104030011 |    Grove - OLED 显示屏 0.96''             |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|105020001 |    Grove - I2C 电机驱动器                |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html) |
|107020006 |    Grove - I2C FM 接收器                 |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html) |
|101020192 |    Grove - 气压计(BMP280)               |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP280)-p-2652.html) |
|101020193 |Grove - 温湿度气压传感器(BME280)  |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-Temp%26Humi%26Barometer-Sensor-(BME280)-p-2653.html) |
|101020010 |    Grove - 超声波测距仪               |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|101020016 |    Grove - 红外接收器               |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html) |
|101020019 |    Grove - 温湿度传感器 Pro |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html) |
|101020026 |    Grove - 红外发射器                |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html) |
|101020029 |    Grove - 红外反射传感器      |其他    |自身                 | [链接](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html) |
|101020030 |    Grove - 数字光线传感器            |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html) |
|101020040 |    Grove - 红外距离中断器         |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html) |
|103020018 |    Grove - 录音器                        |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Recorder-p-1825.html) |
|104020006 |    Grove - LED 条形图 v2.0                    |UART      |自身                 | [链接](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|104030003 |    Grove - 4位数码管                 |UART      |自身                 | [链接](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) |
|316010005 |    Grove - 舵机                           |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Servo-p-1241.html) |
|101020067 |    Grove - CO2 传感器                      |UART      |自身                 | [链接](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html) |

## FAQ

----
以下是我们通常从新用户那里收到的一些问题。如果您在使用 Wio Node 或其他 Wio 产品时遇到任何其他问题，欢迎访问 [Wio 社区](https://community.seeedstudio.com/topics.html?t=Wio)，那里有许多专业用户等待为您提供建议，也有许多高级用户提供关于如何使用 Wio 产品的大量想法！

**Q1. Wio Node 和 Wio Link 有什么区别？**

>Wio Node 就像迷你版的 Wio Link，它只有 Wio Link 四分之一的大小，价格也便宜得多。尽管在尺寸和价格上有所不同，Wio Node 仍然具有 Wio Link 的全部功能。对于那些更喜欢小尺寸而不是更多 grove 连接器的用户来说，Wio node 是最佳选择。

**2. 如果无法连接到服务器，我应该怎么办？**

>注销并检查您在登录前是否选择了错误的服务器。如果您不在中国大陆，请选择全球服务器。

**3. 配置 Wio Node 失败，在 wifi 列表中找不到 Wio Node？**

>注意蓝色 LED。在进行任何进一步步骤之前，确保它处于呼吸模式（以淡入和淡出效果闪烁，这是一个非常独特的模式，很容易识别）。只有当 LED 处于呼吸模式时，才能在 WiFi 列表中找到 Wio Node。

**4. 如果我想连接超过 1 个 I2C 设备，我应该怎么办？**

>我们不能同时将 2 个 Grove-I2C 设备连接到 Wio node 的 2 个 Grove-I2C 端口。[Grove-I2C hub](https://www.seeedstudio.com/s/I2C%20hub.html) 可以将 1 个 I2C 端口分支为 4 个。来 [Bazaar](https://www.seeedstudio.com/s/I2C%20hub.html) 获取一个！

**5. 我可以将 Wio Node 切换到睡眠模式吗？**

>是的，请查看最后一个 API，您可以在那里命令 Wio Node 进入睡眠模式。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

----

- **文档和参考资料**
  - [API 参考](https://seeed-studio.github.io/Wio_Link/)
  - [服务器部署指南](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
  - [如何为 Wio Link 编写模块驱动程序](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- **软件**
  - [**Github** 上的源代码](https://github.com/Seeed-Studio/Wio_Link)
- **硬件**
  - [**PDF** 格式的原理图文件](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio%20Node%20v1.0.pdf)
  - [**Eagle** 格式的原理图文件](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip)
- **证书**
  - [核心模块 ESP-WROOM-02 的 CE/FCC/TELEC 认证（仅限）](https://files.seeedstudio.com/wiki/Wio_Node/Recources/CE-FCC-TELEC_Certified(only)_for_core_module_ESP-WROOM-02.zip)

## 项目

**使用 Wio Link/Wio Node 和 Telegram 应用的智能家居**：使用 seeedstudio Wio-Link/Wio-Node 构建智能家居并将其连接到 Telegram 机器人。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/smart-home-with-wio-link-wio-node-and-telegram-app-831f78/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>