---
title: Grove - 继电器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Relay/
slug: /cn/Grove-Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

<!-- <p style=":center"><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" /></p> -->

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg)

Grove-继电器模块是一个数字常开开关。通过它，您可以使用低电压（例如控制器上的5V）来控制高电压电路。模块上有一个指示灯，当控制端闭合时，指示灯会亮起。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 参数             | V1.1             | V1.2             |
| :--------------- | :--------------- | :--------------- |
| 产品发布日期     | 2013年1月27日    | 2014年6月9日     |
| 工作电压         | 5V               | 3.3V~5V          |
| 工作电流         | 60mA             | 100mA            |
| 继电器寿命       | 100,000次循环    | 100,000次循环    |
| 最大切换电压     | 250VAC/30VDC     | 250VAC/30VDC     |
| 最大切换电流     | 5A               | 5A               |

:::tip
    有关Grove模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### 所需材料

| Seeeduino V4.2 | Base Shield | Grove-Button **x2** | Grove-Relay |
|----------------|-------------|-------------------------|-----------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 连接线。如果您丢失了连接线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 硬件连接

- **步骤 1.** 将 Grove-Relay 连接到 Grove-Base Shield 的 **D4** 端口。

- **步骤 2.** 将 Grove-Button#1 连接到 Grove-Base Shield 的 **D2** 端口，将 Grove-Button#2 连接到 **D3** 端口。

- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。

- **步骤 4.** 使用 Micro-USB 数据线将 Seeeduino 连接到电脑。

![图片描述](https://files.seeedstudio.com/wiki/Grove-Relay/img/button-relay.jpg)

:::note
    如果没有 Base Shield，也可以直接将 Grove-Relay 和 Grove-Button 连接到 Arduino 板。请参考以下连接方式。
:::

| Grove-Relay | Arduino | Grove 连接线 |
|-----------------|---------|-----------------|
| GND             | GND     | 黑色            |
| VCC             | 5V      | 红色            |
| SIG             | D4      | 黄色            |

| Grove-Button#1 | Arduino | Grove 连接线 |
|--------------------|---------|-----------------|
| GND                | GND     | 黑色            |
| VCC                | 5V      | 红色            |
| SIG                | D2      | 黄色            |

| Grove-Button#2 | Arduino | Grove 连接线 |
|--------------------|---------|-----------------|
| GND                | GND     | 黑色            |
| VCC                | 5V      | 红色            |
| SIG                | D3      | 黄色            |

#### 软件

以下是一个演示，展示如何使用 Grove-Button 控制 Grove-Relay。当按下一个按钮时，继电器会闭合；按下另一个按钮时，继电器会断开。

- **步骤 1.** 打开 Arduino IDE，将以下代码复制到新建的草图中。

```cpp
// 继电器控制

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, OUTPUT);
}

void loop()
{
  if (digitalRead(2) == HIGH)
  {
    digitalWrite(4, HIGH);
    delay(100);
  }
  if (digitalRead(3) == HIGH)
  {
    digitalWrite(4, LOW);
  }
}
```

- **步骤 2.** 上传代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

上传完成后，按下按钮#1，继电器应打开；按下按钮#2，继电器应关闭。

### 使用 Codecraft

#### 硬件连接

**步骤 1.** 将 Grove-Relay 连接到 D4 端口，将两个 Grove-Button 分别连接到 D2 和 D3 端口的 Base Shield。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
    如果您是第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图所示拖动模块，或者打开页面底部提供的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Relay/img/cc_Relay.png)

将程序上传到您的 Arduino/Seeeduino。

:::success
    当代码上传完成后，按下连接到 D2 端口的按钮时，继电器将打开；按下连接到 D3 端口的按钮时，继电器将关闭。
:::

### 使用 Raspberry Pi（配合 Grove Base Hat for Raspberry Pi）

#### 硬件连接

- **步骤 1.** 本项目所需材料：

| Raspberry Pi | Grove Base Hat for RasPi | Grove-Relay |
|--------------|-------------------------------|-----------------|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- **步骤 2.** 将 Grove Base Hat 插入 Raspberry Pi。
- **步骤 3.** 将 Grove-Relay 连接到 Base Hat 的 12 号端口。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay_Hat.jpg)

:::note
    在步骤 3 中，您可以将继电器模块连接到 **任何 GPIO 端口**，但请确保在命令中更改为对应的端口号。
:::

#### 软件

:::note
    如果您使用的是 **Raspberry Pi 且 Raspberry Pi OS 版本 >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::

