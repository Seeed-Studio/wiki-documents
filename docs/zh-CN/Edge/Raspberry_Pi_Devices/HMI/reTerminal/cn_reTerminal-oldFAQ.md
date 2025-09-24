---
description: reTerminal-FAQ
title: reTerminal 使用常见问题
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-FAQ
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# reTerminal 使用常见问题

本文档包含了与 reTerminal 相关的所有常见问题。如果您在使用 reTerminal 时遇到任何问题，这将非常有帮助。

## Q1: 如何更新 reTerminal LCD 的 STM32 固件

**注意：** 如果您的 reTerminal 是在 2021 年 9 月 26 日之后制造的，STM32 预装了 V1.8 固件。

确保您在 reTerminal 上的 STM32G030 芯片刷入了最新固件是非常重要的。STM32G030 负责驱动 reTerminal 上的 LCD。将 STM32 芯片更新到最新版本将有助于解决您在使用 reTerminal LCD 时遇到的大多数问题。

有 2 种刷写 STM32 芯片的方法。

- **方法 1：** 使用 reTerminal 上的 CM4 直接连接到 STM32 芯片并刷写固件
- **方法 2：** 使用跳线将 STM32 芯片引脚物理连接到 reTerminal 40 引脚 GPIO，然后使用 OpenOCD 刷写固件

如果您的 reTerminal 上有 **新版本（v1.7 或更高版本）** 的 STM32 固件，**方法 1** 有效；另一方面，如果您的板子上有 **旧版本（低于 v1.7）** 的 STM32 固件，则只需要使用 **方法 2**。

### 决定使用哪种刷写方法

现在让我们通过以下步骤来识别我们拥有的是哪个版本的板子，以便我们可以选择合适的刷写方法。

- **步骤 1.** 进入 reTerminal 的终端窗口，输入以下命令打开配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 2.** 在此文件的最底部，注释掉写有 **dtoverlay=reTerminal** 的那一行

```sh
#dtoverlay=reTerminal
```

**注意：** 这将卸载所有 reTerminal 驱动程序。因此，当您下次打开 reTerminal 时，将不会加载任何驱动程序。

- **步骤 3.** 重启 reTerminal

```sh
sudo reboot
```

- **步骤 4.** 通过**i2c-tools**使STM32进入**引导模式**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **步骤 5.** 列出已连接的I2C设备

```sh
i2cdetect -y 1
```

如果您能看到 I2C 地址 **0x56**，如下表所示，您的板子上有 **新版本（v1.7 或更高版本）** 的 STM32 固件。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

但是，如果您能看到 I2C 地址 **0x45**，如下表所示，您的板子上有 **旧版本（低于 v1.7）** 的 STM32 固件

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 打开我们之前使用的配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 7.** 在此文件的最底部，取消注释显示 **dtoverlay=reTerminal** 的行以重新加载驱动程序

```sh
dtoverlay=reTerminal
```

- **步骤 8.** 关闭 reTerminal 电源

```sh
sudo poweroff
```

**注意：** 如果您已经运行 **STM32 v1.8 固件**，一旦通过 **i2c-tools** 进入 **引导模式**，退出引导模式的唯一方法是刷写 STM32 固件。

### 使用 CM4 连接到 STM32 并刷写固件

如果您的板子上有 **新版本（v1.7 或更高版本）** 的 STM32 固件，请按照此方法操作。

- **步骤 1.** 进入 reTerminal 的终端窗口并输入以下命令打开配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 2.** 在此文件的最底部，注释掉写有 **dtoverlay=reTerminal** 的那一行

```sh
#dtoverlay=reTerminal
```

- **步骤 3.** 重启 reTerminal

```sh
sudo reboot
```

- **步骤 4.** 在reTerminal内创建一个新目录并进入该目录。

```sh
mkdir STM32
cd STM32
```

