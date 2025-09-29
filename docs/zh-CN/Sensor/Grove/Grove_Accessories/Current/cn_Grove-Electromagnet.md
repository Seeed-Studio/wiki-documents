---
description: Grove - 电磁铁
title: Grove - 电磁铁
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Electromagnet
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02.jpg)

电磁铁是一种磁铁，其磁场由电流产生。根据安培定律（见下图），流经导线的电流会在导线周围产生磁场。为了集中磁场，电磁铁中的导线被绕成一个线圈，线圈由许多并排的导线组成。所有线圈的磁场通过线圈的中心，从而在中心产生强磁场。Grove - 电磁铁可以吸附1KG的重量并保持不掉。它易于使用，适合学习电磁铁原理。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## 特性

- Grove 形状
- 1KG 峰值吸力
- 低待机电流

## 规格

| 项目            | 参数 |
|-----------------|-------|
| 工作电压       | DC 5V |
| 工作电流       | 400mA |
| 待机电流       | 200uA |
| 负载重量       | 1KG   |

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

**硬件**

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove-电磁铁 |
|----------------|-------------|------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **步骤 2.** 将 Grove-电磁铁连接到 Grove-Base Shield 的 **D2** 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/2-connect.jpg)

:::note
如果没有 Grove Base Shield，我们也可以直接将 Grove-电磁铁连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove-超声波测距传感器 |
|-----------------|-------------------------|
| 5V              | 红色                   |
| GND             | 黑色                   |
| 未连接          | 白色                   |
| D2              | 黄色                   |

**软件**

- **步骤 1.** 请将以下代码复制到 Arduino IDE 并上传到 Arduino。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
/*
  将电磁铁打开一秒钟，然后关闭一秒钟，循环往复。
  此示例代码为公共领域代码。
*/

int Electromagnet = 2;
int LED = 13;

// setup 函数在按下复位键时运行一次：
void setup() {
    // 将数字引脚初始化为输出模式。
    pinMode(Electromagnet, OUTPUT);
    pinMode(LED, OUTPUT);
}

// loop 函数会不断重复运行：
void loop() {
    digitalWrite(Electromagnet, HIGH);  // 打开电磁铁（HIGH 表示高电平）
    digitalWrite(LED, HIGH);           // 打开 LED（HIGH 表示高电平）
    delay(1000);                       // 等待一秒
    digitalWrite(Electromagnet, LOW);  // 关闭电磁铁（LOW 表示低电平）
    digitalWrite(LED, LOW);            // 关闭 LED（LOW 表示低电平）
    delay(1000);                       // 等待一秒
}
```

- **步骤 2.** Grove-电磁铁开始工作。

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet-3.png)

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove-电磁铁连接到 Base Shield 的 D2 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
如果这是您第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动模块，或者打开本页面末尾提供的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/cc_Electromagnet.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
代码上传完成后，您可以尝试将铁制品靠近电磁铁。当电磁铁工作时，Arduino 的 13 号引脚上的 LED 会亮起。
:::

### 使用 Raspberry Pi

**硬件**

- **步骤 1.** 准备以下物品：

| Raspberry Pi | GrovePi_Plus | Grove-电磁铁 |
|--------------|--------------|------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry Pi。

- **步骤 3.** 将 Grove-电磁铁连接到 GrovePi_Plus 的 **D4** 端口。

- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/1_pi_connect.jpg)

**软件**

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。

- **步骤 2.** 按照 [更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) 更新 GrovePi 的最新固件。

:::tip
在本教程中，我们使用路径 **~/GrovePi/** 代替 **/home/pi/Desktop/GrovePi**，请确保步骤 2 和步骤 3 使用相同的路径。
:::

:::note
我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::

- **步骤 3.** 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤 4.** 进入示例代码目录：

```
cd yourpath/GrovePi/Software/Python/
```

以下是 grove_electromagnet.py 的代码。

```python
import time
import grovepi

# 电磁铁可以承受 1KG 的重量

# 将 Grove 电磁铁连接到数字端口 D4
# SIG,NC,VCC,GND
electromagnet = 4

grovepi.pinMode(electromagnet, "OUTPUT")
time.sleep(1)

while True:
    try:
        # 打开电磁铁
        grovepi.digitalWrite(electromagnet, 1)
        print "on"
        time.sleep(2)

        # 关闭电磁铁
        grovepi.digitalWrite(electromagnet, 0)
        print "off"
        time.sleep(2)

    except KeyboardInterrupt:
        grovepi.digitalWrite(electromagnet, 0)
        break
    except IOError:
        print "Error"
```

5.运行示例程序。

```
    sudo python grove_electromagnet.py
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- **[**Eagle**]**[Grove Electromagnet v1.0 SCH PCB.zip](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip)
- **[**数据手册**]**[ZYE1-P20-15 数据手册 PDF](https://files.seeedstudio.com/wiki/Bazaar_file/101020073/ZYE1-P%20electro%20holding%20magnets.pdf)
- **[**Codecraft**]**[CDC 文件](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_CDC_File.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Electromagnet -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>