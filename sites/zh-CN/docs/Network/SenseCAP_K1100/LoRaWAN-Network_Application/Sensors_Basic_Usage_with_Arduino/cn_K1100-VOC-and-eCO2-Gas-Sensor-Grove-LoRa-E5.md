---
description: Grove VOC 和 eCO2 气体传感器 (SGP30)
title: Grove VOC 和 eCO2 气体传感器 (SGP30)
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Grove VOC 和 eCO2 气体传感器 (SGP30)

在本节中，我们将详细介绍传感器的工作原理、如何使用 Wio Terminal 获取传感器数据以及如何通过 Wio Terminal 和 Grove - Wio-E5 发送数据。

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型开发，还为您提供使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列传感器具有 IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，是工业应用的最佳选择。该系列包括土壤湿度、空气温度和湿度、光强度、CO2、电导率以及一个 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>SenseCAP 工业传感器</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody></table>

## 传感器的工作原理

SGP30 是一种金属氧化物室内气体传感器，具有单芯片上的多个感应元件。它集成了四个气体感应元件，并提供完全校准的空气质量输出信号，主要用于空气质量检测。

SGP30 的感应部分（MEMS）基于一层加热的金属氧化物（MOx）纳米颗粒薄膜。气体敏感材料通过将吸附在金属氧化物颗粒上的氧气与目标气体反应，从而释放电子。这会导致金属氧化物层的电阻发生变化，传感器通过测量这种变化来检测气体。

简而言之，还原性气体的存在会导致气体敏感材料表面氧气浓度的降低，从而改变半导体的电阻（或导电性）。随后，电阻的检测、信号处理和转换由电路（ASIC）部分完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png" /></div>

