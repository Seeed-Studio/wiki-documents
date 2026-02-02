---
description: 树莓派入门指南
title: 树莓派入门指南
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /cn/respeaker_2_mics_pi_hat_raspberry_v2
last_update:
  date: 04/18/2025
  author: Jiahao
---

:::caution
本wiki是为ReSpeaker 2-Mics Pi HAT **v2**编写的，要区分v1和v2设备，请参考[如何区分ReSpeaker 2-Mics Pi HAT硬件版本](/cn/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions)。
:::

在最新的树莓派操作系统上，传统的驱动安装方法（适用于v1设备）不再可用，可能会导致以下已知问题：

- 安装后桌面环境可能会损坏。
- ReSpeaker设备可能无法被`aplay` / `arecord`检测到。

因此，我们针对这个问题重新发布了新的wiki，如果您使用的是更现代的树莓派操作系统而不是之前的版本，请按照以下步骤让您的ReSpeaker正常工作。

## 驱动安装和配置

### 1. 将ReSpeaker 2-Mics Pi HAT连接到树莓派

将ReSpeaker 2-Mics Pi HAT安装到您的树莓派上，确保在堆叠ReSpeaker 2-Mics Pi HAT时引脚正确对齐。

树莓派连接

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

树莓派Zero连接

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

### 2. 在树莓派上设置驱动

