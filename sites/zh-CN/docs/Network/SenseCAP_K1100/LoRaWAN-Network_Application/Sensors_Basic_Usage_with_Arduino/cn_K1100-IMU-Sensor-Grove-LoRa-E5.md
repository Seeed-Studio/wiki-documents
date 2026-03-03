---
description: Wio Terminal IMU 传感器
title: Wio Terminal IMU 传感器
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100-IMU-Sensor-Grove-LoRa-E5
last_update:
  date: 1/12/2023
  author: shuxu hu
---
# Wio Terminal IMU 传感器

在本节中，我们将详细介绍传感器的工作原理、如何使用 Wio Terminal 获取传感器数据以及如何通过 Wio Terminal 和 Grove - Wio-E5 发送数据。

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型开发，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、CO2、电导率以及 8 合 1 气象站的传感器。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

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

## 传感器的工作原理

在本节中，我们需要学习如何使用内置于 Wio Terminal 的 IMU 传感器。

LIS3DHTR 加速度传感器是一种压电传感器，它将被测物体的加速度转换为感应单元电压的变化，然后通过转换电路将感应单元变化的值转换为电压值，接着对信号进行相应的放大和滤波处理，将模拟量处理为适合且稳定的输出信号，此时输出信号为电压值，最后通过 ADC 转换器将其转换为数字信号。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/137.png" /></div>

有关使用 IMU 传感器的更多信息，请参考[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-IMU-Overview/)。

## 所需材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
    </tr>
  </tbody></table>

## 初步准备

### 连接

在本例中，我们需要借助 Grove LoRa® E5 连接到附近的 LoRa® 网关。我们需要将 Wio Terminal 右侧的 Grove 端口配置为软串口以接收 AT 命令。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

:::note
为什么不使用左侧的 Grove 端口？
> 左侧的 Grove 接口支持 IIC，而我们大多数传感器使用 IIC 接口，因此保留它是更好的解决方案。
:::

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

点击 `Tools > Board > Board Manager`，然后在 Boards Manager 中搜索 **Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**步骤 4.** 选择你的开发板和端口

你需要在 `Tools > Board` 菜单中选择与你的 Arduino 对应的条目，选择 **Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

从 `Tools -> Port` 菜单中选择 Wio Terminal 开发板的串口设备。这通常是 COM3 或更高（COM1 和 COM2 通常保留给硬件串口）。要确认，可以断开 Wio Terminal 开发板并重新打开菜单；消失的条目应该是 Arduino 开发板。重新连接开发板并选择该串口。

:::tip
对于 Mac 用户，串口可能类似于 `/dev/cu.usbmodem141401`。

如果无法上传代码，通常是因为 Arduino IDE 无法将 Wio Terminal 切换到引导加载模式（可能是因为 MCU 停止运行或程序正在处理 USB）。解决方法是手动将 Wio Terminal 切换到引导加载模式。
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

## 获取 Wio Terminal 内置 IMU 传感器的值

**步骤 1.** 下载 IMU 代码库

访问 [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master) 仓库，并将整个仓库下载到本地。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**步骤 2.** 将库添加到 Arduino IDE

现在，可以将 3 轴数字加速度计库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch -> Include Library -> Add .ZIP Library`，然后选择刚刚下载的 `Seeed_Arduino_LIS3DHTR` 文件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**步骤 3.** 获取 IMU 传感器的 3 轴数据

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-IMU-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-IMU-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

此仓库展示了如何将 Wio Terminal 的内置 IMU 传感器作为一个组件使用。通过库中的 **getAccelerationX()**、**getAccelerationY()** 和 **getAccelerationZ()** 函数，可以直接获取 IMU 传感器的 X 轴、Y 轴和 Z 轴偏移值。这三个值可能是正数或负数的浮点数。

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;
 
void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);
 
  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // 数据输出速率
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // 量程设置为 2g
}
 
void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();
 
  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```

打开 Arduino IDE 的串口监视器，选择波特率为 115200，并观察结果。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/138.png" /></div>

## 通过 Grove - Wio-E5 发送数据

我们将结合之前的 Grove - Wio-E5 代码连接到 LoRa® 网络。通过 AT 命令，可以将 IMU 传感器的值发送到 LoRa® 网络。

从上一节获取 IMU 传感器值的代码中可以知道，IMU 传感器的值是三个独立的浮点数，可能为正或负，精确到小数点后两位。

由于发送数据的限制，我们首先需要解决发送端将浮点数转换为整数的问题，以确保发送的数据是整数，因此我们将三个轴的数据都乘以 100。

这样，我们确定了通过 AT 命令发送的数据内容、大小和格式。我们可以设置一个足够大的数组，将需要发送的字符串存储到数组中，最后使用 **send_sync()** 函数将数组发送出去。

上述思路的伪代码大致如下：

```c
  ......
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  int x = x_values*100;
  int y = y_values*100;
  int z = z_values*100;

  static uint8_t data[6] = { 0x00 };  // 使用 data[] 存储传感器的值

  data_decord(x, y, z, data);

  if ( lorae5.send_sync(              // 发送传感器值
        8,                            // LoRaWan 端口
        data,                         // 数据数组
        sizeof(data),                 // 数据大小
        false,                        // 不需要确认
        7,                            // 扩频因子
        14                            // 发射功率（dBm）
       ) 
  )
  ......
```

接下来需要做的是使用 `begin()` 函数初始化 Grove - Wio-E5，并在 `setup()` 函数中配置 Grove - Wio-E5 的三元组信息。当我们使用 `send_sync()` 函数发送数据消息时，将尝试加入 LoRaWAN® 网络，一旦成功，数据将被发送，并返回信号强度和地址等信息。

完整代码示例可以在 [这里](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data) 找到。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
我们不建议您现在上传代码查看结果，因为此时您尚未配置 Helium/TTN，将会得到 "Join failed" 的结果。建议您在完成 [连接到 Helium](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/) 或 [连接到 TTN](https://wiki.seeedstudio.com/cn/Connecting-to-TTN/) 章节后再上传此代码，以完成完整的数据发送过程。
:::

在您体验并理解了 IMU 传感器的工作原理和数据格式后，请继续下一步教程，加入 LoRaWAN®。

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

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

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