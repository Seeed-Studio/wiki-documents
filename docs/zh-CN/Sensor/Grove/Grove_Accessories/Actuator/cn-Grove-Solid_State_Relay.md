---
title: Grove - Solid State Relay
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Solid_State_Relay/
slug: /cn/Grove-Solid_State_Relay
last_update:
  date: 03/21/2024
  author: WuFeifei
---
![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove_Solid_State_Relay_1.jpg)

Grove——固态继电器是一种具有继电器特性的非接触式电子开关模块。它基于S208T02，最大输出为250VAC/4A，切换速度小于10ms。该模块配备了丙烯酸底座和3D打印的保护绝缘罩，以确保用户的安全。特征LED指示灯可以表明继电器已开启。它可广泛应用于计算机外围接口、温度/速度/光调节、伺服控制、石油化工、医疗器械、金融设备、煤炭、仪表、交通信号灯等多个领域。

:::注意
        该模块的输出端仅适用于交流负载。如果您使用直流负载，继电器一旦打开，就会始终保持开启状态。
:::

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

- 配备3D打印的保护绝缘罩
- 兼容3.3V和5V控制电平
- 低切换延迟（≤10ms）
- LED开启状态指示灯
- 特色的散热器提供更好的稳定性
- 配备丙烯酸底座和绝缘纸，增强安全性能
- 兼容Grove系统

:::提示
    更多关于Grove模块的详细信息，请参考[Grove系统](https://yiyan.baidu.com/此处应填写Grove系统相关的网址或文档链接)
:::

## 应用场景

- 需要低延迟切换的操作，例如舞台灯光控制
- 需要高稳定性的设备，例如医疗设备、交通信号灯
- 需要防爆、防腐、防潮的场景，例如煤炭、化工行业。

## 规格

|项目 |最小值 |典型值 |最大值 |单位|
|---|---|---|---|---|
|输入电压| 3.0|3.3|5.0|VDC|
|输入电流| 16|20|50|mA|
|输出电压 |-|220|250|VAC|
|输出电流 |--|--|4.0|A|
|工作频率|45|50|65|Hz|
|工作温度|-25|25|85|℃|
|开启时间 |--|10|--|ms|
|关闭时间 |--|10|--|ms|
|尺寸 |-|44x44x32|-|mm|
|净重 |-|25.5|-|g|

## 接口功能

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Ssr_interface.jpg)

:::警告
        **1.**  如果输出电压高于36V，请在操作螺丝之前确保模块处于关闭状态。

        **2.** 散热器可能会处于非常高的温度，使用时请勿触摸。
:::

## 入门指南

### 玩转 Arduino

:::注意
    如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

:::提示
        本演示使用220V交流负载，请注意安全。
:::

#### 所需材料

| Seeeduino V4.2 | 基础底板 | 灯泡 |Grove -  固态继电器|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/bulb.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|使用你自己的灯泡 :)|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">立即获取</a>|

:::注意
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的USB线无法传输数据。如果您不确定自己手中的线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)进行购买。

    **2** 购买每个Grove模块时都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
:::

#### 硬件连接

- **步骤 1.** 将Grove - 固态继电器连接到Grove-Base Shield的**D3**端口。

- **步骤 2.** 将灯泡的电线连接到Grove - 固态继电器的**输出端口**。

- **步骤 3.** 将Grove - Base Shield插入Seeeduino中。

- **步骤 4.** 通过Micro-USB电缆将Seeeduino连接到电脑。

:::注意
    如果没有基础底板，我们也可以直接将Grove-Relay和Grove-Button连接到Arduino板。请按照以下方式进行连接。
:::

| Grove - 固态继电器 | Arduino |Grove 电缆|
|-------------|---------|------|
| GND         | GND     |黑色|
| VCC         | 5V      |红色|
| SIG         | D3      |黄色|

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Arduino_relay.jpg)

#### 软件

- **步骤 1.** 打开Arduino IDE，并将以下代码复制到一个新的程序中。

```
/*
  Grove - Solid State Relay Demo Code
  The ssr will turn on for 5s and then turn off for 5s, and so on.
  https://www.seeedstudio.com
*/

int ssrControlPin = 3;
void setup() {
    // initialize the digital pin as an output.
    pinMode(ssrControlPin, OUTPUT);
}

void loop() {
    digitalWrite(ssrControlPin, HIGH);      // set the SSR on
    delay(5000);                            // wait for 5 second
    digitalWrite(ssrControlPin, LOW);       // set the SSR off
    delay(5000);                            // wait for 5 second
}
```

- **步骤 2.** 上传示例程序。如果您不知道如何上传代码，请参考[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

上传完成后，您将看到灯泡每5秒打开一次，然后每5秒关闭一次，如此循环。

### 玩转 Raspberry Pi

#### 硬件

**所需材料**

| Raspberry pi | GrovePi_Plus| Grove-继电器 |
|--------------|-------------|------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">立即获取</a>|

- **步骤 1.** 将GrovePi_Plus插入Raspberry Pi中。

- **步骤 2.** 将Grove-继电器连接到GrovePi_Plus的**D4**端口。

- **步骤 3.** 将灯泡的电线连接到Grove - 固态继电器的**输出端口**。

- **步骤 4.** 通过USB电缆将Raspberry Pi连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/PI_RELAY.jpg)

