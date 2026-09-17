---
description: reCamera 集成 ONVIF 服务
title: reCamera 集成 ONVIF 服务
keywords:
  - reCamera
  - onvif
slug: /recamera_onvif
sku: 102991896, 108990119, 100029708
sidebar_position: 6
last_update:
  date: 9/14/2026
  author: yylin
createdAt: '2026-09-14'
updatedAt: '2026-09-14'
url: https://wiki.seeedstudio.com/cn/recamera_onvif/
---

# reCamera 集成 ONVIF 服务

## 介绍

ONVIF 是安防设备常用的互联标准。部署本方案后，局域网内支持 ONVIF 的客户端（例如 Home Assistant、frigate、NVR 或 VMS）可以自动发现 reCamera，并读取设备信息、视频流地址和登录凭据。

实际视频仍通过 RTSP 传输：客户端先通过 ONVIF 找到 reCamera，再使用获取到的 RTSP 地址播放或录制视频。整个过程在本地网络中完成，无需额外的云服务。

本指南将带你完成以下操作：

1. 在 reCamera 上部署 ONVIF 服务
2. 确认 RTSP 视频流能够正常播放
3. 使用 ONVIF 将 reCamera 添加到你的 Home Assistant、NVR 或 VMS

## 硬件准备

开始前，请准备以下设备并确认它们连接到同一个局域网。

| 设备 | 用途 |
| --- | --- |
| 一台 reCamera | 运行 ONVIF 和 RTSP 服务；支持 reCamera 2002 系列、云台版和 HQ PoE 版 |
| 一台 Linux 电脑 | 安装并运行 SenseCraft Solution，用于部署方案；以下示例使用 Ubuntu 24.04 x86_64 |
| Home Assistant、NVR 或 VMS（可选） | 用于发现 reCamera、查看或录制视频 |

> **网络提示：** HQ PoE 版没有 Wi-Fi 功能，请使用支持 PoE 的交换机供电并接入网络。无论使用哪种型号，都请确保 reCamera 与用于发现它的客户端处于同一局域网；跨网段发现通常需要额外配置网络设备。

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera 云台</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div>
  </td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
    </div>
  </td>
 </tr>
</table>


## 安装 SenseCraft Solution

打开 [SenseCraft Solution 下载页](https://www.seeed.cc/category/reference-designs)，点击 **Deploy**，然后选择与你的电脑操作系统和处理器架构匹配的安装包。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-2.png" /></div>

以下以 Ubuntu 24.04 x86_64 为例。打开终端，下载并安装软件：

```bash
wget https://appcenter.seeed.xyz/SenseCraft.Solution/SenseCraft.Solution_amd64.deb

sudo dpkg -i ./SenseCraft.Solution_amd64.deb
```

安装完成后，运行以下命令启动 SenseCraft Solution：

```bash
sensecraft-solution
```

首次启动后会显示 SenseCraft Solution 主界面：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-3.png" /></div>


## 在 reCamera 上部署 ONVIF 服务

### 更新 SenseCraft Solution

为确保能看到最新的 ONVIF 方案，请先更新本地方案列表：在左侧菜单选择 **系统设置**，找到更新选项并完成更新。更新完成后再继续下一步。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-4.png" /></div>

### 部署 ONVIF 方案

1. 在左侧菜单打开 **技术演示**。
2. 在设备筛选中选择 **reCamera**。
3. 找到并打开 **reCamera ONVIF 网关** 方案。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-6.png" /></div>

打开方案后，按界面提示选择目标 reCamera 并完成连接配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-7.png" /></div>

确认设备信息无误后，点击 **部署**。等待部署任务显示成功；此时 reCamera 已启用 ONVIF 服务，并提供带身份验证的 RTSP 视频流。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-8.png" /></div>

### 验证视频流

部署成功后，建议先播放 RTSP 视频流，再将设备添加到 Home Assistant、frigate、NVR 或 VMS。这样可以先排除网络或视频流问题。

你可以使用 VLC，或在 Ubuntu 上使用 `ffplay` 测试。若尚未安装 `ffplay`，先安装 FFmpeg：

```bash
sudo apt install -y ffmpeg

ffplay rtsp://admin:recamera.1@<reCamera_IP>:8554/onvif
```

请将 `<reCamera_IP>` 替换为 reCamera 在局域网中的实际 IP 地址。例如，IP 地址为 `192.168.42.1` 时，命令为：

```bash
ffplay rtsp://admin:recamera.1@192.168.42.1:8554/onvif
```

如果能够看到实时画面，说明 ONVIF 服务和 RTSP 视频流均已正常运行。随后请在你的客户端中添加 ONVIF 摄像头；通常只需选择“自动发现”或“添加 ONVIF 设备”，再输入 reCamera 的 IP 地址、用户名和密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-9.png" /></div>


## 默认凭据与安全说明

本方案默认启用身份验证，默认凭据如下：

| 项目 | 默认值 |
| --- | --- |
| 用户名 | `admin` |
| 密码 | `recamera.1` |
| RTSP 路径 | `/onvif` |

> **重要：** 默认密码仅适合首次验证。若 reCamera 所在网络可被其他人访问，请在实际使用前修改密码，避免未授权访问视频流。

如需修改用户名或密码，请从 GitHub 克隆 [reCamera SDK](https://github.com/yyling0101-a11y/reCamera_2002w_sdk)，并找到 `examples/camera_onvif_rtsp` 目录中的相关配置：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-10.png" /></div>

修改配置后重新编译。详细编译步骤请参考仓库的 [README](https://github.com/yyling0101-a11y/reCamera_2002w_sdk/blob/main/README.md)。将编译后的可执行文件传输到 reCamera，赋予可执行权限并运行，即可使用新的凭据。

## 故障排查

| 问题 | 解决方法 |
| --- | --- |
| 客户端找不到 reCamera | 确认 reCamera、Home Assistant、NVR 或 VMS 在同一局域网；先确认部署任务已成功完成。 |
| 无法播放 RTSP 视频流 | 检查命令中的 IP 地址是否为 reCamera 的实际 IP；确认用户名、密码和路径为 `admin`、`recamera.1`、`/onvif`。 |
| HQ PoE 版无法连接网络 | 确认交换机支持 PoE，且网线同时承担供电和网络连接。 |
| 更新后仍找不到 ONVIF 方案 | 重新打开 SenseCraft Solution，确认已完成方案列表更新后，再选择 **技术演示 > reCamera**。 |

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
