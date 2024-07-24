---
description: Build a HMI Display for Raspberry Pi using Wio Terminal
title: 使用Wio Terminal为Raspberry Pi构建HMI显示器
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-HMI
last_update:
  date: 3/08/2024
  author: jessie
---

# 使用Wio Terminal为Raspberry Pi构建HMI显示器

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif"/></div>

在本Wiki中，我们将介绍如何使用 [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 作为 for [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html), [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html), [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) 甚至 [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)的 **HMI (人机界面) USB display** 。这将使Wio Terminal成为一款功能更强大的HMI USB显示器，可在更多工业场景中使用！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

它可以支持 **multiple Wio Terminals connected onto the host device**. 理论上，只要你有足够的USB端口，可以连接任意多个！在Raspberry Pi上，它可以支持最多4个Wio Terminal（RPI有4个USB端口）连接到它，作为HMI显示器在 **扩展模式** 和 **镜像模式**下使用，查看以下内容获取更多信息！

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html) / [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) / [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) / [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)

## Wio Terminal固件

首先，您需要通过PC将一个Arduino程序上传到Wio Terminal。

- 在此处下载 [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP) 库。

这里有两个 **示例**, `NullFunctional` 和 `USBDisplayAndMouseControl`:

1. 如果您希望 **Wio Terminal的屏幕刷新率更高**, 请上传 **`NullFunctional`** 到 Wio Terminal。
2. 如果您希望 **Wio Terminal还充当USB鼠标** ，请上传 **`USBDisplayAndMouseControl`** 到 Wio Terminal。

### `uf2` 方法

为了方便起见，我们还提供了通过 `uf2` 方法上传Wio Terminal固件的方式。只需从以下位置下载 `uf2` 文件。

- 下载 [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/NullFunctional.uf2)的 `uf2` 文件。

- 下载 [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/USBDisplayAndMouseControl.uf2) 的 `uf2` 文件。

通过快速滑动电源开关两次进入引导模式。更多参考，请参阅 [此处](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq)。

您的PC上应该出现一个名为 `Arduino` 的外部驱动器。将下载的uf2文件拖到 `Arduino` 驱动器中。

## 主机设备固件

现在让我们在主机设备上设置显示驱动程序，可以是Raspberry Pi，Jetson Nano，甚至是Odyssey X86J4105：

### Raspberry Pi

对于Raspberry Pi，您首先需要从所有配置的源中下载软件包信息：

```sh
sudo apt-get update
```

- 请在终端中运行以下命令安装所需的软件包，如 **kernel headers, kernels, build-essential 和 dkms** ：

```sh
sudo apt-get install raspberrypi-kernel-headers raspberrypi-kernel build-essential dkms
```

- 重新启动Raspberry Pi：

```sh
sudo reboot
```

- 下载Raspberry Pi上的显示驱动程序：

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- 进行驱动程序的编译和构建：

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- 将 **配置文件移动到系统位置**:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

!!!注
        您可以选择不同的屏幕配置，其中默认配置是一个Wio Terminal作为一个屏幕。

- 重新启动服务:

```sh
sudo service lightdm restart
```

- 在终端中运行以下命令进行显示配置：

```sh
sudo raspi-config
```

- 打开Raspberry Pi软件配置工具，导航到以下位置：

```sh
Display Options > Resolution
```

- 选择一个除了"default"之外的不同分辨率

```sh
Ex: DMT Mode 82 1920x1080 60Hz 16:9  
```

- 关闭Raspberry Pi：

```sh
sudo poweroff
```

- 将 Wio Terminal 连接到Raspberry Pi的USB端口

- 打开Raspberry Pi

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-new.png"/></div>

现在，您应该可以看到Wio Terminal显示Raspberry Pi的桌面！如果您在Wio Terminal上加载了 `USBDisplayAndMouseControl` 固件，甚至可以使用按钮和五向开关来控制Raspberry Pi的鼠标！


!!!注
    此版本的USB显示驱动程序不支持热插拔。

### Jetson Nano, Beaglebone and Odyssey X86

