---
description: 使用 Seeed HA Discovery 集成将您的 Seeed Studio IoT Button V2 连接到 Home Assistant，实现无缝智能家居控制。
title: 通过 Seeed HA Discovery 将 IoT Button 连接到 Home Assistant
keywords:
  - IoT Button
  - Home Assistant
  - Seeed HA Discovery
  - ESP32-C6
  - Smart Home
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /cn/iot_button_v2_ha_discovery
last_update:
  date: 12/17/2025
  author: Citric
---

# 通过 Seeed HA Discovery 将 IoT Button V2 连接到 Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:800, height:'auto'}}/></div>

Seeed Studio IoT Button V2 是一款由 ESP32-C6 驱动的多功能智能开关，提供可定制的 RGB LED 指示器、可编程事件触发器和 USB-C 充电功能。在本项目中，我们将指导您使用 Seeed HA Discovery 集成将 IoT Button V2 连接到 Home Assistant - 这是一个专为轻松连接 ESP32 设备到 Home Assistant 而设计的解决方案，具有自动发现和通过 WebSocket 进行实时通信的功能。

与使用 ESPHome 相比，此解决方案专为深度睡眠友好的按钮使用场景而设计。ESPHome 目前仅支持 IoT Button V2 的浅睡眠模式，这会导致长期功耗较高，并且需要您在实际按钮按压能够可靠触发实体之前，先用专门的按压来唤醒设备。使用此固件和 Seeed HA Discovery 集成，按钮可以正确进入深度睡眠并在按钮交互时直接唤醒，避免了这些限制，提供更响应和更节能的体验。

## 入门指南

本项目将引导您完成三个主要阶段：使用基于网页的刷写器将固件刷写到您的 IoT Button V2、通过 HACS（Home Assistant 社区商店）安装 Seeed HA Discovery 集成，以及在 Home Assistant 中发现您的按钮以进行智能家居自动化。

### 所需材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button V2</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green 是自动化您家庭的最简单且最注重隐私的方式。它提供轻松的设置，让您只需一个系统就能控制所有智能设备，所有数据默认本地存储。这款设备受益于蓬勃发展的 Home Assistant 生态系统，并将通过开源每月得到改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，或者您可以使用任何带有 Supervisor 的 Home Assistant 主机。

:::tip 安装 Home Assistant
我们还编写了如何在一些 Seeed Studio 产品上安装 Home Assistant 的教程，请参考它们。

- **[在 ODYSSEY-X86 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)**
- **[在 reTerminal 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/)**
- **[在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)**

如果您没有使用 Seeed Studio 产品，您也可以在官方 Home Assistant 网站上查看并学习如何为其他产品安装 Home Assistant。

