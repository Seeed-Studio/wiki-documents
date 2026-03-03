---
description: 连接到 Helium
title: 连接到 Helium
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Connecting-to-Helium
last_update:
  date: 2023/1/13
  author: shuxu hu
---

# 连接到 Helium

在本章中，我们将介绍 Helium 平台的基本使用方法，以及如何通过 Helium 平台传递传感器数据。

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、二氧化碳、电导率以及 8 合 1 气象站的传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

<div>
  <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <tbody>
      <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>SenseCAP 工业传感器</strong></font></td></tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温湿度</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温湿度 &amp; CO2</strong></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
      </tr>
    </tbody>
  </table>
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/28.png" /></div>
  如果您对 Helium 完全没有经验，我们建议您先阅读有关 Helium 控制台的内容。
  <table align="center">
    <tbody><tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Helium 简介</strong><br /><br />在本章中，我们将介绍我们用来初步了解 Helium 控制台的 Helium 控制台控件。<br /><br /><a href="https://wiki.seeedstudio.com/cn/Helium-Introduction">开始了解 &gt;</a></td>
      </tr>
    </tbody></table>
</div>

:::note
在开始本节之前，请确保您的部署环境周围有 Helium LoRaWAN® 覆盖，否则您将无法通过 LoRa® 将设备添加到 Helium。有关更多详细信息，请阅读 [Helium LoRaWAN®](https://www.helium.com/lorawan)。
:::

## <span id="jump1">将 Grove - Wio-E5 设备添加到 Helium 控制台</span>

为了通过 Helium 转发传感器数据，第一步我们需要将 Grove - Wio-E5 添加到 Helium 控制台，以建立本地设备与 Helium 平台之间的连接。

要添加 Grove - Wio-E5，请转到 **Devices**，然后点击窗口右上角的 **+** Add Device 图标。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

如上所述，对于 Helium 控制台设备，此时会自动生成一组三元数据 -- **DevEUI**、**AppEUI** 和 **AppKey**。

我们首先填写设备的名称，这里我将其命名为 **lora wio terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/129.png" /></div>

:::note
请在 [预先批准的内容](https://wiki.seeedstudio.com/cn/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation) 中下载 Arduino 和 Wio Terminal 所需的环境。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

Grove - Wio-E5 允许用户设置自己的 **DevEUI**、**AppEUI** 和 **AppKey**，因此我们可以将 Helium 上面生成的三元信息填写到对应的列中。

打开 Arduino IDE 并将以下代码复制到 Arduino IDE 中。

```c
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // AT 命令和调试信息的输出位置

#define Frequency DSKLORAE5_ZONE_EU868
/*
在此选择您的频段。
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */

char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";

void setup() {

  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 1500 );  // 打开串口监视器以开始，或等待 1.5 秒

  // 初始化库，搜索不同 WIO 端口上的 LORAE5
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("LoRa E5 初始化失败");
    while(1); 
  }

  // 设置 LoRaWan 凭据
  if ( ! lorae5.setup(
        Frequency,     // LoRaWan 无线电区域，这里是 EU868
        deveui,
        appeui,
        appkey
     ) ){
    Serial.println("LoRa E5 设置失败");
    while(1);         
  }
}

void loop() {

}
```

:::note
上述代码对 Grove - Wio-E5 的连接没有限制，它会自动搜索 Grove - Wio-E5 所连接的 Grove 端口，但搜索过程可能需要一些时间（大约一分钟左右）。
:::
请选择您希望使用的 LoRaWAN® 频段。此频段必须与您使用的网关频段一致。可用的频段在以下代码的注释中列出。在本教程中，我们默认使用 **EU868** 频段。

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
在此选择您的频段。
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */
```

:::tip
**EU868** 频段通常用于 **欧洲** 地区。<br />
**US915** 频段通常用于 **北美** 地区。<br />
**AU915** 频段通常用于 **澳大利亚** 地区。
:::
请将 Helium 生成的 **DevEUI**、**AppEUI** 和 **AppKey** 替换到以下代码中。

```c
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/89.png" /></div>

将代码上传到 Wio Terminal，并打开 Arduino IDE 的串口监视器，将波特率设置为 9600 并观察设置。

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/K1100/90.png" /></div>

确保以上信息填写完成后，点击下方的 **Save Device** 完成设备添加。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/130.png" /></div>

请耐心等待设备添加完成。（这大约需要 20 分钟。）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/131.png" /></div>

## 为不同传感器编写解码器函数

在前面的章节中，我们已经指导您如何使用 Wio Terminal 读取套件中各个传感器的值。为了通过 Grove - Wio-E5 将传感器值发送到 Helium，需要使用 AT 命令来完成。发送的数据会被 Helium 接收，并需要在成为我们可以读取的真实数据之前进行解码。这就是我们编写解码器的原因。

此外，由于发送的数据格式不统一，传感器可能包含整数、浮点数、正数和负数等，因此每个传感器所需的解码器代码是不同的。

<table align="center">
  <tbody><tr>
      <th>传感器类型</th>
      <th>下载地址</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内置光传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-Light-Sensor-data-decoder.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内置 IMU 传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-IMU-Sensor-data-decoder.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">土壤湿度传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">VOC 和 eCO2 气体传感器 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SGP30-data-decoder.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">温湿度传感器 (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SHT40-data-decoder.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">视觉 AI 模块</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/VisionAI-data-decoder.js">下载</a></td>
    </tr>
  </tbody></table>

### 选项 1. Wio Terminal 光传感器数据解码器

我们创建一个新的自定义脚本，并命名为 Light_data。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/132.png" /></div>

在前一章节 [Wio Terminal 光传感器](https://wiki.seeedstudio.com/cn/K1100-Light-Sensor-Grove-LoRa-E5/) 中，我们使用了一个整数变量 `light` 来存储光传感器读取的光照值，并通过 **send_sync()** 函数发送该值。因此，我们在 Helium 中编写的解码器的目标是能够解析这个整数数据。

其解码器的配置代码如下。请将以下代码粘贴到 Helium 的代码部分中。点击 **Save Function** 保存此解码器。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/133.png" /></div>

我们可以在右侧的 **SCRIPT VALIDATOR** 中输入 8 位光传感器的数据，以检查解码器是否正确解析。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/134.png" /></div>

返回 Flows 并将设备连接到解码器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/180.png" /></div>

### 选项 2. Wio Terminal IMU 传感器数据解码器

我们创建一个新的自定义脚本，并命名为 IMU_data。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/135.png" /></div>

在前一章节 [Wio Terminal IMU 传感器](https://wiki.seeedstudio.com/cn/K1100-IMU-Sensor-Grove-LoRa-E5/) 中，我们使用了浮点数 `x_values`、`y_values` 和 `z_values` 来存储 IMU 返回的三个轴的数据，并将这三组数据乘以 100 转换为整数后一起发送。

特别需要注意的是，这些数据可能是正数也可能是负数，因此我们还需要解析这些数据并将其还原为浮点数。

其解码器的配置代码如下。请将以下代码粘贴到 Helium 的代码部分中。点击 **Save Function** 保存此解码器。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    if (value >= 32768) {
      value = 32768 - value;
    }
    value = value/100.0;
    return value;
  }
    
  if (port == 8) {
    decoded.x = transformers(bytes.slice(0,2));
    decoded.y = transformers(bytes.slice(2,4));
    decoded.z = transformers(bytes.slice(4,6));
  }
  
  return decoded;
}
```

我们可以在右侧的 **SCRIPT VALIDATOR** 中输入 48 位 IMU 传感器的数据，以检查解码器是否正确解析。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/91.png" /></div>

返回 Flows 并将设备连接到解码器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/179.png" /></div>

### 选项 3. Grove 土壤湿度传感器数据解码器

我们创建一个新的自定义脚本，并命名为 Soil_data。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

在前一章节 [Grove 土壤湿度传感器](https://wiki.seeedstudio.com/cn/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/) 中，我们使用了一个整数变量 `sensorValue` 来存储土壤湿度传感器读取的土壤湿度值，并通过 **send_sync()** 函数发送该值。因此，我们在 Helium 中编写的解码器的目标是能够解析这个整数数据。

其解码器的配置代码如下。请将以下代码粘贴到 Helium 的代码部分中。点击 **Save Function** 保存此解码器。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

我们可以在右侧的 **SCRIPT VALIDATOR** 中输入 8 位土壤湿度传感器的数据，以检查解码器是否正确解析。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

返回到 Flows 并将设备连接到解码器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/186.png" /></div>

### 选项 4. Grove VOC 和 eCO2 气体传感器 (SGP30) 数据解码器

我们创建一个新的自定义脚本，并命名为 SGP30_data。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/173.png" /></div>

在上一节 [Grove VOC 和 eCO2 气体传感器 (SGP30)](https://wiki.seeedstudio.com/cn/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/) 中，我们使用整数变量 `tvoc_ppb` 和 `co2_eq_ppm` 来存储 VOC 和 eCO2 的值。

其解码器的配置代码如下。请将以下代码粘贴到 Helium 的代码部分中。点击 **Save Function** 保存此解码器。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.voc = transformers(bytes.slice(0,2));
    decoded.eco2 = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

我们可以在右侧的 **SCRIPT VALIDATOR** 中输入 16 位 SGP30 的数据，以检查解码器是否正确解析。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/174.png" /></div>

返回到 Flows 并将设备连接到解码器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/181.png" /></div>

### 选项 5. Grove 温湿度传感器 (SHT40) 数据解码器

我们创建一个新的自定义脚本，并命名为 SHT40_data。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/189.png" /></div>

在上一节 [Grove 温湿度传感器 (SHT40)](https://wiki.seeedstudio.com/cn/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/) 中，我们使用浮点变量 `temperature` 和 `humidity` 来存储温度和湿度值。并在将这两个值放大一百倍后以整数形式发送。

其解码器的配置代码如下。请将以下代码粘贴到 Helium 的代码部分中。点击 **Save Function** 保存此解码器。

```java
function Decoder(bytes, port) {

    var decoded = {};

    function transformers(bytes){
        value = bytes[0] * 256 + bytes[1];
        if (value >= 32768) {
        value = 32768 - value;
        }
        value = value/100.0;
        return value;
    }

    if (port == 8) {
        decoded.temp = transformers(bytes.slice(0, 2));
        decoded.humi = transformers(bytes.slice(2, 4));
    }

    return decoded;
}
```

我们可以在右侧的 **SCRIPT VALIDATOR** 中输入 32 位 SHT40 的数据，以检查解码器是否正确解析。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/92.png" /></div>

返回到 Flows 并将设备连接到解码器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/190.png" /></div>

### 选项 6. Grove Vision AI 模块数据解码器

我们创建一个新的自定义脚本，并命名为 AI_Version_data。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/195.png" /></div>

在上一节 [Grove Vision AI 模块](https://wiki.seeedstudio.com/cn/K1100-Vision-AI-Module-Grove-LoRa-E5/) 中，我们使用整数变量 `model` 和 `confi` 来存储识别的模型类型及其置信度。

其解码器的配置代码如下。请将以下代码粘贴到 Helium 的代码部分中。点击 **Save Function** 保存此解码器。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.model = transformers(bytes.slice(0,2));
    decoded.confidence = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

我们可以在右侧的 **SCRIPT VALIDATOR** 中输入 16 位 Vision AI 的数据，以检查解码器是否正确解析。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/200.png" /></div>

返回到 Flows 并将设备连接到解码器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/196.png" /></div>

## 上传代码发送数据到 Helium

在不同的传感器页面中，我们提供了详细的代码用于上传数据。您也可以在下方列表中找到您想要使用的传感器代码。

:::note
在使用本节提供的代码之前，请注意代码中的 Device EUI、App EUI 和 App Key 与 Helium 添加的设备信息保持一致。同时检查 Grove - Wio-E5 配置的频段是否与您所在区域或 Helium 的网关频段一致。如果不一致，可能会导致网络接入失败。

设置 LoRaWAN® 频段的代码如下，默认设置为 EU868 频段。（EU868 频段通常用于欧洲地区。）
    `#define Frequency DSKLORAE5_ZONE_EU868`
US915 频段（US915 频段通常用于北美地区。）
    `#define Frequency DSKLORAE5_ZONE_US915`
AU915 频段（AU915 频段通常用于澳大利亚地区。）
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::

<table align="center">
  <tbody><tr>
      <th>传感器类型</th>
      <th>下载地址</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内置光传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data">下载</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内置 IMU 传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data">下载</a></td>
    </tr>
    <tr>
      <td align="center">土壤湿度传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data">下载</a></td>
    </tr>
    <tr>
      <td align="center">VOC 和 eCO2 气体传感器 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data">下载</a></td>
    </tr>
    <tr>
      <td align="center">温湿度传感器 (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data">下载</a></td>
    </tr>
    <tr>
      <td align="center">视觉 AI 模块</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data">下载</a></td>
    </tr>
  </tbody></table>

上述用于发送传感器数据的代码可以直接从 Arduino IDE 上传到 Wio Terminal 并运行。此时，请打开串口监视器并将波特率调整为 **9600**，以实时观察数据传输。

更多详情，请返回参考目录中关于各个传感器的使用章节。

### 实时数据和调试

设备连接后，您可以开始在实时数据包和事件日志中查看数据传输。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/93.png" /></div>

:::note
在 Helium 的最新版本更新中，Helium 不再为新用户赠送 10,000 个 DATA CREDITS，仅赠送 **250 个 DATA CREDITS**。您可以自由调整发送数据的频率以减少 DC 消耗，或者自行选择购买。
:::

在 **My Devices** 标签中，我们可以点击屏幕右侧的 **beetle 按钮** 查看 Helium 接收到的数据的信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

我们可以特别关注以下部分的信息：

- payload: 以 base64 格式发送到 Helium 的数据信息。

- port: 接收数据的端口号。

:::note
在我们的代码中，发送消息的端口号设置为 **8**，因此在调试窗口中，所有关于传感器的消息都应该是端口 **8** 的 payload。对于读取和解码 payload，您可以借助此 [解码网站](https://cryptii.com/pipes/base64-to-hex)。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/175.png" /></div>

### 源代码分析

如果您希望将本教程的内容应用到自己的项目开发中，学习理解代码的含义是必不可少的。这里我们将以 **SHT40** 传感器的代码为例，解释代码实现的逻辑。

在程序的开头，我们需要准备连接 Helium 所需的必要三元组信息，并设置 Wio-E5 的频段。

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
选择您的频段。
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */
 
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

接下来，定义了一个 `data_decord()` 函数。该函数将传感器值转换为可以被 Helium 解码器解析并符合 LoRaWAN® 协议的数据帧，并将其存储在数组 `data[]` 中。

通常，为了防止数据溢出，我们需要考虑传感器可能读取的最大值和最小值，并将其拆分为不会溢出的十六进制数。

```cpp
void data_decord(int val_1, int val_2, uint8_t data[4])
{
  int val[] = {val_1, val_2};

  for(int i = 0, j = 0; i < 2; i++, j += 2)
  {
    if(val[i] < 0)
    {
      val[i] = ~val[i] + 1;
      data[j] = val[i] >> 8 | 0x80;
      data[j+1] = val[i] & 0xFF;
    }
    else
    {
      data[j] = val[i] >> 8 & 0xFF;
      data[j+1] = val[i] & 0xFF;
    }
  }
}
```

对于 SHT40 传感器，它会有两个数据，一个是温度数据，一个是湿度数据，并且存在正负值，因此需要处理负数，同时还需要处理小数位。

```cpp
int_temp = temperature*100;
int_humi = humidity*100;
```

下一步是初始化 SHT40 和 Wio-E5 的初始设置。这些操作都将在 `setup()` 函数中执行。

```cpp
lorae5.begin(DSKLORAE5_SWSERIAL_WIO_P2)
```

在初始化代码中，`DSKLORAE5_SWSERIAL_WIO_P2` 表示 Wio Terminal **右侧**的 Grove 接口，而 `DSKLORAE5_SWSERIAL_WIO_P1` 表示 **左侧**的 Grove 接口。对于没有外部传感器的其他项目，你也可以使用 `DSKLORAE5_SEARCH_WIO`，它会自动搜索 Wio-E5 所连接的 Grove 接口。

```cpp
lorae5.send_sync(              // 发送传感器数据
        8,                     // LoRaWan 端口
        data,                  // 数据数组
        sizeof(data),          // 数据大小
        false,                 // 不需要确认
        7,                     // 扩频因子
        14                     // 发射功率（单位：dBm）
       ) 
```

`send_sync()` 函数的重要作用是通过 LoRaWAN® 发送传感器数据。第一个参数表示发送数据的通道号，第二个参数表示发送的数据内容，第三个参数表示发送数据的长度。通常，我们只需要关注前三个参数的内容。

```cpp
delay(15000);
```

程序末尾的延迟决定了发送数据的频率。我们不建议发送频率低于 10 秒，因为如此高的频率可能导致 Wio-E5 工作异常，并可能被 Helium 识别为异常设备而被屏蔽。

要了解更多关于 Grove - Wio-E5 的代码和功能，请参考 [GitHub 仓库链接](https://github.com/limengdu/Disk91_LoRaE5)。特别感谢 [**Paul Pinault (disk91)**](https://github.com/disk91) 为 Grove - Wio-E5 编写的库。

以上部分是关于如何使用设备连接到 Helium 并接收数据的逐步指南。然而，从实际角度来看，目前发送到 Helium 的数据并不易于人类阅读。如果你需要数据可视化，可以参考以下步骤完成将 Helium 集成到 Microsoft Azure IoT 中心的教程，这将引导你以图形化方式显示数据。

<div>
  <table align="center">
    <tbody><tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/azure.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Helium 集成到 Azure IoT 中心</strong><br /><br />本节介绍如何配置 Microsoft Azure 并与 Helium 集成，将数据上传到 Microsoft Azure 平台。<br /><br /><a href="https://wiki.seeedstudio.com/cn/Integrate-into-Azure-IoT-Hub">开始学习 &gt;</a></td>
      </tr>
    </tbody></table>
  除此之外，你还可以根据需求选择更多平台。
  <table align="center">
    <tbody><tr>
        <td colSpan={2} bgcolor="8FBC8F"><b>云平台部分</b></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/Google-Sheets.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Helium 集成到 Google Sheets</strong><br /><br />本节介绍如何在 Helium 集成中使用 Google 表单，并通过 Google 表单存储传感器数据。<br /><br /><a href="https://wiki.seeedstudio.com/cn/Configuring-Web-APP-Visualization">跳转到章节 &gt;</a></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/AWS.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Helium 集成到 AWS IoT Core</strong><br /><br />本节介绍如何通过免费的 Web APP 集成可视化 Microsoft Azure 接收到的数据信息。<br /><br /><a href="https://wiki.seeedstudio.com/cn/Configuring-Web-APP-Visualization">跳转到章节 &gt;</a></td>
      </tr>
    </tbody></table>
</div>

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

## 声明

- LoRa® 标志是 Semtech Corporation 或其子公司拥有的商标。
- LoRaWAN® 是根据 LoRa Alliance® 授权使用的标志。