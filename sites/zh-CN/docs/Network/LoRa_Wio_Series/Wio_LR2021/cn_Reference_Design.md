---
description: Wio-LR2021 的参考设计
title: Wio-LR2021 PCB 设计指南
keywords:
  - Wio-LR2021
  - LoRa
  - LR2021
  - Semtech
  - Sub-GHz
  - 2.4GHz
  - LoRaWAN
  - BLE 5.0
  - Transceiver
  - Wio
image: https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg
slug: /wio_lr2021_pcb_design_guide
sku: 100058045
sidebar_position: 2
last_update:
  date: 06/03/2026
  author: David Du
createdAt: '2026-06-03'
updatedAt: '2026-06-03'
url: https://wiki.seeedstudio.com/cn/wio_lr2021_pcb_design_guide/
---

## 1. 叠层

为了最大化 RF PCB 布局的可用空间，我们建议在布线密集的应用中使用四层或更多层的 PCB 叠层设计。

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/4layer_2layer_PCB_stack.png" style={{width:900, height:'auto'}}/></div></td>

- 对于 **4 层** PCB，RF 区域正下方紧邻的铜层应被指定为接地平面。接地平面应完全铺铜，以确保参考平面的连续性。

- 对于 **2 层** PCB，应尽可能确保整个 RF 区域下方的接地平面保持完整，并尽量减少 RF 走线和器件下方接地平面中的切割或分割，以维持电流回流路径的完整性。

## 2. 50Ω RF 传输线的设计

确保 RF 传输线的特性阻抗为 50Ω 是 RF 布局设计的关键。在这里，我们采用 **接地共面波导 (GCPW)** 结构进行 RF 走线设计。

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/microstrip_GCPW.png" style={{width:900, height:'auto'}}/></div></td>

<br />

要使用 GCPW 结构实现 50Ω 特性阻抗的 RF 传输线，需要确定以下五个关键参数：

|Symbol|Description|
|---|---|
|S|信号线与相邻接地线之间的间距|
|W|信号线宽度|
|T|导体铜厚|
|H|介质层厚度（信号层到参考接地平面的距离）|
|εr|介质材料的相对介电常数|

:::note
1. 信号线宽度 **W** 应在整个 RF 路径上保持一致，不能突然变化。

2. **W** 应尽可能与器件焊盘宽度匹配
如果条件允许，建议将 **W** 设计为与所用 RF 器件焊盘宽度相同，以最小化阻抗不连续性（尽管这并非总是可行）。

