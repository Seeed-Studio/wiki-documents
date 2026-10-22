---
description: NVIDIA Jetson AGX Thor 模组 reComputer Robotics J601 载板快速上手指南。
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
  date: 10/19/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-10-19'
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
    <p>reComputer Robotics J601 载板支持 NVIDIA Jetson AGX Thor T5000 和 T4000 模组，用于多摄像头感知、传感器融合和具身 AI 开发。它把高速以太网、GMSL2 摄像头扩展和隔离机器人 I/O 与 Jetson 软件平台结合在一起。</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">购买 · J601 载板 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">从 JetPack 开始 ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" alt="适用于 NVIDIA Jetson AGX Thor 模组的 reComputer Robotics J601 载板" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>最高 2070 TFLOPS</strong><span>搭配 Jetson AGX Thor T5000 模组时的 AI 性能</span></div>
  <div className="jetson-product-fact"><strong>最多 4× 10GbE</strong><span>T5000 为四个 RJ45 口，T4000 为三个</span></div>
  <div className="jetson-product-fact"><strong>最多 8× GMSL2</strong><span>通过两块 GMSL 扩展板输入多路摄像头</span></div>
  <div className="jetson-product-fact"><strong>19–48 V DC</strong><span>通过 XT30 电源接口提供宽电压输入</span></div>
</div>

## 选择 Jetson 配置

J601 是一块**载板**。请为你的整机选择兼容的 Jetson AGX Thor 模组、NVMe SSD 和散热方案。下面的 J6015 和 J6014 名称，用来标识本指南中按模组区分的配置和 BSP 包。

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T5000 配置</span>
    <h3>reComputer Robotics J6015</h3>
    <p>四路 10GbE 和四路隔离 CAN 可用的配置，请使用 T5000 BSP。</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T5000</span><span>4× 10GbE</span><span>4× CAN FD</span></div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T4000 配置</span>
    <h3>reComputer Robotics J6014</h3>
    <p>三路 10GbE 和两路隔离 CAN 可用的配置，请使用 T4000 BSP。</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T4000</span><span>3× 10GbE</span><span>2× CAN FD</span></div>
  </article>
</div>

兼容模组：[NVIDIA Jetson AGX Thor T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html) 和 [NVIDIA Jetson AGX Thor T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html)。

## 为什么选择 reComputer Robotics J601

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>多摄像头感知</strong><span>GMSL 扩展板最多支持八路 GMSL2 摄像头，用于环视感知和传感器融合。</span></div>
  <div className="jetson-product-feature"><strong>高速网络</strong><span>最多四路 10GbE RJ45，在传感器、计算节点和开发主机之间传输数据。</span></div>
  <div className="jetson-product-feature"><strong>机器人 I/O</strong><span>隔离 CAN FD、RS-232/422/485、I2C、I2S 和数字 I/O，用于连接控制器、传感器和执行器。</span></div>
  <div className="jetson-product-feature"><strong>模块化扩展</strong><span>M.2 Key M 支持 NVMe 2280 SSD；Key E 和 Key B 支持兼容的 Wi-Fi/Bluetooth 和 4G/5G 模组。</span></div>
  <div className="jetson-product-feature"><strong>开发连接</strong><span>四个 USB 3.2 Type-A 和 HDMI 2.1 用于外设和显示器，调试与恢复使用独立的 USB-C 接口。</span></div>
  <div className="jetson-product-feature"><strong>物理 AI 工作流</strong><span>在 Jetson 上使用 NVIDIA Isaac、ROS、PyTorch 和 Hugging Face 等框架构建，并遵循各框架的平台要求。</span></div>
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
      <td>搭配 T5000 时为 4x RJ45 10GbE；搭配 T4000 时为 3x RJ45 10GbE</td>
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
      <td>搭配 T5000 时为 4x CAN，或搭配 T4000 时为 2x CAN，1x RS-485，1x I2S，1x I2C，4x GPI 和 4x GPO</td>
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
      <td>1x 绿色 PWR LED，1x 绿色 SSD LED，以及 1x RGB USR LED</td>
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

