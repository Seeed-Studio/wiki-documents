---
description: reComputer Rugged J40 入门指南
title: reComputer Rugged J40 入门指南
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - 入门指南
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg
slug: /jetson/recomputer_rugged_j401/getting_started
aliases:
  - /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 09/30/2026
  author: Dayu,Dongxu Jin
createdAt: '2026-03-04'
updatedAt: '2026-09-30'
url: https://wiki.seeedstudio.com/cn/jetson/recomputer_rugged_j401/getting_started/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {ruggedJ401DocNav} from '@site/src/data/jetson/productDocNavigation';
import Link from '@docusaurus/Link';

# reComputer Rugged J40 入门指南

<JetsonProductDocNav {...ruggedJ401DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">加固边缘 AI · NVIDIA Jetson</span>
    <h2>在粉尘、水和振动成为日常的环境中部署 AI</h2>
    <p>reComputer Rugged J40 将 NVIDIA Jetson Orin 的性能与 IP66 防护、无风扇外壳以及带锁紧功能的 M12 连接结合在一起。它专为车辆、港口、农场、海上和工业现场的可靠边缘 AI 部署而设计。</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">获取 reComputer Rugged J4012 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">从 JetPack 开始 ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg" alt="reComputer Rugged J40 工业边缘 AI 计算机" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>IP66</strong><span>可防尘并抵御强力喷水</span></div>
  <div className="jetson-product-fact"><strong>最高 100 TOPS</strong><span>Jetson Orin NX 16GB 边缘 AI 性能</span></div>
  <div className="jetson-product-fact"><strong>4× PoE GbE</strong><span>为工业 IP 摄像头供电并连接</span></div>
  <div className="jetson-product-fact"><strong>−20°C 至 60°C</strong><span>在 0.7 m/s 气流下无风扇运行</span></div>
</div>

## 选择 Jetson 配置

两种配置使用相同的加固外壳和工业接口。请根据部署场景的 AI 工作负载、内存需求和功耗预算选择 Jetson 模组。

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">性能配置</span>
    <h3>reComputer Rugged J4012</h3>
    <p>面向多摄像头视觉、更大的 AI 模型，以及受益于更高 GPU 与内存带宽的工作负载。</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin NX</span>
      <span>16GB LPDDR5</span>
      <span>100 TOPS</span>
    </div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">能效配置</span>
    <h3>reComputer Rugged J3011</h3>
    <p>面向功耗更低的高效感知、监测、遥测和工业控制工作负载。</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin Nano</span>
      <span>8GB LPDDR5</span>
      <span>40 TOPS</span>
    </div>
  </article>
</div>

## 为什么选择 reComputer Rugged J40

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>密封 M12 连接</strong><span>带锁紧的连接器有助于在移动和户外安装中保持电源、网络和 I/O 稳定。</span></div>
  <div className="jetson-product-feature"><strong>无风扇被动散热</strong><span>没有转动风扇，可减少多尘环境中的维护，并实现安静运行。</span></div>
  <div className="jetson-product-feature"><strong>工业 I/O</strong><span>隔离 CAN-FD、RS-232/422/485 和数字 I/O 可直接连接传感器、执行器和控制器。</span></div>
  <div className="jetson-product-feature"><strong>面向摄像头的网络</strong><span>四个 PoE GbE 端口通过同一根线缆传输数据和电力，简化多摄像头系统。</span></div>
  <div className="jetson-product-feature"><strong>无线扩展</strong><span>M.2 Key E 和 Key B 插槽支持 Wi-Fi、Bluetooth、5G 和 GPS 扩展。</span></div>
  <div className="jetson-product-feature"><strong>车载与户外部署</strong><span>宽电压输入、抗振动和 IP66 外壳适用于 AMR、车辆、船舶和野外设备。</span></div>
</div>

## 规格参数

<div className="jetson-product-table-wrap">
<table>
  <thead>
    <tr>
      <th colSpan={2}>产品名称</th>
      <th>reComputer Rugged J4012</th>
      <th>reComputer Rugged J3011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>100046979</td>
      <td>100002634</td>
    </tr>
    <tr>
      <td colSpan={2}>NVIDIA Jetson 模组</td>
      <td>Orin NX 16GB</td>
      <td>Orin Nano 8GB</td>
    </tr>
    <tr>
      <td rowSpan={4}>处理器系统</td>
      <td>AI 性能</td>
      <td>100 TOPS</td>
      <td>40 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1024 核 NVIDIA Ampere，32 个 Tensor Core</td>
      <td>1024 核 NVIDIA Ampere，32 个 Tensor Core</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 核 Arm Cortex-A78AE v8.2 64 位，2MB L2 + 4MB L3</td>
      <td>6 核 Arm Cortex-A78AE v8.2 64 位，1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>16GB 128 位 LPDDR5 @ 102.4 GB/s</td>
      <td>8GB 128 位 LPDDR5 @ 68 GB/s</td>
    </tr>
    <tr>
      <td rowSpan={2}>存储</td>
      <td>eMMC</td>
      <td colSpan={2}>—</td>
    </tr>
    <tr>
      <td>扩展</td>
      <td colSpan={2}>M.2 Key M（2280）NVMe SSD — 内置 128 GB</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>以太网</td>
      <td colSpan={2}>4× GbE PoE PSE（802.3af，M12 防水）+ 1× GbE（M12 防水）</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={2}>4× USB 3.2 Type-A（M12 防水）+ 1× USB 2.0/3.0 Type-C（烧录，防水盖）+ 1× USB Type-C（调试）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={2}>1× HDMI（防水盖）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={2}>2× CAN-FD（隔离，120 Ω），通过 M12 A-code 8 针</td>
    </tr>
    <tr>
      <td>串口</td>
      <td colSpan={2}>1× RS-232/422/485，通过 M12 A-code 8 针</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={2}>2× DI + 2× DO，通过 M12 12 针 / 8 针</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={2}>1× Nano SIM 卡槽</td>
    </tr>
    <tr>
      <td>天线</td>
      <td colSpan={2}>4× SMA 防水天线连接器</td>
    </tr>
    <tr>
      <td rowSpan={2}>扩展</td>
      <td>M.2 Key E</td>
      <td colSpan={2}>Wi-Fi / Bluetooth 模块（可选）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={2}>5G / GPS 模块（可选）</td>
    </tr>
    <tr>
      <td rowSpan={2}>电源</td>
      <td>输入</td>
      <td colSpan={2}>通过 M12 B/A-code 连接器提供 19–48 V DC</td>
    </tr>
    <tr>
      <td>功耗</td>
      <td colSpan={2}>典型 25 W，10 A 保险丝</td>
    </tr>
    <tr>
      <td rowSpan={6}>环境</td>
      <td>防护等级</td>
      <td colSpan={2}>IP66</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={2}>−20°C 至 +60°C（0.7 m/s 气流）</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td colSpan={2}>10–95% RH（无冷凝）</td>
    </tr>
    <tr>
      <td>振动</td>
      <td colSpan={2}>3 Grms @ 5–500 Hz，随机，1 小时/轴</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td colSpan={2}>210 mm × 190 mm × 93 mm</td>
    </tr>
    <tr>
      <td>颜色</td>
      <td colSpan={2}>银灰色（中框银色，散热片黑色）</td>
    </tr>
    <tr>
      <td colSpan={2}>认证</td>
      <td colSpan={2}>CE、FCC、RoHS、REACH</td>
    </tr>
    <tr>
      <td colSpan={2}>质保</td>
      <td colSpan={2}>2 年</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概览

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw1.png" alt="reComputer Rugged J40 侧视图，展示工业连接器" />
    <figcaption>侧视图 · 网络、USB、显示和天线接口</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw2.png" alt="reComputer Rugged J40 另一侧视图" />
    <figcaption>侧视图 · 电源、串口、CAN 和数字 I/O 接口</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw3.png" alt="reComputer Rugged J40 底视图" />
    <figcaption>底视图 · 安装与外壳布局</figcaption>
  </figure>
</div>

### LED 指示灯

| LED | 颜色 | 状态 | 描述 |
| --- | --- | --- | --- |
| PWR | 绿色 | On | 设备已上电 |
| PWR | 绿色 | Off | 设备未上电 |
| ACT | 绿色 | Flashing | SSD 访问活动 |

如需了解连接器引脚定义、接口配置和扩展说明，请继续阅读[硬件与接口指南](/jetson/recomputer_rugged_j401/hardware_and_interface_usage/)。

## 烧录 JetPack {#flash-jetpack}

请按顺序完成以下流程。编号布局将主机准备、恢复模式操作和终端命令集中在一处。

<div className="jetson-product-step-flow">
<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>选择并下载 BSP</h3>
    <p className="jetson-product-step-label">步骤 1 · 使镜像与具体 Jetson 配置匹配</p>

打开 Jetson 烧录资源页面，查看与你的 reComputer Rugged 具体型号和 Jetson 模组匹配的最新镜像。

<div className="jetson-product-actions">
  <Link className="jetson-product-button" to="/flash/jetpack_to_selected_product" target="_blank" rel="noopener noreferrer">打开 JetPack 镜像选择器 ↗</Link>
</div>

:::warning
请勿烧录其他载板或 Jetson 模组的镜像。如果列表中没有你的 reComputer Rugged J4012 或 J3011 具体配置，请在继续之前联系 Seeed Studio 支持。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>准备设备</h3>
    <p className="jetson-product-step-label">步骤 2 · 设置 Ubuntu 主机和线缆</p>

在断开连接或给设备上电之前，请准备以下物品：

- reComputer Rugged J4012 或 J3011
- 19–48 V DC 电源
- 实体 Ubuntu 20.04 或 22.04 主机
- 用于烧录的 USB Type-C 数据线
- 外接显示器和 HDMI 线缆
- 键盘和鼠标

:::tip
尽可能使用实体 Ubuntu 主机。虚拟机中的 USB 透传可能会中断烧录过程。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>进入强制恢复模式</h3>
    <p className="jetson-product-step-label">步骤 3 · 连接 DEVICE 接口并确认 USB ID</p>

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/rugged_J401/1.jpg" alt="用于烧录 reComputer Rugged J40 的恢复按键和 DEVICE 接口" />

1. 使用 USB Type-C 数据线连接 **DEVICE** 接口与 Ubuntu 主机。
2. 按住 **REC** 按键。
3. 按住 **REC** 的同时，接通电源以启动设备。
4. 松开 **REC** 按键。
5. 在 Ubuntu 主机上确认 Jetson 已被识别：

```bash
lsusb
```

按配置的预期输出：

| 产品 | Jetson 模组 | 预期 USB ID |
| --- | --- | --- |
| reComputer Rugged J4012 | Orin NX 16GB | `0955:7323 NVidia Corp` |
| reComputer Rugged J3011 | Orin Nano 8GB | `0955:7523 NVidia Corp` |

如果没有出现预期 ID，请重新连接 USB 线缆、尝试主机上的其他 USB 端口，并在继续之前重复恢复模式操作。

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>解压并烧录镜像</h3>
    <p className="jetson-product-step-label">步骤 4 · 在 Ubuntu 主机上运行批量烧录包</p>

切换到包含已下载镜像的目录并解压：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
```

进入解压后的目录并开始烧录：

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

等到终端报告烧录成功完成。然后拔下 USB 线缆，重新给 reComputer 上电，连接显示器和输入设备，并完成 Ubuntu 首次启动设置。

  </div>
</section>
</div>

## 应用案例 {#applications}

了解将 reComputer Rugged J40 硬件与可部署边缘 AI 工作流相结合的应用示例。新的示例可以在可用后加入此集合。

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <Link className="jetson-product-application-cover" to="/jetson/recomputer_rugged_j401/industrial_vision/" aria-label="打开工业叉车视觉应用">
      <img src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="由 reComputer Rugged J401 驱动的工业叉车视觉应用" />
    </Link>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="应用能力">
        <span>检测</span>
        <span>推理基准</span>
      </div>
      <h3><Link to="/jetson/recomputer_rugged_j401/industrial_vision/">工业叉车视觉</Link></h3>
      <p>在 reComputer Rugged J401 上部署多摄像头检测、深度预警、驾驶员监测、目标跟踪，以及经过测量的 Jetson 推理工作负载。</p>
    </div>
  </article>
</div>

## 资源

这些文件可用于机械集成、载板设计核对、BSP 开发和 Jetson 平台选型。

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>产品规格书</strong><small>电气、机械和环境规格</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>载板原理图</strong><small>查看载板电路和信号走线</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PSE</span>
    <span className="jetson-product-resource-copy"><strong>PSE 板原理图</strong><small>PoE 供电电路设计参考</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>3D 机械模型</strong><small>用于安装和外壳规划的 STEP 装配体</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Linux_for_Tegra 源码</strong><small>Seeed Jetson BSP 源码和定制资源</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CMP</span>
    <span className="jetson-product-resource-copy"><strong>Jetson 设备对比</strong><small>对比 Jetson 模组和 Seeed 载板平台</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>

</div>
