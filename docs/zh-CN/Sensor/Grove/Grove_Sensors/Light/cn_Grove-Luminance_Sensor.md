---
description: Grove - 亮度传感器
title: Grove - 亮度传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Luminance_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Luminance.jpg" /></div>

Grove - 亮度传感器检测表面区域的环境光强度。它使用 **APDS-9002** 模拟输出环境光光敏传感器。该传感器的响应特性更接近人眼。

这款亮度传感器可用于需要在住宅或商业照明中进行自动光线调节的应用。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

规格参数
-------------

| 参数                   | 值        |
|-----------------------------|--------------|
| 工作电压                         | 2.4V ~ 5.5V  |
| 线性输出范围         | 0.0 ~ 2.3V   |
| 亮度测量范围 | 0 ~ 1000 Lux |

:::tip
更多关于Grove模块的详细信息请参考 [Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

演示
-------------

**将Grove亮度传感器与Seeduino Lotus连接**

1.使用Grove连接器将Grove-亮度传感器插入Seeeduino Lotus的A0端口。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Interface_Grove-Luminance.jpg" /></div>

2.在arduino草图中复制以下代码。

```
float VoutArray[] =  { 0.0011498,  0.0033908,   0.011498, 0.041803,0.15199,     0.53367, 1.3689,   1.9068,  2.3};
float  LuxArray[] =  { 1.0108,     3.1201,  9.8051,   27.43,   69.545,   232.67,  645.11,   730.52,  1000};

void setup() {
    // put your setup code here, to run once:
    Serial.begin(9600);

}

void loop() {
    // put your main code here, to run repeatedly:

    Serial.print("Vout =");
    Serial.print(readAPDS9002Vout(A0));
    Serial.print(" V,Luminance =");
    Serial.print(readLuminance(A0));
    Serial.println("Lux");
    delay(500);
}

float readAPDS9002Vout(uint8_t analogpin)
{
    // MeasuredVout = ADC Value * (Vcc / 1023) * (3 / Vcc)
    // Vout samples are with reference to 3V Vcc
    // The above expression is simplified by cancelling out Vcc
    float MeasuredVout = analogRead(A0) * (3.0 / 1023.0);
    //Above 2.3V , the sensor value is saturated

    return MeasuredVout;

}

float readLuminance(uint8_t analogpin)
{

    // MeasuredVout = ADC Value * (Vcc / 1023) * (3 / Vcc)
    // Vout samples are with reference to 3V Vcc
    // The above expression is simplified by cancelling out Vcc
    float MeasuredVout = analogRead(A0) * (3.0 / 1023.0);
    float Luminance = FmultiMap(MeasuredVout, VoutArray, LuxArray, 9);

    /**************************************************************************

    The Luminance in Lux is calculated based on APDS9002 datasheet -- > Graph 1
    ( Output voltage vs. luminance at different load resistor)
    The load resistor is 1k in this board. Vout is referenced to 3V Vcc.

    The data from the graph is extracted using WebPlotDigitizer
    http://arohatgi.info/WebPlotDigitizer/app/

    VoutArray[] and LuxArray[] are these extracted data. Using MultiMap, the data
    is interpolated to get the Luminance in Lux.

    This implementation uses floating point arithmetic and hence will consume
    more flash, RAM and time.

    The Luminance in Lux is an approximation and depends on the accuracy of
    Graph 1 used.

    ***************************************************************************/

    return Luminance;
}


//This code uses MultiMap implementation from http://playground.arduino.cc/Main/MultiMap

float FmultiMap(float val, float * _in, float * _out, uint8_t size)
{
    // take care the value is within range
    // val = constrain(val, _in[0], _in[size-1]);
    if (val <= _in[0]) return _out[0];
    if (val >= _in[size-1]) return _out[size-1];

    // search right interval
    uint8_t pos = 1;  // _in[0] allready tested
    while(val > _in[pos]) pos++;

    // this will handle all exact "points" in the _in array
    if (val == _in[pos]) return _out[pos];

    // interpolate in the right segment for the rest
    return (val - _in[pos-1]) * (_out[pos] - _out[pos-1]) / (_in[pos] - _in[pos-1]) + _out[pos-1];
}
```

3.将代码上传到seeeduino lotus。

4.将Grove光照传感器放在光源下或需要检测光照度的地方。

5.打开串口监视器。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/LuminanceOutput.png" /></div>

6.Vout和Lux值将显示在串口监视器中。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [Grove-光照传感器演示代码](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance.zip)
- [Grove-光照传感器eagle文件](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip)
- [Grove-光照传感器原理图 (PDF)](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor_v1.0.pdf)
- [APDS-900数据手册](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/APDS-9002-.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Luminance_Sensor -->

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