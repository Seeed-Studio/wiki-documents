---
description: 如何为 Seeed 的 Jetson BSP 构建驱动模块
title: 如何为 Seeed 的 Jetson BSP 构建驱动模块
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /cn/how_to_build_the_ko_module_for_seeed_jetson
last_update:
  date: 09/24/2025
  author: Dayu
---


**当 reComputer/reServer 中没有所需的 `.ko` 驱动模块时，您可以在 Jetson 上编译驱动模块并加载它。本 wiki 演示了具体步骤和重要注意事项，以 JetPack 6.2 为例。**

## 1. 准备工作空间

本文以 **L4T 36.4.3**（对应 **JetPack 6.2** BSP）为例，展示如何在 **reComputer/reServer** 上为 `pl2303`（USB 转串口相关驱动）编译 .ko 驱动模块。

:::tip
本教程在 Jetson 上下载源代码并编译 `.ko` 内核模块。
:::


首先，根据您的 L4T 版本从 NVIDIA 官方网站下载 BSP 源代码。

如果您不确定 L4T 版本和 JetPack 版本之间的关系，可以参考此链接：
https://developer.nvidia.com/embedded/jetpack-archive。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

搜索您要编译的特定 **L4T (Linux for Tegra)** 版本，例如：
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

从 NVIDIA 网站下载相应的 BSP 源代码：
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-src.png"/>
</div>

将下载的 BSP 源代码压缩包放入您的工作目录，然后在终端中运行以下命令完全解压：
```python
# First extract the main file
tar -xjf public_sources.tbz2

# Enter the extracted directory
cd Linux_for_Tegra/source

# Recursively extract all .tbz2, .tar.bz2, .tar.gz, .tgz, .tar.xz files
find . -type f \( -name "*.tbz2" -o -name "*.tar.bz2" -o -name "*.tar.gz" -o -name "*.tgz" -o -name "*.tar.xz" \) -exec bash -c '
    dir=$(dirname "$1")
    filename=$(basename "$1")
    cd "$dir"
    if [[ "$filename" == *.tbz2 || "$filename" == *.tar.bz2 ]]; then
        tar -xjf "$filename"
    elif [[ "$filename" == *.tar.gz || "$filename" == *.tgz ]]; then
        tar -xzf "$filename"
    elif [[ "$filename" == *.tar.xz ]]; then
        tar -xJf "$filename"
    fi
    cd - > /dev/null
' _ {} \;
```


解压所有压缩包后，导航到 `Linux_for_Tegra/source` 并根据关键词定位驱动源代码路径：
```python
sudo find . -type f -name "*<keyword>*"

# For exmaple:
sudo find . -type f -name "*pl2303*"
```
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/path-pl2303.png"/>
</div>

创建一个新的编译工作空间。根据终端中打印的源代码路径，将驱动源代码复制到此工作空间中。

然后，在工作空间内创建一个用于编译的 `Makefile`，内容如下：
```cpp
obj-m   += pl2303.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
```
这里，`pl2303.o` 应该替换为您要编译的驱动的相应名称。

工作空间将类似于下图，包含源文件和 `Makefile`：
<div align="center">
<img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/wkspace-ko.png"/>
</div>

在编译之前，您需要建立一个符号链接：
```python
# Remove existing redundant directory if it exists
sudo rm -r /lib/modules/$(uname -r)/build

# Create symbolic link
sudo ln -s /usr/src/linux-headers-$(uname -r)-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source /lib/modules/$(uname -r)/build
```

创建符号链接后，在您的工作空间中运行以下命令来编译并获得 `.ko` 驱动模块：
```bash
make
```

编译后，`.ko` 文件将在当前目录中生成：
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/compiled-ko.png"/>
</div>


接下来，将 `.ko` 文件复制到正确的目标路径：
```bash
sudo cp pl2303.ko /lib/modules/$(uname -r)/kernel/drivers/usb/serial/
```

对于编译的 `.ko` 驱动模块，目标路径前缀始终是 `/lib/modules/$(uname -r)/kernel/`。后缀取决于驱动模块的类型，可以从源代码的相对路径推断出来，这给出了完整的目标路径：
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/mark_path.png"/>
</div>


复制到目标路径后，加载 `.ko` 驱动模块：
```python
sudo depmod -a
sudo modprobe pl2303
```

成功加载后，您可以运行 `modinfo <driver_name>` 来验证：
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/modinfo-pl.png"/>
</div>




## 资源

- [Seeed 的 L4T 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
