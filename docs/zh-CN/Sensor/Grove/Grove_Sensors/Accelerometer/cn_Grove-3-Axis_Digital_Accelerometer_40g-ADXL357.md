---
description: Grove - 三轴数字加速度计 40g (ADXL357)
title: Grove - 三轴数字加速度计 40g (ADXL357)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357
last_update:
  date: 1/6/2023
  author: shuxu hu
---



<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png" alt="pir" width={600} height="auto" /></p>



您可以在我们的网站上找到各种[三轴加速度计](https://www.seeedstudio.com/tag/accelerometer.html)，以满足不同场景和需求。这次，我们为您带来了工业级、高稳定性、高精度和低功耗的 ADI ADXL 系列三轴加速度计。

Grove - 三轴数字加速度计 ±40g (ADXL357) 是一款数字输出 [MEMS](https://www.seeedstudio.com/tag/MEMS.html) 加速度计。该传感器具有三种不同的可选测量范围和精度：±10g@51200 LSB/g、±20g@25600 LSB/g、±40g@12800 LSB/g。您只需进行少量校准工作即可获得相对准确的结果。它通过 Grove I2C 接口输出所有数据，I2C 地址也是可选的。此外，我们还提供两个可配置为 4 种模式的中断输出引脚。

ADI ADXL 系列加速度计包括四款产品，可满足您不同的测量范围和输出需求：

产品|测量范围|输出接口
-----|-----|----
[Grove - 三轴模拟加速度计 ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|模拟
[Grove - 三轴模拟加速度计 ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|模拟
[Grove - 三轴数字加速度计 ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|数字 I2C
[Grove - 三轴数字加速度计 ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|数字 I2C

 
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)

## 特性

- 行业领先的噪声水平、温度下的最小偏移漂移以及长期稳定性，支持精密应用，所需校准工作量极少。
- 密封封装提供卓越的长期稳定性，0 g 偏移与温度（所有轴）：最大 0.75 mg/°C
- 超低噪声密度（所有轴）：80 μg/√Hz
- 内置 20 位模数转换器 (ADC)
- 低漂移、低噪声和低功耗
- 支持双通道中断输出
- 支持 FIFO（96*21 位）

## 应用场景

- 惯性测量单元 (IMUs)/高度与航向参考系统 (AHRSs)
- 平台稳定系统
- 结构健康监测
- 状态监测
- 地震成像
- 倾斜感应
- 机器人技术

## 规格参数

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|工作环境温度| -40 – 125℃|
|X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> 的灵敏度 / (与 V<sub>1P8ANA</sub> 成比例)|±10 g@80 mv/g (典型值) / ±20 g@40 mv/g (典型值) / ±40 g@20 mv/g (典型值)|
|温度引起的灵敏度变化|±0.01%/°C  (TA = −40°C 至 +125°C)|
|0g 偏移 / (相对于 V1P8ANA/2)|±125 mg (典型值)|
|输出接口|数字|

## 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>

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

| Seeeduino V4.2 | Base Shield |Grove 3轴加速度计 ADXL357 |
|----------------|-------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了数据线，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

#### 硬件连接

- **步骤 1.** 将 Grove - 3轴模拟加速度计 ±20g (ADXL357) 连接到 Base Shield 的 **I2C** 接口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed_ADXL_357 库](https://github.com/Seeed-Studio/Seeed_ADXL357B)。

- **步骤 2.** 参考 [如何安装库](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 然后打开 `example/ADXL_357/basic_demo` 
<!-- ![Alt text](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png" alt="pir" width={600} height="auto" /></p>

```cpp
//basic_demo.ino
#include "Seeed_adxl357b.h"


#if defined(ARDUINO_ARCH_AVR)
	#pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
	#define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
	#pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
	#define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
	#pragma message("Defined architecture for ARDUINO_ARCH_SAMD.")	
	#define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
	#pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
	#define SERIAL SerialUSB
#else
	#pragma message("Not found any architecture.")
	#define SERIAL Serial
#endif


#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250
int32_t cali_buf[3][CALI_BUF_LEN];
int32_t cali_data[3];

float factory;

Adxl357b  adxl357b;


int32_t deal_cali_buf(int32_t *buf)
{
	int32_t cali_val = 0;
	
	for(int i = 0;i < CALI_BUF_LEN;i++)
	{
		cali_val += buf[i];
	}
	cali_val = cali_val/CALI_BUF_LEN;
	return (int32_t)cali_val;
}


void calibration(void)
{
	int32_t x;
	SERIAL.println("Please Place the module horizontally!");
	delay(1000);
	SERIAL.println("Start calibration........");
	
	for(int i=0;i<CALI_BUF_LEN;i++)
	{
		if(adxl357b.checkDataReady())
		{
			if(adxl357b.readXYZAxisResultData(cali_buf[0][i],cali_buf[1][i],cali_buf[2][i]))
			{
			}
		}
		delay(CALI_INTERVAL_TIME);
		// SERIAL.print('.');
	}
	// SERIAL.println('.');
	for(int i=0;i<3;i++)
	{
		cali_data[i] =  deal_cali_buf(cali_buf[i]);
		SERIAL.println(cali_data[i]);
	}
	x = (((cali_data[2] - cali_data[0]) + (cali_data[2] - cali_data[1]))/2);
	factory = 1.0 / (float)x;
	// SERIAL.println(x);
	SERIAL.println("Calibration OK!!");
}






void setup(void)
{
	uint8_t value = 0;
	float t;
	
	SERIAL.begin(115200);
	if(adxl357b.begin())
	{
		SERIAL.println("Can't detect ADXL357B device .");
		while(1);
	}
	SERIAL.println("Init OK!");
	/*Set full scale range to ±40g*/
	adxl357b.setAdxlRange(FOURTY_G);
	/*Switch standby mode to measurement mode.*/
	adxl357b.setPowerCtr(0);
	delay(100);
	/*Read Uncalibration temperature.*/
	adxl357b.readTemperature(t);
	
	SERIAL.print("Uncalibration  temp = ");
	SERIAL.println(t);
	/**/
	calibration();

}


void loop(void)
{
	int32_t x,y,z;
	uint8_t entry = 0;
	if(adxl357b.checkDataReady())
	{
		if(adxl357b.readXYZAxisResultData(x,y,z))
		{
			SERIAL.println("Get data failed!");
		}
		SERIAL.print("X axis = ");
		SERIAL.print(x*factory);
		SERIAL.println('g');
		SERIAL.print("Y axis = ");
		SERIAL.print(y*factory);
		SERIAL.println('g');
		SERIAL.print("Z axis = ");
		SERIAL.print(z*factory);
		SERIAL.println('g');
		
	}
	delay(100);
}




```
- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **115200**。

- **步骤 6. 校准** 等待校准，仅需几秒钟即可完成校准。

- **步骤 7.** 现在您可以使用此传感器，输出结果如下所示：

```cpp
Start calibration.......Init OK!
Uncalibration  temp = 29.20
Please Place the module horizontally!
Start calibration........
-1652
11143
6063
Calibration OK!!
X axis = -1.24g
Y axis = 8.50g
Z axis = 4.55g
X axis = -1.21g
Y axis = 8.43g

```


## 原理图在线查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>






## 资源

- **[ZIP]** [Grove-3-Axis_Digital_Accelerometer-40g-ADXL357 原理图文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip)
- **[PDF]** [ADXL 357 数据手册](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/ADXL357.pdf)



## 技术支持与产品讨论




感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