## 硬件概览

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg" alt="reComputer Robotics J601 侧视图 1 · 载板连接器" loading="lazy" />
    <figcaption>侧视图 1 · 载板连接器</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg" alt="reComputer Robotics J601 侧视图 2 · 更多接口" loading="lazy" />
    <figcaption>侧视图 2 · 更多接口</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg" alt="reComputer Robotics J601 底视图 · 扩展插槽与板卡布局" loading="lazy" />
    <figcaption>底视图 · 扩展插槽与板卡布局</figcaption>
  </figure>
</div>

| 指示灯 | 颜色 | 作用 |
| --- | --- | --- |
| PWR | 绿色 | 电源指示 |
| SSD | 绿色 | 存储活动指示 |
| USR | RGB | 用户可控状态灯 |

连接器引脚、接线、接口测试和 RGB LED 控制，请打开[硬件与接口](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/)。

## 刷写 JetPack {#flash-jetpack}

本流程把 **JetPack 7.1（L4T 38.4.0）** 安装到 J601 载板的 NVMe SSD。请按已安装的模组选择 BSP：**T5000 使用 J6015，T4000 使用 J6014**。

:::caution
刷写会清除目标 NVMe SSD 上的数据。开始前请备份重要数据，并在刷写完成前保持电源和 USB 连接。
:::

<div className="jetson-product-step-flow">

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>准备设备</h3>
    <p className="jetson-product-step-label">步骤 1 · 准备 Ubuntu 主机和目标硬件</p>

请准备以下设备：

- 已安装 Jetson AGX Thor T5000 或 T4000 模组并具备合适散热的 J601 载板
- 安装在 Key M 插槽中的 NVMe M.2 2280 SSD
- 通过 XT30 连接的 19–48 V DC 电源
- 物理 Ubuntu **22.04 或 24.04** 主机，至少有 **220 GB** 可用存储
- USB Type-C **数据线**
- 用于首次启动的 HDMI 显示器、键盘和鼠标

:::tip
物理 Ubuntu 主机的刷写体验最稳定。Seeed Jetson DevelopTool 也通过 WSL2 支持 Windows；主机安装请参考[安装指南](/jetson_developtool_installation/)。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>进入强制恢复模式</h3>
    <p className="jetson-product-step-label">步骤 2 · 连接 J4 并确认已安装的模组</p>

1. 在载板断电时，将主机连接到 **USB 3.0 Type-C 恢复/刷写接口（J4）**。USB 2.0 Type-C 调试接口（J3）是另一个接口。
2. 按住 **RECOVERY**。
3. 通过 XT30 接入 19–48 V DC 电源。
4. 两秒后松开 **RECOVERY**。
5. 在 Ubuntu 主机上运行：

```bash
lsusb
```

| 配置 | 模组 | 预期的恢复模式 USB ID |
| --- | --- | --- |
| J6015 | AGX Thor T5000 | `0955:7026 NVIDIA Corp.` |
| J6014 | AGX Thor T4000 | `0955:7226 NVIDIA Corp.` |

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg" alt="J601 USB-C 刷写接口和 Recovery 按键连接" loading="lazy" />

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg" alt="J601 处于强制恢复模式时 Ubuntu 主机的 lsusb 输出" loading="lazy" />

如果没有出现预期 ID，请检查数据线和恢复接口，然后重新执行恢复步骤再继续。

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>准备对应的 BSP</h3>
    <p className="jetson-product-step-label">步骤 3 · 选择软件刷写或命令行刷写</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="软件刷写" default>

安装并启动 [Seeed Jetson DevelopTool](/jetson_developtool_installation/)，然后准备固件：

1. 打开 **Flash Center**，选择 **reComputer J601** 和 **JetPack 7.1 (L4T 38.4.0)**。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg" alt="Jetson DevelopTool Flash Center 中已选择 reComputer J601" loading="lazy" />

2. 确认步骤 2 中的恢复接线。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg" alt="供 Jetson DevelopTool 使用的 J601 电源和 USB 连接" loading="lazy" />

3. 点击 **Detect Device**，确认已安装的模组，然后点击 **Next**。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg" alt="Jetson DevelopTool 正在检测 AGX Thor 模组" loading="lazy" />

4. 点击 **Download / Prepare BSP**。工具会下载固件、校验 SHA-256，并解压软件包。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg" alt="Jetson DevelopTool 正在下载并准备 J601 BSP" loading="lazy" />

