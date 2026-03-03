---
description: Grove - PH传感器
title: Grove - PH传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-PH_Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - PH传感器
category: 传感器
bzurl: https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html
oldwikiname:  Grove - PH传感器
prodimagename: Phsensor.jpg
surveyurl: https://www.research.net/r/Grove_PH_Sensor
sku:  101020065
--- -->
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/Phsensor.jpg)

您需要测量水溶液的pH值吗？这里，Grove - PH传感器可以帮助您实现。该传感器可以输出与PH电极测量的氢离子浓度相对应的信号。由于它可以直接连接到控制器，您可以随时观察pH值。该设备可用于pH测量，如废水、污水和其他场合。

:::note
仅限国内订单有效。如果您的地址不在中国，请勿下单。
:::

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html)

## 特性

---

* Grove接口
* 宽测量范围
* 使用寿命为两年
* 等电位点：pH 7.00 (0 mV)

## 规格参数

---
<center>
<table cellspacing="0" width="80%">
<tr>
<th scope="col">项目</th>
<th scope="col">典型值</th>
<th scope="col">单位</th>
</tr>
<tr>
<th scope="row">工作电压</th>
<td>5</td>
<td>V</td>
</tr>
<tr>
<th scope="row">等电位点</th>
<td>7±0.5</td>
<td>pH</td>
</tr>
<tr>
<th scope="row">测量范围</th>
<td>0~14</td>
<td>pH</td>
</tr>
<tr>
<th scope="row">pH传感器输出范围</th>
<td>-414.12 ~ 414.12</td>
<td>mV</td>
</tr>
<tr>
<th scope="row">测量精度</th>
<td>&lt;15</td>
<td>mV</td>
</tr>
<tr>
<th scope="row">响应时间</th>
<td>&lt;2</td>
<td>min</td>
</tr>
<tr>
<th scope="row">温度范围</th>
<td>0~60</td>
<td>℃</td>
</tr>
</table>
</center>

## 原理图

---
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Schematic.jpg)

## 使用方法

---
pH传感器可以帮助您检测pH值。pH测量的成功与否取决于PH传感器的校准和维护。现在让我们从如何校准开始。

### 校准

* 使用前，您需要使用纯净水或去离子水清洗，然后用纸巾吸干水分（纸巾应无纤维）。记住，最好不要擦拭，因为擦拭PH电极会造成误差。这里有一张参考图片：
*

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Usage.jpg)

在这张图片中，使用pH 9.18[缓冲溶液](http://www.chemguide.co.uk/physical/acidbaseeqia/buffers.html)作为参考溶液，这有助于我们了解测量值是否准确。
现在让我们看看测量值是多少。

* 上传演示代码。如果您不知道如何上传，请点击[这里](/cn/Upload_Code)

```
//功能：PH传感器输出电压值，
//      转换为PH值然后在串口监视器中显示。
#define Vref 4.95
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    int sensorValue;
    int m;
    long sensorSum;
    for(m=0;m<50;m++)
    {
        sensorValue=analogRead(A0);//将PH传感器连接到A0端口
        sensorSum += sensorValue;
    }
    sensorValue =   sensorSum/50;
    Serial.print(" the PH value is");
    Serial.println(7-1000*(sensorValue-372)*Vref/59.16/1023);

}
```

* 打开串口监视器查看结果：

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_result.jpg)

* 查看结果，您可以看到测试结果与实际值一致。所以您可以开始测量水溶液的pH值。如果参考液pH值与测量pH值之间存在误差，您最好将PH电极浸泡几个小时，然后重新校准。[这里](http://www.ehow.com/how_4796148_calibrate-ph-meter.html)有一个关于如何校准的参考指南。

**注意：** 如果您得到的测量值始终高于或低于应有的值，原因可能是Vref值不合适。Vref是Arduino的工作电压。

PH值与输出电压之间的关系：
<font color="blue">E=59.16(mV/PH)</font>

### 清洁和存储

pH电极是您pH仪器最敏感的组件。pH电极不能干燥或冷冻。适当的维护将提供多年的可靠测量。所以[pH电极的护理和维护](http://www.eutechinst.com/techtips/tech-tips26.htm)与校准同样重要。请记住：不使用时，您应该清洗并将其保存在3mol KCl容器中。3mol KCL需要您自己准备。制备方法可参考以下信息：

基于<font color="red"> 3 mol * ( 74.55 g / 1 mol KCl) = 223.65 g KCl)</font>
所以要制备3 mol / L的KCl溶液，您需要将223.65 g的KCl溶解在一些水中，混合，然后用水稀释至1 L刻度线。

希望这对您有帮助！

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - PH传感器Eagle文件](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip)

* [Grove - PH传感器PDF原理图](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_v1.0.pdf)

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