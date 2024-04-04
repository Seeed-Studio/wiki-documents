---
description: Grove - 差分放大器 v1.0
title: Grove - 差分放大器 v1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Differential_Amplifier_v1.0
last_update:
  date: 03/23/2024
  author: WuFeifei
---

<!-- ---
name: Grove - Differential Amplifier v1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html
oldwikiname:  Grove - Differential Amplifier v1.0
prodimagename:  Amplifier_V2.jpg
surveyurl: https://www.research.net/r/Grove-Differential_Amplifier_v1
sku:    103020016
--- -->
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_V2.jpg)

您是否发现，在面包板上设置放大器IC是一件既麻烦又完全不需要重复的工作？这个Grove模块可以通过集成整个操作电路来为您省去设置此类IC的麻烦。它专为精确的差分输入放大而设计。通过公头引脚将传感器的差分信号输入到该模块，然后您的Arduino就可以从Grove接口获得精确放大的输出。增益比例因子是可选择的。您可以通过板上的开关获得304倍或971倍的放大。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

## 特点

---

* 高放大精度

* 可选比例因子
* 便于Arduino读取
* 强大的输入保护：±40V

## 应用

---

* 数据采集

* 电池供电系统
* 压力和温度桥式放大器
* 通用仪器

## 规格

---
<table  cellspacing="0" width="80%">
<tr>
<th colspan="2" scope="col"> 项目
</th>
<th scope="col"> 最小值
</th>
<th scope="col"> 典型值
</th>
<th scope="col"> 最大值
</th>
<th scope="col"> 单位
</th></tr>
<tr>
<th colspan="2" scope="row"> 工作电压
</th>
<td> 2.7
</td>
<td> 5.0
</td>
<td> 36
</td>
<td> VDC
</td></tr>
<tr>
<th colspan="2" scope="row"> 输入电压
    </th>
<td> 0.1
</td>
<td> \
</td>
<td> (Vcc-0.8)/增益
</td>
<td> mV
</td></tr>
<tr>
<th colspan="2" scope="row"> 输出电压
</th>
<td> 0
</td>
<td> \
</td>
<td> Vcc-0.80
</td>
<td> mV
</td></tr>
<tr>
<th rowspan="2"> 增益
</th>
<td> 选择 304
</td>
<td> 297.92
</td>
<td> 304
</td>
<td> 310.08
</td>
<td colspan="2" rowspan="2"> /
</td></tr>
<tr>
<td> 选择 971
</td>
<td> 951.58
</td>
<td> 971
</td>
<td> 990.42
</td></tr></table>

## 接口功能

---
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_Interface3.jpg)

**J2：**信号源接口

**J1：**输出接口，标准Grove接口

**R1：**62Ω增益电阻

**R3：**200Ω增益电阻

**U1：**INA125 IC，仪表放大器

## 使用方法

---
**1. 传感器选择**

该放大器可以将mA级别的信号放大到A级别。在使用之前，请确保您的传感器的输出范围在mA级别。例如，[重量传感器（0-500g）](https://yiyan.baidu.com/Weight_Sensor_Load_Cell_0-500g)就是其中的一种。

**2. 连接器改造**

为了将重量传感器与放大器上的公头引脚配对，需要在其导线上焊接母头连接器。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Solder.jpg)

**3. 硬件连接**

按照以下图片所示，将重量传感器连接到放大器上。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Connect5.jpg)

**4. 测量**

将下面的示例代码复制到Arduino IDE中并上传。

```c++
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
    for(i=0;i&lt;10;i++)
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

您可以通过串行监视器查看放大的信号。对于输入信号的值，您需要使用万用表测量VIN+和VIN-之间的电压差。

## 放大器精度测试

---
接下来是一个测试，用以确定放大器的精度。我们收集了100组放大器在304或971增益条件下的输入信号和输出信号，并绘制了以下两张图表。

我们逐渐增加了重量传感器的负载，通过向绑在其上的瓶子中逐滴滴加水来实现。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/TEST_Score1.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Test_Score_Picture2.jpg)

横轴代表输入电压，纵轴代表输出电压。随着瓶子重量的增加，输入信号线性上升。第一张图的实际增益为300.1，与理论增益304相比偏差为1.3%。第二张图的实际增益为971，与964.2相比偏差为0.8%。

测量范围由电源电压VCC决定，最大输出电压在(VCC-1.2)和(VCC-0.8)之间。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

---

* [放大器1.0 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip)

* [放大器1.0 原理图](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier.pdf)

* [INA125 数据手册](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/INA125.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同形式的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
