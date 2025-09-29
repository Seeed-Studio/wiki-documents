---
description: Seeeduino Cloud
title: Seeeduino Cloud
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Cloud
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_cover.jpg)

Seeeduino Cloud 是一款基于 [Dragino WiFi IoT 模块 HE](http://www.dragino.com/products/linux-module/item/87-he.html) 和 ATmega32u4 的微控制器开发板。HE 是一个高性能、低成本的 150M、2.4G WiFi 模块，在中文中意为"核心"，内置开源 OpenWrt 系统。Seeeduino Cloud 也是一款 Arduino 兼容开发板，100% 兼容 Grove、扩展板和 IDE（Arduino IDE 1.5.3 及更高版本）。除了 Arduino 的常规接口外，Seeeduino Cloud 还内置了以太网和 WiFi 支持，以及一个 USB-A 端口，这使得它非常适合需要网络连接和大容量存储的原型设计。将 Seeeduino Cloud 用作 IoT 网关也是一个不错的想法。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html)

## 应用场景

* 物联网  
* 智能家居
* 学习

以下是一些有趣的项目供您参考。

|简单 Wi-Fi 信息发送器|发送数据到 Google 文档|太阳能电池板监控系统|
|--------|----------|---------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_3.jpg)|
|[立即制作](https://www.instructables.com/id/Arduino-Yun-Messager/)|[立即制作](https://www.instructables.com/id/Google-Docs-and-the-Arduino-Y%C3%BAn/)|[立即制作](https://www.instructables.com/id/Arduino-Yun-Solar-Panel-Monitoring-System/)|

## 特性

* 兼容 Arduino Yun
* 基于 Dragino WiFi IoT 模块 HE
* 内置开源 OpenWrt 系统
* 支持 2.4Ghz WiFi，802.11 b/g/n
* 支持以太网
* 支持 USB 2.0
* 板载 Grove 连接器

## 规格参数

由于 Seeeduino Cloud 有两个处理器，本节在两个单独的表格中显示每个处理器的特性。

**Dragino HE 模块**

|参数|值|
|------------|------------|
|CPU|ATHEROS AR9331|
|时钟速度|400MHz|
|RAM|64MB|
|闪存|16MB|
|操作系统|OpenWrt|
|接口|2 x RJ45，1 x USB 主机，1 x UART，14 个多路复用 GPIO|
|电源|3.3V 电源输入|
|WiFi|支持 150M 2.4Ghz WiFi，802.11 b/g/n|

**AVR Arduino 微控制器**

|参数|值|
|------------|-------------|
|微控制器|ATmega32u4|
|闪存|32KB|
|SRAM|2.5kB|
|EEPROM|1kB|
|时钟速度|16MHz|
|工作电压|5V|
|数字 I/O 引脚|20|
|PWM 通道|7|
|模拟输入通道|12|

## 硬件概述

下面的图片显示了 Seeeduino Cloud 硬件特性的概述。引脚图显示了 Seeeduino Cloud 各个引脚的引脚分布和替代功能。这可以用作快速参考。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_hardware.png)

