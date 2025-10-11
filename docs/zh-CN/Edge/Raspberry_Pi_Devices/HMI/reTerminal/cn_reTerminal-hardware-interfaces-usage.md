---
description: 硬件和接口使用
title: 硬件和接口使用
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-hardware-interfaces-usage
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


# 硬件和接口使用

本wiki介绍了reTerminal上各种不同的硬件和接口，以及如何使用它们来扩展您的项目想法。

**注意：** 对于某些硬件和接口，在运行Raspberry Pi OS镜像、[Buildroot镜像](https://wiki.seeedstudio.com/cn/reTerminal-Buildroot-SDK)和[Yocto镜像](https://wiki.seeedstudio.com/cn/reTerminal-Yocto)时，使用说明会有所不同。默认步骤适用于Raspberry Pi OS镜像。但是，如果Buildroot镜像和Yocto镜像的说明不同，会有明确的标注。

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## 40引脚Raspberry Pi兼容引脚

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

**40引脚**包含**26个GPIO、最多5个I2C、最多5个SPI、最多5个UART、1个PCM、1个PWM、1个SDIO接口、1个DPI（并行RGB显示）、最多3个GPCLK输出和1个USB接口**。

**USB接口**是从Compute Module 4内部的**USB 2.0接口**扩展而来。因此您可以使用此接口扩展到更多USB连接器，并获得高达**480 Mbit/s**的速度。

您还可以使用这40个引脚连接到**Raspberry Pi兼容的Hat**并扩展您的项目！

[点击这里](https://www.seeedstudio.com/hats-shields-c-840.html)探索Seeed Studio提供的各种Raspberry Pi Hat，[点击这里](https://uk.pi-supply.com/collections/all-raspberry-pi-hats-and-phats)查看更多第三方Raspberry Pi Hat！

GPIO引脚可以安全地提供最大**50mA**的电流。这意味着50mA分布在所有引脚上。因此，单个GPIO引脚只能安全地提供**16mA**电流。另一方面，其余每个引脚的最大电流消耗为**2A**。在将额外硬件连接到这些引脚时，请记住这一点。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg)查看高分辨率图像

### 使用方法 - GPIO

- **步骤1.** 将引脚设置为GPIO

```sh
sudo -i   #enable root account privileges 
cd /sys/class/gpio
echo 23 > export #GPIO23 which is Pin 16
cd gpio23
```

- **步骤 2.** 设置 GPIO 输入/输出

```sh
echo in > direction  #set GPIO as input
echo out > direction  #set GPIO as output
```

- **步骤 3.** 设置 GPIO 高/低电平

```sh
echo 1 > value  #set GPIO to high
echo 0 > value  #set GPIO to low
```

- **步骤 4.** 获取GPIO输入/输出状态

```sh
cat direction
```

- **步骤 5.** 获取GPIO级别状态

```sh
cat value
```

- **步骤 6.** 将引脚设置回默认状态

```sh
cd ..
echo 23 > unexport
```

#### 在 Buildroot 镜像上的使用

- 用 **su -** 替换 **sudo -i** 来启用 **root** 账户权限
- 按照上述提到的其他步骤操作

#### 在 Yocto 镜像上的使用

- 不需要 **sudo -i**，因为我们已经以 **root** 身份登录
- 按照上述提到的其他步骤操作

### 使用方法 - I2C

- **步骤 1.** 打开 reTerminal，点击 Raspberry Pi 桌面 UI 上的 Raspberry Pi 图标，导航到 `Preferences > Raspberry Pi Configuration`

- **步骤 2.** 点击 `Interfaces` 选项卡，然后点击 **I2C** 旁边的 **Enabled**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/i2c-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 点击 **OK**

- **步骤 4.** 将 I2C 设备连接到 reTerminal

- **步骤 5.** 列出所有可用的 I2C 总线

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **步骤 6.** 扫描 I2C 总线 1 (i2c-1) 上的标准地址

```sh
i2cdetect -y 1
```

**注意** 1 代表 I2C 总线编号

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-detect-2.png" alt="pir" width="600" height="auto"/></p>

上图显示检测到的 I2C 设备地址为 0x20、0x51、0x45、0x19、0x29 和 0x5c

#### 在 Buildroot 镜像上的使用

- 您无需为 Buildroot 镜像开启 I2C，因为 **I2C 默认已启用**
- 按照上述提到的其他步骤操作

#### 在 Yocto 镜像上的使用

- 开启时 I2C 未启用。它仅在每次启动后使用 **modprobe i2c-dev** 才能工作。一旦修复此问题，将会更新。

### 使用方法 - SPI

- **步骤 1.** 开启 reTerminal，点击 Raspberry Pi 桌面 UI 上的 Raspberry Pi 图标，导航到 `Preferences > Raspberry Pi Configuration`

- **步骤 2.** 点击 `Interfaces` 选项卡，然后点击 **SPI** 旁边的 **Enabled**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/spi-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 将 SPI 设备连接到 reTerminal

- **步骤 4.** 列出所有可用的 SPI 设备

```sh
ls /dev/spi*
```

您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **步骤 5.** 打开终端窗口并输入以下命令来下载一个 **SPI 测试工具**

```sh
wget https://files.seeedstudio.com/wiki/102110497/spidev_test
```

- **步骤 6.** 更改工具的用户权限

```sh
chmod +x spidev_test
```

- **步骤 7.** 使用跳线将 **GPIO 10 (引脚 19)** 和 **GPIO 9 (引脚 21)** 短接

**注意：** 这里我们短接 **MOSI 和 MISO 引脚**

- **步骤 8.** 运行以下 SPI 测试工具

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

如果您看到以下输出，SPI 正在正常工作

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

#### 在 Buildroot/ Yocto 镜像上的使用

- 要启用 SPI，通过 **vi /boot/config.txt** 命令打开 **config.txt**
- 在末尾添加 **dtparam=spi=on**（按 **i** 进入编辑模式）
- 按 **ESC** 退出编辑模式
- 通过输入 **:wq** 保存文件
- 重启
- spidev_test 工具运行时存在问题。一旦修复将会更新。

## 扩展模块的高速接口

reTerminal 背面有一个高速扩展接口。它包含 1 个 PCIe 1-lane Host Gen 2（支持高达 5Gbps 的速度）、1 个 USB 2.0、1 个 PoE 和 26 个 GPIO。这 26 个 GPIO 引脚可以进一步用作 2 个 I2C、2 个 SPI 和 1 个 UART。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png)查看更高分辨率的图像

