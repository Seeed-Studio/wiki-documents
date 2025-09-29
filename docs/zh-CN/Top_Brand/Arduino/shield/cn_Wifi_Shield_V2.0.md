---
description:  Wifi Shield V2.0
title:  Wifi Shield V2.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wifi_Shield_V2.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2.0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
--- -->

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

这款WiFi扩展板采用RN171 TCP/IP模块，让您的Arduino/Seeeduino能够连接到802.11b/g无线网络。

扩展板与Arduino的默认通信协议是UART/串口，您可以通过我们集成的两排跳线选择使用哪些数字引脚（D0到D7）作为RX和TX。扩展板还有两个板载Grove连接器，分别用于I2C和串口，允许扩展板与我们的任何Grove设备一起使用。

板载天线使扩展板能够覆盖更广的范围并传输更强的信号。RN171模块支持TCP、UDP、FTP和HTTP通信协议，满足大多数无线和物联网（IoT）网络项目的需求，例如智能家居网络、机器人控制、个人气象站。

该扩展板有详细的文档说明，包括下面的示例和[用户手册](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf)。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

版本追踪
---------------

| 参数          | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| 电压            | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| 标准扩展板    | 是                                                                     | 是                                                                    | 是                                                                                       |
| 通信模式 | 串口                                                             | 串口                                                            | 串口                                                                               |
| 标准扩展板    | 否                                                                      | 是                                                                    | 是                                                                                       |
| 天线类型       | 桅杆天线                                                            | PCB天线                                                            | <font color="Red">板载天线</font>                                                  |
| 库文件       | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *与v1.2相同* |

规格参数
--------------

| 参数                        | 值                                                                |
|----------------------------------|----------------------------------------------------------------------|
| 工作电压                | 3.3~5.5 V                                                            |
| 直接兼容的开发板        | Arduino Uno/Seeeduino                                                |
| 电流                          | 25~400mA                                                             |
| 发射功率                   | 0-10 dBm                                                             |
| 频率                        | 2402~2480 MHz                                                        |
| 信道                          | 0~13                                                                 |
| 网络速率                     | 802.11b为1-11 Mbps/802.11g为6-54Mbps                           |
| 尺寸                        | 60X56X19 mm                                                          |
| 净重                       | 24±1 g                                                               |
| 安全WiFi认证       | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                              |
| 内置网络应用 | DHCP客户端、DNS客户端、ARP、ICMP ping、FTP、TELNET、HTTP、UDP、TCP |
| 认证                    | RN171: FCC, CE                                                      |

硬件概述
-----------------

WiFi扩展板与任何Arduino/Seeeduino开发板兼容，因为它只需要您在D0-D7之间选择的两个数字引脚进行UART/串口通信。安装时，只需将扩展板堆叠在Arduino/Seeeduino开发板上即可。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1. **串行外设接口（SPI）连接（MOSI、SCK、MISO）：** 这些引脚没有连接到Arduino的任何引脚，它们是独立的，其逻辑电平输出/输入为3.3V。它们可以用来通过SPI与Arduino通信，但需要在这些引脚和Arduino引脚之间使用3.3V逻辑转换器。在SPI模式下，数据传输速率可达2Mbps。

    **RES_Wifi：** WiFi扩展板为RN-171模块配备了板载"复位按钮"，您也可以通过发送复位命令来软件复位RN-171。此外，如果您想将此引脚连接到Arduino的数字6引脚，只需焊接扩展板上标有"P5"的焊盘即可。

2. **RN171：** 一个内置TCP/IP协议栈的超低功耗无线模块。
3. **天线：** I.PEX连接器。
4. **RN171分线区域：** RN171模块有自己的模拟输入和GPIO引脚，扩展板通过此分线区域提供对这些引脚的访问。GPIO引脚（IO3、IO7、IO8和IO9）可承受3.3V电压，而模拟输入引脚（S_0和S_1）可读取0-400mV（不要超过1.2V）。RN171可以通过软件配置使用这些引脚，或者它们可以连接到其他引脚以使用其他RN171功能，如自组网模式。VCC的电压取决于WiFi扩展板的供电电源。
5. **UART/串行选择区域：** 两排跳线，让您选择要使用哪些RX和TX引脚与Arduino通信。
6. **Grove连接器：** 模拟I2C Grove（如果使用Arduino UNO或Seeeduino）用于引脚A4和A5，数字串行Grove用于D8和D9。VCC电压取决于板子的电源供应。

### 使用的引脚 / 扩展板兼容性

WiFi扩展板使用您在D0和D7之间选择的任意两个数字引脚与RN171 WiFi模块通信，但请记住D0和D1被Arduino用于编程和串行通信目的，使用它们可能会干扰这两个功能。

在本页的示例代码中，我们使用D2和D3作为扩展板的RX和TX。在这种情况下，跳线帽应按如下所示连接：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2选择为WIFI_TX，D3选择为WIFI_RX*

### RN171 WiFi模块

RN-171是一个独立的完整TCP/IP无线网络模块。由于其小尺寸和极低的功耗，RN-171非常适合移动无线应用。它集成了2.4GHz无线电、32位SPARC处理器、TCP/IP协议栈、实时时钟、加密加速器、电源管理和模拟传感器接口。

在最简单的配置中，硬件只需要四个连接（PWR、TX、RX和GND）就可以创建无线WiFi数据连接。此外，RN171的模拟传感器输入可以用作模拟输入引脚，其额定值为0-400 mV（不要超过1.2V DC）。

**电源：** RN-171模块的工作电压通常为3.3VDC，因此WiFi扩展板上设计了电压调节器和逻辑电平转换器。扩展板上的LD1117调节器转换为3.3VDC，为RN171模块供电。但是，由于电源的自动判断电路，RN-171可以通过3V3引脚和5V引脚供电。但如果同时向板子提供3.3v和5v，供电电源将是5v。如果与Arduino/Seeeduino板一起使用，只需将WiFi扩展板堆叠在板子上即可。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_communicate.png)
*RN171模块与Arduino接口的示意图*

**GPIO_6：** RN171 WiFi模块的GPIO6引脚默认只连接到WiFi扩展板上标有D5的LED。此LED用于显示接入点（AP）连接状态。但是，如果您想将GPIO6连接到Arduino的数字引脚5，只需焊接WiFi扩展板上标有"P6"的焊盘即可。

### LED状态指示器

