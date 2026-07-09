---
description: 编写 SenseCraft AI 应用时可用的工具模块参考。
title: 工具模块
keywords:
  - tool blocks
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/tool-blocks
sidebar_position: 2
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/application/tool-blocks/
---
# 使用工具模块

在部署流程中，你可以一键插入 SenseCraft AI 集成功能。它们同时简化你的应用编写体验和终端用户的部署过程。

## AI 视觉

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 4c2.787 0 5.263 1.257 7.026 2.813c.885.781 1.614 1.658 2.128 2.531c.505.857.846 1.786.846 2.656s-.34 1.799-.846 2.656c-.514.873-1.243 1.75-2.128 2.531C17.263 18.743 14.786 20 12 20c-2.787 0-5.263-1.257-7.026-2.813c-.885-.781-1.614-1.658-2.128-2.531C2.34 13.799 2 12.87 2 12s.34-1.799.846-2.656c.514-.873 1.243-1.75 2.128-2.531C6.737 5.257 9.214 4 12 4m0 2c-2.184 0-4.208.993-5.702 2.312c-.744.656-1.332 1.373-1.729 2.047C4.163 11.049 4 11.62 4 12s.163.951.569 1.641c.397.674.985 1.39 1.729 2.047C7.792 17.007 9.816 18 12 18s4.208-.993 5.702-2.312c.744-.657 1.332-1.373 1.729-2.047c.406-.69.569-1.261.569-1.641s-.163-.951-.569-1.641c-.397-.674-.985-1.39-1.729-2.047C16.208 6.993 14.184 6 12 6m0 3q.132 0 .261.011a2 2 0 0 0 2.728 2.728A3 3 0 1 1 12 9"/></svg>在支持的硬件上部署用于目标识别、检测、分类等任务的 AI 视觉模型。推理结果可根据配置通过 MQTT、GPIO 或串口（Serial）实时流式传输。

该工具模块目前支持 **检测（Detection）** 和 **分类（Classification）**。分割和姿态估计计划在后续版本中提供。

### 支持的设备

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### 选择模型

- **SenseCraft AI model：** 从模型库中选择社区公开共享的高质量模型。
- **My model：** 从你的私有已保存列表中选择模型。
- **Upload model：** 上传在第三方平台训练的模型文件。你需要提供模型名称、任务类型（`Task`）、模型类别（`Class ID` 和 `Class Name`），附加模型文件，并选择支持的设备。上传完成后，模型会出现在 **My model** 下。
- **Train model：** 若要训练新模型或在现有模型基础上再训练，打开训练入口并按照向导操作。完成后，打开 **Historical models**，选择 **Send to SenseCraft**，完成上传流程，并将结果保存到 **My model**。

:::caution
当你将包含私有模型的应用发布到社区时，该模型会自动变为公开模型。
:::

### 选择设备

在下拉列表中，从该模型支持的设备列表里选择你实际使用的硬件。

### 推荐参数

根据你的场景微调推理和设备设置。这些数值会在部署时作为默认值写入设备。

- **置信度阈值（Confidence threshold）：** 判断模型是否输出最终预测的标准。提高阈值通常可以减少误报；降低阈值通常可以减少漏报。
- **IOU 阈值（IOU threshold）：** 在检测任务中，IoU 用于比较预测框与真实框。较高的阈值有助于区分重叠目标，但如果设置过高，可能在同一目标上产生多个重复框；较低的阈值可以合并重复框，但如果设置过低，可能会把两个相近的目标合并为一个。

#### 输出模式

- **None：** 上电后不会立即开始推理，直到有其他触发条件运行。适用于仅在需要时才运行推理的低功耗场景。
- **MQTT：** 上电后立即开始推理，并通过 Wi-Fi 使用 MQTT 发送结果。
  - **SenseCraft 官方服务（推荐）：** 为你的应用选择或创建一个 Dev Kit，MQTT 将自动完成配置。打开 [SenseCraft Data 平台](https://sensecap.seeed.cc) 以查看和处理接收的数据。
  - **第三方服务：** 使用你自己的或第三方的 MQTT broker，并手动配置参数。
- **GPIO：** 使用电平信号驱动 GPIO 引脚。
  - **触发条件：** 使用目标、条件和置信度阈值来定义规则。
  - **触发动作：** 当条件满足时，设备可以将引脚拉高/拉低、将抓拍保存到 SD 卡、点亮 LED 等。
- **Serial：** 使用 [SSCMACore 库](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library) 通过 UART（GPIO）、I2C 或 SPI 导出推理数据。

```text
**UART (GPIO)**
Baud Rate Value: 921600
Data Format: 8N1
TX: GPIO43
RX: GPIO44

**I2C**
Slave Address: 0x62
SDA: GPIO5 (PULLUP)
SCL: GPIO6 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06

**SPI**
Slave CPOL0 CPHA0
MOSI GPIO9 (PULLUP)
MISO GPIO8,
SCLK GPIO7 (PULLUP)
CS GPIO4 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06
```

## AI 音频

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1M8 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1"/></svg>在支持的硬件上部署用于语音识别的 AI 音频模型。结果可根据配置通过 MQTT、GPIO 或串口进行流式传输。

### 支持的设备

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)

