---
description: reTerminal-常见问题解答
title: 如何从USB闪存驱动器启动操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Boot_OS_from_USB_flash_drive
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q7: 如何从USB闪存驱动器启动操作系统 -->

您可以按照以下步骤从USB闪存驱动器启动操作系统。在这里，我们将启动顺序更改为 **USB启动 > eMMC启动**，这意味着如果USB启动失败，它将从eMMC启动。

:::caution
此方法需要使用 **Ubuntu** 或 **MacOS** 作为主机电脑。
:::

- **步骤 1.** 移除4个橡胶盖，并拧下下面的4颗螺丝，打开reTerminal的后壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **步骤 2.** 拆下2颗螺丝以卸下散热片，同时拆下其余4颗螺丝以分解整个外壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 3.** 根据下图翻转 **启动模式开关**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **步骤 4.** 将reTerminal连接到主机电脑后，在主机电脑中打开一个 **终端** 窗口，并输入以下命令以更新 **软件包列表**

```sh
sudo apt update
```

- **步骤 5.** 使用以下命令安装 **Git**

```sh
sudo apt install git
```

- **步骤 6.** 如果日期未正确设置，Git可能会产生错误。输入以下命令以纠正日期

```sh
sudo date MMDDhhmm
```

**注意：** 其中 **MM** 是月份，**DD** 是日期，**hh** 和 **mm** 分别是小时和分钟。

- **步骤 7.** 克隆并进入 **usbboot** 工具仓库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 8.** 输入以下命令安装 **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **步骤 9.** 构建并安装usbboot工具

```sh
make
```

- **步骤 10.** 打开引导加载程序配置文件

```sh
sudo nano recovery/boot.conf
```

- **步骤 11.** 将 **BOOT_ORDER** 字段更改为以下内容

```sh
BOOT_ORDER=0xf15
```

请注意，reTerminal的默认配置与克隆的recovery/boot.conf不同。
reTerminal的默认配置如下。
请根据需要重写recovery/boot.conf。

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=0
POWER_OFF_ON_HALT=1

# 尝试 SD -> USB PCIe MSD -> USB 2.0 BCM XHCI -> 网络 -> 循环
BOOT_ORDER=0xf2541

# 设置为0以防止从USB/网络启动更新引导加载程序
# 对于远程设备，应使用EEPROM硬件写保护。
ENABLE_SELF_UPDATE=1
```

**注意：** 如果USB启动失败，它将切换到eMMC启动。

- **步骤 12.** 运行以下命令以更新EEPROM镜像

```sh
cd recovery
./update-pieeprom.sh
```

现在pieeprom.bin文件已准备好刷写到Compute Module 4。

- **步骤 13.** 返回到 **usbboot** 目录

```sh
cd ..
```

- **步骤 14.** 运行usbboot工具以刷写引导加载程序EEPROM

```sh
sudo ./rpiboot -d recovery
```

- **步骤 15.** 通过USB Type-C电缆将reTerminal连接到电脑

现在需要几秒钟将必要的文件传输到reTerminal。

- **步骤 16.** 关闭reTerminal，将启动模式开关翻回原始位置，并重新组装reTerminal外壳

- **步骤 17.** 连接一个包含合适操作系统的可启动USB闪存驱动器，将其连接到reTerminal的一个USB端口，然后打开reTerminal

现在您将看到reTerminal从连接的USB驱动器启动。