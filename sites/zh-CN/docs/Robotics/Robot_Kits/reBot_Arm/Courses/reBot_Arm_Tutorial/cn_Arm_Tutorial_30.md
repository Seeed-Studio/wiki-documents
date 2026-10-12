---
description: "Seeed 具身智能入门课程第六阶段：机器人视觉与自主抓取第 30 章 — 语音与多模态交互：使用 reSpeaker 通过语音控制 reBot Arm，本文档将手把手地从零开始，带你搭建一个'能听会动'的智能机械臂系统。"
title: 第 30 章 - 语音与多模态交互
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_30
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_30/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 6 阶段 · 第 30 章 · 选修</span>
    <h2>30. 语音与多模态交互</h2>
    <p>
      使用 reSpeaker 通过语音控制 reBot Arm，本文档将手把手地从零开始，带你搭建一个"能听会动"的智能机械臂系统。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 语音与多模态交互

## 章节概述

使用 reSpeaker 通过语音控制 reBot Arm，本文档将手把手地从零开始，带你搭建一个"能听会动"的智能机械臂系统。

这是一个**语音驱动的智能机械臂控制系统**

当你说"hello"时，机械臂会转向你并点头；说"dance"时，它会欢快地摇摆；走到房间另一侧拍手，它会"听到"声音方向并转身面向你

系统做三件事：

- **听** —— 通过麦克风阵列采集声音，并判断声音方向
- **懂** —— 通过 AI 识别语言，理解意图
- **动** —— 控制机械臂做出相应动作

本项目展示了一个完整的"端云协同 + 多传感器融合"系统：

- **端侧（本地）**：DOA 声源定位、运动控制、待机动画
- **云端**：语音识别（Whisper）、意图理解（Llama）

这种架构的优势：

- DOA 是实时任务（< 100 ms），必须本地完成
- 语音识别需要大模型，必须云端完成
- 运动控制涉及安全闭环，必须本地完成

**两种交互模式**

<sheet sheet-id="bT22l1" token="BXyssJZNMhqOL7tsLspcVbBan1I"></sheet>

**系统架构**

```Plain Text
You speak / make a sound
      ↓
[ reSpeaker ]  4 麦克风阵列 + XVF3800 芯片
      ↓
[ Ubuntu ]  Python 3.10 主程序
      ↓
   两条路径：
   ├─→ DOA 模式：本地计算声源方向 → 控制机械臂转向
   └─→ 语音模式：上传 Groq 云端 AI → Whisper 识别 + Llama 理解 → 控制机械臂
      ↓
[ reBot Arm ]  7 自由度机械臂执行
```

- 分层架构

  - **硬件层**（你能摸到的设备）：
  
    - reSpeaker（4 麦克风阵列 XIAO ESP32S3 控制器）
    - reBot Arm B601-DM（6 自由度机械臂 + 夹爪）
    - Ubuntu 22.04 电脑（运行主程序）
  - **驱动层**（让硬件能互相通信）：
  
    - USB 音频通信（pyusb / libusb）—— 连接麦克风阵列
    - 串口通信（MotorBridge）—— 连接机械臂
    - Web API（Groq Cloud）—— 连接云端 AI 服务
  - **算法层**（负责处理数据的"大脑"）：
  
    - DOA 声源定位（本地实时计算）
    - Whisper 语音识别（Groq Cloud）
    - Llama-3.3 意图理解（Groq Cloud）
    - 运动插值规划（本地平滑控制）
  - **应用层**（你能看到的效果）：
  
    - DOA 跟踪模式
    - 语音控制模式
    - 呼吸待机动画
    - 语音播报

## 硬件准备

## 需要准备什么

<sheet sheet-id="Ipy05C" token="BXyssJZNMhqOL7tsLspcVbBan1I"></sheet>

**为什么选这套硬件**

- **reSpeaker XVF3800** 是 Seeed Studio 与 XMOS 合作的 4 麦克风阵列：
- 内置 XVF3800 DSP 芯片，原生支持 DOA、回声消除、噪声抑制
- 不需要额外的算法开发，硬件级完成声源定位
- USB 接口即插即用

**reBot Arm B601-DM** 是桌面级 7 自由度机械臂：

