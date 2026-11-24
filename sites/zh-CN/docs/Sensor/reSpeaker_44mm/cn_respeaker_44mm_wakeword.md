---
description: 将 reSpeaker XVF3800 44mm 与 XIAO ESP32-S3 Plus 打造成一个 JARVIS 语音卫星——唤醒词 WakeNet“Jarvis”和九条指令在板载离线运行，PC 上的 Python 大脑驱动浏览器中的钢铁侠 HUD。
title: 在 reSpeaker XVF3800 44mm 上使用唤醒词（JARVIS）
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - XIAO ESP32-S3 Plus
  - 唤醒词
  - WakeNet
  - MultiNet
  - ESP-SR
  - JARVIS
  - XMOS
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/jarvis.jpg
slug: /respeaker_44mm_wakeword
sku: 100066841,100065276
last_update:
  date: 11/24/2026
  author: Kasun Thushara
createdAt: '2026-11-24'
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/cn/respeaker_44mm_wakeword/
---

# 边缘 AI 语音卫星：使用 reSpeaker XVF3800 44mm 实现 KWS 与 MultiNet NLU

## 介绍

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/_1fvV75W3ds"
          title="reSpeaker 44mm XIAO ESP32S3 Plus — KWS and NLU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

说出 **“Jarvis”**。灯环闪烁薄荷绿，播放一声短提示音，在接下来的
**6.5 秒** 内，XIAO 会监听九条指令之一。唤醒词和每条指令都在
**板载** 使用乐鑫 ESP-SR 运行；不会上传任何音频，也不需要账号。

离开开发板的只有一行可读的 UDP 文本：

__CODE_LINE_PLH__
```text
JARVIS 0042 3

你 PC 上一个小小的 Python 大脑会把这行文本变成一个动作——播放音乐、
讲笑话、读天气、驱动角色的头部动作——并在浏览器中驱动一个全屏的
**钢铁侠 / JARVIS HUD**。回复在 PC 上合成，并通过 reSpeaker 自带的扬声器播放。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/jarvis.jpg" alt="poster" width={700} height="auto" /></p>

__CODE_LINE_PLH__
__CODE_LINE_PLH__
```text
4 mics ─► XVF3800 DSP ─► I²S 16 kHz ─► XIAO ESP32-S3 Plus (WakeNet + MultiNet)
                                             │  UDP :9001  "JARVIS <seq> <id>"
                                             ▼
                                PC brain.py ── HTTP :8080 / SSE ──► browser HUD