<!-- - **步骤 5.** 访问[此链接](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases)并从**最新发布**版本中下载**stm32flash**文件和**STM32G030F6_R2.bin**文件。

**注意：** 您可以点击它们开始下载 -->

- **步骤 5.** 下载 **stm32flash** 文件和 **STM32G030F6_R2.bin** 文件

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **步骤 6.** 解压 **stm32flash-0.7.tar.gz**

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **步骤 7.** 进入名为 **stm32flash-0.7** 的文件夹，并使闪存工具可执行

```sh
cd stm32flash-0.7/
make
```

- **步骤 8.** 通过**i2c-tools**使STM32进入**引导模式**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **步骤 9.** 使用**stm32flash工具**擦除STM32芯片中的闪存

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **步骤 10.** 使用stm32flash工具将固件刷入STM32

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意：** **STM32G030F6_R2.bin** 是新固件的文件名

- **步骤 11.** 按如下方式修改 OPTR 寄存器

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **步骤 12.** 打开我们之前使用的配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 13.** 在此文件的最底部，取消注释写有 **dtoverlay=reTerminal** 的那一行

```sh
dtoverlay=reTerminal
```

- **步骤 14.** 重启 reTerminal

```sh
sudo reboot
```

<!-- - **步骤 6.** 在PC上打开命令提示符，并导航到下载文件的位置

```sh
cd C:\Users\user\Downloads
```

- **步骤 7.** 将文件传输到我们之前创建的 reTerminal 上的 **STM32** 目录

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**注意：** **pi** 是用户名，**192.168.x.xx** 是 reTerminal 的 IP 地址。您也可以用 reTerminal 的主机名来替换。

- **步骤 8.** 在 reTerminal 的终端窗口中，进入 **STM32** 目录

```sh
cd STM32
```
然后你会看到我们之前复制的文件

- **步骤 9.** 使闪存工具**可执行**

```sh
chmod +x stm32flash
``` -->
<!-- - **步骤 10.** 通过 **i2c-tools** 使 STM32 进入**引导模式**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **步骤 11.** 使用 **stm32flash 工具**擦除 STM32 芯片中的闪存

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **步骤 12.** 使用stm32flash工具将固件刷入STM32

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意：** **STM32G030F6_R2.bin** 是新固件的文件名

- **步骤 13.** 按如下方式修改 OPTR 寄存器

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **步骤 14.** 打开我们之前使用的配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 15.** 在此文件的最底部，取消注释写有 **dtoverlay=reTerminal** 的那一行

```sh
dtoverlay=reTerminal
```

- **步骤 16.** 重启 reTerminal

```sh
sudo reboot
``` -->
现在你已经成功地将固件刷入 STM32 了！

### 使用跳线和 OpenOCD 连接到 STM32

如果您的主板上安装的是**旧版本（低于 v1.7）**的 STM32 固件，请按照此方法操作。

- **步骤 1.** 进入 reTerminal 的终端窗口，输入以下内容以更新软件包列表

```sh
sudo apt-get update
```

- **步骤 2.** 安装以下软件包

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **步骤 3.** 克隆以下仓库并导航到该仓库

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **步骤 4.** 访问[此链接](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases)并从**最新发布**版本中下载 **STM32G030F6_R2.bin** 文件。

**注意：** 您可以点击它开始下载

- **步骤 5.** 在PC上打开命令提示符并导航到之前下载文件的位置

```sh
cd C:\Users\user\Downloads
```

- **步骤 6.** 将文件传输到我们之前在 reTerminal 上创建的 **openocd** 目录

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**注意：** **pi** 是用户名，**192.168.x.xx** 是 reTerminal 的 IP 地址。您也可以用 reTerminal 的主机名来替换。

- **步骤 7.** 回到 reterminal 上的终端窗口，在 **openocd** 目录中输入以下内容

```sh
./bootstrap
```

- **步骤 8.** 输入以下内容

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **步骤 9.** 编译它

