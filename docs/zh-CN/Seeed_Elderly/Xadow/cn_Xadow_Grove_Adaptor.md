---
description: Xadow - Grove 转接器
title: Xadow - Grove 转接器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Grove_Adaptor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/X_adaptor_01.jpg) 

Xadow Grove 转接器是一种将 Grove 接口转换为 Xadow 接口以兼容 Xadow 系统的设备。它可以实现以下功能：两个模拟 Grove 接口的模拟信号通过 ADC 输出到 Xadow I2C 总线。来自 Grove I2C 接口的信号将直接传递到 Xadow I2C 总线，无需转换。基于 ADCC121C021 的 A/D 转换，提供 12 位精度 ADC，实现高精度。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Adaptor-p-1624.html)

##  规格
---
*   工作电压：3.3V

*   A/D 分辨率：12 位

*   采样率：188.9 ksps

*   I2C 地址可变

*   尺寸：25.43mm x 20.35mm

##  演示
---
接下来我们将展示如何使用 Xadow Grove 转接器读取 Grove 模块的输出值。

**测量模拟信号**

如果需要测量 Grove 模块输出的模拟信号，需要将 Grove 模块连接到标记为 "A0" 和 "A1" 的模拟 Grove 接口。

**硬件安装应如下所示：**

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor2.jpg)

这里 Grove - 气体传感器输出的模拟信号连接到 A0，因此测试代码中使用的 I2C 地址为 0x58（默认）。换句话说，当 Grove - 气体传感器连接到 A1 接口时，I2C 地址应为 0x59。

**测试代码如下：**
```
<pre>
#include <Wire.h>
#include <Streaming.h>

#define ADDR_ADC121             0x58

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
float analogVal=0;         // 转换
void init_adc()
{
    Wire.beginTransmission(ADDR_ADC121);        // 传输到设备
    Wire.write(REG_ADDR_CONFIG);                // 配置寄存器
    Wire.write(0x20);
    Wire.endTransmission();
}

void read_adc()     //unsigned int *data
{

    Wire.beginTransmission(ADDR_ADC121);        // 传输到设备
    Wire.write(REG_ADDR_RESULT);                // 获取结果
    Wire.endTransmission();

    Wire.requestFrom(ADDR_ADC121, 2);           // 从设备请求 2 字节
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
{
    read_adc();//adcRead);
    delay(50);
}</pre>
```
将代码上传到 Xadow 主板，然后打开串口监视器观察输出值：

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Xadow_Grove_Adaptor_Result.png)

**测量 I2C 信号**

当 Grove 模块的通信模式为 I2C 时，需要将 Grove 模块连接到 Xadow Grove 转接器的 I2C 接口。此时，Xadow Grove 转接器的服务器将信号传递到 Xadow I2C 总线，无需 ADC 转换。
以 Grove - 数字光传感器为例，我们来学习它的使用方法。

**硬件安装：**

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor1.jpg)


**下载代码：**

<!-- *   从 Github 网站下载 Grove - 数字光传感器的 [Digital_Light_Library](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor) 并安装到 Arduino 库中。参考 Wiki 页面中的 [如何安装 Arduino 库](/cn/How_to_install_Arduino_Library)，您将熟悉安装过程。
*   安装完成后打开代码。 -->

```
<pre>
/* 数字光传感器演示 V1.0
* 将传感器连接到 Arduino 的 I2C 端口以使用。
*
* By:https://www.seeedstudio.com
*/
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
void setup()
{
  Wire.begin();
  Serial.begin(9600);
  TSL2561.init();
}

void loop()
{
  unsigned long  Lux;
  TSL2561.getLux();
  Serial.print("The Light value is: ");
  Serial.println(TSL2561.calculateLux(0,0,1));
  delay(1000);
  }</pre>
```

*   打开串口监视器观察 LUX 值。人为改变周围环境的光强度，您将看到输出值的明显变化。


![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Digital_Light_Sensor_Score_Picture.jpg)

<!-- Xadow Grove 转接器中使用的 ADC IC ADC121C021 已被应用于 Grove - I2C ADC。当然，改变 I2C 地址的方法是相同的。请参考 Grove - I2C ADC 的 [参考部分](/cn/Grove-I2C_ADC#Reference) 了解变更方法。此外，板上的 "0" 和 "1" 是 A0 接口的地址变更区域，"2" 和 "3" 是 A1 接口的地址变更区域。 -->

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
*   [Xadow Grove 适配器 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip)

*   [A/DC IC ADC121C021 数据手册](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>