:::note
PCIe、USB 3.0、2 x CAN-FD 和 SDIO3.0 接口是为未来产品定义的，因此目前无法使用
:::

我们计划在未来为 reTerminal 构建扩展模块，我们已经预留了这个接口来将这些模块连接到 reTerminal。我们将发布各种模块，例如：

- 麦克风阵列和扬声器模块
- 摄像头模块
- 工业 I/O
- LoraWAN 模块
- 5G/4G 模块
- PoE 模块
- 以太网交换机

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/external_modules.png" alt="pir" width="750" height="auto"/></p>

reTerminal 侧面有 2 个 M4 机械螺丝孔，有助于固定扩展模块。

## CSI 摄像头接口

reTerminal 有一个 2-lane MIPI CSI 摄像头接口，这意味着您可以将多达 2 个摄像头连接到 reTerminal。一个接口有 **15 个引脚**，而另一个接口有 **22 个引脚**。因此，请确保使用与您打算使用的接口相对应的正确排线。这些摄像头接口可用于物体检测和机器学习应用。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg)查看更高分辨率的图像

#### 使用方法

- **步骤 1.** 将摄像头连接到 **15 引脚**或 **22 引脚** **FPC 接口**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-label-1.jpg" alt="pir" width="800" height="auto"/></p>

- **步骤 2.** 打开 reTerminal，在 Raspberry Pi 桌面 UI 上点击 Raspberry Pi 图标，导航到 `Preferences > Raspberry Pi Configuration`

- **步骤 3.** 点击 `Interfaces` 选项卡，点击 **Camera** 旁边的 **Enabled**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Cam-enable.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 4.** 点击 **Yes** 重启

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/cam-reboot.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 5.** 打开终端窗口，输入以下命令拍摄静态照片并保存到桌面

```sh
raspistill -o Desktop/image.jpg
```

**注意：** 您可以根据自己的偏好更改保存位置

- **步骤 6.** 双击桌面上生成的文件来查看图像

- **步骤 7.** 输入以下命令来录制视频并将其保存到桌面

```sh
raspivid -o Desktop/video.h264
```

- **步骤 8.** 双击桌面上生成的文件来播放录制的视频

您可以通过访问[官方树莓派文档](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)了解更多关于摄像头使用的信息

#### 在 Buildroot/ Yocto 镜像上的使用

- CSI 摄像头接口尚未测试。一旦测试完成，此部分将会更新。

