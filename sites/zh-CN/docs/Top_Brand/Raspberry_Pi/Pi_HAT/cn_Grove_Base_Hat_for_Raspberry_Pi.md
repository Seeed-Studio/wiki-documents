---
description: Grove Base Hat for Raspberry Pi
title: Grove Base Hat for Raspberry Pi
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_Hat_for_Raspberry_Pi
sku: 103030275
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2025-08-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg)

如今，Grove 系列传感器、执行器和显示器已经发展成为一个庞大的家族。未来将有越来越多的 Grove 模块加入整个 Grove 生态系统。我们看到 Grove 帮助创客、工程师、教师、学生甚至艺术家去构建、制作、创造...我们始终认为让 Grove 模块兼容更多平台是我们的责任。现在我们为您带来 Grove Base Hat for Raspberry Pi 和 [Grove Base Hat for Raspberry Pi Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html)，换句话说，我们为 Raspberry Pi 带来了整个 Grove 系统。

Grove Base Hat for Raspberry Pi 提供数字/模拟/I2C/PWM/UART 端口以满足您的所有需求。在内置 MCU 的帮助下，Raspberry Pi 还可以使用 12 位 8 通道 ADC。

坦率地说，目前约有 60 个 Grove 模块支持 Grove Base Hat for Raspberry Pi。但是，我们将继续添加新的兼容模块，您使用得越多，添加的 Grove 模块就越多。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 支持 Raspberry Pi 2/3B/3B+/4/Zero
- 内置 MCU
- 12 位 ADC
- 多类型 Grove 端口  

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V|
|MCU|STM32/MM32|
|ADC|12 位 8 通道|
|Grove 端口|    6 个数字端口 <br />4 个模拟端口 <br /> 3 个 I2C 端口 <br /> 1 个 PWM 端口  <br /> 1 个 UART 端口|
|Raspberry Pi 通信总线|I2C|
|I2C 地址|0x04/0x08|

:::caution
工作电压为 3.3V，请不要输入超过 3.3V 的电压，否则可能损坏 Raspberry Pi。此外，此扩展板无法通过 Grove 端口与 5V Grove 模块配合使用，请使用 3.3V 兼容的 Grove 模块。
:::

## 硬件概述

### 引脚定义

**概述**

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/overview.jpg)

**GPIO**

与 Raspberry Pi 的引脚定义相同。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/1.jpg)

**PWM（脉宽调制）**

Grove PWM 端口连接到 GPIO/BCM 引脚 12（PWM0）和 GPIO/BCM 引脚 13（PWM1），这是 Raspberry Pi 的硬件 PWM 引脚，此外，您可以将所有 GPIO 引脚用作软件 PWM 引脚。

:::note
0- Grove 端口旁边的所有丝印层引脚编号都是 BCM 引脚编号。BCM 引脚和物理引脚之间的区别请参考[这里](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)

1- 与硬件 PWM 相比，软件 PWM 不够精确，在高频率下会出现问题。

2- GPIO/BCM 引脚 18 也标记为 PWM0，实际上 GPIO/BCM 12 和 GPIO/BCM 18 共享同一个 PWM 通道，因此它们不能设置为不同的频率。

3- 音频插孔输出也使用 PWM 0 和 PWM 1，因此您不能同时在该插孔上输出音频并使用 PWM。
:::

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/3.jpg)

**UART**

Grove UART 端口连接到 GPIO14（UART0 TX）和 GPIO15（UART0 RX）。UART 通常在 Pi 上用作通过 GPIO 控制它的便捷方式，或从串行控制台访问内核启动消息（默认启用）。它也可以用作将 Arduino、引导加载的 ATmega、ESP8266 等与您的 Pi 接口的方式。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/2.jpg)

**数字端口**

此板上有 6 个数字 Grove 插座，通常 Grove 线缆的黄线（连接到 4 引脚 Grove 插座的顶部引脚）是信号线，因此我们将数字 Grove 端口命名为 **D5/D16/D18/D22/D24/D26**。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/4.jpg)

**模拟端口**

众所周知，Raspberry Pi 中没有 ADC，因此它无法直接与模拟传感器配合使用。现在在内置 MCU STM32 的帮助下，Grove 底板可以作为外部 12 位 ADC 工作，这意味着您可以在 Raspberry Pi 上使用模拟传感器。更令人高兴的是，不是一个而是四个模拟 Grove 插座可用。

