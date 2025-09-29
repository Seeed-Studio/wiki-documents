---
description: RePhone 地理套件
title: RePhone 地理套件
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RePhone_Geo_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Geo_Kit_wiki_2.jpg)

GSM 模块与 GPS 模块的结合使得 RePhone 地理套件非常出色。通过 GSM 网络（短信），该套件允许您随时随地获取实时地理位置、高度、行驶速度和时间信息，并且在任何天气条件下都能正常工作。此外，Xadow GSM Breakout 还为您提供了更多电子设备改造的可能性。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Geo-Kit-p-2624.html)

## 规格
---

### Xadow GSM+BLE

<!-- 有关此模块的更多信息，请查看 [**Xadow GSM+BLE Wiki 页面**](/cn/Xadow_GSMPlusBLE)。 -->

<table>
<tr>
<td> 微控制器 </td>
<td> MT2502 </td>
</tr>
<tr>
<td> MCU 核心 </td>
<td> 32位 ARM7EJ-STM RISC 处理器 </td>
</tr>
<tr>
<td> RAM </td>
<td> 4 MB </td>
</tr>
<tr>
<td> 闪存 </td>
<td> 16 MB </td>
</tr>
<tr>
<td> 电源供应 </td>
<td> 3.3 ~ 4.2V（无 SIM）/3.5 ~ 4.2V（有 SIM） </td>
</tr>
<tr>
<td> 功耗 </td>
<td> 20mW/30mW/52mW @ 待机（无无线电）/待机（GSM）/待机（BT） </td>
</tr>
<tr>
<td> 四频段 </td>
<td> 850/900/1800/1900 MHz </td>
</tr>
<tr>
<td> GPRS </td>
<td> Class 12 调制解调器 </td>
</tr>
<tr>
<td> 时钟速度 </td>
<td> 260 MHz </td>
</tr>
<tr>
<td> 连接器 </td>
<td> 35 PIN 连接器 &amp; 11 PIN 连接器用于 Xadow 模块；JST 1.0 连接器用于电池 </td>
</tr>
<tr>
<td> 接口 </td>
<td> LCD、音频、I2C、SPI、UART 和 GPIO 等 </td>
</tr>
<tr>
<td> 尺寸 </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>

### Xadow GPS v2

<!-- 有关此模块的更多信息，请查看 [**Xadow GPS V2 Wiki 页面**](/cn/Xadow_GPS_V2)。 -->

<table>
<tr>
<td> 微控制器 </td>
<td> Kinetis KL02 </td>
</tr>
<tr>
<td> 核心 </td>
<td> ARM® 32位 Cortex® -M0+CPU </td>
</tr>
<tr>
<td> 电源供应 </td>
<td> 3.3 ~ 6 V（通过断路引脚） </td>
</tr>
<tr>
<td> 闪存 </td>
<td> 32 KB </td>
</tr>
<tr>
<td> SRAM </td>
<td> 4 KB </td>
</tr>
<tr>
<td> 时钟速度 </td>
<td> 48 MHz </td>
</tr>
<tr>
<td> 功耗 </td>
<td> 18mA@跟踪，21mA@获取 </td>
</tr>
<tr>
<td> 节能模式 </td>
<td> 典型值 3mA@AlwaysLocateTM，7uA@备份模式，180uA@待机模式 </td>
</tr>
<tr>
<td> 通道 </td>
<td> 22（跟踪）/66（获取） </td>
</tr>
<tr>
<td> 更新速率 </td>
<td> 1Hz（默认），最高可达 10Hz </td>
</tr>
<tr>
<td> 水平位置精度 </td>
<td> &lt;2.5m CEP </td>
</tr>
<tr>
<td> 速度精度 </td>
<td> &lt;0.1m/s </td>
</tr>
<tr>
<td> 最大速度 </td>
<td> 最大 515m/s </td>
</tr>
<tr>
<td> 冷/热启动（带 EASYTM） </td>
<td> 215s/5s </td>
</tr>
<tr>
<td> 获取灵敏度 </td>
<td> -145dBm </td>
</tr>
<tr>
<td> 跟踪灵敏度 </td>
<td> -163dBm </td>
</tr>
<tr>
<td> 工作温度 </td>
<td> -40℃ 至 85℃ </td>
</tr>
<tr>
<td> 协议 </td>
<td> NMEA 0183/PMTK </td>
</tr>
<tr>
<td> 天线类型 </td>
<td> 芯片天线 </td>
</tr>
<tr>
<td> 接口 </td>
<td> 通过 I2C（7位地址 0x05）与 Xadow GSM+BLE 接口 </td>
</tr>
<tr>
<td> 尺寸 </td>
<td> 25.37mm X 20.30mm / 1" × 0.8" </td>
</tr>
</table>