## 5英寸LCD

reTerminal 内置的5英寸LCD通过载板内部的 **30针DSI接口** 连接。此LCD支持 **5点多点触控**，为了启用此功能，LCD连接到载板上的另一个 **TP接口**。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png)查看更高分辨率的图像

## LCD触摸面板

### 使用方法

LCD的触摸面板通过 **6针FPC** 连接器连接。您可以使用evtest工具来测试它

- **步骤 1.** 输入以下命令安装 **evtest**，这是一个输入设备事件监控和查询工具

```sh
sudo apt install evtest
```

- **步骤 2.** 打开evtest工具

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest-1.png" alt="pir" width="680" height="auto"/></p>

- **步骤 3.** 输入 **1**，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-1.png" alt="pir" width="720" height="auto"/></p>

- **步骤 4.** 在 reTerminal LCD 上随意触摸，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-2.png" alt="pir" width="850" height="auto"/></p>

#### 在 Buildroot 镜像上的使用

- 您无需安装 **evtest 工具**，因为它已经安装好了
- 在运行 **evtest** 之前，您需要通过输入 **su -** 切换到 root 用户
- 按照上述其他步骤操作

#### 在 Yocto 镜像上的使用

- 您无需安装 **evtest 工具**，因为它已经安装好了
- 按照上述其他步骤操作

### 通过 I2C 将其他设备连接到 FPC 连接器

触摸面板通过 I2C 通信协议连接到 reTerminal。因此，如果您愿意，可以轻松地将其他 I2C 设备连接到这个 6 针 FPC 接口。连接图如下

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-I2C-connection.png" alt="pir" width="900" height="auto"/></p>

之后按照前面关于如何使用 I2C 的主题中的步骤操作

## 4 个用户可编程按钮

reTerminal 前面有 4 个用户可编程按钮。这些按钮可以通过软件轻松控制，并且可以根据您的应用程序分配来开启/关闭不同的功能！

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg)查看更高分辨率的图像

### 使用方法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/key-label.jpg" alt="pir" width="500" height="auto"/></p>

- **步骤 1.** 打开 evtest 工具

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **步骤 2.** 输入 **0**，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test.jpg" alt="pir" width="680" height="auto"/></p>

- **步骤 3.** 从左到右按下按钮，您将看到以下内容

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test-result.png" alt="pir" width="800" height="auto"/></p>

**注意：** 按钮默认从**左到右**配置为 **a s d f**

- **步骤 4.** 如果您想要配置按钮，请输入以下内容

```sh
sudo nano /boot/config.txt
```

- **步骤 5.** 修改文件，在末尾添加以下内容

```sh
dtoverlay=reTerminal,key0=0x100,key1=0x101,key2=0x102,key3=0x103,tp_rotate=1
```

**注意：** 这里十六进制数字 100、101、102 和 103 分别分配给 key0、key1、key2、key3

#### 在 Buildroot 镜像上的使用

- 您不需要安装 **evtest 工具**，因为它已经安装了
- 在运行 **evtest** 之前，您需要通过输入 **su -** 切换到 root 用户
- 按照上面提到的其他步骤进行操作

#### 在 Yocto 镜像上的使用

- 您不需要安装 **evtest 工具**，因为它已经安装了
- 按照上面提到的其他步骤进行操作

## 3 用户可编程 LED

reTerminal 前面有 2 个用户可编程 LED。这些 LED 可以通过软件开启/关闭，在您想要将它们用作状态 LED 来监控不同硬件功能的场景中非常有用。**USR** LED 可以点亮**绿色**，而 **STA** LED 可以点亮**红色**或**绿色**

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg" alt="pir" width="700" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg)查看更高分辨率的图像

### 使用方法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/led-label.jpg" alt="pir" width="550" height="auto"/></p>

- **步骤 1.** 启用 root 账户权限

```sh
sudo -i
```

- **步骤 2.** 进入以下目录

```sh
cd /sys/class/leds
```

- **步骤 3.** 进入以下目录以控制**绿色 USR LED**

```sh
cd usr_led0
```

- **步骤 4.** 以最大亮度打开LED

```sh
echo 255 > brightness
```

**注意：** 您可以输入 1 - 255 之间的值来调节亮度级别

- **步骤 5.** 关闭 LED

```sh
echo 0 > brightness
```

- **步骤 6.** 进入以下目录以控制**红色 STA LED**

```sh
cd ..
cd usr_led1
```

- **步骤 7.** 重复步骤 4 - 5 来控制 LED

