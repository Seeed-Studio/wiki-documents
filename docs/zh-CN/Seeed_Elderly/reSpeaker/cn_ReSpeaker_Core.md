---
description: ReSpeaker Core
title: ReSpeaker Core
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_Core
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core.jpg)

ReSpeaker 是一个开放的模块化语音接口，用于控制您周围的设备。它可以让您通过语音与家用电器、植物、办公室设备、联网设备或日常生活中的任何其他物品进行互动。

- **它是一个为您周围环境提供语音功能的扩展设备**

  ReSpeaker 支持在线认知服务和离线轻量级语音识别引擎。您可以将 ReSpeaker 添加到您周围的设备中，使它们变得智能（更智能）。

- **它是一个音乐流媒体设备**

  语音接口从未与音乐娱乐分离，ReSpeaker 也不例外。ReSpeaker 支持 Airplay/DLNA 无线音乐流媒体。只需通过 AUX 电缆将 ReSpeaker 连接到任何普通扬声器，您就可以开始享受您喜爱的音乐，而无需按下任何按钮。

- **它是一个儿童学习工具**

  除了板载的运行基于 Linux 的 OpenWrt 的 MT7688 Wi-Fi 模块外，ReSpeaker 还由 ATmega32u4 芯片驱动，并完全兼容 Arduino。这意味着我们可以将 ReSpeaker 用作一个强大的 Arduino 板，进行许多“Arduino”项目。它适用于学习、实践和娱乐。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-Core-Based-On-MT7688-and-OpenWRT-p-2716.html)

## 特性

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_futures.jpg)

- 解放双手：支持有网或无网的语音识别
- 无线流媒体：通过 Airplay/DLNA 流式传输音乐
- 易于使用的 SDK：适用于 Python 和 C/C++ 开发者
- 不断增长的功能：下载插件以丰富其功能和特性
- 即插即用扩展：可扩展麦克风阵列、Grove 扩展板、Grove 模块
- 无需安装的应用程序：通过基于网页的应用程序设置所有内容。（尚未推出）

## 规格

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_hardware%20overview.jpg)

**技术规格**

- AI7688 Wi-Fi 模块：

  - 操作系统：基于 GNU/Linux 的 OpenWrt
  - Wi-Fi 网络：支持 Legacy 802.11b/g 和 HT 802.11n 模式
  - 扩展：两个扩展接口，支持 I2C、GPIO 和 USB 2.0 主机
  - 接口：内置 3.5mm AUX 端口、Micro USB 和 SD 卡插槽

- ATMega32U4 协处理器：

  - USB CDC 虚拟串口用于 Linux 控制台
  - 12 个可编程 RGB LED 指示灯
  - 8 个板载触摸传感器

- Codec WM8960：

  - DAC 信噪比 98dB（‘A’加权），总谐波失真 -84dB，采样率 48kHz，电压 3.3V  
  - ADC 信噪比 94dB（‘A’加权），总谐波失真 -82dB，采样率 48kHz，电压 3.3V  
  - 立体声 D 类扬声器驱动器，效率 87%（1W 输出）  
  - 芯片内置耳机驱动器  
  - 40mW 输出功率，负载 16Ω，电压 3.3V  
  - 总谐波失真 -75dB，20mW 输出，信噪比 90dB，负载 16Ω  
  - 芯片内置 PLL 提供灵活的时钟方案  
  - 支持采样率：8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48 kHz

- 电源：5V DC  

- 尺寸：直径 70mm  

- 重量：17g

**引脚图**

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_pinmap.png)

- GPIO0/I2S_ADC：驱动外部编码器/解码器，ADC 信号
- GPIO1/I2S_DAC：驱动外部编码器/解码器，DAC 信号
- GPIO2/I2S_LRCLK：驱动外部编码器/解码器，左右声道采样时钟
- GPIO3/I2S_BCLK：驱动外部编码器/解码器，比特时钟
- MCLK_OUT：外部设备的主时钟
- HP_SEL：耳机声道选择。如果使用 ReSpeaker 麦克风阵列输出音频，请将 HP_SEL 设置为高电平
- HP_L：来自 ReSpeaker 麦克风阵列的模拟音频左声道
- HP_R：来自 ReSpeaker 麦克风阵列的模拟音频右声道
- AGND：音频的模拟地

## 入门指南

---

### 我第一次拿到 ReSpeaker Core 时应该做什么？

