---
description: Grove - TDS 传感器
title: Grove - TDS 传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-TDS-Sensor
last_update:
  date: 7/12/2024
  author: Harrison Xu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-connect.jpg" alt="pir" width={600} height="auto" /></p>
Grove - TDS 传感器检测水中的总溶解固体 (TDS) 水平，可用于指示水质。Grove - TDS 传感器可应用于水质应用，如 TDS 计、井水、水族箱、水培等。

它支持 3.3 / 5V 输入电压和 0 ~ 2.3V 输出电压，使其易于与所有 Arduino 开发板兼容。该传感器还提供防水探头，使测试过程更容易处理。
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)
## 特性

- 模拟信号，易于实现
- 支持 3.3 / 5V 输入电压
- 良好的 Arduino 兼容性，0 ~ 2.3V 输出电压可轻松在 3.3 / 5V 控制系统中实现
- 防水 TDS 探头

## 规格参数

|参数|值|
|---|---|
|输入电压|3.3V / 5V|
|输出电压| 0 ~ 2.3V |
|工作电流| 3 ~ 6 mA|
|TDS 测量范围|0 ~ 1000ppm|
|连接接口|Grove 4-Pin / XHB 2.54mm 2P|
|接口|模拟|
|线缆长度|60cm|
|连接接口|XHB 2.54mm 2P|

## 硬件概述

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" /></a></p>
  </figure>
</div>



## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 开始使用

### 与 Arduino 一起使用


#### 所需材料


| Seeeduino V4.2 | Base Shield | Grove - TDS 传感器|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Baseshield 的组合。

#### 硬件连接

- **步骤 1.** 将 Grove - TDS 传感器插入 Grove - Base Shield 的 **A0** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线将 Seeeduino 连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Connection%20Pic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Connection%20Pic.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.**  打开 Arduino IDE 并创建一个新文件，然后将以下代码复制到新文件中。

```cpp showLineNumbers
#define SERIAL Serial
#define sensorPin A0

int sensorValue = 0;
float tdsValue = 0;
float Voltage = 0;

void setup() {
    SERIAL.begin(9600);
}
void loop() {
    sensorValue = analogRead(sensorPin);
    Voltage = sensorValue*5/1024.0; //Convert analog reading to Voltage
    tdsValue=(133.42*Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //Convert voltage value to TDS value
    SERIAL.print("TDS Value = "); 
    SERIAL.print(tdsValue);
    SERIAL.println(" ppm");
    delay(1000);
}
```

- **步骤 3.** 上传演示程序。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** 通过点击 **工具-> 串口监视器** 打开 Arduino IDE 的 **串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **9600**。

- **步骤 5.** 当探头在水中时，结果应该如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Results.gif" /></div>



### 与 Raspberry Pi 一起使用

#### 所需材料

| Raspberry Pi | Grove Base Hat for RasPi | Grove - TDS 传感器|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

- **步骤 2.** 将 Grove Base Hat 插入 Raspberry Pi。

- **步骤 3.** 将 Grove - TDS 传感器连接到 Base Hat 的 **A0** 端口。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-rasp.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-rasp.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 通过 USB 线将 Raspberry Pi 连接到 PC。

#### 软件

- **步骤 1.** 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。

- **步骤 2.** 通过克隆 grove python 库下载源文件。

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3.** 执行以下命令创建 python 代码。

```sh
cd grove.py/grove/
nano TDS.py
```

- **步骤 4.** 将以下代码复制到文件中：

```py showLineNumbers
import math
import sys
import time
from grove.adc import ADC

class GroveTDS:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def TDS(self):
        value = self.adc.read(self.channel)
        if value != 0:
            voltage = value*5/1024.0
            tdsValue = (133.42*voltage*voltage*voltage-255.86*voltage*voltage+857.39*voltage)*0.5
            return tdsValue
        else:
            return 0

Grove = GroveTDS

def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveTDS(int(sys.argv[1]))
    print('Detecting TDS...')

    while True:
        print('TDS Value: {0}'.format(sensor.TDS))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

- **步骤 5.** 使用 **Ctrl+O** 保存，使用 **Ctrl+X** 退出。

- **步骤 6**. 运行以下命令执行：

```sh
python TDS.py 0
```

如果一切顺利，您将能够看到以下结果：

```sh
pi@raspberrypi:~/grove.py/grove$ python TDS.py 0
Detecting TDS...
TDS Value: 0
TDS Value: 0
TDS Value: 0
TDS Value: 0
TDS Value: 2.41591963768
TDS Value: 28.5884239197
TDS Value: 33.2677587509
TDS Value: 30.9311414242
TDS Value: 30.9311414242
```

## 常见问题

**Q1:** Grove - TDS 传感器/水质测量仪（总溶解固体）的限制是什么？

**A1:** 限制如下：

- 防水 TDS 探头不能在 70°C 以上的水中使用。
- 传感器不能用于测量流动的水。
- 传感器不能用于测量高污染浓度的水。
- Grove 传感器本身不防水。

## 原理图在线查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

- **[ZIP]** [Grove - TDS 传感器/水质测量仪（总溶解固体）原理图文件](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip)
- **[PDF]** [LMV324 数据手册](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/LMV324-Datasheet.pdf)
- **[PDF]** [CD4060BM 数据手册](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/CD4060BM-Datasheet.pdf)

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