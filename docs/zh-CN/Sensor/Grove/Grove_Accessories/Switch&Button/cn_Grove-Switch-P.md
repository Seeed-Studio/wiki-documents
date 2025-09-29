---
description: Grove - 开关(P)
title: Grove - 开关(P)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Switch-P
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/switch_p.jpg)

这款 Grove – 开关是一种迷你 SPDT 滑动开关，非常适合“开/关”场景。它是一款质量可靠的开关，我们在许多板子上都采用了它。您应该为您的 Grove 原型系统备一些这样的开关。

“P”是什么意思？在这个产品中，“P”代表“面板安装”。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## 版本

| 产品版本                  | 变更内容                                   | 发布日期       |
|--------------------------|-------------------------------------------|---------------|
|Grove-Switch(P) V1.0      | 初始版本                                   | 2012年7月     |

## 特性

- Grove 接口
- 易于使用
- 基础 Grove 元件

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格

| 参数                   | 值/范围         |
|-----------------------|----------------|
| 工作电压              | 3.3/5V         |
| 电气寿命              | 10,000 次循环  |
| 操作力                | 200 ± 50gf     |
| 工作温度              | -20℃ 至 +80℃   |
| 尺寸                  | 20mmX20mm      |

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常只为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

**硬件**

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove-Switch(P) | Grove - 紫色 LED (3mm) |
|----------------|-------------|---------------------|---------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/grove_led_s.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|[立即购买](https://www.seeedstudio.com/Grove-Purple-LED-%283mm%29-p-1143.html)|

- **步骤 2.** 将 Grove-Switch(P) 连接到 Grove-Base Shield 的 **D2** 端口。
- **步骤 3.** 将 Grove-LED 连接到 Grove-Base Shield 的 **D6** 端口。
- **步骤 4.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 5.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/seeeduino_switch_led.jpg)

:::note
如果没有 Grove Base Shield，我们也可以直接将 Grove-Switch(P) 和 Grove - 紫色 LED (3mm) 连接到 Seeeduino，如下所示。
:::

| Seeeduino | Grove-Switch(P) | Seeeduino | Grove - 紫色 LED (3mm) |
|-----------|---------------------|-----------|---------------------------|
| 5V        | 红色               | 5V        | 红色                     |
| GND       | 黑色               | GND       | 黑色                     |
| NC        | 白色               | NC        | 白色                     |
| D2        | 黄色               | D6        | 黄色                     |

**软件**

- **步骤 1.** 请将以下代码复制到 Arduino IDE 并上传到 Arduino。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```
const int switchPin = 2;     // 按钮引脚编号
const int ledPin =  6;       // LED 引脚编号

int switchState = 0;         // 用于读取按钮状态的变量

void setup() {
    // 初始化 LED 引脚为输出模式：
    pinMode(ledPin, OUTPUT);
    // 初始化按钮引脚为输入模式：
    pinMode(switchPin, INPUT);
    Serial.begin(9600);
}

void loop(){
    // 读取按钮状态：
    switchState = digitalRead(switchPin);

    if (switchState == HIGH) {
        // 打开 LED：
        digitalWrite(ledPin, HIGH);
        Serial.println("按钮高电平！");
    }
    else {
        // 关闭 LED：
        digitalWrite(ledPin, LOW);
        Serial.println("按钮低电平");
    }
}
```

- **步骤 2.** 当按钮切换到高电平时，LED 会亮起。同时可以在串口输出中看到如下信息：

```
按钮高电平！
按钮高电平！
按钮高电平！
```

### 使用 Raspberry Pi (配合 Grove Base Hat for Raspberry Pi)

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Switch P |
|--------------|-------------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **步骤 2.** 将 Grove Base Hat 插入 Raspberry Pi。
- **步骤 3.** 将开关连接到 Base Hat 的 12 号端口。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/Switch_Hat.jpg)

:::note
在步骤 3 中，您可以将开关连接到 **任何 GPIO 端口**，但请确保在代码中使用对应的端口编号。
:::

#### 软件

:::caution
如果您使用的是 **Raspberry Pi 且 Raspberry Pi OS >= Bullseye**，您必须仅使用 Python3 来运行命令。
:::

- **步骤 1.** 按照 [软件设置指南](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2.** 通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3.** 执行以下命令运行代码。

```
cd grove.py/grove
python3 grove_switch.py 12
```

以下是 grove_switch.py 的代码：

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
            print("开")
        else:
            print("关")
        time.sleep(1)

if __name__ == '__main__':
    main()
```

:::tip
如果一切正常，您将能够看到如下结果：
:::

```python
pi@raspberrypi:~/grove.py/grove $ python3 grove_switch.py 12
关
关
开
关
开
开
关
^CTraceback (most recent call last):
  File "grove_switch.py", line 70, in <module>
    main()
  File "grove_switch.py", line 66, in main
    time.sleep(1)
KeyboardInterrupt
```

您可以通过按 ++ctrl+c++ 退出程序。

### 使用 Raspberry Pi (配合 GrovePi_Plus)

**硬件**

- **步骤 1.** 准备以下物品：

| Raspberry Pi | GrovePi_Plus | Grove-Switch(P) |
|--------------|--------------|---------------------|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **步骤 2.** 将 GrovePi_Plus 插入到树莓派中。
- **步骤 3.** 将 Grove-Switch(P) 连接到 GrovePi_Plus 的 **D3** 端口。
- **步骤 4.** 使用 USB 数据线将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/rpi_switch.jpg)

**软件**

:::caution
如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令以监控开关状态。

```python
cd ~/GrovePi/Software/Python
python3 grove_switch.py
```

以下是 grove_switch.py 的代码。

```python
import time
import grovepi

# 将 Grove 开关连接到数字端口 D3
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

- **步骤 4.** 您将看到如下所示的开关状态。

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

**使用开关控制继电器的开关**：您将学习开关的高低电平功能。此外，您还将学习如何使用继电器作为执行器。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>