**1. 准备工作**

- ReSpeaker Core
- PC 或 Mac
- Wi-Fi 网络
- SD 卡

**2. 连接到串行控制台**

- 对于 Windows，[putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) 是推荐的工具。

  - 通过 USB 将 ReSpeaker 连接到您的 PC，检查“设备管理器”中的 COM 端口。这里我的 ReSpeaker COM 端口是 COM31。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty1.png)

  - 在连接类型中选择 Serial。在 Serial line 字段中输入您的 ReSpeaker 的 COM 端口。在 Speed 字段中输入 57600。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty2.png)

  - 点击 Open。当您看到一个空白屏幕时，按 Enter 键。

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty3.png)

- 对于 Linux/Mac

  - 通过 USB 将 ReSpeaker 连接到您的 PC
  - 打开一个终端会话
  - 在终端中输入 `ls /dev/tty.usb*`。我们应该看到一个设备列表。寻找类似 tty.usbmodemXXXXX 的设备，其中 XXXXX 通常是一个随机标识符。这是用于访问系统控制台的串行设备。然后使用 screen 工具连接到串行端口并将波特率设置为 57600，因为系统控制台的默认波特率是 57600。

```
$ ls /dev/tty.usb*
/dev/tty.usbmodem14221
$ screen /dev/tty.usbmodem14221 57600
```

**3. 设置 Wi-Fi**

ReSpeaker 默认设置为中继模式，您需要将其连接到现有的无线网络才能使用互联网进行语音识别。

当您第一次启动 ReSpeaker 时，它会创建一个名为 "ReSpeakerXXXXXX" 的 Wi-Fi 网络，其中 "XXXXXX" 是您的 ReSpeaker MAC 地址的后 6 位，MAC 地址标记在板上。将您的电脑连接到该网络。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi1.png)

:::note
如果 "ReSpeakerXXXXXX" 未出现，但发现了 "LinkIt_Smart_7688_XXXXXX"，请点击 [这里](https://wiki.seeedstudio.com/cn/ReSpeaker_Core/#q20-system-recovery-by-factory-image)。
:::

获得 IP 地址后，打开一个网页浏览器，在地址栏中输入 192.168.100.1。几秒钟后，会出现一个网页，要求输入现有 Wi-Fi 网络的 ssid 和密码。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi2.png)

选择您希望连接的 Wi-Fi 并输入密码。当您按下 OK 按钮时，ReSpeaker 将加入指定的网络。

现在您的 ReSpeaker 已能够访问互联网。

此外，还有另一种通过命令行设置 Wi-Fi 的方法。
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
如果您无法通过上述方法连接 Wi-Fi，请通过输入 `firstboot` 命令进行出厂重置。
:::

启用 Wi-Fi 功能后，我们可以通过以下命令使用 SSH 连接到 ReSpeaker。我们可以从 &lt;http://192.168.100.1/#!/overview&gt; 的 WAN IP 获取 ReSpeaker 的 IP 地址。密码是 root。

```
ssh root@ssh *.*.*.*
```

**4. 使用 SD 卡扩展存储**

嵌入式设备通常存储空间有限（ReSpeaker 仅剩 5M 的板载闪存供用户使用）。更多的应用程序和数据存储可以扩展 ReSpeaker 的潜力，因此使用 SD 卡作为 **extroot** 是一个不错的选择。

通过使用 **extroot**，可以通过添加存储设备扩展根文件系统的存储容量。
在启动过程中，外部存储空间会作为根文件系统挂载，或者以覆盖配置的方式覆盖原始文件系统。

- 确保您的 SD 卡已插入 ReSpeaker，并且可以通过 `df -h` 或 `ls /dev` 检测到 /dev/mmcblk0p1。

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

- 将您的 SD 卡格式化为两个分区，一个是 FAT32，另一个是 EXT4。EXT4 文件系统将作为 extroot，而 FAT32 将作为普通存储设备，可以在 ReSpeaker 和您的 PC 之间传输文件。

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

- 准备您的外部存储根覆盖层。

```
mount /dev/mmcblk0p2 /mnt ; tar -C /overlay -cvf - . | tar -C /mnt -xf - ; umount /mnt
```

- 使用以下命令创建 fstab。此命令将创建一个 fstab 模板，启用所有分区，并将 '/mnt/mmcblk0p2' 分区设置为 '/overlay' 分区。

