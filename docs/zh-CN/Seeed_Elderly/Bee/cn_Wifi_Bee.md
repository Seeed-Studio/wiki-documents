---
description: Wifi Bee
title: Wifi Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wifi_Bee
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Seeedstudio_Wifibee_MRF24WB0MA.jpg) ![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/SeeedStudio_Wifibee_ATMega328.jpg)

**Wifi Bee** 是一个兼容 xBee Pro 插座的独立 MCU 节点，适用于无线传感器网络。它集成了 Microchip IEEE 802.11 Wi-Fi 收发模块 [MRF24WB0MA](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en548014) 和 8 位 AVR MCU [ATMega328P](http://www.atmel.com/dyn/products/product_card.asp?part_id=4198)。其智能设计和兼容 xBee Pro 插座的外观使其非常容易集成到您的产品中。当您将其插入 [UartSBee](https://seeeddoc.github.io/UartSBee/) 或 [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) 时，**ATMega328P** 可以直接在开源 Arduino IDE 下进行编程。MCU 上的 SPI 引脚连接到 MRF24WB0MA 的对应引脚以进行通信，而其他一些引脚（DIO、AD、PWM 等）则引出到 2.0 mm 的 20 针公头引脚上。请注意，目前 Wifi Bee 尚无专用固件，但您可以使用 AsyncLabs 的 [WiShield](https://github.com/asynclabs/WiShield) 固件。在购买之前，请确保您能够使用该固件。

型号：[WLS48188P](https://www.seeedstudio.com/depot/wifi-bee-p-823.html?cPath=139_141&amp;zenid=15bcf2644eb7ecf4b3722eb98c79b074)

##   特性   ##

- 兼容 xBee 插座

- 可使用 Arduino IDE 编程

- 预装 Arduino Duemilanove 引导程序

- 支持低功耗和低数据速率 Wi-Fi

- 兼容 802.11b

- 支持 WEP、WPA-PSK、WPA2-PSK 安全协议

- 配备用于电源和 Wi-Fi 连接指示的 LED

##   应用场景   ##

- 无线局域网

- 使用 [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) 的无线传感器网络

- 互联网连接

- 使用 [uIP TCP/IP 栈](https://en.wikipedia.org/wiki/UIP_(micro_IP)) 构建无限网络应用

- 非常适合希望学习和实验 TCP/IP 栈的人群

##   原理图   ##

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Wifi_Bee_v0.91b.png)

[点击此处打开 PDF 格式的原理图](https://wiki.seeedstudio.com/cn/images/9/9f/WifiBee_v0.91b.pdf)

##   关键规格   ##

 |项目|最小值|典型值|最大值
 |---|---|---|---|
 |工作电压|3.0V|3.3V|3.6V
 |工作温度|0°C 至 +70°C|||
 |工作频率|16MHz|||
 |MCU|ATmega328P||||

##   机械尺寸   ##

Wifi Bee 的尺寸为 27.2mm x 35.7mm。

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Wifi_Bee_v0.91b_pcb.png)

##   硬件   ##

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Seeedstudio_WifiBee_Parts.png)
**Wifi Bee** - 部件

###   引脚定义与额定值   ###

|引脚|编号|焊盘类型|描述|Arduino 引脚编号|
|---|---|---|---|---|
|3V3|1|电源输入|VCC, +3.3V|-|
|TX|2|输出|Uart Tx 端口|1(DIO)|
|RX|3|输入|Uart Rx 端口|0(DIO)|
|PB0|4|输入/输出|ATmega328P PB0|8(DIO)|
|!RESET|5|输入|ATmega328 重置端口|||
|PD7|6|输入/输出|ATmega328P PD7|7(DIO)|
|PD6|7|输入/输出|ATmega328P PD6|6(DIO)|
|PD5|8|输入/输出|ATmega328P PD5|5(DIO)|
|!DTR|9|输入|用于编程 ATmega328P|-
|GND|10|接地|GND|-|
|PC1|11|输入/输出|ATmega328P PC1|1(模拟输入)/15(DIO)|
|PC0|12|输入/输出|ATmega328P PC0|0(模拟输入)/14(DIO)|
|AD7|13|输入|ATmega328P ADC7|7(模拟输入)|
|VREF|14|输入|ATmega328P AREF 端口|-|
|AD6|15|输入|ATmega328P ADC6|6(模拟输入)|
|INT1|16|输入/输出|ATmega328P PD3|3(DIO)|
|PC3|17|输入/输出|ATmega328P PC3|3(模拟输入)/17(DIO)|
|PC2|18|输入/输出|ATmega328P PC2|2(模拟输入)/16(DIO)|
|SCLSCL|19|输入/输出|ATmega328P PC5|5(模拟输入)/19(DIO)|
|SDA|20|输入/输出|ATmega328P PC4|4(模拟输入)/18(DIO)|

## 使用说明 ##

### 硬件安装 ###

- 使用 Wifi Bee 的最佳方式是将其连接到 [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/)。[Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) 提供 USB-UART 接口用于编程，并通过其内置的 3.3V LDO 稳压器提供电源。

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Twig.jpg)
Grove - XBee Carrier - 连接到 **Wifi Bee** 并通过 USB 供电

