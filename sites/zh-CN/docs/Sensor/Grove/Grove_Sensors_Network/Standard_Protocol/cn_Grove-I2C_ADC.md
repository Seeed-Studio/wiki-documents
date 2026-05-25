---
title: Grove - I2C ADC
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-I2C_ADC/
slug: /Grove-I2C_ADC
sku: 103020013
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2022-01-06'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/Grove-I2C_ADC/
---

![](https://files.seeedstudio.com/wiki/Grove-RGB-LED-Stick-20-WS2813-Mini/img/ssd.jpg)

Grove - I2C ADC 是一个基于 ADC121C021 的 12 位精度 ADC 模块。它通过提供恒定的参考电压来帮助您提高从模拟传感器收集的数值精度。由于其地址可变，您最多可以同时使用 9 个 I2C ADC。另一方面，该模块提供自动休眠功能，大大降低了功耗。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-I2C-ADC.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## 版本

|版本|默认 I2C 地址|
|---|---|
|Grove - I2C ADC v1.0/v1.1|0x55|
|Grove - I2C ADC v1.2|0x50|

## 特性

- 低功耗
- 高精度
- 自动断电模式
- 地址可变

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

-------------

| 项目            | 典型值 | 单位 |
|-----------------|---------|------|
| 工作电压 | 5.0     | VDC  |
| 分辨率      | 12      | 位  |
| 采样率     | 188.9   | ksps |
| 尺寸       | 40X20   | mm   |

## 支持的平台

-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 硬件概述

------------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Interface.png) -->
**J1:** 用于连接Arduino IIC接口，作为Grove - I2C ADC输出接口。

**J2:** 用于连接模拟传感器，作为Grove - I2C ADC输入接口。

**U1:** ADC121C021 IC，12位模数转换器

**黑线区域用于设置IIC地址。ADDR0和ADDR1出厂时连接到L。您可以通过对电路板进行少量修改将它们更改为"H"或悬空（悬空是既不连接"H"也不连接"L"）。详细信息请参见参考资料。**

## 入门指南

---------------

### 与Arduino配合使用

Grove - I2C ADC有两个接口：输入插座(J2)和输出插座(J1)。将模拟传感器连接到其输入插座，并通过Grove线缆将I2C ADC连接到Arduino/Seeeduino。

以Grove - 气体传感器为例，现在我们学习如何使用Grove - I2C ADC读取传感器数据。
硬件安装应该如下所示：

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_gas_sensor_data_using_I2C_ADC.jpg)

现在您可以使用下面的代码读取气体传感器值。

```
#include <Wire.h>
 
#define ADDR_ADC121             0x50 // For v1.0 & v1.1, I2C address is 0x55
 
#define V_REF 3.00
 
#define REG_ADDR_RESULT         0x00
#define REG_ADDR_ALERT          0x01
#define REG_ADDR_CONFIG         0x02
#define REG_ADDR_LIMITL         0x03
#define REG_ADDR_LIMITH         0x04
#define REG_ADDR_HYST           0x05
#define REG_ADDR_CONVL          0x06
#define REG_ADDR_CONVH          0x07
 
unsigned int getData;
float analogVal=0;         // convert
void init_adc()
{
  Wire.beginTransmission(ADDR_ADC121);        // transmit to device
  Wire.write(REG_ADDR_CONFIG);                // Configuration Register
  Wire.write(0x20);
  Wire.endTransmission();  
}
 
void read_adc()     //unsigned int *data
{
 
 
    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_RESULT);                // get result
    Wire.endTransmission();
 
    Wire.requestFrom(ADDR_ADC121, 2);           // request 2byte from device
    delay(1);
    if(Wire.available()<=2)
    {
      getData = (Wire.read()&0x0f)<<8;
      getData |= Wire.read();
    }
    Serial.print("getData:");
    Serial.println(getData);
    delay(5);
    Serial.print("The analog value is:");
    Serial.print(getData*V_REF*2/4096); 
    Serial.println("V");
}
void setup()
{
  Serial.begin(9600);
  Wire.begin();
  init_adc();
}
 
void loop()
{  read_adc();//adcRead);
   delay(50);
}
```

在上面的代码中，我们将Vref定义为3.0V，这是由I2C ADC模块决定的。这个参考电压比微控制器产生的电压更准确。您可以通过测量VA和GND之间的电压并使用该值替换上面代码中的3.00来使其更加准确。

现在您可以上传代码。

之后，打开串口监视器并读取数值：

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg)

<div class="admonition note">
<p class="admonition-title">注意</p>
Grove - I2C ADC的地址是可更改的，这意味着您可以重新定义其地址。这需要对电路板进行一些硬件修改。如果您考虑同时使用多个I2C ADC，请按照下面参考部分的说明进行操作。可以同时使用的I2C ADC的最大数量是9个，但Grove - Base Shield V1.2上只有4个I2C插座，所以如果您想使用超过4个I2C ADC，请使用<a href="/cn/Grove-I2C_Hub">Grove - I2C Hub</a>来创建更多I2C插座。
</div>
### 与Beaglebone Green配合使用

要开始编辑在BBG上运行的程序，您可以使用Cloud9 IDE。
作为熟悉Cloud9 IDE的简单练习，创建一个简单的应用程序来闪烁BeagleBone上4个用户可编程LED中的一个是一个很好的开始。

如果这是您第一次使用Cloud9 IDE，请访问此[**链接**](/cn/BeagleBone_Green)。

