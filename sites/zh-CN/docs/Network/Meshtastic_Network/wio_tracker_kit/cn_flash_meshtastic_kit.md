---
description: Wio Tracker Meshtastic® Kit 固件刷写
title: 刷写固件
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/flash_meshtastic_kit
last_update:
  date: 12/3/2025
  author: Michelle Huang
---
:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。
1. 未完成消息传输过程
2. 正在配置中
:::
本教程将指导用户将 [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) 刷写为 Meshtastic 版本，适用于想要使用 Meshtastic 网络的用户。

:::tip
如果您想将开发板刷回 LoRaWAN 版本，请查看此[教程](https://wiki.seeedstudio.com/cn/flash_to_wio_tracker/)。请`不要使用 NRF-OTA` 来更新固件，这可能会导致设备完全损坏。
:::

### 准备工作

- Wio Tracker 1110 开发板 x 1
- 计算机 x 1
- USB Type-C 数据线 x 1

### 接线

通过 USB 数据线将开发板连接到您的 PC。

### 刷写引导程序

<Tabs>
<TabItem value="uf2" label="UF2">

- [引导程序下载](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2)

双击 `Reset` 按钮，您的 PC 上应该会出现一个 `WM1110_BOOT` 驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

将 `update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2` 文件拖拽到驱动器中。下载将自动运行，然后驱动器将注销。

</TabItem>
<TabItem value="serial" label="串口">

- [引导程序下载](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip)

**步骤 1：Adafruit-nrfutil 安装**

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pypi" label="从 PyPI 安装">

这是推荐的方法，安装最新版本：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="从源码安装">

如果您在使用 PyPi 安装时遇到问题或想要修改工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但如果您使用的是 Windows，您可能需要将其更改为 `python`，因为 Windows 的 python 3.x 安装仍然使用 python.exe 这个名称。

在您的主目录中安装到用户空间：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，您的 `pip3` 版本较旧或设置为尝试安装到系统目录。在这种情况下，请使用 `--user` 标志：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

如果您想安装到系统目录（通常不推荐）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

要生成工具的独立可执行二进制文件（Windows 和 MacOS），请运行以下命令：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

您将在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe 文件（如果您使用的是 Windows，则带有 `.exe` 扩展名）。
为了方便起见，将其复制或移动到其他地方，例如您的 %PATH% 中的目录。

</TabItem>
</Tabs>

**步骤 2：刷写引导程序**

双击开发板上的 `Reset` 按钮并运行以下命令：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200
```

将串口替换为您的设备端口。示例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>
</TabItem>
</Tabs>

### 下载应用程序

您可以使用 [Meshtastic Web Flasher](https://flasher.meshtastic.org/) 来下载和复制固件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flasher.png" alt="pir" width={800} height="auto" /></p>

选择设备为 `Seeed Wio WM1110 Tracker` 和最新固件，然后下载 `UF2` 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/download-uf2.png" alt="pir" width={800} height="auto" /></p>

<Tabs>
<TabItem value="uf2" label="UF2">

双击 `Reset` 按钮，您的 PC 上应该会出现一个 `WM1110_BOOT` 驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

将 `.uf2` 文件拖拽到驱动器中。下载将自动运行，然后驱动器将注销。

:::tip
请忽略此错误提示，设备实际上已经成功升级。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/error-prompt.png" alt="pir" width={600} height="auto" /></p>
:::

</TabItem>

<TabItem value="serial" label="串口">

双击开发板上的 `Reset` 按钮并运行以下命令：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package firmware-wio-tracker-wm1110-2.3.14.681ae9d8.zip --port /dev/tty.SLAB_USBtoUART -b 115200
```

刷写成功：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-flash-done.png" alt="pir" width={800} height="auto" /></p>

</TabItem>
</Tabs>