模拟传感器将模拟电压输入到 12 位 ADC。ADC 将模拟数据转换为数字数据后，通过 I2C 接口将数字数据输入到 Raspberry Pi。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/5.jpg)

**I2C**

此板上有三个 I2C 端口可用，它们都直接连接到 Raspberry Pi 的 I2C 引脚。您可以将这部分视为 I2C 集线器。Seeed 的大多数新 Grove 模块都有 I2C 接口，您可能会发现这三个端口非常有用。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/7.jpg)

**SWD**

我们使用 SWD 端口将固件烧录到此扩展板。此外，您可以在此部分看到 3 个 GPIO 引脚，即 **引脚 9/引脚 10/引脚 11**。这三个引脚未被任何 Grove 端口使用，您可以自由使用它们而无需担心引脚冲突。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/6.jpg)

**Grove Base Hat for Raspberry Pi 与 GrovePi+ 对比**

| 参数                   | [Grove Base Hat for Raspberry Pi](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/cn/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 工作电压             | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Grove 端口                 | 6 x 数字端口(3.3V); 4 x 模拟端口(3.3V) ; 3 x I2C 端口(3.3V); 1 x PWM 端口(3.3V) ; 1 x RPISER(UART) 连接到 Raspberry Pi(3.3V) ; 1 x SWD | 7 x 数字端口(5V); 3 x 模拟端口(5V) ;3 x I2C 端口(5V) ;1 x SERIAL: 连接到 ATMEGA328P D0/1(5V) ; 1 x RPISER: 连接到 Raspberry Pi(3.3V) ;1 x ISP |
| Grove-数字端口               | 直接连接到 Raspberry Pi                                                                                  | 连接到 ATMEGA328P 数字引脚并转换为 I2C 信号，然后通过电平转换器到 Raspberry Pi                      |
| Grove-模拟端口                | 连接到 STM32F030F4P6(12 位 ADC) 然后转换为 I2C 信号，直接路由到 Raspberry Pi                | 连接到 ATMEGA328P 模拟引脚(10 位 ADC) 然后转换为 I2C 信号，然后通过电平转换器到 Raspberry Pi       |
| Grove-I2C                   | 直接连接到 Raspberry Pi                                                                                  | 通过电平转换器连接到 Raspberry Pi                                                                                  |
| Grove-PWM                   | 直接连接到 Raspberry Pi                                                                                  | NA                                                                                                                               |
| RPISER                      | 直接连接到 Raspberry Pi                                                                                  | 直接连接到 Raspberry Pi                                                                                                 |
| SERIAL                      | NA                                                                                                                | 连接到 ATMEGA328P 数字引脚 D0/D1 并转换为 I2C 信号，然后通过电平转换器到 Raspberry Pi                |
| SWD                         | 将固件烧录到 STM32F030F4P6                                                                                    | NA                                                                                                                               |
| ISP                         | NA                                                                                                                | 将固件烧录到 ATMEGA328P                                                                                                      |
| Raspberry Pi 连接器引脚 | 40                                                                                                                | 26                                                                                                                               |

## 入门指南

### 硬件

#### 所需材料

-- [Raspberry Pi x1](https://www.seeedstudio.com/Raspberry-Pi-3-Model--p-3037.html)  
-- Grove Base Hat for Raspberry Pi x1  
-- Grove 模块

- **步骤 1.** 将 Grove Base Hat for Raspberry Pi 插入 Raspberry Pi。

- **步骤 2.** 将 Grove 模块插入相应的 Grove 端口。

- **步骤 3.** 使用 micro-usb 线缆为 Raspberry Pi 供电。

:::caution
我们建议您在所有硬件连接完成后再给树莓派上电。请不要热插拔传感器模块，否则树莓派可能会崩溃。
:::

### 软件

:::caution
目前，市场上有两个版本的板子：STM32 版本（V1.1）和 MM32 版本（V1.0）。当前发货版本是 STM32 版本。

如果您在使用 Grove Base Hat for Pi 与 `grove.py` 库时遇到问题，请检查您的板子版本：  

1. **如果是 STM32 版本**，I2C 地址是 `0x04`。您需要将 `/home/username/.local/lib/python3.9/site-packages/adc.py` 中的 I2C 地址更改为 `0x04`。  
2. **如果是 MM32 版本**，I2C 地址是 `0x08`。您需要将 `/home/username/.local/lib/python3.9/site-packages/adc.py` 中的 I2C 地址更改为 `0x08`。  

:::

在本节中，我们将介绍如何安装 **seeed grove.py** 库以及如何使用 Grove Base Hat for Raspberry Pi 的 I2C、PWM、数字和模拟端口。

:::tip
如果您不知道如何使用树莓派，请在开始之前查看[这里](https://www.raspberrypi.org/documentation/)。
:::

#### 架构

为了操作 Grove 传感器，grove.py 依赖许多硬件接口库，如 mraa/smbus2/rpi.gpi/rpi_ws281x。

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png" /></p>

#### 安装

:::tip
虚拟环境是目前在 Bookworm 中最稳定和推荐的复制方式。
:::

##### 安装依赖项

**添加仓库**

```linux
echo "deb https://seeed-studio.github.io/pi_repo/ stretch main" | sudo tee /etc/apt/sources.list.d/seeed.list
```

**添加公共 GPG 密钥**

```linux
curl https://seeed-studio.github.io/pi_repo/public.key | sudo tee /etc/apt/trusted.gpg.d/seeed.gpg > /dev/null
sudo apt update
```

**安装底层依赖项（全局安装即可）**

```linux
# Optional: Seeed binary package (not needed for most sensors)
sudo apt install libbmi088 libbma456
# Required: Python layer dependencies
pip install smbus2 pyserial seeed-python-dht   # DHT DHT series required
```

**启用 I2C 接口**

```linux
sudo raspi-config
```

- 选择 Interfacing Options>I2C>Yes>Ok>Finish
- 启用 I2C 接口

**安装所需包**
:::tip
在最新版本的 Python3 中，建议使用 *virtualenv* 进行隔离的包管理。
:::

:::tip
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 执行此命令行。以下说明适用于 Bookworm OS。
:::

<Tabs>

<TabItem value="env" label="虚拟环境" default>

```linux
# Create once
mkdir ~/grove_env && cd ~/grove_env
python3 -m venv --system-site-packages env
# From now on, you need to run this first every time you open the terminal.
source ~/grove_env/env/bin/activate 
```

</TabItem>
</Tabs>




##### 安装 grove.py

对于初学者或仅使用库的用户，请使用在线方法安装。

- 自动依赖项安装和库部署。
- 快速入门，无需手动操作。

对于开发者或高级用户，请先安装依赖项，然后使用源代码安装 grove.py。

- 包含完整的 `grove.py` 仓库、源代码、示例和文档
- 适合查看源代码和示例，修改库函数

<Tabs>
<TabItem  value="Beginner" label="适用于初学者或库用户" default>

要安装到全局环境，您可以输入以下命令：

```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

如果您想安装到虚拟环境，请先激活您的 virtualenv 并输入以下命令：

```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | bash -s -- --user-local --bypass-gui-installation
```

</TabItem>
<TabItem  value="Developer" label="适用于开发者或高级用户" default>




要安装到全局环境，您可以输入以下命令：

```linux
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
sudo pip3 install .
```

如果您想安装到虚拟环境，请先激活您的 virtualenv 并输入以下命令：

```linux
# Execute in a virtual environment
cd ~/grove_env
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
pip3 install .
```

</TabItem>
</Tabs>

:::note

 由于树莓派的更新，一键安装脚本相对较旧，可能无法进行一键安装。建议使用第二种方法 - 更稳定的源代码方法来下载 Grove 库。

:::

**运行例程的通用模板（每次打开新终端时）**

虚拟环境
```linux
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
python grove_xxx.py          # xxx = Module Name
```

全局环境
```linux
 grove_xxx.py          # xxx = Module Name
```

### 使用方法

现在您可以使用 Grove Base Hat for Raspberry Pi 与数十个 Grove 模块，输入命令 **grove_** 并按 ++tab++ 键来查看[支持的 Grove 列表](https://github.com/Seeed-Studio/grove.py/tree/master/doc)。

```linux
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
grove_loudness_sensor
grove_mech_keycap
grove_mini_pir_motion_sensor
grove_moisture_sensor
grove_multi_switch
grove_multi_switch_poll
grove_oled_display_128x64
grove_optical_rotary_encoder
grove_piezo_vibration_sensor
grove_pwm_buzzer
grove_recorder_v3_0
grove_relay
grove_rotary_angle_sensor
grove_round_force_sensor
grove_ryb_led_button
grove_servo
grove_slide_potentiometer
grove_sound_sensor
grove_step_counter_bma456
grove_switch
grove_temperature_humidity_bme680
grove_temperature_humidity_sht31
grove_temperature_sensor
grove_thumb_joystick
grove_tilt_switch
grove_time_of_flight_distance
grove_touch_sensor
grove_ultrasonic_ranger
grove_uv_sensor
grove_water_sensor
grove_ws2813_rgb_led_strip
```

然后我们将向您展示如何根据端口类型使用它们。

**数字端口**

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 执行此命令行。
:::

我们将以 [Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) 为例来介绍数字端口。

*硬件连接图*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

在命令行界面中输入以下命令 `grove_ultrasonic_ranger 5 6`。

```python
pi@raspberrypi:~$  grove_ultrasonic_ranger 5 6
Detecting distance...
6.979909436456088 cm
7.966469074117726 cm
12.451204760321255 cm
15.184797089675378 cm
17.429220265355603 cm
18.73230112010035 cm
20.717752390894397 cm
19.83807004731277 cm
17.3059003106479 cm

^CTraceback (most recent call last):
  File "/usr/local/bin/grove_ultrasonic_ranger", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_ultrasonic_ranger')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt

```

当您改变 Grove - Ultrasonic Ranger 与目标物体之间的距离时，测量值会相应改变。
按 ++ctrl+c++ 退出。

:::caution
对于大多数 Grove 模块，您需要添加引脚号参数，如 `grove_ultrasonic_ranger 5 6`，**5** 和 **6** 是 GPIO/BCM 引脚。但是，您可能已经注意到在第一个示例 `grove_pwm_buzzer` 中，我们没有在命令后添加参数。这是因为 PWM 端口和 I2C 端口不需要引脚号参数。您可以在 Grove 插座旁边找到引脚号丝印。
:::

**模拟端口**

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 执行此命令行。
:::

我们将以 [Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html) 为例来介绍模拟端口。

*硬件连接图*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

在命令行界面中输入以下命令 `grove_air_quality_sensor_v1_3 0 1`。

```python
pi@raspberrypi:~$  grove_air_quality_sensor_v1_3 0 1
Detecting ...
62, Air Quality OK.
63, Air Quality OK.
61, Air Quality OK.
61, Air Quality OK.
59, Air Quality OK.
62, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
59, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.

57, Air Quality OK.
^CTraceback (most recent call last):
  File "/usr/local/bin/grove_air_quality_sensor_v1_3", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_air_quality_sensor_v1_3')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt

```

您可以使用此传感器检测空气质量。按 ++ctrl+c++ 退出。

:::note
您可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A1, A0**，但在命令中我们使用参数 **0** 和 **1**，与数字端口相同。因此请确保将模块插入正确的端口，否则可能会出现引脚冲突。
:::

**I2C**

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

我们将以 [Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html) 为例来介绍 I2C 端口。

*硬件连接图*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg)

在命令行界面中输入以下命令 `grove_oled_display_128x64`。

```
(env)pi@raspberrypi:~$ python grove_oled_display_128x64
```

看起来什么都没有发生，但是如果您查看您的 OLED，您会发现网络世界中最著名的句子。😄

:::note
如果您使用 I2C 工具扫描 Grove 模块的 I2C 地址，您可能会发现两个或更多地址。0x04 是 *Grove Base Hat for Raspberry Pi* 的地址。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

<br></br>

:::noteChange 注意：

由于 ST32 系列芯片全球缺货，价格上涨数倍且没有明确的交货日期。我们别无选择，只能切换到 MM32 芯片。具体替换型号如下：STM32F030F4P6TR 被 MM32F031F6P6 替换。芯片替换后，产品功能、特性、使用方法和代码保持不变。需要注意的是固件版本已更改，出厂固件已根据不同芯片进行调整。如果您需要重新烧录固件，请下载与芯片对应的固件。
:::

## 资源

- **[Zip]** [Grove Base Hat for Raspberry Pi Eagle 文件](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip)

- **[Zip]** [Seeed Grove.py 库](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [STM32F030F4P6TR-固件](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[Zip]** [MM32F031F6P6-固件](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_firmware.zip)

- **[PDF]** [STM32 数据手册](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6_数据手册.pdf](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_Datasheet.pdf)

## 项目

这是本产品的介绍视频。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
