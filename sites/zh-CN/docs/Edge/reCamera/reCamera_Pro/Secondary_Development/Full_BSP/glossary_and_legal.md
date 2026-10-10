---
description: Look up SDK terminology, bundled technical documents, and licensing information.
title: Glossary, Documentation Map, and Licensing
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
url: https://wiki.seeedstudio.com/recamera_pro_sdk_reference/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Glossary, Documentation Map, and Licensing

## Glossary

### Platform and Hardware

| Term | Meaning |
| --- | --- |
| **RV1126B** | Rockchip IPC-focused SoC with an NPU and ISP35. Main chip in reCamera Pro; RK_CHIP=rv1126b, RK_ARCH=arm64 |
| **RV1126BP** | RV1126B package / derivative variant used by some EVB board configurations |
| **RK801** | PMIC used by reCamera Pro |
| **RK817** | PMIC with an integrated audio codec (CONFIG_SND_SOC_RK817=y) |
| **ES7202** | Everest multichannel ADC for microphone-array capture |
| **ISP35** | RV1126B ISP version; related IQ files are under iqfiles/isp35/ |
| **eMMC** | Onboard storage (RK_BOOT_MEDIUM=emmc) |
| **Maskrom** | Download mode built into the SoC ROM; flashing entry point (USB VID 2207) |
| **loader / idblock** | DDR initialization and first-stage bootloader; outputs include idblock.img and download.bin |
| **board ID** | Baseboard / expansion-board variant detected through ADC resistor-divider levels; result is written to /run/board_id.env |
| **DTBO** | Device Tree Blob Overlay, used at runtime to support multiple hardware variants with one firmware image |

### SDK and Build System

| Term | Meaning |
| --- | --- |
| **BSP** | Board Support Package: board-level support including U-Boot, kernel, rootfs, and drivers |
| **BoardConfig** | project/cfg/<series>/BoardConfig-*.mk; the complete set of board parameters for a build |
| **lunch** | Select a BoardConfig; terminology from the Android build system. Generates the .BoardConfig.mk symbolic link |
| **sysdrv** | System-driver component SDK containing U-Boot / kernel / MCU sources; can be built independently with make |
| **media** | Multimedia component SDK containing mpp / rockit / rkaiq / rga / iva, etc.; can be built independently with make |
| **app** | User-space applications under project/app/ |
| **fragment** | Incremental kernel / U-Boot defconfig applied in order on top of the base defconfig |
| **overlay** | Directory of files copied over the rootfs during packaging; enabled entries are listed in RK_POST_OVERLAY |
| **IQ file** | Image Quality file containing rkaiq sensor-tuning parameters (JSON) |
| **rootfs** | Buildroot-generated ext4 root filesystem on the 3 G partition |
| **oem** | /oem directory. This board sets RK_BUILD_APP_TO_OEM_PARTITION=n, so it is a regular directory inside rootfs, not a separate partition |
| **userdata** | Writable partition mounted at /userdata; stores configuration and user data and is the default HOME |
| **misc** | Small partition containing recovery / factory-reset flags |
| **RK_APP_TYPE** | Reference application type; this board uses RKIPC_RV1126B_RECAMERA2 |
| **allsave** | all + save; default behavior when ./build.sh is run without arguments |
| **RK_APP_xxx** | Board-configuration switch that controls whether an application is built |
| **MAROC_\*** | Macro family in Makefile.param, including MAROC_COPY_PKG_TO_APP_OUTPUT, MAROC_STRIP_DEBUG_SYMBOL, and MAROC_PKG_RELEASE |

### Multimedia (rockit / MPI)

