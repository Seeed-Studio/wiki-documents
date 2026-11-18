---
description: 探索在 Wio Tracker L2 Pro 上进行本地音频开发，包括语音控制项目、音频存储与播放，并结合 Cairn 使用。本流程不支持通过 MeshCore 进行语音传输。
title: 音频开发
keywords:
  - Wio Tracker L2 Pro
  - MeshCore
  - Cairn
  - Audio
  - I2S
image: https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_music.jpg
slug: /meshcore_audio_development_l2
sku: 100029766
sidebar_position: 2
last_update:
  date: 11/16/2026
  author: Michelle Huang
createdAt: 2026-09-19T00:00:00.000Z
updatedAt: '2026-09-24'
url: https://wiki.seeedstudio.com/cn/meshcore_audio_development_l2/
---

## 理解音频开发边界

麦克风和扬声器使设备能够采集和播放声音。向另一台设备发送语音消息还需要足够的无线电空中时间。

| 使用场景 | 原理 | 开发边界 |
| --- | --- | --- |
| 播放音乐或录音文件 | 本地音频<br/>不需要 LoRa| ✅ |
| 录制语音备忘 | 本地音频<br/>不需要 LoRa | ✅ |
| 开发本地语音控制 | 设备端识别和本地动作<br/>需要自定义固件实现 | ✅ |
| 通过 MeshCore 发送短语音片段 | 音频流量可能占满共享信道并阻塞紧急消息 | ❌ |
| 连续语音通话或对讲机式语音流 | 音频流量可能占满共享信道并阻塞紧急消息 | ❌ |

### 支持的音频开发范围

目前在 L2 Pro 上的音频开发仅限于**本地处理、存储和播放**。支持的开发方向包括：

- **本地语音控制：** 在设备上识别指令，并用它触发本地动作
- **音频录制与存储：** 采集麦克风输入并将录音保存到 microSD。
- **音频播放：** 播放音乐、录制的语音备忘。
- **本地通知音效：** 当文本消息或其他事件到达时播放本地存储的声音文件，而无需通过 LoRa 传输声音文件。

:::warning
**在本 L2 Pro 音频开发流程中，不支持通过 MeshCore 网络传输语音消息。**

LoRa Mesh 节点共享有限的无线电空中时间。音频传输可能长时间占用信道；中继和重传会进一步增加负载。这会导致严重拥塞，使 Mesh 通信陷入停滞，紧急消息无法占用信道或及时送达。

请将音频采集、语音处理、存储和播放都保持在设备本地。不要在 Mesh 网络上传输音频负载。
:::

### 本地音频开发提示

对于自定义本地音频应用，请规划：

- **输入与输出：** 分别验证麦克风和扬声器通路，包括麦克风增益和播放音量。
- **本地语音识别：** 选择适合 ESP32-S3 处理能力和内存预算的设备端识别引擎。
- **存储：** 选择适合可用 microSD 空间的采样格式和录音时长，并处理存储卡已满或写入失败等情况。
- **任务调度：** 避免音频处理和文件访问阻塞 Mesh 数据包处理或触摸屏界面。

## L2 Pro 上的硬件基础

### 音频信号路径

L2 Pro 音频子系统使用 I2S 接口、编解码电路和麦克风通路。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/l2_audio_hardware_schematic.png" style={{width:600, height:'auto'}}/>
</div>

### 音频引脚映射

| 接口 | 板级信号 | ESP32-S3 GPIO | 用途 |
| --- | --- | --- | --- |
| I2S | `CODEC_I2S0_MCLK` | GPIO10 | 主时钟 |
| I2S | `CODEC_I2S0_SCLK` | GPIO11 | 位时钟，也称为 BCLK |
| I2S | `CODEC_I2S0_LRCK` | GPIO12 | 字选择/帧时钟，也称为 WS |
| I2S | `CODEC_I2S0_DSDIN` | GPIO16 | ESP32-S3 TX → 编解码器数据输入；播放 |
| I2S | `CODEC_I2S0_SDOUT` | GPIO15 | 音频数据输出 → ESP32-S3 RX；录音 |
| I²C | `IIC0_SDA` | GPIO47 | 外设配置数据 |
| I²C | `IIC0_SCL` | GPIO48 | 外设配置时钟 |


## 在 L2 Pro 上安装 Cairn

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_page.png" style={{width:600, height:'auto'}}/>
</div>

### 关于 Cairn

