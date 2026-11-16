---
description: "将 USB KVM 采集套件与 reComputer Jetson 搭配使用：连接键盘和鼠标共享、采集 HDMI 或 DisplayPort 视频，并开始使用 OSRBOT Link。"
title: USB KVM 采集套件快速上手
keywords:
  - Edge
  - NVIDIA Jetson
  - reComputer
  - USB KVM
  - 视频采集
  - OSRBOT Link
image: https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/product.png
slug: /usb_kvm_capture_kit_getting_start
last_update:
  date: '2026-11-13'
  author: zibo
createdAt: '2026-11-13'
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/cn/usb_kvm_capture_kit_getting_start/
---

<div align="center">
  <img alt="OSRBOT Link USB keyboard and mouse sharing device" width="600" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/product.png" />
</div>

USB KVM 采集套件将一台 **OSRBOT Link 键盘和鼠标共享设备** 与可选的视频采集配件组合在一起。使用你电脑的键盘和鼠标来操作 reComputer Jetson，当连接了采集卡时，可以在 OSRBOT Link 应用中查看 Jetson 的视频输出。这对于在现场进行安装和故障排查而无需单独的显示器、键盘和鼠标非常有用。

在本指南中，**控制端** 是运行 OSRBOT Link 的电脑，**目标端** 是被操作的 reComputer Jetson。目标端不需要安装 OSRBOT Link，但必须支持 USB 键盘和鼠标输入。

## 特性

- 无需在目标端安装软件即可实现 USB 键盘和鼠标控制。
- 控制端软件支持 Windows、macOS 和 Ubuntu。
- 可选 HDMI 视频采集，并为具有 DisplayPort 输出的目标端提供 DP 转 HDMI 转接器。
- 支持截图、视频录制、GIF 采集和 ASCII 命令粘贴。
- 为控制端和目标端分别提供独立的 USB 扩展端口。
- 使用 OSRBOT Link Pro 可选以太网网络共享和局域网浏览器控制。

:::info
键盘/鼠标输入、视频采集和网络共享使用的是独立连接。仅共享设备本身不会采集视频，其 USB 数据线也不承载网络流量。视频分辨率、帧率和延迟取决于采集卡和视频链路。
:::

## 规格参数

### 键盘和鼠标共享设备

<div class="table-center">

| 项目 | 规格 |
| --- | --- |
| 产品 | OSRBOT Link 键盘和鼠标共享设备 |
| 外壳 | 铝合金和工程塑料 |
| 控制端连接 | USB 3.0，带一个控制端 USB 3.0 扩展端口 |
| 目标端连接 | USB 2.0，带一个目标端 USB 2.0 扩展端口 |
| 随附数据线 | USB-A 公对 USB-A 公，1 m |
| 控制端软件 | OSRBOT Link |
| 控制端平台 | Windows、macOS、Ubuntu |
| 视频查看 | 需要外接采集卡 |

</div>

### 采集卡

以下规格描述的是 OSRBOT Link v1.1 手册中列出的采集卡，并不适用于所有第三方采集卡。

<div align="center">
  <img alt="Capture card with HDMI input and USB-A output" width="300" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/capture-card.png" />
</div>

<div class="table-center">

| 项目 | 规格 |
| --- | --- |
| 接口 | HDMI 输入到 USB-A 输出 |
| MJPG 采集 | 4K 60 fps / 2K 60 fps / 1080p 144 fps |
| NV12 采集 | 4K 30 fps / 2K 60 fps / 1080p 60 fps |
| YUY2 采集 | 4K 25 fps / 2K 50 fps / 1080p 60 fps |
| XRGB（RGB24），如手册所列 | 2K 30 fps / 1080p 60 fps |
| 音频输出 | 默认立体声，48 kHz / 24 bit |
| 音频采集 | 支持 5.1 / 7.1 声道 |
| 预览延迟 | 40–80 ms，典型值约 60 ms |
| 视频协议 | UVC |

</div>

:::note
这些采集卡规格和延迟数据由供应商提供，而非 Jetson 测试结果。所述延迟条件为 USB 3.0、1080p 60 fps，以及在电脑上以 RGB24 进行预览。可用模式取决于实际采集卡、信号源输出、USB 连接以及软件。采集卡的音频能力本身并不能保证在所有应用工作流中都具备音频支持。
:::

