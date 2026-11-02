---
description: 解释 Device Tree 在 Jetson 平台中的作用：Linux 如何知道载板上连接了哪些硬件、更换载板后为什么有些硬件会失效、DTS/DTSI/DTB/DTBO 之间有什么区别，以及为什么 Seeed Studio 的载板需要自己的 BSP。
title: Jetson Device Tree
tags:
  - jetson
  - device tree
  - dts
  - dtsi
  - dtb
  - dtbo
  - carrier board
  - bsp
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_device_tree
last_update:
  date: 11/02/2026
  author: youjiang
---

在前两篇文章中，我们通过 UART 启动日志，走了一遍 Jetson 从上电到进入 Ubuntu 的完整启动流程：

`Power On` --> `MB1/2` --> `UEFI` --> `L4TLauncher` --> `Linux Kernel` --> `RootFS` --> `Systemd`

在理解了启动链路之后，下一个很自然的问题就是：**Linux 到底是怎么知道这块板子上接了哪些硬件的？**

比如，同一块 Jetson Orin Nano 模组，在 NVIDIA 官方开发套件载板上工作一切正常，但当你把它插到另一块载板上时，USB 可能就不工作了。

Jetson 模组没有变，Linux Kernel 也没有变。那为什么只是换了一块载板，整个系统的行为就完全变了呢？这就引出了 Jetson 硬件开发中一个非常重要的概念：**Device Tree**。在这篇文章中，我们主要会回答以下几个问题：

- **大家常说的 Device Tree 究竟是什么？**
- **为什么很多硬件在更换载板后不能直接使用？**
- **为什么 Seeed Studio 的 Jetson 载板需要自己的 BSP，而不能直接用 NVIDIA 官方 BSP？**

---

## Device Tree 究竟是什么？

前面提到，Linux Kernel 负责管理系统中的底层硬件。那么 Kernel 是怎么知道载板上有哪些设备的呢？答案就是 **Device Tree**。Device Tree 的作用是：**告诉 Linux Kernel 板子上有哪些硬件，以及这些硬件是如何连接的。** 比如，原理图上定义了某个传感器接在哪条 I2C 总线上、总线地址是多少、Reset 接到了哪一个 GPIO；这类信息通常会以对应的形式出现在 Device Tree 中。所以我更愿意把 Device Tree 理解为一份写给 Linux Kernel 的硬件连接说明书。

**原理图是画给人看的；Device Tree 是写给 Linux Kernel 看的。**

后面我们会结合 Seeed Studio 实际的 L4T BSP，来看这些“硬件连接关系”在代码里到底长什么样。Seeed Studio 已经将所有 Jetson 产品的 BSP 开源在 [Seeed-Studio/Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) 中。仓库里有很多以 `.dts` 结尾的文件——这就是我们要讨论的 Device Tree 文件。

---

## 一个例子：Device Tree 如何影响 PCIe / NVMe？

我们说 Device Tree 是“一份写给 Linux Kernel 的硬件连接说明书”。那它在真实代码里到底长什么样？我们直接来看 Seeed Studio J401 的 Device Tree。在 Seeed Studio 的开源仓库中，有一个名为 `tegra234-j401-p3768-0000+p3767-0000.dts` 的 Device Tree 文件。打开后，你可以看到这样一个节点：

```text
vdd_3v3_pcie: regulator-vdd-3v3-pcie {
    compatible = "regulator-fixed";
    regulator-name = "VDD_3V3_PCIE";

    regulator-min-microvolt = <3300000>;
    regulator-max-microvolt = <3300000>;

    gpio = <&gpio_aon
            TEGRA234_AON_GPIO(AA, 5)
            GPIO_ACTIVE_HIGH>;

    enable-active-high;
};
```

这段配置描述了一路用于 PCIe 的 **3.3V 电源轨**。其中一些比较重要的信息包括：

```text
regulator-name
→ This power rail is named VDD_3V3_PCIE

3300000
→ The voltage is 3.3V

TEGRA234_AON_GPIO(AA, 5)
→ Controlled by AON GPIO AA.5

enable-active-high
→ This power rail is enabled when the GPIO is driven high
```

