---
title: Grove - 振动马达
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Vibration_Motor/
slug: /cn/Grove-Vibration_Motor
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib.jpg)

这是一款迷你振动马达，适合作为非声音指示器。当输入为 HIGH 时，马达会像手机静音模式一样振动。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

## 版本追踪

| 修订版 | 描述                                                         | 发布日期       |
|--------|--------------------------------------------------------------|----------------|
| v0.9b  | 初始公开发布                                                 | 2011年5月10日  |
| v1.0   | 直接使用 I/O 端口驱动振动马达                                 | 2011年11月5日  |
| v1.2   | 添加了晶体管，使用更大的电流驱动振动马达                     | 2013年7月11日  |

## 特性

- Grove 兼容
- 无声音
- 低功耗
- 高可靠性

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格

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
</tr>
<tr align="center">
<th scope="row">
工作电压
</th>
<td>
3.0V
</td>
<td>
5.0V
</td>
<td>
5.5V
</td>
</tr>
<tr align="center">
<th scope="row">
控制模式
</th>
<td colspan="3" rowspan="1">
逻辑电平
(当逻辑为 HIGH 时，马达开启；当逻辑为 LOW 时，马达关闭。)
</td>
</tr>
<tr align="center">
<th scope="row">
额定转速
</th>
<td colspan="3" rowspan="1">
9000 rpm
</td>
</tr>
</table>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

让振动电机振动就像点亮 LED 一样简单。以下是一个示例，展示如何启动振动电机。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove - 振动电机 |
|----------------|-------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **步骤 2.** 将 Grove - 振动电机连接到 Grove-Base Shield 的 D2 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/vibration_motor.png)

:::note
 如果没有 Grove Base Shield，我们也可以直接将 Grove - 振动电机连接到 Seeeduino，如下所示。
:::
| Seeeduino       | Grove - 振动电机 |
|-----------------|-----------------------|
| 5V              | 红色                 |
| GND             | 黑色                 |
| 未连接          | 白色                 |
| D2              | 黄色                 |

#### 软件

- **步骤 1.** 将以下代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
int MoPin = 2;    // 振动器 Grove 连接到数字引脚 9

void setup()  {
    pinMode( MoPin, OUTPUT );
}

void loop()  {

    digitalWrite(MoPin, HIGH);
    delay(1000);

    digitalWrite(MoPin, LOW);
    delay(1000);
}
```

- **步骤 2.** 现在，感受电机的振动吧！

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - 振动电机连接到 Base Shield 的 D2 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
    如果这是您第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/cc_Vibration_Motor.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
    当代码上传完成后，您将感受到振动电机的振动。
:::

### 使用 Raspberry Pi

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry Pi | GrovePi_Plus | Grove - 振动电机 |
|--------------|--------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry Pi。
- **步骤 3.** 将 Grove - 振动电机连接到 GrovePi_Plus 的 **D8** 端口。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到 PC。

#### 软件

- **步骤 1.** 导航到示例代码目录：

```
cd yourpath/GrovePi/Software/Python/
```

- **步骤 2.** 查看代码：

```
nano grove_vibration_motor.py   # 按 "Ctrl+x" 退出 #
```

```python
import time
import grovepi

# 将 Grove 振动电机连接到数字端口 D8
# SIG,NC,VCC,GND
vibration_motor = 8

grovepi.pinMode(vibration_motor,"OUTPUT")

while True:
    try:
        # 振动 1 秒
        grovepi.digitalWrite(vibration_motor,1)
        print 'start'
        time.sleep(1)

        # 停止振动 1 秒，然后重复
        grovepi.digitalWrite(vibration_motor,0)
        print 'stop'
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(vibration_motor,0)
        break
    except IOError:
        print "Error"
```

- **步骤 3.** 运行示例代码：

```
sudo python grove_vibration_motor.py
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove - 振动马达原理图](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip)

- **[Datasheet]** [S9013 数据手册](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/S9013.pdf)

- **[Datasheet]** [ANDA-B1020 数据手册](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/ANDA-B1020_datasheet.pdf)

- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove_Vibration_Motor/resource/Grove_Vibration_Motor_CDC_File.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Vibration_Motor -->

## 项目

**Grove - 振动马达介绍 - 仅限成人**：初学者示例

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-vibration-motor-only-for-adults-2acfc2/embed' width='350'></iframe>

**受到《守望先锋》的启发，我们最近制作了一款非常酷的木质激光枪玩具！**

木质激光枪和枪靶都基于一个名为 Seeeduino Lotus 的 Arduino 板。激光枪上的激光发射器被控制以发射激光脉冲来“激活”枪靶。而枪靶上有 3 个光传感器，用于检测激光脉冲。看起来很简单，对吧？如果您对我们的项目感兴趣，请为自己或您的孩子制作一个！作为圣诞礼物，花一天时间 DIY 是非常值得的。

[![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>