---
description: Grove - Red LED
title: Grove - Red LED
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Red_LED
last_update:
  date: 2/1/2023
  author: hushuxu
---

英文 wiki ：https://wiki.seeedstudio.com/Grove-Red_LED/

![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Grove-LED_Photo.jpg)

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.6ff448edbXtfEH&id=45476819992)

##  产品特性
---
*   为您的项目提供 LED 光源

*   可以灵活地替代红色 LED 为任何其他 LED ，例如不同颜色的 LED，因为 LED 是被“固定”到 LED 支架而不是被焊接到板上

*   板载电位器可保证亮度控制和更高的输入电压范围的互通性

##  使用方法
---
使用此模块按照以下步骤构建示例电路 :

1.将 LED 模块连接到电路的输出侧（电源模块右侧）。在电路的输入端，您可以使用一系列基于传感器的输入模块，比如 : ([Grove - Light Sensor](/cn/Grove-Light_Sensor "Grove - Light Sensor"), [Grove - Sound Sensor](/cn/Grove-Sound_Sensor "Grove - Sound Sensor"), [Grove - Button](/cn/Grove-Button "Grove - Button") 或 [Grove - Slide Potentiometer](/cn/Grove-Slide_Potentiometer "Grove - Slide Potentiometer"))。

2.给电路上电。

3.当输入模块提供一个触发时 LED 会亮 :
- 如果使用如 [Grove - Button](/cn/Grove-Button "Grove - Button") 模块上的瞬间开关，只需按下按钮以点亮 LED :


![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Grove-momentarySwitch-RedLED.jpg)


- 如果使用 [Grove - Slide Potentiometer](/cn/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")，将滑块从 **GND** 位置移动到 **VCC**，并观察随着电源电压的增加 LED 的亮度是如何增加的。

- 如果使用 [Grove - Light Sensor](/cn/Grove-Light_Sensor "Grove - Light Sensor") 直接连接到电路输入端，会看见 LED 在明亮的光线下点亮，并在黑暗中熄灭。如果要让 LED 仅在黑暗中点亮，请在光传感器和电源模块之间添加 [Grove - NOT](https://wiki.seeedstudio.com/Grove-NOT/) 模块即可。


<!-- 在单机模式(不带 MCU)下使用时，面向 Grove 电路的模块您可以使用 [Grove - USB Power](/Grove-Mixer_Pack#2._USB_Power "Grove - Mixer Pack") 模块或 [Grove - USB Power](/Grove-Mixer_Pack#2._USB_Power "Grove - Mixer Pack") 模块。 当与诸如 [Arduino](/w/index.php?title=Arduino&amp;action=edit&amp;redlink=1 "Arduino&amp;action=edit&amp;redlink=1") 或 [Seeeduino](/Seeeduino "Seeeduino") 和 [Grove - Base Shield](/Grove-Base_Shield "Grove - Base Shield") 结合使用时，电源通过微控制器提供给电路，所以无需再使用任何 [Grove Power Module](/GROVE_System#Power "GROVE System")。 -->

<!-- ###   与 [Raspberry Pi](/GrovePiPlus "GrovePi+") 一起使用 -->

### 与 Raspberry Pi 一起使用


!!! attention 
     如果你正在使用 **Raspberry Pi with Raspberrypi OS >= Bullseye**, 你只能在 **python3** 中使用这个命令行.

使用 Grove 导线连接器将 LED 连接到 **D4** 端口，并打开 Raspberry Pi，这是一个使 LED 闪烁的测试。您可以像下图那样连接到 GrovePi+。

![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/GrovePiPlus_red_led.jpg)


```
# GrovePi LED Blink example

import time
from grovepi import *

# Connect the Grove LED to digital port D4
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        #Blink the LED
        digitalWrite(led,1)		# Send HIGH to switch on LED
        time.sleep(1)

        digitalWrite(led,0)		# Send LOW to switch off LED
        time.sleep(1)

    except KeyboardInterrupt:	# Turn LED off before stopping
        digitalWrite(led,0)
        break
    except IOError:				# Print "Error" if communication error encountered
        print "Error"
```

####   运行程序

*   找到文件的路径(根据个人情况)
```
cd GrovePi/Software/Python/
```

*   运行程序
```
sudo python3 grove_led_blink.py
```

<!-- ##  适用性
--- -->
<!-- 此 Grove 模块可作为 [Grove Kit Series](/GROVE_System#GROVE_Kit_Series "GROVE System") 的一部分使用 : -->

<!-- *   [Grove Mixer Pack V2](/GROVE_MIXER_PACK_V2 "GROVE MIXER PACK V2") -->

<!-- [Grove Mixer Pack](/Grove-Mixer_Pack "Grove - Mixer Pack") 使用了 [Grove - LED](/Grove-LED "Grove - LED") 模块. -->

<!-- 或者，可以在 [Seeed Studio 企业店铺](https://seeedstudio.taobao.com/?spm=2013.1.0.0.6485c96fdjYI88) 上单独购买 [Grove - Red LED](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.6ff448edbXtfEH&id=45476819992)。 -->

##  资源下载
---
* **[原理图]** [Grove - Red LED Schematic](https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove-LED_v1.3.pdf)
* **[原理图网页版]** [Schematic at Easyeda](https://easyeda.com/Seeed/Grove_Red_LED-7e3e5eacbdc94abb90c01c55c55bc83a)
