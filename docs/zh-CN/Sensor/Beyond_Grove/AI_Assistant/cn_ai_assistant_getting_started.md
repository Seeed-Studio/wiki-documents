---
description: AI Assistant 入门指南。
title: AI Assistant 入门指南
image: https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top_Pic.webp
slug: /cn/ai_assistant_getting_started
# sidebar_position: 2
last_update:
  date: 08/07/2025
  author: Robin(STMicroelectronics),Atom
---

# AI Assistant 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/1-114993645-Al-Assistant-v1.1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/AI-Assistant-p-6510.html">
   <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
 </a>
</div>

## 介绍

AI Assistant 开发套件由 Seeed Studio 和 STMicroelectronics 联合打造。这是一个专为前沿边缘 AI 应用设计的开发平台。以高性能 STM32N657 MCU 为核心，集成了 ST Neural-ART AI 加速器，完美融合了强大的 AI 计算能力与经典 MCU 的低功耗、小尺寸和成本效益优势。该套件配备了板载全局快门相机、带 AI 处理单元的 IMU 传感器、高清触摸屏和 Wi-Fi 模块，为开发下一代智能视觉和语音交互产品提供了完整的硬件和软件解决方案。

### 特性

- **特性 1：旗舰级 AI 微控制器**
 采用 ST STM32N657，具有高性能 Arm® Cortex®-M55 内核和集成的 ST Neural-ART NPU，可提供高达 600 GOPS 的高效 AI 模型加速。
- **特性 2：专业级视觉传感器**
配备 ST VD55G1 全局快门相机，为快速移动物体提供清晰、无失真的图像，这对高精度计算机视觉任务至关重要。
- **特性 3：带 ISPU 的智能感知**
配备内置智能传感器处理单元（ISPU）的 LSM6DSO16IS IMU，可实现超低功耗手势和活动识别，无需唤醒主处理器。
- **特性 4：丰富的交互外设**
集成 4.0 英寸 480x480 电容触摸显示屏、高保真数字麦克风和音频编解码器，为开箱即用的交互式 AI 应用开发提供完整的硬件基础。
- **特性 5：全面的连接性**
包含板载 Wi-Fi 模块，实现无缝 IoT 连接，以及 USB-C 端口和多个扩展接头，提供最大的开发灵活性。

## 硬件概述

在开始之前，了解产品的一些基本参数是非常重要的。下表提供了 **AI Assistant** 特性的信息。

| 类别             | 特性               | 规格                                                                 |
|----------------------|------------------------|-------------------------------------------------------------------------------|
| **核心系统**      | 主控制器        | STMicroelectronics STM32N657X0H3Q                                             |
|                      | 核心架构      | Arm® Cortex®-M55                                             |
|                      | 神经处理单元 | ST Neural-ART, 600 GOPS                                                       |
|                      | 外部存储器        | 128MB NOR Flash, 32MB DRAM                                                    |
| **传感器**          | 相机                 | STMicroelectronics VD55G1 (800x700, 全局快门)                           |
|                      | IMU                    | STMicroelectronics LSM6DSO16IS (6 轴，内置 ISPU)                    |
|                      | 磁力计           | STMicroelectronics LIS2MDL                                                    |
| **外设**      | 显示屏                | 4.0" TFT LCD (480x480), 电容触摸                                      |
|                      | 音频                  | Cirrus Logic WM8994 编解码器 & ST MP34DT06JTR 数字麦克风                        |
| **连接性**     | 无线               | MXCHIP EMW3080 Wi-Fi 模块                                                   |
|                      | 接口             | USB-C x1, SWD 端口 x1, 麦克风扩展 x1, RPi 相机接口 x1              |
| **机械和电源**| 尺寸（外壳）    | 130mm x 90mm                                                                  |
|                      | 电源供应           | 5V 通过 USB-C 或锂电池端口                                          |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Hardware_Overview.png" style={{width:800, height:'auto'}}/></div>

