---
description: reTerminal 上的 Mender 客户端
title: reTerminal 上的 Mender 客户端
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Mender-Client-reTerminal
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# 在 reTerminal 上安装 Mender 客户端

我们可以在 reTerminal 上设置 Mender 客户端，然后从托管或自托管的 Mender 服务器接收 OTA 更新。

本指南重点介绍如何在运行使用 Yocto 项目编译的自定义 Linux 系统的 reTerminal 上进行设置。

## 测试结果

下表中的 Yocto 项目版本已经过 Mender 社区测试。如果您已在其他 [Yocto 项目版本](https://wiki.yoctoproject.org/wiki/Releases?target=_blank) 上测试了此集成，请更新此表：

| Yocto Project | 构建 | 运行时 |
|---|---|---|
| dunfell (3.1 / 5.3.0) | 测试通过 | 测试通过 |

**构建** 意味着使用此 Mender 集成的 Yocto 项目构建能够无错误完成并输出镜像。
**运行时** 意味着 Mender 已经在开发板上验证可以工作。对于基于 U-Boot 的开发板，[集成检查清单](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank) 已经得到验证。

## 先决条件

- 在您的工作站/笔记本电脑上安装支持的 Linux 发行版和依赖项，如 [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros) 中所述
  - 注意：说明取决于您打算使用的 Yocto 版本。
- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)

## 配置构建

### 设置 Yocto 环境

为您的 `mender-reterminal` 设置创建一个目录，并克隆元信息。

```
mkdir mender-reterminal && cd mender-reterminal
```
获取所有必要的图层：

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git layers/meta-qt5
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

为了与 meta-raspberrypi 兼容，将 poky 的 gstreamer 版本更改为最新版本

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```
修改 meta-raspberrypi 以避免编译错误

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```
修改 meta-mender 以避免编译错误

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```
修改 meta-seeed-cm4 以避免编译错误

```
cd layers/meta-seeed-cm4
sed -i 's/eudev/udev/g' recipes-lvgl/lvgl/lvgl_demo_git.bb
```

### 设置构建环境

初始化构建环境：

```
source layers/poky/oe-init-build-env 
```

Add yocto project layers:

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### 配置 Mender 服务器 URL（可选）

此部分对于成功构建不是必需的，但默认生成的镜像仅适用于在[独立部署](https://docs.mender.io/architecture/standalone-deployments?target=_blank)中使用 Mender 客户端，因为缺少服务器配置。

您可以编辑 `conf/local.conf` 文件来提供您的 Mender 服务器配置，确保生成的镜像和 Mender Artifacts 连接到您正在使用的 Mender 服务器。在生成的 `conf/local.conf` 文件中应该已经有一个注释部分，您可以简单地取消注释相关的配置选项并为它们分配适当的值。

为托管 Mender 构建：

```
# To get your tenant token:
#    - log in to https://hosted.mender.io
#    - click your email at the top right and then "My organization"
#    - press the "COPY TO CLIPBOARD"
#    - assign content of clipboard to MENDER_TENANT_TOKEN
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<copy token here>"
```
为 Mender 演示服务器构建：

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<IP address of Mender demo server>"
```
为 Mender 生产环境/自托管（本地部署）构建：

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# Uncomment below and update the URL to match your configured domain
# name and provide the path to the generated server.crt file.
#
# Note that a custom server.crt file is only necessary if you are using
# self-signed certificates.
#
# NOTE! It is recommend that you provide below information in your custom
# Yocto layer and this is only for demo purposes. See linked documentation
# for additional information.
MENDER_SERVER_URL = "<URL of Self-Hosted Mender Server>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<DIRECTORY-CONTAINING-server.crt>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## 构建镜像

现在您可以继续构建镜像：

```
MACHINE="seeed-reterminal-mender" bitbake rpi-test-image
```

将 `rpi-test-image` 替换为您所需的镜像目标。

## 使用构建输出

成功构建后，镜像和构建产物位于：

- `build/tmp/deploy/images/seeed-reterminal-mender/rpi-test-image-seeed-reterminal-mender.sdimg.bz2`

如果您的设备上已经运行了 Mender 并且想要使用此构建部署 rootfs 更新，您应该使用带有 `.mender` 后缀的 [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank) 文件。您可以通过 Mender 服务器在托管模式下部署此 Artifact（在服务器 UI 的 Releases 下上传），或者仅使用 Mender 客户端进行[独立部署](https://docs.mender.io/architecture/standalone-deployments?target=_blank)。

## 烧录说明

请按照[此 wiki 指南](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)了解如何将上述镜像烧录到 reTerminal 的 eMMC 中。

烧录完成后，当您打开 reTerminal 时，它将从编译的镜像启动。

## 启动成功

如果您从 UART 看到以下日志，这意味着系统已成功启动

```
[  OK  ] Started Kernel Logging Service.
[  OK  ] Started System Logging Service.
[  OK  ] Started D-Bus System Message Bus.
[  OK  ] Started Getty on tty1.
         Starting Telephony service...
[  OK  ] Started Serial Getty on ttyS0.
[  OK  ] Reached target Login Prompts.
[    7.340436] audit: type=1334 audit(1638186061.687:4): prog-id=7 op=LOAD
[    7.347278] audit: type=1334 audit(1638186061.691:5): prog-id=8 op=LOAD
         Starting Login Service...
[  OK  ] Started Save/Restore Sound Card State.
[    7.386306] Bluetooth: Core ver 2.22
[    7.390103] NET: Registered protocol family 31
[    7.394856] Bluetooth: HCI device and connection manager initialized
[[    7.401967] Bluetooth: HCI socket layer initialized
  OK      7.407591] Bluetooth: L2CAP socket layer initialized
0m] Reac[    7.413409] Bluetooth: SCO socket layer initialized
hed target Sound Card.
[  OK  ] Started Telephony service.
[  OK  ] Started Avahi mDNS/DNS-SD Stack.
[  OK  ] Started Login Service.

Poky (Yocto Project Reference Distro) 3.1.12 seeed-reterminal-mender ttyS0

seeed-reterminal-mender login: root
root@seeed-reterminal-mender:~#
```

## 资源

- **[网页]** [Mender 官方文档](https://docs.mender.io)

- **[网页]** [Yocto 官方文档](https://docs.yoctoproject.org)

- **[网页]** [Raspberry Pi CM4 官方文档](https://www.raspberrypi.com/documentation/computers/compute-module.html)

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
