---
description: Grove - Switch(P)
title: Grove - Switch(P)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Switch-P
last_update:
  date: 03/23/2024
  author: WuFeifei
---


![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/switch_p.jpg)

这款Grove开关是一个微型SPDT滑动开关，非常适合用于“开启/关闭”的场景。它是一个高品质且可靠的开关，我们在很多电路板上都采用了这款开关。您应该为Grove原型制作系统储备一些。

那么“P”是什么意思呢？“P”在这个产品中代表“面板安装”。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## 版本

| 产品版本             | 变更内容 | 发布日期  |
| -------------------- | -------- | --------- |
| Grove-Switch(P) V1.0 | 初始版本 | 2012年7月 |

## 特点

- Grove接口
- 使用简单
- 基础的Grove元件

:::提示
更多关于Grove模块的信息，请参考[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格

| 参数         | 值/范围      |
| ------------ | ------------ |
| 工作电压     | 3.3/5V       |
| 电寿命       | 10,000次     |
| 操作力       | 200 ± 50gf   |
| 工作温度范围 | -20℃ 至 +80℃ |
| 尺寸         | 20mmX20mm    |

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们只针对Arduino平台提供软件库或代码示例。我们不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户需要编写自己的软件库。
:::

## 开始使用

:::提示
如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 使用Arduino进行操作

**硬件**

- **步骤1.** 准备以下材料：

| Seeeduino V4.2 | 基础屏蔽板 |  Grove-Switch(P) |Grove - 紫色 LED (3mm)|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/grove_led_s.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|[立即获取](https://www.seeedstudio.com/Grove-Purple-LED-%283mm%29-p-1143.html)|

- **步骤2.** 将Grove-Switch(P)连接到Grove基础屏蔽板的**D2**端口。
- **步骤3.** 将Grove-LED连接到Grove基础屏蔽板的**D6**端口。
- **步骤4.** 将Grove基础屏蔽板插入Seeeduino。
- **步骤5.** 通过USB电缆将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/seeeduino_switch_led.jpg)

:::提示
如果没有Grove基础屏蔽板，我们也可以直接将Grove-Switch(P)和Grove - 紫色LED（3mm）连接到Seeeduino，如下所示。
:::

| Seeeduino | Grove-Switch(P) | Seeeduino | Grove - 紫色LED (3mm) |
| --------- | --------------- | --------- | --------------------- |
| 5V        | 红线            | 5V        | 红线                  |
| GND       | 黑线            | GND       | 黑线                  |
| NC        | 白线            | NC        | 白线                  |
| D2        | 黄线            | D6        | 黄线                  |

**软件**

- **步骤1.** 请将以下代码复制到Arduino IDE并上传到Arduino。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

```
const int switchPin = 2;     // the number of the pushbutton pin
const int ledPin =  6;      // the number of the LED pin

int switchState = 0;         // variable for reading the pushbutton status

void setup() {
    // initialize the LED pin as an output:
    pinMode(ledPin, OUTPUT);
    // initialize the switch pin as an input:
    pinMode(switchPin, INPUT);
    Serial.begin(9600);
}

void loop(){
    // read the state of the switch value:
    switchState = digitalRead(switchPin);

    if (switchState == HIGH) {
        //turn LED on:
        digitalWrite(ledPin, HIGH);
        Serial.println("switch high!");
    }
    else {
        //turn LED off:
        digitalWrite(ledPin, LOW);
        Serial.println("switch low");
    }
}

```

- **步骤2.** 当我们切换到高电平，LED会亮起。我们还可以看到串行输出如下。

```
switch high!
switch high!
switch high!
```

### 使用树莓派进行操作（配合树莓派Grove基础帽）

#### 硬件

- **步骤1**. 本项目所需材料：

| 树莓派 | 树莓派Grove基础帽 | Grove - Switch P |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **步骤2**. 将Grove基础帽插入树莓派。
- **步骤3**. 将开关连接到基础帽的12号端口。
- **步骤4**. 通过USB电缆将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/Switch_Hat.jpg)

:::提示
对于步骤3，您可以将开关连接到**任何GPIO端口**，但请确保您使用与相应端口号匹配的命令。
:::

#### 软件

:::警告
如果您使用的是**运行Raspberrypi OS >= Bullseye的树莓派**，则必须**仅使用Python3**执行此命令行。
:::

- **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation)说明配置开发环境。
- **步骤2**. 通过克隆grove.py库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤3**. 执行以下命令来运行代码。

```
cd grove.py/grove
python3 grove_switch.py 12

```

下面是grove_switch.py的代码。

```python


import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)

    @property
    def state(self):
        return super(GroveTiltSwitch, self).read()


Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))


    while True:
        if swicth.state is 1:
            print("on")
        else:
            print("off")
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::成功提示
如果一切顺利，您将能够看到以下结果：
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_switch.py 12
off
off
on
off
on
on
off
^CTraceback (most recent call last):
  File "grove_switch.py", line 70, in <module>
    main()
  File "grove_switch.py", line 66, in main
    time.sleep(1)
KeyboardInterrupt


```

你可以通过简单地按下 ++ctrl+c++ 来退出此程序。

### 使用树莓派进行操作（配合GrovePi_Plus）

**硬件**

- **步骤1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove-Switch(P) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **步骤2.** 将GrovePi_Plus插入树莓派。
- **步骤3.** 将Grove-Switch(P)连接到GrovePi_Plus的**D3**端口。
- **步骤4.** 通过USB电缆将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/rpi_switch.jpg)

**软件**

:::警告
如果您使用的是**运行Raspberrypi OS >= Bullseye的树莓派**，则必须**仅使用Python3**执行此命令行。
:::

- **步骤1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)说明配置开发环境。
- **步骤2.** 从Github克隆仓库

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤3.** 执行以下命令以监控开关状态。

```python
cd ~/GrovePi/Software/Python
python3 grove_switch.py
```

下面是grove_switch.py的代码。

```python
import time
import grovepi

# Connect the Grove Switch to digital port D3
# SIG,NC,VCC,GND
switch = 3

grovepi.pinMode(switch,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(switch))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **步骤4.** 我们将看到如下开关状态。 ## 在线原理图查看器

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_switch.py 
1
1
0
0
0
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- **[Eagle&PDF]** [Grove-Switch(P) 原理图](https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip)

## 项目

**使用开关打开和关闭继电器**：您将了解开关的价值，以及其高电平和低电平功能。此外，您还将学习如何将继电器用作执行器。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供各种支持，以确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