```sh
make
```

- **步骤 10.** 安装它

```sh
sudo make install
```

- **步骤 11.** 按照下面的连接图将 STM32 的引脚连接到 40 针 GPIO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**注意：** STM32 引脚位于 reTerminal PCBA 的背面。

- **步骤 12.** 保持连接状态，输入以下命令将固件刷写到 STM32

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**注意：** 通常刷写过程需要大约3秒钟完成。因此您需要**保持**上述连接大约**3秒钟**，直到刷写过程完成

如果您看到以下日志，这意味着STM32固件已成功刷写！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **步骤 13.** 断开连接并**直接物理断开电源线**，无需使用**poweroff**命令

**注意：** 如果您不物理拔掉电源线，STM32固件将无法成功加载

现在您已成功将固件刷写到STM32！

### 检查已安装的STM32G030固件版本

现在让我们检查已安装的STM32固件版本

- **步骤 1.** 进入reTerminal的终端窗口并输入以下命令打开配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 2.** 在此文件的最底部，注释掉写有 **dtoverlay=reTerminal** 的那一行

```sh
#dtoverlay=reTerminal
```

- **步骤 3.** 重启 reTerminal

- **步骤 4.** 在 reTerminal 的终端窗口中输入以下命令来检查 STM32 固件版本

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

如果输出看起来像 **0x01 0x07**，这意味着您使用的是固件版本 1.7

- **步骤 5.** 打开我们之前使用的配置文件

```sh
sudo nano /boot/config.txt
```

- **步骤 6.** 在此文件的最底部，取消注释写有 **dtoverlay=reTerminal** 的那一行

```sh
dtoverlay=reTerminal
```

- **步骤 7.** 重启 reTerminal

```sh
sudo reboot
```

## Q2: 如何刷入 reTerminal 原装的 Raspberry Pi OS？

如果您已经刷入了不同的操作系统，并想要切换回 reTerminal 出厂预装的默认 Raspberry Pi OS，您可以按照以下步骤操作

