---
description: 使用 XIAO_nRF52840_NFC 库在 XIAO nRF52840（Sense）上进行 NFC 使用。
title: 两个版本的 NFC 使用方法
keywords:
  - xiao
  - nRF52840
  - NFC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-NFC-Usage
sku: 102010448, 102010469
last_update:
  date: 07/16/2026
  author: Morgan
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/cn/XIAO-BLE-Sense-NFC-Usage/
updatedAt: '2026-07-17'
---

# Seeed Studio XIAO nRF52840（Sense）上的 NFC 使用

**Seeed Studio XIAO nRF52840 系列**都配备了基于 nRF52840 内置 NFCT（近场通信标签）外设的 **NFC（近场通信）模块**，支持 NFC Type 2 Tag 功能。通过连接外部 NFC 天线，XIAO nRF52840 可以作为 NFC 标签，被智能手机和其他 NFC 读卡器读取。

本教程将带你完成完整的 NFC 使用流程——从库的安装、硬件连接、天线调谐，到效果验证以及创建你自己的 NFC 标签。

:::note
本教程基于 **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** 库编写。已在 Seeed nRF52 Boards **1.1.13** 版本上测试通过。
:::

## 前期准备工作

关于开发板库的安装，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#软件设置)** 完成 Seeed nRF52 Boards 的安装。如果你已经安装完成，可以继续往下进行。

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-selecting-board-NRF52840-for-nfc.png" /></div>

:::note
请确保在 Boards Manager 中选择 **Seeed XIAO nRF52840** 开发板。较早的 “Seeed nRF52 mbed-enabled Boards” 库**已不再维护**，不应继续使用。
:::

## 所需硬件

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840</th>
        <th>Seeed Studio XIAO nRF52840 Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
    <tr>
        <th>Seeed Studio XIAO nRF52840 Sense</th>
        <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::tip
基础的 NFC 功能只需要将天线焊接到 NFC1/NFC2 即可工作。经过社区测试（特别感谢 Seeed 论坛用户 **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)**），下面这两款天线在焊接后无需进一步电路调谐就可以直接使用：

- **MOLEX 1462360051**
- **TAOGLAS FXR.07.A.DG**

之后，我们在 TAOGLAS FXR.07.A.DG 的每个 NFC 焊盘（D14、D15）与 GND 之间各增加了两个 **43 pF** 调谐电容，以进一步提升读写距离。约 40 pF 的电容值是根据 nRF52840 MCU 产品规格书中 **“6.14.10 NFCT antenna recommendations”** 小节计算得出。

