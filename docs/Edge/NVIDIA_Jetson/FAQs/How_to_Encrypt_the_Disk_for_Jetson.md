---
description: How to Encrypt the Disk for Jetson
title: How to Encrypt the Disk for Jetson
keywords:
- jetson
- encrypt
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /how_to_encrypt_the_disk_for_jetson
last_update:
  date: 10/11/2025
  author: Dayu
---

**This wiki takes L4T 36.4.3 and reComputer J401 as examples, providing reference steps for Jetson disk encryption.
The disk encryption process must be performed during flashing. If your disk needs to be encrypted, you will have to reconfigure and re-flash the system.**

**Before flashing, ensure that you have a properly built image source, as detailed in the following steps.**

## 1. Prepare workspace

This section takes **L4T 36.4.3** as an example to demonstrate how to build the source code project and compile it. The same process applies to other versions—simply **replace the version number in the subsequent example commands with your desired build version**.

Before getting start, you need to prepare an **Ubuntu 20.04/22.04 PC host**.

If you're unsure about the relationship between L4T versions and JetPack versions, you can refer to this link:
https://developer.nvidia.com/embedded/jetpack-archive.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

Search for the specific **L4T (Linux for Tegra)** release you want to compile, e.g.:
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

Extract the official BSP from NVIDIA, and you will get a directory named `Linux_for_Tegra`. Then, extract the root file system archive into the official `Linux_for_Tegra` directory:

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

Sync the source code for compiling. Replace the argument after `-t` with **the L4T version you want**:

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
```

Exit to the root directory of your workspace. Git clone the source code of your desired branch to your local machine using the following command
(replace `-b <branch name>` with the target branch):

```bash
sudo apt update
sudo apt install git-lfs
cd ../..
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
```

The BSP source code for Seeed's Jetson is available in **this [GitHub repository](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/main).**
You can check the different branches to find your desired L4T version, as each branch corresponds to a different L4T release.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/github_L4T.jpg"/></div>

Then overwrite the original source code:

```bash
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

Apply necessary changes to rootfs:

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
```

Install dependencies on your PC:

```bash
sudo apt-get update
sudo apt-get install build-essential flex bison libssl-dev
sudo apt-get install sshpass
sudo apt-get install abootimg
sudo apt-get install nfs-kernel-server
sudo apt-get install libxml2-utils
sudo apt-get install qemu-user-static
```

prepare work for kernel build:

```bash
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=/your_path/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

Compile and build kernel:

```bash
cd source
./nvbuild.sh
```

Install new kernel dtbs and drivers:

```bash
./do_copy.sh
export INSTALL_MOD_PATH=/your_path/Linux_for_Tegra/rootfs/
./nvbuild.sh -i
```




## 2. Encrypted File Generation and Flashing Guide

Enter the previously prepared and compiled source directory:
```bash
cd Linux_for_Tegra
```


Install dependencies：
```python
sudo apt-get install python3-cryptography python3-cffi-backend libxml2-utils 
sudo apt-get install python3-pycryptodome python3-crypto
sudo apt-get install cryptsetup


pip install cryptography
pip install pycrypto
pip install --user --upgrade pycryptodome
```

Generate encrypted files based on `OPTEE`. Execute the following commands to generate the encrypted files `eks_t234.img` and `sym2_t234.key`: 

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

Copy the `eks_t234.img` and `sym2_t234.key` to the specified directories in your source folder: 
```python
cp eks_t234.img /your_path/cd Linux_for_Tegra/bootloader/
sudo cp sym2_t234.key /your_path/Linux_for_Tegra
```

The following example demonstrates how to generate the image using the `reComputer J401` as an example:
```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --network usb0 \
  --no-flash \
  --showlogs \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  recomputer-orin-j401 \
  internal
```
Replace `recomputer-orin-j401` with the name of the device you are using. You need to provide a valid `device name` as a parameter, which you can find by checking the .conf filenames in the root directory of `Linux_for_Tegra`. The prefix of these filenames corresponds to the valid `device name` parameters.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png
"/></div>

:::tip
For JetPack 5, since the file paths are different, you need to modify the `-p` parameter to:
`-p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"`
:::

Therefore, the available device name parameters for **L4T 36.4.3** are as follows. The **j40** and **j30** series use the same configuration file:

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 also uses this `device name` as the parameter.)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401


Copy `eks_t234_sigheader.img.encrypt` to the target directory:

```python
sudo cp bootloader/eks_t234_sigheader.img.encrypt ./tools/kernel_flash/images/internal/
```

In the Linux_for_Tegra directory, run the following command to flash the encrypted root filesystem.
Again, replace `recomputer-orin-j401` with the corresponding device name for your board.

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

During this flashing process, the storage on your Jetson device will be encrypted.

:::warning
Please make sure to keep the encryption files generated by `OPTEE` securely, as they will be required later for decryption.
:::

## 3. Retrieve the Decryption Password

In the previously built source directory `Linux_for_Tegra`, copy the `sym2_t234.key` file to the following location:

```python
cp source/tegra/optee-src/nv-optee/optee/samples/hwkey-agent/host/tool/gen_ekb/sym2_t234.key source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase
```

Then, generate the decryption password based on the `UUID` and `BR_CID` obtained during the flashing process:

```python
cd source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase


python3 gen_luks_passphrase.py -k sym2_t234.key -c "UUID of the disk" -u -e "BR_CID"
# For example
python gen_luks_passphrase.py -k sym2_t234.key -c "551df6eb-fa80-431c-bb54-121481e53bae" -u -e '0x80012344705E01D15C00000015020180'
```

The values of `UUID` and `BR_CID` can be found in the log files under Linux_for_Tegra/initrdlog.
Locate the corresponding log file based on the timestamp of your flashing operation to retrieve these values.

| BR CID | UUID |
|:--:|:--:|
| <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/BR CID.png"/> | <img width="340" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/UUID.png"/> |

`gen_luks_passphrase.py`will briefly display the decryption password in the terminal — please make sure to record it immediately before it disappears.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/password.png
"/></div>

## Resources

- [Source code of Seeed's L4T](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