| Term | Meaning |
| --- | --- |
| **MPI** | Media Process Interface, the unified programming interface for rockit |
| **rockit** | Rockchip MPI runtime implementation; link with -lrockit |
| **MPP** | Media Process Platform, lower-level codec libraries; link with -lrockchip_mpp |
| **VI** | Video Input; capture frames from a sensor through the ISP |
| **VPSS** | Video Process Sub System; multi-channel scaling / cropping / format conversion |
| **VENC / VDEC** | Video encoding / decoding |
| **VO** | Video Output to a display |
| **RGN** | Region module for OSD overlays and watermarks |
| **AI / AO** | Audio In / Audio Out |
| **AENC / ADEC** | Audio encoding / decoding |
| **AVS** | Around View System for multi-camera surround-view stitching |
| **IVS** | Intelligent Video Surveillance for analytics such as motion detection |
| **TDE** | Two Dimensional Engine for 2D acceleration |
| **RGA** | Raster Graphic Acceleration, a 2D accelerator for scaling, NV12↔RGB conversion, and rotation |
| **MB** | Media Buffer / buffer pool |
| **Bind** | RK_MPI_SYS_Bind() connects channels from two modules so data flows automatically |
| **EIS / DIS** | Electronic / digital image stabilization |
| **ePTZ** | Electronic pan-tilt-zoom |
| **SVC** | Scalable Video Coding |
| **AOV** | Always-On Vision, low-power always-on vision |
| **FEC** | Fisheye / distortion-correction hardware (CONFIG_VIDEO_ROCKCHIP_FEC=y) |
| **IRFPA** | Infrared focal-plane array (thermal imaging) |
| **rkaiq** | Rockchip AI ISP engine for 3A and tuning; link with -lrkaiq |
| **uAPI / uAPI2** | Two generations of rkaiq userspace interfaces; new code should use uAPI2 (rk_aiq_user_api2_*.h) |
| **AINR** | AI noise reduction; related IQ files are under iqfiles/isp35/ainr/ |
| **AI-ISP** | Uses the NPU to enhance ISP output; disabled on this board (RK_AIISP_MODEL=NONE) |

### AI / NPU

| Term | Meaning |
| --- | --- |
| **NPU** | Neural Processing Unit integrated in RV1126B |
| **RKNN** | Rockchip neural-network model format and runtime (.rknn + librknnrt.so) |
| **RKNN-Toolkit2** | PC-side model conversion tool for x86_64 / Python; **not included in the SDK** and must be installed separately. Internal baseline: 2.3.2 |
| **rknn-toolkit-lite2** | Python inference wrapper for the device; suitable for validation only. Use the C API in production applications |
| **RKLLM** | Rockchip large-language-model runtime (.rkllm + librkllmrt.so) |
| **rkllm-toolkit** | PC-side LLM conversion tool under media/rknn-llm-mk/rknn-llm/rkllm-toolkit/ |
| **ROCKIVA** | Packaged Rockchip vision algorithms (person / face / pet detection, etc.); link with -lrockiva |
| **RKAI** | Rockchip AI wrapper under project/app/rkai/, covering LLM and VLM workflows |
| **VLM** | Vision-Language Model; multimodal model for image and text |
| **TTFT** | Time To First Token, an RKLLM benchmark metric |
| **RKNN_NPU_CORE_x** | NPU core-allocation mask (AUTO / 0 / 0_1 / 0_1_2) |
| **INT8 quantization / calibration set** | Quantization uses a representative image list; keep the calibration set separate from the validation set |

### Networking and Streaming

| Term | Meaning |
| --- | --- |
| **rkipc** | Rockchip IPC reference application; reCamera Pro main app (recamera_ipc) is based on it |
| **go2rtc** | Open-source streaming gateway that converts internal RTSP to WebRTC / HLS, etc.; supplied as a prebuilt binary in an overlay |
| **RTSP** | Real-Time Streaming Protocol. Internal source 127.0.0.1:5554; external port :554 is enabled as needed |
| **WebRTC** | Browser-based real-time audio/video; go2rtc listens on :8555 |
| **ONVIF** | Network-device interoperability standard implemented by recamera_onvif |
| **ttyd** | Exposes a terminal through a web page on port 7681 |
| **main / sub stream** | go2rtc stream names corresponding to live/0 and live/1 |

### reCamera Services

| Term | Meaning |
| --- | --- |
| **gmgr** | GPIO Manager: Rust GPIO HTTP / WebSocket service on port 8080 and /dev/shm/gmgr.sock |
| **skt2ws** | Socket-to-WebSocket bridge that forwards rkipc-record-events |
| **tmir** | TTY Mirror; multiplexes serial port ttyS4 traffic to a socket / WebSocket |
| **rcisd** | reCamera Intellisense daemon for event queuing and file transfer |
| **RkLunch.sh** | System-wide application startup entry point under /oem/usr/bin/ |
| **vigil** | Module under recamera_ipc/common/vigil*; depends on protobuf and libblkid |
| **VQE** | Voice Quality Enhancement, audio front-end algorithms (AEC / ANS / AGC) |
| **AEC** | Acoustic Echo Cancellation; requires a speaker reference signal (Ch4 in asound.conf) |
| **dsnoop** | ALSA shared-capture plugin that lets multiple processes read one hardware device |
| **KWS / ASR** | Keyword Spotting / Automatic Speech Recognition; corresponding virtual devices are ai_kws / ai_asr |