- **步骤 8.** 进入以下目录来控制**绿色 STA LED**

```sh
cd ..
cd usr_led2
```

- **步骤 9.** 重复步骤 4 - 5 来控制 LED

#### 在 Buildroot 镜像上的使用

- 将 **sudo -i** 替换为 **su -** 来启用 **root** 账户权限
- 按照上述其他步骤进行操作

#### 在 Yocto 镜像上的使用

- 不需要 **sudo -i**，因为我们已经以 **root** 身份登录
- 按照上述其他步骤进行操作

## 千兆以太网端口

reTerminal 板载千兆以太网连接器 (RJ45)。该端口连接到 CM4 模块的**千兆以太网 PHY**，基于 **Broadcom BCM54210PE**。它还**符合 IEEE 1588-2008 标准**。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png" alt="pir" width="900" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png)查看高分辨率图像

## 加密协处理器

reTerminal 具有安全功能，如**Microchip ATECC608A 加密协处理器**，具有安全的基于硬件的密钥存储。它还为多达 16 个密钥、证书或数据提供受保护的存储。它为对称签名、验证、密钥协商 – ECDSA 提供硬件支持。它具有对称算法、网络密钥管理和安全启动的硬件支持。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg" alt="pir" width="800" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg)查看高分辨率图像

### 使用方法

- **步骤 1.** 列出所有可用的 I2C 总线

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **步骤 2.** 扫描 I2C 总线 3 (i2c-3) 上的标准地址

```sh
i2cdetect -y 3
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-y3.png" alt="pir" width="530" height="auto"/></p>

**注意：** 3 代表 I2C 总线编号

I2C 地址为 **0x60** 的设备是加密协处理器

#### 在 Buildroot 镜像上的使用

- 使用方法如上所述

#### 在 Yocto 镜像上的使用

- 开机时 I2C 未启用。每次启动后只有使用 **modprobe i2c-dev** 才能工作。一旦修复此问题，将会更新。

## RTC

reTerminal 内置的 RTC 基于 **NXP Semiconductors PCF8563T**，使用 **CR1220 电池** 供电。它具有低备用电流；在 VDD = 3.0 V 和温度 = 25°C 时典型值为 0.25μA。它可用于需要实现计时功能的项目。

**注意：** 开箱即用已安装 CR1220 电池。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg" alt="pir" width="800" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg)查看高分辨率图像

### 使用方法

输入以下命令从 RTC 获取日期和时间信息

```sh
sudo hwclock
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hwclock.png" alt="pir" width="370" height="auto"/></p>

#### 在 Buildroot 镜像上的使用方法

- 首先输入 **su -** 来启用 **root** 账户
- 然后输入 **hwclock**

#### 在 Yocto 镜像上的使用方法

- 不需要 **sudo**，因为我们已经以 **root** 身份登录
- 只需输入 **hwclock**

## 光传感器

reTerminal 配备了一个 **Levelek LTR-303ALS-01** 数字光传感器，它连接到 **6 针 FPC 接口**。它可以用来感知环境中的光照水平，也可以用于根据周围光照水平进行 **LCD 背光的自动亮度调节**。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg" alt="pir" width="700" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg)查看更高分辨率的图像

### 使用方法

- **步骤 1.** 启用 root 账户权限

```sh
sudo -i
```

- **步骤 2.** 进入以下目录

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **步骤 3.** 输入以下内容以获取以**勒克斯**为单位的光强度值

