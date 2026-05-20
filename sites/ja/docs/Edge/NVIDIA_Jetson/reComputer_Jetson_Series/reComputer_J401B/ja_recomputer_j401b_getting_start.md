---
description: reComputer J401B は、NVIDIA Jetson Orin モジュールを搭載したコンパクトで高性能なエッジ AI デバイスで、豊富な I/O インターフェースを備え、JetPack 5.1.3 から 6.2 までをサポートし、多様な AI アプリケーションに対応します。本ガイドでは、仕様、フラッシュ手順、および開発とデプロイのためのインターフェースの使用方法を説明します。
title: reComputer J401B 入門ガイド
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.webp
slug: /recomputer_j401b_getting_start
sku: 114993486,114993487,114993489,114993488,E2025031201
last_update:
  date: 4/27/2025
  author: Youjiang
createdAt: '2023-03-02'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/ja/recomputer_j401b_getting_start/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# reComputer J401B 入門ガイド

## はじめに

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.jpg"/>
</div>

reComputer J401B シリーズは、reComputer Classic シリーズの改良版です。NVIDIA Jetson Orin NX 8GB モジュールを搭載した reComputer J4011B は、2x USB 3.2、HDMI、Ethernet、Wi-Fi モジュール用 M.2 Key E、SSD 用 M.2 Key M、LTE モジュール用 mini-PCIe、CAN、40 ピンなど、豊富なインターフェースを備えた強力かつコンパクトなエッジ AI デバイスです。

:::note
ロゴのブランディング、パッケージング、ファームウェアのフラッシュについてはカスタマイズが可能です。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401B-optional-accessories.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

## 特長

- **最も強力な組み込み AI プラットフォームを構築:** Jetson Orin NX モジュールに対応し、最大 100 TOPS を提供します。

- **開発と量産の両方に対応した設計:** 2x USB3.2、HDMI、Ethernet、M.2 Key M、M.2 Key E、mini-PCIe、40 ピン GPIO など、豊富な I/O を搭載。Wi-Fi や LTE を含む複数の有線・無線通信をサポートします。

- **すぐに市場投入可能:** JetPack5.1.3 をプリインストール済みで、Linux OS BSP も準備されています。

- **取得認証:** ROHS、CE、FCC、KC、UKCA、REACH

