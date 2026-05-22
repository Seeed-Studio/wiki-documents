---
description: 本文档将手把手从零开始，带你搭建一个“能听会动”的智能机械臂系统。即使你从未接触过机械臂或硬件开发，只要按照步骤操作，也能成功复现这个项目！
title: 使用 reSpeaker Flex 通过语音控制 reBot Arm
keywords:
  - reSpeaker
  - python
  - reBot Arm
  - DOA
  - groq
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg
slug: /control_rebot_arm_using_voice_with_respeaker_flex
sku: 114993700
last_update:
  date: 5/22/2026
  author: wuxinrui
createdAt: '2026-05-22'
updatedAt: '2026-05-22'
url: https://wiki.seeedstudio.com/cn/control_rebot_arm_using_voice_with_respeaker_flex/
---


# 使用 reSpeaker Flex 通过语音控制 reBot Arm

>

> 本文档将手把手从零开始，带你搭建一个“能听会动”的智能机械臂系统。即使你从未接触过机械臂或硬件开发，只要按照步骤操作，也能成功复现这个项目！

## 所需硬件

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th>reBot Arm B601-DM</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 1. 项目概览

### 1.1 这个项目是什么？

本项目是一个**语音驱动的智能机械臂控制系统**。想象这样一个场景：

>🎬**场景演示**

> 当你对桌上的机械臂说“hello”时，机械臂会立刻转向你所在的方向，并像人一样点头。当你说“dance”时，它会欢快地摇摆。如果你走到房间的另一侧拍手，它会立刻“听到”声音的方向并转身面向你——这就是我们要打造的智能机械臂！

简单来说，这个系统做三件事：

1. **听**——通过麦克风阵列采集你的声音，并且还能判断声音来自哪个方向

2. **懂**——通过 AI 识别你说的话，理解你的意图

3. **动**——控制机械臂做出相应动作（转身、点头、跳舞、挥手等）

### **1.2 两种交互模式**

系统提供两种核心工作模式，你可以根据需求进行选择：

| 模式 | 名称 | 交互方式 | 适用场景 |
|-----|-----|-----|-----|
| 模式 1 | **DOA 声源跟踪** | 自动检测声源方向并转向 | 展厅演示、互动装置 |
| 模式 2 | **语音指令控制** | 按住 Enter 说话进行控制 | 语音助手、教学演示 |

### 1.3 系统是如何工作的？

用通俗的话来描述整个系统的架构：

```
You speak / make a sound
      ↓
[ reSpeaker Flex ] —— An array composed of 4 "ears" can hear and determine the direction of sound.
      ↓
[ Ubuntu ] —— 
      ↓
   There are two paths:
   ├─→ DOA Mode: Locally directly calculate the sound direction → Control the robotic arm to turn
   └─→ Voice mode: Upload to cloud AI for recognition → Understand your intention → Control the movement of the robotic arm
      ↓
[ reBot Arm ] —— An arm composed of 7 "joints" performs various actions.
```

更专业一点的架构图可以描述为：

**硬件层**（你能摸到的设备）：

- reSpeaker Flex（4 麦克风阵列 XIAO ESP32S3 控制器）  

- reBot Arm B601-DM（6 自由度机械臂）  

- Ubuntu 22.04 电脑（运行主程序）  

**驱动层**（让硬件能互相通信）：

- USB 音频通信（pyusb/libusb）——连接麦克风阵列  

- 串口通信（MotorBridge）——连接机械臂  

- Web API（Groq Cloud）——连接云端 AI 服务  

**算法层**（负责处理数据的“大脑”）：

- DOA 声源定位（本地实时计算）

- Whisper 语音识别（Groq Cloud）

- Llama-3.3 意图理解（Groq Cloud）

- 运动插值规划（本地平滑控制）

**应用层**（你能看到的效果）：

- DOA 跟踪模式 语音控制模式 呼吸待机动画 语音播报

---

## 2. 硬件准备

### 2.1 你需要准备什么？

在开始之前，请确保你已经准备好以下所有硬件。如果你是第一次接触此类项目，建议直接购买完整套装，以避免兼容性问题。

| 组件 | 型号 | 数量 | 大致作用 | 购买建议 |
|-----|-----|-----|-----|-----|
| 机械臂 | reBot Arm B601-DM | 1 套 | 执行动作的“身体” | Seeed Studio 官方 |
| 麦克风阵列 | reSpeaker Flex XVF3800 | 1 | 听声音并判断方向 | Seeed Studio 官方 |
| 主控电脑 | Ubuntu 22.04 PC | 1 | 运行程序的“大脑” | x86_64 架构 |
| USB 线 | USB-A 转 USB-C | 2 | 连接设备 | 一般随设备附带 |
| 木工夹具 | 3 英寸或以上 | 2 | 固定机械臂底座 | 五金店或套装自带 |
| 电源 | 24V 15A（XT30 接口） | 1 | 为机械臂供电 | 一般随套装附带 |

### 2.2 各硬件简要介绍

#### 2.2.1 reBot Arm B601-DM 机械臂

这是一款桌面级机械臂，拥有 **7 个“关节”**（专业上称为 7 自由度），就像人的手臂一样，可以做出各种灵活的动作。

**关节说明**（自下而上）：

| 关节 | 通俗叫法 | 能做什么 | 运动范围 |
|-----|-----|-----|-----|
| J1 | 腰部（底座旋转） | 整个身体左右旋转 | ±149° |
| J2 | 大臂抬升 | 抬起或放下大臂 | 0° ~ -206° |
| J3 | 小臂伸展 | 小臂伸展或弯曲 | 0° ~ -206° |
| J4 | 手腕旋转 | 手腕左右旋转 | ±85.9° |
| J5 | 手腕俯仰 | 手腕上下摆动 | ±85.9° |
| J6 | 手腕偏航 | 手腕微调方向 | ±85.9° |
| J7 | 夹爪 | 抓取物体 | 开合控制 |

💡**你可以这样理解**：J1 像人的腰部旋转，J2 像肩膀抬起，J3 像手肘弯曲，J4/J5/J6 像手腕的各种旋转，而 J7 像手指。这些关节组合起来，机械臂就能做出非常丰富的动作。

⚠**装配警告**：如果你购买的是需要自行装配的套件，请特别注意：

- 套件中包含大量螺丝和结构件，部分零件外观非常相似

- **强烈建议使用电动螺丝刀**，扭矩调到中低档（3 ~ 6kgf.cm）

- 扭矩过大会很容易导致**锁螺丝滑牙**

- 装配时请注意安全，防止夹手、砸手

#### 2.2.2 reSpeaker Flex XVF3800 麦克风阵列

