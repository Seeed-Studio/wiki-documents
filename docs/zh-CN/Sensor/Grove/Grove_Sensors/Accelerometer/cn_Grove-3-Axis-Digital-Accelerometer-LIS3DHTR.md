---
description: Grove - 三轴数字加速度计 (LIS3DHTR)
title: Grove - 三轴数字加速度计 (LIS3DHTR)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/products/114020121/img/114020121wiki.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/114020121wiki.png" alt="pir" width={600} height="auto" /></p>

Grove - 三轴数字加速度计 (LIS3DHTR) 是一款低成本的三轴加速度计，属于 Grove 产品系列。它基于 LIS3DHTR 芯片，提供多种量程和接口选择。你可能难以相信，这样一个小巧的三轴加速度计竟然支持 I2C、SPI 和 ADC GPIO 接口，这意味着你可以选择任何一种方式与开发板连接。此外，这款加速度计还可以监测周围的温度，以校正由温度引起的误差。

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)

## 特性

- 测量范围：±2g、±4g、±8g、±16g，多种量程选择。
- 多种接口选项：Grove I2C 接口、SPI 接口、ADC 接口。
- 温度可调：能够调整和校正由温度引起的误差。
- 3/5V 电源供电。

## 规格

|项目|参数|
|---|---|
|电源供电|3/5V|
|接口|I2C/SPI/GPIO ADC|
|I2C 地址|默认 0x19，当 SDO 引脚连接到 GND 时可更改为 0x18|
|ADC GPIO 电源输入|0-3.3V|
|中断|预留一个中断引脚|
|SPI 模式设置|将 CS 引脚连接到 GND|

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 基于Grove I2C接口使用Seeeduino XIAO

#### 所需材料

| Seeeduino XIAO | Grove 面包板 | Grove - 三轴数字加速度计 (LIS3DHTR) |
|----------------|------------------|-----------------------------------------|
| ![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg) | ![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png) | ![](https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg) |
| [立即购买](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) | [立即购买](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html) | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html) |

#### 硬件连接

