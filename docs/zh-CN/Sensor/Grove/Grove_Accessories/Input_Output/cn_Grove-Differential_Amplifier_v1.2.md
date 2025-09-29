---
title: Grove - 差分放大器 v1.2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Differential_Amplifier_v1.2/
slug: /cn/Grove-Differential_Amplifier_v1.2
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Grove-Differential_Amplifier_v1.2.jpg)

此 Grove 模块专为精确的差分输入放大设计。通过公针将传感器的差分信号输入到该模块，然后 Arduino 将通过 Grove 接口获得精确放大的输出。增益比例因子可选择。通过板上的开关，您可以选择 35 倍或 1085 倍的放大。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

特点
-------

- 高精度放大
- 可选择的比例因子
- 可方便地被 Arduino 读取

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用
-----------

- 数据采集
- 电池供电系统
- 压力和温度桥放大器
- 通用仪器

规格
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th colspan="2" scope="col">
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
<th colspan="2" scope="row">
工作电压
</th>
<td>
2.7
</td>
<td>
5.0
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th colspan="2" scope="row">
输入电压
</th>
<td>
0.1
</td>
<td>
\\
</td>
<td>
(Vcc-0.8)/增益
</td>
<td>
mV
</td>
</tr>
<tr align="center">
<th colspan="2" scope="row">
输出电压
</th>
<td>
0
</td>
<td>
\\
</td>
<td>
Vcc-0.80
</td>
<td>
mV
</td>
</tr>
<tr align="center">
<th rowspan="2">
增益
</th>
<td>
选择 35
</td>
<td>
/
</td>
<td>
35
</td>
<td>
/
</td>
<td colspan="2" rowspan="2">
/
</td>
</tr>
<tr align="center">
<td>
选择 1085
</td>
<td>
/
</td>
<td>
1085
</td>
<td>
/
</td>
</tr>
</table>

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

使用方法
-----

**1. 传感器选择**

放大器可以将 mA 级别的信号放大到 A 级别。在使用之前，请确保传感器的输出范围在 mA 级别。例如，[重量传感器](/cn/Weight_Sensor_Load_Cell_0-500g) 就是其中之一。

**2. 接头改造**

为了将重量传感器与放大器上的公针配对，需要在传感器的线缆上焊接母接头。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Solder.jpg)

**3. 硬件连接**

按照下图所示，将重量传感器连接到放大器。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Connect5.jpg)

**4. 测量**

将以下示例代码复制并粘贴到 Arduino IDE 中并上传。

```
    void setup()
    {
      Serial.begin(9600);
      Serial.println("start");
    }

    void loop()
    {
      int i;
      int value;
      float V,Vo;
      float Sum=0;
      for(i=0;i<10;i++)
      {
        value=analogRead(4);
        V=value*5.00/1023;
        Sum+=V;
        delay(10);
      }
      Vo=Sum/10;
      Serial.print("Output score:");
      Serial.println(Vo);
      delay(1000);
    } 
```

您可以通过串行监视器查看放大的信号。对于输入信号的值，您需要使用万用表测量 VIN+ 和 VIN- 之间的电压差。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [v1.2 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip)
- [v1.2 原理图](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2.pdf)
- [INA132 数据手册](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Ina132.pdf)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Differential_Amplifier_v1.2 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>