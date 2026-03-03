---
description: 本教程将向您展示如何为 R1000 编译、配置和烧录 balenaOS。
title: 为 reComputer R1000 构建 balenaOS
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /build_balenaOS_for_reComputer_r1000
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## 什么是 balena？

[balena](https://www.balena.io/) 是一个物联网 (IoT) 平台，旨在帮助开发者在设备群中构建、部署和管理 IoT 应用程序。它支持广泛的设备架构，并包含容器化应用程序部署功能，使您能够轻松更新 IoT 软件和主机操作系统，修复错误并为 IoT 应用程序引入新功能。balena 提供了一种统一的方式来推送代码更新、管理设备配置，并确保设备在现场可靠安全地运行，无论其位置或网络条件如何。

本教程将向您展示如何为 R1000 编译、配置和烧录 balenaOS。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## 入门指南

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

- [yocto](https://docs.yoctoproject.org/4.0.20/brief-yoctoprojectqs/index.html) 环境
- [docker](https://www.docker.com/) 环境
- [balenaEtcher](https://etcher.balena.io/) 用于刷写 CM4 存储器。

### 硬件配置

**步骤 1**：您需要将 R1000 侧面的开关设置为启动模式，然后给设备上电

<div class="table-center">

| 开关位置                                              | 模式        | 描述    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 正常模式 | 从 eMMC 启动 | 低       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 刷写模式  | 从 USB 启动  | 高      |

</div>

**步骤 2**：请使用 USB Type-c 线缆将 reComputer R1000 连接到您的计算机。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### 编译 R1000-balenaOS

**步骤 1**：下载以下库并确保当前环境支持编译 yocto 项目

```shell
 sudo apt install gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 python3-subunit zstd liblz4-tool file locales libacl1 jq nodejs npm
 sudo locale-gen en_US.UTF-8
```

**步骤 2**：输入以下指令下载并配置 `balena-seeed-cm4`，最后编译 yocto 项目。

```shell
  git clone https://github.com/Seeed-Studio/balena-seeed-cm4.git
  cd balena-seeed-cm4
  git submodule update --init --recursive
  ./balena-yocto-scripts/build/barys --dry-run
  source layers/poky/oe-init-build-env
  MACHINE=seeed-recomputer-r100x bitbake balena-image
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/0_build_balenaOS.gif" alt="pir" width="700" height="auto" /></div>

**步骤 3**：编译后的镜像名为 `balena-image-seeed-recomputer-r100x.balenaos-img`，位于 `build/tmp/deploy/images/seeed-recomputer-r100x` 目录中。此时，镜像编译完成，下一步是配置它。

:::note
此仓库的默认 balenaOS 版本是 5.3.27+rev1。版本信息位于 `VERSION` 文件中。如果您需要编译其他版本的 balenaOS，请更改 `VERSION` 文件中的内容。
:::

### 配置 R1000-balenaOS

**步骤 1**：进入编译镜像所在的目录，然后进入命令行界面，输入 `balena login`，并登录到 `balena Cloud`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/1_login_balena.gif" alt="pir" width="700" height="auto" /></div>

**步骤 2**：创建一个新的 `Fleet`，选择类型为 `Raspberry Pi 4 (using 64bit os)`

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2.1new_fleet.png" alt="pir" width="700" height="auto" /></div>

**步骤 3**：输入以下命令来预加载镜像

```shell
  balena preload ./balena-image-seeed-recomputer-r100x.balenaos-img --fleet [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2_preload_image.gif" alt="pir" width="700" height="auto" /></div>

**步骤 4**：向 Fleet 注册新设备并生成设备 ID

```shell
balena device register [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/3_regester_dev.gif" alt="pir" width="700" height="auto" /></div>

**步骤 5**：生成配置文件。

```shell
balena config generate --device [uuid] --version 3.0.15+atsss --dev -o config.json
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/4_generate_config.gif" alt="pir" width="700" height="auto" /></div>

**步骤 6**：加载配置文件。

```shell
balena os configure balena-image-seeed-recomputer-r100x.balenaos-img --config config.json  --device [uuid] --version 3.0.15+atsss --dev
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/5_config_image.gif" alt="pir" width="700" height="auto" /></div>

**步骤 7**：复制最终的镜像文件，此镜像可以烧录到 reComputer R1000 中

```shell
cp balena-image-seeed-recomputer-r100x.balenaos-img recomputer_balenaos-dev.img
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/6_rename.gif" alt="pir" width="700" height="auto" /></div>

### 刷写 balena OS 的步骤

**步骤 1**：打开 [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) 软件，然后系统将显示新磁盘

**步骤 2**：打开刷写工具 [balenaEtcher](https://etcher.balena.io/)，选择 balena 镜像文件，然后选择目标磁盘，最后点击烧录。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

**步骤 3**：烧录完成后，重启 R1000。稍等片刻，您将在 balena Cloud 上看到新设备成功上线。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/7_online.png" alt="pir" width="700" height="auto" /></div>

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
