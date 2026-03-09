---
description: 本项目演示如何使用 Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）作为边缘语音设备。它通过 Agora 建立实时双向音频链路，并直接连接 Agora Conversational AI Agent API v2（LLM/ASR/TTS），以实现低延迟的实时语音对话。
title: reSpeaker XVF3800 + Agora Conversational AI Agent v2 边缘对话客户端部署指南
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
slug: /respeaker_xvf3800_agora_convo_client
sku: 114993702,114993700
last_update:
  date: 2/04/2026
  author: Jiayu Zhan(Jack)
createdAt: '2026-02-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_agora_convo_client/
---

> 目标：让 ESP32S3 与 reSpeaker XVF3800 协同工作，通过 **Agora RTC** 建立稳定、低延迟的双向音频链路。
> 项目源代码: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main
> Seeed-Projects: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main

## 介绍

在本教程中，我们将指导你使用 **Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）** 作为边缘语音设备，通过 **Agora RTC** 建立稳定、低延迟的双向音频链路，并在设备上直接调用 **Agora Conversational AI Agent API v2**，完成 **ASR → LLM → TTS** 的对话闭环：设备采集麦克风音频并上行发送；云端 AI 生成语音回复并下行发送；设备实时回放——带来类似“电话通话”的语音对话体验。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="respeaker xvf3800 with xiao" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 选择你的后端

本指南提供了**两种后端选项**，请选择适合你场景的方案：

| 选项 | 最适合的场景 | 是否需要服务器 | 链接 |
|---|---|---:|---|
| **Agora Conversational AI Agent v2（云端，直连）** | 搭建最快 / 基础设施最少 | 否 | 你正在这里 ✅ |
| **TEN Framework（自托管，可插拔 ASR/LLM/TTS）** | 自定义流水线 / 供应商切换 / 高级特性 | 是（Docker） | 👉 [前往 TEN Framework 版本](/cn/respeaker_xvf3800_agora_ten_framework_client) |

## 目录

