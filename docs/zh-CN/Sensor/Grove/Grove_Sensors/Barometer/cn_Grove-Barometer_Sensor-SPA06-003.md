---
description: Grove - 气压传感器 (SPA06-003)
title: Grove - 气压传感器 (SPA06-003)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/show.webp
slug: /cn/grove_barometer_sensor_spa06_003
last_update:
  date: 05/13/2025
  author: robben
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/SPA06-003.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


## 描述

**Grove - 温度和气压传感器 (SPA06-003)** 是一款高精度、低功耗的环境传感器，可测量温度和气压。它支持 I2C 和 SPI 通信，并提供 SPA06-003 Arduino 库。

:::note

由于传感器对环境条件非常敏感，**请勿用手指触摸传感器**。
:::

## 特性

-   **宽测量范围：** 气压测量范围为 300hPa~1100hPa，温度测量范围为 -40℃~+85℃。
-   **高精度：** 气压测量的绝对精度为 ±0.3 hPa，温度测量的精度为 ±1 ℃。
-   **长待机时间：** 使用 FIFO 允许主处理器在读取之间保持睡眠模式，从而降低整体系统功耗，实现最低 0.5 μA 的待机电流。
-   **Grove 接口：** 配备 [Grove 4 针连接器，确保“即插即用”](https://wiki.seeedstudio.com/cn/Grove_System/)体验，可连接 Arduino、Raspberry Pi、Micro:bit 等主流硬件平台。

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。
:::

## 规格

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>参数</th>
      <th>描述</th>
    </tr>
    <tr>
      <td>供电电压</td>
      <td>3.3V</td>
    </tr>
    <tr>
      <td>接口</td>
      <td>I2C 和 SPI</td>
    </tr>
    <tr>
      <td>I2C 地址</td>
  	  <td>0x77 (默认)<br />0x76</td>
    </tr>
    <tr>
      <th colspan="2">气压测量</th>
    </tr>
    <tr>
      <td>范围</td>
      <td>300~1100 hPa</td>
    </tr>
    <tr>
      <td>绝对精度</td>
      <td>±0.3 hPa</td>
    </tr>
    <tr>
      <th colspan="2">温度测量</th>
    </tr>
    <tr>
      <td>范围</td>
      <td>-40℃ 至 +85℃</td>
    </tr>
    <tr>
      <td>精度</td>
      <td>±1℃</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td>40mm x 20mm x 6.5mm</td>
    </tr>
  </table>
</div>




### **BMP280 vs. BME280 vs. DPS310 vs. SPA06-003**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>项目</th>
      <th>Grove-BMP280</th>
      <th>Grove-BME280</th>
      <th>Grove-DPS310</th>
      <th>Grove-SPA06-003</th>
    </tr>
    <tr>
      <td>气压范围</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1200 hPa</td>
      <td>300 ~ 1100 hPa</td>
    </tr>
    <tr>
      <td>温度范围</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 °C</td>
      <td>-40 ~ 85 °C</td>
    </tr>
    <tr>
      <td>气压精度</td>
      <td>-</td>
      <td>-</td>
      <td>± 0.002 hPa (或 ±0.02 m)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>气压绝对精度</td>
      <td>± 1 hPa (或 ±8 m)</td>
      <td>± 1 hPa (或 ±8 m)</td>
      <td>± 1 hPa (或 ±8 m)</td>
      <td>± 0.3 hPa</td>
    </tr>
    <tr>
      <td>气压相对精度</td>
      <td>± 0.12 hPa</td>
      <td>± 0.12 hPa</td>
      <td>± 0.06 hPa (或 ±0.5 m)</td>
      <td>± 0.03 hPa (或 ±0.25 m)</td>
    </tr>
    <tr>
      <td>气压分辨率</td>
      <td>0.18 Pa</td>
      <td>0.18 Pa</td>
      <td>0.06 Pa</td>
      <td>0.06 Pa</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td>-</td>
      <td>0 ~ 100%</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>通信</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
    </tr>
    <tr>
      <td>价格</td>
      <td>\$9.8</td>
      <td>\$18.7</td>
      <td>\$7.5</td>
      <td>\$4.5</td>
    </tr>
  </table>
</div>



### **部件清单**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>项目</th>
      <th>数量</th>
    </tr>
    <tr>
      <td>Grove 温度和气压传感器 (SPA06-003)</td>
      <td>×1</td>
    </tr>
    <tr>
      <td>Grove - 20cm 电缆</td>
      <td>×1</td>
    </tr>
  </table>
</div>

## 应用

- 气象站和气象传感
- 测量温度、气压和海拔

## 入门指南

### 指示图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/Grove-Barometer_Sensor-SPA06-003-Components.png" style={{width:800, height:'auto'}}/></div>

- **SPI 焊接点**。
- **接口总线选择焊接点**，选择 I<sup>2</sup>C 总线时，通过焊接连接两个焊接点（默认已连接）；选择 SPI 总线时，用锋利的刀或电烙铁切断两个焊接点。
- **从板地址选择焊接点**，用于选择从板地址以避免地址冲突。

:::提示

- 如果选择了 I2C 总线，从板的默认地址是 0x77（右侧两个焊接点已连接）。如果需要使用地址 0x76，仅连接左侧两个焊接点（断开右侧两个焊接点）。
- 可以使用锋利的刀轻松断开焊接点。
- 如果选择了 SPI 总线，从板的默认地址是 0x77（右侧两个焊接点已连接）。如果需要使用地址 0x76，请断开所有三个焊接点。

:::

### 硬件

**准备以下物品：**

- *使用 Arduino*

| Seeeduino V4.2                                               | 基础扩展板                                                  | Grove-气压传感器 SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" alt="pir" width="350" height="auto" /></p> |
| [立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) | [立即购买](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

- *将 Grove 与 Arduino 连接*

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_arduino.png" /></div>

- *使用 XIAO ESP32 系列*

| Seeed Studio Grove 基板用于 XIAO                             | XIAO ESP32-S3                                                | Grove-气压传感器 SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div> | <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div> | <div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" /></div> |
| [立即购买](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) | [立即购买](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) | [立即购买](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

- _将 Grove 与 ESP32 系列连接_

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_esp32.png" /></div>

两种不同的组合，但使用相同的代码。

:::提示

在产品工作时，请勿触碰、摇晃或让其处于振动状态。这会导致干扰并影响数据采集的准确性。

:::

此连接表适用于所有支持 I2C 的开发板。

<div className="table-center" style={{ textAlign: 'center' }}>
  <table style={{ borderCollapse: 'collapse', margin: 'auto' }} border="1" cellPadding="6">
    <thead>
      <tr>
        <th>开发板</th>
        <th>Grove-气压传感器 SPA06-003</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3.3V</td>
        <td>VCC</td>
      </tr>
      <tr>
        <td>GND</td>
        <td>GND</td>
      </tr>
      <tr>
        <td>SDA</td>
        <td>SDA</td>
      </tr>
      <tr>
        <td>SCL</td>
        <td>SCL</td>
      </tr>
    </tbody>
  </table>
</div>

### 软件

**步骤 1.** 从 [Github](https://github.com/Seeed-Studio/Seeed_Arduino_SPA06) 下载库文件。
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SPA06" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 参考 [如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库文件。

**步骤 3.** 创建一个新的 Arduino 草图，并将以下代码粘贴到其中，或者通过路径直接打开代码：File -> Example -> Seeed Arduino SPA06 -> Example1_BasicRead

**步骤 4.** 上传代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

**步骤 5.** 打开串口监视器以接收传感器的数据，包括温度、大气压值和海拔高度。

:::success
如果一切正常，结果将如下图所示显示在 **串口** 上。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/outcome.png" style={{width:400, height:'auto'}}/></div>

### 功能

**以下是代码：**

```cpp
/*
 * 作者: Kennan / Kenneract
 * GitHub: https://github.com/Kenneract/SPL07-003-Arduino-Library
 * 创建日期: 2025年3月15日
 * 更新日期: 2025年4月14日, V1.0.0
 * 目的: SPL07-003 传感器库的示例用法。连接到传感器，配置测量和过采样率，
 *       将 SPL07-003 设置为连续采样模式，然后将压力/温度测量值打印到串口监视器。
 */

#include <Wire.h>
#include "SPL07-003.h"

// 定义 SPL07-006 I2C 地址
#define SPL07_ADDR SPL07_ADDR_DEF // 默认 I2C 地址 (SDO=高)
// #define SPL07_ADDR SPL07_ADDR_ALT // 备用 I2C 地址 (SDO=低)

// 创建 SPL07-003 传感器实例
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //用于 STM32F103C8Tx

// 启动时运行
void setup() {

  // 初始化串口
  Serial.begin(115200);

  // 配置并启动 I2C
  //Wire.setSDA(PB7); //用于 STM32F103C8Tx
  //Wire.setSCL(PB6); //用于 STM32F103C8Tx
  Wire.begin();

  // 连接到 SPL07-003
  if (spl.begin(SPL07_ADDR) == false) {
    Serial.println("初始化 SPL07-003 出错 :(");
    while (1) {}
  }//if
  Serial.println("已连接到 SPL07-003! :)");

  // 设置压力和温度采样配置
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // 将 SPL07-003 设置为连续测量模式
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// 持续运行
void loop() {

  // 等待可用的读取数据
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // 读取最新值
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // 打印到串口
    Serial.print("压力: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, 温度: ");
    Serial.print(temp, 3);
    Serial.print(" C, 海拔: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()
```

以下是上述示例代码中使用的函数，并对每个函数的作用进行了说明：
```cpp
Serial.begin(115200)
```
初始化 ESP32 和计算机之间的串行通信，波特率为 115200。这允许调试消息打印到串口监视器。
```cpp
Wire.begin()
```
使用默认引脚（大多数平台上为 SDA 和 SCL）初始化 I²C 总线。这是在与 SPL07-003 传感器通信之前所需的操作。
```cpp
spl.begin(SPL07_ADDR)
```
使用指定的 I²C 地址初始化 SPL07-003 传感器。如果在总线上未找到传感器，则返回 false。

- 参数：SPL07_ADDR – I²C 地址（0x76 或 0x77）

- 返回值：成功时返回 true，未检测到传感器时返回 false

```cpp
spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES)
```
配置压力传感器：

- 输出数据速率为 4 Hz
- 32 次采样平均以减少噪声

更高的采样次数可以提高精度，但会增加响应时间。
```cpp
spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE)
```
配置温度传感器：

- 更新速率为 4 Hz
- 1 次采样平均（响应更快，平滑度较低）
```cpp
spl.setMode(SPL07_CONT_PRES_TEMP)
```
将 SPL07-003 设置为连续压力和温度测量模式，因此数据会自动更新，无需手动触发。
```cpp
spl.pressureAvailable(), spl.temperatureAvailable()
```
检查传感器是否有新的压力或温度测量值可用。当有新数据准备好读取时，这些函数返回 true。
```cpp
spl.readPressure()
```
从传感器读取最新的压力值，单位为帕斯卡（Pa）。
```cpp
spl.readTemperature()
```
读取当前温度，单位为摄氏度（°C）。
```cpp
spl.calcAltitude()
```
基于当前压力读数，使用标准大气模型估算海拔高度（单位为米）。
此功能在无人机或气象站的气压高度估算等应用中非常有用。

## 资源

- **[KiCAD]** [Grove-气压传感器 SPA06-003 原理图和PCB](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/SCH&PCB.zip)
- **[数据手册]** [SPA06-003 数据手册](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/Datasheet.PDF)
- **[参考资料]** [Arduino 的 I<sup>2</sup>C 使用指南](https://www.arduino.cc/en/Reference/Wire)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>