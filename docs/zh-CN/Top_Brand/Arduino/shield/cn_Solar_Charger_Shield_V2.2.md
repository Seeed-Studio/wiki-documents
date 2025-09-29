---
description: 太阳能充电扩展板 V2.2
title: 太阳能充电扩展板 V2.2

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Solar_Charger_Shield_V2.2
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2.jpg" alt="pir" width={600} height="auto" /></p>

太阳能充电器是一个可堆叠的Arduino兼容平台扩展板，能够提供自适应电池供电并作为现场充电的能量收集器。您可以使用电压为3.0V-4.2V的各种电池来升压至5V输出，或者安装锂离子电池和太阳能板来形成一个自主传感器单元。该板提供的最大电流可达600mA。USB连接器也可用于为电池充电。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Solar-Charger-Shield-v2.2-p-2391.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

---

* 短路保护

* 连接电池时3W输出功率

* 连续充电电流高达900mA

* 电池状态指示（红色：充电中，绿色：已充满）

* Micro-USB连接器

## 规格参数

---

* 电池输入电压：3.0~4.5V

* USB输入电压：4.75~5.25V

* 太阳能输入电压：4.8~6V

* 最大输出功率（带电池）：3W（600mA@5V）

* 纹波电压：&lt;100mV @ 500mA

* 尺寸：68*53mm

## 应用

---

* 无线传感器单元
* 太阳能充电
* Tweet-a-volt-arduino

## 太阳能板充电使用信息

---

1) 太阳能充电扩展板在阳光和白炽灯泡光照下都能产生电荷。在阳光下的功能比在白炽灯下更有效。太阳能板需要不可见辐射，即紫外线和红外线辐射来产生电流。

2) 为了在白炽灯泡下测试系统，请将太阳能板保持在距离小于20cm（< 0.5英尺）的位置。但是，在白炽灯泡下充电可能不太有效。

3) 将太阳能板放置在一个角度，使最大量的阳光照射到它上面。

4) 保护太阳能板免受过度暴露于水/水蒸气。这可能会氧化太阳能板表面并降低其性能。

5) 太阳能板通常带有保护性透明覆盖片。为了太阳能板的更好性能，请撕掉透明塑料片。

6) 保护太阳能板表面免受划伤

## 注意事项

---

1) 太阳能充电扩展板设计有保护任何潜在短路的功能。但是必须小心避免任何此类情况。

2) 太阳能扩展板不应在大于5V的电压下工作

## 使用方法

---

1) 将太阳能板和锂聚合物电池连接到它们指定的位置，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_inputs.jpg" alt="pir" width={600} height="auto" /></p>

Solar_Charger_Shield_v2.2_inputs.jpg

2) 按照"太阳能板使用信息"部分中提到的，将太阳能板放置在阳光或白炽灯泡下

3) 确保充电（红色）指示灯亮起，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_charging.jpg" alt="pir" width={600} height="auto" /></p>

4) 当电池充满电时，绿色指示灯亮起。

5) 然后您可以将扩展板安装到arduino上。当您给太阳能充电扩展板通电时，它应该为arduino供电，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar-Charger-Shield-v2.2_power-arduino.jpg" alt="pir" width={600} height="auto" /></p>

## 使用简单的 Arduino 程序测试太阳能充电板

---
本节将教您如何测量锂电池的电压。

为了将 VBAT 引脚连接到模拟引脚 A0，以便我们可以从 A0 引脚读取数据，我们需要使用 0 欧姆电阻短接 R7，如图所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_shortR7.jpg" alt="pir" width={600} height="auto" /></p>

### 编程示例

您可以使用以下示例测量电池电压：

```cpp
/*
 太阳能充电板电压测量示例。将 VBAT 引脚连接到模拟引脚 A0。

 当不直接暴露在阳光下时，该引脚测量值为 2.0 V，当暴露在阳光下时为 5V。

 此示例代码属于公共领域。

 */

// 这些常量不会改变。它们用于给
// 使用的引脚命名：
const int analogInPin = A0;  // VBAT 引脚连接到的模拟输入引脚


int BatteryValue = 0;        // 从 VBAT 引脚读取的值
float outputValue = 0;        // 电压计算变量

void setup() {
    // 以 9600 bps 初始化串行通信：
    Serial.begin(9600);
}

void loop() {
    // 读取模拟输入值：
    BatteryValue = analogRead(analogInPin);
    // 计算电池电压值
    outputValue = (float(BatteryValue)*5)/1023*2;
    // 将结果打印到串行监视器：
    Serial.print("Analog value = " );
    Serial.print(BatteryValue);
    Serial.print("\t voltage = ");
    Serial.println(outputValue);
    Serial.println("V \n");

    // 在下一次循环前等待 10 毫秒
    // 让模数转换器在上次读取后稳定：
    delay(10);
}
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---
* [Solar Charger Shield v2.2 sch&amp;pcb](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip)

* [Solar Charger Shield v2.2.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar%20Charger%20Shield%20v2.2.pdf)
* [DSE-CN3065.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/DSE-CN3065.pdf)

* [ETA1036.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/ETA1036.pdf)

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