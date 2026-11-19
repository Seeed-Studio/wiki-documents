---
description: Fix repeated-boot failures on selected Seeed reComputer and reServer Orin devices running JetPack 5.1.3 (L4T 35.5.0).
title: Fix JetPack 5.1.3 UEFI Boot Failure on Jetson
keywords:
  - JetPack 5.1.3
  - UEFI
  - QSPI
  - bootloader
image: https://files.seeedstudio.com/wiki/other/JetPack-513-UEFI.png
slug: /jetpack5_uefi_boot_failure_fix
last_update:
  date: 11/19/2026
  author: Dayu
createdAt: '2026-11-18'
updatedAt: '2026-11-18'
url: https://wiki.seeedstudio.com/jetpack5_uefi_boot_failure_fix/
---

import { useEffect } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ProductSelect } from '@site/src/components/jetson/JetsonSelect';
import { PrepareRequirementsClassic, RecoveryClassic, PrepareRequirementsIndustrial, RecoveryIndustrial, PrepareRequirementsReserver, RecoveryReserver } from '@site/src/components/jetson/FlashCodeBlock';
import { productOptions as sharedProductOptions } from '@site/src/components/jetson/productData';
import { useJetsonStore } from '@site/src/stores/useJetsonStore';

export const affectedProductValues = [
  'j4012classic', 'j4011classic', 'j3011classic', 'j3010classic',
  'j4012industrial', 'j4011industrial', 'j3011industrial', 'j3010industrial',
  'j4012reserver', 'j4011reserver', 'j3011reserver', 'j3010reserver',
];

export const affectedProductOptions = sharedProductOptions
  .filter(({ value }) => affectedProductValues.includes(value))
  .map(({ value, label, l4t, img, interfaceUsage }) => ({
    value,
    label,
    l4t: l4t.filter((version) => version === '35.5.0'),
    img,
    interfaceUsage: interfaceUsage.en,
  }));

export const BootloaderProductSelect = () => {
  const l4t = useJetsonStore((state) => state.l4t);
  const setL4T = useJetsonStore((state) => state.setL4T);

  useEffect(() => {
    useJetsonStore.setState({ product: 'j4012classic', l4t: '35.5.0' });
  }, []);

  useEffect(() => {
    if (l4t !== '35.5.0') {
      setL4T('35.5.0');
    }
  }, [l4t, setL4T]);

  return <ProductSelect options={affectedProductOptions} lang="en" />;
};

![JetPack 5.1.3 UEFI boot failure fix](https://files.seeedstudio.com/wiki/other/JetPack-513-UEFI.png)

## Issue

:::info Upstream NVIDIA UEFI issue
**This boot failure is caused by an upstream NVIDIA UEFI firmware bug affecting JetPack 5.1.3 and earlier releases.** It is not caused by Seeed product hardware or carrier-board design. This FAQ provides fixes for the affected Seeed devices listed below.
:::

On the products listed below, JetPack 5.1.3 (Jetson Linux 35.5.0) may stop booting after repeated startup cycles. NVIDIA forum discussions report related Orin boot failures and OP-TEE partition corruption:

- [Orin NX fails to boot: corrupted OP-TEE partition](https://forums.developer.nvidia.com/t/orin-nx-fail-to-boot-corrupted-op-tee-partition/344068/6)
- [Orin on JetPack 5.1.3](https://forums.developer.nvidia.com/t/orin-5-1-3/293414)

This issue applies to these product families running L4T 35.5.0:

- reComputer Classic J40/J30, including B variants
- reComputer Industrial J40/J30
- reServer Industrial J40/J30

Choose one of the following fixes. If the device cannot boot into Ubuntu, use **Option 1**. If it can boot into Ubuntu user space, **Option 2** avoids host-PC flashing.

## Option 1: Reflash the patched QSPI MFI package

This updates the patched bootloader in QSPI and preserves user data stored on the SSD. Download the **patched QSPI-only MFI package** for your exact device from the tabs below. The host setup, recovery-mode instructions, and flash command follow the [Flash JetPack summary](/flash/jetpack_to_selected_product).

### Download the patched QSPI MFI package

All packages below are for **JetPack 5.1.3 / L4T 35.5.0**. Match both the product family and the Jetson module before downloading. The Classic packages also support the corresponding B variants.

<Tabs groupId="jetpack5-uefi-boot-fix">
  <TabItem value="classic" label="reComputer Classic J40/J30 (B)">

| Product | Jetson module | Patched QSPI MFI package |
| --- | --- | --- |
| reComputer Classic J3010 / J3010B | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAqlWDz2zdIRZKTVBYDWkCHAX3Cz55AFZluL4k7ml1ddZk) |
| reComputer Classic J3011 / J3011B | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCoN2fwkuk_Qp5bKVJOOQgBAZKpVXjhD8asNo9l1gmy2uk) |
| reComputer Classic J4011 / J4011B | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBmviQxqpvjSJFj98iAARcVAcs8ehTPyhIId-nYvsQmJ-Y) |
| reComputer Classic J4012 / J4012B | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDV-rfRgCdSRpnIEO0G00BdAb0piBnU_A8oIftLalLDYw4) |

  </TabItem>
  <TabItem value="industrial" label="reComputer Industrial J40/J30">