<details>
<summary>观看 Jetson DevelopTool 刷写教程</summary>

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/O2rlSOdYujE" title="使用 Seeed Jetson DevelopTool 为 reComputer J601 刷写 JetPack" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

</details>

</TabItem>
<TabItem value="command-line" label="命令行刷写">

下载下面与**模组对应**的 BSP 包。压缩包较大，下载可能需要大约 60 分钟。请等下载完成后再解压。

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

在 Ubuntu 主机上校验下载的压缩包，并将完整结果与你所用模组的校验值比对：

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
    <h3>刷写 NVMe SSD</h3>
    <p className="jetson-product-step-label">步骤 4 · 使用相同的刷写方式和模组选项</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="软件刷写" default>

在 Jetson DevelopTool 中点击 **Start Flash**，并等待界面提示成功。整个过程中保持电源和 USB 数据线连接。

</TabItem>
<TabItem value="command-line" label="命令行刷写">

在 Ubuntu 主机上解压压缩包，然后运行与已安装模组对应的命令。将 `YYYY-MM-DD` 替换为下载文件名中的日期。

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

刷写命令通常需要 2–10 分钟。请等待终端提示刷写成功。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt="Jetson 刷写成功后的终端输出示例" loading="lazy" />

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">5</span>
  <div className="jetson-product-step-content">
    <h3>完成首次启动</h3>
    <p className="jetson-product-step-label">步骤 5 · 配置 Ubuntu 并检查接口</p>

连接 HDMI 显示器、键盘和鼠标，完成 Ubuntu 的初始系统配置。如果刷写工具已经提示成功，但没有出现设置界面，请给载板重新上电。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png" alt="Jetson Ubuntu 首次启动配置界面示例" loading="lazy" />

接下来可以打开[硬件与接口](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/)检查外设，或查看[感知 Demo](#applications)。Seeed 载板的设备树和 BSP 源码见 [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)。

  </div>
</section>

</div>

## 应用 {#applications}

可以从 reComputer Robotics J601 的摄像头与 LiDAR 感知示例开始。

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer" aria-label="打开 J601 多摄像头与 LiDAR 感知 Demo 仓库">
      <img src="https://img.youtube.com/vi/gFFaiGvRdtg/hqdefault.jpg" alt="J601 摄像头与 LiDAR 感知 Demo 的视频预览" loading="lazy" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="应用能力"><span>检测</span><span>传感器融合</span><span>BEV</span></div>
      <h3><a href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">多摄像头与 LiDAR 感知</a></h3>
      <p>回放六路摄像头和 LiDAR 数据，同时由 Jetson 运行 TensorRT 检测、道路分割、几何鸟瞰融合，以及按位姿对齐的局部地图，并在浏览器中同步显示。</p>
    </div>
  </article>
</div>

### 观看感知 Demo

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/gFFaiGvRdtg" title="reComputer J601 多摄像头与 LiDAR 感知 Demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">获取 Demo 与部署指南 ↗</a>
  <a className="jetson-product-button jetson-product-button--secondary" href="https://youtu.be/gFFaiGvRdtg" target="_blank" rel="noopener noreferrer">在 YouTube 上观看 ↗</a>
</div>

该仓库记录的验证环境是 **JetPack 7.2 / L4T R39.2、CUDA 13.2 和 TensorRT 10.16.2**。请按其环境和部署说明操作。本页的 **JetPack 7.1** 刷写包是另一套软件基线。请在目标设备上、针对已安装的软件版本构建 TensorRT 引擎。

该 Demo 使用录制的 nuScenes 数据以及摄像头/LiDAR 几何融合。局部地图使用数据集提供的位姿；nuScenes 上的分割精度尚未评估。验证条件以及数据集和模型许可见该仓库。

## 资源 {#resources}

板卡集成、机械设计和 BSP 开发可以使用以下资源。

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>载板数据手册</strong><small>连接器引脚、电气限制和板卡规格</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>载板原理图</strong><small>J601 V1.0 电路与信号走线</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>3D 机械模型</strong><small>用于安装和外壳设计的 STEP 模型</small></span>
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
    <span className="jetson-product-resource-copy"><strong>Jetson AGX 一页纸简介</strong><small>Seeed Jetson AGX 平台概览</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed 社区论坛"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="联系 Seeed 技术支持"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord 社区"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki 产品讨论"></a>
</div>

</div>
