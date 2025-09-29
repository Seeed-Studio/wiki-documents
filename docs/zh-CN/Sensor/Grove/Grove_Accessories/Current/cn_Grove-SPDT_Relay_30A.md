---
description: Grove - SPDT继电器(30A)
title: Grove - SPDT继电器(30A)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-SPDT_Relay_30A
last_update:
  date: 1/10/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay_01.jpg" /></div>

SPDT继电器(30A)是一款高质量的单刀双掷继电器(SPDT)。该继电器由一个线圈、一个公共端子、一个常闭端子和一个常开端子组成。当继电器的线圈处于静止状态（未通电）时，公共端子和常闭端子之间是连通的。当线圈通电时，公共端子和常开端子之间是连通的。该继电器的线圈额定电压为5V，触点额定电流为30A（@250VAC，30VDC）。您可以使用它来控制高电流设备。

## 特性

---

- 高切换电流
- SPDT继电器
- 常闭继电器

:::tip
  更多关于Grove模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格

---
|项目| 最小值| 典型值 |最大值 |单位|
|---|---|---|---|---|
|工作电压| 4.75| 5.0| 5.25 |VDC|
|电流 |-|185|-| mA|
|吸合电压(最大值) |-|3.75|-| VDC|
|操作时间(最大值)|-| 15|-| ms|
|释放时间(最大值)|-| 10|-| ms|
|工作环境温度| -25| - |70 |°C|

## 使用方法

---
**使用Arduino**

为什么我们需要使用继电器？我们真的需要吗？任何时候您想要打开/关闭一个消耗更多电流或使用高电压的设备时，您都需要使用继电器。也就是说，继电器是“由低电压控制的高电压或电流开关”。我们最常用的SPDT继电器的线圈消耗的电流非常少（[Grove - 继电器](https://wiki.seeedstudio.com/cn/Grove-Relay/)支持10A）。现在，使用这个30A继电器，您可以控制更多高电流开关设备，例如车头灯、停车灯、喇叭等。

SPDT继电器的内部结构：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/Relay_Struction.jpg" /></div>

您可以看到，当继电器的线圈处于静止状态时，公共端子和常闭端子之间是连通的。

但当线圈通电时，公共端子和常开端子之间将连通。

硬件安装可以参考以下图片：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay.jpg" /></div>

控制该继电器的代码与[Grove - 继电器](https://wiki.seeedstudio.com/cn/Grove-Relay/)相同。

祝您使用Arduino和Grove - SPDT继电器(30A)控制您的空调或洗衣机好运。

**使用Raspberry Pi**

1. 您需要拥有一个Raspberry Pi和一个GrovePi或GrovePi+。

2. 您需要完成开发环境的配置，否则请参考[这里](https://wiki.seeedstudio.com/cn/GrovePi_Plus#Introducing_the_GrovePi.2B)。

3. 连接

- 使用Grove线缆将传感器插入GrovePi插座D4。

4. 导航到示例代码目录：

```
   cd yourpath/GrovePi/Software/Python/
```

查看代码

```
   nano grove_spdt_relay.py   # 按"Ctrl+x"退出 #
```

```
import time
import grovepi

# 将Grove SPDT继电器连接到数字端口D4
# SIG,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # 打开5秒
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # 关闭5秒
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

5. 运行示例代码。

```
   sudo python grove_spdt_relay.py
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

- [Grove - SPDT继电器(30A) Eagle文件](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip)
- [SLA-05VDC-SL-C 数据表](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/SLA-05VDC-SL-C_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>