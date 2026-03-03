---
description: ... 
title: 使用基于镜像的空中升级更新 Jetson Linux
keywords:
- reComputer
- OTA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/updating_jetpack_with_ota
last_update:
  date: 3/19/2025
  author: Youjiang
---


本教程将以 [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-p-5589.html) 为例，演示如何使用基于镜像的空中升级将 Jetson linux 从 jetpack5.1.3 更新到 jetpack6.0。

## 前提条件

- reComputer J4012/ J4011/ J3010 或 J3011
- Ubuntu 20.04 主机
- USB Type-C 数据传输线

:::info
这里我们使用 reComputer 经典系列进行演示。其他系列的 reComputer 也可以按照本教程实现 OTA 固件升级。
:::

## 1 生成 JP5.1.3 的系统镜像

### 1.1 准备 JP5.1.3 BSP

首先，您需要在**主机 PC** 上打开终端窗口，执行以下命令下载 NVIDIA Jetpack 5.1.3 版本 BSP。

```bash
cd <root_dir>
mkdir jp5 && cd jp5
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/jetson_linux_r35.5.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/tegra_linux_sample-root-filesystem_r35.5.0_aarch64.tbz2
```

:::note
其中 `<root_dir>` 是项目的根目录。
:::

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/bsp_jp5.png"/>
</div>

### 1.2 构建 JP5.1.3 系统镜像

在主机 PC 的终端窗口中运行以下命令来构建 5.1.3 系统镜像。

```bash
tar xf jetson_linux_r35.5.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.5.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo  BOARDID=<BOARDID> BOARDSKU=<BOARDSKU> FAB=<FAB>  BOARDREV=<BOARDREV> CHIP_SKU=<CHIP_SKU> ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash  --massflash 5  --network usb0  jetson-orin-nano-devkit  external
```

:::info
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <td> Jetson </td>
      <td> BOARDID </td>
      <td> BOARDSKU </td>
      <td> FAB </td>
      <td> BOARDREV </td>
      <td> CHIP_SKU </td>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td > Orin Nano 4G </td>
        <td > 3767 </td>
        <td > 0004 </td>
        <td > 300 </td>
        <td > N.2 </td>
        <td > 00:00:00:D6 </td>
    </tr>
    <tr>
        <td > Orin Nano 8G </td>
        <td > 3767 </td>
        <td > 0003 </td>
        <td > 300 </td>
        <td > N.2 </td>
        <td > 00:00:00:D6 </td>
    </tr>
    <tr>
        <td > Orin Nx 8G </td>
        <td > 3767 </td>
        <td > 0001 </td>
        <td > 300 </td>
        <td > M.3 </td>
        <td > 00:00:00:D4 </td>
    </tr>
    <tr>
        <td > Orin Nx 16G </td>
        <td > 3767 </td>
        <td > 0000 </td>
        <td > 300 </td>
        <td > G.3 </td>
        <td > 00:00:00:D3 </td>
    </tr>
  </tbody>
</table>

请根据您使用的具体 Jetson 模块替换相应的变量。对于 reComputer J3010：
`sudo  BOARDID=3767 BOARDSKU=0004 FAB=300  BOARDREV=N.2 CHIP_SKU=00:00:00:D6 ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash  --massflash 5  --network usb0  jetson-orin-nano-devkit  external`
:::

编译成功后，将在 `Linux_for_Tegra` 目录中生成系统镜像包。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/build_jp5.png"/>
</div>

### 1.3 将 JP5.1.3 刷写到设备（可选）

如果您想在 Jetson 设备上测试此固件，可以参考[此 wiki](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack/) 将固件刷写到 Jetson 设备中。

```bash
sudo tar xpf mfi_jetson-orin-nano-devkit.tar.gz
cd mfi_jetson-orin-nano-devkit
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

## 2 生成 JP6.0 的 OTA 包

### 2.1 准备 BSP

您需要在**主机 PC**上打开终端窗口并执行以下命令来下载 NVIDIA Jetpack 6.0 版本的 BSP。

```bash
cd <root_dir>
mkdir jp6 && cd jp6
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/jetson_linux_r36.3.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/tegra_linux_sample-root-filesystem_r36.3.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/ota_tools_R36.3.0_aarch64.tbz2
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/bsp_jp6.png"/>
</div>

### 2.2 构建 JP6 系统镜像

请参考 [1.2](./#12-build-system-image-of-jp513) 中的步骤进行执行，并注意修改其中的变量。

```bash
tar xf jetson_linux_r36.3.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo BOARDID=<BOARDID> BOARDSKU=<BOARDSKU> FAB=<FAB> BOARDREV=<BOARDREV> CHIP_SKU=<CHIP_SKU> ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --network usb0 jetson-orin-nano-devkit external
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/build_jp6.png"/>
</div>

### 2.3 生成 OTA 载荷包

在主机 PC 的终端窗口中执行以下命令。

```bash
cd <root_dir>/jp6
tar xf ota_tools_R36.3.0_aarch64.tbz2
cd Linux_for_Tegra
sudo BASE_BSP=<root_dir>/jp5/Linux_for_Tegra ./tools/ota_tools/version_upgrade/l4t_generate_ota_package.sh --external-device nvme0n1 -S 80GiB jetson-orin-nano-devkit R35-5
```

命令完成后，您将在 Linux_for_Tegra/bootloader/jetson-orin-nano-devkit 目录中获得 `ota_payload_package.tar.gz` 文件。

## 3 在设备上应用 OTA 包

### 3.1 准备工作

将生成的 OTA 包（`ota_payload_package.tar.gz`）复制到 Jetson 设备上，并在 Jetson 设备的终端窗口中执行以下命令。

```bash
scp <...>/jp6/Linux_for_Tegra/bootloader/jetson-orin-nano-devkit/ota_payload_package.tar.gz ~
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/ota_tools_R36.3.0_aarch64.tbz2
sudo mkdir /ota
sudo mv ~/ota_payload_package.tar.gz /ota
tar xf ota_tools_R36.3.0_aarch64.tbz2
```

### 3.2 Apply OTA

```bash
cd ~/Linux_for_Tegra/tools/ota_tools/version_upgrade
sudo ./nv_ota_start.sh /ota/ota_payload_package.tar.gz
```

此命令成功完成后，重启设备。

最终，设备成功从 5.1.3 升级到 6.0。

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
