---
description: 在 NVIDIA Jetson 上部署使用 YOLO 目标检测和 VLM 行为分析的工业视觉监控演示
title: 工业场景下的工业视觉监控
tags:
  - AI 模型部署
  - YOLO
  - 计算机视觉
  - reComputer
  - 工业
image: https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_no_helmet.png
slug: /industrial_vision_monitoring_on_industrial_bk
last_update:
  date: 07/14/2026
  author: HaoChen
createdAt: '2026-07-13'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/cn/industrial_vision_monitoring_on_industrial_bk/
---

# 工业场景下的工业视觉监控

## 介绍

工业和工地安全依赖于实时了解现场正在发生的事情——而不是事后回看。摄像头无处不在，但大多数系统仍然依赖人工回放审查。**工业视觉 AI** 填补了这一空白：检测工人是否在场、是否佩戴了所需的 PPE（个人防护装备）、画面中是否出现不安全行为，然后在边缘侧立即发出告警。

本 wiki 在 Seeed 工业 Jetson 设备上部署一个参考性的**工业安全监控演示**。USB 摄像头将画面推流到浏览器；**YOLO** 负责人员和 PPE 检测，而 **VLM** 用于分析行为风险。这两类模型都可以互换——该仓库只是一个起点，而不是锁定在某个固定 checkpoint 上。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tr>
    <th>reComputer Industrial J4012</th>
    <th>reServer Industrial J4011</th>
  </tr>
  <tr>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg" style={{width:400, height:'auto'}}/>
      </div>
    </td>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110248-reserver-industrial-j4011-first.jpg" style={{width:400, height:'auto'}}/>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

已在 **reComputer Industrial J4012** 和 **reServer Industrial J4011** 上使用 **JetPack 7.2** 验证。

## 概览

| 层 | 角色 |
| --- | --- |
| YOLO | 人员检测（绿色框）以及缺少安全帽或反光背心等 PPE 违规（红色框） |
| VLM | 场景级行为告警——使用手机、吸烟、跌倒、火焰/烟雾等 |

在浏览器中打开 `http://<jetson-ip>:8080`，即可查看实时 WebRTC 视频、检测叠加层和告警信息流。

## 支持的硬件

| 项目 | 配置 |
| --- | --- |
| **设备** | [reComputer Industrial](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html), [reServer Industrial](https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html) |
| **已验证** | reComputer Industrial J4012, reServer Industrial J4011 · **JetPack 7.2** (L4T 39.2.0) |
| **JetPack** | 已验证 **7.2** · 预期兼容 **6.2** · 低于 6.2 需要手动提供 PyTorch 轮子包 |
| **内存 / 磁盘** | 至少 8 GB 内存 · 8 GB 可用磁盘空间 |
| **摄像头** | USB UVC / V4L2 (`/dev/video*`) |

:::note
已在 **reComputer Industrial J4012** 和 **reServer Industrial J4011** 上使用 **JetPack 7.2** 进行测试。对于其他 Jetson 工业设备，只要 JetPack 版本匹配，即可使用相同步骤。
:::

## 安装

在**目标 Jetson** 上克隆仓库并运行一键脚本：

```bash
git clone https://github.com/xbs0325/industrial-inspection.git
cd industrial-inspection
./run.sh
```

`./run.sh` 会在缺失时复制 `.env`，下载模型，构建 Docker 镜像（首次运行 **15–30 分钟**），并启动容器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_run.png" style={{width:1000, height:'auto'}}/></div>

然后打开：

```text
http://<jetson-ip>:8080
```

:::note
应用完全运行在 Docker 中——默认流程下，无需在宿主机上手动配置 Python 环境。
:::

### JetPack 说明

| JetPack | PyTorch |
| --- | --- |
| **7.2** | 在 Docker 构建过程中自动安装（`TORCH_INDEX_URL=cu130`） |
| **6.2** | 将 `TORCH_INDEX_URL` 设置为你的 CUDA 12.x 索引，或将匹配的轮子包放入 `wheels/` |
| **低于 6.2** | 在运行 `./run.sh` 前，将与 Jetson 匹配的 `torch-*.whl` / `torchvision-*.whl` 放入 `wheels/` |

在修改与 JetPack 相关的文件后，请在目标设备上重新构建：

```bash
./clean.sh && ./run.sh
```

有关轮子包来源，请参阅 [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/cn/install_torch_on_recomputer/)。

:::caution
不要在 JetPack 或 CUDA 版本不同的设备之间复制 Docker 镜像。务必在目标 Jetson 上重新构建。
:::

### 可选的 `.env` 调优

```bash
CAMERA_PIPELINE=sw    # sw (default) or hw
```

## 演示结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_ui_cn.png" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_ui_en.png" style={{width:900, height:'auto'}}/></div>

摄像头推流开始前的空闲界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_phone.png" style={{width:900, height:'auto'}}/></div>

VLM 行为告警——在工作区域使用手机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_no_helmet.png" style={{width:900, height:'auto'}}/></div>

YOLO PPE 告警——缺少安全帽。

## 本演示中使用的模型

默认发行版附带以下 checkpoint。你可以通过更新仓库配置和 `models/` 目录，将它们替换为其他 YOLO 或 VLM 模型。

| 角色 | 默认模型 | 文件 |
| --- | --- | --- |
| 人员检测 | YOLOv8n | `models/yolov8n.onnx` |
| PPE 检测 | YOLOv8 PPE | `models/ppe-yolov8n.pt` |
| 行为分析 | SmolVLM-500M-Instruct | `models/SmolVLM-500M-Instruct/` |

模型会在首次运行 `./run.sh` 时自动下载，或通过 `./scripts/download_models.sh` 手动下载。

## 停止与清理

```bash
./clean.sh              # stop containers and remove local image
./clean.sh --full       # also remove models/, data/, bin/go2rtc
```

## 故障排查

| 问题 | 解决方法 |
| --- | --- |
| Docker 权限被拒绝 | 将用户加入 `docker` 组，或使用 `sudo docker` |
| 首次构建较慢 | 正常现象（15–30 分钟）。在 JetPack 6.2 或更早版本上，请将轮子包放入 `wheels/` |
| PyTorch / CUDA 不匹配 | 在目标 Jetson 上重新构建；不要复用来自其他 JetPack 的镜像 |
| 容器中看不到摄像头 | 确认宿主机上存在 `/dev/video*`；`./run.sh` 会自动挂载检测到的摄像头 |
| 浏览器中无视频 | 使用 `docker ps` 检查 `industrial-go2rtc`；端口 `1984` 必须可访问 |

## 资源

- 项目：https://github.com/xbs0325/industrial-inspection
- [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/cn/install_torch_on_recomputer/)


## 技术支持与产品讨论

感谢你选择 Seeed Studio 的产品！如需技术支持和产品讨论，请通过以下渠道联系我们：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
