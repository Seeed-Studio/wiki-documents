---
description: 连接到 TTN
title: 连接到 TTN
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Connecting-to-TTN
last_update:
  date: 2023/1/13
  author: shuxu hu
---
# 连接到 TTN

在本章节中，我们将介绍如何基本使用 TTN 平台，以及如何通过 TTN 平台传输传感器数据。

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强度、CO2、EC 传感器以及一款 8 合 1 气象站。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

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
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody>
</table>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/27.png" /></div>

如果您对 TTN 完全没有经验，我们建议您先阅读有关 TTN 控制台的内容。

<table align="center">
  <tbody><tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>TTN 介绍</strong><br /><br />在本章节中，我们将介绍我们用来初步了解 TTN 控制台的控制方法。<br /><br /><a href="https://wiki.seeedstudio.com/cn/TTN-Introduction">开始了解 &gt;</a></td>
    </tr>
  </tbody></table>

:::note
在开始本节之前，请确保您的部署环境周围有 TTN LoRaWAN® 覆盖，否则您将无法通过 LoRa® 将设备添加到 TTN。更多详情，请阅读 [TTN LoRaWAN®](https://www.thethingsnetwork.org/docs/lorawan/)。
:::

## <span id="jump1">将 Grove - Wio-E5 设备添加到 TTN 控制台</span>

为了通过 TTN 转发传感器数据，第一步我们需要将 Grove - Wio-E5 添加到 TTN 应用程序中，以建立本地设备与 TTN 平台之间的连接。

**步骤 1.** 获取 Grove - Wio-E5 的 DevEUI 和 AppEUI。

请在 [预先批准的内容](https://wiki.seeedstudio.com/cn/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation) 中下载 Arduino 和 Wio Terminal 的必要环境。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

点击 [这里](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/example/Get-Grove-LoRa-E5-AppEUI-DevEUI/Get-Grove-LoRa-E5-AppEUI-DevEUI.ino) 下载获取 Grove - Wio-E5 的 DevEUI 和 AppEUI 的代码，并将其上传到 Wio Terminal。

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // AT 命令和调试信息的输出位置

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // 打开串口监视器以开始，或等待 3 秒

  // 初始化库，搜索可用的 Wio-E5 端口
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 初始化失败");
    while(1); 
  }
}

