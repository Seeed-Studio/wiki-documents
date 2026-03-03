---
description: 如何为 Jetson 加密磁盘
title: 如何为 Jetson 加密磁盘
keywords:
- jetson
- encrypt
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /cn/how_to_encrypt_the_disk_for_jetson
last_update:
  date: 10/11/2025
  author: Dayu
---

**本教程以 L4T 36.4.3 和 reComputer J401 为例，为 Jetson 磁盘加密提供参考步骤。
磁盘加密过程必须在刷写期间执行。如果您的磁盘需要加密，您将必须重新配置并重新刷写系统。**

**在刷写之前，请确保您有一个正确构建的镜像源，详细步骤如下。**

## 1. 准备工作空间

本节以 **L4T 36.4.3** 为例演示如何构建源代码项目并编译。相同的过程适用于其他版本——只需**将后续示例命令中的版本号替换为您想要构建的版本**。

在开始之前，您需要准备一台 **Ubuntu 20.04/22.04 PC 主机**。

如果您不确定 L4T 版本和 JetPack 版本之间的关系，可以参考此链接：
https://developer.nvidia.com/embedded/jetpack-archive.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

搜索您想要编译的特定 **L4T (Linux for Tegra)** 版本，例如：
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

从 NVIDIA 提取官方 BSP，您将得到一个名为 `Linux_for_Tegra` 的目录。然后，将根文件系统存档提取到官方 `Linux_for_Tegra` 目录中：

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

同步用于编译的源代码。将 `-t` 后的参数替换为**您想要的 L4T 版本**：

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
```

退出到工作空间的根目录。使用以下命令将您所需分支的源代码 Git 克隆到本地机器
（将 `-b <branch name>` 替换为目标分支）：

```bash
sudo apt update
sudo apt install git-lfs
cd ../..
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
```

Seeed 的 Jetson BSP 源代码可在**此 [GitHub 仓库](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/main)** 中获得。
您可以检查不同的分支以找到您所需的 L4T 版本，因为每个分支对应不同的 L4T 版本。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/github_L4T.jpg"/></div>

然后覆盖原始源代码：

```bash
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

对 rootfs 应用必要的更改：

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
```

在您的 PC 上安装依赖项：

```bash
sudo apt-get update
sudo apt-get install build-essential flex bison libssl-dev
sudo apt-get install sshpass
sudo apt-get install abootimg
sudo apt-get install nfs-kernel-server
sudo apt-get install libxml2-utils
sudo apt-get install qemu-user-static
```

为内核构建做准备工作：

```bash
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=/your_path/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

编译和构建内核：

```bash
cd source
./nvbuild.sh
```

安装新的内核 dtbs 和驱动程序：

```bash
./do_copy.sh
export INSTALL_MOD_PATH=/your_path/Linux_for_Tegra/rootfs/
./nvbuild.sh -i
```




## 2. 加密文件生成和刷写指南

进入之前准备和编译的源目录：
```bash
cd Linux_for_Tegra
```


安装依赖项：
```python
sudo apt-get install python3-cryptography python3-cffi-backend libxml2-utils 
sudo apt-get install python3-pycryptodome python3-crypto
sudo apt-get install cryptsetup


pip install cryptography
pip install pycrypto
pip install --user --upgrade pycryptodome
```

基于 `OPTEE` 生成加密文件。执行以下命令生成加密文件 `eks_t234.img` 和 `sym2_t234.key`：

```python
cd source/tegra/optee-src/nv-optee/optee/samples/hwkey-agent/host/tool/gen_ekb

openssl rand -hex 32 > sym_t234.key
openssl rand -hex 16 > sym2_t234.key
openssl rand -hex 16 > auth_t234.key
openssl rand -hex 32 > oem_k1.key

./example.sh
```
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/optee-output.png
"/></div>

将 `eks_t234.img` 和 `sym2_t234.key` 复制到源文件夹中的指定目录：
```python
cp eks_t234.img /your_path/cd Linux_for_Tegra/bootloader/
sudo cp sym2_t234.key /your_path/Linux_for_Tegra
```

以下示例演示如何以 `reComputer J401` 为例生成镜像：
```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --network usb0 \
  --no-flash \
  --showlogs \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  recomputer-orin-j401 \
  internal
```
将 `recomputer-orin-j401` 替换为您正在使用的设备名称。您需要提供一个有效的 `device name` 作为参数，您可以通过检查 `Linux_for_Tegra` 根目录中的 .conf 文件名来找到。这些文件名的前缀对应有效的 `device name` 参数。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png
"/></div>

:::tip
对于 JetPack 5，由于文件路径不同，您需要将 `-p` 参数修改为：
`-p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"`
:::

因此，**L4T 36.4.3** 的可用设备名称参数如下。**j40** 和 **j30** 系列使用相同的配置文件：

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 也使用此 `device name` 作为参数。)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401


将 `eks_t234_sigheader.img.encrypt` 复制到目标目录：

```python
sudo cp bootloader/eks_t234_sigheader.img.encrypt ./tools/kernel_flash/images/internal/
```

在 Linux_for_Tegra 目录中，运行以下命令刷写加密的根文件系统。
再次将 `recomputer-orin-j401` 替换为您板子对应的设备名称。

```python
sudo ROOTFS_ENC=1 \
./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \                  
  -i ./sym2_t234.key \                            
  -c tools/kernel_flash/flash_l4t_t234_nvme_rootfs_enc.xml \  
  -S 80GiB \                                      
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \  
  --showlogs \                                    
  --network usb0 \                                
  recomputer-orin-j401 internal                    
```

在此刷写过程中，您的 Jetson 设备上的存储将被加密。

:::warning
请确保安全保存由 `OPTEE` 生成的加密文件，因为稍后解密时将需要它们。
:::

## 3. 获取解密密码

在之前构建的源目录 `Linux_for_Tegra` 中，将 `sym2_t234.key` 文件复制到以下位置：

```python
cp source/tegra/optee-src/nv-optee/optee/samples/hwkey-agent/host/tool/gen_ekb/sym2_t234.key source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase
```

然后，基于刷写过程中获得的 `UUID` 和 `BR_CID` 生成解密密码：

```python
cd source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase


python3 gen_luks_passphrase.py -k sym2_t234.key -c "UUID of the disk" -u -e "BR_CID"
# For example
python gen_luks_passphrase.py -k sym2_t234.key -c "551df6eb-fa80-431c-bb54-121481e53bae" -u -e '0x80012344705E01D15C00000015020180'
```

`UUID` 和 `BR_CID` 的值可以在 Linux_for_Tegra/initrdlog 下的日志文件中找到。
根据您刷写操作的时间戳找到相应的日志文件以获取这些值。

| BR CID | UUID |
|:--:|:--:|
| <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/BR CID.png"/> | <img width="340" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/UUID.png"/> |

`gen_luks_passphrase.py` 将在终端中短暂显示解密密码——请确保在它消失之前立即记录下来。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/password.png
"/></div>

## 资源

- [Seeed 的 L4T 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)

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
