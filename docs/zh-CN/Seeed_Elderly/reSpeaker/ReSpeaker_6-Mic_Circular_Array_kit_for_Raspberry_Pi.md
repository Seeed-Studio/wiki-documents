---
description: ReSpeaker 6-Mic 圆形阵列套件
title: ReSpeaker 6-Mic 圆形阵列套件
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi
date: 2/1/2023
author: H
sku: 107990055
---
<!-- ---
name: ReSpeaker 6-Mic 圆形阵列套件
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker 6-Mic 圆形阵列套件
prodimagename: cover.JPG
surveyurl:  
sku: 107990055
--- -->

![enter image description here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/IMG_6051.jpg)

英文 wiki 链接 ：[https://wiki.seeedstudio.com/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi](https://wiki.seeedstudio.com/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi)

基于Raspberry Pi的ReSpeaker 6-Mic圆形阵列套件是一款适用于AI和语音应用的Raspberry Pi的四通道麦克风扩展板。这意味着您可以借助它构建一个集成Amazon Alexa语音服务，Google助手等，功能更强大，更灵活的语音产品。

ReSpeaker 6-Mic圆形阵列包含两个板子：一个是适配板，另一个是6mic阵列。

ReSpeaker 6-Mic圆形阵列支持在Raspian系统下八通道输入输出。其中，前六个麦克风输入通道录音，其余2个输入通道是回采通道；输出通道中前2播放输出通道，其余6输出通道是虚拟的。

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://seeedstudio.taobao.com/search.htm?q=respeaker&s_from=newHeader&ssid=s5-e&search_type=item&sourceId=tb.item)

## 产品特性

- Raspberry Pi兼容（支持Raspberry Pi Zero和Zero W，Raspberry Pi B +，Raspberry Pi 2 B和Raspberry Pi 3 B，Raspberry Pi 4 B，Raspberry Pi 3 B +）
- 2个ADC 芯片和一个 DAC芯片
- 8输入8输出通道
- 六麦克阵列
- 支持Grove接口
- 与树莓派40针接口兼容
- 耳机和扬声器输出

## 规格说明

- 2 x X-Power AC108 ADC
- 6 x高性能贴片模拟麦克
- 1 x X-Power AC101 DAC
- 输出接口:
  - 3.5mm headset audio jack
  - 扬声器接口
- 与树莓派40pin接口兼容
- 麦克风: Knowles SPU0414HR5HSB
- 灵敏度: -22 dBFS (Omnidirectional)
- SNR: 59 dB

## 创意应用

- 智能语音交互
- 智能语音助手
- 录音
- 语音会议系统
- 会议通信设备
- 语音控制机器人
- 汽车语音助手
- 其他需要语音指令的设计

## 硬件概述

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

:::note
接好后，一定要先使用万用表确定电路的导通是不是按照上图指示的那样
:::

## 安装图示  

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>

## 入门指导

### 1. 准备工作

**准备材料**

ReSpeaker 6-Mic 线性麦克阵列    x1

[Raspberry Pi 3B or 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

耳机或Speaker               x1

:::tips
实时上该套件支持 Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B ,Raspberry Pi 3 model B+和Raspberry Pi 4, 在这个wiki中我们用的是Raspberry Pi 3 B
:::

**连接**

**Step 1.**  将 *ReSpeaker 适配板* 与 *ReSpeaker 4-Mic 线性阵列* 通过带线连接

**Step 2.**  将 *ReSpeaker 适配板* 插在 *树莓派* 上

**Step 3.** 将 *耳机* 插在 *3.5mm 耳机孔*上 或者 *扬声器* 插在*JST 2.0 speaker jack*上

**Step 4.**  将 *树莓派*与 *PC* 通过micro-USB线连接

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)

### 2. 软件

**准备工作**

*方法A 通过[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)由SSH协议登陆*

通过 Putty 或其他 ssh 工具 来登陆你的树莓派，在开始之前，请确保:

1- 打开树莓派中的 *ssh* 功能，让其能够通过 *putty* 登陆. 如果不知道如何打开 *ssh* 功能, 请去百度或者谷歌一下.

2- 你的树莓派和PC机在同一子网下链接.若不知如何配置wifi，请去百度或者谷歌一下。

3- 查看你的树莓派的IP地址，如果不知道如何操作，请参考[raspberry offical documentation](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- 在PC机端选择SSH登陆，将莓派的地址输入后打开终端

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

进入终端后请输入用户名和密码，分别是‘pi’和‘raspberry’

```
login as: pi
pi@192.168.43.210's password:raspberry

```

此时，登陆树莓派成功，可以通过终端输入命令控制树莓派

*方法B，通过VNC软件由SSH协议登陆树莓派*

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

该方法与方法A不同之处在于可以图形化控制你的树莓派，由于要使这个套件可以与alexa或者dueros一起工作， 需要打开网页来取得授权，所以必须得用图形化界面登陆，这里推荐你用 *VNC Viewer* 来登录树莓派，也是通过SSH协议登陆 ,需要注意的是，在烧录官方镜像后需要先通过方法C来通过图形化界面开启SSH和VNC，之后才能用VNC登陆树莓派。

*方法 C，直接插上外设来控制树莓派*

如果觉得以上步骤太繁杂，你也可以直接将显示器插在HDMI接口，将鼠标键盘插在USB接口来控制树莓派，更为简单

### 3. 系统配置与驱动安装

**step 1. 烧录系统，登陆，换源**

因为当前的Pi内核目前不支持wm8960编解码器，所以我们需要手动构建。

  1. 确保您正在您的Pi上运行[最新的Raspbian操作系统（debian 9）](https://www.raspberrypi.org/downloads/raspbian/)，您可以用etcher进行系统烧录

  2. 您可以用 [VNC](https://www.raspberrypi.org/documentation/remote-access/vnc/)或者PUTTY连接树莓派，但之前请配置好wifi

  3. 在安装驱动之前，请根据以下流程切换源到清华。

```
sudo nano /etc/apt/sources.list
```

如果是用#注释掉原文件内容，用以下内容取代：

```
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib
```

:::note
如果是2019-06-20之前版本 需要将`buster`修改为`Stretch`可以通过`cat /etc/rpi-issue`查看是什么时候发布的版本
:::

**step 2. 驱动下载并安装**
运行下面命令

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard #下载声卡驱动
sudo ./install.sh  --compat-kernel #安装声卡驱动
reboot  #重启
```

**step 3. 检查声卡名称是否与源代码seeed-voicecard相匹配.**

输入以下命令来查看声卡

```
pi@raspberrypi:~ $ arecord -L
```

如果正常，应该是显示以下内容:

```
null
    Discard all samples (playback) or generate zero samples (capture)
default
playback
dmixed
ac108
multiapps
ac101
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard,
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Hardware device with all software conversions

```

使用下面的命令来检查声卡.

```
pi@raspberrypi:~ $ aplay -L
```

应该如下所示:

```
null
    Discard all samples (playback) or generate zero samples (capture)
default
playback
dmixed
ac108
multiapps
ac101
sysdefault:CARD=ALSA
    bcm2835 ALSA, bcm2835 ALSA
    Default Audio Device
dmix:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample mixing device
dmix:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample mixing device
dsnoop:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample snooping device
dsnoop:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample snooping device
hw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct hardware device without any conversions
hw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct hardware device without any conversions
plughw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Hardware device with all software conversions
plughw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Hardware device with all software conversions
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard,
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard,
    Hardware device with all software conversions

```

### 4. 录音播放测试

你可以先录音在播放，或者一边录音一边播放

```
#It will capture sound on AC108 and save as a.wav
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
#Take care of that the captured mic audio is on the first 6 channels

#It will play sound file a.wav on AC101
aplay -D ac101 a.wav
#Do not use -D plughw:1,0 directly except your wave file is single channel only.

#Doing capture && playback the same time
arecord -D hw:1,0 -f S32_LE -r 16000 -c 8 to_be_record.wav &
#mono_to_play.wav is a mono channel wave file to play
aplay -D plughw:1,0 -r 16000 mono_to_play.wav

```

:::note
限制开发人员使用6-Mic圆形阵列套件（或6-Mic圆形阵列套件）同时进行捕获和回放:

-1. 捕获必须首先开始，否则捕获通道可能是无序的.

-2. 播放输出通道必须填充8个相同的通道数据或4个相同的立体声通道数据，否则扬声器或耳机将无法输出任何内容。

-3. 如果要同时播放和录制，aplay音乐文件必须是单声道，否则您无法使用此命令播放。
:::

您也可以使用Audacity进行播放和录制。

:::tips
你可以通过图形界面手动点击打开audacity或者通过命令行打开
:::

```
sudo apt update
sudo apt install audacity
audacity                      // run audacity

```

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

### 5. 安装python和虚拟环境

  这样是是为了隔离SDK与系统Python包关系。

```

pi@raspberrypi:~ $ cd /home/pi
pi@raspberrypi:~ $ git clone https://github.com/respeaker/4mics_hat.git
pi@raspberrypi:~ $ cd /home/pi/4mics_hat
pi@raspberrypi:~/4mics_hat $ sudo apt install python-virtualenv          # 安装 python2 虚拟环境工具
pi@raspberrypi:~/4mics_hat $ virtualenv --system-site-packages ~/env     # 建立虚拟环境，命名位env,放在~目录下
pi@raspberrypi:~/4mics_hat $ source ~/env/bin/activate                   # 激活虚拟环境
(env) pi@raspberrypi:~/4mics_hat $ pip install spidev gpiozero           # 安装需要的工具包
```

### 6. LED测试

阵列板上有12个RGB LED，你可以自己配置他们，让我们看看如何点亮他们吧

```
git clone --depth 1 https://github.com/respeaker/pixel_ring.git
cd pixel_ring
pip install -U -e .
python examples/respeaker_4mic_array.py

```

你将会看到灯被点亮，并且运动起来。你可以参考 `python examples/respeaker_4mic_array.py` 文件来设计自己想要的花样

## FAQ(疑问解答)

**Q1:严格按照本 wiki 操作，驱动还是安装失败，怎么办？**

A1:如果按照上述方法安装驱动均失败，请点击下面固件安装

[我是固件](https://v2.fangcloud.com/share/7395fd138a1cab496fd4792fe5?folder_id=188000207913)

需要以下几点需要注意，第一，lite版本是没有图形界面的精简版,建议您安装有图形界面的。第二，烧了固件后，记得换源。第三， 如果要使用交互功能之前请命令行输入alexa-auth或dueros-auth申请授权，授权成功后会在/home/pi目录下生成.avs.json文件，这时才能使用交互功能。第四，/home/pi目录下会有 respeaker的例程文件夹,可以根据用的mic不同而使用相应的例程。但是请烧录系统后在respeaker目录下更新下例程，可以在respeaker目录下执行``` git pull origin master ```命令来更新。

**Q2 驱动安装后无法识别到声卡**

A2: 打开 Preferences --> raspberry Pi config 中的 1-wire 设置成disable

**Q3: 只有6个mic，怎么会有8个通道?**

A3: 该套件集成了2个 AC108在阵列上, 每个 AC108 有4个输出通道. 所以一共有8个输出通道。其中有6个是mic的 ,两个是回采的。

## 资源下载

- **[PDF]** [AC101 Datasheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 Datesheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)

## 技术支持

如果有其他技术问题，请发邮件到 techsupport@seeed.cc 或者请到我们的论坛里去参与讨论 [forum](http://forum.seeedstudio.com/).