* **RJ45 以太网端口**
LAN 端口连接到 ATHEROS AR9331，具有自己的 IP 地址，可用于互联网连接和设备管理。
* **USB 输入**
USB 端口用于将开发板连接到您的 PC 进行编程和供电。Micro USB 是 USB 的通用版本，在大多数 Android 手机和其他设备中都能找到。您家里可能有很多这样的线缆。
* **USB 主机**
Seeeduino Cloud 提供 USB 主机功能，使其能够连接各种 USB 设备，如网络摄像头、USB 驱动器、键盘、操纵杆等。
* **32U4 RST**
按下 32U4 复位按钮将复位 ATmega32U4 MCU。通常用于重新启动您的程序。
* **SYS RST**
按下系统复位按钮将重启 Linux 系统。
* **Wi-Fi RST**
Wi-Fi 复位按钮仅支持长按。当按下并在 5 秒后释放时，它将重置 WiFi 设置。其他设置将被保留。如果按钮被按下并在 30 秒后释放，它将把所有设置重置为出厂默认值。
* **Grove 连接器**
SeeedStudio 有各种传感器/设备可以使用这个 I2C 或 UART 连接。此外，我们还销售独立的 Grove 连接器来帮助您制作自己的传感器连接。如果您想使用这些引脚，I2C Grove 连接器也连接到模拟引脚 A4 和 A5，分别用于 SDA 和 SCL。UART Grove 连接器连接到数字引脚 0 和 1，分别用于 RX 和 TX。
* **ICSP**
这是 ATmega32U4 的 ICSP 连接，它位于 Arduino Uno、Due、Mega 和 Leonardo 兼容硬件（例如扩展板）的标准 ICSP/SPI 位置，这些硬件可能使用此连接器。此端口中的 SPI 引脚：MISO、SCK 和 MOSI，也分别连接到数字引脚 12、13 和 11，就像 Arduino Uno 一样。
* **I-PEX 连接器**
这是用于外部天线的 I-PEX 连接器。
* **引脚**
无法访问 Atheros AR9331 的 I/O 引脚。所有 I/O 线都连接到 ATmega32U4。
32U4 上的 20 个数字引脚中的每一个都可以用作输入或输出，使用 pinMode()、digitalWrite() 和 digitalRead() 函数。它们在 5 伏电压下工作。每个引脚可以提供或接收最大 40 mA 的电流，并具有 20-50 kOhms 的内部上拉电阻（默认断开）。
此外，一些引脚具有专门的功能：
  * 串行：0 (RX) 和 1 (TX)。用于使用 ATmega32U4 硬件串行功能接收 (RX) 和发送 (TX) TTL 串行数据。请注意，在 Seeeduino Cloud 上，Serial 类指的是 USB (CDC) 通信；对于引脚 0 和 1 上的 TTL 串行，请使用 Serial1 类。ATmega32U4 和 Seeeduino Cloud 上的 AR9331 的硬件串行连接在一起，用于两个处理器之间的通信。正如 Linux 系统中常见的那样，在 AR9331 的串行端口上暴露了用于访问系统的控制台，这意味着您可以从您的程序中访问 Linux 提供的程序和工具。
  * TWI：2 (SDA) 和 3 (SCL)。使用 Wire 库支持 TWI 通信。
  * 外部中断：3（中断 0）、2（中断 1）、0（中断 2）、1（中断 3）和 7（中断 4）。这些引脚可以配置为在低电平值、上升沿或下降沿或值变化时触发中断。有关详细信息，请参阅 attachInterrupt() 函数。不建议将引脚 0 和 1 用作中断，因为它们也是用于与 Linux 处理器通信的硬件串行端口。引脚 7 连接到 AR9331 处理器，将来可能用作握手信号。如果您打算将其用作中断，建议小心可能的冲突。
  * PWM：3、5、6、9、10、11 和 13。使用 analogWrite() 函数提供 8 位 PWM 输出。
  * SPI：在 ICSP 接头上。这些引脚使用 SPI 库支持 SPI 通信。请注意，SPI 引脚不像在 Uno 上那样连接到任何数字 I/O 引脚，它们仅在 ICSP 连接器上可用。这意味着如果您有一个使用 SPI 的扩展板，但没有连接到 Seeeduino Cloud 的 6 引脚 ICSP 接头的 6 引脚 ICSP 连接器，该扩展板将无法工作。SPI 引脚也连接到 AR9331 gpio 引脚，其中已在软件中实现了 SPI 接口。这意味着 ATMega32u4 和 AR9331 也可以使用 SPI 协议进行通信。
  * 模拟输入：A0 - A5，A6 - A11（在数字引脚 4、6、8、9、10 和 12 上）。Seeeduino Cloud 有 12 个模拟输入，标记为 A0 到 A11，所有这些也可以用作数字 i/o。引脚 A0-A5 出现在与 Uno 相同的位置；输入 A6-A11 分别在数字 i/o 引脚 4、6、8、9、10 和 12 上。每个模拟输入提供 10 位分辨率（即 1024 个不同的值）。默认情况下，模拟输入测量从地到 5 伏的电压，尽管可以使用 AREF 引脚和 analogReference() 函数更改其范围的上限。
  * AREF。模拟输入的参考电压。与 analogReference() 一起使用。