| Product | Jetson module | Patched QSPI MFI package |
| --- | --- | --- |
| reComputer Industrial J3010 | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAyzO4DsGOTSYfgFJZ1TDaLAWaqXLTo0gTJzmxebidhIfs) |
| reComputer Industrial J3011 | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQB8H6RGWd6JT6tGJLP8v_pYAZSViOD-LH0swDgxMk9CKq0) |
| reComputer Industrial J4011 | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBifqhryNZPSaPDNqFZ8yeiAfOWUyOzMor_z-96wZfkoEg) |
| reComputer Industrial J4012 | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBeemJ7ciR2RLeYG1DI1NvLAcl7uSxwhMXeomUBt_YK75Q) |

  </TabItem>
  <TabItem value="reserver" label="reServer Industrial J40/J30">

The patched QSPI MFI download links for reServer Industrial are pending. This option will be available for these models once the links are added:

| Product | Jetson module | Patched QSPI MFI package |
| --- | --- | --- |
| reServer Industrial J3010 | Orin Nano 4GB | Download link pending |
| reServer Industrial J3011 | Orin Nano 8GB | Download link pending |
| reServer Industrial J4011 | Orin NX 8GB | Download link pending |
| reServer Industrial J4012 | Orin NX 16GB | Download link pending |

  </TabItem>
</Tabs>

### Prepare the host and enter recovery mode

Select the exact product and **R35.5.0 (JetPack 5.1.3)** below to display its host requirements and recovery-mode instructions, reused from the [Flash JetPack summary](/flash/jetpack_to_selected_product). Install the host dependencies listed in that guide before flashing. Use the patched QSPI-only package downloaded above for the flash step.

<BootloaderProductSelect />

<PrepareRequirementsClassic lang="en" />
<PrepareRequirementsIndustrial lang="en" />
<PrepareRequirementsReserver lang="en" />
<RecoveryClassic lang="en" />
<RecoveryIndustrial lang="en" />
<RecoveryReserver lang="en" />

### Extract and flash

On the host PC, extract the downloaded patched QSPI MFI archive. Replace `<patched-qspi-mfi-archive>` with its actual filename and `<extracted-mfi-directory>` with the extracted directory containing `tools/kernel_flash/l4t_initrd_flash.sh`.

```bash
sudo tar xpf <patched-qspi-mfi-archive>
cd <extracted-mfi-directory>
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Wait for flashing to complete successfully, then restart the Jetson and confirm that it boots from the existing SSD.

## Option 2: Update the bootloader from Ubuntu user space

Use this option when the Jetson still boots into Ubuntu. It installs the supplied bootloader package on the device and does not require reflashing the system.

1. Download the [reComputer Orin bootloader package](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDDc4wU3676Qp3FC4MmwLwjAShNzdHT0PjqdNQnBMZ64OA?e=miBcQj) onto the Jetson.
2. In a terminal, change to the directory containing the downloaded file and install it:

   ```bash
   sudo dpkg -i ./nvidia-l4t-bootloader-recomputer-orin_35.5.0-recomputer20261110.1_arm64.deb
   ```

3. Confirm that the expected bootloader package version is installed:

   ```bash
   sudo dpkg -l | grep nvidia-l4t-bootloader
   ```

   The output should include this package and version:

   ```text
   nvidia-l4t-bootloader-recomputer-orin  35.5.0-recomputer20261110.1  arm64
   ```

4. Reboot the Jetson and confirm that it starts normally.

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
