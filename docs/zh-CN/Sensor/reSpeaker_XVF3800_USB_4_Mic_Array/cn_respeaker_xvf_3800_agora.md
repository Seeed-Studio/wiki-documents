---
description: 本项目演示如何使用 Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）作为边缘语音设备。它通过 Agora 建立实时双向音频链路，并直接连接到 Agora 对话式 AI 代理 API v2（LLM/ASR/TTS），实现低延迟的实时语音对话。
title: ReSpeaker XVF3800 + Agora 对话式 AI 代理 v2 边缘对话客户端部署指南
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
sku: 114993702,114993700
last_update:
  date: 04/2/2026
  author: Jiayu Zhan(Jack)
---

> 目标：让 ESP32S3 与 reSpeaker XVF3800 协同工作，通过 **Agora RTC** 建立稳定、低延迟的双向音频链路。
> 项目源代码：https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main
> Seeed-Projects：https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main

## 简介

在本教程中，我们将指导您使用 **Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）** 作为边缘语音设备，通过 **Agora RTC** 建立稳定、低延迟的双向音频链路，并在设备上直接调用 **Agora 对话式 AI 代理 API v2** 来完成 **ASR → LLM → TTS** 的对话循环：设备捕获麦克风音频并上行发送；云端 AI 生成语音回复并下行发送；设备实时播放回复——提供"电话通话般"的语音对话体验。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="respeaker xvf3800 with xiao" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 选择您的后端

本指南提供 **两种后端选项**。选择适合您场景的选项：

| 选项 | 最适合 | 需要服务器 | 链接 |
|---|---|---:|---|
| **Agora 对话式 AI 代理 v2（云端，直连）** | 最快设置 / 最少基础设施 | 否 | 您在这里 ✅ |
| **TEN Framework（自托管，可插拔 ASR/LLM/TTS）** | 自定义管道 / 提供商切换 / 高级功能 | 是（Docker） | 👉 [前往 TEN Framework 版本](./respeaker_xvf_3800_agora_ten_framework.md) |

## 目录

