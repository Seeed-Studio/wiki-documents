---
description: Build a HMI Display for Windows/MacOS using Wio Terminal
title: 使用Wio Terminal构建Windows/MacOS的HMI显示器
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-HMI-Usermode-SDK
last_update:
  date: 3/07/2024
  author: jessie
---

# 使用Wio Terminal构建Windows/MacOS的HMI显示器

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png"/></div>

在这篇wiki中，我们将介绍如何使用 [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 作为HMI显示器，使用 **用户模式SDK在Windows/Linux/Mac OS上运行** ，这将扩展Wio Terminal在工业应用中的可能性！

如果您想将Wio Terminal与Raspberry Pi一起作为HMI显示器使用，请查看这篇 [wiki](https://wiki.seeedstudio.com/Wio-Terminal-HMI/).

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Wio Terminal 固件

首先，您需要通过PC将Arduino程序上传到Wio Terminal。

- 在这里下载 [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP) 库。

有两个 **示例**, 分别是 `NullFunctional` 和 `USBDisplayAndMouseControl`:

1. 如果您希望 **在 Wio Terminal 获得更高的屏幕刷新率**, 请将 **`NullFunctional`** 上传到 Wio Terminal。
2. 如果您希望 **Wio Terminal 也能作为鼠标使用**, 请将 **`USBDisplayAndMouseControl`** 上传到 Wio Terminal。

:::注
请 **确保阅读注意事项**, 对于用户模式SDK, `USBDISP().begin(true);`变为 `USBDISP().begin(true, true);`。
:::

### `uf2` 方法

为了方便起见，我们还提供了通过 `uf2` 文件上传Wio Terminal固件的方法。只需从以下位置下载 `uf2` 文件。

- 下载 [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/NullFunctional-sdk.uf2)的 `uf2` 文件。

- 下载 [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/USBDisplayAndMouseControl-sdk.uf2)的 `uf2` 文件。

通过快速两次滑动电源开关进入引导模式。如需更多参考，请参阅 [此处](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq)。

您的电脑上应该出现一个名为 `Arduino` 的外部驱动器。将下载的uf2文件拖到 `Arduino` 驱动器中。

## 主机设备固件

这次我们的主机设备是我们的电脑，让我们来看看如何使用Wio Terminal作为HMI显示器使用用户模式SDK！

### MacOS/Linux操作系统 - C++ SDK

- 下载固件仓库：

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp.git
```

- 下载固件仓库：

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/rpusbdisp-drv/src
```

打开 `rpusbdisp.cc` 并 **根据您的Wio Terminal固件（NullFunctional或USBDisplayAndMouseControl）定义宏**。 取消注释您正在使用的宏：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros.png"/></div>

- 返回到用户模式SDK路径：

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk
```

- 创建并构建驱动程序：

```sh
make
```

:::注
您可能需要一些依赖库，如lisusb。MacOS可以使用 [`brew`](https://brew.sh/) Linux操作系统可以使用 `apt-get` 进行安装。 
:::

- 导航到构建目录：

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/build/
```

- 导航到构建目录：

```sh
sudo ./rpusbdispdemo --demo 1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/demo.gif"/></div>

您应该看到Wio Terminal开始显示，图形被绘制出来。此代码的源代码位于： `seeed-linux-usbdisp/drivers/usermode-sdk/demo/src/main.cc`.

#### 多屏幕

该C++ SDK还支持多个屏幕（多个Wio Terminal），对于两个屏幕的使用，只需运行演示2：

```sh
sudo ./rpusbdispdemo --demo 2
```

**注:** 这里提供了4个演示，最多使用4个屏幕，您可以查看源代码以参考您的应用程序。

### Windows - Python SDK

对于Windows，您可以在Python上运行用户模式SDK！首先，请确保您已安装Python并安装所需的库：

:::注
**Python是跨平台的，您可以在所有平台上运行此演示，包括Windows/Linux/MacOS**
:::

```sh
pip3 install pyusb
```

- 进入python-demo路径：

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- 打开 `simple-test.py` 并使用您Wio Terminal内的固件定义正确的宏，然后保存。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros-2.png"/></div>

- 运行Python演示：

```sh
python3 simple-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/simple-test.gif"/></div>

#### 多屏幕

该Python SDK还支持多个屏幕（多个Wio Terminal），您可以参考 `USBDisplay.py` 。

这些示例使用了4个Wio Terminal作为显示器，其格式如下：

```py
devices = list(usb.core.find(find_all=True, idVendor=0x2886, idProduct=0x802D))
dev1 = devices[0] # device 0
dev2 = devices[1] # device 1
dev3 = devices[2] # device 2
dev4 = devices[3] # device 3
```

## 简单演示

此示例简单地使用Python将图像从PC端传输到Wio Terminal。

- 进入演示路径：

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- 下载 `image.jpg` 并将其保存在与 `image-test.py` 相同的位置。

**注:** 请 **选择与您的Wio Terminal固件匹配的宏** ，否则会出现错误。

- 运行演示：

```sh
python3 image-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/image-demo.png"/></div>

## 参考资料

- [rpusbdisp interface protocols document](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/rpusbdisp_interface_protocol.pdf)

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您尽可能顺畅的体验我们的产品。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
