---
sidebar_position: 12
description: SenseCraft AI Jetson
title: reComputer Jetson 工具包
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-ai/tutorials/sensecraft-ai-jetson
aliases:
  - /sensecraft_ai_jetson
last_update:
  date: 08/16/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/sensecraft-ai-jetson/
---

SenseCraft AI-Jetson 是一款为 NVIDIA Jetson 边缘 AI 设备设计的开发工具包和平台。只需运行 "Quickstart Script"，即可看到一个交互式用户界面，用预加载的视频和预加载的 AI 模型展示示例应用。如果你想添加自己的 USB 摄像头或 IP 摄像头，只需点击几下就能完成！

除了我们开箱即用的各种内置 AI 模型外，你还可以在 SenseCraft AI 平台上访问大量公共模型，并能够根据特定场景下载和部署 AI 模型，基于你的需求创建个性化 AI 解决方案。SenseCraft AI 是你在视觉 AI 方面的智能决策伙伴，为你提供简单、灵活且高效的推理和方案构建能力。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

## 安装 SenseCraft AI-Jetson

**硬件要求**

- NVIDIA Jetson 设备
- 通过以太网 / WiFi 连接互联网
- 显示器

**软件要求**

- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**快速开始**<br />

1. 将 Jetson 连接到显示器并开机<br />
2. 将鼠标和键盘插入设备，在终端中输入以下命令来运行应用程序

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. 在应用安装过程中，你需要设置以下可选配置，请根据你的需求进行设置

- **[可选] 启用 jetson_clocks 脚本，通过将 CPU、GPU 和 EMC 时钟设置为最大频率来最大化 Jetson 性能？[y/n] (default: y): y**<br />
提供 jetson_clocks 脚本，通过将 CPU、GPU 和 EMC 时钟设置为静态最大频率来最大化 Jetson 性能。

- **[可选] 通过卸载一些不必要的软件包（如 libreoffice），更改 Swap Memory（/swapfile）的大小以节省空间？[y/n] (default: n): n**<br />
在内存不足的情况下（尤其是 jetson nano），最好启用 swap 以确保程序正常运行。

- **[可选] 你是否想创建或更改 Swap Memory（/swapfile）的大小？**<br />
为了让 nano 获得更好的性能，请打开 Swap。

- **[可选] 使用外部 · 来存储 Docker 数据目录？（用于 docker 镜像和卷）？**<br />

- **（如果你的根分区小于 32 GB，推荐启用）。[y/n] (default: n): n**<br />

边缘 AI 程序运行至少需要 32G 的存储空间，如果没有，你可以选择将 docker 数据卷挂载到外部磁盘。

4. 现在你可以体验 SenseCraft AI-Jetson 了

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **部署新模型**

1. 访问 “AI Models“ 页面并选择你需要的 AI 模型<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2. 点击 "Deploy Model" 按钮

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3. 查看 read me，确保设备已安装 SenseCraft AI-Jetson，且该 AI 模型适配设备类型。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4. 选择一个在线设备

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5. AI 模型需要应用到一个视频流，如果没有视频流，请先添加一个有效的视频流。Model zoo 会将视频流信息直接发送到设备。

:::note
更多视频流信息说明请查看 Streams Management
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. 将 AI 模型和视频流信息发送到设备。AI 模型部署需要几分钟时间，因此你可以离开当前页面，几分钟后前往设备端查看已部署的 AI 模型。

### **视频流管理**

SenseCraft AI-Jetson 支持按需添加多个视频流，并支持添加 USB 摄像头和 IP 摄像头。

可添加的视频流数量取决于设备的 CPU 和内存资源，请注意设备的资源使用情况。

#### **添加视频流**

