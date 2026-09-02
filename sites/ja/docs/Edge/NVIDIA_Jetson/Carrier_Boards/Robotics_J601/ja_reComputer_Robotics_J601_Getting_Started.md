---
description: NVIDIA Jetson AGX Thor モジュール向け reComputer Robotics J601 キャリアボードの入門ガイドです。
title: reComputer Robotics J601 入門ガイド
sidebar_label: JetPack をフラッシュ
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 08/28/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import J601DemoGrid from '@site/src/components/jetson/J601DemoGrid';

# reComputer Robotics J601 入門ガイド

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg"/>
</div>

reComputer J601 は、最大 2070 TFLOPS の性能を発揮する Jetson AGX Thor 向けのコンパクトかつ高性能なエッジ AI キャリアボードです。開発および量産用途向けに設計されており、M.2 Key E/M/B、4x 10Gb RJ45、4×USB 3.2、HDMI 2.1、8×GMSL、各種 I/O を備え、シームレスな統合を実現します。ヒューマノイドロボットのブレインとしても利用できます。NVIDIA Isaac、Hugging Face、PyTorch、ROS2/1 などの LLM & Physical AI フレームワークをサポートし、AI とロボティクスをつなぎます。最適化されたリアルタイム処理により、ビジョン AI、トランスフォーマー、マルチモーダルモデルを実行し、エッジデバイスで高度な AI を実現します。

## 特長

- **NVIDIA Jetson AGX Thor T5000 および T4000** モジュールをサポート
- 最大 **2070 TFLOPS** の AI 性能
- 最大 **4x 10GbE RJ45** ポート
- 最大 10Gbps の **4x USB 3.2 Type-A** ポート
- **HDMI 2.1** 映像出力
- PCIe Gen 4 NVMe 2280 SSD 用 **M.2 Key M**
- M.2 2230 Wi-Fi モジュール用 **M.2 Key E**
- 4G/5G モジュール用 **M.2 Key B**
- 2 つの Mini-Fakra コネクタと GMSL 拡張ボードを介した最大 **8x GMSL2 カメラ**
- 絶縁 CAN、RS-232/422/485、I2C、I2S、GPI、GPO を含むロボティクス向け I/O
- XT30 経由の広範囲 **19V ～ 48V DC** 入力
- ソフトウェアプラットフォーム：**JetPack 7.1**

## 仕様

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>モジュール互換性</td>
      <td>NVIDIA Jetson AGX Thor T5000 / T4000</td>
    </tr>
    <tr>
      <td>PCB サイズ</td>
      <td>168 mm x 155 mm（Jetson AGX Thor モジュールを除く）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4x USB 3.2 Type-A（10Gbps, Host）、1x USB 2.0 Type-C（Debug）、1x USB 3.0 Type-C（Recovery）</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>T5000 使用時 4x RJ45 10GbE、T4000 使用時 3x RJ45 10GbE</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td>PCIe Gen 4 NVMe 2280 SSD 用 1x M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td>M.2 2230 Wi-Fi モジュール用 1x M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>4G/5G モジュール用 1x M.2 Key B</td>
    </tr>
    <tr>
      <td>シリアル</td>
      <td>1x RS-232/422/485（DB9 コネクタ）</td>
    </tr>
    <tr>
      <td>JST ポート</td>
      <td>T5000 使用時 4x CAN または T4000 使用時 2x CAN、1x RS-485、1x I2S、1x I2C、4x GPI、4x GPO</td>
    </tr>
    <tr>
      <td>オーディオ</td>
      <td>1x マイク入力、1x オーディオ出力</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x 4 ピンファンコネクタ（12V PWM）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 ピンヘッダ</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1x 緑色 PWR LED、1x 緑色 SSD LED、1x RGB USR LED</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td>1x Recovery ボタン、1x Reset ボタン</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>最大 8x GMSL2 カメラ用 2x Mini-Fakra コネクタ</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td>熱伝導グリス使用時 -10°C ～ 60°C、サーマルパッド使用時 -10°C ～ 55°C</td>
    </tr>
    <tr>
      <td>電源</td>
      <td>XT30、19V ～ 48V DC</td>
    </tr>
    <tr>
      <td>JetPack</td>
      <td>JetPack 7.1</td>
    </tr>
  </tbody>
</table>
</div>

## ハードウェア概要