```

## 你说什么，会发生什么

| 时刻 | 在开发板上 | 在 PC 上 |
| --- | --- | --- |
| 空闲 | 灯环处于 DOA 模式，微亮，跟随人声 | HUD 待机；当页面连接到大脑时显示 `LINKED` |
| “Jarvis” | 薄荷绿闪烁，约 0.7 s 提示音，编解码器从 70 % → 30 % 降低 | — |
| +0.8 s | 打开 6.5 s 的指令窗口（MultiNet 只对前 5.8 s 打分） | — |
| 匹配到指令 | 灯环动画，发送 `JARVIS <seq> <id>`，在 2.5 s 内期待 ACK | 执行动作，卡片 + 事件日志 + 语音回复 |
| 未匹配到任何指令 | 琥珀色双闪 | 日志：`no command heard (wake fired, phrase not matched)` |

## 为什么要这样设计

| 设计决策 | 原因 |
| --- | --- |
| 唤醒词和指令在 **XIAO 上运行** | 场馆 WiFi 掉线也能工作，无延迟，无隐私问题，没有云端账单 |
| **9** 条指令，而不是三十条 | 随着表格变大，MultiNet 会混淆；九条各含不同动词的短语能被可靠识别 |
| 每条指令只发一包 **文本** | 一条指令是 `JARVIS 0042 3`——14 字节，在 Wireshark 中可读，重试极其简单 |
| 唤醒词存放在 **model 分区** | WakeNet 包约 3.3 MB；它们放在 `esp_sr_16` 分区，而不是放在 sketch 里 |
| HUD 在 **PC** 上 | XIAO 没有屏幕，而浏览器是最便宜的 1080p 显示器 |

## 前置条件

**硬件**

| 项目 | 推荐 | 原因 |
| --- | --- | --- |
| 带 XIAO 的 reSpeaker **XVF3800 44mm** | SKU 100066841 或 100065276（带外壳） | 麦克风、XVF3800 DSP、LED 灯环、编解码器、功放和 I²S 走线都在板上 |
| Seeed **XIAO ESP32-S3 Plus** | 16 MB flash / 8 MB PSRAM，预焊接 | model 分区需要 4 MB，音频环形缓冲区放在 PSRAM 中 |
| USB-C **数据**线 | 不是仅充电线 | 你要刷的是 XIAO 端口，而不是 XMOS 端口 |
| 扬声器 | JST 接口上的 5 W 4 Ω 单元 | 机器人从这里播放回复和音乐 |
| 2.4 GHz WiFi | WPA2，**无客户端隔离** | ESP32-S3 没有 5 GHz 射频，而隔离会阻断 PC ↔ 开发板 |
| PC | Windows 10/11（用于语音回复），Chrome 或 Edge | 运行大脑和 HUD |

**软件**

| 软件 | 版本 | 说明 |
| --- | --- | --- |
| Arduino IDE 2 或 `arduino-cli` | 1.5.1 | ESP_SR 随 core 一起提供，无需 Library Manager 步骤 |
| esp32 core | **3.3.11** | ESP-SR API 和 `esp_sr_16` 分区与此版本绑定 |
| Python | **3.11** | 大脑 |
| `numpy`, `soundfile`, `scipy` | 最新 | 为机器人扬声器将 MP3 解码为 16 kHz PCM |
| Git | 2.50+ | 克隆项目 |

:::note
阵列必须运行 **16 kHz I²S 固件**
（`respeaker_44mm_i2s_c16k2ch_v1.0.0.bin`，XVF3800 作为 I²S 主机，2 通道）。
使用 48 kHz 镜像时，XIAO 只能听到静音或噪声，ESP-SR 永远不会加载。
从 [Update Firmware](https://wiki.seeedstudio.com/cn/respeaker_44mm_introduction/#update-firmware)
页面更新，并使用项目的 `firmware/audio_rms` 示例进行确认：说话时左声道的
RMS 应该在几百的量级。
:::

在一台全新机器上的时间预算：工具链 20 分钟，XMOS 检查 10 分钟，关键词
和首次烧录 15 分钟，大脑和 HUD 5 分钟，在线验证 10 分钟。

## 配置 IDE

**显式** 安装 core；“latest” 并不是本固件所针对的版本。

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```powershell
arduino-cli core update-index

arduino-cli board list
```

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```text

                             Ozobot DRVKit        esp32:esp32:ozobot_drvkit
```

然后克隆项目：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```powershell

cd reSpeaker_44_wakeword
```

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__

$cli  = "C:\Users\<you>\AppData\Local\Programs\Arduino IDE\resources\app\lib\backend\resources\arduino-cli.exe"
$fqbn = "esp32:esp32:esp32s3:FlashSize=16M,PSRAM=opi,PartitionScheme=esp_sr_16,CDCOnBoot=cdc"

& $cli compile --fqbn $fqbn --output-dir build\wake_demo firmware\wake_demo
```
| `FlashSize=16M,PSRAM=opi` | XIAO ESP32-S3 **Plus**：16 MB flash，8 MB 八线 PSRAM（3 s 音频环形缓冲） |
| `PartitionScheme=esp_sr_16` | 为 3.3 MB 的 ESP-SR 包创建约 4 MB 的 model 分区 |
| `CDCOnBoot=cdc` | `Serial` 必须从原生 USB 出来，因为 GPIO43（UART0 RX）是 I²S 数据引脚 |
| `esp32s3` target | XIAO 就是一颗普通的 ESP32-S3，而不是带自有板卡文件的 Plus 变体 |

