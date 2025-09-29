---
description: Grove - MOSFET
title: Grove - MOSFET
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-MOSFET
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_01.jpg" /></div>

Grove – MOSFET 使您能够使用低电压（例如 5V）在微控制器上控制更高电压的项目（例如 15V DC）。MOSFET 也是一种开关，但其开关频率可高达 5MHz，比普通机械继电器快得多。板上有两个螺丝端子，一个用于外部电源，另一个用于您想要控制的设备。当闭合时，Grove – MOSFET 会将电源从一端传递到另一端。但如果外部电源缺失，您的设备仍然可以通过 Grove 接口从微控制器获取电源。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-MOSFET-p-1594.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 版本

| 产品版本                  | 变更                                                                                                                                                                                    | 发布日期       |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| Grove - MOSFET V1.0 | 初始版本                                                                                                                                                                                | 2015年10月     |

## 规格

|参数| 值/范围|
|:---|:-------|
|工作电压|  5V|
|Vin      |   5 ~ 15V|
|MOSFET 型号| CJQ4435|

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 演示

这里我们演示如何使用 Grove - MOSFET 控制电机。我们通过外部电源为其供电，但如果您控制的设备所需电流小于 300mA，Seeeduino 完全可以支持，无需额外电源。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove - MOSFET |
|----------------|-------------|--------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **步骤 2.** 将 Grove - MOSFET 连接到 Grove-Base Shield 的 D6 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/2.jpg" /></div>

:::note
如果没有 Grove Base Shield，我们也可以直接将 Grove_MOSFET 按如下方式连接到 Seeeduino。
:::

| Seeeduino       | Grove_MOSFET |
|-----------------|--------------|
| 5V              | 红色         |
| GND             | 黑色         |
| 未连接          | 白色         |
| D6              | 黄色         |

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/MOSFET_Interface_Function.jpg" /></div>

Vin：接受 5V ~ 15V 的电源，电流小于 2A。

Vout：在此处连接执行器。

#### 软件

- **步骤 1.** 将以下代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
// Grove - MOSFET 示例
// 使用 PWM 引脚 6 控制电机

int motorPin = 6;

void setup()
{
    Serial.begin(38400);
    pinMode(motorPin, OUTPUT);
    Serial.println("Grove - MOSFET 测试示例！");
}

void loop()
{
    motorOnThenOffWithSpeed();
    motorAcceleration();
}

void motorOnThenOffWithSpeed()
{
    int onSpeed  = 200;                         // 0（停止）到 255（全速）之间的数字
    int onTime   = 2500;
    int offSpeed = 50;                          // 0（停止）到 255（全速）之间的数字
    int offTime  = 1000;
    analogWrite(motorPin, onSpeed);
    delay(onTime);
    analogWrite(motorPin, offSpeed);
    delay(offTime);
}

void motorAcceleration()
{
    int delayTime = 50;
    for(int i=0; i<256; i++)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }

    for(int i=255; i>=0; i--)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }
}
```

- **步骤 2.** 观察电机的状态。

![](https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Static_image.gif)

### 使用 Raspberry Pi

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry Pi | GrovePi_Plus | Grove - MOSFET |
|--------------|--------------|--------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry Pi。
- **步骤 3.** 将 Grove-MOSFET 连接到 GrovePi_Plus 的 **D6** 端口。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/1.jpg" /></div>

#### 软件

- **步骤 1.** 导航到示例代码目录：

```
cd yourpath/GrovePi/Software/Python/
```

- **步骤 2.** 查看代码：

```
nano grove_mosfet.py   # 按 "Ctrl+x" 退出 #
```

```python
import time
import grovepi

# 将 Grove MOSFET 连接到数字端口 D6
# SIG,NC,VCC,GND
mosfet = 6

grovepi.pinMode(mosfet,"OUTPUT")
time.sleep(1)

while True:
    try:
        # 全速
        grovepi.analogWrite(mosfet,255)
        print "全速"
        time.sleep(2)

        # 半速
        grovepi.analogWrite(mosfet,128)
        print "半速"
        time.sleep(2)

        # 关闭
        grovepi.analogWrite(mosfet,0)
        print "关闭"
        time.sleep(2)

    except KeyboardInterrupt:
        grovepi.analogWrite(mosfet,0)
        break
    except IOError:
        print "错误"
```

- **步骤 3.** 运行示例代码。

```
sudo python grove_mosfet.py
```

- **步骤 4.** 您将在终端上看到如下输出。

<div><img width="{1000}" src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/pi_result.png" /></div>
|
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove - MOSFET 原理图文件](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip)
- **[PDF]** [Grove - MOSFET 原理图 PDF](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove%20-%20MOSFET%20.pdf)
- **[Datasheet]** [CJQ4435 数据手册](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/CJQ4435.pdf)
- **[WIKI]** [MOSFET 维基百科](https://en.wikipedia.org/wiki/MOSFET)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_MOSFET -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>