| **側面図 1** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg) |
| **側面図 2** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg) |
| **底面図** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg) |

## JetPack をフラッシュ

ここでは、reComputer Robotics J6014 / J6015 に接続された NVMe SSD に JetPack をフラッシュする方法を説明します。どちらのデバイスも J601 キャリアボードを使用しており、フラッシュ手順は同じです。

### 対応モジュール

- [NVIDIA Jetson T4000 module](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html)
- [NVIDIA Jetson T5000 module](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html)

### 事前準備

- Ubuntu ホスト PC
- reComputer Robotics J6014 または J6015
- NVMe M.2 2280 内蔵 SSD
- USB Type-C データ転送ケーブル
- ホスト PC 上に少なくとも 220 GB の空きストレージ

:::info
仮想マシンではなく、物理的な Ubuntu ホストの使用を推奨します。Seeed Jetson DevelopTool は WSL2 を介した Windows もサポートしていますが、ネイティブな Ubuntu ホストの方が最も安定したフラッシュ体験を提供します。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="3"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 7.1</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### フラッシュ方法を選択

以下のいずれかを選択してください：グラフィカルな Seeed Jetson DevelopTool ワークフロー、またはコマンドラインワークフロー。

<Tabs groupId="j601-flashing-method">

<TabItem value="software" label="ソフトウェアフラッシュ" default>

Seeed Jetson DevelopTool は、BSP コマンドを必要とせずに、ファームウェアのダウンロード、検証、展開、フラッシュをガイド付きのグラフィカルワークフローで実行します。[Seeed Jetson DevelopTool installation guide](/ja/jetson_developtool_installation) に従ってツールをインストールしてください。

#### ビデオチュートリアル

<div class="video-container">
<iframe width="1071" height="803" src="https://www.youtube.com/embed/O2rlSOdYujE" title="Flash Jetpack for reCompurer J601 by Jetson Develop Tool!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### ソフトウェアフラッシュのワークフロー

<details>

<summary> 手順 </summary>

**Step 1.** Seeed Jetson DevelopTool を起動し、**Flash Center** を開きます。**reComputer J601** と **JetPack 7.1 (L4T 38.4.0)** を選択します。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg"/></div>

**Step 2.** ホスト PC を **USB 3.0 Type-C フラッシュポート** に接続します。**RECOVERY** ボタンを押し続けたまま、XT30 を介して 19V ～ 48V DC 電源を接続し、2 秒後にボタンを離します。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg"/></div>

**Step 3.** **Detect Device** をクリックします。接続されている Jetson モジュール（例：**AGX Thor T5000**）が検出されていることを確認し、**Next** をクリックします。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg"/></div>

**Step 4.** **Download / Prepare BSP** をクリックします。ツールがファームウェアをダウンロードし、SHA256 チェックサムを検証し、BSP を自動的に展開します。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg"/></div>

**Step 5.** **Start Flash** をクリックし、インターフェースにフラッシュ完了と表示されるまで待ちます。この処理中は電源や USB ケーブルを抜かないでください。

:::caution
フラッシュを行うと、対象の NVMe SSD 上のデータは消去されます。作業を開始する前に重要なデータをバックアップしてください。
:::

**Step 6.** reComputer Robotics J601 を HDMI ディスプレイに接続し、初期システム設定を完了します。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</details>

</TabItem>

<TabItem value="command-line" label="コマンドラインフラッシュ">

ボード上の Jetson モジュールに対応する JetPack イメージをダウンロードしてフラッシュします。両製品とも同じ J601 キャリアボードを使用しているため、自分のモジュールに対応するタブを選択してください。

<Tabs groupId="j601-thor-module">

<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

#### JetPack イメージの準備

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Jetson Module</th>
      <th>Product</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T5000</td>
      <td>reComputer Robotics J6015</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAq5ofKK9Y1RaCzAfJ8-3J4ARhePBbGBc-mcjQ1bNAP0bY?e=CbmAN9" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>3f75780b43f6559bc950b6a97aa38fd6f61d4d001cce870bdfb498f64e6d18e5</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack イメージファイルは大容量のため、ダウンロードに約 60 分かかる場合があります。アーカイブを展開する前に、ダウンロードが完了するまでお待ちください。
:::

ダウンロードしたファームウェアを検証するには、Ubuntu ホスト上で `sha256sum <file>` を実行し、結果を表の SHA256 値と比較します。