在 IDE 中，选择 **ESP32S3 Dev Module**，并设置 Flash Size 16 MB、PSRAM
**OPI PSRAM**、Partition Scheme **ESP SR 16MB**、USB CDC On Boot **Enabled**——
这些必须与 FQBN 完全一致。

## 设置关键词

这里有两种不同的东西都被称为“keyword”：

| 内容 | 存放位置 | 修改它需要 |
| --- | --- | --- |
| 唤醒词 **“Jarvis”** | model 包 `build/srmodels_jarvis.bin` | 重新烧录 model |
| **九条指令** | `firmware/wake_demo/wake_demo.ino` 中的 `sr_commands[]` | 重新构建并烧录 |

### 唤醒词

唤醒词在 model 里，而不在 sketch 中。本构建使用
`wakenet9l_tts1h8_Jarvis_3_0.627_0.632`，在 30–50 cm 处测得 4/4，在
1.5–2 m 处测得 3/3。`build/` 中提交的包为：

| 包 | 大小 | 用途 |
| --- | --- | --- |
| `srmodels_jarvis.bin` | 3,340,189 B | **要烧录的那个**——“Jarvis”，阈值 `0.627_0.632` |
| `srmodels_stock_backup.bin` | 3,340,296 B | 出厂 “Hi ESP”，最后兜底回滚用 |

更换唤醒词意味着更换 WakeNet model——要么来自乐鑫 model zoo 的另一个包，
要么是你自己训练的——而 sketch 中无需任何改动。model 名称中的数字是其
检测阈值；它们存放在包内部，因此灵敏度是通过重新打包来调节，而不是通过
编辑 sketch。

