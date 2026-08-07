---
description: 将 TRMNL 与任意兼容的 Seeed 电子纸产品一起使用 - reTerminal E1001、E1002、E1003、E1004、TRMNL 7.5" (OG) DIY 套件或 XIAO 7.5" 电子纸面板。
title: 搭配 TRMNL 使用
keywords:
  - 电子纸显示屏
  - TRMNL
  - reTerminal
  - reTerminal E1003
  - reTerminal E1004
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sidebar_position: 3
last_update:
  date: 08/05/2026
  author: dimo
aliases:
  - /ogdiy_kit_works_with_trmnl
  - /xiao_7_5_inch_epaper_panel_with_trmnl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_trmnl/
updatedAt: '2026-08-05'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 搭配 TRMNL 使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

本指南是将 **TRMNL** 与任意兼容的 Seeed 电子纸产品一起使用的唯一权威来源。在每个需要选择硬件的步骤中只需选择一次硬件，其余工作流程完全相同。

:::caution 硬件支持
TRMNL 官方支持 **reTerminal E1001**、**reTerminal E1002**、**reTerminal E1003**、**reTerminal E1004**、**TRMNL 7.5" (OG) DIY Kit** 和 **XIAO 7.5" ePaper Panel**。**E1002** 和 **E1004** 采用全彩 Spectra™ 6 面板，但 TRMNL 固件会以**单色模式**渲染其内容。**E1003** 的电容触摸面板仅在 SenseCraft HMI 固件下可用；TRMNL 固件使用设备上的物理按键。
:::

## 什么是 [TRMNL](https://trmnl.app/)？

TRMNL 是一个创新平台，旨在帮助人们在日益分心的数字世界中保持专注与平静。TRMNL 成立于 2023 年，很快就成为 E Ink® 仪表盘管理的领先解决方案，以独特方式展示信息，同时避免传统屏幕带来的持续通知和干扰。

TRMNL 的核心理念是：技术应当提升我们的生活，而不是不断索取我们的注意力。该平台通过 E Ink® 显示屏，以优雅的方式让你一眼查看重要信息，带来更专注、更少打扰的技术体验。

### 为什么要使用 TRMNL？

- **简化的仪表盘创建**：TRMNL 不断增长的应用和集成库，让你无需复杂编程即可轻松创建自定义信息显示。
- **低功耗**：TRMNL 的高效软件结合 E Ink® 极低的功耗需求，打造出极其节能的解决方案。
- **无干扰的信息呈现**：在没有通知和眼疲劳的情况下获取所需信息。
- **定期更新**：TRMNL 正在积极开发中，每周都会加入新功能和新集成。
- **对开发者友好**：TRMNL 的开放 API 和开发者工具支持自定义插件和集成。

## 兼容硬件

### reTerminal E 系列

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
      <td align="center">7.5" 单色<br/>一体式终端</td>
      <td align="center">7.3" Spectra 6（彩色）<br/>一体式终端<br/>在 TRMNL 中为单色模式</td>
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
      <td align="center">10.3" 单色<br/>16 级灰度<br/>一体式终端</td>
      <td align="center">13.3" Spectra 6（彩色）<br/>一体式终端<br/>在 TRMNL 中为单色模式</td>
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

### TRMNL DIY 套件与 XIAO 面板

<div class="table-center">
  <table align="center">
    <tr>
      <th>TRMNL 7.5" (OG) DIY Kit</th>
      <th>XIAO 7.5" ePaper Panel</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" 单色 + DIY 外壳<br/>XIAO ESP32-S3 Plus 驱动板</td>
      <td align="center">7.5" 单色裸面板<br/>直接搭配 XIAO ESP32-C3</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 步骤 1：TRMNL 账号设置与 BYOD 访问

在将设备连接到 TRMNL 之前，你需要一个 TRMNL 账号和 BYOD（自带设备，Bring Your Own Device）访问权限——无论使用哪种硬件，流程都相同。