## 开始使用

Seeeduino Cloud 板载两个处理器。一个是 ATmega32U4，类似于 Leonardo。另一个是 Atheros 9331，运行 Linux 和 OpenWRT 无线协议栈，使开发板能够连接到 WiFi 和以太网网络。通过 [Yun Bridge Library](https://www.arduino.cc/en/Reference/YunBridgeLibrary)，可以通过 Arduino 调用 Linux 系统上的程序或自定义脚本来连接各种互联网服务。

### ATmega32U4 端编程

ATmega32U4 使用 [Arduino Software (IDE)](https://www.arduino.cc/en/Main/Software?setlang=en) 进行编程，如果您还没有安装，请点击 [这里](https://www.arduino.cc/en/Guide/HomePage) 查看安装说明。

**安装驱动程序**

首先，您需要：

* **获取一根 Micro-USB 数据线**
  * 您首先需要一根 Micro-USB 数据线；安卓手机的数据线就可以。
如果您找不到，可以在 [这里](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100) 购买。

:::caution
请小心处理 micro USB 接口，否则可能会损坏接口。
:::

* **连接开发板**
  * Seeeduino Cloud 会自动从 USB 连接到计算机或外部电源供电。使用 USB 数据线将 Arduino 开发板连接到您的计算机。绿色电源 LED（标记为 **PWR**）应该会亮起。

**Windows 系统**

Windows 版本的 Arduino Software (IDE) 已经包含了合适的驱动程序。当您安装时，您让操作系统安装了它们。连接您的 Seeeduino Cloud，驱动程序将自动安装。

**MAC 系统**

第一次将 Seeeduino Cloud 插入 Mac 时，"键盘设置助手"将启动。Seeeduino Cloud 没有需要配置的内容；您可以通过点击窗口左上角的红色按钮来关闭此对话框。

**Linux 系统**

Ubuntu 10.0.4 及更高版本无需安装驱动程序，但请确保端口 5353 没有被防火墙阻止。

**打开您的第一个示例程序**

打开 LED 闪烁示例程序：File > Examples >01.Basics > Blink。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Load_Blink.jpg)

**选择您的开发板类型和端口**

您需要在 Tools > Board 菜单中选择与您的 Arduino 或 Genuino 开发板对应的条目。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelBoard.jpg)

从 Tools | Serial Port 菜单中选择开发板的串行设备。这很可能是 COM3 或更高（COM1 和 COM2 通常保留给硬件串行端口）。要找出来，您可以断开开发板连接并重新打开菜单；消失的条目应该就是 Arduino 或 Genuino 开发板。重新连接开发板并选择该串行端口。当您的开发板在 WiFi 上正确配置后，您将在端口列表中找到它，如我们的截图所示。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelPort.jpg)

**上传程序**

现在，只需点击环境中的"Upload"按钮。等待几秒钟 - 您应该看到开发板上的 RX 和 TX LED 闪烁。如果上传成功，状态栏中将出现"Done uploading."消息。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Upload.png)

上传完成几秒钟后，您应该看到开发板上的 LED（D13）开始闪烁（绿色）。如果是这样，恭喜！您已经让 Arduino 运行起来了。如果您遇到问题，请查看故障排除建议。

### ATHEROS AR9331 端编程

**配置网络**

Seeeduino Cloud 有一个 WiFi 接口和一个 LAN 端口。它们都有可用于互联网连接和设备管理的 IP 地址。

**1. Wi-Fi AP 模式**