<table>
  <tbody>
    <tr>
      <td>标签</td>
      <td>描述</td>
      <td>状态</td>
      <td>硬件连接</td>
    </tr>
    <tr>
      <td>D5</td>
      <td>绿色LED。指示关联状态。</td>
      <td><strong>关闭</strong>：表示模块未与网络关联。<br/><strong>常亮</strong>：表示已关联且互联网访问正常</td>
      <td>连接到RN171模块的GPIO6</td>
    </tr>
    <tr>
      <td>D1</td>
      <td>红色LED。指示TCP/IP连接状态。</td>
      <td><strong>常亮</strong>：通过TCP连接。<br/><strong>快速闪烁（每秒2次）</strong>：无IP地址或模块处于命令模式。<br/><strong>慢速闪烁（每秒一次）</strong>：IP地址正常。</td>
      <td>连接到RN171模块的GPIO4</td>
    </tr>
    <tr>
      <td>RST</td>
      <td>红色LED。WiFi模块复位状态。</td>
      <td><strong>常亮</strong>：复位按钮（WIFI_RST）被按下。</td>
      <td>连接到RN171模块的复位引脚。</td>
    </tr>
    <tr>
      <td>PWR</td>
      <td>绿色LED。指示WiFi模块的上电状态。</td>
      <td><strong>常亮</strong>：模块/扩展板已上电。</td>
      <td>连接到LD1117电压调节器的3.3V输出。</td>
    </tr>
  </tbody>
</table>

WiFi库
------------

我们创建了一个库来帮助您与扩展板接口，在本节中我们将向您展示如何设置库并介绍一些功能。

### 设置

1. *从Wifi Shield github页面[下载库代码的zip文件](https://github.com/Seeed-Studio/WiFi_Shield)。*
2. *将下载的文件解压到您的…/arduino/libraries/文件夹中。*
3. *将解压的文件夹重命名为"WifiShield"*
4. *启动Arduino IDE（如果已打开则重启）。*

### 功能

这些是库中最重要/有用的功能，我们邀请您自己查看.h文件以了解所有可用功能。

#### join()

- **描述：**
  - 用于加入WiFi接入点
- **语法：**
  - join(const char *ssid, const char*phrase, int auth)
- **参数：**
  - **ssid：** 您希望扩展板连接的接入点名称
  - **phrase：** 您希望扩展板连接的接入点的密码/短语
  - **auth：** 您希望扩展板连接的接入点的认证类型。可以是以下常量之一：
    - WIFLY_AUTH_OPEN
    - WIFLY_AUTH_WEP
    - WIFLY_AUTH_WPA1
    - WIFLY_AUTH_WPA1_2
    - WIFLY_AUTH_WPA2_PSK
    - WIFLY_AUTH_ADHOC
- **返回值：**
  - **boolean：** 如果成功连接到接入点则返回true，否则返回false。
- **示例：**

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

SoftwareSerial uart(2, 3); // 创建一个到WiFi扩展板TX和RX引脚的串行连接。
WiFly wifly(&uart); // 使用上面创建的到WiFi扩展板的串行连接创建一个WiFly库对象。

void setup()
{
    uart.begin(9600); // 启动到扩展板的串行连接
    Serial.begin(9600); // 启动Arduino串行监视器窗口连接
    wifly.reset(); // 重置扩展板
    while(wifly.join("mySSID","mySSIDpassword",WIFLY_AUTH_WPA2_PSK) == false)
    {
        Serial.println("连接到接入点失败。将重试。");
    }
    Serial.println("已连接到接入点！");
}

void loop()
{

}
```

:::tip
这些示例基于 Arduino UNO，我们使用 D2/D3 作为 SoftwareSerial 引脚。如果您使用的是 Arduino Mega，D2 将不再可用。更多详细信息请参考 [Arduino Software Serial](https://www.arduino.cc/en/Tutorial/SoftwareSerialExample)
这里是一个示例。
:::

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/connect_mega.jpg)

至于代码，您也需要做一些更改：

```c
SoftwareSerial uart(10, 3); // create a serial connection to the WiFi shield TX and RX pins.
```

#### receive()

- **描述：**
  - 可用于从扩展板读取数据，是 Arduino read() 函数的替代方案。
- **语法：**
  - receive(uint8_t *buf, int len, int timeout)
- **参数：**
  - **buf：** 用于存储从扩展板读取字节的缓冲区数组。
  - **len：** 缓冲区数组的长度/大小
  - **timeout：** 超时值，用于确定何时停止尝试读取。
- **返回值：**
  - **int：** 从扩展板读取的字节数。
- **示例：**

```c
char c;
while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
    Serial.print((char)c);
}
```

查看 File->Examples->WiFi_Shield->wifly_test 示例以获取完整示例。

#### sendCommand()

- **描述：**
  - 我们的一些函数（例如 join()、reboot()、save()）充当 RN171 模块用户手册中列出的文本命令的包装器。如果我们的函数不能满足您的需求，sendCommand() 函数允许您创建自己的包装器函数。
- **语法：**
  - sendCommand(const char *cmd, const char*ack, int timeout)
- **参数：**
  - **cmd：** RN-171 用户手册中的任何命令。
  - **ack：** 命令预期的返回字符串
  - **timeout：** 在将输出视为错误请求/响应之前允许的时间
- **返回值：**
  - **boolean：** 如果 WiFi 扩展板响应了 ack 字符串则返回 true，否则返回 false。

- **示例：**

```c
// 我们的 join() 函数是 join 命令的包装器，如下所示。
// 字符串 "Associated" 是用户手册中说明 RN171 在成功时将返回的内容。
if(sendCommand("join\r", "Associated",DEFAULT_WAIT_RESPONSE_TIME*10))
{
    // 已连接
}else{
    // 无法连接
}
```

查看 File->Examples->WiFi_Shield->wifly_test 示例以获取完整示例。

WiFi Shield 示例/应用
---------------------------------

### 示例 1：向 WiFi Shield 发送命令并通过 Arduino 串口监视器窗口接收响应

WiFi shield 的 RN-171 模块通过发送在[其数据手册](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf)中找到的命令进行配置。您可以编写一个草图来自动发送命令，但这是一个很好的示例，我们建议您仔细学习，因为它将教您 WiFi shield 和 RN-171 的确切工作原理。

要继续，请按照以下步骤操作，如果您更喜欢观看视频，我们也制作了一个视频

[视频 - Seeeduino WiFi Shield 入门。](https://www.youtube.com/watch?v=8dCrAaN16lE)

**步骤 1：WiFi Shield 跳线配置**

将 WiFi shield 中的跳线定位，使数字引脚 2 (D2) 被选择用于 WIFI_TX，数字引脚 3 (D3) 被选择用于 WIFI_RX，如下图所示。这些是我们将用来向 RN-171 发送和接收信息的引脚。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_front.png)

*引脚 D2 用于 TX，D3 用于 RX*

**步骤 2：软件/代码**

在下面的草图中，我们创建了一个 UART 对象，允许我们向 RN-171/WiFi Shield 发送和接收数据。然后我们将此对象与 WiFly 库结合使用，向 shield 发送数据。Arduino 的 Serial 对象用于打印我们从 shield 接收的数据，并通过 WiFly/UART 对象接收我们想要发送到 shield 的命令。

将以下代码上传到您的 Arduino 板：

```c
#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WiFly.h"

