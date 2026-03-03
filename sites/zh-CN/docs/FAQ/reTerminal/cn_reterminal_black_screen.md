---
description: reTerminal-常见问题解答
title: 如何解决 reTerminal 黑屏问题
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reterminal_black_screen
last_update:
  date: 11/15/2023
  author: Kasun Thushara
---

reTerminal 出厂时已预装必要的驱动程序，因此您无需安装任何额外的驱动程序。<br/>
但是，如果您的屏幕无法正常显示并保持黑屏，请按照以下故障排除步骤逐步识别并解决问题。

## 第一步：检查 LED 的闪烁状态

### 如果 PWR 灯未亮

  您需要检查电源状态，因为可能存在电源问题。此外，为排除任何硬件问题，请确保 reTerminal 内的 CM4 模块已正确连接。

### 如果 PWR 灯亮但 SYS 灯未亮

  您需要重新刷写原厂系统。您可以直接跳转到此部分。

### 如果两个灯都亮

  此情况是由于控制 LCD 屏幕的驱动程序问题引起的。此时，请按照[**第二步**](/cn/reterminal_black_screen/#second-confirm-whether-you-have-installed-a-new-system)提供的故障排除步骤逐步执行。

## 第二步：确认是否安装了新系统

:::caution

- 如果您自行刷写了新的操作系统并且 LCD 屏幕无法正常显示，您需要单独[**安装必要的 reTerminal 驱动程序**](/cn/reterminal_black_screen/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)。

- 如果您没有刷写自己的操作系统但屏幕仍然黑屏，请直接跳转到[**刷写原厂随附的 Raspberry Pi OS**](/cn/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)。

- 如果您尝试安装 **Raspbian OS**，我们已进行测试，发现 **Bullseye** 的 *32 位和 64 位*版本在 reTerminal 上运行良好，没有遇到任何**黑屏问题**。此外，我们还测试了新的 **Bookworm** *64 位*版本，它在 reTerminal 上运行顺畅。

:::

### 在刷写新的 Raspberry Pi OS/ Ubuntu OS 或其他操作系统后安装 reTerminal 驱动程序

需要驱动程序支持的硬件包括 **5 英寸 LCD、触摸屏、加速度计、光传感器、用户 LED、用户按钮、RTC、蜂鸣器、加密协处理器**。
因此，安装此驱动程序可以确保在使用新的 Raspberry Pi OS/ Ubuntu OS 或其他操作系统时 LCD 屏幕正常工作。

- **1.** 克隆以下仓库

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **2.** 进入仓库

```sh
cd seeed-linux-dtoverlays
```

:::note
对于 **32 位操作系统**，在执行 `sudo ./scripts/reTerminal.sh` 之前需要添加以下步骤。完成安装后，请记得**重启** reTerminal 以使更改生效。

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```

:::

- **3.** 输入以下命令安装驱动程序

```sh
sudo ./scripts/reTerminal.sh
```

如果成功安装驱动程序，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>

- **4.** 重启 reTerminal

```sh
sudo reboot
```

最后，您可以在新系统上正常使用 LCD 屏幕。

### 刷写原厂随附的 Raspberry Pi OS

:::caution
如果您已刷写到其他操作系统并希望切换回随附的默认 Raspberry Pi OS，可以按照以下步骤操作。
:::

我们可以将 **Raspberry Pi OS / 64 位 Ubuntu OS 或其他操作系统**刷写到 reTerminal 上 CM4 的 **eMMC 存储**中。如果您之前从未在 reTerminal 上刷写过系统，我们强烈建议您遵循[刷写 Raspberry Pi OS/ 64 位 Ubuntu OS 或其他操作系统到 eMMC](/cn/flash_different_os_to_emmc)的步骤，以准备系统刷写，包括**安装必要的驱动程序**。

安装完[必要的驱动程序](/cn/flash_different_os_to_emmc)后，您只需将 reTerminal 的 USB Type-C 端口连接到您的电脑。当您打开文件资源管理器并看到 Compute Module 4 的 eMMC 显示为 USB 大容量存储设备时，可以执行以下步骤：

- **1.** 通过以下链接下载 Raspberry Pi OS

  - [32 位 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64 位 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**注意：** reTerminal 原厂随附的是 32 位操作系统。不过，您也可以下载 64 位版本。

- **2.** 解压 **.zip 文件**

- **3.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** 在键盘上按 **CTRL + SHIFT + X** 打开 **高级选项**窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

在这里，您可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置**等。

- **5.** 点击 **CHOOSE OS** 并选择 **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** 导航到之前解压的镜像文件，选择它并点击 **open**

- **7.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **8.** 最后，点击 **WRITE**

最后，您可以在原厂系统上正常使用 LCD 屏幕。

## 如果步骤1/2仍无法解决屏幕问题 - 更新reTerminal LCD的STM32固件

:::note
如果您的reTerminal生产日期在2021年9月26日之后，STM32预装了V1.8固件。
:::

确保将最新固件刷入reTerminal上的STM32G030芯片非常重要。STM32G030负责驱动reTerminal上的LCD。将STM32芯片更新到最新版本将有助于解决您在使用reTerminal LCD时遇到的大多数问题。

刷写STM32芯片有两种方法：

- **方法1：** 使用reTerminal上的CM4直接连接到STM32芯片并刷写固件
- **方法2：** 使用跳线将STM32芯片引脚物理连接到40针reTerminal GPIO，然后使用OpenOCD刷写固件

如果您的reTerminal上安装了**新版本（v1.7或更高版本）**的STM32固件，请使用**方法1**；如果您的板载STM32固件版本**低于v1.7**，则需要使用**方法2**。

### 决定使用哪种刷写方法

现在让我们通过以下步骤来识别板载固件版本，以便选择合适的刷写方法。

- **1.** 进入reTerminal的终端窗口并输入以下命令以打开配置文件：

```sh
sudo nano /boot/config.txt
```

- **2.** 在文件的最底部，注释掉包含 **dtoverlay=reTerminal** 的行：

```sh
#dtoverlay=reTerminal
```

**注意：** 这将卸载所有reTerminal驱动程序。因此，当您下次打开reTerminal时，所有驱动程序都不会加载。

- **3.** 重启reTerminal：

```sh
sudo reboot
```

- **4.** 通过 **i2c-tools** 使STM32进入**引导模式**：

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **5.** 列出连接的I2C设备：

```sh
i2cdetect -y 1
```

如果您可以看到I2C地址 **0x56**（如下表所示），则您的板载STM32固件为**新版本（v1.7或更高版本）**。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

然而，如果您看到I2C地址 **0x45**（如下表所示），则您的板载STM32固件为**旧版本（低于v1.7）**。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **6.** 打开之前使用的配置文件：

```sh
sudo nano /boot/config.txt
```

- **7.** 在文件的最底部，取消注释包含 **dtoverlay=reTerminal** 的行以重新加载驱动程序：

```sh
dtoverlay=reTerminal
```

- **8.** 关闭reTerminal：

```sh
sudo poweroff
```

**注意：** 如果您已经运行**STM32 v1.8固件**，一旦通过 **i2c-tools** 进入**引导模式**，退出引导模式的唯一方法是刷写STM32固件。

### 使用CM4连接到STM32并刷写固件

:::caution
如果您的板载STM32固件为**新版本（v1.7或更高版本）**，请遵循此方法。
:::

- **1.** 进入reTerminal的终端窗口并输入以下命令以打开配置文件：

```sh
sudo nano /boot/config.txt
```

- **2.** 在文件的最底部，注释掉包含 **dtoverlay=reTerminal** 的行：

```sh
#dtoverlay=reTerminal
```

- **3.** 重启reTerminal：

```sh
sudo reboot
```

- **4.** 在reTerminal中创建一个新目录并进入该目录：

```sh
mkdir STM32
cd STM32
```

- **5.** 下载 **stm32flash** 文件和 **STM32G030F6_R2.bin**：

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **6.** 解压 **stm32flash-0.7.tar.gz**：

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **7.** 进入名为 **stm32flash-0.7** 的文件夹并使刷写工具可执行：

```sh
cd stm32flash-0.7/
make
```

- **8.** 通过 **i2c-tools** 使STM32进入**引导模式**：

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **9.** 使用 **stm32flash 工具**擦除STM32芯片中的闪存：

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **10.** 使用 **stm32flash 工具**将固件刷写到STM32：

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意：** **STM32G030F6_R2.bin** 是新固件的文件名。

- **11.** 修改OPTR寄存器如下：

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **12.** 打开之前使用的配置文件：

```sh
sudo nano /boot/config.txt
```

- **13.** 在文件的最底部，取消注释包含 **dtoverlay=reTerminal** 的行：

```sh
dtoverlay=reTerminal
```

- **14.** 重启reTerminal：

```sh
sudo reboot
```

现在您已经成功将固件烧录到 STM32！

### 使用跳线和 OpenOCD 连接到 STM32

:::caution
如果您的板载 STM32 固件是**旧版本（低于 v1.7）**，请按照此方法操作。
:::

- **1.** 打开 reTerminal 的终端窗口，输入以下命令以更新软件包列表

```sh
sudo apt-get update
```

- **2.** 安装以下软件包

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **3.** 克隆以下仓库并进入该目录

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **4.** 访问[此链接](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases)，从**最新发布版本**下载 **STM32G030F6_R2.bin** 文件。

**注意：** 您可以点击链接直接开始下载。

- **5.** 在 PC 上打开命令提示符，导航到之前下载文件的位置

```sh
cd C:\Users\user\Downloads
```

- **6.** 将文件传输到我们之前在 reTerminal 上创建的 **openocd** 目录

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**注意：** **pi** 是用户名，**192.168.x.xx** 是 reTerminal 的 IP 地址。您也可以用 reTerminal 的主机名替代。

- **7.** 返回到 reTerminal 的终端窗口，在 **openocd** 目录中输入以下命令

```sh
./bootstrap
```

- **8.** 输入以下命令

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **9.** 编译

```sh
make
```

- **10.** 安装

```sh
sudo make install
```

- **11.** 按照下图连接 STM32 的引脚到 40 针 GPIO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**注意：** STM32 的引脚位于 reTerminal 的 PCBA 背面。

- **12.** 保持连接状态，输入以下命令将固件烧录到 STM32

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**注意：** 通常烧录过程大约需要 3 秒。因此，您需要**保持**上述连接约 **3 秒**，直到烧录过程完成。

如果您看到以下日志，说明 STM32 固件已成功烧录！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **13.** 断开连接，并**直接物理断开电源线**，不要使用 **poweroff** 命令。

**注意：** 如果您不物理拔掉电源线，STM32 固件将无法成功加载。

现在您已经成功将固件烧录到 STM32！

### 检查已安装的 STM32G030 固件版本

现在让我们检查已安装的 STM32 固件版本。

- **1.** 打开 reTerminal 的终端窗口，输入以下命令以打开配置文件

```sh
sudo nano /boot/config.txt
```

- **2.** 在文件的最底部，注释掉 **dtoverlay=reTerminal** 这一行

```sh
#dtoverlay=reTerminal
```

- **3.** 重启 reTerminal

- **4.** 在 reTerminal 的终端窗口中输入以下命令以检查 STM32 固件版本

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

如果输出类似于 **0x01 0x07**，说明您正在使用固件版本 1.7。

- **5.** 打开之前使用的配置文件

```sh
sudo nano /boot/config.txt
```

- **6.** 在文件的最底部，取消注释 **dtoverlay=reTerminal** 这一行

```sh
dtoverlay=reTerminal
```

- **7.** 重启 reTerminal

```sh
sudo reboot
```

## 刷写最新版本的 Raspberry Pi OS - Bookworm

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/bookworm.jpeg" alt="pir" width={600} height="auto" /></p>

我们已经准备了最新的 Bookworm OS 镜像，这是 Raspberry Pi 官方发布的最新版本。如果您遇到任何问题，尤其是上述讨论的问题，我们强烈建议按照以下步骤操作，以获得更流畅的体验。

:::note
在开始之前，请确保您**拨下启动模式开关**。接下来，启动 **rpiboot 安装程序**。有关如何执行这些步骤的详细说明，请参阅[**这里**](https://wiki.seeedstudio.com/cn/flash_different_os_to_emmc/)。

:::

- **1.** 通过以下链接下载 Raspberry Pi OS

  <!-- - [64-bit Bookworm-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz) -->

| 版本                        | 描述             | 标签                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64位 Debian12(bookworm) Linux 版本 6.6.20 | 最新 |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32位 Debian12(bookworm) Linux 版本 6.6.20           | 最新 |
| [2023_11_15_bookworm_64.img.gz](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz)               | 64位 Debian12(bookworm) Linux 版本 6.1  | 发布版 |



- **2.** 解压 **.zip 文件**

- **3.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **高级选项**窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

在这里，您可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置**等。

- **5.** 点击 **CHOOSE OS** 并选择 **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** 导航到之前解压的镜像文件，选择它并点击 **open**

- **7.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **8.** 最后，点击 **WRITE**

最后，**将启动模式开关**拨回原始位置并组装 reTerminal 外壳。然后**打开电源**，您可以在原始系统上正常使用 LCD 屏幕。