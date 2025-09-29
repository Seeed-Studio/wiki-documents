---
description: Grove - 磁性开关
title: Grove - 磁性开关
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Magnetic_Switch
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d.jpg)

这是一个兼容 Grove 接口的磁性开关模块。它基于封装的干簧管开关 CT10。CT10 是单极单掷（SPST）类型，具有常开钌触点。该传感器为双端类型，可通过电磁铁、永久磁铁或两者结合进行驱动。磁性开关是设计师用来根据接近情况打开或关闭电路的绝佳工具。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

## 特性

- 兼容 Grove 接口
- 2.0cm x 2.0cm Grove 模块
- 最少的外部部件
- 10W 额定功率
- 坚固的封装

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 应用场景

- 接近传感器
- 安全报警传感器
- 液位传感器
- 流量传感器
- 脉冲计数器

## 规格

<table border="1">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
标准值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<td>
工作电压
</td>
<td>
3.3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
开关功率
</td>
<td colspan="3">
10
</td>
<td>
W
</td>
</tr>
<tr align="center">
<td>
开关电压 AC，RMS 值（最大）
</td>
<td colspan="3">
&lt; 140
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
开关电流 DC
</td>
<td colspan="3">
&lt; 500
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
承载电流 DC
</td>
<td colspan="3">
&lt; 0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<td>
接触电阻
</td>
<td colspan="3">
&lt;200
</td>
<td>
mΩ
</td>
</tr>
<tr align="center">
<td>
绝缘电阻
</td>
<td colspan="3">
&gt;10<sup>6</sup>
</td>
<td>
MΩ
</td>
</tr>
<tr align="center">
<td>
工作温度
</td>
<td>
-40
</td>
<td>
-
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<td>
工作范围
</td>
<td>
10
</td>
<td>
-
</td>
<td>
40
</td>
<td>
AT
</td>
</tr>
</table>

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 演示

模块的 SIG 引脚通常输出低电平。当磁铁靠近开关时，磁性开关闭合，SIG 引脚输出高电平。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove - 磁性开关 |
|----------------|-------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **步骤 2.** 将 Grove - 磁性开关连接到 Grove-Base Shield 的 **D2** 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_ardu.jpg)

:::note
如果没有 Grove Base Shield，我们也可以直接将 Grove-磁性开关连接到 Seeeduino，如下所示。
:::

| Seeeduino | Grove-磁性开关 |
|-----------|--------------------|
| 5V/3.3V   | 红色               |
| GND       | 黑色               |
| NC        | 白色               |
| D2        | 黄色               |

#### 软件

- **步骤 1.** 将以下代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
/*******************************************************************************/

/*磁性开关引脚和 LED 引脚的宏定义*/
#define MAGNECTIC_SWITCH 2
#define LED 13 // Arduino 或 Seeeduino 的板载 LED

void setup()
{
    pinsInit();
}

void loop() 
{
    if(isNearMagnet()) // 磁性开关是否靠近磁铁？
    {
        turnOnLED();
    }
    else
    {
        turnOffLED();
    }
}
void pinsInit()
{
    pinMode(MAGNECTIC_SWITCH, INPUT);
    pinMode(LED,OUTPUT);
}

/*如果磁性开关靠近磁铁，将返回 true，*/
/*否则返回 false                                */
boolean isNearMagnet()
{
    int sensorValue = digitalRead(MAGNECTIC_SWITCH);
    if(sensorValue == HIGH) // 如果传感器值为高电平？
    {
        return true; // 是的，返回 true
    }
    else
    {
        return false; // 否，返回 false
    }
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
```

- **步骤 2.** 当磁铁靠近开关时，LED 会亮起。试试看！

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - 磁性开关连接到 Base Shield 的 D2 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
如果这是您第一次使用 Codecraft，请查看 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/cc_Magnetic_Switch.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
代码上传完成后，将磁铁靠近磁性开关，您会看到 Arduino 的 13 号引脚上的 LED 亮起。
:::

### 使用 Raspberry Pi

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry Pi | GrovePi_Plus | Grove - 磁性开关 |
|--------------|--------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry Pi。
- **步骤 3.** 将 Grove-磁性开关连接到 GrovePi_Plus 的 **D2** 端口。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_rpi.jpg)

#### 软件

:::caution
如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。

- **步骤 2.** 导航到示例代码目录：

```
cd yourpath/GrovePi/Software/Python/
```

- **步骤 3.** 查看代码（此示例与倾斜开关的用法相同）：

```
nano grovepi_tilt_switch.py   # 按 "Ctrl+x" 退出 #
```

```py
import time
import grovepi

# 将 Grove 倾斜开关连接到数字端口 D2
# SIG,NC,VCC,GND
tilt_switch = 2

grovepi.pinMode(tilt_switch,"INPUT")

while True:
    try:
        print grovepi.digitalRead(tilt_switch)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **步骤 4.** 运行示例代码。

```
sudo python grovepi_tilt_switch.py
```

- **步骤 5.** 结果

将磁铁放在传感器上，SIG 引脚将输出高电平。

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/Grovepi_tilt_Switch_00.png)

# Grove-磁性开关 v0.9

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-磁性开关 v1.3

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]**  [Grove-磁性开关 v0.9 原理图](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip)

- **[Eagle]**  [Grove-磁性开关 v1.3 原理图](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip)

- **[PDF]**  [Grove-磁性开关 v1.3 PDF 文件](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_PDF_File.pdf)

- **[Datasheet]**  [CT10 数据手册](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/CT10.pdf)

- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove_Magnetic_Switch_CDC_File.zip)

<!-- 本 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Magnetic_Switch -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>