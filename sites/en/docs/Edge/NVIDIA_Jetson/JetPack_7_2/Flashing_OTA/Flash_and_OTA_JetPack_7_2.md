---
description: Flash or migrate a supported Seeed Studio Jetson device to JetPack 7.2, using Seeed Jetson DevelopTool for the recommended full-flash workflow and a validated image-based OTA payload for managed deployments.
title: Flash and OTA Upgrade to JetPack 7.2
keywords:
  - JetPack 7.2
  - Jetson Linux 39.2
  - Seeed Jetson DevelopTool
  - Flash Center
  - OTA
  - NVIDIA Jetson
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png
slug: /flash_and_ota_jetpack_7.2
last_update:
  date: 07/31/2026
  author: Seeed Studio
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/flash_and_ota_jetpack_7.2/
---

# Flash and OTA Upgrade to JetPack 7.2

This guide is the primary JetPack 7.2 installation entry for supported Seeed Studio NVIDIA Jetson products. It explains when to perform a clean flash, when an image-based OTA update is appropriate, and how to use **Seeed Jetson DevelopTool Flash Center** as the guided flashing example.

:::info JetPack 7.2 baseline
JetPack 7.2 is based on **Jetson Linux 39.2**, **Ubuntu 24.04**, and **Linux kernel 6.8**. Always select an image built for the exact Jetson module and Seeed carrier board combination.
:::

## Choose the Upgrade Method First

| Method | Recommended use | Data impact | JetPack 7.2 status |
| --- | --- | --- | --- |
| Full flash with Seeed Jetson DevelopTool | New devices, development systems, JetPack 6.x to 7.2 migration, recovery, or BSP replacement | Target system storage is erased | **Recommended default** |
| Manual BSP flash | Custom BSP development, factory automation, or troubleshooting outside the GUI | Target system storage is erased | Supported when using the correct Seeed/NVIDIA BSP and board configuration |
| Image-based OTA | Managed production fleets with a validated source image, target image, board configuration, partition layout, and rollback plan | Application data can be preserved if explicitly designed and tested | Use only when a JetPack 7.2 OTA payload is validated for the exact product and source release |
| `apt upgrade` across JetPack major versions | Not recommended | Unpredictable | Do not use as a JetPack 6.x to 7.2 migration method |

:::caution
For a major migration such as JetPack 6.x to JetPack 7.2, use a full flash unless Seeed explicitly publishes or validates an OTA payload for your exact product, source L4T release, storage device, and partition layout.
:::

## Video: Seeed Jetson DevelopTool Flashing Workflow

The following video demonstrates Seeed Jetson DevelopTool with an NVIDIA Jetson AGX Thor platform. The Flash Center workflow is also representative of supported Seeed Jetson products, but the available device models and firmware versions depend on the current DevelopTool catalog.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/SjXyQ3abxms" title="Seeed Jetson DevelopTool with AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Part 1: Full Flash with Seeed Jetson DevelopTool

### Before You Start

- Confirm that the [JetPack flashing selector](/flash/jetpack_to_selected_product/) or product wiki lists a JetPack 7.2 / L4T 39.2 image for your device.
- Use a stable Ubuntu host. Native Linux is recommended for the most reliable USB recovery connection.
- Prepare at least 20 GB of free host storage; additional space may be needed for downloaded and extracted BSP packages.
- Use a USB data cable connected directly to the correct recovery/flashing port.
- Back up user data, containers, calibration files, application configuration, encryption keys, and custom BSP sources.
- Disconnect unnecessary Jetson recovery-mode devices so the wrong target cannot be selected.

:::warning
Flashing erases the selected Jetson system storage. Confirm the target device, carrier board, module SKU, and storage destination before starting.
:::

### Step 1: Install and Launch DevelopTool

Install the published Python package:

```bash
python3 -m pip install --upgrade seeed-jetson-developer
seeed-jetson-developer
```