```
 block detect > /etc/config/fstab;
 sed -i s/option$'\t'enabled$'\t'\'0\'/option$'\t'enabled$'\t'\'1\'/ /etc/config/fstab;
 sed -i s#/mnt/mmcblk0p2#/overlay# /etc/config/fstab;
 cat /etc/config/fstab;
```

- 检查是否可以挂载到 overlay。

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

- 重启 ReSpeaker 并再次检查。如果 SD 卡可以自动挂载，则设置完成。有关 **extroot** 的更多信息，请点击 [这里](https://wiki.openwrt.org/doc/howto/extroot)。

**5. 在 ReSpeaker 上安装软件**

扩展存储至 SD 卡后，ReSpeaker 上将有足够的存储空间安装软件。

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

### 初体验语音交互 - ReSpeaker 播放音乐

通过 Bing Speech API，ReSpeaker 可以实时打开并识别来自麦克风的音频，或者识别文件中的音频。

要使用 Bing Speech API，首先需要从 [这里](https://www.microsoft.com/cognitive-services/en-us/speech-api) 获取 Microsoft Cognitive Services 的密钥，并将其复制到 BING_KEY = '' 中，然后保存以下代码到 playmusic.py 并运行。

```sh
# 停止 mopidy 和 alexa 以避免 USB 设备占用
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

# 使用 madplay 播放 mp3 文件     
os.system('madplay')               

# 从 https://www.microsoft.com/cognitive-services/en-us/speech-api 获取密钥
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

当出现 "INFO:mic:Start Detecting" 时，尝试说 "ReSpeaker" 唤醒程序，然后说 "play music" 让它播放音乐。随后，ReSpeaker 将使用 **madplay** 工具播放当前路径下的 "Tchaikovsky_Concerto_No.1p.mp3"。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/bingplaymusic.png)

如果出现以下错误代码，说明 mopidy 正在后台运行并占用了 USB 设备。请尝试运行 /etc/init.d/mopidy stop 停止 mopidy，然后再次运行您的命令。

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

除了板载运行基于 Linux 的 OpenWrt 的 MT7688 Wi-Fi 模块外，ReSpeaker 还搭载了 ATmega32u4 芯片，并完全兼容 Arduino。这意味着我们可以将 ReSpeaker 用作一个强大的 Arduino 开发板，进行许多“Arduino”相关的项目。这既可以用于学习，也可以用于实践，更可以用于娱乐。

例如，你可以使用 Arduino IDE 对其进行编程，制作一个特殊的 DIY 钢琴，该钢琴由连接到 ReSpeaker 的 8 个触摸传感器的 8 个樱桃番茄组成。
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano2.PNG)

1. 在 ReSpeaker 上运行 `git clone <https://github.com/respeaker/piano.git>` 下载仓库
2. 在你的电脑上下载 [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library)
3. 将 [piano.ino](https://github.com/respeaker/piano/blob/master/arduino/piano.ino) 上传到 ReSpeaker 的 Arduino Leonardo (ATmega32U4)
4. 在 ReSpeaker 的串口控制台上运行 `python piano.py`

### 天气云

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/weathercloud.jpg)

天气云是一个非常棒的 ReSpeaker 项目。这个酷炫的设计可以将 ReSpeaker 变成一个天气云，它能够通过生动的灯光和声音向你展示天气情况。

在这个项目中，OpenWrt 负责从互联网获取实时天气信息、进行语音交互和音频输出，而 Arduino 则负责控制彩色 RGB LED。

1. 在 ReSpeaker 上运行 `git clone <https://github.com/jerryyip/WeatherCloud.git>` 下载仓库
2. 在你的电脑上下载 [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library)
3. 将 ReSpeaker Arduino Library 中的 [pixels_pattern.ino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino) 上传到 ReSpeaker 的 Arduino
4. 从 [这里](http://openweathermap.org/appid) 获取 OpenWeatherMap 的 appid，并将其复制到 main.py 中的 `appID = ""`，别忘了在 `city=""` 中添加你的城市
5. 在使用 SPI 桥接之前，停止 OpenWrt 上的 mopidy 服务：
   `/etc/init.d/mopidy stop`
6. 运行 `python main.py`，然后对 ReSpeaker 说：“ReSpeaker，天气怎么样？”
7. 有关如何制作天气云的更多详细信息，请点击 [这里](https://www.instructables.com/id/How-to-DIY-an-in-House-Weather-telling-Cloud/)。

## ReSpeaker 麦克风阵列

---

### [ReSpeaker 麦克风阵列](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html)

ReSpeaker 麦克风阵列可以直接堆叠（连接）到 ReSpeaker Core 的顶部，以显著改善语音交互体验。它基于 XMOS 的 XVSM-2000 智能麦克风开发。该板集成了 7 个 PDM 麦克风，能够将 ReSpeaker 的声学 DSP 性能提升到更高的水平。

## 关于我们的软件

---

### [ReSpeaker Arduino Library](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/ReSpeakerArduinoLibrary.md#respeaker-arduino-library)

ReSpeaker Arduino Library 提供以下功能：

- 支持电容触摸感应
- 实现了 WS2812 RGB LED 驱动
- 在 Arduino (ATmega32U4) 和基于 Linux 的 OpenWrt (MT7688) 之间构建了 USB 到串口桥接和 SPI 桥接

### [ReSpeaker Python Library](https://github.com/respeaker/respeaker_python_library)

ReSpeaker 是一个开放项目，旨在创建支持语音的设备。ReSpeaker Python Library 是一个开源的 Python 库，用于提供语音交互的基本功能。

它使用 PocketSphinx 进行关键词识别，并使用 webrtcvad 进行语音活动检测。

### [更多信息请访问我们的 GitHub 仓库](https://github.com/respeaker)

## 常见问题解答

---
**Q1: 如何进行出厂重置？**

- 打开串行控制台或 SSH 会话并运行 `firstboot`。 [更多详情](https://github.com/respeaker/get_started_with_respeaker/wiki/factory-reset)。

**Q2: 如何从失败的升级中恢复？**

- 当 ReSpeaker 无法启动到其 OpenWrt 系统时，我们无法通过网页终端、SSH 或串行控制台访问系统。可以按照[恢复说明](https://github.com/respeaker/get_started_with_respeaker/wiki/Rescue-from-a-failed-upgrade)进行恢复。

**Q3: ReSpeaker 无法找到我的 Wi-Fi**

- 首先尝试[出厂重置](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/faq.md#factory-reset)。
- 另外，ReSpeaker 不支持 Wi-Fi 通道 12，请确保您的路由器未使用该通道。

**Q4: Wi-Fi 配置**

- 我们建议通过 [WEB-UI](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#setup-wi-fi) 配置 Wi-Fi。如果无法使用，请尝试在串行控制台使用命令行工具 [wictl](https://github.com/respeaker/get_started_with_respeaker/wiki/WiFi)。

**Q5: 如何更改 BING 语音 API 的识别语言？**

- 如果您不需要更改唤醒词，只需将 `text = bing.recognize(data)` 更改为 `text = bing.recognize(data,language="zh-CN")` 即可。[更多详情](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/bing_speech_api.py)。

**Q6: SD 卡警告信息 "Volume was not properly unmounted. Some data may be corrupt. Please run fsck"**

- 如果 SD 卡上的文件正常，可以忽略该警告。否则，请使用 [SD 卡格式化工具](https://www.sdcard.org/downloads/formatter_4/)进行格式化。

**Q7: Arduino 闪存问题**

- 在 OpenWrt 上重新刷写引导程序。

```
/etc/init.d/mopidy stop  # 如果 mopidy 正在运行，停止 mopidy，mopidy-hallo 插件将使用 SPI
/etc/init.d/alexa stop      # 如果 alexa 正在运行，停止 alexa
mt7688_pinmux set ephy gpio
cd /etc/arduino
avrdude -c linuxgpio -p m32u4 -e -U lfuse:w:0xFF:m -U hfuse:w:0xD8:m -U efuse:w:0xCB:m  -U flash:w:Caterina-ReSpeaker.hex -u -U lock:w:0xEF:m
```

**Q8: 忘记了 WebUI 的密码**

- 重置 juci 密码

```
orangectl passwd root 12345678  //将 12345678 替换为您想设置的密码
```

**Q9: 如何支持 Google Speech 或其他语音转文本 (STT) 引擎？**

- 按照[指南](https://github.com/respeaker/get_started_with_respeaker/wiki/Use-speech_recognition-python-library)安装 speech_recognition 库。

**Q10: Alexa 运行失败，错误 "IOError: [Errno -9998] Invalid number of channels"**

- 有其他应用程序或 Alexa 实例正在使用音频输入设备。运行 `/etc/init.d/alexa stop` 和 `/etc/init.d/mopidy stop` 停止它们。要禁用 mopidy 启动，请运行 `/etc/init.d/mopidy disable`。

**Q11: 无法运行 python playmusic.py**

- 可能是 mopidy 在后台运行并占用了 USB 设备。尝试运行 `/etc/init.d/mopidy stop` 停止 mopidy，然后重新运行您的命令。

**Q12: 没有 RPC 连接**

- 您需要按照[指南](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#update-for-old-version)重新刷写固件。

**Q13: SFTP 和 FTP**

- ReSpeaker 上没有 FTP，仅支持 SFTP。

**Q14: 串行控制台锁定**

- 尝试更新 [Arduino 代码](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino)。

**Q15: 如何禁用 'ap' 模式**

- 我们可以在 `/etc/config/wireless` 中将 'ap' 接口的 'ssid' 标志设置为 ''，然后 ap 将被隐藏。

**Q16: I2C 声卡问题**

- 我们需要检查编解码器驱动的兼容名称和编解码器的 I2C 地址，然后重新构建镜像固件。

**Q17: ReSpeaker 经常唤醒，即使没有声音**

- 我们可以通过增加 `keyword.txt` 中的阈值来降低误唤醒率，但这也会降低灵敏度。
- 另一种方法是使用当前声学模块适配您的声音，更多详情请访问 [http://cmusphinx.sourceforge.net/wiki/tutorialadapt](http://cmusphinx.sourceforge.net/wiki/tutorialadapt)。
- 这将有效提高个人关键词识别，但可能会降低识别器的通用性。

**Q18: 如何从 ReSpeaker 控制 GPIO 引脚？**

- 我们可以使用 [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py)。
- 示例代码请参考 [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py)，该代码使用 GPIO 模拟 SPI。

**Q19: 如何更改唤醒词？**

- `keywords.txt` 包含关键词及其阈值。例如，[这里](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/keywords.txt) 的 `keywords.txt` 内容如下：

 ```
 respeaker /1e-30/
 alexa /1e-30/
 play music /1e-40/
 ```

 `respeaker` 是关键词，`1e-30` 是其阈值。为了提高灵敏度，我们可以降低阈值，例如 `1e-50`。需要注意的是，降低阈值会增加误接受率。

 如果您想添加新的关键词，首先需要将关键词添加到 [dictionary.txt](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/dictionary.txt)。`dictionary.txt` 的格式如下：

 ```
 respeaker R IY S P IY K ER
 alexa AH L EH K S AH
 play P L EY
 music M Y UW Z IH K
 ```

 第一部分是名称（如 respeaker、alexa 或 music），第二部分是其音素。您可以在[这里](https://github.com/respeaker/pocketsphinx-data/blob/master/dictionary.txt)找到一个大型词典。

- 然后更改代码：

 ```
 if mic.wakeup('respeaker'):
 ```

- 关键词的目录为 `/root/respeaker_python_library/respeaker/pocketsphinx-data`

**Q20: 使用出厂镜像进行系统恢复。**

注意：如果您无法通过网页更新 ReSpeaker 或无法访问 [http://192.168.100.1/home.html](http://192.168.100.1/home.html)，请点击 [这里](https://s3-us-west-2.amazonaws.com/respeaker.io/firmware/ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin) 下载最新的固件到您的电脑，将其复制到 SD 卡并插入 ReSpeaker。

连接到 ReSpeaker 的[串口控制台](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#serial-console)，输入以下命令行以更新固件：

```
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin
```

ReSpeaker 安装固件并重启大约需要 3 分钟，请在更新过程中**不要关闭** ReSpeaker。

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/systemupdate2.png)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

----

- **[Eagle]**[ReSpeaker Core v1.0 原理图](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_SCH.sch.zip)
- **[Eagle]**[ReSpeaker Core v1.0 PCB](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_BRD.brd.zip)
- **[PDF]**[ReSpeaker Core v1.0 原理图(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_Schematic.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB 底层(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_bottom.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB 顶层(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_top.pdf)
- **[文档]**[ReSpeaker 详细信息](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/README.md)
- **[PDF]** [AI7688 数据手册](https://files.seeedstudio.com/wiki/Bazaar_file/AI7688.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>