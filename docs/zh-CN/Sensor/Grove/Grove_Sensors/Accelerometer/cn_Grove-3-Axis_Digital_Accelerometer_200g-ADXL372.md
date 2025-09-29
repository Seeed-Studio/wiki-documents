---
description: Grove - 三轴数字加速度计 200g (ADXL372)
title: Grove - 三轴数字加速度计 200g (ADXL372)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/101020632-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/101020632-preview.png" alt="pir" width={600} height="auto" /></p>



您可以在我们的网站上找到各种[三轴加速度计](https://www.seeedstudio.com/tag/accelerometer.html)，以满足不同场景和需求。这次，我们为您带来了工业级、高稳定性、高精度和低功耗的 ADI ADXL 系列三轴加速度计。

Grove - 三轴数字加速度计 ±200g (ADXL372) 是一款超低功耗数字输出 [MEMS](https://www.seeedstudio.com/tag/MEMS.html) 加速度计，它可以以 100 mg/LSB 的比例因子提供 12 位输出。该传感器最显著的特点是其超低功耗（测量模式下仅 22μA）和大测量范围（±200g）。所有数据通过 Grove I2C 接口输出，I2C 地址可更改。为了满足更广泛的测量需求，采样率可选择 400Hz/800Hz/1600Hz/3200Hz/6400Hz，带宽可选择 200Hz/400Hz/800Hz/1600Hz/3200Hz。除了用于加速度测量外，您还可以使用该模块进行冲击和震动检测。

ADI ADXL 系列加速度计包括四款产品，可满足您不同的测量范围和输出需求：

产品|测量范围|输出接口|功耗
-----|-----|----|----
[Grove - 三轴模拟加速度计 ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|模拟|测量模式：150 μA / 待机模式：21 μA
[Grove - 三轴模拟加速度计 ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|模拟|测量模式：150 μA / 待机模式：21 μA
[Grove - 三轴数字加速度计 ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|数字 I2C|测量模式：200μA
[Grove - 三轴数字加速度计 ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|数字 I2C|测量模式：22μA

 
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)

## 特性

- 大量程测量：±200g
- 超低功耗：3200 Hz ODR 时仅 22 μA
- 可选的过采样比和带宽
- 深度嵌入式 FIFO，最小化主处理器负载
- 内置 12 位模数转换器 (ADC)



## 应用

- 便携式物联网 (IoT) 边缘节点
- 脑震荡和头部创伤检测
- 冲击和震动检测
- 资产健康评估



## 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>

## 规格

| 参数 | 值 |
|---|---|
|供电电压|3.3V / 5V|
|工作环境温度| -40 – 125℃|
|X<sub>OUT</sub>、Y<sub>OUT</sub>、Z<sub>OUT</sub> 的灵敏度 / (与 V<sub>1P8ANA</sub> 成比例)|±50mg/°C（正常模式） / ±35mg/°C（低噪声模式）|
|温度引起的灵敏度变化|±0.01%/°C  (TA = −40°C 至 +125°C)|
|0g 偏移|±1g（典型值）|
|输出接口|数字|

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

| Seeeduino V4.2 | Base Shield |Grove 三轴加速度计 ADXL372 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果您不确定自己拥有的线缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 硬件连接

- **步骤 1.** 将 Grove - 三轴模拟加速度计 ±200g (ADXL372) 连接到 Base Shield 的 **I2C** 接口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/_DAS3075.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/_DAS3075.png" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed_ADXL_372 库](https://github.com/Seeed-Studio/Accelerometer_ADXL372)。

- **步骤 2.** 参考 [如何安装库](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 然后打开 `example/ADXL_372/continuous_reading` 
<!-- ![Alt text](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/1555913126073.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/1555913126073.png" alt="pir" width={600} height="auto" /></p>

```cpp
//continuous_reading.ino

#include "Wire.h"
#include "adxl372.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SERIALUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif


float cali_data[3];

#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250

float cali_buf[3][CALI_BUF_LEN];


ADXL372 acc;
xyz_t xyz;

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
	SERIAL.println("开始校准........");
	
  
	for(int i=0;i<CALI_BUF_LEN;i++)
	{
		while (!(acc.status() & DATA_READY)); 
		acc.read(&xyz);
		cali_buf[0][i] = xyz.x;
		cali_buf[1][i] = xyz.y;
		cali_buf[2][i] = xyz.z;
		delay(CALI_INTERVAL_TIME);
		SERIAL.print('.');
	}
	SERIAL.println('.');
	for(int i=0;i<3;i++)
	{
		cali_data[i] =  deal_cali_buf(cali_buf[i]);
		if(2 == i){
      
			cali_data[i] -= 10;
		}
		SERIAL.println(cali_data[i]);
	}
	SERIAL.println("校准完成！！");
}


void setup() {
  SERIAL.begin(115200);

  acc.begin();
  
  SERIAL.println(acc.id(), HEX);
  acc.timing_ctrl(RATE_400);
  acc.measurement_ctrl(BW_200, true);
  acc.power_ctrl(MEASUREMENT_MODE);
  acc.setActiveTime(10);

  calibration();
}

void loop() {
  if (acc.status() & DATA_READY) {
    acc.read(&xyz);
    SERIAL.print("X 轴加速度 = ");
    SERIAL.print((xyz.x - cali_data[0]) / 10.0);
    SERIAL.println(" g ");
    SERIAL.print("Y 轴加速度 = ");
    SERIAL.print((xyz.y - cali_data[1]) / 10.0);
    SERIAL.println(" g ");
    SERIAL.print("Z 轴加速度 = ");
    SERIAL.print((xyz.z - cali_data[2]) / 10.0);
    SERIAL.println(" mg ");
  }
  SERIAL.println("   ");
  SERIAL.println("   ");
  delay(1000);
}
```

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器** 或同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **115200**。

- **步骤 6. 校准** 等待校准，仅需几秒钟即可完成校准。

- **步骤 7.** 现在您可以使用此传感器，输出结果如下：

```cpp
请将模块水平放置！
开始校准........
................
18.07
-10.73
-40.13
校准完成！！
X 轴加速度 = 0.09 g 
Y 轴加速度 = 0.17 g 
Z 轴加速度 = 1.31 mg 
   
   
X 轴加速度 = -0.11 g 
Y 轴加速度 = -0.03 g 
Z 轴加速度 = 1.31 mg 
   
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove-3-Axis_Digital_Accelerometer-200g-ADXL372 原理图文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip)
- **[PDF]** [ADXL 372 数据手册](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>