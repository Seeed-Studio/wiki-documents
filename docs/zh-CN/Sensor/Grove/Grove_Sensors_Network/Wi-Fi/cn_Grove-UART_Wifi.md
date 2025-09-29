---
title: Grove - UART Wi-Fi
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-UART_Wifi/
slug: /cn/Grove-UART_Wifi
last_update:
  date: 01/06/2022
  author: gunengyu
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/main.jpg)

Grove - UART WiFi 是一个串行收发器模块，采用了无处不在的 ESP8266 物联网 SoC。通过集成的 TCP/IP 协议栈，该模块让您的微控制器只需几行代码就能与 WiFi 网络交互。每个 ESP8266 模块都预装了 AT 命令集固件，这意味着您可以发送简单的文本命令来控制设备。该 SoC 集成了 WEP、WPA/WPA2、TKIP、AES 和 WAPI 引擎，可以作为带有 DHCP 的接入点，可以加入现有的 WiFi 网络，并具有可配置的 MAC 和 IP 地址。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Uart-Wifi-p-2495.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<!-- ## Version

<div>
  | Parameter     | V1.0     |V2.0     |
  | :------------- | :------------- |:------------- |
  | Product Release Date       | 24th Jue 2016       |26th Mach 2018|
  |WiFi Chip|ESP8266| ESP8285|
  |Antenna Type| External |On-board|
  |LEDs| 3 LEDs-Power/WiFi/AT Command|2 LEDs- Power/WiFi|
  |Button|1 Button: <br />Short press to **Reset** <br />Long press to enter **UART boot mode**<br />|2 Buttons for those two functions|
</div> -->

## 版本

| 参数     | V1.0     |V2.0     |
| :------------- | :------------- |:------------- |
| 产品发布日期       | 2016年6月24日       |2018年3月26日|
|WiFi 芯片|ESP8266| ESP8285|
|天线类型| 外置 |板载|
|LED| 3个LED-电源/WiFi/AT命令|2个LED-电源/WiFi|
|按钮|1个按钮：短按**复位** 长按进入**UART启动模式** |2个按钮分别对应这两个功能|

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Version_tracker.jpg)

:::note
        您可能会问 ESP8266 和 ESP8285 之间有什么区别。ESP8285 是 ESP8266 的更新版本，增加了内置的 1MB 闪存。除此之外，它们几乎相同。
:::

## 特性

* Grove 4针连接器（RX、TX、VCC、GND）
* 802.11 b/g/n 协议（2.4GHz）
* WiFi Direct（P2P）、软AP
* 支持三种模式：AP、STA 和 AP+STA 共存模式
* 集成 TCP/IP 协议栈
* LwIP（轻量级IP）
* 集成低功耗32位CPU，可重新编程作为应用处理器
* 集成温度传感器
* 串行 UART 接口
* 多队列 QoS 管理
* 在 < 2ms 内唤醒并传输数据包
* 金属屏蔽
* 板载陶瓷天线
* 复位开关

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 硬件概述

这是 Grove - UART WiFi 模块的框图，由以下部分组成。

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_wiki_hardware_overview.jpg)

* Grove - 用于通过底板（如 Seeeduino 或 Grove Base Shield）上的插座连接到处理器。
* WiFi 天线 - ESP8266（模块型号）的天线
* 按钮 - 具有多种功能
  * 复位 - 按下并快速释放。
  * 将 ESP8266（模块型号）设置为 UART 启动模式 - 按住按钮直到中间的红色 LED 指示灯亮起。
* LED 指示灯 - 用于指示工作状态和用户操作。
  * 左侧 - 蓝色 LED 指示灯 - 用户可通过命令 "AT+LEDON" 和 "AT+LEDOFF" 控制。
  * 中间 - 红色 LED 指示灯 - 在 WiFi 连接或进入 UART 启动模式时亮起
  * 右侧 - 绿色 LED 指示灯 - 通电时亮起。

## 规格参数

* 输入电压：3V / 5V
* 波特率：115200
* 基于 ESP8266 ESP-06 SoC
* AT 固件：esp_iot_sdk_v1.1.0 + Seeed 修改版：
  * 2个额外的 AT 命令来控制蓝色链接 LED。
  * 将红色 WiFi LED 注册到 ESP8266 wifi 状态 LED。
* AT 命令集
* SDIO 1.1/2.0，SPI，UART
* 五种电源状态：OFF、DEEP_SLEEP、SLEEP、WAKEUP 和 ON。
* 待机功耗 &lt; 1.0mW（DTIM=3）
* 集成 TR 开关、平衡-不平衡转换器、LNA、功率放大器和匹配网络
* 集成 PLL、稳压器、DCXO 和电源管理单元
* 在 802.11b 模式下输出功率为 +19.5dBm
* 断电泄漏电流 &lt;10uA
* 用于 CCMP（CBC-MAC，计数器模式）、TKIP（MIC，RC4）、WAPI（SMS4）、WEP（RC4）、CRC 的硬件加速器
* WPA/WPA2 PSK 和 WPS 驱动程序
* A-MPDU 和 A-MSDU 聚合以及 0.4ms 保护间隔
* 尺寸：25.43mm x 20.35mm

