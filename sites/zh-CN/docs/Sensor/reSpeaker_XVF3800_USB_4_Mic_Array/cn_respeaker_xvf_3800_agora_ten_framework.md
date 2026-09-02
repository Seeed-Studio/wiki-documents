---
description: 本项目演示如何使用 Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）作为边缘语音设备，通过 Agora 建立实时双向语音链路，并连接到 Agora ten-framework 后端（LLM/ASR/TTS），以实现低延迟的实时语音对话。
title: reSpeaker XVF3800 + Agora ten-framework 边缘对话客户端部署指南
keywords:
  - reSpeaker
  - XVF3800
  - XIAO
  - ESP32S3
  - Agora
  - ten-framework
  - AI Agent
  - RTC
  - ESP-IDF
  - ESP-ADF
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_agora_ten_framework_client
sku: 114993702,114993700
last_update:
  date: 09/02/2026
  author: Jiayu Zhan(Jack)
createdAt: '2026-02-10'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_agora_ten_framework_client/
---

> 目标：让 ESP32S3 与 reSpeaker XVF3800 协同工作，并通过 **Agora RTC** 构建稳定、低延迟的双向语音链路。
> 源代码：https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework
> Seeed-Projects：https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework

## 介绍

在本教程中，我们将指导你使用 Seeed XIAO ESP32-S3 搭配 reSpeaker XVF3800 进行音频采集与播放，并使用 Agora RTC 完成设备与后端之间的实时音频连接。后端以 AI Agent 的形式运行。该项目提供标准化的配置方式（`.env` / `property.json`），支持一键 Docker 部署、动态 Token 鉴权以及可插拔的服务提供商（ASR/LLM/TTS 可按需替换）。系统会自动完成 **ASR → LLM → TTS** 的完整闭环，并将合成语音流式回传到设备进行播放，从而实现低延迟的“说一句，回一句”对话体验。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 选择你的后端

本指南提供了**两种后端选项**，请选择适合你场景的方案：

| 选项 | 最适合的场景 | 是否需要服务器 | 链接 |
|---|---|---:|---|
| **Agora Conversational AI Agent v2（云端，直连）** | 最快上手 / 最少基础设施 | 否 | 👉 [前往 Agent v2 版本](/cn/respeaker_xvf3800_agora_convo_client) |
| **TEN Framework（自托管，可插拔 ASR/LLM/TTS）** | 自定义处理链路 / 服务商切换 / 高级特性 | 是（Docker） | 当前页面 ✅ |


## 目录

