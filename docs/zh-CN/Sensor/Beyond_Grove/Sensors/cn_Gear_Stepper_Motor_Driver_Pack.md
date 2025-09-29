---
title: 齿轮步进电机驱动套件
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Gear_Stepper_Motor_Driver_Pack/
slug: /cn/Gear_Stepper_Motor_Driver_Pack
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/main.jpg)

齿轮步进电机驱动套件包括一个步进电机和一个电机驱动板。这是一款四相八步步进电机，您可以通过驱动板轻松控制该步进电机。

您可以使用该套件进行位置控制。

<p style={{}}><a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

- 低噪音
- 大扭矩
- 内置齿轮箱

## 规格

|项目|参数|
|---|---|
|工作电压|5V|
|相数|4|
|减速比|1/64|
|步距角|5.625°/64|
|直径|28mm / Nema 11|
|空载吸入频率|>500HZ|
|空载排出频率|>1000HZ|
|电阻|21±7%|
|噪音|≤40dB|
|驱动模式|四相八步驱动|

## 典型应用

- 桌面打印机
- 绘图仪
- 3D打印机
- CNC铣床

## 硬件概览

### 引脚图

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_1.jpg)

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_2.jpg)

### 机械图

您可以点击查看原始图片。

<p style={{}}><a href="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" /></a></p>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::提示
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | 齿轮步进电机驱动套件 | 母-公跳线 |
|--------------|-------------|-----------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 为了让齿轮步进电机驱动套件与 Arduino 一起工作，还需要一些母-公跳线。如果您没有跳线，可以点击 [这里](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) 购买。
:::

- **步骤 1.** 使用跳线将齿轮步进电机驱动板连接到 Seeeduino。

| Seeeduino | 齿轮步进电机驱动板 |
|---|---|
|数字引脚 8|IN1|
|数字引脚 9|IN2|
|数字引脚 10|IN3|
|数字引脚 11|IN4|
|GND|GND|
|VCC_5V|VCC|
|VCC_5V|VM|

:::tip
您可以将 VM 引脚连接到 VCC_5V，也可以选择不使用它，只需在开关中选择 VCC 即可。
:::

- **步骤 2.** 将步进电机插入齿轮步进电机驱动板。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/connect.jpg)

#### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)，将以下代码复制到 Arduino IDE 的新草稿中。

```cpp
int pwm1=9;
int pwm2=10;
int ctr_a =9;
int ctr_b =8;
int ctr_c =11;
int ctr_d =10;
int sd =6;
int i=0;
int t=1500;

void setup()
{
    pinMode(ctr_a,OUTPUT);
    pinMode(ctr_b,OUTPUT);
    pinMode(ctr_c,OUTPUT);
    pinMode(ctr_d,OUTPUT); 
    delay(1);     
}


void loop ()
{
   for(i=1500;i>=1;i--)
   {
       digitalWrite(ctr_a,LOW);//A
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,LOW);//AB
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);//B
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);
       digitalWrite(ctr_c,LOW);//BC
        digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//C
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//CD
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
        digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//D
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//DA
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       
   }
}
```

- **步骤 2.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
如果一切正常，您可以看到电机运行：
:::

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/_DAS7726.MOV_20181115_134717.gif)

### Raspberry Pi + Python

#### 所需材料

| Pi Pico | 齿轮步进电机驱动套件 | 母-母跳线 |
|--------------|-------------|-----------------|
|![Raspberry Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![齿轮步进电机驱动套件](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![母-母跳线](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html" target="_blank">立即购买</a>|

#### 背景

步进电机内部有 4 个独立的电磁铁，您需要按顺序逐个供电以使齿轮转动一个刻度。齿轮有 64 个刻度，因此您需要重复 64 次才能完成轴的一次完整旋转。

您可以手动逐个供电，也可以使用诸如 [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib) 这样的库。

#### 方法

1. 如果尚未完成，请按照 [此指南](https://projects.raspberrypi.org/en/pathways/pico-intro) 设置您的 Raspberry Pi Pico，使其通过 Thonny 和 picozero 在电脑上运行 Python。

1. 使用跳线将齿轮步进电机驱动板连接到 Pi Pico。

    | Pi Pico | 齿轮步进电机驱动板 |
    |---|---|
    |VBUS|VCC|
    |GND|GND|
    |GP2|IN1|
    |GP3|IN2|
    |GP4|IN3|
    |GP5|IN4|

1. 仔细观察你的齿轮步进电机驱动板，你会看到一个非常小的开关，一端标有 VCC，另一端标有 VM。这个开关允许你选择是使用驱动器的同一引脚（VCC）为电机供电，还是使用单独的电压源（VM）。现在我们只使用 VCC。确保开关设置在 VCC。

1. 使用 USB 将你的 Pi Pico 插入电脑（或通过无线连接），然后打开 Thonny。

1. 将以下代码上传到 Thonny 并运行。

```python
from gpiozero import Button, LED
from time import sleep

wait = 0.001 # 秒

ctrA = LED(2) # IN1
ctrB = LED(3) # IN2
ctrC = LED(4) # IN3
ctrD = LED(5) # IN4

while True:
  # A
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # AB
  ctrA.on()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # B
  ctrA.off()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # BC
  ctrA.off()
  ctrB.on()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # C
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # CD
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.on()
  sleep(wait)

  # D
  ctrA.off()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)

  # DA
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)
```

:::tip
_这里发生了什么？_
步进电机内部有 4 个独立的电磁铁。你正在循环逐个为它们供电，这会使齿轮转动一个刻度。快速重复 64 次，轴就会完成一次完整旋转！
:::

#### 使用库

你也可以使用类似 [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib) 的库来简化操作：

1. 在 Thonny 中点击 -> Tools -> Manage packages -> 搜索 `RpiMotorLib` -> 安装

1. 按照上一节中的相同接线步骤操作

1. 将代码替换为以下内容：

```
from RpiMotorLib import RpiMotorLib

GpioPins = [2, 3, 4, 5]
mymotortest = RpiMotorLib.BYJMotor("MyMotorName", "28BYJ")
mymotortest.motor_run(GpioPins, 0.001, 512, False, False, "half", 0.05)
```

:::tip
上面代码中的 "28BYJ" 指的是你使用的步进电机型号。你可以在 [RpiMotorLib 文档](https://github.com/gavinlyonsrepo/RpiMotorLib/blob/master/Documentation/28BYJ.md) 中找到其他参数的解释。（虽然使用的是不同的驱动板，但大部分内容是相同的）。
:::

## 资源

- **[Zip]** [齿轮步进电机驱动板 Eagle 文件](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/Stepper%20Motor%20Driver.rar)

- **[PDF]** [CX28BYJ48 电机数据手册](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/CX28BYJ48.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>