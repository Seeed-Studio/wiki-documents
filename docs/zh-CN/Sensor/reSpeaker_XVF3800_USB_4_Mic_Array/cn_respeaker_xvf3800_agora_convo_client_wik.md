---
description: 本项目演示如何使用 Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）作为端侧语音设备，通过 Agora 建立实时双向语音链路，并直接对接 Agora Conversational AI Agent API v2（LLM/ASR/TTS），实现低延迟的实时语音对话。
title: reSpeaker XVF3800（XIAO ESP32-S3）+ Agora Conversational AI Agent v2 端侧对话客户端部署指南
keywords:
- reSpeaker
- XVF3800
- XIAO
- ESP32S3
- Agora
- Conversational AI
- AI Agent
- RTC
- ESP-IDF
- ESP-ADF
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /cn/respeaker_xvf3800_agora_convo_client
last_update:
  date: 04/2/2026
  author: Jiayu Zhan(Jack)
---

> 目标：让 ESP32S3 与 reSpeaker XVF3800 协同工作，通过 **Agora RTC** 建立稳定、低延迟的双向语音链路。
> 项目源码：https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main
> Seeed-Projects：https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main
## 介绍

在本教程中，我们将指导您使用 **Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）** 作为端侧语音设备，通过 **Agora RTC** 建立稳定、低延迟的双向语音链路，并在设备端直接调用 **Agora Conversational AI Agent API v2**，完成 **ASR → LLM → TTS** 的对话闭环：设备端采集麦克风音频上行，云端 AI 生成的语音回复下行回传，设备端实时播放，从而实现“像通话一样”的语音对话体验。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="respeaker xvf3800 with xiao" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 目录