### 选择模型

- **SenseCraft AI model：** 从模型库中选择社区共享的模型。
- **My model：** 从你的私有列表中选择。
- **Upload model：** 上传在第三方平台训练的模型文件。提供模型名称和类别（`Class ID` 和 `Class Name`）。上传完成后，模型会出现在 **My model** 下。
- **Train model：** 训练一个新的或更新后的模型，然后像视觉模型一样，从 **Historical models** 中将其发送到 SenseCraft。

:::caution
当你将包含私有模型的应用发布到社区时，该模型会自动变为公开模型。
:::

### 选择设备

音频模型目前仅支持 XIAO ESP32S3 Sense。

### 推荐参数

根据你的场景微调各项数值。

- **置信度阈值（Confidence threshold）：** 与视觉模型中的作用相同；用于在漏检和误检之间进行权衡调整。
- **输出模式（Output mode）：** 音频模型的默认输出路径。

## AI 振动

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M7.71 5.012a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812L17.94 7.824l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258L7.272 7.824l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324m0 8a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812l-1.147-2.582l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324"/></svg>通过学习“正常”振动并标记偏差来部署振动异常检测。

### 支持的设备

- XIAO ESP32S3 Sense（搭配 [3 轴加速度计](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)）

### 推荐参数

根据你的设置调整采样、上电行为、GPIO 和输出。

- **采样窗口（Sampling window）：** 每单位时间的采样数。窗口过大会减慢推理；过小则可能对正常振动拟合不足。
- **启用默认上电推理（Enable default power-on inference）：** 关闭时，上电不会自动开始推理；在低功耗使用场景下可使用外部触发。
- **GPIO：** 在检测到异常振动时驱动引脚——例如设置电平或切换 LED。
- **输出模式（Output mode）：** 振动模型的默认输出路径。

## 部署容器应用

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12.01 2.378a2.5 2.5 0 0 1 2.985 2.29l.005.161v.551c1.503-.3 2.9.792 2.995 2.288l.005.161v.55c1.503-.3 2.9.793 2.995 2.289l.005.162v6.53a3 3 0 0 1-2.239 2.902l-.173.04l-6.598 1.32a2.5 2.5 0 0 1-2.985-2.29L9 19.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L6 16.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L3 13.17V6.64a3 3 0 0 1 2.238-2.902l.174-.04zm6.392 7.961l-6.598 1.32a1 1 0 0 0-.804.98v6.531a.5.5 0 0 0 .598.49l6.598-1.32a1 1 0 0 0 .804-.98v-6.53a.5.5 0 0 0-.598-.49m-3-3L8.804 8.66A1 1 0 0 0 8 9.64v6.531a.5.5 0 0 0 .598.49L9 16.58v-3.94a3 3 0 0 1 2.412-2.942L16 8.78v-.95a.5.5 0 0 0-.598-.49m-3-3L5.804 5.66A1 1 0 0 0 5 6.64v6.531a.5.5 0 0 0 .598.49L6 13.58V9.64a3 3 0 0 1 2.412-2.942L13 5.78v-.95a.5.5 0 0 0-.598-.49"/></svg>只需几次点击即可将容器应用部署到边缘设备。

### 精选应用

内置应用库包括（并在持续扩展）：

- **Home Assistant** — 开源家庭自动化中枢
- **Ollama** — 在边缘本地运行开源大语言模型
- **OpenClaw** — 用于部署和管理容器化边缘应用的开源平台
- **reComputer AI Suite** — 针对 reComputer 硬件优化的计算机视觉（CV）、视觉语言模型（VLM）和大语言模型（LLM）

兼容 **M1 Gate**、**Raspberry Pi 4 / 5**、**NVIDIA Jetson** 和 **Seeed reComputer**。

### 如何与 SenseCraft Fleet 协同工作

