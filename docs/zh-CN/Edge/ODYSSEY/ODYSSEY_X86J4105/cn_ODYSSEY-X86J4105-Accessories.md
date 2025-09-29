---
description: ODYSSEY - X86J41x5
title: 添加配件

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-Accessories
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# 为 ODYSSEY - X86J41x5 添加配件

本篇 Wiki 介绍了如何为 ODYSSEY - X86J41x5 添加不同的配件，以提升性能以满足您的需求。例如，您可能需要在图形处理需求较高的场景中使用 ODYSSEY-X86J41x5，因此需要**添加外部 GPU 以获得高性能**。或者在某些情况下，例如 NAS，您可能更倾向于**使用两个 HDD 硬盘驱动器而不是 SSD，以提高稳定性**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png" /></div>

## 1. 通过 PCIe 转 SATA III（HDD 硬盘驱动器）添加额外存储

在 ODYSSEY-X86J41x5 上，有**1 个 M.2 SATA SSD、1 个 M.2 PCIe SSD 和 1 个 SATA III 接口，带有 3 个 SATA III 电源接口**。对于标准使用，这些接口已经足够。然而，对于更多工业用途，可能更倾向于使用 HDD 而不是 SSD。本节将演示如何将多个 HDD 连接到 ODYSSEY-X86J41x5。

### 所需材料

- **M.2 PCIe 转 SATA 适配器**

- HDD 硬盘驱动器（ODYSSEY-X86J41x5 最多支持 3 个 HDD）

为了将更多 HDD 连接到 ODYSSEY-X86J41x5，我们需要一个额外的组件，即 M.2 PCIe 转 SATA 适配器，它可以将 M.2 PCIe 插槽转换为 SATA 数据接口。此适配器可以在电子市场上常见购买。

### 硬件说明

- 将 M.2 PCIe 转 SATA 适配器连接到 ODYSSEY-X86J41x5 的 PCIe 插槽，并将 HDD 数据线插入适配器，如下图所示。将 HDD 电源线连接到三个 SATA III 电源接口之一。

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD.jpg" /></div>
  <br />
</div>

- 您最多可以将 3 个 HDD 硬盘驱动器连接到 ODYSSEY-X86J41x5。启动设备并检查操作系统中是否显示硬盘驱动器。

### 结果

启动操作系统后，您应该能够看到硬盘驱动器。
<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD-OS.png" /></div>
  <br />
</div>

现在您再也不用担心存储问题了！

## 2. 为 ODYSSEY-X86J41x5 添加外部 GPU

为了为 ODYSSEY-X86J41x5 添加外部 GPU 以提升性能，您还需要一个额外的组件。

### 所需材料

- **M.2 PCIe x4 转 PCIe x16 适配器**

- **GPU 的 DC 电源**

这些组件目前尚未由 Seeed 提供销售，因此请耐心等待，或者从电子市场购买。确保适配器适用于 GPU 使用。

### 初始 BIOS 设置

在启用 GPU 之前，需要在 BIOS 中进行一些配置：

1. 在启动时按住 **DEL** 键进入 BIOS 菜单。

2. 导航到 **Advanced** -> **CSM Support** 并按 Enter 启用它。

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/biosSetting.jpg" /></div>
  <br />
</div>

3. 导航到 **Chipset** -> **Primary Display**，选择 **PCIe** 并按 Enter。

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/chipset.png" /></div>
  <br />
</div>

保存 BIOS 设置并关闭设备电源。

### 硬件说明

- 将 GPU 插入适配器的 PCIe x16 端。

- 将适配器插入 ODYSSEY-X86J41x5 的 M.2 PCIe 插槽。

- GPU 还需要外部电源，这里我使用了一个 DIY 的 4 针转 DC 插头来提供 12V 电源**（仅在您知道自己在做什么的情况下操作）**。市场上也有现成的 4 针转 DC 插头可供购买。

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/GPU-connect.jpg" /></div>
  <br />
</div>

- 将 HDMI 连接到 GPU，而不是 ODYSSEY-X86J41x5。

:::note
在硬件连接过程中请小心。确保在通电之前所有连接正确，否则可能会损坏组件。
:::

### 安装 GPU 驱动程序

如果一切正常，设备应该能够正常启动并进入操作系统。但还需要为操作系统安装 GPU 驱动程序。如果您是 Windows 用户，这将非常简单。这里我将演示在 Ubuntu（Linux）上安装 GPU（Nvidia）驱动程序的过程以供参考。

1. 打开终端并输入以下命令检查 GPU：

```bash
lspci | grep -i vga
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/lspci.png" /></div>
  <br />
</div>

在这里我们可以看到两个 GPU，一个是板载 GPU，另一个是外部 GPU（GTX 750）。

2. 首先，我们需要在 Ubuntu 上禁用 **nouveau** 服务。在终端中使用 `nano` 或 `vim` 打开 `/etc/modprobe.d/blacklist.conf`。

```bash
sudo nano /etc/modprobe.d/blacklist.conf
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-1.png" /></div>
  <br />
</div>

3. 在文件末尾添加以下代码并保存更改。

```bash
blacklist nouveau
options nouveau modeset=0
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-2.png" /></div>
  <br />
</div>

4. 运行以下命令更新：

```bash
sudo update-initramfs -u
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-3.png" /></div>
  <br />
</div>

5. 重启设备以应用更改，并可以运行以下命令，如果没有输出，则说明服务已禁用。

```bash
lsmod | grep nouveau
```

6. 现在我们可以使用 Ubuntu 内置命令检查外部 GPU 所需的驱动程序：

```bash
ubuntu-drivers devices
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/drivers.png" /></div>
  <br />
</div>

这将确定 GPU 型号并推荐适合的驱动程序。这里推荐为外部 GPU 安装 nvidia-driver-435。

7. 使用以下命令自动安装驱动程序，并重启设备以使其生效。

```bash
sudo ubuntu-drivers autoinstall
```

到现在为止，驱动程序应该已经安装在 ODYSSEY-X86J4105 上了！您可以通过在终端中运行以下命令来检查 GPU 的状态。

```bash
nvidia-smi
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-1.png" /></div>
  <br />
</div>

或者，您也可以直接进入设置查看：

<div>
  <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png" /></div>
  <br />
</div>

现在，尽情享受性能提升的 ODYSSEY-X86J41x5 吧！一切准备就绪，您可以进入需要大量 GPU 算力的 AI 领域了！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>