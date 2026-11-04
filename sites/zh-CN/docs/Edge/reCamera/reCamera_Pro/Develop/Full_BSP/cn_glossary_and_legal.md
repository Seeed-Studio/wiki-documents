---
description: 查阅 SDK 术语、随附技术文档以及许可信息。
title: 术语表、文档地图和许可
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Reference
  - Documentation
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_reference
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_sdk_reference/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 术语表、文档地图和许可

## 术语表

### 平台与硬件

| 术语 | 含义 |
| --- | --- |
| **RV1126B** | Rockchip 面向 IPC 的 SoC，带有 NPU 和 ISP35。reCamera Pro 的主芯片；RK_CHIP=rv1126b，RK_ARCH=arm64 |
| **RV1126BP** | RV1126B 封装 / 衍生版本，用于某些 EVB 板卡配置 |
| **RK801** | reCamera Pro 使用的 PMIC |
| **RK817** | 带集成音频编解码器的 PMIC（CONFIG_SND_SOC_RK817=y） |
| **ES7202** | Everest 多通道 ADC，用于麦克风阵列采集 |
| **ISP35** | RV1126B 的 ISP 版本；相关 IQ 文件位于 iqfiles/isp35/ 下 |
| **eMMC** | 板载存储（RK_BOOT_MEDIUM=emmc） |
| **Maskrom** | 内置于 SoC ROM 的下载模式；烧录入口（USB VID 2207） |
| **loader / idblock** | DDR 初始化和第一阶段引导加载程序；输出包括 idblock.img 和 download.bin |
| **board ID** | 通过 ADC 分压电阻电平检测的底板 / 扩展板变体；结果写入 /run/board_id.env |
| **DTBO** | 设备树 Blob Overlay，在运行时用于通过一个固件镜像支持多种硬件变体 |

### SDK 与构建系统

| 术语 | 含义 |
| --- | --- |
| **BSP** | 板级支持包：包括 U-Boot、内核、rootfs 和驱动的板级支持 |
| **BoardConfig** | `project/cfg/<series>/BoardConfig-*.mk`；一次构建所用的完整板级参数集合 |
| **lunch** | 选择一个 BoardConfig；术语来自 Android 构建系统。会生成 .BoardConfig.mk 符号链接 |
| **sysdrv** | 系统驱动组件 SDK，包含 U-Boot / 内核 / MCU 源码；可使用 make 独立构建 |
| **media** | 多媒体组件 SDK，包含 mpp / rockit / rkaiq / rga / iva 等；可使用 make 独立构建 |
| **app** | 位于 project/app/ 下的用户空间应用程序 |
| **fragment** | 增量内核 / U-Boot defconfig，按顺序叠加在基础 defconfig 之上 |
| **overlay** | 在打包过程中复制到 rootfs 上的文件目录；启用的条目列在 RK_POST_OVERLAY 中 |
| **IQ file** | 图像质量文件，包含 rkaiq 传感器调参参数（JSON） |
| **rootfs** | Buildroot 生成的 ext4 根文件系统，位于 3 G 分区上 |
| **oem** | /oem 目录。本板设置了 RK_BUILD_APP_TO_OEM_PARTITION=n，因此它是 rootfs 内的普通目录，而不是单独分区 |
| **userdata** | 挂载在 /userdata 的可写分区；存储配置和用户数据，也是默认 HOME |
| **misc** | 包含恢复 / 恢复出厂标志的小分区 |
| **RK_APP_TYPE** | 参考应用类型；本板使用 RKIPC_RV1126B_RECAMERA2 |
| **allsave** | all + save；在不带参数运行 ./build.sh 时的默认行为 |
| **RK_APP_xxx** | 控制是否构建某个应用程序的板级配置开关 |
| **MAROC_\*** | Makefile.param 中的一组宏，包括 MAROC_COPY_PKG_TO_APP_OUTPUT、MAROC_STRIP_DEBUG_SYMBOL 和 MAROC_PKG_RELEASE |

