---
description: reComputer Robotics J50 Mini 入門ガイド
title: reComputer Robotics J50 Mini 入門ガイド
keywords:
  - reComputer Robotics
  - reComputer Robotics J50 Mini
  - Jetson
  - 入門ガイド
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg
slug: /ai_robotics_recomputer_j501_robotics_getting_started
sku: 100085113
last_update:
  date: 11/16/2026
  author: Shijun
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
url: https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_robotics_j50_mini_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';
import { getL4TData } from '@site/src/components/jetson/DownloadLink';

# reComputer Robotics J50 Mini 入門ガイド

<div align="center">
  <img width="600" alt="reComputer Mini J501 complete system" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg" />
</div>

reComputer Robotics J50 Mini（reComputer Mini J501）は、ロボティクスおよび組み込み AI 開発向けのコンパクトなエッジ AI コンピュータで、**NVIDIA Jetson AGX Orin 32GB を搭載した J5011** と **NVIDIA Jetson AGX Orin 64GB を搭載した J5012** の構成があります。どちらの GMSL 構成にも、**128GB NVMe SSD** と **8 チャンネル GMSL 拡張ボード** が含まれます。筐体サイズは **119 × 119 × 100 mm**、重量は **1325 g** です。

このプラットフォームは、NVIDIA Isaac ROS、ROS、PyTorch などの Jetson 対応ソフトウェアと組み合わせて、マルチカメラ認識、センサー統合、ロボット開発に利用できます。

:::note
カスタマイズ可能なオプション：ロゴブランディング、パッケージング、ファームウェア書き込み。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5011-with-GMSL-Extension-p-6876.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>J5011 · 32GB を購入 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>J5012 · 64GB を購入 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

## 特長

