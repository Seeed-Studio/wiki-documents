---
description: reComputer J401Bは、NVIDIA Jetsonモジュールを搭載したコンパクトで高性能なエッジAIデバイスで、豊富なI/Oインターフェースを提供し、JetPack 5.1.3から6.2をサポートして多様なAIアプリケーションに対応します。このガイドでは、仕様、フラッシュ手順、開発・デプロイメント用のインターフェース使用方法について説明します。
title: reComputer J401Bを始める
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.webp
slug: /ja/recomputer_j401b_getting_start
last_update:
  date: 4/27/2025
  author: Youjiang
---

# reComputer J401Bを始める

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401B-optional-accessories.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## はじめに

reComputer J401Bシリーズは、reComputer Classicシリーズの改良版です。NVIDIA Jetson Orin NX 8GBモジュールを搭載したreComputer J4011Bは、豊富なインターフェースを備えた強力でコンパクトなエッジAIデバイスです：2x USB 3.2、HDMI、Ethernet、Wi-FiモジュールのためのM.2 Key E、SSDのためのM.2 Key M、LTEモジュールのためのmini-PCIe、CAN、40ピンなど。

## 特徴

- **最も強力な組み込みAIプラットフォームを構築：** Jetson Orin NXモジュールと互換性があり、最大100 TOPSを提供します。

- **開発と製品化の両方に対応した設計：** 豊富なI/Oセットを装備：2x USB3.2、HDMI、Ethernet、M.2 Key M、M.2 Key E、mini-PCIe、40ピンGPIOなど。Wi-FiやLTEを含む複数の有線・無線通信をサポート

- **即座に市場投入可能：** JetPack5.1.3がプリインストール済み、Linux OS BSP対応

- **認証取得済み** ROHS、CE、FCC、KC、UKCA、REACH

- **長期供給保証：** 製品寿命：少なくとも2032年まで

## 仕様

