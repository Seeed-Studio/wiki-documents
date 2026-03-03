---
description: 使用 Wio Terminal 为 Windows/MacOS 构建 HMI 显示器
title: 使用 Wio Terminal 为 Windows/MacOS 构建 HMI 显示器
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-HMI-Usermode-SDK
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 使用 Wio Terminal 为 Windows/MacOS 构建 HMI 显示器

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png"/></div>

在本教程中，我们将介绍如何使用 [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 作为 HMI 显示器，使用**在 Windows/Linux/Mac OS 上运行的用户模式 SDK**。这扩展了 Wio Terminal 在工业应用中的可能性！

如果您想将 Wio Terminal 与树莓派一起用作 HMI 显示器，请查看此[教程](https://wiki.seeedstudio.com/cn/Wio-Terminal-HMI/)。

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Wio Terminal 固件

首先，您需要通过 PC 将 Arduino 程序上传到您的 Wio Terminal。

- 在此处下载 [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP) 库。

有两个**示例**，`NullFunctional` 和 `USBDisplayAndMouseControl`：

1. 如果您想要**在 Wio Terminal 上获得更高的屏幕刷新率**，请将 **`NullFunctional`** 上传到 Wio Terminal。
2. 如果您想要**Wio Terminal 同时充当 USB 鼠标**，请将 **`USBDisplayAndMouseControl`** 上传到 Wio Terminal。

:::note
请**确保阅读注释**，对于用户模式 SDK，`USBDISP().begin(true);` 变为 `USBDISP().begin(true, true);`。
:::

### `uf2` 方法

为了方便起见，我们还提供了上传 Wio Terminal 固件的 `uf2` 方法。只需从下面下载 `uf2` 文件。

- 下载 [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/NullFunctional-sdk.uf2) `uf2` 文件。

- 下载 [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/USBDisplayAndMouseControl-sdk.uf2) `uf2` 文件。

通过快速滑动电源开关两次进入引导加载程序模式。更多参考信息，请参见[此处](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/#faq)。

您的 PC 中应该出现一个名为 `Arduino` 的外部驱动器。将下载的 uf2 文件拖到 `Arduino` 驱动器中。

## 主机设备固件

这次我们的主机设备变成了我们的 PC，让我们了解如何使用用户模式 SDK 将 Wio Terminal 用作 HMI 显示器！

### MacOS/Linux OS - C++ SDK

- 下载固件仓库：

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp.git
```

- 导航到用户模式 sdk 路径：

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/rpusbdisp-drv/src
```

打开 `rpusbdisp.cc` 并**根据您的 Wio Terminal 固件（Nullfunctional 或 USBDisplayAndMouseControl）定义宏**。取消注释您正在使用的那个：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros.png"/></div>

- 导航回用户模式 sdk 路径：

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk
```

- 制作并构建驱动程序：

```sh
make
```

:::note
您可能需要一些依赖库，如 `lisusb`。MacOS 可以使用 [`brew`](https://brew.sh/)，Linux OS 可以使用 `apt-get` 来安装。
:::

- 导航到构建目录：

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/build/
```

- 运行演示：

```sh
sudo ./rpusbdispdemo --demo 1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/demo.gif"/></div>

您应该看到 Wio Terminal 开始显示，图形被绘制出来。此源代码位于：`seeed-linux-usbdisp/drivers/usermode-sdk/demo/src/main.cc`。

#### 多屏幕

此 C++ SDK 还支持多屏幕（多个 Wio Terminal），对于 2 屏幕使用，只需运行演示 2：

```sh
sudo ./rpusbdispdemo --demo 2
```

**注意：** 这里提供了最多使用 4 个屏幕的 4 个演示，您可以查看源代码以参考您的应用程序。

### Windows - Python SDK

对于 Windows，您可以在 Python 上运行用户模式 sdk！首先，确保您已安装 python 并安装依赖库：

:::note
**Python 是跨平台的，您可以在所有平台上运行此演示，包括 Windows/Linux/MacOS**
:::

```sh
pip3 install pyusb
```

- 转到 python-demo 路径：

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- 打开 `simple-test.py` 并使用 Wio Terminal 内的固件定义正确的宏，然后保存。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros-2.png"/></div>

- 运行 Python 演示：

```sh
python3 simple-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/simple-test.gif"/></div>

#### 多屏幕

此 Python SDK 还支持多屏幕（多个 Wio Terminal），您可以查看 `USBDisplay.py` 作为参考。

此示例使用 4 个 Wio Terminal 作为显示器，格式如下所示：

```py
devices = list(usb.core.find(find_all=True, idVendor=0x2886, idProduct=0x802D))
dev1 = devices[0] # device 0
dev2 = devices[1] # device 1
dev3 = devices[2] # device 2
dev4 = devices[3] # device 3
```

## 简单演示

这个示例简单地使用 Python 将图像从 PC 端传输到 Wio Terminal。

- 进入演示路径：

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- 下载 `image.jpg` 并将其保存在与 `image-test.py` 相同的位置。

**注意：** 请**选择与您的 Wio Terminal 固件匹配的宏**，否则会出现错误。

- 运行演示：

```sh
python3 image-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/image-demo.png"/></div>

## 资源

- [rpusbdisp 接口协议文档](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/rpusbdisp_interface_protocol.pdf)

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