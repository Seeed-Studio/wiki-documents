---
description: Grove - Relay
title: Grove - Relay
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Relay
last_update:
  date: 2/1/2023
  author: hushuxu
---

英文 wiki：https://wiki.seeedstudio.com/Grove-Relay/

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg)

 Grove-Relay模块是一个数字常开开关。 通过它你可以使用较低的电压达到控制高电压的目的，如控制器上的 5V 电压就可以。 板上有一个 LED指示灯，当受控端闭合时，它将亮起。

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.179ada13kJa9LO&id=45670971061)


## 产品特性
-------

|参数     | V1.1     |V1.2     |
| :------------- | :------------- |:------------- |
|产品发布日期      | 2013年1月27日      |2014年6月9日|
|工作电压|5V|3.3V~5V|
|工作电流|60mA|100mA|
|使用寿命|100,000周期|100,000周期|
|最大开关电压|250VAC/30VDC|250VAC/30VDC|
|最大开关电流|5A|5A|

!!!Tip
    关于Grove模块的更多细节请参考 [Grove System](http://wiki.seeedstudio.com/cn/Grove_System/)

## Platforms Supported
--------



## 入门指导
------
### 使用 Arduino

#### 硬件连接

在这里，我们将通过一个简单的演示向您展示这个 Grove - Relay 的工作原理。 首先，您需要准备以下内容：

| Seeeduino V4 | Grove - Relay | Grove -  Button|Base Shield |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Grove_Relay_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11rndqnS&id=45721222112)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.2d2b0dcdZUBw8h&id=45670971061)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.12.2e67dd181VQuUB&id=531838497696)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11crrag2&id=520233320144)|


- 将 Grove-Relay 模块连接到 Grove-Base Shield 的 **D4** 端口。
- 将 Grove-Button 模块连接到 Grove-Base Shield 的 **D2** 和 **D3** 端口。
- 将 Grove-Base Shield 插入 Arduino。
- 通过 USB数据线将 Arduino 连接到 PC。
![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button-relay.jpg)

!!!Note
    如果我们没有base shield，我们也可以直接将 Grove-Relay 和 Grove-Button 连接到 Arduino 板上。 请按照下面的连接。

| Grove-Relay | Arduino |
|-------------|---------|
| GND         | GND     |
| VCC         | 5V      |
| SIG         | D4      |

| Grove-Button#1 | Arduino |
|----------------|---------|
| GND            | GND     |
| VCC            | 5V      |
| SIG            | D2      |

| Grove-Button#2 | Arduino |
|----------------|---------|
| GND            | GND     |
| VCC            | 5V      |
| SIG            | D3      |

#### Software


下面是一个演示，向您展示如何使用 Grove - Button 控制 Grove - Relay。 当按下一个按钮时，继电器将关闭。 当其他按钮被按下时，继电器将打开。

```
// Relay Control

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, OUTPUT);
}

void loop()
{
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(4, HIGH);
    delay(100);
  }
  if (digitalRead(3)==HIGH)
  {
    digitalWrite(4, LOW);
  }
}

```

### 使用 TI LaunchPad

控制其他电子设备（使用继电器）

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay.jpg)

此示例显示如何使用 Grove-relay 模块来控制较大的负载，例如台灯。 使用 3V电压信号让继电器接通，允许电流流过所连接的设备。

```
/*
Relay
The basic Energia example.
This example code is in the public domain.
*/

#define RELAY_PIN 39

// the setup routine runs once when you press reset:
void setup() {
         pinMode(RELAY_PIN, OUTPUT); // initialize the digital pin as an output.
}

// the loop routine runs over and over again forever:
void loop() {
         digitalWrite(RELAY_PIN, HIGH); // turn the relay on (HIGH is the voltage level)
         delay(1000);   // wait for a second
         digitalWrite(RELAY_PIN, LOW);   // turn the relay o by making the voltage LOW
         delay(1000);   // wait for a second
}
```
### 使用 Raspberry Pi

#### 硬件连接


- 首先，我们需要准备以下内容：

|  Raspberry pi | Grove - Relay | Grove - Button | Grovepi+ |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/pi.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Grove_Relay_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/grovepi%2B.jpg)|
|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11zpryre&id=528322046763)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.addbe7dlRVNGW&id=45670971061)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.13.6810e28bnnbHCO&id=531838497696)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e113G7Bdt&id=45506190895)|



- 您需要完成配置开发环境，否则遵循 [说明](http://wiki.seeed.cc/GrovePi_Plus/) 完成配置。
- 将 Grove-Button 插入到 Grovepi + 的 **D3** 端口。
- 将 Grove-Relay 插入 Grovepi + 的 **D4** 端口。
![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/GrovePiPlus_Grove_relay.jpeg)

#### 程序

!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你只能在 **python3** 中使用这个命令行.

此演示向您展示如何通过 Raspberry Pi 使用 Grove - Relay。
```
# Raspberry Pi + Grove Switch + Grove Relay

import time
import grovepi
# Connect the Grove Switch to digital port D3
# SIG,NC,VCC,GND

switch = 3
# Connect the Grove Relay to digital port D4
# SIG,NC,VCC,GND

relay = 4
grovepi.pinMode(switch,"INPUT")
grovepi.pinMode(relay,"OUTPUT")
while True:
    try:
        if grovepi.digitalRead(switch):
            grovepi.digitalWrite(relay,1)
        else:
            grovepi.digitalWrite(relay,0)
            time.sleep(.05)
    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```


- 找到文件的路径（根据你自己的路径来定）
```
cd GrovePi/Software/Python/
```
- 运行这个代码
```
sudo python3 grove_switch_relay.py
```


## 原理图在线预览


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源下载
----
* **[Eagle]** [Grove - Relay Schematic and PCB in Eagle format](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip)
* **[PDF]** [Grove - Relay PCB in PDF format](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20PCB.pdf)
* **[PDF]** [Grove - Relay Schematic in PDF format](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20Schematic.pdf)
* **[Datasheet]** [HLS8-T73 Series Relay Datasheet](https://files.seeedstudio.com/wiki/Grove-Relay/res/Relay_Datasheet.pdf)