#### Force Recovery モードに入る

:::info
フラッシュを行う前に、ボードが Force Recovery モードになっていることを確認してください。
:::

**ステップ 1.** Ubuntu ホスト PC と **USB 3.0 Type-C 書き込みポート** を USB Type-C データケーブルで接続します。

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**ステップ 2.** **RECOVERY** ボタンを押し続けます。

**ステップ 3.** 電源（XT30 経由の 19V ～ 48V DC）を接続します。

**ステップ 4.** 2 秒後に **RECOVERY** ボタンを離します。

**ステップ 5.** ホスト PC 上で `lsusb` を実行します。次のエントリが表示されれば、ボードが Force Recovery Mode に入っていることを確認できます：

- **0955:7026 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### Jetson への書き込み

**ステップ 1.** ダウンロードしたイメージを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**ステップ 2.** JetPack を NVMe SSD に書き込みます：

```bash
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

書き込みコマンドには通常 2～10 分かかります。次の出力が表示されれば、書き込みが正常に完了したことを示します：

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**ステップ 3.** reComputer Robotics J6015 を HDMI ディスプレイに接続し、初期システム設定を完了します。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

#### JetPack イメージの準備

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Jetson Module</th>
      <th>Product</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T4000</td>
      <td>reComputer Robotics J6014</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBofCO4bWF9SLdbLQE1V8DgAS1tW6-UmQGEH3ULOZ7W16o?e=zdnK3s" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>c63eddfe7005a088ab439c64fb5d3bf9a52b85d62d377c6a4bf829295f7222ef</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack イメージファイルは大容量のため、ダウンロードに約 60 分かかる場合があります。アーカイブを展開する前に、ダウンロードが完了するまでお待ちください。
:::

ダウンロードしたファームウェアを検証するには、Ubuntu ホスト上で `sha256sum <file>` を実行し、その結果を表の SHA256 値と比較します。

#### Force Recovery Mode に入る

:::info
書き込みを行う前に、ボードが Force Recovery Mode になっていることを確認してください。
:::

**ステップ 1.** Ubuntu ホスト PC と **USB 3.0 Type-C 書き込みポート** を USB Type-C データケーブルで接続します。

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**ステップ 2.** **RECOVERY** ボタンを押し続けます。

**ステップ 3.** 電源（XT30 経由の 19V ～ 48V DC）を接続します。

**ステップ 4.** 2 秒後に **RECOVERY** ボタンを離します。

**ステップ 5.** ホスト PC 上で `lsusb` を実行します。次のエントリが表示されれば、ボードが Force Recovery Mode に入っていることを確認できます：

- **0955:7226 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### Jetson への書き込み

**ステップ 1.** ダウンロードしたイメージを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**ステップ 2.** JetPack を NVMe SSD に書き込みます：

```bash
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

書き込みコマンドには通常 2～10 分かかります。次の出力が表示されれば、書き込みが正常に完了したことを示します：

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**ステップ 3.** reComputer Robotics J6014 を HDMI ディスプレイに接続し、初期システム設定を完了します。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

</Tabs>

⚙️ **Seeed の Jetson キャリアボード向けのすべての `.dts` ファイルおよびその他のソースコードは、** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) からダウンロードできます。

</TabItem>

</Tabs>

:::info
初回起動後は、ニーズに応じて **System Configuration** を完了してください。
:::

インターフェースの詳細な使用方法については、[Robotics J601 Hardware Interfaces Usage](/ja/recomputer_jetson_robotics_j601_interfaces_usage) を参照してください。

## J601 で何ができますか？

JetPack の書き込み後、以下のデモ Wiki を参照して、reComputer Robotics J601 上で何が構築できるかを確認してください。これらのカードは、**J601** または **Jetson Thor** に言及している公開済み Jetson の **Application** および **Other Devices** Wiki から自動的に生成されます。

<J601DemoGrid />

## リソース

- [reComputer J601 キャリアボード データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf)
- [reComputer J601 キャリアボード 回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf)
- [reComputer J601 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp)
- [Seeed NVIDIA Jetson 製品カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed NVIDIA Jetson 導入事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson AGX ワンペーパー](https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf)
- [Linux_for_Tegra BSP ソース](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [reComputer J601 キャリアボード 製品ページ](https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html)

## 技術サポート

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
