---
description: This tutorial shows how to flash JetPack on Windows using WSL2.
title: Flash JetPack with WSL2
tags:
  - JetPack
  - WSL2
  - Windows
image: https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png
slug: /ai_robotics_flash_jetpack_with_wsl2
sku: 110110145
last_update:
  date: 02/24/2026
  author: Lorraine
---

# Flash JetPack with WSL2

## Introduction

This tutorial demonstrates how to flash JetPack on Jetson devices using Windows Subsystem for Linux 2 (WSL2). This method allows Windows users to flash JetPack without setting up a dedicated Ubuntu machine.

:::warning
This is **not considered a stable solution** and there won't be active support. If you encounter errors, please use a native Ubuntu host instead.
:::

## Prerequisites

### System Requirements

- **Windows**: Windows 10 1903 (Build 18362.1049 or later) or Windows 11
- **WSL**: WSL2 is required
- **usbipd-win**: Version 4.x and above

### Check Your System

Check your Windows build version:

```bash
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v CurrentBuild
```

Check WSL version:

```bash
wsl -v
```

Check usbipd version:

```bash
usbipd --version
```

### Recommended WSL Distributions

| JetPack Version | Recommended WSL Distributions |
|-----------------|-------------------------------|
| JetPack 4.x     | Ubuntu 18.04                  |
| JetPack 5.x     | Ubuntu 18.04 / Ubuntu 20.04   |
| JetPack 6.x     | Ubuntu 20.04 / Ubuntu 22.04   |