### 多媒体（rockit / MPI）

| 术语 | 含义 |
| --- | --- |
| **MPI** | Media Process Interface，rockit 的统一编程接口 |
| **rockit** | Rockchip MPI 运行时实现；链接选项为 -lrockit |
| **MPP** | Media Process Platform，底层编解码库；链接选项为 -lrockchip_mpp |
| **VI** | Video Input；通过 ISP 从传感器采集帧 |
| **VPSS** | Video Process Sub System；多通道缩放 / 裁剪 / 格式转换 |
| **VENC / VDEC** | 视频编码 / 解码 |
| **VO** | 输出视频到显示设备 |
| **RGN** | 用于 OSD 叠加和水印的区域模块 |
| **AI / AO** | Audio In / Audio Out |
| **AENC / ADEC** | 音频编码 / 解码 |
| **AVS** | 多摄像头环视拼接的全景系统 |
| **IVS** | 智能视频监控，用于运动检测等分析 |
| **TDE** | Two Dimensional Engine，用于 2D 加速 |
| **RGA** | Raster Graphic Acceleration，2D 加速器，用于缩放、NV12↔RGB 转换和旋转 |
| **MB** | Media Buffer / 缓冲池 |
| **Bind** | RK_MPI_SYS_Bind() 连接两个模块的通道，使数据自动流动 |
| **EIS / DIS** | 电子 / 数字图像稳定 |
| **ePTZ** | 电子云台变焦 |
| **SVC** | 可伸缩视频编码 |
| **AOV** | Always-On Vision，低功耗常开视觉 |
| **FEC** | 鱼眼 / 畸变校正硬件（CONFIG_VIDEO_ROCKCHIP_FEC=y） |
| **IRFPA** | 红外焦平面阵列（热成像） |
| **rkaiq** | Rockchip AI ISP 引擎，用于 3A 和调参；链接选项为 -lrkaiq |
| **uAPI / uAPI2** | 两代 rkaiq 用户空间接口；新代码应使用 uAPI2（rk_aiq_user_api2_*.h） |
| **AINR** | AI 降噪；相关 IQ 文件位于 iqfiles/isp35/ainr/ 下 |
| **AI-ISP** | 使用 NPU 增强 ISP 输出；在本板上禁用（RK_AIISP_MODEL=NONE） |

### AI / NPU

| 术语 | 含义 |
| --- | --- |
| **NPU** | 集成在 RV1126B 中的神经处理单元 |
| **RKNN** | Rockchip 神经网络模型格式和运行时（.rknn + librknnrt.so） |
| **RKNN-Toolkit2** | PC 端模型转换工具，适用于 x86_64 / Python；**不包含在 SDK 中**，需单独安装。内部基线版本：2.3.2 |
| **rknn-toolkit-lite2** | 设备端 Python 推理封装，仅适合验证用途。生产应用中请使用 C API |
| **RKLLM** | Rockchip 大语言模型运行时（.rkllm + librkllmrt.so） |
| **rkllm-toolkit** | 位于 media/rknn-llm-mk/rknn-llm/rkllm-toolkit/ 下的 PC 端 LLM 转换工具 |
| **ROCKIVA** | 打包的 Rockchip 视觉算法（人 / 人脸 / 宠物检测等）；链接选项为 -lrockiva |
| **RKAI** | 位于 project/app/rkai/ 下的 Rockchip AI 封装，覆盖 LLM 和 VLM 工作流 |
| **VLM** | Vision-Language Model；用于图像和文本的多模态模型 |
| **TTFT** | Time To First Token，RKLLM 的基准测试指标 |
| **RKNN_NPU_CORE_x** | NPU 核分配掩码（AUTO / 0 / 0_1 / 0_1_2） |
| **INT8 quantization / calibration set** | 量化使用具有代表性的图像列表；请将校准集与验证集分开 |

### 网络与流媒体

