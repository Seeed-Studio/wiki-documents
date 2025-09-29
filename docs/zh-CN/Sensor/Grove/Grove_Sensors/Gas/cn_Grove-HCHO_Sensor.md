---
description: Grove - HCHO 传感器
title: Grove - HCHO 传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-HCHO_Sensor
last_update:
  date: 1/5/2023
  author: shuxu hu
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg" alt="pir" width={600} height="auto" /></p>


Grove - HCHO 传感器是一款半导体 VOC 气体传感器。其设计基于 WSP2110，其导电性随空气中 VOC 气体浓度的变化而变化。通过电路，导电性可以转换为与气体浓度相对应的输出信号。该传感器可以检测浓度高达 1ppm 的气体。它适用于检测甲醛、苯、甲苯和其他挥发性成分。该产品可用于检测家庭环境中的有害气体。因此，它是您改善室内环境生活质量的好助手。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-HCHO-Sensor.html)

<div class="admonition warning">
<p class="admonition-title">警告</p>
传感器值仅反映在允许误差范围内气体浓度的近似趋势，它不代表确切的气体浓度。检测空气中的某些成分通常需要更精确和昂贵的仪器，这无法通过单个气体传感器完成。如果您的项目旨在获得非常精确水平的气体浓度，那么我们不推荐这款气体传感器。
</div>

:::tip
    我们已经发布了 [Seeed 气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::
规格参数
-------------

-   工作电压：5.0V ± 0.3V
-   目标气体：HCHO、苯、甲苯、酒精
-   浓度范围：1~50 ppm
-   传感器电阻值(Rs)：10KΩ-100KΩ（在 10ppm HCHO 中）
-   灵敏度：Rs（在空气中）/Rs（10ppm HCHO）≥5

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
支持的平台
-------------------
<!-- 
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

入门指南
---------------

Grove - HCHO 传感器可用于检测 VOCs，如 HCHO、甲苯、苯、酒精。这里我们以 HCHO 为例来演示如何使用这个传感器。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>


```
// Grove - HCHO 传感器演示

#define Vc 4.95

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    float R0=(1023.0/sensorValue)-1;
    Serial.print("R0 = ");
    Serial.println(R0);
    delay(500);
}
```

上传代码后，打开串口监视器以获取正常条件下的 R0（室外是最佳选择）。

用小螺丝刀调节 R1（蓝色电位器）的电阻，使 R0 的数值在 10-100 范围内，并记录该数值（我这里的 R0 数值是 34.28）。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png" alt="pir" width={600} height="auto" /></p>


在 `#define R0 ***` 中输入您的 R0 数值，然后上传代码。记住不要再调节 R1，除非您决定重新检测 R0。

```
// Grove - HCHO 传感器演示
#include <math.h>
#define Vc 4.95
//您刚才检测到的 R0 数值
#define R0 34.28

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    double Rs=(1023.0/sensorValue)-1;
    Serial.print("Rs = ");
    Serial.println(Rs);
    double ppm=pow(10.0,((log10(Rs/R0)-0.0827)/(-0.4807)));
    Serial.print("HCHO ppm = ");
    Serial.println(ppm);
    delay(1000);
}
```

然后将传感器移动到办公室，并读取 HCHO ppm 值：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png" alt="pir" width={600} height="auto" /></p>


从典型灵敏度曲线我们可以知道检测范围是 1-50ppm。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg" alt="pir" width={600} height="auto" /></p>


要检测其他 VOC 气体，您可以计算 Rs/R0，然后参考灵敏度特性图并找到气体浓度。或者使用以下 python 脚本来拟合典型灵敏度曲线并计算 a 和 b 的值：

`ppm = 10 ^ ((log10(Rs/R0) + a) / b)`

```
# coding=utf-8
# calculate a and b of HCHO
import numpy as np
import matplotlib.pyplot as plt

#get the measure data from the Typical Sensitivity Curve
x = np.array([1, 5, 10, 20, 40])
y = np.array([1.21, 0.56, 0.4, 0.3, 0.21])

plt.subplot(221)
plt.loglog(x,y,lw=2)
#plt.ylim(0,1.5)  
plt.xlabel('log(x)')  
plt.ylabel('log(y)')  
plt.show()  
```


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源
---------

-   [Grove - HCHO Sensor Eagle 文件](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip)
-   [Grove - HCHO Sensor PDF 原理图](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove%20-%20HCHO%20Sensor.pdf)
-   [WSP2110 数据手册（中文）](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/WSP2110.pdf)
-   [WSP2110 数据手册（英文）](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Wsp2110-1-.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_HCHO_Sensor -->

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>