对于Nvidia Jetson Nano和Odyssey X86J4105（Ubuntu），按照以下步骤安装 **linux 驱动程序** 在终端中运行以下命令：

**注:** 对于Odyssey X86J4105，我们只测试了ubuntu和debian操作系统。其他Linux操作系统可能不起作用。

```sh
sudo apt install --reinstall linux-headers-$(uname -r)
```

- 下载显示驱动程序：

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- 进行驱动程序的编译和构建：

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- 将 **配置文件移动到系统位置：**:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

- 重新启动服务：

```sh
sudo service lightdm restart
```

- 将Wio Terminal连接到设备的USB端口！

## 屏幕显示配置

如前所述，您可以将 **多个** Wio Terminal连接到Raspberry Pi上，因此可以通过编辑 `10-disp.conf` 文件来安排屏幕设置（屏幕位置）。我们提供了另外三种屏幕扩展设置，如下所示。

### 屏幕设置 1

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-1-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1  2  
#        : 3  4
```

这是位于  `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/` 的 `10-disp-1.conf` 文件，只需将此文件复制到 `/usr/share/X11/xorg.conf.d/` 目录下，并将其命名为 `10-disp.conf`:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp-1.conf /usr/share/X11/xorg.conf.d/10-disp.conf
```

### 屏幕设置 2

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-2-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1
#        : 2  3  4
```

这是位于  `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/` 下的 `10-disp-2.conf` 文件。

### 屏幕设置 3

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-3-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1  2  3  4
```

这是位于  `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/` 下的 `10-disp-3.conf` 文件。

### 屏幕设置 4

镜像模式：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-4.png"/></div>


```py
# Four-screen clone display
```

这是位于  `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/` 下的`10-disp-4.conf` 文件。

## PtQtGraph 示例

