---
description: ReSpeaker Core
title: reSpeaker Core
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_Core
sku: 102010088
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core.jpg)

ReSpeaker 是一个开放的模块化语音接口，用来随心所欲地改造你周围的事物。它可以让你通过语音与家用电器、植物、办公室、联网设备或你日常生活中的任何其他事物进行交互。

- **它是你周围环境的语音扩展设备**

  ReSpeaker 同时支持在线认知服务和离线轻量级语音识别引擎。你可以把 ReSpeaker 加到你周围的事物上，让它们变得智能（更智能）。

- **它是一款音乐流媒体设备**

  语音接口从未脱离过音乐娱乐，ReSpeaker 也是如此。ReSpeaker 支持 Airplay/DLNA 无线音乐流媒体。只需用 AUX 线将 ReSpeaker 连接到任意普通音箱，你就可以在不按任何按钮的情况下开始享受你喜爱的音乐。

- **它是孩子的学习工具**

  除了板载运行基于 Linux 的 OpenWrt 的 MT7688 Wi-Fi 模块之外，ReSpeaker 还由 ATmega32u4 芯片驱动，并且完全兼容 Arduino，这意味着我们可以把 ReSpeaker 当作一块强大的 Arduino 开发板来使用，做许多 “Arduino” 项目。它可以用于学习、用于实践，也可以用于娱乐。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-Core-Based-On-MT7688-and-OpenWRT-p-2716.html)

## 特性

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_futures.jpg)

- 解放你的双手：支持有网或无网的语音识别
- 无线流媒体：通过 Airplay/DLNA 进行音乐流媒体播放
- 易用的 SDK：适用于 Python 和 C/C++ 开发者
- 持续增长的功能：下载并插入插件以丰富其特性和功能。
- 即插即用扩展板：可通过 Mic Array、Grove Extension Board、Grove Modules 进行扩展。
- 免安装 App：在基于 Web 的 App 上完成所有设置。（尚未开放）

## 规格参数

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_hardware%20overview.jpg)

**技术规格**

- AI7688 Wi-Fi 模块：

  - 操作系统：基于 GNU/Linux 的 OpenWrt
  - Wi-Fi 网络：支持 Legacy 802.11b/g 和 HT 802.11n 模式
  - 扩展：两个扩展排针，用于 I2C、GPIO 和 USB 2.0 host
  - 接口：内置 3.5mm AUX 端口、Micro USB 和 SD 卡槽

- ATMega32U4 协处理器：

  - 用于 Linux 控制台的 USB CDC 虚拟串口
  - 12 个可编程 RGB LED 指示灯
  - 8 个板载触摸传感器

- Codec WM8960：

  - DAC 信噪比 98dB（‘A’ 加权），THD -84dB，48kHz，3.3V  
  - ADC 信噪比 94dB（‘A’ 加权），THD -82dB，48kHz，3.3V  
  - 立体声 D 类扬声器驱动，效率 87%（1W 输出）  
  - 片上耳机驱动  
  - 在 3.3V、16Ω 负载下输出功率 40mW  
  - 在 20mW 输出时 THD -75dB，16Ω 负载下 SNR 90dB  
  - 片上 PLL 提供灵活的时钟方案  
  - 采样率：8、11.025、12、16、22.05、24、32、44.1、48 kHz

- 电源：5V DC  

- 尺寸：直径 70mm  

- 重量：17g

**引脚图**

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_pinmap.png)

- GPIO0/I2S_ADC：驱动外部编码器/解码器，ADC 信号
- GPIO1/I2S_DAC：驱动外部编码器/解码器，DAC 信号
- GPIO2/I2S_LRCLK：驱动外部编码器/解码器，左右声道采样时钟
- GPIO3/I2S_BCLK：驱动外部编码器/解码器，比特时钟
- MCLK_OUT：外部设备主时钟
- HP_SEL：耳机通道选择。如果使用 ReSpeaker Mic Array 输出音频，将 HP_SEL 置高
- HP_L：来自 ReSpeaker Mic Array 的模拟音频左声道
- HP_R：来自 ReSpeaker Mic Array 的模拟音频右声道
- AGND：音频模拟地

