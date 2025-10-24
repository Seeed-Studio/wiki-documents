---
description: Grove - 12键电容式I2C触摸传感器V2 (MPR121)
title: Grove - 12键电容式I2C触摸传感器V2 (MPR121)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121
last_update:
  date: 1/19/2023
  author: jianjing Huang
---



![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/main.jpg)

**Grove - 12键电容式I2C触摸传感器V2 (MPR121)** 是一个多通道接近电容式触摸传感器。它是一个3合1模块，具有以下功能：电容感应、触摸感应和接近感应。

**电容感应**：该模块使用恒定直流电流电容感应方案。它可以测量从10 pF到超过2000 pF的电容，分辨率高达0.01 pF。

**触摸感应**：一旦获取电极电容数据，通过将其与电容基线值进行比较来确定电极的触摸/释放状态。

**接近感应**：MPR121的一个新功能是近距离接近感应系统。这意味着系统的所有电极可以被汇总在一起创建一个单一的大电极。

基于飞思卡尔MPR121，该传感器具有12个完全独立的电极，内置自动配置功能。得益于I2C接口，您只需一个Grove端口就可以检测所有12个电极信号，并且I2C地址是硬件可配置的，从0X5B到0X5D。这也使得多个**Grove - 12键电容式I2C触摸传感器V2 (MPR121)** 可以在单个系统中一起使用进行通道扩展，您可以构建一个包含最多36个电极的触摸系统。

该传感器是[Grove - I2C触摸传感器](https://www.seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html)的升级版本，为了满足Matsuzawa.Takashi（我们的一位客户）的需求，我们使I2C地址可更改，甚至比旧版本更便宜。所以如果您对所有Grove产品有任何建议，请随时联系我们。我们将始终倾听您的声音，这可能会带来另一次升级，甚至是一个新的Grove产品。请在[Grove 100+](https://www.seeedstudio.com/grove_100)页面上友善地写下您的建议。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CPq4VSAXBgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本变更

|项目| Grove - 12键电容式I2C触摸传感器V2 | Grove - I2C触摸传感器 |
|---|---|---|
|主芯片|MPR121|MPR121|
|I2C地址|可更改(0X5B ~ 0X5D)|不可修改(0X5A)|
|触摸传感器触头|x|√|
|输入接口|鳄鱼夹接口|DIP 2Pin母头|
|性价比|高|低|
|发布时间|2018年9月11日|2015年10月31日|

## 特性

- 内置 10 位 ADC
- 为每个电极输入集成独立的自动校准功能
- 完全独立的电极，内置自动配置功能
- I2C 接口，带有 IRQ 中断输出，用于通知电极状态变化
- 硬件可配置的 I2C 地址
- 12 个电极/电容感应输入，其中 8 个具有 LED 驱动和 GPIO 多功能
- 为每个电极输入自动配置充电电流和充电时间
- 为每个电极分别设置触摸和释放触发阈值，提供滞后和电极独立性

## 规格参数

|项目|数值|
|---|---|
|工作电压|3.3V / 5V|
|工作温度|-40°C 至 +85°C|
|存储温度范围|-40°C 至 +125°C|
|电容范围|10 pF 至超过 2000 pF|
|分辨率|0.01 pF|
|GPIO 单引脚源电流|12 mA|
|GPIO 单引脚灌电流|1.2 mA|
|接口|I2C|
|I2C 地址范围|0x5B,0x5C,0x5D|
|默认 I2C 地址|0x5B|

## 应用

- PC 外设
- MP3 播放器
- 遥控器
- 移动电话
- 照明控制

## 硬件概述

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/pin_map.jpg)

|引脚编号|引脚名称|功能|引脚复用|
|---|---|---|---|
|8|CH0| 通道0，电极0，输入电容值|-|
|9|CH1| 通道1，电极1，输入电容值|-|
|10|CH2| 通道2，电极2，输入电容值|-|
|11|CH3| 通道3，电极3，输入电容值|-|
|12|CH4| 通道4，电极4，输入电容值|GPIO 或 LED 驱动|
|13|CH5| 通道5，电极5，输入电容值|GPIO 或 LED 驱动|
|14|CH6| 通道6，电极6，输入电容值|GPIO 或 LED 驱动|
|15|CH7| 通道7，电极7，输入电容值|GPIO 或 LED 驱动|
|16|CH8| 通道8，电极8，输入电容值|GPIO 或 LED 驱动|
|17|CH9| 通道9，电极9，输入电容值|GPIO 或 LED 驱动|
|18|CH10| 通道10，电极10，输入电容值|GPIO 或 LED 驱动|
|19|CH11| 通道11，电极11，输入电容值|GPIO 或 LED 驱动|