- **AGX Orin の性能:** 64GB モジュールで最大 275 TOPS を実現し、認識処理やエッジ AI ワークロードをサポートします。
- **コンパクトな筐体:** 119 × 119 mm のフットプリントで、スペースに制約のあるロボットへの組み込みに最適です。
- **カメラ接続:** GMSL 搭載の J5012 には、最大 8 台の GMSL2 カメラに対応する GMSL 拡張ボードが含まれます。対応カメラおよびドライバを使用してください。
- **有線および無線拡張:** 10GbE および 1GbE ネットワーキングに加え、Wi-Fi/Bluetooth 拡張用の M.2 Key E を搭載。
- **ロボティクス向け I/O:** 絶縁 CAN および RS485、デジタル入力/出力、I2S、USB、HDMI を搭載。
- **48V システム統合:** XT30 電源入力により、定格 19～48V DC の動作範囲と最大 54V の入力定格に対応します。

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Jetson AGX Orin システムオンモジュール</th></tr>
    <tr><th colSpan={2}>仕様</th><th>reComputer Mini J5011</th><th>reComputer Mini J5012</th></tr>
    <tr><td colSpan={2}>モジュール</td><td>NVIDIA Jetson AGX Orin 32GB</td><td>NVIDIA Jetson AGX Orin 64GB</td></tr>
    <tr><td colSpan={2}>AI 性能</td><td>最大 200 TOPS</td><td>最大 275 TOPS</td></tr>
    <tr><td colSpan={2}>GPU</td><td>1792 コア NVIDIA Ampere アーキテクチャ GPU<br />56 Tensor コア</td><td>2048 コア NVIDIA Ampere アーキテクチャ GPU<br />64 Tensor コア</td></tr>
    <tr><td colSpan={2}>GPU 最大周波数</td><td>930 MHz</td><td>1.3 GHz</td></tr>
    <tr><td colSpan={2}>CPU</td><td>8 コア Arm Cortex-A78AE</td><td>12 コア Arm Cortex-A78AE</td></tr>
    <tr><td colSpan={2}>CPU 最大周波数</td><td colSpan={2}>2.2 GHz</td></tr>
    <tr><td colSpan={2}>メモリ</td><td>32GB 256-bit LPDDR5<br />204.8 GB/s</td><td>64GB 256-bit LPDDR5<br />204.8 GB/s</td></tr>
    <tr><td colSpan={2}>モジュールストレージ</td><td colSpan={2}>64GB eMMC 5.1</td></tr>
    <tr><td colSpan={2}>ビデオエンコーダ</td><td>1 × 4K60 / 3 × 4K30 (H.265)<br />6 × 1080p60 / 12 × 1080p30 (H.265)</td><td>2 × 4K60 / 4 × 4K30 (H.265)<br />8 × 1080p60 / 16 × 1080p30 (H.265)</td></tr>
    <tr><td colSpan={2}>ビデオデコーダ</td><td>1 × 8K30 / 2 × 4K60 / 4 × 4K30 (H.265)<br />9 × 1080p60 / 18 × 1080p30 (H.265)</td><td>1 × 8K30 / 3 × 4K60 / 7 × 4K30 (H.265)<br />11 × 1080p60 / 22 × 1080p30 (H.265)</td></tr>
    <tr><td colSpan={2}>モジュール電力</td><td>15W / 40W</td><td>15W / 60W</td></tr>
    <tr><td colSpan={2}>JetPack</td><td colSpan={2}>JetPack 6.2 をプリインストール済み；JetPack 7.2 をサポート</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>キャリアボード</th></tr>
    <tr><td colSpan={2}>ストレージ</td><td colSpan={2}>128GB NVMe SSD 付属<br />1 × M.2 Key M（NVMe 2280 SSD 用）</td></tr>
    <tr><td rowSpan={2} style={{verticalAlign: 'middle'}}>ネットワーキング</td><td>Ethernet</td><td colSpan={2}>1 × RJ45 10GbE；1 × RJ45 1GbE</td></tr>
    <tr><td>無線拡張</td><td colSpan={2}>Wi-Fi/Bluetooth モジュール用 1 × M.2 Key E</td></tr>
    <tr><td rowSpan={10} style={{verticalAlign: 'middle'}}>I/O</td><td>USB</td><td colSpan={2}>2 × USB 3.2 Gen 2 Type-A (10Gbps)<br />1 × USB 2.0 Type-C（デバッグ）<br />1 × USB 3.0 Type-C（リカバリ）</td></tr>
    <tr><td>ディスプレイ</td><td colSpan={2}>1 × HDMI 2.1</td></tr>
    <tr><td>CAN</td><td colSpan={2}>2 × 絶縁 CAN</td></tr>
    <tr><td>RS485</td><td colSpan={2}>1 × 絶縁 RS485</td></tr>
    <tr><td>デジタル I/O</td><td colSpan={2}>4 × GPI (3.3V)；4 × GPO (3.3V)</td></tr>
    <tr><td>I2S</td><td colSpan={2}>1 × I2S (3.3V)</td></tr>
    <tr><td>ファン</td><td colSpan={2}>1 × 4 ピンファンコネクタ (12V PWM)</td></tr>
    <tr><td>RTC</td><td colSpan={2}>1 × 2 ピン RTC ヘッダ</td></tr>
    <tr><td>インジケータ</td><td colSpan={2}>PWR、ACT、USR LED</td></tr>
    <tr><td>ボタン</td><td colSpan={2}>1 × Reset；1 × Recovery</td></tr>
    <tr><td colSpan={2}>電源入力</td><td colSpan={2}>1 × XT30；19～48V DC；最大入力 54V</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>GMSL 拡張ボード</th></tr>
    <tr><td colSpan={2}>GMSL 接続</td><td colSpan={2}>GMSL 搭載構成の両方に付属<br />最大 8 台の GMSL2 カメラ用 2 × Mini-Fakra コネクタ</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>その他</th></tr>
    <tr><td rowSpan={3} style={{verticalAlign: 'middle'}}>機構</td><td>寸法 (W × D × H)</td><td colSpan={2}>119 × 119 × 100 mm</td></tr>
    <tr><td>重量</td><td colSpan={2}>1325 g</td></tr>
    <tr><td>設置方法</td><td colSpan={2}>デスクトップ</td></tr>
    <tr><td colSpan={2}>動作温度</td><td colSpan={2}>−10°C ～ 60°C</td></tr>
  </tbody>
</table>
</div>

## ハードウェア概要

<div align="center">
  <img width="800" alt="reComputer Mini J501 hardware overview 1" src="https://media-cdn.seeedstudio.com/cdn-cgi/image/format=auto%2Cwidth=3840%2Cquality=100/media/wysiwyg/111-photo/1.hard.100020407.png" />
</div>

<div align="center">
  <img width="800" alt="reComputer Mini J501 hardware overview 2" src="https://www.seeedstudio.com/media/catalog/product/h/a/hardware_img_2.jpg" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board top view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board side view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board bottom view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png" />