<!-- ![](https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

将Grove - 三轴数字加速度计 (LIS3DHTR) 连接到Seeeduino XIAO的I2C接口。

#### 软件代码

```cpp
// 此示例使用I2C。
#include "LIS3DHTR.h"
#include <Wire.h>
LIS3DHTR<TwoWire> LIS; // IIC
#define WIRE Wire

void setup()
{
  Serial.begin(115200);
  while (!Serial)
  {
  };
  LIS.begin(WIRE,0x19); // IIC初始化
  // LIS.begin(0x19);
  LIS.openTemp();  // 如果使用ADC3，需要关闭温度检测。
  // LIS.closeTemp(); // 默认关闭
  delay(100);
  LIS.setFullScaleRange(LIS3DHTR_RANGE_2G);
  // LIS.setFullScaleRange(LIS3DHTR_RANGE_4G);
  // LIS.setFullScaleRange(LIS3DHTR_RANGE_8G);
  // LIS.setFullScaleRange(LIS3DHTR_RANGE_16G);
  // LIS.setOutputDataRate(LIS3DHTR_DATARATE_1HZ);
  // LIS.setOutputDataRate(LIS3DHTR_DATARATE_10HZ);
  // LIS.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
  LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
  // LIS.setOutputDataRate(LIS3DHTR_DATARATE_100HZ);
  // LIS.setOutputDataRate(LIS3DHTR_DATARATE_200HZ);
  // LIS.setOutputDataRate(LIS3DHTR_DATARATE_1_6KHZ);
  // LIS.setOutputDataRate(LIS3DHTR_DATARATE_5KHZ);
}

void loop()
{
  if (!LIS)
  {
    Serial.println("LIS3DHTR未连接。");
    while (1)
      ;
    return;
  }
  // 三轴加速度
  Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
  Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
  Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
  // ADC
  // Serial.print("adc1:"); Serial.println(LIS.readbitADC1());
  // Serial.print("adc2:"); Serial.println(LIS.readbitADC2());
  // Serial.print("adc3:"); Serial.println(LIS.readbitADC3());

  // 温度
  Serial.print("temp:");
  Serial.println(LIS.getTemperature());
  delay(500); 
}
```

- **步骤 1** 从 [Github](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip) 下载库文件，并将"zip"库添加到Arduino IDE中。请参考[如何安装Arduino库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。

- **步骤 2** 找到"LIS3DHTR_IIC"示例代码并上传到您的开发板。请参考[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 3** 上传代码后，您可以在串口监视器中看到每个轴的加速度和周围环境的温度。

<!-- ![](https://files.seeedstudio.com/products/114020121/img/wiki_result.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/wiki_result.png" alt="pir" width={600} height="auto" /></p>

### 使用树莓派

#### 所需材料

| 树莓派 4B(4GB) | Grove 树莓派基座扩展板 | Grove - 三轴数字加速度计 (LIS3DHTR) |
|----------------|---------------------------|-----------------------------------------|
| <p><img src="https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg" alt="pir" width={600} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg" alt="pir" width={600} height="auto" /></p> |
| [立即购买](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html) | [立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html) | [立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html) |

#### 硬件连接

<!-- ![](https://files.seeedstudio.com/products/114020121/img/Hardware_connection_raspberry_pi_demo.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/Hardware_connection_raspberry_pi_demo.jpg" alt="pir" width={600} height="auto" /></p>

将LIS3DHTR传感器连接到Grove 树莓派基座扩展板上的任意I2C接口。

#### 代码

- **步骤 1** 按照[软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境，并在树莓派上安装grove.py。
- **步骤 2** 执行以下命令运行代码。

```
virtualenv -p python3 env
source env/bin/activate
# 输入命令
grove_3_axis_digital_accelerometer
```

以下是 grove_3_axis_digital_accelerometer.py 的代码：

```python
from __future__ import print_function
from grove.i2c import Bus
import time

# 设备的I2C地址
H3LIS331DL_DEFAULT_ADDRESS			= 0x19

# H3LIS331DL寄存器映射
H3LIS331DL_REG_WHOAMI					= 0x0F # Who Am I寄存器
H3LIS331DL_REG_CTRL1					= 0x20 # 控制寄存器-1
H3LIS331DL_REG_CTRL2					= 0x21 # 控制寄存器-2
H3LIS331DL_REG_CTRL3					= 0x22 # 控制寄存器-3
H3LIS331DL_REG_CTRL4					= 0x23 # 控制寄存器-4
H3LIS331DL_REG_CTRL5					= 0x24 # 控制寄存器-5
H3LIS331DL_REG_REFERENCE				= 0x26 # 参考寄存器
H3LIS331DL_REG_STATUS					= 0x27 # 状态寄存器
H3LIS331DL_REG_OUT_X_L					= 0x28 # X轴LSB
H3LIS331DL_REG_OUT_X_H					= 0x29 # X轴MSB
H3LIS331DL_REG_OUT_Y_L					= 0x2A # Y轴LSB
H3LIS331DL_REG_OUT_Y_H					= 0x2B # Y轴MSB
H3LIS331DL_REG_OUT_Z_L					= 0x2C # Z轴LSB
H3LIS331DL_REG_OUT_Z_H					= 0x2D # Z轴MSB

# 加速度计数据速率配置
H3LIS331DL_ACCL_PM_PD					= 0x00 # 关机模式
H3LIS331DL_ACCL_PM_NRMl					= 0x20 # 正常模式
H3LIS331DL_ACCL_PM_0_5					= 0x40 # 低功耗模式，ODR = 0.5Hz
H3LIS331DL_ACCL_PM_1					= 0x60 # 低功耗模式，ODR = 1Hz
H3LIS331DL_ACCL_PM_2					= 0x80 # 低功耗模式，ODR = 2Hz
H3LIS331DL_ACCL_PM_5					= 0xA0 # 低功耗模式，ODR = 5Hz
H3LIS331DL_ACCL_PM_10					= 0xC0 # 低功耗模式，ODR = 10Hz
H3LIS331DL_ACCL_DR_50					= 0x00 # ODR = 50Hz
H3LIS331DL_ACCL_DR_100					= 0x08 # ODR = 100Hz
H3LIS331DL_ACCL_DR_400					= 0x10 # ODR = 400Hz
H3LIS331DL_ACCL_DR_1000					= 0x18 # ODR = 1000Hz

# 加速度计数据更新和轴配置
H3LIS331DL_ACCL_LPEN					= 0x00 # 正常模式，轴禁用
H3LIS331DL_ACCL_XAXIS					= 0x04 # 启用X轴
H3LIS331DL_ACCL_YAXIS					= 0x02 # 启用Y轴
H3LIS331DL_ACCL_ZAXIS					= 0x01 # 启用Z轴

# 加速度计全量程选择
H3LIS331DL_ACCL_BDU_CONT				= 0x00 # 连续更新，正常模式，4线接口，LSB优先
H3LIS331DL_ACCL_BDU_NOT_CONT			= 0x80 # 输出寄存器在读取MSB和LSB之前不会更新
H3LIS331DL_ACCL_BLE_MSB					= 0x40 # MSB优先
H3LIS331DL_ACCL_RANGE_400G				= 0x30 # 全量程 = +/-400g
H3LIS331DL_ACCL_RANGE_200G				= 0x10 # 全量程 = +/-200g
H3LIS331DL_ACCL_RANGE_100G				= 0x00 # 全量程 = +/-100g
H3LIS331DL_ACCL_SIM_3					= 0x01 # 3线接口
H3LIS331DL_RAW_DATA_MAX					= 65536

H3LIS331DL_DEFAULT_RANGE = H3LIS331DL_ACCL_RANGE_100G
H3LIS331DL_SCALE_FS = H3LIS331DL_RAW_DATA_MAX / 4 / ((H3LIS331DL_DEFAULT_RANGE >> 4) + 1)

class H3LIS331DL(object):
	def __init__ (self, address=H3LIS331DL_DEFAULT_ADDRESS):
		self._addr = address
		self._bus  = Bus()
		self.select_datarate()
		self.select_data_config()
	
	def select_datarate(self):
		"""选择加速度计的数据速率"""
		DATARATE_CONFIG = (H3LIS331DL_ACCL_PM_NRMl | H3LIS331DL_ACCL_DR_50 | H3LIS331DL_ACCL_XAXIS | H3LIS331DL_ACCL_YAXIS | H3LIS331DL_ACCL_ZAXIS)
		self._bus.write_byte_data(self._addr, H3LIS331DL_REG_CTRL1, DATARATE_CONFIG)
	
	def select_data_config(self):
		"""选择加速度计的数据配置"""
		DATA_CONFIG = (H3LIS331DL_DEFAULT_RANGE | H3LIS331DL_ACCL_BDU_CONT)
		self._bus.write_byte_data(self._addr, H3LIS331DL_REG_CTRL4, DATA_CONFIG)
	
	def read_accl(self):
		"""从H3LIS331DL_REG_OUT_X_L(0x28)读取数据，2字节
		X轴加速度LSB，X轴加速度MSB"""
		data0 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_X_L)
		data1 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_X_H)
		
		xAccl = data1 * 256 + data0
		if xAccl > H3LIS331DL_RAW_DATA_MAX / 2:
			xAccl -= H3LIS331DL_RAW_DATA_MAX
		
		"""从H3LIS331DL_REG_OUT_Y_L(0x2A)读取数据，2字节
		Y轴加速度LSB，Y轴加速度MSB"""
		data0 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Y_L)
		data1 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Y_H)
		
		yAccl = data1 * 256 + data0
		if yAccl > H3LIS331DL_RAW_DATA_MAX / 2 :
			yAccl -= H3LIS331DL_RAW_DATA_MAX
		
		"""从H3LIS331DL_REG_OUT_Z_L(0x2C)读取数据，2字节
		Z轴加速度LSB，Z轴加速度MSB"""
		data0 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Z_L)
		data1 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Z_H)
		
		zAccl = data1 * 256 + data0
		if zAccl > H3LIS331DL_RAW_DATA_MAX / 2 :
			zAccl -= H3LIS331DL_RAW_DATA_MAX
		
		return {'x' : xAccl, 'y' : yAccl, 'z' : zAccl}

def main():
	h3lis331dl = H3LIS331DL()
	while True:
		h3lis331dl.select_datarate()
		h3lis331dl.select_data_config()
		time.sleep(0.2)
		accl = h3lis331dl.read_accl()
		print("Raw:    X = {0:6}   Y = {1:6}   Z = {2:6}"
			.format(accl['x'], accl['y'], accl['z']))
		print("Accel: AX = {0:6.3}g AY = {1:6.3}g AZ = {2:6.3}g"
			.format(accl['x'] / H3LIS331DL_SCALE_FS, accl['y'] / H3LIS331DL_SCALE_FS, accl['z'] / H3LIS331DL_SCALE_FS))
		time.sleep(.5)

if __name__ == '__main__':
    main()
```

:::提示
如果一切正常，您将能够看到以下结果。
:::

<!-- ![](https://files.seeedstudio.com/products/114020121/img/python_result.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/python_result.png" alt="pir" width={600} height="auto" /></p>

您可以通过简单地按下 **ctrl+c** 来退出此程序。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_190910.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [LIS3DHTR 数据手册](https://files.seeedstudio.com/products/114020121/document/lis3dh.pdf)
- **[PDF]** [硬件原理图](https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_SCH_190910.pdf)
- **[ZiP]** [Grove - 三轴数字加速度计 (LIS3DHTR) 库](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>