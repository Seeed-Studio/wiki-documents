---
description: ReSpeaker 2 Mics Pi HAT
title: ReSpeaker 2 Mics Pi HAT
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg
slug: /cn/ReSpeaker_2_Mics_Pi_HAT
last_update:
  date: 09/05/2023
  author: Matthew
---

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/2mics-zero-high-res.jpg?raw=true)

英文 wiki 页面：https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/

ReSpeaker 2-Mics Pi HAT是专为AI和语音应用设计的Raspberry Pi双麦克风扩展板。 这意味着您可以构建一个集成Amazona语音服务等的功能更强大，更灵活的语音产品。

该板是基于WM8960开发的低功耗立体声编解码器。 电路板两侧有两个麦克风采集声音，还提供3个APA102 RGB LED，1个用户按钮和2个板载Grove接口，用于扩展应用程序。 此外，3.5mm音频插孔或JST 2.0扬声器输出均可用于音频输出。

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a230r.1.14.14.626377d6xcV1p7&id=553438198956&ns=1&abbucket=5#detail)

!!!Note
      在参考中文wiki的过程中，如果遇到一些疑问，您可以点击页面右上角切换到英文wiki参考，两者有补充。

## 产品特征

* Raspberry Pi兼容（支持Raspberry Pi Zero和Zero W，Raspberry Pi B +，Raspberry Pi 2 B和Raspberry Pi 3 B，Raspberry Pi 4 B，Raspberry Pi 3 B +）
* 2个麦克风
* 2个Grove接口
* 1个自定义按钮
* 3.5mm音频接口
* JST2.0音频输出接口

## 创意应用

* 声音交互应用
* AI助手

## 硬件概述

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/mic_hatv1.0.png?raw=true)

- 按钮：连接到GPIO17的用户自定义按钮
- MIC_L＆MIC_R：左边右边各有一个麦克风
- RGB LED：3个APA102 RGB LED，连接到树莓派的SPI接口
- WM8960：低功耗立体声编解码器
- Raspberry Pi 40针头：支持Raspberry Pi Zero，Raspberry Pi 1 B +，Raspberry Pi 2 B和Raspberry Pi 3 B
- POWER：用于为ReSpeaker 2-Mics Pi HAT供电的Micro USB端口，请在使用扬声器时为电路板供电，以提供足够的电流。
- I2C：Grove I2C端口，连接到I2C-1
- GPIO12：Grove数字端口，连接到GPIO12和GPIO13
- JST 2.0 SPEAKER OUT：用于连接扬声器，JST 2.0连接器
- 3.5mm音频插孔：用于连接带3.5mm音频插头的耳机或扬声器

## 入门指导

### 1. 系统配置与驱动安装

**step 1. 把ReSpeaker 2-Mics Pi HAT插入到Raspberry Pi**

把 ReSpeaker 2-Mics Pi HAT 插入到 Raspberry Pi, 确保插入Raspberry Pi的时候针脚对齐。