1. **购买 TRMNL 访问权限**

   - 在此购买 TRMNL 网页应用 + 设备功能的访问权限：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - 这将为你提供使用 TRMNL 平台所需的凭据。
   - 前往 [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) 激活虚拟设备（购买后可能需要最多 10 分钟）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **创建 TRMNL 账号**

   - 访问 [TRMNL 的网站](https://usetrmnl.com)
   - 点击 "Sign Up" 创建新账号。
   - 按提示完成注册流程。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
你的 TRMNL 凭据属于敏感信息。切勿公开分享，也不要将其提交到版本控制系统中。
:::

如果遇到任何问题，请直接通过 [team@usetrmnl.com](mailto:team@usetrmnl.com) 联系 TRMNL 团队。

## 步骤 2：硬件准备

reTerminal E 系列和 XIAO 7.5" 面板已预先组装——你只需为其供电即可。TRMNL DIY 套件则需要自行组装。

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

reTerminal E 系列是完全一体化的。只需连接 USB-C 线缆，将电源开关拨到 **ON**，然后开机即可，无需任何组装步骤。

:::tip 仅适用于 reTerminal E1003
如果设备处于睡眠状态且没有响应，请在连接 USB 或进入烧录模式前，先按下机身顶部的 **Refresh** 按钮将其唤醒。
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**步骤 1. 将显示屏连接到驱动板**  
将 FPC 软排线与 XIAO 电子纸显示板上的连接器对齐，然后扣上卡扣以确保连接牢固。

:::tip
FPC 软排线的金属面应朝上，否则将不会显示任何内容。请务必参考下方安装视频——很多人都会装反。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2. 连接电池**  
将电池线缆连接到驱动板上的 JST 接口，确保极性正确（红线接 +，黑线接 -）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 3. 外壳组装（可选）**

:::tip
请注意，屏幕的软性排线非常脆弱，操作时务必小心。如果损坏，整个屏幕将无法工作。
:::

从 [资源](#资源) 部分打印开源外壳部件，并将组件装入其中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

首先，组装驱动板和电池：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

测试 TRMNL 套件：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

将屏幕插入外壳并将 FPC 线缆引出：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

连接 FPC 延长线并组装整个外壳：

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

L 形外壳的组装方式非常相似：

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

:::tip
如果你的 TRMNL 套件离路由器较远，你可以将天线引到外壳外，以获得更好的信号性能。
:::

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO 7.5" 电子纸面板在出厂时就已将 XIAO ESP32-C3 直接与面板连接在一起。只需通过 USB-C 插入即可——无需进一步组装。

</TabItem>
</Tabs>

## 步骤 3：烧录 TRMNL 固件

提供三种烧录方式。**方法 1（Web Flasher）** 最简单，并适用于所有受支持的硬件。**方法 2（reTerminal E-Series Firmware Flasher）** 仅适用于 reTerminal E 系列。**方法 3（从源码构建）** 适合高级用户。

:::tip 全新 TRMNL DIY 套件已预装 TRMNL 固件
如果你购买的是全新的 TRMNL 7.5"（OG）DIY 套件，它已经预装了 TRMNL 固件——你可以完全跳过烧录步骤，直接进入步骤 4。
:::

### 方法 1：TRMNL Web Flasher（推荐）

TRMNL Web Flasher 可直接在浏览器中运行，并支持本页面上的所有设备。

1. 访问 [https://usetrmnl.com/flash](https://usetrmnl.com/flash)。
2. 通过 USB-C 插入你的设备，并按照屏幕上的指示操作。
3. 选择与你的硬件匹配的固件：

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **reTerminal E1001 / E1002**：使用 **FW 1.6.7 或更新版本** 以获得与 Seeed 的兼容性。
- **reTerminal E1003**：在固件列表中选择 **reTerminal E1003**，并使用 **FW 1.8.7 或更新版本**。
- **reTerminal E1004**：在固件列表中选择 **reTerminal E1004**，并使用 **FW 1.8.10 或更新版本**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/258.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

在 TRMNL DIY 套件上使用 **FW 1.5.12 或更新版本** 以获得与 Seeed 的兼容性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/259.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

在 XIAO 7.5" 电子纸面板上使用 **FW 1.5.12 或更新版本** 以获得与 Seeed 的兼容性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/260.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 方法 2：通过 reTerminal E-Series Firmware Flasher 烧录（仅限 reTerminal E 系列）

:::info
此方法适用于 **reTerminal E1001 / E1002 / E1003 / E1004**。（**FW 1.8.10** 及更新版本）。
:::

:::caution 如需更新的 TRMNL 固件，请优先使用方法 1
reTerminal E-Series Firmware Flasher 为 reTerminal E 系列设备提供了由 Seeed 托管的 TRMNL 固件通道。Seeed 不会像官方 TRMNL Web Flasher 那样频繁更新该通道，并且并非每一个上游 TRMNL 固件版本都会同步到这里。

当你需要更新版本的 TRMNL 固件时，请优先使用 [方法 1：TRMNL Web Flasher](#方法-1-trmnl-web-flasher-推荐)。当你需要使用由 Seeed 托管的 reTerminal E 系列烧录流程时，再使用此方法。
:::

<details>
<summary>点击展开 reTerminal E-Series Firmware Flasher 的步骤</summary>

1. 访问 [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)。如需直接进入 E1004 TRMNL 条目，你也可以打开 [E1004 TRMNL 1.8.10 Hub 链接](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/?platform=trmnl&device=E1004&firmware=TRMNL_reTerminal_E1004&version=1.8.10)。

2. 在 **Select platform** 中，从官方平台部分选择 **TRMNL** 卡片。

3. 选择你的设备：

   - **reTerminal E1001**
   - **reTerminal E1002**
   - **reTerminal E1003**
   - **reTerminal E1004**

4. 在第二页中，查看为你所选设备提供的可用 TRMNL 固件版本（对于 E1004，使用 **1.8.10 或更新版本**）。

5. 使用 USB 数据线将设备连接到电脑。

6. 在 **Flash to device** 中，首次安装时选择 **Erase flash + flash**，然后点击 **Connect & flash**。

7. 在浏览器弹窗中选择你的设备串口，并开始烧录过程。

:::tip 首次烧录
首次安装时，请选择 **Erase flash + flash**，以便设备从干净的固件状态启动。
:::

:::tip 仅限 reTerminal E1003
确保电源开关处于 **ON**。如果设备处于休眠状态且烧录未开始，请按下机身顶部的 **Refresh** 按钮唤醒设备，然后重试。
:::

:::note reTerminal E1002 / E1004 显示行为
reTerminal E1002 使用全彩电子纸屏幕，但 TRMNL 固件当前会以单色模式渲染 E1002 的内容。在 Wi-Fi 配网期间，E1002 的 AP 界面会显示一个紧凑布局，并在右下角显示 TRMNL 标志。当你看到此界面时，搜索并连接到 E1002 热点，然后按照与其他设备相同的 Wi-Fi 设置流程继续操作。

reTerminal E1004 同样使用全彩 Spectra™ 6 面板，但 TRMNL 固件同样会以单色模式渲染其内容。在 Flasher 中选择 **reTerminal E1004**，以便使用正确的面板配置。
:::

烧录完成后，继续前往 [步骤 4：将设备连接到 Wi-Fi](#步骤-4-connect-device-to-wi-fi)。

</details>

### 方法 3：从源码构建并烧录（高级）

1. **克隆固件仓库**

   - 访问[官方固件仓库](https://github.com/usetrmnl/trmnl-firmware)并克隆：

     ```bash
     git clone https://github.com/usetrmnl/trmnl-firmware.git
     ```

   :::tip
   有时我们提交到 TRMNL 上游的 PR 仍在审核中。如果你想要最新的 Seeed 侧补丁，请改用 [OSHW-reTerminal-Series-E-D](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D) 仓库中由 Seeed 维护的源码快照：

   ```bash
   git clone https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D.git
   ```

   - 对于 **reTerminal E1001 / E1002 / E1003**，使用 [`examples/official/TRMNL`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL)。
   - 对于 **reTerminal E1004**，使用专用的 [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004) 项目。
   :::

2. **安装 [PlatformIO](https://platformio.org/)**，作为 VS Code 扩展或通过命令行安装。

3. **打开项目**：在 VS Code 中打开克隆得到的 `firmware` 文件夹。

4. **为你的硬件选择正确的 PlatformIO 环境**：

   <Tabs groupId="trmnl-hardware">
   <TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

   在 `platformio.ini` 中：

   - 对于 **reTerminal E1001**，选择 `seeed_reTerminal_E1001` 环境。
   - 对于 **reTerminal E1002**，选择 `seeed_reTerminal_E1002` 环境（TRMNL 会在 E1002 上以单色模式渲染内容）。
   - 对于 **reTerminal E1003**，在[官方 TRMNL 固件仓库](https://github.com/usetrmnl/trmnl-firmware)中选择 `TRMNL_X_E1003` 环境。
   - 对于 **reTerminal E1004**，打开专用的 [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004) PlatformIO 项目，并选择 `seeed_reTerminal_E1004` 环境（固件 ID 为 `TRMNL_reTerminal_E1004`）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

   在 `platformio.ini` 中，选择 `TRMNL_7inch5_OG_DIY_Kit` 环境。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

   在 `platformio.ini` 中，选择 `seeed_xiao_esp32c3` 环境。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. **通过 USB-C 连接你的设备**。

6. **构建并上传**：点击 PlatformIO 的 **Upload** 按钮或运行：

   ```bash
   pio run --target upload
   ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

## 步骤 4：配置 Wi-Fi 并配置设备

Wi-Fi 配置流程对所有支持的硬件都是相同的。

> 💡 **连接 Wi-Fi 有问题？** 请参阅 [TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting)。

### 上电并进入配置模式

在烧录 TRMNL 固件并为设备上电后，如果尚未连接到 Wi-Fi，它会自动进入配置模式。

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 连接到 TRMNL Wi-Fi

在手机或电脑上打开可用 Wi-Fi 网络列表。找到名为 **TRMNL** 的网络并连接（默认不需要密码）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### 打开强制门户页面

连接成功后，打开浏览器。设备应自动跳转到 TRMNL 配置页面；如果没有，请手动访问 [http://4.3.2.1](http://4.3.2.1)。

### 输入你的 Wi-Fi 凭据

- 选择你的 **2.4 GHz Wi-Fi 网络**（不支持 5 GHz 网络）。
- 输入你的 Wi-Fi 密码并点击 **Save** / **Connect**。

> ⚠️ **重要：** 请务必使用 2.4 GHz Wi-Fi 网络。这些设备上的 ESP32-C3 / ESP32-S3 芯片不支持 5 GHz 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### 设备加入你的网络

设备会断开与 TRMNL Wi-Fi 的连接并加入你的家庭网络。强制门户窗口会显示设备的 MAC 地址。**记录下这个 MAC 地址** —— 下一步会用到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意：** MAC 地址只会在强制门户中显示 1–2 秒。如果错过了，你也可以：
>
> - 从 VS Code → PlatformIO 的构建/上传日志中获取。
> - 使用 [usetrmnl.com/flash](https://usetrmnl.com/flash) 方法，并在烧录过程中查看浏览器开发者控制台。
> - 在路由器或 Mesh 网络应用的已连接设备列表中查找。
>
> 请参阅官方指南：[Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)。

## 步骤 5：在 TRMNL 上注册设备

当设备已连接到 Wi-Fi 且你已获取其 MAC 地址后，在 TRMNL Web 界面中注册它：

1. **打开 TRMNL Web 界面**：[https://trmnl.app](https://trmnl.app)。
2. **进入 Devices 页面**。
3. **添加新设备**（右上角或页面中央的按钮）。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **输入设备 ID（Device ID）**，即你购买 BYOD 访问权限时收到的 ID（这 **不是** MAC 地址——在购买确认邮件或 TRMNL 控制台中可以找到 Device ID）。点击 **Add new device**。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. 在设备设置页面中**绑定设备的 MAC 地址**：

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   你也可以在这里设置自定义名称并调整其他设置。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

你的设备现已与 TRMNL 账户关联！现在你可以通过 TRMNL 界面直接发送播放列表、图片和其他内容。

> 💡 **提示：** 如果你有多个设备，请为每个设备使用其唯一的 Device ID 重复上述步骤。

:::caution 禁用 Firmware Early Release 和 OTA Updates
在 TRMNL Web 界面中添加设备后，进入该设备的设置页面，并**关闭** **Firmware Early Release** 和 **OTA Updates Enabled** 两个选项。

如果保持启用，设备可能会自动下载面向官方 TRMNL 硬件的固件更新，而这些固件**与 Seeed 设备不兼容**。安装不兼容的固件可能导致设备故障或无响应。

请始终保持这两个选项为禁用状态，以确保稳定运行。
:::

## 按钮使用说明

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1004" default>

在 TRMNL 固件下，reTerminal E1001 和 E1002 仅提供一个面向用户的按钮：

- **绿色按钮 — 长按 5 秒**：进入 Wi-Fi 重新配置模式。
- **Reset 按钮**：单击以重启设备。

在 TRMNL 固件下，reTerminal E1004 使用前面板的物理按键。使用这些按键唤醒或刷新屏幕，并将电源开关滑到 **OFF** 再滑回 **ON** 以重启设备。若要重新配置 Wi-Fi，请按照设备在出厂烧录或网络重置后屏幕上显示的长按/配置流程操作。

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

在 TRMNL 固件下，reTerminal E1003 提供三个顶部按键：

- **Refresh 按钮 — 单击**：唤醒设备或立即刷新当前屏幕。
- **Page Up + Page Down — 按住 2 秒**：进入 Wi-Fi 重新配置模式。
- **电源开关**：滑到 **OFF** 再滑回 **ON** 以重启设备。

:::note
电容触摸仅在 SenseCraft HMI 固件下受支持。TRMNL 固件不会使用触摸面板——所有交互都通过上述物理按键完成。
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

XIAO ePaper Display Board 具有 4 个按键（RESET / KEY1 / KEY2 / KEY3）。**TRMNL 固件只使用 RESET 和 KEY3。**

**KEY3 用法：**

1. **单击**：立即刷新页面。
2. **双击**：自定义功能——可在 TRMNL 设置页面中进行配置。
3. **长按（约 5 秒）**：重新配置网络。

**RESET 用法**：单击以重置设备。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

XIAO ESP32-C3 具有标准的 **RESET** 和 **BOOT** 按钮。

- **按下 Reset → 松开 → 按住 BOOT 5 秒**：重新配置网络（返回 TRMNL 配置门户）。
- **RESET 单击**：重启设备。

</TabItem>
</Tabs>

## 了解 TRMNL 播放列表

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL 播放列表精确控制你的电子纸设备上显示的内容以及显示时间。

### 播放列表概览

- **Playlist Title**：你的 TRMNL 设备名称。
- **Display Time Range**：播放列表生效的时间范围（例如 00:00–23:45）。
- **Update Interval**：显示刷新的频率（例如每 5 分钟）。
- **Add a Group / Add a Plugin**：将播放列表组织为分组或添加新的内容插件。

### 播放列表条目

每一行都是将在设备上显示的一个屏幕或小部件。示例：

1. **Weather** —— 显示你所在位置的当前天气信息。
2. **Days Left This Year** —— 显示本年度剩余天数的倒计时。
3. **Custom Text** —— 显示任意自定义消息（例如 "Hello World"）。

对于每个条目：

- **Settings（齿轮图标）**：配置插件选项。
- **Delete（X 图标）**：从播放列表中移除该条目。
- **Preview（眼睛图标）**：预览屏幕显示效果。
- **Reorder（条形图标）**：拖动以更改顺序。

### Smart Playlist

在底部你可以选择是否自动跳过内容未发生变化的屏幕。详情请参阅 [Smart Playlists 博客文章](https://usetrmnl.com/blog/smart-playlists)。

## 探索 TRMNL 插件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

插件是模块化的内容块，可以显示天气、日历事件、股票价格、RSS 源、励志语录、GitHub 活动等更多内容。

### 已连接插件

在 Plugins 页面顶部，你可以看到所有已连接到 TRMNL 账户的插件。例如 Weather、Days Left This Year、Stock Price、RSS Feed、Reddit、Hacker News、Language Learning、Motivational Quote、Custom Text 等等。

### 插件市场

在已连接插件下方是插件市场。插件按类别和标签（#productivity、#news、#ecommerce 等）进行组织。你可以浏览、搜索，并点击任意插件将其连接到你的账户。

开发者也可以创建并发布自己的插件——详情请参阅 [plugin marketplace docs](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)。

更多高级功能请参阅 TRMNL 官方文档：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)。

## 常见问题

### Q1：如何重新配置网络？

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

长按 **绿色按钮** 5 秒。设备将返回到初始 TRMNL 界面并激活 AP。

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

同时按住 **Page Up** 和 **Page Down** 2 秒。设备将返回到初始 TRMNL 界面并激活 AP。

如果屏幕处于休眠状态，先按一次 **Refresh** 按钮唤醒设备。

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

长按 **KEY3**（在 Reset 按钮旁边）5 秒。设备将返回到初始 TRMNL 界面并激活 AP。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

按下 XIAO 上的 **Reset** 按钮并松开，然后长按 **BOOT** 按钮 5 秒。设备将返回到初始 TRMNL 界面并激活 AP。

</TabItem>
</Tabs>

### Q2：如果屏幕总是显示电量低警告，我该怎么办？

有两种不同情况会触发此屏幕：

1. **电池电压确实偏低。** 这是最常见的情况——设备确实需要充电。请插上电源或更换/给电池充电，一旦电压恢复，警告就会消失。

2. **TRMNL 服务器端问题。** 电池电量是在 TRMNL 的服务器上评估的，而不仅仅是在设备上。服务器 Bug 或最近的平台更新可能会暂时错误报告电池状态，即使硬件正常也会持续显示警告。

**如果电池确实电量不足**，请先给设备充电——在确认电池组健康之前，不要隐藏该警告。

**如果你确定电池没有问题**，但警告仍然不会消失，你**不**需要修改固件。TRMNL 允许你在 Web 仪表盘中屏蔽屏幕上的提示：

**步骤 1.** 打开 [TRMNL Web 界面](https://trmnl.app) 并进入 **Devices**。

**步骤 2.** 选择受影响的设备并打开其 **Battery** 设置。

**步骤 3.** 打开 **Hide Low Battery Screen**。这将阻止设备上出现电量低警告屏幕，以便在 TRMNL 服务器端电量检测恢复期间，或当你需要显示保持在播放列表上时，不被打断。

**步骤 4.**（可选）如果你仍希望收到邮件提醒但不想打断显示，请保持启用 **Low Battery Email Notification**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/261.png" style={{width:800, height:'auto'}}/></div>

### Q3：Web Flasher / PlatformIO 找不到设备或上传失败

有时错误的程序会导致 XIAO 丢失端口或无法正常工作：

- XIAO 已连接，但**未找到端口号**。
- XIAO 已连接，端口出现，但**上传失败**。

将 XIAO 置于 BootLoader 模式以恢复：

- **步骤 1**：按住 XIAO ESP32-S3 / ESP32-C3 上的 `BOOT` 按钮不要松开。
- **步骤 2**：在仍按住 `BOOT` 的同时，通过 USB-C 将设备连接到电脑。设备连接后再松开 `BOOT`。
- **步骤 3**：重新执行上传/烧录。大多数“未识别设备”或“上传失败”的问题都可以通过此方法解决。

## 特别鸣谢

特别感谢整个 **TRMNL 团队** 在本次集成过程中给予的强力支持和宝贵帮助。我们尤其要感谢 **Bogdan**、**Ryan Kulp**、**Fr3d**、**Schappi** 以及所有其他团队成员在开发和文档编写过程中所付出的努力。

他们的专业知识让本次集成成为可能，并极大提升了 reTerminal E 系列（E1001、E1002、E1003 和 E1004）、TRMNL DIY Kit 以及 XIAO 7.5" 电子纸面板社区的使用体验。

## 资源

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **[GitHub]** [E1001 / E1002 / E1003 的 TRMNL 固件源码](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL)
- **[GitHub]** [E1004 的 TRMNL 固件源码](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004)
- **[GitHub]** [官方 TRMNL 固件](https://github.com/usetrmnl/trmnl-firmware)
- **[Wiki]** [reTerminal E1003 入门指南](/cn/getting_started_with_reterminal_e1003)
- **[Wiki]** [reTerminal E1004 入门指南](/cn/getting_started_with_reterminal_e1004)

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

- **[Firmware]** [TRMNL 电子纸库（GitHub）](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [驱动板原理图 SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Printable]** [三角底座](https://www.printables.com/model/1354873)
- **[Printable]** [带保护的三角底座](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)
- **[Printable]** [L 形底座](https://www.printables.com/model/1354879)
- **[Thingiverse]** [三角底座](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [带保护的三角底座](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L 形底座](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [三角底座](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [带保护的三角底座](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L 形底座](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

- **[STP]** [3D 模型外壳](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]** [电子纸驱动板原理图 PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GitHub]** [TRMNL 固件仓库](https://github.com/usetrmnl/firmware)
- **[GitHub]** [Seeed_TRMNL_Eink_Project 仓库](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

</TabItem>
</Tabs>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