## 包装清单

<div class="table-center">

| 配件 | 基础版 | HDMI 版 | HDMI + DP 版 |
| --- | --- | --- | --- |
| 键盘和鼠标共享设备 | 标配 | 标配 | 标配 |
| USB-A 对 USB-A 数据线 | 标配 | 标配 | 标配 |
| 采集卡 | — | 标配 | 标配 |
| HDMI 线缆 | — | 标配 | 标配 |
| DP 转 HDMI 转接器 | — | — | 标配 |

</div>

<div align="center">
  <img alt="USB-A data cable, HDMI cable, and DP-to-HDMI adapter" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/accessories.png" />
</div>

手册中列出了一根 1 m USB-A 数据线、一根 0.6 m HDMI 公对公线缆（HDMI 2.0，19+1），以及一个 DP 公对 HDMI 母转接器。包装内容和配件规格可能会变更；下单时请确认实际随附物品。

## 支持的设备与要求

请准备以下内容：

- **控制端：** 一台具备 USB 连接能力的 Windows、macOS 或 Ubuntu 电脑。若要达到采集卡标称性能，请使用 USB 3.0。使用视频功能时，共享设备和采集卡都必须连接到控制端。
- **目标端：** 一台已供电的 reComputer Jetson，带有支持键盘/鼠标输入的 USB 主机端口。若要使用视频，还需要可用的 HDMI 或 DisplayPort 输出。
- **软件：** 与控制端操作系统和处理器架构匹配的 OSRBOT Link 安装包。
- **配件：** 随附的 USB-A 数据线，以及在使用视频时所需的采集卡、HDMI 线缆和（如有需要）DP 转 HDMI 转接器。
- **可选网络：** 用于网络共享的以太网线和合适的网络适配器；以及可访问的可信局域网以供浏览器访问。

本指南描述的是连接需求，而不是针对每一款 reComputer 型号或 JetPack 版本的完整兼容性测试列表。请查阅你设备的硬件文档以了解其 USB 主机端口和显示接口。此处 Jetson 是目标端；不要仅因为它运行 Ubuntu 就在其上安装控制端软件包。

## 硬件连接

### 识别端口

<div align="center">
  <img alt="Controller side: port 1 is the built-in USB-A plug and port 2 is the blue USB 3.0 expansion port" width="400" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/controller-ports.png" />
  <img alt="Target side: port 3 is the upper USB 2.0 expansion port and port 4 is the lower target connection port" width="400" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/target-ports.png" />
</div>

| 端口 | 用途 | 连接方式 |
| --- | --- | --- |
| 1 | 控制端连接 | 将内置 USB-A 插头插入运行 OSRBOT Link 的电脑。 |
| 2 | 控制端 USB 3.0 扩展 | 连接属于控制端的外设，例如 U 盘或键盘接收器。 |
| 3 | 目标端 USB 2.0 扩展 | 连接属于 Jetson 的 USB 外设。 |
| 4 | 目标端连接 | 使用随附的 USB-A 对 USB-A 数据线，将此下方端口连接到 Jetson 的 USB 主机端口。 |

:::caution
请将随附数据线连接在 **共享设备的 4 号端口** 与 Jetson 之间。不要用它将控制端的 USB 端口直接连接到 Jetson 的 USB 主机端口。2 号和 3 号端口是扩展端口，不能替代 4 号端口。
:::

### reComputer 连接概览

<div align="center">
  <img alt="reComputer Jetson connection diagram: keyboard and mouse travel from the controller through the OSRBOT sharing device to a Jetson USB host port; Jetson HDMI or DP video returns through a capture card to the controller; optional network sharing uses a separate Ethernet cable" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/recomputer-connection.svg" />
</div>

该示意图是逻辑布线指南；实际接口位置取决于具体的 reComputer 型号。请使用 Jetson 的常规电源进行供电。从下面三种连接方式中选择一种。

### 方案 1：仅键盘和鼠标

1. 将共享设备的 **1 号端口** 插入控制端。
2. 使用随附数据线，将 **4 号端口** 连接到 Jetson 的 USB 主机端口。
3. 如有需要，使用目标端现有的显示设备。在没有采集卡的情况下，OSRBOT Link 仅提供输入控制，不提供目标端视频预览。