#### 软件

如果您是第一次使用GrovePi，请逐步执行此部分。如果您是GrovePi的老朋友，可以跳过**步骤1**和**步骤2**。

- **步骤 1.** 设置软件。在命令行中，输入以下命令：

:::注意
     如果您使用的是**带有Raspberrypi OS >= Bullseye的Raspberry Pi**，则**无法使用此命令行**。
:::

```
sudo curl -kL dexterindustries.com/update_grovepi | bash

```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

有关此部分的更多详细信息，请参阅[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)。

- **步骤 2.** 按照[更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)的步骤更新GrovePi的最新固件。

:::注意
    我们强烈建议您更新固件，否则一些传感器可能会出现错误。
:::

- **步骤 3.** 运行以下命令以运行示例并获得结果。

:::注意
     如果您使用的是**带有Raspberrypi OS >= Bullseye的Raspberry Pi**，则**仅当使用Python3时**才能使用此命令行。
:::

```
cd /home/pi/Desktop/GrovePi/Software/Python/

```

```
sudo python3 grove_solid_state_relay.py 
```

结果应该如下：

```
pi@raspberrypi:~/Desktop/GrovePi/Software/Python$ sudo python3 grove_solid_state_relay.py
on
off
on
off
on
off
on
off
on
off
on
off

```

如果您想查看代码，请输入以下命令。

```
nano grove_solid_state_relay.py   # "Ctrl+x" to exit #
```

代码是：

```python
import time
import grovepi

# Connect the Grove Solid State Relay to digital port D4
# CTR,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # switch on for 5 seconds
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # switch off for 5 seconds
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

## 测试报告

---
**1.实验目的**

- 测试Grove - 固态继电器（S208T02）的热性能。
- 测定Grove - SSR的极限负载电流。
- 提高极限负载电流的措施。

**2.实验原理**

通过记录在不同电流和不同时间点下SSR芯片的温度，分析数据并得出结论。

图1是S208T02数据手册的截图，从图中我们可以看到，在不同的散热片和温度下，SSR的电流是不同的。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Figure_1.jpg)

需要一个温度传感器来获取芯片的温度。我使用了DS18B20，其检测范围为-25-125℃，以满足实验要求。

图2展示了实验设备和安装计划，温度传感器绑在散热片的右侧，以使DS18B20检测到的温度尽可能接近散热片的温度。在传感器和散热片之间涂抹导热塑料。在散热片和SSR之间也涂抹导热塑料。因此，DS18B20的温度等于SSR的温度。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image2.JPG)

**3.实验数据**

|- |1min |5min| 10min| 20min |稳定时间|
|---|---|---|---|---|---|
|0.5A| 31.40| 33.75 |34.75| 35.00 |15min|
|1A| 31.8 |36.75 |39.6| 40.56 |18min|
|2A| 34.5| 46.6| 48.88 |51.13 |20min|
|3A |35.56| 52.81| 58.88 |60.06| 17min|
|4A| 38.00 |57.88| 63.88 |67.00 |19min|
|5A| 44.00| 66.00| 73.12| 75.37| 19min|

:::注意
    1. 表格中温度的单位为℃。
        2. 测试时室温为28℃。
        :::
        **4.扩展实验**

为了证明提高散热片的散热性能会提高SSR的极限工作电流，我进行了一个扩展实验。

由于手头没有更大的散热片，因此我在SSR上方安装了一个风扇（这是我从我电脑的CPU上拆下来的）。如图3所示。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image3.JPG)

我只是测试了不同工作电流下的稳定时间，如表2所示。

|-| 6.0A| 6.5A |7.0A| 7.5A|
|---|---|---|---|---|
|稳定时间| 54.44℃| 57.63℃ |60.06℃| 62.38℃|

**5.扩展实验**

从上述实验结果可以得出以下结论：

- 当电流固定时，随着时间的推移，温度会稳定在某个值。这个值与电流有关，电流增大，稳定温度也会增大。在2A时，稳定温度将超过50℃，因此，当SSR工作时，不应触摸它。

- 结合图1和我们的数据，我认为Grove - SSR最大可以承受4A的负载电流。
- 如果负载电流大于5A，例如7A，您应该在其上安装风扇或其他冷却措施，但不建议这样做。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- **[Zip]** [Grove - S固态继电器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip)
- **[RAR]** [Grove - 固态继电器演示代码](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_Demo_Code.rar)
- **[PDF]** [S208T02 数据手册](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/S208t02_datasheet.pdf)
- **[PDF]** [Grove - 固态继电器 PDF 版本](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_v0.9b.pdf)
- **[PDF]** [Grove - 固态继电器测试报告](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Grove-SSR_Test_Report_V0.3.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品时体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