- 7 自由度意味着可以做出非常灵活的动作（接近人手臂）
- B601-DM 是 DM 电机版本（另一种是 RS 舵机版本），DM 电机精度更高
- 自带 Pinocchio 运动学库支持

## 硬件介绍

reSpeaker 麦克风阵列

- **4 麦克风** 智能语音处理模块
- 核心特性

  - **分体设计**：核心板与麦克风阵列板可分离，方便在不同设备中灵活布置
  - **360° 拾音**：4 个麦克风环形排布，可以接收各个方向的声音
  - **内置智能处理**：集成 XMOS XVF3800 芯片，具备回声消除、噪声抑制、声源定位（DOA）
  - **双 USB 接口**：USB-C 接口和 PH2.0 锁扣接口
  - **内置功放**：可直接驱动 10W 扬声器（通过 JST 接口）
  - **核心元件**
  
    <sheet sheet-id="jrmYYw" token="BXyssJZNMhqOL7tsLspcVbBan1I"></sheet>
  - **类比理解**：这是一个"顺风耳"——不仅有 4 个"耳朵"听到各个方向的声音，还能分析方向、过滤噪音。

Ubuntu 22.04 电脑

- 操作系统：Ubuntu 22.04 LTS（64 位）
- 架构：x86_64（普通 Intel/AMD 处理器电脑）
- 最低配置：CPU 4 核 / 内存 8GB / 硬盘 50GB / 网络可访问互联网

Windows 用户选择：

- 安装双系统（推荐）
- 使用虚拟机（VMware，性能有损失，本项目不推荐）

## 硬件连接示意图

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-30cn/ch30-01cn.jpg" alt="" />
</div>

连接步骤：

- 用 USB-C 线连接 reSpeaker 到电脑
- 用 USB-C 线连接 reBot Arm 到电脑
- （可选）连接音箱或耳机到 reSpeaker 音频输出
- 确保电脑已连接互联网

## 环境准备

## 安装 Miniforge

```Bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

为什么要用 Miniforge 而不是系统 Python

- **隔离性**：每个项目有独立的 Python 环境，互不影响
- **版本灵活**：可以为项目锁定特定 Python 版本（如 3.10.2）
- **依赖管理**：conda 能解析复杂的二进制依赖（如 Pinocchio 的 C++ 库）

安装向导：

- Enter 查看许可协议
- 输入 `yes` 同意
- Enter 确认安装路径（默认 `－/miniforge3`）
- 输入 `yes` 初始化 conda（推荐）

完成后关闭并重开终端：

```Bash
conda --version
# 预期：conda 24.x.x
```

## 克隆项目代码

```Bash
git clone https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git
cd reBot-Arm-reSpeaker-Flex
```

网络慢可换镜像：`git clone https://ghproxy.com/https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git`

## 创建 Conda 环境

```Bash
conda env create -f environment.yml
```

过程约 10-30 分钟，会：

- 创建名为 `flex` 的 Python 3.10.2 环境
- 安装 pinocchio、numpy、pyusb 等依赖

成功标志：

```Plain Text
Executing transaction: ... done
# To activate this environment, use
#     $ conda activate flex
```

为什么要 pinocchio

- Pinocchio 是一个快速 C++ 实现的刚体运动学库
- 提供正向运动学（FK）、逆向运动学（IK）、动力学计算
- 是本项目机械臂运动控制的核心依赖

## 激活 Conda 环境

```Bash
conda activate flex
```

激活成功：终端提示符前出现 `(flex)`

```Bash
(flex) user@computer:~/reBot-Arm-reSpeaker-Flex$
```

每次打开新终端都要重新激活。

## 安装系统依赖

```Bash
sudo apt-get update && sudo apt-get install -y ffmpeg
```

ffmpeg 的作用

- ffmpeg 是一个音视频处理工具，本项目使用它在语音合成（TTS）后处理音频文件：转换音频格式、调整采样率、合并/剪辑音频

## 安装 uv

```Bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

为什么需要 uv

- uv 是一个极快的 Python 包管理工具（比 pip 快 10-100 倍）
- 项目使用的 `motorbridge` 库需要通过 uv 安装
- uv.lock 文件能精确锁定依赖版本

安装后关闭并重开终端。

## 克隆机械臂控制库

```Bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

预期输出：显示安装进度且不报错。

