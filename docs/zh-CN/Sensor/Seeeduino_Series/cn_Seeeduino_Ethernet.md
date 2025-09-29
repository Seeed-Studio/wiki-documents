---
description: Seeeduino Ethernet
title: Seeeduino Ethernet
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Ethernet
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-2.jpg)

Seeeduino Ethernet 是一个紧凑且多功能的开发平台，它将数据记录和处理、设备控制以及以太网通信功能集成在一起。它配备了 MEGA328P 芯片和 Wiz5100：前者提供 Arduino 控制风格，后者提供 TCP 和 UDP 以太网通信能力。加上集成的 SD 卡模块，通过网络进行远程数据记录、处理或传输变得方便而整洁。

在这个版本中，我们降低了 RJ45 的高度以与接头保持平衡。此外，配备了一个 I2C 和一个 UART Grove 端口，可以方便地将相应的 Grove 模块连接到这个板子上。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Ethernet-p-1231.html)

## 规格参数

---

* 电压：6.2-13V

* 电流：140-550mA

* 支持的卡类型：Micro SD 卡（<font color="red">**必须是 SanDisk**</font>），FAT/FAT32（不保证支持超过 2G）

* 支持的连接：TCP/UDP

* 净重：23±2g

* 以太网接口：标准 RJ45

## 演示

---
我们将测试 Seeeduino Ethernet 的功能，包括从 SD 卡写入或读取信息以及将 A/D 数据发送到网络。
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-1.jpg)

### 步骤 1：安装硬件

首先，安装硬件。我们有两种方式来插入电源。

**方法 1**：您可以使用一个 [无源 PoE 电缆套装](https://www.seeedstudio.com/depot/passive-poe-cable-set-p-1175.html?cPath=207) 来同时提供电源和以太网连接，如下图所示。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-3.jpg)

**方法 2**：使用独立的电源线和以太网线。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-4.jpg)

### 步骤 2：编程

硬件安装完成后，我们继续尝试测试代码。
这个程序用于测试从 SD 卡写入或读取数据以及将 A/D 数据发送到网络的功能。
这个演示代码既可以用作测试程序，也可以作为参考，如果您想探索板子的更多功能。

<font color="red">注意：</font>

1. 所需的所有".h"文件都已预装在 Arduino IDE(1.0) 中。

2. 安装一个 Micro SD 卡。确保 Micro SD 卡没有满，格式为 FAT 或 FAT32。