<div align="center">
  <img alt="Keyboard and mouse only: controller USB to the sharing device, then port 4 and the data cable to the target USB port" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/keyboard-mouse-connection.png" />
</div>

### 方案 2：键盘和鼠标 + HDMI 视频

1. 完成上述键盘/鼠标连接。
2. 使用 HDMI 线缆，将 Jetson 的 **HDMI 输出** 连接到采集卡的 **HDMI 输入**。
3. 将采集卡的 **USB 输出** 连接到控制端。

<div align="center">
  <img alt="HDMI setup with separate USB input control and HDMI-to-USB video capture paths" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/hdmi-connection.png" />
</div>

### 方案 3：键盘和鼠标 + DisplayPort 视频

1. 完成方案 1 中的键盘/鼠标连接。
2. 将 DP 转 HDMI 转接器连接到 Jetson 的 **DisplayPort 输出**。
3. 使用 HDMI 线缆，将转接器连接到采集卡的 **HDMI 输入**。
4. 将采集卡的 **USB 输出** 连接到控制端。

<div align="center">
  <img alt="DisplayPort setup: target DP output through a DP-to-HDMI adapter and HDMI cable to the capture card, with capture-card USB connected to the controller" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/dp-connection.png" />
</div>

转接器的方向为 **DP 信号源到 HDMI 采集输入**。在两种视频方案中，共享设备始终保持连接。

## 软件安装

### 下载 OSRBOT Link

