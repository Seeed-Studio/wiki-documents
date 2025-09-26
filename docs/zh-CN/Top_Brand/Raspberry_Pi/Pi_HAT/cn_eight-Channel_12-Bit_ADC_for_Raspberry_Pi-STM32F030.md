---
description: 树莓派 8 通道 12 位 ADC (STM32F030)
title: 树莓派 8 通道 12 位 ADC (STM32F030)
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/main.jpg)

ADC 是树莓派的常见配件。如今许多廉价的 MCU 都内置了 ADC，因此我们基于 STM32F030 制作了这款 8 通道 ADC，STM32F030 是一款高性价比、低功耗的 ARM Cortex M0 MCU。我们从 MCU 引出了 8 通道 ADC，并集成了 4 个模拟 Grove 连接器，这样您也可以将模拟 Grove 模块与其配合使用。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- CRC 计算单元
- 5 通道直接内存访问 (DMA) 控制器
- 带闹钟和从停止/待机状态周期性唤醒的日历 RTC
- 定时器
  - 高级控制定时器
  - 通用定时器和基本定时器
  - 独立和系统看门狗定时器
  - SysTick 定时器
- 实时时钟 (RTC)
- 串行线调试 (SWD)
- 支持树莓派 3B/3B+/4

## 规格参数

|项目|值|
|---|---|
|工作电源电压|3.3V|
|ADC 分辨率|12 位|
|最大时钟频率|48 MHz|
|程序存储器大小|16kB|
|数据 RAM 大小|4 kB|
|数据总线宽度|32 位|
|工作温度|-40～85℃|
|通信接口|I2C|
|I2C 地址|0x04（默认）|
|尺寸|长：65mm 宽：55mm 高：18mm|
|重量|25.9g|
|包装尺寸|长：140mm 宽：75mm 高：25mm|
|毛重|45g|

## 典型应用

- 温度测量
- 消费品

## 硬件概述

### 引脚定义

**概述**

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin.jpg)

**GPIO**

与树莓派相同的引脚定义。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-5.jpg)

**SWD**

我们使用 SWD 端口向此板烧录固件。此外，您可以在此部分看到引脚 9/引脚 10/引脚 11。这三个引脚未被任何 Grove 端口使用，您可以自由使用它们而无需担心引脚冲突。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-1.jpg)

**Grove 模拟端口**

由于树莓派没有内置 ADC，因此基于 STM32 的 ADC 板允许模拟传感器与您的树莓派配合工作。

此板上有 4 个 Grove 模拟插座，因此此 ADC 板可以通过使用 [Grove - 通用 4 针扣式 5cm 线缆](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html) 直接与 Grove 模块配合工作。

模拟传感器将模拟电压输入到 12 位 ADC。ADC 将模拟数据转换为数字数据后，通过 I2C 接口将数字数据输入到树莓派。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-4.jpg)

**母针头端口**

与 Grove 模拟端口相同，但此部分不使用 [Grove - 通用 4 针扣式 5cm 线缆](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html)，您需要使用[面包板跳线包](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)。

8 个模拟接口端口，A0 ~ A7。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-3.jpg)

**螺丝端子**

与上述相同，但连接方式不同。这组引脚连接器包括模拟引脚 A0 ~ A7、Vcc 和 GND。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-2.jpg)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 硬件

**所需材料**

|Raspberry pi|8通道12位ADC for Raspberry Pi (STM32F030)(STM32F030)|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/thumbnail.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html)|

- **步骤1**. 将8通道12位ADC for Raspberry Pi (STM32F030)插入Raspberry Pi。
- **步骤2**. 通过USB线缆将Raspberry Pi连接到PC。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection1.jpg)

### 软件

:::caution
如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::

- **步骤1**. 通过克隆grove.py库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 2**. 安装 grove.py 库

```
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
python3 adc_8chan_12bit.py 

```

以下是 adc_8chan_12bit.py 代码。

