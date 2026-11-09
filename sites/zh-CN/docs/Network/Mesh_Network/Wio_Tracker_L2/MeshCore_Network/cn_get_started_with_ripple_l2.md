---
description: 在 Wio Tracker L2 Pro 上开始使用 Ripple UI。了解如何烧录固件、配置 MeshCore 网络、发送消息、使用地图和 GPS 轨迹，以及解锁高级功能。
title: Ripple 入门
keywords:
  - Ripple
  - Ripple UI
  - MeshCore
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png
slug: /get_started_with_ripple_l2_pro
sidebar_position: 2
last_update:
  date: 11/06/2026
  author: Michelle Huang
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

## 什么是 Ripple？

Ripple UI 是用于 L2 Pro 的触摸屏固件。它让你可以直接在设备上添加联系人、收发消息、查看地图并记录你的 GPS 轨迹，而无需使用手机来完成这些任务。

### Ripple 与 MeshCore 的关系？

MeshCore 负责网状通信。Ripple UI 让你可以直接在 L2 Pro 触摸屏上使用它。

| 名称 | 作用 |
| --- | --- |
| MeshCore | LoRa 网状通信 |
| Ripple UI 固件 | 独立触摸屏操作 |
| MeshCore Companion 固件 | 通过手机或其他客户端进行操作 |

直接烧录 Ripple UI，无需先安装 Companion。

:::note

更新后的固件使用 MeshCore 配置文件，并且不再在新建网络界面中提供 Ripple 选项。

:::

### Ripple 适合谁？

- 希望直接在设备上聊天，而不想一直连接手机的用户。

- 希望使用离线地图并记录自己路线的户外用户。

- 希望在不同 MeshCore 网络配置文件之间切换的用户。

- 需要管理 MeshCore 中继、Room Server 或传感器节点的高级用户。部分管理功能需要付费解锁码。

## 功能特性

- **独立消息功能：** 通过触摸屏发送点对点和群组消息。

- **多网络配置文件：** 分别保存无线电设置、身份、联系人和偏好设置。

- **可自定义主屏幕：** 添加联系人、频道和设置的快捷方式。

- **地图：** 从 microSD 加载地图，拖动以平移，点击按钮以缩放。

- **GPS 轨迹：** 记录你的位置和时间戳，然后在地图上查看你的路线。

- **截图：** 长按屏幕左上角以捕获当前界面。

- **远程管理：** 在目标节点授权的情况下解锁节点管理功能。

## 烧录固件

如果你的设备已经安装了此处描述的 Ripple UI 版本，请跳到 **首次设置**。

提供两种固件变体：

- **Ripple GUI：数据存储在 SD 卡（-SD）：** 将配置和数据存储在 microSD 卡上。使用前插入一张容量不超过 32 GB、FAT32 格式化的卡。

- **Ripple GUI（内部）：** 将配置和数据存储在设备的内部闪存中。

**步骤 1：打开网页烧录工具**