## 设置 PYTHONPATH

```Bash
export PYTHONPATH="$PWD:$PYTHONPATH"
```

这意味着什么

- 当 Python 导入库时，会在 `sys.path` 指定的路径中查找。该命令告诉 Python"在默认搜索路径之外，再在这个目录中查找"。
- ⚠ 此设置每次关终端会失效。永久方案：

  ```Bash
  echo 'export PYTHONPATH="'$PWD':$PYTHONPATH"' >> ~/.bashrc
  source ~/.bashrc
  ```

为什么不用 pip install

- `reBotArm_control_py` 是开发中的库，不是发布到 PyPI 的稳定包
- 设为 editable install 更灵活
- 用 PYTHONPATH 直接指向源码目录也可行

## 设置串口权限

```Bash
sudo chmod 666 /dev/ttyACM*
```

为什么要这样

- Linux 系统对硬件设备有严格的权限管理。默认情况下，普通用户不能直接访问串口设备。该命令允许所有用户对这些设备进行读写。

此设置在重启后会失效。永久方案：

```Bash
sudo usermod -a -G dialout $USER# 注销并重新登录生效
```

- **原理**：`dialout` 是 Linux 中拥有串口设备访问权限的组。加入这个组后，用户对该组拥有的设备有读写权限。

## 配置 Groq API Key

获取 API Key：