**超低功耗技术**

ESP8266 采用专利电源管理技术设计，通过减少非必要功能和调节睡眠模式来实现极低的能耗。有五种电源状态：

* OFF
* DEEP_SLEEP - 实时时钟运行，但芯片的所有其他部分都关闭
* SLEEP - 仅实时时钟和看门狗运行时消耗少于 12uA。芯片将在 MAC、主机、RTC 或外部中断时唤醒。
* WAKEUP - 系统正在从睡眠状态转换到开启状态。晶体振荡器和 PLL 被启用。
* ON - 消耗少于 1.0mW（DTIM = 3）或 0.5mW（DTIM = 10）。

实时时钟可以编程为在指定时间段内唤醒 ESP8266。

DTIM 周期越高，设备可以睡眠的时间越长，因此设备可能节省的电力越多。

为了满足移动应用和可穿戴电子设备的功耗要求，为了降低整体功耗，可以在固件中自定义 PA 输出功率。

## 应用创意

* 家庭自动化
* 传感器网络
* 网状网络
* 可穿戴电子设备
* 婴儿监视器
* 网络摄像头
* 工业无线控制
* WiFi 信标
* 智能电源插头
* 位置感知应用

## 入门指南

在本节之后，您只需几个步骤就可以让 Grove - UART WiFi 运行起来。

### 与 Arduino 一起使用

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### 所需材料

| Seeeduino Lite | Grove-OLED |Grove-UART Wifi|
|--------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/lite.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_Display_0.96/images/grove%20oled%200.96_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove---OLED-Display-0.96%22-p-781.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Uart-Wifi-p-2495.html" target="_blank">立即购买</a>|

:::note
    **注意 1：** 请轻轻插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您的线缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买

    **注意 2：** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买
:::

#### 硬件

* **步骤 1.** 将 Grove-UART Wifi 连接到 Seeeduino Lite 的 **SERIAL** 端口。

* **步骤 2.** 将 Grove-OLED 连接到 Seeeduino Lite 的 **I2C** 端口。

* **步骤 3.** 通过 Micro-USB 线缆将 Seeeduino Lite 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Arduino_connect_1.jpg)

#### 软件

* **步骤 1.** 从 Github 下载 [128X64 OLED 库](https://github.com/Seeed-Studio/OLED_Display_128X64/archive/master.zip)。

* **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

* **步骤 3.** 打开 Arduino IDE 并将以下代码复制到新的草图中。

```
// test grove - uart wifi
// scan ap and display on Grove - OLED 0.96'
// Loovee @ 2015-7-28

#include <Wire.h>
#include <SeeedOLED.h>

char ap_buf[30][16];
int ap_cnt = 0;

void setup()
{
    Serial1.begin(115200);

    delay(3000);
    Wire.begin();
    SeeedOled.init();                   // initialze SEEED OLED display

    SeeedOled.clearDisplay();           // clear the screen and set start position to top left corner
    SeeedOled.setNormalDisplay();       // Set display to normal mode (i.e non-inverse mode)
    SeeedOled.setPageMode();            // Set addressing mode to Page Mode

}


void loop()
{
    ap_cnt = 0;
    SeeedOled.clearDisplay();
    SeeedOled.setTextXY(3,0);    
    SeeedOled.putString("Wifi Scan..."); 

    cmd_send("AT+CWLAP");
    wait_result();
    
    display_ap();
    delay(5000);
}

// send command
void cmd_send(char *cmd)
{
    if(NULL == cmd)return;
    Serial1.println(cmd);
}


// wait result of ap scan
// +CWLAP:(3,"360WiFi-UZ",-81,"08:57:00:01:61:ec",1)
void wait_result()
{
    while(1)
    {
LOOP1:
        char c1=0;
        if(Serial1.available()>=2)
        {
            c1 = Serial1.read();
            if(c1 == 'O' && 'K' == Serial1.read())return;       // OK means over
        }
        
        if('('==c1)
        {
            while(Serial1.available()<3);
            Serial1.read();
            Serial1.read();
            Serial1.read();

            int d = 0;
            while(1)
            {
                if(Serial1.available() && '"' == Serial1.read());      // find "
                {
                    while(1)
                    {
                        if(Serial1.available())
                        {
                            char c = Serial1.read();
                            ap_buf[ap_cnt][d++] = c;
                            if(c == '"' || d==16)
                            {
                                ap_buf[ap_cnt][d-1] = '\0';
                                ap_cnt++;
                                goto LOOP1;
                            }
                        }
                    }
                }
            }
        }
    }
}

// display
void display_ap()
{
    char strtmp[16];
    sprintf(strtmp, "get %d ap", ap_cnt);
    
    SeeedOled.clearDisplay();           // clear
    SeeedOled.setTextXY(3,3);           // Set the cursor to Xth Page, Yth Column
    SeeedOled.putString(strtmp);        // Print the String
 
    delay(2000);
    
    int cnt = ap_cnt;
    int offset = 0;
    while(1)
    {
        SeeedOled.clearDisplay(); 
        if(cnt>=8)
        {
            for(int i=0; i<8; i++)
            {
                SeeedOled.setTextXY(i,0);           // Set the cursor to Xth Page, Yth Column
                SeeedOled.putString(ap_buf[8*offset+i]);        // Print the String
            }
            cnt-=8;
            offset++;
        }
        else 
        {
            for(int i=0; i<cnt; i++)
            {
                SeeedOled.setTextXY(i,0);           // Set the cursor to Xth Page, Yth Column
                SeeedOled.putString(ap_buf[8*offset+i]);        // Print the String
            }
            
            return;
        }
        
        delay(2000);
    }
}

```

* **步骤 4.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

然后您将看到OLED显示您周围的wifi AP。

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_result.jpg)

