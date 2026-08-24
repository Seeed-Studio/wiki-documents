---
title: 在 reCamera 上进行 YOLO11n 基准测试
description: 本应用案例展示了在 reCamera 边缘计算平台上运行最新 YOLO11n 模型时的极致性能表现和实测数据。
keywords:
  - reCamera
  - 边缘 AI
  - YOLO11
  - 基准测试
slug: /recamera_benchmarking
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif
sidebar_position: 1
last_update:
  date: 2026-06-02
  author: Sizhao zhou
createdAt: '2026-06-02'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/cn/recamera_benchmarking/
---

# reCamera 上的 YOLO11n 边缘基准测试

## 1. 介绍

随着边缘 AI 场景的不断深入，如何在极其有限的功耗下运行新一代视觉模型，已经成为开发者的核心诉求。本 WIKI 将硬核展示 **reCamera** 在部署 **YOLO11n** 模型时的基线性能（Benchmark）。
在这里，你将看到 reCamera 如何仅凭 **1.5W** 功耗，流畅驱动 YOLO11n 目标检测和实例分割模型。

---

## 硬件准备

- 一台 reCamera
- 一台 PC

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera 云台</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

---

## 2. 实时效果展示

眼见为实。我们在 reCamera 本地运行 YOLO11n 检测和分割模型，并通过 UDP 协议将处理后的视频和计算数据实时推流到 PC。

屏幕左上角的 OSD 信息实时显示严谨的硬件耗时拆分：**预处理（Pre-process）**、**推理（Inference）**、**后处理（Post-process）** 以及 **总计（Total）** 耗时。

### YOLO11n 实例分割实时推流
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-seg.gif" alt="YOLO11n 分割演示" />
</div>
<br/>

### YOLO11n 目标检测实时推流
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/yolo-benchmark-detect.gif" alt="YOLO11n 检测演示" />
</div>

:::note 测试说明
以上动图为实际屏幕录制。测试结果受模型输入分辨率（640x640）和量化精度（INT8）的影响，仅供工程部署参考。
:::

---


## 3. 核心基准测试结果

在长时间满载压力测试下，reCamera 展现出了极其优秀的“性能功耗比”。以下是 YOLO11n INT8 量化模型在 NPU 上的极限性能表现：

| 模型任务类型 | 输入分辨率 | 量化格式 | 峰值帧率（FPS） | 单帧端到端时延 | 平均运行功耗 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **YOLO11n 目标检测** | 640 x 640 | INT8 | **20 FPS** | **50 ms** | **1.5 W** |
| **YOLO11n 实例分割** | 640 x 640 | INT8 | **10 FPS** | **100 ms** | **1.5 W** |

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_information.png" alt="YOLO11n 基准测试" />
</div>

:::info 📊 测试单位与指标说明
* **FPS（Frames Per Second，帧每秒）**：指设备**每秒可处理的图像帧数**。20 FPS 表示系统在 1 秒内可以连续完成 20 次图像 AI 识别，数值越大，实时监控画面越流畅。
* **ms（Milliseconds，毫秒）**：即 1 秒的千分之一。此处指**处理单张图像的端到端总耗时**。50 ms 表示设备处理一帧视频（包括预处理、NPU 推理、后处理及其他所有步骤）最少仅需 ***0.05 秒***。
* **W（Watt，瓦特）**：设备功耗的计量单位。此处 1.5W 指 reCamera 整机在满载运行 AI 模型时的平均功耗。
:::

### 💡 深度数据解读
* **极致能效比**：1.5W 的功耗几乎等同于普通单板机的待机功耗，但 reCamera 在此功耗下即可实现 20 FPS/S 的检测帧率，非常契合电池供电或远距离 PoE 供电的户外监控场景。
* **时延表现**：检测模型最低 50ms 的超低端到端时延，意味着可以轻松捕捉快速运动目标；而分割模型在增加高负载的 Mask 解码算子后，仍能保持最高 10 FPS/S 的流畅体验。

---


## 4. 上手实战：复现基准测试

如果你已经拥有 reCamera 设备，只需几个简单步骤，就可以在本地轻松复现上述测试结果。

### 步骤 1：获取基准测试可执行文件和模型
首先，通过下方链接下载编译好的 bin 文件、转换后的 `.cvimodel` 模型文件以及 python 脚本：

```bash
[https://drive.google.com/drive/folders/10QfxxT2BkIVX3-DojtMnnyvPfwMESC_6?usp=drive_link](https://drive.google.com/drive/folders/10QfxxT2BkIVX3-DojtMnnyvPfwMESC_6?usp=drive_link)
```

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_list.png" alt="YOLO11n 列表" />
</div>

### 步骤 2：将文件上传到 reCamera 设备
将下载好的 bin 文件和模型文件上传到 reCamera 设备的 /userdata/ 目录下。
<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Applications/yolo_benchmark/recamera_benchmark_userdata.png" alt="YOLO11n 用户数据" />
</div>

### 步骤 3：运行基准测试
在 reCamera 设备上运行以下命令，启动基准测试：

```bash
# The first parameter is the model file path, and the second parameter is the IP address of the streaming target
./recamera_benchmark ./yolo11n_detection_cv181x_int8.cvimodel 192.168.4.35
```

如果你想查看测试结果，可以在 Windows 终端上运行以下命令，运行 udp 脚本以接收 reCamera 的视频流：
```bash
python.exe .\yolo_udp.py
```

---


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>