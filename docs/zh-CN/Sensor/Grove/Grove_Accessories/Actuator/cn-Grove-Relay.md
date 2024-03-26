---
title: Grove - Relay
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Relay/
slug: /cn/Grove-Relay
last_update:
  date: 03/21/2024
  author: WuFeifei
---


<!-- <p style=":center"><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" /></p> -->

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg)

Grove-Relay模块是一个数字常开开关。通过它，您可以用低电压（例如控制器上的5V）控制高电压电路。板上有一个指示LED灯，当受控端子闭合时，该LED灯会亮起。

<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 参数   | V1.1     |V1.2     |
| :------------- | :------------- |:------------- |
| 产品发布日期 | 2013年1月27日 |2014年6月9日|
|工作电压|5V|3.3V~5V|
|工作电流|60mA|100mA|
|继电器寿命|100,000 Cycle|100,000 Cycle|
|最大切换电压|250VAC/30VDC|250VAC/30VDC|
|最大切换电流|5A|5A|

:::提示
    更多关于Grove模块的信息，请查阅[Grove系统](https://www.seeedstudio.com/category/Grove-System/)页面。
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述提到的支持平台仅表示该模块在软件或理论上的兼容性。在大多数情况下，我们仅提供Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/示例代码，因此用户需要自己编写软件库。
:::

## 入门指南

### 玩转 Arduino

:::注意
    如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

#### 所需材料

| Seeeduino V4.2 | 基础屏蔽板 | Grove-按钮 **x2** |Grove-继电器|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html">立即获得</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" >立即获得</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">立即获得</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html">立即获得</a>|

:::注意
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有四根线的USB线，两根线的USB线无法传输数据。如果您不确定手中的线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

    **2** 购买每个Grove模块时都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::
#### 硬件连接

- **步骤 1.** 将 Grove-Relay 连接到 Grove-Base Shield 的 **D4** 端口。

- **步骤 2.** 将 Grove-Button#1 连接到 Grove-Base Shield 的 **D2** 端口，将 Grove-Button#2 连接到 Grove-Base Shield 的 **D3** 端口。

- **步骤 3.**  将 Grove-Base Shield 插入 Seeeduino。

- **步骤 4.** 通过 Micro-USB 电缆将 Seeeduino 连接到电脑。

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button-relay.jpg)

:::注意
    如果没有基础屏蔽板，我们也可以直接将 Grove-Relay 和 Grove-Button 连接到 Arduino 板上。请按照以下连接方式进行连接。
:::

| Grove-Relay | Arduino | Grove 线缆 |
|-------------|---------|-----------|
| GND         | GND     | 黑色 |
| VCC         | 5V      |红色|
| SIG         | D4      |黄色|

| Grove-Button#1 | Arduino |Grove 线缆|
|----------------|---------|-------|
| GND            | GND     |黑色|
| VCC            | 5V      |红色|
| SIG            | D2      |黄色|

| Grove-Button#2 | Arduino |Grove 线缆|
|----------------|---------|----|
| GND            | GND     |黑色|
| VCC            | 5V      |红色|
| SIG            | D3      |黄色|

#### 软件

以下是一个演示，向您展示如何使用 Grove - Button 控制 Grove - Relay。当按下其中一个按钮时，继电器将闭合；当按下另一个按钮时，继电器将打开。

- **步骤 1.**  打开 Arduino IDE，并将以下代码复制到一个新的草图中。

```
// 继电器控制

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

- **步骤 2.** 上传演示程序。如果您不知道如何上传代码，请查阅[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

上传完成后，如果您按下按钮#1，继电器应该开启；如果您按下按钮#2，继电器应该关闭。

### 使用 Codecraft 进行编程

#### 硬件

**步骤 1.** 将一个 Grove - Relay 连接到 Base Shield 的 D4 端口，将两个 Grove - Button 分别连接到 Base Shield 的 D2 和 D3 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并拖动一个主程序到工作区。

:::注意
    如果您是第一次使用 Codecraft，也请参考 [Codecraft 使用 Arduino 的指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按照下面的图片拖动代码块，或者打开本页面末尾可以下载的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Relay/img/cc_Relay.png)

将程序上传到您的 Arduino/Seeeduino。

:::成功后
    当代码上传完成后，按下连接到 D2 端口的按钮时，继电器将打开；按下连接到 D3 端口的按钮时，继电器将关闭。
:::

### 使用树莓派（配合树莓派 Grove Base Hat）进行编程

#### 硬件

- **步骤 1**. 本项目所需物品：

| 树莓派 | 树莓派 Grove Base Hat | Grove - Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- **步骤 2**. 将 Grove Base Hat 插入树莓派。
- **步骤 3**. 将 Grove - Relay 连接到 Base Hat 的 12 号端口。
- **步骤 4**. 通过 USB 线缆将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay_Hat.jpg)

:::注意
在步骤 3 中，你可以将继电器模块连接到 **任何 GPIO 端口**，但请确保你根据对应的端口号更改命令。
:::

#### 软件

:::注意
     如果你使用的是 **带有 Raspberrypi OS >= Bullseye 的树莓派**，你必须 **仅使用 Python3** 来执行这个命令行。
:::

- **步骤 1**. 按照 [设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) 的步骤来配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
python3 grove_relay.py 12

```

