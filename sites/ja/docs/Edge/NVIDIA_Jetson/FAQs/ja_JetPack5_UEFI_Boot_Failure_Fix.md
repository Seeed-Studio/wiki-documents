---
description: JetPack 5.1.3（L4T 35.5.0）を実行している一部の Seeed reComputer および reServer Orin デバイスで発生する、再起動を繰り返すブート失敗を修正します。
title: Jetson 上の JetPack 5.1.3 UEFI ブート失敗の修正
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
url: https://wiki.seeedstudio.com/ja/jetpack5_uefi_boot_failure_fix/
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

## 問題

:::info 上流の NVIDIA UEFI 問題
**このブート失敗は、JetPack 5.1.3 以前のリリースに影響する、上流の NVIDIA UEFI ファームウェアのバグによって引き起こされています。** Seeed 製品のハードウェアやキャリアボード設計が原因ではありません。この FAQ では、以下に示す影響を受ける Seeed デバイス向けの修正方法を提供します。
:::

以下に示す製品では、JetPack 5.1.3（Jetson Linux 35.5.0）が、起動サイクルを繰り返した後にブートしなくなる場合があります。NVIDIA フォーラムのディスカッションでは、関連する Orin のブート失敗と OP-TEE パーティションの破損が報告されています：

- [Orin NX fails to boot: corrupted OP-TEE partition](https://forums.developer.nvidia.com/t/orin-nx-fail-to-boot-corrupted-op-tee-partition/344068/6)
- [Orin on JetPack 5.1.3](https://forums.developer.nvidia.com/t/orin-5-1-3/293414)

この問題は、L4T 35.5.0 を実行している次の製品ファミリに該当します：

- reComputer Classic J40/J30（B バリアントを含む）
- reComputer Industrial J40/J30
- reServer Industrial J40/J30

次のいずれかの修正方法を選択してください。デバイスが Ubuntu をブートできない場合は **オプション 1** を使用します。Ubuntu のユーザ空間までブートできる場合は、**オプション 2** を使用するとホスト PC からのフラッシュを回避できます。

## オプション 1: パッチ適用済み QSPI MFI パッケージを再フラッシュする

これにより、QSPI 内のパッチ適用済み bootloader が更新され、SSD に保存されているユーザーデータは保持されます。以下のタブから、お使いのデバイスに正確に対応する **パッチ適用済み QSPI 専用 MFI パッケージ** をダウンロードしてください。ホストのセットアップ、リカバリモードへの移行手順、およびフラッシュコマンドは、[Flash JetPack summary](/ja/flash/jetpack_to_selected_product) に従います。

### パッチ適用済み QSPI MFI パッケージをダウンロードする

以下のすべてのパッケージは **JetPack 5.1.3 / L4T 35.5.0** 用です。ダウンロード前に、製品ファミリと Jetson モジュールの両方が一致していることを確認してください。Classic パッケージは、対応する B バリアントもサポートします。

<Tabs groupId="jetpack5-uefi-boot-fix">
  <TabItem value="classic" label="reComputer Classic J40/J30 (B)">

| 製品 | Jetson モジュール | パッチ適用済み QSPI MFI パッケージ |
| --- | --- | --- |
| reComputer Classic J3010 / J3010B | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAqlWDz2zdIRZKTVBYDWkCHAX3Cz55AFZluL4k7ml1ddZk) |
| reComputer Classic J3011 / J3011B | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCoN2fwkuk_Qp5bKVJOOQgBAZKpVXjhD8asNo9l1gmy2uk) |
| reComputer Classic J4011 / J4011B | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBmviQxqpvjSJFj98iAARcVAcs8ehTPyhIId-nYvsQmJ-Y) |
| reComputer Classic J4012 / J4012B | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDV-rfRgCdSRpnIEO0G00BdAb0piBnU_A8oIftLalLDYw4) |

  </TabItem>
  <TabItem value="industrial" label="reComputer Industrial J40/J30">