容器应用在 [**SenseCraft Fleet**](https://seeed-fleet.com) 上进行管理，并通过 [**SenseCraft AI**](https://sensecraft.seeed.cc/ai)（在 **`Applications`** 下）进行部署：

- **SenseCraft Fleet** 是容器镜像所在的平台——你在这里上传镜像、定义其配置模式，并绑定你的设备。
- **SenseCraft AI** 是你从应用库中选择应用、选择目标设备、进行配置并触发部署的平台。

你的 SenseCraft AI 账号会自动与 SenseCraft Fleet 关联；已绑定的设备和应用会在两个平台之间保持同步。

### 支持的平台

应用是特定于平台的——镜像和目标设备必须匹配：

- **Linux / ARM64** — 例如 Seeed reComputer、Raspberry Pi 4 / 5、NVIDIA Jetson、M1 Gate
- *Linux / AMD64 — 即将支持*

### 配置工作流

**选择应用：** 从 SenseCraft Fleet 上的应用库（内置目录）中选择。如果你希望上传自定义容器应用，需要通过 [**SenseCraft Fleet**](https://seeed-fleet.com) 添加。

**配置应用：** 每个应用都会暴露其作者在 SenseCraft Fleet 上定义的配置项。通常你不需要配置任何内容，除非你有特殊需求。

### 部署工作流

**步骤 1 — 选择应用：** 点击 **Deploy Container App**。SenseCraft AI 会从 SenseCraft Fleet 加载你的完整应用库（内置目录加上你上传的所有自定义应用），并以名称、图标和描述的形式展示。

**步骤 2 – 绑定设备：** 如果你已经有已绑定的设备，请跳到步骤 3。否则，请先给设备上电，将其连接到网络，然后根据你的硬件类型进行绑定：

- **运行 Seeed 出厂镜像的 Seeed 设备：** 输入设备 **CPU ID** 或 **MAC 地址** 的后 6 位即可立即绑定。
- **没有出厂镜像的 Seeed 设备，或第三方设备：** 获取设备的 IP 地址，打开终端并通过 SSH 登录，然后运行绑定流程中显示的绑定命令。

绑定完成后，设备会出现在你的已绑定设备列表中。

**步骤 3 — 选择目标设备：** 从与应用平台兼容的已绑定设备列表中进行选择。不兼容的设备会被自动过滤掉。

**步骤 4 — 配置应用：** 填写应用作者暴露的配置项。有关控件类型和默认值，请参阅上面的[配置工作流](#configuration-workflow)部分。

**步骤 5 — 一键部署：** 点击 **Deploy**。SenseCraft AI 会显示实时进度指示器，并在每个阶段流式显示状态。如果任何步骤失败，具体错误会在弹窗中显示，方便你修复后重试。使用新参数重新部署即可更新现有部署——之前的部署会被自动替换。

:::note
目前支持单镜像 Docker 应用。Docker Compose（多容器应用）已在规划中。
:::

## 烧录固件

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M16.586 3A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.414A2 2 0 0 1 3.586 6L6 3.586A2 2 0 0 1 7.414 3zM19 9H5v10h14zm-7 1a1 1 0 0 1 1 1v3.186l.414-.414a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0l-2.121-2.121a1 1 0 1 1 1.414-1.414l.414.414V11a1 1 0 0 1 1-1m4.586-5H7.414l-2 2h13.172z"/></svg>直接在浏览器中将预编译的固件二进制文件烧录到 ESP32 设备，而无需安装单独的烧录工具。当你的固件已经编译好并包含所有参数时，请使用此方式。

**支持的设备：**

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) *（即将支持）*
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) *（即将支持）*
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html) *（即将支持）*

### 前提条件：

**一个合并后的单一 `.bin` 文件。** 如果你有单独的 bootloader、分区和应用二进制文件，请在上传前将它们合并。