当您第一次给 Seeeduino Cloud 上电时，wifi 连接中会显示一个名为 SeeeduinoCloud-AXXXX 的不安全 WiFi 网络。
您可以将计算机连接到此网络，如下所示。您的计算机将获得此网络的 ip **192.168.240.xxx**。Seeeduino Cloud 的默认 ip 地址是 **192.168.240.1**。

**2. Wi-Fi STA 模式**

连接 SeeeduinoCloud-AXXXX 后，在浏览器搜索框中输入 172.31.255.254 或 192.168.240.1，您将通过 web UI 连接到 Seeeduino Cloud。默认密码是"seeeduino"，然后点击 LOG IN。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_login.png)

点击"SYSTEM"，选择您的 Wi-Fi 网络，输入密码并点击"CONFIGURE & RESTART"。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_sta.png)

**3. 板载以太网**

当您使用以太网线将 Seeeduino Cloud 连接到有线网络时，它将尝试通过 DHCP 自动连接。开发板将像通过 WiFi 一样显示在端口菜单中。

### 系统升级固件

以下是使用浏览器升级新固件的详细说明。

* 烧录 File -> Examples -> Birdge -> YunSerialTerminal.ino 到 Seeeduino Cloud

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YunSerialTerminal.png)

* 通过在可与 Seeeduino Cloud 通信的 putty 上输入 `ifconfig` 来查找 Seeeduino Cloud 的 ip

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/putty_configure.png)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/inet_addr.png)

* 通过在浏览器中输入 Seeeduino Cloud 的 ip 来访问 Seeeduino Cloud。密码是 `seeeduino`

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/password.png)

* 获取 [最新固件](http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/)

* 通过升级按钮进行升级。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade.png)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade_configure.png)

### 终端

您可以通过 SSH 访问 Seeeduino Cloud 的终端，在 ATHEROS AR9331 端进行编程或配置。

* 下载一个 SSH 客户端，如 [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
* 使用 Seeeduino Cloud 的 IP 地址并运行 SSH 客户端。

```
username: root
password: seeeduino
```

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_terminal.png)

### Yun Bridge 库

Bridge 库简化了 Arduino 板和 Dragino HE 之间的通信。来自 AVR（Arduino 板）的 Bridge 命令由 HE 上的 Python 解释。
它的作用是

