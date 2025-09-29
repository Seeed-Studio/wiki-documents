---
description: 如何在 reComputer Jetson 开发板上使用 40 引脚 GPIO
title: 如何在 reComputer Jetson 开发板上使用 40 引脚 GPIO
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_GPIO
last_update:
  date: 04/12/2023
  author: Lakshantha
---

# 如何在 reComputer Jetson 开发板上使用 40 引脚 GPIO

本教程演示如何访问和控制 reComputer Jetson 开发板的 40 引脚 GPIO。在本教程中，我们以 reComputer J4012 为例。不过，其他 reComputer Jetson 开发板的操作步骤也是类似的。

## 开始之前

在开始使用 reComputer Jetson 设备上的 40 引脚 GPIO 之前，您需要了解以下信息。

- 每个 GPIO 引脚的电压电平为 3.3V
- 由于 GPIO 引脚的电流限制，您无法通过 GPIO 为 reComputer Jetson 开发板反向供电

## 查找 GPIO 名称

**步骤 1：** 打开 reComputer Jetson 开发板的数据手册。以下是所有可用的 reComputer Jetson 开发板的数据手册。

- [J101 载板](https://files.seeedstudio.com/products/102991694/reComputer%20J101V2%20datasheet.pdf)
    - reComputer J1010

- [A206 载板](https://files.seeedstudio.com/products/114110049/A206%20carrier%20board%20pin%20description.pdf)
    - reComputer J2011
    - reComputer J2012
    - reComputer J1020
    
- [J202 载板](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202-carrier-board-datasheet.pdf)
    - reComputer J2021
    - reComputer J2022
    - reComputer J1020 V2

- [J401 载板](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J401-datasheet.pdf)
    - reComputer J4011
    - reComputer J4012 
    - reComputer J3010
    - reComputer J3011

这里我们选择了 [reComputer J4012](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf) 的数据手册。

**步骤 2：** 导航到 **40 Pin Expansion Header - J10** 部分

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/1.png" /></div>

**步骤 3：** 找到 **Header Pin #** 的名称，确保其在 **Default Usage / Description** 列下的默认用途是 **GPIO**

例如，查看 **Header Pin 15**。它的 **Default Usage** 是 **GPIO**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/2.jpg" /></div>

**步骤 4：** 对于同一个引脚，在 **Module Pin Name** 列下找到名称。在我们的例子中，它是 **GPIO12**

## 访问和控制 GPIO

现在我们有两种不同的方法来访问 Jetson 开发板上的 GPIO，这取决于是否可以直接获得 GPIO 标签。使用第一种方法，我们可以在设备内执行命令后直接知道 GPIO 引脚标签。但是，如果引脚标签没有直接显示，您可以使用第二种方法。

### 方法 1

在这种方法中，GPIO 的 dts 文件包含在您刷写的 JetPack 版本中，并且已经正确标记了 GPIO，因此您可以直接从设备获取引脚标签。

**步骤 1：** 进入 Jetson 设备的终端并执行此命令

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**步骤 2：** 找到与我们之前获得的**模块引脚名称**对应的**GPIO编号**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/3.png" /></div>

在这种情况下，对应**GPIO12**的是**gpio-268**

**步骤 3：** 在终端中执行以下命令来导出gpio-268引脚

```sh
cd /sys/class/gpio
echo 268 > export
```

**步骤 4：** 设置方向并设置值。这里方向可以是 **in/ out**，值可以是 **0/ 1**

例如，将 GPIO12 设置为高电平

```sh
cd gpio268
echo "out" > direction
echo 1 > value
```

To set GPIO12 to LOW

```sh
echo 0 > value
```

**步骤 5:** 要将您导出的 GPIO 引脚设置回默认状态，请执行以下操作

```sh
cd ..
echo 268 > unexport
```

### 方法 2

在这种方法中，您刷入的 JetPack 版本中不包含 GPIO 的 dts 文件，因此 GPIO 不会被正确标记。所以我们需要参考另一个文档（pinmux）来获取引脚标签信息。请根据 SoM 参考以下链接。

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**步骤 1：** 根据您使用的 SoM 下载 pinmux 文档。这里我们选择 [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) 文档

**步骤 2：** 找到与我们之前获得的模块引脚名称对应的 GPIO 标签（在 Customer Usage 列下）。例如，对于 **GPIO12**，它是 **GPIO3_PN.01**，这里我们参考 **PN.01**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**步骤 3：** 进入 Jetson 设备的终端并执行此命令

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**步骤 4：** 找到与我们之前获得的 **GPIO 标签** 对应的 **GPIO 编号**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/5.png" /></div>

在这种情况下，它是对应于 **PN.01** 的 **gpio-433**，这也等于 **GPIO12**

**步骤 5：** 在终端中执行以下命令来导出 gpio-433 引脚

```sh
cd /sys/class/gpio
echo 433 > export
```

**步骤 6：** 设置方向并设置值。这里方向可以是 **in/ out**，值可以是 **0/ 1**

例如，将 GPIO12 设置为 HIGH

```sh
cd PN.01
echo "out" > direction
echo 1 > value
```

To set GPIO12 to LOW

```sh
echo 0 > value
```

**步骤 7:** 要将您导出的 GPIO 引脚设置回默认状态，请执行以下操作

```sh
cd ..
echo 433 > unexport
```

### 对于 Jetpack6+
与方法2类似，我们需要参考另一个文档（pinmux）并获取此引脚标签信息。根据SoM参考以下链接。

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**步骤1：** 根据您使用的SoM下载pinmux文档。这里我们选择[Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)文档

**步骤2：** 找到与我们之前获得的模块引脚名称对应的GPIO标签（在Customer Usage列下）。例如，对于**GPIO12**，它是**GPIO3_PN.01**，这里我们参考**PN.01**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**步骤3：** 进入Jetson设备的终端并执行此命令

```bash
sudo apt update
sudo apt install gpiod

gpioinfo
```

**步骤 4：** 找到与我们之前获得的 **GPIO 标签** 对应的 **GPIO 编号**

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo1.png" />
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo2.png" />
</div>

在这种情况下，**gpiochip0 line85** 对应 **PN.01**，这也等于 **GPIO12**

**步骤 5：** 然后我们可以使用 **gpioset** 命令来配置 GPIO 的工作模式。

```bash
# To set GPIO12 to HIGH
sudo gpioset --mode=wait gpiochip0 85=1
# To set GPIO12 to LOW
sudo gpioset --mode=wait gpiochip0 85=0 
```

:::info
如果您想了解更多关于 **gpioset** 命令的信息，请参考：
https://www.acmesystems.it/gpiod
:::

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