Alternatively, install it from source:

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
python3 -m pip install .
seeed-jetson-developer
```

See [DevelopTool Installation](/jetson_developtool_installation/) for the complete host setup.

### Step 2: Open Flash Center

Open **Flash Center** in Seeed Jetson DevelopTool.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png" style={{width:800, height:'auto'}}/>
</div>

### Step 3: Select the Exact Device and JetPack 7.2 Image

Select the exact Seeed product or carrier-board configuration, then select **L4T 39.2 / JetPack 7.2** when it is available for that target.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-select-device.png" style={{width:800, height:'auto'}}/>
</div>

:::caution
Do not select a similarly named board. A Jetson module can be electrically attached to different carrier boards that require different device trees, pinmux settings, power configurations, and peripheral drivers.
:::

If L4T 39.2 is not offered for the selected product, stop and check:

- [Flash BSP with JetPack to Selected Jetson](/flash/jetpack_to_selected_product/)
- [DevelopTool Supported Devices](/jetson_developtool_supported_devices/)
- The product-specific flashing wiki linked from the [JetPack 7.2 Resource Hub](/jetpack_7_2_resource_hub/)

### Step 4: Download, Verify, and Extract the BSP

Click **Download / Extract BSP**. DevelopTool downloads the firmware package, supports resumed downloads, verifies the checksum when provided, and extracts the BSP.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-prepare-bsp.png" style={{width:800, height:'auto'}}/>
</div>

Do not continue if download verification or extraction fails. Delete an incomplete package only after confirming that DevelopTool cannot resume it.

### Step 5: Put the Jetson into Force Recovery Mode

Use the product-specific recovery button or jumper sequence, connect the recovery USB port, and power or reset the device as instructed by its hardware guide.

On the host, verify that NVIDIA recovery USB is present:

```bash
lsusb | grep 0955
```

Jetson Orin recovery device IDs commonly match the `0955:7x23` family. Jetson Thor uses a different recovery ID. The exact value depends on the module.

See [Connect Device](/jetson_developtool_connect_device/) for the DevelopTool USB recovery workflow.

### Step 6: Detect and Confirm the Target

Click **Detect Device**. Before starting the flash, confirm:

- Selected Seeed product and carrier board
- Jetson module and memory configuration
- L4T 39.2 / JetPack 7.2 image
- Target storage device
- USB recovery device
- Backup completion

### Step 7: Start Flashing

Click **Start Flash** and keep both USB and power connected until the process completes.

:::warning
Do not automatically retry a failed flash without first reviewing the failure log. For USB errors, put the device back into Force Recovery Mode, reconnect it directly to the host, and detect the target again.
:::

### Step 8: Complete First Boot

After the device boots:

1. Complete the Ubuntu first-boot setup, or use the [DevelopTool remote initialization workflow](/jetson_developtool_remote_development/) for a headless device.
2. Configure the network and SSH access.
3. Restore application data only after the base system passes validation.

### Step 9: Verify JetPack 7.2

Run:

```bash
head -n 1 /etc/nv_tegra_release
cat /etc/os-release
uname -r
nvcc --version
dpkg -l | grep -E 'nvidia-jetpack|tensorrt|libnvinfer|cudnn'
```

Confirm the following baseline:

- Jetson Linux reports the R39.2 release family.
- The root filesystem reports Ubuntu 24.04.
- The kernel reports the JetPack 7.2 kernel 6.8 line supplied by the image.
- CUDA and TensorRT packages match the target JetPack image.

Then validate Ethernet, Wi-Fi, camera, GMSL, CAN, USB, M.2, GPIO, storage, fan control, and the required power modes.

## Part 2: JetPack 7.2 Image-Based OTA

Image-based OTA updates a deployed Jetson without attaching every device to a flashing host. It is a release-engineering workflow, not a generic package upgrade.

:::danger Current repository payloads are not JetPack 7.2 payloads
The ready-to-use OTA payloads currently documented in [Deploy OTA on reComputer](/deploy_ota_on_recomputer/) upgrade JetPack 5.1.3 systems to JetPack 6.2. Do **not** apply those payloads to JetPack 7.2 devices or use them as JetPack 6.x to 7.2 packages.
:::

### Required OTA Compatibility Inputs

A JetPack 7.2 OTA payload must be generated and validated for all of the following:

- Exact Seeed product and carrier board
- Exact Jetson module SKU and memory configuration
- Exact source L4T release and root filesystem state
- Exact target L4T 39.2 BSP
- Boot storage and partition layout
- Secure Boot, disk encryption, and key configuration
- Custom device tree, kernel, kernel modules, firmware, and root filesystem changes
- Data-preservation list and available free space
- Power-loss recovery and rollback behavior

If any of these inputs differ, build and validate a separate payload.

### Recommended OTA Development Flow

1. Reproduce both the source image and the target JetPack 7.2 image from version-controlled BSP inputs.
2. Flash representative devices with the source image and record partition, bootloader, storage, and security state.
3. Generate the image-based OTA payload using the Jetson Linux 39.2 OTA tools and the matching Seeed board support package.
4. Sign the payload when the production security model requires it.
5. Define only the data that must survive the update; back it up independently before the first production rollout.
6. Test normal update, interrupted download, interrupted installation, low-storage, power-loss, and rollback scenarios.
7. Roll out to a small canary group before expanding the deployment.
8. Verify Jetson Linux, boot slots, application services, peripherals, and AI runtime versions after reboot.

The existing [Deploy OTA on reComputer](/deploy_ota_on_recomputer/) and [Updating Jetson Linux with Image-Based OTA](/updating_jetpack_with_ota/) pages are useful references for the package-generation structure and on-device `nv_ota_start.sh` workflow. Their version-specific commands must be replaced with the correct Jetson Linux 39.2 packages, board configuration, and partition data.

### OTA Device-Side Validation Checklist

Before applying the payload:

```bash
df -h
lsblk -f
head -n 1 /etc/nv_tegra_release
systemctl --failed
```

After the OTA reboot:

```bash
head -n 1 /etc/nv_tegra_release
uname -r
systemctl --failed
journalctl -b -p err
```

Also verify application data, network identity, device certificates, container volumes, hardware interfaces, and the production watchdog.

## JetPack 6.x to 7.2 Migration Checklist

- Rebuild out-of-tree kernel modules against JetPack 7.2 kernel headers.
- Rebuild camera and GMSL drivers for the target BSP.
- Rebuild CUDA extensions and native applications for CUDA 13.
- Rebuild serialized TensorRT engines on JetPack 7.2.
- Recreate Python environments instead of copying the JetPack 6.x environment directory.
- Revalidate containers against the JetPack 7.2 NVIDIA container runtime.
- Restore the [JetPack 7.2 wireless modules](/jetpack72_ax210_ax200_wifi_setup_guide/) when required by the hardware.
- Validate the original power mode before enabling `MAXN_SUPER` or another higher-performance mode.
- Record memory, latency, throughput, temperature, and power before production rollout.

## Troubleshooting

### DevelopTool Reports No Recovery Device

- Confirm the USB cable supports data.
- Use the dedicated recovery/flashing USB port.
- Repeat the product-specific Force Recovery sequence.
- Run `lsusb | grep 0955` on the host.
- Disconnect other Jetson devices in recovery mode.
- Prefer native Ubuntu if WSL2 USB passthrough is unstable.

### The Required JetPack 7.2 Image Is Not Listed

Do not select another carrier board as a workaround. Check the central flashing selector and product wiki, then wait for or request a validated BSP for the exact hardware.

### The Device Does Not Boot After Flashing

- Confirm the image matches the carrier board and module SKU.
- Remove the Force Recovery jumper or release the recovery button.
- Power-cycle the device.
- Capture the UART serial boot log.
- Re-enter recovery mode and review the DevelopTool flash log before re-flashing.

### OTA Fails or Does Not Reboot into JetPack 7.2

- Confirm the payload source and target versions match the device exactly.
- Confirm there is enough free storage for staging and installation.
- Review the OTA logs before retrying.
- Restore the full known-good image if the tested rollback path cannot recover the device.

## Related Resources

- [JetPack 7.2 Resource Hub](/jetpack_7_2_resource_hub/)
- [Flash BSP with JetPack to Selected Jetson](/flash/jetpack_to_selected_product/)
- [DevelopTool Flash Firmware](/jetson_developtool_flash_firmware/)
- [DevelopTool Supported Devices](/jetson_developtool_supported_devices/)
- [Deploy OTA on reComputer](/deploy_ota_on_recomputer/)
- [Updating Jetson Linux with Image-Based OTA](/updating_jetpack_with_ota/)
- [JetPack 7.2 Deep Dive](/jetpack72_deep_dive/)

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
