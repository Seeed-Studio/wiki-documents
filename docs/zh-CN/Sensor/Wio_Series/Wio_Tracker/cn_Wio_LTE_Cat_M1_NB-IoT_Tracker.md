---
title: Wio LTE Cat M1/NB-IoT 追踪器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio_LTE_Cat_M1_NB-IoT_Tracker/
slug: /cn/Wio_LTE_Cat_M1_NB-IoT_Tracker
last_update:
  date: 01/11/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/NBIOT1.JPG)

Seeed 的 Wio LTE CAT M1/NB-IoT 专为低功耗广域网络 (LPWAN) 设计，配备 CAT M1(eMTC) 和 NB-IoT 组合模块。此外，它还具有 ARM Cortex-M4 MCU 和 GNSS 模块。

这是一个 Arduino 兼容的开发板，有助于追踪地球上几乎任何移动的物体，然后无线上传数据。通过集成 Grove 连接器，Wio LTE CAT M1/NB-IoT 允许与 Grove 系统进行灵活的通信解决方案。

Wio LTE CAT M1/NB-IoT 非常适合户外项目，设备可以连接到卫星导航系统并提供所附物品的实时位置。


<p style={{}}><a href="https://www.seeedstudio.com/Wio-LTE-Cat-M1-NB1-p-3055.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


**您是否在寻找 T-Mobile 窄带的 Twilio 开发者套件？请在[这里](https://www.twilio.com/docs/wireless/nb)查找文档**


## 版本
| 产品版本                      | 变更                                     | 发布日期      |
|-------------------------------|------------------------------------------|---------------|
| Wio LTE Cat M1/NB-IoT v1.0    | 初始版本                                 | 2018年5月26日 |


## 规格参数

- ARM Cortex-M4 微控制器 LTE CAT M1 和 NB-IoT 组合，支持全球使用
- 支持 GPS/GLONASS GNSS
- Arduino IDE 兼容
- 板载 6 个 Grove 端口，最多支持 180 个 Grove 模块
- 易于从 Wio LTE CAT.1 迁移
    

## 硬件特性

- STM32F405RG，ARM Cortex-M4，CPU 运行频率高达 168MHz
- 1MB Flash
- 192+4KB RAM
- 系统
    - 工作电压：3.3V
    - 低功耗：睡眠/待机模式/停止模式
    - CRC-32 生成器
- LTE 连接
    - LTE CAT M1 和 NB-IoT，Cat M1 半双工（375 kb/s 下行和上行）Cat NB1 半双工（27.2 kb/s 下行，62.5 上行）
    - 嵌入协议：TCP/UDP/FTP/HTTP/HTTPS/FTPS/TLS/MQTT/CoAP
- GNSS
    - GPS/GLONASS
    - 2.5m CEP(GPS)，4.0m CEP(GLONASS)
- 外设
    - 1 个 USB 用于供电和 DFU
    - JST 1.0 连接器用于电池
    - 3 个按钮：MCU 复位按钮、MCU 启动 (DFU) 按钮、EC21 电源按钮
    - Nano SIM 和 TF 卡二合一插槽
- Grove
    - 2 个数字端口
    - 2 个模拟端口
    - 1 个 UART
    - 1 个 I2C

:::tip
    使用 Grove 模块来扩展您的应用。板上有 6 个 Grove 连接器。如果这是您第一次听说 Grove，请查看 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/) 了解更多详情。简而言之，Grove 是数百种标准化传感器，包括传感器、执行器、显示器以及通信模块。
:::

## 应用
- 智慧城市
- 智能电表
- 智慧能源
- 智慧农业
- 智慧零售
- 智慧供应链
- 智慧交通
- 联网汽车
- 联网建筑
- 联网健康
- 运动设备
- 宠物追踪
- 财产安全
- 共享单车
- 物流运输定位系统
- 其他

## 硬件概述


![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/front.png)

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/back.png)

:::tip
    如果您想使用板载的 Grove 连接器，请使用 digitalWrite(B10, HIGH) 来打开 3V3_B。除了 D38 默认上电外。否则您无法为 Grove 模块提供电源。
:::

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/h3.png)


## 入门指南

### 安装 USB 驱动程序