### 编程 ###

#### 无线网络设置 ####

本节简要介绍如何使用 WiFi 路由器设置适合 **Wifi Bee** 的家庭网络。

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/WifiBee_Network_Architecture.jpg)
无线传感器网络 - 使用 Wifi Bee 节点的示例架构

1. 使用网络浏览器登录 WiFi 路由器的网页配置界面。通常，路由器制造商会提供默认的 IP 地址（如 192.168.0.1）以及登录 ID（admin）和密码（password）。使用这些信息登录。

2. 在上述情况下，路由器的 IP 地址 192.168.0.1 也是无线网络的网关 IP 地址。该 IP 地址的子网掩码为 255.255.255.0。

3. 为无线网络设置一个名称或 SSID。我们将其设置为 HOMENETWORK。此名称将在整个教程中使用。

4. 任何连接到路由器的节点都会通过 DHCP 获取 IP 地址。但 Wifi Bee 不支持 DHCP，因此我们需要分配一个静态 IP 地址。许多路由器通过 MAC 地址为网络设备提供地址保留。在无线路由器的 LAN 设置部分，为 **Wifi Bee** 保留 IP 地址 192.168.0.4。

   - 1. 输入要保留的 IP 地址为 192.168.0.4。这是 **Wifi Bee** 的 IP 地址。
   - 2. 您需要输入 Wifi Bee 上显示的 MAC 地址，格式为 AB:CD:EF:GH:IJ:KL。
   - 3. 将设备名称设置为 WIFIBEE。此名称可以是任何单词，重要性不高。

5. 配置网络的安全选项。Wifi Bee 支持 **开放（无安全）、WEP（有线等效加密）、WPA-PSK（Wi-Fi 保护访问预共享密钥）和 WPA2-PSK（Wi-Fi 保护访问 2 预共享密钥）**。设置一个合适的安全选项。此设置将用于 **Wifi Bee** 建立连接。

   - 1. 我们将安全选项设置为 WPA-PSK。
   - 2. WPA-PSK 模式需要 WPA-PSK 安全加密网络密钥。将此密钥设置为 12345678。

6. 请参考路由器用户指南以配置其他设置，例如连接到互联网等。

#### 下载并配置库以运行应用示例 ####

应用示例使用 Asynclabs 的 WiShield 库。**Wifi Bee** 没有其他专用固件。此库使用 Adam Dunkels 的 **uip TCP/IP 栈**。
此库由原作者根据 GPL v2 提供。因此，任何使用 WiShield 构建的应用程序也必须兼容 GPLv2。

