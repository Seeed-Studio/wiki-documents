---
description: balena 是一个多功能的物联网平台，开发者可以轻松地在各种设备架构上构建、部署和管理物联网应用程序，利用容器化部署实现无缝更新和强大的设备管理。由 Raspberry Pi CM4 提供动力的 reComputer R1000 边缘物联网控制器，为高性能边缘计算任务提供了强大的能力。balena 和 reComputer R1000 的结合，为在多样化环境中高效、安全地部署和管理物联网应用程序提供了强大且可扩展的解决方案。
title: 使用 balena 的 reComputer R1000
keywords:
  - 边缘计算
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_r1000_balena
last_update:
  date: 06/17/2024
  author: ShuishengPeng 和 Kasun Thushara
---

## 什么是 balena？

[balena](https://www.balena.io/) 是一个物联网 (IoT) 平台，旨在帮助开发者在一系列设备上构建、部署和管理物联网应用程序。它支持多种设备架构，并包含容器化应用程序部署功能，使您能够轻松更新物联网软件和 HostOS，修复错误并为物联网应用程序引入新功能。balena 提供了一种统一的方法来推送代码更新、管理设备配置，并确保设备无论身处何地或网络条件如何，都能可靠且安全地运行。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## 入门指南

在开始此项目之前，您可能需要提前准备好硬件和软件，如下所述。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件

* 一个 [balenaCloud](https://balena.io) 账户（在此注册），前 10 台设备免费。
* [balenaEtcher](https://etcher.balena.io/) 用于烧录 CM4 内存。

### 硬件配置

**步骤 1**：需要将 R1000 侧面的开关设置为启动模式，然后为设备通电。

<div class="table-center">

| 开关位置                                                    | 模式        | 描述            | nRPI-BOOT |
| ----------------------------------------------------------- | ----------- | --------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 普通模式    | 从 eMMC 启动    | 低电平    |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 烧录模式    | 从 USB 启动     | 高电平    |

</div>

**步骤 2**：请使用 USB Type-C 数据线将 reComputer R1000 连接到您的计算机。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### 镜像文件获取

**步骤 1**：访问 balenaCloud，创建一个免费账户，然后创建一个 fleet，默认设备类型选择 `Raspberry Pi CM4 IO Board`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/create_fleet.gif" alt="pir" width="700" height="auto" /></div>

**步骤 2**：点击“Add device”，选择您想要的版本信息和配置信息，然后在右下角下载 balenaOS 镜像文件。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dowload_img.gif" alt="pir" width="700" height="auto" /></div>

:::note
建议先下载 balenaOS 镜像文件再进行烧录。如果直接点击窗口右下角的“Flash”进行烧录，可能会导致烧录失败。
:::

### 烧录 balena OS 的步骤

**步骤 1**：打开 [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) 软件，系统会显示一个新磁盘。

**步骤 2**：打开烧录工具 [balenaEtcher](https://etcher.balena.io/)，选择之前下载的 balena 镜像文件，然后选择目标磁盘，最后点击烧录。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

### 修改配置

**步骤 1**：将 [reComputer-R100x.dtbo](https://files.seeedstudio.com/wiki/reComputer-R1000/balena/reComputer-R100x.dtbo) 文件复制到 `resin-boot => overlays` 文件夹中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dtbo_file.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：在 `config.txt` 文件中添加以下内容：
```shell
dtparam=i2c_arm=on
dtoverlay=i2c1,pins_44_45
dtoverlay=i2c3,pins_2_3
dtoverlay=i2c6,pins_22_23
dtoverlay=audremap,pins_18_19
dtoverlay=reComputer-R100x,uart2
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/change_config.png" alt="pir" width="700" height="auto" /></div>

**步骤 3**：将 reComputer R1000 的 DIP 开关设置为普通模式，然后重新通电。稍等片刻后，您可以在 balenaCloud 上看到新设备已成功添加。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/device_online.png" alt="pir" width="700" height="auto" /></div>

如果设备显示为 `Online (Heartbeat only)`，这可能是由于我所在地区的防火墙限制。如果您遇到相同的问题，可以为设备连接 VPN，以便其能够正常显示为 `Online`。

### 部署测试
**步骤 1**：输入以下命令以下载资源并进行部署：
```shell
balena login
git clone https://github.com/mpous/seeed-recomputer-r100x.git
cd seeed-recomputer-r100x
balena push recomputerR1000
```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/push_program.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/updating_two.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：部署完成后，终端上会出现一只独角兽，并且所有服务的状态将变为 `Running`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/unicorn.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Deployment_Complete.png" alt="pir" width="700" height="auto" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>