!!!Note

    不要在上电的时候，热插拔ReSpeaker 2-Mics Pi HAT.

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/connection1.jpg?raw=true)
![connection picture2](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/connection2.jpg?raw=true)
![connection picture3](https://github.com/yexiaobo-seeedstudio/MIC_HATv1.0_for_raspberrypi/blob/master/img/stack-on-zero.jpg?raw=true)

**step 2. 烧录系统，登陆，换源**

因为当前的Pi内核目前不支持wm8960编解码器，所以我们需要手动构建。

  1. 确保您正在您的Pi上运行[最新的Raspbian操作系统（debian 9）](https://www.raspberrypi.org/downloads/raspbian/)，您可以用etcher进行系统烧录

  2.  您可以用 [VNC](https://www.raspberrypi.org/documentation/remote-access/vnc/)或者PUTTY连接树莓派，但之前请配置好wifi

  3. 在安装驱动之前，请根据以下流程切换源到清华。


```
sudo nano /etc/apt/sources.list
```

如果是用#注释掉原文件内容，用以下内容取代：

```
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib
```

!!!Note

    如果是2019-06-20之前版本 需要将`buster`修改为`Stretch`可以通过`cat /etc/rpi-issue`查看是什么时候发布的版本 

**step 3. 驱动下载并安装**
运行下面命令

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard #下载声卡驱动
sudo ./install.sh  --compat-kernel #安装声卡驱动
reboot  #重启
```

!!!Note

    若驱动安装失败您可以跳转到FAQ的Q1以解决驱动安装失败问题。

**step 4. 检查声卡名称是否与源代码seeed-voicecard相匹配.**

```
pi@raspberrypi:~/seeed-voicecard $ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: ALSA [bcm2835 ALSA], device 0: bcm2835 ALSA [bcm2835 ALSA]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 0: ALSA [bcm2835 ALSA], device 1: bcm2835 ALSA [bcm2835 IEC958/HDMI]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

pi@raspberrypi:~/seeed-voicecard $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
pi@raspberrypi:~/seeed-voicecard $
```

### 2. 录音播放测试

  **step 1. 录播测试**
 可以用`arecord`录制，然后用`aplay`播放：(不要忘记插耳机或者喇叭):

```
arecord -f cd -Dhw:1 | aplay -Dhw:1
```

也可以通过audacity软件测试。打开Audacity后，选择 **AC108和2通道** 作为输入，**bcm2835 alsa: - (hw：0，0)** 作为输出来测试：

```
$ sudo apt update
$ sudo apt install audacity
$ audacity                      // 运行 audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png?raw=true)

**step 2. 调节音量（可跳过）**

**alsamixer** 是用于配置声音设置和调整音量，高级Linux声音体系结构（ALSA）的图形混音器程序。

```bash
alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png?raw=true)

!!!Note

    首先请用F6选择seeed-2mic的声卡设备。

左和右箭头键用于选择通道或设备，“向上和向下箭头”控制当前所选设备的音量。 退出程序使用ALT + Q或按Esc键。 [More information](https://en.wikipedia.org/wiki/Alsamixer)


## 控制APA102 LED的示例

每个板载APA102 LED都有一个额外的驱动芯片，驱动芯片设置LED的颜色，然后保持该颜色，直到接收到新的命令。

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.gif?raw=true)

  请在执行之前打开SPI，具体步骤如下:

    - 输入： `sudo raspi-config`;
    - 选择 "Interfacing Options";
    - 选择 "SPI";
    - 选择 “Yes”  
    - 选择 “OK”
    - 选择 “Finish”

  配置完后，可以执行下列命令行来运行led示例  
```
cd ~/
git clone https://github.com/respeaker/mic_hat.git
sudo pip install spidev #安装spi的驱动
cd mic_hat
python pixels.py
```

## 如何使用用户自定义按钮

板子上面有个用户自定义按钮，连接到GPIO17. 我们可以调用python和RPi.GPIO来读取状态。

```
sudo pip install rpi.gpio    // install RPi.GPIO library
nano button.py               // copy the following code in button.py
```

```python
import RPi.GPIO as GPIO
import time

BUTTON = 17

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON, GPIO.IN)

while True:
    state = GPIO.input(BUTTON)
    if state:
        print("off")
    else:
        print("on")
    time.sleep(1)
```

Save the code as button.py, then run it. It should display "on" when you press the button:

```bash

python button.py
off
off
on
on
off

```



## FAQ(疑问解答)


**Q1:严格按照本 wiki 操作，驱动还是安装失败，怎么办？**

A1:如果按照上述方法安装驱动均失败，请点击下载下面镜像(不适用4带)

[2018-08-06-raspbian-4GB-for-respeaker](https://v2.fangcloud.com/share/7395fd138a1cab496fd4792fe5?folder_id=188000207913)

![](https://files.seeedstudio.com/wiki/2mics_hat/img/image_select.JPG)

请执行下面的步骤：

- 第一， 如果要使用交互功能之前请命令行输入alexa-auth或dueros-auth申请授权，授权成功后会在 /home/pi目录下生成.avs.json文件，这时才能使用交互功能。

- 第二，/home/pi目录下会有 respeaker的例程文件夹,可以根据用的mic不同而使用相应的例程。但是请烧录系统后在respeaker目录下更新下例程，可以在respeaker目录下执行``` git pull origin master ```命令来更新。

**Q2: #include "portaudio.h" Error when run "sudo pip install pyaudio".**

A2: 命令行输入如下命令

```
sudo apt-get install portaudio19-dev
```


**Q3 关于安装snowboy时出现不适合该平台的警告提醒**

A3: 目前snowboy只能兼容python2，所以通过在安装python的虚拟环境时，请确保是python2

**Q4 有时候 sudo python file.py 时候会出现依赖问题**

A4:测试时发现sudo执行时候默认从系统环境执行，而wiki中用到的依赖都是装在~/env 下的，可以通过 ```sudo  ~/env/bin/python file.py```来解决


**Q5 可以通过3.5毫米音频插孔的播放来听到声音，但是在运行ns_kws_doa_alexa_with_light.py时听不到声音**

 A5： 我们有3个播放器（mpv，mpg123和gstreamer）可以使用。 mpg123更适合语音识别和唤醒更，它更具响应性； 而AudioPlayer 更适用gstreamer> mpv> mpg123。 Gstreamer支持更多音频格式，并且在raspberry pi上运行良好。 我们还可以使用环境变量PLAYER指定AudioPlayer的播放器。 所以请尝试以下命令启用语音。
```

  sudo apt install mpg123
  PLAYER=mpg123 python ns_kws_doa_alexa_with_light.py

```

**Q6 在运行语音交互时候喊 snowboy 没反应**

A6:请运行audacity以确保4个频道良好。 如果有一个没有数据的频道，当我们说snowboy时就没有回复。

## 资源下载
- **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
- **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
- **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
- **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
