---
description: 如何使用 reComputer Jetson 板上的 40 针 GPIO
title: 如何使用 reComputer Jetson 板上的 40 针 GPIO
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_GPIO
last_update:
  date: 04/12/2023
  author: Lakshantha
---

# 如何使用 reComputer Jetson 板上的 40 针 GPIO

本维基演示了如何访问和控制 reComputer Jetson 主板的 40 针 GPIO。以 reComputer J4012 为例进行说明,不过其他 reComputer Jetson 主板的操作步骤也大致相同。

## 开始之前 

在开始使用 reComputer Jetson 设备上的 40 针 GPIO 之前,您需要了解以下信息。

- GPIO引脚的电压为3.3V
- 由于GPIO引脚的电流限制,您无法通过GPIO对reComputer Jetson板进行反向供电

## 查找 GPIO 名称

**步骤 1:** 打开 reComputer Jetson 板的数据表。您可以在下面找到所有可用 reComputer Jetson 板的数据表。

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

我们已经选择了该数据表。 [reComputer J4012](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf). 

**步骤 2:** 找到扩展针脚部分 **40 Pin 扩展 - J10**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/1.png" /></div>

**步骤 3:** 找到**引脚编号**中默认用途为**GPIO**的引脚名称,并确保位于**默认用途/描述**列下。

例如,检查 **标头引脚 15**。它的**默认用途**是**通用输入/输出 (GPIO)**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/2.jpg" /></div>

**步骤 4:**对于同一个引脚，在 **模块引脚名称** 列下找到其名称。在我们的示例中，它是 **GPIO12**。

## 访问和控制GPIO

现在我们有两种不同的方法来访问Jetson主板上的GPIO,具体取决于是否可以直接获取GPIO标签。使用第一种方法,我们可以在设备内执行一个命令后直接知道GPIO引脚标签。然而,如果引脚标签没有直接显示,您可以使用第二种方法。

### 方法 1

在此方法中,GPIO的dts文件已包含在您刷写的JetPack版本中,并且已经正确标注了GPIO引脚标签,因此您可以直接从设备上获取引脚标签。

**步骤 1:** 进入 Jetson 设备的终端并执行此命令

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**步骤 2:**根据之前获得的 **模块引脚名称**，找到对应的 **GPIO 编号**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/3.png" /></div>

在这种情况下，对应于 **GPIO12** 的是 **gpio-268**。

**步骤 3:** 在终端中执行以下命令以导出 gpio-268 引脚

```sh
cd /sys/class/gpio
echo 268 > export
```

**步骤 4:** 设置方向和值。这里方向可以是 **输入/输出**，值可以是 **0/1**。

例如,将GPIO12设置为高电平

```sh
cd gpio268
echo "out" > direction
echo 1 > value
```

将 GPIO12 设置为低电平

```sh
echo 0 > value
```

**步骤 5:** 要将您导出的 GPIO 引脚恢复到默认状态,请执行以下操作。
```sh
cd ..
echo 268 > unexport
```

### 方法 2

在此方法中,GPIO的dts文件并未包含在您刷写的JetPack版本中,因此针对GPIO的标签信息并未正确标注。因此,我们需要参考另一个文档(pinmux)来获取这些引脚标签信息。请根据所使用的SoM,参考以下链接。

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**步骤 1:** 根据您使用的 SoM 下载相应的 pinmux 文档。在此，我们选择 [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) 文档

**步骤 2:** 根据我们之前获得的模块引脚名称,找到相应的 GPIO 标签(在"客户使用"一列下)。例如,对于 **GPIO12**,它对应的是 **GPIO3_PN.01**,这里我们指的是 **PN.01**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**步骤 3:** 进入 Jetson 设备的终端并执行此命令

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**步骤  4:** 找到先前获得的 **GPIO 标签** 对应的 **GPIO 编号**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/5.png" /></div>

在这种情况下，**gpio-433** 对应于 **PN.01**，也等同于 **GPIO12**。

**步骤 5:** 在终端中执行以下命令以导出 gpio-433 引脚
```sh
cd /sys/class/gpio
echo 433 > export
```

**步骤 6:** 设置方向和设置值。这里的方向可以是 **in/out**，值可以是 **0/1**。

例如,将GPIO12设置为高电平

```sh
cd PN.01
echo "out" > direction
echo 1 > value
```

将GPIO12设置为低电平

```sh
echo 0 > value
```

**步骤 7:** 要将您导出的 GPIO 引脚恢复为默认状态,请执行以下操作:

```sh
cd ..
echo 433 > unexport
```

## 技术支持和产品讨论

感谢您选择我们的产品!我们将为您提供各种支持,确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道,以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>