**步骤1：** 将Grove - UART插座设置为Grove - GPIO插座，只需按照此[**链接**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html)操作。

**步骤2：** 点击右上角的"+"创建新文件。

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9_newfile.jpg)

**步骤3：** 复制并粘贴以下代码到新标签页中

```
from Adafruit_I2C import Adafruit_I2C
import time
 
ADDR_ADC121 = 0x50
 
REG_ADDR_RESULT = 0x00
REG_ADDR_ALERT = 0x01
REG_ADDR_CONFIG = 0x02
REG_ADDR_LIMITL = 0x03
REG_ADDR_LIMITH = 0x04
REG_ADDR_HYST = 0x05
REG_ADDR_CONVL = 0x06
REG_ADDR_CONVH = 0x07
 
i2c = Adafruit_I2C(ADDR_ADC121)           
 
class I2cAdc:
    def __init__(self):
        i2c.write8(REG_ADDR_CONFIG, 0x20)
 
    def read_adc(self):
        "Read ADC data 0-4095."
        data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
        return data
 
if __name__ == '__main__':
    # Connect the Grove - I2C ADC to I2C Grove port of Beaglebone Green.
    adc = I2cAdc()
    while True:
        print 'sensor value ', adc.read_adc()
        time.sleep(.2)
```

**步骤4：** 通过点击磁盘图标保存文件，并给文件一个带有.py扩展名的名称。

**步骤5：** 将Grove I2C ADC连接到BBG上的Grove I2C插座。

**步骤6：** 运行代码。您会发现终端每2秒输出一次AD值。

参考资料
---------

### I2C地址设置

ADC I2C有一个七位硬件地址，由ADR0和ADR1决定。ADR0和ADR1默认在板内连接到L。但您可以更改它。例如，使用刀片切断L和ADR0之间的连接（如下图所示），然后您将ADR0的状态设为悬空（不连接任何东西）。如果此时您将ADR0和H焊接起来，那么您就将ADR0的值设为H。

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Change_I2C_Address.jpg)

您可以在下表中找到硬件I2C地址与ADR0和ADR1值之间的关系。

<table border="1" cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">
从机地址[A6 - A0]
</th>
<th colspan="2" scope="col">
ADR0和ADR1输入状态
</th>
</tr>
<tr>
<td scope="col">
ADR1
</td>
<td scope="col">
ADR0
</td>
</tr>
<tr>
<td scope="row">
1010000(0x50)
</td>
<td>
悬空
</td>
<td>
悬空
</td>
</tr>
<tr>
<td scope="row">
1010001(0x51)
</td>
<td>
悬空
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1010010(0x52)
</td>
<td>
悬空
</td>
<td>
H
</td>
</tr>
<tr>
<td scope="row">
1010100(0x54)
</td>
<td>
L
</td>
<td>
悬空
</td>
</tr>
<tr>
<td scope="row">
1010101(默认 0x55)
</td>
<td>
L
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1010110(0x56)
</td>
<td>
L
</td>
<td>
H
</td>
</tr>
<tr>
<td scope="row">
1011000(0x58)
</td>
<td>
H
</td>
<td>
悬空
</td>
</tr>
<tr>
<td scope="row">
1011001(0x59)
</td>
<td>
H
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1011010(0x5A)
</td>
<td>
H
</td>
<td>
H
</td>
</tr>
</table>

### I2C ADC能提高多少精度？

这里有一个我们做的实验，让您了解I2C ADC能为模拟传感器提高多少精度。首先，让我们检查通过Arduino/Seeeduino上的模拟端口直接从Grove - 气体传感器(MQ5)收集的值

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_Gas_Sensor_data.jpg)

我们上传下面的代码来获取数据。

```
    /*
     * Grove - 气体传感器(MQ5)  
     *
     * 气体传感器检测相关的气体密度， 
     * Arduino通过analogread获取结果。气体密度为 
     * 0~1，输出越大，气体越浓。
     * 在此演示中将传感器连接到A0；
     * 
     *  By: https://www.seeedstudio.com
    */
    #define Vref 4.95
    void setup() {
      Serial.begin(9600);
    }
     
    void loop() {
      float vol;
      int sensorValue = analogRead(A0);
      vol=(float)sensorValue/1023*Vref;
      Serial.print("传感器值为 ");
      Serial.println(sensorValue);
      Serial.print("模拟值为 ");
      Serial.print(vol);
      Serial.println("V");
      delay(100);
    }
```

结果是：

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_ADC_2.jpg)

默认情况下，Vref由Arduino生成，理论上为5V。但实际上这是一个浮动值，导致最终数据的偏差。使用Grove - I2C ADC时可以避免这种不准确性，因为它提供严格的3.0V作为Vref。
为了对比，在相同条件下，通过带有Grove - I2C ADC的电路收集的传感器值在示波器中显示如下：

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg)

为了找出哪个结果更接近实际情况，这里我们使用万用表测量传感器SIG引脚和GND引脚之间的电压。

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Measure_the_real_sensor_value_using_DMM.JPG)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

--------

- [I2C ADC Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip)
- [ADC121C021 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/ADC121C021_Datasheet.pdf)

## 项目

**BeagleBone Green 在 Artik Cloud 上的温度监控器** 将 BeagleBone Green 收集的 Grove 温度传感器数值发布到 Artik Cloud。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/LaurenceHR/beaglebone-green-temperature-monitor-on-artik-cloud-08ca3b/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_ADC -->

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