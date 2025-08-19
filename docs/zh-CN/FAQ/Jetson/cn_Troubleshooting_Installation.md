---
description: reComputer-FAQ
title: 安装故障排除
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /cn/Troubleshooting_Installation
last_update:
  date: 2023/6/30
  author: Seraphina
---


### 使用 NVIDIA SDK Manager 进行安装故障排除

各种安装错误的原因很多。以下是常见安装问题的检查清单，可能有助于您从损坏的安装中恢复。

1. 查看摘要表以识别哪个组件失败了。

    a. 展开状态为"Error"的组。

    b. 当您找到失败的组件时，点击安装错误右侧的详细信息图标，将重定向到终端选项卡，该选项卡将显示确切的错误。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. 如果错误与环境问题相关，例如损坏的 apt 存储库或缺少先决条件，请尝试手动修复，然后点击重试失败项目按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. 重试安装还可以通过其他两种方式进行：

    a. 从**使用 SDK Manager 刷写到 eMMC -- 步骤 3**，使用修复/卸载按钮进入管理 NVIDIA SDK 页面。如果需要，展开状态为"Broken"的 SDK，然后点击相关部分（主机或目标）的修复。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. 在**使用 SDK Manager 刷写到 eMMC -- 步骤 3**，选择所需的 SDK 并再次运行安装。

5. 最后，尝试卸载并重新安装相关的 SDK。

### 使用命令行进行安装故障排除

命令行安装方法相对简单，在使用强制恢复模式的场景中经常容易出错。

如果您在**使用命令行刷写到 eMMC -- 步骤 2**中遇到下面显示的错误，您可能没有成功让 Jetson-101 载板进入强制恢复模式。请特别注意，不要在 Jetson-101 载板通电的情况下进入强制恢复模式，因为这是无效的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

如果您在**使用命令行刷写到 eMMC -- 步骤 3**中无法进入系统并卡在启动显示命令行，您可能没有退出强制恢复模式。同样，在 Jetson-101 载板通电时拔掉跳线来退出强制恢复模式是无效的，这些都需要在断电时完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note 如果需要更多存储空间，我们可以使用 SD 卡来扩展容量，或者将系统烧录到 SD 卡上，您可以参考我们推荐的解决方案[在 SD 卡上刷写系统](https://wiki.seeedstudio.com/cn/J1010_Boot_From_SD_Card/)
:::