:::note 其他唤醒词，其他关键词列表
同一仓库还带有第二个 demo，使用不同的唤醒词和它自己的八条短语列表——参见
[`pc_brain_walle/`](https://github.com/KasunThushara/reSpeaker_44wakeword/tree/main/pc_brain_walle)
（例如 “go straight ahead” 和 “charge your battery” 这样的短语）以及它在
`build/` 中的自有包。阅读它是了解另一套关键词如何接线的最快方式——
但本页只讨论 **Jarvis** 和下面这九条指令，因为 HUD、brain 中的 id 和
`build/srmodels_jarvis.bin` 都是与这对组合匹配的。
:::

### 指令

打开 `firmware/wake_demo/wake_demo.ino`，将顶部附近的两个表替换为下面这段
代码。id 必须与 `pc_brain/brain.py` 中的 `COMMANDS` 完全一致；它们是开发板、
大脑和 HUD 之间的契约，并且 **不是** 数组索引。

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```cpp
static const sr_cmd_t sr_commands[] = {
  {1, "play some music"},
  {2, "stop the music"},
  {3, "move your head"},
  {4, "tell me a joke"},
  {5, "change the mood"},

  {7, "open my tasks"},
  {8, "shut it down"},
  {9, "ask the model"},
};

static const char *PHRASE_TEXT[] = {

  "change the mood", "show me the weather", "open my tasks", "shut it down",
  "ask the model"

```

- **三个或更多单词，每条短语一个独特动词**——play / stop / move / tell /
  change / show / open / shut / ask
- 避免最小对立体（“show me the weather”和“show me the time”会互相抢匹配）
- 避免 `-ing` 形式和词表之外的单词；MultiNet 的 G2P 无法发音 “todo”，
  这就是为什么短语是 **“open my tasks”** 而不是

- **three or more words, one distinct verb each** — play / stop / move / tell /
  change / show / open / shut / ask
- avoid minimal pairs (“show me the weather” and “show me the time” steal each
  other's matches)
- avoid `-ing` forms and out-of-vocabulary words; “todo” cannot be pronounced by
  MultiNet's G2P, which is why the phrase is **“open my tasks”** and not
  “显示我的待办事项”
- 在 `brain.py` 中不存在 id 的新短语是无害的，但
  什么也不会做
- **9 个短语是这张表舒适的上限**

:::note 灯环仍然会亮起，但不会区分各个命令
同一草图中的 `animForId()` 通过 **id 范围** 映射动画，这是该草图为演示写作时遗留下来的。使用上面这九个 id 时，**1–6**
都会播放“播放一些音乐”的色轮，而 **7–9** 会播放笑话彩虹；
`A_WEATHER`、`A_SHUT` 和 `A_ASK` 永远不会被触发。这只是外观问题——
唤醒闪光、提示音和数据包都不受影响。如果演示需要每个命令使用不同的
动画，请把 `animForId()` 替换为一个包含九项的表，而不是
按范围切换。
:::

### 品牌化日志（可选）

该语音包和草图与仓库中的另一个演示共用，所以开发板在启动时打印的字符串
仍然是那个演示的名字。没有任何功能依赖这些字符串——
但本页上的启动日志写的是 JARVIS，使其一致会让故障排查
容易得多。在 `wake_demo.ino` 中有三个位置：

替换打开 `setup()` 的四行 `Serial.println`：

__CODE_LINE_PLH__
```cpp
  Serial.println(F("=== wake_demo jarvis: Jarvis -> chime -> action -> PC + LED -> DOA ==="));
  Serial.println(F("say \"Jarvis\", then one of the 9 voice actions:"));
  Serial.println(F("  play some music / stop the music / move your head"));
  Serial.println(F("  tell me a joke / change the mood / show me the weather"));
  Serial.println(F("  open my tasks / shut it down / ask the model"));

`ESP_SR: ok` 之后的 `ready -` 这一行：

__CODE_LINE_PLH__
```cpp
  Serial.println(F("ready - say Jarvis, then a command right away"));

以及唤醒横幅：

__CODE_LINE_PLH__
```cpp
    Serial.printf("\n[%6lu ms] *** \"HI JARVIS\" #%lu ***\n",

跳过这一步开发板也能完全一样地工作——它只是会记录 `walle`、`Hi Walle`、
`8 voice actions` 和 `*** "HI WALLE" #1 ***`，如果你要
和下面的示例做 diff，这会让人困惑。

### 把模型放进构建目录

核心的构建后钩子只会在找到
`{build.path}\libraries\ESP_SR` 时复制 `srmodels.bin`——但它永远找不到，因为 ESP-SR 是就地编译的。
在上传前手动复制语音包，否则开发板会使用
出厂的 “Hi ESP” 语音包启动。

__CODE_LINE_PLH__
```powershell
Copy-Item build\srmodels_jarvis.bin build\wake_demo\srmodels.bin -Force

## 添加 WiFi、PC 地址和端口

编辑 `setup()` 上方的那一块：

__CODE_LINE_PLH__
```cpp
#define WIFI_SSID "YOUR_2G_SSID"
#define WIFI_PASS "YOUR_PASSWORD"
#define PC_IP     "192.168.7.217"
#define PC_PORT   9001

克隆版本出厂时 `WIFI_SSID` 和 `WIFI_PASS` **为空**，而一对空值并不是
你之后可以修复的错误路径：开发板会以仅本地模式启动，打印
`WiFi: no credentials - edit WIFI_SSID / WIFI_PASS`，并且永远不会发送数据包。
在第一次烧录前就把这两个都填好。

- **仅支持 2.4 GHz**，WPA2，两台设备在同一子网内，不能有 AP/客户端
  隔离。
  - 给 PC 一个**固定**地址（DHCP 保留）。大脑从传入的数据包中学习
  开发板的地址，但开发板在启动时就需要知道 PC 的地址。
  - 没有设置门户：更改 WiFi 或 PC 地址意味着重新构建
  并重新烧录。

  :::note 不要用 ping 来检查链路
在有多个接入点的场馆网络上，开发板可能会落在
子网的另一半——一个 `/23` 桥把 `192.168.6.x` 分配给 2.4 GHz
无线，把 `192.168.7.x` 分配给 5 GHz 无线是很常见的。即使 UDP 流量完全正常，
两个无线客户端之间的 ICMP 通常也会被丢弃，所以 `ping` 会在一条
实际可用的链路上报告
“Destination host unreachable”（目标主机不可达）。

改为根据开发板自己的日志来判断链路：`-> PC  JARVIS 0001 4` 后面跟着
`<- ACK 1` 意味着双向都已连通。如果 ACK 一直没到，那就检查
防火墙。
:::

:::caution PC 地址也以八位组形式写入
`PC_IP` 只在日志行中使用。UDP 目标是三个独立的
`IPAddress(192, 168, 7, 217)` 调用——ARP 预热数据报、`sendCommand()`
和 `resendCommand()`。请在这三个地方都替换八位组，否则开发板会和
错误的 PC 通信，而日志却打印正确的地址。
:::

| 方向 | 协议 | 端口 | 用途 |
| --- | --- | --- | --- |
| 开发板 → PC | UDP | **9001** | `JARVIS <seq> <id>`，ACK 返回到开发板的源端口 |
| PC → 开发板 | UDP | **9100** | 16 kHz PCM 音乐和 TTS，以及 `JV <pct>` 音量数据包 |
| 浏览器 → PC | TCP | **8080** | HUD、API、SSE |

在 PowerShell 中以管理员身份打开一次这些端口：

__CODE_LINE_PLH__
```powershell
New-NetFirewallRule -DisplayName "JARVIS UDP in"  -Direction Inbound -Protocol UDP -LocalPort 9001,9100 -Action Allow -Profile Private
New-NetFirewallRule -DisplayName "JARVIS HTTP in" -Direction Inbound -Protocol TCP -LocalPort 8080 -Action Allow -Profile Private

在 Windows 已经信任的网络上，这些规则往往是多余的——
第一次 `python.exe` 绑定 9001 时会弹出提示，点 “Allow” 就够了。如果
你关闭了那个提示、LAN 配置文件是 Public，或者开发板日志里
出现 `no ACK` 而 PC 端什么都没显示，就添加这些规则。

## 烧录

编译 → 复制模型 → 上传，作为一个连续步骤。针对过期的
构建目录上传会同时烧录过期的应用程序 *和* 过期的模型。

__CODE_LINE_PLH__
```powershell
$cli  = "C:\Users\<you>\AppData\Local\Programs\Arduino IDE\resources\app\lib\backend\resources\arduino-cli.exe"


& $cli compile --fqbn $fqbn --output-dir build\wake_demo firmware\wake_demo
Copy-Item build\srmodels_jarvis.bin build\wake_demo\srmodels.bin -Force
& $cli upload -p COM9 --fqbn $fqbn --input-dir build\wake_demo

把 `COM9` 替换为你的端口（在 macOS 上是 `/dev/cu.usbmodem*`，在
Linux 上是 `/dev/ttyACM*`）。如果烧录无法连接，按住 **BOOT**，点按
**RESET**，松开 **BOOT** 然后重试。

以 **115200** 打开串口监视器。关键是：

__CODE_LINE_PLH__
```text
=== wake_demo jarvis: Jarvis -> chime -> action -> PC + LED -> DOA ===
say "Jarvis", then one of the 9 voice actions:
  play some music / stop the music / move your head
  tell me a joke / change the mood / show me the weather
  open my tasks / shut it down / ask the model
WiFi: joining YOUR_2G_SSID......
WiFi: ip=192.168.7.205 rssi=-52 dBm -> PC 192.168.7.217:9001
volume: 70% (-3.0 dB, DAC 0x06) boot
i2s full duplex: ok
audio: ring 96000 bytes (ok)
audio: listening on 9100
audio tuning: AGCMAXGAIN=64, ASROUTGAIN=1.5, ASR on
  -> DOA idle (boot)
MC Quantized vadnet1:vadnet1_mediumv1_Speech_1_0.5_0.1, min speech:128 ms, min noise:992 ms, mode:0, threshold:0.500, channel:1, tigger:v1
MC Quantized wakenet9: wakenet9l_tts1h8_Jarvis_3_0.627_0.632, tigger:v4, mode:0, p:0
Build fst from commands.
Quantized MultiNet7:rnnt_ctc_2.0, name:mn7_en
Quantized MultiNet7 search method: 2, time out:5.8 s
Build fst from commands.
ESP_SR: ok
ready - say Jarvis, then a command right away
  DOA 183 deg

- `WiFi: ip=…` —— 如果这一步失败，说明凭据或频段有误
- **wakenet 行**必须显示 `Jarvis` 和 `0.627_0.632`；如果显示的是 `Hi ESP`，
  说明跳过了模型复制步骤
  - `ESP_SR: ok` —— 如果在这里挂起或崩溃，说明模型缺失于
  构建目录
  - `DOA … deg` 会以大约每秒十次的频率不断重复；那是灯环在
  追踪人声，不是错误。日志设计上就是很啰嗦

说一次 **“Jarvis”**。灯环闪烁，提示音响起，日志打印
`*** "HI JARVIS" #1 ***`。紧接着说一个命令，开发板会用它匹配到的
短语来回应：

__CODE_LINE_PLH__
```text
[197851 ms] *** "HI JARVIS" #1 ***
[198520 ms] chime done
[198671 ms] command mode open
[198997 ms] listening for a command (6.5 s)
[200773 ms] raw id=4 phrase=4 -> "tell me a joke" -> cmd 4
[200774 ms] -> PC  JARVIS 0001 4
     <-     ACK 1

如果你的日志显示的是 `HI WALLE`，那说明你跳过了品牌化步骤——
无论哪种情况，唤醒和命令本身都是正常的。

| 症状 | 原因 | 解决方法 |
| --- | --- | --- |
| `Sketch too big` | 分区方案错误 | 使用 `PartitionScheme=esp_sr_16` |
| 没有串口输出 | 未设置 `CDCOnBoot` | 添加 `CDCOnBoot=cdc`，重新烧录 |
| `ESP_SR: FAILED` 或重启循环 | `build\wake_demo` 中缺少模型 | 再次复制 `srmodels_jarvis.bin` |
| 在 “Hi ESP” 时唤醒 | 烧录了出厂语音包 | 重复复制步骤，检查 wakenet 行 |
| 唤醒触发，但 PC 上没有任何反应 | 短语或 id 与上面九个不一致 | 同时修正 `sr_commands[]` 和 `brain.py` |
| 开发板日志中出现 `no ACK for seq …` | PC 八位组或防火墙问题 | 修正所有三个 `IPAddress(...)` 调用，允许 UDP 9001 |
| HUD 正常但事件日志从不更新 | 旧版 `brain.py` 仍占用 9001/8080 | 停止所有 python 进程，只启动一个 brain |

## 打开 UI

安装 Python 端，然后运行启动器：

__CODE_LINE_PLH__
```powershell
py -3.11 -m pip install numpy soundfile scipy
cd reSpeaker_44_wakeword\pc_brain
.\start_demo.bat

`start_demo.bat` 会启动 brain，并在 kiosk 模式下打开 Chrome（回退为 Edge），
访问 **http://localhost:8080** 且允许自动播放，因此第一个声音
不需要点击。手动方式：先运行 `python brain.py`，然后打开同一个 URL。
按 **Alt+F4** 退出 kiosk；关闭最小化的 “JARVIS brain” 窗口以停止 UDP。

:::caution 一次只能运行一个 brain
启动器不会检查是否已有实例在运行。一次先前运行遗留的 `brain.py`
会占用 UDP 9001 和 TCP 8080，新启动的副本会抓取仍然空闲的
任一端口，而 HUD 会悄悄继续为*旧*进程提供服务——页面看起来
是活的，但事件日志从不更新，数据包也发往错误的 brain。在
演示前，先关闭之前的 “JARVIS brain” 窗口，或者：

__CODE_LINE_PLH__
```powershell
Get-Process python | Stop-Process -Force
```

{/* TODO(image): 在这里添加一个 HUD 截图——钢铁侠半身线框、方舟反应堆、九个命令按钮、事件日志。 */}

屏幕上：

- **钢铁侠线框半身像**，方舟反应堆会随音乐跳动
- **左侧**：九个命令按钮，标签是要说出的精确短语；按键
  **1–9** 发送相同的 id，用于在不说话的情况下进行测试
  **1–9** send the same ids, which is how you test without speaking
- **左上角**：状态以及开发板听到的短语；**右上角**：
  `LINKED` / `NO LINK`、PC 的地址以及时钟
- **右下角**：事件日志，最新的在最前；**中下部**：天气、任务、笑话和模型回答的卡片
  weather, tasks, jokes and model answers

手边没有开发板？大脑可以被直接驱动：

```powershell
python sim.py 1        # play music
python sim.py 4        # tell a joke
python sim.py demo     # 1 -> 2 -> 4 -> 5 with pauses
```

`config.json` 保存场地设置：`esp_ip`（最近一次已知的开发板地址，
自动刷新）、`audio_sink`（`speaker` 流式传输到机器人，`pc`
本地播放）、`default_track`、`weather_lat` / `weather_lon`，以及
`openrouter_key` —— 将该键留空时，笑话/回答会使用预置台词。
优先使用环境变量 `OPENROUTER_API_KEY`，而不是把它写进文件。
file.

随附的模型列表全部是 `:free` 路由，而这些路由竞争非常激烈：
日志中的 `HTTP 429 … rate-limited upstream` 是正常现象，不是密钥错误。大脑会
依次尝试 `openrouter_model` → `openrouter_fallbacks` → 预置台词，因此**“询问
模型”在回答前可能需要 15–25 秒**，有时会从离线列表中回答。使用 `curl`
对 `https://openrouter.ai/api/v1/key` 进行请求来验证密钥本身，
而不是通过观察单次回复。

:::note 语音回复需要 Windows
大脑使用 Windows 的 **System.Speech** 合成语音，并将 WAV 流式传输到
reSpeaker。在 macOS 或 Linux 上，唤醒词、命令、卡片、日志和音乐都仍然可用，
但 JARVIS 不会说话。
:::

## 限制

- **仅支持英语** —— 此版本中的 MultiNet 模型是 `mn7_en`。
- **全程 16 kHz** —— 约 8 kHz 的音频带宽；足以用于语音和提示音，
  但不是高保真。
- **一次仅支持一个音频流** —— 新的声音会中断前一个声音。
- **启动时需要 WiFi**，用于任何需要连接到 PC 的功能；开发板在离线时
  仍会被唤醒并闪烁，但不会有动作到达。
- **唤醒模型是用 TTS 训练的**，比“Hi ESP”对发音更敏感。
  在嘈杂环境中需要重新校准阈值。

## 资源

- 项目（固件、大脑和 HUD）：[KasunThushara/reSpeaker_44_wakeword](https://github.com/KasunThushara/reSpeaker_44_wakeword)
- 开发板介绍和固件更新：[reSpeaker XVF3800 44mm](https://wiki.seeedstudio.com/cn/respeaker_44mm_introduction/)
- XMOS 固件镜像：[reSpeaker_XVF3800_4MIC_44mm](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- XIAO 设置：[XIAO ESP32-S3 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/)
- ESP-SR 模型和 API：[espressif/esp-sr](https://github.com/espressif/esp-sr)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