换句话说，载板原理图上的某个 **PCIe Power Enable** 信号，最终是通过 Device Tree 描述给 Linux 的。这是一个非常直观的“硬件连接关系被写进 Device Tree” 的例子。当这些配置都正确时，Kernel 才有机会建立 PCIe Link，并检测到挂在 PCIe 总线上的 NVMe。我们把它和上一篇文章中的启动日志结合起来看：当配置正确时，UART 启动日志中会出现类似这样的信息：

```text
[    6.639293] tegra194-pcie 14160000.pcie: Link up
[    6.649851] nvme nvme0: pci function 0004:01:00.0
[    6.665906] nvme0n1: p1 p2 p3 ...
```

这样我们就可以建立起一个非常重要的对应关系：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_device_tree/devicetree_flow2.png"/></div>

也就是说，**启动日志展示的是结果，而 Device Tree 是产生这个结果的重要配置来源之一。**

如果 Device Tree 和真实的载板不匹配，就会出现问题。假设新的载板把 PCIe 3.3V Enable 换到了另一个 GPIO 上，但 Device Tree 里仍然写着：

```text
AON GPIO AA.5
```

那么 Linux 可能就会按照旧设计，一直去控制错误的 GPIO。

结果就是 NVMe SSD 可能无法被正确识别：启动日志虽然能跑到 Linux Kernel，但始终看不到 PCIe Link up 的信息。到这里，你应该已经对 Device Tree 有了一个基本的认识。

---

## Device Tree 文件格式：DTS、DTSI、DTB 和 DTBO 有什么区别？

在 Jetson BSP 中，你经常会看到这四种类型的文件：`.dts`、`.dtsi`、`.dtb` 和 `.dtbo`。它们看起来很像，但扮演的角色不同。

| File | 全称 | 主要作用 | 是否可直接阅读 | Seeed 开源仓库中的示例 |
|---|---|---|---|---|
| .dts | Device Tree Source | 描述一块具体的板子或一个 overlay | ✅ | tegra234-j401-p3768-0000+p3767-0000.dts |
| .dtsi | Device Tree Source Include | 存放可被多个 DTS 复用的通用配置 | ✅ | tegra234-p3768-0000+p3767-xxxx-nv-common.dtsi |
| .dtb | Device Tree Blob | 由 DTS/DTSI 编译得到的二进制 Device Tree | ❌ | tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb |
| .dtbo | Device Tree Blob Overlay | 在基础 Device Tree 之上新增或修改部分硬件配置 | ❌ | tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo |

### 先来看 DTS 和 DTSI

你可以把 `.dts` 理解为某块具体板子的“入口文件”，而 `.dtsi` 更像是通用配置模块。

例如，Seeed J401 的 DTS 会包含其他 Device Tree 文件：

```text
#include "tegra234-p3767.dtsi"
#include "tegra234-p3768-0000.dtsi"
```

所以在真实项目中，Device Tree 并不是一个从头写到尾的巨大 `.dts` 文件，而是由很多 `.dtsi` 文件一层一层组合起来的。

你可以把它类比成 C 语言：

```text
.dtsi is somewhat like .h
.dts is somewhat like the .c that finally combines these configurations
```

当然，这个类比并不是完全等价，只是为了帮助你更快理解它们之间的关系。

### DTB：Linux 实际使用的二进制 Device Tree

`.dts` 和 `.dtsi` 是给开发者阅读和修改用的。

它们经过 dtc（Device Tree Compiler）编译后，会生成 `.dtb` 文件。

Linux 在启动时真正读取的是编译后的 `.dtb`，而不是源码目录里的 `.dts` 文件。

---

### DTBO：只修改部分硬件配置

有些硬件并不是每台设备上都会装，比如摄像头。如果只是为了加一个 IMX219 传感器，就要复制并维护整份 J401 Device Tree，那会非常麻烦。这类问题就可以通过 DTBO（Device Tree Overlay）来处理。

