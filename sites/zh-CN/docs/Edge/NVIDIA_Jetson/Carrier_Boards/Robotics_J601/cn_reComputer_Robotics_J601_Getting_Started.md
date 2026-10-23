---
description: 使用 reComputer Robotics J601 载板搭配 NVIDIA Jetson AGX Thor 模组的入门指南。
title: reComputer Robotics J601 入门指南
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg
slug: /jetson/recomputer_robotics_j601/getting_started
aliases:
  - /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 10/22/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/cn/jetson/recomputer_robotics_j601/getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {roboticsJ601DocNav} from '@site/src/data/jetson/productDocNavigation';

# reComputer Robotics J601 入门指南

<JetsonProductDocNav {...roboticsJ601DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">机器人与物理 AI · NVIDIA Jetson AGX Thor</span>
    <h2>在一块机器人载板上连接感知与控制</h2>
    <p>reComputer Robotics J601 载板支持 NVIDIA Jetson AGX Thor T5000 和 T4000 模组，用于多摄像头感知、传感器融合和具身 AI 开发。将高速以太网、GMSL2 摄像头扩展和隔离机器人 I/O 与 Jetson 软件平台相结合。</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">购买单板 · J601 载板 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">从 JetPack 开始 ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" alt="reComputer Robotics J601 carrier board for NVIDIA Jetson AGX Thor modules" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>最高 2070 TFLOPS</strong><span>搭配 Jetson AGX Thor T5000 模组的 AI 性能</span></div>
  <div className="jetson-product-fact"><strong>最高 4× 10GbE</strong><span>T5000 提供 4 个 RJ45 端口；T4000 提供 3 个</span></div>
  <div className="jetson-product-fact"><strong>最高 8× GMSL2</strong><span>通过两块 GMSL 扩展板实现多摄像头输入</span></div>
  <div className="jetson-product-fact"><strong>19–48 V DC</strong><span>通过 XT30 电源接口提供宽范围输入</span></div>
</div>

## 选择你的 Jetson 配置

J601 是一块**载板**。请为你的方案选择兼容的 Jetson AGX Thor 模组、NVMe SSD 和散热方案。下面的 J6015 和 J6014 名称用于标识本指南中使用的、针对不同模组的配置和 BSP 软件包。

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T5000 配置</span>
    <h3>reComputer Robotics J6015</h3>
    <p>对于拥有 4 个激活的 10GbE 端口和 4 路隔离 CAN 接口的配置，请使用 T5000 BSP。</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T5000</span><span>4× 10GbE</span><span>4× CAN FD</span></div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T4000 配置</span>
    <h3>reComputer Robotics J6014</h3>
    <p>对于拥有 3 个激活的 10GbE 端口和 2 路隔离 CAN 接口的配置，请使用 T4000 BSP。</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T4000</span><span>3× 10GbE</span><span>2× CAN FD</span></div>
  </article>
</div>

兼容模组：[NVIDIA Jetson AGX Thor T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html) 和 [NVIDIA Jetson AGX Thor T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html)。

## 为什么选择 reComputer Robotics J601

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>多摄像头感知</strong><span>GMSL 扩展板最多支持 8 路 GMSL2 摄像头，实现环视感知和传感器融合。</span></div>
  <div className="jetson-product-feature"><strong>高速网络</strong><span>最多 4 路 10GbE RJ45 连接，在传感器、计算节点和开发系统之间传输数据。</span></div>
  <div className="jetson-product-feature"><strong>机器人 I/O</strong><span>隔离 CAN FD、RS-232/422/485、I2C、I2S 和数字 I/O 用于连接控制器、传感器和执行器。</span></div>
  <div className="jetson-product-feature"><strong>模块化扩展</strong><span>M.2 Key M 支持 NVMe 2280 SSD；Key E 和 Key B 支持兼容的 Wi-Fi/Bluetooth 以及 4G/5G 模组。</span></div>
  <div className="jetson-product-feature"><strong>开发连接性</strong><span>4 个 USB 3.2 Type-A 端口和 HDMI 2.1 用于连接外设和显示器，并提供独立的调试和恢复 USB-C 端口。</span></div>
  <div className="jetson-product-feature"><strong>物理 AI 工作流</strong><span>基于 Jetson 使用 NVIDIA Isaac、ROS、PyTorch 和 Hugging Face 等框架构建应用，并遵循各框架的平台要求。</span></div>
</div>

## 规格参数

<div className="jetson-product-table-wrap">
<table>
  <thead><tr><th scope="col">接口 / 属性</th><th scope="col">J601 载板</th></tr></thead>
  <tbody>
    <tr>
      <td>模组兼容性</td>
      <td>NVIDIA Jetson AGX Thor T5000 / T4000</td>
    </tr>
    <tr>
      <td>PCB 尺寸</td>
      <td>168 mm x 155 mm（不含 Jetson AGX Thor 模组）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4x USB 3.2 Type-A（10Gbps，Host），1x USB 2.0 Type-C（调试），1x USB 3.0 Type-C（恢复）</td>
    </tr>
    <tr>
      <td>以太网</td>
      <td>T5000 提供 4x RJ45 10GbE；T4000 提供 3x RJ45 10GbE</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td>1x M.2 Key M，用于 PCIe Gen 4 NVMe 2280 SSD</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td>1x M.2 Key E，用于 M.2 2230 Wi-Fi 模组</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1x M.2 Key B，用于 4G/5G 模组</td>
    </tr>
    <tr>
      <td>串口</td>
      <td>1x RS-232/422/485（DB9 接口）</td>
    </tr>
    <tr>
      <td>JST 接口</td>
      <td>T5000 提供 4x CAN 或 T4000 提供 2x CAN，1x RS-485，1x I2S，1x I2C，4x GPI 和 4x GPO</td>
    </tr>
    <tr>
      <td>音频</td>
      <td>1x 麦克风输入和 1x 音频输出</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1x 4 针风扇接口（12V PWM）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 针排针</td>
    </tr>
    <tr>
      <td>LED 指示灯</td>
      <td>1x 绿色 PWR LED，1x 绿色 SSD LED，1x RGB USR LED</td>
    </tr>
    <tr>
      <td>按键</td>
      <td>1x Recovery 按键和 1x Reset 按键</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>2x Mini-Fakra 接口，可连接最多 8x GMSL2 摄像头</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td>使用导热硅脂时为 -10°C 至 60°C；使用导热垫时为 -10°C 至 55°C</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>XT30，19V 至 48V DC</td>
    </tr>
    <tr>
      <td>JetPack</td>
      <td>JetPack 7.1</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件总览

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg" alt="reComputer Robotics J601 side view 1 · carrier-board connectors" loading="lazy" />
    <figcaption>侧视图 1 · 载板连接器</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg" alt="reComputer Robotics J601 side view 2 · additional interfaces" loading="lazy" />
    <figcaption>侧视图 2 · 其他接口</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg" alt="reComputer Robotics J601 bottom view · expansion slots and board layout" loading="lazy" />
    <figcaption>底视图 · 扩展插槽和板卡布局</figcaption>
  </figure>
</div>

| 指示灯 | 颜色 | 作用 |
| --- | --- | --- |
| PWR | 绿色 | 电源指示灯 |
| SSD | 绿色 | 存储活动指示灯 |
| USR | RGB | 用户可控状态 LED |

关于连接器引脚定义、接线方式、接口测试和 RGB LED 控制，请参阅 [硬件与 I/O](/cn/jetson/recomputer_robotics_j601/hardware_and_interface_usage/)。

## 刷写 JetPack

本流程会在 J601 载板上的 NVMe SSD 上安装 **JetPack 7.1（L4T 38.4.0）**。请根据已安装的模组选择 BSP：**T5000 使用 J6015**，**T4000 使用 J6014**。

:::caution
刷写会清除目标 NVMe SSD 上的数据。开始前请备份重要数据，并在刷写完成前保持电源和 USB 连接。
:::

<div className="jetson-product-step-flow">

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>准备设备</h3>
    <p className="jetson-product-step-label">步骤 1 · 准备 Ubuntu 主机和目标硬件</p>

准备以下设备：

- 搭载 Jetson AGX Thor T5000 或 T4000 模组并配备合适散热的 J601 载板
- 安装在 Key M 插槽中的 NVMe M.2 2280 SSD
- 通过 XT30 连接的 19–48 V DC 电源
- 物理 Ubuntu **22.04 或 24.04** 主机 PC，且**至少有 220 GB** 可用存储空间
- USB Type-C **数据**线
- 用于首次启动的 HDMI 显示器、键盘和鼠标

:::tip
原生 Ubuntu 主机能提供最稳定的刷写体验。Seeed Jetson DevelopTool 也通过 WSL2 支持 Windows；主机环境搭建请参考其[安装指南](/cn/jetson_developtool_installation/)。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>进入强制恢复模式</h3>
    <p className="jetson-product-step-label">步骤 2 · 连接 J4 并验证已安装的模组</p>

1. 在开发板断电的情况下，将主机 PC 连接到 **USB 3.0 Type-C 恢复/烧录接口 (J4)**。USB 2.0 Type-C 调试接口 (J3) 是一个单独的连接器。
2. 按住并保持 **RECOVERY**。
3. 通过 XT30 连接 19–48 V 直流电源。
4. 2 秒后松开 **RECOVERY**。
5. 在 Ubuntu 主机上运行以下命令：

```bash
lsusb
```

| 配置 | 模组 | 预期恢复 USB ID |
| --- | --- | --- |
| J6015 | AGX Thor T5000 | `0955:7026 NVIDIA Corp.` |
| J6014 | AGX Thor T4000 | `0955:7226 NVIDIA Corp.` |

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg" alt="J601 USB-C 烧录接口和恢复按键连接" loading="lazy" />

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg" alt="J601 处于强制恢复模式时 Ubuntu 主机的 lsusb 输出示例" loading="lazy" />

如果未看到预期的 ID，请检查数据线和恢复接口，然后在继续之前重新执行恢复步骤。

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>准备匹配的 BSP</h3>
    <p className="jetson-product-step-label">步骤 3 · 选择图形工具或命令行烧录方式</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="图形工具烧录" default>

安装并启动 [Seeed Jetson DevelopTool](/cn/jetson_developtool_installation/)，然后准备固件：

1. 打开 **Flash Center**，选择 **reComputer J601** 和 **JetPack 7.1 (L4T 38.4.0)**。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg" alt="在 Jetson DevelopTool 的 Flash Center 中选择 reComputer J601 的界面" loading="lazy" />

2. 确认步骤 2 中的恢复连线。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg" alt="用于 Jetson DevelopTool 的 J601 供电和 USB 连接示意" loading="lazy" />

3. 点击 **Detect Device**，确认已安装的模组，然后点击 **Next**。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg" alt="Jetson DevelopTool 检测 AGX Thor 模组的界面" loading="lazy" />

4. 点击 **Download / Prepare BSP**。工具会下载固件、验证其 SHA-256 校验和，并解压缩固件包。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg" alt="Jetson DevelopTool 正在下载并准备 J601 BSP 的界面" loading="lazy" />

<details>
<summary>观看 Jetson DevelopTool 烧录教程</summary>

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/O2rlSOdYujE" title="使用 Seeed Jetson DevelopTool 在 reComputer J601 上烧录 JetPack" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

</details>

</TabItem>
<TabItem value="command-line" label="命令行烧录">

在下方下载**针对模组的** BSP 压缩包。该压缩包体积较大，下载可能需要约 60 分钟。请等待下载完成后再进行解压。

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

<div className="jetson-product-table-wrap">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>Jetson 模组</th>
      <th>产品</th>
      <th>下载链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T5000</td>
      <td>reComputer Robotics J6015</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAq5ofKK9Y1RaCzAfJ8-3J4ARhePBbGBc-mcjQ1bNAP0bY?e=CbmAN9" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>3f75780b43f6559bc950b6a97aa38fd6f61d4d001cce870bdfb498f64e6d18e5</td>
    </tr>
  </tbody>
</table>
</div>

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

<div className="jetson-product-table-wrap">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>Jetson 模组</th>
      <th>产品</th>
      <th>下载链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T4000</td>
      <td>reComputer Robotics J6014</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBofCO4bWF9SLdbLQE1V8DgAS1tW6-UmQGEH3ULOZ7W16o?e=zdnK3s" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>c63eddfe7005a088ab439c64fb5d3bf9a52b85d62d377c6a4bf829295f7222ef</td>
    </tr>
  </tbody>
</table>
</div>

</TabItem>
</Tabs>

在 Ubuntu 主机上验证下载的压缩包，并将完整输出结果与对应模组的校验和进行比对：

```bash
sha256sum <downloaded-archive.tar.gz>
```

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>烧录 NVMe SSD</h3>
    <p className="jetson-product-step-label">步骤 4 · 使用相同的烧录方式和模组选择</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="图形工具烧录" default>

在 Jetson DevelopTool 中点击 **Start Flash**，并等待界面提示烧录成功。在整个过程中请保持电源和 USB 数据线始终连接。

</TabItem>
<TabItem value="command-line" label="命令行烧录">

在 Ubuntu 主机上解压缩压缩包，然后根据已安装的模组运行对应命令。将 `YYYY-MM-DD` 替换为下载压缩包文件名中的日期。

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

</TabItem>
</Tabs>

烧录命令通常需要 2–10 分钟。请等待终端提示烧录成功。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt="Jetson 烧录成功后终端输出示例" loading="lazy" />

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">5</span>
  <div className="jetson-product-step-content">
    <h3>完成首次启动</h3>
    <p className="jetson-product-step-label">步骤 5 · 配置 Ubuntu 并检查各接口</p>

连接 HDMI 显示器、键盘和鼠标，完成 Ubuntu 的初始系统配置。如果烧录完成后未出现设置界面，请在烧录工具提示成功后对开发板断电重启。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png" alt="Jetson Ubuntu 首次启动配置界面示例" loading="lazy" />

继续阅读 [硬件与 I/O](/cn/jetson/recomputer_robotics_j601/hardware_and_interface_usage/) 以验证你的外设，或体验 [感知演示](#应用场景)。Seeed 的载板设备树和 BSP 源码可在 [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) 中获取。

  </div>
</section>

</div>

:::tip 可选：探索其他 Jetson 载板
完成设置后，你可以查看其他 Seeed Jetson 载板的固件下载和烧录说明。

<div className="jetson-product-actions">
  <a className="jetson-product-button jetson-product-button--secondary" href="/cn/flash/jetpack_to_selected_product/" target="_blank" rel="noopener noreferrer">浏览其他 Jetson 烧录指南 ↗</a>
</div>

:::

## 应用场景

从一个面向 reComputer Robotics J601 的相机 + LiDAR 感知示例开始体验。

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer" aria-label="打开 J601 多相机与 LiDAR 感知演示仓库">
      <img src="https://img.youtube.com/vi/gFFaiGvRdtg/hqdefault.jpg" alt="J601 相机与 LiDAR 感知演示视频预览" loading="lazy" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="应用能力"><span>检测</span><span>传感器融合</span><span>BEV</span></div>
      <h3><a href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">多摄像头与 LiDAR 感知</a></h3>
      <p>在 Jetson 运行 TensorRT 检测、道路分割、几何鸟瞰视角融合以及姿态对齐的局部建图的同时，回放六路摄像头视频流和 LiDAR 数据，并在浏览器中同步显示视图。</p>
    </div>
  </article>
</div>

### 观看感知演示

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/gFFaiGvRdtg" title="reComputer J601 multi-camera and LiDAR perception demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">获取演示与部署指南 ↗</a>
  <a className="jetson-product-button jetson-product-button--secondary" href="https://youtu.be/gFFaiGvRdtg" target="_blank" rel="noopener noreferrer">在 YouTube 上观看 ↗</a>
</div>

该仓库记录了在 **JetPack 7.2 / L4T R39.2、CUDA 13.2 和 TensorRT 10.16.2** 上的验证情况。请按照仓库中的环境与部署说明进行操作；本页面的 **JetPack 7.1** 刷机包是一个独立的软件基线。请在目标设备上针对已安装的软件版本构建 TensorRT 引擎。

该演示使用录制的 nuScenes 数据以及几何相机/LiDAR 融合。其局部地图使用数据集提供的位姿；在 nuScenes 上的分割精度尚未评估。有关验证条件以及数据集/模型许可，请参阅该仓库。

## 资源

使用以下资源进行载板集成、机械设计和 BSP 开发。

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>载板数据手册</strong><small>连接器引脚定义、电气限制和板卡规格</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>载板原理图</strong><small>J601 V1.0 电路与信号走线</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>3D 机械模型</strong><small>用于安装和机箱规划的 STEP 模型</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Linux_for_Tegra 源码</strong><small>Seeed Jetson BSP 与设备树源码</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SHOP</span>
    <span className="jetson-product-resource-copy"><strong>J601 载板</strong><small>Jetson AGX Thor 载板的购买选项</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Jetson 产品目录</strong><small>浏览 Seeed NVIDIA Jetson 产品</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CASE</span>
    <span className="jetson-product-resource-copy"><strong>Jetson 成功案例</strong><small>边缘 AI 应用中的部署示例</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Jetson AGX 一页简介</strong><small>Seeed Jetson AGX 平台概览</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## 技术支持与产品讨论


感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed community forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed support"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord community"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki product discussion"></a>
</div>

</div>
