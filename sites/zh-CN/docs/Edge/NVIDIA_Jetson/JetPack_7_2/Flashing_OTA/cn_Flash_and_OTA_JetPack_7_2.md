---
description: 使用 Seeed Jetson DevelopTool 推荐的全量刷机流程，以及经过验证的基于镜像的 OTA 负载，对受支持的 Seeed Studio Jetson 设备刷写或迁移到 JetPack 7.2，以便进行受管部署。
title: 刷机与 OTA 升级到 JetPack 7.2
keywords:
  - JetPack 7.2
  - Jetson Linux 39.2
  - Seeed Jetson DevelopTool
  - Flash Center
  - OTA
  - NVIDIA Jetson
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png
slug: /flash_and_ota_jetpack_7.2
last_update:
  date: 07/31/2026
  author: Seeed Studio
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/flash_and_ota_jetpack_7.2/
---

# 刷机与 OTA 升级到 JetPack 7.2

本指南是受支持的 Seeed Studio NVIDIA Jetson 产品进行 JetPack 7.2 安装的主要入口。它说明了何时需要执行全新刷机、何时适合使用基于镜像的 OTA 更新，以及如何使用 **Seeed Jetson DevelopTool Flash Center** 作为引导式刷机示例。

:::info JetPack 7.2 基线
JetPack 7.2 基于 **Jetson Linux 39.2**、**Ubuntu 24.04** 和 **Linux 内核 6.8**。务必选择为目标 Jetson 模组与 Seeed 载板组合精确构建的镜像。
:::

## 首先选择升级方式

| 方法 | 推荐用途 | 数据影响 | JetPack 7.2 状态 |
| --- | --- | --- | --- |
| 使用 Seeed Jetson DevelopTool 全量刷机 | 新设备、开发系统、从 JetPack 6.x 迁移到 7.2、恢复或替换 BSP | 目标系统存储将被清空 | **推荐默认方式** |
| 手动 BSP 刷机 | 自定义 BSP 开发、工厂自动化或在 GUI 之外进行故障排查 | 目标系统存储将被清空 | 在使用正确的 Seeed/NVIDIA BSP 和板卡配置时受支持 |
| 基于镜像的 OTA | 使用已验证的源镜像、目标镜像、板卡配置、分区布局和回滚方案的受管量产设备群 | 如果经过明确设计和测试，可以保留应用数据 | 仅在为完全匹配的产品和源版本验证了 JetPack 7.2 OTA 负载时使用 |
| 跨 JetPack 主版本执行 `apt upgrade` | 不推荐 | 不可预测 | 不要将其用作 JetPack 6.x 到 7.2 的迁移方式 |

:::caution
对于从 JetPack 6.x 迁移到 JetPack 7.2 这样的重大升级，请使用全量刷机，除非 Seeed 明确发布或验证了适用于你确切产品、源 L4T 版本、存储设备和分区布局的 OTA 负载。
:::

## 视频：Seeed Jetson DevelopTool 刷机流程

下方视频演示了在 NVIDIA Jetson AGX Thor 平台上使用 Seeed Jetson DevelopTool。Flash Center 的工作流程同样适用于受支持的 Seeed Jetson 产品，但可用的设备型号和固件版本取决于当前的 DevelopTool 目录。

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/SjXyQ3abxms" title="Seeed Jetson DevelopTool with AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 第 1 部分：使用 Seeed Jetson DevelopTool 进行全量刷机

### 开始之前

- 确认 [JetPack 刷机选择器](/cn/flash/jetpack_to_selected_product/) 或产品 wiki 为你的设备列出了 JetPack 7.2 / L4T 39.2 镜像。
- 使用稳定的 Ubuntu 主机。为获得最可靠的 USB 恢复连接，推荐使用原生 Linux。
- 准备至少 20 GB 的主机可用存储空间；下载和解压 BSP 包可能需要额外空间。
- 使用一根数据 USB 线缆，直接连接到正确的恢复/刷机端口。
- 备份用户数据、容器、校准文件、应用配置、加密密钥以及自定义 BSP 源码。
- 断开不必要的 Jetson 恢复模式设备，以免选择错误的目标。

:::warning
刷机会清空所选 Jetson 系统存储。在开始之前，请确认目标设备、载板、模组 SKU 和存储目标。
:::

### 步骤 1：安装并启动 DevelopTool

安装已发布的 Python 包：

```bash
python3 -m pip install --upgrade seeed-jetson-developer
seeed-jetson-developer
```

