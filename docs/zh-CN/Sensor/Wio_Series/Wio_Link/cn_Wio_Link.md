---
title: Wio Link
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio_Link/
slug: /cn/Wio_Link
last_update:
  date: 01/11/2022
  author: gunengyu
---

构建物联网应用最困难的部分是什么？有人说跳线通常让他感到沮丧，而另一个人说他最讨厌焊接。甚至有些人不喜欢面包板。也许你不是其中之一，但电子工程知识、微控制器编程、网络编程、物联网协议处理仍然是你和成功的物联网项目之间的巨大负担。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

为了简化所有这些步骤，在2015年底，Seeed Studio在[KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)上发起了Wio Link项目，定义了开发物联网应用的新方式。Wio Link是一个基于ESP8266 SoC的开源Wi-Fi开发板，它最棒的部分是相关的平台，允许用户通过将即插即用模块虚拟化为RESTful API来创建物联网应用。这意味着不需要硬件编程、不需要面包板、不需要跳线、不需要焊接，只需在手机上安装一个应用程序，你就能在5分钟内构建一个简单的物联网项目。

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


:::caution
     Wio IFTTT功能已停止服务。但Wio APP仍然可用。您可以使用Wio APP的API来读取传感器状态和控制执行器。
:::

## 特性

- 无需硬件编程、无需面包板、无需跳线、无需焊接。
- 支持大量Grove模块（查看手机应用中的列表）。
- 即插即用Grove模块
- 可视化配置而非微控制器编程。
- 通过云编译和OTA自动更新。
- 将现实世界带到虚拟平台。所有传感器都变成虚拟RESTful API。
- Android和iOS应用程序管理Wio Link。
- 通过Seeed频道支持IFTTT

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

## 规格参数
----
|常规|值|电源管理|值|
|:---|---|:---|---:|
|**尺寸**|55mm * 48mm|**每个I/O引脚直流电流**|12mA|
|**晶振**|26MHz|**输入电压（Micro USB）**| 5V|
|**闪存**|4MBytes (W25Q32B)|**输入电压（电池座）**|3.4~4.2V|
|**Wi-Fi网络协议**|802.11b/g/n|**输出直流电流**|1000mA MAX
|**Wi-Fi加密技术**|WEP/TKIP/AES|**工作电压**|3.3V|
|**Grove连接器**|6 |**充电电流**|500mA MAX|
|**闪存**|	4MB (W25Q32B)|

## 使用Wio Link制作
----
Wio Link经过精心设计，为以下项目提供简单的Wi-Fi解决方案：

- 智能家居
- 智能环境监测
- 有趣的玩具
- 万物互联
- 物联网


