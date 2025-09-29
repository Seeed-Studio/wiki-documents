---
description: Grove - 高精度气压传感器 DPS310
title: Grove - 高精度气压传感器 DPS310
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310
last_update:
  date: 1/5/2023
  author: shuxu hu
---

Grove - 高精度气压传感器 (DPS310)

<!-- ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg" alt="pir" width={600} height="auto" /></p>

气压检测在环境传感或高度测量中非常有用。Grove 气压传感器基于英飞凌 DPS310，这是一款小型化的数字气压传感器，具有高精度。它可以测量 300 至 1200 hPa 的压力范围，精度为 ±0.002hPa，这意味着您最多可以检测到 ±2cm 的高度变化。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Y1.png"  height="48" width="300" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

## BMP280 vs. BME280 vs. DPS310

我们已经发布了 [Grove - 气压传感器 (BMP280)](https://wiki.seeedstudio.com/cn/Grove-Barometer_Sensor-BMP280/) 和 [Grove - 气压传感器 (BME280)](https://wiki.seeedstudio.com/cn/Grove-Barometer_Sensor-BME280/)，下面通过表格对比展示 Grove-DPS310 的强大性能。

| 项目 | Grove-BMP280 | Grove-BME280 | Grove-DPS310 |
|------|--------------|--------------|--------------|
| 压力范围    | 300 ~ 1100 hPa | 300 ~ 1100 hPa | 300 ~ 1200 hPa | 
| 温度范围 | -40 ~ 85 ℃  | -40 ~ 85 ℃   | -40 ~ 85 °C   |
| 压力精度 |  -  |  -  | ± 0.002 hPa (或 ±0.02 m) |
| 压力准确度（绝对值） | ± 1 hPa (或 ±8 m) |± 1 hPa (或 ±8 m) |± 1 hPa (或 ±8 m)|
| 压力准确度（相对值）| ± 0.12 hPa| ± 0.12 hPa| ± 0.06 hPa (或 ±0.5 m)|
| 压力分辨率| 0.18 Pa | 0.18 Pa | 0.06 Pa |
| 湿度|  -  | 0 ~ 100% |  -  |
| 通信方式 | I<sup>2</sup>C/SPI | I<sup>2</sup>C/SPI | I<sup>2</sup>C/SPI |

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|工作气压范围|300 至 1200hPa|
|精度|±0.002hPa|
|接口|I<sup>2</sup>C,SPI|
|I<sup>2</sup>C 地址|默认地址为 0x77，短路时地址为 0x76|

:::note

    当使用 SPI 模式通信时，请勿选择 I<sup>2</sup>C 地址为 0x76，否则 SPI 将无法正常读取数据（由于 I<sup>2</sup>C 和 SPI 共享引脚，I<sup>2</sup>C 地址为 0x76 等同于 MOSI 引脚接地）。
:::

## 特性

- 高压精度：± 0.002 hPa（或 ±0.02 m）
- 高压准确度：± 0.06 hPa（或 ±0.5 m）- 相对；± 1 hPa（或 ±8 m）- 绝对
- 宽范围：压力：300 – 1200 hPa；温度：-40 – 85 °C
- 易于使用：Grove IIC（带中断）/ SPI
- 低功耗

## 典型应用

- 室内导航（楼层检测，例如购物中心和停车场）
- 健康与运动（精确的海拔增益和垂直速度）
- 户外导航（提高 GPS 启动时间和精度，隧道中的惯性导航）
- 气象站（“微气象”和本地天气预报）
- 无人机（飞行稳定性和高度控制）

:::tip

    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" alt="pir" width={600} height="auto" /></p>

## 支持的平台

| Arduino | Raspberry Pi | BeagleBone | Wio | LinkIt ONE |
|---------|--------------|------------|-----|------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|

:::caution

    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

:::note

    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | 高精度气压传感器 |
|----------------|-------------|-------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)|

:::note

    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否合适，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - 高精度气压传感器 (DPS310) 连接到 Grove-Base Shield 的 **I<sup>2</sup>C** 端口。

- **步骤 2.** 将 Grove-Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到 PC。

#### 软件

:::note

    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 将以下代码复制到 Arduino IDE 并上传。

```cpp
#include <Dps310.h>

Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  Serial.begin(9600);
  while (!Serial);
  Dps310PressureSensor.begin(Wire);
  Serial.println("Init complete!");
}

void loop()
{
  float Detection_array[10];
  uint8_t oversampling = 7;
  int16_t ret;
  int i;
  int size = 10;
  int state1;
  int state2;
/* 在以下两个循环中，分别检测前后时间的压力状态。
   采样数量为 10。去除偏差较大的值，并计算平均值。*/
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state1 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
     ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
       if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state1 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  } 
 state1 = state1 / size;
 delay(100);


      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state2 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
      if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state2 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  }
  state2 = state2 / size;
  
 if (ret != 0)
   {
    Serial.print("FAIL! ret = ");
    Serial.println(ret);
   }
/* 计算气压差以判断是否摔倒 */
    else if (state2 - state1 > 4)
     {
      Serial.println("You fell down. Do you need help?");
      delay(5000);
     }
    else
      Serial.println("It's ok!");
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/
```

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 打开串口监视器。如果一切正常，当您模拟跌倒或将其掉落到地面时，它会告诉您是否需要帮助。

## 资源

- **[库文件]** [DPS310-压力传感器](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310.git)
- **[数据手册]** [DPS310-数据手册](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/DPS310-datasheet.pdf)
- **[压缩包]** [Grove-高精度气压传感器-(DPS310)](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />

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
