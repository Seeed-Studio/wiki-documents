---
title: 重量传感器（称重传感器）0-500g
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Weight_Sensor_Load_Cell_0-500g/
slug: /cn/Weight_Sensor_Load_Cell_0-500g
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/loadcell500.jpg)

适用于电子秤、计价秤、电子平台秤、数字秤；邮包秤、电子天平以及所有种类的单传感器商业秤。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/weight-sensor-load-cell-0500g-p-525.html?cPath=144_150)

##   规格
---
*   容量 g 500g

*   输出灵敏度 mv/v 0.5±0.1

*   非线性 %.F.S 0.05

*   滞后 %F.S 0.05

*   重复性 %F.S 0.05

*   蠕变(30分钟) %.F.S 0.05

*   灵敏度温度影响 %F.S/10℃ 0.05

*   零点温度影响 %F.S/10℃ 0.05

*   零点平衡 %F.S ±0.5

*   输入电阻 Ω(欧姆) 1120±10

*   输出电阻 Ω(欧姆) 1000±10

*   绝缘电阻 MΩ(欧姆) ≥2000

*   推荐激励电压 v 5v

*   接线方式 红色：Exc + 黑色：Exc –

*   绿色：Sig + 白色：Sig -

##   使用方法
---
###  **硬件安装**

![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/Weight_Sensor.png)

**注意**：当负载小于150g时，重量传感器输出为0V，因此我们无法直接测量负载。我的方法是使用一个200g的砝码来避免测量盲点。读取200g砝码的模拟数据作为无负载（0g），读取700g砝码的模拟数据作为满负载（500g）。

###  **编程**
```
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int value;
    value = analogRead(0);
    Serial.println(value);
}
```

###   外部链接

[如何与 Arduino 一起使用](http://cerulean.dk/words/?page_id=42)。

##   资源
---
- [INA125 数据手册](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/res/INA125.pdf)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>