```python

import time
from grove.i2c import Bus

ADC_DEFAULT_IIC_ADDR = 0X04

ADC_CHAN_NUM = 8

REG_RAW_DATA_START = 0X10
REG_VOL_START = 0X20
REG_RTO_START = 0X30

REG_SET_ADDR = 0XC0


class Pi_hat_adc():
    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        self.bus=Bus(bus_num)
        self.addr=addr

    
    #获取所有原始ADC数据，最大值为4095，因为它是12位ADC
    def get_all_adc_raw_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array
    
    def get_nchan_adc_raw_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+n,2)
        val =data[1]<<8|data[0]
        return val
    #获取所有数据，单位为毫伏。
    def get_all_vol_milli_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array
    
    def get_nchan_vol_milli_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
        val =data[1]<<8|data[0]
        return val

    #获取所有数据比率，单位为0.1%
    def get_all_ratio_0_1_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array
    
    def get_nchan_ratio_0_1_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+n,2)
        val =data[1]<<8|data[0]
        return val


ADC = Pi_hat_adc()
def main():
    raw_data=ADC.get_all_adc_raw_data()
    vol_data=ADC.get_all_vol_milli_data()
    ratio_data=ADC.get_all_ratio_0_1_data()
    print("每个通道的原始数据:(1-8通道)(12位-最大值=4096):")
    print(raw_data)
    print("每个通道的电压:(单位:毫伏,最大值=3300毫伏):")
    print(vol_data)
    print ("每个通道的比率(单位0.1%,最大值=100.0%):")
    print(ratio_data)

    print(" ")
    print("注意!!!:")
    print("ADC引脚的默认设置为浮空输入。")
    print(" ")

if __name__ == '__main__':
    main()


```

:::tip
    如果一切顺利，您将能够看到以下结果
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 adc_8chan_12bit.py 
raw data for each channel:(1-8chan)(12 bit-max=4096):
[2177, 2098, 2064, 2038, 2127, 2066, 2172, 2145]
voltage for each channel:(unit:mv,max=3300mv):
[1599, 1741, 1668, 1658, 1644, 1787, 1694, 1677]
ratio for each channel(unit 0.1%,max=100.0%):
[521, 544, 514, 504, 500, 559, 524, 505]
 
NOTICE!!!:
The default setting of ADC PIN is floating_input.
 


```

### 示例

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 来运行此命令行。
:::

我们将以 [Grove - 声音传感器](https://wiki.seeedstudio.com/cn/Grove-Sound_Sensor/) 为例来介绍如何使用这个板子。

硬件连接

- **步骤 1**. 将 8 通道 12 位 ADC for Raspberry Pi (STM32F030) 插入 Raspberry Pi。
- **步骤 2**. 将 Grove - 声音传感器连接到 ADC 模块的 A0 端口。
- **步骤 3**. 通过 USB 线缆将 Raspberry Pi 连接到 PC。

硬件连接图

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection2.jpg)

在命令行界面中输入以下命令 ++python grove_sound_sensor.py 0++。

```cpp

pi@raspberrypi:~/grove.py/grove $ python3 grove_sound_sensor.py 0
Detecting sound...
Sound value: 433
Sound value: 342
Sound value: 443
Sound value: 300
Sound value: 632
Sound value: 258
Sound value: 591
Sound value: 267
Sound value: 871
^CTraceback (most recent call last):
  File "grove_sound_sensor.py", line 67, in <module>
    main()
  File "grove_sound_sensor.py", line 64, in main
    time.sleep(.3)
KeyboardInterrupt

```

您可以通过简单地按下 `ctrl`+`c` 来退出此程序。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

<br />

:::note产品变更说明：

由于 ST32 系列芯片全球缺货，价格上涨数倍且没有明确的交货日期。我们不得不改用 MM32 芯片。具体替换型号如下：STM32F030F4P6TR 替换为 MM32F031F6P6。芯片替换后，产品功能、特性、使用方法和代码保持不变。需要注意的是固件版本已发生变化，出厂固件已根据不同芯片进行调整。如果您需要重新烧录固件，请下载对应芯片的固件。
:::

## 资源

- **[Zip]** [8通道12位ADC树莓派版（STM32F030）（STM32F030）Eagle文件](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip)

- **[Zip]** [MM32F031F6P6-固件](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_firmware.zip)

- **[Zip]** [8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) (STM32F030) 软件库](https://github.com/Seeed-Studio/grove.py)

- **[PDF]** [数据手册 STM32F030](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6_数据手册.pdf](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_Datasheet.pdf)

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