## Documentation Map

The docs/ directory contains **90 PDF files**: 52 Chinese and 38 English. The Chinese set is more complete, so **check it first**.

### Counts by Language and Topic

| Topic | Chinese (docs/zh/) | English (docs/en/) |
| --- | --- | --- |
| audio/ | 6 | 6 |
| bsp/ | 17 | 15 |
| ipc/ | 3 | 3 |
| isp/ | 8 | **2** |
| media/ | 9 | 7 |
| npu_iva/ | 1 | **0 (directory absent)** |
| security/ | 3 | 3 |
| wifibt/ | 3 | **0 (directory absent)** |
| Root directory | — | 2 (Bug System, SDK Application and Synchronization) |

Important documents available only in Chinese include the ROCKIVA SDK, the full Wi-Fi / Bluetooth set, most ISP tuning and driver guides, EIS / DIS, System Suspend, RGB_MCU, SDMMC / SDIO / eMMC, and some media documents other than AVS calibration. For overseas customer documentation, translate these materials or clearly state that no English version is included.

### Find a Document by Task

| I want to... | Read |
| --- | --- |
| Get started with the SDK | docs/zh/ipc/Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf |
| Build a video pipeline | docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf |
| Look up MPI APIs | docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf |
| Tune image quality / change a sensor | docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf, Rockchip_Development_Guide_ISP35_CN.pdf |
| Develop a camera driver | docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf, Rockchip_Driver_Guide_VI_CN.pdf |
| Calibrate distortion correction | docs/zh/isp/Rockchip_Development_Guide_FEC_CN.pdf; for AVS see docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_*_CN.pdf |
| Develop infrared thermal imaging | docs/zh/isp/Rockchip_Development_Guide_IRFPA_CN.pdf |
| Troubleshoot video encoding | docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf |
| Low-power / battery IPC | docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf, docs/zh/wifibt/Rockchip_Developer_Guide_Linux_Low_Power_Wi-Fi_CN.pdf |
| Fast boot | docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf, docs/zh/isp/Rockchip_ISP_Tuning_Guide_for_Thunder_Boot_CN.pdf |
| Vision algorithms | docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf |
| Audio codec | docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf |
| Echo cancellation / noise reduction | docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf |
| Microphone-array testing | docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf |
| Audio troubleshooting | docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf |
| Wi-Fi / Bluetooth | docs/zh/wifibt/Rockchip_Developer_Guide_Linux_WIFI_BT_CN.pdf |
| GPIO | docs/zh/bsp/RV1126B_User_Manual_GPIO.pdf, RV1126B-P_User_Manual_GPIO.pdf |
| I2C / SPI / PWM / USB / WDT | Guides with matching names under docs/zh/bsp/ |
| eMMC / SD | docs/zh/bsp/Rockchip_Developer_Guide_SDMMC_SDIO_eMMC_CN.pdf |
| Open-source flash solution | docs/zh/bsp/Rockchip_Developer_Guide_Linux_Flash_Open_Source_Solution_CN.pdf |
| Thermal control / frequency scaling | docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf, Rockchip_Developer_Guide_CPUFreq_CN.pdf, Rockchip_Developer_Guide_Devfreq_CN.pdf |
| Suspend and resume | docs/zh/bsp/Rockchip_RV1126B_Developer_Guide_System_Suspend_CN.pdf |
| Display | docs/zh/bsp/Rockchip_Developer_Guide_DRM_Display_Driver_CN.pdf |
| CAN bus | docs/zh/bsp/Rockchip_Developer_Guide_CAN_FD_CN.pdf |
| MCU development | sysdrv/source/mcu/docs/Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf (also linked from the SDK root) |
| U-Boot | docs/zh/bsp/Rockchip_Developer_Guide_UBoot_Nextdev_CN.pdf |
| Secure boot / OTP / TEE | Three documents under docs/zh/security/ |
| Vendor storage (serial number, etc.) | docs/en/bsp/Rockchip_Application_Notes_VendorStorage_EN.pdf (**English only**) |
| RKLLM | media/rknn-llm-mk/rknn-llm/doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf |
| RKIPC application | project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md (V1.7.6, Markdown) |
| RKAI application | project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md |
| Flashing tool | tools/linux/Linux_Upgrade_Tool/命令行开发工具使用文档.pdf |
| All configuration options | project/cfg-all-items-introduction.txt |
| File a Rockchip issue | docs/en/Rockchip_User_Guide_Bug_System_EN.pdf |
| SDK application and synchronization | docs/en/Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf |

