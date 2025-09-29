---
title: Grove - 固态继电器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Solid_State_Relay/
slug: /cn/Grove-Solid_State_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove_Solid_State_Relay_1.jpg)

Grove – 固态继电器是一种非接触式电子开关模块，具有继电器功能。基于 S208T02，它的最大输出为 250VAC/4A，切换速度小于 10ms。该模块配备了丙烯酸底座和 3D 打印的保护绝缘罩，以确保用户安全。模块上的 LED 指示灯显示继电器处于开启状态。它可以广泛应用于计算机外围接口、温度/速度/光线调节、伺服控制、石化、医疗仪器、金融设备、煤炭、仪表、交通信号等多个领域。

:::note
        此模块仅适用于交流负载输出。如果使用直流负载，一旦继电器开启，它将始终保持开启状态。
:::

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 3D 打印的保护绝缘罩
- 兼容 3.3V 和 5V 控制电平
- 低切换延迟（≤10ms）
- LED 开启状态指示灯
- 配备散热器，提供更好的稳定性
- 丙烯酸底座和绝缘纸提高安全性能
- Grove 兼容

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 应用场景

- 需要低延迟切换的操作，例如舞台灯光控制
- 需要高稳定性的设备，例如医疗设备、交通信号灯
- 需要防爆、防腐、防潮的场景，例如煤炭、化工行业

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

:::caution
        **1.** 如果输出电压高于 36V，在操作螺丝之前需要确保模块处于关闭状态。

        **2.** 散热器可能会达到非常高的温度，请勿在使用过程中触摸。
:::

## 入门指南

### 使用 Arduino

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

:::tip
        此演示使用 220V 交流负载，请注意安全。
:::

#### 所需材料

  | Seeeduino V4.2 | 基础扩展板 | 灯泡 |Grove - 固态继电器|
  |--------------|-------------|-----------------|-----|
  |![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/bulb.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
  |<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|使用您自己的灯泡 :)|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏端口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果您不确定您拥有的线缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 硬件连接

- **步骤 1.** 将 Grove - 固态继电器连接到 Grove-基础扩展板的 **D3** 端口。

- **步骤 2.** 将灯泡的线连接到 Grove - 固态继电器的 **输出端口**。

- **步骤 3.** 将 Grove - 基础扩展板插入 Seeeduino。

- **步骤 4.** 使用 Micro-USB 数据线将 Seeeduino 连接到电脑。

:::note
    如果我们没有基础扩展板，也可以直接将 Grove-继电器和 Grove-按钮连接到 Arduino 板。请按照以下连接方式。
:::

| Grove - 固态继电器 | Arduino |Grove 数据线|
|-------------|---------|------|
| GND         | GND     |黑色|
| VCC         | 5V      |红色|
| SIG         | D3      |黄色|

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Arduino_relay.jpg)

#### 软件

- **步骤 1.** 打开 Arduino IDE，并将以下代码复制到一个新草图中。

```
/*
  Grove - 固态继电器演示代码
  继电器将开启 5 秒，然后关闭 5 秒，循环往复。
  https://www.seeedstudio.com
*/

int ssrControlPin = 3;
void setup() {
    // 初始化数字引脚为输出模式。
    pinMode(ssrControlPin, OUTPUT);
}

void loop() {
    digitalWrite(ssrControlPin, HIGH);      // 设置继电器开启
    delay(5000);                            // 等待 5 秒
    digitalWrite(ssrControlPin, LOW);       // 设置继电器关闭
    delay(5000);                            // 等待 5 秒
}
```

- **步骤 2.** 上传演示代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

上传完成后，您将看到灯泡连续开启 5 秒，然后关闭 5 秒。

### 使用 Raspberry Pi

#### 硬件连接

**所需材料**

  | 树莓派 | GrovePi_Plus | Grove-继电器 |
  |--------|--------------|------------------|
  |![图片描述](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
  |<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">立即购买</a>|

- **步骤 1.** 将 GrovePi_Plus 插入树莓派。

- **步骤 2.** 将 Grove-继电器连接到 GrovePi_Plus 的 **D4** 端口。

- **步骤 3.** 将灯泡的电线连接到 Grove-固态继电器的 **输出端口**。

- **步骤 4.** 使用 USB 数据线将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/PI_RELAY.jpg)

#### 软件

