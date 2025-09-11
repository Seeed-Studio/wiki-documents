---
title: Grove - I2C 电机驱动器 V1.3
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-I2C_Motor_Driver_V1.3/
slug: /cn/Grove-I2C_Motor_Driver_V1.3
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New.jpg)

Grove - I2C 电机驱动器 V1.3（最新版本）可以直接控制步进电机或直流电机。其核心是一个双通道 H 桥驱动芯片（L298N），每通道可处理高达 2A 的电流，由 Atmel ATmega8L 控制，与 Arduino 等平台进行 I2C 通信。两个电机可以同时驱动，并设置不同的速度和方向。它可以驱动两个有刷直流电机或一个四线两相步进电机。它需要 6V 至 15V 的电源来为电机供电，并且配备了一个板载 5V 电压调节器，可以为 I2C 总线和 Arduino 供电（通过跳线选择）。所有驱动线路都通过二极管保护，防止反向电动势。

与 [Grove - I2C 电机驱动器 V1.2](https://wiki.seeedstudio.com/cn/Grove-I2C_Motor_Driver_V1.2/) 相比，V1.3 使用户更容易控制步进电机。您不再需要一直控制步进电机，只需向 I2C 电机驱动器 V1.3 发送一个命令来驱动步进电机，它将按照您的命令执行，这可以节省 Arduino 的资源并简化代码。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)

## 版本

| 修订版   | 描述                                             | 发布日期       |
|----------|-------------------------------------------------|----------------|
| v1.0     | 初始公开发布                                     | 2012年5月17日  |
| v1.2     | 修改通过硬件设置的 I2C 地址                      | 2012年7月2日   |
| v1.3     | 修改固件以支持离线步进电机                       | 2013年2月18日  |

## 特性

- Grove 兼容
- I2C 接口
- 可调节电机速度和旋转方向
- 可通过硬件更改从设备地址

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。
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
<th scope="col">
单位
</th>
</tr>
<tr>
<th scope="row">
工作电压
</th>
<td>
6
</td>
<td align="center" >
-
</td>
<td>
15
</td>
<td>
VDC
</td>
</tr>
<tr>
<th scope="row">
每通道最大输出电流
</th>
<td colspan="3" align="center">
0.5
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
最大总电流
</th>
<td colspan="3" align="center" >
1.0
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
I2C 总线输入/输出电压
</th>
<td colspan="3" align="center" >
5
</td>
<td>
V
</td>
</tr>
<tr>
<th scope="row">
通信协议
</th>
<td colspan="3" align="center" >
I2C
</td>
<td>
/
</td>
</tr>
</table>

:::note
    如果您想使用多个 I2C 设备，请参考 [软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)。
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 硬件概述

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-1.jpg)

**78M05 IC:** 5V 电压调节器

**L298 IC:** 双全桥驱动器

**ATmega8 IC:** 控制电机旋转

<div class="admonition note">
<p class="admonition-title">注意</p>
螺丝端子的输入电压被调节为 5V，并通过跳线 (J4) 连接到 I2C +5V。如果同时使用螺丝端子的外部电源和 I2C 接头供电，请移除跳线。如果需要向 I2C 总线提供 5V，请使用跳线。
</div>

## 应用场景

- 机器人
- 自制遥控车
- 机箱风扇
- 高功率 LED 照明

<div class="admonition danger">
<p class="admonition-title">警告</p>
当电流超过 1 安培时，板子会非常热。请勿触碰！
</div>

## 入门指南

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 演示

I2C 电机驱动器可以控制基于 L298 芯片的电机。L298 不仅是一个双电机驱动器，它还是一个双 H 桥。H 桥基本上是一种特定的晶体管设置，可以让您切换电流方向。连接到电机意味着您可以让它向两个方向旋转；通过 PWM 输入，您可以使用 Arduino 让它以任何速度旋转。由于 L298 有两个 H 桥，您可以通过让每个轮子以不同方向旋转来让机器人转向，当然也可以前进和后退。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - I2C Motor Driver V1.3 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)|

- **步骤 2.** 设置 I2C 电机驱动器的地址

- 使用拨码开关设置地址是新 I2C 电机驱动器新增的功能。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-9.jpg)