For specific version requirements, please refer to [NVIDIA SDK Manager documentation](https://developer.nvidia.com/sdk-manager#installation_get_started).

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/jetpack_host.png" />
</div>

Install distributions from Microsoft Store or use command line:


```bash
# For example, install Ubuntu 22.04
wsl --install -d Ubuntu-22.04
```

## Setup WSL2 Kernel

### Customized WSL Kernel
A customized WSL kernel is required to support different USB devices. You can either:
- Use the pre-built kernel below
- Build your own kernel following [this guide](https://github.com/dorssel/usbipd-win/wiki/WSL-support)

**Pre-built Kernel Download**: [OneDrive Link](https://seeedstudio88-my.sharepoint.com/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FSeeed%5FTech%5FSupport%5FTemp%2Fwsl%5Fkernel%2FbzImage&parent=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FSeeed%5FTech%5FSupport%5FTemp%2Fwsl%5Fkernel&ga=1)
- SHA256: `f249022feab9372d448d236a4401e087d0f150dd6b3367b571f0b9a703bd2d38`

To verify kernel compatibility, check for RNDIS support after installation.

### Replace Standard WSL Kernel

1. **Shutdown WSL**:

```bash
wsl --shutdown
```

2. **Configure WSL kernel**:

**For Windows 11** (or later Windows 10 builds):
- Open WSL Settings GUI application
- Navigate to settings and configure the custom kernel path

**For all Windows versions**:
Edit the `.wslconfig` file:

```bash
notepad $env:USERPROFILE\.wslconfig
```

Add the following configuration under `[wsl2]`:

```ini
[wsl2]
kernel=D:\\WSL_Kernel\\bzImage
```

:::note
Replace `D:\\WSL_Kernel\\bzImage` with the actual path to your downloaded kernel file.
:::

3. **Restart WSL and verify**:

```bash
# Restart WSL
wsl

# Check kernel information
uname -a

# Check RNDIS features
zcat /proc/config.gz | grep RNDIS
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png" />
</div>

## Flash JetPack

Most flashing steps are identical to native Ubuntu. This example uses reComputer J4012.

**Step 1: Download JetPack**

Download the appropriate JetPack version for your device from the [Seeed Flashing Summary Page](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/). This page provides:
- JetPack images for all Seeed Jetson devices
- Detailed instructions for entering force recovery mode for each device

:::warning
When moving files from Windows to WSL, be careful with file permissions.
:::

Move and verify the file:

```bash
# Move file from Windows drive to WSL storage
mv /mnt/c/Users/seeed/Downloads/mfi_recomputer-<xxxx>.tar.gz ~

# Remove execute permission
chmod -x mfi_recomputer-<xxxx>.tar.gz

# Verify SHA256 checksum
sha256sum mfi_recomputer-<xxxx>.tar.gz
```

:::note
Replace `seeed` with your actual Windows username in the path `/mnt/c/Users/seeed/Downloads/`.
:::

**Step 2: Enter Force Recovery Mode**

:::tip
For device-specific recovery mode instructions (pin locations, button combinations), refer to the [Seeed Flashing Summary Page](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/) and select your device model.
:::

General steps for most devices:

1. **Power off** your Jetson device completely
2. **Short the FEC and GND pins** using a jumper cap or tweezers
3. **Connect the USB-C data cable** to your Windows host
4. **Connect power** to the device
5. **Wait 2-3 seconds**, then remove the jumper cap

Your device will enter force recovery mode.

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png" />
</div>

:::note
The example above shows reComputer J4012. Pin locations vary by device - always check your device's specific documentation.
:::

**Step 3: Attach USB Device to WSL**

Open **PowerShell** or **Windows Terminal** with **Administrator** privileges.

**List USB devices** (in PowerShell):

```powershell
usbipd list
```

:::note
If you see `usbipd: command not found`, make sure usbipd-win is installed and added to your system PATH. You may need to restart your terminal after installation.
:::

You should see your device listed as **APX**, indicating it's in force recovery mode.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list.png" />
</div>

**Bind the device** (in PowerShell):

```powershell
usbipd bind -b 1-1 -f
```

:::note
Replace `1-1` with your actual bus ID shown in the `usbipd list` output.
:::

Use `usbipd list` again to verify the STATE has changed to **Shared(forced)**.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list_shared.png" />
</div>

**Attach to WSL** (in PowerShell):

```powershell
usbipd attach -b 1-1 --wsl --auto-attach
```

You should see output similar to:

```
usbipd: info: Using WSL distribution 'Ubuntu-22.04' to attach; the device will be available in all WSL 2 distributions.
usbipd: info: Using IP address 172.24.240.1 to reach the host.
usbipd: info: Starting endless attach loop; press Ctrl+C to quit.
WSL Attached
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_attach_apx.png" />
</div>

:::tip
Keep this terminal window open. Press `Ctrl+C` only after flashing is complete.
:::

**Verify in WSL**:

Launch WSL in a new terminal and check:

```bash
lsusb
```

You should see output like:

```
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 0955:7323 NVIDIA Corp. APX
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_rndis.png" />
</div>

The device has successfully connected to WSL.

**Step 4: Flash the Device**

Navigate to your JetPack directory and execute the flash command:

Choose the appropriate flashing method based on your device and requirements:

**Option 1: Seeed BSP (Recommended for Seeed Devices)**

For Seeed reComputer devices, use the pre-built Massflash package:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

:::note
Ensure you have installed flash prerequisites:

```bash
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```
:::

**Option 2: NVIDIA SDK Manager**

For NVIDIA official developer kits or when you need SDK components:

**1. Launch SDK Manager:**

```bash
sdkmanager
```

**2. Follow the on-screen instructions** to complete the flashing process.

:::tip
For more detailed SDK Manager instructions on WSL2, refer to the [NVIDIA official documentation](https://docs.nvidia.com/sdk-manager/wsl-systems/index.html).
:::

:::warning
**Known Limitation**: SDK Manager cannot flash to external NVMe/SSD storage devices via WSL2. If you need to flash to an external SSD, use Option 3 (Initrd Flash) or use a native Ubuntu host.
:::

**Option 3: Initrd Flash (For Official NVIDIA Developer Kits)**

For NVIDIA official developer kits (Jetson Orin Nano Developer Kit, etc.):

An example for Jetson Orin Nano Super Developer Kit:

```bash
# Download Jetson Linux
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2

# Download Root Filesystem
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2

# Extract Jetson Linux
tar xpf Jetson_Linux_r36.4.3_aarch64.tbz2

# Extract Root Filesystem
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C ./Linux_for_Tegra/rootfs

# Install prerequisites
sudo ./tools/l4t_flash_prerequisites.sh

# Apply binaries
sudo ./apply_binaries.sh

# Flash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_send_blob.png" />
</div>

:::tip
Replace `jetson-orin-nano-devkit` with your specific device target. Check NVIDIA's documentation for the correct target name.
:::

When the flash process completes successfully, you will see output similar to:

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_success.png" />
</div>

After flashing completes, you can detach the USB device from WSL:

```powershell
usbipd detach -b 1-1
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_detached.png" />
</div>

## Troubleshooting

### USB Device Not Showing in WSL

- Ensure usbipd-win is version 4.x or above
- Verify the device is in force recovery mode (should show as APX)
- Try re-binding the device with the `-f` (force) flag
- **Disable Windows Defender Firewall** or antivirus software temporarily, as they may block USB device access
- Try a different USB port (preferably USB 3.0)

### Flashing Fails or Times Out

- Use a native Ubuntu host if issues persist
- Check USB cable quality and connection (use the original cable if possible)
- Ensure adequate power supply to the Jetson device (use a 5V/4A power adapter)
- Close any other software that might be using the USB device
- Try flashing without `--auto-attach` flag and monitor the connection manually

### Permission Issues

- Always run usbipd commands with **Administrator** privileges
- Verify file permissions when moving files from Windows to WSL
- If you get permission denied errors in WSL, try: `sudo chmod 666 /dev/bus/usb/001/*`

### WSL Kernel Issues

If you see errors about missing USB support:
- Verify the custom kernel is correctly loaded: `uname -r` should show a version different from the standard WSL kernel
- Check RNDIS support: `zcat /proc/config.gz | grep CONFIG_USB_NET_RNDIS`
- If issues persist, rebuild the kernel following the [official guide](https://github.com/dorssel/usbipd-win/wiki/WSL-support)

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
