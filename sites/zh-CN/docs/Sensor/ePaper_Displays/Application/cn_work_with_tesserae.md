---
description: 将 Tesserae，这个开源自托管的电子墨水仪表盘服务器，与 reTerminal E1001、E1002、E1003、E1004 以及 reTerminal Sticky 搭配使用。在 Spectra 6 上实现全彩显示，在 E1003 上实现 16 级灰度，在 E1003 和 Sticky 上支持触控。
title: 使用 Tesserae
keywords:
  - 电子纸显示屏
  - Tesserae
  - Home Assistant
  - reTerminal
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - reTerminal E1004
  - reTerminal Sticky
image: https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/cover.webp
slug: /reterminal_e10xx_tesserae
sidebar_position: 12
last_update:
  date: 11/13/2026
  author: Kayden D'Mello
createdAt: '2026-11-09'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_tesserae/
updatedAt: '2026-11-13'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 Tesserae

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/cover.jpg" style={{width:700, height:'auto'}}/></div>

本指南将带你把一台 reTerminal E 系列设备或 reTerminal Sticky，从开箱一路用 **Tesserae** 挂到墙上的仪表盘。你只需在浏览器中刷写一次固件，把设备连接到你自己的 Tesserae 服务器，然后在网页编辑器中设计页面。所有设备的步骤都相同；如果有差异，请在下方选项卡中选择你的设备。

:::tip 全彩与灰度
Tesserae 会以每块屏幕的全部能力来驱动它。**E1002** 和 **E1004** 可以显示 Spectra™ 6 的全部六种颜色，**E1003** 支持 16 级灰度，而 **Sticky** 支持 4 级灰度。服务器会把每一帧渲染成屏幕所期望的精确字节，因此设备只需要负责刷新显示即可。
:::

## 什么是 [Tesserae](https://tesserae.ink/)？

Tesserae 是一个面向电子纸显示屏的开源、自托管仪表盘服务器。你可以在家中将其作为 Home Assistant App、Docker 容器，或在 macOS、Linux、Windows 或 Raspberry Pi 上的普通安装来运行。你在浏览器中用小部件组合仪表盘，每台设备获取自己的画面、刷新显示，然后重新进入休眠。除非你主动选择，否则任何数据都不会离开你的网络。

该项目从 reTerminal E 系列起步，并与之共同成长。E1001 是 Tesserae 最早支持的设备之一，而 E 系列至今仍是该项目网页刷写器上刷写次数最多的硬件之一。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/15-editor-html-view.png" style={{width:700, height:'auto'}}/></div>

### 为什么要使用 Tesserae？

