---
description: Grove - LED 灯条
title: Grove - LED 灯条
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LED_Bar
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-1.jpg" alt="pir" width={600} height="auto" /></p>

Grove – LED 灯条由一个 10 段 LED 指示条和一个 MY9221 LED 控制芯片组成。它可以用作剩余电池电量、电压、水位、音乐音量或其他需要梯度显示的值的指示器。LED 灯条图中有 10 个 LED 灯条：一个红色，一个黄色，一个浅绿色，以及七个绿色灯条。提供示例代码以帮助您快速上手。它会按顺序从红色到绿色点亮 LED，最终整个灯条图都会被点亮。想要更进一步？请自行编写代码实现您自己的效果。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)

版本
--------

| 产品版本                  | 更改内容                                   | 发布日期       |
|---------------------------|-------------------------------------------|---------------|
| Grove – LED 灯条 V1 | 初始版本                                   | 2014年6月     |
| Grove – LED 灯条 V2 | 改进了电源供应                             | 2015年10月    |

特点
--------

-   输入电压：3.3V/5V
-   每个 LED 段可通过代码单独控制
-   直观显示
-   灵活的电源选项，支持 3-5.5DC
-   提供示例代码
-   兼容 Suli 库

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格

| 参数                                                         | 值/范围       |
|-------------------------------------------------------------|--------------|
| 工作电压                                                   | 3.3/5V       |
| 工作温度                                                   | -20℃ 至 +80℃ |
| 峰值发射波长-红色（电流 20mA）                             | 630-637nm    |
| 峰值发射波长-黄绿色（电流 20mA）                           | 570-573nm    |
| 峰值发射波长-黄色（电流 20mA）                             | 585-592nm    |
| 每段亮度-红色（电流 20mA）                                 | 50-70mcd     |
| 每段亮度-黄绿色（电流 20mA）                               | 28-35mcd     |
| 每段亮度-黄色（电流 20mA）                                 | 45-60mcd     |
| LED 段数                                                   | 10           |
| 尺寸                                                       | 40mm * 20mm  |

支持的平台
-------------------

| Arduino | Raspberry Pi |
|---------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/示例代码。因此，用户需要自行编写软件库。
:::

入门指南
-------------

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

**硬件**

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础扩展板 | Grove-LED 灯条 |
|----------------|------------|--------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-3.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)|

- **步骤 2.** 将 Grove-LED Bar 连接到 Grove-Base Shield 的 **D8** 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/seeeduino_ledbar.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/seeeduino_ledbar.jpg" alt="pir" width={600} height="auto" /></p>

:::note
如果没有 Grove Base Shield，也可以直接将 Grove-LED Bar 连接到 Seeeduino，如下所示。
:::
| Seeeduino       | Grove-LED Bar |
|---------------|-------------------------|
| 5V           | 红色                   |
| GND           | 黑色                   |
| D9            | 白色                   |
| D8            | 黄色                   |

**软件**