The SDK root also has symbolic links to frequently used documents: Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_{CN,EN}.pdf, Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf, Copyright_Statement.md, RECAMERA2-IPC-RELEASE-NOTES.md, and RK-RELEASE-NOTES-IPC.txt.

## Copyright and Compliance

### Rockchip Copyright Statement

docs/Copyright_Statement.md (also linked from the SDK root):

> Copyright(C) 2024 Rockchip Electronics Co., Ltd. All rights reserved.
>
> ROCKCHIP SOFTWARE is provided “AS IS”, without express or implied warranties, including title, merchantability, fitness for a particular purpose, or non-infringement. Rockchip gives no warranty for third-party, open-source, or standards-based technologies. Recipients are responsible for obtaining all licenses and rights required from the respective owners. The recipient's sole and exclusive remedy, and Rockchip's entire cumulative liability, is, at Rockchip's option, to revise or replace the relevant ROCKCHIP SOFTWARE or refund the fees paid by the recipient.

Practical implications:

- Rockchip components in the SDK are provided **AS IS**. If something fails, investigate it yourself or file an issue with Rockchip.
- **We are responsible for clearing third-party licenses.** The SDK includes substantial third-party software (bluez 5.77, wpa_supplicant, hostapd, openssl, libnl, freetype, libjpeg, libpng, zlib, go2rtc, ttyd, syslog-ng, vsftpd, the React ecosystem, Rust crates, etc.). Before product distribution, review each component for GPL / LGPL / Apache / MIT / BSD compliance obligations.
- Rockchip PDFs under docs/ have confidentiality markings (many are marked “Public”), but **confirm the classification before distribution**. Do not redistribute material marked “Internal”.

### Licenses for SDK Components

| Component | License |
| --- | --- |
| media/mpp/ | See media/mpp/mpp/LICENSES/ (Apache-2.0 and MIT) |
| sysdrv/source/kernel/ | GPL-2.0 (see COPYING and LICENSES/) |
| sysdrv/source/uboot/ | GPL-2.0+ |
| Buildroot | GPL-2.0; each package may have its own license |
| project/app/recamera_ipc/ | Includes a LICENSE file; follow its terms |
| project/app/rkai/ | Includes a LICENSE file; follow its terms |
| Rockchip binary libraries (librknnrt.so, librockiva.so, rkaiq, IQ files, etc.) | Rockchip proprietary license, distributed with the SDK |

### Before Publishing This Wiki Externally

- **This Wiki is internal Seeed material.** Before publishing it publicly (for example, on wiki.seeedstudio.com), remove internal GitLab addresses (iteam-gitlab.seeed.cn), internal paths, hardware details such as board-ID resistor levels, production-test tools, and unpublished product plans.
- **Do not upload Rockchip PDFs to public sites.** Link to official Rockchip distribution channels or say “request from Seeed / Rockchip”.
- Do not expose default passwords, root SSH login policy, or PAM lockout parameters in public documentation. [Device Access and Debugging](/recamera_pro_bsp_device_debug/) includes such details and must be trimmed for a public version.
- Ask Legal to confirm the external licensing policy for Seeed-developed components (recamera_*).

## Abbreviation Reference

| Abbreviation | Full form |
| --- | --- |
| BSP | Board Support Package |
| IPC | IP Camera |
| MPI | Media Process Interface |
| MPP | Media Process Platform |
| ISP | Image Signal Processor |
| NPU | Neural Processing Unit |
| RGA | Raster Graphic Acceleration |
| IVA | Intelligent Video Analysis (ROCKIVA) |
| AOV | Always-On Vision |
| CVR | Car Video Recorder |
| ONVIF | Open Network Video Interface Forum |
| OTA | Over-The-Air update |
| DTBO | Device Tree Blob Overlay |
| CMA | Contiguous Memory Allocator |
| AEC / ANS / AGC | Acoustic Echo Cancellation / Acoustic Noise Suppression / Automatic Gain Control |
| KWS / ASR | Keyword Spotting / Automatic Speech Recognition |
| TTFT | Time To First Token |
| UVC | USB Video Class |
| VQE | Voice Quality Enhancement |
| AHD | Analog High Definition |