1. [Agora Assistant – 快速开始指南](#agora-assistant--快速开始指南)
2. [系统架构](#系统架构)
3. [前置条件](#前置条件)
4. [固件更新](#固件更新)
5. [服务端部署](#服务端部署)
   - [Windows 部署](#windows-部署-recommended)
   - [Linux/Mac 部署](#linuxmac-部署)
6. [ESP32 端部署](#esp32-端部署)
   - [开发环境搭建](#开发环境搭建)
   - [编译与烧录](#编译--烧录)
7. [验证与测试](#验证与测试)
8. [FAQ](#faq)
9. [参考资料](#参考资料)


## Agora Assistant – 快速开始指南

### 架构概览

1. **唤醒词检测** – 持续监听预设的激活短语。
2. **语音转文本（STT）** – 使用语音识别引擎将用户语音转换为文本。
3. **基于 RAG 的 LLM** – 从向量数据库中检索相关上下文，并使用 LLM 生成智能回复。
4. **文本转语音（TTS）** – 将生成的回复转换为自然语音。


### 核心目录结构

```text
ai_agents/
├── esp32-client/   # XIAO ESP32-S3 edge side: capture/play audio + Agora connection + conversation interaction
├── server/         # Server side: AI Agent orchestration / LLM / ASR / TTS, etc. (works with edge side)
├── agents/         # TEN Agent examples and extensions
├── playground/     # Web frontend UI
├── .env.example    # Environment variable template
├── docker-compose.yml  # Docker compose file
└── Dockerfile      # Docker image build file
```


## 系统架构

```
┌─────────────────────────────────────────────────────────────────────┐
│                           System Architecture                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐                    ┌─────────────────────────┐ │
│  │  ESP32-S3 Device │                    │      AI Agent Server    │ │
│  │  (Edge Side)     │                    │        (Backend)        │ │
│  ├─────────────────┤                    ├─────────────────────────┤ │
│  │ • Microphone In  │ ──── Agora RTC ──→ │ • ASR Speech Recognition│ │
│  │ • Wi-Fi          │   Real-time audio  │ • LLM Large Language    │ │
│  │ • Speaker Out    │ ←── Agora RTC ──── │ • TTS Speech Synthesis  │ │
│  └─────────────────┘                    └─────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Workflow:
1. ESP32-S3 connects to the network and joins an Agora channel
2. The edge side captures microphone audio and publishes it to Agora
3. The server receives audio and runs the ASR → LLM → TTS pipeline
4. The backend sends response audio back; the device plays it, enabling real-time voice conversation
```



## 前置条件

### 硬件需求

| 硬件 | 说明 |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | 主控板 |
| **ReSpeaker XVF3800** | 音频扩展板（麦克风阵列 + 扬声器接口） |
| **扬声器** | 至少一个扬声器，用于播放 AI 回复 |
| **USB-C 数据线** | 用于烧录固件和为设备供电 |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp" alt="ReSpeaker XVF3800" width={500} height="auto" /></p>

### 账号与 API Key

在部署之前，你需要注册并获取以下服务的 API Key：

#### 🔹 Agora – 必需

1. 访问 https://console.agora.io/
2. 注册一个免费账号
3. 创建一个新项目
4. 复制 **App ID** 和 **App Certificate**

#### 🔹 Deepgram（ASR）– 必需

1. 访问 https://console.deepgram.com/
2. 注册一个免费账号（提供免费额度）
3. 前往 API Keys 页面
4. 创建一个新的 API Key

#### 🔹 OpenAI（LLM）– 必需

1. 访问 https://platform.openai.com/
2. 注册并添加支付方式
3. 前往 API Keys 页面
4. 创建一个新的 secret key

#### 🔹 Cartesia（TTS）– 默认

1. 访问 https://cartesia.ai/sonic
2. 注册一个免费账号（提供免费额度）
3. 前往 API Key → New API Key
4. 复制该 API Key

#### 🔹 FlowSpeech（TTS）– 可选

如果需要上下文感知、情感和停顿控制，可以将默认 TTS 扩展切换为 [AI 文本转语音](https://flowspeech.io/zh) 服务：

1. 注册 FlowSpeech 账号
2. 前往 Settings → API Keys
3. 创建并复制 API Key
4. 按下方的“可选：切换到 FlowSpeech TTS”配置扩展

### 软件需求

| 软件 | 版本 | 用途 |
|------|----------|------|
| **Docker Desktop** | 最新版 | 容器化服务端部署 |
| **Git** | 最新版 | 克隆代码仓库 |
| **ESP-IDF** | v5.2.3 | ESP32 开发框架 |
| **ESP-ADF** | v2.7 | ESP32 音频开发框架 |

## 固件更新

为了获得最佳播放体验，我们建议将 XMOS 固件更新到最新版本。

### 下载固件

你可以从[这里](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)下载固件。

### 更新步骤

在电脑上插入 **ReSpeaker XMOS XVF3800 with XIAO ESP32S3**，运行固件升级工具，然后选择固件文件。

详细步骤请参考[此页面](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)。

:::tip 重要
固件更新是必做步骤，强烈建议执行，以获得最佳的音频体验和稳定性。
:::


## 服务端部署

### Windows 部署（推荐）

#### 步骤 A：安装并配置 Docker Desktop（仅首次）

1. **下载并安装 Docker Desktop**

   访问 https://www.docker.com/products/docker-desktop/ 下载并安装。

2. **安装选项**
   - 勾选 **Use WSL 2 instead of Hyper-V**（如果可用）

3. **验证安装**
   - 安装完成后打开 Docker Desktop
   - 等待托盘图标显示 **Docker is running**

4. **（推荐）启用 WSL 集成**
   - Docker Desktop → `Settings` → `Resources` → `WSL Integration`
   - 启用你常用的 WSL 发行版（例如 Ubuntu）

#### 步骤 B：克隆仓库并配置环境变量

1. **打开 PowerShell 或 Windows Terminal**

2. **克隆代码仓库**
   ```bash
   git clone https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework.git
   cd esp32-client-agora/ai_agents
   ```

3. **复制环境变量模板**

   PowerShell:
   ```powershell
   Copy-Item .env.example .env
   ```

   CMD:
   ```cmd
   copy .env.example .env
   ```

4. **编辑 `.env` 文件并填入你的 API Key**

   使用记事本或 VS Code 打开 `.env`，并更新关键字段：

   ```env
   # ==============================
   # Agora RTC (Required)
   # ==============================
   AGORA_APP_ID=your_agora_app_id
   AGORA_APP_CERTIFICATE=your_agora_app_certificate

   # ==============================
   # Deepgram ASR (Required)
   # ==============================
   DEEPGRAM_API_KEY=your_deepgram_api_key

   # ==============================
   # OpenAI LLM (Required)
   # ==============================
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_MODEL=gpt-4o
   OPENAI_PROXY_URL=  # Optional: set if you need a proxy

   # ==============================
   # Cartesia TTS (Required)
   # ==============================
   Cartesia_TTS_KEY=your_cartesia_api_key

   # Optional: FlowSpeech TTS
   FLOWSPEECH_API_KEY=your_flowspeech_api_key

   # ==============================
   # Server config (usually no changes needed)
   # ==============================
   LOG_PATH=/tmp/ten_agent
   LOG_STDOUT=true
   GRAPH_DESIGNER_SERVER_PORT=49483
   SERVER_PORT=8080
   WORKERS_MAX=100
   ```

#### 可选：切换到 FlowSpeech TTS

FlowSpeech 扩展输出 24 kHz、单声道、16 位 PCM 音频，可以直接接入本示例的 `tts` 节点。打开 `agents/examples/voice-assistant/tenapp/property.json`，将名为 `tts` 的节点替换为：

```json
{
  "type": "extension",
  "name": "tts",
  "addon": "flowspeech_tts_python",
  "extension_group": "tts",
  "property": {
    "dump": false,
    "dump_path": "./",
    "params": {
      "api_key": "${env:FLOWSPEECH_API_KEY}",
      "base_url": "https://flowspeech.io",
      "voice_name": "Kore"
    }
  }
}
```

保存后继续执行 `task install` 和 `task run`。API Key 只应保存在本地 `.env` 文件中，不要提交到 Git 仓库。

#### 步骤 C：启动 Docker 服务

```bash
docker compose up -d
```

检查容器状态（可选）：
```bash
docker compose ps
```

你应该会看到类似如下的输出：
```
NAME            STATUS    PORTS
ten_agent_dev   running   0.0.0.0:3000->3000/tcp, 0.0.0.0:49483->49483/tcp
```

#### 步骤 D：进入容器并运行示例

1. **进入容器**
   ```bash
   docker exec -it ten_agent_dev bash
   ```

2. **安装并运行语音助手示例**
   ```bash
   cd agents/examples/voice-assistant
   task install
   task run
   ```

3. **等待服务启动**

   当你看到如下日志时，说明服务已在运行：
   ```
   [INFO] Server started on port 8080
   [INFO] Waiting for connections...
   ```

#### 步骤 E：验证服务

- **API server**: http://localhost:8080
- **Frontend UI**: http://localhost:3000
- **TMAN Designer**: http://localhost:49483

#### 常用命令

```bash
# View container logs
docker compose logs -f

# Stop services
docker compose down

# Restart services
docker compose restart

# Full cleanup (including volumes)
docker compose down -v
```


### Linux/Mac 部署

#### 步骤 1：安装 Docker

**Ubuntu/Debian：**
```bash
sudo apt update
sudo apt install docker.io docker-compose
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
# Log out and log back in to take effect
```

**macOS：**
```bash
# Install Docker Desktop via Homebrew
brew install --cask docker
# Then launch the Docker Desktop app
```

#### 步骤 2：克隆并配置

```bash
git clone https://github.com/zhannn668/esp32-client-agora.git
cd esp32-client-agora/ai_agents
cp .env.example .env
```

#### 步骤 3：编辑环境变量

```bash
nano .env
# or use vim
vim .env
```

填写你的 API 密钥（参考上面的 Windows 部分）。

#### 步骤 4：启动服务

```bash
docker compose up -d
docker exec -it ten_agent_dev bash
cd agents/examples/voice-assistant
task install
task run
```


## ESP32 端部署

### 开发环境搭建

#### 安装 ESP-IDF（v5.2.3）

##### Windows

1. **下载 ESP-IDF v5.2.3 离线安装包**

   https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32/get-started/windows-setup.html

2. **运行安装程序**
   - 选择安装路径（推荐默认：`C:\Espressif`)
   - 安装完成后，开始菜单中会出现快捷方式 “ESP-IDF 5.2 PowerShell”

3. **验证安装**

   打开 “ESP-IDF 5.2 PowerShell” 并运行：
   ```bash
   idf.py --version
   ```

##### Linux

```bash
# Create an install directory
mkdir -p ~/esp
cd ~/esp

# Clone ESP-IDF
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

# Install toolchain
cd esp-idf
./install.sh esp32s3

# Configure environment variables (add to ~/.bashrc)
echo 'alias get_idf=". $HOME/esp/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc
```

#### 安装 ESP-ADF（v2.7）

##### Windows

1. **克隆 ESP-ADF**

   在 ESP-IDF PowerShell 中：
   ```bash
   cd C:\Espressif\frameworks
   git clone --recursive https://github.com/espressif/esp-adf.git
   cd esp-adf
   git checkout v2.7
   git submodule update --init --recursive
   ```

2. **设置 ADF_PATH 环境变量**

   选项 1：系统设置
   - 打开 “System Properties” → “Advanced” → “Environment Variables”
   - 新建用户变量：`ADF_PATH` = `C:\Espressif\frameworks\esp-adf`

   选项 2：命令行
   ```powershell
   setx ADF_PATH "C:\Espressif\frameworks\esp-adf"
   ```

   **重要**：设置完成后请重启 ESP-IDF PowerShell。

##### Linux

```bash
cd ~/esp
git clone --recursive https://github.com/espressif/esp-adf.git
cd esp-adf
git checkout v2.7
git submodule update --init --recursive

# Add env var
echo 'export ADF_PATH=$HOME/esp/esp-adf' >> ~/.bashrc
source ~/.bashrc
```

#### 应用 IDF 补丁

ESP-ADF 需要对 ESP-IDF 应用一个 FreeRTOS 补丁：

```bash
cd $IDF_PATH
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```

#### 修改 ESP-ADF 板级引脚配置（关键！）

由于 ReSpeaker XVF3800 的引脚分配与默认的 Korvo-2 V3 不同，你必须修改框架中的板级配置：

**文件位置：**
- Windows: `C:\Espressif\frameworks\esp-adf\components\audio_board\esp32_s3_korvo2_v3\board_pins_config.c`
- Linux/Mac: `$ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c`

:::caution 重要
- 该文件位于 ESP-ADF 框架目录中，而不是你的项目目录。
- 修改将影响所有使用此板级配置的项目。
- 建议先备份原始文件：`cp board_pins_config.c board_pins_config.c.backup`
:::

**更新 I2C 引脚** – 找到 `get_i2c_pins()` 并修改为：

```c
esp_err_t get_i2c_pins(i2c_port_t port, i2c_config_t *i2c_config)
{
    // ReSpeaker XVF3800 I2C configuration
    i2c_config->sda_io_num = GPIO_NUM_5;   // ReSpeaker I2C SDA
    i2c_config->scl_io_num = GPIO_NUM_6;   // ReSpeaker I2C SCL
    return ESP_OK;
}
```

**更新 I2S 引脚** – 找到 `get_i2s_pins()` 并修改为：

```c
esp_err_t get_i2s_pins(int port, board_i2s_pin_t *i2s_config)
{
    // ReSpeaker XVF3800 I2S configuration
    i2s_config->bck_io_num   = GPIO_NUM_8;   // BCLK
    i2s_config->ws_io_num    = GPIO_NUM_7;   // WS/LRCK
    i2s_config->data_out_num = GPIO_NUM_44;  // DOUT
    i2s_config->data_in_num  = GPIO_NUM_43;  // DIN
    i2s_config->mck_io_num   = -1;           // Disable MCLK
    return ESP_OK;
}
```

#### 下载 Agora IoT SDK

1. **下载 SDK**

   https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar

2. **解压到 components 目录**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client/components
   tar -xvf agora_iot_sdk.tar
   ```

#### 初始化 esp32-camera 子模块

```bash
cd esp32-client-agora
git submodule update --init --recursive
```


### 编译与烧录

#### 配置 AI Agent 参数

编辑 `ai_agents/esp32-client/main/app_config.h`。如果你使用局域网 IP，请确保 ESP32 与服务器在同一局域网内；如果你使用公网 IP，则可以忽略这一点。

```c
#pragma once

// ==============================
// AI Agent server configuration
// ==============================
// Change to your Server IP (the computer running Docker)
#define TENAI_AGENT_URL       "http://192.168.x.x:8080"

// ==============================
// Agent graph selection
// ==============================
#define CONFIG_GRAPH_OPENAI     // Use OpenAI graph

// ==============================
// Greeting and prompt
// ==============================
#define GREETING               "Can I help You?"
#define PROMPT                 ""

// ==============================
// Graph configuration
// ==============================
#if defined(CONFIG_GRAPH_OPENAI)
#define GRAPH_NAME             "voice_assistant"
#define V2V_MODEL              "gpt-realtime"
#define LANGUAGE               "en-US"
#define VOICE                  "ash"
#endif

// ==============================
// Agent identity configuration
// ==============================
#define AI_AGENT_NAME          "tenai0125-11"
#define AI_AGENT_CHANNEL_NAME  "test_channel_12345"  // Channel name
#define AI_AGENT_USER_ID        12345                 // User ID

// ==============================
// Audio codec configuration
// ==============================
#define CONFIG_USE_G711U_CODEC

// ==============================
// Agora App ID
// ==============================
#define AGORA_APP_ID "your_agora_app_id"
```

#### 编译固件

1. **打开 ESP-IDF 终端**
   - Windows: “ESP-IDF 5.2 PowerShell”
   - Linux/Mac: 运行 `get_idf`

2. **进入项目目录**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client
   ```

3. **设置目标芯片**
   ```bash
   idf.py set-target esp32s3
   ```

4. **配置 Wi-Fi 和 FreeRTOS**
   ```bash
   idf.py menuconfig
   ```

   配置以下项目：

   - **Wi-Fi 配置**：
     ```
     Agora Demo for ESP32 --->
         (your WiFi SSID) WiFi SSID
         (your WiFi password) WiFi Password
     ```

   - **启用 FreeRTOS 向后兼容**：
     ```
     Component config --->
         FreeRTOS --->
             Kernel --->
                 [*] configENABLE_BACKWARD_COMPATIBILITY
     ```

5. **编译**
   ```bash
   idf.py build
   ```

   编译成功后你会看到：
   ```
   Project build complete. To flash, run:
   idf.py flash
   ```

#### 烧录固件

1. **连接开发板**
   - 使用 USB-C 线将 XIAO ESP32-S3 连接到电脑

2. **确认串口号**
   - Windows: 打开 Device Manager → Ports，找到 COM 端口（例如 COM3）
   - Linux: 通常为 `/dev/ttyUSB0` 或 `/dev/ttyACM0`
   - macOS: 通常为 `/dev/cu.usbmodem*`

3. **烧录并监视**
   ```bash
   # Windows
   idf.py -p COM3 flash monitor

   # Linux/Mac
   idf.py -p /dev/ttyUSB0 flash monitor
   ```

   **Linux 权限问题**：如果看到权限拒绝，请运行：
   ```bash
   sudo usermod -aG dialout $USER
   # then log out and log back in
   ```

4. **烧录成功指示**

   看到类似如下的日志表示烧录成功：
   ```
   Hard resetting via RTS pin...
   Connecting...
   ```


## 验证与测试

### 检查 ESP32 启动日志

启动成功后，串口输出应包含以下关键日志：

```
I (xxxx) wifi: connected with YourWiFi, aid = 1
got ip: 192.168.x.x

~~~~~Initializing AIC3104 Codec~~~~
W (xxxx) AIC3104_NG: Found device at address 0x18
AIC3104 detected, page register = 0x00
~~~~~AIC3104 Codec initialized successfully~~~~

I (xxxx) AUDIO_PIPELINE: Pipeline started
~~~~~agora_rtc_join_channel success~~~~
Agora: Press [SET] key to join the Ai Agent ...
```

### 成功检查清单

| 项目 | 含义 |
|------|------|
|  `WiFi connected` | Wi-Fi 连接成功 |
|  `got ip: xxx.xxx.xxx.xxx` | 已获取 IP 地址 |
|  `Found device at address 0x18` | 检测到 AIC3104 |
|  `AIC3104 Codec initialized successfully` | 编解码器初始化成功 |
|  `agora_rtc_join_channel success` | 成功加入 RTC 通道 |

### 运行语音对话测试

1. 按下板上的 **SET** 按钮以启动 AI Agent
2. 对着麦克风说话
3. 观察串口日志；你应该能看到音频发送/接收日志
4. 扬声器会播放 AI 的回复


## 常见问题

### 服务器端问题

#### Q1: Docker 容器无法启动

**A：** 请检查以下内容：
1. 确保 Docker Desktop 正在运行
2. 检查端口是否已被占用：`netstat -an | grep 8080`
3. 查看详细日志：`docker compose logs`

#### Q: 进入容器后找不到 `task` 命令

**A：** 确保你使用的是正确的镜像。运行 `docker compose pull` 来更新镜像。



### ESP32 端问题

#### Q2: 编译错误 `i2c driver install error`

**A：** I2C 驱动冲突。请确保代码使用的是旧版 I2C API（`driver/i2c.h`），而不是新版（`driver/i2c_master.h`）。

#### Q: 运行时 I2C 超时 `ESP_ERR_TIMEOUT`

**A：** 可能原因：
1. 硬件连线问题——检查 I2C 线路/线缆
2. 引脚配置错误——确认 `board_pins_config.c` 已正确更新
3. I2C 地址错误——检查日志中扫描到的地址

调试日志：
```
W (xxxx) AIC3104_NG: Scanning I2C bus...
W (xxxx) AIC3104_NG: Found device at address 0x??
```
如果地址不是 `0x18`，你需要在 `aic3104_ng.h` 中修改 `AIC3104_ADDR`。

#### Q: 没有音频输出

**A：** 请检查：
1. AIC3104 是否初始化成功（查看串口日志）
2. I2S 引脚是否配置正确
3. 扬声器是否连接正确

#### Q: 网络缓冲区错误 `Not enough space`

**A：** 这是运行时网络问题，通常可以暂时忽略：
1. 检查网络质量
2. 降低音频码率
3. 增大网络缓冲区大小

#### Q: 修改 `board_pins_config.c` 后仍然报错

**A：**
1. 确认你编辑的是正确的文件路径
2. 运行 `idf.py fullclean` 进行完整清理
3. 使用 `idf.py build` 重新构建



## 参考资料

### 官方文档

| 资源 | 链接 |
|------|------|
| ESP-IDF 编程指南 | https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32s3/ |
| ESP-ADF 编程指南 | https://docs.espressif.com/projects/esp-adf/zh_CN/latest/ |
| Agora RTC 文档 | https://docs.agora.io/en/rtc/overview/product-overview |
| TEN Framework 文档 | https://doc.theten.ai |
| ReSpeaker XVF3800 固件指南 | https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/ |

### API 服务

| 服务 | 控制台 |
|------|-----------|
| Agora | https://console.agora.io/ |
| Deepgram | https://console.deepgram.com/ |
| OpenAI | https://platform.openai.com/ |
| ElevenLabs | https://elevenlabs.io/ |

### 芯片数据手册

| 数据手册 | 链接 |
|------|------|
| TI AIC3104 数据手册 | https://www.ti.com/product/TLV320AIC3104 |
| XIAO ESP32-S3 Wiki | https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/ |

### 项目仓库

| 仓库 | 链接 |
|------|------|
| TEN Framework | https://github.com/TEN-framework/ten-framework |
| ESP32 Client Agora | https://github.com/zhannn668/esp32-client-agora |

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供支持，尽可能让你的使用体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
