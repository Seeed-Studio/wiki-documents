---
description: 24GHz多普勒雷达
title: 24GHz多普勒雷达
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/102110464_Preview-07.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

**MW2401TR11** 是一款**24GHz**人类运动微波传感器模块产品，具有高集成度和高智能算法，配备高性能收发器。该天线不仅具有良好的方向性，还可以通过软件设置根据不同应用场景调整覆盖区域，并通过智能算法过滤干扰，同时能够有效识别物体的细微运动。

## 特性

- 灵敏识别人的细微动作
- **24GHz**微波模块可高效识别物体状态
- 支持原始信号和数字高电平或低电平信号输出
- 支持可调节的感应距离和灵敏度（最大：20米）
- 小型天线具有**170°**方位角检测功能
- 预留I/O端口，支持UART端口通信
- 符合FCC/CE/RS认证测试标准

## 规格  

<!-- <style type="text/css">
.tg  {border-collapse:"collapse";border-spacing:"0";}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-llyw{background-color:#c0c0c0;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-llyw"><span style={{fontWeight: 'bold'}}>项目</span></th>
      <th className="tg-llyw"><span style={{fontWeight: 'bold'}}>值</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-0pky">电源</td>
      <td className="tg-0pky"> 5 - 12 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">电流消耗</td>
      <td className="tg-0pky"> 50-56 mA（电流可根据所需距离减少）</td>
    </tr>
    <tr>
      <td className="tg-0pky">工作温度</td>
      <td className="tg-0pky"> -30 - 85 °C</td>
    </tr>
    <tr>
      <td className="tg-0pky">工作频率</td>
      <td className="tg-0pky"> 50HZ - 60HZ</td>
    </tr>
    <tr>
      <td className="tg-0pky">输出延迟</td>
      <td className="tg-0pky"> 2秒 - 无限（可通过软件调节）</td>
    </tr>
    <tr>
      <td className="tg-0pky">发射频率</td>
      <td className="tg-0pky"> 24 - 24.25 GHz</td>
    </tr>
    <tr>
      <td className="tg-0pky">数字高电平信号</td>
      <td className="tg-0pky"> 3.2 - 3.3 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">数字低电平信号</td>
      <td className="tg-0pky"> 0 - 0.2 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">悬挂高度</td>
      <td className="tg-0pky"> 3 - 10米（可通过软件调节）</td>
    </tr>
    <tr>
      <td className="tg-0pky">反应半径</td>
      <td className="tg-0pky">2 - 5米（可通过软件调节）</td>
    </tr>
    <tr>
      <td className="tg-0pky">微反应半径</td>
      <td className="tg-0pky">0.5 - 3米（可通过软件调节）</td>
    </tr>
    <tr>
      <td className="tg-0pky">检测角度</td>
      <td className="tg-0pky">150 - 170°</td>
    </tr>
  </tbody>
</table>

## 尺寸

- 20mm x 20mm x 2.54mm

## 硬件概述

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11.png)

ip  
R2 是保留的 I/O 接口。

## 技术细节

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-6qw1{background-color:#c0c0c0;text-align:center;vertical-align:top}
</style> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-6qw1" colspan="3">接口定义</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh">编号</td>
    <td class="tg-baqh">引脚</td>
    <td class="tg-baqh">功能</td>
  </tr>
  <tr>
    <td class="tg-baqh">1</td>
    <td class="tg-baqh">TX</td>
    <td class="tg-baqh">TX 端口可用作具有 ADC 功能的 I/O（电压：3.3 V）</td>
  </tr>
  <tr>
    <td class="tg-baqh">2</td>
    <td class="tg-baqh">GND</td>
    <td class="tg-baqh">地连接</td>
  </tr>
  <tr>
    <td class="tg-baqh">3</td>
    <td class="tg-baqh">OUT</td>
    <td class="tg-baqh">感应输出 I/O 端口（电压：3.3 V & 用户定义的输出波形）</td>
  </tr>
  <tr>
    <td class="tg-baqh">4</td>
    <td class="tg-baqh">VIN</td>
    <td class="tg-baqh">5 - 12 V</td>
  </tr>
  <tr>
    <td class="tg-baqh">5</td>
    <td class="tg-baqh">RX</td>
    <td class="tg-baqh">RX 端口可用作具有 ADC 功能的 I/O（电压：3.3 V）</td>
  </tr>
</tbody>
</table>

## 支持的平台

| Arduino                                                                                             |                                                                                              |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) |

## 入门指南

### 所需材料

| Seeeduino Cortex-M0+ | MW2401TR11 |
|-----------------------|------------|
|![图片](https://files.seeedstudio.com/wiki/MW2401TR11/img/clearseeedriono%20pic.png)| ![图片](https://files.seeedstudio.com/wiki/MW2401TR11/img/clearnMWpic6.png)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)|[立即购买](https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html)|

:::tip
这只是一个示例，您可以使用其他带有 RX 和 TX 端口的设备，或者设置一个软件串口来模拟 TX 和 RX 端口。此外，您也可以仅使用 OUT 端口输出高电平信号或低电平信号，而无需 RX 和 TX。
:::

## 硬件

![MW2401TR11 与 Seeeduino Cortex-M0+ 的连接](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW_Seeeduino.png)

- **步骤 1. 按照上图连接线材**。
- **步骤 2. 将 Type-C 电源线插入 Seeeduino Cortex-M0+**。

## 软件

- **步骤 1. 下载** [Arduino IDE](https://www.arduino.cc/en/main/software)
- **步骤 2. 设置 Seeeduino Cortex-M0+，请参考** [Seeeduino Cortex-M0+ 指南](https://wiki.seeedstudio.com/cn/Seeeduino-Cortex-M0/)
- **步骤 3. 将代码复制到 Arduino IDE 中并上传。** [上传代码指南](https://wiki.seeedstudio.com/cn/Upload_Code/)

```cpp
int MW_out = 2;   
// 将引脚 2 设置为 OUT 端口
void setup() {
  Serial.begin(9600);
  Serial1.begin(115200);
  pinMode(MW_out, INPUT);
}

void loop() {
  Serial.println(analogRead(MW_out));
  delay(2000);
  if (Serial1.available()){
    //Serial.println("数据准备好展示");
    uint8_t begin_code = Serial1.read();
    delay(10);
    uint8_t state_code = Serial1.read();
    delay(10);
    uint8_t gear_code = Serial1.read();
    delay(10);
    uint8_t delay_code = Serial1.read();
    delay(10);
    uint8_t check_code = Serial1.read();

    if(begin_code == 170){  //确认头部始终为 0xaa
      check_code = begin_code + state_code + gear_code + delay_code;
      if(check_code == 175) Serial.println("物体状态: 停止");
      if(check_code == 176) Serial.println("物体状态: 接近_5");
      if(check_code == 177) Serial.println("物体状态: 离开");
      if(check_code == 172) Serial.println("物体状态: 接近_1");
    }
    else Serial.println("未接收到数据");   
    }
    while(Serial1.read()>=0);    //清空缓冲区
}
```

- **步骤 4. 打开串口监视器，您将看到数据打印输出**。

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/monitor2.png)

**1018 和 1019 表示高电平信号，4 和 5 表示低电平信号。通常如果出现低电平信号，则不会显示动作数据。**

**以下是一个简单的演示，当我的手离开时，监视器显示物体状态：离开**
![当我的手离开时](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11_gGIF.gif)

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11_GIF.gif)

## 资源

- **[PDF]** [微波传感器 - 24GHz 多普勒雷达运动传感器 - MW2401TR11](https://wiki.seeedstudio.com/cn/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11/MW2401TR11_datasheet.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>