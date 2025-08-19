---
description: Introduces an AI demo of Jetson crowd tracking
title: 人流追踪与计数
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/crowd%20tracking.webp
slug: /cn/solutions/jetson-crowd-tracking
last_update:
  date: 08/15/2025
  author: lian
---

本指南适用于 **NVIDIA Jetson Ubuntu 22 + JetPack 6.x** 环境，帮助用户快速完成部署。

## 📋 环境要求

- **设备**：NVIDIA Jetson 系列（Nano, Xavier, Orin 等）
- **系统**：Ubuntu 22.x + JetPack 6.x
- **网络**：可访问 GitHub 和 Docker Hub
- **权限**：`sudo` 权限

> 如果您的设备未安装合适的系统环境，请参考官方刷机指南进行系统安装和环境准备：  
> [JetPack 刷机教程（Seeed Studio）](/flash/jetpack_to_selected_product/)

## ⚡ 一键部署

在 Jetson 设备终端执行：

```bash
curl -fsSL https://raw.githubusercontent.com/Seeed-Studio/SenseCraft-AI_Server/refs/heads/jetson/scripts/install.sh | bash
```

> 💡 脚本支持 **幂等执行**，可以安全地重复运行。

## 🔍 部署流程

脚本会自动执行以下步骤：

1. **安装 Docker（27.x）**

   - 检测是否安装 Docker
   - 已安装但不是 27.x → 自动卸载并重新安装
   - 配置 NVIDIA Container Toolkit
   - 将 Docker 默认运行时设置为 `nvidia`

2. **安装 MQTT Broker**

   - 安装 `mosquitto` 和 `mosquitto-clients`
   - 配置允许外部访问：

     ```shell
     listener 1883 0.0.0.0
     allow_anonymous true
     ```

3. **部署 SenseCraft AI Server**

   - 克隆仓库指定分支到 `~/sensecraft-ai_server`
   - 执行 `scripts/run.sh` 启动服务
   - 下载 YOLOv11 模型到 `~/sensecraft-ai_server/models/yolo11n.pt`

## 🛡 异常处理说明

- 脚本支持 **幂等执行**：

  - **大部分异常**（如网络中断、部分安装失败）只需 **重新运行一次脚本** 即可修复
  - 脚本会自动检测已安装的软件版本和配置，只安装缺失或错误的部分
- **少量异常**（如 apt 源永久失效、外部仓库不可访问）需要人工处理

## 🖥 启动与访问

1. **启动服务**

   ```bash
   cd ~/sensecraft-ai_server
   sudo bash scripts/run.sh
   ```

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Command%20Line%20Output%20%28Example%29.png" alt="Command">
</img>
</div>

2. **访问主页面**

   - 浏览器访问：

     ```bash
     http://<JETSON_IP>:46654
     ```

   - 初次使用已配置好默认参数，启动即可看到效果

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Web%20Interface%20%28Example%29.png" alt="Interface"></img>
</div>

3. **访问配置页面**

   - 浏览器访问：

     ```bash
     http://<JETSON_IP>:46654/config.html
     ```

   - 可在此页面调整视频源、模型、推理参数等配置，并保存到服务器

## ⚙ 配置页面说明

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Configuration%20Page%20%28Example%29.png" alt="Configuration"/></div>

### 视频源配置

- 支持 **本地视频文件**、**USB 摄像头**（默认第一个）、**RTSP 流**
- 支持上传 MP4、AVI、MOV、MKV 视频文件
- 可查看和删除已上传的视频源

### AI 模型配置

- 从列表中选择 AI 推理模型
- 支持上传 `.pt`、`.pth`、`.onnx`、`.engine` 格式
- 可查看和删除已上传模型

### 推理参数

- **置信度阈值**：0.1–1.0
- **最大检测数量**：1–1000
- **半精度推理**：提升推理速度（小模型差异不大）

### 显示设置

- 显示检测框（可自定义颜色，默认橙色）
- 时间戳与 FPS 为固定启用

### 跟踪设置

- 启用多目标跟踪
- 显示轨迹线，可自定义长度、粗细与颜色

### 绊线检测

- 支持水平或垂直绊线（建议垂直）
- 绘制起点和终点，开启显示可实时调试
- 检测容差：1–20 像素
- 支持颜色和粗细自定义
- 支持显示/隐藏、重置计数（服务重启会清空）

### 配置管理

- 保存当前配置到服务器（运行时会加载该配置）
- 支持导出/导入配置文件
- 支持恢复默认配置

---

## 🛠 常见问题

| 问题                         | 原因                   | 解决方法                                                              |
| ---------------------------- | ---------------------- | --------------------------------------------------------------------- |
| `Docker installation failed` | 网络不稳定 或 源不可用 | 检查网络后重试安装脚本                                                |
| Mosquitto 无法连接           | 防火墙或配置错误       | 检查 `/etc/mosquitto/mosquitto.conf` 是否包含 `listener 1883 0.0.0.0` |
| YOLO 模型未下载成功          | 网络原因导致下载中断   | 删除 `~/sensecraft-ai_server/models/yolo11n.pt` 后重新运行脚本        |

---

## 📦 卸载服务

```bash
# 卸载 MQTT
sudo apt remove -y mosquitto mosquitto-clients

# 卸载 Docker
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# 删除服务目录
rm -rf ~/sensecraft-ai_server
```

---

## 📚 参考资料

- [Jetson刷机指引文档](/flash/jetpack_to_selected_product/)
- [SenseCraft-AI\_Server源代码仓库](https://github.com/Seeed-Studio/SenseCraft-AI_Server/tree/jetson)
- [NVIDIA Jetson Docker 指南](https://www.jetson-ai-lab.com/tips_ssd-docker.html)
- [Mosquitto 官方文档](https://mosquitto.org/man/mosquitto-conf-5.html)
