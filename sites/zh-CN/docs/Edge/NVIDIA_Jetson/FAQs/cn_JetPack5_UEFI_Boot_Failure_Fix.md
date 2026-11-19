---
description: 修复运行 JetPack 5.1.3（L4T 35.5.0）的部分 Seeed reComputer 和 reServer Orin 设备的重复启动失败问题。
title: 修复 Jetson 上 JetPack 5.1.3 的 UEFI 启动失败
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
url: https://wiki.seeedstudio.com/cn/jetpack5_uefi_boot_failure_fix/
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

## 问题

:::info 上游 NVIDIA UEFI 问题
**此启动失败是由上游 NVIDIA UEFI 固件缺陷导致的，影响 JetPack 5.1.3 及更早版本。** 该问题并非由 Seeed 产品硬件或载板设计引起。本 FAQ 为下方列出的受影响 Seeed 设备提供修复方案。
:::

在下列产品上，JetPack 5.1.3（Jetson Linux 35.5.0）在多次启动循环后可能会停止启动。NVIDIA 论坛讨论中报告了相关的 Orin 启动失败和 OP-TEE 分区损坏问题：

- [Orin NX fails to boot: corrupted OP-TEE partition](https://forums.developer.nvidia.com/t/orin-nx-fail-to-boot-corrupted-op-tee-partition/344068/6)
- [Orin on JetPack 5.1.3](https://forums.developer.nvidia.com/t/orin-5-1-3/293414)

此问题适用于运行 L4T 35.5.0 的以下产品系列：

- reComputer Classic J40/J30，包括 B 版本
- reComputer Industrial J40/J30
- reServer Industrial J40/J30

请选择以下修复方案之一。如果设备无法启动进入 Ubuntu，请使用 **方案 1**。如果仍然可以启动进入 Ubuntu 用户空间，**方案 2** 可以避免使用主机 PC 进行刷机。

## 方案 1：重新刷写已打补丁的 QSPI MFI 包

此操作会在 QSPI 中更新已打补丁的 bootloader，并保留 SSD 上存储的用户数据。从下方选项卡中为你的具体设备下载**已打补丁的仅 QSPI MFI 包**。主机环境准备、恢复模式操作和刷机命令与 [Flash JetPack summary](/cn/flash/jetpack_to_selected_product) 中的内容一致。

### 下载已打补丁的 QSPI MFI 包

下列所有包均适用于 **JetPack 5.1.3 / L4T 35.5.0**。在下载前，请同时匹配产品系列和 Jetson 模组。Classic 包同样支持对应的 B 版本。

<Tabs groupId="jetpack5-uefi-boot-fix">
  <TabItem value="classic" label="reComputer Classic J40/J30 (B)">

| 产品 | Jetson 模组 | 已打补丁的 QSPI MFI 包 |
| --- | --- | --- |
| reComputer Classic J3010 / J3010B | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAqlWDz2zdIRZKTVBYDWkCHAX3Cz55AFZluL4k7ml1ddZk) |
| reComputer Classic J3011 / J3011B | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCoN2fwkuk_Qp5bKVJOOQgBAZKpVXjhD8asNo9l1gmy2uk) |
| reComputer Classic J4011 / J4011B | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBmviQxqpvjSJFj98iAARcVAcs8ehTPyhIId-nYvsQmJ-Y) |
| reComputer Classic J4012 / J4012B | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDV-rfRgCdSRpnIEO0G00BdAb0piBnU_A8oIftLalLDYw4) |

  </TabItem>
  <TabItem value="industrial" label="reComputer Industrial J40/J30">

| 产品 | Jetson 模组 | 已打补丁的 QSPI MFI 包 |
| --- | --- | --- |
| reComputer Industrial J3010 | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAyzO4DsGOTSYfgFJZ1TDaLAWaqXLTo0gTJzmxebidhIfs) |
| reComputer Industrial J3011 | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQB8H6RGWd6JT6tGJLP8v_pYAZSViOD-LH0swDgxMk9CKq0) |
| reComputer Industrial J4011 | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBifqhryNZPSaPDNqFZ8yeiAfOWUyOzMor_z-96wZfkoEg) |
| reComputer Industrial J4012 | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBeemJ7ciR2RLeYG1DI1NvLAcl7uSxwhMXeomUBt_YK75Q) |

  </TabItem>
  <TabItem value="reserver" label="reServer Industrial J40/J30">

reServer Industrial 的已打补丁 QSPI MFI 下载链接正在准备中。一旦添加链接，本选项将适用于以下型号：

| 产品 | Jetson 模组 | 已打补丁的 QSPI MFI 包 |
| --- | --- | --- |
| reServer Industrial J3010 | Orin Nano 4GB | 下载链接待定 |
| reServer Industrial J3011 | Orin Nano 8GB | 下载链接待定 |
| reServer Industrial J4011 | Orin NX 8GB | 下载链接待定 |
| reServer Industrial J4012 | Orin NX 16GB | 下载链接待定 |

  </TabItem>
</Tabs>

### 准备主机并进入恢复模式

在下方选择准确的产品和 **R35.5.0 (JetPack 5.1.3)**，以显示其主机要求和恢复模式操作说明，这些内容复用自 [Flash JetPack summary](/cn/flash/jetpack_to_selected_product)。在刷机前，请先安装该指南中列出的主机依赖。刷机步骤中请使用上面下载的已打补丁仅 QSPI 包。

<BootloaderProductSelect />

<PrepareRequirementsClassic lang="en" />
<PrepareRequirementsIndustrial lang="en" />
<PrepareRequirementsReserver lang="en" />
<RecoveryClassic lang="en" />
<RecoveryIndustrial lang="en" />
<RecoveryReserver lang="en" />

### 解压并刷写

在主机 PC 上，解压下载的已打补丁 QSPI MFI 压缩包。将 `<patched-qspi-mfi-archive>` 替换为其实际文件名，将 `<extracted-mfi-directory>` 替换为包含 `tools/kernel_flash/l4t_initrd_flash.sh` 的解压目录。

```bash
sudo tar xpf <patched-qspi-mfi-archive>
cd <extracted-mfi-directory>
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

等待刷写成功完成，然后重启 Jetson，确认它可以从现有 SSD 启动。

## 方案 2：在 Ubuntu 用户空间更新 bootloader

当 Jetson 仍然可以启动进入 Ubuntu 时使用此方案。它会在设备上安装提供的 bootloader 软件包，而无需重新刷写系统。

1. 将 [reComputer Orin bootloader 软件包](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDDc4wU3676Qp3FC4MmwLwjAShNzdHT0PjqdNQnBMZ64OA?e=miBcQj) 下载到 Jetson 上。
2. 在终端中切换到包含已下载文件的目录并安装它：

   ```bash
   sudo dpkg -i ./nvidia-l4t-bootloader-recomputer-orin_35.5.0-recomputer20261110.1_arm64.deb
   ```

3. 确认已安装预期版本的 bootloader 软件包：

   ```bash
   sudo dpkg -l | grep nvidia-l4t-bootloader
   ```

   输出中应包含以下软件包及其版本：

   ```text
   nvidia-l4t-bootloader-recomputer-orin  35.5.0-recomputer20261110.1  arm64
   ```

4. 重启 Jetson，并确认其可以正常启动。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
