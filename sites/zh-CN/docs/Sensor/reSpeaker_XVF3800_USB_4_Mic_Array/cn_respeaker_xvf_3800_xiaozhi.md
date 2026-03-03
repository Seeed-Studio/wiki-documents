---
description: 使用 ESP32S3 + reSpeaker 构建您的云端 AI 小智语音助手
title: 使用 ESP32S3 + reSpeaker 部署您的云端 AI 小智语音助手
keywords:
- reSpeaker_XVF3800_USB_4_Mic_Array
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_xiaozhi
sku: 114993702,114993700
last_update:
  date: 1/29/2026
  author: Mingxi
---


> 目标：让 ESP32S3 与 reSpeaker XVF3800 协同工作，运行利用云端大模型的小智助手。
> 项目源码：https://github.com/Seeed-Projects/Xiaozhi_Esp32S3_reSpeaker
> Seeed-Projects：https://github.com/Seeed-Projects

reSpeaker XVF3800 是一款基于 XMOS XVF3800 芯片的专业 4 麦克风圆形阵列。它在嘈杂环境中提供可靠的语音拾取，具有双模式、360° 远场拾取（最远 5 米）、声学回声消除 (AEC)、自动增益控制 (AGC)、到达方向 (DoA)、去混响、波束成形和噪声抑制等功能。凭借其强大的捕获和降噪能力，小智获得了更好的"耳朵"。

![reSpeaker banner](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)

---

## 第一部分：reSpeaker 硬件固件准备

本节针对 reSpeaker XVF3800 硬件本身。默认的 USB 固件不支持 I2S 输出，因此您必须刷入专用的 I2S 固件才能与 XIAO ESP32S3 等主机配合使用。

