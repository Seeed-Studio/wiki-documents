---
description: Grove - 火焰传感器
title: Grove - 火焰传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Flame_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Flame_Sensor_01.jpg" /></div>

Grove - 火焰传感器可用于检测火源或其他波长在760nm - 1100nm范围内的光源。它基于YG1006传感器，这是一个高速高灵敏度的NPN硅光电晶体管。由于其黑色环氧树脂封装，该传感器对红外辐射敏感。在消防机器人比赛中，该传感器发挥着非常重要的作用，它可以用作机器人的眼睛来寻找火源。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## 特性

- Grove接口
- 高光敏感度
- 快速响应时间
- 易于使用
- 灵敏度可调

:::tip
更多关于Grove模块的详细信息请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
电压
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.30
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
电流
</th>
<td>
/
</td>
<td>
20
</td>
<td>
/
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
光谱带宽范围
</th>
<td>
760
</td>
<td>
940
</td>
<td>
1100
</td>
<td>
nm
</td>
</tr>
<tr align="center">
<th scope="row">
检测范围
</th>
<td>
0
</td>
<td>
~
</td>
<td>
1
</td>
<td>
m
</td>
</tr>
<tr align="center">
<th scope="row">
响应时间
</th>
<td colspan="3">
15
</td>
<td>
μS
</td>
</tr>
<tr align="center">
<th scope="row">
工作温度
</th>
<td>
-25
</td>
<td>
~
</td>
<td>
85
</td>
<td>
℃
</td>
</tr>
</table>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

该模块主要用于检测红外光。它通过比较器输出数字信号 0 和 1。当检测到红外光时，输出值为 0。灵敏度可通过精密电位器调节。

### 与 Arduino 一起使用

该模块主要用于检测红外光。它通过比较器输出数字信号 0 和 1。当检测到红外光时，输出值为 0。灵敏度可通过精密电位器调节。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield| Grove-火焰传感器 |Grove - 红色 LED|
|--------------|-------------|-----------------|-----|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|[立即购买](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- **步骤 2.** 将 Grove-火焰传感器连接到 Grove-Base Shield 的 **D2** 端口。
- **步骤 3.** 将 Grove - 红色 LED 连接到 Grove-Base Shield 的 **D3** 端口。
- **步骤 4.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 5.** 通过 USB 线将 Seeeduino 连接到 PC。

<!--link-->
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_ardu.jpg" /></div>

:::note
如果我们没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino       |  Grove-火焰传感器  |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| D2            | 黄色                  |

| Seeeduino       |  Grove - 红色 LED |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| D3            | 黄色                  |

#### 软件

**步骤 1.** 复制代码并将其烧录到控制器板中。

代码如下

```c
    /******************************************************************************/

#define FLAME_SENSOR 2 //将传感器连接到数字引脚2
#define LED 3 //将 Grove - LED 连接到引脚3

void setup()
{
    pinsInit();
}
void loop()
{
    if(isFlameDetected())
    turnOnLED();
    else turnOffLED();
}
    /********************************/
void pinsInit()
{
    pinMode(FLAME_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
    digitalWrite(LED,LOW);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
boolean isFlameDetected()
{
    if(digitalRead(FLAME_SENSOR))
    return false;
    else return true;
}
```

**步骤 2.** 当有红外光时，LED 将点亮。

### 与 Codecraft 一起使用

#### 硬件

**步骤 1.** 将 Grove - 火焰传感器连接到 Base Shield 的 D2 端口，将 Grove - 红色 LED 连接到 D3 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线将 Seeeduino/Arduino 连接到您的 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
如果这是您第一次使用 Codecraft，请参阅 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照下图拖拽积木块，或打开可在本页面末尾下载的 cdc 文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/cc_Flame_Sensor.png" /></div>

将程序上传到您的 Arduino/Seeeduino。

:::tip
当代码上传完成后，当火焰传感器检测到火焰时，LED 将点亮。
:::

### 与 Raspberry Pi 一起使用

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove-火焰传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。
- **步骤 3.** 将 Grove-火焰传感器连接到 GrovePi_Plus 的 **D2** 端口。
- **步骤 4.** 通过 USB 线将 Raspberry 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_rpi.jpg" /></div>

#### 软件

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令来使用此传感器

```bash
cd ~/GrovePi/Software/Python
python grove_flame_sensor.py
```

示例代码如下：

```python
#!/usr/bin/env python
#
# 使用 Grove 火焰传感器的 GrovePi 示例 (https://www.seeedstudio.com/wiki/Grove_-_Flame_Sensor)
#
# GrovePi 连接 Raspberry Pi 和 Grove 传感器。您可以在这里了解更多关于 GrovePi 的信息：http://www.dexterindustries.com/GrovePi
#
# 对此示例有疑问？请在这里的论坛上提问：http://forum.dexterindustries.com/c/grovepi
#
'''
## 许可证
MIT 许可证 (MIT)
用于 Raspberry Pi 的 GrovePi：一个用于将 Grove 传感器连接到 Raspberry Pi 的开源平台。
版权所有 (C) 2017  Dexter Industries
特此免费授予任何获得本软件及相关文档文件（"软件"）副本的人
不受限制地处理软件的权限，包括但不限于使用、复制、修改、合并、
发布、分发、再许可和/或销售软件副本的权利，并允许向其提供软件的人员
这样做，但须符合以下条件：
上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。
本软件按"原样"提供，不提供任何形式的明示或暗示保证，包括但不限于
对适销性、特定用途适用性和非侵权性的保证。在任何情况下，
作者或版权持有人均不对任何索赔、损害或其他责任负责，
无论是在合同诉讼、侵权行为还是其他方面，由软件或软件的使用或其他交易引起、
由软件引起或与软件相关。
'''
import time
import grovepi

# 将 Grove 火焰传感器连接到数字端口 D2
# SIG,NC,VCC,GND
flame_sensor = 2

grovepi.pinMode(flame_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(flame_sensor))
        time.sleep(.5)

    except IOError:
        print ("错误")
```

## 参考

该传感器可以检测波长在760nm - 1100nm范围内的光源。下图显示了光谱敏感度。
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Spectral_Sensitive.jpg" /></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove - 火焰传感器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip)
- **[库文件]** [Grove_Flame_Sensor 库的 Github 仓库](https://github.com/Seeed-Studio/Grove_Flame_Sensor)
- **[数据手册]** [LM293D 数据手册](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/LM293D.pdf)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove_Flame_Sensor_CDC_File.zip)

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

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>