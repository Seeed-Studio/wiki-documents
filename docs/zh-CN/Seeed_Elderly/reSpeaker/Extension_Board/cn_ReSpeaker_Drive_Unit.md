---
description: ReSpeaker 驱动单元
title: ReSpeaker 驱动单元
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_Drive_Unit
last_update:
  date: 1/12/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/Meow_King_Drive_Unit.jpg)

ReSpeaker 驱动单元专为 ReSpeaker Core 设计，作为独立的扬声器驱动单元。

使用这个驱动单元，您可以构建自己的智能音箱，支持 Amazon Alexa 语音服务或其他语音服务。此外，它还支持 Airplay，这意味着您可以通过智能手机、PC 和 Mac 串流音乐。当然，播放本地音乐也是可能的。

ReSpeaker Core 包含强大的扩展能力，我们希望它能帮助您轻松地在原型/产品中启用语音功能。

## 特性

- 包含可充电电池
- 触摸按钮
- 支持 Airplay
- 阻抗为 4Ω，额定功率为 5W
- ReSpeaker Core 上的指示 LED

## 规格

- 额定功率：5W
- 阻抗：4Ω
- 信噪比：≥ 75dBA
- 灵敏度：550 ± 50mV
- 失真度：≤ 0.5%
- 频率响应：85Hz - 20kHz
- 电源：通过 USB 5V 或通过 3.7V，1500mAh 电池
- 扬声器直径：40mm

## 开箱指南

### 准备 ReSpeaker Core

要驱动 Meow King 驱动单元，需要更新 ReSpeaker Core 的固件。要了解原始库存固件与此固件之间的差异，请参考[这里](https://onedrive.live.com/?authkey=%21AKD3ZD6g0DE2M9E&cid=5219529519B9B6A1&id=5219529519B9B6A1%21720&parId=5219529519B9B6A1%21721&o=OneUp)的更改日志。

现在让我们更新固件。首先，从 [OneDrive](https://1drv.ms/f/s!AqG2uRmVUhlShUyg92Q-oNAxNjPR) 下载 `ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin`。将固件复制到 SD 卡，然后将 SD 卡插入 ReSpeaker Core。按照[这里的说明](https://wiki.seeedstudio.com/cn/ReSpeaker_Core/#2-connect-to-serial-console)获取串行控制台。请注意，要使 USB 串行工作，如果我们已经更改了 Arduino 芯片（ATMega32U4）的固件，我们需要恢复[默认固件](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/res/respeaker_arduino_library/examples/pixels_pattern/pixels_pattern.ino)。获得 USB 串行后，输入以下命令来更新固件：

```shell
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin
```

系统镜像写入后，ReSpeaker Core 将重新启动。

### 组装

将您的 ReSpeaker Core 插入 Meow King 驱动单元，如下图所示。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_1.jpg" /></div>

按住电源标志超过 5 秒，驱动单元将开机，ReSpeaker Core 板也会开机。

:::note
电源控制电路在驱动单元中，即使您拔下 ReSpeaker Core，按住电源标志超过 5 秒仍会开启驱动单元。
:::

要关闭整个设备，请再次按住电源标志超过 5 秒。

当设备开机时，ReSpeaker Core 将进入启动过程。LED 环将亮起红色 1 秒，表示 ReSpeaker Core 正在启动。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_2.jpg" /></div>

现在等待几秒钟，找到您的智能手机，准备将音乐串流到 Meow King 驱动单元。

### 串流您的音乐

#### 对于 iOS

1. 在您的 iOS 设备和 ReSpeaker 上连接到同一个 Wi-Fi 网络。
2. 在您的 iOS 设备上，从屏幕底部向上滑动以打开控制中心。
3. 在控制中心中，水平滑动找到正在播放屏幕。
4. 选择 ReSpeaker，如下图所示：

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/airplay.png" /></div>

5. 将您的耳机/扬声器连接到 respeaker，然后您就可以享受音乐了。

#### 对于 Android

1. 将您的智能手机连接到 **ReSpeaker 的 Wi-Fi**。
2. 在您的智能手机上，打开 AirPlay 客户端软件，例如：*AllConnect*。
3. 选择 ReSpeaker，如下图所示：

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/dlna.png" width="50%" height="50%" />
</div>

4. 将您的耳机/扬声器连接到 respeaker，然后您就可以享受音乐了。

:::note
一个额外的提示是，如果播放后听不到声音，请尝试调高播放器应用程序的音量。
:::

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