## 入门指南

---

### 第一次拿到 ReSpeaker Core 时我应该做什么

**1. 准备工作**

- ReSpeaker Core
- PC 或 Mac
- Wi-Fi 网络
- SD 卡

**2. 连接到串口控制台**

- 对于 Windows，推荐使用 [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)。

  - 通过 USB 将 ReSpeaker 连接到你的电脑，在 "Device Manager" 中查看 COM 端口。这里我的 ReSpeaker COM 端口是 COM31。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty1.png)

  - 在 Connection type 中选择 Serial。在 Serial line 字段中输入 ReSpeaker 对应的 COM 端口。在 Speed 字段中输入 57600。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty2.png)

  - 点击 Open。当你看到一个空白屏幕时，按下 Enter 键。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty3.png)

- 对于 Linux/Mac

  - 通过 USB 将 ReSpeaker 连接到你的电脑
  - 打开一个 Terminal 会话
  - 在 Terminal 中输入 ls /dev/tty.usb*。我们应该能看到一个设备列表。查找类似 tty.usbmodemXXXXX 的设备，其中 XXXXX 通常是一个随机标识符。这就是用于访问系统控制台的串口设备。然后使用 screen 工具连接到该串口，并将波特率设置为 57600。这是因为系统控制台的默认波特率是 57600。

```
$ ls /dev/tty.usb*
/dev/tty.usbmodem14221
$ screen /dev/tty.usbmodem14221 57600
```

**3. 设置 Wi-Fi**

ReSpeaker 默认设置为 Repeater Mode，在你享受基于互联网的语音识别之前，必须先将它连接到一个已有的无线网络。

当你第一次给 ReSpeaker 上电时，它会创建一个名为 "ReSpeakerXXXXXX" 的 Wi-Fi 网络。这里的 "XXXXXX" 是你的 ReSpeaker MAC 地址的后 6 位，标记在板子上。将你的电脑连接到这个网络。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi1.png)

:::note
如果没有出现 "ReSpeakerXXXXXX"，而是找到了 "LinkIt_Smart_7688_XXXXXX"。请点击[这里](https://wiki.seeedstudio.com/cn/ReSpeaker_Core/#q20-系统恢复-通过出厂镜像)。
:::

在你获取到 IP 地址后，打开一个网页浏览器，在地址栏中输入 192.168.100.1。几秒钟后，会出现一个网页，要求输入已有 Wi-Fi 网络的 ssid 和密码。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi2.png)

选择你希望连接的 Wi-Fi 并输入密码。当你按下 OK 按钮时，ReSpeaker 将加入指定的网络。

现在你的 ReSpeaker 已经可以访问互联网了。

此外，还有另一种通过命令行设置 Wi-Fi 的方式。
我们可以使用 wictl 扫描 Wi-Fi 并连接。

```
root@mylinkit:~# wictl
0, SEEED-MKT
1, Xiaomi_Youth
2, ChinaNet-Z5C4
3, STU-EE
4, EMBEST_WIFI
5, SEEED-MKT
6, nobody
7, SEEED-MKT
8, se.VPN
9, Moovent_HK_2G
10, LinkIt_Smart_7688_1D917A
11, SEEED-MKT
12, SEEED-MKT
13, zhongrixing
Please choose your wifi: 8
Please input the wifi password: 88888888
udhcpc (v1.23.2) started
Sending discover...
Sending discover...
Sending select for 192.168.199.153...
Lease of 192.168.199.153 obtained, lease time 43200
udhcpc: ifconfig apcli0 192.168.199.153 netmask 255.255.255.0 broadcast 192.168.199.255
udhcpc: setting default routers: 192.168.199.1
success
root@mylinkit:~#
```

