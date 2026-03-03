---
title: Wio RP2040 mini 开发板与 Arduino
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-RP2040-with-Arduino-WIFI/
slug: /cn/Wio-RP2040-with-Arduino-WIFI
last_update:
  date: 01/11/2022
  author: gunengyu
---
# **Wio RP2040 mini 开发板与 Arduino**

在这里我们将使用 Wio RP2040 mini 开发板通过 MQTT 和 Socket 与 Arduino 传输数据。


## **硬件**

所需材料

- [Wio RP2040 mini 开发板](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) x1
- 计算机 x1
- USB Type-C 数据线 x1

:::tip
    一些 USB 数据线只能供电而不能传输数据。如果您没有 USB 数据线或不知道您的 USB 数据线是否可以传输数据，您可以查看 [seeed USB type C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::
- 步骤 1. 准备一个 Wio RP2040 mini 开发板和一根 Type-C 数据线。
- 步骤 2. 在将开发板连接到计算机时，**按住**'boot'按钮。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)


- 步骤 3. 连接并检查计算机上是否出现磁盘。

如果一切顺利，Wio RP2040 mini 开发板上的红色电源 LED 应该点亮，并且计算机上应该出现一个磁盘。


## **软件**

在我们开始上传代码和传输数据之前，您可能需要先设置服务器。

### **使用 MQTT 通信**

MQTT 是一种客户端-服务器发布/订阅消息传输协议。客户端可以将其用作发布者、订阅者或两者兼而有之。

#### **配置 MQTT 服务器**

下载 [MQTTX 服务器软件](https://github.com/emqx/MQTTX/) 并将其安装在计算机上，然后配置 MQTT 服务器。如果您无法在您的国家/地区通过网站下载服务器，请自行准备 MQTT 服务器。

---

在这个项目中我们将使用 "mqtt.p2hp.com" 的免费服务器。

**在线服务器** 

- 地址：mqtt.p2hp.com
- 端口：1883 (TCP)，8083 (WebSocket)
- 类型：EMQ
- MQTT V3.1.1/V5.0 兼容

---

进入 MQTTX 软件创建新连接，填写名称、服务器、端口、主题，然后点击"连接"连接到服务器。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

连接成功后，软件右上角会有弹窗提示。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

然后在下方设置主题和消息。在这个项目中，我们使用 MQTT 与 Wio RP2040 mini 开发板接收或发送消息。

将'主题'填写为"temperature"。

:::note
    我们在这里写的'主题'非常重要。除非发布者或订阅者之间的'主题'相同，否则无法传输数据。当您上传代码时会发现更多信息。
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window5.png)

准备工作已完成，MQTT 服务器已设置好。现在我们要上传代码。

#### **使用 MQTT 的 Arduino 代码**

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::
- **步骤 1. 安装 Arduino 软件**

<p style={{}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>


**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序 (arduino.exe)。

:::note
    如果 Arduino 软件以不同语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino 软件 (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::
- **步骤 2. 下载并打开 MQTT 示例**

您可以在这里下载 [MQTT.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/MQTT.ino) 并打开它。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window.png)

- **步骤 3. 将 Wio RP2040 mini 开发板添加到您的 Arduino IDE**

点击 **文件 > 首选项**，并在附加开发板管理器网址中填入以下网址：

https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window2.png)

点击 **工具-> 开发板-> 开发板管理器...**，在搜索框中输入关键词"**XIAO RP2040**"。找到"Seeed XIAO RP2040"并安装它。

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl2.png)

- **步骤 4. 选择相应的开发板**

安装开发板后，点击 **工具-> 开发板**，找到"**Wio RP2040 Mini Dev Board**"并选择它。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

一旦开发板连接到计算机，**无需**选择端口。因为计算机会在第一次上传时向开发板写入一个 **.uf2 文件**，之后它会自动选择端口。

- **步骤 5. 上传程序**
您现在可以上传代码并打开 MQTTX 查看结果。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window6.png)

- **进一步说明**

如果您通过 MQTT 发送一些消息，只要它们之间的'主题'相同，您可能会在 Arduino 的串口监视器中看到它。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window16.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window8.png)

### **使用 Socket 通信**

现在我们尝试使用计算机构建 TCP 服务器，通过 Socket 发送或接收消息。我们这里使用的软件是 [NetAssist](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/NetAssist.exe)。

#### **配置 TCP 服务器**

- 双击下载的'.exe'文件并打开 NetAssist。

- 在左上角选择'TCP Server'来设置'协议'。

- 在下方填写"本地主机地址"和"本地主机端口"。
 
- 一切设置完成后，点击"打开"进入服务器。

:::note
    这里的**"本地主机地址"**和**"本地主机端口"**以及MQTT中的**"主题"**都很重要。除非这些参数与代码中的相同，否则您将无法收到消息。
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window14.png)

准备工作已完成，MQTT服务器已设置好。现在我们要上传代码。

#### **Socket的Arduino代码**

- **步骤1. 下载并打开Socket示例**

您可以在这里下载[Socket.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Socket.ino)并打开它。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window10.png)

- **步骤2. 选择相应的开发板**

安装开发板后，点击**工具-> 开发板**，找到"**Wio RP2040 Mini Dev Board**"并选择它。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

一旦开发板连接到计算机，就**无需**选择端口。因为计算机会在第一次上传时将**.uf2文件**写入开发板，之后它会自动选择端口。
       
- **步骤3. 上传程序**
您现在可以上传代码并打开NetAssist查看结果。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window13.png)

- **进一步说明**

如果您通过NetAssist发送一些消息，只要它们之间的"本地主机地址"和"本地主机端口"相同，您就可以在NetAssist上看到它。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window15.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window11.png)

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