1. [主要功能](#主要功能)
2. [系统架构](#系统架构)
3. [先决条件](#先决条件)
4. [固件和硬件说明](#固件和硬件说明)
5. [ESP32 部署](#ESP32-部署)
   - [开发环境设置](#开发环境设置)
   - [下载 Agora IoT SDK](#下载-Agora-IoT-SDK)
   - [配置 ESP-ADF 板引脚（关键）](#配置-ESP-ADF-板引脚关键)
   - [项目参数配置](#项目参数配置)
   - [构建和烧录](#构建和烧录)
6. [验证和测试](#验证和测试)
7. [常见问题](#常见问题)
8. [参考资料](#参考资料)




## 主要功能

- **实时语音对话**：基于 Agora RTC 的低延迟双向音频链路  
- **直接 AI 代理 v2 集成**：设备直接连接到 Agora 对话式 AI 代理 API v2  
- **XVF3800 按钮控制**：通过 I2C 轮询按钮来启动/停止对话  
- **声学回声消除（AEC）**：设备音频管道中集成 AEC 以提高对话质量  
- **G.711 μ-law 编解码器**：适用于嵌入式语音场景的高效编解码器  
- **可配置 AI 后端**：示例支持 OpenAI / Azure OpenAI 等  
- **8 kHz 采样率**：针对语音对话场景优化  



## 系统架构

### 架构概述

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

### 边缘音频处理管道

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



## 先决条件

### 硬件要求

| 硬件 | 描述 |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | 主控制器板（推荐 PSRAM 版本） |
| **reSpeaker XVF3800** | 4 麦克风阵列扩展板（带 DSP） |
| **扬声器** | 连接到 3.5mm 音频插孔进行播放 |
| **USB-C 数据线** | 用于烧录固件和供电 |

:::tip 注意
在本项目中，音频编解码由 XVF3800 与 AIC3104 共同处理。ESP32-S3 通过 I2S 传输音频数据，并通过 I2C 控制编解码器/按钮。
:::

### 软件要求

| 软件 | 推荐版本 | 用途 |
|------|----------|------|
| **ESP-IDF** | v5.2.3 | ESP32 开发框架 |
| **ESP-ADF** | v2.7 | ESP32 音频开发框架 |
| **Python** | 3.8+ | 工具链/构建依赖 |
| **Git** | 最新版 | 代码获取和管理 |



## 启用对话式 AI（Agora 控制台）

本节确保您的 **Agora 项目** 在控制台中打开了 **启用对话式 AI** 开关，并且您已准备好后续调用所需的 **App ID / App Certificate / RTC Token**。如果跳过此步骤，设备可能会成功加入 RTC 频道，但仍无法触发对话式 AI 引擎对话管道。

### 您需要的内容

- 一个 **Agora 账户**
- 一个 **Agora 项目**（推荐：使用 **安全模式：APP ID + Token（推荐）** 创建）
- 项目信息：
  - **App ID**
  - **App Certificate**（用于服务端令牌生成）
  - **RTC Token（临时或服务端生成）**（用于 RTC 加入测试）

### 1) 注册 / 登录 Agora（概述）

- 支持邮箱/手机注册和第三方登录。
- 注册后，登录 **Agora 控制台**；通常会引导您创建项目。

### 2) 创建 Agora 项目（概述）

在 Agora 控制台的 **项目** 页面：

1. 点击 **创建新项目**
2. 填写项目名称 / 使用场景
3. 认证方式：**APP ID + Token**（推荐）
4. 提交创建

![Create project](https://files.seeedstudio.com/wiki/Respeaker_agora/1.png )

:::tip 为什么推荐 Token 模式？
它对生产环境更安全，并且更好地符合对话式 AI / RTC 集成的官方推荐认证流程。
:::

### 3) 获取 App ID

在 **项目** 列表中，找到您的项目并复制 **App ID**。
![Get App ID](https://files.seeedstudio.com/wiki/Respeaker_agora/2.png  )

### 4) 获取 App Certificate（用于服务端令牌生成）

1. 在 **项目** 列表中，点击项目右侧的 ✏️（编辑/配置）图标。
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/3.png )
2. 在项目配置页面，从 **主证书** 部分复制 **App Certificate**。
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/4.png )

:::caution 重要
App Certificate 是敏感信息。不要将其提交到公共仓库或在公共日志中打印。
:::

### 5) 生成 RTC Token（用于快速测试）

两种常见方法：

- **在控制台生成临时令牌（临时令牌）**
  1. 进入项目配置页面
  2. 在安全面板中点击 **生成临时令牌**
  3. 输入频道名称 → 生成 → 复制令牌

- **使用 Agora Token Builder（网页版）**
  - 填写 App ID / App Certificate、频道名称、UID 等来生成令牌（在实现服务端令牌生成之前用于快速验证很有用）

### 6) 打开启用对话式 AI（关键）

在使用对话式 AI 引擎之前，您必须在控制台中为您的应用启用它：

1. 进入 **项目**，找到目标项目，点击 ✏️ 进入配置。
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/5.png )
2. 在 **所有功能** 中，找到 **对话式 AI > 配置**
3. 打开 **启用对话式 AI** 开关。
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/6.png )

:::tip 旧版 vs 新版控制台
如果您看到的是旧版 UI，请先切换到新版控制台（页面通常提供"切换到新版本"等入口）。
:::



## 固件和硬件说明

### 关键引脚映射（reSpeaker XVF3800 + XIAO ESP32-S3）

| 接口 | 功能 | ESP32-S3 引脚 |
|------|------|---------------|
| **I2C** | 编解码器控制 + 按钮 | SDA=GPIO5, SCL=GPIO6 |
| **I2S** | 音频数据 | BCLK=GPIO8, WS=GPIO7, DOUT=GPIO44, DIN=GPIO43 |
| **电源** | 供电/烧录 | USB-C（XIAO ESP32-S3） |

:::caution 重要提示
默认的 ESP-ADF 板配置通常是为 Korvo-2-V3 准备的。其引脚映射与 XVF3800 不同。如果您不按照本指南进行配置，常见症状包括 **通过 I2C 检测不到编解码器 / I2S 无音频**。
:::


## ESP32 部署

### 克隆此仓库
```bash
git clone https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main/esp32-respeaker
```

### 开发环境设置

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

### 配置 ESP-ADF 板引脚（关键）

此项目使用 ESP-ADF Korvo-2-V3 板作为基础，但您必须将其引脚映射替换为 XVF3800 配置。

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

:::tip 为什么要修改这个？
因为编解码器（AIC3104）控制和 I2S 捕获/播放依赖于正确的 I2C/I2S 引脚映射。如果引脚错误，您会看到诸如 **I2C 超时 / 无法检测到 0x18 / 无声音** 等问题。
:::


### 项目参数配置

编辑 `main/app_config.h` 并配置以下内容：

#### 1) WiFi

```c
#define WIFI_SSID                "Your_WiFi_SSID"
#define WIFI_PASSWORD            "Your_WiFi_Password"
```

#### 2) Agora 账户信息

```c
#define AGORA_APP_ID             "your_agora_app_id"
#define AGORA_API_KEY            "your_agora_api_key"
#define AGORA_API_SECRET         "your_agora_api_secret"
```

#### 3) RTC 频道和 UID

```c
#define CONVO_CHANNEL_NAME       "your_unique_channel"
#define CONVO_RTC_TOKEN          ""  // Optional: tokens recommended in production
#define CONVO_AGENT_RTC_UID      1001
#define CONVO_REMOTE_RTC_UID     1000
```

#### 4) LLM 配置（示例：OpenAI / Azure OpenAI）

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

#### 5) TTS 配置（示例：Azure TTS）

```c
#define TTS_VENDOR               "azure"
#define TTS_API_KEY              "your-azure-speech-key"
#define TTS_REGION               "tts-region"
#define TTS_VOICE_NAME           "en-US-JennyNeural"
```

#### 6) ASR 配置

```c
#define ASR_LANGUAGE             "en-US"
```


### 构建和烧录

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

#### 步骤 3：构建

```bash
idf.py build
```

#### 步骤 4：烧录和监控

```bash
# Linux
idf.py -p /dev/ttyUSB0 flash monitor

# macOS
idf.py -p /dev/cu.usbmodem* flash monitor

# Windows
idf.py -p COM3 flash monitor
```

:::tip Linux 串口权限
如果您看到 "permission denied"，请运行：
```bash
sudo usermod -aG dialout $USER
# Then log out and log back in
```
:::



## 验证和测试

### 启动日志检查清单

成功启动时，串口日志通常包括：

- WiFi 已连接并获取 IP
- 检测到 AIC3104（I2C 地址通常为 `0x18`）
- 音频管道启动成功
- Agora RTC 加入成功（或就绪）

示例（仅供参考）：

```text
WiFi connected
got ip: 192.168.x.x
Found device at address 0x18
AIC3104 Codec initialized successfully
agora_rtc_join_channel success
```

### 开始对话（按钮控制）

1. 开机并等待设备就绪  
2. **按一次 SET 按钮**：开始/加入对话（Agent 加入 RTC 频道）  
3. 对着麦克风说话并等待扬声器播放 AI 回复  
4. 再次按 **SET**（或按 **MUTE**）停止对话  


## 常见问题

### Q1：I2C 超时 / 找不到 AIC3104 (0x18)

**可能原因：**
- ESP-ADF `board_pins_config.c` 未按本指南所述进行替换
- I2C 引脚映射不正确（应为 SDA=GPIO5，SCL=GPIO6）
- 硬件连接问题（XIAO 和 XVF3800 未正确插入）

**建议检查：**
- 重复"配置 ESP-ADF 板引脚"步骤，然后运行 `idf.py fullclean` 并重新构建
- 检查启动日志是否能检测到 `0x18`

### Q2：录音/上行链路工作，但扬声器无输出

**常见原因：**
- I2S DIN/DOUT 方向配置错误（DIN=GPIO43，DOUT=GPIO44）
- 扬声器未连接到 3.5mm 插孔或音量过低
- AEC/音频管道未正确启动

### Q3：构建错误或缺少依赖项

**建议：**
- 确认 ESP-IDF / ESP-ADF 版本与本指南匹配
- 重新初始化子模块（如果项目使用子模块）：
  ```bash
  git submodule update --init --recursive
  ```
- 执行完全清理：
  ```bash
  idf.py fullclean
  ```



## 参考资料

- Agora 控制台（App ID / API Key）
- Agora RTC 文档和 IoT SDK 文档
- ESP-IDF v5.2.3 文档
- ESP-ADF v2.7 文档
- reSpeaker XVF3800 介绍和固件更新指南
- [ESP32 对话式 AI 客户端](https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main)


## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里提供不同类型的支持，以确保您的体验尽可能顺畅。我们提供多种沟通渠道，以匹配不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