- **Windows 用户**：大多数版本的 Windows 不会自动加载 USB 串口的内置驱动程序。您需要下载 ST 的 USB 驱动程序 [STM32 Virtual COM Port Driver](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software)。

- **Mac OS X 和 Chromebook 用户**：开发板可以直接插入使用，无需驱动程序！

### 更改 DFU 驱动程序

**对于 Windows 用户**：

- 步骤 1. 按住 BOOT 按钮并连接到计算机，您将在设备管理器中看到 **STM32 Device in DFU Mode**，如下所示。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- 步骤 2. 这表示您需要使用 [zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe) 将 DFU 驱动程序从 **STTub30** 更改为 **WinUSB**，如下所示。如果我们在 Zadig 中看不到任何信息，请点击 Options--> List All Devices，然后选择 STM32 Virtual COM Ports。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- 步骤 3. 您将在设备管理器中看到 "STMicroelectronics Virtual COM Port"，如下所示。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)


### 使用 Arduino

**1. 软件配置**

- 步骤 1. 安装 Arduino IDE，推荐 IDE 版本 1.8.0 以上。
- 步骤 2. 按照 [如何将 Seeed 开发板添加到 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/) 将 Seeed STM32F4 开发板添加到 arduino 开发板管理器中。
- 步骤 3. 从 Github 下载 [WioLTE_Cat_NB1_Arduino_Library](https://github.com/lanselambor/WioLTE_Cat_NB1_Arduino_Library)。
- 步骤 4. 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- 步骤 5. 在上传代码之前，按住 BOOT0 和 RST 按钮，先释放 RST 按钮再释放 BOOT0 按钮，这样开发板将进入 STM BOOLARDER 模式。
- 步骤 6. 在工具标签中不要选择任何串口来上传代码，直接点击上传图标。

**2. 使用板载 RGB LED**

- 步骤 1. 选择 File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Seeed_WS2812b 示例。
- 步骤 2. 按住 Wio LTE Cat NB1 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 3. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 4. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 5. 保持 COM 端口为空。
- 步骤 6. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。

```cpp

#include <Seeed_ws2812.h>
#include <ublox_sara_r4.h>

#define LEN_NUM 1

Ublox_sara_r4 ublox = Ublox_sara_r4();
WS2812 strip = WS2812(LEN_NUM, ublox.RGB_LED_PIN);

void setup() {
  // Set RGB LED power pin high
  ublox.turnOnRGBPower();
  strip.begin();
  strip.brightness = 20;
}

void loop() {  
  strip.RGBCycle(1000);   
  strip.rainbowCycle(20);
}

```

- 步骤 7. 按下 **RST**，然后您可以看到板载 RGB LED 工作。


**3. 使用 GNSS**

- 步骤 1. 将 Nano SIM 卡插入 Nano SIM 卡槽，靠近 PCB 板侧。
- 步骤 2. 选择 File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->GNNS-->GNSS sketch。
- 步骤 3. 按住 Wio LTE Cat NB1 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 4. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 5. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 6. 保持 COM Port 为空。
- 步骤 7. 选择 Sketch-->Upload 将代码上传到 Wio LTE Cat NB1。
- 步骤 8. 按下 **RST** 按钮以启用 COM 端口。

```cpp

#include <ublox_sara_r4_gnss.h>

UBLOX_SARA_R4_GNSS gnss = UBLOX_SARA_R4_GNSS();

void setup()  
{
  // Open GNSS module
  gnss.open_GNSS();
  delay(3000);
  SerialDebug.println("_Start");
}

void loop() {
  gnss.dataFlowMode();
}

```

- 步骤 9. 使用 COM 监视器工具打印串口消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。
- 步骤 10. 我们将看到屏幕上打印的纬度、经度信息。

```cpp
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,1,1,01,30,,,44*7B
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,1,1,04,07,,,43,17,,,38,18,,,39,30,,,44*70
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,2,1,06,07,,,44,09,,,41,17,,,40,18,,,41*79
$GPGSV,2,2,06,28,,,40,30,,,45*73
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
```

**4. 使用 SD 卡**

- 步骤 1. 将 micro SD 卡插入 SD 卡插槽。
- 步骤 2. 选择 File--> Examples-->SD-->CardInfo 示例。
- 步骤 3. 按住 Wio LTE Cat NB1 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 4. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 5. 选择 Tools-->Boards-->Wio Tracker LTE。
- 步骤 6. 保持 COM Port 为空。
- 步骤 7. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。

```cpp
// 包含SD库：
#include <SD.h>

// 使用SD实用库函数设置变量：
Sd2Card card;
SdVolume volume;
SdFile root;

// 更改此项以匹配您的SD扩展板或模块；
// Arduino以太网扩展板：引脚4
// Adafruit SD扩展板和模块：引脚10
// Sparkfun SD扩展板：引脚8
const int chipSelect = 43;

void setup()
{
 // 打开串行通信并等待端口打开：
  // SerialUSB.begin(115200);
  //  while (!Serial) {
  //   ; // 等待串行端口连接。仅Leonardo需要
  // }


  SerialUSB.print("\n正在初始化SD卡...");
  // 在以太网扩展板上，CS是引脚4。默认设置为输出。
  // 请注意，即使它不用作CS引脚，硬件SS引脚
  // （大多数Arduino板上为10，Mega上为53）也必须保持为输出
  // 否则SD库函数将无法工作。
  pinMode(SS, OUTPUT);


  // 我们将使用实用库中的初始化代码
  // 因为我们只是测试卡是否工作！
  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("初始化失败。需要检查的事项：");
    SerialUSB.println("* 是否插入了卡？");
    SerialUSB.println("* 您的接线是否正确？");
    SerialUSB.println("* 您是否更改了chipSelect引脚以匹配您的扩展板或模块？");
  } 
  
  // 打印卡的类型
  SerialUSB.print("\n卡类型：");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("未知");
  }

  // 现在我们将尝试打开'卷'/'分区' - 它应该是FAT16或FAT32
  if (!volume.init(card)) {
    SerialUSB.println("找不到FAT16/FAT32分区。\n请确保您已格式化卡");
    return;
  }


  // 打印第一个FAT类型卷的类型和大小
  uint32_t volumesize;
  SerialUSB.print("\n卷类型是FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();
  
  volumesize = volume.blocksPerCluster();    // 簇是块的集合
  volumesize *= volume.clusterCount();       // 我们将有很多簇
  volumesize *= 512;                            // SD卡块始终为512字节
  SerialUSB.print("卷大小（字节）：");
  SerialUSB.println(volumesize);
  SerialUSB.print("卷大小（千字节）：");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("卷大小（兆字节）：");
  volumesize /= 1024;
  SerialUSB.println(volumesize);

  
  SerialUSB.println("\n在卡上找到的文件（名称、日期和大小，以字节为单位）：");
  root.openRoot(volume);
  
  // 列出卡中所有文件及其日期和大小
  root.ls(LS_R | LS_DATE | LS_SIZE);
}


void loop(void) {
  
}

```

- 步骤 8. 按下 **RST** 按钮以启用 COM 端口。
- 步骤 9. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。
- 步骤 10. 打开串行监视器，我们将在屏幕上看到以下信息。

```cpp
Initializing SD card...
Card type: SDHC

Volume type is FAT32

Volume size (bytes): 2689048576
Volume size (Kbytes): 2626024
Volume size (Mbytes): 2564

Files found on the card (name, date and size in bytes):
```

**5. 使用网络 RSSI**

- 步骤 1. 选择 File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->RSSI sketch。
- 步骤 2. 按住 Wio LTE Cat NB1 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 3. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 4. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 5. 保持 COM Port 为空。
- 步骤 6. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。

```cpp
#include <ublox_sara_r4.h>
#include <UART_Interface.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

void setup() {
  
  SerialDebug.println("Begin...");
  ublox.powerOn();
  while(false == ublox.Check_If_Power_On()){
    SerialDebug.println("Waitting for module to alvie...");
    delay(1000);
  }  
  SerialDebug.println("Power On O.K!");

  delay(100);
  check_with_cmd("AT+UGPIOC=23,10\r\n", "OK", CMD);
  check_with_cmd("AT+UGPIOC=16,2\r\n", "OK", CMD);
}

void loop() {
	int signal;
	if(ublox.getSignalStrength(&signal)) {
		SerialDebug.print("RSSI: ");
		SerialDebug.println(signal, DEC);
	} else {
		SerialDebug.print("Error");
	}

	delay(1000);
 
}

```

- 步骤 7. 按下 **RST**，然后您可以在屏幕上看到以下信息。

```cpp
AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99
```

**6. 使用 Arduino 示例 TCP**

- 步骤 1. 选择 File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Network-->tcp_directLink 示例。
- 步骤 2. 按住 Wio LTE Cat NB1 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 3. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 4. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 5. 保持 COM Port 为空。
- 步骤 6. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。

```cpp
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "www.arduino.cc";
uint16_t port = 80;
int sockId = -1;

void setup() {
	bool network_attached = false;

	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alvie...");
	while(false == ublox.isAlive()){
		Log(".");
		delay(100);
	} 
	Logln(); 

	Log_info("Initializing network..");
	if(!ublox.network_Init(120)) { 
		Log_error("Network initialize timeout.");
		while(1);
	}
	Log_info("APN: " + String(ublox._apn));
	Log_info("Local IP: " + String(ublox._str_ip));
	Log_info("Operator: " + String(ublox._operator));
	Log_info("Network attached.");
	
	// This method is import for setting transparent session
	// use disableDirectLinkMode() to use nontransparent session  
	ublox.enableDirectLinkMode();

	if(-1 == (sockId = ublox.createSocket(TCP))) {
		Log_error("Create socket error!");
		return;
	}
	if(!ublox.sockConnect(sockId, server, port)) {
		Log_error("connect to server failed.");
	}			
	Log_info("Sent TCP message in direct link mode.");
		
}	

void loop() {
	static uint8_t tries = 0;
	String str_msg = "ublox random number " + String(random(0,100));
	// String str_msg = "/txt HTTP"; 

	ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
	Log_info("Send msg: " + str_msg);

	tries++;
	if(tries > 5) {
		if(ublox.sockClose(sockId)) {
			Log_info("Close socket.");
		}
		Log_info("Enter AT command mode.");
		while(true) AT_bypass();
	}

	delay(2000);
}


```

- 步骤 7. 按下 **RST**，然后您可以在屏幕上看到以下信息。

```cpp
[INFO] Begin...
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
.............................[INFO] APN: ctnb
[INFO] Local IP: 10.14.8.161
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Sent TCP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
```

**7. 使用 Arduino 示例 UDP**

- 步骤 1. 选择 File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Network-->udp_directLink 示例。
- 步骤 2. 按住 Wio LTE Cat NB1 背面的 BOOT 按钮，并将 USB 连接到 PC。
- 步骤 3. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 4. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 5. 保持 COM Port 为空。
- 步骤 6. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。

```cpp
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "time.nist.gov";
uint16_t port = 8888;
int sockId = -1;

void setup() {
	bool network_attached = false;

	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alvie...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln("");

	Log_info("Initializing network..");
	if(!ublox.network_Init(120)) { 
		Log_error("Network initialize timeout.");
		while(1);
	}
	Log_info("APN: " + String(ublox._apn));
	Log_info("Local IP: " + String(ublox._str_ip));
	Log_info("Operator: " + String(ublox._operator));
	Log_info("Network attached.");
	
	if(-1 == (sockId = ublox.createSocket(UDP))) {
		Log_error("Create socket error!");
	}
	Log("[INFO] Create socket id: ");
	Logln(sockId);

	ublox.enableDirectLinkMode();
	if(!ublox.sockConnect(sockId, server, port)) {
		Log_error("connect to server failed.");
	}
	Log_info("Sent UDP message in direct link mode.");


		
}	

void loop() {
	static uint8_t tries = 0;

	String str_msg = "ublox random number " + String(random(0,100));

	ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
	Log_info("Send msg: " + str_msg);

	tries++;
	if(tries > 5) {
		if(ublox.sockClose(sockId)) {
			Log_info("Close socket.");
		}
		while(true) AT_bypass();
	}

	delay(2000);
}

```

- 步骤 7. 按下 **RST**，然后您可以在屏幕上看到以下信息。

```
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
....................[INFO] APN: ctnb
[INFO] Local IP: 10.178.48.90
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Create socket id: 0
[INFO] Sent UDP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
[INFO] Close socket.
```

**8. 使用 Arduino 示例 MQTT 订阅**

- 步骤 1. 选择 File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->MQTTClient-->mqtt_sub 示例。
- 步骤 2. 按住 Wio LTE Cat NB1 背面的 BOOT 按钮，并将 USB 连接到 PC。
- 步骤 3. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 4. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 5. 保持 COM Port 为空。
- 步骤 6. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。

```cpp
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "test.mosquitto.org";
uint16_t port = 1883;

void setup() {
	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alive...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln();

	Log_info("Initializing network...");	
	if(!ublox.network_Init()) { 
		Log_error("Network initialize timeout.");
		return;
	}

	// Set MQTT server 
	if(!mqtt.setServer(server, port)) {
		Log_error("Set MQTT server failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT server success.");
	}

	// Set will
	if(!mqtt.setWill("Heat", "ublox n/r410")) {
		Log_error("Set MQTT will failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT will success.");
	}

	// Connect to server
	Logln(PRE_FIX"Connecting to server: " + String(server));
	while(!mqtt.connect()) {}
	Logln(CRLF PRE_FIX"Connected\n\r");
}	

void loop() 
{				
	static uint8_t tries = 0;	
	const char *topic = "Heat";
	String msg = String(random(2000, 3000)*1.0/100.0) + " degree";
	
		
	if(mqtt.publish(topic, msg.c_str())) {
		Logln(PRE_FIX" published Topic " + String(topic) + " Messagea " + msg);	
	} else {
		Log_error("MQTT publish failed");
		// while(true);
	}

	tries++;
	if(tries > 5)
	{
		if(mqtt.disconnect()) {
			Logln(PRE_FIX"Disconnect.");
		}
		Log_info("Enter AT command loop");
		while(true) AT_bypass();
	}
	
	delay(2000);
}

```

- 步骤 7. 按下 **RST**，然后您可以在屏幕上看到以下信息。

**9. 使用 Arduino 示例 MQTT 发布**

- 步骤 1. 选择 File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->MQTTClient-->mqtt_pub 示例。
- 步骤 2. 按住 Wio LTE Cat NB1 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 3. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 4. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 5. 保持 COM 端口为空。
- 步骤 6. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。

```cpp
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "server name or IP";
uint16_t port = 1883;

void setup() {
	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alive...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln();

	Log_info("Initializing network...");	
	if(!ublox.network_Init()) { 
		Log_error("Network initialize timeout.");
		return;
	}

	// Set MQTT server 
	if(!mqtt.setServer(server, port)) {
		Log_error("Set MQTT server failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT server success.");
	}

	// Set will
	if(!mqtt.setWill("Heat", "ublox n/r410")) {
		Log_error("Set MQTT will failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT will success.");
	}

	// Connect to server
	Logln(PRE_FIX"Connecting to server: " + String(server));
	while(!mqtt.connect()) {}
	Logln(CRLF PRE_FIX"Connected\n\r");
}	

void loop() 
{				
	static uint8_t tries = 0;	
	const char *topic = "Heat";
	String msg = String(random(2000, 3000)*1.0/100.0) + " degree";
	
		
	if(mqtt.publish(topic, msg.c_str())) {
		Logln(PRE_FIX" published Topic " + String(topic) + " Messagea " + msg);	
	} else {
		Log_error("MQTT publish failed");
		// while(true);
	}

	tries++;
	if(tries > 5)
	{
		if(mqtt.disconnect()) {
			Logln(PRE_FIX"Disconnect.");
		}
		Log_info("Enter AT command loop");
		while(true) AT_bypass();
	}
	
	delay(2000);
}

```

- 步骤 7. 按下 **RST**，然后您可以在屏幕上看到以下信息。


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

- **[Eagle&PDF]** [WioLTE_Cat_NB1](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip)

- **[库文件]** [WioLTE_Cat_NB1_Arduino_Library](https://github.com/Seeed-Studio/WioLTE_Cat_NB1_Arduino_Library)

- **[数据手册]** [AT Command](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/SARA-R4-SARA-N4_ATCommands_(UBX-17003787).pdf)


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