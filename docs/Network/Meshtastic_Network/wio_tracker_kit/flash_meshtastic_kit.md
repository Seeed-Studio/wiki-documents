---
description: Wio Tracker Meshtastic® Kit Firmware Flashing
title:  Flash Firmware
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /flash_meshtastic_kit
last_update:
  date: 12/3/2025
  author: Michelle Huang
---
:::danger note
When the device is in the states below, please don't manually reboot or turn off it. Or else the device can be dead.
1. Not finishing the message transmission process
2. Being configured
:::
This tutorial will guide users to flash the [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) to the Meshtastic version, for those who want to use the Meshtastic network.

:::tip
If you want to flash the board back to the LoRaWAN version, please check this [tutorial](https://wiki.seeedstudio.com/flash_to_wio_tracker/). Please `don't use NRF-OTA` to update the firmware, it may cause the device to be completely dead.
:::

### Preparation

- Wio Tracker 1110 Board x 1
- Computer x 1
- USB Type-C Cable x 1

### Wiring

Connect the Dev Board to your PC via the USB cable.

### Flash the bootloader

<Tabs>
<TabItem value="uf2" label="UF2">

- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2)

Double click the `Reset` button, there should be a `WM1110_BOOT` drive on your PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Drag the `update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2` file to the driver. The download will run automatically, then the driver will log out.

</TabItem>
<TabItem value="serial" label="Serial">

- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip)

**Step1: Adafruit-nrfutil Installation**

**Prerequisites**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pypi" label="Installing from PyPI">

This is recommended method, to install latest version:

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="Installing from Source">

Use this method if you have issue installing with PyPi or want to modify the tool. First clone this repo and go into its folder.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Note: following commands use `python3`, however if you are on Windows, you may need to change it to `python` since windows installation of python 3.x still uses the name python.exe

To install in user space in your home directory:

```
pip3 install -r requirements.txt
python3 setup.py install
```

If you get permission errors when running `pip3 install`, your `pip3` is older or is set to try to install in the system directories. In that case use the `--user` flag:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

If you want to install in system directories (generally not recommended):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

To generate a self-contained executable binary of the utility (Windows and MacOS), run these commands:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

You will find the .exe in `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` ( with `.exe` if you are on windows).
Copy or move it elsewhere for your convenience, such as directory in your %PATH%.

</TabItem>
</Tabs>

**Step2: Flash the bootloader**

Double click the `Reset` button on the board and run the following command:

- **For Windows**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **For others**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200
```

Replace the serial port with your device port. Example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>
</TabItem>
</Tabs>

### Download the application

You may use the [Meshtastic Web Flasher](https://flasher.meshtastic.org/) to download and copy firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flasher.png" alt="pir" width={800} height="auto" /></p>

Select the device to `Seeed Wio WM1110 Tracker` and the latest firmware, and download the `UF2` file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/download-uf2.png" alt="pir" width={800} height="auto" /></p>

<Tabs>
<TabItem value="uf2" label="UF2">

Double click the `Reset` button, there should be a `WM1110_BOOT` driver on your PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Drag the `.uf2` file to the driver. The download will run automatically, then the driver will log out.

:::tip
Just ignore this error prompt, the device has actually been upgraded successfully.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/error-prompt.png" alt="pir" width={600} height="auto" /></p>
:::

</TabItem>

<TabItem value="serial" label="Serial">

Double click the `Reset` button on the board and run the following command:

- **For Windows**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **For others**:

```
adafruit-nrfutil --verbose dfu serial --package firmware-wio-tracker-wm1110-2.3.14.681ae9d8.zip --port /dev/tty.SLAB_USBtoUART -b 115200
```

Flash successfully:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-flash-done.png" alt="pir" width={800} height="auto" /></p>
  
</TabItem>
</Tabs>