| 术语 | 含义 |
| --- | --- |
| **rkipc** | Rockchip IPC 参考应用；reCamera Pro 主应用（recamera_ipc）基于它实现 |
| **go2rtc** | 开源流媒体网关，将内部 RTSP 转换为 WebRTC / HLS 等；以预编译二进制形式随 overlay 提供 |
| **RTSP** | 实时流传输协议。内部源为 127.0.0.1:5554；外部端口 :554 按需启用 |
| **WebRTC** | 基于浏览器的实时音视频；go2rtc 监听 :8555 端口 |
| **ONVIF** | 由 recamera_onvif 实现的网络设备互操作标准 |
| **ttyd** | 通过网页在端口 7681 暴露终端 |
| **main / sub stream** | 与 live/0 和 live/1 对应的 go2rtc 流名称 |

### reCamera 服务

| 术语 | 含义 |
| --- | --- |
| **gmgr** | GPIO Manager：Rust 编写的 GPIO HTTP / WebSocket 服务，监听端口 8080 和 /dev/shm/gmgr.sock |
| **skt2ws** | 将 rkipc-record-events 转发的 Socket-to-WebSocket 桥接服务 |
| **tmir** | TTY Mirror；将串口 ttyS4 流量复用到 socket / WebSocket |
| **rcisd** | reCamera Intellisense 守护进程，用于事件排队和文件传输 |
| **RkLunch.sh** | 位于 /oem/usr/bin/ 下的系统级应用启动入口 |
| **vigil** | 位于 recamera_ipc/common/vigil* 下的模块；依赖 protobuf 和 libblkid |
| **VQE** | Voice Quality Enhancement，音频前端算法（AEC / ANS / AGC） |
| **AEC** | Acoustic Echo Cancellation；需要扬声器参考信号（asound.conf 中的 Ch4） |
| **dsnoop** | ALSA 共享采集插件，使多个进程可以读取同一个硬件设备 |
| **KWS / ASR** | Keyword Spotting / Automatic Speech Recognition；对应的虚拟设备为 ai_kws / ai_asr |

## 文档地图

docs/ 目录包含 **90 个 PDF 文件**：52 个中文和 38 个英文。中文文档集更完整，因此**请优先查看中文文档**。

### 按语言与主题统计

| 主题 | 中文（docs/zh/） | 英文（docs/en/） |
| --- | --- | --- |
| audio/ | 6 | 6 |
| bsp/ | 17 | 15 |
| ipc/ | 3 | 3 |
| isp/ | 8 | **2** |
| media/ | 9 | 7 |
| npu_iva/ | 1 | **0（目录缺失）** |
| security/ | 3 | 3 |
| wifibt/ | 3 | **0（目录缺失）** |
| 根目录 | — | 2（Bug System，SDK Application and Synchronization） |

仅提供中文的重要文档包括 ROCKIVA SDK、完整的 Wi-Fi / Bluetooth 文档集、大部分 ISP 调参和驱动指南、EIS / DIS、系统休眠、RGB_MCU、SDMMC / SDIO / eMMC，以及除 AVS 标定外的一些多媒体文档。对于海外客户文档，请翻译这些材料，或清楚说明不包含英文版本。

### 按任务查找文档