- **自托管且私密**：服务器运行在你自己的硬件上，无需账号、无订阅。如果你不想自己运行服务器，也可以使用托管选项 [Tesserae Cloud](https://cloud.tesserae.ink)。
- **为 Home Assistant 而生**：Tesserae 作为 Home Assistant App 安装。它可以在屏幕上显示你的实体，在带触控的设备上还能回调服务。启用 MQTT 发现后，每块屏幕都会作为一个设备出现在 Home Assistant 中。
- **用尽屏幕的每一种颜色**：E1002 和 E1004 支持 Spectra™ 6 全彩，E1003 支持 16 级灰度。照片会在服务器端进行抖动处理，因此在每块屏幕上都能正确显示。
- **小部件与模板**：天气、日历、交通、任务、照片、Home Assistant 等等，再加上来自目录的社区小部件、主题和完整仪表盘模板。
- **触控与按键**：前面板按键和触摸屏可以切换页面、跳转到某个仪表盘、强制刷新或触发 webhook。在 Sticky 和 E1003 上，页面上的点击区域可以作为控制器使用。
- **电池优先的固件**：设备在两次刷新之间始终保持深度睡眠。固件更新由你自己的服务器签名并通过空中下发，因此你只需在浏览器中刷写一次。
- **开源**： [服务器](https://github.com/dmellok/tesserae) 和 [设备固件](https://github.com/dmellok/tesserae-device-firmware) 都托管在 GitHub 上。

## 兼容硬件

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" 黑白<br/>800 × 480</td>
      <td align="center">7.3" Spectra™ 6（彩色）<br/>800 × 480<br/>在 Tesserae 中支持全彩</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">10.3" 黑白<br/>16 级灰度，1872 × 1404<br/>支持触控</td>
      <td align="center">13.3" Spectra™ 6（彩色）<br/>1200 × 1600<br/>在 Tesserae 中支持全彩</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal Sticky</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-product.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">4 级灰度，480 × 800 竖屏<br/>支持触控</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-Sticky-p-6861.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
同一套固件也适用于 XIAO ePaper 系列，包括 EE02 13.3" Spectra™ 6 套件、EE03 10.3" 套件、XIAO 7.5" ePaper Panel 以及 TRMNL 7.5"（OG）DIY 套件。所有受支持的开发板请参见 [Tesserae 兼容性列表](https://docs.tesserae.ink/compatibility/)。
:::

## 你需要准备什么

- 一台 reTerminal E 系列设备或 reTerminal Sticky
- 一根支持数据传输的 USB-C 线（仅充电线只能为设备供电，电脑无法识别设备）
- 桌面版 Chrome 或 Edge（刷写器使用 Web Serial，Firefox 和 Safari 不支持）
- 一个 2.4 GHz Wi-Fi 网络
- 一台用于运行 Tesserae 服务器的电脑、Raspberry Pi 或 Home Assistant 安装环境

## 步骤 1：安装 Tesserae 服务器

选择适合你环境的方式。每种方式最终都会在浏览器中打开运行在 **8765** 端口上的 Tesserae Web 界面。记下该地址，例如 `http://192.168.1.50:8765`，因为设备在步骤 3 中需要用到它。

| 方式 | 最适合的场景 |
|---|---|
| [Home Assistant App](#home-assistant-app) | 你已经在运行 Home Assistant OS 或 Supervised |
| [Docker](#docker) | 已经在运行容器的 Raspberry Pi、NAS 或 Linux 机器 |
| [Proxmox VE](#proxmox-ve) | 运行 Proxmox 的家庭实验室服务器 |
| [macOS, Linux or Raspberry Pi](#macos-linux-or-raspberry-pi) | 一台常年开机、但不使用容器的电脑 |
| [Windows](#windows) | 一台常年开机的 Windows 电脑 |
| [Tesserae Cloud](#tesserae-cloud) | 你没有自己的服务器 |

:::caution 将它留在你的家庭网络中
Tesserae 仅由一个密码保护，设计用于受信任的家庭网络。不要将其直接暴露在互联网中。若需远程访问，请使用 Tailscale 或 WireGuard 等 VPN。
:::

### Home Assistant App

1. 在 Home Assistant 中打开 **Settings → Apps → App store**。
2. 打开右上角菜单，选择 **Repositories**，并添加：

```text
https://github.com/dmellok/homeassistant-tesserae-addon
```

3. 在 App store 中找到 **Tesserae**，点击 **Install**，然后点击 **Start**，再从侧边栏打开它。Home Assistant 会为你完成登录。

你的设备通过 Home Assistant 自身的地址加上 8765 端口访问 Tesserae，例如 `http://homeassistant.local:8765`。如果你运行了 Mosquitto broker App，Tesserae 会自动使用它，这样你的屏幕稍后就能出现在 Home Assistant 中（见步骤 5）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/26-ha-app-store-tesserae.png" style={{width:400, height:'auto'}}/></div>

### Docker

在已安装 Docker 的 Raspberry Pi、NAS 或 Linux 机器上：

```bash
mkdir ~/tesserae && cd ~/tesserae
curl -fsSLO https://raw.githubusercontent.com/dmellok/tesserae/main/docker-compose.yml
docker compose up -d
```

在保存任何凭据之前，请先设置一个密钥，这样即使容器被重建，它们仍然是可读的。生成一个密钥：

```bash
python3 -c "import secrets; print(secrets.token_hex(32))"
```

将它添加到 `docker-compose.yml` 的 `environment:` 下：

```yaml
TESSERAE_SECRET_KEY: "<the key>"
```

再次运行 `docker compose up -d`，在浏览器中访问该机器 8765 端口的地址，并设置一个密码。

### Proxmox VE

在 Proxmox 主机上运行一条命令即可创建一个非特权的 Debian 13 容器，安装最新的 Tesserae 版本并将其作为服务启动：

```bash
COMMUNITY_SCRIPTS_URL=https://raw.githubusercontent.com/dmellok/tesserae/main/scripts/proxmox \
  bash -c "$(curl -fsSL https://raw.githubusercontent.com/dmellok/tesserae/main/scripts/proxmox/ct/tesserae.sh)"
```

1. 当被询问发行通道时，按 Enter 或等待 10 秒以选择 **stable**。
2. 在容器对话框中，选择 **Default** 使用脚本的大小，或选择 **Advanced** 自行设置 CPU、RAM、磁盘和网络。保留脚本的默认资源大小，包括其 16 GB 磁盘；Tesserae 还会安装用于渲染的 Chromium。如果使用 **Advanced**，请为应用、浏览器依赖和未来更新预留足够的磁盘空间。
3. 完成后，脚本会打印容器的地址。打开 `http://<container-ip>:8765` 并选择一个密码。

以后要更新时，在容器内运行 `update`。

### macOS、Linux 或 Raspberry Pi

在终端中：

```bash
curl -fsSL https://raw.githubusercontent.com/dmellok/tesserae/main/install.sh | bash
```

在浏览器中访问该机器 8765 端口的地址并选择一个密码。在 Raspberry Pi 上，建议使用 64 位操作系统并至少配备 2 GB RAM。

### Windows

在 PowerShell 中：

```powershell
iwr https://raw.githubusercontent.com/dmellok/tesserae/main/install.ps1 -UseBasicParsing | iex
```

在浏览器中访问该电脑 8765 端口的地址并选择一个密码。如果之后设备无法连接到服务器，请在 Windows 防火墙的专用网络中放行 8765 端口。

### Tesserae Cloud

[Tesserae Cloud](https://cloud.tesserae.ink) 为你托管服务器，并可与相同的设备配合使用。使用邮箱登录，然后在 **Settings → Panels → Add a panel** 下创建一个 claim code。在步骤 3 中选择 **Cloud**，并输入该 claim code，而不是服务器地址。

### 首次运行

第一次打开 Tesserae 时（作为 Home Assistant App 运行除外，它会自动为你登录），需要先选择一个密码。随后会出现一个简短的设置向导：

1. **Help out**：选择是否向 Tesserae 项目发送匿名安装计数，或保持安装离线。
2. **Timezone**：确认检测到的时区，以便计划任务按你的本地时间运行。
3. **Transport**：保持选择 **REST API**。对于 reTerminal 和 Sticky 这类电池设备，这是正确的选择。
4. **Device**：此页面会等待面板自我报告。你可以点击 **Skip for now** 并在步骤 4 中批准该设备，或者在刷写时保持此页面打开：当设备出现在 **Discovered** 下时，为其命名并点击 **Register**。你不需要配对码。
5. **Dashboard**：选择 **I'll set this up later**，或者在完成步骤 4 后返回此处，为你的设备创建一个入门仪表盘并绑定到该设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/01-first-run-set-password.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/02-wizard-welcome.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/05-wizard-transport.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/06b-wizard-device-discovered.png" style={{width:700, height:'auto'}}/></div>

## 步骤 2：刷写 Tesserae 固件

<Tabs groupId="tesserae-hardware">
<TabItem value="e-series" label="reTerminal E 系列" default>

:::caution macOS：请先安装 CH340 驱动
reTerminal E 系列通过 WCH CH340 USB-串口芯片连接，而 macOS 没有内置该芯片的驱动。请安装 [WCH 的 CH34x 驱动](https://github.com/WCHSoftGroup/ch34xser_macos)，然后在 **System Settings → General → Login Items & Extensions → Driver Extensions** 中启用它。Linux 和当前的 Windows 版本通常会自动安装兼容驱动。如果 Windows 未检测到串口，请安装 [WCH CH341SER 驱动](https://www.wch-ic.com/downloads/CH341SER_EXE.html)；Windows 10 及更早版本可能需要它。在 Linux 上，如果串口没有出现，请运行 `sudo usermod -aG dialout $USER`，然后注销并重新登录。
:::

1. 使用 USB-C 数据线将设备连接到电脑。
2. 在 Chrome 或 Edge 中打开 **[tesserae.ink/flash](https://tesserae.ink/flash)**。
3. 在 **Choose your panel** 下选择你的 reTerminal 型号，然后在 **Firmware build** 下选择最新版本。
4. 点击 **Next: plug it in**，然后点击 **Connect & flash**，并选择设备的串口。
5. 等待 60 到 90 秒。在刷写工具确认成功之前，请保持数据线连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/20-flasher-reterminal-selected.png" style={{width:700, height:'auto'}}/></div>

刷写完成后，刷写工具的 **Connect it** 步骤可以通过同一根数据线将你的 Wi-Fi 信息和服务器地址发送到设备。选择 **My own Tesserae server**，输入步骤 1 中的地址，然后跳到步骤 4。

</TabItem>
<TabItem value="sticky" label="reTerminal Sticky">

Sticky 用户可以直接在 Sticky Playground 中刷写 Tesserae。

1. 打开 [Sticky Playground 中的 Tesserae 页面](https://www.seeedstudio.com/sticky/playground/tesserae/)，或在 Playground 中找到 **Tesserae** 卡片并点击 **Flash Now**。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/21-playground-tesserae-card.png" style={{width:300, height:'auto'}}/></div>

2. 使用 USB-C 数据线将 Sticky 连接到电脑，并在刷写完成前保持连接。
3. 在 **Version and setup** 下选择页面中显示的 Tesserae 固件版本。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/22-playground-tesserae-page.png" style={{width:700, height:'auto'}}/></div>

4. 在 **Flash to device** 下选择一种刷写模式：
   - **Standard flash** 写入固件并保留 Sticky 已保存的 Wi-Fi 设置。
   - **Erase flash + flash** 会先清空整个 flash，然后再写入。若你之前使用的是其他固件，请选择此项。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/23-playground-flash-mode.png" style={{width:500, height:'auto'}}/></div>

5. 点击 **Connect & flash**。当 Chrome 或 Edge 弹出提示时，选择 Sticky 的串口（显示为 **USB Single Serial**），然后点击 **Connect**。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/24-playground-serial-port.png" style={{width:300, height:'auto'}}/></div>

6. 等待进度条和 **Device Log** 显示刷写完成。Playground 会自动为你重启设备。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/25-playground-device-log.png" style={{width:350, height:'auto'}}/></div>

Playground 使用与 [tesserae.ink/flash](https://tesserae.ink/flash) 相同的固件包，因此你可以任选其一。

</TabItem>
</Tabs>

:::note
刷写 Tesserae 会替换当前设备上的固件。你可以随时通过刷写其他固件恢复。
:::

## 步骤 3：连接到 Wi-Fi

刷写完成后，设备会显示 **Setup mode** 屏幕，其中包含一个二维码、配网热点名称及其密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-setup-mode.jpg" style={{width:300, height:'auto'}}/></div>

1. 在手机或电脑上连接到 Wi-Fi 网络 **Tesserae-Setup**（密码为 `tesserae`），可以扫描二维码或在列表中选择该网络。
2. 配置页面会自动打开。如果没有，请在浏览器中访问 `http://192.168.4.1`。
3. 输入你的 2.4 GHz Wi-Fi 名称和密码，或从设备扫描到的网络列表中选择你的网络。
4. 选择设备连接 Tesserae 的方式：
   - **Local**（默认）：输入你的 Tesserae 服务器地址，例如 `http://192.168.1.50:8765`。将 **Pairing code** 留空，你会在步骤 4 中批准该设备。
   - **Cloud**：输入 Tesserae Cloud 中 **Settings → Panels → Add a panel** 所显示的八位 claim code。
   - **Relay**：用于设备与服务器不在同一网络的情况。输入服务器上 **Settings → Cloud relay → Add a remote panel** 中显示的配对码。
5. 点击 **Save & restart**。设备会加入你的 Wi-Fi 并向服务器自我报告。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/07-device-setup-portal-phone.png" style={{width:300, height:'auto'}}/></div>

:::tip
在最后一个访客离开后，配网热点会继续保持 15 分钟。如果它已超时，请重启设备，或在带有前置按键的板卡上按下前置按键，以重新唤出配网屏幕。
:::

## 步骤 4：在 Tesserae 中注册设备

新设备会等待你的批准，这样其他人的设备就无法附着到你的服务器上。在你批准之前，设备会显示 **Almost done**，并提示你在 Tesserae 的 **Settings → Devices** 中批准它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-almost-done.jpg" style={{width:300, height:'auto'}}/></div>

1. 在 Tesserae Web 界面中，侧边栏会出现 **New device** 标记。打开 **Settings → Devices**，你会看到一条横幅提示“1 device has been heard but is not registered”。
2. 点击横幅上的 **Register**。Tesserae 会显示设备的型号、面板尺寸和固件版本，并已为你选中型号。
3. 为设备设置一个显示名称，例如 “Kitchen” 或 “Hallway”，然后点击 **Register**。
4. 设备在下次签到时会获取其访问令牌，并移动到 **Devices** 列表中。其卡片会显示当前显示内容、电池电量、固件版本以及下次计划更新的时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/08-devices-discovered.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/09-register-name-device.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/10-device-registered.png" style={{width:700, height:'auto'}}/></div>

## 步骤 5：构建一个 Dashboard 并推送

1. 打开 **Dashboards → New dashboard**，或者在 **Settings → Widgets → Browse catalog** 中安装一个现成的模板。
2. 使用小部件填充布局。将预览切换到 **Panel view**，即可看到设备将要绘制的精确画面，包括其颜色或灰度。
3. 在 **Target devices** 下勾选你的设备并点击 **Push**。设备会在下一次唤醒时绘制新的画面。

:::tip 最快的第一个 dashboard
回到设置向导的 **Dashboard** 步骤，**Create a starter dashboard** 会创建一个适配你设备尺寸并绑定到该设备的时钟。点击 **Push to panel** 以确认一切已连接，然后在编辑器中打开它并进行个性化修改。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/16-editor-panel-view.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/13-device-card-after-push.png" style={{width:700, height:'auto'}}/></div>

每种面板的一些提示：

- **E1001 和 Sticky**：粗体、高对比度的字体效果最佳。
- **E1002 和 E1004**：为每个元素分配自己的色块。一次完整的 Spectra™ 6 刷新在 E1002 上大约需要 30 秒，在 E1004 上大约需要 40 秒。这对该面板来说是正常的。
- **E1003**：照片和渐变以 16 级灰度渲染，较高的画布适合列表和日程。

要在一天中更改设备显示的内容，打开 **Lineups** 并选择 **Set up a display**。你可以选择页面、刷新频率以及设备在夜间保持静音的时间。对于电池供电设备，**Smart sync** 会在设备唤醒前刚好渲染每一帧，这样既能始终显示最新内容，又不会浪费电量。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-dashboard-desk.jpg" style={{width:700, height:'auto'}}/></div>

### 连接你的数据

- **Home Assistant**：在 **Settings → Widgets → Home Assistant Core** 中添加一个长期有效的访问令牌以及你的 Home Assistant URL。若希望每个面板在 Home Assistant 中显示为一个设备，请在 **Settings → Server** 中打开 **Home Assistant discovery**。如果你运行了 Mosquitto broker，App 已经会使用 Home Assistant 的该 broker。
- **日历**：在 **Settings → Widgets → Calendar Feeds** 中添加 iCal URL。
- **更多小部件**：社区小部件、主题和模板位于 **Settings → Widgets → Browse catalog**。

## 按钮和触控

<Tabs groupId="tesserae-hardware">
<TabItem value="e-series" label="reTerminal E 系列" default>

三个前置按钮开箱即用：

| 按钮 | 默认操作 |
|---|---|
| Left | 上一个 dashboard |
| Right | 下一个 dashboard |
| Refresh | 重新渲染并再次绘制当前 dashboard |

在设备卡片上的 **Controls → Button map** 下为每个设备更改映射。按钮也可以直接跳转到特定 dashboard 或触发一个 webhook。长按 **Refresh** 大约 **3 秒** 后松开，可通过 Tesserae 配套 App 切换到蓝牙设置。持续按住 **20 秒** 将执行出厂重置，这会清除已保存的 Wi-Fi 和服务器设置，并将设备恢复到设置界面。

**E1003** 还支持触控。请参阅 Sticky 选项卡中的 Touch 部分；两种设备上的工作方式相同。

</TabItem>
<TabItem value="sticky" label="reTerminal Sticky">

- 按下 **电源按钮** 一次即可唤醒 Sticky 并立即获取当前页面。
- 长按电源按钮大约 **3 秒** 后松开，可通过 Tesserae 配套 App 切换到蓝牙设置。
- 长按电源按钮 **20 秒** 可执行出厂重置。这会清除已保存的 Wi-Fi 和服务器设置，并将 Sticky 恢复到设置界面。

### 触控

触控默认关闭以节省电量。要打开它，请打开设备卡片，进入 **General**，并开启 **Touch input**。页面上的触控区域随后会充当按钮。它们可以切换 Home Assistant 灯光、切换页面或触发操作，面板会在一秒内通过部分刷新确认每次点击。

触控会在深度睡眠期间保持触控控制器供电。为了获得更长的电池寿命，将 **Touch wake** 设置为 **Double tap or swipe**，其电流约为 1 mA。在该设置下，单击不会唤醒面板，但双击或滑动会。触控在 USB 供电下效果最佳。

如果你希望蜂鸣器在面板重绘前确认每次点击或按压，请打开 **Beep on interaction**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-touch-lights.png" style={{width:300, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 固件更新

固件更新通过空中下发（OTA）。Tesserae Web UI 中的 **Settings → Firmware** 会显示每个设备已安装和可用的版本。点击 **Queue update**，或打开 **Auto**，设备将在下一次唤醒时下载、验证并安装签名更新。你只需在全新安装或恢复时再次通过浏览器烧录。

当在线功能开启时（**Settings → System → Online features**），Tesserae 会检查新固件。在离线安装中，从[固件发布页](https://github.com/dmellok/tesserae-device-firmware/releases)下载 `descriptor-<kind>.json` 文件，并在 **Manual import** 下导入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/19b-firmware-update-available-crop.png" style={{width:700, height:'auto'}}/></div>

## 常见问题 FAQ

### Q1：刷写工具找不到我的设备

- 使用支持数据传输的 USB-C 线缆，以及支持数据的 USB 接口。一些台式机机箱前面板的接口不支持数据。
- 使用 Chrome 或 Edge。Firefox 和 Safari 不支持 Web Serial。
- 在 macOS 上使用 reTerminal E 系列时，请安装并启用 CH340 驱动程序（参见步骤 2）。
- 关闭任何可能正在使用串口的其他程序。

### Q2：设备没有出现在 Discovered 下

- 检查设备是否已退出设置模式。如果仍显示设置界面，请重新输入 Wi-Fi 信息。
- 确保你的 Wi-Fi 网络为 2.4 GHz。
- 检查服务器地址是否能在同一网络的其他设备上正常访问，例如在浏览器中打开 `http://<your-server>:8765`。

### Q3：设备显示 “Can't reach the server” 或 “Wi-Fi unavailable”

设备会在面板上显示问题并自行重试。如果 Wi-Fi 断开，它会每分钟重试一次，持续约 12 分钟，然后打开一次设置门户，持续 15 分钟。之后它会在后台持续重试已保存的网络，并在网络恢复时重新加入。要再次打开设置门户，请重启设备或按下前面板按钮。

### Q4：画面已下载但面板没有刷新显示

电池电量可能过低，无法刷新面板。请连接 USB 供电，充电一小时后再试。

## 特别鸣谢

特别感谢 **Seeed Studio** 团队在 reTerminal E 系列和 Sticky 早期开发过程中的全程支持，尤其感谢 **Mason Cao** 和 **Lily Li**。

同时感谢为 Tesserae 项目做出贡献的开发者们，正是他们让本项目成为可能，特别是 **[skynet01](https://github.com/skynet01)**、**[charmmmz](https://github.com/charmmmz)**、**[theiereman](https://github.com/theiereman)**、**[vaibhav8a](https://github.com/vaibhav8a)**、**[partridgeworks](https://github.com/partridgeworks)**、**[bablokb](https://github.com/bablokb)**、**[varanu5](https://github.com/varanu5)** 和 **[Frankynov](https://github.com/Frankynov)**，以及更广泛的社区在本次集成中提供的小部件、固件测试和硬件反馈。

## 资源

- **[Website]** [Tesserae](https://tesserae.ink)：项目主页、兼容性列表和浏览器刷写工具
- **[Docs]** [Tesserae 文档](https://docs.tesserae.ink/)：服务器安装、设备、触控、按钮、Lineups 和 Home Assistant
- **[Docs]** [Seeed ePaper 快速上手](https://docs.tesserae.ink/quickstart/seeed-unified/)：相同步骤，并包含每款设备的说明
- **[GitHub]** [Tesserae 服务器](https://github.com/dmellok/tesserae)
- **[GitHub]** [Tesserae 设备固件](https://github.com/dmellok/tesserae-device-firmware)：源码、发布版本和问题跟踪
- **[GitHub]** [Tesserae Home Assistant App](https://github.com/dmellok/homeassistant-tesserae-addon)
- **[Community]** [GitHub Discussions](https://github.com/dmellok/tesserae/discussions)
- **[Wiki]** [reTerminal E1003 入门指南](/cn/getting_started_with_reterminal_e1003)
- **[Wiki]** [reTerminal E1004 入门指南](/cn/getting_started_with_reterminal_e1004)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
