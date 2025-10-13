---
description: Grove - I2C UV 传感器 (VEML6070)
title: Grove - I2C UV 传感器 (VEML6070)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-I2C_UV_Sensor-VEML6070
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/perspective.jpg" /></div>

Grove - I2C UV 传感器(VEML6070) 是一款先进的紫外线 (UV) 光传感器，具有 I2C 协议接口。紫外线 (UV) 是波长从 10 nm 到 400 nm 的电磁辐射，比可见光波长短但比 X 射线长，该传感器最有效地检测 320-410nm 光线，并将太阳紫外线强度转换为数字数据。

该模块基于 VEML6070，对太阳紫外线具有线性敏感性，并可通过外部电阻轻松调节。

此外，具有阈值窗口设置的主动确认 (ACK) 功能允许 UV 传感器发送 UVI 警报消息。在强烈的太阳 UVI 条件下，智能 ACK 信号可以通过软件编程轻松实现。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 在长时间太阳紫外线照射下具有出色的紫外线辐射测量性能
- 出色的紫外线敏感性和线性度
- 出色的温度补偿
- 高动态检测分辨率
- 支持确认功能 (ACK)

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|光谱敏感性范围|320 ~ 410 nm|
|峰值敏感性|355 nm|
|UVA 敏感性|5 μW/cm2/step(典型值) |
|接口|I2C|
|I2C 地址|0x38(数据 LSB) / 0x39(数据 MSB)|

:::caution
        实际上，该传感器有 3 个 I2C 地址，每个地址
:::

## 典型应用

- 太阳紫外线指示器
- 化妆品 / 户外运动手持产品
- 消费类产品

## 硬件概述

### 引脚定义

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out_back.jpg" /></div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上面提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

### 与 Arduino 一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - I2C UV Sensor (VEML6070) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank">立即购买</a>|

:::note
**1** 请轻柔地插入USB线缆，否则可能会损坏端口。请使用内部有4根线的USB线缆，2根线的线缆无法传输数据。如果您不确定您的线缆规格，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤 1.** 将Grove - I2C UV Sensor (VEML6070)连接到Grove-Base Shield的**I2C**端口。

- **步骤 2.** 将Grove - Base Shield插入Seeeduino。

- **步骤 3.** 通过USB线缆将Seeeduino连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/connect.jpg" /></div>

:::note
如果我们没有Grove Base Shield，我们也可以按照以下方式直接将此模块连接到Seeeduino。
:::

| Seeeduino      |  Grove线缆       | Grove - I2C UV Sensor (VEML6070) |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V or 3.3V     | 红色                | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色             | SCL |

#### 软件

:::caution
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Seeed_VEML6070](https://github.com/Seeed-Studio/Seeed_VEML6070)库。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)来为Arduino安装库。

- **步骤 3.** 重启Arduino IDE。打开示例，您可以通过以下三种方式打开：
    1. 在Arduino IDE中通过路径直接打开：**File --> Examples --> Seeed_VEML6070 --> INT_mode**。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_1.jpg" /></div>

    2. 在您的计算机中点击**INT_mode.ino**打开，您可以在文件夹**XXXX\Arduino\libraries\Seeed_VEML6070-master\examples\INT_mode**中找到它，**XXXX**是您安装Arduino IDE的位置。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_2.jpg" /></div>

    3. 或者，您可以直接点击代码块右上角的图标![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)将以下代码复制到Arduino IDE的新草图中。

```cpp
#include "Seeed_VEML6070.h"


/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

VEML6070 sensor;

char *UV_str[]={"低等级","中等等级","高等级","非常高","极端"};

err_t read_UV()
{
    err_t ret=NO_ERROR;
    u16 step;
    sensor.wait_for_ready();
    CHECK_RESULT(ret,sensor.read_step(step));
    SERIAL.print("UV step = ");
    SERIAL.println(step);
    RISK_LEVEL level=sensor.convert_to_risk_level(step);
    SERIAL.print("UV level is ");
    SERIAL.println(UV_str[level]);
    SERIAL.println(" ");
    SERIAL.println(" ");
    SERIAL.println(" ");
    return ret;
}



void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("serial start!!");
    delay(1000);
    if(sensor.init())
    {
      SERIAL.println("init failed!!!");
    }
    /*threshold is 145 steps*/
    /*enable*/
    sensor.set_interrupt(INT_145_STEP,ENABLE);
}


void loop()
{
    if(read_UV())
    {
      SERIAL.print("read UV sensor failed!!");
    }
    //sensor.enable();
    //sensor.disable();
    delay(1000);
}
```

:::note
**库中有2个演示程序：**  
**basic_demo.ino**
        >此示例可以从串口获取UV指数和UV等级。轮询数据。

**INT_mode.ino**  
        >传感器模块上有一个INT引脚，连接到VEML6070的ACK引脚。您可以通过102步或145步设置UV阈值（只有两个选择）。当UV值超过限制时，INT引脚输出低电平。您可以将INT引脚连接到主机的中断引脚，以提高程序运行效率。  
:::

:::caution
库文件可能会更新。此代码可能不适用于更新的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 通过点击**Tool-> Serial Monitor**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。将波特率设置为**115200**。

:::tip
如果一切正常，当您使用UV光照射此模块时，您将看到如下信息：
:::

```
4serial start!!
cmd reg=32
UV step = 20
UV level is 低等级
 
 
 
UV step = 125
UV level is 低等级
 
 
 
UV step = 511
UV level is 低等级

```

#### 报警功能

正如我们在硬件概述部分看到的，有一个 ACK 引脚供用户用作中断信号。好消息是有两个阈值 102 步和 145 步可供选择，坏消息是你不能设置自己的数值，只有 102 和 145 是有效的。ACK 引脚默认输出低电平，一旦 UV 值超过你设置的阈值，ACK 引脚输出高电平。让我们回到示例代码 **INT_mode.ino**。

第 46 行，阈值的默认设置是 145，如果你想使用 102，你应该将代码修改如下：

```cxx title="old.ino"
sensor.set_interrupt(INT_145_STEP,ENABLE); //修改这一行 
```

```cxx title="modify.ino"
sensor.set_interrupt(INT_102_STEP,ENABLE); // 已修改
```

### 与树莓派一起使用（配合 Grove 树莓派扩展板）

#### 硬件

- **步骤 1**. 本项目使用的物品：

| 树莓派 | Grove 树莓派扩展板| Grove - I2C UV 传感器 (VEML6070)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div> |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div> |
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html)|