如果这是您第一次使用 GrovePi，请按步骤完成此部分。如果您已经熟悉 GrovePi，可以跳过 **步骤 1** 和 **步骤 2**。

- **步骤 1.** 设置软件。在命令行中输入以下命令：

:::注意
     如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您 **不能使用此命令行**。
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

有关此部分的更多详细信息，请参考 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)。

- **步骤 2.** 按照 [更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) 更新 GrovePi 的最新固件。

:::注意
    我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::

- **步骤 3.** 运行以下命令以运行演示并获取结果。

:::注意
     如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您必须 **仅使用 Python3** 执行此命令行。
:::

```
cd /home/pi/Desktop/GrovePi/Software/Python/
```

```
sudo python3 grove_solid_state_relay.py 
```

结果应如下所示：

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

如果您想查看代码，请输入以下命令：

```
nano grove_solid_state_relay.py   # 按 "Ctrl+x" 退出 #
```

代码如下：

```python
import time
import grovepi

# 将 Grove 固态继电器连接到数字端口 D4
# CTR,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # 打开继电器 5 秒
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # 关闭继电器 5 秒
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
**1. 实验目的**

- 测试 Grove – 固态继电器（S208T02）的热性能。
- 测试 Grove – SSR 的极限负载电流。
- 提出提高极限负载电流的措施。

**2. 实验原理**

通过记录 SSR 芯片在不同电流和不同时间点的温度，分析数据并得出结论。

图 1 是 S208T02 数据手册中的截图，可以看到在不同散热条件和不同温度下，SSR 的电流表现不同。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Figure_1.jpg)

需要一个温度传感器来获取芯片的温度。我使用了 DS18B20，其检测范围为 -25-125℃，能够满足实验要求。

图 2 显示了实验设备和安装方案。温度传感器被绑在散热片的右侧，为了使 18b20 检测到的温度尽可能接近散热片的温度，在传感器和散热片之间涂抹了导热膏。在散热片和 SSR 之间也涂抹了导热膏。因此，18b20 的温度等于 SSR 的温度。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image2.JPG)

**3. 实验数据**

| 电流 | 1分钟 | 5分钟 | 10分钟 | 20分钟 | 稳定时间 |
|---|---|---|---|---|---|
| 0.5A | 31.40 | 33.75 | 34.75 | 35.00 | 15分钟 |
| 1A | 31.8 | 36.75 | 39.6 | 40.56 | 18分钟 |
| 2A | 34.5 | 46.6 | 48.88 | 51.13 | 20分钟 |
| 3A | 35.56 | 52.81 | 58.88 | 60.06 | 17分钟 |
| 4A | 38.00 | 57.88 | 63.88 | 67.00 | 19分钟 |
| 5A | 44.00 | 66.00 | 73.12 | 75.37 | 19分钟 |

:::note
1. 表格中的温度单位为 ℃  
2. 测试时的室温为 28 ℃  
:::

**4. 扩展实验**

为了证明提高散热水平可以提升 SSR 的极限工作电流，我进行了扩展实验。

由于手头没有更大的散热片，我在 SSR 上方安装了一个风扇（取自我的电脑 CPU），如图 3 所示。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image3.JPG)

我仅测试了不同工作电流下的稳定时间，结果如表 2 所示。

| 电流 | 6.0A | 6.5A | 7.0A | 7.5A |
|---|---|---|---|---|
| 稳定温度 | 54.44℃ | 57.63℃ | 60.06℃ | 62.38℃ |

**5. 扩展实验结论**

根据上述实验结果，可以得出以下结论：

- 当电流固定时，随着时间的推移，温度会稳定在某个值。该值与电流相关，电流越大，稳定温度越高。在 2A 时，稳定温度会超过 50℃，因此，当 SSR 工作时，不应触摸它。

- 结合图 1 和我们的数据，我认为 Grove – SSR 的最大工作电流为 4A。

- 如果负载电流超过 5A，例如达到 7A，则需要安装风扇或采取其他冷却措施，但不推荐这样做。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 固态继电器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip)
- **[RAR]** [Grove - 固态继电器演示代码](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_Demo_Code.rar)
- **[PDF]** [S208T02 数据手册](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/S208t02_datasheet.pdf)
- **[PDF]** [Grove - 固态继电器 PDF 文档](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_v0.9b.pdf)
- **[PDF]** [Grove - 固态继电器测试报告](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Grove-SSR_Test_Report_V0.3.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>