```sh
cat in_illuminance_input 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-lux.png" alt="pir" width="900" height="auto"/></p>

光传感器通过 **I2C 通信协议** 连接到 reTerminal。因此，如果您愿意，可以轻松地将其他 I2C 设备连接到这个 **6 针 FPC 接口**。连接图如下所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-i2c.png" alt="pir" width="1000" height="auto"/></p>

之后，请按照前面主题中关于如何使用 I2C 的步骤进行操作

#### 在 Buildroot 镜像上的使用

- 将 **sudo -i** 替换为 **su -** 以启用 **root** 账户权限
- 按照上述其他步骤进行操作

#### 在 Yocto 镜像上的使用

- 不需要 **sudo -i**，因为我们已经以 **root** 身份登录
- 按照上述其他步骤进行操作

## 加速度计

内置的 **STMicroelectronics LIS3DHTR 3 轴加速度计** 可用于在 reTerminal 上实现许多不同的应用。您可以使用它在旋转 reTerminal 时自动更改屏幕方向等等。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg" alt="pir" width="600" height="auto"/></p>

**提示：** 点击 [这里](https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg) 查看高分辨率图像

### 使用方法

- **步骤 1.** 打开 evtest 工具

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **步骤 2.** 输入 **1**，您将看到 X、Y、Z 加速度值

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel-test.png" alt="pir" width="700" height="auto"/></p>

#### 在 Buildroot 镜像上的使用

- 您无需安装 **evtest 工具**，因为它已经安装了
- 在运行 **evtest** 之前，您需要通过输入 **su -** 切换到 **root** 用户
- 按照上述其他步骤操作

#### 在 Yocto 镜像上的使用

- 您无需安装 **evtest 工具**，因为它已经安装了
- 按照上述其他步骤操作

## 蜂鸣器

reTerminal 内置了一个蜂鸣器。可以通过软件控制。这个蜂鸣器可以在不同应用中用作指示器。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg" alt="pir" width="500" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg)查看高分辨率图像

### 使用方法

- **步骤 1.** 启用 root 账户权限

```sh
sudo -i
```

- **步骤 2.** 进入以下目录

```sh
cd /sys/class/leds/usr_buzzer
```

- **步骤 3.** 打开蜂鸣器

```sh
echo 1 > brightness
```

- **步骤 4.** 关闭蜂鸣器

```sh
echo 0 > brightness
```

#### 在 Buildroot 镜像上的使用

- 使用 **su -** 替换 **sudo -i** 来启用 **root** 账户权限
- 按照上述提到的其他步骤进行操作

#### 在 Yocto 镜像上的使用

- 不需要 **sudo -i**，因为我们已经以 **root** 身份登录
- 按照上述提到的步骤进行操作

## USB 2.0 端口

Raspberry Pi CM4 已经板载了一个 **USB 2.0 集线器**。该集线器在 reTerminal 上扩展为 **2 个 USB 2.0 端口**，作为 **USB HOST**

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg)查看更高分辨率的图像

### 使用方法

- **步骤 1.** 将 USB 设备连接到 reTerminal 上的其中一个 USB 2.0 端口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-port.jpg" alt="pir" width="130" height="auto"/></p>

- **步骤 2.** 在终端窗口中输入以下命令来列出已连接的 USB 设备

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-connected.png" alt="pir" width="850" height="auto"/></p>

- **步骤 3.** 输入以下命令来收集有关已连接 USB 设备的更多信息，如驱动器大小、分区、挂载点等

```sh
lsblk
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-mount.png" alt="pir" width="680" height="auto"/></p>

- **步骤 4.** 访问连接的 USB 设备并列出其中的所有文件

