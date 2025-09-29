---
description: Xadow - GPS
title: Xadow - GPS
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_GPS
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Xadow_gps.jpg)

Xadow GPS 是一个 OEM GNSS 接收模块，包括 Fastrax IT530M 和一个小型 12mm 方形陶瓷贴片天线。该低功耗模块输出一系列标准 NMEA 格式数据，提供位置信息、卫星信息和时间等。该模块可以轻松直接连接到 Xadow 主板，以显示和记录上述信息。它具有弱信号的捕获和跟踪能力，是导航项目的绝佳选择。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-GPS-p-1600.html)

## 规格
---
- 工作电压：5.0 VDC
- 通道：99/33（搜索/跟踪）
- 导航灵敏度：-165dBm
- 跟踪灵敏度：-148 dBm
- 首次定位时间（冷启动）：23秒
- 首次定位时间（热启动）：1秒
- 首次定位时间（暖启动）：23秒
- 更新速率：1 Hz（可配置至 10 Hz）
- 数据协议：NMEA-0183 rev. 3.01
- 通信模式：UART
- 默认波特率：115200 b/s
- 工作温度：-40°C ~ +85°C
- 尺寸：25.43mm x 20.35mm

## 演示
---
以下是一个示例，展示如何使用软件串口读取 GPS 数据并将其发送回串口。

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/IMG_4200.JPG)

:::note
连接 Xadow GPS 到 Xadow 主板时，需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::
```
#define SerialBaud   9600
#define Serial1Baud  9600
void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
}

void loop()
{
    for(;;)
    {
        // 从虚拟串口线复制到 UART，反之亦然
   /*
    */
        if (Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if (Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- 打开串口监视器，你可以看到：

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_serial_monitor.jpg)

这里是关于 NMEA 0183 通信协议的所有信息。实际上，我们只需要提取定位数据，其他可以忽略。$GPRMC 数据对我们有用，现在让我们分析其详细含义：

$GPRMC,091308.000,A,2235.1683,N,11356.3607,E,0.37,259.79,050813,,,A*6E

- 091308.000－－表示格林尼治标准时间（世界标准时间）上午 09:13:8。北京标准时间比格林尼治标准时间早八小时，因此北京时间为下午 5:13。
- A－－表示数据有效。如果字母是 V，则表示 $GPRMC 数据无效。
- 2235.1683,N－－纬度 22.351683 度。
- 11356.3607,E－－东经 113.563607 度。
- 0.37－－表示运动速度。
- 259.79－－表示运动方向。北方为 0 度，东方为 90 度，南方为 180 度，西方为 270 度。
- 050813－－表示 2013 年 8 月 5 日。

**我们也可以使用 u-center 观察这些数据。**
- 下载 [u-center](https://www.u-blox.com/en/product/u-center-windows) 并安装到你的电脑上。
- 点击 Receiver -> Port 并选择 Xadow 主板使用的 COM 端口。如果你正在打开 Arduino IDE 的串口监视器，请关闭它。
- 点击 Receiver -> Baudrate 并确保选择了 9600。
- 点击 View -> Text Console，你应该会看到一个窗口流式传输 NMEA 数据，如下图所示。

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_u-_center.jpg)

- 上图右侧部分是卫星位置、世界位置、指南针、手表。你可以点击 View -> Docking Windows 并选择你想查看的窗口。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow GPS Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip)
- [Xadow GPS PDF 格式原理图](https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_in_Schematic.pdf)
- [Fastrax IT530M 数据手册](https://files.seeedstudio.com/wiki/Xadow_GPS/res/IT530M_DataSheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>