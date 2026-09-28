---
description: 从这里开始——根据你想用 reCamera Pro 完成的任务找到合适的指南。
title: reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro
sku: 10003420
last_update:
  date: 09/21/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/cn/recamera_pro/
---

# 从这里开始

reCamera Pro 是一款基于 Rockchip RV1126B SoC（四核 Cortex-A53 @ 1.2 GHz，3 TOPS NPU）的 AI 相机，配备 4K 摄像头（SC850SL，4K@30FPS）、6 轴 IMU、麦克风输入、1 W 扬声器、16 GB eMMC 和一个 SD 卡槽，以及丰富的扩展接口（GPIO、UART、CAN、MIPI-DSI）。设备上的所有功能——实时预览、AI 检测、事件录像、声音模型训练——都可以通过内置 Web UI 操作，并且可以通过 HTTP API 和原生 SDK 进行更深度集成。

本页是你的任务导航：在下面选择你想完成的任务；如果你是第一次使用，可以按照默认的入门路径进行。

<!-- TODO(O1, per migration map): add real preview screenshot as the capability entry image (from Live Preview page assets); verify all statements in this intro against the shipping firmware before release. -->

## 默认入门路径

第一次使用 reCamera Pro？按顺序完成以下三个步骤：

1. [快速开始：查看你的第一个 AI 检测](/cn/recamera_pro_getting_started/) —— 给设备供电，登录 Web UI，并观看实时检测。
2. [第一个任务：检测并录像](/cn/recamera_pro_first_recording/) —— 将一次检测转换为事件录像并回放。
3. [通过 Wi-Fi 访问设备](/cn/recamera_pro_wifi_access/) —— 从直连模式切换到本地网络。

## 你想做什么？

### 1. 入门

- [查看你的第一个 AI 检测](/cn/recamera_pro_getting_started/)
- [检测并记录你的第一个事件](/cn/recamera_pro_first_recording/)
- [通过 Wi-Fi 访问设备](/cn/recamera_pro_wifi_access/)

### 2. 构建你的应用

- [预览、拍照和手动录像](/cn/recamera_pro_live_preview/)
- [调整图像质量和弱光表现](/cn/recamera_pro_image_quality/) —— 包含 0.3 勒克斯弱光样例 <!-- TODO(O1/B2): link the actual 0.3 lux sample once captured and verified on the image quality page; do not fabricate sample images. -->
- [在外部播放器中观看流（RTSP）](/cn/recamera_pro_rtsp/)
- [设置 OSD 和隐私遮罩](/cn/recamera_pro_osd_masks/)
- [配置检测：类别、阈值和计划](/cn/recamera_pro_ai_inference/)
- [配置事件录像](/cn/recamera_pro_record_settings/) 并[查找录像与管理存储](/cn/recamera_pro_storage/)
- [训练你自己的声音模型](/cn/recamera_pro_acoustic_lab_usage/) 并[通过声音触发抓拍](/cn/recamera_pro_sound_trigger/)
- [向外发送检测结果：MQTT](/cn/recamera_pro_mqtt/) · [HTTP / UART](/cn/recamera_pro_http_uart/)
- [从外部设备触发抓拍](/cn/recamera_pro_uart_usage/)
- [在 Home Assistant 中实现声音触发告警](/cn/recamera_pro_ha_sound_alert/)
- [发起你的第一个 API 调用](/cn/recamera_pro_api_quick_start/)

### 3. 使用你自己的模型

- [选择模型部署路径](/cn/recamera_pro_model_path/)
- [上传并配置 RKNN 模型](/cn/recamera_pro_rknn_upload/)
- [使用 SenseCraft 转换 ONNX 模型](/cn/recamera_pro_sensecraft/)
- [使用 RKNN-Toolkit2 转换模型](/cn/recamera_pro_rknn_model_conversion/)
- [在设备上验证模型性能](/cn/recamera_pro_model_validate/)

### 4. 开发你自己的应用

- [选择开发路径](/cn/recamera_pro_dev_path/)
- [构建一个最小 SDK 应用](/cn/recamera_pro_sdk_setup/)
- [终端、SSH 和调试 UART](/cn/recamera_pro_terminal/)
- [使用 AI 编码代理进行开发](/cn/recamera_pro_development_cpp_skill/)
- [相机 / 音频 / 推理流水线](/cn/recamera_pro_media_dev/)
- 外设：[IMU 数据](/cn/recamera_pro_imu_usage/) · [MIPI-DSI 显示屏](/cn/recamera_pro_mipi_dsi_screen_usage/) · [扬声器与音量](/cn/recamera_pro_speaker_usage/) · [GPIO 引脚](/cn/recamera_pro_gpio_guide/)
- 示例：[倾斜与震动检测](/cn/recamera_pro_imu_tilt_shake_detection/) · [视觉唤醒 + 语音识别](/cn/recamera_pro_visual_wake_stt/)
- [实验性 Debian 13 镜像](/cn/recamera_pro_debian/)

### 5. 部署与维护

- [部署前检查清单](/cn/recamera_pro_deploy_checklist/)
- [网络、时间和访问控制](/cn/recamera_pro_device_info/)
- [备份与恢复配置](/cn/recamera_pro_backup_restore/)
- [固件更新与恢复](/cn/recamera_pro_firmware_update/)

### 6. 参考

- [硬件规格与接口示意图](/cn/recamera_pro_hardware_specifications/)
- [Web UI 字段与按钮索引](/cn/recamera_pro_webui_reference/)
- [模型兼容性与输出格式](/cn/recamera_pro_model_compatibility/)
- [下载与发行说明](/cn/recamera_pro_downloads/)
- [API 参考](/cn/recamera_pro_api_introduction/)

### 7. 故障排查

- [按症状排查问题](/cn/recamera_pro_faqs/)
- [为技术支持收集日志](/cn/recamera_pro_collect_logs/)
- [API 调用故障排查](/cn/recamera_pro_api_faq/)

## 功能一览

<!-- TODO(O1, per migration map "capability status"): build the capability status matrix from the shipping firmware — for each capability (AI detection, event recording, sound training/Acoustic Lab, RTSP streaming, MQTT/HTTP/UART output, external trigger, API), state availability and any known limitations. Sources: Ai_Inference §Feature Overview, Acoustic Lab §Introduction, Live Preview real preview image. Do not invent firmware facts; verify version by version. -->

- **AI 视觉** —— 设备端目标/人形检测，可配置类别、阈值和计划。
- **声音感知** —— Acoustic Lab 用于训练自定义声音模型；声音可触发抓拍和告警。
- **录像** —— 手动录像加基于事件的录像，并带有存储管理。
- **流媒体** —— 在 Web UI 中实时预览，并通过 RTSP 输出到外部播放器。
- **集成** —— HTTP API、MQTT/HTTP/UART 结果输出、GPIO/UART 外部触发、Home Assistant 示例。
- **开发** —— 原生 SDK、AI 编码代理工作流、实验性 Debian 13。

## 接下来去哪里

- 第一次来到这里？请从上面的[默认入门路径](#默认入门路径)开始。
- 要使用你自己的模型？前往[使用你自己的模型](/cn/recamera_pro_model_path/)。
- 要写代码？前往[开发你自己的应用](/cn/recamera_pro_dev_path/)。
- 有什么地方无法正常工作？请查看[故障排查](/cn/recamera_pro_faqs/)。