```
/*
  SD卡读写

 此示例展示如何从SD卡文件读取和写入数据
 电路连接：
 * SD卡通过SPI总线连接，连接方式如下：
 ** MOSI - 引脚11
 ** MISO - 引脚12
 ** CLK - 引脚13
 ** CS - 引脚4

   Web服务器

 一个简单的web服务器，显示模拟输入引脚的值。
 使用Arduino Wiznet以太网扩展板。

 电路：
 * 以太网扩展板连接到引脚10, 11, 12, 13
 * 模拟输入连接到引脚A0到A5（可选）

 创建于2009年12月18日
 作者：David A. Mellis
 修改于2010年9月4日
 作者：Tom Igoe

 */

#include <SD.h>
#include <SPI.h>
#include <Ethernet.h>

// 在下面为您的控制器输入MAC地址和IP地址。
// IP地址将取决于您的本地网络：
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192,168,1,177);

// 初始化以太网服务器库
// 使用您想要使用的IP地址和端口
// （端口80是HTTP的默认端口）：
EthernetServer server(80);

File myFile;

void setup()
{
    Serial.begin(9600);
    Serial.print("正在初始化SD卡...");
    // 在以太网扩展板上，CS是引脚4。默认情况下它被设置为输出。
    // 请注意，即使它不用作CS引脚，硬件SS引脚
    // （大多数Arduino板上是10，Mega上是53）必须保持为输出
    // 否则SD库函数将无法工作。
    pinMode(10, OUTPUT);
    // pinMode(4,OUTPUT);
    if (!SD.begin(4)) {
        Serial.println("初始化失败！");
        return;
    }
    Serial.println("初始化完成。");

    // 打开文件。请注意，一次只能打开一个文件，
    // 所以在打开另一个文件之前必须关闭这个文件。

    myFile = SD.open("test.txt",FILE_WRITE);
    // 如果文件打开或创建成功，写入数据：
    if (myFile) {
        Serial.print("正在写入test.txt...");
        myFile.println("testing 1, 2, 3.");
        // 关闭文件：
        myFile.close();
        Serial.println("完成。");
    } else {
        // 如果文件没有打开，打印错误：
        Serial.println("打开test.txt时出错");
    }

    // 重新打开文件进行读取：
    myFile = SD.open("test.txt");
    if (myFile) {
        Serial.println("test.txt:");

        // 从文件中读取，直到没有更多内容：
        while (myFile.available()) {
            Serial.write(myFile.read());
        }
        // 关闭文件：
        myFile.close();
    } else {
        // 如果文件没有打开，打印错误：
        Serial.println("打开test.txt时出错");
    }
    // 启动以太网连接和服务器：
    Ethernet.begin(mac, ip);
    server.begin();
}
unsigned char buff[6];
void loop()
{
    EthernetClient client = server.available();
    if (client) {
        // http请求以空行结束
        boolean currentLineIsBlank = true;
        while (client.connected()) {
            if (client.available()) {
                char c = client.read();
                // 如果您已经到达行尾（收到换行符）
                // 并且该行为空，则http请求已结束，
                // 因此您可以发送回复
                if (c == '\n' && currentLineIsBlank) {
                    // 发送标准http响应头
                    client.println("HTTP/1.1 200 OK");
                    client.println("Content-Type: text/html");
                    client.println();

                    // 输出每个模拟输入引脚的值
                    for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
                        client.print("模拟输入 ");
                        client.print(analogChannel);
                        client.print(" 是 ");
                        client.print(analogRead(analogChannel));
                        client.println("<br />");
                        buff[analogChannel] = analogRead(analogChannel);
                    }
                    break;
                }
                if (c == '\n') {
                    // 您正在开始新的一行
                    currentLineIsBlank = true;
                }
                else if (c != '\r') {
                    // 您在当前行上获得了一个字符
                    currentLineIsBlank = false;
                }
            }
        }
        // 给web浏览器时间接收数据
        delay(1);
        // 关闭连接：
        client.stop();
        myFile = SD.open("test.txt", FILE_WRITE);
        if (myFile) {
            Serial.println("test.txt:");
            for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
                myFile.print("模拟输入 ");
                myFile.print(analogChannel);
                myFile.print(" 是 ");
                myFile.println(analogRead(analogChannel));
            }
            // 从文件中读取，直到没有更多内容：
            myFile.close();
        }
        else {
            // 如果文件没有打开，打印错误：
            Serial.println("打开test.txt时出错");
        }

        myFile = SD.open("test.txt");
        if (myFile) {
            Serial.println("test.txt:");

            // 从文件中读取，直到没有更多内容：
            while (myFile.available()) {
                Serial.write(myFile.read());
            }
            // 关闭文件：
            myFile.close();
        }
        else {
            // 如果文件没有打开，打印错误：
            Serial.println("打开test.txt时出错");
        }
    }
}
```

### 步骤 3：下载程序

由于板子上没有 USB 连接器，Seeeduino Ethernet 需要一个 [UartSBee](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) 来下载程序。

按如下方式将 UartSBee 连接到 Seeeduino Ethernet：

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-11.jpg)

 ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-5.jpg)

:::note
请在工具菜单中选择 Seeeduino V3.0 作为开发板来下载程序。
:::

### 步骤 4：结果测试

<font color="red">注意：</font>确保 Seeeduino Ethernet 和您的计算机在同一个局域网中。
程序下载完成后，打开串口监视器。您将检查板子的状态。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-9.jpg)

打开网页浏览器并输入网址：192.168.1.177，然后您可以查看 Seeeduino Ethernet 发送的数据：

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Ethernet_shield2.jpg)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [Seeeduino Ethernet Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip)

* [Seeeduino Ethernet 原理图.pdf](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeeduino_Ethernet_.pdf)

* 本文档采用知识共享 [署名-相同方式共享许可协议 3.0](http://creativecommons.org/licenses/by-sa/3.0/) 授权。源代码和库采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 授权，详情请参见源代码文件。

* 请将 SD 卡重新格式化为 FAT/FTA32。如果仍然无法工作，建议下载 [SD Formatter](https://www.sdcard.org/downloads/formatter_3/) 并使用此软件重新格式化 SD 卡。

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