3. 使用免费计算软件帮助确定 50Ω 阻抗
可以使用免费阻抗计算工具（例如 [**AppCAD**](http://www.hp.woodshot.com)、[**Saturn PCB Toolkit**](https://saturnpcb.com/saturn-pcb-toolkit/) 或 [**KiCad**](https://www.kicad.org/) 中的阻抗计算器）来优化上述参数，确保 PCB 设计中 RF 走线的特性阻抗精确匹配 50Ω。
:::

这里，我们以标准的 **0.1mm 厚 FR4 基板** 和 **1oz 铜箔** 为例，计算 50Ω 阻抗的 GCPW（接地共面波导）结构：

|Parameter|Value(mm)|Remark|
|---|---|---|
|S|0.199|信号线间距|
|**W**|**0.190**|RF 信号线宽度|
|T|0.035 (1oz)|铜厚|
|H|0.1|介质厚度|

:::tip 为什么选择 GCPW
1. **降低串扰和 EMI** – 与传统微带线或无接地共面波导相比，两侧及下方的接地平面能有效抑制相邻走线或层间的串扰，从而降低电磁干扰 (EMI)。这使得 GCPW 特别适用于高密度、多层 PCB 中的 RF 走线。

2. **更好的电磁场约束能力** – 在该结构中，接地平面紧邻信号线布置，可显著约束电磁场。这减少了高频信号能量向周围空间的辐射，有助于满足电磁兼容性 (EMC) 要求。

3. **更好的阻抗稳定性和公差** – 在 GCPW 结构中，信号回流路径主要利用两侧的接地平面，而不是仅依赖下方的参考地。因此，GCPW 对板厚 (H) 制造偏差具有更高的容忍度，并能提供更稳定的 50Ω 阻抗。
:::

## 3. RF 走线指南

### 1. 几何约束

#### 1.1. 单层连续性

**全程顶层走线** – 从模组的 RF 引脚焊盘到天线座、匹配网络或天线馈电点，RF 走线必须完全布在同一层。

**禁止换层过孔** – 禁止使用过孔进行层切换。过孔会引入电感不连续性（通常为 0.5–1.5nH），这会导致显著的阻抗突变和回波损耗恶化。

:::note
如果换层不可避免（不推荐，仅在空间极度受限时考虑），必须遵守以下要求：

在层切换位置放置共面 GND 过孔阵列（至少四个过孔，围绕信号过孔对称分布）。
:::

#### 1.2. 走线宽度恒定

在从模组 RF 引脚到天线端口的 50Ω 特性阻抗段中，**走线宽度 (W)** 以及两侧的**间隙 (S)** 必须保持恒定。

#### 1.3. 最小化走线长度

**Sub‑GHz 频段 (433/868/915 MHz)：** 建议 RF 走线总长度 ≤ 20 mm。超过该长度会导致传输线损耗和寄生辐射显著增加。

**2.4 GHz 频段：** 建议 ≤ `30 mm`。若超过该长度，必须重新评估匹配网络的损耗裕量。

:::note
总长度包括从模组引脚焊盘引出，经匹配网络到天线座中心针脚的走线长度，不包括天线座内部以及天线本体。
:::

#### 1.4. 拐弯规则

- 禁止 90° 直角拐弯。
- 拐弯半径必须至少为走线宽度 (W) 的 **三倍**，≥ 5W 为最佳。在毫米波以下频段，圆弧拐弯可提供最平滑的阻抗过渡。
- 单条 RF 走线中的拐弯数量不应超过两个。

### 2. 接地、屏蔽与过孔缝合

#### 2.1. 过孔间距

在 RF 走线两侧使用 GND 过孔将顶层共面 GND 与内层接地平面短接，形成电磁屏蔽墙。过孔间距 (D) 由波长决定：  **D ≤ λ / 20**

|Operating Band|Center Frequency|λ/20 (Theoretical Value)|Recommended Spacing|
|---|---|---|---|
|EU868|868 MHz|17.3 mm|≤5 mm|
|US915|915 MHz|16.4 mm|≤5 mm|
|AS923|923 MHz|16.3 mm|≤5 mm|
|2.4GHz|2400 MHz|6.25 mm|≤3 mm|

<br />

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/via_spacing.png" width="300" alt="appearance" />
</div>

<br />

:::note
设计中采用的过孔间距明显小于理论值，以抑制高次谐波和边缘场泄漏。
:::

#### 2.2. 过孔排布

- 建议采用 **双排交错排布** – 在 RF 走线两侧各放置一排 GND 过孔，两排过孔应交错而非正对，以更有效地抑制缝隙天线效应。

- 过孔应紧邻 RF 走线边缘放置，距离 ≤ `0.3 mm`（即过孔应位于 GND 铜皮边缘处）。

- 建议过孔直径 **(0.2–0.3mm)**，以避免过孔过大导致顶层 GND 铜皮被过度切割。

#### 2.3. 板边缝合

必须在 PCB 边缘（尤其是包含 RF 区域的边缘）布置密集的 GND 缝合过孔，以防止板边成为寄生辐射路径。

<br />

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/staggered_arrangement.png" width="800" alt="appearance" />
</div>

<br />

### 3. 参考平面与叠层约束

#### 3.1. 下层 GND 平面的完整性

RF 走线正下方的那一层（在 4 层板中为第 2 层，在 2 层板中为底层）必须是完整、无切割的 GND 平面。

#### 3.2. 共面接地要求

必须在 RF 走线两侧保持共面 GND 铜皮。GND 边缘必须平直且连续，不得有锯齿或缝隙。

共面 GND 宽度 (F) 必须满足：**F > W + G**，其中 W 为走线宽度，G 为走线与 GND 之间的间隙。如果 F 过小，场分布会向下层偏移，导致有效介电常数变化，从而偏离 50Ω 阻抗。

#### 3.3. 层间隔离

在 4 层板中，第 3 层（电源层）上的电源岛不得直接位于 RF 走线下方并与第 2 层重叠。如果第 3 层必须从 RF 走线下方穿过，应确保其与 RF 走线呈垂直交叉（以最小化耦合长度），并在第 2 层与第 3 层之间保持完整的接地隔离。

### 4. 并联器件与匹配网络

#### 4.1. 共线布局

- 所有并联器件必须直接串接在 RF 走线上。这意味着器件焊盘的长边与 RF 走线方向一致，器件本体“躺”在 RF 路径上。

- 禁止从 RF 走线垂直引出支路去连接并联器件。垂直支路相当于开路短截线；在 868 MHz 下，即使 5 mm 的支路也会引起显著反射。

#### 4.2. 接地过孔

- 并联器件的接地焊盘必须通过至少 `three` 个 GND 过孔连接到第 2 层，并尽可能靠近焊盘放置。

- 过孔应靠近焊盘边缘放置，并以三角形或直线方式排布，以确保最短且对称的接地路径。

- 不要在器件焊盘中心直接打过孔。中心过孔会阻碍 SMT 回流焊时焊膏的流动，导致虚焊，同时也会增加寄生电感。

<br />

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/matching_network.png" width="300" alt="appearance" />
</div>

<br />

#### 4.3. 元件方向与间距

- 同一匹配网络中的多个并联元件应沿射频走线方向依次排列，以避免并排放置导致的互相耦合。

- 相邻并联元件之间的推荐间距为 ≥ 1.5× 元件长度（对于 0402 封装约为 ≥ `1.0 mm`）。

### 5. 隔离与间距

#### 5.1. 与数字/电源信号的隔离

- 平行间距——射频走线与相邻数字或电源走线之间的间距必须至少为走线宽度的 `three` 倍（或 ≥ 1 mm，以较大者为准）。

- 平行长度限制——如果间距小于 `3 mm`，则平行走线的长度必须 ≤ `10 mm`。如果超过该长度，必须增加一条接地隔离带（≥ 1 mm 宽的接地铜皮并打过孔）。

- 垂直交叉——当射频走线与其他信号走线交叉时，应优先采用垂直交叉。第 2 层接地必须在交叉点下方保持连续。

#### 5.2. 与高频干扰源的隔离

射频走线和天线区域必须远离：
- 高速时钟线（USB、SPI CLK、SDIO）
- DC‑DC 降压电感和开关（SW）节点
- 晶体振荡器 / TCXO（即使 TCXO 集成在模块内，板上的其他晶体振荡器仍需保持距离）

推荐的最小净距：
- 距 DC‑DC 电感：≥ 20 mm
- 距 USB 差分线：≥ 10 mm
- 距 32 MHz 晶体振荡器：≥ 15 mm

## 4. 参考设计

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/Reference-Design-2.png" style={{width:900, height:'auto'}}/></div></td>

<br />

:::note
1. 将 `C1 (10uF)` 和 `C2 (100nF)` 尽可能靠近 `VCC_IN` 引脚放置。糟糕的布局会降低射频性能并可能导致杂散发射。

2. 在所有 **SPI 线**（NSS、SCK、MOSI、MISO）上串联安装 `470Ω` 电阻，并尽可能靠近模块，以抑制高频谐波。该模块不支持连续帧模式——在指令之间必须翻转 NSS，且最小高电平时间为 125ns。
:::

### 射频接口（SubG_RF / 2.4G_RF）
该模块提供两个独立的射频输出引脚，一个用于 **Sub-GHz** 频段，一个用于 **2.4GHz** 频段。两个射频通道内部均已实现 **50Ω** 阻抗匹配。我们建议使用标准的 `IPEX1` 或 `SMA` 连接器作为天线接口。


<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/IPEX1_connector.png" width="300" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/SMA_connector.png" width="300" alt="appearance" />
</div>

<br />


## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
