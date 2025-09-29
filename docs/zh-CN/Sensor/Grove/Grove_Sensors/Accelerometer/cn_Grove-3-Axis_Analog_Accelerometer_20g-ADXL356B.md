---
description: Grove - 三轴模拟加速度计 20g (ADXL356B)
title: Grove - 三轴模拟加速度计 20g (ADXL356B)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/101020637-preview.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/101020637-preview.png" alt="pir" width={600} height="auto" /></p>

您可以在我们的网站上找到各种[三轴加速度计](https://www.seeedstudio.com/tag/accelerometer.html)，以满足不同场景和需求。这次，我们为您带来了工业级、高稳定性、高精度和低功耗的 ADI ADXL 系列三轴加速度计。

Grove - 三轴模拟加速度计 ±20g (ADXL356B) 是一款模拟输出的 [MEMS](https://www.seeedstudio.com/tag/MEMS.html) 加速度计。该传感器具有两个可选的测量范围：±10g 和 ±20g。您只需进行少量校准工作即可获得相对准确的结果。板载 Grove 接口可以输出两个通道的模拟数据：一个用于 Z 轴，一个用于 X/Y 轴。您可以通过板载开关选择输出 X 轴或 Y 轴信号。此外，您还可以使用 4 针焊接孔同时输出 X/Y/Z 轴数据。该传感器的功耗极低，在正常工作模式下仅为 150 μA，而在待机模式下甚至只有 21 μA。您可以通过更改背面的焊盘连接来切换工作模式。

ADI ADXL 系列加速度计包括四款产品，可满足您不同的测量范围和输出需求：

| 产品 | 测量范围 | 输出接口 | 功耗 |
| ----- | ----- | ---- | ---- |
| [Grove - 三轴模拟加速度计 ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html) | ±10 / ±20g | 模拟 | 测量模式：150 μA / 待机模式：21 μA |
| [Grove - 三轴模拟加速度计 ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html) | ±10g / ±40g | 模拟 | 测量模式：150 μA / 待机模式：21 μA |
| [Grove - 三轴数字加速度计 ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html) | ±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g | 数字 I2C | 测量模式：200 μA |
| [Grove - 三轴数字加速度计 ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html) | ±200g | 数字 I2C | 测量模式：22 μA |

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)

## 特性

- 行业领先的低噪声、温度下的最小偏移漂移以及长期稳定性，支持精密应用并减少校准需求。
- 密封封装提供卓越的长期稳定性，0 g 偏移与温度（所有轴）：最大 0.75 mg/°C。
- ADXL356 在高频下的低噪声非常适合无线状态监测。
- 超低功耗：正常工作模式-150 μA，待机模式 21 μA  
- 低漂移，低噪声


## 规格

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|工作环境温度| -40 – 125℃|
|输出满量程范围 (FSR)|±10g / ±20g|
|X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> 的灵敏度 / (与 V1P8ANA 成比例)|±10 g@80 mv/g (典型值) / ±20 g@40 mv/g (典型值)|
|温度变化引起的灵敏度变化|±0.01%/°C  (TA = −40°C 至 +125°C)|
|0g 偏移 / (参考 V1P8ANA/2)|±125 mg(典型值)|
|输出接口|模拟|


## 应用

- 惯性测量单元 (IMUs)/高度和航向参考系统 (AHRSs)
- 平台稳定系统
- 结构健康监测
- 状态监测
- 地震成像
- 倾斜传感
- 机器人


## 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>





## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 使用 Arduino

**所需材料**

| Seeeduino V4.2 | Base Shield |Grove 三轴加速度计 ADXL356B |
|----------------|-------------|----------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 硬件连接

- **步骤 1.** 将 Grove - 三轴模拟加速度计 ±20g (ADXL356B) 连接到 Base Shield 的 **A0** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- 
![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/_DAS3070.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/img/_DAS3070.png" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed_ADXL_356.ino](https://github.com/linux-downey/Seeed_ADXL356/blob/master/Seeed_ADXL_356/Seeed_ADXL_356.ino)。

或者您可以直接复制以下代码：

```cpp
#include <Arduino.h>

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif

float cali_data_xy;
float cali_data_z;
int16_t scale;

#define MODUEL_RANGE           20

#define MODULE_VOL             1.8

#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250

float cali_buf_xy[CALI_BUF_LEN];
float cali_buf_z[CALI_BUF_LEN];

#define XY_PIN   A0
#define Z_PIN    A1

float deal_cali_buf(float *buf)
{
	float cali_val = 0;
	
	for(int i = 0;i < CALI_BUF_LEN;i++)
	{
		cali_val += buf[i];
	}
	cali_val = cali_val/CALI_BUF_LEN;
	return (float)cali_val;
}


void calibration(void)
{
	SERIAL.println("请将模块水平放置！");
	delay(1000);
	SERIAL.println("开始校准……");
	
	for(int i=0;i<CALI_BUF_LEN;i++)
	{
		cali_buf_xy[i] = analogRead(XY_PIN);;
		cali_buf_z[i] = analogRead(Z_PIN);
		delay(CALI_INTERVAL_TIME);
	}
	cali_data_xy =  deal_cali_buf(cali_buf_xy);
	cali_data_z =  (float)deal_cali_buf(cali_buf_z);
	SERIAL.println("校准完成！");
	scale = (float)1000 / (cali_data_z - cali_data_xy);
	cali_data_z -= (float)980 / scale;
	SERIAL.println(cali_data_xy);
	SERIAL.println(cali_data_z);
	SERIAL.println(scale);
	
}



void AccMeasurement(void)
{
	int16_t val_xy = 0;
	int16_t val_z = 0;
	val_xy = analogRead(XY_PIN);
	val_z = analogRead(Z_PIN);
	
	SERIAL.print("原始数据 xy  = ");
	SERIAL.println(val_xy);
	SERIAL.print("原始数据 z  = ");
	SERIAL.println(val_z);
	SERIAL.println(" ");
	
	val_xy -= cali_data_xy;
	val_z -= cali_data_z;
	SERIAL.print("x 或 y 方向加速度为 ");
	SERIAL.print(val_xy * scale / 1000.0);
	SERIAL.println(" g ");
	SERIAL.print("z 方向加速度为 ");
	SERIAL.print(val_z * scale / 1000.0);
	SERIAL.println(" g ");
	SERIAL.println(" ");
	SERIAL.println(" ");
	SERIAL.println(" ");
	delay(1000);
}

void setup()
{
	SERIAL.begin(115200);
	#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    analogReadResolution(12);
    #endif
	calibration();
	SERIAL.print("比例因子 = ");
	SERIAL.println(scale);
	
}



void loop()
{
	AccMeasurement();
}
```

- **步骤 2.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 3.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器** 或同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **115200**。

- **步骤 4. 校准** 按照串口监视器中的校准提示，几步操作即可完成校准。

- **步骤 5.** 现在您可以使用该传感器，输出结果如下：

```cpp
请将模块水平放置！
开始校准……
校准完成！
184.93
185.03
121
比例因子 = 121
原始数据 xy  = 185
原始数据 z  = 193
 
x 或 y 方向加速度为 0.00 g 
z 方向加速度为 0.85 g 
 
 
 
原始数据 xy  = 188
原始数据 z  = 196
 
x 或 y 方向加速度为 0.36 g 
z 方向加速度为 1.21 g
```

:::note
        如果您使用 Grove 端口输出数据，X 轴和 Y 轴无法同时输出，您可以使用板载开关选择输出通道。如果您希望同时输出 X/Y/Z 数据，可以使用 4 针焊接孔。
:::

## 常见问题解答

**Q1: 如何选择 ±10g 的测量范围？**  

A1: 要更改测量范围，您需要同时修改硬件和软件。首先，切断连接到 ±20g 的背面焊盘，并重新焊接到 ±10g。然后在代码的第 12 行修改如下代码：

```
#define MODUEL_RANGE           20
```

```
\downdownarrows
```

```
#define MODUEL_RANGE           10
```


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B120g%20(ADXL356B).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>







## 资源

- **[ZIP]** [Grove - 3 轴模拟加速度计 ±20g (ADXL356B) 原理图文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B120g%20(ADXL356B).zip)
- **[PDF]** [ADXL 356B 数据手册](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/res/ADXL356B.pdf)



## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>