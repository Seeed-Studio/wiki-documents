---
title: 基于 reCamera 的 YOLO11n 基准测试 (Benchmarking)
description: 本应用案例展示了在 reCamera 边缘计算平台上运行最新 YOLO11n 模型的极致性能表现与实测数据。
keywords:
  - reCamera
  - Edge AI
  - YOLO11
  - Benchmark
slug: /recamera_benchmarking
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif
sidebar_position: 1
last_update:
  date: 2026-06-02
  author: Sizhao zhou
createdAt: '2026-06-02'
updatedAt: '2026-06-02'
url: https://wiki.seeedstudio.com/cn/recamera_benchmarking/
---

# 基于 reCamera 的 YOLO11n 边缘端基准测试

## 1. 简介

随着边缘 AI 场景的不断深入，如何在极其有限的功耗下跑通最新一代的视觉模型成为了开发者的核心诉求。本篇 WIKI 将硬核展示 **reCamera** 在部署 **YOLO11n** 模型时的基准性能（Benchmark）。
在这里，你将看到 reCamera 是如何以仅 **1.5W** 的功耗，流畅驱动 YOLO11n 目标检测与实例分割模型的。

---

## 硬件准备

- 一台 reCamera
- 一台电脑

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

---

## 2. 实时效果展示

耳听为虚，眼见为实。我们在 reCamera 上本地运行了 YOLO11n 的检测（Detection）与分割（Segmentation）模型，并通过 UDP 协议将处理后的画面与计算数据实时推流至电脑端显示。

画面左上角的 OSD 信息实时呈现了严苛的硬件耗时拆解：**前处理耗时 (Pre-process)**、**推理耗时 (Inference)**、**后处理耗时 (Post-process)** 以及 **总耗时 (Total)**。

### YOLO11n 实例分割 (Segmentation) 实时推流
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif" alt="YOLO11n Segmentation Demo" />
</div>
<br/>

### YOLO11n 目标检测 (Detection) 实时推流
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-detect.gif" alt="YOLO11n Detection Demo" />
</div>

:::note 测试说明
以上动图为真实录屏效果，测试结果受模型输入分辨率（640x640）及量化精度（INT8）影响，仅供工程部署参考。
:::

---


## 3. 核心基准测试数据 (Benchmark Results)

在长期的满载压力测试下，reCamera 展现出了极其优异的“性能-功耗比”。以下为 YOLO11n INT8 量化模型在 NPU 上的极值性能表现：

| 模型任务类型 | 输入分辨率 | 量化格式 | 峰值运行帧率 (FPS) | 单帧全链路耗时 (Latency) | 平均运行功耗 (Power) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **YOLO11n 目标检测 (Detection)** | 640 x 640 | INT8 | **20 FPS** | **50 ms** | **1.5 W** |
| **YOLO11n 实例分割 (Segmentation)** | 640 x 640 | INT8 | **10 FPS** | **100 ms** | **1.5 W** |

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_information.png" alt="YOLO11n Benchmark" />
</div>

:::info 📊 测试单位与指标说明
* **FPS (Frames Per Second，帧率)**：指设备**每秒钟能处理的画面帧数**。20 FPS 意味着系统在 1 秒内可以连续完成 20 次图像的 AI 识别。数值越大，代表实时监控画面越流畅。
* **ms (Milliseconds，毫秒)**：即千分之一秒，此处指**处理单张图像的端到端总耗时**。50 ms 代表设备处理完一帧画面（包含前处理、NPU 推理、后处理等所有步骤）最低仅需 ***0.05 秒***。
* **W (Watt，瓦特)**：衡量设备耗电量的单位。此处 1.5W 指 reCamera 满载运行 AI 模型时的整机平均功耗。
:::

### 💡 深度数据解析
* **极致能效**：1.5W 的功耗几乎等同于休眠状态下的普通单板计算机，但 reCamera 却能在此功耗下跑出 20 FPS/S 的检测帧率，完美契合电池供电或 PoE 远距离供电的野外监控场景。
* **时延表现**：检测模型最低 50ms 的全链路低时延，意味着它能够轻松捕获快速移动的物体；而分割模型虽然增加了高负载的 Mask 掩码解码算子，依然能保持最高 10 FPS/S 的流畅体验。

---


## 4. 动手实践：复现基准测试

如果您已经拥有了一台 reCamera 设备，只需简单的几个步骤，即可在本地复现上述测试效果。

### 步骤 1：获取 Benchmark 可执行文件与模型
首先，通过下面的链接下载编译好的bin文件和已转换好的 `.cvimodel` 模型文件以及python脚本：

```bash
https://drive.google.com/drive/folders/10QfxxT2BkIVX3-DojtMnnyvPfwMESC_6?usp=drive_link
```
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_list.png" alt="YOLO11n List" />
</div>

### 步骤 2：将文件上传到reCamera设备
将下载的bin文件和模型文件上传到reCamera设备的`/userdata/`目录下。
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_userdata.png" alt="YOLO11n UserData" />
</div>

### 步骤 3：运行基准测试
在reCamera设备上运行以下命令，即可开始基准测试：

```bash
#第一个参数是模型文件路径，第二个参数是推流对象的IP地址
./recamera_benchmark ./yolo11n_detection_cv181x_int8.cvimodel 192.168.4.35
```
如果您想查看测试结果，您可以在windows的终端上运行以下命令来运行udp脚本接收reCamera的视频流：
```bash
python.exe .\yolo_udp.py
```

---


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>