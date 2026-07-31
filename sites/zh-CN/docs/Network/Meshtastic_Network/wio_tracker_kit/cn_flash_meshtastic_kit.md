---
description: Wio Tracker Meshtastic® 套件固件烧录
title: 烧录固件
keywords:
  - Meshtastic
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /flash_meshtastic_kit
last_update:
  date: 12/3/2025
  author: Michelle Huang
createdAt: '2024-06-21'
updatedAt: '2025-12-03'
url: https://wiki.seeedstudio.com/cn/flash_meshtastic_kit/
---
:::danger note
当设备处于以下状态时，请不要手动重启或关闭电源。否则设备可能会损坏。
1. 尚未完成消息传输过程
2. 正在配置中
:::
本教程将指导用户将 [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) 烧录为 Meshtastic 版本，适用于希望使用 Meshtastic 网络的用户。

:::tip
如果你想将开发板重新烧录回 LoRaWAN 版本，请查看此[教程](https://wiki.seeedstudio.com/cn/flash_to_wio_tracker/)。请 `don't use NRF-OTA` 来更新固件，否则可能会导致设备完全损坏。
:::

### 准备工作

- Wio Tracker 1110 开发板 x 1
- 电脑 x 1
- USB Type-C 线 x 1

### 接线

通过 USB 线将开发板连接到电脑。

### 烧录 Bootloader

<Tabs>
<TabItem value="uf2" label="UF2">

- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2)

双击 `Reset` 按钮，你的电脑上应出现一个名为 `WM1110_BOOT` 的磁盘。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

将 `update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2` 文件拖入该磁盘。烧录会自动进行，完成后该磁盘会自动弹出。

</TabItem>
<TabItem value="serial" label="串口">

- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip)

**步骤 1：安装 Adafruit-nrfutil**

**前置条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pypi" label="通过 PyPI 安装">

这是推荐的方法，用于安装最新版本：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="从源码安装">

如果你在通过 PyPi 安装时遇到问题，或者想修改该工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但是如果你在 Windows 上，可能需要将其改为 `python`，因为 Windows 上安装的 python 3.x 仍然使用 python.exe 这个名称。

如果要在用户空间（你的 home 目录）中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，说明你的 `pip3` 版本较旧或被设置为尝试安装到系统目录。这种情况下请使用 `--user` 参数：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

如果你想安装到系统目录（通常不推荐）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

如果要生成该工具的自包含可执行二进制文件（Windows 和 MacOS），请运行以下命令：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

你可以在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe（如果你在 Windows 上，则带有 `.exe`）。
为了方便使用，可以将其复制或移动到其他位置，例如在你的 %PATH% 中的某个目录。

</TabItem>
</Tabs>

**步骤 2：烧录 Bootloader**

双击开发板上的 `Reset` 按钮，并运行以下命令：

- **Windows 平台**：

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **其他平台**：

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200
```

将串口号替换为你设备对应的端口。示例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>
</TabItem>
</Tabs>

### 下载应用程序

你可以使用 [Meshtastic Web Flasher](https://flasher.meshtastic.org/) 来下载并拷贝固件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flasher.png" alt="pir" width={800} height="auto" /></p>

将设备选择为 `Seeed Wio WM1110 Tracker`，选择最新固件，并下载 `UF2` 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/download-uf2.png" alt="pir" width={800} height="auto" /></p>

<Tabs>
<TabItem value="uf2" label="UF2">

双击 `Reset` 按钮，你的电脑上应出现一个名为 `WM1110_BOOT` 的磁盘。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

将 `.uf2` 文件拖入该磁盘。烧录会自动进行，完成后该磁盘会自动弹出。

:::tip
只需忽略此错误提示，设备实际上已经成功升级。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/error-prompt.png" alt="pir" width={600} height="auto" /></p>
:::

</TabItem>

<TabItem value="serial" label="串口">

双击开发板上的 `Reset` 按钮，并运行以下命令：

- **Windows 平台**：

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **其他平台**：

```
adafruit-nrfutil --verbose dfu serial --package firmware-wio-tracker-wm1110-2.3.14.681ae9d8.zip --port /dev/tty.SLAB_USBtoUART -b 115200
```

烧录成功：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-flash-done.png" alt="pir" width={800} height="auto" /></p>

</TabItem>
</Tabs>

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>