---
description: 使用内部 MCP 工具部署人脸识别的指南
title: 使用 MCP 进行人脸识别
sidebar_position: 7
keywords:
  - AI
  - SenseCAP
  - Watcher
  - Agent
  - Face
  - Model
  - Context
  - protocol
  - recognition
  - MCP
  - reComputer
image: https://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /face_regonition_with_mcp
last_update:
  date: 04/07/2026
  author: Spencer
createdAt: '2025-11-24'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/cn/face_regonition_with_mcp/
---

# 使用 MCP 扩展人脸识别

## 概述

本指南介绍如何使用 **SenseCAP Watcher（小智）** 搭配 **reComputer Raspberry Pi 系统** 部署人脸识别工作流。

通过为 **SenseCAP Watcher** 刷入定制固件，小智 AI 将获得由带有 Hailo-8 加速的 **reComputer** 提供的人脸识别能力。完成配置后，只需对 Watcher 说类似“检查这个人是谁”的话，AI 会自动拍照，将人脸与 reComputer 上的本地数据库进行比对，并返回此人的名字和置信度。

## 硬件准备

<table align="center">
  <tr>
    <th>SenseCAP Watcher for Xiaozhi</th>
    <th>reComputer AI R2130-12</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> 立即获取 🖱️</span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> 立即获取 🖱️</span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 前置条件

- 按照以下文档安装 reComputer Raspberry Pi 系统：[reComputer R2000 Series 入门指南](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#入门指南-os)
- 源代码仓库：
  - [小智人脸识别固件](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)
  - [人脸识别 API](https://github.com/suharvest/face_rec_api)

## 部署流程

### 步骤 1. 记录 reComputer 的 IP 地址

将 reComputer 连接到你的网络（例如路由器），并获取它的 IP 地址。本指南中的示例 IP 为 `192.168.24.10`。

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>

### 步骤 2. 为 Watcher 刷写固件

1. 使用底部接口的 Type-C 线将 PC 连接到 Watcher。

2. 打开 ESP-IDF 5.5 CMD（版本 5.5.1），并克隆固件仓库：

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

3. 打开 `main/boards/sensecap-watcher/sscma_camera.cc`，搜索 `face_rec_url`，并将 IP 修改为你的 reComputer 的 IP：

```cpp
// Before (default):
std::string face_rec_url = "http://192.168.10.131:8001/recognize";

// After (your reComputer IP):
std::string face_rec_url = "http://<reComputer_IP>:8001/recognize";
```

4. 编译并刷写：

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### 步骤 3. 配置 reComputer 环境

1. 通过 SSH 连接：

```bash
ssh <username>@<reComputer_IP>
# Example: ssh recomputer@192.168.24.10
```

:::note
我们推荐在 VS Code 中使用 **Remote - SSH** 扩展来连接你的 reComputer。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>
:::

2. 更新系统软件：

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

3. 安装 Hailo 运行时和驱动：

```bash
sudo apt install hailo-all
sudo reboot
```

4. 重启后，重新通过 SSH 连接并验证 HailoRT：

```bash
hailortcli scan
hailortcli fw-control identify
```

如果你看到类似如下的输出，则说明驱动已成功安装：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

5. 安装 uv：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env
```

### 步骤 4. 克隆 API 并安装依赖

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```

### 步骤 5. 添加照片并启动服务

1. 将照片放入 `photos/` 文件夹。每个文件应以人物名称命名（不带扩展名的文件名会被用作此人的名字）：

```
photos/
├── john_doe.jpg
├── jane_smith.png
└── alice_wang.jpg
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

2. 生成特征向量（embeddings）：

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

3. 启动服务：

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

服务现在在 **8001** 端口上运行。Watcher 可以与 reComputer 通信，以检查人脸是否存在于数据库中。你可以使用 `Ctrl + C` 停止服务。

你可以添加类似这样的提示词：“当检测到有人时，使用人脸识别工具检查姓名和置信度：如果置信度大于 0.40，就用名字向其打招呼；否则给出通用的问候语。”

### 步骤 6. 更新人脸数据库

向 `photos/` 文件夹中添加新照片，然后重新生成特征向量并重启服务：

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

:::tip
你也可以在服务运行过程中通过调用 reload 接口来更新数据库：
```bash
curl -X POST http://localhost:8001/reload
```
:::

### 步骤 7. 清空人脸数据库

1. 删除 `photos/` 文件夹中的所有文件。
2. 删除 `data/` 文件夹中的 `embeddings.json` 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

清空后，重启服务，你会看到干净的日志输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## 执行结果

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## 常见问题

**问：如何让小智 AI 调用人脸识别 API？**

**答：** 只需向 Watcher 提问，例如“检查我是否在你的人脸识别系统中”。AI 会自动调用人脸识别工具。

**问：服务无法连接或无法识别人脸。我应该检查什么？**

**答：** 请确认：
- 固件中配置的 reComputer IP 地址与实际 IP 一致。
- 人脸识别服务正在运行（`curl http://<reComputer_IP>:8001/health`）。
- 没有防火墙规则阻止 8001 端口。

**问：安装 `hailo-all` 后未检测到 Hailo，该怎么办？**

**答：** 完整重启后重新运行 `hailortcli scan`。如果仍未检测到，请使用 `lspci | grep Hailo` 和 `dmesg | grep -i hailo` 检查 PCIe 连接。

**问：我可以在其他设备上部署人脸识别系统吗？**

**答：** 可以，只要设备运行基于 Linux 的系统并搭载 Hailo-8 硬件即可。推荐使用 reComputer 系列，本指南已在该平台上完成验证。

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
