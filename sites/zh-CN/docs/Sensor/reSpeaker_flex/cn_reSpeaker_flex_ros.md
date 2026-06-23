---
description: 一个使用 reSpeaker Flex 和 Groq AI 的语音控制 ROS2 TurtleSim 项目，将口头指令转换为实时机器人运动、转向动作和语音反馈。
title: 在 reSpeaker 上构建 ROS2 语音流水线
keywords:
  - reSpeaker
  - 机器人
  - ROS2
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_ros_banner.png
slug: /respeaker_flex_ros2_voice_pipeline
sku: 114993700, 101991441, 114993701,100099135,,100005504
last_update:
  date: 5/27/2026
  author: Kasun Thushara
createdAt: '2026-05-27'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/cn/respeaker_flex_ros2_voice_pipeline/
---

## 介绍

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_ros_banner.png" alt="pir" width={800} height="auto" /></p>

本项目使用 reSpeaker 麦克风阵列和 ROS2，将你的语音转换为 TurtleSim 控制。说出 “Hey Jarvis” 加上一条指令，Jarvis 会录制音频，使用 Groq Whisper 转写，使用 Groq LLaMA 解析意图，并通过 Groq Orpheus TTS 做出语音回应。它支持前进/后退运动、角度转向、基于声源方向（DoA）的朝向调整，以及即时停止指令。系统将唤醒词检测、音频采集、ROS2 话题以及模拟器指令发布整合到一个无缝的流水线中。它针对 Ubuntu 和 ROS2 Humble 进行了快速部署设计，让语音驱动的机器人实验易于运行。


<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th></th>
    <th>reSpeaker XVF3800</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>

    <td
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '0 20px'
      }}
    >
      或
    </td>

    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                立即获取 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>

    <td></td>

    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                立即获取 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>


## 第 1 部分 — 安装 ROS2 Humble

> 如果你的机器上已经安装了 ROS2 Humble，可以跳过本部分。
> 通过运行：`ros2 --version` 进行检查

**1.1 设置 ROS2 的 apt 软件源**

```bash
# Make sure your system is up to date
sudo apt update && sudo apt upgrade -y

# Install required tools
sudo apt install -y software-properties-common curl

# Add the ROS2 GPG key
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key \
    -o /usr/share/keyrings/ros-archive-keyring.gpg

# Add the ROS2 repository to your sources
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] \
    http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" \
    | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

**1.2 安装 ROS2 Humble Desktop**

```bash
sudo apt update
sudo apt install -y ros-humble-desktop
```

> `desktop` 版本包含 TurtleSim、RViz 以及你所需的全部工具。
> 下载大小约为 1 GB —— 可能需要几分钟时间。

**1.3 安装构建工具**

```bash
sudo apt install -y python3-colcon-common-extensions python3-rosdep
```

**1.4 在每个终端中自动 source ROS2**

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

**1.5 验证安装**

```bash
ros2 --version
# Expected output: ros2 cli    version 0.18.x (or similar)
```

然后测试 TurtleSim 以确认一切正常工作：

```bash
# Terminal 1
ros2 run turtlesim turtlesim_node

# Terminal 2
ros2 run turtlesim turtle_teleop_key
```

你应该会看到一个窗口，其中有一只可以用方向键控制的乌龟。完成后在两个终端中按下 `Ctrl+C`。

## 第 2 部分 — 为设备创建 udev 规则

创建一个新的 udev 规则，以确保 reSpeaker USB Mic Array 拥有正确的权限：

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

在文件中添加以下几行：

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

重新加载 udev 规则并重启服务

重新加载 udev 规则并重启服务，使更改生效：

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

拔下并重新插入你的 reSpeaker USB Mic Array 以应用新规则。

---

## 第 3 部分 — 获取 Groq API Key

本项目使用 Groq 的免费云 API 来完成：
- **Whisper** — 语音转文本
- **LLaMA 3** — 理解你的指令
- **Orpheus** — Jarvis 的语音回复

1. 访问 [console.groq.com](https://console.groq.com) 并创建一个免费账号
2. 点击左侧边栏中的 **API Keys**
3. 点击 **Create API Key**，给它起一个名字（例如 "jarvis"），并复制它
4. 将它保存在安全的位置 —— 稍后你会把它粘贴到 `config.env` 中

> Groq 的免费套餐足以满足开发和测试需求。
> 开始使用不需要信用卡。

---

## 第 4 部分 — 安装 Python 依赖（系统范围）

> **重要：** 不要为本项目使用虚拟环境。
> ROS2 使用系统 Python，无法看到安装在 venv 中的包。
> 我们使用 `--break-system-packages` 安装所有内容，以便让 ROS2 节点可以使用它们。

```bash
pip install \
    groq \
    openwakeword \
    pyaudio \
    numpy<2 \
    python-dotenv \
    pyusb \