### 电路板顶层概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top.png" style={{width:800, height:'auto'}}/></div>

### 电路板底层概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Bottom.png" style={{width:800, height:'auto'}}/></div>

***

## 开始使用 AI Assistant 参考应用

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

要开始使用，请**从 GitHub 链接克隆仓库**`git clone https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection.git` 到您首选的本地文件夹。

计算机视觉应用，用于在 AI Assistant 板上部署目标检测模型。它基于 STM32N6570-DK 板的 n6-ai-people-detection-v1.0.0 应用包的官方发布版本。

此应用预构建了人员检测模型"TinyYOLOv2"。

本节提供应用的概述。更多文档可在[应用的附加文档](#应用的附加文档)中找到。

### 此示例演示的特性

- 多线程应用流程（Azure RTOS ThreadX）
- NPU 加速量化 AI 模型推理
- 双 DCMIPP 管道
- DCMIPP 裁剪、抽取、缩放
- LTDC 双层实现
- DCMIPP ISP 使用
- 开发模式
- 从外部 Flash 启动

### 硬件支持

- AI Assistant 套件

- 支持 3 种相机：
  - MB1854B IMX335

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/3-114993645-Al-Assistant-v1.1.jpg" style={{width:800, height:'auto'}}/></div>
带 VD55G1 相机的 AI Assistant 套件。

### 工具版本

- STM32CubeIDE (**STM32CubeIDE 1.18.0**)
- STM32CubeProgrammer (**v2.18.0**)
- [STEdgeAI](https://www.st.com/en/development-tools/stedgeai-core.html) (**v2.1.0**)

### ST-Link 连接

**右侧连接器**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC1.PNG" style={{width:1000, height:'auto'}}/></div>

**左侧连接器**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC2.PNG" style={{width:1000, height:'auto'}}/></div>

**调试器连接**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC3.PNG" style={{width:1000, height:'auto'}}/></div>

**接头引脚定义**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC4.PNG" style={{width:1000, height:'auto'}}/></div>

### 启动模式

STM32N6 没有任何内部 flash。要在重启后保留固件，您必须将其编程到外部 flash 中。
或者，您可以直接从 SRAM（开发模式）加载固件。但是，在开发模式下，如果您关闭板子，程序将丢失。

**启动模式：**

- 开发模式：从调试会话在 RAM 中加载固件（启动开关向右）
- 从 flash 启动：将固件编程到外部 flash（启动开关向左）

### 使用预构建二进制文件快速开始

#### 烧录预构建二进制文件

必须使用以下程序将三个二进制文件编程到板子的外部 flash 中：

  1. 将 BOOT 开关切换到上位置。
  2. 编程 `Binary/ai_assistant_fsbl.hex`（只需执行一次）（第一阶段引导加载程序）。
  3. 编程 `Binary/network_data.hex`（网络参数；仅在网络更改时需要更改）。
  4. 编程 `Binary/AI_Assistant_Ref_Project.hex`（固件应用）。
  5. 将 BOOT 开关切换到下位置。
  6. 执行断电/上电序列。

#### 如何使用 STM32CubeProgrammer UI 编程 Hex 文件

请参阅[如何编程 Hex 文件 STM32CubeProgrammer](#如何烧录 Hex 文件)。

#### 如何使用命令行编程 Hex 文件

确保将 STM32CubeProgrammer bin 文件夹添加到您的路径中。

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# First Stage Boot Loader
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/ai_fsbl.hex

# Network Parameters and Biases
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/network_data.hex

# Application Firmware
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/x-cube-n6-ai-people-detection.hex

```

### 使用源代码快速开始

在构建和运行应用程序之前，您必须编程 `network_data.hex`（模型权重和偏置）。

除非您更改 AI 模型，否则此步骤只需执行一次。
详细信息请参见[使用预构建二进制文件快速开始](#使用预构建二进制文件快速开始)。

有关启动模式的更多信息，请参见[启动概述](#启动概述)。

#### 应用程序构建和运行 - 开发模式

**确保将开关拨到右侧。**

##### STM32CubeIDE

双击 `STM32CubeIDE/.project` 在 STM32CubeIDE 中打开项目。使用构建和运行按钮进行构建和运行。

##### Makefile

在运行以下命令之前，请确保这些命令在您的 PATH 中。

1. 使用提供的 `Makefile` 构建项目：

```bash
make -j8
```

2. 打开连接到 STM32 目标的 GDB 服务器：

```bash
ST-LINK_gdbserver -p 61234 -l 1 -d -s -cp <path-to-stm32cubeprogramer-bin-dir> -m 1 -g
```

3. 在单独的终端会话中，启动 GDB 会话将固件映像加载到设备内存中：

```bash
$ arm-none-eabi-gdb build/Project.elf
(gdb) target remote :61234
(gdb) monitor reset
(gdb) load
(gdb) continue
```

#### 应用程序构建和运行 - 从闪存启动

**确保将开关拨到右侧。**

##### STM32CubeIDE

双击 `STM32CubeIDE/.project` 在 STM32CubeIDE 中打开项目。使用构建按钮进行构建。

##### Makefile

在运行以下命令之前，请确保它们在您的 PATH 中。

1. 使用提供的 `Makefile` 构建项目：

```bash
make -j8
```

一旦您的应用程序使用 Makefile、STM32CubeIDE 或 EWARM 构建完成，您可以为 bin 文件添加签名：

```bash
STM32_SigningTool_CLI -bin build/Project.bin -nk -t ssbl -hv 2.3 -o build/Project_sign.bin
```

您可以在地址 `0x70100000` 处编程已签名的 bin 文件。

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Adapt build path to your IDE
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w build/Project_sign.bin 0x70100000
```

注意：如果之前已编程 FSBL 和 network_data.hex，则只需编程应用程序二进制文件。

### 已知问题和限制

- (NN_WIDTH * NN_BPP) 必须是 16 的倍数。
- (LCD_BG_WIDTH * 2) 必须是 16 的倍数。

***

## 应用程序的附加文档

### 应用程序概述

#### 应用程序数据流

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DataFlow.JPG" style={{width:1000, height:'auto'}}/></div>

#### 应用程序时序图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/ThreadTiming.JPG" style={{width:1000, height:'auto'}}/></div>

### 内存占用详情

#### 只读数据

| 名称           | 大小    | 位置 | 备注            |
|----------------|---------|----------|------------------|
| `network_data` | 10.59 MB | .rodata  | FLASH xSPI2 8b   |

#### 读写数据

| 名称               | 大小      | 位置   | 备注                             |
|--------------------|-----------|------------|-----------------------------------|
| `lcd_bg_buffer`    | 2300 KB   | .psram_bss | PSRAM / (800x480x2) x 3 / RGB565  |
| `lcd_fg_buffer`    | 1500 KB   | .psram_bss | PSRAM / (800x480x2) x 2 / ARGB4444|
| `nn_input_buffers` | 294 KB    | .psram_bss | PSRAM / (224x224x3) x 2 / RGB888  |
| `nn_output_buffers`| 12 KB     | .bss       | SRAM / 5880 x 2                   |
| `activations`      | 507 KB    | 0x34200000 | NPURAMS                           |
| `threads stacks`   | 20 KB     | .bss       | SRAM / 4096 * 5                   |

### DCMIPP 和 ISP

#### DCMIPP 概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DCMIPP.JPG" style={{width:1000, height:'auto'}}/></div>

- 管道 1 使用 `CMW_CAMERA_Start(DCMIPP_PIPE1, *ptr_dst, CAMERA_MODE_CONTINUOUS);` 启用，以连续将图像从 imx335 传输到 DISPLAY_BUFFER_NB 缓冲的 `lcd_bg_buffer[]`。注意 `ptr_dst` 将在 pipe1 frame_event 时更新。
- 管道 2 使用 `CMW_CAMERA_Start(DCMIPP_PIPE2, *ptr_dst, CAMERA_MODE_CONTINUOUS);` 启用，以连续将图像从 imx335 传输到双缓冲的 `nn_input_buffers[]`。注意 `ptr_dst` 将在 pipe2 frame_event 时更新。这允许在缓冲区仍被 nn 线程使用时丢弃前一帧。
- 对于每次捕获，ISP 配置会根据照明条件更新以增强图像质量。它通过 `ISP_Init` 初始化，然后通过 `ISP_BackgroundProcess` 执行。

有关 DCMIPP 的更多详细信息，请参见 STM32N6 参考手册中的数字摄像头接口像素管道 (DCMIPP) 部分。

### 启动概述

#### 开发模式

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Dev_mode.png" style={{width:1000, height:'auto'}}/></div>

#### 使用第一阶段引导加载程序从闪存启动

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/FSBL1.png" style={{width:1000, height:'auto'}}/></div>

### 构建选项

某些功能通过构建选项或使用 `app_config.h` 启用：

- [摄像头方向](#摄像头方向)

本文档解释了这些功能以及如何修改它们。

#### 摄像头方向

摄像头允许沿两个轴翻转图像。

- `CMW_MIRRORFLIP_MIRROR`：自拍模式
- `CMW_MIRRORFLIP_FLIP`：上下翻转
- `CMW_MIRRORFLIP_FLIP_MIRROR`：沿两个轴翻转
- `CMW_MIRRORFLIP_NONE`：默认

1. 打开 **app_config.h**。

2. 更改 `CAMERA_FLIP` 定义：

```c
/* Defines: CMW_MIRRORFLIP_NONE; CMW_MIRRORFLIP_FLIP; CMW_MIRRORFLIP_MIRROR; CMW_MIRRORFLIP_FLIP_MIRROR; */

#define CAMERA_FLIP CMW_MIRRORFLIP_NONE
```

### 部署您的 TFLite 模型

要运行您自己的目标检测模型，请按照以下步骤操作：

- [1. 从 TFLite 模型生成 C 模型](#1-从-tflite-模型生成-c-模型)
- [2. 编程您的网络数据](#2-编程您的网络数据)
- [3. 在 `app_config.h` 中提供 NN 信息](#3-在-app_configh-中提供-nn-信息)
  - [后处理类型](#后处理类型)
  - [通过用户文件配置后处理参数](#通过用户文件配置后处理参数)
  - [NN 大小信息](#nn-大小信息)
  - [类别标签](#类别标签)
  - [显示延迟](#显示延迟)
- [4. 构建应用程序](#4-构建应用程序)
- [5. 运行应用程序](#5-运行应用程序)
  - [开发模式](#开发模式)
  - [从闪存启动](#从闪存启动)

#### 1. 从 TFLite 模型生成 C 模型

要生成 `network.c`、`network_ecblobs.h` 和包含网络参数的文件，您必须安装 STM32Cube.AI

1. 将 `<folderInstall>/Utilities/<your_os>/` 添加到您的路径中，以便您的 bash 识别 `stedgeai`。

2. 将 `<stm32cubeide_folderInstall>/plugins/com.st.stm32cube.ide.mcu.externaltools.gnu-tools-for-<plugin_version>/tools/bin` 添加到您的路径中，以便您的 bash 识别 `arm-none-eabi-objcopy`。

```bash
cd Model
stedgeai generate --no-inputs-allocation --no-outputs-allocation --model quantized_tiny_yolo_v2_224_.tflite --target stm32n6 --st-neural-art default@user_neuralart.json
cp st_ai_output/network_ecblobs.h .
cp st_ai_output/network.c .
cp st_ai_output/network_atonbuf.xSPI2.raw network_data.xSPI2.bin
arm-none-eabi-objcopy -I binary network_data.xSPI2.bin --change-addresses 0x70380000 -O ihex network_data.hex
```

您可以在 **Model/generate-n6-model.sh** 找到以下脚本

#### 2. 编程您的网络数据

现在您可以在外部闪存中编程您的网络数据。

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Weights and parameters
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Model/network_data.hex
```

#### 3. 在 `app_config.h` 中提供 NN 信息

您需要编辑 **Inc/app_config.h** 的最后几行，以使应用程序与您的网络兼容。

##### 后处理类型

此应用程序支持四种类型的目标检测后处理。您可以选择其中一种。使用以下值之一编辑 `POSTPROCESS_TYPE`。

```c
#define POSTPROCESS_OD_YOLO_V2_UF       (10) /* Yolov2 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V5_UU       (11) /* Yolov5 postprocessing; Input model: uint8; output: uint8           */
#define POSTPROCESS_OD_YOLO_V8_UF       (12) /* Yolov8 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V8_UI       (13) /* Yolov8 postprocessing; Input model: uint8; output: int8            */
```

##### NN 大小信息

编辑您的 `NN_WIDTH` 和 `NN_HEIGHT`。

**警告：** `NN_WIDTH * NN_BPP` 必须是 16 的倍数。

**警告：** 仅测试了 RGB888 格式。

##### 类别标签

使用您自己的类别标签和类别数量修改 `NB_CLASSES` 和 `classes_table`。

##### 显示延迟

使用 `DISPLAY_DELAY` 可以延迟显示的图像，以便模型的显示信息与显示的图像对齐。根据模型推理时间调整此值。

##### 通过用户文件配置后处理参数

要更改您的后处理参数，您需要编辑 **Inc/postprocess_conf.h**。

后处理库的文档可在 **Postprocess lib** 获得。

您可以编辑 IOU 阈值、锚点值和其他参数。

其中一些参数需要与您的模型对齐（例如类别数量）。

##### 配置输出缓冲区大小

编辑 `NN_BUFFER_OUT_SIZE`，使其具有输出张量的字节大小。

#### 4. 构建应用程序

一旦您的网络数据已编程（步骤 2）并且网络详细信息已配置（步骤 3），您可以按照以下方式构建您的应用程序：

[应用程序构建和运行](#应用程序构建和运行---开发模式)

#### 5. 运行应用程序

##### 开发模式

更多详细信息请参见[应用程序构建和运行](#应用程序构建和运行---开发模式)部分。

##### 从闪存启动

请参见[在外部闪存中编程应用程序](#应用程序构建和运行---从闪存启动)来编程您的固件。

### 如何烧录 Hex 文件

0. 确保开发板处于开发模式（启动开关在开发模式位置）。
1. 打开 STM32CubeProgrammer。
2. 通过 External loaders 选项卡选择 MX66UW1G45G_STM32N6570-DK 闪存。
3. ST-Link 配置：将模式设置为"Hot plug"。
4. 连接开发板。
5. 从"Erasing & programming"选项卡中，选择 `Binary/ai_assistant_fsbl.hex` 文件。
6. 等待烧录完成。
7. 从"Erasing & programming"选项卡中，选择 `Binary/network_data.hex` 文件。
8. 等待烧录完成。
9. 从"Erasing & programming"选项卡中，选择 `Binary/AI_Assistant_Ref_Project.hex` 文件。
10. 等待烧录完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/selectBoard.JPG" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/flashHex.JPG" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[PDF]** [AI Assistant 原理图](https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/res/SCH_AI%20ASSISTANT_V1-1%20RELEASE_20250314.pdf)

## 技术支持

本产品由 **STMicroelectronics** 提供支持。
如有任何技术问题或咨询，请联系：
**技术支持联系方式：
 [[点击这里](https://ols.st.com/s/)]**