[Cairn](https://github.com/cvhviz/CAIRN) 是社区开发的 MeshCore 配套固件分支，带有自己的设备端界面。其 L2 Pro 构建将触摸屏消息功能与本地音频工具结合，并可与官方 MeshCore 客户端协同工作。如果使用其他构建，请查看其[发行说明](https://github.com/cvhviz/CAIRN/releases)。 

### 准备工作

准备：

- 一块已连接 LoRa 天线的 **Wio Tracker L2 Pro**。

- 一根 USB-C **数据线** 和一台运行 Chrome 或 Edge 的电脑。

- 一张用于存放音乐和录音的 microSD 卡。Cairn 建议使用 **8–32 GB、格式为 FAT32 的 SDHC**；其已文档化的 L2 Pro 存储卡流程不支持 exFAT。

- 一个用于播放测试的短 MP3 或 WAV 文件。


### 固件烧录

**步骤 1：下载 L2 Pro 固件**

打开 [Cairn Releases](https://github.com/cvhviz/CAIRN/releases) 并展开 **Assets**。选择包含 **`WioL2Pro`** 的文件。

对于本次首次安装教程，请下载 **`-full.bin`**。它已包含应用程序；不要再写入 `-update.bin`。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_firmware.png" style={{width:900, height:'auto'}}/>
</div>

**步骤 2：进入下载模式**

1. 将 L2 Pro 连接到电脑并打开电源开关。

2. 按住 **User/Boot**。

3. 在按住它的同时，按下并释放 **RST**。

4. 松开 **User/Boot**。

**步骤 3：通过浏览器烧录**

1. 打开 [Espressif 的 Web Flasher](https://espressif.github.io/esptool-js/)。

2. 点击 **Connect** 并选择设备的串口。

3. 选择 **Erase Flash** 并等待完成。

4. 将固件地址设置为 **`0x0`**，并选择下载好的 L2 Pro `-full.bin`。

5. 点击 **Program** 并等待写入完成。

6. 断开烧录工具连接并按下 **RST** 以启动 Cairn。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Carin_web_flasher.png" style={{width:900, height:'auto'}}/>
</div>

## 探索 Cairn 的音频界面

### 打开 Audio 中心

插入准备好的 microSD 卡。从 **Home** 向下滑动找到 **Audio** 卡片，或从快捷面板中打开 **Audio**。该中心提供对播放器和录音机的访问。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_audio_hub.jpg" style={{width:600, height:'auto'}}/>
</div>

### 从 microSD 播放音乐

1. 在存储卡根目录创建名为 **`music`** 的文件夹。

2. 将一个短 MP3 或 WAV 文件复制到该文件夹中，并从电脑安全弹出存储卡。

3. 将存储卡插入 L2 Pro，打开播放器，并从 **Library → Music** 中选择该文件。

4. 从较低音量开始并检查播放效果。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_music.jpg" style={{width:600, height:'auto'}}/>
</div>

### 录制语音备忘

1. 从 Audio 中心打开 **Recorder**。

2. 打开其设置以选择录音质量、麦克风增益和时间限制。

3. 开始一次短录音，在麦克风附近说话，然后停止录音。

4. 打开 **Library → Recordings** 回放录音。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_record.jpg" style={{width:600, height:'auto'}}/>
</div>

录音机会将 WAV 文件保存在 **`Recordings`** 中，在时钟已设置时使用日期和时间命名。它提供 8 或 16 kHz 录音、在检测到声音时开始的 **Voice start** 功能以及标记功能。状态栏会在麦克风活动时显示 **MIC** 或 **REC**。


### 试用自定义通知音效

将一个短 MP3 或 WAV 文件复制到根目录下的 **`Sounds`** 文件夹中。打开 **Settings → Hardware → Sound**，选择一个事件，并从存储卡的声音列表中选择文件。


### 值得尝试的其他 Cairn 功能

- **独立消息功能：** 使用触摸屏键盘、快速回复和表情符号进行频道和私信对话。

- **地图与定位：** 探索设备端地图、GPS 信息和附近节点位置；在出发前准备离线覆盖数据。

- **无线电检查：** 检查数据包流量、信号信息以及频谱/频段扫描，以了解本地无线电活动。

- **文件访问：** 尝试 Wi-Fi 传输或 USB 驱动器模式，在不取出存储卡的情况下管理 microSD 内容。

- **设备个性化：** 探索主题、按键动作和电池历史记录显示。

## 技术支持与产品讨论

- **浏览器找不到设备：** 检查 USB 数据线，关闭其他串口应用，并重复 User/Boot + RST 操作序列。


- **音乐文件未显示：** 检查 FAT32 格式、根目录下的 `Music` 文件夹以及 MP3/WAV 格式。使用存储页面检查或重新扫描存储卡。


- **录音没有声音：** 检查增益和录音设置。对于自定义固件，请分别验证麦克风初始化以及独立于播放的 GPIO15 RX 通路。

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