这是一个 **4 麦克风** 的智能语音处理模块，核心特性包括：

- **分体设计**：核心板与麦克风阵列板可分离，方便你在不同设备中灵活布置

- **360° 拾音**：4 个麦克风环形排布，可以接收来自各个方向的声音

- **内置智能处理**：集成 XMOS XVF3800 芯片，具备回声消除、噪声抑制、声源定位（DOA）等功能

- **双 USB 接口**：提供 USB-C 接口和 PH2.0 锁扣接口两种连接方式

- **内置功放**：可直接驱动 10W 扬声器（通过 JST 接口）

**核心元件**：

| 元件 | 作用 |
|-----|-----|
| XMOS XVF3800 芯片 | 负责所有音频处理的“大脑” |
| TLV320AIC3104 编解码器 | 将模拟声音信号转换为数字信号 |
| 24 针 FPC 接口 | 连接麦克风阵列板和核心板 |
| USB-C 接口 | 连接电脑，传输音频和供电 |
| 3.5mm 耳机插孔 | 可插入耳机监听 |
| JST 扬声器接口 | 可连接外置扬声器 |

💡**类比理解**：你可以把它想象成一只“顺风耳”——不仅有 4 只耳朵从各个方向听声音，还能分析声音来自哪个方向，并且能过滤噪声，只专注于你想听到的声音。

#### 2.2.3 Ubuntu 22.04 电脑

Ubuntu 是一个免费开源的操作系统（类似于 Windows，但更受开发者欢迎）。本项目对电脑的要求如下：

- **操作系统**：Ubuntu 22.04 LTS（64 位版本）

- **架构**：x86_64（也就是普通 Intel/AMD 处理器的电脑）

- **最低配置建议**：

- CPU：4 核及以上

- 内存：8GB 及以上

- 硬盘：50GB 可用空间

- 网络：可以访问互联网（用于调用云端 AI）

💡**如果你的电脑是 Windows 系统怎么办？**

你有两种选择：

1. **安装双系统**：在电脑上同时保留 Windows 和 Ubuntu（推荐）

2. **使用虚拟机**：在 Windows 中用虚拟机软件（如 VMware）虚拟运行 Ubuntu（会有一定性能损失，本项目不太推荐）