```

**下载 “Hey Jarvis” 唤醒词模型**

```bash
python3 -c "import openwakeword; openwakeword.utils.download_models()"
```

这会将预训练模型下载到 `~/.openwakeword/`。大约需要 30 秒。

**安装 PortAudio（PyAudio 所需）**

```bash
sudo apt install -y portaudio19-dev python3-pyaudio
```

---

## 第 5 部分 — 创建你的 ROS2 工作空间

> 如果你已经有 `~/ros2_ws` 工作空间，请跳到第 6 部分。

```bash
# Create the workspace directory
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws

# Build the empty workspace to set it up
colcon build

# Source it and add to .bashrc so it loads automatically
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

---

## 第 6 部分 — 克隆并配置项目

**6.1 克隆仓库**

**如果你使用的是 Flex**

```bash
cd ~/ros2_ws/src
git clone https://github.com/KasunThushara/ros_voice_controller_flex.git my_robot_controller
```

**如果你使用的是 XVF3800**

```bash
cd ~/ros2_ws/src
git clone https://github.com/KasunThushara/ros_voice_controller.git my_robot_controller
```

> 你的工作空间现在应该看起来像这样：
> ```
> ~/ros2_ws/
> └── src/
>     └── my_robot_controller/
>         ├── my_robot_controller/
>         │   ├── voice_node.py
>         │   ├── rotate_doa.py
>         │   ├── wakeword.py
>         │   └── ...
>         ├── launch/
>         │   └── jarvis.launch.py
>         └── config.env.example
> ```

**6.2 创建你的配置文件**

```bash
cd ~/ros2_ws/src/my_robot_controller
cp config.env.example config.env
nano config.env
```

打开该文件并填写你的参数值：

```env
# ── Groq API (required) ────────────────────────────────
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ← paste your key here

# ── Microphone ─────────────────────────────────────────
MIC_INDEX=1          ← find the correct number in Step 6.3 below
WAKEWORD_THRESHOLD=0.5
WAKEWORD_COOLDOWN=2

# ── Recording ──────────────────────────────────────────
RECORDING_SECONDS=4
SAMPLE_RATE=16000

# ── Models ─────────────────────────────────────────────
WAKEWORD_MODEL=hey jarvis
LLM_MODEL=llama-3.1-8b-instant
STT_MODEL=whisper-large-v3-turbo
TTS_MODEL=canopylabs/orpheus-v1-english
TTS_VOICE=autumn
```

使用 `Ctrl+O`、`Enter`、`Ctrl+X` 保存。

**6.3 找到正确的 MIC_INDEX**

运行这个辅助脚本来列出所有音频输入设备：

```bash
python3 -c "
import pyaudio
p = pyaudio.PyAudio()
print('\nAvailable INPUT devices:\n')
for i in range(p.get_device_count()):
    d = p.get_device_info_by_index(i)
    if d['maxInputChannels'] > 0:
        print(f'  [{i}]  {d[\"name\"]}')
        print(f'        channels={int(d[\"maxInputChannels\"])}  rate={int(d[\"defaultSampleRate\"])}Hz')
p.terminate()
"
```

示例输出：

```
Available INPUT devices:

  [0]  HDA Intel PCH: ALC897 Analog
        channels=2  rate=44100Hz

  [1]  reSpeaker Flex XVF3800
        channels=6  rate=16000Hz    ← this is the one you want

  [2]  USB PnP Sound Device
        channels=2  rate=16000Hz
```

找到包含 **reSpeaker Flex** 或 **reSpeaker Flex XVF3800** 的那一行。记下方括号中的数字 —— 这就是你的 `MIC_INDEX`。在 `config.env` 中用该数字进行更新。

---

## 第 7 部分 — 构建软件包

```bash
cd ~/ros2_ws
colcon build --packages-select my_robot_controller
source ~/.bashrc
```

预期输出：

```
Starting >>> my_robot_controller
Finished <<< my_robot_controller [3.2s]

Summary: 1 package finished [3.5s]
```

>  每次更改任何 Python 文件时，你都必须运行 `colcon build` 并执行 `source ~/.bashrc`。

---

## 第 8 部分 — 运行项目

```bash
ros2 launch my_robot_controller jarvis.launch.py
```

你应该会看到三个进程启动：

```
[turtlesim_node-1]   [INFO] Spawning turtle [turtle1] at x=[5.54], y=[5.54]
[angle_controller-2] [INFO] AngleController ready — listening on /target_angle
[voice_command-3]    [INFO] reSpeaker Flex XVF3800 found — DoA ready
[voice_command-3]    [WakeWord] Listening on device 1 (6ch → mono) for 'hey jarvis' ...
[voice_command-3]    [INFO] Jarvis is listening ...
```

会弹出一个窗口显示小海龟。现在说：

> **"Hey Jarvis, move forward"**

Jarvis 会回复 “Moving forward!”，然后小海龟会移动。

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/ros-results.png" alt="pir" width={800} height="auto" /></p>

