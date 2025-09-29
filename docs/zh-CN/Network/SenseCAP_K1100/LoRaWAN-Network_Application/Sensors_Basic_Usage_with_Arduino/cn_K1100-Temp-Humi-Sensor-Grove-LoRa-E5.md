---
description: Grove 温湿度传感器 (SHT40)
title: Grove 温湿度传感器 (SHT40)
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100-Temp-Humi-Sensor-Grove-LoRa-E5
last_update:
  date: 2023/1/13
  author: shuxu hu
---
# Grove 温湿度传感器 (SHT40)

在本节中，我们将详细介绍传感器的工作原理、如何使用 Wio Terminal 获取传感器数据以及如何通过 Wio Terminal 和 Grove - Wio-E5 发送数据。

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 升级为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供使用 SenseCAP 系列坚固耐用的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、CO2、电导率以及 8 合 1 气象站的传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强</strong></a></td>
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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody></table>

## 传感器的工作原理

SHT40 温度的测量采用热电偶方法。热电偶由两种不同材料的金属线组成。一端将两根金属线焊接在一起，形成工作端，放置在需要测量的温度处。另一端称为自由端，与主控连接形成闭合回路。当工作端和自由端的温度不同，回路中会出现热电势，通过电路转换将该电压变化传送到单片机，并转化为机器可以识别的信号。

SHT40 湿度的测量使用一种聚胺或醋酸聚合物薄膜（高分级化合物），该薄膜沉积在两个导电电极上。当薄膜吸收或失去水分时，会改变两个电极之间的介电常数，从而导致电容容量的变化。电容的变化可以通过外部测量电路捕获并转换，最终以易于识别的信号显示在输出端。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/165.png" /></div>

有关 Grove 温湿度传感器的更多使用信息，请参考 [这里](https://wiki.seeedstudio.com/cn/Grove-SHT4x/)。

## 所需材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={160} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove 温湿度传感器 (SHT40)</td>
    </tr>
  </tbody></table>

## 初步准备

### 连接

在本例程中，我们需要借助 Grove - Wio-E5 连接到附近的 LoRa® 网关。我们需要将 Wio Terminal 右侧的 Grove 端口配置为软串口以接收 AT 指令。根据下图，将 Grove 温湿度传感器连接到左侧端口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/SHT40.jpg" /></div>

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

如果无法上传代码，通常是因为 Arduino IDE 无法将 Wio Terminal 切换到引导加载模式（可能是因为 MCU 停止运行或你的程序正在处理 USB）。解决方法是手动将 Wio Terminal 切换到引导加载模式。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**步骤 5.** 下载 Grove - Wio-E5 库

访问 [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) 仓库，并将整个仓库下载到本地。

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**步骤 6.** 将库添加到 Arduino IDE

现在，可以将 3 轴数字加速度计库安装到 Arduino IDE。打开 Arduino IDE，点击 `sketch -> Include Library -> Add .ZIP Library`，选择刚刚下载的 `Disk91_LoRaE5` 文件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## 获取 Grove 温湿度传感器 (SHT40) 的值

**步骤 1.** 下载 Grove 温湿度传感器代码库

访问 [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x) 仓库，并将整个仓库下载到本地。

<div>
  <p style={{}}><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank" /></p><div align="center"><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

访问 [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core) 仓库，并将整个仓库下载到本地。

<div>
  <p style={{}}><a href="https://github.com/Sensirion/arduino-core" target="_blank" /></p><div align="center"><a href="https://github.com/Sensirion/arduino-core" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**步骤 2.** 将库添加到 Arduino IDE

现在可以将 Grove 温湿度传感器库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch -> Include Library -> Add .ZIP Library`，然后选择刚刚下载的 `arduino-i2c-sht4x` 文件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**步骤 3.** 从 SHT40 获取温度和湿度数据

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SHT40-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SHT40-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

此仓库展示了如何获取温度和湿度数据。在代码中，我们使用 `measureHighPrecision()` 函数来获取温度和湿度信息，返回值为正数且为浮点型。

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

打开 Arduino IDE 的串口监视器，选择波特率为 115200，并观察结果。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" /></div>

## 通过 Grove - Wio-E5 发送数据

我们将前面 Grove - Wio-E5 的代码与 LoRa® 网络连接结合起来。通过 AT 指令，可以将 Grove 温湿度传感器的值发送到 LoRa® 网络。

在上一节的代码中，我们知道温度和湿度的值通常是由两个整数和两个小数组成的，且均为正数的浮点型。

由于发送数据的限制，我们需要解决在发送端将浮点数转换为整数的问题，以确保发送的数据为整数，因此我们将所有的温度和湿度值乘以 100。

通过这种方式，我们确定了通过 AT 指令发送的数据的内容、大小和格式。我们可以设置一个足够大的数组，将需要发送的字符串存储到数组中，最后使用 **send_sync()** 函数将数组发送出去。

上述思路的伪代码大致如下：

```c
  ......
  error = sht4x.measureHighPrecision(temperature, humidity);

  int_temp = temperature*100;
  int_humi = humidity*100;
  
  static uint8_t data[4] = { 0x00 };  // 使用 data[] 存储传感器的值

  data_decord(int_temp, int_humi, data);
  
  if ( lorae5.send_sync(              // 发送传感器的值
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

接下来我们需要做的是使用 `begin()` 函数初始化 Grove - Wio-E5，并使用 `setup()` 函数配置 Grove - Wio-E5 的三元组信息。当我们使用 `send_sync()` 函数发送数据消息时，将尝试同时加入 LoRaWAN® 网络，一旦成功，数据将被发送，并返回信号强度、地址等信息。

完整的代码示例可以在 [这里](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data) 找到。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
我们不建议您现在上传代码查看结果，因为此时您尚未配置 Helium/TTN，会得到 "Join failed" 的结果。建议您在完成 [连接到 Helium](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/) 或 [连接到 TTN](https://wiki.seeedstudio.com/cn/Connecting-to-TTN/) 章节后再上传此代码，以完成完整的数据发送过程。
:::

在您体验并理解了 Grove 温湿度传感器的工作原理和数据格式后，请继续下一步教程，加入 LoRaWAN® 网络。

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Helium 部分</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Helium 简介</strong><br /><br />在本章节中，我们将介绍 Helium 控制台的操作，以便对 Helium 控制台有一个初步的印象。<br /><br /><a href="https://wiki.seeedstudio.com/cn/Helium-Introduction">跳转到章节 &gt;</a></td>
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
      <td align="left"><strong>TTN 简介</strong><br /><br />在本章节中，我们将介绍 TTN 控制台的操作，以便对 TTN 控制台有一个初步的印象。
        <br /><br /><a href="https://wiki.seeedstudio.com/cn/TTN-Introduction">跳转到章节 &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>连接到 TTN</strong><br /><br />本节描述如何配置 TTN，以便传感器数据能够成功上传并显示在 TTN 中。
        <br /><br /><a href="https://wiki.seeedstudio.com/cn/Connecting-to-TTN">跳转到章节 &gt;</a></td>
    </tr>
  </tbody></table>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

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