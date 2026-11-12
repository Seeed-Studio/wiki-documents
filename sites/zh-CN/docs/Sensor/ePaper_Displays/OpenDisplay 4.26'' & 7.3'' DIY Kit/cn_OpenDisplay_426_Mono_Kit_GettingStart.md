---
description: OpenDisplay 4.26" Mono Kit 入门指南——由 Seeed Studio 与 OpenDisplay 共同开发、开箱即用的 BLE 电子纸显示屏
title: OpenDisplay 4.26" Mono Kit 入门指南
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.webp
slug: /opendisplay_426_mono_kit
sku: 100036064
last_update:
  date: 10/22/2026
  author: Nemo
createdAt: '2026-10-22'
url: https://wiki.seeedstudio.com/cn/opendisplay_426_mono_kit/
updatedAt: '2026-10-22'
---

# OpenDisplay 4.26" Mono Kit 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.webp" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OpenDisplay-4-26-Mono-Kit-p-7032.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

OpenDisplay 4.26" Mono Kit 是由 Seeed Studio 与 OpenDisplay 共同开发的开箱即用电子纸显示屏。它以**完全组装好**的形式出厂，内含一块 4.26 英寸 800×480 黑白面板、一块 Seeed [XIAO ePaper Display Board EN05](https://wiki.seeedstudio.com/cn/epaper_en05/)（XIAO nRF52840 Plus）、一块 2000 mAh 电池以及一个 3D 打印外壳——固件已预装完成。

你可以通过浏览器或 Home Assistant 使用 **Bluetooth Low Energy** 控制它，无需 Wi-Fi。射频模块会保持在低功耗监听模式，因此只要显示屏处于开启且在范围内，你就可以随时发送新图像。黑白模式下支持局部刷新。在大约每 15 分钟更新一次的情况下，预计两次充电之间可达到约 **两年** 的续航。

### 你需要准备

- 套件已上电，并处于蓝牙覆盖范围内
- 一台带蓝牙的手机或电脑
- Chrome 或 Edge（桌面/Android），或 iPhone/iPad 上的 Bluefy

## 一览

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>MCU</th>
      <td>Seeed <a href="https://wiki.seeedstudio.com/cn/epaper_en05/">XIAO ePaper Display Board EN05</a>（XIAO nRF52840 Plus）</td>
    </tr>
    <tr>
      <th>显示屏</th>
      <td>4.26 英寸单色电子纸</td>
    </tr>
    <tr>
      <th>颜色</th>
      <td>黑白（默认）；可选 4 级灰度</td>
    </tr>
    <tr>
      <th>局部刷新</th>
      <td>仅在黑白模式下支持</td>
    </tr>
    <tr>
      <th>分辨率</th>
      <td>800 × 480</td>
    </tr>
    <tr>
      <th>电池</th>
      <td>2000 mAh 可充电锂电池</td>
    </tr>
    <tr>
      <th>连接方式</th>
      <td>仅 Bluetooth Low Energy（无 Wi-Fi）</td>
    </tr>
    <tr>
      <th>外壳</th>
      <td>附带 3D 打印外壳</td>
    </tr>
  </tbody>
</table>

## 开机

1. 打开包装并将套件开机。
2. 等待启动刷新——黑白模式通常需要**几秒钟**。闪烁是正常现象。
3. 完成后，启动屏会显示你的设备名称（以 **OD** 开头）、**KEY1:** / **KEY2:**，以及一个二维码。

加密默认是**关闭**的，因此密钥行会显示 **not set**。开箱正常使用时你不需要密钥。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.png" style={{width:800, height:'auto'}}/></div>

## 发送你的第一张图片