- 访问 [https://console.groq.com/keys](https://console.groq.com/keys)
- 注册/登录（邮箱或 GitHub 账号）
- 点击 "Create API Key"
- 复制 Key（格式 `gsk_xxxxxxxxxxxx`）

配置到代码：

```Bash
cd ~/reBot-Arm-reSpeaker-Flex
nano sound_tracking_arm.py
```

找到 `VOICE_CFG`：

```Python
VOICE_CFG = {
    "api_key": "12345678",   # ← 替换为你的 API Key
    ...
}
```

改为：

```Python
"api_key": "gsk_aBcDeFgHiJkLmNoPqRsTuVwXyZ",
```

- 保存：Ctrl O → Enter → Ctrl X

安全提醒：

- 不要将 API Key 分享到公共仓库
- 不要截图发社交媒体
- 泄露后立即在 Groq 控制台删除并重新生成

## 硬件连接与组装

## 硬件连接

- 步骤 1：连接 reSpeaker

  - 用 USB-C 线连接 reSpeaker 到电脑
  - reSpeaker 上的指示灯应点亮
  - `lsusb` 应能看到 Seeed Studio 设备
- 步骤 2：连接 reBot Arm

  - 用木工夹具固定机械臂底座
  - 用 USB-C 线连接机械臂到电脑
  - 连接 24V 电源（XT30），**先不要上电**
  - **上电前安全检查清单：**
  
    - 机械臂底座已固定
    - 运动范围内无障碍物
    - 运动范围附近无人员
    - USB 线已连接
    - 电源线连接正确
- 步骤 3：开启电源

  - 检查无误后打开 24V 电源
  - 机械臂发出轻微电机上电声
  - `ls /dev/ttyUSB*` 应能看到 `/dev/ttyUSB0`

## 验证硬件连接

```Bash
arecord -l
```

预期：`card 2: XVF3800 [reSpeaker XVF3800], device 0: USB Audio [USB Audio]`

```Bash
ls -la /dev/ttyUSB0
```

预期：`crw-rw-rw- 1 root dialout ... /dev/ttyUSB0`

## 初次运行

## 运行前验证

验证 1：Python 依赖

```Bash
conda activate flex
cd ~/reBot-Arm-reSpeaker-Flex
python -c "import usb.core; import numpy; print('pyusb + numpy OK')"
```

预期：`pyusb + numpy OK`

验证 2：机械臂库

```Bash
export PYTHONPATH="$HOME/reBotArm_control_py:$PYTHONPATH"
python -c "from reBotArm_control_py.actuator import RobotArm; print('Robot Arm Library OK')"
```

- 预期：`Robot Arm Library OK`

验证 3：麦克风

```Bash
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav
aplay -D plughw:2,0 /tmp/test.wav
```

- 能听到录制的声音 = 麦克风工作正常。

## 启动流程

```Bash
cd ~/reBot-Arm-reSpeaker-Flex
python sound_tracking_arm.py
```

预期输出：

```Plain Text
==================================================
  reBot Arm B601-DM + reSpeaker Flex
  Please select the operating mode:
==================================================
  [1] DOA Interaction Mode (Sound Source Tracking + Standby Animation)
  [2] Voice control mode (button trigger + AI LLM control)
==================================================
Please enter the mode number (1 or 2):
```

- 输入 `1`：DOA 声源跟踪模式
- 输入 `2`：语音控制模式

直接指定模式启动：

```Bash
python sound_tracking_arm.py --mode doa    # DOA 模式
python sound_tracking_arm.py --mode voice  # 语音模式
```

## 初次运行测试

DOA 模式测试

- 程序会：初始化 USB → 连接机械臂 → 进入待机
- 测试方法：站在机械臂旁边说话或拍手
- 观察机械臂是否：转向你、点头、回到待机

语音模式测试

- 按 Enter，看到 "recording" 提示
- 说 "hello" 或 "say hello"
- 等待约 5 秒
- 观察是否：识别语音、机械臂执行动作、语音播报回复

---

## 功能详细说明

## 模式 1：DOA 声源跟踪

DOA 是什么

- DOA = Direction of Arrival（声波到达方向）
- 判断声音从哪个方向来（就像耳朵能判断声源位置）

工作流程

```Plain Text
Start the system
    ↓
Initialize USB device
    ↓
Connect reSpeaker  ←──→ Connect reBot Arm
    ↓
Loop Execution:
    ├─ Read DOA angle data (0°~360°)
    ├─ Is a valid sound source detected?
    │   ├─ No → Breathing Standby Animation → Continue Reading
    │   └─ Yes → 4-frame Angle Buffer Queue → Calculate Weighted Average Angle
    │           → Cosine Similarity Smoothing Filtering
    │           → Angle change > Trigger Threshold?
    │               ├─ No → Continue Reading
    │               └─ Yes → The robotic arm turns towards the target direction
    │                       → Perform a nodding motion
    │                       → Enter Cool Down
    │                       → Continue Reading
    ↓
Exit (Press Ctrl+C)
```

核心算法深入

- 4 帧角度缓冲队列
- **问题**：单帧 DOA 角度会跳动（±5°\－10°），直接驱动机械臂会导致不停抖动。
- **解决方案**：环形缓冲区（Ring Buffer）存储最近 4 帧的 DOA 角度数据（约 200 ms）。

  ```Plain Text
  [图示：环形缓冲区]
  
       新帧写入
          ↓
    [F4] [F3] [F2] [F1]
     │              │
     └──── 平均 ────┘
          ↓
       平滑角度
  ```
- **为什么是 4 帧**：

  - 太少：平滑效果不够（抖动仍可见）
  - 太多：响应延迟（机械臂反应慢）
  - 4 帧是经验值，兼顾平滑度和响应速度

**余弦相似度平滑滤波**

- **问题**：麦克风可能误判方向（突然噪声、反射声）。
- **解决方案**：检查最近几帧的角度一致性，差异过大视为噪声。

  ```Python
  import numpy as np
  
  def is_consistent(angles, threshold_deg=30):
      """检查最近角度是否一致"""if len(angles) < 2:
          return True# 计算相邻帧的角度差（考虑 360° 环绕）
      diffs = []
      for i in range(len(angles) - 1):
          diff = abs(angles[i+1] - angles[i])
  # 角度差可能绕 360°，取最小
          diff = min diff - 360 - diff
          diffs.append(diff)
  
  # 最大差异 < 阈值才算一致return max(diffs) < threshold_deg
  ```
- 触发阈值

  - **默认值 15°** 的设计依据：
  
    - 人耳判断声源方向误差约 ±10°\－15°
    - 阈值略大于人耳误差，避免对轻微波动响应
    - 阈值过大 → 反应迟钝
    - 阈值过小 → 频繁误触

## **冷却时间，默认值 3 秒 的设计依据：**

- 机械臂转向 + 点头约需 2-3 秒
- 冷却期内不响应新声源，避免动作未完成被打断
- 冷却时间应略大于单次动作时长

## **呼吸待机动画**

- 周期约 4 秒
- 关节角度缓慢正弦摆动 ±5°
- 视觉效果：像人在呼吸
- 表明系统运行中，给用户信心

## 模式 2：语音指令控制

完整交互闭环

- 录音 → 识别 → 理解 → 执行 → 播报

工作流程

```Plain Text
The user presses the Enter key.
    ↓
arecord starts recording (6 channels, 16kHz, 5 seconds)
    ↓
User releases Enter → Stop recording
    ↓
NumPy Audio Normalization Processing (Extract First Channel + Gain Amplification)
    ↓
Upload to Groq API
    ↓
Whisper model performs speech-to-text (STT) recognition
    ↓
Obtain text commands (e.g., "turn left")
    ↓
Send to Llama-3.3-70B large language model
    ↓
LLM understands intent + outputs JSON structured results
    ↓
Analysis results
    ├─ Invalid → Broadcast "Sorry, I didn't catch that. Could you please repeat?"
    └─ Valid → Execute the corresponding robotic arm action
              ↓
         Edge-TTS Voice Announcement Execution Result
              ↓
         Return to standby state
```

音频处理详解

```Python
# 6 通道采集
audio_data = arecord(... -c 6 -r 16000 ...)  # 6 通道，16kHz# 取第 1 通道（XVF3800 已做波束形成）
single_channel = audio_data[:, 0]

# 归一化 + 增益
normalized = single_channel / np.max(np.abs(single_channel))
amplified = normalized * 0.9  # 留 10% 余量防削波# 保存为 WAV
scipy.io.wavfile.write("output.wav", 16000, (amplified * 32767).astype(np.int16))
```

支持的语音指令

<sheet sheet-id="aVTKVh" token="BXyssJZNMhqOL7tsLspcVbBan1I"></sheet>

AI 如何理解你的话

- 使用 Prompt Engineering（提示工程）。给 AI 一个详细指令模板：
- 可以执行哪些动作
- 每个动作的含义

输出格式要求（JSON）

- 例如 "help me turn my head to the left" 会被解析为：

  ```JSON
  {"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
  ```

**好处**：不必说固定指令词，像聊天一样自然说话即可。

- Prompt 设计示例

  ```Python
  SYSTEM_PROMPT = """
  你是一个机械臂语音控制助手。用户会说出他们想让机械臂做什么。
  请从以下动作中选择一个最匹配的，并以 JSON 格式输出：
  
  可用动作：
  - turn_left: 向左转，参数 angle (默认 45)
  - turn_right: 向右转，参数 angle (默认 45)
  - say_hello: 打招呼，连续点头 2 次
  - wave: 挥手，左右摆动 2 次
  - reset: 回到初始位置
  - stop: 立即停止
  
  输出格式（严格 JSON）：
  {"action": "<动作名>", "params": {<参数>}, "reply": "<给用户的语音回复>"}
  
  不要输出任何其他内容，只输出 JSON。
  """
  ```

## 命令行参数

## 完整参数表

```Bash
python sound_tracking_arm.py [参数]
```

<sheet sheet-id="LiajL3" token="BXyssJZNMhqOL7tsLspcVbBan1I"></sheet>

## 使用示例

基本用法

```Bash
python sound_tracking_arm.py                    # DOA 跟踪模式（默认）
python sound_tracking_arm.py --mode voice       # 语音控制模式
```

调整 DOA 灵敏度

```Bash
# 提高触发阈值（更大角度变化才响应，减少误触）
python sound_tracking_arm.py --threshold 25

# 降低触发阈值（更灵敏，但易误触）
python sound_tracking_arm.py --threshold 10

# 延长冷却
python sound_tracking_arm.py --cooldown 5

# 多参数同时调整
python sound_tracking_arm.py --threshold 20 --cooldown 5
```

指定硬件设备

```Bash
# 机械臂在不同串口
python sound_tracking_arm.py --port /dev/ttyACM0

# 命令行传入 API Key（覆盖代码配置）
python sound_tracking_arm.py --mode voice --groq-key gsk_xxxxxxxxxxx
```

切换语音音色

```Bash
# 中文男声（云健）
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-YunjianNeural

# 中文女声（晓晓，默认）
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoNeural

# 中文女声（晓晓，多情感）
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoMultilingualNeural
```

- 启用调试

  ```Bash
  python sound_tracking_arm.py --debug
  ```

---

</div>