- **步骤 1.** 按照 [软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2.** 通过克隆 grove.py 库下载源文件。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3**. 执行以下命令运行代码。

```bash
cd grove.py/grove
python3 grove_relay.py 12
```

以下是 grove_relay.py 的代码。

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

:::success
    如果一切正常，您将看到 LED 指示灯闪烁。
:::
您可以通过按 ++ctrl+c++ 退出此程序。

### 使用 Raspberry Pi（搭配 GrovePi_Plus）

#### 硬件

**所需材料**

| Raspberry Pi | GrovePi_Plus | Grove-Button | Grove-Relay |
|--------------|--------------|------------------|-----------------|
|![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank">立即购买</a>|

- **步骤 1.** 将 GrovePi_Plus 插入 Raspberry Pi。

- **步骤 2.** 将 Grove-Relay 连接到 GrovePi_Plus 的 **D4** 端口。

- **步骤 3.** 将 Grove-Button 连接到 GrovePi_Plus 的 **D3** 端口。

- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到 PC。

![输入图片描述](https://files.seeedstudio.com/wiki/Grove-Relay/img/GrovePiPlus_Grove_relay.jpeg)

#### 软件

如果这是您第一次使用 GrovePi，请按步骤完成此部分。如果您已经熟悉 GrovePi，可以跳过 **步骤 1** 和 **步骤 2**。

- **步骤 1.** 设置软件。在命令行中输入以下命令：

:::note
     如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您 **不能使用此命令**。
:::
```bash
sudo curl -kL dexterindustries.com/update_grovepi | bash
```

```bash
sudo reboot
```

```bash
cd /home/pi/Desktop
```

```bash
git clone https://github.com/DexterInd/GrovePi.git
```

有关此部分的更多详细信息，请参考 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)。

- **步骤 2.** 按照 [更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) 更新 GrovePi 的最新固件。

:::note
    我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::
- **步骤 3.** 运行以下命令以查看结果。

:::note
     如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 执行此命令。
:::
```bash
cd /home/pi/Desktop/GrovePi/Software/Python/
sudo python3 grove_switch_relay.py
```

如果您想查看代码，可以使用以下命令：

```bash
sudo nano grove_switch_relay.py
```

代码如下：

```python
# Raspberry Pi + Grove Switch + Grove Relay

import time
import grovepi
# 将 Grove Switch 连接到数字端口 D3
# SIG,NC,VCC,GND

switch = 3
# 将 Grove Relay 连接到数字端口 D4
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

### 使用 TI LaunchPad

控制其他电子设备（继电器）

![输入图片描述](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay.jpg)

此示例展示了如何使用 Grove-Relay 模块控制较大的负载，例如台灯。一个 3V 的电压信号可以使继电器打开，从而允许电流通过连接的设备。

```c
/*
继电器
基本的 Energia 示例。
此示例代码为公共领域代码。
*/

#define RELAY_PIN 39

// setup 函数在按下复位时运行一次：
void setup() {
         pinMode(RELAY_PIN, OUTPUT); // 将数字引脚初始化为输出。
}

// loop 函数会不断重复运行：
void loop() {
         digitalWrite(RELAY_PIN, HIGH); // 打开继电器（HIGH 是电压信号）
         delay(1000);   // 等待一秒
         digitalWrite(RELAY_PIN, LOW);   // 关闭继电器（LOW 是低电压信号）
         delay(1000);   // 等待一秒
}
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

我们在 [geppetto](https://geppetto.seeedstudio.com/) 上提供了此部件，使用 Seeed 和 Geppetto 轻松进行模块化电子设计。立即构建吧！[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## 资源

- **[Eagle]** [Grove - Relay 原理图和 PCB（Eagle 格式）](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip)
- **[PDF]** [Grove - Relay PCB（PDF 格式）](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20PCB.pdf)
- **[PDF]** [Grove - Relay 原理图（PDF 格式）](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20Schematic.pdf)
- **[Datasheet]** [HLS8-T73 系列继电器数据表](https://files.seeedstudio.com/wiki/Grove-Relay/res/Relay_Datasheet.pdf)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove_Relay_CDC_File.zip)

## 项目

<table class="tg">
  <tr>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe></th>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/rei-vilo/private-iot-with-blynk-on-local-server-619926/embed' width='350'></iframe></th>
    <th class="tg-yw4l"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/josephroberts/resinified-office-lock-0ca2eb/embed' width='350'></iframe></th>
  </tr>
</table>

**Relay Grove 模块**：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/DnHqh_Rupb8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JOsjUOI9FU8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>