:::note
如果你无法通过上述方法连接 Wifi，请通过输入 firstboot 命令进行出厂重置。
:::

在启用 Wifi 功能之后，我们可以使用 SSH 通过下面的命令连接 Respeaker。我们可以从
&lt;http://192.168.100.1/#!/overview&gt; 的 WAN IP 获取 Respeaker 的 IP 地址。密码为 root。

```
ssh root@ssh *.*.*.*

```

**4. 使用 SD 卡扩展存储**

在大多数情况下，嵌入式设备上可用的存储空间都非常有限（ReSpeaker 仅为用户保留了 5M 板载闪存）。为应用和数据提供更多存储可以扩展 ReSpeaker 的潜力，因此使用 SD 卡作为 **extroot** 来扩展存储是一个不错的选择。

通过使用 **extroot**，可以利用新增的存储设备来扩展根文件系统的存储容量。
在启动过程中，外部存储空间会被挂载为根文件系统，或者以覆盖的方式叠加在原始文件系统之上。

- 确保你的 SD 卡已经插入 ReSpeaker，并且可以通过 df -h 或 ls /dev 检测到 /dev/mmcblk0p1。

```
root@ReSpeaker:/# df -h
Filesystem                Size      Used Available Use% Mounted on
rootfs                    1.8M    832.0K    960.0K  46% /
/dev/root                29.0M     29.0M         0 100% /rom
tmpfs                    61.7M    276.0K     61.5M   0% /tmp
/dev/mtdblock6            1.8M    832.0K    960.0K  46% /overlay
overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
tmpfs                   512.0K         0    512.0K   0% /dev
/dev/mmcblk0p1            7.4G      2.5M      7.4G   0% /tmp/run/mountd/mmcblk0p1
```

- 将你的 SD 卡分成两个分区，一个为 FAT32，另一个为 EXT4。EXT4 文件系统将作为 extroot，而 FAT32 将作为普通存储设备，可在 ReSpeaker 与电脑之间传输文件。

```
 umount /dev/mmcblk0p1
 fdisk /dev/mmcblk0
  ------------------ fdisk ------------------------
 >Command (m for help):o
 >Created a new DOS disklabel
 >Command (m for help):n
 >Partition type
 p   primary (0 primary, 0 extended, 4 free)
 e   extended (container for logical partitions)
 >Select (default p):p
 >Partition number (1-4, default 1):1
 >First sector (2048-15523839, default 2048):
 >Last sector, +sectors or +size{K,M,G,T,P} (2048-15523839, default 15523839): +2G
 >Command (m for help):n
 >Partition type
 p   primary (1 primary, 0 extended, 3 free)
 e   extended (container for logical partitions)
 >Select (default p):p
 >Partition number (1-4, default 2):2
 >First sector (4196352-15523839, default 4196352):
 >Last sector, +sectors or +size{K,M,G,T,P} (4196352-15523839, default 15523839):
 >Command (m for help):w
 >The partition table has been altered.
 >Calling i[  292.010000]  mmcblk0: p1 p2
 >octl() to re-read partition table.
 >Syncing disks.
  ------------------ end ------------------------

 mkfs.fat /dev/mmcblk0p1
 mkfs.ext4 /dev/mmcblk0p2

 # reload mtk_sd kernel module
 rmmod mtk_sd
 insmod mtk_sd

```

- 准备你的外部存储根覆盖层（root overlay）。

```
mount /dev/mmcblk0p2 /mnt ; tar -C /overlay -cvf - . | tar -C /mnt -xf - ; umount /mnt
```

- 使用以下命令创建 fstab。该命令会创建一个 fstab 模板，启用所有分区，并将 `/mnt/mmcblk0p2` 分区设置为 `/overlay` 分区。