:::tip
对于 CH0 ~ CH11，一旦获取电极电容数据，就会通过与电容基线值比较来确定电极的触摸/释放状态。您可以为每个通道单独设置基线值。引脚12 ~ 引脚19 是多功能的，这意味着您可以将它们配置为 GPIO 或 LED 驱动器，更多详细信息请参考飞思卡尔应用笔记 [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf)。
:::

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/pin_map_back_1.jpg)

:::caution
中央焊盘连接到地址线，您可以通过切断导线并重新焊接来更改 I2C 地址。为了您和他人的安全，请小心使用可能用到的刀具或焊枪。
:::

### 原理图

**电源**

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/schematic.jpg)

飞思卡尔 MPR121 的工作电压为 1.71V 至 3.6V，然而 Arduino 的电压为 3.3V 或 5V。为了使其与 5V 系统兼容，我们使用电压转换芯片为飞思卡尔 MPR121 提供 3.3V 电压。

**双向电平转换电路**

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/schematic_1.jpg)

这是一个典型的双向电平转换电路，用于连接 I2C 总线的两个不同电压部分。该传感器的 I<sup>2</sup>C 总线使用 3.3V，如果 Arduino 的 I<sup>2</sup>C 总线使用 5V，则需要此电路。在上面的原理图中，**Q1** 和 **Q2** 是 N 沟道 MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，充当双向开关。为了更好地理解这部分，您可以参考 [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
上述提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 与Arduino一起使用

在这一部分，我们将向您展示如何使用**Grove - 12键电容式I2C触摸传感器V2 (MPR121)**作为触摸传感器，至于如何将其配置为电容传感器或接近传感器，请查看[数据手册](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/MPR121.pdf)。

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | I2C Touch Sensor V2|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您拥有的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都配有一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤1.** 将Grove - 12键电容式I2C触摸传感器V2 (MPR121)连接到Base Shield的**I2C**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 通过USB线将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/connect.jpg)

:::note
如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino     |  Grove-MPR121          |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                  |

#### 软件

:::note
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 从Github下载[Grove触摸传感器MPR121](https://github.com/linux-downey/Grove_touch_sensor_MPR121)库。

- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Arduino安装库。

- **步骤3.** 重启Arduino IDE。打开示例，您可以通过以下三种方式打开：
    1. 在Arduino IDE中通过路径直接打开：**文件 --> 示例 --> Grove触摸传感器MPR121 --> MPR121_demo**。
    ![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/path.jpg)

    2. 在您的计算机中点击**MPR121_demo.ino**打开，您可以在**xxxx\Arduino\libraries\Grove_touch_sensor_MPR121-master**中找到它，**XXXX**是您安装Arduino IDE的位置。
    ![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/path_1.jpg)

    3. 或者，您可以直接点击代码块右上角的图标![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)将以下代码复制到Arduino IDE的新草图中。

```cpp
#include "Seeed_MPR121_driver.h"

Mpr121 mpr121;

u16 touch_status_flag[CHANNEL_NUM]={0};
void setup()
{
  s32 ret=0;
  Serial.begin(115200);
  if(mpr121.begin()<0)
  {
    Serial.println("Can't detect device!!!!");
  }
  else
  {
    Serial.println("mpr121 init OK!");
  }
  delay(100);
}
void loop()
{
  u16 result=0;
  u16 filtered_data_buf[CHANNEL_NUM]={0};
  u8 baseline_buf[CHANNEL_NUM]={0};
  
  result=mpr121.check_status_register();

  mpr121.get_filtered_reg_data(&result,filtered_data_buf);

  for(int i=0;i<CHANNEL_NUM;i++)
  {
    if(result&(1<<i))                             /*key i is pressed!!*/
    {
      if(0==touch_status_flag[i])             
      { 
        touch_status_flag[i]=1;
        Serial.print("key ");
        Serial.print(i);
        Serial.println("pressed");
      }
    }
    else
    {
      if(1==touch_status_flag[i])
      {
        touch_status_flag[i]=0;
        Serial.print("key ");
        Serial.print(i);
        Serial.println("release");
      }
    }
  }
  delay(50); 
}
```

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下`ctrl`+`shift`+`m`键。将波特率设置为**115200**。

:::tip
如果一切顺利，您将得到结果。当您触摸CH0 ~ CH11焊盘时，将触发**key ?pressed**和**key ?release**
:::

```cpp
mpr121 inmpr121 init OK!
key 11pressed
key 11release
key 10pressed
key 10release
key 0pressed
key 0release
key 2pressed
key 2release

```

### 与Raspberry Pi一起使用

#### 硬件

- **步骤 1.** 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| I2C Touch Sensor V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/thumbnail.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html)|

- **步骤 2.** 将Grove Base Hat插入Raspberry Pi。
- **步骤 3.** 将Grove - 12键电容式I2C触摸传感器V2 (MPR121)连接到Base Hat的**I2C**端口。
- **步骤 4.** 通过USB线将Raspberry Pi连接到PC。
![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/rasp_MPR121.jpg)

#### 软件

