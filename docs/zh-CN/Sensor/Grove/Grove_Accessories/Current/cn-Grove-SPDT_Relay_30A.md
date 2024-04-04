---
description: Grove - 单刀双掷继电器（30A）
title: Grove - 单刀双掷继电器（30A）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-SPDT_Relay_30A
last_update:
  date: 03/21/2024
  author: WuFeifei
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay_01.jpg" /></div>

SPDT继电器（30A）是一款高品质的单刀双掷继电器（SPDT）。该继电器包含一个线圈、一个公共端、一个常闭端和一个常开端。当继电器的线圈处于静止状态（未通电）时，公共端和常闭端是连通的。当线圈通电时，公共端和常开端是连通的。该继电器的线圈额定电压为5V，触点额定电流为30A（@250VAC，30VDC）。您可以使用它来控制高电流设备。

## 特点

---

- 高切换电流
- SPDT继电器
- 常闭继电器

:::提示
  更多关于Grove模块的信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格

---
|项目| 最小值 | 典型值 | 最大值 | 单位 |
|---|---|---|---|---|
|工作电压| 4.75| 5.0| 5.25 |VDC|
|电流 |-|185|-| mA|
|吸合电压（最大） |-|3.75|-| VDC|
|动作时间（最大）|-| 15|-| ms|
|释放时间（最大）|-| 10|-| ms|
|工作环境温度范围| -25| - |70 |°C|

## 使用方法

---
**与Arduino配合使用**

我们为什么要使用继电器，真的需要吗？任何时候你想要开关一个需要大电流或高压工作的设备时，你都需要使用继电器。也就是说，继电器是“由低电压控制的高电压或电流开关”。我们最常使用的单刀双掷继电器（SPDT）的线圈只需要很少的电流（Grove - Relay模块支持10A）。现在，有了这个30A的继电器，你可以控制更多的高电流开关设备，如车头灯、停车灯、喇叭等。

SPDT继电器的内部结构：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/Relay_Struction.jpg" /></div>

你可能会看到，当继电器的线圈处于静止状态时，公共端和常闭端是连通的。

但是，当线圈通电时，公共端和常开端将连通。

硬件安装可以参考以下图片：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay.jpg" /></div>

控制这个继电器的编码与[Grove - Relay](https://wiki.seeedstudio.com/Grove-Relay/)相同。

祝你使用Arduino和Grove - SPDT Relay(30A)成功控制你的空调或洗衣机。

**与Raspberry Pi配合使用**

1. 你应该已经有一个Raspberry Pi和一个GrovePi或GrovePi+。
2. 你应该已经完成开发环境的配置，否则请按照[这里](https://wiki.seeedstudio.com/GrovePi_Plus#Introducing_the_GrovePi.2B)的步骤进行。
3. 连接

- 使用Grove电缆将传感器连接到GrovePi的D4插座。

4.导航到演示目录：

```
   cd yourpath/GrovePi/Software/Python/
```

要查看代码

```
   nano grove_spdt_relay.py   # "Ctrl+x" to exit #
```

```
import time
import grovepi

# Connect the Grove SPDT Relay to digital port D4
# SIG,NC,VCC,GND
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

5.运行演示程序。

```
   sudo python grove_spdt_relay.py
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

- [Grove - SPDT Relay(30A) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip)
- [SLA-05VDC-SL-C 数据手册](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/SLA-05VDC-SL-C_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供多种支持，以确保您使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