Ubuntu 22.04 安装教程：[https://ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)

### 2.3 硬件连接示意图

在开始之前，先熟悉一下所有设备应该如何连接。整体连接非常简单，只需要两根 USB 线：

```
          ┌─────────────────────────────────────┐
          │          Ubuntu 22.04            │
          │   ┌──────────┐                      │
          │   │  Python  │  ←── Run the main program       │
          │   │  3.10    │                      │
          │   └──────────┘                      │
          │          │                          │
          │   ┌──────┴──────┐                  │
          │   │  Groq API   │  ←── Cloud AI Service    │
          │   │  (Internet)   │                  │
          │   └─────────────┘                  │
          └─────┬────────┬────────────────────┘
                │        │
            USB-C Cable   USB-C Cable
                │        │
          ┌─────┴──┐  ┌─┴──────────┐
          │reSpeaker│  │ reBot Arm  │
          │ Flex   │  │ B601-DM    │
       │(Microphone) │  │ (Robot Arm)   │
          │        │  │            │
    │ 4-Microphone Array │  │ 7DOF    │
          └────────┘  └────────────┘
                │
          ┌─────┴──────┐
       │  Speaker/Headphone  │  (Optional, used for voice broadcast)
          └─────────────┘
```

**连接步骤**：

1. 通过 USB-C 线将 reSpeaker Flex 连接到电脑

2. 通过 USB-C 线将 reBot Arm 连接到电脑

3.（可选）将音箱或耳机连接到 reSpeaker Flex 的音频输出接口

4. 确保电脑已连接到互联网

---

## 3. 环境准备

在安装软件之前，我们需要确认你的系统环境是否满足要求。请打开 Ubuntu 终端（Terminal，类似于 Windows 的“命令提示符”），然后按照下面的步骤逐项检查。

### 3.1 确认 Ubuntu 版本

```bash
# Enter the following command in the terminal to view the system version
lsb_release -a
```

✅**预期输出**（类似这样）：

```
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 22.04 LTS
Release:        22.04
Codename:       jammy
```

💡**如果显示的不是 Ubuntu 22.04 怎么办？**

- 如果是 Ubuntu 20.04 或其他版本，建议升级到 22.04，因为本项目是在该版本上进行测试的

- 如果不是 Ubuntu，则需要安装 Ubuntu 22.04

### 3.2 确认 Python 版本

```bash
# Check the default Python version in the system
python3 --version
```

✅**预期输出**：

```
Python 3.10.12
```

只要版本是 **3.10.x**（x 为任意数字）即可。

💡**如果不是 Python 3.10 怎么办？**

不用担心，我们后面会使用 Miniforge 创建一个专门的 Python 3.10 环境，不会影响系统默认的 Python。

### 3.3 检查 USB 接口

在连接硬件之前，先确认电脑可以正常识别 USB 设备：

```bash
# View the list of currently connected USB devices
lsusb
```

✅**预期输出**（类似这样，会显示你的 USB 设备）：

```
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 003: ID 2886:0018 Seeed Studio reSpeaker Flex  ← Microphone Array
Bus 002 Device 005: ID 1234:5678 STMicroelectronics Virtual COM Port  ← Robot Arm
```

💡**如果没有看到设备怎么办？**

先不要慌，可能是设备还没有连接好。可以先继续下一步，等安装完软件后再回来检查。

### 3.4 检查网络连接

```bash
# Test whether the Internet can be accessed
ping -c 3 baidu.com
```

✅**预期输出**：

```
PING baidu.com (xxx.xxx.xxx.xxx) 56(84) bytes of data.
64 bytes from ...: icmp_seq=1 ttl=54 time=25.3 ms
64 bytes from ...: icmp_seq=2 ttl=54 time=24.8 ms
64 bytes from ...: icmp_seq=3 ttl=54 time=25.1 ms
```

💡**如果无法访问互联网怎么办？**

语音模式需要联网调用 Groq API，请确保网络畅通。如果是校园网/企业网，可能需要额外的代理配置（后文会说明）。

---

## 4. 软件安装

⚠️ **重要说明**：下面所有命令都需要在终端中执行。建议每完成一步都确认没有报错，再进行下一步。

### 4.1 第 1 步：安装 Miniforge（Python 环境管理工具）

**什么是 Miniforge？**

Miniforge 是一个 Python 环境管理工具，类似于 Python 的“应用商店版本管理器”。它可以帮助你：

- 创建独立的 Python 3.10 环境，而不影响系统默认的 Python

- 一键安装所有项目依赖

- 为不同项目在不同 Python 版本之间切换

**安装命令**：

```bash
# Download the Miniforge installation script
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"

# Perform the installation (follow the prompts)
bash Miniforge3-$(uname)-$(uname -m).sh
```

执行后会出现安装向导：

1. 按 'Enter' 查看许可协议

2. 输入 'yes' 同意协议

3. 按 'Enter' 确认安装路径（默认）

4. 输入 'yes' 初始化 conda（推荐）

安装完成后，**关闭当前终端窗口并重新打开一个新的终端**，以使环境变量生效。

✅**验证安装**：

```bash
# Enter in the new terminal
conda --version
```

预期输出：'conda 24.x.x'（版本号可能不同，只要能显示版本号，就说明安装成功）

### 4.2 第 2 步：克隆项目代码库

```bash
# Download the main codebase of the project (voice control part)
git clone https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git

# Enter the project directory
cd reBot-Arm-reSpeaker-Flex
```

✅**预期输出**：

```
Cloning into 'reBot-Arm-reSpeaker-Flex'...
remote: Enumerating objects: ...
...
Resolving deltas: 100% (...)
```

💡**如果 git clone 很慢或失败怎么办？**

可能是网络问题，你可以尝试：

```bash
# Use domestic mirroring for acceleration (if available)
git clone https://ghproxy.com/https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git
```

### 4.3 第 3 步：创建 Conda 环境

项目提供了一个 'environment.yml' 文件，其中列出了所有需要的依赖包。我们只需要一条命令就可以自动安装所有依赖：

```bash
# Make sure you are in the reBot-Arm-reSpeaker-Flex directory.
# One-click to create an environment and install all dependencies
conda env create -f environment.yml
```

这个过程可能需要 **10-30 分钟**，取决于你的网速。它会自动：

- 创建一个名为 'flex' 的 Python 3.10.2 环境

- 从 conda-forge 源安装 pinocchio、numpy 等科学计算库

- 安装用于 USB 通信的 pyusb

✅**安装成功的标志**（最后几行类似这样）：

```
Executing transaction: ... done
#
# To activate this environment, use
#
#     $ conda activate flex
#
# To deactivate an active environment, use
#
#     $ conda deactivate
#
```

### 4.4 第 4 步：激活 Conda 环境

```bash
# Activate the newly created flex environment
conda activate flex
```

✅**激活成功的标志**：终端提示符前面出现 '(flex)'：

```bash
(flex) user@computer:~/reBot-Arm-reSpeaker-Flex$
```

💡**重要提醒**：每次打开新的终端，都需要重新执行 'conda activate flex' 来激活环境。

### 4.5 第 5 步：安装系统依赖

```bash
# Update the system package list and install ffmpeg
sudo apt-get update && sudo apt-get install -y ffmpeg
```

**什么是 ffmpeg？**

ffmpeg 是一个音视频处理工具，本项目使用它在语音合成后处理音频文件。简单来说，就是“让电脑能够播放和处理声音”。

✅**安装成功的标志**：

```
ffmpeg is already the newest version (x.x.x).
```

### 4.6 第 6 步：安装 uv（Python 包管理工具）

```bash
# Install uv (a fast Python package management tool)
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**为什么需要 uv？**

uv 是一个非常快速的 Python 包管理工具，可用于安装 pip 格式的包。项目中使用的 'motorbridge' 库需要通过 uv 来安装。

✅**安装成功后**，请关闭终端并重新打开。

### 4.7 第 7 步：克隆机械臂控制库

```bash
# Cloning robotic arm control library
git clone https://github.com/vectorBH6/reBotArm_control_py.git

# Enter the robotic arm control library directory
cd reBotArm_control_py

# Use uv to install dependencies
uv sync
```

✅**预期输出**：显示安装进度且不报错。

### 4.8 第 8 步：设置 PYTHONPATH 环境变量

```bash
# Add the robotic arm control library to the Python search path
export PYTHONPATH="$PWD:$PYTHONPATH"
```

**这是什么意思？**

当 Python 导入库时，会在 PYTHONPATH 指定的目录中查找。这个命令就是告诉 Python：“除了默认的搜索路径，还要在这个目录里找一找”。

⚠️ **重要提醒**：'export PYTHONPATH' 这个设置**每次关闭终端都会失效**！你需要：

**方案 A（临时，每次都要执行）**：每次打开新终端时手动执行上面的 export 命令

**方案 B（推荐，永久生效）**：把这个设置写入 '~/.bashrc' 文件：

```bash
# Write environment variables to the configuration file so that they will be automatically set every time the terminal is opened.
echo 'export PYTHONPATH="'$PWD':$PYTHONPATH"' >> ~/.bashrc

# Make the configuration take effect immediately
source ~/.bashrc
```

### 4.9 第 9 步：设置串口权限

为了让当前用户可以访问 USB 串口设备（用于与机械臂通信），需要设置权限：

```bash
# Set USB serial device permissions (to allow the current user to access without sudo)
sudo chmod 666 /dev/ttyACM*
```

✅**执行后不能报错**。

💡**为什么需要这样做？**

Linux 系统对硬件设备有严格的权限管理，默认情况下普通用户不能直接访问串口设备。这个命令允许所有用户对这些设备进行读写。

⚠️ **这个设置在重启后会失效**。如果希望永久生效，可以把你的用户加入 'dialout' 组：

```bash
# Add the current user to the dialout group (permanently resolve the permission issue)
sudo usermod -a -G dialout $USER
```

修改后需要**注销并重新登录**才能生效。

### 4.10 第 10 步：配置 Groq API Key

本项目使用 Groq 的云端 AI 服务进行语音识别和意图理解。你需要注册 Groq 账号并获取 API Key。

**获取 API Key 的步骤**：

1. 打开浏览器并访问 https://console.groq.com/keys

2. 注册账号（可以使用邮箱或 GitHub 账号）

3. 登录后点击 "Create API Key"

4. 复制生成的 Key（格式类似于 'gsk_xxxxxxxxxxxx）

**在代码中配置 API Key**：

```bash
# First return to the main project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Edit the main program file
nano sound_tracking_arm.py
```

在文件中找到如下片段（大约在第 60 行附近）：

```python
VOICE_CFG = {
    "api_key": "12345678",   # ← Replace this line with your actual API Key
    ...
}
```

将 '"12345678"' 替换为你刚刚复制的 API Key，例如：

```python
    "api_key": "gsk_aBcDeFgHiJkLmNoPqRsTuVwXyZ",
```

保存文件：按下 'Ctrl O'，然后回车，再按 'Ctrl X' 退出。

⚠️ **安全提醒**：

- **不要**将你的 API Key 分享到公共代码仓库或论坛

- **不要**把 API Key 的截图发到社交媒体

- 如果 API Key 泄露，请在 Groq 控制台中将其删除并重新生成新的 Key。

### 4.11 步骤 11：网络代理设置（如有需要）

如果你在中国大陆或某些特定网络环境下，可能无法直接访问 Groq 的服务。先测试一下：

```bash
# Test whether Groq can be accessed
ping console.groq.com -c 3
```

如果可以收到回复（显示时间），说明网络正常，可以跳过此步骤。

如果显示 'unknown host' 或 'Request Timeout'，则需要配置代理。

**如何配置代理**：

再次编辑 'sound_tracking_arm.py'，找到 `VOICE_CFG` 中的 `proxy` 项：

```python
VOICE_CFG = {
    ...
    "proxy": None,   # ← Change it to your proxy address
}
```

例如，如果你的代理地址是 'http:// 192.168.4.7:7897'：

```python
    "proxy": "http://192.168.4.7:7897",
```

💡**我怎么知道自己的代理地址？**

- 如果你使用 Clash：通常为 'http:// 127.0.0.1:7890'

- 如果你使用 v2rayN：通常为 'http:// 127.0.0.1:10809'

- 如果是局域网代理服务器：请询问网络管理员

- 代理格式通常为：'http:// IP 地址:端口号'

---

## 5. 硬件连接与组装

### 5.1 硬件连接步骤

现在所有软件都已经安装完成，接下来我们来连接硬件。

**步骤 1：连接 reSpeaker Flex**

1. 使用 USB-A 转 USB-C 线将 reSpeaker Flex 连接到电脑

2. 连接后，reSpeaker Flex 上的指示灯应点亮

3. 在终端中输入 'lsusb'，你应该能看到 Seeed Studio 的设备。

**步骤 2：连接 reBot 机械臂**

1. 确保机械臂底座已经用木工夹具牢固固定在桌面上

2. 使用 USB-A 转 USB-C 线将机械臂连接到电脑

3. 连接 24V 电源（XT30 接口），但**先不要上电**

⚠️ **上电前安全检查清单**：

- [ ] 机械臂底座已牢固固定（用木工夹具夹紧）

- [ ] 机械臂运动范围内没有障碍物

- [ ] 机械臂运动范围附近没有人员靠近

- [ ] USB 线已连接

- [ ] 电源接线正确

**步骤 3：上电启动**

1. 检查无误后，打开 24V 电源开关

2. 机械臂会发出轻微的电机上电声

3. 在终端中输入 'ls /dev/ttyUSB*'，你应该能看到类似 '/dev/ttyUSB0' 的设备

### 5.2 验证硬件连接

```bash
# View USB audio device (reSpeaker)
arecord -l
```

✅**预期输出**（类似）：

```
**** List of CAPTURE Hardware Devices ****
card 2: XVF3800 [reSpeaker XVF3800], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

```bash
# View USB serial device (robotic arm)
ls -la /dev/ttyUSB0
```

或者：

```bash
ls -la /dev/ttyACM0
```

✅**预期输出**：

```
crw-rw-rw- 1 root dialout 188, 0 ... /dev/ttyUSB0
```

💡**看不到设备怎么办？**

- 检查 USB 线是否插紧

- 尝试更换一个 USB 接口

- 检查线材是否为数据线（有些线只能充电，不能传输数据）

- 参考 [9. 故障排查指南](#9-故障排查指南-faq)

---

## 6. 首次运行

### 6.1 运行前验证

在正式启动前，我们先做几个简单的验证，确保所有组件都工作正常。

#### 验证 1：检查 Python 依赖

确保你处于 'flex' 环境中，并且在项目主目录下：

```bash
# Activate the environment
conda activate flex

# Enter the project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Verify pyusb and numpy
python -c "import usb.core; import numpy; print('pyusb + numpy OK')"
```

✅**预期输出**：

```
pyusb + numpy OK
```

#### 验证 2：验证机械臂库

```bash
# Ensure that PYTHONPATH is set
export PYTHONPATH="$HOME/reBotArm_control_py:$PYTHONPATH"

# Verify the robotic arm library
python -c "from reBotArm_control_py.actuator import RobotArm; print('Robot Arm Library OK')"
```

✅**预期输出**：

```
Robot Arm Library OK
```

💡**如果报错 'ModuleNotFoundError' 怎么办？**

说明 PYTHONPATH 没有正确设置。请确认：

1. reBotArm_control_py 目录确实存在

2. 已执行 'export PYTHONPATH' 命令

3. 如果没有生效，尝试使用完整路径：

   ```bash
   export PYTHONPATH="/home/Your username/reBotArm_control_py:$PYTHONPATH"
   ```

#### 验证 3：测试麦克风

```bash
# Record a 3-second test audio
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav

# Play the recorded audio (if a speaker/headphone is connected)
aplay -D plughw:2,0 /tmp/test.wav
```

如果你能听到录制的声音，说明麦克风阵列工作正常。

### 6.2 启动流程

在所有验证都通过后，就可以正式启动程序了！

```bash
# Ensure in the flex environment
cd ~/reBot-Arm-reSpeaker-Flex

# Start the program (a mode selection menu will pop up)
python sound_tracking_arm.py
```

✅**预期输出**：

```
==================================================
  reBot Arm B601-DM + reSpeaker Flex
  Please select the operating mode:
==================================================
  [1] DOA Interaction Mode (Sound Source Tracking + Standby Animation)
  [2] Voice control mode (button trigger + AI LLM control)
==================================================
Please enter the mode number (1 or 2):
```

此时，输入 '1' 进入 DOA 声源跟踪模式，或输入 '2' 进入语音控制模式。

#### 直接指定模式启动

你也可以在启动命令中直接指定模式，跳过选择菜单：

```bash
# DOA Sound Source Tracking Mode
python sound_tracking_arm.py --mode doa

# Voice command control mode
python sound_tracking_arm.py --mode voice
```

### 6.3 首次运行测试

#### DOA 模式测试

当选择模式 1 时，程序会：

1. 初始化 USB 设备

2. 连接机械臂

3. 进入待机状态

**测试方法**：站在机械臂旁边说话或拍手，观察机械臂是否：

- 朝你所在的方向转动

- 做出点头动作

- 然后回到待机状态

#### 语音模式测试

当选择模式 2 时，程序会：

1. 初始化所有组件

2. 等待你按下回车键

**测试方法**：

1. 按下 'Enter' 键

2. 看到“录音中”提示后，说 “hello” 或 “say hello”

3. 等待大约 5 秒

4. 观察是否：

- 识别出你的语音

- 机械臂执行打招呼动作

- 听到语音播报回复

---

## 7. 功能详解

### 7.1 模式 1：DOA 声源跟踪模式

#### 什么是 DOA？

DOA 的全称是 **Direction of Arrival**（声波到达方向），简单来说就是：**判断声音是从哪个方向来的**。就像你可以用两只耳朵大致判断声音在左边还是右边一样，reSpeaker Flex 使用四个麦克风来更精确地计算声音的方向。

#### 工作流程

```
Start the system
    ↓
Initialize USB device
    ↓
Connect reSpeaker Flex ←──→ Connect reBot Arm
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

#### 核心技术点详解

**4 帧角度缓冲队列**

想象一下，你在听一个移动中的人说话，如果每一帧（约 50 毫秒）的角度变化都直接驱动机械臂，它就会不停抖动。系统使用一个“环形缓冲区”来存储最近 4 帧的 DOA 角度数据，然后取平均值，使动作更加平滑。

**余弦相似度平滑滤波**

有时麦克风会误判方向（例如突然的噪声）。这个滤波器会检查最近几帧的角度是否“一致”——如果差异过大，可能是误判，就不会响应。就像你听到声音时，也会先确认方向再转头。

**触发阈值**

只有当角度变化超过设定阈值（默认 15°）时，才会触发机械臂动作。这样可以避免因为轻微角度波动而频繁动作。

**冷却时间**

每次动作后，系统会进入一个冷却期（默认 3 秒），在此期间不会响应新的声源。这样可以防止机械臂因连续触发而抖动。

**呼吸待机动画**

当没有人说话时，机械臂并不会完全静止，而是会进入一种“呼吸”状态——有点像人类的微微起伏。这既美观，又能让用户知道系统仍在运行。

### 7.2 模式 2：语音指令控制模式

#### 完整交互闭环

语音控制模式支持完整的**录音 → 识别 → 理解 → 执行 → 播报**闭环。

#### 工作流程

```
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

#### 支持的语音指令

| 指令类型 | 示例语句 | 执行动作 | 说明 |
|-----|-----|-----|-----|
| 向左转 | “向左转”/“看左边”/“左转” | 机械臂底座向左旋转 45 度 | 角度可通过参数调整 |
| 向右转 | “向右转”/“看右边”/“右转” | 机械臂底座向右旋转 45 度 | 同上 |
| 打招呼 | “打个招呼”/“你好”/“嗨” | 执行点头打招呼动作 | 连续点头 2 次 |
| 挥手 | “挥手”/“说再见”/“拜拜” | 执行挥手动作 | 左右挥手 2 次 |
| 回零 | “回到初始位置”/“复位”/“回零” | 所有关节回到零位 | 回到初始姿态 |
| 停止 | “停下”/“不要动”/“停止” | 立即停止当前动作 | 紧急停止指令 |

#### 交互示例

```bash
$ python sound_tracking_arm.py --mode voice

========================================
  🤖 reBot Arm Voice Control System has been activated
  Press Enter to start recording, release to stop.
  Press Ctrl+C to exit
========================================

[Interaction] >>> 🟢 System is idle, please press Enter to start recording... <<< [User presses Enter]
🔴 Recording... Please speak (5 seconds)
[User says: "Turn to the left a bit"]
[User releases Enter]
🟢 Recording completed, processing...

   --- Speech Recognition ---
   📝 Recognition result: "turn left"

   --- Intent Understanding ---
   🤖 Parsed action: turn_left, parameters: {"angle": 45}

   --- Execute Action ---
   => Start executing action: turn_left

   --- Voice Announcement ---
=======================================================
 🤖 [Voice Output] Okay, turning left.
=======================================================

[Interaction] >>> 🟢 System is idle, press Enter to start recording... <<< [Waiting for next input]
```

#### AI 是如何理解你的话的？

本项目使用了精心设计的 Prompt，使大语言模型（Llama-3.3-70B）能够理解各种自然语言表述，并将其转换为结构化指令。

例如，当你说“帮我把头转向左边”时，AI 会这样理解：

```json
{"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
```

这种设计的好处是，你不需要说固定的指令词，只要像聊天一样自然说话就可以了！

---

## 8. 命令行参数

### 8.1 完整参数表

启动程序时，你可以添加各种参数来自定义行为：

```bash
python sound_tracking_arm.py [Parameter]
```

| 参数 | 短参数 | 默认值 | 说明 |
|-----|-----|-----|-----|
| '-- mode' | '-m' | 'doa' | 运行模式：'doa'（声源跟踪）或 'voice'（语音控制） |
| '-- device' | '-d' | '0' | reSpeaker Flex USB 设备 ID |
| '-- port' | '-p' | '/dev/ttyUSB0' | 机械臂串口设备路径 |
| '-- threshold' | '-t' | '15' | DOA 角度触发阈值（单位：度） |
| '-- cooldown' | '-c' | '3' | 动作冷却时间（单位：秒） |
| '-- buffer-size' | '-B ' | '4' | DOA 角度缓冲帧数 |
| '-- groq-key' | '-k' | 'None' | Groq API Key（也可通过代码配置） |
| '-- tts-voice' | '-v' | 'zh-CN-XiaoxiaoNeural | Edge-TTS 发音人 |
| '-- debug' | - | 'False' | 启用调试日志输出 |

### 8.2 使用示例

#### 基本用法

```bash
# DOA Tracking Mode (Default)
python sound_tracking_arm.py

# Voice control mode
python sound_tracking_arm.py --mode voice
```

#### 调整 DOA 灵敏度

```bash
# Increase the trigger threshold (requires a larger change in sound direction to respond, reducing false triggers)
python sound_tracking_arm.py --threshold 25

# Lower the trigger threshold (more sensitive, but also more prone to false triggering)
python sound_tracking_arm.py --threshold 10

# Extend Cool Down (longer "rest time" after action)
python sound_tracking_arm.py --cooldown 5

# Adjust multiple parameters simultaneously
python sound_tracking_arm.py --threshold 20 --cooldown 5
```

#### 指定硬件设备

```bash
# The robotic arm is connected to different serial ports.
python sound_tracking_arm.py --port /dev/ttyACM0

# Specify Groq API Key (command-line input will override the configuration in the code)
python sound_tracking_arm.py --mode voice --groq-key gsk_xxxxxxxxxxx
```

#### 切换语音音色

```bash
# Use Chinese male voice (Yun Jian)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-YunjianNeural

# Use Chinese female voice (Xiaoxiao, default)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoNeural

# Use Chinese female voice (Xiaoxiao, multi-emotional)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoMultilingualNeural
```

Edge-TTS 支持的完整发音人列表：[https://github.com/rany2/edge-tts#changing-the-voice](https://github.com/rany2/edge-tts#changing-the-voice)

#### 启用调试模式

```bash
# Enable detailed log output (helpful for troubleshooting)
python sound_tracking_arm.py --debug
```

---

## 9. 故障排查指南 FAQ

本节收集了小白用户最常遇到的问题及解决方案。如果你在这里找不到自己的问题，请先检查硬件连接是否正确，然后查看终端输出的错误信息。

### 9.1 安装阶段问题

#### Q1：'conda command not found'

**问题**：安装 Miniforge 之后，输入 `conda` 提示找不到命令。

**原因**：环境变量未正确设置。

**解决方法**：

```bash
# Option 1: Reinitialize the shell
~/miniforge3/bin/conda init bash
# Then close the terminal and reopen it.

# Option 2: Manual Activation
source ~/miniforge3/etc/profile.d/conda.sh
conda activate base
```

#### Q2：为 'environment.yml' 创建环境失败

**问题**：运行 `conda env create -f environment.yml` 时报错。

**可能原因及解决方案**：

1. **网络问题**（最常见）：

```bash
# Switch to domestic mirroring source
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes
# Then try again
conda env create -f environment.yml
```

2. **磁盘空间不足**：

```bash
# Check disk space
df -h
# Ensure there is at least 5GB of available space.
```

3. **conda 版本过旧**：

```bash
conda update conda
```

#### Q3：'uv: command not found'

**问题**：安装 uv 之后，提示找不到命令。

**解决方法**：

```bash
# Check if uv is installed
ls ~/.cargo/bin/uv

# If it exists, add it to PATH
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### Q4：'uv sync' 报错

**问题**：在 `reBotArm_control_py` 目录中执行 `uv sync` 失败。

**可能原因**：

1. 不在正确的目录下

2. Python 版本不匹配

**解决方法**：

```bash
# Confirm that the directory is correct
ls -la pyproject.toml

# If it doesn't exist, it means you're not in the correct directory.
cd ~/reBotArm_control_py

# Confirm the Python version
python --version  # 应该是 3.10.x
```

### 9.2 USB 设备识别问题

#### Q5：`lsusb` 看不到 reSpeaker Flex

**排查步骤**：

1. **检查 USB 线是否插紧**：重新插拔 USB-C 线

2. **更换 USB 口**：尝试电脑上的其他 USB 接口（尤其是 USB 3.0 蓝色接口）

3. **检查数据线**：确认你使用的是数据线（有些线只能充电）

4. **查看系统日志**：

```bash
# View USB connection logs
dmesg | tail -20
```

5. **检查是否需要驱动**：

```bash
# View detailed information of USB devices
lsusb -v -d 2886:
```

#### Q6：`lsusb` 看不到机械臂

**排查步骤**：

1. 确认 USB 线连接正确

2. 确认机械臂电源已打开（24V 电源开关）

3. 检查电源指示灯是否亮起

4. 查看系统日志：

```bash
dmesg | grep -i "ttyUSB\|ttyACM\|usb"
```

#### Q7：'Permission denied: /dev/ttyUSB0'

**问题**：你没有访问串口设备的权限。

**解决方法**：

```bash
# Temporary solution
sudo chmod 666 /dev/ttyUSB0

# Permanently resolve (recommended)
sudo usermod -a -G dialout $USER
# Then log out and log back in.
```

### 9.3 Python 运行时问题

#### Q8：'ModuleNotFoundError: No module named 'usb.core''

**问题**：找不到 Pyusb 模块。

**解决方法**：

```bash
# Confirm in the flex environment
conda activate flex

# Manually install pyusb
conda install -c conda-forge pyusb

# If it still doesn't work, check the Python path.
which python  # Confirm that the output contains miniforge3/envs/flex
```

#### Q9：'ImportError: cannot import name 'RobotArm''

**问题**：找不到机械臂控制库。

**解决方案**：

```bash
# Confirm that reBotArm_control_py has been correctly cloned
ls ~/reBotArm_control_py

# Confirm that PYTHONPATH has been set
echo $PYTHONPATH  # should include the path to reBotArm_control_py

# If not, set it manually
export PYTHONPATH="/home/your_username/reBotArm_control_py:$PYTHONPATH"

# Or directly verify the path using Python
python -c "import sys; print(sys.path)"
```

#### Q10：'libusb-1.0.so. 0: cannot open shared object file'

**问题**：缺少 libusb 系统库。

**解决方案**：

```bash
# Install the libusb development library
sudo apt-get update
sudo apt-get install -y libusb-1.0-0-dev

# If it still doesn't work, try
conda install -c conda-forge libusb
```

### 9.4 网络/API 问题

#### Q11：'Groq API Key not set'

**问题**：程序提示未设置 API Key。

**解决方案**：

1. 检查 "sound_tracking_arm.py" 中 VOICE_CFG["api_key"] 是否已修改

2. 确认 API Key 格式是否正确（应以 'gsk_' 开头）

3. 也可以设置环境变量：

```bash
export GROQ_API_KEY="gsk_xxxxxxxxxxxx"
```

#### Q12：调用 Groq API 时出现 'Connection error' 或 'Timeout'

**问题**：无法连接到 Groq 服务器。

**排查步骤**：

1. **测试网络连通性**：

```bash
ping console.groq.com -c 3
```

2. **如果 ping 失败，需要配置代理**：

编辑 'sound_tracking_arm.py' 中的 'VOICE_CFG'：

```python
proxy": "http://your proxy IP:port",  # e.g., "http://127.0.0.1:7890
```

3. **如果代理不起作用，检查代理本身是否工作正常**：

```bash
# Test via proxy
curl -x http://your_proxy_IP:port https://console.groq.com
```

#### Q13：'Rate limit exceeded' / 'Quota exceeded'

**问题**：API 调用频率超过限制或配额已用完。

**解决方案**：

1. 访问 https://console.groq.com/settings/limits 查看限制

2. Groq 免费账号对每分钟请求次数有限制，请降低使用频率。

3. 如果是配额问题，可能需要升级为付费账号。

#### Q14：'TTS broadcast failure' / 'aplay not found'

**问题**：语音播报功能异常。

**解决方案**：

```bash
# Install alsa-utils (including aplay)
sudo apt-get install -y alsa-utils

# Check audio output device
aplay -l

# If the device is not visible, you may need to configure the default audio output.
```

### 9.5 机械臂问题

#### Q15：机械臂无响应/不移动

**排查步骤**：

1. **检查串口设备**：

```bash
ls -la /dev/ttyUSB*
# or
ls -la /dev/ttyACM*
```

2. **检查权限**：

```bash
# Ensure read and write permissions
ls -la /dev/ttyUSB0  # should show crw-rw-rw-
```

3. **检查电源**：确认 24V 电源已打开

4. 检查程序日志：运行程序时是否有关于 'ArmCtrl' 的报错信息？

5. **尝试指定正确的串口**：

```bash
python sound_tracking_arm.py --port /dev/ttyACM0
# or
python sound_tracking_arm.py --port /dev/ttyUSB1
```

#### Q16：机械臂运动异常/抖动

**可能原因**：

1. 机械臂未固定牢固——检查底座是否稳固

2. 运动范围内有障碍物——清理运动空间

3. 关节角度异常——尝试复位：说“回到初始位置”或重启程序

#### Q17：电机发热异常

⚠️**警告**：如果电机发热异常，请立即断电！

**可能原因**：

- 机械臂被外力卡住，电机持续用力

- 运动速度过快

- 长时间连续运行

**解决方案**：

1. 关闭电源，等待电机冷却

2. 检查是否有机械卡阻

3. 降低运动频率

### 9.6 音频相关问题

#### Q18：麦克风录音没有声音

**排查步骤**：

1. **检查设备是否被识别**：

```bash
arecord -l  # Should see reSpeaker XVF3800
```

2. **检查设备编号**：

```bash
# View detailed device information
cat /proc/asound/cards
```

3. **手动测试录音**：

```bash
# Record with a specified device number (adjust the card and device numbers according to the actual situation)
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav
```

4. **检查麦克风阵列是否正确连接**：确认 FPC 线缆插紧

#### Q19：DOA 角度不稳定/跳变

**可能原因及解决方法**：

1. **环境过于嘈杂**：在安静环境中测试

2. **麦克风阵列不水平**：确保 reSpeaker 水平放置

3. **附近有强声源干扰**：远离风扇、音箱等设备

4. 调整触发阈值：提高 '-- threshold' 参数。

### 9.7 其他问题

#### Q20：Ctrl C 无法退出

**解决方案**：

```bash
# Try pressing Ctrl+C multiple times
# Or open another terminal
killall python
```

#### Q21：程序运行过程中崩溃

**排查步骤**：

1. 查看崩溃前的最后几条错误信息。

2. 使用 '-- debug' 模式获取更多日志

3. 检查是否内存不足：'free -h'

4. 检查 USB 连接是否不稳定

#### Q22：如何完全重新开始

如果你想从头重新配置：

```bash
# 1. Delete Conda Environment
conda activate base
conda env remove -n flex

# 2. Delete the code directory
rm -rf ~/reBot-Arm-reSpeaker-Flex
rm -rf ~/reBotArm_control_py

# 3. Re-execute the installation steps according to this Wiki.
```

---

## 10. 安全注意事项

⚠️ **在使用本产品前，请务必仔细阅读以下所有安全说明。不当操作可能导致设备损坏或人身伤害。**

### 10.1 机械臂安全

#### 基本安全规则

| 规则 | 说明 | 后果 |
|-----|-----|-----|
| 禁止强行搬动机械臂 | 机械臂关节由精密电机驱动，强行手动旋转可能导致齿轮损坏 | 电机损坏，维修成本高 |
| 确保运动范围内无障碍 | 操作前检查机械臂运动范围内无人员、墙体或其他物体 | 碰撞导致机械臂或周围物体损坏 |
| 紧急情况拔掉 USB 线 | 遇到紧急情况时，立即拔掉机械臂的 USB 线，切断控制信号 | 机械臂停止运动 |
| 负载不超过 1500g | 夹爪上不要夹持超过 1.5kg 的物体 | 电机过载损坏 |
| 保持 1.5m 安全距离 | 机械臂运行时保持至少 1.5m 的距离 | 避免碰撞伤人 |

#### 关节角度限制

系统内置关节限位保护，以下表格为参考。注意代码中使用的是弧度（rad）单位。

| 关节 | 名称 | 最小值（角度） | 最大值（角度） | 说明 |
|-----|-----|-----|-----|-----|
| J1 | 底座旋转 | -149.0 ° | 149.0 ° | 水平旋转，最大范围 |
| J2 | 肩部俯仰 | -206.3 ° | 0 ° | 大臂抬起，仅向上 |
| J3 | 肘部俯仰 | -206.3 ° | 0 ° | 小臂伸展，仅向前 |
| J4 | 腕部旋转 | -85.9 ° | 85.9 ° | 末端左右旋转 |
| J5 | 腕部俯仰 | -85.9 ° | 85.9 ° | 末端上下摆动 |
| J6 | 腕部偏航 | -85.9 ° | 85.9 ° | 末端姿态微调方向 |
| J7 | 夹爪开合 | -320.9 | 0 | 夹爪控制，负数为张开 |

### 10.2 电气安全

- **禁止带电插拔**：在插拔 XT30 2 2 电源接口前，必须先关闭电源

- **禁止电机热插拔**：通电状态下不要插拔电机线缆

- **使用正确电源**：只能使用 24V 15A 电源，使用其他电源可能导致设备损坏

- **避免潮湿环境**：不要在潮湿、多尘、高温环境中使用

- **检查线缆**：使用前检查电源线和信号线是否完好无损

### 10.3 使用环境安全

- **未成年人需在成人监护下使用**：机械臂具有一定力度，不当操作可能造成伤害

- **稳定的工作台**：确保机械臂固定在稳定的水平桌面上

- **充足的空间**：机械臂周围至少预留 1 米的安全空间

- **良好照明**：便于观察机械臂的运行状态

- **远离水源**：电子设备应远离水源

### 10.4 电机复位安全说明

在进行电机复位前：

- 准备 2 个工装夹具（尺寸 ≥ 3 英寸）

- 调试和运行过程中保持至少 1 m 的安全距离

- 禁止电机热插拔；插拔 XT30 2 2 接口前必须先断开电源

- 禁止电机过载、超速运行

- 设备启动前检查接线和紧固件

- 不要在潮湿、高温、多尘环境中使用

---

## 11. 技术原理简介

本节将简要介绍本项目涉及的核心技术原理，帮助感兴趣的用户了解“背后的魔法”。使用本产品并不要求完全理解这些内容。

### 11.1 DOA 声源定位原理

#### 问题：如何判断声音是从哪个方向来的？

reSpeaker Flex 具有 4 个环形排列的麦克风。当声音从某个方向传来时，不同麦克风接收到声音的时间会有轻微差异（称为“时间差”或 TDOA）。

**通俗解释**：就像你闭上眼睛，如果有人在你左边拍手，你的左耳会先听到，右耳会稍微晚一点。大脑就是根据这个时间差，判断出声音在左边。

reSpeaker Flex 内置的 XVF3800 芯片是用来做这些事情的：

1. 同时采集 4 路麦克风信号

2. 芯片分析 4 路信号的相位差/时间差

3. 计算声音最有可能来自的方向（0 ° ~ 360 °）

4. 通过 USB 向电脑发送 DOA 角度数据

### 11.2 语音识别流程

#### 问题：如何把你说的话变成文字？

本项目使用 OpenAI 的 Whisper 模型，并使用 Groq 的加速 API 调用。整体流程如下：

1. **录音**：通过麦克风阵列使用 arecord 采集 6 通道 16kHz 音频

2. **预处理**：使用 NumPy 提取第 1 通道（波束形成后的信号），进行归一化和增益放大

3. **上传**：将处理后的音频文件上传到 Groq 服务器

4. 识别：Whisper 模型将音频波形转写为文本。

5. **返回**：获取识别结果（例如，“turn left”）

Whisper 模型是目前最先进的语音识别模型之一，支持多种语言，识别精度很高。

### 11.3 意图理解原理

#### 问题：AI 如何理解你想让机械臂做什么？

本项目使用 Meta 的 Llama-3.3-70B 大语言模型，通过 Groq API 调用。

**核心技术**：Prompt Engineering（提示工程）

在代码中，我们给 AI 一个详细的“指令模板”，并告诉它：

- 可以执行哪些动作（向左转、向右转、打招呼等）

- 每个动作的含义

- 输出格式要求（JSON）

例如，当用户说“帮我把头转向左边”时：

1. 文本被发送到 Llama-3.3-70B

2. AI 结合系统提示理解意图

3. 输出结构化 JSON：

   ```json
   {"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
   ```

4. 程序解析 JSON 并执行相应动作

### 11.4 机械臂控制原理

#### 问题：电脑如何控制机械臂？

**运动学（Kinematics）**：

机械臂控制的核心是运动学——给定目标关节角度，计算机械臂末端在空间中的位置（正向运动学）；或者反过来，给定末端目标位置，计算每个关节应该转动多少（逆向运动学）。

本项目使用 **Pinocchio** 库进行运动学计算和轨迹规划。

**运动插值**：

机械臂不会直接从 A 点“跳”到 B 点，而是通过插值算法平滑过渡。代码中使用了余弦缓动函数（cosine easing）：

```python
# Easing formula: makes motion smoother and more natural
ease = -(math.cos(math.pi * t) - 1) / 2.0
```

这使得机械臂在启动时缓慢加速，在停止前缓慢减速，就像自然的人体动作一样。

**关节限位保护**：

所有目标关节角度都会被裁剪在安全范围内：

```python
np.clip(target_angle, JOINT_LIMITS_MIN, JOINT_LIMITS_MAX)
```

这样可以确保机械臂不会超出物理极限，避免损坏。

---

## 12. 参考资料

### 12.1 项目相关链接

| 资源 | 链接 | 说明 |
|-----|-----|-----|
| 项目主仓库 | https://github.com/xr686/reBot-Arm-reSpeaker-Flex | 声控主程序 |
| 机械臂控制库 | https://github.com/vectorBH6/reBotArm_control_py | 机械臂 Python 控制库 |
| reBot Arm 官方 | https://www.rebotix.com/ | 机械臂官方网站 |
| Seeed Studio | https://www.seeedstudio.com/ | reSpeaker Flex 购买与技术支持 |

### 12.2 reSpeaker Flex 相关 Wiki

| 资源 | 链接 |
|-----|-----|
| reSpeaker Flex 官方 Wiki | https://wiki.seeedstudio.com/cn/reSpeaker_USB_Mic_Array/ |
| XMOS XVF3800 技术文档 | https://www.xmos.com/xvf3800 |
| XVF3800 用户指南 | https://www.xmos.com/download/XVF3800-User-Guide (1).pdf |
| 麦克风阵列 DOA 算法说明 | 见 reSpeaker Flex 官方文档 |

### 12.3 机械臂相关 Wiki

| 资源 | 链接 |
|-----|-----|
| reBot-DevArm GitHub | https://github.com/Seeed-Projects/reBot-DevArm |
| ReBot Arm 装配指南 | 见 Seeed Studio 官方 Wiki |
| Pinocchio 运动学库 | https://github.com/stack-of-tasks/pinocchio |

### 12.4 API 和工具文档

| 资源 | 链接 | 说明 |
|-----|-----|-----|
| Groq 控制台 | https://console.groq.com/keys | 管理 API Key |
| Groq API 文档 | https://console.groq.com/docs | API 使用说明 |
| Groq 开发者社区 | https://discord.gg/groq | 技术支持社区 |
| Edge-TTS 项目 | https://github.com/rany2/edge-tts | 语音合成工具 |
| Whisper 论文 | https://arxiv.org/abs/2212.04356 | 语音识别技术论文 |
| Llama 模型 | https://ai.meta.com/llama/ | 大语言模型官网 |

### 12.5 技术学习资源

| 主题 | 推荐资源 |
|-----|-----|
| Python 基础 | https://docs.python.org/zh-cn/3/tutorial/ |
| Conda 使用 | https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html |
| Ubuntu 基础 | https://ubuntu.com/tutorials/command-line-for-beginners |
| Git 基础 | https://www.progit.cc/ |
| 机器人学入门 | Modern Robotics (Kevin Lynch) |
| 语音识别入门 | Andrew Ng 深度学习课程-序列模型 |

### 12.6 社区与支持

- **GitHub Issues**：如果你遇到本文件未覆盖的问题，可以在项目 GitHub 仓库中提交 Issue。

- **Seeed Studio 论坛**：https://forum.seeedstudio.com/（reSpeaker 相关技术讨论）

- **Groq Discord**：https://discord.gg/groq（API 相关问题）

---

## 写在最后

恭喜你读到了文档的最后！如果你一步步按照本 Wiki 操作，我相信你已经成功搭建了自己的智能语音机械臂系统。

本项目涉及声音处理、AI 语音交互、机器人运动控制等多个技术领域，对初学者来说是一个很好的综合实践项目。希望你能继续在此基础上探索：

- 尝试修改语音指令，增加更多自定义动作

- 调整 DOA 参数，让声源跟踪更加灵敏

- 探索将项目部署到树莓派等嵌入式设备

- 增加视觉模块，让机械臂“看得见”

如果你有任何问题或建议，欢迎通过 GitHub Issue 反馈。玩得开心！🤖

---

> **免责声明**：本文档基于项目的开源代码，仅供参考。机械臂操作具有危险性，请在操作前充分了解安全注意事项。因使用本文档造成的设备损坏或人身伤害，作者概不负责。

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
