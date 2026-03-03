---
description: Xadow - 紫外线传感器
title: Xadow - 紫外线传感器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_UV_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/xadow%20uv.jpg)

Xadow 紫外线传感器适用于测量阳光中的紫外线辐射。它可以检测波长为 290 ~ 400 nm 的紫外线。紫外线传感器输出与紫外线强度对应的数字电压值。通过输出电压和紫外线的关系图，我们可以轻松了解当前的紫外线指数。Xadow 紫外线传感器可以通过 3.3V 供电，并且兼容 Xadow 系统。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-UV-Sensor-p-1694.html)

##  规格
---
*   可检测 UV-A 和 UV-B 波段
*   紫外线波长检测范围：290 ~ 400nm
*   最大灵敏度波长：330nm
*   内置 ADC 电路，高转换精度
*   测试精度：±0.1 紫外线指数
*   工作温度：-25 ~ 70 ℃
*   尺寸：25.43mm x 20.35mm

##  演示
---
Xadow 紫外线传感器可以输出与紫外线指数对应的电压值。由于输出电压与紫外线指数之间存在线性关系，您还可以通过公式直接查看紫外线指数。接下来我们展示如何使用紫外线传感器获取紫外线指数并将其显示在 OLED 屏幕上。

<!-- 所需的 Xadow 模块：[Xadow - 主板](/cn/Xadow_Main_Board/)、[Xadow - OLED 128*64](/cn/Xado_OLED_128multiply64/)、**Xadow - 紫外线传感器** -->

**硬件安装**

:::note
    当将 Xadow 紫外线传感器连接到 Xadow 主板时，您需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::

**下载代码**

<!-- *   首先，您需要确保 Arduino 库中有 [OLED_Display12864](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/OLED_Display12864.zip)。如果没有，请点击 [这里](https://github.com/Seeed-Studio/Grove_OLED_Display_128X64) 下载并添加到 Arduino 库中。参考 wiki 页面中的 [如何安装 Arduino 库](/cn/How_to_install_Arduino_Library/)，您将熟悉操作。 -->

*   现在您可以将代码上传到 Xadow 主板，只需将代码复制并粘贴到 Arduino IDE 中。

```
#include <Wire.h>
#include <SeeedOLED.h>
#include <Streaming.h>

#define ADDR_ADC121    0x5A

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
float analogVal=0;
float UVIndex = 0;
void init_adc()
{
    Wire.beginTransmission(ADDR_ADC121);        // 传输到设备
    Wire.write(REG_ADDR_CONFIG);                // 配置寄存器
    Wire.write(0x20);
    Wire.endTransmission();
}
void setup()
{
    Wire.begin();
    Serial.begin(38400);
    SeeedOled.init();  // 初始化 SEEED OLED 显示屏
    SeeedOled.clearDisplay();  // 清屏并将起始位置设置为左上角

    init_adc();
}

void loop()
{
    readVoltage();
    //SeeedOled.clearDisplay();
    SeeedOled.setTextXY(1,0);
    SeeedOled.putString("Voltage: ");
    SeeedOled.setTextXY(1,8);
    SeeedOled.putFloat(analogVal);
    SeeedOled.setTextXY(1,12);
    SeeedOled.putString("mV");
    SeeedOled.setTextXY(2,0);
    SeeedOled.putString("UVIndex: ");
    SeeedOled.setTextXY(2,8);
    SeeedOled.putFloat(UVIndex);
    delay(50);
}
void readVoltage()     //unsigned int *data
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
    delay(50);
    analogVal = getData*V_REF/4096/2;
    Serial.print("analogVal:");
    Serial.print(analogVal);
    Serial.println("mV");
    UVIndex = analogVal/9.71;
    Serial.print("UVIndex:");
    Serial.println(UVIndex);

}
```

*   打开串口监视器，电压值和紫外线指数将显示：

*   您可以在 OLED 屏幕上看到：

*   通过参考下图，计算紫外线指数并不困难。

![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Voltage_and_UVI.jpg)

关于 Xadow 紫外线传感器，我们使用了一个电阻，其阻值为 3M，因此您需要参考 RL=3M 的这条线。

观察电压与紫外线的关系是线性的。通过计算可以得到公式：紫外线指数 = 电压 / 9.71，该公式已在代码中使用。

## 参考
---
### UV传感器 I2C 地址

Xadow UV传感器具有一个七位硬件地址，称为从设备地址。该从设备地址由ADR0和ADR1地址选择输入配置。ADR0和ADR1可以为低电平、悬空或连接到高电平。这些输入的状态设置了模块在I2C总线上响应的硬件地址（见下表）。

<table cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">从设备地址[A6 - A0]</th>
<th colspan="2" scope="col">ADR0和ADR1输入状态</th>
</tr>
<tr>
<td scope="col">ADR1</td>
<td scope="col">ADR0</td>
</tr>
<tr>
<td scope="row">1010000(0x50)</td>
<td>悬空</td>
<td>悬空</td>
</tr>
<tr>
<td scope="row">1010001(0x51)</td>
<td>悬空</td>
<td>低电平</td>
</tr>
<tr>
<td scope="row">1010010(0x52)</td>
<td>悬空</td>
<td>高电平</td>
</tr>
<tr>
<td scope="row">1010100(0x54)</td>
<td>低电平</td>
<td>悬空</td>
</tr>
<tr>
<td scope="row">1010101(0x55)</td>
<td>低电平</td>
<td>低电平</td>
</tr>
<tr>
<td scope="row">1010110(0x56)</td>
<td>低电平</td>
<td>高电平</td>
</tr>
<tr>
<td scope="row">1011000(0x58)</td>
<td>高电平</td>
<td>悬空</td>
</tr>
<tr>
<td scope="row">1011001(0x59)</td>
<td>高电平</td>
<td>低电平</td>
</tr>
<tr>
<td scope="row">1011010(默认 0x5A)</td>
<td>高电平</td>
<td>高电平</td>
</tr>
</table>

在默认模式下，ADR0和ADR1连接到“高电平”（参见Xadow UV传感器）。

### UV传感器的光谱响应曲线

![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Responsivity.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
[Xadow UV传感器 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>