## 固件更新

:::warning
        此固件仅支持V1版本，如果您将此固件烧录到Grove UART WIFI V2中，将会损坏您的模块。
:::

我们的模块板出厂时已烧录了固件，如果您愿意，可以烧录其他固件。点击[这里](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-Uart_Wifi_Firmware-code.zip)下载出厂设置固件的源代码。

### 所需材料

* 固件更新需要USB转串口转换器，如果您不知道在哪里购买，可以选择[UartSBee V5](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)。
* 需要一根[Grove跳线转换线](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-%285-PCs-per-PAck%29-p-1020.html)，我们也有销售。
* 需要一根micro USB线（A型转C型）。

### 硬件

**步骤 1.** 将Grove跳线转换线的一端连接到Grove - Uart Wifi上的grove插座，另一端连接到UartSBee V5，如下图所示。

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/UART_v1.jpg)

**步骤 2.** 然后按照下图连接线缆：

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_connect2.jpg)

### 软件

**步骤 1.** 下载烧录工具和固件

* [FLASH DOWNLOAD TOOLS](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/FLASH_DOWNLOAD_TOOLS_v1.2_150512.zip)
* [固件bin文件](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-uart-wifi-firmware-bin.zip)

**步骤 2.** 按住按钮直到红色LED指示灯亮起，这表示已准备好烧录固件。

**步骤 3.** 启动FLASH DOWNLOAD TOOLS文件中的可执行文件（双击）并按照以下步骤进行配置：

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools1.jpg)

**1.** 从下载的固件bin文件中选择所需文件。

**2.** 选中**SpiAutoSet**复选框。

**3.** 选择COM端口和波特率。

**4.** 点击**START**按钮

* 固件烧录过程中将显示进度条。

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools2.1.jpg)

* 最后，固件烧录完成。

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools3.jpg)

## AT命令

### AT命令快速入门

#### 硬件

**所需材料**和**硬件连接**与[固件更新](https://wiki.seeedstudio.com/cn/Grove-UART_Wifi/#firmware-update)相同

让我们进入软件部分

#### 软件

您可以使用任何您喜欢的串口工具，我们这里使用Arduino。请确保您已将**USB转串口转换器**连接到您的PC。

**步骤 1.** 打开Arduino IDE，点击**Tools**选择相应的**Port**。

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/1.png)

<div>
  **步骤 2.** 然后点击右上角的<embed src="https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/COM.png" />按钮打开Arduino的**Serial Monitor**。
</div>

**步骤 3.** 按照下图设置Serial Monitor。特别注意：2- 选择**Both NL & CR**，3-将**波特率**设置为115200

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/result.png)

**步骤 3.** 在命令行中输入您需要的AT命令，然后点击**Send**按钮。您将看到如上图所示的返回信息。

### 基本AT命令

| 命令 | 描述 |
|-------------|---------------|
|AT |测试AT启动|
|AT+RST| 重启模块|
|AT+GMR| 查看版本信息|
|AT+GSLP| 进入深度睡眠模式|
|ATE| 启用/禁用AT命令回显|
|AT+RESTORE| 恢复出厂设置|
|AT+UART| UART配置（已弃用）|
|AT+UART_CUR| UART当前配置（不保存到Flash）|
|AT+UART_DEF| UART默认配置（保存到Flash）|
|AT+SLEEP |睡眠模式|
|AT+RFPOWER| 设置RF发射功率|
|AT+RFVDD| 根据VDD33设置RF发射功率|