实际上，我们已经在我们的[**项目集**](https://community.seeedstudio.com/projects.html?t=Wio)中设计了许多项目，快来访问它以找到一些有趣的项目，甚至分享你自己的项目，我相信它会为你赢得很多粉丝～

|灌溉控制系统 |互联网LED墙 | 喂狗机|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[立即制作](https://community.seeedstudio.com/project_detail.html?id=1274)    |[立即制作](https://community.seeedstudio.com/project_detail.html?id=1594) |[立即制作](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter监控器|未接来电监控器|老板键|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[立即制作](https://community.seeedstudio.com/project_detail.html?id=1081)    |[立即制作](https://community.seeedstudio.com/project_detail.html?id=1059) |[立即制作](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
       * 一些项目集是为Wio Node制作的，但也可以应用于Wio Link。
:::

## 硬件概述
---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

|部件|功能|
|---|---|
|MCU	|ESP8266|
|数字端口 0	|GPIO 14|
|数字端口 1|	GPIO 12|
|数字端口 2	|GPIO 13|
|模拟端口	|A3|
|UART 端口|	引脚 1 和引脚 3|
|I2C 端口|	引脚 4 和引脚 5|
|状态指示灯|蓝色 LED 是 WiFi 状态指示器，红色 LED 指示工作状态
|配置按钮| 用于配置和管理您的 Wio Link|
|电池座|JST2.0|
|Micro USB|为开发板供电或与 PC 通信|
|复位按钮| 复位 MCU|

### 状态 LED
在功能按钮附近有 2 个状态 LED，一个蓝色，一个红色。蓝色 LED 是网络状态指示 LED。它有以下闪烁模式：

- 呼吸灯 配置模式下
- 快速闪烁两次然后熄灭 1 秒 从路由器请求 IP 地址
- 快速闪烁一次然后熄灭 1 秒 连接到服务器
- 亮 1 秒然后熄灭 1 秒 节点在线
- 常亮 节点死机，无法获取 IP 或无法连接到服务器。
- 快速闪烁（亮 100 毫秒然后熄灭 100 毫秒）OTA  

:::note
     * 蓝色 LED 连接到 GPIO2，它也是 UART1 的 TX 引脚。下载固件时，UART1 会本能地转储在 UART0 上传输的数据。因此蓝色 LED 会在下载固件时闪烁。启动后，GPIO2 将被配置为 GPIO 而不是 UART1 的 TX。
:::
红色 LED 是另一个状态 LED，指示 Grove 模块的电源状态。所有六个 Grove 接口的 VCC 汇聚在一起，可以通过 GPIO 15 控制。当节点处于深度睡眠模式时，所有 grove 模块也会失去电源。当 Grove 模块通电时红色 LED 会亮起，当 Grove 模块未通电时会熄灭。

### 额外功能！
Wio Link 内置 LiPo 电池充电器，因此当 USB 连接时，您可以通过 JST 2.0 端口为 3.7v LiPo 电池充电。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

:::note
     * 电池需要单独购买。请访问 [Bazaar](https://www.seeedstudio.com/s/Battery.html)，我们为您安排了许多选择。
:::
## 开始使用
---

让我们用 Wio Link 构建一个非常基本的 LED 应用程序，在这个应用程序中，您将能够在大约 5 分钟内通过智能手机控制 LED。在开始之前，请确保您手头有以下物品：

|Wio Link|Grove - LED|Micro USB 线|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[立即购买](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[立即购买](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[立即购买](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

:::note
    * 还需要一部智能手机（Android OS 版本 4.1 或更高，iOS 版本 7 或更高）
    * Grove - LED 已包含一根 Grove 线
:::
### **步骤 1：** 安装 Android/iOS 应用
您需要安装 Wio Link 应用来管理和配置您的 Wio Link 设备。

下载并安装 Android 或 iOS 应用。或者您可以前往苹果应用商店或 Google 应用市场搜索"Wio Link"，您会找到它。

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[获取 Android 应用](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[获取 iOS 应用](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

:::note
    * 确保您的 Android OS 版本是 4.1 或更高，iOS 版本是 7 或更高。
:::
### **步骤 2：** 创建您的账户
- 如果这是您第一次使用 Wio 应用，它可能需要 GPS 授权，请批准，然后注册。
- 如果您已经有账户，请在登录前检查服务器位置。

:::note
    * 请注意服务器位置，因为错误的服务器位置会导致连接 Wio Link 时失败。
:::
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **步骤 3**：连接 Wio Link Wi-Fi AP
- 按住配置按钮直到蓝色 LED 变为呼吸模式（即以淡入淡出效果闪烁）。这意味着 Wio Link 已成功转为配置模式，可以被 Wio 应用检测到。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- 点击"添加您的第一个设备"。
- 选择 Wio Link
- "前往 Wi-Fi 列表"将引导您到智能手机的 Wi-Fi 设置界面。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- 如果您已成功使蓝色 LED 变为呼吸模式，您将在 Wi-Fi 列表中找到 Wio Link，连接到它！（通常在 Wi-Fi 列表中它不叫 Wio Link，在示例中，我的是 Wio_8B2F12，您可能在列表中找到一个名为 wio_xxxxxx 的。）
- 连接后，您将收到通知，然后可以返回应用
- 下一步是连接到您家里或公司的 Wi-Fi

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- 如果您要连接的 Wi-Fi 有密码，可能需要您输入密码
- 考虑到您将来可能需要连接超过 1 个 Wio 设备，一个特殊的名称将使您能够轻松区分它们。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **步骤 4：** 虚拟连接模块与 Wio Link 并更新固件
- 点击 Wio Link，您将进入主界面。
- 有 6 个 grove 连接器，选择左边第一个。
- 因为 LED 是输出设备。选择输出类别
- 找到看起来像灯泡的图标，选择它。
- 然后您会发现底部的矩形按钮变为红色，"查看 API"变为"更新固件"。选择"更新固件"

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- 由于您在APP中选择了数字0端口来连接LED，您需要将真实的Grove-LED也连接到Wio Link的数字0端口。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **步骤5**：使用API测试应用程序
- 现在您已经成功将LED连接到Wio Link，点击"View API"查看Wio Link的API
- 在"Test Request"区域输入"1"或"0"，然后点击"Post"按钮，看看会发生什么。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)


## IFTTT和DoButton入门
---
不知道如何编程？别担心，在[IFTTT](https://en.wikipedia.org/wiki/IFTTT)的帮助下，即使您对编程一无所知，您仍然能够构建一些简单的项目。

IFTTT是"If This Then That"的缩写，它是一个免费的基于网络的服务，允许用户创建简单条件语句链，称为"配方"，这些配方基于其他网络服务（如Gmail、Facebook、Instagram）的变化而触发。IFTTT如何与Wio Link协作？如下图所示，Seeed在wio.seeed.io提供云服务，可以与IFTTT和Wio Link交换数据并发送指令。因此，通过创建一些简单的配方，您能够在不编程的情况下进行创新。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

如果您没有IFTTT账户，点击[这里](https://ifttt.com/join)注册。

如果您已经有IFTTT账户，点击[这里](https://ifttt.com/recipes/search?q=seeed)连接Seeed，或在IFTTT网站搜索Seeed。在那里您将找到Seeed提供的9个配方来教您如何使用IFTTT。
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

什么是DoButton？DoButton是IFTTT的应用程序之一，它让您只需轻触一下就能创建自己的个性化按钮，非常适合构建物联网项目并通过智能手机控制，这里有两个示例向您展示如何使用IFTTT和DoButton制作有用的应用程序。

### 示例：

|**IFTTT**|**DoButton**|
|:---|:---|
|[**配方**][无需编程DIY自动花园灌溉系统](https://community.seeedstudio.com/project_detail.html?id=1080)|[**配方**][不在家时如何喂养宠物](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**视频**][如何使用ITFFF](https://vimeo.com/148590984)|[**视频**][如何使用DoButton](https://vimeo.com/146988454)|


## 高级用户指南
----
觉得这些示例太简单？想要制作更复杂的项目？这里是高级用户使用Wio Link进行创新的最佳指南。通过这些指南，高级用户能够了解Wio Link的更多详细信息、部署私有服务器，甚至为Wio Link编写模块驱动程序。

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

该指南涵盖：

- API参考
- 服务器部署指南
- 高级用户指南
- 如何为Wio Link编写模块驱动程序？

## 高级教程
如果您已经成功用智能手机控制了grove-led，并想尝试一些更有难度但不太复杂的内容，为什么不试试这个教程呢？学完之后，您将能够构建一个温湿度监测器，并用Wio Link点亮RGB LED灯带。

在开始之前，请检查您是否有以下设备。

|RGB LED灯带|Grove-温湿度传感器|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[立即购买](https://www.seeedstudio.com/s/led%20strip.html)|[立即购买](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- 步骤1：从grove连接器上移除Grove LED，将LED灯带插入Wio Link，并在App中将相同的模块拖拽到Wio Link上。
- 更新固件。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- 步骤2：将Grove-温湿度传感器插入Wio Link，并在App中将相同的模块拖拽到Wio Link上。
- 更新固件。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- 步骤3：查看API并读取您家中的温度和湿度。下图显示了用手握住grove传感器前后的温度变化。我将温度提高了1摄氏度。试试看您如何改变家中的温度和湿度。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- 步骤4：通过改变RGB值来控制LED灯带的光线。

因为Wio Link App读取十六进制RGB值，所以需要将RGB值转换为十六进制值。在这里我想推荐网站[RGB t0 Hex](https://www.rgbtohex.net/)。只需输入3个RGB元素（红、绿、蓝）的RGB值，该网站就能很容易地将RGB值转换为十六进制。以下是一些示例。
- 输入255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- 转换后，您将得到十六进制值FF0000，颜色是红色。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

:::note
    * 您输入的RGB值应该是0到255之间的任何自然数（包括0和255）
:::
然后在app中输入您想要点亮多少个LED以及十六进制值，这里我的LED灯带有30个LED，所以我全部点亮了它们。

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20control%20led%20strip.png)

您还可以指定灯带的哪一部分被点亮并给它特定的颜色，甚至让它以彩虹模式闪烁。许多令人惊叹的功能等待您的探索！


## 资源
---

硬件

- [EAGLE原理图文件](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio_Link_SCH_v1.0.rar)
- [EAGLE PCB文件](https://files.seeedstudio.com/wiki/Wio_Link/resource/202000877%20Wio%20Link%20v1.0%20sch%20pcb.zip)
- [原理图文件(pdf)](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio%20Link%20v1.0%20sch.pdf)

软件

- [Github上的源代码](https://github.com/Seeed-Studio/Wio_Link)

更多文档和参考资料

- [API参考](https://seeed-studio.github.io/Wio_Link/)
- [服务器部署指南](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
- [如何为Wio Link编写模块驱动程序](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- [iot.seeed.cc](http://iot.seeed.cc/index.html) 获取更多信息。

## 常见问题
----
以下是我们通常从新用户那里收到的一些问题。如果您在使用 Wio Link 或其他 Wio 产品时遇到任何其他问题，欢迎访问 [Wio 社区](https://community.seeedstudio.com/topics.html?t=Wio)，那里有许多专业用户等待为您提供建议，也有许多高级用户提供大量关于如何使用 Wio 产品的想法！

**1. 电源和电池 － Wio Link 是否配备锂电池？**

没有。每个 Wio Link 都配有一根 micro USB 线缆用于充电，或者您可以从我们的商城购买 3.7V 锂电池。以下是供您参考的规格：
- 最大输入电压：4.2V；
- 最大充电电流：500mA。


**2. 电源和电池 - 我可以在 Wio Link 上使用电源适配器吗？哪种类型？以及常见的电池座？**

有两种方式为 Wio Link 供电：Micro USB 线缆或 3.7V 锂电池。如果 Micro USB 和电池都插入板子，电池将通过 USB 电源充电。您可以使用所有能够连接 Micro USB 线缆并输出 5Vdc 的电源适配器。电池座是 JST-2.0 连接器。


**3. 功耗 - Wio Link 的功耗是多少？**

平均功耗为 70mA。使用 700mAh 的电池，可以保持运行长达 10 小时。有低功耗 API 允许您将 Wio Link 从工作模式切换到睡眠模式。这将把平均功耗降低到 150uA 或更少。


**4. Grove 线缆 - 所有套件中的 Grove 都配备线缆吗？**

是的，我们为每个 Grove 模块都配备了一根标准 4 针 Grove 线缆。


**5. RESTful API - 端点在哪里？调用不需要通过某些云服务器吧？需要互联网连接还是可以全部通过本地网络进行？**

我们将 REST API 服务器部署到 iot.seeed.cc，因此您可以从 iot.seeed.cc 访问传感器和执行器。目前，Wio Link 必须连接到互联网。此外，我们将开源服务器，以便用户能够以非常简单的 Docker 方式部署本地服务器。部署本地服务器后，他们可以在本地利用编译和数据交换服务，而不是上网。


**6. 支持的编程方法 - 是否支持其他编程方法，如 Arduino IDE？**

Wio Link 可以用 Arduino IDE 编程，在这种情况下，它将失去 RESTful API 的功能，除非您同时实现另一个。Wio Link 主要期望实现物理硬件的物联网转换，因此交互预期在网络/互联网中执行。但不用担心，软件架构是灵活的，您可以将源代码拉到本地并将 Wio Link 连接到本地服务器，然后您可以修改将被编译的源代码。

如果您想与 Arduino 或 RPI 交互，您可以开发第三方模块驱动程序，这里是指南：https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F 和示例驱动程序：https://github.com/Seeed-Studio/Grove_Drivers_for_Wio/tree/master/grove_example


**7. 支持的平台 - Wio Link 支持 Windows 平台吗？**

目前 Wio Link 提供 Android 和 iOS 两个移动应用程序。我们将所有服务都作为 RESTful API，如用户账户和 OTA，遵循 API 文档，第三方开发者可以构建自己的应用程序，如移动应用程序或桌面应用程序。
Wio Link 是一个社区友好的项目。它不会局限于某个平台。我们真的希望人们能够以自己的方式使用 Wio Link。


**8. 我可以使用 Wio Link 与现有系统交互吗？**

是的。Wio Link 可以通过几种方式与您的现有系统交互。首先，将 Wio Link 的任何 GPIO 连接到其他系统，在移动应用程序中选择"通用数字输入"或"通用数字输出"虚拟 Grove 模块，然后通过 RESTful API 调用向现有系统发送/读取信号。其次，将 Wio Link 的模拟端口连接到其他系统，在移动应用程序中选择"通用模拟输入"虚拟 Grove 模块，然后读取现有系统某些物理量的模拟测量值。第三，为了更灵活地与现有系统交互，您可以开发第三方模块驱动程序，在其中将来自互联网的请求通过 I2C 或 UART 接口分发到您的现有系统。我们有关于如何开发第三方模块驱动程序的指南[1]，我们也可以为您的开发提供技术支持。

[1]https://github.com/Seeed-Studio/Wio_Link#how-to-write-module-driver-for-wio-link


**9. Wio Link 支持多少个 Grove？**

有 150+ 种即插即用的 Grove 模块可用，其中到目前为止有 36 个在 Wio Link 上得到支持，您可以在奖励中找到其中大部分，我们正在持续添加更多。

以下是到目前为止支持的 Grove 列表：

### Grove 支持列表

|SKU       |名称                                        |接口 |驱动程序                 |链接       |
|----------|--------------------------------------------|----------|-------------------    |-----------|
|101020008 |    Grove - 湿度传感器                 |模拟    |自身                 | [链接](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - 光传感器                    |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - 温度传感器              |模拟    |自身                 | [链接](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - 旋转角度传感器             |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - 光传感器(P)                 |模拟    |通用模拟输入   | [链接](https://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
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
|104020005 |    Grove - LED 串灯                |数字   |通用数字输出 | [链接](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) |
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
|101020034 |    Grove - 3 轴数字指南针          |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) |
|101020039 |Grove - 3 轴数字加速度计(±1.5g) |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html) |
|101020050 |    Grove - 3 轴数字陀螺仪             |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html) |
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
|101020030 |    Grove - 数字光传感器            |I2C       |自身                 | [链接](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html) |
|101020040 |    Grove - 红外距离中断器         |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html) |
|103020018 |    Grove - 录音器                        |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Recorder-p-1825.html) |
|104020006 |    Grove - LED 条形图 v2.0                    |UART      |自身                 | [链接](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|104030003 |    Grove - 4 位数码管                 |UART      |自身                 | [链接](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) |
|316010005 |    Grove - 舵机                           |数字   |自身                 | [链接](https://www.seeedstudio.com/Grove-Servo-p-1241.html) |
|101020067 |    Grove - CO2 传感器                      |UART      |自身                 | [链接](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html) |

**10. Wio Link 错误代码和解决方案**

| 1021 | 连接 Wifi 失败     | 无法连接到 Wi-Fi。请检查 Wi-Fi 密码并重试                                                           |
|------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 1031 | 连接 Wio Wifi 失败 | 无法连接到 Wio wi-fi 热点，请重试或在系统设置中手动选择 Wio 的 Wi-Fi 热点。                |
| 1032 | 选择 wifi 错误        | 请选择类似"Wio_xxxxxx"的 Wifi                                                                                              |
| 1033 | Wifi 不一致        | 当前连接的 WiFi 与选择的 WiFi 不符                                                                          |
| 1041 | 发送指令错误         | 请检查您的网络连接并重试。如果仍无法解决问题，请查看 FAQ 部分并联系我们。    |
| 1042 | 连接错误            | 您的手机与设备 wifi 断开连接                                                                                              |
| 1043 | 连接 Wifi 失败     | 请检查您的网络连接并重试。或点击"设置"进入手动设置界面。                                 |
| 1044 | 连接错误         | 请检查您的网络连接并重试。如果仍无法解决问题，请查看 FAQ 部分并联系我们。 |

## 项目 

**使用 Wio-Link 和 Node-Red 的 LED 声音计**：SeeedStudio Grove 声音传感器和 LED 灯带连接到 Wio-Link，由 Node-Red 流程驱动。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

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