- **步骤 2**. 将 Grove 扩展板插入树莓派。
- **步骤 3**. 将 Grove - I2C UV 传感器 (VEML6070) 连接到扩展板的 **I2C** 端口。
- **步骤 4**. 通过 USB 线将树莓派连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/UV_Hat.jpg" /></div>

#### 软件

- **步骤 1**. 按照[软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境，将 grove.py 安装到你的树莓派上。
- **步骤 2**. 执行以下命令运行代码。

```
# Python3 虚拟环境
virtualenv -p python3 env
source env/bin/activate
#输入命令
grove_uv_sensor
```

以下是 grove_uv_sensor.py 代码。

```python
from __future__ import print_function
from grove.i2c import Bus
import time


# 设备的 I2C 地址
VEML6070_DEFAULT_ADDRESS				= 0x38

# VEML6070 命令集
VEML6070_CMD_ACK_DISABLE				= 0x00 # 确认禁用
VEML6070_CMD_ACK_ENABLE					= 0x20 # 确认启用
VEML6070_CMD_ACK_THD_102				= 0x00 # 确认阈值 102 步
VEML6070_CMD_ACK_THD_145				= 0x10 # 确认阈值 145 步
VEML6070_CMD_IT_1_2T					= 0x00 # 积分时间 = 1/2T
VEML6070_CMD_IT_1T						= 0x04 # 积分时间 = 1T
VEML6070_CMD_IT_2T						= 0x08 # 积分时间 = 2T
VEML6070_CMD_IT_4T						= 0x0C # 积分时间 = 4T
VEML6070_CMD_RESERVED					= 0x02 # 保留，设置为 1
VEML6070_CMD_SD_DISABLE					= 0x00 # 关断禁用
VEML6070_CMD_SD_ENABLE					= 0x01 # 关断启用
VEML6070_CMD_READ_LSB					= 0x38 # 读取数据的 LSB
VEML6070_CMD_READ_MSB					= 0x39 # 读取数据的 MSB

class VEML6070():
	def __init__(self, address = VEML6070_DEFAULT_ADDRESS):
		self._addr = address
		self._bus  = Bus()
		self.write_command()
	
	def write_command(self):
		"""从给定的提供值中选择 UV 光命令"""
		COMMAND_CONFIG = (VEML6070_CMD_ACK_DISABLE | VEML6070_CMD_IT_1_2T | VEML6070_CMD_SD_DISABLE | VEML6070_CMD_RESERVED)
		self._bus.write_byte(VEML6070_DEFAULT_ADDRESS, COMMAND_CONFIG)
	
	def read_uvlight(self):
		"""读取数据 VEML6070_CMD_READ_MSB(0x73) 和 VEML6070_CMD_READ_LSB(0x71)，紫外线 MSB，紫外线 LSB"""
		data0 = self._bus.read_byte(VEML6070_CMD_READ_MSB)
		data1 = self._bus.read_byte(VEML6070_CMD_READ_LSB)
		
		# 转换数据
		uvlight = data0 * 256 + data1
		
		return {'u' : uvlight}


def main():

	veml6070 = VEML6070()

	## 退出处理程序 ##
	# 这个函数阻止 python 在你按下 control-C 时打印堆栈跟踪
	def SIGINTHandler(signum, frame):
		raise SystemExit

	# 这个函数让你在退出时运行代码，包括来自 abpdrrt005pg2a5 的函数
	def exitHandler():
		print("Exiting")
		sys.exit(0)
	
	while True:
		light = veml6070.read_uvlight()
		print("UV Value: {0}".format(light['u']))
		print(" *********************************** ")
		time.sleep(1)

if __name__ == '__main__':
	main()
```

:::tip
如果一切顺利，你将能够看到以下结果
:::

```python

(env)pi@raspberrypi:~ grove_uv_sensor
UV Value: 0
UV Value: 0
UV Value: 0
UV Value: 0
^CExiting

```

你可以通过简单地按下 `ctrl`+`c` 来退出这个程序。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - I2C UV 传感器 (VEML6070) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip)

- **[Zip]** [Seeed VEML6070 库](https://github.com/Seeed-Studio/Seeed_VEML6070/archive/master.zip)

- **[PDF]** [VEML6070 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/VEML6070.pdf)

- **[PDF]** [VEML6070 应用笔记](https://github.com/Seeed-Studio/Seeed_VEML6070/raw/master/doc/designingveml6070.pdf)

## 项目

这是本产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>