| 我想要…… | 阅读 |
| --- | --- |
| 从 SDK 入门 | docs/zh/ipc/Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf |
| 构建视频处理流水线 | docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf |
| 查阅 MPI API | docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf |
| 调整图像质量 / 更换传感器 | docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf, Rockchip_Development_Guide_ISP35_CN.pdf |
| 开发摄像头驱动 | docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf, Rockchip_Driver_Guide_VI_CN.pdf |
| 标定畸变校正 | docs/zh/isp/Rockchip_Development_Guide_FEC_CN.pdf；AVS 相关见 docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_*_CN.pdf |
| 开发红外热成像 | docs/zh/isp/Rockchip_Development_Guide_IRFPA_CN.pdf |
| 排查视频编码问题 | docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf |
| 低功耗 / 电池供电 IPC | docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf, docs/zh/wifibt/Rockchip_Developer_Guide_Linux_Low_Power_Wi-Fi_CN.pdf |
| 快速启动 | docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf, docs/zh/isp/Rockchip_ISP_Tuning_Guide_for_Thunder_Boot_CN.pdf |
| 视觉算法 | docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf |
| 音频编解码 | docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf |
| 回声消除 / 降噪 | docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf |
| 麦克风阵列测试 | docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf |
| 音频问题排查 | docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf |
| Wi-Fi / Bluetooth | docs/zh/wifibt/Rockchip_Developer_Guide_Linux_WIFI_BT_CN.pdf |
| GPIO | docs/zh/bsp/RV1126B_User_Manual_GPIO.pdf, RV1126B-P_User_Manual_GPIO.pdf |
| I2C / SPI / PWM / USB / WDT | docs/zh/bsp/ 目录下名称对应的指南 |
| eMMC / SD | docs/zh/bsp/Rockchip_Developer_Guide_SDMMC_SDIO_eMMC_CN.pdf |
| 开源烧录方案 | docs/zh/bsp/Rockchip_Developer_Guide_Linux_Flash_Open_Source_Solution_CN.pdf |
| 温控 / 频率调节 | docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf, Rockchip_Developer_Guide_CPUFreq_CN.pdf, Rockchip_Developer_Guide_Devfreq_CN.pdf |
| 挂起与恢复 | docs/zh/bsp/Rockchip_RV1126B_Developer_Guide_System_Suspend_CN.pdf |
| 显示 | docs/zh/bsp/Rockchip_Developer_Guide_DRM_Display_Driver_CN.pdf |
| CAN 总线 | docs/zh/bsp/Rockchip_Developer_Guide_CAN_FD_CN.pdf |
| MCU 开发 | sysdrv/source/mcu/docs/Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf（也在 SDK 根目录中有链接） |
| U-Boot | docs/zh/bsp/Rockchip_Developer_Guide_UBoot_Nextdev_CN.pdf |
| 安全启动 / OTP / TEE | docs/zh/security/ 目录下的三份文档 |
| 厂商存储（序列号等） | docs/en/bsp/Rockchip_Application_Notes_VendorStorage_EN.pdf（**仅英文**） |
| RKLLM | media/rknn-llm-mk/rknn-llm/doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf |
| RKIPC 应用 | project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md（V1.7.6，Markdown） |
| RKAI 应用 | project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md |
| 烧录工具 | tools/linux/Linux_Upgrade_Tool/命令行开发工具使用文档.pdf |
| 所有配置选项 | project/cfg-all-items-introduction.txt |
| 提交 Rockchip 问题单 | docs/en/Rockchip_User_Guide_Bug_System_EN.pdf |
| SDK 申请与同步 | docs/en/Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf |

SDK 根目录还包含一些常用文档的符号链接：`Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_{CN,EN}.pdf`、Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf、Copyright_Statement.md、RECAMERA2-IPC-RELEASE-NOTES.md 和 RK-RELEASE-NOTES-IPC.txt。

## 版权与合规

### Rockchip 版权声明

docs/Copyright_Statement.md（在 SDK 根目录中也有链接）：

> Copyright(C) 2024 Rockchip Electronics Co., Ltd. All rights reserved.
>
> ROCKCHIP SOFTWARE 按“原样”提供，不附带任何明示或暗示的担保，包括但不限于所有权、适销性、针对特定用途的适用性或不侵权。Rockchip 不对任何第三方、开源或基于标准的技术提供担保。接收方有责任从各自权利人处获取所有所需的许可和权利。接收方唯一且排他的救济措施，以及 Rockchip 的全部累计责任，将由 Rockchip 自行选择：要么修改或替换相关的 ROCKCHIP SOFTWARE，要么退还接收方已支付的费用。

实际影响：

