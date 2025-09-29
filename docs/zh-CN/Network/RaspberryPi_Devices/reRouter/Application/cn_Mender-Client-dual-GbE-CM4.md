---
description: 在双千兆以太网 CM4 上使用 Mender 客户端
title: Mender 使用指南
keywords:
- 软件 Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Mender-Client-dual-GbE-CM4
last_update:
  date: 2023/1/13
  author: jianjing Huang
---

我们可以在 Raspberry Pi Compute Module 4 的双千兆以太网载板上设置 Mender 客户端，然后从托管或自托管的 Mender 服务器接收 OTA 更新。

本指南重点介绍在运行通过 Yocto Project 编译的自定义 Linux 系统的 RPi CM4 双千兆以太网载板上使用 Mender。

## 测试结果

下表中的 Yocto Project 版本已由 Mender 社区测试。如果您在其他 [Yocto Project 版本](https://wiki.yoctoproject.org/wiki/Releases?target=_blank)上测试了此集成，请更新此表：

| Yocto Project | 构建 | 运行时 |
|---|---|---|
| dunfell (3.1 / 5.3.0) | 测试通过 | 测试通过 |

**构建** 表示使用此 Mender 集成的 Yocto Project 构建完成且无错误，并输出镜像。  
**运行时** 表示已验证 Mender 在板上正常工作。对于基于 U-Boot 的板，已验证 [集成检查清单](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank)。

## 前置条件

- 在您的工作站/笔记本电脑上安装支持的 Linux 发行版及其依赖项，具体描述见 [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros)
  - 注意：具体说明取决于您打算使用的 Yocto 版本。
- [适用于 RPi CM4 的双千兆以太网载板](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)

## 配置构建

### 设置 Yocto 环境

创建一个目录以存放 `mender-dual-gbe-cm4` 设置，并克隆元信息。

```
mkdir mender-dual-gbe-cm4 && cd mender-dual-gbe-cm4
```

获取所有必要的层：

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

为了与 meta-raspberrypi 兼容，将 poky 的 gstreamer 版本更改为最新版本：

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```

修改 meta-raspberrypi 以避免编译错误：

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

修改 meta-mender 以避免编译错误：

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

### 设置构建环境

初始化构建环境：

```
source layers/poky/oe-init-build-env 
```

添加 Yocto 项目层：

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### 配置 Mender 服务器 URL（可选）

此部分不是成功构建的必要条件，但默认生成的镜像仅适用于 [独立部署](https://docs.mender.io/architecture/standalone-deployments?target=_blank)中的 Mender 客户端，因为缺少服务器配置。

您可以编辑 `conf/local.conf` 文件以提供您的 Mender 服务器配置，确保生成的镜像和 Mender Artifacts 能够连接到您正在使用的 Mender 服务器。生成的 `conf/local.conf` 文件中应该已经有一个注释部分，您可以简单地取消注释相关配置选项并为其分配适当的值。

为托管 Mender 构建：

```
# 获取您的租户令牌：
#    - 登录 https://hosted.mender.io
#    - 点击右上角的邮箱地址，然后选择 "My organization"
#    - 点击 "COPY TO CLIPBOARD"
#    - 将剪贴板内容分配给 MENDER_TENANT_TOKEN
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<复制令牌到此处>"
```

为 Mender Demo Server 构建：

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<Mender Demo Server 的 IP 地址>"
```

为 Mender 生产/自托管（本地部署）构建：

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# 取消注释以下内容并更新 URL 以匹配您配置的域名，并提供生成的 server.crt 文件的路径。
#
# 请注意，仅当您使用自签名证书时才需要自定义 server.crt 文件。
#
# 注意！建议您在自定义 Yocto 层中提供以下信息，此处仅用于演示目的。有关更多信息，请参阅链接文档。
MENDER_SERVER_URL = "<自托管 Mender 服务器的 URL>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<包含 server.crt 的目录>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## 构建镜像

现在可以开始构建镜像：

```
MACHINE="dual-gbe-cm4-mender" bitbake core-image-base
```

将 `core-image-base` 替换为您需要的镜像目标。

## 使用构建输出

构建成功后，生成的镜像和构建工件如下：

- `build/tmp/deploy/images/dual-gbe-cm4-mender/core-image-base-dual-gbe-cm4-mender.sdimg.bz2`

如果您的设备上已经运行了 Mender，并希望使用此构建部署 rootfs 更新，则应使用 `.mender` 后缀的 [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank) 文件。您可以通过以下两种方式部署此 Artifact：
- 在托管模式下通过 Mender 服务器（在服务器 UI 的 Releases 中上传）。
- 或者仅使用 Mender 客户端在 [独立部署](https://docs.mender.io/architecture/standalone-deployments?target=_blank) 中进行部署。

## 刷写说明

请参考 [此 Wiki 指南](https://wiki.seeedstudio.com/cn/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/#flash-to-emmc-cm4-emmc-version)，了解如何将上述镜像刷写到板载 eMMC。

刷写完成后，当您打开 reTerminal 时，它将从编译的镜像启动。

## 启动成功

如果您从 UART 中看到以下日志，则表示系统已成功启动：

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

Poky (Yocto Project Reference Distro) 3.1.12 dual-gbe-cm4-mender ttyS0

dual-gbe-cm4-mender login: root
root@dual-gbe-cm4-mender:~#
```

## 资源

- **[网页]** [Mender 官方文档](https://docs.mender.io)

- **[网页]** [Yocto 官方文档](https://docs.yoctoproject.org)

- **[网页]** [Raspberry Pi CM4 官方文档](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>