1. [关键特性](#关键特性)
2. [系统架构](#系统架构)
3. [前置条件](#前置条件)
4. [固件与硬件说明](#固件与硬件说明)
5. [ESP32 部署](#esp32-部署)
   - [开发环境搭建](#开发环境搭建)
   - [下载 Agora IoT SDK](#下载-agora-iot-sdk)
   - [配置 ESP-ADF 板级引脚（关键）](#配置-esp-adf-板级引脚关键)
   - [项目参数配置](#项目参数配置)
   - [编译与烧录](#编译与烧录)
6. [验证与测试](#验证与测试)
7. [常见问题 FAQ](#常见问题-faq)
8. [参考资料](#参考资料)




## 关键特性

- **实时语音对话**：基于 Agora RTC 的低延迟双向音频链路  
- **直接集成 AI Agent v2**：设备直接连接 Agora Conversational AI Agent API v2  
- **XVF3800 按键控制**：通过 I2C 轮询按键以开始/停止对话  
- **声学回声消除（AEC）**：在设备音频流水线中集成 AEC 以提升对话质量  
- **G.711 μ-law 编解码器**：适用于嵌入式语音场景的高效编解码  
- **可配置 AI 后端**：示例支持 OpenAI / Azure OpenAI 等  
- **8 kHz 采样率**：针对语音对话场景优化  



## 系统架构

### 架构概览

```
┌─────────────────────────────────────────────────────────────────────┐
│                          System Architecture                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐                    ┌─────────────────────────┐ │
│  │   ESP32-S3 Device│                    │   Agora Conversational  │ │
│  │   (Edge)         │                    │      AI Agent v2        │ │
│  ├─────────────────┤                    ├─────────────────────────┤ │
│  │ • Microphone cap.│ ──── Agora RTC ──→ │ • ASR (speech recog.)   │ │
│  │ • WiFi           │     real-time audio│ • LLM (large language)  │ │
│  │ • Speaker play   │ ←── Agora RTC ──── │ • TTS (speech synth.)   │ │
│  │ • Button control │                    │ • Agent mgmt/auth       │ │
│  └─────────────────┘                    └─────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 边缘音频处理流水线

```
Microphone (XVF3800)
    ↓ I2S (DIN)
I2S Capture
    ↓
AEC / Audio Processing
    ↓
RTC Encode (G.711 μ-law, 8kHz)
    ↓
Agora RTC Uplink → AI Agent v2
    ↓
(Cloud: ASR → LLM → TTS)
    ↓
Agora RTC Downlink ← AI Agent v2
    ↓
RTC Decode
    ↓
I2S Playback (DOUT)
    ↓
Speaker (3.5mm / AIC3104)
```



## 前置条件

### 硬件需求

| 硬件 | 说明 |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | 主控制板（推荐带 PSRAM 版本） |
| **reSpeaker XVF3800** | 带 DSP 的 4 麦克风阵列扩展板 |
| **扬声器** | 连接到 3.5mm 音频接口用于播放 |
| **USB-C 数据线** | 用于固件烧录和供电 |

:::tip Note
在本项目中，音频编解码由 XVF3800 与 AIC3104 协同完成。ESP32-S3 通过 I2S 传输音频数据，并通过 I2C 控制编解码器和按键。
:::

### 软件需求

| 软件 | 推荐版本 | 用途 |
|------|----------|------|
| **ESP-IDF** | v5.2.3 | ESP32 开发框架 |
| **ESP-ADF** | v2.7 | ESP32 音频开发框架 |
| **Python** | 3.8+ | 工具链/构建依赖 |
| **Git** | 最新版 | 代码获取与管理 |



## 启用 Conversational AI（Agora 控制台）

本节将确保你的 **Agora 项目** 已在控制台中打开 **Enable Conversational AI** 开关，并且你已经准备好后续调用所需的 **App ID / App Certificate / RTC Token**。如果跳过此步骤，设备可能可以成功加入 RTC 频道，但仍无法触发 Conversational AI Engine 的对话流水线。

### 你需要准备的内容

- 一个 **Agora 账号**
- 一个 **Agora Project**（推荐：创建时选择 **Secured mode: APP ID + Token (Recommended)**）
- 项目信息：
  - **App ID**
  - **App Certificate**（用于服务端生成 Token）
  - **RTC Token（临时或服务端生成）**（用于 RTC 加入测试）

### 1) 注册 / 登录 Agora（概览）

- 支持邮箱/手机号注册以及第三方登录。
- 注册完成后，登录 **Agora Console**；通常会引导你创建一个项目。

### 2) 创建 Agora 项目（概览）

在 Agora Console 的 **Projects** 页面：

1. 点击 **Create New**
2. 填写 Project name / Use case
3. Authentication method：选择 **APP ID + Token**（推荐）
4. 提交创建

![Create project](https://files.seeedstudio.com/wiki/Respeaker_agora/1.png )

:::tip 为什么推荐使用 Token 模式？
它在生产环境中更安全，并且更符合官方针对 Conversational AI / RTC 集成所推荐的认证流程。
:::

### 3) 获取 App ID

在 **Projects** 列表中找到你的项目并复制 **App ID**。
![Get App ID](https://files.seeedstudio.com/wiki/Respeaker_agora/2.png  )

### 4) 获取 App Certificate（用于服务端生成 Token）

1. 在 **Projects** 列表中，点击项目右侧的 ✏️（编辑/配置）图标。
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/3.png )
2. 在项目配置页面，从 **Primary Certificate** 区域复制 **App Certificate**。
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/4.png )

:::caution 重要
App Certificate 属于敏感信息。不要将其提交到公共代码仓库，也不要在公开日志中打印。
:::

### 5) 生成 RTC Token（用于快速测试）

两种常见方式：

- **在控制台中生成临时 Token（Temp Token）**
  1. 进入项目配置页面
  2. 在 Security 面板中点击 **Generate Temp Token**
  3. 输入 Channel name → Generate → 复制 Token

- **使用 Agora Token Builder（网页）**
  - 填写 App ID / App Certificate、channel name、UID 等信息以生成 Token（在你实现服务端 Token 生成之前，用于快速验证）

### 6) 打开 Enable Conversational AI（关键）

在使用 Conversational AI Engine 之前，必须在控制台中为你的应用启用该功能：

1. 进入 **Projects**，找到目标项目并点击 ✏️ 进入配置页面。
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/5.png )
2. 在 **All features** 中找到 **Conversational AI > Configurations**
3. 打开 **Enable Conversational AI** 开关。
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/6.png )

:::tip 旧版与新版控制台
如果你看到的是旧版界面，请先切换到新版控制台（页面通常会提供类似 “Switch to the new version” 的入口）。
:::



## 固件与硬件说明

### 关键引脚映射（reSpeaker XVF3800 + XIAO ESP32-S3）

| 接口 | 功能 | ESP32-S3 引脚 |
|------|------|---------------|
| **I2C** | 编解码器控制 + 按键 | SDA=GPIO5, SCL=GPIO6 |
| **I2S** | 音频数据 | BCLK=GPIO8, WS=GPIO7, DOUT=GPIO44, DIN=GPIO43 |
| **Power** | 供电/烧录 | USB-C（XIAO ESP32-S3） |

:::caution 重要
默认的 ESP-ADF 开发板配置通常是为 Korvo-2-V3 准备的，其引脚映射与 XVF3800 不同。如果你不按照本指南进行配置，常见症状包括 **通过 I2C 无法检测到 codec / I2S 上没有音频**。
:::


## ESP32 部署

### 克隆此仓库
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

# (Recommended) Create an environment load alias (write into ~/.bashrc or ~/.zshrc)
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

#### 步骤 2：安装 ESP-ADF v2.7

```bash
cd ~/esp
git clone -b v2.7 --recursive https://github.com/espressif/esp-adf.git

export ADF_PATH=~/esp/esp-adf
echo 'export ADF_PATH=~/esp/esp-adf' >> ~/.bashrc  # or ~/.zshrc
```

#### 步骤 3：应用 IDF 补丁（ESP-ADF 所需）

```bash
cd ~/esp/esp-idf
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```


### 下载 Agora IoT SDK

将 Agora IoT SDK 解压到项目的 `components/` 目录中（以项目根目录为例）：

```bash
cd /path/to/esp32-client-Respeaker-convo/components

wget https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar
tar -xvf agora_iot_sdk.tar
```

解压后，目录结构应如下所示：

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

### 配置 ESP-ADF 开发板引脚（关键）

本项目以 ESP-ADF Korvo-2-V3 开发板为基础，但你必须将其引脚映射替换为 XVF3800 的配置。

**方法 A（推荐）：直接覆盖 board_pins_config.c**

```bash
cp board_configs/board_pins_config_respeaker.c    $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

**验证是否生效：**

```bash
grep "TAG =" $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

预期输出包括：

```c
static const char *TAG = "RESPEAKER_XVF3800";
```

:::tip 为什么要修改？
因为 codec（AIC3104）控制以及 I2S 采集/播放依赖正确的 I2C/I2S 引脚映射。如果引脚错误，你会遇到 **I2C 超时 / 无法检测到 0x18 / 没有声音** 等问题。
:::


### 项目参数配置

编辑 `main/app_config.h` 并配置以下内容：

#### 1）WiFi

```c
#define WIFI_SSID                "Your_WiFi_SSID"
#define WIFI_PASSWORD            "Your_WiFi_Password"
```

#### 2）Agora 账号信息

```c
#define AGORA_APP_ID             "your_agora_app_id"
#define AGORA_API_KEY            "your_agora_api_key"
#define AGORA_API_SECRET         "your_agora_api_secret"
```

#### 3）RTC 频道和 UID

```c
#define CONVO_CHANNEL_NAME       "your_unique_channel"
#define CONVO_RTC_TOKEN          ""  // Optional: tokens recommended in production
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
# or
. $HOME/esp/esp-idf/export.sh
```

#### 步骤 2：进入项目目录并设置目标

```bash
cd /path/to/esp32-client-Respeaker-convo
idf.py set-target esp32s3
```

#### 步骤 3：编译

```bash
idf.py build
```

#### 步骤 4：烧录并监视

```bash
# Linux
idf.py -p /dev/ttyUSB0 flash monitor

# macOS
idf.py -p /dev/cu.usbmodem* flash monitor

# Windows
idf.py -p COM3 flash monitor
```

:::tip Linux 串口权限
如果你看到 “permission denied”，请运行：
```bash
sudo usermod -aG dialout $USER
# Then log out and log back in
```
:::



## 验证与测试

### 启动日志检查清单

启动成功时，串口日志通常包括：

- WiFi 已连接并获取到 IP
- 检测到 AIC3104（I2C 地址通常为 `0x18`）
- 音频流水线启动成功
- Agora RTC 加入成功（或已就绪）

示例（仅供参考）：

```text
WiFi connected
got ip: 192.168.x.x
Found device at address 0x18
AIC3104 Codec initialized successfully
agora_rtc_join_channel success
```

### 开始对话（按键控制）

1. 上电并等待设备就绪  
2. **按一次 SET 按钮**：开始/加入对话（Agent 加入 RTC 频道）  
3. 对着麦克风说话，并等待扬声器播放 AI 回复  
4. 再次按下 **SET**（或按下 **MUTE**）以结束对话  


## 常见问题（FAQ）

### Q1：I2C 超时 / 找不到 AIC3104（0x18）

**可能原因：**
- 未按本指南说明替换 ESP-ADF 的 `board_pins_config.c`
- I2C 引脚映射错误（应为 SDA=GPIO5，SCL=GPIO6）
- 硬件连接问题（XIAO 和 XVF3800 未正确插接）

**建议检查：**
- 重复执行 “Configure ESP-ADF Board Pins” 步骤，然后运行 `idf.py fullclean` 并重新编译
- 检查启动日志中是否能检测到 `0x18`

### Q2：录音/上行正常，但没有扬声器输出

**常见原因：**
- I2S DIN/DOUT 方向配置错误（DIN=GPIO43，DOUT=GPIO44）
- 扬声器未连接到 3.5mm 接口或音量过低
- AEC/音频流水线未正确启动

### Q3：编译错误或缺少依赖

**建议：**
- 确认 ESP-IDF / ESP-ADF 版本与本指南一致
- 重新初始化子模块（如果项目使用了子模块）：
  ```bash
  git submodule update --init --recursive
  ```
- 执行完整清理：
  ```bash
  idf.py fullclean
  ```



## 参考资料

- Agora Console（App ID / API Key）
- Agora RTC 文档和 IoT SDK 文档
- ESP-IDF v5.2.3 文档
- ESP-ADF v2.7 文档
- reSpeaker XVF3800 介绍和固件升级指南
- [ESP32 Conversational AI Clients](https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main)


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你的使用体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