```
 block detect > /etc/config/fstab;
 sed -i s/option$'\t'enabled$'\t'\'0\'/option$'\t'enabled$'\t'\'1\'/ /etc/config/fstab;
 sed -i s#/mnt/mmcblk0p2#/overlay# /etc/config/fstab;
 cat /etc/config/fstab;
```

- 检查它是否可以挂载为 overlay。

```
 root@mylinkit:/# mount /dev/mmcblk0p2 /overlay/
 root@ReSpeaker:/# df -h
  Filesystem                Size      Used Available Use% Mounted on
  rootfs                    1.8M    832.0K    960.0K  46% /
  /dev/root                29.0M     29.0M         0 100% /rom
  tmpfs                    61.7M    276.0K     61.5M   0% /tmp
  /dev/mtdblock6            5.2G     11.8M      4.9G   0% /overlay
  overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
  tmpfs                   512.0K         0    512.0K   0% /dev
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /tmp/run/mountd/mmcblk0p2
  /dev/mmcblk0p1            2.0G      4.0K      2.0G   0% /tmp/run/mountd/mmcblk0p1
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /overlay
```

- 重启 ReSpeaker 并再次检查。如果 SD 卡被自动挂载，则表示完成。关于 **extroot** 的更多信息，请点击[这里](https://wiki.openwrt.org/doc/howto/extroot)。

**5. 在 ReSpeaker 上安装软件**

使用 SD 卡扩展存储后，就有足够的存储空间在 ReSpeaker 上安装软件。

安装 git

```
 opkg update
 opkg install git git-http
```

**6. 更新 Python 库**

```
git clone https://github.com/respeaker/respeaker_python_library.git
cd respeaker_python_library
python setup.py install
```

### 与语音交互的第一印象 - ReSpeaker，播放音乐

借助 Bing Speech API，ReSpeaker 可以实时开启并识别来自麦克风的音频，或者识别来自文件的音频。

要使用 Bing Speech API，首先你需要从[这里](https://www.microsoft.com/cognitive-services/en-us/speech-api)获取一个 Microsoft Cognitive Services 的密钥，并将其复制到 BING_KEY = '' 中，然后将以下代码保存为 playmusic.py 并运行它

```sh
# stop mopidy and alexa to avoid USB device occupation
/etc/init.d/mopidy stop
/etc/init.d/alexa stop
python playmusic.py
```

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/getbingapi.png)

```
import logging
import time
import os
from threading import Thread, Event
from respeaker import Microphone
from respeaker.bing_speech_api import BingSpeechAPI

# use madplay to play mp3 file     
os.system('madplay')               

# get a key from https://www.microsoft.com/cognitive-services/en-us/speech-api
BING_KEY = ''      


def task(quit_event):                                                         
    mic = Microphone(quit_event=quit_event)                                   
    bing = BingSpeechAPI(key=BING_KEY)                                        

    while not quit_event.is_set():
        if mic.wakeup('respeaker'):        
            print('Wake up')               
            data = mic.listen()            
            try:                      
                text = bing.recognize(data)
                if text:           
                    print('Recognized %s' % text)
                    if 'play music' in text:
                        print('I will play music!')
                        os.system('madplay Tchaikovsky_Concerto_No.1p.mp3')
            except Exception as e:               
                print(e.message)                 

def main():                                                              
    logging.basicConfig(level=logging.DEBUG)                                                           
    quit_event = Event()        
    thread = Thread(target=task, args=(quit_event,))
    thread.start()                          
    while True:                             
        try:                                
            time.sleep(1)                           
        except KeyboardInterrupt:                   
            print('Quit')                           
            quit_event.set()
            break        
    thread.join()                

if __name__ == '__main__':       
    main()                  
```

当出现 "INFO:mic:Start Detecting" 后，尝试说 "ReSpeaker" 来唤醒程序，然后说 "play music" 让它播放音乐。接着 ReSpeaker 会使用 **madplay** 工具播放当前路径下的 "Tchaikovsky_Concerto_No.1p.mp3"。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/bingplaymusic.png)

