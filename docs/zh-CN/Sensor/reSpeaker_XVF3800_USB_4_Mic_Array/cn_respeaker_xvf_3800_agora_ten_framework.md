---
description: 本项目演示如何使用 Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）作为端侧语音设备，通过 Agora 建立实时双向语音链路，并对接后端 Agora ten-framework端（LLM/ASR/TTS），实现低延迟的实时语音对话。
title: ReSpeaker XVF3800 + Agora ten-framework端侧对话客户端部署指南
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
slug: /cn/respeaker_xvf3800_agora_convo_client
last_update:
  date: 09/2/2026
  author: Jiayu Zhan(Jack)
---

> 目标：让 ESP32S3 与 reSpeaker XVF3800 协同工作，通过 **Agora RTC** 建立稳定、低延迟的双向语音链路。
> 项目源码：https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework
> Seeed-Projects：https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework

## 介绍

在本教程中，我们将指导您使用 Seeed XIAO ESP32-S3 与 reSpeaker XVF3800 进行音频采集与播放，通过 Agora RTC 完成设备与后端的实时音频连接。后端以 AI Agent 方式运行，项目提供标准化的配置方式（.env / property.json），支持 Docker 一键部署、动态 Token 鉴权与多服务商可插拔（ASR/LLM/TTS 可按需替换）,自动完成 ASR → LLM → TTS 的完整闭环，并将合成语音实时回传到设备端播放，实现“说一句回一句”的低延迟对话体验。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>



## 目录