:::caution
如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::

- **步骤 1.** 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤 2.** 通过克隆grove.py库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3.** 执行以下命令运行代码。

```
cd grove.py/grove
python3 grove_12_chan_touch_sensor_MPR121.py
```

以下是grove_12_chan_touch_sensor_MPR121.py代码。

```python
import time
from grove.i2c import Bus


TOUCH_SENSOR_DEFAULT_ADDR                 = 0x5b

MODE_CONFIG_REG_ADDR                      = 0x5e
GLOBAL_PARAM_REG_ADDR_L                   = 0x5c
TOUCH_STATUS_REG_ADDR_L                   = 0x00
SET_DEBOUNCE_REG_ADDR                     = 0x5b

FILTERED_DATA_REG_START_ADDR_L            = 0x04
CHANNEL_NUM                               = 12

STOP_MODE                                 = 0
NORMAL_MODE                               = 0x3c

class TouchSensorMpr121():
    def __init__(self,bus_num = 1,addr = TOUCH_SENSOR_DEFAULT_ADDR):
        self.bus = Bus(bus_num)
        self.addr = addr
        self.threshold = 0
        self.touch_flag = [0]*CHANNEL_NUM

    def sensor_init(self):
        self._set_mode(STOP_MODE)
        data = [0x23,0x10]
        self._set_global_param(data)
        self._set_debounce(0x22)
        self._set_mode(NORMAL_MODE)

    def set_threshold(self,threshold):
        self.threshold = threshold

    def wait_for_ready(self):
        time.sleep(.2)

    def _set_mode(self,mode):
        self.bus.write_byte_data(self.addr,MODE_CONFIG_REG_ADDR,mode)
    
    def _set_global_param(self,data):
        self.bus.write_i2c_block_data(self.addr,GLOBAL_PARAM_REG_ADDR_L,data)
    
    def _set_debounce(self,data):
        self.bus.write_byte_data(self.addr,SET_DEBOUNCE_REG_ADDR,data)

    def _check_status_register(self):
        data_status = self.bus.read_i2c_block_data(self.addr,TOUCH_STATUS_REG_ADDR_L,2)
        return data_status
    
    def get_filtered_touch_data(self,sensor_status):
        result_value = []
        for i in range(CHANNEL_NUM):
            time.sleep(.01)
            if(sensor_status & (1<<i)):
                channel_data = self.bus.read_i2c_block_data(self.addr,FILTERED_DATA_REG_START_ADDR_L+2*i,2)
                result_value.append(channel_data[0] | channel_data[1]<<8 )
            else:
                result_value.append(0)
        return result_value

    def listen_sensor_status(self):
        data = self._check_status_register()
        touch_status = data[0] | (data[1]<<8) 
        touch_result_value = self.get_filtered_touch_data(touch_status)

        for i in range(CHANNEL_NUM):
            if(touch_result_value[i] < self.threshold ):
                touch_result_value[i] = 0
        return touch_result_value
    
    def parse_and_print_result(self,result):
        for i in range(CHANNEL_NUM):
            if(result[i] != 0):
                if(0 == self.touch_flag[i]):
                    self.touch_flag[i] = 1
                    print("Channel %d is pressed,value is %d" %(i,result[i]))
            else:
                if(1 == self.touch_flag[i]):
                    self.touch_flag[i] = 0
                    print("Channel %d is released,value is %d" %(i,result[i]))
        


mpr121 = TouchSensorMpr121() 
def main():
    mpr121.sensor_init()
    mpr121.set_threshold(0x60)
    mpr121.wait_for_ready()
    while 1:
        result = mpr121.listen_sensor_status()
        mpr121.parse_and_print_result(result)
        time.sleep(.1)

if __name__  == '__main__':
    main()
```

:::tip
如果一切顺利，您将得到结果。当您触摸CH0 ~ CH11焊盘时，将触发**channel # pressed**和**Channel # released**以及相应的压力值。
:::

```cpp
>>> %Run grove_12_chan_touch_sensor_MPR121.py
    Channel 8 is pressed, value is 308
    Channel 8 is released, value is 0
    Channel 9 is pressed, value is 170
    Channel 9 is released, value is 0
    Channel 10 is pressed, value is 340
    Channel 8 is pressed, value is 180
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 12 Key Capacitive I2C Touch Sensor V2 eagle 文件](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121.zip)

- **[Zip]** [Grove touch sensor MPR121 库](https://github.com/linux-downey/Grove_touch_sensor_MPR121/archive/master.zip)

- **[PDF]** [MPR121 数据手册](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/MPR121.pdf)

- **[PDF]** [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf)

## 项目

这是本产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**叶子钢琴**：我们使用触摸传感器制作了一架钢琴，并用叶子作为钢琴键。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**玩转 Scratch**：如何使用触摸传感器玩 Scratch 游戏？

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed' width='350'></iframe>

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