您可以使用  [**PyQtGraph**](http://www.pyqtgraph.org/) 图形库来轻松绘制 Wio Terminal 的 GUI！以下是安装 PyQtGraph 所需的依赖项：

- 首先安装 PyQtGraph 的依赖项：

```sh
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5 python3-pip python3-numpy -y
sudo pip3 install pyqtgraph
```

- 导出屏幕的宏定义：

```sh
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb1
```

**注:**  这里的 `fb1` 是第一个屏幕， `fb2` 是第二个屏幕， `fb3`  是第三个屏幕，以此类推。您可以使用   `echo $QT_QPA_PLATFORM` 命令来检查宏定义。

- 复制以下 PyQtGraph 示例的 Python 文件，并将其命名为  `test.py`:

```py
# -*- coding: utf-8 -*-
"""
Demonstrates common image analysis tools.
Many of the features demonstrated here are already provided by the ImageView
widget, but here we present a lower-level approach that provides finer control
over the user interface.
"""
import pyqtgraph as pg
from pyqtgraph.Qt import QtCore, QtGui
import numpy as np


# Interpret image data as row-major instead of col-major
pg.setConfigOptions(imageAxisOrder='row-major')

pg.mkQApp()
win = pg.GraphicsLayoutWidget()
win.setWindowTitle('pyqtgraph example: Image Analysis')

# A plot area (ViewBox + axes) for displaying the image
p1 = win.addPlot(title="")

# Item for displaying image data
img = pg.ImageItem()
p1.addItem(img)

# Custom ROI for selecting an image region
roi = pg.ROI([-8, 14], [6, 5])
roi.addScaleHandle([0.5, 1], [0.5, 0.5])
roi.addScaleHandle([0, 0.5], [0.5, 0.5])
p1.addItem(roi)
roi.setZValue(10)  # make sure ROI is drawn above image

# Isocurve drawing
iso = pg.IsocurveItem(level=0.8, pen='g')
iso.setParentItem(img)
iso.setZValue(5)

# Contrast/color control
hist = pg.HistogramLUTItem()
hist.setImageItem(img)
win.addItem(hist)

# Draggable line for setting isocurve level
isoLine = pg.InfiniteLine(angle=0, movable=True, pen='g')
hist.vb.addItem(isoLine)
hist.vb.setMouseEnabled(y=False) # makes user interaction a little easier
isoLine.setValue(0.8)
isoLine.setZValue(1000) # bring iso line above contrast controls

# Another plot area for displaying ROI data
win.nextRow()
p2 = win.addPlot(colspan=2)
p2.setMaximumHeight(250)
win.resize(800, 800)
win.show()


# Generate image data
data = np.random.normal(size=(200, 100))
data[20:80, 20:80] += 2.
data = pg.gaussianFilter(data, (3, 3))
data += np.random.normal(size=(200, 100)) * 0.1
img.setImage(data)
hist.setLevels(data.min(), data.max())

# build isocurves from smoothed data
iso.setData(pg.gaussianFilter(data, (2, 2)))

# set position and scale of image
img.scale(0.2, 0.2)
img.translate(-50, 0)

# zoom to fit imageo
p1.autoRange()  


# Callbacks for handling user interaction
def updatePlot():
    global img, roi, data, p2
    selected = roi.getArrayRegion(data, img)
    p2.plot(selected.mean(axis=0), clear=True)

roi.sigRegionChanged.connect(updatePlot)
updatePlot()

def updateIsocurve():
    global isoLine, iso
    iso.setLevel(isoLine.value())

isoLine.sigDragged.connect(updateIsocurve)

def imageHoverEvent(event):
    """Show the position, pixel, and value under the mouse cursor.
    """
    if event.isExit():
        p1.setTitle("")
        return
    pos = event.pos()
    i, j = pos.y(), pos.x()
    i = int(np.clip(i, 0, data.shape[0] - 1))
    j = int(np.clip(j, 0, data.shape[1] - 1))
    val = data[i, j]
    ppos = img.mapToParent(pos)
    x, y = ppos.x(), ppos.y()
    p1.setTitle("pos: (%0.1f, %0.1f)  pixel: (%d, %d)  value: %g" % (x, y, i, j, val))

# Monkey-patch the image to use our custom hover function. 
# This is generally discouraged (you should subclass ImageItem instead),
# but it works for a very simple use like this. 
img.hoverEvent = imageHoverEvent


## Start Qt event loop unless running in interactive mode or using pyside.
if __name__ == '__main__':
    import sys
    if (sys.flags.interactive != 1) or not hasattr(QtCore, 'PYQT_VERSION'):
        QtGui.QApplication.instance().exec_()
```

- 运行示例：

```sh
python3 test.py
```

- 您可能会发现，在 PyQtGraph 的脚本中，鼠标会出现崩溃情况。您可以通过使用 sudo raspi-config 命令禁用 Raspberry Pi 的桌面来解决此问题：选择 `sudo raspi-config` -> `Boot options` -> `Desktop/CLI` -> `Console Autologin`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/raspi.png"/></div>

现在，当您运行 PyQtGraph 脚本时，它应该正常工作！

<div align="center"><img width = "600" src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

您可以在不同的屏幕上运行不同的 PyQtGraph 脚本，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/4qt.jpg"/></div>

## Usermod SDK

此 USB 显示驱动程序也适用于您的 PC。请查看 **[本 wiki](https://wiki.seeedstudio.com/Wio-Terminal-HMI-Usermode-SDK/)** 获取更多信息。

## 深层开发
需要更大的屏幕？需要更高的分辨率？更高的刷新率？请联系@seeed.cc 获取更多信息。

## 参考资料

- [PyQtGraph 官方文档](https://pyqtgraph.readthedocs.io/en/latest/)
- [Screen xorg.conf 配置文档](https://www.x.org/releases/current/doc/man/man5/xorg.conf.5.xhtml)

## 常见问题解答

**Q.** 为什么当我将 Wio Terminal 连接到 Raspberry Pi 并打开 Raspberry Pi 时，Wio Terminal 的 LCD 显示器完全显示为白色。

**A.**  在仍然将 Wio Terminal 连接到 Raspberry Pi 的情况下，进入 `seeed-linux-usbdisp/drivers/linux-driver` 目录，并运行命令： `make & sudo make install`。 之后运行: `sudo reboot`。


## 技术支持 & 产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