void loop() {
  //Grove - Wio-E5 支持查询 DevEUI 和 AppEUI，但不支持查询 AppKey。
  lorae5.sendATCommand("AT+ID=DevEui","","+ID: ERROR","",1000,false,NULL);
  lorae5.sendATCommand("AT+ID=AppEUI","","+ID: ERROR","",1000,false,NULL);
  delay(30000);
}
```

打开 Arduino IDE 的串口监视器，将波特率设置为 **9600** 并观察设置。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/95.png" /></div>

请记录 **DevEUI** 和 **AppEUI** 后的 16 位数字，这将在 TTN 添加设备时使用。

**步骤 2.** 添加一个应用程序

点击右上角的 **Add application** 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/31.png" /></div>

填写带有星号的内容，并根据您的偏好填写其他内容。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/32.png" /></div>

然后点击 **Create Application**。

**步骤 3.** 添加设备

进入左侧菜单中的 **End devices**，然后点击 **+ Add end device** 以进入终端设备注册页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/33.png" /></div>

要在设备库中使用 Grove - Wio-E5，请确保选择了 **From the LoRaWAN® Device Repository** 选项卡。

然后，请点击以下选项进行选择。

- **Brand** -- SenseCAP
- **Model** -- LoRa-E5 STM32WLE5JC Module
- **Hardware Ver.** -- 1.0
- **Firmware Ver.** -- 1.0
- **Profile (Region)** -- 选择适合您所在地区的频率计划。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/29.png" /></div>

:::note
选择适合您所在地区的频率计划。您的设备和网关必须使用相同的频率计划才能通信。不同的地区使用不同的[频率计划](https://www.thethingsindustries.com/docs/reference/frequency-plans/)，例如欧洲使用 863-870 MHz，北美使用 902-928 MHz 等。
:::
这里，我将选择我使用的 TTN 网关频段 EU868。

然后，请将刚刚获得的 **DevEUI** 和 **AppEUI** 填入 TTN 的相应字段。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/35.png" /></div>

至于 **AppKey**，点击 **Generate** 按钮，然后使用以下代码将其上传到 Wio Terminal 以启用 Grove - Wio-E5。

请注意，将 TTN 生成的 32 位 AppKey 替换为代码中的内容。

```c
lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
```

以下是完整代码。

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // AT 命令和调试信息的输出位置

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // 打开串口监视器以开始，或等待 3 秒

  // 初始化库，搜索可用的 Wio-E5 端口
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 初始化失败");
    while(1); 
  }
}

void loop() {
  //Grove - Wio-E5 支持查询 DevEUI 和 AppEUI，但不支持查询 AppKey。
  lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
  delay(30000);
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/96.png" /></div>

至此，Grove - Wio-E5 和 TTN 的三个代码已配置完成。只需点击 **Register end device** 即可。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/37.png" /></div>

## 为不同传感器编写解码器功能

在前面的章节中，我们已经指导您如何使用 Wio Terminal 读取套件中各个传感器的值。为了通过 Grove - Wio-E5 将传感器值发送到 TTN，需要使用 AT 指令来完成。发送的数据会被 TTN 接收，并需要解码后才能成为我们可以读取的真实数据。这就是我们编写解码器的原因。

此外，由于发送的数据格式不统一，传感器可能包含整数、小数、正数和负数等数据，因此每个传感器所需的解码器代码是不同的。

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

在前一章节 [Wio Terminal 光传感器](https://wiki.seeedstudio.com/cn/K1100-Light-Sensor-Grove-LoRa-E5/) 中，我们使用了一个整数变量 `light` 来存储光传感器读取的光值，并通过 **send_sync()** 函数发送该值。因此，我们在 TTN 中编写的解码器的目标是能够解析这个整数数据。

其解码器的配置代码如下。请将以下代码粘贴到 TTN 的代码部分中。点击 **Save Function** 保存此解码器。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

请依次点击设备的 **Payload formatters** --> **Uplink** --> **Custom Javascript formatter**。

然后将上述解码器的代码粘贴到 **Formatter code** 中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/38.png" /></div>

我们可以在右侧的 **Test** 窗口中输入 8 位光传感器的数据，以检查解码器是否正确解析。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/39.png" /></div>

### 选项 2. Wio Terminal IMU 传感器数据解码器

在前一章节 [Wio Terminal IMU 传感器](https://wiki.seeedstudio.com/cn/K1100-IMU-Sensor-Grove-LoRa-E5/) 中，我们使用浮点数 `x_values`、`y_values`、`z_values` 来存储 IMU 返回的三轴数据，并将这三组数据乘以 100 转换为整数后一起发送。

特别需要注意的是，这些数据可能为正数或负数，因此我们还需要解析这些数据并将其还原为浮点数。

其解码器的配置代码如下。请将以下代码粘贴到 TTN 的代码部分中。点击 **Save changes** 保存此解码器。

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

我们可以在右侧的 **Test** 窗口中输入 48 位 IMU 传感器的数据，以检查解码器是否正确解析。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/97.png" /></div>

### 选项 3. Grove 土壤湿度传感器数据解码器

在前一章节 [Grove 土壤湿度传感器](https://wiki.seeedstudio.com/cn/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/) 中，我们使用了一个整数变量 `sensorValue` 来存储土壤湿度传感器读取的湿度值，并通过 **send_sync()** 函数发送该值。因此，我们在 TTN 中编写的解码器的目标是能够解析这个整数数据。

其解码器的配置代码如下。请将以下代码粘贴到 TTN 的代码部分中。点击 **Save changes** 保存此解码器。

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

我们可以在右侧的 **Test** 窗口中输入 8 位土壤湿度传感器的数据，以检查解码器是否正确解析。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/23.png" /></div>

### 选项 4. Grove VOC 和 eCO2 气体传感器 (SGP30) 数据解码器

在上一节 [Grove VOC 和 eCO2 气体传感器 (SGP30)](https://wiki.seeedstudio.com/cn/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/) 中，我们使用整数变量 `tvoc_ppb` 和 `co2_eq_ppm` 来存储 VOC 和 eCO2 的值。

其解码器的配置代码如下。请将以下代码粘贴到 TTN 的代码部分中。点击 **Save changes** 保存此解码器。

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

我们可以在右侧的 **Test** 中输入 16 位 SGP30 的数据，以检查解码器是否正确解析。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/24.png" /></div>

### 选项 5. Grove 温湿度传感器 (SHT40) 数据解码器

在上一节 [Grove 温湿度传感器 (SHT40)](https://wiki.seeedstudio.com/cn/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/) 中，我们使用浮点变量 `temperature` 和 `humidity` 来存储温度和湿度值，并在将其放大一百倍后以整数形式发送。

其解码器的配置代码如下。请将以下代码粘贴到 TTN 的代码部分中。点击 **Save changes** 保存此解码器。

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

我们可以在右侧的 **Test** 中输入 32 位 SHT40 的数据，以检查解码器是否正确解析。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/98.png" /></div>

### 选项 6. Grove Vision AI 模块数据解码器

在上一节 [Grove Vision AI 模块](https://wiki.seeedstudio.com/cn/K1100-Vision-AI-Module-Grove-LoRa-E5/) 中，我们使用整数变量 `model` 和 `confi` 来存储识别的模型类型及其置信度。

其解码器的配置代码如下。请将以下代码粘贴到 TTN 的代码部分中。点击 **Save changes** 保存此解码器。

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

我们可以在右侧的 **Test** 中输入 16 位 Vision AI 的数据，以检查解码器是否正确解析。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/26.png" /></div>

## 上传代码并发送数据到 TTN

在不同的传感器页面中，我们提供了详细的代码用于上传数据。您也可以在下方列表中找到您想使用的传感器代码。

:::note
在使用本节提供的代码之前，请注意代码中的设备 EUI、应用 EUI 和应用密钥需与您在 TTN 中添加的设备信息保持一致。同时，请检查 Grove - Wio-E5 配置的频段是否与您所在地区的网关频段或 TTN 的频段一致。如果不一致，可能会导致网络接入失败。

设置 LoRaWAN® 频段的代码如下，默认设置为 EU868 频段。（EU868 频段通常用于欧洲地区。）<br />
    `#define Frequency DSKLORAE5_ZONE_EU868`<br />
