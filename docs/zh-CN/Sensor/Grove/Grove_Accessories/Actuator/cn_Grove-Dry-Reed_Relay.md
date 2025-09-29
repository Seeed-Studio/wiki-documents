---
title: Grove - 干簧继电器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Dry-Reed_Relay/
slug: /cn/Grove-Dry-Reed_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/img/DryReed_Relay_01.jpg)

**Grove-干簧继电器**是一种通过线圈中的电流磁化振动簧片来工作的继电器模块。与电磁继电器相比，干簧继电器最大的特点是触点完全密封。此外，它还具有结构简单、体积小、速度快、寿命长等特点，使其广泛应用于微电子检测、自动控制等多个领域。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html)

特点
-------

- Grove 接口
- 高速
- 稳定性好
- 触点寿命长
- 触点完全密封

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
电压
</th>
<td>
4.8
</td>
<td>
5.0
</td>
<td>
5.2
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
线圈电阻
</th>
<td>
225
</td>
<td>
250
</td>
<td>
275
</td>
<td>
Ω
</td>
</tr>
<tr align="center">
<th scope="row">
吸合电压
</th>
<td colspan="3">
3.75
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
最大切换电流
</th>
<td colspan="3">
0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
最大切换电压
</th>
<td colspan="3">
120 VAC/60VDC
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
最大承载电流
</th>
<td colspan="3">
1.0
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
最大操作时间
</th>
<td colspan="3">
1.0
</td>
<td>
mS
</td>
</tr>
<tr align="center">
<th scope="row">
最大释放时间
</th>
<td colspan="3">
0.5
</td>
<td>
mS
</td>
</tr>
<tr align="center">
<th scope="row">
机械寿命（无负载）
</th>
<td colspan="3">
1×10⁸ 次操作
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
环境温度
</th>
<td>
-30
</td>
<td>
/
</td>
<td>
70
</td>
<td>
˚C
</td>
</tr>
</table>

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

使用方法
-----

### 使用 Arduino

干簧继电器最多支持 60VDC 1A 负载。您可以使用它来控制电阻负载，<font color="red">**但不适用于感性负载（如电机）**</font>。

干簧继电器的使用方法与普通继电器非常相似。

- 将电灯连接到 Grove - 干簧继电器，并为电灯供电。
- 将 Grove - 干簧继电器连接到 Grove - 基础扩展板的 D2 端口，并插入 Arduino/Seeeduino。

- 上传以下代码。

```
    int Relay = 2;

    // setup 函数在按下复位时运行一次：
    void setup() {                
      // 将数字引脚初始化为输出。
      pinMode(Relay, OUTPUT);     
    }

    // loop 函数会不断重复运行：
    void loop() {
      digitalWrite(Relay, HIGH);   // 继电器闭合（HIGH 是电压电平）
      delay(5000);               // 等待五秒
      digitalWrite(Relay, LOW);    // 继电器打开，通过使电压为 LOW
      delay(5000);               // 等待五秒
    }
```

- 电灯会亮起几秒钟，然后熄灭几秒钟，重复循环。对于特殊应用，您可能需要自行编写代码。

### 使用 Raspberry Pi

:::note
     如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::
1. 您需要拥有一个 Raspberry Pi 和一个 GrovePi 或 GrovePi+。

2. 您需要完成开发环境的配置，否则请参考 [这里](/cn/GrovePi_Plus)。

3. 连接

- 使用 Grove 电缆将传感器插入 GrovePi 的 D4 插座。

4. 导航到示例代码目录：

```
    cd yourpath/GrovePi/Software/Python/
```

- 查看代码

```
    nano grove_relay.py   # 按 "Ctrl+x" 退出 #
```

```
    import time
    import grovepi

    # 将 Grove 继电器连接到数字端口 D4
    # SIG,NC,VCC,GND
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

5.运行演示程序。

```
    sudo python3 grove_relay.py
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- [Grove - 干簧继电器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip)
- [干簧继电器数据手册](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Dry-Reed_Relay_Datasheet.pdf)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Dry-Reed_Relay -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>