---
description: Build a HMI Display for Raspberry Pi using Wio Terminal
title: Build a HMI Display for Raspberry Pi
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-HMI
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Build a HMI Display for Raspberry Pi using Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif"/></div>

In this wiki, we will introduce how to use [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) as a **HMI (Human Machine Interface) USB display** for [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html), [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html), [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) and even [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)! This turns Wio Terminal into a HMI USB display which makes it much more powerful and can be used in more industrial scenarios!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

It can support **multiple Wio Terminals connected onto the host device**. By theory, you can connect as many as you want as long as you have enough USB ports! On Raspberry Pi, it can support up to 4 Wio Terminals (RPI has 4 USB ports) connected to it acting as HMI displays in **Extend mode** as well as **Mirror Mode**, check the followings for more info!

## Hardware Required

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html) / [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) / [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) / [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)

## Wio Terminal Firmware

First, you will need to upload an Arduino program to your Wio Terminal via your PC.

- Download the [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP) library here.

There are two **examples**, `NullFunctional` and `USBDisplayAndMouseControl`:

1. If you want **higher screen refresh rate on Wio Terminal**, upload **`NullFunctional`** to Wio Terminal.
2. If you want **Wio Terminal to also act as a USB Mouse**, upload **`USBDisplayAndMouseControl`** to Wio Terminal.

### `uf2` Method

For convenience, we also provide `uf2` methods of uploading Wio Terminal's firmware. Simply download the `uf2` files from below.

- Download the [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/NullFunctional.uf2) `uf2` files.

- Download the [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/USBDisplayAndMouseControl.uf2) `uf2` files.

Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see [here](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

An external drive named `Arduino` should appear in your PC. Drag the the downloaded uf2 files to the `Arduino` drive.

## Host Device Firmware

Now let's set up the display driver on the host device and this can be Raspberry Pi, Jetson Nano or even Odyssey X86J4105:

### Raspberry Pi

For Raspberry Pi, you first need to download package information from all configured sources:

```sh
sudo apt-get update
```

- Install the necessary packages such as **kernel headers, kernels, build-essential, dkms** by running the following command in terminal:

```sh
sudo apt-get install raspberrypi-kernel-headers raspberrypi-kernel build-essential dkms
```

- Reboot the Raspberry Pi:

```sh
sudo reboot
```

- Download the display driver on Raspberry Pi:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- Make and build the driver:

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- Move the **config files to the systems location**:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

!!!Note
        There are different screen configurations that you can choose from, the default is one Wio Terminal as one screen.

- Restart the service:

```sh
sudo service lightdm restart
```

- Run the following command in terminal for display configuration:

```sh
sudo raspi-config
```

- Once the Raspberry Pi Software Configuration Tool opens, navigate to the following location:

```sh
Display Options > Resolution
```

- Select a different resolution except "default"

```sh
Ex: DMT Mode 82 1920x1080 60Hz 16:9  
```

- Turn off the Raspberry Pi:

```sh
sudo poweroff
```

- Connect the Wio Terminal to Raspberry Pi's USB port

- Turn on the Raspberry Pi

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-new.png"/></div>

Now you should see you Wio Terminal display the Raspberry Pi's desktop! If you loaded with the `USBDisplayAndMouseControl` firmware in Wio Terminal, you can even use the buttons and 5-way switches to control the mouse of Raspberry Pi!


!!!Note
    This version of the USB display driver do not support hot swapping.

### Jetson Nano, Beaglebone and Odyssey X86

For Nvidia Jetson Nano and Odyssey X86J4105 (Ubuntu), install the **linux driver** as followed, run the following in the terminal:

**Note:** For Odyssey X86J4105, we have only tested for ubuntu and debian OS. Other Linux OS may not work.

```sh
sudo apt install --reinstall linux-headers-$(uname -r)
```

- Download the display driver:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- Make and build the driver:

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- Move the **config files to the systems location**:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

- Restart the service:

```sh
sudo service lightdm restart
```

- Connect Wio Terminal to device's USB port!

## Screen Display Configurations

As mentioned, you can have **multiple** Wio Terminals connected to a Raspberry Pi and therefore you can arrange the screen set-up (locations of screen) by editing the `10-disp.conf` file. We have provided 3 other screen expansion set-up as followed.

### Screen set-up 1

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-1-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1  2  
#        : 3  4
```

This is the `10-disp-1.conf` under `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`, simply copy this file to `/usr/share/X11/xorg.conf.d/` and name it `10-disp.conf`:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp-1.conf /usr/share/X11/xorg.conf.d/10-disp.conf
```

### Screen set-up 2

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-2-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1
#        : 2  3  4
```

This is the `10-disp-2.conf` under `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`.

### Screen set-up 3

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-3-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1  2  3  4
```

This is the `10-disp-3.conf` under `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`.

### Screen set-up 4

Mirror Mode:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-4.png"/></div>


```py
# Four-screen clone display
```

This is the `10-disp-4.conf` under `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`.

## PtQtGraph Example

For more, you can use the [**PyQtGraph**](http://www.pyqtgraph.org/) graph to simply draw you GUI with Wio Terminal with ease!

- Let's install dependencies for PyQtGraph first:

```sh
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5 python3-pip python3-numpy -y
sudo pip3 install pyqtgraph
```

- Export macros for the screen:

```sh
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb1
```

**Note:** Where `fb1` is the first screen, `fb2` is second, `fb3` `fb3` and so on. You may use `echo $QT_QPA_PLATFORM` to check the macros.

- Copy the following PyQtGraph example python files and name it `test.py`:

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

- Run the example:

```sh
python3 test.py
```

- You may experienced that Mouse is crashing with PyQtGraph's script, you can simply disable raspberry pi's desktop using `sudo raspi-config` -> `Boot options` -> `Desktop/CLI` -> `Console Autologin`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/raspi.png"/></div>

Now when you run the PyQtGraph script, it work just fine!

<div align="center"><img width = "600" src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

You may run different PyQtGraph scripts on different screens as followed:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/4qt.jpg"/></div>

## Usermod SDK

This USB display driver also works on your PC. Please check **[this wiki](https://wiki.seeedstudio.com/Wio-Terminal-HMI-Usermode-SDK/)** for more information.

## Further Development

Need a bigger screen? Need a higher resolution? Higher refresh rate? Please contact produce@seeed.cc for more information.

## Resource

- [PyQtGraph official documents](https://pyqtgraph.readthedocs.io/en/latest/)
- [Screen xorg.conf configuration document](https://www.x.org/releases/current/doc/man/man5/xorg.conf.5.xhtml)

## FAQ

**Q.** When I connect the Wio Terminal to the Raspberry Pi and turn on the Raspberry Pi, the Wio Terminal LCD is completely white.

**A.** While the Wio Terminal is still connected to the Raspberry Pi, navigate to: `seeed-linux-usbdisp/drivers/linux-driver` and run the command: `make & sudo make install`. After that run: `sudo reboot`


## Tech Support & Product Discussion


Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
