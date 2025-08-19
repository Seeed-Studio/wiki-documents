---
description: reComputer-常见问题解答
title: 安装故障排除
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /cn/Troubleshooting_Installation
last_update:
  date: 2023/6/30
  author: Seraphina
---


### 使用 NVIDIA SDK Manager 进行安装故障排除

安装错误可能由多种原因引起。以下是一些常见安装问题的检查清单，这可能有助于您从损坏的安装中恢复。

1. 查看摘要表以确定哪个组件失败。

    a. 展开状态为“Error”的组。

    b. 找到失败的组件后，点击安装错误右侧的详情图标，将被重定向到终端选项卡，该选项卡将显示具体的错误信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. 如果错误与环境问题相关，例如损坏的 apt 仓库或缺少的前置条件，请尝试手动修复，然后点击“Retry Failed Items”（重试失败项）按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. 还有两种方法可以重试安装：

    a. 在 **使用 SDK Manager 刷写到 eMMC -- 第 3 步** 中，使用“Repair/Uninstall”（修复/卸载）按钮进入“Manage NVIDIA SDKs”（管理 NVIDIA SDK）页面。如果需要，展开状态为“Broken”（损坏）的 SDK，然后点击相关部分（主机或目标）的“Repair”（修复）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. 在 **使用 SDK Manager 刷写到 eMMC -- 第 3 步** 中，选择所需的 SDK 并重新运行安装。

5. 最后，尝试卸载并重新安装相关的 SDK。

### 使用命令行进行安装故障排除

命令行安装方法相对简单，但在使用强制恢复模式的场景中容易出错。

如果您在 **使用命令行刷写到 eMMC -- 第 2 步** 中遇到如下所示的错误，可能是因为您未能成功将 Jetson-101 承载板置于强制恢复模式。请特别注意，不要在 Jetson-101 承载板通电的情况下进入强制恢复模式，因为这是无效的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

如果您在 **使用命令行刷写到 eMMC -- 第 3 步** 中无法进入系统，并卡在启动显示命令行界面，可能是因为您未能退出强制恢复模式。同样，在 Jetson-101 承载板通电的情况下拔掉跳线以退出强制恢复模式也是无效的，这一切都需要在断电状态下完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
如果需要更多存储空间，我们可以使用 SD 卡扩展容量，或者将系统烧录到 SD 卡上，您可以参考我们推荐的解决方案 [在 SD 卡上烧录系统](https://wiki.seeedstudio.com/cn/J1010_Boot_From_SD_Card/)
:::