// set up a new serial port.
SoftwareSerial uart(2, 3); // create a serial connection to the WiFi shield TX and RX pins.
WiFly wifly(&uart); // create a WiFly library object using the serial connection to the WiFi shield we created above.

void setup()
{
    uart.begin(9600); // start the serial connection to the shield
    Serial.begin(9600); // start the Arduino serial monitor window connection
    delay(3000); // wait 3 second to allow the serial/uart object to start
}

void loop()
{
    while (wifly.available())  // if there is data available from the shield
    {
        Serial.write(wifly.read()); // display the data in the Serial monitor window.
    }
    while (Serial.available()) // if we typed a command
    {
        wifly.write(Serial.read()); // send the command to the WiFi shield.
    }
}
```

**步骤 3：进入命令模式**

WiFi 扩展板中的 WiFly RN-171 模块可以在两种模式下工作：数据模式和命令模式。在数据模式下，扩展板能够接收和发起连接。在命令模式下，我们能够使用其数据手册中列出的命令来配置模块。

要进入命令模式，请按照以下步骤操作：

1. 打开 Arduino 串口监视器。
2. 将串口监视器设置为"无行结束符"，波特率设置为 9600。
3. 在 Arduino 串口监视器中输入"$$$"并按回车键。
4. 模块将响应字母"CMD"，表示它已进入命令模式。

让我们继续测试一些命令，请执行以下操作：

1. 在 Arduino 串口监视器窗口中，选择"回车符"并将波特率设置为 9600。
2. 现在将下表中的每个命令输入到 Arduino 串口监视器中并按回车键。
3. 模块将为每个命令输出响应，如表中所述。

| 命令     | 描述                                                                                                                                                                                                                        |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scan     | 此命令在所有 13 个信道上执行接入点的主动探测扫描。当您使用此命令时，模块返回它找到的接入点的 MAC 地址、信号强度、SSID 名称和安全模式。 |
| get ip   | 此命令显示 IP 地址和端口号设置                                                                                                                                                                               |

有关配置命令的完整列表，请参阅 RN-171 [参考指南](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf)第 11 页开始的内容。

### 示例 2：连接到接入点/互联网路由器

在此示例中，我们将向您展示如何将 WiFi 扩展板连接到接入点（您的互联网路由器），包括需要您输入命令和不需要输入命令的方式：

#### 通过输入命令连接

本节将教您如何使用 RN-171 数据手册中的命令将 WiFi 扩展板连接到接入点，通过本节的学习，您将确切了解在使用我们的 WiFi Arduino 库时后台发生的情况。

请执行以下操作：

1. 将示例一中的代码上传到您的 Arduino 开发板
2. **进入命令模式：**
    1. 将串口监视器设置为"无行结束符"，波特率设置为 9600。
    2. 在 Arduino 串口监视器中输入 *$$$* 并按回车键。

3. 将串口监视器设置为"回车符"。
4. **扫描可用的接入点：**
    1. 输入 *scan* 并按回车键。Arduino 串口监视器窗口将为 WiFi 扩展板找到的每个接入点输出逗号分隔值列表。从左到右，第三个值是安全模式，最后一个值是 SSID。此示例显示安全模式为 4，SSID 名称为 MySSID：01,01,-88,**04**,1104,1c,00,45:56:78:be:93:1f,**MySSID**

5. 从找到的接入点列表中，找到与您的互联网路由器对应的接入点，并记下安全模式和 SSID，因为我们需要这两个值来连接到它。
6. **在扩展板中设置安全模式：**
    1. 输入 *set wlan auth m*。将 *m* 替换为您希望连接的接入点的安全模式编号（在此示例中为 4）。
    2. WiFi 扩展板支持的安全模式列在下面的图 1 中。

7. **设置接入点密码短语**
    1. 输入 *set wlan phrase myPhrase*。将 *myPhrase* 替换为您接入点的密码/安全密钥。

    :::note
    如果您的接入点的安全类型是 WEP，请在上述命令中使用 *key* 而不是 *phrase*。
    :::

    2. 接入点（互联网路由器）的密码短语是您从 PC 连接到它时使用的密码。在 Windows 中，您可以按照下面动画图像所示找到它：
    ![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/How_to_find_network_security_key_password.gif)
    如何找到网络的安全密钥/密码

8. **加入接入点**
    1. 现在我们已经设置了接入点的安全类型和密码短语，我们可以连接到它。
    2. 输入 *join MySSID*。将 MySSID 替换为您接入点的广播名称。
    3. 如果成功，Arduino 串口监视器窗口将显示"Associated!"字样。

下表提供了您在上述步骤中输入的命令的描述。每个命令的更详细描述可以在 RN171 的用户手册中找到。

| 编号 | 命令                      | 描述                                                                                                                                                                                                                                                                          |
|--------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | scan                      | 此命令在所有 13 个信道上执行接入点的主动探测扫描。当您使用此命令时，模块返回它找到的接入点的 MAC 地址、信号强度、SSID 名称和安全模式。                                                          |
| 2      | set wlan auth 4           | 找到与您接入点上的安全协议对应的值。然后，告诉 WiFly 使用什么安全协议，它是**图 1**中显示的与接入点安全协议对应的编号。这里我们选择"4"。                              |
| 3      | set wlan phrase seeed-mkt | 告诉 WiFi 扩展板您的密码短语。                                                                                                                                                                                                                                                |
| 4      | join SEEED-MKT            | 告诉 WiFi 扩展板加入，"SEEED-MKT"是我们选择连接的接入点名称。发送命令后，模块现在应该连接并打印出有关连接的信息。（如果连接失败，请尝试再次发送命令直到成功） |

| 值 | 认证模式                   |
|-------|---------------------------------------|
| 0     | 开放（默认）                        |
| 1     | WEP-128                               |
| 2     | WPA1                                  |
| 3     | 混合 WPA1 和 WPA2-PSK               |
| 4     | WPA2-PSK                              |
| 5     | 未使用                              |
| 6     | Ad hoc 模式（加入任何 ad hoc 网络） |
| 8     | WPE-64                                |

*图 1*

#### 使用我们的 WiFi 库进行连接

现在您已经知道如何通过输入每个命令来连接到接入点，是时候使用我们提供的库和示例了。

要查看连接到接入点所需的代码，请转到"文件 -> 示例 -> Wifi_Shield -> wifi_test"。修改代码以使用您自己的 SSID（接入点名称）和 KEY（您的接入点密码），然后将草图上传到您的 Arduino IDE。

    #define SSID      " SEEED-MKT "
    #define KEY       " seeed-mkt "

将草图上传到您的 Arduino 板后，打开串行监视器窗口。如果扩展板成功加入接入点，将显示"OK"消息以及由"get everything"命令产生的连接信息。如果扩展板未能加入接入点，将显示"Failed"消息。

#### 配置扩展板在上电时连接

扩展板可以配置为在上电时连接，您只需要执行一次：

1. 发送"set wlan ssid mySSID"命令，将 mySSID 替换为您的 SSID
2. 发送"set wlan join 1"命令。
3. 发送"save"命令。

现在扩展板将在上电时自动连接到接入点。

每个命令的功能描述可以在 RN-171 数据表和下表中找到。

| 编号 | 命令                   | 描述                                                                           |
|--------|----------------------------|---------------------------------------------------------------------------------------|
| 1      | set wlan ssid | "ssid"是您想要自动连接的接入点名称 |
| 2      | set wlan join 1            | 这告诉模块尝试自动连接到存储在内存中的 SSID。  |
| 3      | save                       | 在 WiFi 的配置文件中存储/保存这些设置                                   |

#### 设置静态 IP 地址

要让扩展板从接入点获取静态 IP 地址，连接到接入点后，发送以下命令：

| 编号 | 命令                       | 描述                   |
|--------|--------------------------------|-------------------------------|
| 1      | set ip dhcp 0                  | 关闭 DHCP。                |
| 2      | set ip address | 设置您想要的 IP 地址。 |

### 示例 3：与网络通信（）

此示例将向您展示设备（如您的 PC 和/或手机）如何与 WiFi 扩展板通信。

按照以下步骤：

1. 按照示例 2 的*通过输入命令连接*部分中的步骤 1-7 配置模块
2. 通过发送命令"set ip local 80"将监听 IP 端口设置为"80"
3. 如示例 2 的*通过输入命令连接*部分中的步骤 8 所示，将您的扩展板连接/加入到接入点
4. 通过发送"save"命令保存这些设置
5. 使用命令"get ip"获取您的扩展板的 IP 地址。IP 地址和端口将显示在响应中"IP="的右侧（例如 IP=192.168.0.10:80）
6. 打开您的网络浏览器，在浏览器的 URL 栏中输入您的扩展板的 IP 地址，然后按 Enter 键访问它。
7. 您的 Arduino 串行监视器窗口将显示类似下面的 HTTP 响应。这是您的浏览器发送给扩展板以请求数据的信息。

```
*OPEN*GET / HTTP/1.1
Host: 192.168.0.10
Connection: keep-alive
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36
Accept-Encoding: gzip, deflate, sdch
Accept-Language: en-US,en;q=0.8
```

浏览器现在正在等待数据，WiFi 模块可以发送传感器值、提供网页或任何其他数据直接返回给浏览器！在这种情况下，浏览器正在等待一个网页。如果 WiFi 模块响应一个 HTML 格式的页面，浏览器将显示它。接下来的示例将教你如何做所有这些有趣的事情。

### 示例 4：使用 WiFi Shield 作为网络服务器（从 Shield 提供网页）

正如你在示例 3 中看到的，互联网/网络浏览器能够连接到 WiFi shield。一旦建立连接（当浏览器发送其 HTTP 请求时），WiFi shield 就可以发送回 HTML 代码供浏览器显示为网页。在这个示例中，你将学习 shield 回复网络浏览器所需的内容。

**第一步：Arduino 代码**

将以下代码上传到你的 Arduino 板，将 "myssid" 和 "mypassword" 分别替换为你的接入点的值：

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "myssid"
#define KEY       "mypassword"
// 检查你的接入点的安全模式，我的是 WPA20-PSK
// 如果你的不同，你需要更改 AUTH 常量，请查看文件 WiFly.h 获取可用的安全代码
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// 引脚连接
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // 创建一个 WiFi 扩展板串口对象
WiFly wifly(&wiflyUart); // 将 wifi 扩展板串口对象传递给 WiFly 类

void setup()
{
    wiflyUart.begin(9600); // 启动 wifi 扩展板 uart 端口
    Serial.begin(9600); // 启动 arduino 串口端口
    Serial.println("--------- WIFLY 网络服务器 --------");

    // 等待 wifly 初始化
    delay(1000);

    wifly.reset(); // 重置扩展板
    delay(1000);
    //设置 WiFly 参数

    wifly.sendCommand("set ip local 80\r"); // 将本地通信端口设置为 80
    delay(100);

    wifly.sendCommand("set comm remote 0\r"); // 连接打开时不发送默认字符串
    delay(100);

    wifly.sendCommand("set comm open *OPEN*\r"); // 设置连接打开时 wifi 扩展板将输出的字符串
    delay(100);

    Serial.println("加入 " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("成功");
    } else {
        Serial.println("失败");
    }

    delay(5000);

    wifly.sendCommand("get ip\r");
    char c;

    while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // 打印来自 get ip 命令的响应
        Serial.print((char)c);
    }

    Serial.println("网络服务器就绪");

}

void loop()
{

    if(wifly.available())
    { // wifi 扩展板有可用数据
        if(wiflyUart.find("*OPEN*")) // 通过查找 *OPEN* 字符串来查看可用数据是否来自打开的连接
        {
            Serial.println("新的浏览器请求！");
            delay(1000); // 延迟足够的时间让浏览器完成发送其 HTTP 请求字符串
            // 发送 HTTP 头部
            wiflyUart.println("HTTP/1.1 200 OK");
            wiflyUart.println("Content-Type: text/html; charset=UTF-8");
            wiflyUart.println("Content-Length: 244"); // HTML 代码长度
            wiflyUart.println("Connection: close");
            wiflyUart.println();

            // 发送网页的 HTML 代码
            wiflyUart.print("<html>");
            wiflyUart.print("<head>");
            wiflyUart.print("<title>我的 WiFI 扩展板网页</title>");
            wiflyUart.print("</head>");
            wiflyUart.print("<body>");
            wiflyUart.print("<h1>你好世界！</h1>");
            wiflyUart.print("<h3>这个网站由我的 WiFi 模块提供服务</h3>");
            wiflyUart.print("<a href=\"http://yahoo.com\">雅虎！</a> <a href=\"http://google.com\">谷歌</a>");
            wiflyUart.print("<br/><button>我的按钮</button>");
            wiflyUart.print("</body>");
            wiflyUart.print("</html>");
        }
    }
}
```

