---
title: 使用 gcc 构建 DSO Nano 固件
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DSO_Nano-gcc/
slug: /cn/DSO_Nano-gcc
last_update:
  date: 02/03/2022
  author: gunengyu
---
# 如何使用 gcc 构建 DSO Nano 固件

[DSO Nano](/cn/DSO_Nano "DSO Nano") 固件可以使用 gcc 工具链进行构建。与 gcc 相关的文件位于固件源代码树的 project/gcc 文件夹中。

## 获取 ARM 交叉编译 gcc 工具链

我们大多数人使用的 ARM 工具链是 ARM 提供的 GCC，可从 &lt;[https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)&gt; 下载。

对于 Linux，你可以选择 tarball 或安装程序。后者的下载量比前者大得多，不知为何。无论如何，请确保工具链的 "bin" 目录在你的路径中。例如，如果你将 tarball 解压到 /opt，请在 shell 中输入以下内容，或者将其添加到你的 .bashrc 或 .pam_environment 文件中：

```
PATH=/opt/gcc-arm-none-eabi-4_6-2012q2/bin:$PATH
```

一旦正确设置了工具链，只需输入以下命令：

```
arm-none-eabi-gcc -v
```

应该会列出编译器版本及其构建选项。如果出现错误，请在继续之前修复工具链安装问题。

如果你无法找到适合你平台的预构建 ARM 工具链，或者希望自己构建工具链，可以下载源码或查看 [https://open-bldc.org/wiki/Building_ARM_Toolchain](https://open-bldc.org/wiki/Building_ARM_Toolchain)。

## 获取并构建固件源代码

目前，可以从 Tormod 的 gitlab 树中获取代码：

```
git clone https://gitlab.com/dsonano/dso-firmware.git
cd dso-firmware
```

如果以后想更新你的代码树到最新的 git：

```
git pull
```

### 编译应用程序部分

```
cd DS0201_APP/project/gcc
make
```

### 编译库部分

```
cd ../../../DS0201_LIB/project/gcc
make clean
make
```

## 测试

使用 [Dfu-util](/cn/Dfu-util "Dfu-util") 将 dso-lib.bin 和 dso-app.bin 文件下载到你的 Nano V1 或 V2。对于 Nano V3 型号，将 dso-lib.hex 和 dso-app.hex 文件逐个复制到 DFU 虚拟 USB 驱动器。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>