- **長期供給:** 生産ライフタイム：少なくとも 2032 年まで

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
      <td>AI 性能</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>16 Tensor コアを備えた 512 コア NVIDIA Ampere アーキテクチャ GPU</td>
      <td>32 Tensor コアを備えた 1024 コア NVIDIA Ampere アーキテクチャ GPU</td>
      <td colspan='2' align='center'>32 Tensor コアを備えた 1024 コア NVIDIA Ampere アーキテクチャ GPU</td>
    </tr>
    <tr>
      <td>GPU 最大周波数</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>6 コア Arm® Cortex®-A78AE v8.2 64-bit CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6 コア Arm® Cortex®-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3</td>
      <td>8 コア Arm® Cortex®-A78AE v8.2 64-bit CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU 最大周波数</td>
      <td colSpan='2' align='center'>1.5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DL アクセラレータ</td>
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>DLA 最大周波数</td>
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
      <td colSpan='2' align='center'>1～2 個の CPU コアで 1080p30 をサポート</td>
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
      <td>CSI カメラ</td>
      <td colSpan='4' align='center'>2* CSI （2-lane 15pin）</td>
    </tr>
    <tr>
      <td>ネットワーキング</td>
      <td colSpan='4' align='center'>1* ギガビット Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>2* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (Device Mode)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr]
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan='4' align='center'>1* LTE モジュール用 mini-PCIe</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan='4' align='center'>1* 4 ピンファンコネクタ (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td colSpan='4' align='center'>1* 40 ピン拡張ヘッダ、1* 12 ピン制御および UART ヘッダ</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC 2 ピン、RTC ソケット（CR1220 対応、同梱なし）</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan='4' align='center'> DC 9-19V（5525 DC ジャック経由） </td>
    </tr>
    <tr>
      <td>電源アダプタ</td>
      <td colSpan='4' align='center'>電源アダプタは付属しません</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>筐体サイズ</td>
      <td colSpan='4' align='center'>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## JetPack をフラッシュする

ここでは、reComputer J4012B/ J4011B/ J3010B および J3011B に接続された NVMe SSD に [Jetpack](https://developer.nvidia.com/embedded/jetpack) をフラッシュする方法を説明します。これらのデバイスにはすべて J401B キャリアボードが内蔵されており、フラッシュ手順はすべて同じです。

:::danger
reComputer J401B シリーズには、付属の NVMe SSD に JetPack 5.1.3 がプリインストールされているため、通常はフラッシュする必要はありません。ただし、JetPack を再度フラッシュしたい場合は、このガイドに従ってください。
:::

### 対応モジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 事前準備

- Ubuntu ホストコンピュータ
- reComputer J4012B/ J4011B/ J3010B または J3011B
- USB Type-C データ転送ケーブル

:::info
仮想マシンではなく、物理的な Ubuntu ホストデバイスを使用することを推奨します。
ホストマシンの準備については、以下の表を参照してください。

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

- フラッシュには、仮想マシンおよび ARM アーキテクチャの Ubuntu を使用しないことを推奨します。

:::

### 強制リカバリモードに入る

インストール手順に進む前に、Jetson デバイスが強制リカバリモードになっていることを確認する必要があります。

Jetson デバイスを強制リカバリモードに設定するには、次の手順を参照してください。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif" /></div>

:::note
アニメーション GIF に表示されているキャリアボードは J401 ですが、心配はいりません。強制リカバリモードに入る手順は、J401 と J401B のキャリアボードで同じです。
:::

<details>

<summary> 手順 </summary>

**Step 1.** ジャンパワイヤを使用して、**FC REC** ピンと **GND** ピンを接続します。

<table align="center">
<thead>
  <tr>
    <th> </th>
    <th>ボタンヘッダ</th>
    <th>説明</th>
    <th>ボタンヘッダ</th>
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

**ステップ 2.** 付属のケーブルを電源アダプタに接続して reComputer の電源を入れ、USB Type-C データ転送ケーブルでボードを Ubuntu ホスト PC に接続します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"/></div>

**ステップ 3.** Linux ホスト PC でターミナルウィンドウを開き、`lsusb` コマンドを入力します。使用している Jetson SoM に応じて、返された内容に次のいずれかの出力が含まれていれば、ボードは強制リカバリモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin NX 16GB の例です

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/></div>

**ステップ 4.** ジャンパワイヤを取り外します

</details>

### Jetpack OS をフラッシュする

:::note
フラッシュ作業に進む前に、Jetson Orin NX モジュールは JetPack 5.1 以降のみをサポートし、Jetson Orin Nano モジュールは JetPack 5.1.1 以降のみをサポートすることに注意してください。
:::

まず最初に、JetPack のフラッシュに進む前に、Ubuntu ホスト PC に以下の必要な依存パッケージをインストールします。

```sh
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

ここでは NVIDIA L4T 35.3.1 を使用して、reComputer に Jetpack 5.1.1 をインストールします

**ステップ 1:** ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetson-linux-r3531) から NVIDIA ドライバをダウンロードします。必要なドライバは以下のとおりです:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**ステップ 2:** これらのファイルを含むフォルダに移動して **Jetson_Linux_R35.3.1_aarch64** と **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64** を展開し、変更を適用して必要な前提パッケージをインストールします

```sh
tar xf Jetson_Linux_R35.3.1_aarch64
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 3（任意）:** デバイスの起動完了後に Ubuntu インストールウィザードに入る必要がないように、ユーザー名、パスワード、およびホスト名を設定します

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例（username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"）:

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 4:** システムを NVMe SSD にフラッシュします

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

フラッシュ処理が成功すると、次のような出力が表示されます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

これで、マウス、キーボード、モニタを Jetson デバイスに接続できます。すぐに使用可能です！

:::tip
Jetson デバイスがデスクトップを開くのに長時間かかる場合は、電源を再接続してください。
:::

**ステップ 5（任意）:** Nvidia Jetpack SDK をインストールします

**Jetson デバイス** 上でターミナルを開き、次のコマンドを実行してください:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

ここでは NVIDIA L4T 35.4.1 を使用して、reComputer に Jetpack 5.1.2 をインストールします

**ステップ 1:** ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetson-linux-r3541) から NVIDIA ドライバをダウンロードします。必要なドライバは以下のとおりです:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**ステップ 2:** これらのファイルを含むフォルダに移動して **Jetson_Linux_R35.4.1_aarch64** と **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64** を展開し、変更を適用して必要な前提パッケージをインストールします

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

次に、JP5.1.2 に必要であり、公式 NVIDIA JetPack リリースノートのセクション 4.2.3 で説明されている、NVIDIA からのパッチを適用する必要があります。詳細は [こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/ReleaseNotes/Jetson_Linux_Release_Notes_r35.4.1.pdf) を参照してください。

**ステップ 3:** 次のディレクトリに移動します

```sh
cd Linux_for_Tegra/bootloader/t186ref/BCT
```

**ステップ 4:** **"tegra234-mb2-bct-scr-p3767-0000.dts"** ファイルを開き、**tfc** セクションの下に次の行を追加します

```sh
tfc {
    reg@322 { /* GPIO_M_SCR_00_0 */
    exclusion-info = <2>;
    value = <0x38008080>;
    };
```

**ステップ 5（任意）:** **"Linux_for_Tegra"** ディレクトリに移動し、以下のコマンドを入力してユーザー名、パスワード、およびホスト名を設定します。これにより、デバイスの起動完了後に Ubuntu インストールウィザードに入る必要がなくなります

```sh
cd Linux_for_Tegra
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例（username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"）:

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムを NVMe SSD にフラッシュします

```bash

cp p3509-a02+p3767-0000.conf p3509-a02-p3767-0000.conf
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1   -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg"   --showlogs --network usb0 p3509-a02-p3767-0000 external

```

フラッシュ処理が成功すると、次のような出力が表示されます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

これで、マウス、キーボード、モニタを Jetson デバイスに接続できます。すぐに使用可能です！

:::tip
Jetson デバイスがデスクトップを開くのに長時間かかる場合は、電源を再接続してください。
:::

**ステップ 7（任意）:** Nvidia Jetpack SDK をインストールします

**Jetson デバイス** 上でターミナルを開き、次のコマンドを実行してください:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP5.1.3" label="JP5.1.3">

ここでは reComputer に Jetpack 5.1.3 をインストールします。

**ステップ 1:** 使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードします:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson Module</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaf_S-Dg_uxNkyRvriYIez4B6pl6VjO7aRNwAJ2DDDKjaA?e=Bl1p1G" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>37F99E90A746D07242EE17E2A74A3336490E997457DE0E9FC15A1E35D347543B</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcAN8eoa1m1MvKCN4p4VkMIBMZWuIj4OFrcH4uUx0Amxvg?e=Re90iJ" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>4FDD5F05EE83F425AD1D8E2768BDF35FA68D3F1143B09C2FB9537CBFD1A9D5EC</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZnkTHuxWIxHtwNs5mzjnPIBiFuB-Ym8zYVJb13Cnl0uqg?e=2U9i4S" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>6A002620B6E40673A39710F0ECC1C56CB5750480B799F97BB7DE4A5B6F49C527</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERwQtvZuYzdAoue4OzAH5kUBah_jgt9sPTNj2CeFRZTdNg?e=lbFjb6" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>63A3D59185BDB286452CA7774DD528F5087249B8065D902C9181703010B7836A</td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、`sha256sum <File>` コマンドを実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全で破損していないことが確認できます。
:::

**ステップ 2:** ダウンロードしたイメージファイルを展開します:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ 3:** 解凍したディレクトリに移動し、次のコマンドを実行して Jetpack システムを NVMe SSD にフラッシュします:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュ処理が成功すると、次のような出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2〜10 分かかる場合があります。
:::

**ステップ 4:** ボード上の HDMI コネクタを使用して J401 をディスプレイに接続し、初期設定を完了します。

:::info
ニーズに応じて **System Configuration** を完了してください。
:::

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは NVIDIA L4T 36.3 を使用して、reComputer に Jetpack 6.0 をインストールします

**ステップ 1：** 使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードします：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson モジュール</th>
      <th>ダウンロードリンク1</th>
      <th>ダウンロードリンク2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EavQHXoSEg9PuLs4vuujXLcB0-GW6Ti1zHGL2UHzgS6TWg?e=J7oRrf" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EbEZRxHDtgBDjBrHK_7ltfEB6JBa3VGXLx3meNc0OJUL_g?e=8MNsTg" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>20b38d9524327fd714c37cb293036006e070b5335d6b4f6978a862be51c3db52</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcfUdbmSiOBFo_Po-Cui3jkBDORKexZ4S43Jde5XApqdeQ?e=zqealW" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQawJy3jmKBAmJgHght-vVUBHbsC3vtlvMsYfW7vsie3LQ?e=vor3t3" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>da966e7616ed86b45e184b6db9c3eb81e779a5f4524f6c3c5610e56c53532fe1</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EauK-aXvruxHsC1-bAmTwZkBNB0PsvPX6S6oV4Q1UrAUFw?e=rytWvU" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeJP8SNF76BKiJg2e-FKNd4BhJwlWiMbLcT6Y286tRO7JQ?e=ct6qLf" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>e0fa101c5df6f507d123c2332e9fedea0ac54f8a5253cb28e71fdff01147fa68</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcHfrgY9GxVNiwGh6YTB50cBCc5QcKgnGpTZQfv94x4VNw?e=Rl73Zh" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERQJluPq9X1LmpLXTSGZVMwBVg9ikWw8veG2aOdHv504Gw?e=hujab4" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>80ebeac0a843baa2c3104ee6341d44f39a2cfab1c9c725e176c7b2a219b79dfc</td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全で破損していないことが確認できます。
:::

**ステップ 2：** ダウンロードしたイメージファイルを解凍します：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ 3：** 解凍したディレクトリに移動し、次のコマンドを実行して Jetpack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュ処理が成功すると、次のような出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2〜10 分かかる場合があります。
:::

**ステップ 4：** ボード上の HDMI コネクタを使用して J401 をディスプレイに接続し、初期設定を完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
ニーズに応じて **System Configuration** を完了してください。
:::

**ステップ 5：** システム起動後、ワイヤレスネットワークカードドライバを再有効化するために、次のコマンドを実行する必要があります：

```bash
sudo rm /lib/modules/5.15.136-tegra/build
sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build
sudo apt install -y iwlwifi-modules
```

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは NVIDIA L4T 36.4 を使用して、reComputer に Jetpack 6.1 をインストールします

**ステップ 1：** 使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードします：

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
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAeJrT8r6rJSKVpp2_32UtQAZJzy4wNyCuHqVSCy0f-q4U?e=84CkEW" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> b848e327b87c408565b899a11c52022b42df6de4f3dce1e5470cb2a7baccc898 </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB9gz3ZuAZ1Rb_ml6eY-5eCAV-k2piT1qWtbedMSEUfyzk?e=LTL5kI" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 3839c99fc9e2da1f35de824c42b7bb56f9660d8f4a6ce68b196c6cb50d5d4fb4 </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDfJ9e2HfndQKxZp7e2_A_0Ab97_Oe0zA53nK6AZ6EHDYs?e=B3tvCO" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> a0863e7209351f9165cf6bd2d756a6a726b2e8fc1fa54b5d66279d5b136a3a33 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDrUdIOhLv6SrDpKbnUCnfgAR9URACZr46gifnBSEdOphA?e=TNUkWg" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> a40edfbcda9a7a07fbf72ca4e3149d171236f5ede2c4e3a5e243da77562f9b13 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全で破損していないことが確認できます。
:::

**ステップ 2：** ダウンロードしたイメージファイルを解凍します：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nx-16g-j401-6.1-36.4.0-2026-02-07.tar.gz
```

**ステップ 3：** 解凍したディレクトリに移動し、次のコマンドを実行して Jetpack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュ処理が成功すると、次のような出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2〜10 分かかる場合があります。
:::

**ステップ 4：** ボード上の HDMI コネクタを使用して J401 をディスプレイに接続し、初期設定を完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
ニーズに応じて **System Configuration** を完了してください。
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここでは NVIDIA L4T 36.4.3 を使用して、reComputer に Jetpack 6.2 をインストールします

**ステップ 1：** 使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードします：

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
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDTDQf5Gh0LSIg9QSsHPNgBAcegrhbyGeZYrQF7kMpdgFQ?e=ahwlIc" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>b9529f008cf9a65460db3ee17736db971b8d110049f9f6ea8ecc8fe4d1691869</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDR6PGcF5i6Q5tWR9dJa1vSAfZrQUfHfQhTFe2DOeMKXuo?e=lf88Um" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>b7106b4f8c5835011040c071dd14e1144b5298af300f920e44517b99c183ed05</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDM6v_9Ggo4R5OXqj4R1T0PAf_uevclLKzjmj8XpkX0_jQ?e=B5oC3m" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> c2247262dec1379fd4494def6a6ed2d4414605a8dcb902c6d6afbb94a5e48499 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA9g-hqq4_KR5bdPc2PgfgmAYq3mRxdRBkgrUtZBOm-jtE?e=WMICt2" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 1d570b54853bba4ecc115789d1b03c5ba07b34344f7616dfa3c3772c9ff37e64 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、`sha256sum <File>` コマンドを実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全で破損していないことが確認できます。
:::

:::note
`super mode` を有効にした後は消費電力と発熱が増加するため、[reComputer J4011B](https://www.seeedstudio.com/reComputer-J4011B-p-6407.html) と [reComputer J4012B](https://www.seeedstudio.com/reComputer-J4012B-p-6406.html) は最高モードでは安定して動作できません。したがって、このアップデートにはこれら 2 つの製品は含まれていません。
現在、新バージョンの reComputer を設計中です。続報をお待ちください！
:::

**ステップ 2：** ダウンロードしたイメージファイルを解凍します：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.2-36.4.3-2026-02-05.tar.gz
```

**ステップ 3：** 解凍したディレクトリに移動し、次のコマンドを実行して JetPack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュ処理が成功すると、次のような出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2〜10 分かかる場合があります。
:::

**ステップ 4：** ボード上の HDMI コネクタを使用して J401 をディスプレイに接続し、初期設定を完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
ニーズに応じて **System Configuration** を完了してください。
:::

</TabItem>

</Tabs>

## インターフェースの使用方法

:::info
インターフェースの使用方法の詳細については、この [wiki ページ](/ja/recomputer_j401b_interfaces_usage) を参照してください。
:::

## リソース

- [reComputer J401B データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer_J401B_datasheet_v1.pdf)
- [reComputer J401B 回路図](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_CarrierBoard_SCH_V1.0.pdf)
- [LTE ボード回路図](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_LTE_SCH_V1.0.pdf)
- [Seeed Jetson シリーズ カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI 導入事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson サンプル](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-入門者向け](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