在控制端打开 [官方 OSRBOT Link 发布页面](https://github.com/osrbot/osrbot-link/releases)，并选择适用于其平台的安装包。

| 控制端平台 | 安装包 |
| --- | --- |
| Windows | 与受支持 Windows 版本和架构匹配的安装版或便携版 |
| macOS | 与 Mac 匹配的 Apple Silicon 或 Intel 安装包 |
| Ubuntu | 适用于受支持架构的 DEB 或 AppImage；请查看该版本的要求说明 |

**OSRBOT Link Pro** 包含下面所述的网络共享和局域网浏览器控制工作流。**Lite** 适用于本地 USB 控制和采集工具。若要完整跟随本指南，请使用 Pro，并查阅所选版本的发行说明以了解支持的系统和安装细节。

### 允许所需权限

- **Windows 和 macOS：** 为采集卡允许摄像头访问权限。
- **macOS：** 在转发系统快捷键时允许辅助功能访问。如果使用该可选功能，请在系统设置中手动配置 Internet 共享。
- **Ubuntu：** 如果 HID 访问失败，打开 **Settings → Input and Shortcuts → Fix Linux HID Permissions**，授权该操作并重新扫描。如有必要，重新连接共享设备。

不同版本之间界面标签可能有所不同。本指南中的截图和操作限制来自 v1.1 产品手册。

## 开始控制

<div align="center">
  <img alt="OSRBOT Link 主窗口显示顺序：连接 HID，启动可选视频，然后点击工作区" width="900" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/start-control.png" />
</div>

1. **连接 HID。** 打开 OSRBOT Link，刷新 **Keyboard/Mouse Sharing** 列表，选择 **OSRBOT HID**，然后点击 **Connect**。确认状态为 **Connected**。
2. **如果已连接视频，则启动视频。** 在 **Video Capture** 下选择采集卡（在某些界面中显示为 **Video Input**），在 **Capture Settings** 中选择受支持的分辨率和帧率，然后点击 **Start Video**。仅键盘/鼠标操作时可跳过此步骤。
3. **选择鼠标模式。** 对于 Jetson 桌面等计算机目标，使用 **Computer**。**Android** 模式对 Android 目标使用相对移动。
4. **开始输入。** 点击视频或空白工作区。此时控制端的键盘和鼠标将操作目标设备。
5. **验证操作。** 启用视频时，确认显示的是预期的 Jetson 桌面。在目标设备上的文本字段中移动指针并输入一段无害的测试字符串。

:::tip
按 **Shift + Esc** 释放输入并退出全屏。再次点击工作区即可恢复。打开设置、更改模式或切换窗口会暂停控制。可在 Settings 中启用可选的 **Right Ctrl** 释放快捷键。
:::

完成后，在 Keyboard/Mouse Sharing 下点击 **Disconnect**。使用 Control 菜单在适当情况下发送 **Ctrl+Alt+Del**；是否能转发保留的系统快捷键取决于控制端平台。

## 其他功能

### 显示与采集设置

| 显示模式 | 行为 |
| --- | --- |
| Fit | 保持纵横比并显示完整图像。 |
| Fill | 保持纵横比；边缘可能被裁剪。 |
| Original | 按原始像素尺寸显示。 |
| Stretch | 填满工作区；纵横比可能改变。 |

使用 Display 菜单进入全屏或显示/隐藏侧边栏和工具栏。在更换采集卡或更改采集设置前先停止视频。状态栏显示实际分辨率和帧率；输入自定义分辨率不会为采集卡增加能力。

### 截图、录制和 GIF

先启动视频，然后使用 Capture 菜单或全屏工具栏：

- **Screenshot：** 将当前采集到的帧保存到指定位置。
- **Recording：** 点击 Record，然后点击 Stop Recording 保存。每段录制在 **256 MiB** 时会自动停止并保存；要继续录制，请开始下一段。
- **GIF：** 录制一小段剪辑，然后停止以保存。每段剪辑限制约为 **10 秒**。

停止视频也会结束录制。在关闭应用或拔掉设备前，请等待保存完成。在 **Settings → Capture and Watermark** 下，可以在 OSRBOT Link 水印后附加自定义名称。

### 粘贴命令

<div align="center">
  <img alt="Paste Helper 带有命令预览、发送速度和可选的发送后回车" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/paste-helper.png" />
</div>

1. 保持 HID 连接，并在 Jetson 上聚焦到终端或文本字段。
2. 打开 **Control → Paste Helper**。检查剪贴板文本或输入命令。
3. 选择 **Fast**、**Standard** 或 **Slow**，并勾选是否启用 **Press Enter after sending**。
4. 点击 **Send Paste** 并等待完成。使用 **Stop Sending** 中断。

在本地控制时，**Ctrl + Alt + V** 会发送单行、最多 **256 个可打印 ASCII 字符**，且不会按下 Enter。更长或多行文本会打开预览。Paste Helper 最多接受 **1,200 个 ASCII 字符**，不支持中文文本或文件传输。

:::caution
Paste Helper 会在目标设备当前聚焦的字段中生成键盘输入。发送前请检查目标焦点和命令，尤其是在启用了自动按 Enter 选项时。
:::

### 设置与诊断

<div align="center">
  <img alt="OSRBOT Link 设置选项卡，包括通用偏好、输入与快捷键、采集与水印以及应用信息" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/settings.png" />
</div>

设置包括中英文语言、浅色/深色/系统外观、滚动方向、释放快捷键、指针提示和快速粘贴。偏好设置保存在控制端；更改这些设置不会自动连接设备。

用于故障排查时，在 **Settings → General** 下启用诊断日志，重现问题，然后选择 **Export**。根据手册说明，日志记录的是会话状态，而不是按键、剪贴板内容或视频，并且不会自动上传。

## 可选：网络共享

在 OSRBOT Link Pro 中，打开 **Network and Remote**。网络共享为 Jetson 提供对控制端上游连接的访问；它独立于键盘/鼠标控制和视频采集。

<div align="center">
  <img alt="Windows 网络共享示例，分别选择上游和目标适配器" width="650" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/network-sharing.png" />
</div>

1. 使用以太网线连接控制端和 Jetson 的以太网端口。
2. 通过 Wi-Fi 或第二个以太网适配器将控制端连接到上游网络。
3. 选择 **Upstream Adapter** 和 **Target Adapter**，点击 **Enable Sharing**，并授予请求的系统权限。
4. 检查显示的状态和 IP 信息，然后在 Jetson 上验证所需的局域网服务或互联网访问。
5. 完成后点击 **Disable Sharing**。

Windows 需要管理员权限。Linux 需要 NetworkManager、系统授权以及在上游适配器上的默认路由。在 macOS 上，请在系统设置中手动启用 Internet 共享。

:::note
USB 键盘/鼠标线缆不会提供此网络连接。对于离线的直接以太网连接，请使用互相可达的 IP 地址；无需互联网访问和网络共享。关闭 OSRBOT Link 并 **不会** 禁用系统网络共享。截图中的适配器名称和地址仅为示例。
:::

## 可选：局域网浏览器控制

保持 OSRBOT Link Pro 在控制端运行。可达的受信任局域网中的其他计算机可以查看采集到的 Jetson 画面，并在获得授权后通过浏览器对其进行操作。此功能不需要启用网络共享。

<div align="center">
  <img alt="控制端上的局域网控制设置，包含局域网 IP、端口、配对和控制权限" width="450" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/lan-control.png" />
</div>

1. 在控制端选择其局域网 IP 和端口，然后点击 **Enable LAN**。
2. 在另一台计算机上，打开应用显示的实际地址，输入配对码并点击 **Connect**。每个配对码仅可使用一次，并在 **2 分钟** 后过期。
3. 若仅查看，请确保控制端已运行视频。
4. 若需输入，还需连接 HID，启用 **Allow Control**，并为该浏览器授予控制权限。浏览器用户可以点击 **Request Control**。

<div align="center">
  <img alt="浏览器配对页面和控制工具栏，包含显示缩放、流媒体质量和全屏控制" width="900" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/browser-control.png" />
</div>

最多可同时有 **4 个浏览器** 进行查看，但仅有 **1 个浏览器** 被授予远程输入权限。控制端和已授权浏览器都可以发送输入，因此需要协调操作。**Disable Control** 会撤销远程输入权限但仍允许查看；禁用局域网控制会结束所有会话。

请使用受信任的局域网，根据需要允许私有网络防火墙访问，并且不要将端口转发到公共互联网。重新连接需要新的配对码。如果控制端 IP 发生变化，请重新启动局域网控制并使用新地址。

## 故障排查

| 现象 | 检查内容 |
| --- | --- |
| 共享设备缺失或 HID 无法连接 | 检查控制端 USB 连接，刷新列表并重新选择 HID 设备。如有需要，使用 Reset HID 或修复 Linux HID 权限，然后重新连接。 |
| 有视频但无输入 | 确认 HID 为 Connected，目标线缆使用 4 号端口，并且已点击工作区。对于浏览器输入，还需检查控制授权。 |
| 无视频或黑屏 | 检查目标视频输出、HDMI/DP 方向、采集卡 USB 连接以及摄像头权限。关闭其他正在使用采集卡的应用。 |
| 某个分辨率或帧率无法启动 | 停止视频并选择采集卡和信号源支持的模式。检查 USB 连接；自定义设置不能超出硬件能力。 |
| 打开设置或切换窗口后输入停止 | 再次点击工作区以恢复控制。如果仍无响应，使用 Reset HID，刷新并重新连接。 |
| 已启用网络共享但访问失败 | 检查两个适配器的选择、以太网布线以及目标的地址、网关和 DNS。在目标设备上验证所需服务；仅能 ping 通并不足够。 |
| 浏览器配对失败 | 生成新的配对码，并检查局域网可达性和防火墙访问。使用当前控制端地址。 |
| 浏览器可以查看但无法控制 | 检查 HID、Allow Control 以及浏览器已授予的控制权限。仅有一个浏览器可以持有远程输入权限。 |

**重置 HID** 不会自动恢复控制或停止视频/录制。重新连接后再点击工作区。

提交技术支持请求时，请包含控制端操作系统、目标型号、接线照片、错误信息、复现步骤，以及必要时导出的诊断日志。

## 相关资源

- [OSRBOT Link 软件发布与安装说明](https://github.com/osrbot/osrbot-link/releases)
- [reComputer Super 硬件与接口使用说明](/cn/recomputer_jetson_super_hardware_interfaces_usage/)
- [reComputer Robotics J401 接口与引脚定义](/cn/recomputer_jetson_robotics_j401_getting_started/)
- [Seeed Wiki 仓库与讨论](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

产品信息、工作极限和手册插图基于 **OSRBOT Link Product Manual v1.1（中英文版，2026 年 11 月）**。reComputer 连接概览是为本指南绘制的示意图，而非经过测试的实际连接照片。关于 OSRBOT 软件和硬件支持，请联系 [winter@osrbot.com](mailto:winter@osrbot.com)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