以下是 grove_relay.py 代码的示例。

```python

from grove.gpio import GPIO


class GroveRelay(GPIO):
    def __init__(self, pin):
        super(GroveRelay, self).__init__(pin, GPIO.OUT)

    def on(self):
        self.write(1)

    def off(self):
        self.write(0)


Grove = GroveRelay


def main():
    import sys
    import time

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    relay = GroveRelay(int(sys.argv[1]))

    while True:
        try:
            relay.on()
            time.sleep(1)
            relay.off()
            time.sleep(1)
        except KeyboardInterrupt:
            relay.off()
            print("exit")
            exit(1)            

if __name__ == '__main__':
    main()



```

:::成功后
    如果一切顺利，你将能够看到 LED 指示灯在闪烁。
:::
你可以通过简单地按下 ++ctrl+c++ 来退出此程序。

### 使用树莓派（配合 GrovePi_Plus）

#### 硬件

**所需材料**

| 树莓派 | GrovePi_Plus| Grove-Button  |Grove-Relay|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank">立即获取</a>|

- **步骤 1.** 将 GrovePi_Plus 插入树莓派。

- **步骤 2.** 将 Grove-Relay 连接到 GrovePi_Plus 的 **D4** 端口。
- **步骤 3.** 将 Grove-Button 连接到 GrovePi_Plus 的 **D3** 端口。
- **步骤 4.** 通过 USB 线缆将树莓派连接到电脑。

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/GrovePiPlus_Grove_relay.jpeg)

#### 软件

如果你是第一次使用 GrovePi，请逐步完成以下步骤。如果你已经熟悉 GrovePi，可以跳过 **步骤1** 和 **步骤2**。

- **步骤 1.** 设置软件。在命令行中输入以下命令

:::注意
     如果你使用的是 **带有 Raspberrypi OS >= Bullseye 的树莓派**，你 **无法使用此命令行**。
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

有关此部分的更多详细信息，请查阅 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)。

- **步骤 2.** 按照 [更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) 的说明来更新 GrovePi 的最新固件。

:::注意
    我们强烈建议您更新固件，否则在使用某些传感器时可能会遇到错误。
:::

- **步骤 3.** 运行以下命令以获取结果。

:::注意
     如果你使用的是 **带有 Raspberrypi OS >= Bullseye 的树莓派**，你必须 **仅使用 Python3** 来执行此命令行。
:::

```
cd /home/pi/Desktop/GrovePi/Software/Python/
sudo python3 grove_switch_relay.py
```

如果你想检查代码，你可以使用以下命令：

```
sudo nano grove_switch_relay.py

```

代码是：

```python
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

### 使用TI LaunchPad

控制其他电子设备（继电器）

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay.jpg)

这个示例展示了如何使用 Grove-Relay 模块来控制更大的负载，比如一盏台灯。一个3V的电压信号可以使继电器开启，允许电流通过连接的电器。

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

## **在线原理图查看器**

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


我们在 [geppetto](https://geppetto.seeedstudio.com/) 上提供了这个部件，这是一个与 Seeed 和 Geppeto 合作开发的简易模块化电子设计平台。现在就开始构建吧！访问 [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)。

## 资源

- **[Eagle]** [Grove - Relay的Eagle 格式电路图和PCB文件](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip)
- **[PDF]** [Grove - Relay的PDF格式PCB文件](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20PCB.pdf)
- **[PDF]** [Grove - Relay 的PDF格式电路图](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20Schematic.pdf)
- **[数据手册]** [HLS8-T73 系列继电器数据手册](https://files.seeedstudio.com/wiki/Grove-Relay/res/Relay_Datasheet.pdf)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove_Relay_CDC_File.zip)

## 项目


<table class="tg">
  <tr>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe></th>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/rei-vilo/private-iot-with-blynk-on-local-server-619926/embed' width='350'></iframe></th>
    <th class="tg-yw4l"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/josephroberts/resinified-office-lock-0ca2eb/embed' width='350'></iframe></th>
  </tr>
</table>
**Grove继电器模块**：

<iframe width="560" height="315" src="https://www.youtube.com/embed/DnHqh_Rupb8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供多种支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
