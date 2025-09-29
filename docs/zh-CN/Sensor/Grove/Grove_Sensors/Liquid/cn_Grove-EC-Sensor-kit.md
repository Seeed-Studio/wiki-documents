---
description: Grove - EC 传感器套件
title: Grove - EC 传感器套件
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-EC-Sensor-kit
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png" alt="pir" width={600} height="auto" /></p>


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)
随着技术的发展，我们的环境面临着巨大的挑战。我们需要一个工具来初步测试水质是否达到标准。Grove EC 传感器是一个模拟电导率计。电导率传感器（EC 传感器）测量溶液中的电导率，通常用于水产养殖和水质检测。Grove - 电导率传感器专为低成本系统设计，具有相对较高的精度，可以覆盖大多数应用。Grove 连接器和 BNC 探头接口使其易于使用，非常适合 Arduino 和 Raspberry Pi 项目。该套件包括一个 EC 探头和一个驱动板，驱动板支持 3.3V 和 5V 系统。



:::note
    此产品未通过 RoHS 认证。
:::
## 特性

- 广泛用于水产养殖和水质检测的大多数应用   
- 紧凑尺寸，易于部署  
- 支持 Arduino 和 Raspberry Pi 
- 成本效益高

## 规格参数
|项目|数值|
|---|---|
|工作电压	|3.3V/5V|
|EC 范围	|0-2000us/cm|
|分辨率	|±5%（STP）|
|响应时间	|＜10sec|
|探头接口|	BNC|
|工作温度	|5-80℃|

## 支持的平台
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## 开始使用

#### 所需材料

| Arduino uno | Grove-EC 传感器套件 | base shield|
|:--------------:|:--------------:|:--------------:|
|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/arduinouno.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.09.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.06.png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-694.html)|[立即购买](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2.html)|


#### 硬件连接

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg" alt="pir" width={600} height="auto" /></p>
:::tip
    请轻轻插入USB线缆，将Grove-EC传感器接口插入Arduino Uno板接口，否则可能会损坏端口。
:::
- **步骤 1.** 使用Grove线缆将Grove-EC传感器插入底板的**A1**接口。

- **步骤 2.** 将底板连接到Arduino Uno。
- **步骤 3.** 通过USB线缆将Arduino Uno连接到PC。
- **步骤 4.** 下载代码，请参考软件部分。

- **步骤 5.** 运行代码，结果将显示在Arduino IDE的**串口监视器**屏幕上。


#### 软件

:::note
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::



- **步骤 1.** 下载[演示代码](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip)。

- **步骤 2.** 将整个**DFRobot_EC_master.zip**文件添加到您的Arduino IDE库文件中。您可以参考[如何安装Arduino库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)

- **步骤 3.** 使用Arduino IDE打开**DFRobot_EC_Test**示例文件。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

#### 软件代码
```cpp
#include "DFRobot_EC.h"
#include <EEPROM.h>

#define EC_PIN A1
float voltage,ecValue,temperature = 25;
DFRobot_EC ec;

void setup()
{
  Serial.begin(115200);  
  
  ec.begin();
}

void loop()
{
    static unsigned long timepoint = millis();
    if(millis()-timepoint>1000U)  //时间间隔：1秒
    {
      timepoint = millis();
      voltage = analogRead(EC_PIN)/1024.0*5000;   // 读取电压
      //temperature = readTemperature();          // 读取温度传感器以执行温度补偿
      ecValue =  ec.readEC(voltage,temperature);  // 将电压转换为带温度补偿的EC值
      Serial.print("temperature:");
      Serial.print(temperature,1);
      Serial.print("^C  EC:");
      Serial.print(ecValue,2);
      Serial.println("ms/cm");
    }
    ec.calibration(voltage,temperature);          // 通过串口命令进行校准过程
}

float readTemperature()
{
  //在此处添加您的代码以从温度传感器获取温度
}
```


:::note

     - 在检测目标溶液之前，传感器**必须**用电导率溶液进行校准，并且在检测新种类溶液之前**必须**放入清水中并擦拭。

     - 在测量之前，电极必须用标准缓冲溶液进行校准。为了获得更准确的结果，已知电导率溶液值应该可靠，并且更接近被测量的值。

     - 不要长时间浸泡在液体中。否则会缩短探头的使用寿命。铂黑层附着在探头中金属片的表面。应避免任何物体接触它。只能用蒸馏水清洗，否则铂黑层会被损坏，导致测量不准确。

     - 传感器**绝对不能**长时间浸泡在检测液体中。
:::

为确保准确性，探头在首次使用和长时间未使用后需要进行校准。以下步骤使用两点校准，因此需要1413us/cm和12.88ms/cm的标准缓冲溶液。以下步骤显示如何操作两点校准。

- **步骤 5.** 将代码上传到Arduino后，打开串口监视器，您可以看到温度和电导率，如下图所示。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png" alt="pir" width={600} height="auto" /></p>
- **步骤 6.** 用蒸馏水清洗探头，然后用纸吸收残留的水滴。将探头插入1413us/cm标准缓冲溶液中，轻轻搅拌，直到数值稳定。在串口监视器中输入enterec命令进入校准模式。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png" alt="pir" width={600} height="auto" /></p>
- **步骤 7.** 输入calec命令开始校准。程序将自动识别存在的两种标准缓冲溶液中的哪一种：1413us/cm或12.88ms/cm。在此步骤中，标准缓冲溶液是1413us/cm。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 当校准成功后，输入 exitec 命令保存相关参数并退出校准模式。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png" alt="pir" width={600} height="auto" /></p>
完成上述步骤后，第一点校准就完成了。第二点校准的步骤相同。这里我们使用 12.88ms/cm 标准缓冲溶液。校准过程在此不再重复。

完成上述步骤后，两点校准就完成了，然后就可以用于实际测量。校准过程中的相关参数已保存到主控板的 EEPROM 中。


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/Grove-EC_Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

- **[ZIP]** [演示代码库](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip)
- **[PDF]** [CD4060BM 材料规格书](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/CD4060BM_Material_specification.pdf)
- **[PDF]** [DIP TDS 传感器规格书](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DIP_TDS_Sensor_specification.pdf)
- **[PDF]** [LMV324 材料规格书](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/LMV324_Material_specification.pdf)

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