### Xadow GSM Breakout

<!-- 有关此模块的更多信息，请查看 [**Xadow GSM Breakout Wiki 页面**](/cn/Xadow_GSM_Breakout)。 -->

<table>
<tr>
<td> 尺寸 </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>

## 模块连接
---
Xadow GSM+BLE 集成了一个 Xadow 36 Pin 接口和一个 Xadow 11 Pin 接口。如图所示，如果需要，可以使用 Xadow 36 Pin 电缆将 Xadow GSM+BLE 连接到 Xadow GSM breakout，但请务必注意，电缆必须**牢固**且**平整**地插入，最重要的是，**保持“TOP”一侧朝上**。Xadow 11 Pin 接口设计更加灵活，您可以使用 Xadow 11 Pin 排线以任意方式连接 Xadow GPS v2 和主板，同样需要确保电缆牢固插入。

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Geo_Kit_wiki_2.jpg)

## 运行 GPS 测试代码
---
<!-- 首先，您需要按照 **[Arduino IDE for RePhone Kit](/cn/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** 的说明下载适用于 RePhone Kit 的 Arduino IDE 并安装驱动程序。 -->
然后将以下 GPS 测试代码复制到您的适用于 RePhone 的 Arduino IDE 中。选择 **板子为“RePhone”** 并使用 **“MTK USB Debug Port”** 下载代码。
```
#include <LGPS.h>
#include <stdio.h>

void setup()
{
    Serial.begin(115200);
    Serial.print("GPS test.\r\n");
}

void loop()
{
    unsigned char *utc_date_time = 0;
    char buffer[50] = {0,};

    if(LGPS.check_online())
    {
        utc_date_time = LGPS.get_utc_date_time();
        sprintf(buffer, "GPS UTC:%d-%d-%d  %d:%d:%d\r\n", utc_date_time[0], utc_date_time[1], utc_date_time[2], utc_date_time[3], utc_date_time[4],utc_date_time[5]);
        Serial.print(buffer);

        sprintf(buffer, "GPS status is %c\r\n", LGPS.get_status());
        Serial.print(buffer);

        sprintf(buffer, "GPS latitude is %c:%f\r\n", LGPS.get_ns(), LGPS.get_latitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS longitude is %c:%f\r\n", LGPS.get_ew(), LGPS.get_longitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS speed is %f\r\n", LGPS.get_speed());
        Serial.print(buffer);

        sprintf(buffer, "GPS course is %f\r\n", LGPS.get_course());
        Serial.print(buffer);

        sprintf(buffer, "GPS position fix is %c\r\n", LGPS.get_position_fix());
        Serial.print(buffer);

        sprintf(buffer, "GPS sate used is %d\r\n", LGPS.get_sate_used());
        Serial.print(buffer);

        sprintf(buffer, "GPS altitude is %f\r\n", LGPS.get_altitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS mode is %c\r\n", LGPS.get_mode());
        Serial.print(buffer);

        sprintf(buffer, "GPS mode2 is %c\r\n", LGPS.get_mode2());
        Serial.print(buffer);
    }
    delay(1000);
}
```

**请注意：为了获得更好的信号强度，您应该将 GPS 模块放置在窗外/房屋外的开阔空间。此外，首次初始化后，可能需要一段时间才能追踪到卫星。**

现在**将端口更改为 MTK USB Modern Port（这非常重要）**，您应该能够在串行监视器上看到 GPS 信息。

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/GPS_detected.png)
![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/GPS_undetected.png.png)

## 更多示例代码
---
如果您正准备开展一些更有趣的项目，那么尝试一些示例代码将是一个很好的开始。

1. 在 **偏好设置** 中简单地将您的 **草图文件夹位置** 设置为您安装 RePhone 的 Arduino IDE 的位置，然后您就可以看到示例代码了。

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/Arduino_Sketchlocation.png)

2. 您可以在以下路径中找到为所有 RePhone 模块手动编写的 Arduino 示例代码：

_**Arduino_IDE_for_RePhone-master\hardware\arduino\mtk\libraries**_

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/Example_code_Arduino_IDE.png)

## RePhone 社区
---
[![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意和项目，并对模块未来的开发提供反馈。于是，我们创建了 RePhone 社区。

现在加入我们 [RePhone 社区](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)吧！我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

### 常见问题

一些在 RePhone 社区中经常被问到的问题已被收集并回答在主题 **["RePhone 常见问题 (FAQ)"](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)** 中，该主题会在有新的常见问题出现时持续更新。

## 资源

<!-- 请访问 Wiki 页面 [Xadow GPS V2](/cn/Xadow_GPS_V2) 了解更多信息。 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>