## 语音指令参考

| 说这句 | 会发生什么 |
|---|---|
| `"Hey Jarvis, move forward"` | 小海龟向前移动 1 步 |
| `"Hey Jarvis, move backward"` | 小海龟向后移动 1 步 |
| `"Hey Jarvis, turn left"` | 小海龟向左旋转 90° |
| `"Hey Jarvis, turn left 45"` | 小海龟向左旋转 45° |
| `"Hey Jarvis, turn right"` | 小海龟向右旋转 90° |
| `"Hey Jarvis, turn right 30 degrees"` | 小海龟向右旋转 30° |
| `"Hey Jarvis, turn to my direction"` | 小海龟朝向你的声音方向（DoA） |
| `"Hey Jarvis, face me"` | 同上 |
| `"Hey Jarvis, turn to 90"` | 小海龟旋转到绝对 90° |
| `"Hey Jarvis, face 180 degrees"` | 小海龟旋转到绝对 180° |
| `"Hey Jarvis, spin around"` | 小海龟做一次完整的 360° 旋转 |
| `"Hey Jarvis, do a 360"` | 同上 |
| `"Hey Jarvis, stop"` | 小海龟立即停止 |

---

## 项目文件结构

```
my_robot_controller/
│
├── my_robot_controller/          # Python package (ROS2 nodes)
│   ├── __init__.py
│   ├── voice_node.py             # Main voice pipeline node
│   ├── rotate_doa.py             # PID angle controller node
│   ├── wakeword.py               # Wake word detection (openwakeword)
│   ├── audio_recorder.py         # Mic recording after wake word
│   ├── stt.py                    # Speech-to-text (Groq Whisper)
│   ├── llm.py                    # Intent parsing (Groq LLaMA)
│   ├── tts.py                    # Text-to-speech (Groq Orpheus)
│   └── config.py                 # Loads settings from config.env
│
├── launch/
│   └── jarvis.launch.py          # Starts all 3 nodes together
│
├── config.env                    # Your secrets (not in git)
├── config.env.example            # Template — copy to config.env
├── package.xml
└── setup.py
```

### 节点如何连接

```
reSpeaker Flex (USB)
        │
        ├── [voice_command node]
        │     openwakeword → Groq Whisper → Groq LLaMA → Groq Orpheus
        │     │                                          │
        │     │ publishes /target_angle (Float32)        │ speaks reply
        │     │ publishes /turtle1/cmd_vel (Twist)       │
        │     │                                          ▼
        │     ▼                                     Speaker output
        └── [angle_controller node]
              subscribes /target_angle
              subscribes /turtle1/pose
              PID control → publishes /turtle1/cmd_vel
                                        │
                                        ▼
                              [turtlesim_node]
```

---

## 配置参考

所有设置都保存在 `config.env` 中。编辑并重新构建以应用更改。

| 变量 | 默认值 | 描述 |
|---|---|---|
| `GROQ_API_KEY` | *(required)* | 你的 Groq API 密钥 |
| `MIC_INDEX` | `1` | reSpeaker 的 PyAudio 设备索引 |
| `WAKEWORD_MODEL` | `hey jarvis` | 唤醒词短语 |
| `WAKEWORD_THRESHOLD` | `0.5` | 检测灵敏度（0.0–1.0，数值越低越灵敏） |
| `WAKEWORD_COOLDOWN` | `2` | 唤醒词可再次触发前的冷却时间（秒） |
| `RECORDING_SECONDS` | `4` | 唤醒词触发后录音时长 |
| `SAMPLE_RATE` | `16000` | 音频采样率（Hz） |
| `LLM_MODEL` | `llama-3.1-8b-instant` | 用于意图解析的 Groq LLM 模型 |
| `STT_MODEL` | `whisper-large-v3-turbo` | 用于转写的 Groq Whisper 模型 |
| `TTS_MODEL` | `canopylabs/orpheus-v1-english` | Groq TTS 模型 |
| `TTS_VOICE` | `autumn` | 语音输出所用的声音（`tara`、`leah`、`leo`、`dan`、`mia`） |

---


## 资源

基于以下组件构建：
- [Seeed Studio reSpeaker Flex](https://wiki.seeedstudio.com/cn/respeaker_flex_introduction/) — 带有 XMOS XVF3800 芯片的麦克风阵列
- [ROS2 Humble](https://docs.ros.org/en/humble/) — 机器人中间件
- [openwakeword](https://github.com/dscripka/openWakeWord) — 本地唤醒词检测
- [Groq](https://groq.com/) — 超高速 Whisper STT、LLaMA LLM、Orpheus TTS
- [TurtleSim](https://docs.ros.org/en/humble/Tutorials/Beginner-CLI-Tools/Introducing-Turtlesim/Introducing-Turtlesim.html) — ROS2 小海龟模拟器


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