访问 [Wio Tracker L2 Web Flasher](https://flasher.meshcore.io/wio-tracker-l2/)，并为 L2 选择 Ripple UI 固件和存储变体。使用支持串口访问的桌面浏览器，例如 Chrome 或 Edge。

选择 `Seeed Studio Wio Tracker L2 Pro`，选择一个 Ripple GUI 变体，并选择固件版本。下图显示的是 v12.3。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_flasher.png" alt="在网页烧录工具中选择 L2 Pro、Ripple GUI 变体和固件版本" width={1000} height="auto" /></p>

**步骤 2：手动进入下载模式**

在插入 USB 数据线的同时按住 `U/B` 按钮，然后按下 `RST` 进入固件下载模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_enterdfu.gif" alt="使用 U/B 和 RST 按钮进入下载模式" width={400} height="auto" /></p>

**步骤 3：选择端口并烧录**

点击 `Flash!`，在串口对话框中选择你的设备并连接。按照屏幕提示完成烧录。

:::warning

上方显示的 `Erase device` 选项会清除内部闪存中的数据和设置，包括解锁状态。擦除前请备份重要数据并保存好你的 Unlock Code。

:::

**步骤 4：重启**

烧录完成后，按下 `RST` 以启动 Ripple UI。

:::tip

如果点击 `Flash` 后无法继续，请确认设备已进入下载模式。同时检查 USB 数据线、浏览器的串口权限，以及是否有其他应用正在占用该端口。

:::

## 首次设置

在首次启动时，按照触摸屏和按键教程进行操作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png" alt="Seeed Studio 和 MeshCore Ripple UI 启动界面" width={700} height="auto" /></p>

### 创建网络配置文件

1. 完成首次启动时显示的触摸屏和 Select 按钮教程。

2. 选择适合你所在地区的无线电预设，或输入本地网络使用的频率、扩频因子（SF）和其他参数。

3. 使用字母和数字为配置文件命名，不要包含空格。

4. 保存配置文件。如果出现提示，请重启设备以应用设置。

对于两台设备的测试，请在两台设备上使用匹配的无线电设置。选择相同的预设是最简单的方式。使用自定义设置时，请同时检查带宽、编码率和其他参数，而不仅仅是匹配频率和 SF。

### 设置你的名称

1. 点击左侧的 `L`，打开当前网络配置文件，并选择 `Identity`。

2. 将默认名称更改为易于识别的名称，例如 `micha` 或 `michb`。名称最多可包含 12 个字符。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ChangeDeviceName.png" alt="打开网络配置文件，选择 Identity，并更改设备名称" width={1000} height="auto" /></p>

## 浏览界面

点击屏幕左侧的 `G`、`L` 或 `M` 在三个主页之间切换。

<Tabs>

<TabItem value="grid" label="G: Grid" default>

`G` 是一个 3 × 4 网格的可自定义主屏幕。

- 长按空白单元格以添加联系人、群组频道或设置的快捷方式。

- 长按已有快捷方式以将其移除。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_G.jpg" alt="Ripple UI Grid 主页面" width={500} height="auto" /></p>

</TabItem>

<TabItem value="list" label="L: List">

`L` 列出你的网络配置文件、联系人、群组频道以及 `Discover`。使用此页面添加联系人、编辑你的 Identity，并打开会话。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_L.png" alt="Ripple UI List 页面" width={500} height="auto" /></p>

截图中显示的是测试时使用的名称。你的列表将取决于你的配置文件和联系人。

</TabItem>

<TabItem value="map" label="M: Map">

`M` 显示地图、位置以及任何已加载的 GPS 轨迹。

- 拖动屏幕以平移。

- 点击 `+` 或 `−` 以缩放。不支持双指缩放。

- 点击跟随位置按钮以让地图始终以你的位置为中心。启用时按钮会变为橙色，且屏幕保持常亮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_M.jpg" alt="Ripple UI 地图和缩放控件" width={500} height="auto" /></p>

</TabItem>

<TabItem value="extra" label="Extra">

打开主屏幕左下角菜单以访问 `Extra`，其中包含设备设置和工具。

- **Display：** 调整字体大小、主题、动画和强调色。

- **Wi-Fi：** 配置连接和地图下载。地图下载需要解锁码。

- **Networks：** 创建和管理网络配置文件。

- **GPS Config：** 配置 GPS 通信设置；默认设置通常适用于 L2 Pro。

- **Timezone：** 设置本地 UTC 偏移。

- **SX1262：** 检查 LoRa 无线电初始化状态。`code=0` 表示成功。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_Extra.jpg" alt="Ripple UI Extra 系统设置" width={500} height="auto" /></p>

</TabItem>

</Tabs>

### 标题栏和系统菜单

| 区域 | 功能 |
| --- | --- |
| 点击标题栏左侧 | 打开 `Switch To` 以切换网络配置文件 |
| 长按左上角 | 截取屏幕截图 |
| 标题栏中间 | 打开快速开关 |
| 标题栏右侧 | 打开 GPS 信息 |
| 主屏幕左下角菜单 | 打开系统设置，包括 Display、Wi-Fi、Networks 和 Timezone |

### 截图

**长按屏幕左上角** 以捕获当前界面。你可以使用截图分享设置或报告问题。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_screenshot.gif" alt="长按左上角进行截图" width={500} height="auto" /></p>

捕获的截图为 BMP 文件，文件名包含日期和时间，如下所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_bmp_screenshot.png" alt="带有日期和时间文件名的 BMP 截图" width={800} height="auto" /></p>

## 发送你的第一条消息

### 让你的设备可被发现

1. 为两台设备配置匹配的 MeshCore 无线电设置。
2. 为每台设备设置不同的 `Identity` 名称。
3. 将 `Advert` 设置为 `On` 以允许身份广播。
4. 从 `L` 页面打开 `Discover`，等待附近节点出现。

要立即发送身份广播，请打开 `Discover` 菜单：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_discover.bmp" alt="包含 Scan Local、Send ID Local 和 Send ID Broadcast 的 Discover 菜单" width={400} height="auto" /></p>


| 选项 | 功能 |
| --- | --- |
| `Send ID Local` | 向附近设备发送零跳数身份广播 |
| `Send ID Broadcast` | 向网状网络广播你的身份 |
| `Scan Local` | 请求附近支持发现响应的节点回复；常用于发现中继节点 |

`Scan Local` 不会列出所有设备。节点必须在通信范围内并配置为响应。

### 添加联系人

1. 在 `Discover` 中选择目标节点。

2. 打开右上角菜单并选择 `Add to Contacts`。

3. 返回 `L` 并确认联系人已列出。

4. 在另一台设备上重复上述步骤。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_contact.png" alt="发现附近的节点，将节点添加到联系人，并在联系人列表中查看" width={1100} height="auto" /></p>

### 发送私信

1. 打开联系人。

2. 点击输入框并输入消息。

3. 按下 `ENTER` 发送并等待确认。

4. 在另一台设备上打开会话并回复。

私信会等待接收方的确认（ACK）。如果发送失败，请检查无线电设置和距离，然后重试。如果之前的路由不再可用，请在 `Path` 下选择 `Flood (reset)` 以寻找新的路由。

## 地图和 GPS 轨迹

### 准备离线地图

1. 准备一张 32 GB 或更小容量、FAT32 格式化的 microSD 卡。

2. 使用以下文件夹结构将栅格地图瓦片保存在卡上：

```text

/tiles/{zoom}/{x}/{y}.png

```

3. 插入存储卡，启动设备，并打开 `M`。

4. 平移到你的瓦片覆盖区域，并选择一个可用的缩放级别。

`zoom` 是缩放级别；`x` 和 `y` 是瓦片坐标。锁定设备仅渲染 **缩放级别 1–9**。更高的缩放级别需要解锁码。

### 通过 Wi-Fi 下载地图（需要解锁）

1. 按照下方说明解锁设备。

2. 从主屏幕系统菜单中打开 `Wi-Fi`。

3. 输入你的网络名称和密码，并启用地图下载。

4. 按下 `ENTER` 保存，并在提示时重启。

5. 确认 Wi-Fi 菜单显示橙色连接指示。

6. 打开地图并平移或缩放到所需区域。瓦片会按需下载并缓存在 SD 卡上。

### 设置广告中使用的位置

| Advert Location 设置 | 使用的位置 |
| --- | --- |
| `GPS` | 设备 GPS 获取的位置 |
| `Manual` | 在地图上通过 `Advert Loc` 选择的固定位置 |

要使用在地图上选择的点，首先将 `Advert Location` 设置为 `Manual`。在 GPS 模式下，广告会继续使用 GPS 位置。

## 解锁高级功能

你可以在购买解锁码前先试用基础消息功能。当你需要详细地图、Wi-Fi 地图下载、更长轨迹或高级管理功能时，再解锁设备。

### 查找设备序列号

在设备菜单中找到并打开 `Unlock`。记录该屏幕上显示的 **Serial number**。购买时请使用这个完整的序列号，而不是 MAC 地址的最后几位或 Pair Device PIN。

### 获取解锁码

打开 Scott 的 [Ripple Ultra Unlock Code 页面](https://buymeacoffee.com/ripplebiz/e/249834)，按照购买说明操作，并提供设备上显示的序列号。许可证按设备发放；每个许可证只输入一个设备序列号。

如果你的设备附带了适用的解锁码，请继续下一步。

### 在设备上输入解锁码

1. 收到与你序列号对应的 Unlock Code 后，再次打开 `Unlock`。

2. 输入完整的解锁码并提交。

3. 激活成功后，`Unlock` 选项会消失。

4. 打开你想使用的高级功能，并确认其已可用。

请将解锁码与其对应的设备序列号妥善保存。在我们的测试中，使用 `erase_flash` 擦除闪存并重新安装固件后，需要再次输入设备的解锁码。

### 高级功能

- **自动遥测：** 当你打开具有直接路径的会话时请求遥测。如果对端节点允许 GPS 遥测，则显示位置、方向和距离。

- **房间管理员 CLI：** 使用管理员密码访问 Room Server 命令行。

- **中继管理员：** 检查中继状态并远程管理节点。

- **传感器管理员：** 访问传感器命令、遥测和权限管理。

- **更高的地图缩放级别：** 显示高于缩放级别 9 的地图瓦片。

- **Wi-Fi 下载：** 按需下载地图瓦片并缓存在 SD 卡上。

- **更长的 GPS 轨迹：** 记录超过锁定设备允许的 64 个 GPS 点。

## 高级用法

### 创建和切换网络配置文件

1. 打开主屏幕系统菜单并选择 `Networks`。

2. 选择 `New Network`，配置无线电设置并为配置文件命名。

3. 保存，并在提示时重启。

4. 点击标题栏左侧，在 `Switch To` 中选择一个配置文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_new_network.jpg" alt="在 Networks 中创建 MeshCore 网络配置文件" width={500} height="auto" /></p>

每个配置文件都有自己的身份、联系人和偏好设置。打开属于其他配置文件的联系人时，可能会提示你切换配置文件。该提示并不表示设备已检测到对端节点当前使用的是哪个网络。

## 常见问题

### SX1262 状态码

此屏幕显示 LoRa 无线电初始化时的 RadioLib 返回码。`0` 表示初始化成功。该屏幕用于无线电诊断。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_lora_normal.jpg" alt="SX1262 初始化 code=0 表示成功" width={500} height="auto" /></p>

### 发现其他设备

- 确认两台设备都使用兼容的 MeshCore 配置文件，并且无线电设置匹配。

- 在另一台设备上启用 Advert，或让它发送 `Send ID Local`。

- 先在开阔区域进行短距离测试。

- `Scan Local` 只列出响应发现请求的节点；它不能替代所有设备的身份广播。

### 为什么地图是空白的

检查 SD 卡格式、瓦片路径，以及显示区域是否存在瓦片。在锁定设备上，还要检查缩放级别是否在 1–9 范围内。拥有有效的 GPS 位置并不意味着地图瓦片已经下载。

## 资源

- [Ripple 项目和开发者更新](https://buymeacoffee.com/ripplebiz)

- [Ripple Ultra 解锁码](https://buymeacoffee.com/ripplebiz/e/249834)

- [MeshCore 项目和文档](https://github.com/meshcore-dev/MeshCore)

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