```sh
cd /media/pi/NEW VOLUME
ls -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-access.png" alt="pir" width="730" height="auto"/></p>

**注意：** 挂载点会因USB设备而异

## Micro - SD卡插槽

reTerminal配备了一个**micro-sd卡插槽**。当您想要将操作系统**安装到micro-SD卡上**，同时使用**不带eMMC的CM4模块**时，这非常有用。建议使用至少8GB的卡。点击[此链接](https://wiki.seeedstudio.com/cn/reTerminal/#flash-to-micro-sd-card-cm4-non-emmc-version)了解更多！

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg)查看高分辨率图像

## Micro HDMI端口

reTerminal上有一个micro HDMI端口，您可以使用它通过**micro HDMI转标准HDMI线缆**连接到HDMI显示器。它支持高达4K分辨率，60fps。

### 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**提示：** 点击[这里](https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg)查看高分辨率图像

### 使用方法

- **步骤1.** 使用micro-HDMI转标准HDMI线缆将HDMI显示器连接到reTerminal的micro-HDMI端口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI-port.jpg" alt="pir" width="250" height="auto"/></p>

- **步骤2.** 打开reTerminal，您将在reTerminal LCD和连接的HDMI显示器上都看到UI输出

**注意：** 如果您在reTerminal开机时连接显示器，需要输入**sudo service lightdm restart**来在连接的HDMI显示器上显示UI。

- **步骤3.** 在终端窗口中输入以下命令来安装**屏幕配置**实用程序

```sh
sudo apt install arandr
```

- **步骤 4.** 点击左上角的树莓派图标，导航到 `Preferences > Screen Configuration`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-config-setup.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 5.** 在 **Screen Layout Editor** 窗口中，导航到 `Configure > Screens > HDMI-1 > Resolution` 并调整选择连接的 HDMI 显示器的分辨率。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-drag.png" alt="pir" width="1000" height="auto"/></p>

**注意：** 您也可以更改显示器的**频率**和**方向**

- **步骤 6.** 拖动两个框来更改显示器的排列。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-setting.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 7.** 点击**勾选标记**来应用设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-apply.png" alt="pir" width="1000" height="auto"/></p>

#### 在 Buildroot/ Yocto 镜像上的使用

- 热插拔目前不工作。一旦修复，这将会更新。
- 所以您需要先连接到 HDMI 显示器，然后打开 reTerminal
- 注意 **arandr** 包在 Buildroot 系统镜像中不可用

## USB Type-C 端口

reTerminal 上的 **USB Type-C 端口**可以用来**使用 5V/4A（推荐）为 reTerminal 供电**。但是它也可以用作 **USB 设备**，您可以将 reTerminal 连接到**主机 PC**，reTerminal 将充当 **USB 大容量存储设备**。在这里，您将能够通过 PC 访问 reTerminal 的**板载 eMMC** 并将**操作系统**刷写到 eMMC。点击[这里](https://wiki.seeedstudio.com/cn/reTerminal/#flash-to-emmc-cm4-emmc-version)了解更多！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/type-c.png" alt="pir" width="130" height="auto"/></p>

## 标准相机支架（1/4 英寸）

reTerminal 有一个**直径为 1/4 英寸的标准相机支架**。所以您可以将 reTerminal 连接到**标准三脚架**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tripod.png" alt="pir" width="450" height="auto"/></p>

## reTerminal 的 Python 库

我们准备了一个 **Python 库**，使您能够使用 reTerminal 上的板载硬件。目前可以使用这个 Python 库访问**加速度计、用户 LED、用户按钮和蜂鸣器**。

### 安装

在 reTerminal 上打开终端窗口并执行以下命令

```sh
sudo pip3 install seeed-python-reterminal
```

**注意：** 源代码可以在[这里](https://github.com/Seeed-Studio/Seeed_Python_ReTerminal)找到

### 使用方法

- **步骤 1.** 创建一个新的 **python 文件** 并使用 **nano 文本编辑器** 打开

```sh
nano test.py
```

- **步骤 2.** 输入 python 代码

- **步骤 3.** 按 **CTRL + X** 然后按 **Y** 保存文件

- **步骤 4.** 最后运行文件

```sh
python3 test.py
```

您可以按照上述步骤测试以下硬件功能。每个部分包含的Python代码可以直接输入到test.py文件中，然后执行该文件

#### 用户LED测试

```python
import seeed_python_reterminal.core as rt
import time

print("STA ON, USR OFF")
rt.sta_led = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR ON")
rt.sta_led = False
rt.usr_led = True
time.sleep(1)

print("STA RED, USR OFF")
rt.sta_led_green = False
rt.sta_led_red = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR OFF")
rt.sta_led = False
rt.usr_led = False
```

#### Buzzer Test

```python
import seeed_python_reterminal.core as rt
import time

print("BUZZER ON")
rt.buzzer = True
time.sleep(1)

print("BUZZER OFF")
rt.buzzer = False
```

#### User Buttons Test

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.button as rt_btn


device = rt.get_button_device()
while True:
    for event in device.read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")
```

#### Accelerometer Test

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel


device = rt.get_acceleration_device()
while True:
    for event in device.read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"name={str(accelEvent.name)} value={accelEvent.value}")
```

#### Accelerometer and Buttons Test

```python
import asyncio
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel
import seeed_python_reterminal.button as rt_btn


async def accel_coroutine(device):
    async for event in device.async_read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"accel name={str(accelEvent.name)} value={accelEvent.value}")


async def btn_coroutine(device):
    async for event in device.async_read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")


accel_device = rt.get_acceleration_device()
btn_device = rt.get_button_device()

asyncio.ensure_future(accel_coroutine(accel_device))
asyncio.ensure_future(btn_coroutine(btn_device))

loop = asyncio.get_event_loop()
loop.run_forever()
```

#### 在 Buildroot 镜像上的使用

- 此库稍后将添加到 Buildroot 镜像中
- 首先输入 **su -** 启用 root 账户
- 然后输入 **pip3 install seeed-python-reterminal**
- 创建 Python 文件时使用 **vi** 作为文本编辑器
- 加速度计 + 按钮演示存在问题。一旦修复将会更新

#### 在 Yocto 镜像上的使用

- 尽管已安装 Python，但未安装 pip。我们稍后会将此库打包到系统镜像中

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
