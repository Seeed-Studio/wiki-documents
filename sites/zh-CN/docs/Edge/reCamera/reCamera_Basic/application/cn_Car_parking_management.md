---
title: 使用 reCamera 的 AI 车位监控演示
description: 本维基介绍了一个基于 AI 的车位监控演示项目，使用 reCamera 实现车位实时空闲检测与可视化展示。
keywords:
  - 车位检测
  - reCamera
  - AI 边缘视觉
  - 智慧停车
slug: /ai_parking_slot_monitoring_demo_with_recamera_bak
sku: 100029708,102991896
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 3
last_update:
  date: 2025-12-17
  author: John Xiang
createdAt: '2025-12-31'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/application/ai_parking_slot_monitoring_demo_with_recamera_bak/
---

# 使用 reCamera 的 AI 停车管理演示

## 介绍

在**商业停车场**、**住宅车库**、**产业园区**以及**校园停车管理**等场景中，车位空闲情况是一个常见需求，运营方和用户都希望能够快速了解哪些车位已被占用、哪些仍然空闲。

本项目提供了一个开箱即用的演示，重点展示以下应用能力：

- **车位检测**：检测摄像机视野中每个车位的占用状态。
- **防抖 / 稳定**：减少画面抖动和短期检测波动，使结果更加稳定。
- **计数与汇总**：自动汇总当前停车状态，例如空闲车位数量。
- **屏幕可视化**：在预览界面上直接显示检测结果和车位状态，便于快速验证和演示。


## 硬件准备

要运行此停车管理演示，只需要**一台 reCamera 设备**。  
所有 reCamera 型号均受支持。

你可以根据部署需求选择**任意版本的 reCamera**：

- reCamera 2002 系列（Wi-Fi）
- reCamera Gimbal（云台）
- reCamera HQ PoE（以太网 + PoE）

> **注意：**  
> PoE 版本不支持 Wi-Fi，必须通过支持 PoE 的交换机接入同一局域网。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 演示搭建 
### 步骤 1：配置 reCamera

首先，请按照官方入门指南完成 reCamera 的基础配置：[reCamera 基础配置](https://wiki.seeedstudio.com/cn/recamera_getting_started/)

完成初始设置后，请确保设备已正确上电并连接到网络。  
然后，访问 reCamera 管理界面，进入 **Node-RED workflow** 页面。

如果你能够成功访问如下所示的 Node-RED workflow 界面，则说明配置已成功完成。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### 步骤 2：下载并上传工作流文件

本演示提供了一个**预配置的工作流文件**，其中已设置好所有所需的节点和连接。  
你**不需要**手动创建或配置任何 Node-RED 节点。

请从我们的 **SenseCraft AI 平台**下载该工作流文件，然后直接导入到 reCamera 中。关于 SenseCraft AI 教程，请参考链接 [Access SenseCraft AI reCamera Dashboards](https://wiki.seeedstudio.com/cn/recamera_getting_started/#access-recamera-preview-dashboard)。  

导入工作流后：

- 所有检测、可视化和数据处理节点都将准备就绪。
- 无需额外的参数配置。
- 部署完成后即可立即启动演示。

当工作流成功上传并部署后，reCamera 会在后台自动开始运行车位监控演示。该工作流被设计为一个**端到端的车位监控流水线**，完全在 reCamera 上运行。其高层逻辑如下：

1. **视频输入**  
   摄像头持续采集视频帧并将其发送到 AI 推理节点。

2. **AI 检测**  
   检测模型识别与停车相关的目标，并输出带有类别标签（`free` / `car`）和置信度分数的边界框。

3. **车位关联与稳定**  
   - 使用 **IoU（Intersection over Union，交并比）** 在帧间匹配检测框。
   - 每个车位只有在连续若干帧被稳定检测到后，才会进入*稳定状态*。
   - 对短期漏检进行容忍，以避免错误的状态切换。

4. **车位池管理**  
   - 每个车位以其位置、状态历史和稳定计数器的形式存储在车位池中。
   - 长时间消失的车位会被自动移除。

5. **可视化层**  
   - 将边界框、中心标记、标签和状态面板渲染为 SVG 覆盖层。
   - 可视化通过 WebSocket 实时更新。

6. **自动后台运行**  
   一旦部署完成，工作流会在后台自动运行，无需手动触发。

检测结果如下图所示：

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
</div]
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test5.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test6.jpg" />
</div>


从显示的结果中，你可以观察到以下元素：

- **边界框**  
  每个车位都关联到一个检测区域。系统根据 AI 模型输出将每个区域分类为 `free` 或 `car`。

- **中心标记（圆形）**  
  在每个*稳定*车位的中心绘制一个圆形标记。  
  - **绿色圆形**表示空闲车位  
  - **红色圆形**表示已占用车位  

- **车位标签与坐标**  
  每个车位都会被标记（例如 `Slot1`、`Slot2`、`Slot3`），并附带其中心坐标 `(x, y)`。  
  这些标签会根据你在 Node-RED 中提供的车位名称列表进行映射。

- **状态面板（左上角）**  
  叠加面板会汇总整体状态：
  - **Monitoring Slots**：当前正在跟踪的所有车位
  - **Free Slots**：经过多帧验证后确认空闲的车位

系统采用多帧稳定机制，以避免因临时遮挡、光照变化或检测噪声导致的结果闪烁。
:::note
当前的车位检测逻辑是专门为**并排排列的三个相邻车位**设计的。在本演示中，**reCamera 安装在车位前方**，正对车辆，而不是采用俯视（鸟瞰）视角。  

因此，车位关联、中心点定位以及稳定性逻辑都针对**正面视角**进行了优化。如果你计划使用顶视摄像头或不同的车位布局，则可能需要相应调整车位映射和检测逻辑。
:::


## 技术支持与产品讨论

感谢你选择我们的产品！如果你在特定定制目标方面需要指导，或希望进一步扩展工作流，欢迎随时联系我们。我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
