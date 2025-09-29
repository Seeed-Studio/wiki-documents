---
description: Grove - 红色 LED
title: Grove - 红色 LED
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Red_LED
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 红色 LED 类似于 Grove - LED 模块，它包含一个 LED 光源。此外，它还配备了一个板载电位器，用于管理 LED 的功率需求。该模块的 PCB 上有安装孔，可以安装在原型所需的表面上。例如，它可以用作指示电源或信号存在的指示灯。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)


## 版本

| 产品版本              | 更改                                                                                                                                                                                    | 发布日期       |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED_v1.3 | 初始版本                                                                                                                                                                                    | 2016年3月15日 |

## 特性

*   为您的项目提供 LED 光指示
*   支持不同颜色的 LED，LED 插入 LED 支架而不是焊接在板上
*   支持亮度控制和更高范围的输入电压，通过板载电位器进行调整

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

- 第一步：准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove - 红色 LED |
|----------------|-------------|-----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- 第二步：将 Grove - 红色 LED 连接到 Grove Base Shield 的 D2 端口。
- 第三步：将 Grove Base Shield 插入 Seeeduino。
- 第四步：通过 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/seeedstudio_red_led.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/seeedstudio_red_led.jpg" alt="pir" width={600} height="auto" /></p>

:::note
如果没有 Grove Base Shield，也可以直接将 Grove - 红色 LED 连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 红色 LED |
|-----------------|-----------------------|
| 5V              | 红色                 |
| GND             | 黑色                 |
| 未连接          | 白色                 |
| D2              | 黄色                 |

#### 软件

- **第一步**：将以下代码复制到 Arduino IDE 中并上传。

```
void setup() {
  // 初始化数字引脚2为输出模式。
  pinMode(2, OUTPUT);
}

// 循环函数会不断重复运行
void loop() {
  digitalWrite(2, HIGH);   // 打开 LED（HIGH 表示高电平）
  delay(1000);             // 等待一秒
  digitalWrite(2, LOW);    // 关闭 LED（LOW 表示低电平）
  delay(1000);             // 等待一秒
}
```

- **第二步**：可以看到 LED 灯闪烁。

### 使用 Codecraft

#### 硬件

**第一步**：将 Grove - 红色 LED 连接到 Base Shield 的 D2 端口。

**第二步**：将 Base Shield 插入 Seeeduino/Arduino。

**第三步**：通过 USB 数据线将 Seeeduino/Arduino 连接到电脑。

#### 软件

**第一步**：打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
如果是第一次使用 Codecraft，请参考 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**第二步**：按照下图拖动模块，或者打开页面底部提供的 cdc 文件。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/cc_LED.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/cc_LED.png" alt="pir" width={600} height="auto" /></p>

将程序上传到 Arduino/Seeeduino。

:::success
代码上传完成后，可以看到 LED 灯闪烁。
:::

### 使用 Raspberry Pi（配合 Grove Base Hat for Raspberry Pi）

#### 硬件

- **第一步**：准备以下物品：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - 红色 LED |
|--------------|-------------------------------|-----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- **第二步**：将 Grove Base Hat 插入 Raspberry Pi。
- **第三步**：将红色 LED 连接到 Base Hat 的 12 端口。
- **第四步**：通过 USB 数据线将 Raspberry Pi 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/BaseHat_LED.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/BaseHat_LED.jpg" alt="pir" width={600} height="auto" /></p>

:::note
在第三步中，可以将红色 LED 连接到 **任意 GPIO 端口**，但需要确保更改代码中的端口号。
:::

#### 软件

:::note
如果使用 **Raspberry Pi 且系统版本为 Raspberry Pi OS >= Bullseye**，必须仅使用 Python3 命令行。
:::

- **第一步**：按照 [软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **第二步**：通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **第三步**：执行以下命令运行代码。

```
cd yourpath/grove.py/grove
python3 grove_led.py 12
```

如果将红色 LED 连接到 Base Hat 的其他端口，而不是执行 **python grove_led.py 12**，则应运行以下命令：

```
python3 grove_led.py portnumber
```

以下是 grove_led.py 的代码：

```python
from grove.gpio import GPIO


class GroveLed(GPIO):
    def __init__(self, pin):
        super(GroveLed, self).__init__(pin, GPIO.OUT)

    def on(self):
        self.write(1)

    def off(self):
        self.write(0)


Grove = GroveLed


def main():
    import sys
    import time

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    led = GroveLed(int(sys.argv[1]))

    while True:
        led.on()
        time.sleep(1)
        led.off()
        time.sleep(1)


if __name__ == '__main__':
    main()
```

:::success
如果一切正常，可以看到 LED 灯闪烁。
:::

:::note
对于大多数 Grove 模块，需要添加引脚号参数，例如本例中的 `python3 grove_led.py 12`，**12** 是选定的 GPIO 引脚，12 号引脚的输出将驱动 LED。
:::

### 使用树莓派（搭配 GrovePi_Plus）

#### 硬件

- 第一步：准备以下物品：

| 树莓派 | GrovePi_Plus | Grove - 红色 LED |
|--------|--------------|-----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- 第二步：将 GrovePi_Plus 插入树莓派。
- 第三步：将 Grove-红色 LED 连接到 GrovePi_Plus 的 D4 端口。
- 第四步：通过 USB 数据线将树莓派连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/rasp_red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/rasp_red_led.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note 
     如果您使用的是 **树莓派搭载 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::
- **第一步**：按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **第二步**：克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```
- **第三步**：执行以下命令。

```
cd ~/GrovePi/Software/Python
python3 grove_led_blink.py
```

以下是 grove_led_blink.py 的代码。

```python

import time
from grovepi import *

# 将 Grove LED 连接到数字端口 D4
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

print ("此示例将使连接到 GrovePi+ 的 Grove LED 在 D4 端口上闪烁。如果您无法看到 LED 闪烁，请检查 LED 的连接和端口号。您也可以尝试反转 LED 在传感器上的方向。")
print (" ")
print ("将 LED 连接到标记为 D4 的端口！")

while True:
    try:
        # 使 LED 闪烁
        digitalWrite(led,1)		# 发送 HIGH 打开 LED
        print ("LED 开！")
        time.sleep(1)

        digitalWrite(led,0)		# 发送 LOW 关闭 LED
        print ("LED 关！")
        time.sleep(1)

    except KeyboardInterrupt:	# 停止前关闭 LED
        digitalWrite(led,0)
        break
    except IOError:				# 如果遇到通信错误则打印 "Error"
        print ("Error")
        
```

- **第四步**：我们将看到 LED 开启和关闭。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_led_blink.py
此示例将使连接到 GrovePi+ 的 Grove LED 在 D4 端口上闪烁。
如果您无法看到 LED 闪烁，请检查 LED 的连接和端口号。
您也可以尝试反转 LED 在传感器上的方向。

将 LED 连接到标记为 D4 的端口！
LED 开！
LED 关！
LED 开！
LED 关！
```

## 资源

* **[PDF]** [Grove-红色 LED 原理图](https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove-LED_v1.3.pdf)
* **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove_Red_LED_CDC_File.zip)

## 项目

**使用 Grove 按钮控制 Grove LED**：如何连接和使用 Grove 按钮来控制 Grove LED 插座套件。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-button-to-control-grove-led-96d00b/embed' width='350'></iframe>

**按钮和 LED Grove 模块**：

<iframe width={560} height={315} src="https://www.youtube.com/embed/RCtsxwx4OaA" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

<iframe width={560} height={315} src="https://www.youtube.com/embed/78lVn_-oYaY" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

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