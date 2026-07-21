---
title: 使用 reCamera 的 AI 停车位监控演示
description: 本文档介绍了使用 reCamera 的基于 AI 的停车位监控演示，展示了实时停车位可用性检测和可视化功能。
keywords:
  - Parking Slot Detection
  - reCamera
  - AI Edge Vision
  - Smart Parking
slug: /ai_parking_slot_monitoring_demo_with_recamera
sku: 100029708,102991896
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 3
last_update:
  date: 2025-12-17
  author: John Xiang
createdAt: '2025-12-31'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/cn/ai_parking_slot_monitoring_demo_with_recamera/
---

# 使用 reCamera 的 AI 停车管理演示

## 简介

停车位可用性是**商业停车场**、**住宅车库**、**工业园区**和**校园停车管理**等场景中的常见需求，运营商和用户希望快速了解哪些车位被占用或可用。

本项目提供了一个开箱即用的演示，专注于以下应用功能：

- **停车位检测**：检测摄像头视野内每个停车位的占用状态。
- **防抖动/稳定化**：减少视觉抖动和短期检测波动，使结果更加稳定。
- **计数和汇总**：自动汇总当前停车状态，如可用车位数量。
- **屏幕可视化**：直接在预览界面上显示检测结果和车位状态，便于快速验证和演示。


## 硬件准备

要运行此停车管理演示，只需要**一台 reCamera 设备**。  
支持所有 reCamera 变体。

您可以根据部署需求选择**任何版本的 reCamera**：

- reCamera 2002 系列（Wi-Fi）
- reCamera Gimbal（云台）
- reCamera HQ PoE（以太网 + PoE）

> **注意：**  
> PoE 版本不支持 Wi-Fi，必须通过支持 PoE 的交换机连接到同一本地网络。

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 设置演示 
### 步骤 1：配置 reCamera

首先，请按照官方入门指南完成 reCamera 的基本配置：[reCamera 基本配置](https://wiki.seeedstudio.com/cn/recamera_getting_started/)

完成初始设置后，确保设备已通电并正确连接到网络。  
然后，访问 reCamera 管理界面并进入 **Node-RED 工作流**页面。

如果您能成功访问如下所示的 Node-RED 工作流界面，说明配置已成功完成。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### 步骤 2：下载并上传工作流文件

此演示提供了一个**预配置的工作流文件**，其中已经设置好了所有必需的节点和连接。  
您**无需**手动创建或配置任何 Node-RED 节点。

请从我们的 **SenseCraft AI 平台**下载工作流文件，然后直接导入到 reCamera 中。有关 Sensecraft AI 教程，请参考链接 [访问 SenseCraft AI reCamera 仪表板](https://wiki.seeedstudio.com/cn/recamera_getting_started/#access-recamera-preview-dashboard)。  

导入工作流后：

- 所有检测、可视化和数据处理节点都将准备就绪。
- 无需额外的参数配置。
- 部署后可立即启动演示。

工作流成功上传并部署后，reCamera 将自动开始在后台运行停车位监控演示。此工作流设计为**端到端停车位监控管道**，完全在 reCamera 上运行。高级逻辑如下：

1. **视频输入**  
   摄像头持续捕获视频帧并将其发送到 AI 推理节点。

2. **AI 检测**  
   检测模型识别停车相关对象，并输出带有类别标签（`free` / `car`）和置信度分数的边界框。

3. **车位关联和稳定化**  
   - 使用 **IoU（交并比）**在帧间匹配检测到的边界框。
   - 每个车位只有在连续检测到固定帧数后才进入*稳定状态*。
   - 容忍短期遗漏以防止错误的状态变化。

4. **车位池管理**  
   - 每个停车位都存储在车位池中，包含其位置、状态历史和稳定性计数器。
   - 消失时间过长的车位会自动移除。

5. **可视化层**  
   - 边界框、中心标记、标签和状态面板以 SVG 叠加层的形式渲染。
   - 可视化通过 WebSocket 实时更新。

6. **自动后台执行**  
   部署后，工作流在后台自动运行，无需手动触发。

检测结果如下所示：

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test1.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test2.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test3.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test4.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test5.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test6.jpg" />
</div>


从显示的结果中，您可以观察到以下元素：

- **边界框**  
  每个停车位都与一个检测区域相关联。系统根据 AI 模型输出将每个区域分类为 `free` 或 `car`。

- **中心标记（圆圈）**  
  在每个*稳定*停车位的中心绘制一个圆圈。  
  - **绿色圆圈**表示空闲车位  
  - **红色圆圈**表示被占用车位  

- **车位标签和坐标**  
  每个车位都标有标签（例如 `Slot1`、`Slot2`、`Slot3`）以及其中心坐标 `(x, y)`。  
  这些标签从您通过 Node-RED 提供的车位名称列表映射而来。

- **状态面板（左上角）**  
  叠加面板汇总整体状态：
  - **Monitoring Slots**：当前正在跟踪的所有车位
  - **Free Slots**：经过多帧验证确认为空闲的车位

系统使用多帧稳定化机制来避免由临时遮挡、光照变化或检测噪声引起的闪烁结果。
:::note
当前的停车位检测逻辑专门设计用于**三个并排相邻的停车位**。在此演示中，**reCamera 安装在停车位前方**，直接面向车辆，而不是使用俯视（鸟瞰）视角。  

因此，车位关联、中心点定位和稳定性逻辑针对**前视视角**进行了优化。如果您计划使用俯视摄像头或不同的停车布局，可能需要相应调整车位映射和检测逻辑。
:::


## 技术支持与产品讨论

感谢您选择我们的产品！如果您需要特定定制目标的指导或想要进一步扩展工作流，请随时联系我们。我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