1. 从 [WiShield](https://github.com/asynclabs/WiShield) 下载库。

2. 将内容解压到 Arduino **/libraries/WiShield 目录**。

3. 该库附带许多应用示例。它以可配置的方式编写，仅构建所需功能，从而节省 FLASH。

   - 此配置在 **/libraries/WiShield/apps-conf.h** 中处理。
   - 在 **/libraries/WiShield/apps-conf.h 文件**中取消注释您正在构建的应用程序模式，例如 WEB-SERVER 或 WEB-CLIENT 或 SOCKET 应用程序等。
   - 例如，如果您想构建一个 Web 服务器应用程序，则需要取消注释 **#define APP_WEBSERVER**，并注释掉所有其他模式。这些更改需要重新构建库，因此关闭并重新打开 Arduino IDE。

4. 我们来构建 WebServer 示例。

   - 在 **/libraries/WiShield/apps-conf.h** 中将模式配置设置为 APP_WEBSERVER。
   - 在 Arduino IDE 中打开 /libraries/WiShield/examples/WebServer/**WebServer.pde** 草图。
   - 将 **local_ip[]** 数组设置为 **{192,168,0,4}**。这是之前配置的 **Wifi Bee** 的 IP 地址。
   - 将 **gateway_ip[]** 数组设置为 **{192,168,0,1}**。这是网络设置中配置的路由器的 IP 地址。
   - 将 **subnet_mask[]** 数组设置为 **{255,255,255,0}**。这是本地无线网络的子网掩码。
   - 将 **prog_char ssid[]** 设置为 **{"HOMENETWORK"}**。此名称也是在网络设置期间分配的。
   - 下一步是将 **security_type** 设置为网络设置期间配置的安全选项。设置为 2（即 WPA），如 Wifi 路由器中配置的。

   - `//unsigned char security_type = 2;	// 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2 `

   - 同时设置 ` const prog_char security_passphrase[] PROGMEM = {"12345678"} `

5. 修改后的 WebServer.pde 草图如下所示。

6. 将板类型设置为 **Arduino Duemilanove** 并编译草图。

7. 上传到 **Wifi Bee** 并按下复位按钮。

8. 如果一切正常，Wifi Bee 将连接到 HOMENETWORK，并且蓝色 LED（WIFI LED）会亮起。

9. 从连接到 HOMENETWORK 的 PC 打开网络浏览器并输入 URL `[http://192.168.0.4]`。

10. 您将看到消息 `Hello World!! I am WifiBee.`

```
/*
 * Web Server: Modified WebServer.pde example.
 * A simple web server example using the WiShield library and WiBee.
 */

#include <WiShield.h>

#define WIRELESS_MODE_INFRA	1
#define WIRELESS_MODE_ADHOC	2

// Wireless configuration parameters ----------------------------------------
unsigned char local_ip[] = {192,168,0,4};	// IP address of Wifi Bee
unsigned char gateway_ip[] = {192,168,0,1};	// router or gateway IP address
unsigned char subnet_mask[] = {255,255,255,0};	// subnet mask for the local Wireless network
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};	// max 32 bytes

unsigned char security_type = 2;	// 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2 passphrase
const prog_char security_passphrase[] PROGMEM = {"12345678"};	// max 64 characters. The network name.

// WEP 128-bit keys
// sample HEX keys
prog_uchar wep_keys[] PROGMEM = {	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,	// Key 0
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	0x00,	// Key 1
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	0x00,	// Key 2
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	0x00	// Key 3
				};

// setup the wireless mode
// infrastructure - connect to AP
// adhoc - connect to another WiFi device
unsigned char wireless_mode = WIRELESS_MODE_INFRA;

unsigned char ssid_len;
unsigned char security_passphrase_len;
//---------------------------------------------------------------------------

void setup()
{
	WiFi.init();
}

// This is the webpage that is served up by the webserver
const prog_char webpage[] PROGMEM = {"HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<center><h1>Hello World!! I am WifiBee.</h1></center>"};

