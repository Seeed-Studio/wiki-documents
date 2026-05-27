---
description: 使用 Seeed Jetson DevelopTool 中的 App Market 在 Jetson 设备上浏览并安装 AI 应用程序——包括 YOLOv8、Ollama、DeepSeek 和 Node-RED。
title: App Market
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - App Market
  - YOLOv8
  - Ollama
  - DeepSeek
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_app_market
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/cn/jetson_developtool_app_market/
---

**App Market** 模块允许你在 Jetson 设备上直接浏览并安装流行的 AI 应用程序——无需手动输入 Docker 命令或管理依赖。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-app-market.png" style={{width:800, height:'auto'}}/></div>

## 可用应用

| App | Category | Description |
|-----|----------|-------------|
| YOLOv8 | 计算机视觉 | 使用 NVIDIA TensorRT 加速的实时目标检测 |
| Ollama | 大语言模型 | 在 Jetson 上本地运行大语言模型 |
| DeepSeek | 大语言模型 | 为边缘部署优化的 DeepSeek 推理引擎 |
| Node-RED | 物联网 / 自动化 | 面向物联网数据流的低代码流程式编程 |
| Jupyter Lab | 开发 | 交互式 Python 笔记本服务器 |
| VS Code Server | 开发 | 基于浏览器的 VS Code 集成开发环境 |

## 安装应用

1. 连接到你的 Jetson 设备（参见 [连接设备](/cn/jetson_developtool_connect_device)）。
2. 打开 **App Market** 选项卡。
3. 浏览可用应用，或使用搜索栏按类别筛选。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/appmarket-categories.png" style={{width:800, height:'auto'}}/></div>

4. 在目标应用上点击 **Install**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/appmarket-app-cards.png" style={{width:800, height:'auto'}}/></div>

5. 工具会自动拉取合适的 Docker 镜像，并根据你的 Jetson 的 JetPack 版本进行配置。
6. 安装完成后，点击 **Launch** 启动应用，并获取访问 URL（针对基于 Web 的应用）或连接信息。

:::tip
App Market 中的应用以 Docker 容器形式打包。请确保你的 Jetson 上已安装 Docker。若未安装，工具会提示你自动安装。
:::

## 演示：一键部署 Depth Anything V3

下面的视频展示了如何通过 App Market 在 Jetson 设备上一键部署 **Depth Anything V3**。

<div style={{textAlign:'center'}}>
  <video width="800" controls>
    <source src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/depth-anything-v3-deploy.mp4" type="video/mp4"/>
  </video>
</div>

## 管理已安装应用

在 **Installed** 选项卡中，你可以：

- **Start / Stop** 单个应用
- **Update** 到最新版本
- **Remove** 应用以释放存储空间
- 查看每个应用的端口映射和访问 URL

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