- **Arduino IDE 2.x：** 只有在运行 **Sketch → Export Compiled Binary** 时才会生成合并后的二进制文件。输出的 `*.ino.merged.bin` 会写入到与你的 `.ino` 文件同级的 `build/` 文件夹中。
- **旧版 Arduino IDE / 手动合并：** **Export Compiled Binary** 会分别导出 bootloader、分区和应用的 `.bin` 文件——在上传前使用 `esptool.py merge_bin` 将它们合并。请参阅 Seeed Studio 论坛指南：[How to export a single merged `.bin` file from Arduino IDE](https://forum.seeedstudio.com/t/how-to-export-compiled-binary-create-a-single-bin-file-for-production-and-test/274990)。

### 配置工作流

1. 点击 **Upload firmware** 并上传你的 `.bin` 文件。
2. 从下拉菜单中**选择设备类型**。

### 部署工作流

1. 将设备连接到你的电脑。
2. 点击 **Flash firmware**。按钮会显示当前阶段，并在下方显示进度条和调试日志：连接串口 → 检测设备 → 烧录 → 重启。
3. 烧录完成后，在预览窗口中验证设备行为。

如果任何步骤失败，会弹出错误提示，说明原因，方便你修复后重试。

## Node-RED

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 128 128" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'#8F0000'}}><path fill="currentColor" d="M64 0L8.61 32.033v63.979L64 128l55.39-31.986V32.053zm.023 5.3a1 1 0 0 1 .471.132l50.022 28.873c.306.176.523.502.523.855v57.744c0 .354-.217.68-.523.856l-50.022 28.879a.99.99 0 0 1-.988 0l-50.1-28.877a.99.99 0 0 1-.494-.856V35.16c0-.353.188-.679.494-.855l50.1-28.873a1 1 0 0 1 .517-.131zM64 7.43l-49.06 28.3v17.088h20.308c3.273.019 6.052 2.326 6.363 5.524c2.41-.304 3.891-.97 4.95-1.94c1.24-1.138 2.095-2.763 3.136-4.652c1.042-1.889 2.316-4.057 4.643-5.654c1.88-1.291 4.649-1.93 7.902-2.09v-1.127c0-3.478 2.713-6.281 6.192-6.281h25.183c3.479 0 6.586 2.803 6.586 6.28v6.188c0 3.479-3.121 6.325-6.6 6.325h-25.18c-3.478 0-6.18-2.846-6.18-6.325v-.802c-2.46.146-4.36.605-5.472 1.369c-1.43.98-2.323 2.4-3.311 4.191c-.92 1.667-1.95 3.622-3.666 5.342c9.2 1.46 13.774 4.955 17.426 8.148c4.393 3.842 7.916 6.9 19.728 6.987v-.856c0-3.478 2.979-6.383 6.457-6.383h19.657V35.73zm4.434 33.52c-1.175 0-2.143.754-2.143 1.929v6.187c0 1.175.956 1.973 2.13 1.973h25.184c1.175 0 2.047-.798 2.047-1.973V42.88c0-1.175-.86-1.93-2.035-1.93zM14.94 56.774v10.287h20.307c1.175 0 2.047-.776 2.047-1.95v-6.188c0-1.175-.873-2.149-2.047-2.149zm26.793 5.983l-.002 2.353c0 3.479-3.004 6.303-6.482 6.303H14.941v20.92L64 120.641l49.06-28.307v-6.479H93.407c-3.478 0-6.457-2.744-6.457-6.222v-1.074c-12.79-.17-18.177-4.186-22.554-8.014c-4.562-3.989-8.474-7.564-22.66-7.787zm51.674 8.656c-1.174 0-2.107.857-2.107 2.031v6.08c0 1.175.933 1.979 2.107 1.979h19.655v-10.09z"/></svg>[Node-RED](https://nodered.org) 模块可帮助你为 reCamera 构建可视化逻辑流程。

### 官方资源

- [GitHub](https://github.com/node-red/node-red)
- [Documentation](https://nodered.org/docs/)

### 支持的设备

- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### 准备你的工作流

添加 Node-RED 模块后，可以通过以下任一方式配置流程：

1. **创建新工作流：** 连接到 reCamera（有线或无线），打开其 Dashboard，并在线编辑。
2. **上传本地文件：** 上传你已经构建好的 JSON 流程。系统会验证文件类型，以确保可以可靠解析。

### 选择 AI 视觉模型

JSON 流程不会内嵌模型二进制文件。请指定此流程应使用的模型：

- **设备内置：** 使用预装在 reCamera 上的模型，包括用于分类、检测、分割和姿态估计的 YOLO11n 变体。
- **公共模型：** 浏览其他人为 reCamera 共享的 SenseCraft 公共模型。
- **我的模型：** 从你的私有模型库中选择。

:::caution
如果你在 **My model** 下使用私有模型并将应用发布到公共社区，该模型也会被公开。在发布前系统会提示你确认。
:::

## Aily Blockly

<img src="https://github.com/ailyProject.png" alt="" style={{width:'1.25em',height:'1.25em',verticalAlign:'-0.3em',marginRight:'0.35em',borderRadius:'4px'}}/>[Aily Blockly](https://aily.pro) 是一个可视化编程环境。通过此模块，你可以一键将自己在 Aily Blockly 中构建的程序烧录到边缘设备。

### 官方资源

- [GitHub](https://github.com/ailyProject/aily-blockly)
- [Documentation - Global site](https://aily.pro/doc)
- [Documentation - Mainland China site](https://yiyu.pro/doc)

### 支持的设备

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

### 绑定项目 ID

输入指向你公共 Aily Blockly 模板的项目代码。

#### 如何获取项目 ID

1. 在 Aily Blockly 中构建你的项目，然后点击 **`Build (F5)`** 进行编译。
2. 编译成功后，打开 **Cloud Space** 面板并点击 **`Sync this project to cloud`**。
3. 你的项目 ID 会显示在标记区域（**`ID: …`**）中，只使用其中的数字。
4. 每当你更改项目时重复这些步骤，以确保云端副本保持最新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/tool_blocks/aily-get-project-id.png" alt="How to get an Aily Blockly Project ID" style={{width:1000, height:'auto'}}/></div>