- **[Home Assistant 安装](https://www.home-assistant.io/installation/)**
:::

### 前期准备

在开始此项目之前，请确保您具备以下条件：

- 一个运行中的 Home Assistant 实例（Home Assistant OS、Container 或 Core）
- 在您的 Home Assistant 上安装了 HACS（Home Assistant 社区商店）
- 一台装有 Google Chrome 或 Microsoft Edge 浏览器的计算机（基于网页的固件刷写所需）
- 您的 WiFi 网络名称（SSID）和密码
- 您的 IoT Button V2 和一根 USB-C 数据线用于连接

:::tip
如果您还没有安装 HACS，请先按照 [官方 HACS 安装指南](https://hacs.xyz/docs/setup/download/) 进行设置。安装 Seeed HA Discovery 集成需要 HACS。
:::

## 将固件刷写到 IoT Button V2

[Seeed HA Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery) 是一个完整的解决方案，用于轻松将 ESP32/nRF52840 设备连接到 Home Assistant，第一步是将适当的固件刷写到您的 IoT Button V2。

:::caution
基于网页的固件刷写器**仅兼容 IoT Button V2**。目前不支持与 IoT Button V1 一起使用。
:::

### 步骤 1. 访问网页刷写器

打开 Google Chrome 或 Microsoft Edge 浏览器并导航到 Seeed HA Discovery 网页刷写器：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即刷写 🖱️</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/2.png" style={{width:1000, height:'auto'}}/></div>

:::note
Web Serial 在 [Google Chrome 和 Microsoft Edge 浏览器中可用（但在您的 iOS 设备上不可用）](https://esphome.github.io/esp-web-tools/)。确保您在台式机或笔记本电脑上使用支持的浏览器。
:::

### 步骤 2. 连接您的 IoT Button V2

:::caution
如果您正在使用 Zigbee/ESPHome 固件，请注意设备是否自动进入睡眠模式。如果设备进入睡眠模式，您可能无法找到其串行端口。在刷写固件之前，请确保设备的蓝色 LED 亮起并保持唤醒状态。
:::

**步骤 2.1.** 使用 USB-C 数据线将您的 IoT Button V2 连接到计算机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/3.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2.2.** 在网页刷写器页面上，找到 **IoT Button V2** 固件选项并点击 **"Connect"** 按钮。

**步骤 2.3.** 浏览器弹窗将显示可用的串行端口。选择对应您的 IoT Button V2 的端口（通常标记为 USB JTAG 或 serial）并点击 **"Connect"**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/5.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 刷写固件

**步骤 3.1.** 连接后，点击 **"Install IoT Button V2"** 按钮开始固件上传过程。

**步骤 3.2.** 然后您需要选择是否擦除设备。如果您只想更新设备固件而不丢失网络凭据，可以不选中此选项并点击 Next。如果您正在从另一个固件切换，我强烈建议在首次刷写固件时选中此按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/7.png" style={{width:600, height:'auto'}}/></div>

刷写器将擦除现有固件并上传新的 Seeed HA Discovery 固件。此过程通常需要 1-2 分钟。在此过程中请勿断开设备连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/8.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.3.** 当您看到 "Installation complete!" 消息时，您的固件已成功刷写。

### 了解固件功能

具有深度睡眠功能的 IoT Button V2 固件提供几个关键功能：

**电源管理：**

- deep_sleep 组件可用于在一定时间后自动让 ESP32 进入深度睡眠模式。这对于使用电池运行的节点特别有用，因此需要尽可能节约能源[[1]](https://esphome.io/components/deep_sleep/)。
- 按钮在 3 分钟不活动后进入浅睡眠模式以节约电池电量
- 按下按钮可从睡眠中唤醒

**按钮事件：**

- **单击**：在 Home Assistant 中触发单击事件
- **双击**：在 Home Assistant 中触发双击事件
- **长按**：触发长按事件（通常 1+ 秒）
- **三击**：进入开发者模式，设备保持唤醒 3 分钟，允许您刷写固件而不丢失串行端口连接
- **长按（6+ 秒）**：LED 闪烁后，释放按钮以启动网络重新配置模式，允许您配置新的 Wi-Fi 网络

**LED 反馈：**

- RGB LED 为按钮按压和连接状态提供视觉反馈
- 不同状态的可定制 LED 颜色

**电池监控：**

- 基于 ADC 的电压读取用于电池电量估算
- 向 Home Assistant 实时报告电池状态

<svg
viewBox="0 0 800 450"
width="100%"
height="auto"
style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', display: 'block' }}
>
{/* Background for Dark Mode Support */}
<rect x="0" y="0" width="800" height="450" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

{/* Header */}
<text x="400" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">
    IoT Button V2：生命周期和事件
</text>

{/* --- ACTIVE STATE (Top Center) --- */}
<g transform="translate(300, 60)">
    <rect x="0" y="0" width="200" height="90" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
    <text x="100" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">活动状态</text>
    <line x1="20" y1="35" x2="180" y2="35" stroke="#93c5fd" strokeWidth="1" />
    <text x="100" y="55" textAnchor="middle" fontSize="11" fill="#1e40af">评估按压类型</text>
    <text x="100" y="70" textAnchor="middle" fontSize="11" fill="#1e40af">发送 API 事件到 HA</text>
</g>

{/* --- DEEP SLEEP STATE (Bottom Center) --- */}
<g transform="translate(300, 320)">
    <rect x="0" y="0" width="200" height="80" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />
    <text x="100" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">深度睡眠</text>
    <text x="100" y="50" textAnchor="middle" fontSize="11" fill="#94a3b8">超低功耗</text>
    <text x="100" y="65" textAnchor="middle" fontSize="10" fill="#94a3b8">等待 GPIO 唤醒</text>
</g>

{/* --- WIFI CONFIG (Left Side) --- */}
<g transform="translate(50, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6b21a8">WIFI 配置</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#d8b4fe" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#7e22ce">AP 模式激活</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#7e22ce">重新配置网络</text>
</g>

{/* --- DEVELOPER MODE (Right Side) --- */}
<g transform="translate(570, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9a3412">开发者模式</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#fdba74" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#c2410c">OTA 更新已启用</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#c2410c">超时：3 分钟</text>
</g>

{/* --- TRANSITIONS --- */}

{/* Active -> Config (Left) */}
<path d="M300 105 L230 105 L230 160 L140 160 L140 180" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowPurple)" />
<rect x="160" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#9333ea" strokeWidth="1"/>
<text x="190" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7e22ce">长按 6 秒</text>

{/* Active -> Dev (Right) */}
<path d="M500 105 L570 105 L570 160 L660 160 L660 180" fill="none" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowOrange)" />
<rect x="580" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#ea580c" strokeWidth="1"/>
<text x="610" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c2410c">三击</text>

{/* Active -> Sleep (Center Down) */}
<path d="M380 150 L380 310" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="350" y="240" textAnchor="middle" fontSize="10" fill="#64748b">任务完成</text>

{/* Sleep -> Active (Wakeup) */}
<path d="M420 320 L420 160" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />
<rect x="380" y="200" width="80" height="20" rx="4" fill="#ecfdf5" stroke="#10b981" />
<text x="420" y="214" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">唤醒</text>

{/* Config -> Sleep */}
<path d="M140 270 L140 360 L290 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="140" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(-90, 130, 320)">已完成</text>

{/* Dev -> Sleep */}
<path d="M660 270 L660 360 L510 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="675" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(90, 675, 320)">超时</text>

{/* LED Legend */}
<g transform="translate(50, 420)">
    <circle cx="10" cy="5" r="4" fill="#22c55e" />
    <text x="20" y="9" fontSize="10" fill="#475569">按压（绿色）</text>
    <circle cx="100" cy="5" r="4" fill="#f97316" />
    <text x="110" y="9" fontSize="10" fill="#475569">开发模式（橙色）</text>
</g>

<defs>
    <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
    </marker>
    <marker id="arrowGrey" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
    </marker>
    <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#ea580c" />
    </marker>
    <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#9333ea" />
    </marker>
</defs>
</svg>

## 安装 Seeed HA Discovery 集成

现在您的 IoT Button V2 已经有了合适的固件，下一步是通过 HACS 在 Home Assistant 中安装 Seeed HA Discovery 集成。

### 步骤 4. 安装 HACS（如果尚未安装）

如果您还没有安装 HACS：

**步骤 4.1.** 安装 Home Assistant Community Store (HACS) 以便在 Home Assistant 中安装 Seeed HA Discovery 插件。

**步骤 4.2.** 按照官方 HACS 安装指南进行操作：https://www.hacs.xyz/docs/use/download/download/#to-download-hacs

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/11.png" style={{width:1000, height:'auto'}}/></div>

**步骤 4.3.** 您可能需要重启 Home Assistant 以便 HACS 完全集成到您的系统中。

### 步骤 5. 添加 Seeed HA Discovery 仓库

**步骤 5.1.** 导航到 Seeed HA Discovery GitHub 仓库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>前往仓库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 5.2.** 在 README 部分，找到 ⚡ **一键安装** 区域并点击 **OPEN HACS REPOSITORY ON MY HA** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/9.png" style={{width:800, height:'auto'}}/></div>

:::tip
此按钮将自动重定向您到您的 Home Assistant 实例并打开 HACS 仓库添加页面。
:::

**步骤 5.3.** 将出现一个重定向页面，显示您的 Home Assistant URL。验证检测到的 Home Assistant 地址是否正确（它应该与您的 Home Assistant 的 IP 地址或域名匹配）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/10.png" style={{width:600, height:'auto'}}/></div>

- 如果地址正确，点击 **Open link** 继续

- 如果地址不正确，请手动输入正确的 Home Assistant URL，格式为：`http://YOUR_HA_IP:8123` 或 `https://YOUR_HA_DOMAIN`

**步骤 5.4.** Home Assistant 将打开并显示 HACS 仓库添加对话框，其中已经填入了 Seeed HA Discovery 仓库 URL。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/4.png" style={{width:1000, height:'auto'}}/></div>

**步骤 5.5.** 点击右下角的 **Download** 将仓库添加到 HACS。确保您使用的是插件的最新版本。安装脚本完成后，您需要重启 Home Assistant 以应用更改。您可以通过 UI 重启 Home Assistant，方法是转到 Settings > System > Restart

:::note
如果一键按钮不起作用，您可以手动添加仓库：

1. 在您的 Home Assistant 侧边栏中打开 HACS

2. 点击右下角的菜单按钮（三个点）

3. 选择 "Custom repositories"

4. 输入 `https://github.com/limengdu/Seeed-Homeassistant-Discovery` 并选择类别 "Integration"
:::

## 配置 WiFi 并发现 IoT Button

安装集成后，您现在可以配置您的 IoT Button V2 连接到您的 WiFi 网络并在 Home Assistant 中发现它。

### 步骤 6. 在 IoT Button V2 上配置 WiFi

**步骤 6.1.** 刷写固件后，您的 IoT Button V2 将创建一个 WiFi 接入点 (AP) 用于初始配置。AP 名称通常为 `Seeed_IoT_Button_V2_AP`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/12.png" style={{width:400, height:'auto'}}/></div>

**步骤 6.2.** 使用您的智能手机或计算机连接到此 WiFi 接入点。

**步骤 6.3.** 强制门户应该会自动打开。如果没有，请打开网络浏览器并导航到 `http://192.168.4.1`。

**步骤 6.4.** 在配置门户中，输入您的家庭 WiFi 网络凭据：

:::note
请注意，IoT Button 目前不支持在 5G 频段上运行的网络。
:::

- **SELECTED NETWORK**：您的 WiFi 网络名称
- **PASSWORD**：您的 WiFi 密码

**步骤 6.5.** 点击 **"Connect"** 保存配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/17.png" style={{width:400, height:'auto'}}/></div>

**步骤 6.6.** IoT Button V2 将重启并连接到您的 WiFi 网络。RGB LED 将显示蓝色。

### 步骤 7. 在 Home Assistant 中添加 IoT Button

**步骤 7.1.** 重启后，点击侧边栏中的 Settings 打开设置菜单。在设置菜单中，导航到 **Devices & Services**。

**步骤 7.2.** 如果您的 IoT Button V2 成功连接到 WiFi 网络，设备将在连接到 WiFi 后被 Home Assistant 自动发现。如果设备未被自动检测到，您也可以通过点击右下角的 "Add Integration"，搜索 "Seeed HA Discovery"，并输入设备的 IP 地址来手动添加。

:::tip
设备的 IP 地址可以从串口日志或路由器后台获取。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/20.png" style={{width:1000, height:'auto'}}/></div>

**步骤 7.3.** 按照屏幕提示完成集成设置。您可能需要将按钮分配到家中的某个区域。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/21.png" style={{width:500, height:'auto'}}/></div>

**步骤 7.4.** 配置完成后，您的 IoT Button V2 将出现在 Home Assistant 仪表板中，包含按钮事件、电池状态和 LED 控制的可用实体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 8. 创建自动化

现在您的 IoT Button 已连接，您可以在 Home Assistant 中创建自动化：

**步骤 8.1.** 导航到 **Settings > Automations & Scenes**。

**步骤 8.2.** 点击 **"Create Automation"** 并选择 **"Start with an empty automation"**。

**步骤 8.3.** 对于 **Trigger**，选择您的 IoT Button 设备并选择事件类型（单击、双击或长按）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/22.png" style={{width:1000, height:'auto'}}/></div>

**步骤 8.4.** 对于 **Action**，选择您希望发生的操作（例如，打开灯光、触发场景、发送通知）。

**步骤 8.5.** 保存您的自动化并通过按下 IoT Button 进行测试！

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