- **步骤 1.** 通过访问以下链接下载 Raspberry Pi OS

  - [32位 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64位 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**注意：** reTerminal 原装出厂时预装的是 32 位操作系统。不过，您也可以下载 64 位版本

- **步骤 2.** 解压 **.zip 文件**

- **步骤 3.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 按键盘上的 **CTRL + SHIFT + X** 打开**高级选项**窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

在这里您可以**设置主机名、启用 SSH、设置密码、配置 wifi、设置区域设置**等等

- **步骤 5.** 点击 **CHOOSE OS** 并选择 **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 导航到之前解压的镜像文件，选择它并点击 **open**

- **步骤 7.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 8.** 最后，点击 **WRITE**

## Q3: 如何升级 Raspberry Pi OS 和已安装的软件包

我们将更新所有软件包，并将 Raspberry Pi OS 升级到最新版本

- **步骤 1.** 在 reTerminal 上打开终端窗口并输入以下命令

```sh
sudo apt update
sudo apt full-upgrade
```

- **步骤 2.** 重新安装内核头文件

```sh
sudo apt install raspberrypi-kernel-headers
```

- **步骤 3.** 重启 reTerminal

```sh
sudo reboot
```

现在您的 Raspberry Pi OS 和所有必要的软件包都已更新！

## Q4: 如果我将 CM4 替换为非 eMMC 版本，如何刷写操作系统

如果您想在 reTerminal 上使用不带 eMMC 的 Compute Module 4，那么您需要插入一张 micro-SD 卡并刷写您选择的操作系统。请根据您的操作系统按照以下步骤操作。

- **步骤 1.** 使用连接到计算机的 **micro-SD 读卡器**，或使用笔记本电脑上的**内置读卡器**将 micro-SD 卡插入计算机

- **步骤 2.** 访问[此链接](https://www.raspberrypi.org/software/)下载 **Raspberry Pi Imager** 软件

**注意：** 您可以选择下载 **Windows、Mac 或 Ubuntu** 版本

- **步骤 3.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 按键盘上的 **CTRL + SHIFT + X** 打开**高级选项**窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

在这里您可以**设置主机名、启用 SSH、设置密码、配置 wifi、设置区域设置**等

- **步骤 5.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

**注意：** 您可以通过导航到**其他通用操作系统**来选择操作系统，如 **64 位 Ubuntu**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 6.** 点击 **CHOOSE STORAGE** 并选择连接的 micro-sd 卡

- **步骤 7.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

请等待几分钟直到刷写过程完成。

- **步骤 8.** 从计算机中弹出 micro-SD 卡并将其插入 reTerminal。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**注意：** 您需要打开 reTerminal 的外壳才能访问 micro-sd 卡插槽

## Q5: 如何使用 USB 转串口转换器登录 Raspberry Pi OS/ Ubuntu OS 或其他操作系统

如果您有一个 **USB 转串口转换器**，您可以使用以下步骤登录 Raspberry Pi OS

将跳线从 USB 转串口转换器连接到 reTerminal 40 针 GPIO 接头上的 **UART 引脚**，如下所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

现在让我们在计算机上配置软件。请根据您的操作系统进行操作

### Windows 系统

- **步骤 1.** 将 USB 转串口转换器连接到 PC

- **步骤 2.** 在 Windows 搜索框中输入**设备管理器**打开**设备管理器**

- **步骤 3.** 点击**端口 (COM 和 LPT)** 的下拉箭头，找到连接的串口名称（例如：**COM7**）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **步骤 4.** 访问[此链接](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)下载并安装 **Putty**

**注意：** Putty 是一个 SSH 和 telnet 客户端，您可以使用它通过 SSH 连接到 reTerminal。如果您已经安装了 Putty，可以跳过此步骤

- **步骤 5.** 打开 Putty 连接 PC 到 reTerminal

- **步骤 6.** 在**连接类型**下选择 **Serial**

- **步骤 7.** 按如下配置设置：

  - Serial line: COM7（选择您的 COM 端口）
  - Speed: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **步骤 8.** 点击 **Open**

- **步骤 9.** 在 Putty 窗口中，输入登录详细信息如下

```sh
- Username: pi
- Password: raspberry
```

- **步骤 10.** 如果您已成功登录到 Raspberry Pi OS，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### 对于 Mac/Linux

- **步骤 1.** 将 USB 转串口转换器连接到 PC

- **步骤 2.** 在 Mac/Linux 上打开**终端窗口**

- **步骤 3.** 输入以下命令来更新**软件包列表**

```sh
sudo apt-get update
```

- **步骤 4.** 输入以下内容以安装 **minicom**

```sh
sudo apt-get install minicom
```

- **步骤 5.** 在终端中输入以下内容以查看已连接的串行设备

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>例如：<br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **步骤 6.** 通过输入以下内容连接到串行设备

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**注意：** 波特率设置为 9600

- **步骤 7.** 完成上述硬件连接后，从墙上电源插座打开电源为 reTerminal 供电

现在您已成功登录到 Raspberry Pi OS。

## Q6: 我无法在睡眠后唤醒 reTerminal LCD

通过 SSH 或 VNC 连接后打开终端窗口并输入以下命令

```sh
DISPLAY=:0 xset dpms force off
DISPLAY=:0 xset dpms force on
```

这将重新初始化 reTerminal 上的 LCD

## Q7: 如何从 USB 闪存驱动器启动操作系统

您可以按照以下步骤从 USB 闪存驱动器启动操作系统。在这里我们将启动顺序更改为 **USB 启动 > eMMC 启动**，这意味着如果 USB 启动失败，它将从 eMMC 启动。

**注意：** 此方法需要使用 Ubuntu 或 MacOS 作为主机 PC。

- **步骤 1.** 移除 4 个橡胶盖，拧下下方的 4 个螺丝，打开 reTerminal 后壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **步骤 2.** 移除 2 个螺丝以拆卸散热器，同时移除剩余的 4 个螺丝以拆开整个外壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 3.** 根据下图向下拨动**启动模式开关**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **步骤 4.** 连接到 reTerminal 后，在主机 PC 内打开**终端**窗口，输入以下命令来更新**软件包列表**

```sh
sudo apt update
```

- **步骤 5.** 通过以下命令安装 **Git**

```sh
sudo apt install git
```

- **步骤 6.** 如果日期设置不正确，Git 可能会产生错误。输入以下内容来纠正这个问题

```sh
sudo date MMDDhhmm
```

**注意：** 其中 **MM** 是月份，**DD** 是日期，**hh** 和 **mm** 分别是小时和分钟。

- **步骤 7.** 克隆并进入 **usbboot** 工具仓库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 8.** 输入以下内容以安装 **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **步骤 9.** 构建并安装 usbboot 工具

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

**注意：** 此处如果 USB 引导失败，它会切换到 eMMC 引导

- **步骤 12.** 运行以下命令以更新 EEPROM 镜像

```sh
cd recovery
./update-pieeprom.sh
```

pieeprom.bin 文件现在已准备好刷写到计算模块 4

- **步骤 13.** 导航回到 **usbboot** 目录

```sh
cd ..
```

- **步骤 14.** 运行 usbboot 工具来刷写引导加载程序 EEPROM

```sh
sudo ./rpiboot -d recovery
```

- **步骤 15.** 通过 USB Type-C 线缆将 reTerminal 连接到 PC

现在需要几秒钟时间将必要的文件传输到 reTerminal。

- **步骤 16.** 关闭 reTerminal，将启动模式开关拨回原始位置并组装 reTerminal 外壳

- **步骤 17.** 连接一个内置合适操作系统的可启动 USB 闪存驱动器，连接到 reTerminal 上的其中一个 USB 端口并开启 reTerminal

现在您将看到 reTerminal 从连接的 USB 驱动器启动

## Q8: 为什么 CM4 上的芯片周围有黑色胶水？

我们特意在 CM4 上的芯片周围涂抹了**环氧树脂底部填充胶**（看起来像黑色胶水），以确保 IC 得到良好保护。这也使整个 CM4 更加可靠。

## Q9: 为什么安装 reTerminal 驱动程序后蜂鸣器、LED 和按钮不工作？

reTerminal 配备了 2 个版本的 I/O 扩展芯片。旧版本使用 MCP23008，新版本使用 PCA9554。如果您[手动安装了 reTerminal 驱动程序](https://wiki.seeedstudio.com/cn/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)，请检查以下内容。

首先检查您的 reTerminal 上安装了哪个芯片。

- 打开终端窗口
- i2cdetect -y 1

如果您看到 0x20 I2C 地址，则 reTerminal 配备了 MCP23008 芯片

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x20.png" alt="pir" width={500} height="auto" /></p>

如果您看到 0x38 I2C 地址，则 reTerminal 配备了 PCA9554 芯片

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x38.jpg" alt="pir" width={500} height="auto" /></p>

对于配备 MCP23008 芯片的 reTerminal，您需要执行以下操作。

- sudo nano /boot/config.txt
- 在文件末尾添加 "dtoverlay=reTerminal,addr=0x20,mcp23008"
- Ctrl + x > y > ENTER，保存并关闭文件
- sudo reboot

对于配备最新 PCA9554 芯片的 reTerminal，您无需进行任何更改。

## Q10: 如何在 reTerminal 上安装 Ubuntu？

- **步骤 1.** 将 [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) 刷写到 reTerminal eMMC 存储

**注意：** 请参考[此处](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)的刷写说明。打开 **Raspberry Pi Imager** 后，导航到 `CHOOSE OS > Use custom` 并选择上述镜像进行刷写

- **步骤 2.** SSH 连接到 reTerminal 并逐一运行以下命令。确保使用 **ubuntu** 作为用户名，**ubuntu** 作为密码

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **步骤 3.** 现在，reTerminal 将启动到 Ubuntu 桌面，但方向是错误的

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 4.** 点击右上角的**电源图标**，然后点击**设置**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **步骤 5.** 选择**显示器**，在**方向**下选择**左纵向**，然后点击**应用**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

最后，您将看到 Ubuntu 桌面以正确的方向显示！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>

## Q11: 安装 Raspberry Pi OS Bullseye 后屏幕方向不正确

- **步骤 1.** 将 **Raspberry Pi OS Bullseye** 刷写到 reTerminal eMMC 后，按照[此指南](https://wiki.seeedstudio.com/cn/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)安装必要的驱动程序

- **步骤 2.** 在 **.config** 目录下创建一个名为 **monitors.xml** 的新文件

```sh
sudo vi ~/.config/monitors.xml
```

- **步骤 3.** 将以下内容复制到上述文件中以明确设置 LCD 显示器（DSI-1），按 **ESC** 后输入 **:wq** 保存文件

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **步骤 4.** 打开 **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **步骤 5.** 在文件中添加以下内容

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **步骤 6.** 重启 reTerminal

```sh
sudo reboot
```

现在屏幕将以正确的方向显示！

## Q12：触摸屏不准确故障排除

在将屏幕配置为正确方向后，触摸位置可能仍然不准确，导致当您触摸显示屏上的特定区域时，光标会向意外方向移动。要解决此问题，必须采取以下步骤。

- **步骤 1**：打开终端并通过输入以下命令进入 xorg.conf.d 文件夹

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2**：您将可以访问 "40-libinput.conf" 文件，可以使用命令对其进行编辑。

```sh
sudo nano 40-libinput.conf
```

- **步骤 3**：找到**触摸屏**的 InputClass 部分。

- **步骤 4**：添加以下短语。您可以参考截图

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 5**：按 Ctrl+O 保存并按回车键，然后按 Ctrl+X，之后重启

```sh
Sudo reboot 
```

重启后，您可能会注意到触摸位置现在是准确的。这意味着当您触摸显示屏上的特定区域时，光标会朝着预期的方向移动。

## Q13: 安装 reTerminal 驱动程序后 LED 和蜂鸣器不工作

这个问题不会持续很长时间。我们稍后会从 reTerminal 驱动程序本身完全解决这个问题

- **步骤 1.** 打开 **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **步骤 2.** 注释以下行并通过按下 **ESC** 后输入 **:wq** 来保存文件

```sh
#dtoverlay=reTerminal-bridge
```

- **步骤 3.** 重启 reTerminal

```sh
sudo reboot
```

现在LED和蜂鸣器将正常工作。

## Q14: 如何检查加密芯片是ATECC608A-SSHDA-B还是ATECC608A-TNGTLSS-G

| 发布日期 | 加密芯片IC版本 |
|---|---|
| 2021年09月03日之前 | ATECC608A-SSHDA-B |
| 2021年9月 - 2022年1月 | ATECC608A-SSHDA-B 或 ATECC608A-TNGTLSS-G |
| 2022年02月01日之后 | ATECC608A-TNGTLSS-G |

要通过类型检查加密芯片，请在终端中使用 ```i2cdetect -y 3``` 命令，如果您在输出表中看到 ```0x35```，则reTerminal配备了ATECC608A-TNGTLSS-G芯片，否则配备的是ATECC608A-SSHDA-B。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>

## 资源

- **[PDF]** [reTerminal 原理图](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal 原理图](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[PDF]** [Raspberry Pi Compute Module 4 数据手册](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[网页]** [Raspberry Pi 官方文档](https://www.raspberrypi.org/documentation/)

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