- 然后确保程序中的地址设置与 I2C 电机驱动器上的地址设置一致。程序中的默认地址设置为 0x0f。
- **步骤 3.** 将 Grove - I2C Motor Driver V1.3 连接到 Grove-Base Shield 的 I2C 端口。
- **步骤 4.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 5.** 使用 USB 数据线将 Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg)

:::note
 如果没有 Grove Base Shield，我们也可以直接将 Grove - I2C Motor Driver V1.3 连接到 Seeeduino，如下所示。
:::
| Seeeduino       | Grove - I2C Motor Driver V1.3 |
|-----------------|-------------------------|
| 5V              | 红色                   |
| GND             | 黑色                   |
| SDA             | 白色                   |
| SCL             | 黄色                   |

#### 软件

- **步骤 1.** 从 Github 下载 [Grove_I2C_Motor_Driver_v1_3 库](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)。
- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- **步骤 3.** 将代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
// 默认 I2C 地址为 0x0f
#define I2C_ADDRESS 0x0f

void setup()
{
    Motor.begin(I2C_ADDRESS);
}
```

<div class="admonition note">
<p class="admonition-title">注意</p>
首先需要注意的是，您需要为您的直流电机提供外部电源。Arduino 上的 5V 引脚无法提供足够的电力来驱动两个电机，如果这样做可能会损坏您的 Arduino。
</div>

- 有两个函数用于控制直流电机：

```c
// 设置电机速度，速度在这里等同于占空比
void speed(unsigned char motor_id, int _speed);

// 停止一个电机
void stop(unsigned char motor_id);

```

通过 `speed()` 函数，你可以以所需的速度驱动一个电机。

- **motor_id** 表示使用哪个电机。可以填写 MOTOR1 或 MOTOR2。

- **_speed** 表示设置给电机的速度。可以填写 -100~100。当 _speed&gt;0 时，直流电机顺时针旋转；当 _speed&lt;0 时，直流电机逆时针旋转。并且 _speed 的绝对值越大，直流电机的速度越快。

通过 `stop()` 函数，你可以停止正在运行的直流电机。

- **motor_id** 表示使用哪个电机。可以填写 MOTOR1 或 MOTOR2。

**驱动步进电机**

以 [24BYJ48 步进电机](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171) 为例，硬件安装如下图所示：

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg)

[24BYJ48](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171) 步进电机与 I2C 电机驱动器的连接如下图所示：

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg)

- 我们提供了一个函数用于驱动步进电机。

```c
// 驱动步进电机
void StepperRun(int _step);
```

- **_step** 表示设置给步进电机运行的步数。可以填写 -1024~1024。当 _step&gt;0 时，步进电机顺时针旋转；当 _step&lt;0 时，步进电机逆时针旋转。当 _step 为 512/-512 时，步进电机将运行一整圈；当 _step 为 1024/-1024 时，步进电机将运行两圈。步进电机完成设定步数后会自动停止。

### 使用 Codecraft 玩转

#### 硬件

**步骤 1.** 使用 Grove 电缆将 Grove - I2C 电机驱动器连接到 Seeeduino 的 I2C 接口。如果你使用的是 Arduino，请使用 Base Shield。

**步骤 2.** 使用 USB 电缆将 Seeeduino/Arduino 连接到你的电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

:::note
    如果这是你第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按下图所示拖动代码块，或者打开页面底部提供的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/cc_I2C_Motor_Driver.png)

将程序上传到你的 Arduino/Seeeduino。

:::tip
    当代码上传完成后，你会看到连接到电机驱动器的直流电机开始工作。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove - I2C 电机驱动 V1.3 原理图](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip)

- **[PDF]** [Grove - I2C 电机驱动 V1.3 PCB PDF 格式](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b%20PCB.pdf)

- **[PDF]** [Grove - I2C 电机驱动 V1.3 原理图 PDF 格式](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b.pdf)

- **[Library]** [Grove - I2C 电机驱动 V1.3 库文件](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3)

- **[Firmware]** [I2C 电机驱动芯片固件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/On-Chipfirmware_for_Motor_driver.zip)

- **[Datasheet]** [L298 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/L298datasheet.pdf)

- **[Datasheet]** [78M05 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/ST_78M05DataSheet.pdf)

- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove_I2C_Motor_Driver_CDC_File.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_I2C_Motor_Driver_V1.3 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>