如果你遇到行为不稳定（弹窗不完整、检测时有时无）等情况，增加匹配电容会显著提升可靠性。详情请参阅 [Antenna Tuning](#Antenna-Tuning)。

如需了解更多实际测试经验，请查看[原始论坛讨论](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696)。
:::

## 所需软件

<div class="table-center">
  <table align="center">
    <tr>
        <th>项目</th>
        <th>版本 / 说明</th>
    </tr>
    <tr>
        <td>Arduino IDE</td>
        <td>1.8.x 或更高版本</td>
    </tr>
    <tr>
        <td>Seeed nRF52 Boards</td>
        <td><strong>1.1.13</strong>（通过 Arduino IDE Boards Manager 安装）</td>
    </tr>
    <tr>
        <td><a href="https://github.com/limengdu/XIAO_nRF52840_NFC">XIAO_nRF52840_NFC</a> 库</td>
        <td>从 <a href="https://github.com/limengdu/XIAO_nRF52840_NFC">GitHub</a> 下载，通过 <strong>Sketch &gt; Include Library &gt; Add .ZIP Library</strong> 安装（见下文）</td>
    </tr>
    <tr>
        <td>NFC Tools 应用</td>
        <td><a href="https://play.google.com/store/apps/details?id=com.wakdev.wdnfc">Android</a> / <a href="https://apps.apple.com/us/app/nfc-tools/id1252962749">Apple</a></td>
    </tr>
  </table>
</div>

### 安装 XIAO_nRF52840_NFC 库

该库**不**包含在 Arduino Library Manager 中——你需要从 GitHub 手动安装。

- **步骤 1.** 打开 **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** GitHub 仓库，点击绿色的 **Code** 按钮，并选择 **Download ZIP**。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_nRF52840_NFC" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载该库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<!-- TODO: Screenshot of GitHub Download ZIP button -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-download-zip.png" style={{width:800, height:'auto'}}/></div>

- **步骤 2.** 打开 Arduino IDE，依次点击 **Sketch > Include Library > Add .ZIP Library...**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-installed.png" style={{width:800, height:'auto'}}/></div>

- **步骤 3.** 选择刚刚下载的 ZIP 文件（`XIAO_nRF52840_NFC-main.zip`）。你应该会在状态栏看到 **"Library added to your libraries"** 提示。

- **步骤 4.** 重启 Arduino IDE。重启后，你应该可以在 **File > Examples > XIAO_nRF52840_NFC** 下看到示例。

<!-- TODO: Screenshot of examples menu showing XIAO_nRF52840_NFC -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-examples.png" style={{width:1000, height:'auto'}}/></div>

## 硬件连接

XIAO nRF52840 的 NFC 引脚位于开发板背面，标记为 **P0.09** 和 **P0.10**：

```
D14 (P0.09) — NFC1 — Antenna end A
D15 (P0.10) — NFC2 — Antenna end B
```

按照下图所示，将 NFC 天线焊接到 P0.09 和 P0.10：

在本教程中，我们使用 **Seeed Studio XIAO nRF52840** 搭配 Nordic 推荐的 NFC 天线进行演示。

**正面视图：**

<!-- TODO: Photo of antenna soldered to XIAO (front) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-F.jpg" alt="Antenna soldered to XIAO front view" width={550} height="auto" /></p>

**背面视图：**

<!-- TODO: Photo of antenna soldered to XIAO (back) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-B.jpg" alt="Antenna soldered to XIAO back view" width={550} height="auto" /></p>

:::caution

- NFC 天线是差分信号，**没有极性**——任意一端都可以接到 D14 或 D15。
- 在 **XIAO nRF52840** 和 **XIAO nRF52840 Sense** 上，这两个引脚出厂时即为 NFC 天线模式（UICR = `0xFFFFFFFF`）。在 **XIAO nRF52840 Plus** 和 **XIAO nRF52840 Sense Plus** 上，它们默认可能被配置为 GPIO——请先检查 UICR（参见 [Step 1](#Step-1-Check-UICR-Pin-Configuration)）。
- 建议在焊接前使用万用表测量天线端子之间的直流电阻（通常为 1–3 Ω），以确认连通性并排除短路。

:::

### Antenna Tuning

NFC 依赖于谐振 LC 回路。天线线圈提供电感（L），匹配电容提供电容（C），两者共同构成在目标频率下工作的谐振电路：

```
f = 1 / (2π√(LC))
```

目标频率为 **13.56 MHz**。在没有外部电容的情况下，只有 nRF52840 内部约 4 pF 的寄生电容参与谐振——谐振点会远离 13.56 MHz。NFC 功能仍然可以工作，但通信可能不稳定：手机弹窗可能只显示“NFC tag detected”，却没有完整内容，并且串口输出中可能出现错误码。加入匹配电容可以让 LC 回路达到谐振，从而显著提升可靠性。

:::tip
下面所有操作都基于 **[Nordic 官方 NFC 天线设计文档](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)**。只有在谐振时看到一个**差分 100 Ω 负载**时，芯片才能输出全部功率。
:::

#### 固定参数

<div class="table-center">
  <table align="center">
    <tr>
        <th>项目</th>
        <th>固定值</th>
        <th>来源</th>
    </tr>
    <tr>
        <td>工作频率 f</td>
        <td>13.56 MHz</td>
        <td>全球 NFC 标准，在 nRF52840 中为硬编码</td>
    </tr>
    <tr>
        <td>负载阻抗</td>
        <td>100 Ω（差分）</td>
        <td>Nordic 白皮书 nWP_026</td>
    </tr>
  </table>
</div>

#### 需要测量的参数

- **线圈电感 L** —— 使用 DMM / LCR 表 / VNA 在 100 kHz 下测量，单位为 µH。
- **线圈损耗电阻 R** —— 在同一屏幕上读取串联电阻，单位为 Ω。

#### 步骤 1：阻抗预检查

使用阻抗变换公式：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="Impedance formula" width={250} height="auto" /></p>

目标：**90–120 Ω**，越接近 100 Ω 越好。

<div class="table-center">
  <table align="center">
    <tr>
        <th>结果</th>
        <th>含义</th>
        <th>下一步</th>
    </tr>
    <tr>
        <td>&lt; 60 Ω</td>
        <td>天线太小</td>
        <td>增加匝数或增大线圈面积</td>
    </tr>
    <tr>
        <td>90 – 120 Ω</td>
        <td><strong>通过</strong></td>
        <td>进入步骤 2</td>
    </tr>
    <tr>
        <td>&gt; 150 Ω</td>
        <td>天线太大</td>
        <td>减少匝数或减小线圈面积</td>
    </tr>
  </table>
</div>

> 只有通过了这一关，才有必要计算电容；否则任何电容值都是无效的。

#### 步骤 2：计算谐振电容

在固定 13.56 MHz 下的公式：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="Capacitance formula" width={250} height="auto" /></p>

这会给出所需的**总电容**。对于 π 网络，将其平均分配：

**C1 = C2 = C / 2**

选择最接近的 E12 系列值（例如 39 pF、47 pF、56 pF、68 pF ……）。

#### 推荐天线

如果你没有 LCR 表并且更希望从一个已知的起点开始，一个标准的 13.56 MHz NFC 线圈天线与 XIAO nRF52840 搭配效果很好。下面是我们在测试中使用的天线：

<!-- Antenna photo: see Hardware Connection section (NRF52840NFC-final-output-successfully.jpg) -->

<div class="table-center">
  <table align="center">
    <tr>
        <th>参数</th>
        <th>数值</th>
    </tr>
    <tr>
        <td>类型</td>
        <td>13.56 MHz NFC 线圈</td>
    </tr>
    <tr>
        <td>直流电阻</td>
        <td>约 2.3 Ω</td>
    </tr>
    <tr>
        <td>连接方式</td>
        <td>直接焊接到 NFC1 / NFC2</td>
    </tr>
  </table>
</div>

:::note
上面展示的天线不是 Seeed Studio 的产品。你可以使用任何规格相近的 13.56 MHz NFC 线圈天线。关键是要测量电感，并使用上面的公式计算匹配电容值。
:::

## NFC 设置与示例

下面的工作流程会先验证你的 NFC 硬件设置，然后带你一步步创建自己的 NFC 标签。我们使用 **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** 库，它将 nRF52840 的 NFCT 外设封装成一个简洁的 Arduino API。

该库包含六个示例草图：

<div class="table-center">
  <table align="center">
    <tr>
        <th>类别</th>
        <th>示例草图</th>
        <th>用途</th>
    </tr>
    <tr>
        <td rowspan="2"><strong>验证</strong></td>
        <td><code>xiao-nrf52840-nfc-probe</code></td>
        <td>检查 UICR 引脚配置 + 验证射频链路</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-restore-uicr</code></td>
        <td>当 NFC 引脚被改为 GPIO 时进行恢复</td>
    </tr>
    <tr>
        <td rowspan="1"><strong>Plus 修复</strong></td>
        <td><code>xiao-nrf52840-plus-bootloader-verify</code></td>
        <td>在恢复 UICR 之前，验证 Plus 版本的 bootloader</td>
    </tr>
    <tr>
        <td rowspan="3"><strong>演示</strong></td>
        <td><code>xiao-nrf52840-nfc-tag-readonly</code></td>
        <td>只读标签——手机读取一个固定 URL</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-writable</code></td>
        <td>可写标签——手机可以向标签写入数据</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-persistent</code></td>
        <td>持久化标签——数据在断电后仍然保留（存储在 Flash 中）</td>
    </tr>
  </table>
</div>

### 步骤 1：检查 UICR 引脚配置

**目的**：确认 P0.09/P0.10 被配置为 NFC 天线引脚。

打开 **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-probe** 并将其上传到你的开发板。（步骤 1 和步骤 2 使用同一个草图——上传一次即可完成两步。）

将串口监视器设置为 **115200 波特率**。前几行会显示当前的 UICR 状态：

<!-- TODO: Screenshot of Serial Monitor showing UICR check PASS -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result.png" style={{width:1000, height:'auto'}}/></div>

**如何解读输出：**

<div class="table-center">
  <table align="center">
    <tr>
        <th>UICR 数值</th>
        <th>含义</th>
        <th>操作</th>
    </tr>
    <tr>
        <td><code>0xFFFFFFFF</code></td>
        <td>NFC 天线模式 ✅</td>
        <td>继续执行步骤 2</td>
    </tr>
    <tr>
        <td><code>0xFFFFFFFE</code></td>
        <td>GPIO 模式 ❌</td>
        <td>先上传 <code>xiao-nrf52840-plus-bootloader-verify</code>（适用于 Plus 版本），然后上传 <code>xiao-nrf52840-nfc-restore-uicr</code>，在串口监视器中发送 <code>RESTORE_NFC</code>，确认 <code>Verify result: PASS</code>，然后对开发板断电重启</td>
    </tr>
  </table>
</div>

:::note
**XIAO nRF52840** 和 **XIAO nRF52840 Sense** 出厂时 UICR = `0xFFFFFFFF`（NFC 模式）。在大多数情况下，这一步会直接通过，无需额外操作。**XIAO nRF52840 Plus** 和 **XIAO nRF52840 Sense Plus** 可能以 GPIO 模式出厂——如果输出显示为 `0xFFFFFFFE`，请按照下面的恢复步骤操作。
:::

### 步骤 2：Probe——验证射频链路

**目的**：确认来自手机的 NFC 命令帧可以到达开发板。

在完成 UICR 检查后，同一个草图会自动进入 **Probe 模式**。在该模式下，标签**不会**对任何帧进行回复——它只接收。这将接收方向单独隔离出来，便于确认射频链路是否正常。

将手机的 NFC 区域靠近天线几秒钟，然后查看串口监视器输出：

<!-- TODO: Screenshot of Serial Monitor showing Probe results with phone -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result-with-phone.png" style={{width:800, height:'auto'}}/></div>

**关键指标：**

<div class="table-center">
  <table align="center">
    <tr>
        <th>计数器</th>
        <th>含义</th>
        <th>通过标准</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>检测到手机的 13.56 MHz 射频场</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FIELD_LOST</code></td>
        <td>射频场消失</td>
        <td>接近 FIELD_DETECT</td>
    </tr>
    <tr>
        <td><code>READER_FRAMES</code></td>
        <td>从手机接收到的 NFC 命令帧</td>
        <td><strong>&gt; 0</strong>（关键）</td>
    </tr>
  </table>
</div>

> `READER_FRAMES > 0` 表示手机的命令帧已成功到达开发板，并且双向射频链路已经建立。在这个阶段，手机**不应**弹出提示（Probe 模式不会回复）。

**常见错误码：**

<div class="table-center">
  <table align="center">
    <tr>
        <th>错误码</th>
        <th>名称</th>
        <th>含义</th>
    </tr>
    <tr>
        <td><code>0x01</code></td>
        <td><code>FRAMEDELAYTIMEOUT</code></td>
        <td>帧延时超时——标签未在预期时间间隔内收到下一条命令</td>
    </tr>
    <tr>
        <td><code>0x02</code></td>
        <td><code>NFCANTENNAERROR</code></td>
        <td>NFCT 无法驱动天线——通常由阻抗不匹配或缺少天线引起</td>
    </tr>
    <tr>
        <td><code>0x80</code></td>
        <td>接收帧错误</td>
        <td>已接收到帧，但 CRC/奇偶校验失败（可能出现在只读阶段）</td>
    </tr>
  </table>
</div>

## 演示 1：只读标签

**目的**：一个简单的 NFC 标签，用于广播一个固定 URL。手机读取后会弹出提示——这是最常见的 NFC 用例。

打开 **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-readonly** 并上传。将手机放在天线上方 2–3 秒。

<!-- TODO: Screenshot of Serial Monitor showing Readonly results -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-readonly-output.png" style={{width:1000, height:'auto'}}/></div>

手机应弹出一个包含链接 `https://seeedstudio.com` 的提示。

<!-- TODO: Photo of antenna soldered to XIAO + phone showing NFC pop-up -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-final-output-successfully.png" alt="天线焊接完成且手机弹出 NFC 提示" width={300} height="auto" /></p>

**关键指标：**

<div class="table-center">
  <table align="center">
    <tr>
        <th>计数器</th>
        <th>含义</th>
        <th>通过标准</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>检测到手机的 13.56 MHz 射频场</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>手机完成防冲突 + SELECT 握手</td>
        <td><strong>&gt; 0</strong>（核心指标）</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>手机成功读取 NDEF 数据页</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>接收到的 FAST_READ 请求次数</td>
        <td>0 或较小（正常）</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>手机发送了不受支持的命令</td>
        <td>少量属正常</td>
    </tr>
  </table>
</div>

> `SELECTED > 0` 是关键阈值：表示防冲突流程通过，手机识别了 Type 2 Tag。`READ > 0` 表示 NDEF 页确实被读取。最终验证是手机显示完整的 URL 弹窗。
:::note
URL 在示例代码中是硬编码的。要更改它，请打开示例代码并修改 NDEF 消息，然后重新上传。标签数据存储在 RAM 中，断电后会丢失。
:::

## 演示 2：可写标签

**目的**：一个手机既可以读取也可以写入的 NFC 标签。标签以默认 URI（`https://seeedstudio.com`）启动，手机可以使用 **NFC Tools** 应用将其覆盖为新的 NDEF 内容。

打开 **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-writable** 并上传。

**测试步骤：**

- **步骤 1.** 以 **115200 波特率** 打开串口监视器。启动日志会显示标签标识（NFCID1）、初始内存转储以及默认 URI（`https://seeedstudio.com`）。

<!-- TODO: Screenshot of Serial Monitor showing Writable boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log.png" style={{width:1000, height:'auto'}}/></div>

启动日志还会打印标签将要广播的默认 URI：

<!-- TODO: Screenshot of Serial Monitor showing default URI in boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log-of-URI.png" style={{width:1000, height:'auto'}}/></div>

- **步骤 2.** 先用手机读取标签。手机应检测到 `https://seeedstudio.com`。

- **步骤 3.** 打开 **NFC Tools**（或任意 NFC 写入应用），将你想要的内容写入标签。在本示例中，我们写入一段简单文本：`hello!`。输入内容后，点击 **"Write / XX Bytes"** —— 字节数取决于内容长度。

<!-- TODO: Screenshot of NFC Tools write screen -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **步骤 4.** 再次读取标签。手机现在应显示新写入的内容（`hello!`）。

<!-- TODO: Screenshot of phone showing written content -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-final-output.png" style={{width:300, height:'auto'}}/></div>

当手机离开 NFC 场后，串口监视器会显示更新后的关键指标，反映完整的写入后读取会话：

<!-- TODO: Screenshot of Serial Monitor showing key indicators after reading written tag -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-result-with-phone.png" style={{width:1000, height:'auto'}}/></div>

**关键指标：**

<div class="table-center">
  <table align="center">
    <tr>
        <th>计数器</th>
        <th>含义</th>
        <th>通过标准</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>检测到手机的 13.56 MHz 射频场</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>手机完成防冲突 + SELECT 握手</td>
        <td><strong>&gt; 0</strong>（核心指标）</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>手机成功读取 NDEF 数据页</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>WRITE</code></td>
        <td>手机成功向标签写入数据</td>
        <td><strong>&gt; 0</strong>（核心指标）</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>接收到的 FAST_READ 请求次数</td>
        <td>0 或较小（正常）</td>
    </tr>
    <tr>
        <td><code>WRITE_REJECTED</code></td>
        <td>写入尝试被拒绝（受保护的页）</td>
        <td>0（使用标准应用时不应发生）</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>手机发送了不受支持的命令</td>
        <td>少量属正常</td>
    </tr>
  </table>
</div>

> 对于 Writable，`WRITE > 0` 是关键阈值：表示手机已成功向标签写入数据。`WRITE_REJECTED` 应始终为 `0` —— 如果它增加，说明写入会话中出现了问题。

:::note
写入的数据仅存储在 **RAM 中**，断电后会丢失，并恢复为默认 URI —— 这使得重复写入测试变得很方便。对于需要在断电后仍然保留的数据，请使用下面的 **Persistent Tag** 演示。
:::

## 演示 3：持久化标签

**目的**：一个在断电后数据仍然保留的 NFC 标签。NDEF 内容存储在 nRF52840 的内部 Flash 存储（LittleFS）中，因此即使开发板断电重启也会保留 —— 非常适合长期部署。

打开 **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-persistent** 并上传。

**测试步骤：**

- **步骤 1.** 第一次启动时，以 **115200 波特率** 打开串口监视器。启动日志会显示默认 URI 以及 `Storage state: no stored content, using default URI`。

<!-- TODO: Screenshot of Serial Monitor showing Persistent first boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-first.png" style={{width:1000, height:'auto'}}/></div>

- **步骤 2.** 用手机读取标签。首次启动时，手机会检测到 `https://seeedstudio.com`。

- **步骤 3.** 打开 **NFC Tools**（或任意 NFC 写入应用），向标签写入新的文本或 URL 记录。在本示例中，我们写入一段简单文本：`hi!`。输入内容后，点击 **"Write / XX Bytes"** —— 字节数取决于内容长度。

<!-- TODO: Screenshot of NFC Tools writing "hi!" -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **步骤 4.** 当手机离开 NFC 场后，串口监视器会打印 `Storage: tag content saved to flash`，确认内容已写入内部 Flash。

<!-- TODO: Screenshot of Serial Monitor showing saved to flash -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-saved-to-flash.png" style={{width:1000, height:'auto'}}/></div>

- **步骤 5.** **对开发板进行断电重启** —— 拔下 USB 线再重新插上。

- **步骤 6.** 重启后，串口监视器会打印 `Storage state: previous content restored from flash`，确认写入的内容在断电后被成功恢复。

<!-- TODO: Screenshot of Serial Monitor showing restored from flash after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-restored.png" style={{width:1000, height:'auto'}}/></div>

- **步骤 7.** 再次用手机读取标签。手机应显示在步骤 3 中写入的内容 —— 即使经历了断电重启。

<!-- TODO: Screenshot of phone showing "hi!" after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-phone-hi-after-reboot.png" style={{width:300, height:'auto'}}/></div>

<!-- TODO: Screenshot of phone showing restored content after reboot + serial indicators -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-result-after-reboot.png" style={{width:1000, height:'auto'}}/></div>

**关键指标：**

关键指标与可写标签相同 —— 完整列表请参阅[可写标签表格](#demo-2-writable-tag)。

> 启动日志中的 `Storage state: previous content restored from flash` 是持久化标签的核心确认信息：数据在断电后仍然保留。`Storage: tag content saved to flash` 则确认每次写入都已保存到 Flash。

:::note
在步骤 7 中，手机只会**读取**恢复的内容 —— 不会写入任何东西。因此计数器中的 `WRITE` 将保持为 `0`，这是预期行为。你只会在之前的写入会话（步骤 3–4）中看到 `WRITE > 0`。
:::

:::note

- 存储的内容位于**内部 Flash 文件系统**（`/nfc-tag-data.bin`）中，与示例代码区域分离 —— 重新上传示例代码后仍会保留。
- 如需在任意时间恢复默认 URI，请在串口监视器中发送 `RESET_TAG`。
- Flash 保存在每次写入会话结束、手机离开感应区后执行一次。如果你过早移开手机，内容可能不完整 —— 只需再次写入即可修复。

:::

:::tip
**三个演示的总结：**

<div class="table-center">
  <table align="center">
    <tr>
        <th>演示</th>
        <th>数据存储位置</th>
        <th>是否在断电后保留</th>
        <th>可由手机写入</th>
    </tr>
    <tr>
        <td>只读标签</td>
        <td>RAM</td>
        <td>❌</td>
        <td>❌</td>
    </tr>
    <tr>
        <td>可写标签</td>
        <td>RAM</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>持久标签</td>
        <td>Flash</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
  </table>
</div>
:::

## 资源

- **[GitHub]** [XIAO_nRF52840_NFC Library](https://github.com/limengdu/XIAO_nRF52840_NFC) — 本教程中使用的开源 NFC 库

## 特别鸣谢

特别感谢 **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)** 对 XIAO nRF52840 上 NFC 天线（MOLEX 1462360051 和 TAOGLAS FXR.07.A.DG）进行的大量真实场景测试，以及 **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso/summary)** 在电容计算指导和 iPhone 兼容性问题排查方面提供的帮助。

如果你遇到本文未涵盖的 NFC 问题，可以在原始论坛帖子中找到一些有用的提示：

- [XIAO nRF52840 NFC 天线见解](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
