---
description: 本文主要介绍如何使用 reComputer R1000 的 485 通信功能，并测试 rs485 和 Modbus 通信功能。
title: 如何在 reComputer R1000 上使用 rs485 和 modbus
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/r1000_connection_1.webp
slug: /cn/recomputer_r1000_use_rs485_modbus_rtu
last_update:
  date: 12/20/2024
  author: Jiahao Li
---

## 介绍

本文主要介绍如何使用 reComputer R1000 的 485 通信功能，并测试 RS485 和 Modbus 通信功能。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

### 硬件准备

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件

- 在您的 W10 PC 上使用 [modbus poll](https://www.modbustools.com/modbus_poll.html)。您也可以使用其他 modbus 测试工具
- 在 reComputer R1000 和 W10 PC 上使用 [modbusmechanic](https://modbusmechanic.scifidryer.com/)。您也可以使用其他 modbus 测试工具
- 在您的 W10 PC 上使用 [mobaxterm](https://mobaxterm.mobatek.net/)。您也可以使用其他串口测试工具
- 您需要在 reComputer R1000 上使用以下命令下载 **minicom** 工具：

```sh
sudo apt-get install minicom
```

### 硬件配置

此测试使用 RS485 转 USB 模块来连接 reComputer R1000 和 W10 PC。
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

对于 ModbusTCP，我们使用以太网线将 W10 PC 和 reComputer R1000 连接到交换机，以确保它们在同一网段内。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## 在 reComputer R1000v1.1 上配置 minicom

**注意：** 在使用 minicom 与 RS485 之前，请按照[此处](https://wiki.seeedstudio.com/cn/recomputer_r1000_flash_OS/#install-drivers)安装 r1000 驱动程序。

### 首先，安装 minicom

使用以下命令在您的主机和 reComputer r1000 上安装 minicom：

```
sudo apt install minicom
```

### 第二，按如下配置你的 minicom

使用 `Ctrl+Alt+T` 打开终端，并输入如下命令：

```
sudo minicom -D /dev/ttyAMA*
```

`ttyAMA*` 应该是 `ttyAMA2, ttyAMA3 或 ttyAMA4`，这取决于您使用的是哪个 RS485。

然后输入 `Ctal+A`，再输入 `Z`，您将看到如下所示的 minicom：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

输入 `o` 来配置 minicom，并选择 `Serial port setup`，您将看到如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

然后输入 `F` 和 `H` 使 minicom 进入 RS485 模式，结果将如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

最后，选择 `Exit` 并输入 `Enter` 退出配置，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>

## reComputer R1000 v1.0 所需操作

对于 reComputer R1000 v1.0，内置 485 收发器的 DE 引脚默认处于失控状态，这意味着接口只能单向传输数据（仅接收或仅发送）。

:::note
要区分硬件版本（v1.0 和 v1.1），您可以参考 [reComputer R1000 V1.1 产品变更详情](https://wiki.seeedstudio.com/cn/recomputer_r1000_v1_1_description/)。
:::

我们现在有两种解决方案，一种是**加载一个钩住 UART 驱动程序的内核模块，我们推荐您使用这种方法**，另一种是基于应用层的解决方案，简单地调用 `libgpiod` 来控制 DE 引脚。您可以根据需要选择其中一种。

### 内核模块解决方案（推荐）

#### 安装

首先，您需要下载内核模块的源代码。这是一个独立的仓库，因此您可以直接克隆它。

```shell
git clone https://github.com/bclswl0827/r1000v1-rs485-autoflow
cd r1000v1-rs485-autoflow
```

接下来，你需要编译内核模块。

```shell
make
```

如果您在编译时遇到错误，您可能需要安装与当前运行内核对应的内核头文件。我们假设您使用的是 Raspberry Pi OS，因此您可以使用以下命令来安装内核头文件。

```shell
sudo apt-get install linux-headers-$(uname -r)
```

之后，您可以再次编译内核模块。

#### 加载内核模块

编译完成后，您可以通过运行以下命令来加载内核模块。

```shell
sudo insmod r1000v1-rs485-autoflow.ko
```

如果内核模块成功加载，您应该在内核日志中看到以下消息，使用 `dmesg` 命令检查。

```shell
[  256.037465] r1000v1_rs485_autoflow: RS-485 interface has been hooked successfully
```

现在，您可以使用 `minicom` 工具来测试 RS485 通信。您也可以使用其他串口测试工具（例如 `picocom`）。

要在启动时加载内核，您可以使用以下命令将此模块添加到 `/etc/modules` 文件中。

```shell
echo "r1000v1_rs485_autoflow" | sudo tee -a /etc/modules
```

模块注册后，您需要重启系统以使更改生效。

```shell
sudo reboot
```

#### 卸载内核模块

要卸载内核模块，您可以运行以下命令，内置的RS485接口将返回到只接收模式。

```shell
sudo rmmod r1000v1-rs485-autoflow
```

#### 使用 DKMS 添加模块

DKMS（动态内核模块支持）是一个自动化构建和安装内核模块的系统，使其在管理跨多个内核版本的模块时非常有用。通过使用 DKMS，您可以确保您的模块即使在内核更新后仍保持兼容。

要使用 DKMS 添加此内核模块，请使用以下命令：

```shell
sudo make dkms_install
```

此命令将向 DKMS 注册模块，编译它，并为当前内核版本安装它。当将来内核升级时，DKMS 将自动为新版本重新构建和安装模块，因此您无需手动重新编译它。

### 应用层解决方案

#### 使用脚本

- 除了本文中提到的方法外，我们还提供了一个脚本，您可以使用以下命令执行。此脚本可以自动创建一个新的 /dev/ttyx，然后使用新创建的设备号执行 rs485/modbus rtu 通信即可

  ```shell
  curl -sSL https://raw.githubusercontent.com/Seeed-Projects/R1000-RS485-Util/main/setup_rs485.sh | sudo bash
  ```

#### 手动设置

首先，您需要下载我们提供的[**C程序**](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/tree/master/tools/rs485_control_DE)，然后参考ReadMe的内容。编译并运行。

```shell
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd seeed-linux-dtoverlays/tools/rs485_control_DE/
sudo apt-get install libgpiod-dev
gcc -o rs485_DE rs485_DE.c -lgpiod
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 
```

这个程序将创建一个新的 ttyAMAx 设备，其中设备编号取决于您运行程序时输入的参数。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/cfg_c.gif" /></center>

:::note

- 上面的示例展示了如何使用一个 RS485 接口。如果您想使用三个 485 接口，可以使用以下脚本来实现：

```shell
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 &
sudo ./rs485_DE /dev/ttyAMA3 /dev/gpiochip0 17 /dev/ttyAMA11 &
sudo ./rs485_DE /dev/ttyAMA5 /dev/gpiochip0 24 /dev/ttyAMA12 &
```

ttyAMA10~ttyAMA12 与 ttyAMA2~ttyAMA5 一一对应。在您的应用程序中使用 ttyAMA10~ttyAMA12 进行正常通信（ttyAMA2~ttyAMA5 无法使用，您需要使用脚本新创建的设备号）
:::

## 使用 Modbus RTU 测试的步骤

**步骤 1**：在 reComputer R1000 上输入以下脚本来打开 minicom 软件

```shell
minicom -D /dev/ttyAMAx -b 9600
```

其中，`-D` 后面跟着您要打开的设备号，`-b` 指的是波特率，设备号需要是第一步中新创建的设备号。然后在 W10 PC 上打开 MobaXterm，创建一个新的串口终端，选择串口号，波特率为 9600；最后，您可以与 RS485 进行双向通信。如图所示，在 reComputer R1000 上输入的内容可以通过 RS485 发送到 W10 PC，在 W10 PC 上输入的内容也可以发送到 reComputer R1000，双向通信正常。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>

**步骤 2**：测试完 RS485 功能后，您可以进行 Modbus 功能测试。此步骤允许 reComputer R1000 作为 Modbus 从站进行测试。在 reComputer R1000 上打开 ModbusMechanic 软件，选择设备号和波特率，然后点击左上角的模拟从站功能添加两个线圈；然后在 W10 中打开 Modbus poll 作为主站读取从站的线圈。然后打开 Modbus poll 的显示窗口，您可以看到 Modbus RTU 的发送和接收消息正常。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**步骤 3**：此步骤允许 reComputer R1000 作为 Modbus 主站进行测试。在 reComputer R1000 和 W10 PC 上都打开 ModbusMechanic 软件，并选择设备号和波特率。W10 PC 参考第三步的设置。在 reComputer R1000 上选择 `Read Coils(0x01)` 读取从站的线圈，将 `Slave Node` 设置为 1，`Register` 选择您要读取的地址，最后点击 `Transmit packet`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>

## 使用 Modbus TCP 测试的步骤

**步骤 1**：在 Win10 PC 和 R1000 上打开 modbusmechanic

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**步骤 2**：R1000 作为 modbus TCP 主机。在 W10 PC 上点击 `Tool => Start Slave Simulator`，TYPE 选择 `TCP`，Slave ID 选择 `1`，然后添加 `Coils`；然后在 R1000 中输入 `IP`，Scan group 选择 `Read Coil`。输入 `Slave Node` 和 `Register`，最后点击 `Transmit packet`。您可以看到从站数据已成功读取。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**步骤 3**：R1000 作为 modbus TCP 从站。配置参考第二步。您可以看到 R1000 作为从站可以正常读取数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>

在 R1000 中运行 Modbus TCP 从站程序需要监听 `502` 端口，这可能需要 `sudo` 权限。如果您的应用程序无法监听 `502` 端口，请尝试为其添加权限。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