1. [Agora 助手 – 快速入门指南](#agora-助手--快速入门指南)
2. [系统架构](#系统架构)
3. [准备工作](#准备工作)
4. [固件更新](#固件更新)
5. [Server 端部署](#server-端部署)
   - [Windows 部署](#windows-部署推荐)
   - [Linux/Mac 部署](#linuxmac-部署)
6. [ESP32 端部署](#esp32-端部署)
   - [开发环境搭建](#开发环境搭建)
   - [编译与烧录](#编译与烧录)
7. [验证与测试](#验证与测试)
8. [常见问题（FAQ）](#常见问题faq)
9. [参考资源](#参考资源)


## Agora 助手 – 快速入门指南

### 架构概述

1. **唤醒词检测** – 持续监听预定义的激活短语。
2. **语音转文本（STT）** – 使用本地语音识别引擎将用户语音转换为文本。
3. **RAG 驱动的 LLM** – 从向量数据库检索相关上下文，并使用 LLM 生成智能响应。
4. **文本转语音（TTS）** – 将生成的响应转换为自然的语音。


### 核心目录结构

```text
ai_agents/
├── esp32-client/   # XIAO ESP32-S3 端侧：采集/播放音频 + Agora 连接 + 对话交互
├── server/         # 服务端：AI Agent 编排/LLM/ASR/TTS 等（与端侧联动）
├── agents/         # TEN Agent 示例和扩展
├── playground/     # Web 前端 UI
├── .env.example    # 环境变量模板
├── docker-compose.yml  # Docker 编排文件
└── Dockerfile      # Docker 镜像构建文件
```


## 系统架构

```
┌─────────────────────────────────────────────────────────────────────┐
│                           系统架构图                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐                    ┌─────────────────────────┐ │
│  │  ESP32-S3 设备   │                    │      AI Agent Server    │ │
│  │  (边缘端)        │                    │        (服务端)          │ │
│  ├─────────────────┤                    ├─────────────────────────┤ │
│  │ • 麦克风采集     │ ──── Agora RTC ──→ │ • ASR 语音识别          │ │
│  │ • WiFi 连接      │      实时音频传输   │ • LLM 大语言模型        │ │
│  │ • 扬声器播放     │ ←── Agora RTC ──── │ • TTS 语音合成          │ │
│  └─────────────────┘                    └─────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

工作流程：
1. ESP32-S3 连接网络并加入 Agora 房间
2. 端侧采集麦克风音频并发布到 Agora
3. Server 端接收音频并执行 ASR → LLM → TTS 流程
4. 后端将响应音频发回，端侧播放，实现实时语音对话
```



## 准备工作

### 硬件要求

| 硬件 | 说明 |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | 主控板 |
| **ReSpeaker XVF3800** | 音频扩展板（含麦克风阵列和扬声器接口） |
| **扬声器** | 至少一个扬声器用于播放 AI 回复 |
| **USB-C 数据线** | 用于烧录固件和供电 |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp" alt="ReSpeaker XVF3800" width={500} height="auto" /></p>

### 账号与 API Key 获取

在开始部署之前，您需要注册并获取以下服务的 API Key：

#### 🔹 Agora（声网）- 必需

1. 访问 https://console.agora.io/
2. 注册免费账号
3. 创建一个新项目（Project）
4. 复制 **App ID** 和 **App Certificate**

#### 🔹 Deepgram（ASR 语音识别）- 必需

1. 访问 https://console.deepgram.com/
2. 注册免费账号（有免费额度）
3. 进入 API Keys 页面
4. 创建新的 API Key

#### 🔹 OpenAI（大语言模型）- 必需

1. 访问 https://platform.openai.com/
2. 注册并添加支付方式
3. 进入 API Keys 页面
4. 创建新的 Secret Key

#### 🔹 Cartesia（TTS 语音合成）- 必需

1. 访问 https://cartesia.ai/sonic
2. 注册免费账号（有免费额度）
3. 进入 API Key，New API Key
4. 复制 API Key

### 软件要求

| 软件 | 版本要求 | 用途 |
|------|----------|------|
| **Docker Desktop** | 最新版 | Server 端容器化部署 |
| **Git** | 最新版 | 代码克隆 |
| **ESP-IDF** | v5.2.3 | ESP32 开发框架 |
| **ESP-ADF** | v2.7 | ESP32 音频开发框架 |

## 固件更新

为了获得最佳的播放体验，我们需要将 XMOS 固件更新到最新版本。

### 下载固件

您可以从[这里](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)下载固件。

### 更新步骤

在您的计算机上，插入 ReSpeaker XMOS XVF3800 with XIAO ESP32S3 并运行固件更新，选择固件

详细的安装指南请参考[这里](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)。

:::tip 重要提示
固件更新是必须步骤，但强烈建议更新以获得最佳音频体验和稳定性。
:::


## Server 端部署

### Windows 部署（推荐）

#### 步骤 A：安装并配置 Docker Desktop（仅首次需要）

1. **下载安装 Docker Desktop**
   
   访问 https://www.docker.com/products/docker-desktop/ 下载并安装

2. **安装时配置**
   - 勾选 **Use WSL 2 instead of Hyper-V**（如果可用）

3. **验证安装**
   - 安装完成后，打开 Docker Desktop
   - 等待托盘图标显示 **Docker is running**

4. **（推荐）配置 WSL 集成**
   - Docker Desktop → `Settings` → `Resources` → `WSL Integration`
   - 启用你常用的 WSL 发行版（如 Ubuntu）

#### 步骤 B：克隆仓库并配置环境变量

1. **打开 PowerShell 或 Windows Terminal**

2. **克隆仓库**
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

4. **编辑 `.env` 文件，填入你的 API Keys**
   
   用记事本或 VS Code 打开 `.env` 文件，修改以下关键配置：

   ```env
   # ==============================
   # Agora RTC 配置（必需）
   # ==============================
   AGORA_APP_ID=你的_agora_app_id
   AGORA_APP_CERTIFICATE=你的_agora_app_certificate

   # ==============================
   # Deepgram ASR 配置（必需）
   # ==============================
   DEEPGRAM_API_KEY=你的_deepgram_api_key

   # ==============================
   # OpenAI LLM 配置（必需）
   # ==============================
   OPENAI_API_KEY=你的_openai_api_key
   OPENAI_MODEL=gpt-4o
   OPENAI_PROXY_URL=  # 可选：如需代理请填写

   # ==============================
   # Cartesia TTS 配置（必需）
   # ==============================
   Cartesia_TTS_KEY=你的_cartesia_api_key

   # ==============================
   # 服务器配置（通常无需修改）
   # ==============================
   LOG_PATH=/tmp/ten_agent
   LOG_STDOUT=true
   GRAPH_DESIGNER_SERVER_PORT=49483
   SERVER_PORT=8080
   WORKERS_MAX=100
   ```

#### 步骤 C：启动 Docker 服务

```bash
docker compose up -d
```

检查容器状态（可选）：
```bash
docker compose ps
```

你应该看到类似输出：
```
NAME            STATUS    PORTS
ten_agent_dev   running   0.0.0.0:3000->3000/tcp, 0.0.0.0:49483->49483/tcp
```

#### 步骤 D：进入容器并安装示例

1. **进入容器**
   ```bash
   docker exec -it ten_agent_dev bash
   ```

2. **安装并运行 Voice Assistant 示例**
   ```bash
   cd agents/examples/voice-assistant
   task install
   task run
   ```

3. **等待服务启动**
   
   当看到类似以下日志时，表示服务启动成功：
   ```
   [INFO] Server started on port 8080
   [INFO] Waiting for connections...
   ```

#### 步骤 E：验证服务运行

- **API 服务器**: http://localhost:8080
- **前端界面**: http://localhost:3000
- **TMAN Designer**: http://localhost:49483

#### 常用命令速查

```bash
# 查看容器日志
docker compose logs -f

# 停止服务
docker compose down

# 重启服务
docker compose restart

# 完全清理（包括数据）
docker compose down -v
```


### Linux/Mac 部署

#### 步骤 1：安装 Docker

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install docker.io docker-compose
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
# 注销并重新登录以生效
```

**macOS:**
```bash
# 使用 Homebrew 安装 Docker Desktop
brew install --cask docker
# 然后打开 Docker Desktop 应用
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
# 或使用 vim
vim .env
```

填入你的 API Keys（参考上文 Windows 部分的配置）

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

#### 安装 ESP-IDF (v5.2.3)

##### Windows 安装

1. **下载 ESP-IDF v5.2.3 离线安装包**
   
   访问：https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32/get-started/windows-setup.html

2. **运行安装程序**
   - 选择安装路径（建议默认 `C:\Espressif`）
   - 完成安装后，会在开始菜单创建 "ESP-IDF 5.2 PowerShell"

3. **验证安装**
   
   打开 "ESP-IDF 5.2 PowerShell"，运行：
   ```bash
   idf.py --version
   ```

##### Linux 安装

```bash
# 创建安装目录
mkdir -p ~/esp
cd ~/esp

# 克隆 ESP-IDF
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

# 安装工具链
cd esp-idf
./install.sh esp32s3

# 配置环境变量（添加到 ~/.bashrc）
echo 'alias get_idf=". $HOME/esp/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc
```

#### 安装 ESP-ADF (v2.7)

##### Windows 安装

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
   
   方法一：系统设置
   - 打开「系统属性」→「高级」→「环境变量」
   - 新建用户变量：`ADF_PATH` = `C:\Espressif\frameworks\esp-adf`

   方法二：命令行
   ```powershell
   setx ADF_PATH "C:\Espressif\frameworks\esp-adf"
   ```

   **重要**：设置后需要重启 ESP-IDF PowerShell 才能生效

##### Linux 安装

```bash
cd ~/esp
git clone --recursive https://github.com/espressif/esp-adf.git
cd esp-adf
git checkout v2.7
git submodule update --init --recursive

# 添加环境变量
echo 'export ADF_PATH=$HOME/esp/esp-adf' >> ~/.bashrc
source ~/.bashrc
```

#### 打上 IDF 补丁

ESP-ADF 需要为 ESP-IDF 打上 FreeRTOS 补丁：

```bash
cd $IDF_PATH
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```

#### 修改 ESP-ADF Board 引脚配置（关键步骤！）

由于 ReSpeaker XVF3800 的引脚与默认 Korvo-2 V3 不同，需要修改框架配置：

**文件位置：**
- Windows: `C:\Espressif\frameworks\esp-adf\components\audio_board\esp32_s3_korvo2_v3\board_pins_config.c`
- Linux/Mac: `$ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c`

:::caution 重要说明
- 这个文件在 ESP-ADF 框架目录中，不在项目目录
- 修改后会影响所有使用这个 Board 配置的项目
- 建议先备份原文件：`cp board_pins_config.c board_pins_config.c.backup`
:::

**修改 I2C 引脚配置** - 找到 `get_i2c_pins()` 函数，修改为：

```c
esp_err_t get_i2c_pins(i2c_port_t port, i2c_config_t *i2c_config)
{
    // ReSpeaker XVF3800 I2C 配置
    i2c_config->sda_io_num = GPIO_NUM_5;   // ReSpeaker I2C SDA
    i2c_config->scl_io_num = GPIO_NUM_6;   // ReSpeaker I2C SCL
    return ESP_OK;
}
```

**修改 I2S 引脚配置** - 找到 `get_i2s_pins()` 函数，修改为：

```c
esp_err_t get_i2s_pins(int port, board_i2s_pin_t *i2s_config)
{
    // ReSpeaker XVF3800 I2S 配置
    i2s_config->bck_io_num   = GPIO_NUM_8;   // BCLK
    i2s_config->ws_io_num    = GPIO_NUM_7;   // WS/LRCK
    i2s_config->data_out_num = GPIO_NUM_44;  // DOUT
    i2s_config->data_in_num  = GPIO_NUM_43;  // DIN
    i2s_config->mck_io_num   = -1;           // 禁用 MCLK
    return ESP_OK;
}
```

#### 下载 Agora IoT SDK

1. **下载 SDK**
   
   访问：https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar

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

编辑 `ai_agents/esp32-client/main/app_config.h` 文件。若使用内网IP则需要保证ESP32和服务端位于用于局域网内，使用公网IP可忽略：

```c
#pragma once

// ==============================
// AI Agent 服务配置
// ==============================
// 修改为你的 Server IP 地址（运行 Docker 的电脑 IP）
#define TENAI_AGENT_URL       "http://192.168.x.x:8080"

// ==============================
// Agent Graph 选择
// ==============================
#define CONFIG_GRAPH_OPENAI     // 使用 OpenAI 图

// ==============================
// 问候语和提示词
// ==============================
#define GREETING               "Can I help You?"
#define PROMPT                 ""

// ==============================
// Graph 配置
// ==============================
#if defined(CONFIG_GRAPH_OPENAI)
#define GRAPH_NAME             "voice_assistant"
#define V2V_MODEL              "gpt-realtime"
#define LANGUAGE               "en-US"
#define VOICE                  "ash"
#endif

// ==============================
// Agent 标识配置
// ==============================
#define AI_AGENT_NAME          "tenai0125-11"
#define AI_AGENT_CHANNEL_NAME  "test_channel_12345"  // 频道名称
#define AI_AGENT_USER_ID        12345                 // 用户 ID

// ==============================
// 音频编解码配置
// ==============================
#define CONFIG_USE_G711U_CODEC

// ==============================
// Agora App ID
// ==============================
#define AGORA_APP_ID "你的_agora_app_id"
```

#### 编译固件

1. **打开 ESP-IDF 命令行**
   - Windows: 打开 "ESP-IDF 5.2 PowerShell"
   - Linux/Mac: 运行 `get_idf`

2. **进入项目目录**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client
   ```

3. **设置目标芯片**
   ```bash
   idf.py set-target esp32s3
   ```

4. **配置 WiFi 和 FreeRTOS**
   ```bash
   idf.py menuconfig
   ```
   
   在菜单中进行以下配置：
   
   - **配置 WiFi**：
     ```
     Agora Demo for ESP32 --->
         (你的WiFi名称) WiFi SSID
         (你的WiFi密码) WiFi Password
     ```
   
   - **配置 FreeRTOS 向后兼容**：
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

   编译成功会显示：
   ```
   Project build complete. To flash, run:
   idf.py flash
   ```

#### 烧录固件

1. **连接开发板**
   - 使用 USB-C 数据线连接 XIAO ESP32-S3 到电脑

2. **确认串口**
   - Windows: 打开「设备管理器」→「端口」，找到 COM 端口（如 COM3）
   - Linux: 通常是 `/dev/ttyUSB0` 或 `/dev/ttyACM0`
   - Mac: 通常是 `/dev/cu.usbmodem*`

3. **烧录并监控**
   ```bash
   # Windows
   idf.py -p COM3 flash monitor
   
   # Linux/Mac
   idf.py -p /dev/ttyUSB0 flash monitor
   ```

   **Linux 权限问题**：如果提示权限不足，运行：
   ```bash
   sudo usermod -aG dialout $USER
   # 然后注销并重新登录
   ```

4. **烧录成功标志**
   
   看到以下日志表示烧录成功：
   ```
   Hard resetting via RTS pin...
   Connecting...
   ```


## 验证与测试

### 检查 ESP32 启动日志

成功启动时，串口应显示以下关键日志：

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

### 成功标志检查清单

| 标志 | 含义 |
|------|------|
|  `WiFi connected` | WiFi 连接成功 |
|  `got ip: xxx.xxx.xxx.xxx` | 获取到 IP 地址 |
|  `Found device at address 0x18` | 检测到 AIC3104 芯片 |
|  `AIC3104 Codec initialized successfully` | Codec 初始化成功 |
|  `agora_rtc_join_channel success` | RTC 加入频道成功 |

### 进行语音对话测试

1. 按下开发板上的 **SET** 按键，启动 AI Agent
2. 对着麦克风说话
3. 观察串口日志，应该显示音频数据发送和接收
4. 扬声器播放 AI 的回复


## 常见问题（FAQ）

### Server 端问题

#### Q1: Docker 容器无法启动

**A:** 检查以下几点：
1. 确保 Docker Desktop 正在运行
2. 检查端口是否被占用：`netstat -an | grep 8080`
3. 查看详细日志：`docker compose logs`

#### Q: 进入容器后 `task` 命令不存在

**A:** 确保使用正确的镜像。运行 `docker compose pull` 更新镜像。



### ESP32 端问题

#### Q2: 编译时出现 `i2c driver install error`

**A:** I2C 驱动冲突，确保代码中使用的是旧版 I2C API（`driver/i2c.h`），而不是新版（`driver/i2c_master.h`）。

#### Q: 运行时 I2C 超时 `ESP_ERR_TIMEOUT`

**A:** 可能原因：
1. 硬件连接问题 - 检查 I2C 线缆
2. 引脚配置错误 - 确认 `board_pins_config.c` 修改正确
3. I2C 地址错误 - 检查日志中扫描到的设备地址

调试步骤：
```
W (xxxx) AIC3104_NG: Scanning I2C bus...
W (xxxx) AIC3104_NG: Found device at address 0x??
```
如果地址不是 0x18，需要修改 `aic3104_ng.h` 中的 `AIC3104_ADDR`。

#### Q: 音频没有声音

**A:** 检查：
1. AIC3104 初始化是否成功（看串口日志）
2. I2S 引脚配置是否正确
3. 扬声器是否正确连接

#### Q: 网络缓冲区错误 `Not enough space`

**A:** 这是运行时的网络问题,可以暂时忽略：
1. 检查网络质量
2. 降低音频码率
3. 增加网络缓冲区大小

#### Q: 修改 `board_pins_config.c` 后仍然报错

**A:** 
1. 确认修改的是正确的文件路径
2. 运行 `idf.py fullclean` 完全清理
3. 重新编译 `idf.py build`



## 参考资源

### 官方文档

| 资源 | 链接 |
|------|------|
| ESP-IDF 编程指南 | https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32s3/ |
| ESP-ADF 编程指南 | https://docs.espressif.com/projects/esp-adf/zh_CN/latest/ |
| Agora RTC 文档 | https://docs.agora.io/en/rtc/overview/product-overview |
| TEN Framework 文档 | https://doc.theten.ai |
| ReSpeaker XVF3800 固件指南 | https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/ |

### API 服务

| 服务 | 控制台地址 |
|------|-----------|
| Agora (声网) | https://console.agora.io/ |
| Deepgram | https://console.deepgram.com/ |
| OpenAI | https://platform.openai.com/ |
| ElevenLabs | https://elevenlabs.io/ |

### 芯片资料

| 资料 | 链接 |
|------|------|
| TI AIC3104 数据手册 | https://www.ti.com/product/TLV320AIC3104 |
| XIAO ESP32-S3 Wiki | https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/ |

### 项目仓库

| 仓库 | 链接 |
|------|------|
| TEN Framework | https://github.com/TEN-framework/ten-framework |
| ESP32 Client Agora | https://github.com/zhannn668/esp32-client-agora |

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