* 当 Arduino 请求时在 GNU/Linux 端执行程序，
* 提供共享存储空间，用于在 Arduino 和互联网之间共享传感器读数等数据
* 从互联网接收命令并直接传递给 Arduino。
在 [Arduino 官方网站](https://www.arduino.cc/en/Reference/YunBridgeLibrary) 上有详细的解释和大量示例来展示如何使用 Bridge。以下是一些使用 Bridge 库的示例。

**示例 1：向 Linux 问好**

这个示例是 Arduino 和 Seeeduino Cloud 之间的问候测试。该示例可以在 Arduino IDE--> File --> Examples --> Bridge --> ConsoleRead 中找到。此示例的教程可以在[这里](https://www.arduino.cc/en/Tutorial/ConsoleRead)找到。您可以看到下面的代码，其中包含一些额外的详细信息，以便在 Seeeduino Cloud 中理解它：

```
#include <Console.h>

String name;

void setup() {
    // Initialize Console and wait for port to open:
    Bridge.begin();
    Console.begin();

    // Wait for Console port to connect
    while (!Console);

    Console.println("Hi, what's your name?");
}

void loop() {
    if (Console.available() > 0) {
        char c = Console.read(); // read the next char received
        // look for the newline character, this is the last character in the string
        if (c == '\n') {
            //print text with the name received
            Console.print("Hi ");
            Console.print(name);
            Console.println("! Nice to meet you!");
            Console.println();
            // Ask again for name and clear the old name
            Console.println("Hi, what's your name?");
            name = "";  // clear the name string
        }
        else {       // if the buffer is empty Cosole.read() returns -1
            name += c; // append the read char from Console to the name string
        }
    }
}

```

**示例 2：将数据记录到 USB 闪存**

此示例展示如何将数据记录到 USB 闪存。此示例中使用的代码与[这里](http://wiki.dragino.com/index.php?title=Arduino_Yun_examples#Log_sensor_data_to_USB_flash)相同。源代码可以在那里找到。
Seeeduino Cloud 会自动将 USB 闪存挂载到目录 /mnt/sda1。代码会将传感器数据追加到文件 /mnt/sda1/data/datalog.csv。因此在运行代码之前，请确保 USB 闪存中存在这样的文件。

```c
#include <FileIO.h>     //FileIO类允许用户操作Linux文件系统
#include <Console.h>    //Console类提供IDE和Yun Shield之间的交互
void setup() {
    // 初始化控制台
    Bridge.begin();
    Console.begin();
    FileSystem.begin();
    while(!Console);   // 等待串口连接。
    Console.println("Filesystem datalogger\n");
}
void loop () {
    // 创建一个以时间戳开头的字符串，用于组装要记录的数据：
    String dataString;
    dataString += getTimeStamp();
    dataString += " , ";
    // 读取三个传感器并追加到字符串：
    for (int analogPin = 0; analogPin < 3; analogPin++) {
        int sensor = analogRead(analogPin);
        dataString += String(sensor);
        if (analogPin < 2) {
            dataString += ",";    // 用逗号分隔值
        }
    }
    // 打开文件。注意一次只能打开一个文件，
    // 所以在打开另一个文件之前必须关闭这个文件。
    // USB闪存卡默认挂载在"/mnt/sda1"
    File dataFile = FileSystem.open("/mnt/sda1/data/datalog.csv", FILE_APPEND);
    // 如果文件可用，写入文件：
    if (dataFile) {
        dataFile.println(dataString);
        dataFile.close();
        // 同时打印到串口：
        Console.println(dataString);
    }
    // 如果文件无法打开，弹出错误：
    else {
        Console.println("error opening datalog.csv");
    }
    delay(15000);  //每15秒写入一次
}
// getTimeStamp函数返回带有时间戳的字符串
// Yun Shield将调用Linux的"date"命令并获取时间戳
String getTimeStamp() {
    String result;
    Process time;
    // date是一个命令行工具，用于获取日期和时间
    // 根据附加参数以不同格式显示
    time.begin("date");
    time.addParameter("+%D-%T");   // 参数：D表示完整日期mm/dd/yy
    //              T表示时间hh:mm:ss
    time.run();   // 运行命令
    // 读取命令的输出
    while(time.available()>0) {
        char c = time.read();
        if(c != '\n')
        result += c;
    }
    return result;
}

```

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/500px-SeeeduinoCloud_Sketch_USB.png)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **原理图**
  * [Seeeduino Cloud Eagle文件](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip)
  * [Seeeduino Cloud PDF文件](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_PDF.pdf)

* **固件**
  * [Seeeduino Cloud固件](http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/)

* **参考资料**
  * [Arduino入门指南](https://www.arduino.cc/en/Guide/HomePage)
  * [Arduino语言参考](https://www.arduino.cc/en/Reference/HomePage)
  * [下载Arduino软件(IDE)](https://www.arduino.cc/en/Main/Software)
  * [Arduino常见问题](https://www.arduino.cc/en/Main/FAQ)
  * [Arduino介绍](https://www.arduino.cc/en/guide/introduction)
  * [Arduino维基百科页面](https://en.wikipedia.org/wiki/Arduino)
  * [Arduino Yun Wiki](https://www.arduino.cc/en/Main/ArduinoBoardYun)
  * [Arduino Yun入门指南](https://www.arduino.cc/en/Guide/ArduinoYun#toc2)
  * [Yun Bridge库](https://www.arduino.cc/en/Reference/YunBridgeLibrary)

## 常见问题

* 什么是Yun Bridge库？

Yun Bridge库是Arduino Yun中用于MPU和MCU之间通信的机制。Seeeduino Cloud支持Yun Bridge库，使Arduino用户能够轻松构建他们的物联网项目。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>