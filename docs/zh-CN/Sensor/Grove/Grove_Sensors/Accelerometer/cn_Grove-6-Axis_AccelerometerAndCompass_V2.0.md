---
description: Grove - 6轴加速度计和电子罗盘 V2.0
title: Grove - 6轴加速度计和电子罗盘 V2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-6-Axis_AccelerometerAndCompass_V2.0
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Accelerometer_And_Compass_v2.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Accelerometer_And_Compass_v2.JPG" alt="pir" width={600} height="auto" /></p>

Grove –6轴加速度计和电子罗盘 V2.0 是一个3轴加速度计与3轴磁传感器的组合。它是基于传感器模块 LSM303D 的 Grove - 6轴加速度计和电子罗盘 V1.0 的升级版本，具有可选的线性加速度全量程范围 ±2g / ±4g / ±8g / ±16g 和可选的磁场全量程范围 ±2 / ±4 / ±8 / ±12 高斯。磁传感器部分和加速度计部分可以分别关闭以降低功耗。Arduino 可以通过 I2C 接口使用为该模块提供的库来获取这些数据。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Compass-v2.0-p-2476.html)

## 规格

-   输入电压：5V
-   I2C 接口和可选 SPI 接口
-   可选测量范围
-   6D 方向检测
-   2个独立的可编程中断生成器
-   省电模式
-   I2C 地址：0x1E（默认），或 0x1D

:::note
    如果您想使用多个 I2C 设备，请参考 [软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)。
:::
:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。
:::

## 支持的平台

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 硬件概述

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Grove-6-Axis_AccelerometerAndCompass_V2.0_inter.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Grove-6-Axis_AccelerometerAndCompass_V2.0_inter.jpg" alt="pir" width={600} height="auto" /></p>

-   ①Grove接口，连接到I2C
-   ②SPI接口
-   ③I2C或SPI选择焊盘（默认是I2C），如果需要使用SPI，断开此焊盘
-   ④中断数字输出
-   ⑤地址选择焊盘，默认连接b和a地址为0x1E，如果连接b和c地址为0x1D，如果需要使用SPI，断开此焊盘到任意一侧。

## 入门指南

LSM303D是一款6D传感器模块，包含一个3D加速度计和一个3D磁传感器。它具有I2C数字接口，因此避免了使用模拟到数字转换器。

MCU可以通过I2C接口直接收集6D传感器数据。好了，让我们开始使用这个LSM303D 6D传感器模块。

### 使用Arduino

#### 硬件

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove-6-Axis_AccelerometerAndCompass_V2.0 |
|----------------|-------------|-----------------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG" alt="pir" width={200} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Compass-v2.0-p-2476.html)|

- **步骤2.** 将Grove-6-Axis_AccelerometerAndCompass_V2连接到Grove-Base Shield的**I2C**端口。
- **步骤3.** 将Grove-Base Shield插入Seeeduino。
- **步骤4.** 使用USB线将Seeeduino连接到PC。

<!--link-->

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
如果没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::
<!--I2C-->

| Seeeduino_v4 | Grove-6-Axis_AccelerometerAndCompass_V2 |
|--------------|--------------------------------------------|
| 5V           | VCC                                        |
| GND          | GND                                        |
| SDA          | SDA                                        |
| SCL          | SCL                                        |

#### 软件