1. [主要特性](#主要特性)
2. [系统架构](#系统架构)
3. [准备工作](#准备工作)
4. [固件与硬件说明](#固件与硬件说明)
5. [ESP32 端部署](#esp32-端部署)
   - [开发环境搭建](#开发环境搭建)
   - [下载 Agora IoT SDK](#下载-agora-iot-sdk)
   - [配置 ESP-ADF Board 引脚（关键）](#配置-esp-adf-board-引脚关键)
   - [项目参数配置](#项目参数配置)
   - [编译与烧录](#编译与烧录)
6. [验证与测试](#验证与测试)
7. [常见问题（FAQ）](#常见问题faq)
8. [参考资源](#参考资源)




## 主要特性

- **实时语音对话**：基于 Agora RTC 的低延迟双向音频链路  
- **AI Agent v2 直连**：设备端直接对接 Agora Conversational AI Agent API v2  
- **XVF3800 按键控制**：通过 I2C 轮询按键，实现对话启动/停止  
- **回声消除（AEC）**：设备端音频链路集成 AEC，提升对话质量  
- **G.711 μ-law 编解码**：面向嵌入式语音的高效编解码  
- **可配置 AI 后端**：示例支持 OpenAI / Azure OpenAI 等  
- **8kHz 采样率**：面向语音对话场景优化  



## 系统架构

### 架构概览

```
┌─────────────────────────────────────────────────────────────────────┐
│                           系统架构图                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐                    ┌─────────────────────────┐ │
│  │  ESP32-S3 设备   │                    │   Agora Conversational  │ │
│  │  (边缘端)        │                    │      AI Agent v2        │ │
│  ├─────────────────┤                    ├─────────────────────────┤ │
│  │ • 麦克风采集     │ ──── Agora RTC ──→ │ • ASR 语音识别          │ │
│  │ • WiFi 连接      │      实时音频传输   │ • LLM 大语言模型        │ │
│  │ • 扬声器播放     │ ←── Agora RTC ──── │ • TTS 语音合成          │ │
│  │ • 按键控制       │                    │ • Agent 管理/鉴权       │ │
│  └─────────────────┘                    └─────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 端侧音频处理管道

```
麦克风（XVF3800）
    ↓ I2S (DIN)
I2S 采集
    ↓
AEC / 音频处理
    ↓
RTC 编码（G.711 μ-law, 8kHz）
    ↓
Agora RTC 上行 → AI Agent v2
    ↓
（云端：ASR → LLM → TTS）
    ↓
Agora RTC 下行 ← AI Agent v2
    ↓
RTC 解码
    ↓
I2S 播放（DOUT）
    ↓
扬声器（3.5mm / AIC3104）
```



## 准备工作

### 硬件要求

| 硬件 | 说明 |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | 主控板（建议带 PSRAM 版本） |
| **reSpeaker XVF3800** | 4 麦克风阵列扩展板（含 DSP） |
| **扬声器** | 连接到 3.5mm 音频口用于播放 |
| **USB-C 数据线** | 用于烧录固件与供电 |

:::tip 说明
本项目的音频编解码由 XVF3800 搭配 AIC3104 完成，ESP32-S3 通过 I2S 进行音频数据传输，通过 I2C 进行 codec / 按键控制。
:::

### 软件要求

| 软件 | 版本建议 | 用途 |
|------|----------|------|
| **ESP-IDF** | v5.2.3 | ESP32 开发框架 |
| **ESP-ADF** | v2.7 | ESP32 音频开发框架 |
| **Python** | 3.8+ | 构建工具链依赖 |
| **Git** | 最新版 | 代码获取与管理 |



## 启用 Conversational AI（Agora Console 侧）

本章节用于确保你的 **Agora 项目** 已在 Console 中打开 **Enable Conversational AI** 开关，并完成后续调用所需的 **App ID / App Certificate / RTC Token** 等准备工作。若不完成此步骤，设备端即使加入 RTC 频道成功，也可能无法正常触发 Conversational AI Engine 的对话链路。

### 你需要准备什么

- 一个 **Agora 账号**
- 一个 **Agora Project**（建议创建时选择：**Secured mode: APP ID + Token (Recommended)**）
- 项目对应的：
  - **App ID**
  - **App Certificate**（用于服务端生成 Token）
  - **RTC Token（临时或服务端生成）**（用于 RTC 入会测试）

### 1）注册 / 登录 Agora 账号（概览）

- 支持邮箱/手机号注册，也支持第三方账号登录。
- 注册完成后登录 **Agora Console**，通常会引导你创建项目。

### 2）创建 Agora Project（概览）

在 Agora Console 的 **Projects** 页面：

1. 点击 **Create New**
2. 填写 Project name / Use case
3. 认证方式建议选：**APP ID + Token**
4. Submit 创建完成

![创建项目](https://files.seeedstudio.com/wiki/Respeaker_agora/1.png )

:::tip 为什么推荐 Token 模式？
生产环境更安全，并且后续对接 Conversational AI / RTC 的鉴权链路也更符合官方推荐实践。
:::

### 3）获取 App ID

在 **Projects** 列表中找到你的项目，在 **App ID** 一栏点击复制即可。
![获取 App ID](https://files.seeedstudio.com/wiki/Respeaker_agora/2.png  )
### 4）获取 App Certificate（用于服务端生成 Token）

1. 在 **Projects** 列表中点击项目右侧的 ✏️（编辑/配置）
![获取 App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/3.png )
2. 在项目配置页的 **Primary Certificate** 区域复制 **App Certificate**
![获取 App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/4.png )
:::caution 重要
App Certificate 属于敏感信息，请勿提交到公开仓库或在公开日志中打印。
:::

### 5）生成 RTC Token（用于快速测试）

常见两种方式：

- **Console 生成临时 Token（Temp Token）**
  1. 进入项目配置页
  2. 在 Security 面板点击 **Generate Temp Token**
  3. 输入 Channel name → Generate → 复制 Token

- **使用 Agora Token Builder（网页版）**
  - 填入 App ID / App Certificate、频道名、UID 等信息生成 Token（更适合你在服务端生成 Token 前做快速验证）

### 6）打开 Enable Conversational AI（关键）

启用 Conversational AI Engine 之前，需要在 Console 为你的 App 打开开关：

1. 进入 **Projects** 页面，找到目标项目并点击 ✏️ 进入配置
![打开 Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/5.png )
2. 在 **All features** 中找到：**Conversational AI > Configurations**
3. 打开 **Enable Conversational AI** 开关
![打开 Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/6.png )

:::tip 新旧 Console 提示
如果你看到的是旧版界面，需要先切换到新版 Console（页面通常会提供 “Switch to the new version” 的入口）。
:::



## 固件与硬件说明

### 关键引脚映射（reSpeaker XVF3800 + XIAO ESP32-S3）

| 接口 | 功能 | ESP32-S3 引脚 |
|------|------|---------------|
| **I2C** | codec 控制 + 按键 | SDA=GPIO5, SCL=GPIO6 |
| **I2S** | 音频数据 | BCLK=GPIO8, WS=GPIO7, DOUT=GPIO44, DIN=GPIO43 |
| **电源** | 供电/烧录 | USB-C（XIAO ESP32-S3） |

:::caution 重要
ESP-ADF 默认 board 配置通常是为 Korvo-2-V3 准备的，引脚映射与 XVF3800 不同。若不按本文配置，常见现象是 **I2C 探测不到 codec / I2S 无声音**。
:::


## ESP32 端部署

### 下载本项目的仓库
```bash
git clone https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main/esp32-respeaker
```

### 开发环境搭建

#### 步骤 1：安装 ESP-IDF v5.2.3

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

cd esp-idf
./install.sh esp32s3

# （推荐）创建环境加载别名（写入 ~/.bashrc 或 ~/.zshrc）
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

#### 步骤 2：安装 ESP-ADF v2.7

```bash
cd ~/esp
git clone -b v2.7 --recursive https://github.com/espressif/esp-adf.git

export ADF_PATH=~/esp/esp-adf
echo 'export ADF_PATH=~/esp/esp-adf' >> ~/.bashrc  # 或 ~/.zshrc
```

#### 步骤 3：应用 IDF 补丁（ESP-ADF 需要）

```bash
cd ~/esp/esp-idf
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```


### 下载 Agora IoT SDK

将 Agora IoT SDK 解压到项目 `components/` 目录（以项目根目录为例）：

```bash
cd /path/to/esp32-client-Respeaker-convo/components

wget https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar
tar -xvf agora_iot_sdk.tar
```

解压后目录结构应类似：

```text
components/agora_iot_sdk/
├── CMakeLists.txt
├── include/
│   └── agora_rtc_api.h
└── libs/
    ├── libagora-cjson.a
    ├── libahpl.a
    └── librtsa.a
```

### 配置 ESP-ADF Board 引脚（关键）

本项目使用 ESP-ADF 的 Korvo-2-V3 board 作为基础，但必须替换其引脚映射为 XVF3800 对应配置。

**方式 A（推荐）：直接覆盖 board_pins_config.c**

```bash
cp board_configs/board_pins_config_respeaker.c    $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

**验证是否生效：**

```bash
grep "TAG =" $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

期望输出包含：

```c
static const char *TAG = "RESPEAKER_XVF3800";
```

:::tip 为什么要改？
因为 codec（AIC3104）控制与 I2S 采集/播放都依赖正确的 I2C/I2S 引脚映射。只要引脚不对，就会出现 **I2C 超时 / 探测不到 0x18 / 没声音** 等问题。
:::


### 项目参数配置

编辑 `main/app_config.h`，配置以下信息：

#### 1）WiFi

```c
#define WIFI_SSID                "Your_WiFi_SSID"
#define WIFI_PASSWORD            "Your_WiFi_Password"
```

#### 2）Agora 账户信息

```c
#define AGORA_APP_ID             "your_agora_app_id"
#define AGORA_API_KEY            "your_agora_api_key"
#define AGORA_API_SECRET         "your_agora_api_secret"
```

#### 3）RTC 频道与 UID

```c
#define CONVO_CHANNEL_NAME       "your_unique_channel"
#define CONVO_RTC_TOKEN          ""  // 可选：生产环境建议使用 token
#define CONVO_AGENT_RTC_UID      1001
#define CONVO_REMOTE_RTC_UID     1000
```

#### 4）LLM 配置（示例：OpenAI / Azure OpenAI）

```c
#define LLM_URL                  "https://api.openai.com/v1/chat/completions"
#define LLM_API_KEY              "sk-your-openai-api-key"
#define LLM_MODEL                "gpt-4o-mini"
#define LLM_SYSTEM_MESSAGE       "You are a helpful AI assistant."
```

```c
#define LLM_URL                  "https://your-resource.openai.azure.com/openai/deployments/..."
#define LLM_API_KEY              "your-azure-api-key"
#define LLM_MODEL                "gpt-4"
```

#### 5）TTS 配置（示例：Azure TTS）

```c
#define TTS_VENDOR               "azure"
#define TTS_API_KEY              "your-azure-speech-key"
#define TTS_REGION               "tts-region"
#define TTS_VOICE_NAME           "en-US-JennyNeural"
```

#### 6）ASR 配置

```c
#define ASR_LANGUAGE             "en-US"
```


### 编译与烧录

#### 步骤 1：加载 ESP-IDF 环境

```bash
get_idf
# 或
. $HOME/esp/esp-idf/export.sh
```

#### 步骤 2：进入项目目录并设置目标芯片

```bash
cd /path/to/esp32-client-Respeaker-convo
idf.py set-target esp32s3
```

#### 步骤 3：编译

```bash
idf.py build
```

#### 步骤 4：烧录并监控

```bash
# Linux
idf.py -p /dev/ttyUSB0 flash monitor

# macOS
idf.py -p /dev/cu.usbmodem* flash monitor

# Windows
idf.py -p COM3 flash monitor
```

:::tip Linux 串口权限
若提示权限不足，可执行：
```bash
sudo usermod -aG dialout $USER
# 然后注销并重新登录
```
:::



## 验证与测试

### 启动日志检查要点

成功启动时，串口日志通常包含：

- WiFi 连接成功并获取 IP
- 探测到 AIC3104（I2C 地址通常为 `0x18`）
- 音频管道启动成功
- Agora RTC 加入频道成功（或准备就绪）

示例（仅供参考）：

```text
WiFi connected
got ip: 192.168.x.x
Found device at address 0x18
AIC3104 Codec initialized successfully
agora_rtc_join_channel success
```

### 开始对话（按键控制）

1. 上电后等待设备就绪  
2. **按一次 SET 按钮**：启动/加入对话（Agent 进入 RTC 频道）  
3. 对着麦克风说话，等待扬声器播放 AI 回复  
4. 再次按 **SET**（或按 **MUTE**）停止对话  


## 常见问题（FAQ）

### Q1：I2C 超时 / 找不到 AIC3104（0x18）

**可能原因：**
- 没有按本文替换 ESP-ADF 的 `board_pins_config.c`
- I2C 引脚映射错误（应为 SDA=GPIO5，SCL=GPIO6）
- 硬件连接异常（XIAO 与 XVF3800 未正确插接）

**建议排查：**
- 重新执行「配置 ESP-ADF Board 引脚」步骤，并 `idf.py fullclean` 后重编译
- 观察启动日志是否能扫描到 `0x18`

### Q2：能够录音/上行，但扬声器没声音

**常见原因：**
- I2S DOUT/DIN 方向配置错误（DIN=GPIO43，DOUT=GPIO44）
- 扬声器未接入 3.5mm 口或音量过低
- AEC/音频管道未正确启动

### Q3：编译报错或依赖不完整

**建议：**
- 确认 ESP-IDF / ESP-ADF 版本与本文一致
- 重新初始化子模块（如果项目包含 submodule）：
  ```bash
  git submodule update --init --recursive
  ```
- 对构建目录做彻底清理：
  ```bash
  idf.py fullclean
  ```



## 参考资源

- Agora Console（App ID / API Key 获取）
- Agora RTC 文档与 IoT SDK 文档
- ESP-IDF v5.2.3 文档
- ESP-ADF v2.7 文档
- reSpeaker XVF3800 介绍与固件更新指南
- [ESP32 Conversational AI Clients](https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main)


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