扫描显示屏上的二维码。它会打开 [opendisplay.org](https://opendisplay.org/l/) 上与你设备绑定的个性化页面，其中包含该设备的快捷入口：

<table>
  <thead>
    <tr>
      <th>快捷入口</th>
      <th>功能说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Send an image</th>
      <td>打开 BLE Tester，从浏览器向设备发送测试图像</td>
    </tr>
    <tr>
      <th>Add to Home Assistant</th>
      <td>开始将设备添加到 Home Assistant</td>
    </tr>
    <tr>
      <th>Advanced → Toolbox</th>
      <td>更改设置或重新刷写固件（开发者 / 恢复用途）</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Landing_page.png" style={{width:600, height:'auto'}}/></div>

### 浏览器支持

<table>
  <thead>
    <tr>
      <th>浏览器</th>
      <th>支持情况</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome 或 Edge（桌面、Android）</th>
      <td>支持</td>
    </tr>
    <tr>
      <th>iPhone / iPad</th>
      <td>使用 Bluefy（App Store id1492822055）</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>不支持</td>
    </tr>
  </tbody>
</table>

在落地页中选择 **Send an image**（或打开 [opendisplay.org](https://opendisplay.org/firmware/display/index.html)）。点击 **Connect**，在浏览器列表中选择你的设备（名称以 **OD** 开头——例如 **OD592B4A**），然后选择一张照片或进行绘制，并点击 **Send to device**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/BLE_Tester.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Browser_Bluetooth_pairing.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/BLE_Tester_connected.png" style={{width:600, height:'auto'}}/></div>

:::note
BLE Tester 里可能会将面板标记为 4.3"，而套件产品名称是 4.26" Mono Kit。
:::

**完成标志：图像出现在电子纸显示屏上。**

## Home Assistant（可选）

此套件仅使用 **BLE**。Home Assistant 需要一条可用的蓝牙路径：

- **Home Assistant 主机上的蓝牙**——内置适配器或 USB 加密狗
- **ESPHome 蓝牙代理**——当显示屏距离 HA 主机较远时使用（必须支持主动 / 可连接连接）

:::note
Shelly BLE 代理**不受支持**——它们无法建立此显示屏所需的主动连接。请使用本地适配器或 ESPHome 代理。
:::

在蓝牙覆盖范围内为显示屏上电。Home Assistant 应该会自动发现它——在 **Settings → Devices & Services → Discovered** 下查找以 **OD** 开头的名称，然后点击 **Add** 和 **Submit**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_1.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_2.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_3.png" style={{width:600, height:'auto'}}/></div>

设备页面会显示电池、电源按键、固件状态以及显示内容。更多详情： [Home Assistant integration](https://github.com/OpenDisplay/Home_Assistant_Integration)

## 更进一步

### 启用加密

加密默认是**关闭**的。在 Toolbox → More options 中，将 Encryption 设置为 **Locked**，然后选择 **Configure over Bluetooth**。重启后，密钥会显示在 **KEY1:** / **KEY2:** 上，并出现在二维码落地页中。如果你丢失了密钥，可以重新断电重启显示屏以再次显示密钥。

### 重新刷写或恢复

1. 打开 Toolbox——4.26" Mono Kit 预设：[Toolbox](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-426-mono-kit)
2. **Install firmware (USB)**——在桌面/笔记本电脑上使用 Chrome 或 Edge
3. **Configure over Bluetooth**——刷写后通过蓝牙写回设置

### py-opendisplay

对于自定义 Python 项目，可通过 pip install py-opendisplay 安装——[py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)

### 电池寿命

使用随附的 2000 mAh 电池，在大约每 15 分钟更新一次的情况下，典型使用场景下两次充电之间预计可达到约 **两年** 的续航。实际运行时间取决于更新频率、图像大小、局部刷新使用情况以及温度。

你可以在 [Battery calculator](https://opendisplay.org/firmware/battery/index.html) 中对你的使用计划进行建模（选择 4.26" Mono Kit / nRF52840 / 2000 mAh）。

## 资源

- **[Web]** [OpenDisplay 网站](https://opendisplay.org)
- **[Tool]** [Toolbox（4.26" Mono Kit 预设）](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-426-mono-kit)
- **[Tool]** [BLE Tester](https://opendisplay.org/firmware/display/index.html)
- **[Tool]** [Battery calculator](https://opendisplay.org/firmware/battery/index.html)
- **[GitHub]** [OpenDisplay Firmware](https://github.com/OpenDisplay/Firmware)
- **[GitHub]** [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)
- **[GitHub]** [Home Assistant Integration](https://github.com/OpenDisplay/Home_Assistant_Integration)
- **[Discord]** [OpenDisplay Discord](https://discord.gg/XmTHz8RfJE)
- **[Wiki]** [OpenDisplay 深度指南](https://wiki.seeedstudio.com/cn/EN04_opendisplay/)
- **[ZIP]** [3D 打印外壳文件](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Resources/OpenDisplay_4.26_Mono_Kit_3D_Files.zip)
- **[UF2]** [出厂固件（4.26" Mono Kit）](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Resources/OpenDisplay_4.26_Mono_Kit_Factory_Firmware.uf2)

## 故障排查

**Q1：需要重新显示启动画面或二维码。**

*   **对显示屏进行断电重启**：先关机，等待 10 秒，再重新开机。启动画面——包括设备名称、KEY1:/KEY2: 行以及二维码——只会在完整上电刷新后显示。
*   **等待刷新完成**：单色启动刷新通常需要几秒钟。闪烁和中间出现的灰度图案都是正常现象。请勿在刷新过程中关闭显示屏。
*   **再次扫描二维码**，或者如果你需要加密密钥，可以直接从屏幕上读取 KEY1:/KEY2:。
*   **无需重新刷写或重新配置**——每次断电重启后，启动画面都会重新出现。
*   **注意**：显示屏一次只允许一个主动蓝牙连接。如果另一台设备仍在连接，请先断开它。

**Q2：显示屏无法开机或无响应。**

*   **先通过 USB 充电**：电池电量极低时，设备可能看起来像是“死机”或卡住。将套件连接到 USB 电源，充电一段时间后再重试。
*   **充电后**：先关机，等待 10 秒，再开机，并等待启动画面出现。
*   **确认电源开关已打开**：将开关牢固地拨到 ON 位置。
*   **检查电池连接器**：打开外壳并确认电池 JST 连接器已完全插紧。红色线应朝向 “+” 标记，黑色线应朝向 “−” 标记。反向插入连接器可能会损坏电路板。
*   **确保没有其他设备仍保持打开的 BLE 连接** —— 显示屏一次只支持一个活动连接。

**Q3：Home Assistant 无法发现显示屏。**

*   **检查集成版本**：Home Assistant 2026.4 及之后的版本内置了 OpenDisplay 集成。对于更早的版本或 drawcustom 工作流，请安装 HACS 自定义集成（将 `opendisplay` 文件夹复制到 `custom_components/` 中），然后重启 Home Assistant。
*   **先断开其他蓝牙客户端**：关闭 BLE Tester、浏览器标签页和 Bluefy —— 显示屏一次只允许一个活动 BLE 连接。如果有其他设备已连接，Home Assistant 将无法发现或连接。
*   **检查蓝牙路径**：在 Home Assistant 主机上使用内置或 USB 蓝牙适配器，或使用支持主动 / 可连接连接的 ESPHome 蓝牙代理。不支持 Shelly BLE 代理 —— 它们无法建立此显示屏所需的主动连接。
*   **仍然找不到？** 等待一分钟，把显示屏移近一些，然后在 Settings → Devices & Services → Discovered 中查找以 “OD” 开头的名称。
*   **手动添加**：如果显示屏没有被自动发现，前往 Settings → Devices & Services，点击 Add Integration，搜索 “OpenDisplay”，并按照设置流程操作。

**Q4：我的浏览器找不到或无法连接到显示屏。**

*   **使用受支持的浏览器**：Web Bluetooth 可在 Chrome 和 Edge（桌面端和 Android）中使用。在 iPhone 或 iPad 上，请使用 Bluefy 浏览器（App Store id 1492822055）。Firefox 和 Safari（桌面端）不支持 Web Bluetooth。
*   **打开蓝牙**：确保在手机或电脑上启用了蓝牙。在 Android 上，还需要打开定位功能 —— Chrome 在进行 BLE 扫描时需要它。
*   **将设备靠近套件。**
*   **先断开所有其他客户端**：显示屏一次只允许一个活动 BLE 连接。如果 Home Assistant 或其他浏览器已经连接，请先断开再重试。
*   **选择以 “OD” 开头的设备名称**（例如 OD592B4A）。
*   **如果没有出现**：按一次显示屏上的按键，或断电重启（关闭 10 秒 → 再打开），在启动刷新完成后重试。
*   **如果完全没有响应**：先通过 USB 给套件充电。

**Q5：图像上传失败或超时。**

*   **确认显示屏已开启且在范围内**：套件保持 BLE 就绪状态，没有深度睡眠唤醒窗口，但必须处于开机状态并在蓝牙范围内。
*   **断开所有其他客户端**：同一时间只能有一个活动 BLE 连接。仅从 BLE Tester 重新连接并重试。
*   **如果启用了加密**：输入启动屏或二维码落地页上的密钥。
*   **尝试使用更小的图像**，或等待一次完整刷新完成后再发送下一张。
*   **设备在会话中途停止响应**：通过 USB 充电，然后断电重启（关闭 10 秒 → 再打开）。

**Q6：加密密钥被拒绝或显示为 “not set”。**

*   **出厂套件默认关闭加密**：KEY1: 和 KEY2: 在开箱时会显示 “not set” —— 将密钥字段留空即可。
*   **启用了加密但丢失了密钥？** 断电重启显示屏（关闭 10 秒 → 再打开）—— 重启后密钥会显示在启动屏上。你也可以扫描二维码；落地页会显示相同的密钥。
*   **丢失密钥且无法看清屏幕**：打开 Toolbox → 将 Encryption 设置为 Unlocked → 通过蓝牙配置。这会移除加密，以便你重新设置。如果仍然无效，请重新刷写固件并重新配置。

**Q7：屏幕看起来卡住、有残影，或发送后保持空白。**

*   **等待刷新完成**：不要在更新过程中关闭显示屏。一次完整的黑白刷新需要几秒钟。
*   **局部刷新仅支持黑白**：局部刷新在单色模式下工作。如果你在使用可选的 4 级灰度模式，则不支持局部刷新 —— 始终使用完整刷新以避免残影或卡点。
*   **断电 10 秒 → 再开机** 以返回启动屏，然后确认 BLE 有响应。
*   **检查是否有其他已连接设备**：如果同时有其他设备连接，请断开它，然后仅使用一个客户端重试。
*   **仍然无法启动或连接？** 先通过 USB 充电，然后再次断电重启。
*   **重新刷写固件**：如果在完成以上所有步骤后显示屏仍然卡住或空白，请使用 Toolbox 通过 USB 重新刷写固件（参见 “更进一步” 部分中的 “Reflash or recover”）。

## 技术支持与产品讨论

*由 Seeed Studio 与 OpenDisplay 共同开发。*

感谢你选择我们的产品！我们将为你提供支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