### WiFi AT命令

|命令 |描述|
|--------------|-------------|
|AT+CWMODE |WIFI模式（已弃用）|
|AT+CWMODE_CUR |当前WIFI模式（不保存到Flash）|
|AT+CWMODE_DEF| 默认WIFI模式（保存到Flash）|
|AT+CWJAP| 连接到AP（已弃用）|
|AT+CWJAP_CUR| 当前连接到AP（不保存到Flash）|
|AT+CWJAP_DEF| 默认连接到AP（保存到Flash）|
|AT+CWLAP| 列出可用的AP|
|AT+CWQAP| 断开与AP的连接|
|AT+CWSAP| 配置softAP（已弃用）|
|AT+CWSAP_CUR| 配置当前softAP（不保存到Flash）|
|AT+CWSAP_DEF| 配置默认softAP（保存到Flash）|
|AT+CWLIF| 列出连接到softAP的站点|
|AT+CWDHCP| 启用/禁用DHCP（已弃用）|
|AT+CWDHCP_CUR| 当前启用/禁用DHCP（不保存到Flash）|
|AT+CWDHCP_DEF| 默认启用/禁用DHCP（保存到Flash）|
|AT+CWAUTOCONN| 开机时自动连接到AP|
|AT+CIPSTAMAC| 设置站点mac地址（已弃用）|
|AT+CIPSTAMAC_CUR| 设置站点mac地址（不保存到Flash）|
|AT+CIPSTAMAC_DEF| 设置站点mac地址（保存到Flash）|
|AT+CIPAPMAC| 设置softAP mac地址（已弃用）|
|AT+CIPAPMAC_CUR| 设置softAP mac地址（不保存到Flash）|
|AT+CIPAPMAC_DEF| 设置softAP mac地址（保存到Flash）|
|AT+CIPSTA| 设置站点IP地址（已弃用）|
|AT+CIPSTA_CUR| 设置站点IP地址（不保存到Flash）|
|AT+CIPSTA_DEF| 设置站点IP地址（保存到Flash）|
|AT+CIPAP| 设置softAP IP地址（已弃用）|
|AT+CIPAP_CUR| 设置softAP IP地址（不保存到Flash）|
|AT+CIPAP_DEF| 设置softAP IP地址（保存到Flash）|
|AT+CWSTARTSMART| 启动SmartConfig|
|AT+CWSTOPSMART| 停止SmartConfig|

### TCP/IP AT命令

|命令 |描述|
|-------------|--------------|
|AT+CIPSTATUS| 获取连接状态|
|AT+CIPSTART| 建立TCP连接或注册UDP端口|
|AT+CIPSEND| 发送数据|
|AT+CIPSENDEX| 发送数据，如果遇到或"\0"，数据将被发送|
|AT+CIPSENDBUF| 将数据写入TCP发送缓冲区|
|AT+CIPBUFRESET| 重置段ID计数|
|AT+CIPBUFSTATUS| 检查TCP发送缓冲区状态|
|AT+CIPCHECKSEQ| 检查特定段是否已发送|
|AT+CIPCLOSE| 关闭TCP/UDP连接|
|AT+CIFSR| 获取本地IP地址|
|AT+CIPMUX| 设置多连接模式|
|AT+CIPSERVER| 配置为服务器|
|AT+CIPMODE| 设置传输模式|
|AT+SAVETRANSLINK| 将透明传输链接保存到Flash|
|AT+CIPSTO| 设置ESP8266作为TCP服务器运行时的超时时间|
|AT+CIUPDATE| 通过网络升级固件|
|AT+PING| Ping一个IP地址或主机名|

### Seeed AT命令

|命令 |描述|
|-------------|---------------|
|AT+LEDON| 打开蓝色LINK指示灯|
|AT+LEDOFF |关闭蓝色LINK指示灯|

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-UART_WiFi_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[PDF]** [PDF格式原理图](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-UART_WiFi_v1.0.pdf)

* **[Zip]** [Eagle格式原理图](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-UART_WiFi_sch_pcb.zip)
* **[数据手册]** [乐鑫科技 ESP8266](http://espressif.com/en/products/esp8266/)
* **[PDF]** [乐鑫科技 ESP8266 AT指令集 - v0.24](http://bbs.espressif.com/download/file.php?id=450)
* **[更多阅读]** [http://www.esp8266.com](http://www.esp8266.com)
* **[更多阅读]** [ESP-06](http://www.esp8266.com/wiki/doku.php?id=esp8266-module-family#esp-06)
* **[更多阅读]** [Hackaday上的ESP8266](http://hackaday.com/tag/esp8266/)
* **[更多阅读]** [https://nurdspace.nl/ESP8266](https://nurdspace.nl/ESP8266)

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