**第二步：获取Shield的IP地址**

打开串口监视器窗口，等待显示"Web server ready"消息。串口监视器还会显示WiFi shield的IP地址：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-window.png)

*Arduino程序串口通信输出。shield的IP地址已高亮显示。*

**第三步：访问网页**

现在在您的网络浏览器中访问该IP地址。应该会显示下面的网页，它包含指向Yahoo!和Google的链接以及一个（暂时）不起作用的按钮：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-simple-webserver-page.png)

*从WiFi shield提供的包含两个链接和一个按钮的简单网页。*

当访问网页时，串口监视器窗口还会显示"New Browser Request!"字符串，如下所示：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-simple-webserver-arduino-serial-window-response.png)

*Arduino串口通信窗口显示它检测到了新的浏览器连接/请求。*

<div class="admonition note">
<p class="admonition-title">注意</p>
对于某些浏览器，如Google Chrome，即使只是在地址栏中输入URL也会发送网页请求，这是因为这些浏览器会尝试获取网页标题以方便用户，甚至在用户访问网页之前就这样做。
</div>

### 示例5：从网页控制Arduino数字引脚（从网页切换LED）

在这个示例中，我们将创建一个带有三个按钮的网页来控制Arduino中三个不同的数字引脚。

对于本教程，请按照以下步骤操作。我们还制作了一个视频，其中更详细地解释了代码。