**步骤1.** 从Github下载[库文件](https://github.com/Seeed-Studio/6Axis_Accelerometer_And_Compass_v2)。

**步骤2.** 参考[如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)来为Arduino安装库文件。

**步骤3.** 创建一个新的Arduino草图，并将以下代码粘贴到其中，或者通过路径直接打开代码：File -> Example -> Accelerometer_Compass -> Accelerometer_Compass。

**步骤4.** 上传代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

以下是代码：
```c
/* LSM303DLM 示例代码基于LSM303DLH示例代码，由Jim Lindblom SparkFun Electronics编写

   日期: 9/6/11
   许可: Creative commons share-alike v3.0

   修改者: Frankie.Chu
   修改者: Jacky.Zhang 2014-12-11: 移植到Seeed Studio的6轴加速度计和指南针
   修改者: Jacky.Zhang 2015-1-6: 添加SPI驱动

   概述:
   展示如何使用LSM303DLH 3轴磁力计/3轴加速度计计算水平和倾斜补偿的航向。

   固件:
   您可以通过设置SCALE常量为2、4或8来设置加速度计的满量程范围。
   此值用于initLSM303()函数。大多数情况下，LSM303中的所有其他寄存器将保持默认值。

   使用write()和read()函数写入和读取LSM303的内部寄存器。

   使用getLSM303_accel()和getLSM303_mag()获取LSM303的加速度和磁力值。
   您需要为这些函数传递一个数组，数据将在函数返回时存储到数组中。

   getHeading()计算传感器水平时的航向。
   返回一个介于0到360之间的浮点数。您需要为它传递一个包含磁力值的数组。

   getTiltHeading()计算倾斜补偿的航向。
   返回一个介于0到360度之间的浮点数。
   您需要为此函数传递磁力和加速度数组。

   航向的计算如AN3192中所述:
   http://www.sparkfun.com/datasheets/Sensors/Magneto/Tilt%20Compensated%20Compass.pdf
*/

/*
硬件和软件注释
I2C模式:
1. 焊接跳线"I2C EN"和ADDR跳线到0x1E
2. 使用Lsm303d.initI2C()函数通过I2C初始化Grove
SPI模式:
1. 断开跳线"I2C_EN"和ADDR跳线到任意一侧
2. 定义一个引脚作为SPI协议的芯片选择。
3. 使用Lsm303d.initSPI(SPI_CS)函数通过SPI初始化Grove
SPI.h在Arduino中为我们设置这些
const int SDI = 11;
const int SDO = 12;
const int SCL = 13;
*/

#include <LSM303D.h>
#include <Wire.h>
#include <SPI.h>

/* 全局变量 */
int accel[3];  // 我们将在这里存储原始加速度值
int mag[3];  // 原始磁力计值存储在这里
float realAccel[3];  // 计算的加速度值存储在这里
float heading, titleHeading;

#define SPI_CS 10

void setup()
{
	char rtn = 0;
    Serial.begin(9600);  // 串口用于调试
    Serial.println("\r\n电源开启");
    rtn = Lsm303d.initI2C();
    //rtn = Lsm303d.initSPI(SPI_CS);
    if(rtn != 0)  // 使用SCALE满量程范围初始化LSM303
	{
		Serial.println("\r\n未找到LSM303D");
		while(1);
	}
	else
	{
		Serial.println("\r\n找到LSM303D");
	}
}

void loop()
{
	Serial.println("\r\n**************");
	//getLSM303_accel(accel);  // 获取加速度值并存储在accel数组中
	Lsm303d.getAccel(accel);
	while(!Lsm303d.isMagReady());// 等待磁力计读取准备好
	Lsm303d.getMag(mag);  // 获取磁力计值，存储在mag中

	for (int i=0; i<3; i++)
	{
		realAccel[i] = accel[i] / pow(2, 15) * ACCELE_SCALE;  // 计算真实加速度值，单位为g
	}
	heading = Lsm303d.getHeading(mag);
	titleHeading = Lsm303d.getTiltHeading(mag, realAccel);

	printValues();

	delay(200);  // 延迟以便串口可读性
}

void printValues()
{  
	Serial.println("X、Y、Z的加速度为");
	for (int i=0; i<3; i++)
	{
		Serial.print(realAccel[i]);
		Serial.println("g");
	}
	// 在下面打印水平和倾斜补偿的航向以进行比较
	Serial.println("磁北与x轴之间的顺时针角度：");
	Serial.print(heading, 3); // 仅当传感器水平时有效
	Serial.println(" 度");
	Serial.print("磁北与水平面中正x轴投影之间的顺时针角度：");
	Serial.println(" ");
	Serial.print(titleHeading, 3);  // 看看倾斜补偿有多棒！
	Serial.println(" 度");
}
```

**步骤 5.** 打开串口监视器，您将看到颜色传感器的输出结果，如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/6-Axis_AccelerometerAndCompass_V2.0_demo.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/6-Axis_AccelerometerAndCompass_V2.0_demo.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 6.** 您可以看到加速度值以及磁北与 x 轴之间的顺时针角度。

X/Y/Z 显示三个轴的加速度；然后计算磁北与 x 轴之间的角度。

同时还计算了磁北与正 x 轴投影之间的角度。

### 使用 Raspberry Pi

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry Pi | GrovePi_Plus | Grove-6-Axis_AccelerometerAndCompass_V2.0 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG" alt="pir" width={200} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Compass-v2.0-p-2476.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry Pi。
- **步骤 3.** 将 Grove-6-Axis_AccelerometerAndCompass_V2.0 连接到 GrovePi_Plus 的 **I2C** 端口。
- **步骤 4.** 通过 USB 数据线将 Raspberry Pi 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/with_rpi.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤 3.** 执行以下命令以使用此传感器：

```bash
cd ~/GrovePi/Software/Python/grove_6axis_acc_compass
python grove_6axis_accel_compass_example.py
```

以下是示例代码：

```python
#!/usr/bin/env python
#
# GrovePi 示例代码，用于 Grove - 6-Axis Accelerometer&Compass v2.0 (https://www.seeedstudio.com/depot/Grove-6Axis-AccelerometerCompass-v20-p-2476.html)
#
# GrovePi 连接 Raspberry Pi 和 Grove 传感器。您可以在此处了解有关 GrovePi 的更多信息：http://www.dexterindustries.com/GrovePi
#
# 对此库有疑问？请在论坛上提问：http://forum.dexterindustries.com/c/grovepi
#
'''
## 许可证
MIT 许可证 (MIT)
GrovePi for the Raspberry Pi: 一个开源平台，用于将 Grove 传感器连接到 Raspberry Pi。
版权所有 (C) 2017 Dexter Industries
特此免费授予任何获得本软件及相关文档文件（“软件”）副本的人使用、复制、修改、合并、发布、分发、再许可和/或销售本软件副本的权利，并允许提供本软件的人这样做，但需符合以下条件：
上述版权声明和本许可声明应包含在本软件的所有副本或重要部分中。
本软件按“原样”提供，不附带任何形式的明示或暗示担保，包括但不限于适销性、适用性和非侵权的担保。在任何情况下，作者或版权持有人均不对因本软件或本软件的使用或其他交易而产生的任何索赔、损害或其他责任负责，无论是合同诉讼、侵权行为或其他形式。
'''
import lsm303d

try:
	acc_mag=lsm303d.lsm303d()

	while True:

		# 获取加速度计值
		acc=acc_mag.getRealAccel()

		# 等待指南针准备好
		while True:
			if acc_mag.isMagReady():
				break

		# 读取方向
		heading= acc_mag.getHeading()

		print("X、Y、Z 的加速度分别为 %.3fg, %.3fg, %.3fg" %(acc[0],acc[1],acc[2]))
		print("方向 %.3f 度\n" %(heading))

except IOError:
	print("无法从加速度计读取数据，请检查传感器并重试")
```

以下是结果：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/rpi_result.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/rpi_result.jpg" alt="pir" width={600} height="auto" /></p>

## 参考资料

点击 [这里](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/res/LSM303_application_note.pdf) 了解更多关于此参数的信息。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Airplane.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Airplane.jpg" alt="pir" width={600} height="auto" /></p>

<!-- 
![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Airplane_calculated.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Airplane_calculated.jpg" alt="pir" width={600} height="auto" /></p>

<div class="admonition note">
<p class="admonition-title">注意</p>
<p>1. 所有 ST MEMS 加速度计都经过工厂校准，用户在大多数应用中无需进行进一步校准。然而，为了达到小于 2° 的航向精度，需要进行一个简单的校准过程。</p>
<p>2. 测试磁北与 x 轴之间的顺时针角度时，可以将设备的 Xa 轴对准任意方向，但不要使其面朝下。参考下图：</p>
</div>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Testing.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Testing.jpg" alt="pir" width={600} height="auto" /></p>



## 资源


-  **[库文件]** [6-Axis Accelerometer&Compass v2.0 Arduino 库](https://github.com/Seeed-Studio/6Axis_Accelerometer_And_Compass_v2)

- **[库文件]** [6-Axis Accelerometer&Compass v2.0 树莓派库](https://github.com/DexterInd/GrovePi/blob/master/Software/Python/grove_6axis_acc_compass)
-  **[数据手册]** [LSM303D_datasheet](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/res/LSM303D_datasheet.pdf)
-  **[Eagle 文件]** [6-Axis Accelerometer&Compass v2.0 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/res/Grove-6-Axis_AccelerometerAndCompass_v2.0_sch_pcb.zip)

<!-- 本 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_6-Axis_Accelerometer&Compass_V2.0 -->


## 技术支持与产品讨论
感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>