| 製品 | Jetson モジュール | パッチ適用済み QSPI MFI パッケージ |
| --- | --- | --- |
| reComputer Industrial J3010 | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAyzO4DsGOTSYfgFJZ1TDaLAWaqXLTo0gTJzmxebidhIfs) |
| reComputer Industrial J3011 | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQB8H6RGWd6JT6tGJLP8v_pYAZSViOD-LH0swDgxMk9CKq0) |
| reComputer Industrial J4011 | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBifqhryNZPSaPDNqFZ8yeiAfOWUyOzMor_z-96wZfkoEg) |
| reComputer Industrial J4012 | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBeemJ7ciR2RLeYG1DI1NvLAcl7uSxwhMXeomUBt_YK75Q) |

  </TabItem>
  <TabItem value="reserver" label="reServer Industrial J40/J30">

| 製品 | Jetson モジュール | パッチ適用済み QSPI MFI パッケージ |
| --- | --- | --- |
| reServer Industrial J3010 | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDAD6PRbbdtTK3_1j-PLbudAdxV0NQqzkoZ6tfSQHkFfiE) |
| reServer Industrial J3011 | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAnMqViu7CmSKL4JbsKob2YAfZ-gboKbE_mIEQ4vznB9F4) |
| reServer Industrial J4011 | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCS0GsZnpHkQ4P5gXNuDlGqAb7q1ntBmiG9xzNNPrxgrns) |
| reServer Industrial J4012 | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQB8fzLJ3G_PSLU2U2RbfwbqAXGZBp_e1F2kPnQ1gqXneso) |

  </TabItem>
</Tabs>

### ホストを準備し、リカバリモードに入る

以下から正確な製品と **R35.5.0 (JetPack 5.1.3)** を選択して、[Flash JetPack summary](/ja/flash/jetpack_to_selected_product) から再利用されたホスト要件とリカバリモード手順を表示します。フラッシュ前に、そのガイドに記載されているホスト依存パッケージをインストールしてください。フラッシュ手順では、上でダウンロードしたパッチ適用済み QSPI 専用パッケージを使用します。

<BootloaderProductSelect />

<PrepareRequirementsClassic lang="en" />
<PrepareRequirementsIndustrial lang="en" />
<PrepareRequirementsReserver lang="en" />
<RecoveryClassic lang="en" />
<RecoveryIndustrial lang="en" />
<RecoveryReserver lang="en" />

### 展開とフラッシュ

ホスト PC 上で、ダウンロードしたパッチ適用済み QSPI MFI アーカイブを展開します。`<patched-qspi-mfi-archive>` を実際のファイル名に、`<extracted-mfi-directory>` を `tools/kernel_flash/l4t_initrd_flash.sh` を含む展開済みディレクトリに置き換えてください。

```bash
sudo tar xpf <patched-qspi-mfi-archive>
cd <extracted-mfi-directory>
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

フラッシュが正常に完了するまで待機し、その後 Jetson を再起動して、既存の SSD からブートすることを確認します。

## オプション 2: Ubuntu ユーザ空間から bootloader を更新する

Jetson がまだ Ubuntu までブートできる場合は、このオプションを使用します。これにより、提供された bootloader パッケージがデバイス上にインストールされ、システム全体の再フラッシュは不要です。

1. [reComputer Orin bootloader パッケージ](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDDc4wU3676Qp3FC4MmwLwjAShNzdHT0PjqdNQnBMZ64OA?e=miBcQj) を Jetson 上にダウンロードします。
2. ターミナルで、ダウンロードしたファイルを含むディレクトリに移動し、次を実行してインストールします：

   ```bash
   sudo dpkg -i ./nvidia-l4t-bootloader-recomputer-orin_35.5.0-recomputer20261110.1_arm64.deb
   ```

3. 期待される bootloader パッケージのバージョンがインストールされていることを確認します：

   ```bash
   sudo dpkg -l | grep nvidia-l4t-bootloader
   ```

   出力には、次のパッケージとバージョンが含まれている必要があります：

   ```text
   nvidia-l4t-bootloader-recomputer-orin  35.5.0-recomputer20261110.1  arm64
   ```

4. Jetson を再起動し、正常に起動することを確認します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