<table>
  <thead>
    <tr>
      <th>仕様</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010B-p-6404.html">reComputer J3010B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011B-p-6405.html">reComputer J3011B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011B-p-6407.html">reComputer J4011B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012B-p-6406.html">reComputer J4012B</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>モジュール</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>AI性能</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512コア NVIDIA Ampereアーキテクチャ GPU、16 Tensorコア搭載</td>
      <td>1024コア NVIDIA Ampereアーキテクチャ GPU、32 Tensorコア搭載</td>
      <td colspan='2' align='center'>1024コア NVIDIA Ampereアーキテクチャ GPU、32 Tensorコア搭載</td>
    </tr>
    <tr>
      <td>GPU最大周波数</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU 1.5MB L2 + 4MB L3</td>
      <td>8コア Arm® Cortex®-A78AE v8.2 64ビット CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU最大周波数</td>
      <td colSpan='2' align='center'>1.5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>4GB 64ビット LPDDR5<br />34 GB/s</td>
      <td>8GB 128ビット LPDDR5<br />68 GB/s</td>
      <td>8GB 128ビット LPDDR5 102.4GB/s</td>
      <td>16GB 128ビット LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DLアクセラレータ</td>
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>DLA最大周波数</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>ビジョンアクセラレータ</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colSpan='4' align='center'>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>ビデオエンコーダ</td>
      <td colSpan='2' align='center'>1080p30 1-2 CPUコアでサポート</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>ビデオデコーダ</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan='2' align='center'>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan='4' align='center'>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>CSIカメラ</td>
      <td colSpan='4' align='center'>2* CSI （2レーン 15ピン）</td>
    </tr>
    <tr>
      <td>ネットワーク</td>
      <td colSpan='4' align='center'>1* ギガビットイーサネット (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>2* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (デバイスモード)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan='4' align='center'>1* mini-PCIe LTEモジュール用</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan='4' align='center'>1* 4ピン ファンコネクタ(5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td colSpan='4' align='center'>1* 40ピン拡張ヘッダー、1* 12ピン制御・UARTヘッダー</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC 2ピン、RTCソケット (CR1220対応、ただし付属せず)</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan='4' align='center'> DC 9-19V 5525 DCジャック経由 </td>
    </tr>
    <tr>
      <td>電源供給</td>
      <td colSpan='4' align='center'>電源アダプタは付属しません</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>機械的寸法</td>
      <td colSpan='4' align='center'>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## Flash JetPack

ここでは、reComputer J4012B/ J4011B/ J3010B および J3011B に接続された NVMe SSD に [Jetpack](https://developer.nvidia.com/embedded/jetpack) をフラッシュする方法を説明します。これらのデバイスはすべて内部に J401B キャリアボードを搭載しており、フラッシュ手順はすべて同じです。

:::danger
reComputer J401B シリーズには、付属の NVMe SSD に JetPack 5.1.3 がプリインストールされているため、フラッシュする必要はありません。ただし、JetPack で再度フラッシュしたい場合は、このガイドに従ってください。
:::

### サポートされているモジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 前提条件

- Ubuntu ホストコンピュータ
- reComputer J4012B/ J4011B/ J3010B または J3011B
- USB Type-C データ転送ケーブル

:::info
仮想マシンではなく、物理的な ubuntu ホストデバイスを使用することをお勧めします。
ホストマシンを準備するには、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack バージョン </td>
        <td class="dbon" colspan="3"> Ubuntu バージョン（ホストコンピュータ） </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

:::note

- 仮想マシンとARM アーキテクチャのUbuntuをフラッシュに使用することは推奨しません。

:::

### 強制リカバリモードに入る

インストール手順に進む前に、jetsonデバイスが強制リカバリモードになっていることを確認する必要があります。

以下の手順を参照して、jetsonデバイスを強制リカバリモードに設定してください。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif" /></div>

:::note
アニメーションGIFのキャリアボードはJ401ですが、心配ありません — 強制リカバリモードに入る手順は、J401とJ401Bキャリアボードの両方で同じです。
:::

<details>

<summary> ステップバイステップ </summary>

**ステップ 1.** ジャンパーワイヤーを使用して **FC REC** ピンと **GND** ピンを接続します。

<table align="center">
<thead>
  <tr>
    <th> </th>
    <th>ボタンヘッダー</th>
    <th>説明</th>
    <th>ボタンヘッダー</th>
    <th>説明</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="6"><div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-J4012/1.png"/></div></td>
    <td>1</td>
    <td>PWR BTN</td>
    <td>7</td>
    <td>AUTO ON</td>
  </tr>
  <tr>
    <td>2</td>
    <td>GND</td>
    <td>8</td>
    <td>DIS</td>
  </tr>
  <tr>
    <td>3</td>
    <td>FC REC</td>
    <td>9</td>
    <td>UART TXD</td>
  </tr>
  <tr>
    <td>4</td>
    <td>GND</td>
    <td>10</td>
    <td>UART RXD</td>
  </tr>
  <tr>
    <td>5</td>
    <td>SYS RET</td>
    <td>11</td>
    <td>LED +</td>
  </tr>
  <tr>
    <td>6</td>
    <td>GND</td>
    <td>12</td>
    <td>LED -</td>
  </tr>
</tbody>
</table>

**ステップ 2.** 付属の電源アダプターケーブルを接続してreComputerに電源を供給し、USB Type-Cデータ転送ケーブルでボードをUbuntuホストPCに接続します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"/></div>

**ステップ 3.** LinuxホストPCでターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用するJetson SoMに応じて、返される内容に以下の出力のいずれかが含まれている場合、ボードは強制リカバリモードになっています。

- Orin NX 16GBの場合: **0955:7323 NVidia Corp**
- Orin NX 8GBの場合: **0955:7423 NVidia Corp**
- Orin Nano 8GBの場合: **0955:7523 NVidia Corp**
- Orin Nano 4GBの場合: **0955:7623 NVidia Corp**

以下の画像はOrin NX 16GBの場合です

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/></div>

**ステップ 4.** ジャンパーワイヤーを取り外します

</details>

### JetpackOSのフラッシュ

:::note
フラッシュに進む前に、Jetson Orin NXモジュールはJetPack 5.1以上のみをサポートし、Jetson Orin NanoモジュールはJetPack 5.1.1以上のみをサポートすることに注意してください。
:::

まず最初に、JetPackのフラッシュに進む前に、UbuntuホストPCに以下の必要な依存関係をインストールします。

```sh
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

ここでは、NVIDIA L4T 35.3.1を使用してreComputerにJetpack 5.1.1をインストールします

**ステップ1:** ホストPCに[NVIDIA ドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3531)します。必要なドライバーは以下の通りです：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**ステップ2:** **Jetson_Linux_R35.3.1_aarch64** と **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64** を、これらのファイルが含まれているフォルダに移動して展開し、変更を適用して必要な前提条件をインストールします

```sh
tar xf Jetson_Linux_R35.3.1_aarch64
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ3（オプション）:** デバイスの起動完了後にUbuntuインストールウィザードを入力する必要がないよう、ユーザー名、パスワード、ホスト名を設定します

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例えば（ユーザー名："nvidia"、パスワード："nvidia"、デバイス名："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 4:** システムをNVMe SSDにフラッシュする

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

これで、マウス、キーボード、モニターをJetsonデバイスに接続できます。使用準備が完了しました！

:::tip
Jetsonデバイスのデスクトップを開くのに時間がかかる場合は、電源を再接続してください。
:::

**ステップ 5（オプション）：** Nvidia Jetpack SDKのインストール

**Jetsonデバイス**でターミナルを開き、以下のコマンドを実行してください：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

ここでは、NVIDIA L4T 35.4.1を使用してreComputerにJetpack 5.1.2をインストールします

**ステップ1:** ホストPCに[NVIDIA ドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3541)します。必要なドライバーは以下の通りです：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**ステップ2:** **Jetson_Linux_R35.4.1_aarch64** と **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64** を、これらのファイルが含まれているフォルダに移動して展開し、変更を適用して必要な前提条件をインストールします

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

現在、JP5.1.2に必要なNVIDIAのパッチを適用する必要があります。これは公式のNVIDIA JetPack リリースノートのセクション4.2.3で[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/ReleaseNotes/Jetson_Linux_Release_Notes_r35.4.1.pdf)に説明されています。

**ステップ 3:** 以下のディレクトリに移動します

```sh
cd Linux_for_Tegra/bootloader/t186ref/BCT
```

**ステップ 4:** ファイル **"tegra234-mb2-bct-scr-p3767-0000.dts"** を開き、**tfc** セクションの下に以下の行を追加します

```sh
tfc {
    reg@322 { /* GPIO_M_SCR_00_0 */
    exclusion-info = <2>;
    value = <0x38008080>;
    };
```

**ステップ5（オプション）：** **"Linux_for_Tegra"** ディレクトリに移動し、以下のコマンドを入力してユーザー名、パスワード、ホスト名を設定します。これにより、デバイスの起動完了後にUbuntuインストールウィザードを実行する必要がなくなります

```sh
cd Linux_for_Tegra
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例（ユーザー名："nvidia"、パスワード："nvidia"、デバイス名："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムをNVMe SSDにフラッシュする

```bash

cp p3509-a02+p3767-0000.conf p3509-a02-p3767-0000.conf
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1   -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg"   --showlogs --network usb0 p3509-a02-p3767-0000 external

```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

これで、マウス、キーボード、モニターをJetsonデバイスに接続できます。使用準備が完了しました！

:::tip
Jetsonデバイスのデスクトップを開くのに時間がかかる場合は、電源を再接続してください。
:::

**ステップ 7（オプション）:** Nvidia Jetpack SDKをインストール

**Jetsonデバイス**でターミナルを開き、以下のコマンドを実行してください：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP5.1.3" label="JP5.1.3">

ここでは、reComputerにJetpack 5.1.3をインストールします。

**ステップ1:** 使用しているJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードします：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetsonモジュール</th>
      <th>ダウンロードリンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXpnEetKYeNEkVs_mrG161IBNt4Rn84D2l1mvX-RS6hBog?e=OUpkC2" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>28877E13DE9E029C4E4328F836C7D534E182849714CCA2930C3712757DDD6CD1</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdchzEJ2fYJClYD680qFaosBNkYRXjHBLpYykpxYBi2_0Q?e=LEHd41" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>E4C5611164475D86E2F128826F993F251491368168218A2D660E6D23DEE63D53</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUPTqRpD_fVGmw-qKTrRl4gBUB9YvlytoRGwxe7aCqhF9w?e=Bsr1GU" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>A3F0C30EFDFB612F1EAB5B01E01B7E6FDFACA6A27A596C3B0AABD82C0EFE94D4</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ER4pJqYIOGVGiu1ticFeYMoBFaSpmI_JISciXqqvI-lzAA?e=nBRhmh" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>EDCDA822B59BB6FAC8E7AD301757C6801FC29481DE274DEE370CFDA4874AC0B0</td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較することができます。

Ubuntホストマシンで、ターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

**ステップ2:** ダウンロードしたイメージファイルを展開します：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ3:** 解凍されたディレクトリに移動し、以下のコマンドを実行してjetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは2-10分間実行される場合があります。
:::

**ステップ 4:** J401をボード上のHDMIコネクタを使用してディスプレイに接続し、初期設定セットアップを完了します。

:::info
必要に応じて**システム設定**を完了してください。
:::

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここではNVIDIA L4T 36.3を使用してreComputerにJetpack 6.0をインストールします

**ステップ 1:** 使用しているJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードします：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetsonモジュール</th>
      <th>ダウンロードリンク1</th>
      <th>ダウンロードリンク2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EavQHXoSEg9PuLs4vuujXLcB0-GW6Ti1zHGL2UHzgS6TWg?e=J7oRrf" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EbEZRxHDtgBDjBrHK_7ltfEB6JBa3VGXLx3meNc0OJUL_g?e=8MNsTg" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>20b38d9524327fd714c37cb293036006e070b5335d6b4f6978a862be51c3db52</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcfUdbmSiOBFo_Po-Cui3jkBDORKexZ4S43Jde5XApqdeQ?e=zqealW" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQawJy3jmKBAmJgHght-vVUBHbsC3vtlvMsYfW7vsie3LQ?e=vor3t3" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>da966e7616ed86b45e184b6db9c3eb81e779a5f4524f6c3c5610e56c53532fe1</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EauK-aXvruxHsC1-bAmTwZkBNB0PsvPX6S6oV4Q1UrAUFw?e=rytWvU" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeJP8SNF76BKiJg2e-FKNd4BhJwlWiMbLcT6Y286tRO7JQ?e=ct6qLf" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>e0fa101c5df6f507d123c2332e9fedea0ac54f8a5253cb28e71fdff01147fa68</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcHfrgY9GxVNiwGh6YTB50cBCc5QcKgnGpTZQfv94x4VNw?e=Rl73Zh" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERQJluPq9X1LmpLXTSGZVMwBVg9ikWw8veG2aOdHv504Gw?e=hujab4" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>80ebeac0a843baa2c3104ee6341d44f39a2cfab1c9c725e176c7b2a219b79dfc</td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較できます。

Ubuntホストマシンで、ターミナルを開き、コマンド `sha256sum <File>` を実行してダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

**ステップ 2:** ダウンロードしたイメージファイルを展開します：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ3:** 解凍されたディレクトリに移動し、以下のコマンドを実行してjetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは2-10分間実行される場合があります。
:::

**ステップ 4:** ボード上のHDMIコネクタを使用してJ401をディスプレイに接続し、初期設定セットアップを完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
必要に応じて**システム設定**を完了してください。
:::

**ステップ 5:** システム起動後、ワイヤレスネットワークカードドライバーを再アクティベートするために、以下のコマンドを実行する必要があります：

```bash
sudo rm /lib/modules/5.15.136-tegra/build
sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build
sudo apt install -y iwlwifi-modules
```

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは、NVIDIA L4T 36.4 を使用して reComputer に Jetpack 6.1 をインストールします

**ステップ 1:** 使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードします：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson モジュール</th>
      <th>ダウンロードリンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWCZOBNb9C9AoZe-mt23jLABZk942Lf0yopVGFJFTeL5DA?e=o7epES" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td> 3e53f484eb41a2d81f01ba2a0512a3c13d86d90f646207a488eaf77ae0cd5d69 </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcvDRK7qgWhGty_H-P7yHZ8Bob3v9AEs_vFVd-zOC3WX5w?e=FmlfjD" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td> fc22a3d1669eb311cf237b8f4252896bfb71ff860c14f7a502c60fda5439d99d </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeO8T8kNkpZGl9W2QfmnKYQBeXB8-M88aZWLMvPP7uARcA?e=fBuClA" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td> c2e48b41d284e4c98a2bc3409f1a1d09c61e4b60d6a5bdec3a33d084560a3bba </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY01pL5oq0FAmavoRY_p9DMBj4t-LHzRtEAh1UBQen3S3g?e=jUfauO" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td> b9e4f5889a66d055d967884980aee6357316acb562c4d713ef2fdb21f4644788 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256 ハッシュ値を比較することができます。

Ubuntu ホストマシンでターミナルを開き、コマンド `sha256sum <File>` を実行してダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki で提供されている SHA256 ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

**ステップ 2:** ダウンロードしたイメージファイルを展開します：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nx-16g-j401-6.1-36.4.0-2024-12-04.tar
```

**ステップ3:** 解凍されたディレクトリに移動し、以下のコマンドを実行してjetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは2-10分間実行される場合があります。
:::

**ステップ 4:** J401をボード上のHDMIコネクタを使用してディスプレイに接続し、初期設定セットアップを完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
必要に応じて**システム設定**を完了してください。
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここではNVIDIA L4T 36.4.3を使用してreComputerにJetpack 6.2をインストールします

**ステップ 1:** 使用しているJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードします：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetsonモジュール</th>
      <th>ダウンロードリンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ea8wqK7OE0VGtclEw1J0FIYB8I6qJEH_n1facfwl9AlhkQ?e=UoHjcf" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td> D9ECF85D0BD52E6E90E9C567A52688C7FAEE7DD1BDC87ED557184086FD605249 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYuzr4pFfZ5Lp2WIqG_tZ7ABIYU9A0KuFl1nAs9FiGmZBQ?e=WALXR5" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td> 00B881683FD2D61A22BD2D0326E7B5E39CB5C4F249BF2CD18A272766CB6612E7 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンで、ターミナルを開いて`sha256sum <File>`コマンドを実行し、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

:::note
`super mode`を有効にした後の消費電力の増加と発熱により、[reComputer J4011B](https://www.seeedstudio.com/reComputer-J4011B-p-6407.html)と[reComputer J4012B](https://www.seeedstudio.com/reComputer-J4012B-p-6406.html)は最高モードで安定して動作できないことにご注意ください。そのため、この更新にはこれら2つの製品は含まれていません。
現在、新しいバージョンのreComputerを設計中です。ご期待ください！
:::

**ステップ2:** ダウンロードしたイメージファイルを展開します：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.2-36.4.3-2025-02-08.tar.gz
```

**ステップ3:** 解凍されたディレクトリに移動し、以下のコマンドを実行してjetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には2〜10分かかる場合があります。
:::

**ステップ4:** J401をボード上のHDMIコネクタを使用してディスプレイに接続し、初期設定セットアップを完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
必要に応じて**システム設定**を完了してください。
:::

</TabItem>

</Tabs>

## インターフェース使用方法

:::info
インターフェース使用方法の詳細については、この[wikiページ](/ja/recomputer_j401b_interfaces_usage)を参照してください。
:::

## リソース

- [reComputer J401B データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer_J401B_datasheet_v1.pdf)
- [reComputer J401B 回路図](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_CarrierBoard_SCH_V1.0.pdf)
- [LTEボード回路図](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_LTE_SCH_V1.0.pdf)
- [Seeed Jetsonシリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetsonシリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetsonデバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetsonサンプル](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