或者，从源码安装：

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
python3 -m pip install .
seeed-jetson-developer
```

完整的主机环境配置请参见 [DevelopTool 安装](/cn/jetson_developtool_installation/)。

### 步骤 2：打开 Flash Center

在 Seeed Jetson DevelopTool 中打开 **Flash Center**。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png" style={{width:800, height:'auto'}}/>
</div>

### 步骤 3：选择精确设备和 JetPack 7.2 镜像

选择精确的 Seeed 产品或载板配置，然后在该目标可用时选择 **L4T 39.2 / JetPack 7.2**。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-select-device.png" style={{width:800, height:'auto'}}/>
</div>

:::caution
不要选择名称相似的板卡。一个 Jetson 模组可以电气连接到不同的载板，而这些载板需要不同的设备树、引脚复用设置、电源配置和外设驱动。
:::

如果所选产品未提供 L4T 39.2，请停止并检查：

- [使用 JetPack 为选定 Jetson 刷写 BSP](/cn/flash/jetpack_to_selected_product/)
- [DevelopTool 支持的设备](/cn/jetson_developtool_supported_devices/)
- 从 [JetPack 7.2 资源中心](/cn/jetpack_7_2_resource_hub/) 链接的产品专用刷机 wiki

### 步骤 4：下载、验证并解压 BSP

点击 **Download / Extract BSP**。DevelopTool 会下载固件包，支持断点续传，在提供校验和时进行校验，并解压 BSP。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-prepare-bsp.png" style={{width:800, height:'auto'}}/>
</div>

如果下载验证或解压失败，请不要继续。仅在确认 DevelopTool 无法继续下载后，才删除不完整的包。

### 步骤 5：将 Jetson 置于强制恢复模式

使用产品专用的恢复按键或跳线步骤，连接恢复 USB 端口，并按照其硬件指南的说明为设备上电或复位。

在主机上，确认 NVIDIA 恢复 USB 已出现：

```bash
lsusb | grep 0955
```

Jetson Orin 的恢复设备 ID 通常属于 `0955:7x23` 系列。Jetson Thor 使用不同的恢复 ID。具体值取决于模组。

DevelopTool 的 USB 恢复工作流程请参见 [连接设备](/cn/jetson_developtool_connect_device/)。

### 步骤 6：检测并确认目标

点击 **Detect Device**。在开始刷机前，请确认：

- 选定的 Seeed 产品和载板
- Jetson 模组和内存配置
- L4T 39.2 / JetPack 7.2 镜像
- 目标存储设备
- USB 恢复设备
- 备份已完成

### 步骤 7：开始刷机

点击 **Start Flash**，并在过程完成前保持 USB 和电源连接。

:::warning
在未先查看失败日志之前，不要自动重试失败的刷机。对于 USB 错误，请将设备重新置于强制恢复模式，直接连接到主机，并重新检测目标。
:::

### 步骤 8：完成首次启动

设备启动后：

1. 完成 Ubuntu 首次启动设置，或对无头设备使用 [DevelopTool 远程初始化流程](/cn/jetson_developtool_remote_development/)。
2. 配置网络和 SSH 访问。
3. 仅在基础系统通过验证后再恢复应用数据。

### 步骤 9：验证 JetPack 7.2

运行：

```bash
head -n 1 /etc/nv_tegra_release
cat /etc/os-release
uname -r
nvcc --version
dpkg -l | grep -E 'nvidia-jetpack|tensorrt|libnvinfer|cudnn'
```

确认以下基线：

- Jetson Linux 报告为 R39.2 发布系列。
- 根文件系统报告为 Ubuntu 24.04。
- 内核报告为由镜像提供的 JetPack 7.2 内核 6.8 分支。
- CUDA 和 TensorRT 软件包与目标 JetPack 镜像匹配。

然后验证以太网、Wi-Fi、摄像头、GMSL、CAN、USB、M.2、GPIO、存储、风扇控制以及所需的电源模式。

## 第 2 部分：基于镜像的 JetPack 7.2 OTA

基于镜像的 OTA 可以在无需将每台设备连接到刷机主机的情况下更新已部署的 Jetson。它是一种发布工程工作流程，而不是通用的软件包升级方式。

:::danger 当前仓库负载并非 JetPack 7.2 负载
目前在 [在 reComputer 上部署 OTA](/cn/deploy_ota_on_recomputer/) 中记录的现成 OTA 负载，会将 JetPack 5.1.3 系统升级到 JetPack 6.2。**不要**将这些负载应用到 JetPack 7.2 设备上，也不要将其用作 JetPack 6.x 到 7.2 的升级包。
:::

### 所需的 OTA 兼容性输入

JetPack 7.2 OTA 负载必须针对以下所有内容生成并验证：

- 精确的 Seeed 产品和载板
- 精确的 Jetson 模组 SKU 和内存配置
- 精确的源 L4T 版本和根文件系统状态
- 精确的目标 L4T 39.2 BSP
- 启动存储和分区布局
- 安全启动、磁盘加密和密钥配置
- 自定义设备树、内核、内核模块、固件和根文件系统更改
- 数据保留列表和可用空闲空间
- 掉电恢复和回滚行为

如果上述任一输入不同，则需要构建并验证单独的负载。

### 推荐的 OTA 开发流程

1. 从版本受控的 BSP 输入中复现源镜像和目标 JetPack 7.2 镜像。
2. 使用源镜像为具有代表性的设备刷机，并记录分区、引导加载程序、存储和安全状态。
3. 使用 Jetson Linux 39.2 OTA 工具和匹配的 Seeed 板级支持包生成基于镜像的 OTA 负载。
4. 当生产安全模型需要时，对负载进行签名。
5. 仅定义必须在更新中保留的数据；在首次生产部署前独立备份这些数据。
6. 测试正常更新、中断下载、中断安装、存储空间不足、掉电和回滚等场景。
7. 先向一小部分金丝雀设备组推送，再扩大部署范围。
8. 重启后验证 Jetson Linux、启动槽位、应用服务、外设以及 AI 运行时版本。

现有的 [Deploy OTA on reComputer](/cn/deploy_ota_on_recomputer/) 和 [Updating Jetson Linux with Image-Based OTA](/cn/updating_jetpack_with_ota/) 页面是了解包生成结构和设备端 `nv_ota_start.sh` 工作流程的有用参考。它们中与版本相关的命令必须替换为正确的 Jetson Linux 39.2 软件包、板卡配置和分区数据。

### OTA 设备端验证检查清单

在应用负载之前：

```bash
df -h
lsblk -f
head -n 1 /etc/nv_tegra_release
systemctl --failed
```

在 OTA 重启之后：

```bash
head -n 1 /etc/nv_tegra_release
uname -r
systemctl --failed
journalctl -b -p err
```

还要验证应用数据、网络标识、设备证书、容器卷、硬件接口以及生产环境看门狗。

## JetPack 6.x 到 7.2 迁移检查清单

- 针对 JetPack 7.2 内核头文件重新构建 out-of-tree 内核模块。
- 为目标 BSP 重新构建相机和 GMSL 驱动。
- 为 CUDA 13 重新构建 CUDA 扩展和本地应用程序。
- 在 JetPack 7.2 上重新构建序列化的 TensorRT 引擎。
- 重新创建 Python 环境，而不是复制 JetPack 6.x 的环境目录。
- 针对 JetPack 7.2 的 NVIDIA 容器运行时重新验证容器。
- 在硬件需要时恢复 [JetPack 7.2 无线模块](/cn/jetpack72_ax210_ax200_wifi_setup_guide/)。
- 在启用 `MAXN_SUPER` 或其他更高性能模式之前，验证原始电源模式。
- 在正式投产前记录内存、延迟、吞吐量、温度和功耗。

## 故障排查

### DevelopTool 未检测到恢复设备

- 确认 USB 线缆支持数据传输。
- 使用专用的恢复/刷机 USB 接口。
- 重复执行该产品特定的强制恢复步骤。
- 在主机上运行 `lsusb | grep 0955`。
- 断开其他处于恢复模式的 Jetson 设备。
- 如果 WSL2 的 USB 透传不稳定，优先使用原生 Ubuntu。

### 所需的 JetPack 7.2 镜像未列出

不要选择其他载板作为变通方案。请检查中央刷机选择器和产品 wiki，然后等待或请求针对该精确硬件的已验证 BSP。

### 设备在刷机后无法启动

- 确认镜像与载板和模组 SKU 匹配。
- 移除强制恢复跳线或松开恢复按键。
- 对设备进行断电重启。
- 捕获 UART 串口启动日志。
- 重新进入恢复模式，并在重新刷机前检查 DevelopTool 刷机日志。

### OTA 失败或未重启进入 JetPack 7.2

- 确认负载的来源和目标版本与设备完全匹配。
- 确认有足够的可用存储用于暂存和安装。
- 在重试之前检查 OTA 日志。
- 如果已测试的回滚路径无法恢复设备，则恢复完整的已知良好镜像。

## 相关资源

- [JetPack 7.2 资源中心](/cn/jetpack_7_2_resource_hub/)
- [使用 JetPack 为选定 Jetson 刷写 BSP](/cn/flash/jetpack_to_selected_product/)
- [DevelopTool 刷写固件](/cn/jetson_developtool_flash_firmware/)
- [DevelopTool 支持的设备](/cn/jetson_developtool_supported_devices/)
- [Deploy OTA on reComputer](/cn/deploy_ota_on_recomputer/)
- [Updating Jetson Linux with Image-Based OTA](/cn/updating_jetpack_with_ota/)
- [JetPack 7.2 深度解析](/cn/jetpack72_deep_dive/)

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