> 注意：I2S 固件使用 I2C DFU（而非 USB DFU）。如果设备已有 I2S 固件但行为异常，请先进入"安全模式"，然后使用 USB DFU 恢复或切换固件。安全模式同时支持 USB DFU 和 I2C DFU。
> 参见官方参考资料：
> - [reSpeaker XVF3800 入门指南](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_xiao_getting_started/)
> - [reSpeaker XVF3800 固件仓库](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)
> - [reSpeaker 代码仓库](https://github.com/respeaker)

### 1.1 准备工作

#### 硬件

- reSpeaker XVF3800 USB 4-Mic Array
- USB Type-C 数据线（电源 + 数据）
- 计算机：Windows / macOS / Linux
- 如果与 XIAO ESP32S3 集成，请确保 I2S / I2C / 电源连接的焊接正确

#### 软件（安装 dfu-util）

Windows：

1. 下载并解压 `dfu-util` 二进制文件（例如 `D:\dfu-util-0.11-binaries\win64\`）。
2. 将包含 `dfu-util.exe` 的目录添加到 PATH。
3. 使用 `dfu-util -V` 验证。
4. 如果 `dfu-util -l` 返回 `LIBUSB_ERROR_NOT_SUPPORTED`，请使用 Zadig 将设备驱动程序替换为 WinUSB。

macOS（Homebrew）：

```bash
brew install dfu-util
dfu-util -l
```

Linux（Debian / Ubuntu / Raspberry Pi OS）：

```bash
sudo apt update
sudo apt install dfu-util
sudo dfu-util -l
```

#### 下载 I2S 固件

- 访问固件仓库：https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares
- 下载名称以 `i2s` 开头的 `.bin` 文件（例如 `respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin`）。

### 1.2 连接并进入 DFU 模式

#### 接线注意事项

- 连接计算机时使用靠近 3.5mm 耳机插孔的 USB-C 端口（XMOS 侧）；请勿使用 XIAO 侧端口。

#### 进入安全模式（推荐）

适用情况：当前固件是 I2S 但您想要 USB、固件损坏或刷入了错误的固件。

1. 完全断开电源。
2. 按住板载"Mute"按钮。
3. 按住按钮的同时重新连接电源。
4. 当红色 LED 开始闪烁时，松开按钮——设备现在处于安全模式。

### 1.3 使用 dfu-util 刷入 I2S 固件

#### 确认设备可见

```bash
# Linux / Raspberry Pi OS
sudo dfu-util -l
# macOS / Windows
dfu-util -l
```

预期输出包含 `Found DFU: [2886:001a] ... alt=1, name="reSpeaker DFU Upgrade"`。

#### 刷入命令

```bash
# Linux / Raspberry Pi OS (replace path)
sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin
# macOS / Windows (no sudo)
dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin
```

参数：`-R`（重置/重启）、`-e`（擦除）、`-a 1`（写入 Upgrade alt）、`-D`（固件文件）。

### 1.4 验证和故障排除

#### 验证固件

刷入后，设备将自动重启，I2S 固件应该激活。您可以通过使用 ESP32S3 作为 I2S 主机从设备读取音频数据来验证。

#### 常见问题

- 问：`dfu-util -l` 不显示设备？
  - 检查 USB 线缆和端口（必须使用 XMOS 侧连接器）。
  - 如果设备当前运行 I2S 固件，请在刷入前进入安全模式。
  - Windows 用户：通过 Zadig 确保 WinUSB 驱动程序。
- 问：刷入过程中出错？
  - 尝试不同的 USB 线缆或主机端口，并在安全模式下重试。
- 问：刷入后无音频？
  - 验证 I2S 主机配置（采样率、通道数）是否与固件设置匹配。

---

## 第二部分：小智软件适配更改

本节介绍使小智项目支持 reSpeaker XVF3800 的代码更改。

### 2.1 更改概述

核心更改：

1. 添加了共享 I2C 总线包装器，集中管理 I2C 主机并避免冲突。
2. 在启动期间添加硬件探测：在应用程序启动前通过 I2C 探测 XVF3800。
3. 解耦板级配置：使用 `config.h` 宏定义引脚和地址以便于移植。
4. 构建更新：在构建中包含新的 BSP 源文件。

### 2.2 关键代码更改位置

A. 新增：共享 I2C 总线

- 文件：`main/shared_i2c_bus.h` / `main/shared_i2c_bus.c`
- 目的：提供 `shared_i2c_master_bus_get()`，使用默认启用内部上拉的 ESP-IDF I2C 主机 API。

B. 新增：reSpeaker 音频硬件初始化

- 文件：`main/audio_bsp.c`
- 函数：`audio_hardware_init()`
- 逻辑：获取共享 I2C 总线，调用 `i2c_master_probe()` 检测 `XVF3800_I2C_ADDR` (0x2C) 并打印探测日志。

C. 更改：启动顺序

- 文件：`main/main.cc`
- 更改：在 `Application::GetInstance().Start()` 之前调用 `audio_hardware_init()`。

D. 更改：构建和板配置

- `CMakeLists.txt`：将 `audio_bsp.c` 和 `shared_i2c_bus.c` 添加到构建源文件。
- `boards/xiao-esp32s3-sense/config.h`：
  - 添加 `I2C_SDA_PIN` (5)、`I2C_SCL_PIN` (6)。
  - 添加 `XVF3800_I2C_ADDR` (0x2C)。
  - 完善 I2S 引脚和位宽设置。

---

## 第三部分：构建、刷入和部署

本节指导编译适配的固件并将其刷入 ESP32S3。

### 3.1 确认硬件连接

确保 ESP32S3 和 reSpeaker XVF3800 之间的连接：

- I2S 音频线正确连接。
- I2C 控制线连接：ESP32S3 GPIO5 (SDA) / GPIO6 (SCL) 到 XVF3800。

### 3.2 选择构建目标

```bash
idf.py set-target esp32s3
```

### 3.3 Menuconfig

```bash
idf.py menuconfig
```

必需的调整：

1. 选择板型：`Xiaozhi Assistant -> Board Type -> Seeed Studio XIAO ESP32S3 Sense`。
2. 避免引脚冲突：如果 I2S 使用 GPIO43/44，请将控制台输出切换到 USB：
   `Component config -> ESP System Settings -> Channel for console output -> USB Serial/JTAG`。
3. Flash 设置：
   `Serial flasher config -> Flash size -> 8 MB` 和
   `Partition Table -> Custom partition CSV file -> partitions/v1/8m.csv`。

### 3.4 构建和刷入

```bash
idf.py build
idf.py flash
```

### 3.5 监控日志和验证

```bash
idf.py monitor
```

---

## 第四部分：网络设置和激活

刷入后，设备需要网络配置和云端绑定才能使用 AI 对话功能。

### 4.1 连接到设备热点

1. 使用您的手机查找名为 `Xiaozhi-XXXXXX` 的 Wi-Fi SSID。
2. 打开浏览器并访问 `http://192.168.4.1`。

### 4.2 配置 Wi-Fi

1. 在强制门户页面等待约 5 秒进行网络扫描。
2. 选择您的 2.4GHz Wi-Fi（iPhone 热点：启用"最大兼容性"）。
3. 输入密码并点击"Connect"。
4. 显示"Login successful"后，设备将在约 3 秒后重启。
  ![configure-wifi](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/wifilist.png)

### 4.3 将设备添加到管理后台

1. 获取设备 ID：设备上线后，说"Hello Xiaozhi"唤醒它，并听取 6 位验证码。
2. 访问 https://xiaozhi.me 并注册/登录。
3. 在"Agents"或设备管理部分，选择"Add device"，输入 6 位设备 ID 并提交。
  ![login-success-2](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/workbench.png)
  ![history-dialogs](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/history_talk.png)


完成后，您的 reSpeaker–小智设备应该准备就绪并可正常运行。
另外，别忘了在设置中将输出语言更改为您的首选语言！
![language](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/xiaozhi_language.png)


## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