1. 访问 Streams 页面并点击 + 图标<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. 设置新视频流的有效信息，详细内容请查看下表<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **字段** | **内容** |
| --- | --- |
| **Stream Name** | 1 为该视频流自定义名称。<br />2 不能为空 |
| **Video Type** | 1 Ip camera：接入 IP 摄像头，需要输入有效的 rtsp url<br />2 Usb camera：将 usb 摄像头连接到设备，自动识别 usb，然后在视频路径中选择正确的 usb 摄像头。 |
| **Video Path** | 视频路径，格式由 "Video Type" 决定，如果错误，将使用默认视频。 |
| **Device AI Model** | 1 选择一个已在设备上下载好的 AI 模型<br />2 如果设备上没有 AI 模型，请前往 AI Models 页面将模型下载到设备。 |
| **Confidence Threshold** | 1 目标检测的置信度阈值。<br />2 格式：float [0, 1] |
| **IoU Threshold** | 1 IoU 用于评估预测框与真实框的重叠准确度 2 格式：float [0, 1] |
| **FPS** | 1 视频流的每秒帧数<br />2 格式：INT [1,60] |
| **Quality** | 1 输出视频流质量。默认：50<br />2 格式：int [0,100] |
| **Maximum Detections** | 1 每张图像的最大检测数量。默认：3002 格式：int [0,1000] |
| **Display Frame Rate** | 1 是否显示视频流的帧率<br />2 格式：Bool [True,False]<br />● True: 显示 FPS<br />● False: 不显示 FPS |
| **Display Clock** | 1 是否显示时间<br />2 格式：Bool [True,False]<br />● True: 显示时间<br />● False: 不显示时间 |

3. 点击 "Save" 按钮并返回主页查看新视频流和 AI 检测结果。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)

#### **删除视频流**

进入视频流详情并点击 "Delete" 图标以删除该视频流<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **AI 模型管理**

管理设备上已下载的所有 AI 模型。

- AI 模型会显示使用该模型的视频流名称。<br />
- 未在视频流中使用的 AI 模型可以被删除<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **设置**

#### **关于**

设备信息，更多信息请查看下表<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **字段** | **内容** |
| --- | --- |
| **Product** | 设备的模组 |
| **IP** | 设备的网络 IP 地址 |
| **Serial number** | 设备唯一的生产序列号 |
| **MAC address** | 网络 MAC 地址 |
| **CPU Usage** | 设备 CPU 使用率 |
| **RAM** | 设备 RAM |
| **Swap** | 设备 swap |
| **Disk usage** | 设备磁盘使用情况 |
| **Cuda version** | 设备上安装的 Cuda 版本 |
| **Jetpack version** | 设备上安装的 jetpack 版本 |

#### **绑定到 SenseCraft AI 平台**

SenseCraft AI for Jetson 专为边缘 AI 设计。AI 推理和视频流处理都在设备本地完成。只有当你需要下载更多 AI 模型时，才需要将设备绑定到 [SenseCraft AI platform](https://sensecraft.seeed.cc/ai) —— 下载完成后你可以移除该设备。

1. 访问 [SenseCraft AI](https://sensecraft.seeed.cc/ai)。<br />
2. 使用有效的邮箱地址注册。SenseCraft AI 账号与 SenseCAP Cloud 账号相同；如果你已经拥有账号，可以直接登录。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. 导航到 **`Models`** > **`Workspace`** > **`NVIDIA Jetson`** 并点击 **`Add Device`**。<br />
4. 输入设备自定义名称，并从设备上获取绑定码。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. 回到设备上的 SenseCraft AI 应用。点击 "Bind to SenseCraft AI platform"，然后应用会显示绑定码和临时名称。

- Bind Code: 在 [SenseCraft AI platform](https://sensecraft.seeed.cc/ai) 上输入正确有效的绑定码以完成设备绑定。<br />
- Temporary Name: 如果绑定码重复，则需要输入正确的临时名称。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. 输入正确有效的绑定码并点击 "Comfirm" 按钮<br />
7. 绑定成功后，你现在可以从 model zoo 中添加新的 AI 模型

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **解绑**

如果你不再需要在 AI 平台上远程管理设备，可以从 AI 平台账号中删除该设备。你可以在设备端或平台端进行解绑<br />

- 从 AI model zoo 中解绑设备，点击 "Delete"<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- 通过关闭 "Bind to SenseCraft AI platform" 来解绑设备<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)

### **应用更新**

SenseCraft AI 应用更新分为自动更新和手动更新，你可以根据需要进行设置。

**自动更新**：每 5 分钟检查一次更新，当检测到新版本时，信息会自动更新，无需手动操作。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**手动更新**：手动检查更新，当检测到新版本时，点击 Update 按钮进行更新

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

## **技术支持**

**需要 SenseCAP Indicator 的帮助吗？我们随时为你提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
