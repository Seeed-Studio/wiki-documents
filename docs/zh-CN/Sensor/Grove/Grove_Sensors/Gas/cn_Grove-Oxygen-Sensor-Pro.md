---
description: Grove - 氧气传感器专业版(GGC2330-O2)
title: Grove - 氧气传感器专业版(GGC2330-O2)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Oxygen-Sensor-Pro
last_update:
  date: 1/4/2023
  author: shuxu hu
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png" alt="pir" width={600} height="auto" /></p>


Grove - 氧气传感器专业版(GGC2330-O2) 是一种用于测试空气中氧气浓度的传感器，基于电化学电池的原理进行工作。当它开始工作时，会产生与氧气浓度成正比的电流，然后您可以通过测量电流大小来确定氧气浓度。

Grove - 氧气传感器专业版(GGC2330-O2) 是 Grove - 氧气传感器(GG2020-O2) 的增强版本，与 Grove - 氧气传感器(GG2020-O2) 相比，它内置了温度传感器进行温度补偿，可以修正由温度差异引起的测量误差，使测量更加准确。除此之外，它还配备了高性能微处理器，使其同时具备数字输出和模拟电压输出能力，让传感器更易于使用和校准，缩短开发周期。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)

:::tip
    我们已经发布了 [Seeed 气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::
## 特性

* 预校准（内置MCU和温度传感器）
* 高精度和分辨率
* 长寿命，低功耗
* 强抗干扰能力
* 良好的稳定性
* UART信号输出

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::


## 规格参数

|项目  | 参数 |
|-------|---------------|
|目标气体 | O2 |
|分辨率| 0.1%VOL |
|测量范围  | 0-25%VOL |
|工作电压  | DC 5±0.1V DC |
|工作电流 | ＜ 10 mA |
|输出| 输出UART（TTL电平，3V）模拟电压（传感器原始放大信号参考表2） |
|工作条件| -20～25℃/15～90%RH（无冷凝） |
|存储条件|  -20～50℃/15～90%RH（无冷凝） |
|尺寸 | ø23.5mm*24.5mm |
|预期寿命    | 2年（在空气中）|

:::note
    上电老化时间不少于5分钟；
    避免长期接触有机挥发性溶剂；
    使用或存储环境不能是酸碱环境。
:::

## 应用
* 便携式气体检测器
* 固定式气体报警器和检测器
  

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------| -->
<!-- | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

:::note
    本章基于Win10和Arduino IDE 1.7.9
:::
这个新的Grove - 氧气传感器专业版(GGC2330-O2)的使用方法与Grove - 氧气传感器(GG2020-O2) [GG2020-O2](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-O2-MIX8410/)的使用方法不同。

在这里，我们将通过一个简单的演示向您展示这个Grove - 氧气传感器专业版(GGC2330-O2)是如何工作的。首先，您需要准备以下物品：

| Seeeduino Cortex-M0+ | Grove - 氧气传感器专业版(GGC2330-O2) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki210x158.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/Grove_Oxygen_Sensor_Pro_Preview-07-210x157.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={500} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|



### 连接 

得益于Grove系列模块的优势，您不需要进行焊接或使用面包板，您需要做的就是将模块连接到Base Shield的正确端口。对于这个演示，我们只有一个Grove模块。

* Grove - 氧气传感器专业版(GGC2330-O2)是一个模拟输入模块，在这个演示中我们将它连接到**UART**。

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg" alt="pir" width={600} height="auto" /></p>



### 将代码上传到Arduino

将以下代码复制到Arduino IDE中。


```
void setup() {
  Serial.begin(9600);
  Serial2.begin(9600);
}
void loop() {
  if (Serial2.available()){
    uint8_t begin_code = Serial2.read();
    delay(10);
    uint8_t state_code = Serial2.read();
    delay(10);
    uint8_t high_code = Serial2.read();
    delay(10);
    uint8_t low_code = Serial2.read();
    delay(10);
    uint8_t check_code = Serial2.read();
    delay(10);
    uint8_t checkk_code = Serial2.read();
    delay(10);
    uint8_t checkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkkk_code = Serial2.read();
    delay(10);

    if(begin_code == 255 && state_code == 134){
 
      float O2_val = ((high_code * 256) + low_code) * 0.1 ;
      Serial.print("O2: ");
      Serial.print(O2_val);
      Serial.println(" %");
      }
    }
    while(Serial2.read()>=0);    //清除缓冲区
}
```

然后选择正确的开发板和COM端口，然后点击上传按钮，这个过程需要几秒钟。

### 获取数据

打开Arduino IDE的串口监视器，您现在就可以获取数据了。

:::warning
    传感器需要大约20~30分钟的预热时间，否则您会得到一个较大的值。
 :::   
<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

* [Grove - Oxygen Sensor Pro 数据手册](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GGC2330-O2-1.0.pdf)
* [Eagle 文件原理图](http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip)
* [本文档的 Github 仓库](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
* [PDF 原理图](#files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GroveOxygenSensorProv1.0sch.pdf)

## 项目

**LoRa IoTea**：应用于茶园的自动信息收集系统。它是智能农业信息收集的一部分。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**带照明和降雨的植物盒** 你从未见过这样给植物浇水的方式。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

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
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>