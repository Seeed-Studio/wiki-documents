---
description: balena 是一个多功能的物联网平台，使开发者能够轻松地在各种设备架构上构建、部署和管理物联网应用程序，利用容器化部署实现无缝更新和强大的设备管理。reComputer R1000 边缘物联网控制器由 Raspberry Pi CM4 驱动，为要求苛刻的边缘计算任务提供高性能能力。balena 和 reComputer R1000 结合在一起，为在多样化环境中高效、安全地部署和管理物联网应用程序提供了强大且可扩展的解决方案。
title: reComputer R1000 与 balena
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_r1000_balena
last_update:
  date: 06/17/2024
  author: ShuishengPeng and Kasun Thushara
---

## 什么是 balena？

[balena](https://www.balena.io/) 是一个物联网（IoT）平台，旨在帮助开发者在设备群中构建、部署和管理物联网应用程序。它支持广泛的设备架构，包括容器化应用程序部署功能，使您能够轻松更新物联网软件和主机操作系统，修复错误并为物联网应用程序引入新功能。balena 提供了一种统一的方式来推送代码更新、管理设备配置，并确保设备在现场可靠、安全地运行，无论其位置或网络条件如何。

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

- 一个 [balenaCloud](https://balena.io) 账户（在此注册）并免费获得前 10 个设备。
- [balenaEtcher](https://etcher.balena.io/) 用于刷写 CM4 存储器。

### 硬件配置

**步骤 1**：您需要将 R1000 侧面的开关设置为启动模式，然后为设备通电

<div class="table-center">

| 开关位置                                              | 模式        | 描述    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 正常模式 | 从 eMMC 启动 | 低       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 刷写模式  | 从 USB 启动  | 高      |

</div>

**步骤 2**：请使用 USB Type-c 线缆将 reComputer R1000 连接到您的计算机。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### 镜像文件获取

**步骤 1**：前往 balenaCloud，创建一个免费账户，然后创建一个 fleet，默认设备类型选择 `Raspberry Pi CM4 IO Board`

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/create_fleet.gif" alt="pir" width="700" height="auto" /></div>

**步骤 2**：点击"Add device"，选择您想要的版本信息和配置信息，然后在右下角下载 balenaOS 镜像文件。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dowload_img.gif" alt="pir" width="700" height="auto" /></div>

:::note
建议先下载 balenaOS 镜像文件然后再烧录。如果直接点击窗口右下角的"Flash"进行烧录，可能会烧录失败。
:::

### 烧录 balena OS 的步骤

**步骤 1**：打开 [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) 软件，然后系统将显示新磁盘

**步骤 2**：打开烧录工具 [balenaEtcher](https://etcher.balena.io/)，选择之前下载的 balena 镜像文件，然后选择目标磁盘，最后点击 Burn。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

### 更改配置

**步骤 1**：将 [reComputer-R100x.dtbo](https://files.seeedstudio.com/wiki/reComputer-R1000/balena/reComputer-R100x.dtbo) 文件复制到 `resin-boot => overlays` 文件夹

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dtbo_file.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：将以下内容添加到 `config.txt` 文件中：

```shell
dtparam=i2c_arm=on
dtoverlay=i2c1,pins_44_45
dtoverlay=i2c3,pins_2_3
dtoverlay=i2c6,pins_22_23
dtoverlay=audremap,pins_18_19
dtoverlay=reComputer-R100x,uart2
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/change_config.png" alt="pir" width="700" height="auto" /></div>

**步骤 3**：将 reComputer R1000 DIP 开关设置为正常模式，然后重新上电。稍等片刻，您可以看到新设备已成功添加到 balenaCloud。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/device_online.png" alt="pir" width="700" height="auto" /></div>

如果设备显示为 `Online (Heartbeat only)`。这是由于我所在地区的防火墙限制。如果您遇到同样的问题，可以为设备连接 VPN，这样它就能正常显示为 `Online`。

### 部署测试

**步骤 1**：输入以下命令下载资源并进行部署：

```shell
balena login
git clone https://github.com/mpous/seeed-recomputer-r100x.git
cd seeed-recomputer-r100x
balena push recomputerR1000
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/push_program.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/updating_two.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：部署完成后，终端上会出现一个独角兽，所有服务的状态都会变为 `Running`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/unicorn.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Deployment_Complete.png" alt="pir" width="700" height="auto" /></div>

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