[视频 - WiFi Shield Arduino从网页进行数字引脚控制](https://www.youtube.com/watch?v=ek63patAl80)

**第1步：硬件**

将三个LED和电阻连接到数字引脚11、12和13，如下面的原理图所示：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-schematic.png)

*三个LED和1k电阻连接到引脚11、12和13。*

**第2步：Arduino代码**

将以下代码上传到您的Arduino板，但将"mySSID"和"myPassword"替换为您的接入点的SSID名称和密码：

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// 检查你的接入点的安全模式，我的是 WPA20-PSK
// 如果你的不同，你需要更改 AUTH 常量，查看文件 WiFly.h 获取可用的安全代码
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// 引脚连接
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // 创建一个 WiFi 盾板串口对象
WiFly wifly(&wiflyUart); // 将 wifi 盾板串口对象传递给 WiFly 类
char ip[16];

void setup()
{
    pinMode(11,OUTPUT);
    digitalWrite(11,LOW);

    pinMode(12,OUTPUT);
    digitalWrite(12,LOW);

    pinMode(13,OUTPUT);
    digitalWrite(13,LOW);

    wiflyUart.begin(9600); // 启动 wifi 盾板 uart 端口

    Serial.begin(9600); // 启动 arduino 串口端口
    Serial.println("--------- WIFLY 网络服务器 --------");

    // 等待 wifly 初始化
    delay(1000);

    wifly.reset(); // 重置盾板
    delay(1000);
    //设置 WiFly 参数

    wifly.sendCommand("set ip local 80\r"); // 将本地通信端口设置为 80
    delay(100);

    wifly.sendCommand("set comm remote 0\r"); // 连接打开时不发送默认字符串
    delay(100);

    wifly.sendCommand("set comm open *OPEN*\r"); // 设置连接打开时 wifi 盾板将输出的字符串
    delay(100);

    wifly.sendCommand("set ip protocol 2\r"); // 设置 TCP 协议
    delay(100);

    Serial.println("加入 " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("成功");
    } else {
        Serial.println("失败");
    }

    delay(5000);

    wifly.sendCommand("get ip\r");

    wiflyUart.setTimeout(500);
    if(!wiflyUart.find("IP="))
    {
        Serial.println("无法获取 ip");
        while(1);;
    }else
    {
        Serial.print("IP:");
    }

    char c;
    int index = 0;
    while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // 打印来自 get ip 命令的响应
        if(c == ':')
        {
            ip[index] = 0;
            break;
        }
        ip[index++] = c;
        Serial.print((char)c);
        ?
    }
    Serial.println();
    while (wifly.receive((uint8_t *)&c, 1, 300) > 0);;
    Serial.println("网络服务器就绪");
}