如果你看到下面的错误代码，说明 mopidy 在后台运行并占用了 USB 设备。请尝试运行 /etc/init.d/mopidy stop mopidy 然后再次运行你的命令。

```
root@ReSpeaker:~# python playmusic.py
Usage: madplay [OPTIONS] FILE [...]
Try `madplay --help' for more information.
Exception in thread Thread-2:
Traceback (most recent call last):
File "/usr/lib/python2.7/threading.py", line 810, in __bootstrap_inner
```

## 应用

---

### 水果钢琴

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano.PNG)

除了运行基于 Linux 的 OpenWrt 的板载 MT7688 Wi-FI 模块之外，ReSpeaker 还由 ATmega32u4 芯片驱动，并且完全兼容 Arduino，这意味着我们可以将 ReSpeaker 当作一块强大的 Arduino 开发板来使用，做许多“Arduino”项目。它适合学习、练习，也充满乐趣。

例如，你可以使用 Arduino IDE 对其进行编程，制作一个特别的 DIY 钢琴：用 8 个樱桃番茄连接到 ReSpeaker 的 8 个触摸传感器上。
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano2.PNG)

1. 在 ReSpeaker 上执行 git clone &lt;https://github.com/respeaker/piano.git&gt; 下载该仓库
2. 在你的电脑上下载 [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library)
3. 将 [piano.ino](https://github.com/respeaker/piano/blob/master/arduino/piano.ino) 上传到 ReSpeaker 的 Arduino Leonardo（ATmega32U4）
4. 在 ReSpeaker 的串口控制台上运行 python piano.py

### Weather Cloud

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/weathercloud.jpg)

Weather Cloud 是一个非常棒的 ReSpeaker 项目。这个很酷的作品将 ReSpeaker 变成一个 Weather Cloud，能够通过生动的灯光和声音向你展示天气情况。

在这个项目中，Openwrt 负责从互联网获取实时天气信息、进行语音交互和音频输出，而 Arduino 负责控制彩色 RGB LED。

1. 在 ReSpeaker 上执行 git clone &lt;https://github.com/jerryyip/WeatherCloud.git&gt; 下载该仓库
2. 在你的电脑上下载 [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library)
3. 将 ReSpeaker Arduino Library 中的 [pixels_pattern.ino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino) 上传到 ReSpeaker 的 Arduino
4. 从[这里](http://openweathermap.org/appid)获取 OpenWeatherMap appid，并将其复制到 main.py 中的 appID = ""，别忘了在 city="" 中添加你的城市
5. 在使用 SPI bridge 之前，在 OpenWrt 上停止 mopidy 服务
/etc/init.d/mopidy stop
6. 运行 python main.py，然后对 ReSpeaker 说 "ReSpeaker, what is the weather like?"。
7. 关于如何制作 Weather Cloud 的更多细节，请点击[这里](https://www.instructables.com/id/How-to-DIY-an-in-House-Weather-telling-Cloud/)。

## ReSpeaker Mic Array

---

### [ReSpeaker Mic Array](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html)

ReSpeaker Mic Array 可以直接堆叠（连接）在 ReSpeaker Core 顶部，从而显著提升语音交互体验。它基于 XMOS 的 XVSM-2000 Smart Microphone 开发。该板载集成了 7 个 PDM 麦克风，可帮助将 ReSpeaker 的声学 DSP 性能提升到更高水平。

## 关于我们的软件

---

### [ReSpeaker Arduino Library](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/ReSpeakerArduinoLibrary.md#respeaker-arduino-library)

ReSpeaker Arudino Library 提供以下特性：

- 支持电容式触摸感应
- 实现了 WS2812 RGB LED 驱动
- 在 Arduino（ATmega32U4）与基于 Linux 的 OpenWrt（MT7688）之间构建了 USB 转串口桥和 SPI 桥

### [ReSpeaker Python Library](https://github.com/respeaker/respeaker_python_library)

ReSpeaker 是一个用于创建语音使能设备的开放项目。ReSpeaker python library 是一个开源的 Python 库，用于提供语音交互的基础功能。

它使用 PocketSphinx 进行关键词唤醒检测，并使用 webrtcvad 进行语音活动检测。

### [更多信息请访问我们的 GitHub 仓库](https://github.com/respeaker)

## 常见问题

---
**Q1: 如何恢复出厂设置？**

- 打开串口控制台或 ssh 会话并运行 firstboot。[更多细节](https://github.com/respeaker/get_started_with_respeaker/wiki/factory-reset)。

**Q2: 如何从升级失败中恢复？**

- 当 ReSpeaker 无法启动进入其 OpenWrt 系统时，我们无法通过 Web 终端、ssh 或串口控制台访问系统。我们可以按照[救援说明](https://github.com/respeaker/get_started_with_respeaker/wiki/Rescue-from-a-failed-upgrade)来恢复它。

**Q3: ReSpeaker 无法找到我的 Wi-Fi**

- 先尝试[恢复出厂设置](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/faq.md#factory-reset)。
- 并且 ReSpeaker 不支持 Wi-Fi 信道 12。请确保你的路由器没有使用该信道。

**Q4: Wifi-Config**

- 我们建议你通过 [WEB-UI](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#setup-wi-fi) 配置 Wi-Fi，如果无法使用，则在串口控制台尝试使用命令行工具 [wictl](https://github.com/respeaker/get_started_with_respeaker/wiki/WiFi)。

**Q5: 如何更改 BING speech api 的识别语言**

- 如果你不需要更改唤醒词，只需将 text = bing.recognize(data) 改为 text = bing.recognize(data,language="zh-CN") 即可。[更多详情](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/bing_speech_api.py)。

**Q6: 收到 SD 卡警告信息 "Volume was not properly unmounted. Some data may be corrupt. Please run fsck"**

- 如果 SD 卡上的文件正常，可以忽略该信息。否则，请尝试使用 [sd card formatter](https://www.sdcard.org/downloads/formatter_4/) 对其进行格式化。

**Q7: 从 Arduino 烧录失败**

- 在 openwrt 上重新烧录 bootloader。

```
/etc/init.d/mopidy stop  # stop mopidy if it's running, mopidy-hallo plugin will use SPI
/etc/init.d/alexa stop      # stop alexa if it's running
mt7688_pinmux set ephy gpio
cd /etc/arduino
avrdude -c linuxgpio -p m32u4 -e -U lfuse:w:0xFF:m -U hfuse:w:0xD8:m -U efuse:w:0xCB:m  -U flash:w:Caterina-ReSpeaker.hex -u -U lock:w:0xEF:m
```

**Q8: 忘记 WebUI 的密码**

- 重置 juci 密码

```
orangectl passwd root 12345678  //replace 12345678 with the password you want to set
```

**Q9: 如何支持 google speech 或其他语音转文本（STT）引擎？**

- 按照此[指南](https://github.com/respeaker/get_started_with_respeaker/wiki/Use-speech_recognition-python-library)安装 speech_recognition 库

**Q10: 运行 Alexa 失败，报错 "IOError: [Errno -9998] Invalid number of channels"**

- 有其他应用或 alexa 实例正在使用音频输入设备。运行 /etc/init.d/alexa stop 和 /etc/init.d/mopidy stop 来停止它们。要禁止 mopidy 开机启动，运行 /etc/init.d/mopidy disable。

**Q11: 运行 python playmusic.py 失败**

- 这通常是因为 mopidy 在后台运行并占用了 USB 设备。尝试运行 /etc/init.d/mopidy stop 停止 mopidy，然后再次运行你的命令。

**Q12: 没有 RPC 连接**

- 你需要按照此[指南](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#update-for-old-version)重新烧录固件

**Q13: SFTP 与 FTP**

- 在 respeaker 上没有 FTP，只有 SFTP。

**Q14: 串口控制台卡死**

- 尝试更新 [arduino 代码](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino)。

**Q15: 如何禁用 'ap' 模式**

- 我们可以在 vi /etc/config/wireless 中将 'ap' 接口的 'ssid' 标志设置为 ''。这样 ap 就会被隐藏。

**Q16: I2C 声卡问题**

- 我们需要检查 codec 驱动的兼容名称以及 codec 的 i2c 地址。然后重新构建镜像固件。

**Q17: Respeaker 经常在没有声音时被唤醒。**

- 我们可以通过在 keyword.txt 中提高阈值来降低误触发率，但这也会降低灵敏度。
- 另一种方法是使用当前声学模型对你的声音进行自适应，更多细节见 [http://cmusphinx.sourceforge.net/wiki/tutorialadapt](http://cmusphinx.sourceforge.net/wiki/tutorialadapt)。
- 这将有效提升个人关键词识别效果，但可能会降低识别器的通用性。

**Q18: 如何从 respeaker 控制 GPIO 引脚？**

- 我们可以使用 [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py)
- 示例为 [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py)，它使用 GPIO 来模拟 SPI

**Q19: 如何更改唤醒词？**

- keywords.txt 包含关键词及其阈值。例如，从[这里](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/keywords.txt)获取的 keywords.txt 内容为

 ```
 respeaker /1e-30/
 alexa /1e-30/
 play music /1e-40/
 ```

 respeaker 是一个关键词，1e-30 是它的阈值。为了提高灵敏度，我们可以降低阈值，例如 1e-50。需要注意的是，降低阈值会提高误接受率（False Acceptance Rate）。

 如果你想添加新的关键词，你应首先将该关键词添加到 [dictionary.txt](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/dictionary.txt) 中。dictionary.txt 的格式如下：

 ```
 respeaker R IY S P IY K ER
 alexa AH L EH K S AH
 play P L EY
 music M Y UW Z IH K
 ```

 第一部分是名称（respeaker、alexa 或 music），第二部分是其音素。你可以在[这里](https://github.com/respeaker/pocketsphinx-data/blob/master/dictionary.txt)的一个大型字典中查找单词。

- 然后修改代码：

 ```
 if mic.wakeup('respeaker'):
 ```

- 关键词所在的目录是 `/root/respeaker_python_library/respeaker/pocketsphinx-data`

**Q20: 通过出厂镜像进行系统恢复。**

注意：如果你无法通过 Web 更新 ReSpeaker，或者无法访问 [http://192.168.100.1/home.html](http://192.168.100.1/home.html)，请点击[这里](https://s3-us-west-2.amazonaws.com/respeaker.io/firmware/ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin)在电脑上下载最新固件，将其拷贝到 SD 卡中，然后将 SD 卡插入 ReSpeaker。

连接 ReSpeaker 的[串口控制台](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#serial-console)，输入以下命令行来更新固件：

```
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin
```

ReSpeaker 安装固件并重启大约需要 3 分钟，请在更新过程中**不要断电**。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/systemupdate2.png)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

----

- **[Eagle]**[ReSpeaker Core v1.0 原理图（SCH）](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_SCH.sch.zip)
- **[Eagle]**[ReSpeaker Core v1.0 PCB（BRD）](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_BRD.brd.zip)
- **[PDF]**[ReSpeaker Core v1.0 原理图（pdf）](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_Schematic.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB 底层（pdf）](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_bottom.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB 顶层（pdf）](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_top.pdf)
- **[Document]**[ReSpeaker_详细说明](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/README.md)
- **[PDF]** [AI7688 数据手册](https://files.seeedstudio.com/wiki/Bazaar_file/AI7688.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