- **步骤 1.** 从 Github 下载 [Grove - LED Bar Library](https://github.com/Seeed-Studio/Grove_LED_Bar)。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。通过以下路径打开 “Level” 示例：**File --> Examples --> Grove LED Bar --> Level**。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_BAR_IDE.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_BAR_IDE.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

运行结果应如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_Bar_shining.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_Bar_shining.gif" alt="pir" width={600} height="auto" /></p>

### 使用 Raspberry Pi

**硬件**

- **步骤 1.** 准备以下物品：

| Raspberry Pi | GrovePi_Plus | Grove-LED Bar |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-3.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry Pi。

- **步骤 3.** 将 Grove-LED Bar 连接到 GrovePi_Plus 的 **D5** 端口。

- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/rpi_ledbar.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/rpi_ledbar.jpg" alt="pir" width={600} height="auto" /></p>

**软件**

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。

- **步骤 2.** 按照 [更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) 更新 GrovePi 的最新固件。

:::tip
在本教程中，我们使用路径 **~/GrovePi/** 而不是 **/home/pi/Desktop/GrovePi**，请确保步骤 2 和步骤 3 使用相同的路径。
:::

:::note
我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::
:::note
如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 命令行。
:::

- **步骤 3.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤 4.** 导航到示例代码目录：

```
cd yourpath/GrovePi/Software/Python/
```

以下是 grove_ledbar.py 的代码。

```python
import time
import grovepi
import random

# 将 Grove LED Bar 连接到数字端口 D5
# DI,DCKI,VCC,GND
ledbar = 5

grovepi.pinMode(ledbar,"OUTPUT")
time.sleep(1)
i = 0

# LED Bar 方法
# grovepi.ledBar_init(pin,orientation)
# grovepi.ledBar_orientation(pin,orientation)
# grovepi.ledBar_setLevel(pin,level)
# grovepi.ledBar_setLed(pin,led,state)
# grovepi.ledBar_toggleLed(pin,led)
# grovepi.ledBar_setBits(pin,state)
# grovepi.ledBar_getBits(pin)

while True:
    try:
        print "测试 1) 初始化 - 红到绿"
        # ledbar_init(pin,orientation)
        # orientation: (0 = 红到绿, 1 = 绿到红)
        grovepi.ledBar_init(ledbar, 0)
        time.sleep(.5)

        print "测试 2) 设置等级"
        # ledbar_setLevel(pin,level)
        # level: (0-10)
        for i in range(0,11):
            grovepi.ledBar_setLevel(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)

        grovepi.ledBar_setLevel(ledbar, 8)
        time.sleep(.5)

        grovepi.ledBar_setLevel(ledbar, 2)
        time.sleep(.5)

        grovepi.ledBar_setLevel(ledbar, 5)
        time.sleep(.5)

        print "测试 3) 开关单个 LED"
        # ledbar_setLed(pin,led,state)
        # led: 哪个 LED (1-10)
        # state: 关闭或打开 (0,1)
        grovepi.ledBar_setLed(ledbar, 10, 1)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 9, 1)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 8, 1)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 1, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 2, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 3, 0)
        time.sleep(.5)

        print "测试 4) 切换单个 LED"
        # 翻转单个 LED - 如果当前是打开状态，则变为关闭状态，反之亦然
        # ledbar_toggleLed(ledbar, led)
        grovepi.ledBar_toggleLed(ledbar, 1)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 2)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 9)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 10)
        time.sleep(.5)

        print "测试 5) 设置状态 - 使用 10 位控制所有 LED"
        # ledbar_setBits(ledbar, state)
        # state: (0-1023) 或 (0x00-0x3FF) 或 (0b0000000000-0b1111111111) 或 (int('0000000000',2)-int('1111111111',2))
        for i in range(0,32):
            grovepi.ledBar_setBits(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)

        print "测试 6) 获取当前状态"
        # state = ledbar_getBits(ledbar)
        # state: (0-1023) 每个 LED 的一个位
        state = grovepi.ledBar_getBits(ledbar)
        print "前 5 个 LED 点亮时，状态应为 31 或 0x1F"
        print state

        # 位移左移五位
        state = state << 5
        # 状态现在应为 992 或 0x3E0
        # 保存后，最后 5 个 LED 将点亮而不是前 5 个 LED
        time.sleep(.5)

        print "测试 7) 设置状态 - 保存刚刚修改的状态"
        # ledbar_setBits(ledbar, state)
        # state: (0-1023) 每个 LED 的一个位
        grovepi.ledBar_setBits(ledbar, state)
        time.sleep(.5)

        print "测试 8) 交换方向 - 绿到红 - 当前状态保留"
        # ledbar_orientation(pin,orientation)
        # orientation: (0 = 红到绿, 1 = 绿到红)
        # 当您反转 LED Bar 的方向时，所有方法都知道如何处理新的 LED 索引
        # 绿到红
        grovepi.ledBar_orientation(ledbar, 1)
        time.sleep(.5)

        # 红到绿
        grovepi.ledBar_orientation(ledbar, 0)
        time.sleep(.5)

        # 绿到红
        grovepi.ledBar_orientation(ledbar, 1)
        time.sleep(.5)

        print "测试 9) 再次设置等级"
        # ledbar_setLevel(pin,level)
        # level: (0-10)
        # 注意红色 LED 现在的索引是 10 而不是 1
        for i in range(0,11):
            grovepi.ledBar_setLevel(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)

        print "测试 10) 再次设置单个 LED"
        # ledbar_setLed(pin,led,state)
        # led: 哪个 LED (1-10)
        # state: 关闭或打开 (0,1)
        grovepi.ledBar_setLed(ledbar, 1, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 3, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 5, 0)
        time.sleep(.5)

        print "测试 11) 再次切换单个 LED"
        # ledbar_toggleLed(ledbar, led)
        grovepi.ledBar_toggleLed(ledbar, 2)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 4)
        time.sleep(.5)

        print "测试 12) 获取状态"
        # state = ledbar_getBits(ledbar)
        # state: (0-1023) 每个 LED 的一个位
        state = grovepi.ledBar_getBits(ledbar)

        # 最后 5 个 LED 点亮，因此状态应为 992 或 0x3E0

        # 位移右移五位
        state = state >> 5
        # 状态现在应为 31 或 0x1F

        print "测试 13) 再次设置状态"
        # ledbar_setBits(ledbar, state)
        # state: (0-1023) 每个 LED 的一个位
        grovepi.ledBar_setBits(ledbar, state)
        time.sleep(.5)

        print "测试 14) 步进"
        # 遍历所有 10 个 LED
        for i in range(0,11):
            grovepi.ledBar_setLevel(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)

        print "测试 15) 弹跳"
        # 打开前两个 LED
        grovepi.ledBar_setLevel(ledbar, 2)

        # 获取当前状态（应为 0x3）
        state = grovepi.ledBar_getBits(ledbar)

        # 向右弹跳
        for i in range(0,9):
            # 位移左移并更新
            state <<= 1;
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)

        # 向左弹跳
        for i in range(0,9):
            # 位移右移并更新
            state >>= 1;
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)
        time.sleep(.3)

        print "测试 16) 随机"
        for i in range(0,21):
            state = random.randint(0,1023)
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)
        time.sleep(.3)

        print "测试 17) 反转"
        # 设置每隔一个 LED 打开 - 341 或 0x155
        state = 341
        for i in range(0,5):
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)

            # 位运算 XOR 所有 10 个 LED 打开与当前状态
            state = 0x3FF ^ state

            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)
        time.sleep(.3)

        print "测试 18) 遍历所有可能的组合"
        for i in range(0,1024):
            grovepi.ledBar_setBits(ledbar, i)
            time.sleep(.1)
        time.sleep(.4)

    except KeyboardInterrupt:
        grovepi.ledBar_setBits(ledbar, 0)
        break
    except IOError:
        print "错误"
```

- **步骤 5.** 运行示例程序。

```
sudo python3 grove_ledbar.py
```


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/Grove-LED_Bar_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源
---------

-   [**Eagle&PDF**][Grove - LED Bar Eagle 文件](https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/Grove-LED_Bar_v1.0.zip)
-   [**库文件**][Grove - LED Bar 库](https://github.com/Seeed-Studio/Grove_LED_Bar)
-   [**库文件**][Suli 兼容库](https://github.com/Seeed-Studio/LED_Bar_Suli)
-   [**数据手册**][MY9221 数据手册](https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/MY9221_DS_1.0.pdf)
-   [**更多阅读**][木质激光枪](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)



## 项目

**Grove LED Bar v2.0**：Calliope Mini 配备了两个 Grove 接口。在这个项目中，我想探索如何与这些 Seeed Grove 部件进行通信。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/luuc/grove-led-bar-v2-0-c4b74f/embed' width='350'></iframe>

**Grove LED Bar 控制器与 Bean+**：学习使用流行的 Grove 组件与新的 LightBlue Bean+ 的基础知识，开始构建自己的项目！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/karel/grove-led-bar-controller-with-the-bean-c3b81e/embed' width='350'></iframe>


## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>