void loop()
{
    if(wifly.available())       // wifi 盾板有可用数据
    {

        if(wiflyUart.find("*OPEN*")) // 通过查找 *OPEN* 字符串来查看可用数据是否来自打开的连接
        {
            Serial.println("新的浏览器请求！");
            delay(1000); // 延迟足够的时间让浏览器完成发送其 HTTP 请求字符串

            if(wiflyUart.find("pin=")) // 在 http 请求中查找字符串 "pin="，如果存在则我们要控制 LED
            {
                Serial.println("LED 控制");
                // 用户想要切换 LED
                int pinNumber = (wiflyUart.read()-48); // 获取第一个数字，即如果引脚是 13，则第一个数字是 1
                int secondNumber = (wiflyUart.read()-48);
                if(secondNumber>=0 && secondNumber<=9)
                {
                    pinNumber*=10;
                    pinNumber +=secondNumber; // 获取第二个数字，即如果引脚号是 13，则第二个数字是 3，然后加到第一个数字上
                }
                digitalWrite(pinNumber, !digitalRead(pinNumber)); // 切换引脚
                // 构建引脚状态字符串。Arduino 用这个字符串回复浏览器。
                String pinState = "引脚 ";
                pinState+=pinNumber;
                pinState+=" 是 ";
                if(digitalRead(pinNumber)) // 检查引脚是开启还是关闭
                {
                    pinState+="开启"; // 引脚开启
                }
                else
                {
                    pinState+="关闭";  // 引脚关闭
                }
                // 构建 HTTP 头部 Content-Length 字符串。
                String contentLength="Content-Length: ";
                contentLength+=pinState.length(); // 长度值是 Arduino 回复浏览器的字符串长度。
                // 发送 HTTP 头部
                wiflyUart.println("HTTP/1.1 200 OK");
                wiflyUart.println("Content-Type: text/html; charset=UTF-8");
                wiflyUart.println(contentLength); // HTML 代码长度
                wiflyUart.println("Connection: close");
                wiflyUart.println();
                // 发送响应
                wiflyUart.print(pinState);
            }
            else
            {
                // 发送 HTTP 头部
                wiflyUart.println("HTTP/1.1 200 OK");
                wiflyUart.println("Content-Type: text/html; charset=UTF-8");
                wiflyUart.println("Content-Length: 540"); // HTML 代码长度
                wiflyUart.println("Connection: close");
                wiflyUart.println();

                // 发送网页的 HTML 代码
                wiflyUart.print("<html>");
                wiflyUart.print("<head>");
                wiflyUart.print("<title>WiFi 盾板网页</title>");
                wiflyUart.print("</head>");
                wiflyUart.print("<body>");
                wiflyUart.print("<h1>LED 切换网页</h1>");
                // 在 <button> 标签中，ID 属性是通过 "pin" GET 参数发送给 arduino 的值
                wiflyUart.print("<button id=\"11\" class=\"led\">切换引脚 11</button> "); // 引脚 11 的按钮
                wiflyUart.print("<button id=\"12\" class=\"led\">切换引脚 12</button> "); // 引脚 12 的按钮
                wiflyUart.print("<button id=\"13\" class=\"led\">切换引脚 13</button> "); // 引脚 13 的按钮
                wiflyUart.print("<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script>");
                wiflyUart.print("<script type=\"text/javascript\">");
                wiflyUart.print("$(document).ready(function(){");
                wiflyUart.print("$(\".led\").click(function(){");
                wiflyUart.print("var p = $(this).attr('id');"); // 获取 id 值（即 pin13、pin12 或 pin11）
                // 向 IP 地址发送 HTTP GET 请求，参数为 "pin"，值为 "p"，然后执行函数
                // 重要：不要忘记用你的盾板的 IP 地址和端口替换 IP 地址和端口
                wiflyUart.print("$.get(\"http://");
                wiflyUart.print(ip);
                wiflyUart.print(":80/a\", {pin:p},function(data){alert(data)});");// 执行 get 请求。返回时执行 "function"（显示一个包含发送回浏览器的 "data" 的警告）。
                wiflyUart.print("});");
                wiflyUart.print("});");
                wiflyUart.print("</script>");
                wiflyUart.print("</body>");
                wiflyUart.print("</html>");
            }
            Serial.println("数据已发送到浏览器");
        }
    }
}
```

**步骤 3：串口监视器窗口**

打开串口监视器窗口，等待显示"Web server ready"消息。串口监视器还会显示WiFi扩展板的IP地址：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-window.png)

*Arduino程序串口通信输出。扩展板的IP地址已高亮显示。*

**步骤 4：访问网页**

在网页浏览器中访问该IP地址。应该会显示一个包含三个按钮的网页，如下所示。点击按钮来控制LED。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-webpage.png)

*从WiFi扩展板提供的LED控制网页。*

Arduino还会向网页浏览器回复引脚的状态，浏览器会在警告窗口中显示这些信息。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-arduino-response.png)

*显示Pin12状态的警告对话框，字符串"Pin12 is ON"是从Arduino发送的。*

当浏览器发送请求访问网页或控制LED引脚时，串口监视器窗口也会显示相关信息。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-response.png)

*当HTTP请求发送到扩展板时的Arduino串口通信输出。*

### 示例 6：WiFi扩展板和Android应用

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Androidapp-ethernet-shield-led-toggle.png)

*您可以使用这个Android应用通过WiFi或以太网扩展板控制Arduino的引脚。*

**Android应用程序**

我们创建了一个Android应用，可以通过WiFi扩展板切换Arduino中的数字引脚，要了解应用的工作原理并学习代码，请观看此链接中的视频：

[视频 - Arduino引脚控制的WiFi扩展板Android应用](https://www.youtube.com/watch?v=0R709uGvkWM)

**软件**

从此[链接](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFiShieldLEDControl.zip "WiFiShieldLEDControl.zip")下载Android Studio项目/源码：

### 示例 7：向外部服务器发送数据和从外部服务器检索数据

WiFi扩展板中的RN-171模块具有充当HTML客户端（本质上是基于文本的网页浏览器）的能力，这意味着我们可以使用扩展板向网络服务器发送和接收数据。在此示例中，您将学习如何将扩展板与显示任何城市天气数据（即温度、湿度等）的网络应用程序编程接口（API）一起使用。

我们将使用的API名称是[OpenWeatherMap](http://openweathermap.org/api)，当您向此网站发送城市和国家名称时，它会返回包含天气信息的JSON字符串。例如，如果您想显示英国伦敦的天气，请参考此链接中的教程[http://openweathermap.org/appid](http://openweathermap.org/appid)。从2015年10月9日开始，该网站要求用户在访问API之前注册API密钥。获得API密钥后，您将能够访问以下URL [http://api.openweathermap.org/data/2.5/weather?q=London,uk](http://api.openweathermap.org/data/2.5/weather?q=London,uk)，它会返回如下所示的JSON字符串，其中嵌入了天气数据和其他信息。

```
{
    "coord":{"lon":-0.13,"lat":51.51},
    "sys":{"type":3,"id":60992,"message":0.0079,"country":"GB","sunrise":1421395087,"sunset":1421425352},
    "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],
    "base":"cmc stations",
    "main":{
        "temp":277.25,"humidity":79,"pressure":998.4,
        "temp_min":277.25,"temp_max":277.25
    },
    "wind":{
    "speed":2,"gust":5,"deg":180},
    "rain":{"3h":0},"clouds":{"all":32},
    "dt":1421372140,"id":2643743,"name":"London","cod":200
}
```

**步骤 1：URL**

让我们继续获取美国旧金山的天气 JSON 字符串。我们的 WiFi 扩展板需要访问的 URL 如下（您可以在网络浏览器中测试）：

    http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco,US

**步骤 2：Arduino 代码**

[WiFly 手册](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf)的第 13 节教您连接到网络服务器的不同方法，但在所有情况下，我们都需要指定服务器的名称（或者如果服务器没有域名则使用 IP 地址），然后指定我们希望发送的数据。

我们需要发送给 WiFi 扩展板的命令，以从 OpenWeatherMap 服务器接收 JSON 字符串，如下所示：

    set ip proto 18 //启用 html 客户端
    set dns name api.openweathermap.org //您的网络服务器名称
    set ip address 0 // 这样 WiFly 将使用 DNS
    set ip remote 80 // 标准网络服务器端口
    set com remote 0 // 关闭 REMOTE 字符串，这样它不会干扰 post
    open // 打开连接
    GET /data/2.5/weather?q=San%20Francisco,US \n\n // 发送数据

这是将发送命令的 arduino 代码：

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// 检查您的接入点的安全模式，我的是 WPA20-PSK
// 如果您的不同，您需要更改 AUTH 常量，请参阅文件 WiFly.h 了解可用的安全代码
#define AUTH      WIFLY_AUTH_WPA2_PSK

// 引脚连接
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // 创建一个 WiFi 扩展板串行对象
WiFly wifly(&wiflyUart); // 将 wifi 扩展板串行对象传递给 WiFly 类

void setup()
{
    wiflyUart.begin(9600); // 启动 wifi 扩展板 uart 端口
    Serial.begin(9600); // 启动 arduino 串行端口
    Serial.println("--------- OpenWeatherMap API --------");

    // 等待 wifly 初始化
    delay(3000);
    wifly.reset(); // 重置扩展板
    Serial.println("Join " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("OK");
    } else {
        Serial.println("Failed");
    }

    delay(5000);

    wifly.sendCommand("set ip proto 18\r"); //启用 html 客户端
    delay(100);

    wifly.sendCommand("set dns name api.openweathermap.org\r"); // 我们要连接的网络服务器名称
    delay(100);

    wifly.sendCommand("set ip address 0\r"); // 这样 WiFly 将使用 DNS
    delay(100);

    wifly.sendCommand("set ip remote 80\r"); /// 标准网络服务器端口
    delay(100);

    wifly.sendCommand("set com remote 0\r"); // 关闭 REMOTE 字符串，这样它不会干扰 post
    delay(100);

    wifly.sendCommand("open\r"); // 打开连接
    delay(100);

    wiflyUart.print("GET /data/2.5/weather?q=San%20Francisco,US \n\n");
    delay(1000);

}

void loop()
{
    //一旦从互联网接收到数据，通过 UART 端口输出数据。
    while (wifly.available())
    {
        Serial.write(wifly.read());
    }
}
```