例如，在 Seeed BSP 中有一个 Camera Overlay：

```text
tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo
```

它并不是一份完整的 J401 Device Tree；它只描述了 **IMX219 Camera 相关的配置**，比如：

- I2C 地址
- Reset / Power GPIO
- CSI 接口
- NVCSI / VI 连接关系
- Camera Sensor 节点
- 等等

你也可以在 Seeed 的 `recomputer-orin-j401.conf` 中看到类似的配置：

```text
OVERLAY_DTB_FILE+=tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo
```

也就是说，J401 的基础硬件配置仍然使用原来的 DTB；你只需要额外叠加摄像头相关的配置即可。

---

## 不止 Device Tree：Jetson 还有更早的板级配置

到这里，我相信你已经对 Device Tree 有了整体认识，也已经能回答本文开头的问题了。但你是否又注意到一个新问题：

Device Tree 是 Linux Kernel 的“原理图”。但根据上一篇文章中的启动日志——在 Linux Kernel 还没启动之前，GPIO、Pinmux 和 Pad Voltage 是谁来配置的？答案是：Bootloader 阶段本身也有自己的一套板级配置。

所以在 Jetson 上，不能简单地把“载板适配”等同于“修改一个 Kernel DTB”。更完整的关系应该是：

```text
                Carrier Board
                     ↓
              Real hardware connections
                     ↓
        ┌────────────┴────────────┐
        ↓                         ↓
Bootloader Board Config     Kernel Device Tree
        ↓                         ↓
   MB1 / MB2 / UEFI          Linux Kernel
        ↓                         ↓
Pinmux / Pad Voltage        USB / PCIe / Camera
 GPIO / Early HW             Ethernet / Sensor
```

如果你想搞清楚它们之间的关系，我建议直接从 Seeed Studio 的 `Linux_for_Tegra` 仓库中学习。

以 J401 为例，`recomputer-orin-j401.conf` 会在刷机时被使用。你可以把这个文件理解为 J401 的一个重要“板级配置入口”。

它会根据不同的 Jetson 模组 SKU，选择对应的 DTB，例如：

```text
tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0001-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0003-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0004-recomputer.dtb
```

在这里你可以看到一个非常重要的信息：

> **Device Tree 不仅与载板有关，还与载板 + Jetson 模组的组合有关。**

但是 `.conf` 文件中包含的内容不仅仅是：

```text
DTB_FILE --> The Kernel Device Tree used by Linux
```

你还会看到：

```text
PINMUX_CONFIG --> Pinmux configuration
PMC_CONFIG --> Pad Voltage / PMC related configuration
OVERLAY_DTB_FILE --> Additional overlays such as Camera and Display
BPFDTB_FILE --> Device Tree used by BPMP
```

这里我们不再展开介绍其余部分的细节。如果你感兴趣，可以自行研究，也欢迎加入 Seeed Jetson 社区一起讨论。

---

## 如何确认当前 Linux 实际使用的 Device Tree？

如果设备已经可以启动进入系统桌面，你也可以直接查看当前系统实际运行的 Device Tree。

导出当前正在运行的 Device Tree：

```text
sudo dtc -I fs -O dts  /proc/device-tree > running.dts
```

然后你就可以直接查看对应的节点。例如：

```text
grep -n "pcie" running.dts
grep -n "usb" running.dts
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_device_tree/running_devicetree.png"/></div>

在调试 Device Tree 时，你真正需要确认的，不仅是你修改了哪个 DTS，更重要的是系统是否真的加载了你修改后的版本。

---

## 总结

Device Tree 本身并不复杂。它要解决的核心问题其实只有一个：

> **让软件知道这块载板上有哪些硬件，以及这些硬件是如何连接的。**

但在 Jetson 上，载板适配不仅仅是 Kernel Device Tree。

从 Seeed Studio 的 L4T BSP 中可以看到，一块载板真正需要的是一整套板级配置。这也是为什么 Seeed Studio 的 Jetson 产品需要自己的 BSP，而不是简单直接使用 NVIDIA Developer Kit 的配置。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