void loop()
{
	WiFi.run();
}
```

### 示例 ###

#### 简单的 Web 服务器，将传感器值发送到 Web 浏览器 ####

- 按上述网络设置进行配置。

- 使用 [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) 进行编程和供电。

- 配置 `apps-conf.h` 文件，仅启用 `APP_WISERVER` 模式。

- 使用 Arduino IDE 编译并上传以下代码到 **Wifi Bee**，具体步骤参考上述示例。

- 按下复位按钮，等待 Wifi Bee 连接到 WiFi 网络（蓝色 LED 亮起）。

- 如果在 Arduino IDE 中打开串口终端（波特率为 57600），可以查看网络通信的详细信息。

- 从连接到 HOMENETWORK 的 PC 上打开 Web 浏览器，并输入 URL `[http://192.168.0.4]`。

- WifiBee 将传感器值提供给浏览器。HTML 代码设计为每 10 秒自动刷新一次。

```
/*
 * 一个简单的示例，使用 WiServer 和 Seeedstudio 的 Wifi Bee 提供网页服务。
 * 一个模拟传感器连接到 Wifi Bee 的 A2（使用 Grove - XBee Carrier）。该值将发送到客户端（Web 浏览器）。
 * HTML 页面根据传感器值生成，并设置为自动刷新。
 */

/* 此示例基于 SimpleServer.pde，版权归原作者所有 */

/* 为使此示例正常工作，请修改 apps-conf.h 文件如下；仅启用 APP_WISERVER 模式：
--------------------------------------------------------------------

//在此处包含我们项目中使用的应用程序的头文件。
//#define APP_WEBSERVER
//#define APP_WEBCLIENT
//#define APP_SOCKAPP
//#define APP_UDPAPP
#define APP_WISERVER
----------------------------------------------------------------------
*/

#include <WiServer.h>

#define WIRELESS_MODE_INFRA	1
#define WIRELESS_MODE_ADHOC	2

// 无线配置参数 ----------------------------------------
unsigned char local_ip[] = {192,168,0,4};	// WifiBee 的 IP 地址
unsigned char gateway_ip[] = {192,168,0,1};	// 路由器或网关的 IP 地址
unsigned char subnet_mask[] = {255,255,255,0};	// 本地网络的子网掩码
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};	// 最大 32 字节

unsigned char security_type = 2;	// 0 - 开放；1 - WEP；2 - WPA；3 - WPA2

// WPA/WPA2 密码
const prog_char security_passphrase[] PROGMEM = {"12345678"};	// 最大 64 字符

// WEP 128 位密钥
// 示例 HEX 密钥
prog_uchar wep_keys[] PROGMEM = { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,	// 密钥 0
				  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// 密钥 1
				  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// 密钥 2
				  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00	// 密钥 3
				};

// 设置无线模式
// 基础设施模式 - 连接到 AP
// Adhoc 模式 - 连接到另一个 WiFi 设备
unsigned char wireless_mode = WIRELESS_MODE_INFRA;
unsigned int  sensorValue;
unsigned char ssid_len;
unsigned char security_passphrase_len;
// 无线配置参数结束 ----------------------------------------

int counter;
// 这是我们的页面服务函数，用于生成网页
boolean sendMyPage(char* URL) {

    // 检查请求的 URL 是否匹配 "/"
    if (strcmp(URL, "/") == 0) {
        // 使用 WiServer 的 print 和 println 函数输出页面内容
        WiServer.print("<html>");

        // 指示 Web 浏览器每 10 秒刷新一次
        WiServer.print("<head><meta http-equiv=\"refresh\" content=\"10\"> </head>");
        WiServer.println("<H1>WifiBee 已连接...<H1>");
        WiServer.print("<H2>传感器值 = ");
        WiServer.print(sensorValue);  // A2 连接到外部传感器。原始值发送到客户端。
        WiServer.print("</H2></html>");
        return true;
    }
    // URL 未找到
    return false;
}

void setup() {

  // 初始化 WiServer 并让它使用 sendMyPage 函数提供页面服务
  WiServer.init(sendMyPage);

  // 启用串口输出，并让 WiServer 生成日志消息（可选）
  Serial.begin(57600);
  WiServer.enableVerboseMode(true);
}

void loop(){
  sensorValue = analogRead(A2);  // A2 通过 Grove 接口连接到 Grove - XBee Carrier 的外部传感器。
  // 运行 WiServer
  WiServer.server_task();
  delay(10);
}
```

#### 简单的 Web 客户端，将传感器数据发送到 Pachube.com ####

` 此部分稍后将进行修订 `

- 按上述网络设置进行配置。

- 使用 [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) 进行编程和供电。

- 配置 `apps-conf.h` 文件，仅启用 `APP_WISERVER` 模式。

- 使用 Arduino IDE 编译并上传以下代码到 **Wifi Bee**，具体步骤参考上述示例。

- 按下复位按钮，等待 Wifi Bee 连接到 WiFi 网络（蓝色 LED 亮起）。

- 如果在 Arduino IDE 中打开串口终端（波特率为 57600），可以查看网络通信的详细信息。

- Wifi Bee 定期将数据发送到 Pachube.com。

```
/*
 * 一个简单的示例，使用 WiServer 库和 Seeedstudio 的 WifiBee 将传感器数据发送到 pachube.com；
 * 此代码是 SimpleClient.pde 的修改版本，版权归原作者所有。
 */

/* 为使此示例正常工作，请修改 apps-conf.h 文件如下；仅启用 APP_WISERVER 模式：
--------------------------------------------------------------------
//在此处包含我们项目中使用的应用程序的头文件。
//#define APP_WEBSERVER
//#define APP_WEBCLIENT
//#define APP_SOCKAPP
//#define APP_UDPAPP
#define APP_WISERVER
----------------------------------------------------------------------
*/


#include <WiServer.h>

#define WIRELESS_MODE_INFRA	1
#define WIRELESS_MODE_ADHOC	2

// 无线配置参数 ----------------------------------------
unsigned char local_ip[] = {192,168,0,4};	// WifiBee 的 IP 地址
unsigned char gateway_ip[] = {192,168,0,1};	// 路由器或网关的 IP 地址
unsigned char subnet_mask[] = {255,255,255,0};	// 本地网络的子网掩码
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};// 最大 32 字节

unsigned char security_type = 2;	// 0 - 开放；1 - WEP；2 - WPA；3 - WPA2

// WPA/WPA2 密码
const prog_char security_passphrase[] PROGMEM = {"12345678"};	// 最大 64 字符

// WEP 128 位密钥
// 示例 HEX 密钥
prog_uchar wep_keys[] PROGMEM =
{ 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,	// 密钥 0
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// 密钥 1
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// 密钥 2
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00	// 密钥 3
};

// 设置无线模式
// 基础设施模式 - 连接到 AP
// Adhoc 模式 - 连接到另一个 WiFi 设备
unsigned char wireless_mode = WIRELESS_MODE_INFRA;

unsigned char ssid_len;
unsigned char security_passphrase_len;
// 无线配置参数结束 ----------------------------------------


// 打印服务器返回的数据的函数
void printData(char* data, int len) {

  // 打印服务器返回的数据
  // 注意：数据不是以 null 结尾的，可能会分成较小的包，并包含 HTTP 头。
  while (len-- > 0) {
    Serial.print(*(data++));
  }
}

int sensorValue=0;
// 准备发送到 feed 的数据
void pachubefeedData()
{
   sensorValue=analogRead(A2);   // 读取连接到 A2 的模拟传感器（使用 Grove - XBee Carrier 接口）
   WiServer.print(sensorValue);
}



// Pachube.com 的 IP 地址
uint8 ip[] = {173,203,98,29};

char hostName[] = "www.pachube.com\nX-PachubeApiKey: YOUR_API_KEY_HERE\nConnection: close"; // 将 YOUR_API_KEY_HERE 替换为您的 API 密钥
char url[] = "/api/12345.csv?_method=put"; // 将 12345 替换为您的 feed 编号

// 一个向 Pachube 发送数据的 POST 请求
POSTrequest postPachubeFeed(ip, 80, hostName, url, pachubefeedData);


void setup() {
    // 初始化 WiServer（我们将传递 NULL，因为我们不需要提供网页服务）
  WiServer.init(NULL);

  // 启用串口输出，并让 WiServer 生成日志消息（可选）
  Serial.begin(57600);
  WiServer.enableVerboseMode(true);

  // 设置当服务器返回数据时调用 processData 函数
  postPachubeFeed.setReturnFunc(printData);
}


// 数据检索的时间（以毫秒为单位）
long updateTime = 0;

void loop(){

  // 检查是否到了发送更新的时间
  if (millis() >= updateTime) {
    postPachubeFeed.submit();    
    // 一分钟后发送另一次更新
    updateTime += 60;
  }

  // 运行 WiServer
  WiServer.server_task();

  delay(10);
}
```

## 物料清单 (BOM) / 部件列表 ##

|部件|数量|值|封装|
|---|---|---|---|
|C1|1|10u|C_TAN_3X3.5|
|C2,C3|2|1u|0603|
|C4|1|100n|0603|
|J1|1|CK_2X3_2.0|CK_2X3_2.0|
|PWR|1|红色|LED0603|
|R1|1|10k|0603|
|R2,R3,R4,R5,R7|5|4.7k|0603|
|R6|1|1k|0603|
|U1|1|OPEN_BEE|XBEE_EXT_SMD|
|U3|1|MRF24WB0MA|MRF24WB0MA|
|U4|1|ATmega328P_MU1040|MLF32X|
|WIFI|1|蓝色|LED0603|
|X1|1|16MHz|XTAL_3X2|

## 支持 ##

如果您有任何问题或更好的设计建议，可以访问我们的 [论坛](https://www.seeedstudio.com/forum) 或 **愿望** 页面进行讨论。

## 版本追踪 ##

|版本|描述|发布日期|
|----|----|----|
|v0.91b|首次公开发布|2011年4月6日|
|v1.0|将信号线宽度从6 mil改为8 mil|2011年12月13日|

## WifiBee v1.0 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee_v1.0_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## WifiBee v0.91b 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/cn/images/f/ff/Wifi_Bee_v0.91b_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[Eagle]**[WifiBee v1.0 Eagle 文件.zip](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee_v1.0_Eagle_Files.zip)
- **[PDF]**[WifiBee v1.0 PCB](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee%20v1.0%20PCB.pdf)
- **[PDF]**[WifiBee v1.0 原理图](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee%20v1.0%20Sch.pdf)
- **[PDF]**[WifiBee v0.91b 原理图 PDF 格式](https://wiki.seeedstudio.com/cn/images/9/9f/WifiBee_v0.91b.pdf)
- **[EAGLE]**[Wifi Bee v0.91b 设计文件 Eagle 格式](https://wiki.seeedstudio.com/cn/images/f/ff/Wifi_Bee_v0.91b_eagle.zip)
- **[Library]**[WiShield 库](https://github.com/asynclabs/WiShield)
- **[Library]**[更新版 WiShield 库，兼容 Arduino 1.0](https://github.com/CapnBry/WiShield_user_contrib)

## 技术支持与产品讨论 ##

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>