确保您在Pi上运行[最新的树莓派操作系统](https://www.raspberrypi.com/software/operating-systems/)。*(更新于2024.11.19)*
<details>
<summary style={{ color: 'red' }}>为树莓派Zero W做准备</summary>

```sh
## 安装内核
sudo apt install flex bison libssl-dev bc build-essential libncurses5-dev libncursesw5-dev linux-headers-6.6.51+rpt-rpi-v6
git clone --depth=1 --branch rpi-6.6.y https://github.com/raspberrypi/linux.git

## 创建目标目录
mkdir ~/tlv320aic3x_i2c_driver
cd ~/tlv320aic3x_i2c_driver
## 复制代码
cp ~/linux/sound/soc/codecs/tlv320aic3x.c ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x.h ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x-i2c.c ~/tlv320aic3x_i2c_driver/
## 修改Makefile
nano Makefile
-------------------
obj-m += snd-soc-tlv320aic3x-i2c.o
snd-soc-tlv320aic3x-i2c-objs := tlv320aic3x.o tlv320aic3x-i2c.o

KDIR := /lib/modules/$(shell uname -r)/build
PWD := $(shell pwd)

all:
        $(MAKE) -C $(KDIR) M=$(PWD) modules

clean:
        $(MAKE) -C $(KDIR) M=$(PWD) clean

install:
        sudo cp snd-soc-tlv320aic3x-i2c.ko /lib/modules/$(shell uname -r)/kernel/sound/soc/codecs/
        sudo depmod -a

-------------------

## 编译驱动
make
sudo make install
sudo modprobe snd-soc-tlv320aic3x-i2c

## 检查日志
lsmod | grep tlv320
dmesg | grep tlv320

```
</details>


- 步骤1：获取ReSpeaker 2-Mics Pi HAT (V2.0)的设备树源文件(DTS)，编译并安装设备树覆盖。

```bash
curl https://raw.githubusercontent.com/Seeed-Studio/seeed-linux-dtoverlays/refs/heads/master/overlays/rpi/respeaker-2mic-v2_0-overlay.dts -o respeaker-2mic-v2_0-overlay.dts
dtc -I dts respeaker-2mic-v2_0-overlay.dts -o respeaker-2mic-v2_0-overlay.dtbo
sudo dtoverlay respeaker-2mic-v2_0-overlay.dtbo
sudo cp respeaker-2mic-v2_0-overlay.dtbo /boot/firmware/overlays
```

- 步骤2：编辑`/boot/firmware/config.txt`并添加以下行：

```
dtoverlay=respeaker-2mic-v2_0-overlay
dtoverlay=i2s-mmap
```

> **注意：** 如果您的内核版本大于4.0，则不需要添加`dtoverlay=i2s-mmap`。


![config example](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/dtoverlays.png)

- 步骤3：重启您的Pi。

```bash
sudo reboot
```

- 步骤4：检查设备是否被`aplay` / `arecord`检测到。

`aplay`的预期输出应该是：

```
$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

`arecord`的预期输出应该是：

```
$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

**其中`card 2`是ReSpeaker 2-Mics Pi HAT的索引，根据您的系统，这个数字可能会有所不同。要在此示例中访问ReSpeaker，您可以使用`arecord -D plughw:2,0`或`aplay -D plughw:2,0`。**

### 3. 配置声音设置并使用alsamixer调整音量

`alsamixer`是高级Linux声音架构(ALSA)的终端用户界面混音器程序，用于配置声音设置和调整音量。

```bash
alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

左右箭头键用于选择通道或设备，上下箭头控制当前选定设备的音量。使用ALT+Q退出程序，或按Esc键。[更多信息](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    请先使用F6选择seeed-2mic-voicecard设备。
:::

## 使用概述

要开始使用，请将 [https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) 仓库克隆到您的树莓派上。

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

下面示例中提到的所有 Python 脚本都可以在此仓库中找到。要安装必要的依赖项，请从 mic_hat 仓库文件夹运行

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### APA102 LED

要使用 LED，您需要首先启用 SPI 接口。要启用 SPI 接口，请打开树莓派软件配置工具：

```bash
sudo raspi-config
```

选择 "3 Interface Options" -> "I4 SPI" 来启用 SPI 接口。然后重启您的树莓派。

```bash
sudo reboot
```

每个板载 APA102 LED 都有一个额外的驱动芯片。驱动芯片负责通过其输入线接收所需的颜色，然后保持这个颜色直到收到新的命令。

```bash
cd mic_hat
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload> 
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
</video>

### 用户按钮

有一个板载用户按钮，连接到 GPIO_17。

:::caution
    由于 `RPI.GPIO` 不兼容，仓库中的演示代码不适用于树莓派 5。但我们为树莓派 5 提供了使用 `gpiozero` 库的替代演示代码。
:::

#### 非树莓派 5 设备

执行您在步骤 4 中克隆的仓库中的示例脚本，当您按下按钮时应该显示 "on"：

```txt
$ python3 button.py
off
off
on
on
off
```

#### 树莓派 5 设备

复制以下代码并保存为 `~/button.py`：

```python
from gpiozero import DigitalInputDevice
from time import sleep

def main():
    pin = DigitalInputDevice(pin=17, pull_up=True)
    try:
        while True:
            print("on" if pin.value == 1 else "off")
            sleep(1)
    finally:
        pin.close()

if __name__ == '__main__':
    main()
```

当您按下按钮时也应该显示 "on"：

```bash
$ python3 ~/button.py
off
on
on
off
on
off
```

:::note
它在虚拟环境中不工作，您需要先退出：
```bash
deactivate
python3 ~/button.py
```
:::

### 使用 Python 录制声音

我们使用 [PyAudio python 库](https://people.csail.mit.edu/hubert/pyaudio/) 来用 Python 录制声音。

首先，运行以下脚本来获取 ReSpeaker 的设备索引号：

```bash
cd mic_hit
python3 recording_examples/get_device_index.py
```

您将看到如下所示的设备 ID。

```bash
Input Device id  1  -  seeed2micvoicec: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 (hw:2,0)
```

要录制声音，请使用 `nano`、`vim` 或其他文本编辑器打开 ```recording_examples/record.py``` 文件，并将 `RESPEAKER_INDEX = 2` 更改为您系统上 ReSpeaker 的索引号。然后运行 python 脚本 `record.py` 进行录制：

```bash
python3 recording_examples/record.py
```

如果您想从 2 个通道中提取通道 0 的数据，请查看 ```record_one_channel.py``` 的内容。对于其他通道 X，请将 [0::2] 更改为 [X::2]。

```bash
python3 recording_examples/record_one_channel.py
```

要播放录制的样本，您可以使用 aplay 系统实用程序，例如

```bash
aplay -f cd -D hw:2,0 output.wav # 用于立体声
aplay -D plughw:2,0 output_one_channel.wav #用于单通道的单声道
```

或者您可以使用 recording_examples/play.py 脚本来用 PyAudio 播放 .wav 文件。

```bash
python3 recording_examples/play.py path-to-wav-file
```

确保在 play.py 中指定正确的输出设备索引 - 否则 PyAudio 会冻结！

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