**步骤 3：结果**

打开串口监视器窗口，您应该能够看到与在浏览器中看到的相同的 JSON 字符串。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Open-weather-api-json-string.png)

*Arduino 串口监视器窗口中显示的 JSON 天气字符串。*

### 示例 8：与终端的 TCP 通信

在这个示例中，我们将向您展示如何从 WiFi 扩展板向 PC 终端程序发送信息。我们将制作一个简单的 Arduino 控制台，带有菜单，让您可以选择查看 Arduino 数字引脚的状态并切换它们。

**步骤 1：下载 TCP 终端**

[下载并安装 RealTerm](http://sourceforge.net/projects/realterm/files/Realterm/2.0.0.70/Realterm_2.0.0.70_setup.exe/download)，这是一个实用终端工具，允许我们连接到 WiFi 扩展板。

**步骤 2：Arduino 代码**

将下面的代码上传到您的 Arduino 板，将 "mySSID"、"myPassword" 和认证代码替换为您自己的接入点信息：

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// 检查你的接入点的安全模式，我的是 WPA20-PSK
// 如果你的不同，你需要更改 AUTH 常量，请查看文件 WiFly.h 获取可用的安全代码
#define AUTH      WIFLY_AUTH_WPA2_PSK

#define FLAG_MAIN_MENU 1
#define FLAG_SUB_MENU_2 2

int flag = FLAG_MAIN_MENU;

// 引脚连接
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // 创建一个 WiFi 模块串口对象
WiFly wifly(&wiflyUart); // 将 wifi 模块串口对象传递给 WiFly 类

void setup()
{

    // 定义我们可以控制的引脚
    pinMode(11,OUTPUT);
    digitalWrite(11,LOW);

    pinMode(12,OUTPUT);
    digitalWrite(12,LOW);

    pinMode(13,OUTPUT);
    digitalWrite(13,LOW);

    pinMode(7,OUTPUT);
    digitalWrite(7,LOW);

    wiflyUart.begin(9600); // 启动 wifi 模块串口

    Serial.begin(9600); // 启动 arduino 串口
    Serial.println("--------- TCP 通信 --------");

    // 等待 wifly 初始化
    delay(1000);

    wifly.reset(); // 重置模块
    delay(1000);

    wifly.sendCommand("set ip local 80\r"); // 将本地通信端口设置为 80
    delay(100);

    wifly.sendCommand("set comm remote 0\r"); // 连接打开时不发送默认字符串
    delay(100);

    wifly.sendCommand("set comm open *\r"); // 设置 wifi 模块在连接打开时输出的字符串或字符 "*"
    delay(100);

    wifly.sendCommand("set ip protocol 2\r"); // 设置 TCP 协议
    delay(100);

    Serial.println("Join " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("OK");
    } else {
        Serial.println("Failed");
    }

    delay(5000);

    wifly.sendCommand("get ip\r");
    char c;

    while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // 打印 get ip 命令的响应
        Serial.print((char)c);
    }

    Serial.println("TCP Ready");
}

void loop()
{

    if(wifly.available())
    {
        delay(1000); // 等待所有字符发送到 WiFi 模块
        char val = wiflyUart.read(); // 读取第一个字符

        if(flag == FLAG_MAIN_MENU)
        {
            switch(val)
            {
                case '*': // 搜索新连接字符串
                printMainMenu();
                break;
                case '1': // 用户输入 1，显示引脚状态
                printPinStates();
                printMainMenu();
                break;
                case '2': // 用户输入 2，显示子菜单（选择特定引脚的选项）
                printSubMenu2();
                flag = FLAG_SUB_MENU_2; // 进入子菜单的标志
                break;
                default:
                wiflyUart.print("无效子菜单\r\n");
                break;
            }
        }
        else if(flag == FLAG_SUB_MENU_2)
        {
            int pinNumber = val-48; // 获取第一个数字，即如果引脚是 13，那么第一个数字是 1
            int secondNumber = (wiflyUart.read()-48);
            if(secondNumber>=0 && secondNumber<=9)
            {
                pinNumber*=10;
                pinNumber +=secondNumber; // 获取第二个数字，即如果引脚号是 13，那么第二个数字是 3，然后加到第一个数字上
            }

            // 创建 "你想要切换引脚 x？？好的..." 字符串。
            String response = "\r\n你想要切换引脚 ";
            response+=pinNumber;
            response+="？好的...\r\n";

            wiflyUart.print(response);

            digitalWrite(pinNumber, !digitalRead(pinNumber)); // 切换引脚

            wiflyUart.print("引脚已切换！\r\n"); // 让用户知道引脚已被切换。
            printMainMenu();
            flag = FLAG_MAIN_MENU;
        }
    }

}

