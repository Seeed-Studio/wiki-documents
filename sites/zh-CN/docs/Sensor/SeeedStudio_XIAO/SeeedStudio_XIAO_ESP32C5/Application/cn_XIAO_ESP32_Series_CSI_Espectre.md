---
description: 基于 Wi-Fi 频谱分析（CSI）的运动检测系统，通过 ESPHome 原生集成 Home Assistant。
title: 在 Seeed Studio XIAO ESP32 系列上使用 ESPHome 部署 Espectre
keywords:
  - Espectre
  - XIAO
  - ESPHome
  - WiFi
image: https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image1.webp
slug: /xiao-esp32--series-espresense
sku: 100010048,113991254,113991114, 113991054
last_update:
  date: 01/26/2026
  author: Carla Guo
---

# 在 Seeed Studio XIAO ESP32 系列上使用 ESPHome 部署 Espectre

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image1.png" style={{width:1000, height:'auto'}}/></div>

**ESPectre 是一个基于 Wi-Fi 频谱分析（CSI）的运动检测系统，通过 ESPHome 原生集成 Home Assistant。** 当有人在房间内移动时，他们会"干扰"在路由器和传感器之间传播的 Wi-Fi 波。这就像当你在手电筒前挥手时看到阴影变化一样。[XIAO ESP32 开发板](https://www.seeedstudio.com/ESP32-Series-c-2580.html)"监听"这些变化并理解是否有运动。


## 特性

- **基于 Wi-Fi 的运动检测**：仅使用 Wi-Fi 信号检测人体运动——无摄像头、无麦克风，确保完全隐私
- **最少硬件，快速设置**：仅需一块 XIAO ESP32 开发板，可在 10-15 分钟内设置完成，总成本约 7 美元
- **完全非侵入式**：无需可穿戴设备或物理传感器——用户无需携带或佩戴任何东西
- **穿墙工作**：Wi-Fi 信号可穿透墙壁，实现跨房间的可靠运动检测

## 所需物品

### 硬件

- **2.4GHz Wi-Fi 路由器** - 您家中现有的路由器即可正常工作
- [**支持 CSI 的 ESP32**](https://www.seeedstudio.com/ESP32-Series-c-2580.html) - XIAO ESP32-C3 / XIAO ESP32-C6 / XIAO ESP32-S3，XIAO ESP32-C5 实验性支持。

### 软件（全部免费）

- **Python 3.12**（⚠️ Python 3.14 与 ESPHome 存在已知问题）
- **ESPHome**（集成在 Home Assistant 中或独立运行）
- **Home Assistant**（在 Raspberry Pi、PC、NAS 或云端。推荐使用，但可选）

## 快速开始

### 1. 安装 ESPHome

```bash
# Create virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
# venv\Scripts\activate   # On Windows

# Install ESPHome
pip install esphome
```

我们推荐在计算机终端中下载并运行 ESPHome，而不是直接在 Home Assistant 中运行，原因是 PlatformIO (PIO) 生成的二进制文件相当大。Home Assistant 环境无法可靠地处理如此大的临时文件和系统文件，这最终可能导致构建或部署过程失败。

例如，在我们的测试中观察到以下消息：
>我们发现了 1.63GB 的不必要 PlatformIO 系统数据（临时文件、不必要的包等）。使用 pio system prune --dry-run 列出它们或使用 pio system prune 节省磁盘空间。


### 2. 下载配置文件

为您的硬件下载示例配置：

| 平台 | 配置文件 | CPU | WiFi | PSRAM | 状态 |
|----------|-------------------|-----|------|-------|--------|
| **XIAO ESP32-C6** | [espectre-c6.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c6.yaml) | RISC-V @ 160MHz | WiFi 6 | ❌ | ✅ 已测试 |
| **XIAO ESP32-S3** | [espectre-s3.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-s3.yaml) | Xtensa @ 240MHz | WiFi 4 | ✅ 8MB | ✅ 已测试 |
| **XIAO ESP32-C3** | [espectre-c3.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c3.yaml) | RISC-V @ 160MHz | WiFi 4 | ❌ | ✅ 已测试 ² |
| **XIAO ESP32-C5** | [espectre-c5.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c5.yaml) | RISC-V @ 240MHz | WiFi 6 | ❌ | ⚠️ 实验性 ¹ |

**推荐**：
- **XIAO ESP32-C6**：最适合 WiFi 6 环境，标准运动检测
- **XIAO ESP32-S3**：最适合高级应用，未来的机器学习功能（更多内存）
- **XIAO ESP32-C3**：经济实惠的选择

这些文件已预配置为从 GitHub 自动下载组件。

> ⚠️ **实验性平台**：ESP32-S2 和 ESP32-C5 支持 CSI 但尚未经过广泛测试。
>
> ESP32-C5：ESPHome 尚不支持 `improv_serial`（USB 配置）。请改用 BLE 或 WiFi AP 配置。

### 3. 构建和烧录

```bash
cd examples
esphome run espectre-c5.yaml  # or espectre-s3.yaml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image2.png" style={{width:1000, height:'auto'}}/></div>


### 4. 配置 WiFi

烧录后，使用以下方法之一配置 WiFi：

| 方法 | 如何操作 |
|--------|-----|
| **BLE**（最简单） | 使用 ESPHome 应用或 Home Assistant Companion 应用 |
| **USB** | 前往 [web.esphome.io](https://web.esphome.io) → Connect → Configure WiFi（不推荐 XIAO ESP32-C5） |
| **强制门户** | 连接到 "ESPectre Fallback" WiFi → http://192.168.4.1|

要将您的 XIAO ESP32 设备集成到 Home Assistant 中，您需要将其配置为使用与 Home Assistant 相同的局域网。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image3.png" style={{width:400, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image4.png" style={{width:1000, height:'auto'}}/></div>

就是这样！设备将被 Home Assistant 自动发现。

### 5. 放置传感器

最佳传感器放置对于可靠的运动检测至关重要。推荐与路由器的距离，最佳范围：3-8 米

| 距离 | 信号 | 多径 | 灵敏度 | 噪声 | 推荐 |
|----------|--------|-----------|-------------|-------|----------------|
| < 2m | 过强 | 最小 | 低 | 低 | ❌ 太近 |
| 3-8m | 强 | 良好 | 高 | 低 | ✅ **最佳** |
| > 10-15m | 弱 | 可变 | 低 | 高 | ❌ 太远 |

>**放置提示**
>
>应该：
>- 将传感器放置在要监控的区域（不一定与路由器直线对齐）
>- 高度：距离地面 1-1.5 米（桌子/台面高度）
>- 外部天线：使用 IPEX 连接器以获得更好的接收效果
>
>不应该：
>- 避免路由器和传感器之间有金属障碍物（冰箱、金属柜）
>- 避免角落或封闭空间（减少多径分集）


### 6. Home Assistant 集成

ESPHome 提供**自动 Home Assistant 集成**。设备烧录并连接到 WiFi 后：

1. Home Assistant 将自动发现设备
2. 前往 **Settings** → **Devices & Services** → **ESPHome**
3. 点击发现设备上的 **Configure**
4. 所有传感器将自动添加

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image5.png" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image6.png" style={{width:1000, height:'auto'}}/></div>

- 请在使用前校准设备。只需按下 `Calibrate` 按钮；校准完成后按钮状态将自动重置。注意：校准期间房间必须无人。

- 如果您发现 Home Assistant 可以检测到 Espectre 设备但无法成功添加，只需尝试降低 `traffic_generator_rate`。

> 在收集 CSI 数据时，CPU 在高中断负载下运行（每秒 100 次或更多）。因此，CSI 数据收集过程和 Home Assistant 通信任务之间会发生资源争用，无论是在硬件级别还是由于有限的网络带宽。


- 有关更多自动化示例、仪表板示例和更多设置详细信息，请参阅 [SETUP.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/SETUP.md)。

### 7. 配置参数

如果您发现准确性不令人满意，可以通过调整 YAML 文件中 `espectre:` 部分下的参数来手动微调。调整后，重新构建并上传文件。

| 参数 | 类型 | 默认值 | 描述 |
|-----------|------|---------|-------------|
| `traffic_generator_rate` | int | 100 | CSI 生成的数据包/秒（0=禁用，使用外部流量） |
| `traffic_generator_mode` | string | dns | 流量生成器模式：`dns`（UDP 查询）或 `ping`（ICMP） |
| `publish_interval` | int | auto | 传感器更新之间的数据包数（默认：与 traffic_generator_rate 相同，如果流量为 0 则为 100） |
| `segmentation_threshold` | float | 1.0 | 运动灵敏度（越低=越敏感） |
| `segmentation_window_size` | int | 50 | 数据包中的移动方差窗口 |
| `selected_subcarriers` | list | auto | 固定子载波（省略以进行自动校准） |
| `lowpass_enabled` | bool | false | 启用低通滤波器以降低噪声 |
| `lowpass_cutoff` | float | 11.0 | 低通滤波器截止频率（Hz）（5-20） |
| `hampel_enabled` | bool | false | 启用 Hampel 异常值滤波器 |
| `hampel_window` | int | 7 | Hampel 滤波器窗口大小 |
| `hampel_threshold` | float | 4.0 | Hampel 滤波器灵敏度（MAD 乘数） |
| `gain_lock` | string | auto | AGC/FFT 增益锁定：`auto`、`enabled`、`disabled` |

有关详细的参数调优（范围、推荐值、故障排除），请参阅 [TUNING.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/TUNING.md)。


## 系统架构

### 处理管道

ESPectre 使用专注的处理管道进行运动检测：

```
┌─────────────┐
│  CSI Data   │  Raw Wi-Fi Channel State Information
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Gain Lock  │  AGC/FFT stabilization (~3 seconds)
│             │  Locks hardware gain for stable measurements
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Auto     │  Automatic subcarrier selection (once at boot)
│ Calibration │  Selects optimal 12 subcarriers via NBVI
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Normalization│  Attenuate if baseline > 0.25 (always enabled)
│             │  Prevents extreme motion values
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Hampel    │  Turbulence outlier removal
│   Filter    │  (optional, disabled by default)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Low-pass   │  Noise reduction (smoothing)
│   Filter    │  (optional, disabled by default)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Segmentation │  MVS algorithm
│    (MVS)    │  IDLE ↔ MOTION
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Home        │  Native ESPHome integration
│ Assistant   │  Binary sensor + Movement/Threshold
└─────────────┘
```

### 单个或多个传感器

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ ESP32   │  │ ESP32   │  │ ESP32   │
│ Room 1  │  │ Room 2  │  │ Room 3  │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┴────────────┘
                  │
                  │ ESPHome Native API
                  ▼
         ┌────────────────────┐
         │   Home Assistant   │
         │   (Auto-discovery) │
         └────────────────────┘
```

每个传感器都会被 Home Assistant 自动发现，包含：
- 用于运动检测的二进制传感器
- 运动评分传感器
- 可调阈值（数字实体）

### 自动子载波选择

ESPectre 实现了 **NBVI（归一化基线变异性指数）** 算法用于自动子载波选择，在 **零手动配置** 的情况下实现接近最优的性能（F1=98.2%）。

> ⚠️ **重要提示**：设备启动后请保持房间 **安静和静止** 10 秒钟。自动校准在此期间运行，移动会影响检测精度。

有关 NBVI 算法详情，请参阅 [ALGORITHMS.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/ALGORITHMS.md)。

## 你可以用它做什么

- **家庭安防**：当你外出时有人进入会收到警报
- **老人护理**：监控活动以检测跌倒或长时间不活动
- **智能自动化**：仅在有人在场时开启灯光/暖气
- **节能**：自动关闭空房间中的设备
- **儿童监护**：夜间离开房间时发出警报
- **气候控制**：仅对有人的区域进行加热/制冷


## 技术深入探讨

有关算法详情（MVS、NBVI、Hampel 滤波器），请参阅 [ALGORITHMS.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/ALGORITHMS.md)。

有关性能指标（混淆矩阵、F1 分数、基准测试），请参阅 [PERFORMANCE.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/PERFORMANCE.md)。

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