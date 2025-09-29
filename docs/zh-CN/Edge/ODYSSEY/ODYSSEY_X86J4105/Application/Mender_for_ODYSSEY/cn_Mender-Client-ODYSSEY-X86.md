---
description: 在 ODYSSEY - X86 上安装 Mender 客户端
title: 在 ODYSSEY - X86 上安装 Mender 客户端
keywords:
- 软件 Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Mender-Client-ODYSSEY-X86
last_update:
  date: 2023/1/13
  author: jianjing Huang
---

# 在 ODYSSEY - X86 上安装 Mender 客户端

我们可以在 ODYSSEY - X86 板上设置 Mender 客户端，然后从托管或自托管的 Mender 服务器接收 OTA 更新。

本指南重点介绍如何在运行通过 Yocto 项目编译的自定义 Linux 系统的 ODYSSEY - X86 板上使用 Mender 客户端。

## 测试结果

下表中的 Yocto 项目版本已由 Mender 社区测试。如果您在其他 [Yocto 项目版本](https://wiki.yoctoproject.org/wiki/Releases?target=_blank)上测试了此集成，请更新此表：

| Yocto 项目 | 构建 | 运行时 |
|---|---|---|
| dunfell (3.1 / 5.3.0) | 测试通过 | 测试通过 |

**构建** 表示使用此 Mender 集成的 Yocto 项目构建完成且无错误，并输出镜像。  
**运行时** 表示已验证 Mender 在板上正常工作。对于基于 U-Boot 的板，已验证 [集成检查表](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank)。

## 前提条件

- 在您的工作站/笔记本电脑上安装支持的 Linux 发行版和依赖项，如 [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros) 中所述
  - 注意：具体说明取决于您打算使用的 Yocto 版本。
- [ODYSSEY - X86 板](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)

## 配置构建

### 设置 Yocto 环境

设置您要构建的 Yocto 项目分支：

创建一个目录以存放 `mender-seeed` 设置并克隆元信息。

```
mkdir mender-seeed && cd mender-seeed
```

获取所有必要的层：

```
git clone -b dunfell git://git.yoctoproject.org/poky layers/poky
git clone git://git.yoctoproject.org/meta-intel layers/meta-intel 
git clone -b dunfell https://github.com/mendersoftware/meta-mender layers/meta-mender
git clone -b dunfell https://github.com/openembedded/meta-openembedded  layers/meta-openembedded
git clone https://github.com/Seeed-Studio/meta-odyssey-x86 layers/meta-odyssey-x86
```

### 设置构建环境

初始化构建环境：

```
source layers/poky/oe-init-build-env 
```

添加 Yocto 项目层：

```
bitbake-layers add-layer  ../layers/meta-intel 
bitbake-layers add-layer  ../layers/meta-odyssey-x86 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-oe 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-python 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-networking 
bitbake-layers add-layer  ../layers/meta-mender/meta-mender-core 
bitbake-layers add-layer  ../layers/meta-mender/meta-mender-demo 
```

将 Mender 配置应用到构建环境：

```
CONF_VERSION = "1"
MACHINE = "odyssey-x86-mender"
MENDER_ARTIFACT_NAME = "release-1"
INHERIT += "mender-full"
DISTRO_FEATURES_append = " systemd"
VIRTUAL-RUNTIME_init_manager = "systemd"
DISTRO_FEATURES_BACKFILL_CONSIDERED = "sysvinit"
VIRTUAL-RUNTIME_initscripts = ""
MENDER_STORAGE_DEVICE = "/dev/sda"
MENDER_STORAGE_TOTAL_SIZE_MB_DEFAULT = "4096"
MENDER_BOOT_PART_SIZE_MB = "64"
MENDER_DATA_PART_SIZE_MB = "1024"
MENDER_IMAGE_BOOTLOADER_FILE = "wic-initrd"

IMAGE_FEATURES_append = " \
    ssh-server-openssh \
    "
```

将以上内容添加到您的 `local.conf` 文件中。

### 配置 Mender 服务器 URL（可选）

此部分不是成功构建的必要条件，但默认生成的镜像仅适用于 [独立部署](https://docs.mender.io/architecture/standalone-deployments?target=_blank) 中的 Mender 客户端，因为缺少服务器配置。

您可以编辑 `conf/local.conf` 文件以提供您的 Mender 服务器配置，确保生成的镜像和 Mender 工件连接到您正在使用的 Mender 服务器。生成的 `conf/local.conf` 文件中应该已经有一个注释部分，您可以简单地取消注释相关配置选项并为其分配适当的值。

为托管 Mender 构建：

```
# 获取您的租户令牌：
#    - 登录 https://hosted.mender.io
#    - 点击右上角的您的邮箱，然后选择“我的组织”
#    - 点击“复制到剪贴板”
#    - 将剪贴板内容分配给 MENDER_TENANT_TOKEN
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<复制令牌到此处>"
```

为 Mender 演示服务器构建：

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<Mender 演示服务器的 IP 地址>"
```

为 Mender 生产/自托管（本地）构建：

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
MACHINE="odyssey-x86-mender" bitbake odyssey-image-base
```

将 `odyssey-image-base` 替换为您所需的镜像目标。

## 使用构建输出

构建成功后，生成的镜像和构建工件位于：

- `build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg.bz2`

如果您的设备上已经运行了 Mender，并希望使用此构建部署 rootfs 更新，则应使用 [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank) 文件，这些文件具有 `.mender` 后缀。您可以通过 Mender 服务器的托管模式（在服务器 UI 的 Releases 中上传）或仅使用 Mender 客户端的[独立部署](https://docs.mender.io/architecture/standalone-deployments?target=_blank)来部署此 Artifact。

## 刷写说明

在 ODYSSEY - X86 板上刷写镜像并运行有两种方法。

**方法 1：** 将镜像刷写到连接到 ODYSSEY - X86 板的 USB 闪存驱动器，并从该闪存驱动器启动系统。

**方法 2：** 将镜像刷写到连接到 ODYSSEY - X86 板的 HDD/SSD，并从该 HDD/SSD 运行。

### 方法 1

- **步骤 1.** 根据您的操作系统[下载 balenaEtcher](https://www.balena.io/etcher/)

- **步骤 2.** 将 USB 闪存驱动器插入电脑

- **步骤 3.** 点击 **Flash from file** 并选择 `mender-seeed/build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg.bz2` 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/balena.png" alt="pir" width="600" height="auto"/></p>

- **步骤 4.** 点击 **Select target** 并选择已连接的 USB 驱动器

- **步骤 5.** 最后点击 **Flash**

- **步骤 6.** 将闪存驱动器连接到 ODYSSEY - X86 板并打开电源

- **步骤 7.** 开机时，持续按下 **DELETE 键** 进入 **BIOS 设置**

- **步骤 8.** 进入 **Boot** 部分，将 **Boot Option #1** 设置为 **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 9.** 进入 **Save & Exit** 并选择 **Save Changes and Reset**

现在操作系统将成功从 USB 闪存驱动器启动。

### 方法 2

- **步骤 1.** 按照上述 **方法 1** 的 **步骤 1 - 步骤 9**

- **步骤 2.** 成功启动后，通过执行以下命令关闭板子：

```sh
poweroff
```

**注意：** 刷写后需要启动一次，因为 **data** 分区会扩展以占用闪存驱动器上的剩余空间，我们将使用该空间存储需要刷写到 HDD/SSD 的镜像。

- **步骤 3.** 从 ODYSSEY - X86 上移除闪存驱动器并连接到电脑

- **步骤 4.** 打开终端窗口，将 Yocto 编译生成的 **uefiimg** 文件复制到闪存驱动器的 **data** 分区

```sh
sudo cp mender-seeed/build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg /media/username/data
```

**注意：** 将 **username** 替换为您电脑的用户名

- **步骤 5.** 从电脑移除闪存驱动器并连接到 ODYSSEY - X86 板。同时将外部 HDD/SSD 连接到 ODYSSEY 板。

- **步骤 6.** 板子启动后，在终端窗口中输入以下命令列出磁盘分区：

```sh
fdisk -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/partition.png" alt="pir" width="600" height="auto"/></p>

可以看到连接的 HDD 显示为 **/dev/sdb**

- **步骤 7.** 使用 **dd** 工具将之前复制的 **.uefiimg** 文件刷写到连接的 HDD/SSD

```sh
dd if=/data/odyssey-image-base-odyssey-x86.uefiimg of=/dev/sdb
```

**注意：** 将 **/dev/sdb** 替换为对应连接的 HDD/SSD 的名称

- **步骤 8.** 刷写完成后，关闭 ODYSSEY - X86：

```sh
poweroff
```

- **步骤 9.** 移除 USB 闪存驱动器并打开 ODYSSEY - X86

- **步骤 10.** 开机时，持续按下 **F7** 进入 BIOS 设置

- **步骤 11.** 进入 **BOOT** 部分，将 **Boot Option #1** 设置为 **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 12.** 进入 **Save & Exit** 并选择 **Save Changes and Reset**

现在操作系统将成功从 HDD/SSD 启动。