</div>


## JetPack OS のフラッシュ

このセクションでは、reComputer Robotics J50 Mini 内の NVMe SSD に Mini J501 のシステムイメージを書き込む方法を説明します。

### 対応する NVIDIA Jetson モジュール

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 前提条件

- Ubuntu ホスト PC
- Jetson AGX Orin モジュール、NVMe SSD、および対応する電源を備えた reComputer Robotics J50 Mini
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的な Ubuntu ホストデバイスを使用することを推奨します。
ホストマシンを準備する際は、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowSpan="2"> JetPack Version </td>
        <td class="dbon" colSpan="4"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> JetPack 7.2 では、Ubuntu 24.04 はフラッシュおよびターゲット側コンポーネントのインストールのみサポートされます。ホスト開発コンポーネントが必要な場合は、Ubuntu 20.04 または 22.04 を使用してください。</p>

:::

### JetPack イメージの準備

ここでは、使用している Jetson モジュールに対応したシステムイメージを Ubuntu PC にダウンロードする必要があります。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack Version</th>
      <th>Jetson Module</th>
      <th> GMSL </th>
      <th>Download Link1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>7.2</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-64g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack イメージファイルはサイズが大きく、ダウンロードに約 60 分かかる場合があります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、`sha256sum <File>` コマンドを実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全かつ正常であることが確認できます。
:::



### 強制リカバリーモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリーモードになっていることを確認する必要があります。
:::

<details>

<summary> 手順 </summary>

**ステップ 1.** **REC** ボタンを押し続けます。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface2.png" />
</div>

**ステップ 2.** 電源ケーブルを接続してキャリアボードの電源を入れ、その後 **REC** ボタンを離します。

**ステップ 3.** USB Type-C データ転送ケーブルで、ボードを Ubuntu ホスト PC に接続します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface1.png" />
</div>

**ステップ 4.** Linux ホスト PC でターミナルウィンドウを開き、`lsusb` コマンドを入力します。使用している Jetson SoM に応じて、返された内容に次のいずれかの出力が含まれていれば、ボードは強制リカバリーモードになっています。

- AGX Orin 32GB の場合: **0955:7223 NVidia Corp**
- AGX Orin 64GB の場合: **0955:7023 NVidia Corp**

以下の画像は AGX Orin 32GB の例です:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Jetson へのフラッシュ手順

**ステップ 1:** ダウンロードしたイメージファイルを解凍します:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_recomputer-mini-agx-orin-j501x-32g-7.2.0-39.2.0-2026-06-25.tar.gz
# For JetPack 6.2.1 example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**ステップ 2:** 次のコマンドを実行して、JetPack システムを NVMe SSD にフラッシュします:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2〜10 分かかる場合があります。
:::

**ステップ 3:** reComputer Robotics J50 Mini を HDMI でディスプレイに接続し、初期システム設定を完了します:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
ニーズに応じて **System Configuration** を完了してください。
:::

**ステップ 4（任意）:** NVIDIA JetPack SDK をインストールします。Jetson 上でターミナルを開き、次を実行します:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## ハードウェアインターフェースの使用

:::info[ハードウェアインターフェースガイド]
**コネクタのピン配置、配線、およびステップバイステップの使用手順については、下のボタンをクリックして Mini J501 インターフェースガイドを開いてください。**
:::

<div style={{display: 'flex', justifyContent: 'center', margin: '1rem 0'}}>
  <a className="button button--primary button--lg" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: '1.4', padding: '0.9rem 1.5rem'}} href="https://wiki.seeedstudio.com/ja/recomputer_j501_mini_getting_started/#-interfaces-usage" target="_blank" rel="noopener noreferrer">
    <span>ハードウェアインターフェースガイドを開く ↗</span>
  </a>
</div>

## リソース

- [Seeed Jetson BSP ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [完成システム ユーザーマニュアル & データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Mini_J501_Datasheet.pdf)
- [Mini J501 キャリアボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Mini%20J501%20Carrier%20Board_Rev1.0_SCH_251027.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。技術サポートおよび製品に関するディスカッションには、以下のチャネルをご利用ください。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum" aria-label="Seeed Studio forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email" aria-label="Contact Seeed Studio"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord" aria-label="Seeed Studio Discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion" aria-label="GitHub discussions"></a>
</div>