/*
* 打印主菜单选项
*/
void printMainMenu()
{
    wiflyUart.print("\r\n\r\n");
    wiflyUart.print("Arduino 控制台菜单：\r\n");
    wiflyUart.print("1. 显示数字引脚状态\r\n");
    wiflyUart.print("2. 切换数字引脚状态\r\n");
    wiflyUart.print("\r\n\r\n");
}

// 显示引脚状态
void printPinStates()
{

    String pinState = "引脚 7 是 ";
    pinState+=getPinState(7);
    pinState+="\r\n";

    pinState += "引脚 11 是 ";
    pinState+=getPinState(11);
    pinState+="\r\n";

    pinState += "引脚 12 是 ";
    pinState+=getPinState(12);
    pinState+="\r\n";

    pinState += "引脚 13 是 ";
    pinState+=getPinState(13);
    pinState+="\r\n";

    wiflyUart.print(pinState);
}

// 打印输入引脚号的选项
void printSubMenu2()
{
    wiflyUart.print("\r\n输入你想要切换的引脚号：");
}
?
// 获取引脚状态作为字符串。
String getPinState(int pinNumber)
{
    if(digitalRead(pinNumber)) // 检查引脚是开启还是关闭
    {
        return "开启"; // 引脚开启
    }
    else
    {
        return "关闭";  // 引脚关闭
    }
}
```

**步骤 3：获取 Shield 的 IP 地址和端口**

打开 Arduino 串口监视器窗口以获取 WiFi Shield 的 IP 地址和端口号，如下图中高亮显示的部分。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Tcp-arduino-serial-comm.png)

*TCP 示例的 Arduino 串口监视器窗口输出，IP 地址和端口号已高亮显示。*

在上图中，IP 地址和端口如下：

    192.168.0.10:80

**步骤 4：配置 TCP 终端并连接到 Shield**

打开 RealTerm，在"Display"选项卡中输入"30"作为"Rows"值，并选择"Scrollback"选项：

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-display-tab.png)

*RealTerm 窗口：rows = 30，并勾选 Scrollback 选项。*

在 RealTerm 程序的"Port"选项卡中，输入您的 shield 的 IP 地址和端口，例如 192.168.0.10:80，然后点击"Open"按钮，Arduino 的硬编码主菜单应该会在终端中显示。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-port-tab.png)

*RealTerm 窗口。Port 字段包含 WiFi shield 的 IP 地址和端口号。显示了 Arduino 的菜单*

在"Send"选项卡中，从菜单中选择一个选项，"1"或"2"，将其输入到文本框中并按"Send ASCII"发送该值。

例如，要切换引脚 13，输入"2"并按"Send ASCII"，然后当提示"Enter the pin number you wish you toggle"时，输入"13"并点击"Send ASCII"。Arduino 应该回复"Pin Toggled!"并返回主菜单，现在输入"1"并按"Send ASCII"查看引脚的当前状态。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-send-tab.png)

*RealTerm 窗口。引脚 13 的状态从 OFF 变为 ON，如黄色文本所示。*

### 示例 9：WiFi Shield 和继电器 Shield

现在您知道如何向 WiFi shield 发送和接收信息，您可以看到通过网络控制任何类型的设备是多么容易。

如果您希望通过网页或手机应用程序控制高功率设备，如台灯、电机或水泵，我们推荐我们的[继电器 Shield V2.0](/cn/Relay_Shield_v3)。

继电器 Shield V2.0 使用引脚 4、5、6 和 7，因此与本页示例中的代码完全兼容。

### 示例 10：Adhoc 模式

要在 Adhoc 模式下使用 shield 作为接入点，只需将 shield 的 IO9 引脚连接到 Arduino 的 3.3V 引脚，如下所示，如果 shield 已开启则重置它。

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-adhoc-mode-hardware-connection.png)

*adhoc 模式所需的 Shield 连接。shield 的 IO9 引脚连接到 3.3V。*

要获取 shield 的 SSID，将示例 1 中的代码上传到您的 Arduino 并打开串口监视器，shield 将响应其 SSID，如下例所示，在这种情况下 **WiFly-EZX-1b** 是 SSID。

    AP mode as WiFly-EZX-1b on chan 1

您现在应该能够连接到您的 WiFi shield 作为接入点，例如，SSID 应该在您 PC 的可用 WiFi 网络列表中可见。

要了解更多关于 adhoc 模式的信息，请查看 [WiFly RN 用户手册](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) 第 16 节"Adhoc 网络模式"

## 常见问题

**Q1: 在 Mega 上使用 WiFi 扩展板时如何设置配置？**

A1: 请按照以下说明操作。有关软件串口的更多信息，请参考 [SoftwareSerial 库](https://arduino.cc/en/Reference/SoftwareSerial)。

- 用跳线将 D2 连接到 D10，然后将 D3 连接到 D11
- 修改程序：Wifly(2,3); → Wifly(10,11);

**Q2: Wifi 扩展板与 Arduino Due 兼容吗？**

A2: Wifi 扩展板可以与 Arduino Due 配合使用。在硬件上，您可以通过 Arduino Due 上的四个串口中的任意一个连接它们（如果您使用串口 1-3，您可能需要用跳线进行连接）。当前的 wifi 扩展板库使用 SoftwareSerial，您应该将其修改为 Arduino Due 的串口。

**Q3: 如何改善 Wifi 扩展板与路由器之间的连接性？**

A3: 不要将塑料或任何其他介电材料放置在与天线接触的位置。天线附近的任何金属物体都会阻止天线自由辐射。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_Shield_v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- [WiFi Shield V2.0 Eagle 文件](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_Shield_v2.0.zip)
- [原理图 PDF](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_shield_v2_schematic.pdf)
- [RN-171 数据手册](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-171.pdf)
- [Wifi Shield 库](https://github.com/Seeed-Studio/WiFi_Shield)
- [WiFi 模块用户手册](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) *-- 这里您可以找到扩展板中 RN-171 模块的所有命令。*
- [什么是 Seeeduino](/cn/Seeeduino_v4.2)
- [w3schools](http://www.w3schools.com/) 学习 HTML、Javascript 和 JQuery 的优秀网站

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Wifi_Shield_V2.0 -->

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