- SDK 中的 Rockchip 组件按 **原样** 提供。如果出现问题，请自行排查或向 Rockchip 提交 issue。
- **我们负责梳理第三方许可证。** SDK 包含大量第三方软件（bluez 5.77、wpa_supplicant、hostapd、openssl、libnl、freetype、libjpeg、libpng、zlib、go2rtc、ttyd、syslog-ng、vsftpd、React 生态、Rust crates 等）。在产品发布前，请逐一审查各组件的 GPL / LGPL / Apache / MIT / BSD 合规义务。
- docs/ 下的 Rockchip PDF 带有保密标识（很多标为 “Public”），但在分发前 **请确认其密级**。不要分发标记为 “Internal” 的资料。

### SDK 组件的许可证

| 组件 | 许可证 |
| --- | --- |
| media/mpp/ | 参见 media/mpp/mpp/LICENSES/（Apache-2.0 和 MIT） |
| sysdrv/source/kernel/ | GPL-2.0（参见 COPYING 和 LICENSES/） |
| sysdrv/source/uboot/ | GPL-2.0+ |
| Buildroot | GPL-2.0；每个软件包可能有自己的许可证 |
| project/app/recamera_ipc/ | 包含 LICENSE 文件；请遵守其中条款 |
| project/app/rkai/ | 包含 LICENSE 文件；请遵守其中条款 |
| Rockchip 二进制库（librknnrt.so、librockiva.so、rkaiq、IQ 文件等） | Rockchip 专有许可证，随 SDK 一同分发 |

### 在对外发布本 Wiki 之前

- **本 Wiki 为 Seeed 内部资料。** 在公开发布之前（例如发布到 wiki.seeedstudio.com），请移除内部 GitLab 地址（iteam-gitlab.seeed.cn）、内部路径、硬件细节（如板卡 ID 电阻电平）、产测工具以及未公开的产品规划。
- **不要将 Rockchip PDF 上传到公共网站。** 请链接到 Rockchip 官方发布渠道，或说明“可向 Seeed / Rockchip 索取”。
- 不要在公开文档中暴露默认密码、root SSH 登录策略或 PAM 锁定参数。[Device Access and Debugging](/cn/recamera_pro_bsp_device_debug/) 包含此类细节，必须为公开版本进行删减。
- 请咨询法务，确认 Seeed 自研组件（recamera_*）的对外授权策略。

## 缩写参考

| 缩写 | 全称 |
| --- | --- |
| BSP | 板级支持包（Board Support Package） |
| IPC | 网络摄像机（IP Camera） |
| MPI | 媒体处理接口（Media Process Interface） |
| MPP | 媒体处理平台（Media Process Platform） |
| ISP | 图像信号处理器（Image Signal Processor） |
| NPU | 神经网络处理单元（Neural Processing Unit） |
| RGA | 光栅图形加速（Raster Graphic Acceleration） |
| IVA | 智能视频分析（ROCKIVA）（Intelligent Video Analysis (ROCKIVA)） |
| AOV | Always-On Vision（始终在线视觉） |
| CVR | 行车记录仪（Car Video Recorder） |
| ONVIF | 开放网络视频接口论坛（Open Network Video Interface Forum） |
| OTA | 空中升级（Over-The-Air update） |
| DTBO | 设备树 Blob 覆盖（Device Tree Blob Overlay） |
| CMA | 连续内存分配器（Contiguous Memory Allocator） |
| AEC / ANS / AGC | 回声消除 / 噪声抑制 / 自动增益控制（Acoustic Echo Cancellation / Acoustic Noise Suppression / Automatic Gain Control） |
| KWS / ASR | 关键词唤醒 / 自动语音识别（Keyword Spotting / Automatic Speech Recognition） |
| TTFT | 首个 Token 时间（Time To First Token） |
| UVC | USB 视频类（USB Video Class） |
| VQE | 语音质量增强（Voice Quality Enhancement） |
| AHD | 模拟高清（Analog High Definition） |

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