US915 频段（US915 频段通常用于北美地区。）<br />
    `#define Frequency DSKLORAE5_ZONE_US915`<br />
AU915 频段（AU915 频段通常用于澳大利亚地区。）<br />
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::

<table align="center">
  <tbody>
    <tr>
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
  </tbody>
</table>

上述用于发送传感器数据的代码可以直接从 Arduino IDE 上传到 Wio Terminal 并运行。此时，请打开串口监视器并将波特率调整为 9600，以实时观察数据传输。

更多详情，请返回参考目录中关于单个传感器使用的章节。

### 实时数据

在 **Application** 标签中，我们可以点击 **Live data** 查看 TTN 接收到的数据信息。

我们可以直接看到解码器解码后的数据信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/40.png" /></div>

### 源代码分析

如果您想将本教程的内容应用到自己的项目开发中，学习理解代码的含义是必不可少的。这里我们将以 **SHT40** 传感器的代码为例，解释代码实现的逻辑。

在程序的开头，我们需要准备连接到 TTN 所需的三元组信息，并设置 Wio-E5 的频段。

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
选择您的频段：
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

接下来，定义了一个 `data_decord()` 函数。该函数将传感器值转换为可以被 TTN 解码器解析并符合 LoRaWAN® 协议的数据帧，并将其存储在数组 `data[]` 中。

通常，为了防止数据溢出，我们需要考虑传感器可能读取的最大值和最小值，并将其分解为不会溢出的十六进制数。

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

对于 SHT40 传感器，它会有两个数据，一个是温度数据，一个是湿度数据，并且可能有正负值，因此需要处理负数，同时还需要处理小数部分。

```cpp
int_temp = temperature*100;
int_humi = humidity*100;
```

接下来的步骤是 SHT40 的初始化以及 Wio-E5 的初始设置。这些都将在 `setup()` 函数中执行。

```cpp
lorae5.begin(DSKLORAE5_SWSERIAL_WIO_P2)
```

在初始化代码中，`DSKLORAE5_SWSERIAL_WIO_P2` 表示 Wio Terminal **右侧**的 Grove 接口，而 `DSKLORAE5_SWSERIAL_WIO_P1` 表示 **左侧**的 Grove 接口。对于没有外部传感器的其他项目，您也可以使用 `DSKLORAE5_SEARCH_WIO`，它会自动搜索 Wio-E5 所连接的 Grove 接口。

```cpp
lorae5.send_sync(              // 发送传感器值
        8,                     // LoRaWan 端口
        data,                  // 数据数组
        sizeof(data),          // 数据大小
        false,                 // 不需要确认
        7,                     // 扩频因子
        14                     // 发射功率（单位：dBm）
       ) 
```

`send_sync()` 函数的重要作用是通过 LoRaWAN® 发送传感器数据。第一个参数表示发送数据的通道号，第二个参数表示发送数据的内容，第三个参数表示发送数据的长度。通常情况下，我们只需要关注前三个参数的内容。

```cpp
delay(15000);
```

程序末尾的延迟决定了发送数据的频率。我们不建议以低于 10 秒的频率发送数据，因为如此高的发送频率可能会导致 Wio-E5 工作异常，并可能被 TTN 识别为异常设备并因高频率而被屏蔽。

要了解更多关于 Grove - Wio-E5 的代码和功能，请参考 [GitHub 仓库链接](https://github.com/limengdu/Disk91_LoRaE5)。特别感谢 [**Paul Pinault (disk91)**](https://github.com/disk91) 为 Grove - Wio-E5 编写的库。

敬请期待更多内容！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® 商标是 Semtech Corporation 或其子公司的商标。
- LoRaWAN® 是根据 LoRa Alliance® 授权使用的商标。