有关 Grove VOC 和 eCO2 气体传感器的更多使用信息，请参考[这里](https://wiki.seeedstudio.com/cn/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/)。

## 所需材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove VOC 和 eCO2 气体传感器 (SGP30)</td>
    </tr>
  </tbody></table>

## 初步准备

### 连接

在本例中，我们需要借助 Grove - Wio-E5 连接到附近的 LoRa® 网关。我们需要将 Wio Terminal 右侧的 Grove 接口配置为软串口以接收 AT 指令，并根据下图将 Grove VOC 和 eCO2 气体传感器连接到左侧接口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/sgp30.jpg" /></div>

### 软件准备

**步骤 1.** 安装 Arduino 软件。

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**步骤 2.** 启动 Arduino 应用程序。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**步骤 3.** 将 Wio Terminal 添加到 Arduino IDE。

打开 Arduino IDE，点击 `File > Preferences`，并将以下 URL 复制到 Additional Boards Manager URLs：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

点击 `Tools > Board > Board Manager`，在 Boards Manager 中搜索 **Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**步骤 4.** 选择你的开发板和端口

你需要在 `Tools > Board` 菜单中选择与你的 Arduino 对应的条目，选择 **Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

从 `Tools -> Port` 菜单中选择 Wio Terminal 开发板的串口设备。这通常是 COM3 或更高（COM1 和 COM2 通常保留给硬件串口）。要确认，可以断开 Wio Terminal 开发板并重新打开菜单；消失的条目应该是 Arduino 开发板。重新连接开发板并选择该串口。

:::tip
对于 Mac 用户，串口可能类似于 `/dev/cu.usbmodem141401`。

如果无法上传代码，通常是因为 Arduino IDE 无法将 Wio Terminal 切换到引导加载模式（可能是因为 MCU 停止或你的程序正在处理 USB）。解决方法是手动将 Wio Terminal 切换到引导加载模式。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**步骤 5.** 下载 Grove - Wio-E5 库

访问 [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) 仓库，并将整个仓库下载到本地。

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**步骤 6.** 将库添加到 Arduino IDE

现在，可以将 3 轴数字加速度计库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch -> Include Library -> Add .ZIP Library`，然后选择刚刚下载的 `Disk91_LoRaE5` 文件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## 获取 Grove VOC 和 eCO2 气体传感器 (SGP30) 的数值

**步骤 1.** 下载 Grove VOC 和 eCO2 气体传感器代码库

访问 [SGP30_Gas_Sensor](https://github.com/Seeed-Studio/SGP30_Gas_Sensor) 仓库，并将整个仓库下载到本地驱动器。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**步骤 2.** 将库添加到 Arduino IDE

现在，可以将 Grove VOC 和 eCO2 气体传感器库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch -> Include Library -> Add .ZIP Library`，然后选择刚刚下载的 `SGP30_Gas_Sensor` 文件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**步骤 3.** 从 SGP30 获取 VOC 和 eCO2 数据

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

此仓库展示了获取的 VOC 和 eCO2 数据。在代码中，我们使用 `sgp_measure_signals_blocking_read()` 函数来获取 VOC 和 eCO2 信息，这些数据是正整数。

```cpp
#include <Arduino.h>
#include "sensirion_common.h"
#include "sgp30.h"

void setup() {
    s16 err;
    u32 ah = 0;
    u16 scaled_ethanol_signal, scaled_h2_signal;
    Serial.begin(115200);
    Serial.println("serial start!!");

    /*  初始化模块，重置所有基线。初始化大约需要 15 秒，
        在此期间，所有测量 IAQ（室内空气质量）输出的 API 都不会改变。
        默认值为 400(ppm) 的 CO2 和 0(ppb) 的 TVOC */
    while (sgp_probe() != STATUS_OK) {
        Serial.println("SGP failed");
        while (1);
    }
    /* 以阻塞方式读取 H2 和乙醇信号 */
    err = sgp_measure_signals_blocking_read(&scaled_ethanol_signal,
                                            &scaled_h2_signal);
    if (err == STATUS_OK) {
        Serial.println("get ram signal!");
    } else {
        Serial.println("error reading signals");
    }

    // 设置绝对湿度为 13.000 g/m^3
    // 这只是一个测试值
    sgp_set_absolute_humidity(13000);
    err = sgp_iaq_init();
}

void loop() {
    s16 err = 0;
    u16 tvoc_ppb, co2_eq_ppm;
    err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);
    if (err == STATUS_OK) {
        Serial.print("tVOC 浓度:");
        Serial.print(tvoc_ppb);
        Serial.println("ppb");

        Serial.print("CO2eq 浓度:");
        Serial.print(co2_eq_ppm);
        Serial.println("ppm");
    } else {
        Serial.println("读取 IAQ 值时出错\n");
    }
    delay(1000);
}
```

打开 Arduino IDE 的串口监视器，选择波特率为 115200，并观察结果。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/171.png" /></div>

## 通过 Grove - Wio-E5 发送数据

我们将结合前面 Grove - Wio-E5 的代码来连接 LoRa® 网络。通过使用 AT 命令，可以将 Grove VOC 和 eCO2 气体传感器的值发送到 LoRa® 网络。

在上一节的代码中，我们知道 VOC 和 eCO2 的值是正整数，并且这两个整数的长度不会超过 8 位。

因此，我们可以确定通过 AT 命令发送的数据的内容、大小和格式。我们可以设置一个足够大的数组，将需要发送的字符串存储到数组中，最后使用 **send_sync()** 函数将数组发送出去。

上述思路的伪代码大致如下：

```c
  ......
  s16 err = 0;
  u16 tvoc_ppb, co2_eq_ppm;
  err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);
  
  static uint8_t data[4] = { 0x00 };  // 使用 data[] 存储传感器的值

  data_decord(tvoc_ppb, co2_eq_ppm, data);

  if ( lorae5.send_sync(              // 发送传感器值
        8,                            // LoRaWan 端口
        data,                         // 数据数组
        sizeof(data),                 // 数据大小
        false,                        // 不需要确认
        7,                            // 扩频因子
        14                            // 发射功率（单位：dBm）
       ) 
  ) 
  ......
```

接下来我们需要做的是使用 `begin()` 函数初始化 Grove - Wio-E5，并使用 `setup()` 函数配置 Grove - Wio-E5 的三元组信息。当我们使用 `send_sync()` 函数发送数据消息时，将尝试加入 LoRaWAN® 网络，一旦成功，数据将被发送，并返回信号强度和地址等信息。

完整的代码示例可以在 [这里](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data) 找到。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
我们不建议您现在上传代码查看结果，因为此时您尚未配置 Helium/TTN，将会得到 "Join failed" 的结果。建议您在完成 [连接到 Helium](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/) 或 [连接到 TTN](https://wiki.seeedstudio.com/cn/Connecting-to-TTN/) 章节后再上传此代码，以完成完整的数据发送过程。
:::

在您体验并理解了 Grove VOC 和 eCO2 气体传感器的工作原理及数据格式后，请继续下一步教程，加入 LoRaWAN® 网络。

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Helium 部分</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Helium 介绍</strong><br /><br />在本章中，我们将介绍 Helium 控制台的操作，以便对 Helium 控制台有一个初步的了解。<br /><br /><a href="https://wiki.seeedstudio.com/cn/Helium-Introduction">跳转到章节 &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>连接到 Helium</strong><br /><br />本节描述如何配置 Helium，以便传感器数据能够成功上传并显示在 Helium 中。<br /><br /><a href="https://wiki.seeedstudio.com/cn/Connecting-to-Helium">跳转到章节 &gt;</a></td>
    </tr>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>TTN 部分</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTN 介绍</strong><br /><br />在本章中，我们将介绍 TTN 控制台的操作，以便对 TTN 控制台有一个初步的了解。
        <br /><br /><a href="https://wiki.seeedstudio.com/cn/TTN-Introduction">跳转到章节 &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>连接到 TTN</strong><br /><br />本节描述如何配置 TTN，以便传感器数据能够成功上传并显示在 TTN 中。
        <br /><br /><a href="https://wiki.seeedstudio.com/cn/Connecting-to-TTN">跳转到章节 &gt;</a></td>
    </tr>
  </tbody></table>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® 标志是 Semtech Corporation 或其子公司的商标。
- LoRaWAN® 是根据 LoRa Alliance® 授权使用的标志。