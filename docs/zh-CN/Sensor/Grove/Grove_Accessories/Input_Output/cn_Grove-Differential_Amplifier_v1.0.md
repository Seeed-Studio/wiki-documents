---
description: Grove - 差分放大器 v1.0
title: Grove - 差分放大器 v1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Differential_Amplifier_v1.0
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

<!-- ---
name: Grove - 差分放大器 v1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html
oldwikiname:  Grove - 差分放大器 v1.0
prodimagename:  Amplifier_V2.jpg
surveyurl: https://www.research.net/r/Grove-Differential_Amplifier_v1
sku:    103020016
--- -->
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_V2.jpg)

你是否发现，在面包板上设置一个放大器 IC 是一项麻烦且完全不必要重复的工作？这个 Grove 模块可以通过集成整个操作电路，帮助你避免这种繁琐的设置。它专为精确的差分输入放大设计。通过公针将传感器的差分信号输入到该模块，然后你的 Arduino 将通过 Grove 接口获得精确放大的输出。增益比例因子是可选的。通过板上的开关，你可以选择 304 倍或 971 倍的放大。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

## 特性

---

* 高放大精度

* 可选的增益比例因子

* 可方便地被 Arduino 读取

* 强大的输入保护：±40V

## 应用

---

* 数据采集

* 电池供电系统

* 压力和温度桥放大器

* 通用仪器仪表

## 规格

---
<table cellspacing="0" width="80%">
  <tr>
    <th colspan="2" scope="col"> 项目</th>
    <th scope="col"> 最小值</th>
    <th scope="col"> 典型值</th>
    <th scope="col"> 最大值</th>
    <th scope="col"> 单位</th>
  </tr>
  <tr>
    <th colspan="2" scope="row"> 工作电压</th>
    <td> 2.7</td>
    <td> 5.0</td>
    <td> 36</td>
    <td> VDC</td>
  </tr>
  <tr>
    <th colspan="2" scope="row"> 输入电压</th>
    <td> 0.1</td>
    <td> \\</td>
    <td> (Vcc-0.8)/增益</td>
    <td> mV</td>
  </tr>
  <tr>
    <th colspan="2" scope="row"> 输出电压</th>
    <td> 0</td>
    <td> \\</td>
    <td> Vcc-0.80</td>
    <td> mV</td>
  </tr>
  <tr>
    <th rowspan="2"> 增益</th>
    <td> 选择 304</td>
    <td> 297.92</td>
    <td> 304</td>
    <td> 310.08</td>
    <td colspan="2" rowspan="2"> /</td>
  </tr>
  <tr>
    <td> 选择 971</td>
    <td> 951.58</td>
    <td> 971</td>
    <td> 990.42</td>
  </tr>
</table>

## 接口功能

---
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_Interface3.jpg)

**J2：**信号源接口

**J1：**输出接口，标准 Grove 接口

**R1：**62Ω 增益电阻

**R3:** 200Ω 增益电阻

**U1:** INA125 IC，仪表放大器

## 使用方法

---
**1. 传感器选择**

该放大器可以将 mA 级别的信号放大到 A 级别。在使用之前，请确保你的传感器输出范围在 mA 级别。例如，[重量传感器](/cn/Weight_Sensor_Load_Cell_0-500g) 就是其中之一。

**2. 接头改造**

为了将重量传感器与放大器上的公针配对，需要在传感器的导线上焊接母接头。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Solder.jpg)

**3. 硬件连接**

按照下图所示，将重量传感器连接到放大器。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Connect5.jpg)

**4. 测量**

将以下示例代码复制并粘贴到 Arduino IDE 中并上传。

```cpp
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

你可以通过串口监视器查看放大的信号。对于输入信号的值，你需要使用万用表测量 VIN+ 和 VIN- 之间的电压差。

## 放大器精度测试

---
接下来是一个测试，用于确定放大器的精度。我们在 304 或 971 的比例因子条件下，收集了 100 组放大器的输入信号和输出信号，并绘制了以下两张图表。

我们通过向绑在重量传感器上的瓶子中逐滴加入水，逐步增加重量传感器的负载。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/TEST_Score1.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Test_Score_Picture2.jpg)

横轴表示输入电压，纵轴表示输出电压。随着瓶子重量的增加，输入信号线性上升。第一张图的实际增益为 300.1，与理论增益 304 相比，偏差为 1.3%。第二张图的实际增益为 971，与理论增益 964.2 相比，偏差为 0.8%。

测量范围由电源电压 VCC 决定，最大输出电压在 (VCC-1.2) 和 (VCC-0.8) 之间。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Amplifier 1.0 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip)

* [Amplifier 1.0 原理图](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier.pdf)

* [INA125 数据手册](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/INA125.pdf)

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