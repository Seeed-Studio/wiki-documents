---
description: reTerminal-常见问题解答
title: 如何使用 USB 转串口转换器登录到 Raspberry Pi OS/ Ubuntu OS 或其他操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Logging_in_OS_using_USB_to_serial_converter
last_update:
  date: 2023/6/21
  author: Seraphina
---

<!-- ## Q5: 如何使用 USB 转串口转换器登录到 Raspberry Pi OS/ Ubuntu OS 或其他操作系统 -->

如果您有一个 **USB 转串口转换器**，可以按照以下步骤登录到 Raspberry Pi OS。

将跳线从 USB 转串口转换器连接到 reTerminal 的 40 针 GPIO 接口上的 **UART 引脚**，连接方式如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

现在让我们在计算机上配置软件。请根据您的操作系统进行操作。

### 对于 Windows

- **步骤 1.** 将 USB 转串口转换器连接到 PC

- **步骤 2.** 在 Windows 搜索框中输入 **设备管理器**，打开 **设备管理器**

- **步骤 3.** 点击 **端口 (COM 和 LPT)** 下拉箭头，找到已连接的串口名称（例如：**COM7**）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **步骤 4.** 访问[此链接](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)下载并安装 **Putty**

**注意：** Putty 是一个 SSH 和 Telnet 客户端，您可以使用它通过 SSH 连接到 reTerminal。如果您已经安装了 Putty，可以跳过此步骤。

- **步骤 5.** 打开 Putty，将 PC 连接到 reTerminal

- **步骤 6.** 在 **连接类型** 中选择 **Serial**

- **步骤 7.** 按以下方式配置设置：

  - 串口：COM7（选择您的 COM 端口）
  - 波特率：9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **步骤 8.** 点击 **Open**

- **步骤 9.** 在 Putty 窗口中，输入以下登录信息：

```sh
- 用户名: pi
- 密码: raspberry
```

- **步骤 10.** 如果您成功登录到 Raspberry Pi OS，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### 对于 Mac/Linux

- **步骤 1.** 将 USB 转串口转换器连接到 PC

- **步骤 2.** 在 Mac/Linux 上打开一个 **终端窗口**

- **步骤 3.** 输入以下命令以更新 **软件包列表**：

```sh
sudo apt-get update
```

- **步骤 4.** 输入以下命令以安装 **minicom**：

```sh
sudo apt-get install minicom
```

- **步骤 5.** 在终端中输入以下命令以查看已连接的串口设备：

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>例如：<br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **步骤 6.** 输入以下命令连接到串口设备：

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**注意：** 波特率设置为 9600。

- **步骤 7.** 按照上述硬件连接完成后，从墙壁电源插座打开电源以启动 reTerminal。

现在，您已经成功登录到 Raspberry Pi OS！