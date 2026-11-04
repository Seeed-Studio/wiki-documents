---
description: NVIDIA Jetson AGX Thor モジュール向け reComputer Robotics J601 キャリアボードの入門ガイド。
title: reComputer Robotics J601 入門ガイド
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg
slug: /jetson/recomputer_robotics_j601/getting_started
aliases:
  - /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 10/22/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/ja/jetson/recomputer_robotics_j601/getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {roboticsJ601DocNav} from '@site/src/data/jetson/productDocNavigation';

# reComputer Robotics J601 入門ガイド

<JetsonProductDocNav {...roboticsJ601DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">ロボティクス &amp; フィジカル AI · NVIDIA Jetson AGX Thor</span>
    <h2>1 枚のロボティクスキャリアボードで認識と制御をつなぐ</h2>
    <p>reComputer Robotics J601 キャリアボードは、マルチカメラ認識、センサーフュージョン、エンボディド AI 開発のために、NVIDIA Jetson AGX Thor T5000 および T4000 モジュールをサポートします。高速 Ethernet、GMSL2 カメラ拡張、絶縁ロボティクス I/O を Jetson ソフトウェアプラットフォームと組み合わせて活用できます。</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">購入 · J601 キャリアボード ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">JetPack から始める ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" alt="NVIDIA Jetson AGX Thor モジュール向け reComputer Robotics J601 キャリアボード" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>最大 2070 TFLOPS</strong><span>Jetson AGX Thor T5000 モジュールによる AI 性能</span></div>
  <div className="jetson-product-fact"><strong>最大 4× 10GbE</strong><span>T5000 では RJ45 ポート 4 基、T4000 では 3 基</span></div>
  <div className="jetson-product-fact"><strong>最大 8× GMSL2</strong><span>2 枚の GMSL 拡張ボード経由のマルチカメラインプット</span></div>
  <div className="jetson-product-fact"><strong>19–48 V DC</strong><span>XT30 電源コネクタによる広範囲入力</span></div>
</div>

## Jetson 構成を選ぶ

J601 は**キャリアボード**です。ビルド用に、互換性のある Jetson AGX Thor モジュール、NVMe SSD、冷却ソリューションを選択してください。以下の J6015 と J6014 という名称は、本ガイドで使用するモジュール別構成および BSP パッケージを表します。

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T5000 構成</span>
    <h3>reComputer Robotics J6015</h3>
    <p>4 つの有効な 10GbE ポートと 4 系統の絶縁 CAN インターフェースを備えた構成には、T5000 用 BSP を使用します。</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T5000</span><span>4× 10GbE</span><span>4× CAN FD</span></div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T4000 構成</span>
    <h3>reComputer Robotics J6014</h3>
    <p>3 つの有効な 10GbE ポートと 2 系統の絶縁 CAN インターフェースを備えた構成には、T4000 用 BSP を使用します。</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T4000</span><span>3× 10GbE</span><span>2× CAN FD</span></div>
  </article>
</div>

対応モジュール：[NVIDIA Jetson AGX Thor T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html) および [NVIDIA Jetson AGX Thor T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html)。

## reComputer Robotics J601 を選ぶ理由

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>マルチカメラ認識</strong><span>GMSL 拡張ボードにより、周囲認識とセンサーフュージョン向けに最大 8 台の GMSL2 カメラをサポートします。</span></div>
  <div className="jetson-product-feature"><strong>高速ネットワーキング</strong><span>最大 4 系統の 10GbE RJ45 接続で、センサー、コンピュートノード、開発システム間のデータを伝送します。</span></div>
  <div className="jetson-product-feature"><strong>ロボティクス I/O</strong><span>絶縁 CAN FD、RS-232/422/485、I2C、I2S、デジタル I/O により、コントローラ、センサー、アクチュエータを接続します。</span></div>
  <div className="jetson-product-feature"><strong>モジュラー拡張</strong><span>M.2 Key M は NVMe 2280 SSD をサポートし、Key E と Key B は対応する Wi-Fi/Bluetooth および 4G/5G モジュールをサポートします。</span></div>
  <div className="jetson-product-feature"><strong>開発用接続性</strong><span>4 つの USB 3.2 Type-A ポートと HDMI 2.1 で周辺機器とディスプレイを接続し、別系統のデバッグ用およびリカバリ用 USB-C ポートも備えています。</span></div>
  <div className="jetson-product-feature"><strong>フィジカル AI ワークフロー</strong><span>NVIDIA Isaac、ROS、PyTorch、Hugging Face などのフレームワークを、それぞれのフレームワークのプラットフォーム要件に従って Jetson 上で活用できます。</span></div>
</div>

## 仕様

<div className="jetson-product-table-wrap">
<table>
  <thead><tr><th scope="col">インターフェース / プロパティ</th><th scope="col">J601 キャリアボード</th></tr></thead>
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
      <td>4x USB 3.2 Type-A（10Gbps、ホスト）、1x USB 2.0 Type-C（デバッグ）、1x USB 3.0 Type-C（リカバリ）</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>T5000 では 4x RJ45 10GbE、T4000 では 3x RJ45 10GbE</td>
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
      <td>T5000 では 4x CAN または T4000 では 2x CAN、1x RS-485、1x I2S、1x I2C、4x GPI、4x GPO</td>
    </tr>
    <tr>
      <td>オーディオ</td>
      <td>1x マイク入力および 1x オーディオ出力</td>
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
      <td>1x リカバリボタンおよび 1x リセットボタン</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>最大 8 台の GMSL2 カメラ用 2x Mini-Fakra コネクタ</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td>サーマルグリス使用時 -10°C ～ 60°C、サーマルパッド使用時 -10°C ～ 55°C</td>
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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg" alt="reComputer Robotics J601 側面図 1 · キャリアボードコネクタ" loading="lazy" />
    <figcaption>側面図 1 · キャリアボードコネクタ</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg" alt="reComputer Robotics J601 側面図 2 · 追加インターフェース" loading="lazy" />
    <figcaption>側面図 2 · 追加インターフェース</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg" alt="reComputer Robotics J601 底面図 · 拡張スロットとボードレイアウト" loading="lazy" />
    <figcaption>底面図 · 拡張スロットとボードレイアウト</figcaption>
  </figure>
</div>

| インジケータ | 色 | 役割 |
| --- | --- | --- |
| PWR | 緑 | 電源インジケータ |
| SSD | 緑 | ストレージ動作インジケータ |
| USR | RGB | ユーザー制御可能なステータス LED |

コネクタのピン配置、配線、インターフェーステスト、RGB LED 制御については、[ハードウェア & I/O](/ja/jetson/recomputer_robotics_j601/hardware_and_interface_usage/) を参照してください。

## JetPack をフラッシュする

このワークフローでは、J601 キャリアボード上の NVMe SSD に **JetPack 7.1（L4T 38.4.0）** をインストールします。搭載モジュールに応じて BSP を選択してください：**T5000 には J6015**、**T4000 には J6014**。

:::caution
フラッシュを行うと、対象 NVMe SSD 上のデータは消去されます。開始前に重要なデータをバックアップし、フラッシュが完了するまで電源と USB 接続を維持してください。
:::

<div className="jetson-product-step-flow">

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>機材を準備する</h3>
    <p className="jetson-product-step-label">ステップ 1 · Ubuntu ホストとターゲットハードウェアをセットアップする</p>

次の機材を準備します：

- Jetson AGX Thor T5000 または T4000 モジュールと適切な冷却機構を備えた J601 キャリアボード
- Key M スロットに装着した NVMe M.2 2280 SSD
- XT30 経由で接続された 19–48 V DC 電源
- **少なくとも 220 GB** の空きストレージを持つ物理 Ubuntu **22.04 または 24.04** ホスト PC
- USB Type-C **データ** ケーブル
- 初回起動用の HDMI ディスプレイ、キーボード、マウス

:::tip
ネイティブ Ubuntu ホストが最も安定したフラッシュ環境を提供します。Seeed Jetson DevelopTool は WSL2 を介した Windows もサポートしています。ホストのセットアップについては、その[インストールガイド](/ja/jetson_developtool_installation/)に従ってください。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>強制リカバリーモードに入る</h3>
    <p className="jetson-product-step-label">ステップ 2 · J4 を接続し、搭載モジュールを確認する</p>

1. ボードの電源がオフの状態で、ホスト PC を **USB 3.0 Type-C リカバリー/フラッシュポート (J4)** に接続します。USB 2.0 Type-C デバッグポート (J3) は別のコネクタです。
2. **RECOVERY** を押し続けます。
3. 19–48 V DC 電源を XT30 から接続します。
4. 2 秒後に **RECOVERY** を離します。
5. Ubuntu ホスト上で次のコマンドを実行します：

```bash
lsusb
```

| 構成 | モジュール | 期待されるリカバリー USB ID |
| --- | --- | --- |
| J6015 | AGX Thor T5000 | `0955:7026 NVIDIA Corp.` |
| J6014 | AGX Thor T4000 | `0955:7226 NVIDIA Corp.` |

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg" alt="J601 USB-C フラッシュポートとリカバリーボタンの接続" loading="lazy" />

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg" alt="J601 が強制リカバリーモードのときの Ubuntu ホストの lsusb 出力例" loading="lazy" />

期待される ID が表示されない場合は、データケーブルとリカバリーポートを確認し、続行する前にリカバリー手順をやり直してください。

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>対応する BSP を準備する</h3>
    <p className="jetson-product-step-label">ステップ 3 · ソフトウェアまたはコマンドラインでのフラッシュ方法を選択する</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="ソフトウェアでフラッシュ" default>

[Seeed Jetson DevelopTool](/ja/jetson_developtool_installation/) をインストールして起動し、ファームウェアを準備します：

1. **Flash Center** を開き、**reComputer J601** と **JetPack 7.1 (L4T 38.4.0)** を選択します。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg" alt="reComputer J601 が選択された Jetson DevelopTool の Flash Center" loading="lazy" />

2. ステップ 2 のリカバリー配線を確認します。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg" alt="Jetson DevelopTool 用の J601 の電源および USB 接続" loading="lazy" />

3. **Detect Device** をクリックし、搭載モジュールを確認してから **Next** をクリックします。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg" alt="AGX Thor モジュールを検出している Jetson DevelopTool" loading="lazy" />

4. **Download / Prepare BSP** をクリックします。ツールがファームウェアをダウンロードし、SHA-256 チェックサムを検証してからパッケージを展開します。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg" alt="J601 用 BSP をダウンロードおよび準備している Jetson DevelopTool" loading="lazy" />

<details>
<summary>Jetson DevelopTool のフラッシュチュートリアルを見る</summary>

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/O2rlSOdYujE" title="Seeed Jetson DevelopTool を使って reComputer J601 に JetPack をフラッシュする" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

</details>

</TabItem>
<TabItem value="command-line" label="コマンドラインでフラッシュ">

以下から **モジュール専用** の BSP パッケージをダウンロードします。アーカイブは大容量のため、ダウンロードには約 60 分かかる場合があります。展開する前にダウンロードが完了するまで待ちます。

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

<div className="jetson-product-table-wrap">
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
      <th>JetPack バージョン</th>
      <th>Jetson モジュール</th>
      <th>製品</th>
      <th>ダウンロードリンク</th>
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

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

<div className="jetson-product-table-wrap">
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
      <th>JetPack バージョン</th>
      <th>Jetson モジュール</th>
      <th>製品</th>
      <th>ダウンロードリンク</th>
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

</TabItem>
</Tabs>

Ubuntu ホスト上でダウンロードしたアーカイブを検証し、結果全体をお使いのモジュール用のチェックサムと比較します：

```bash
sha256sum <downloaded-archive.tar.gz>
```

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>NVMe SSD をフラッシュする</h3>
    <p className="jetson-product-step-label">ステップ 4 · 同じフラッシュ方法とモジュール選択を使用する</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="ソフトウェアでフラッシュ" default>

Jetson DevelopTool で **Start Flash** をクリックし、インターフェースに成功と表示されるまで待ちます。処理の間は電源と USB データケーブルを接続したままにしてください。

</TabItem>
<TabItem value="command-line" label="コマンドラインでフラッシュ">

Ubuntu ホスト上でアーカイブを展開し、搭載モジュール用のコマンドを実行します。`YYYY-MM-DD` はダウンロードしたアーカイブのファイル名に含まれる日付に置き換えてください。

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

</TabItem>
</Tabs>

フラッシュコマンドには通常 2〜10 分かかります。ターミナルにフラッシュ成功と表示されるまで待ちます。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt="Jetson のフラッシュ成功後のターミナル出力例" loading="lazy" />

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">5</span>
  <div className="jetson-product-step-content">
    <h3>初回起動を完了する</h3>
    <p className="jetson-product-step-label">ステップ 5 · Ubuntu を設定し、インターフェースを確認する</p>

HDMI ディスプレイ、キーボード、マウスを接続し、Ubuntu の初期システム設定を完了します。フラッシュ後にセットアップ画面が表示されない場合は、フラッシュツールで成功が報告されたあとにボードの電源を入れ直してください。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png" alt="Jetson Ubuntu の初回起動時の設定画面例" loading="lazy" />

[Hardware & I/O](/ja/jetson/recomputer_robotics_j601/hardware_and_interface_usage/) に進んで周辺機器を確認するか、[perception demo](#アプリケーション) を試してみてください。Seeed のキャリアボード用デバイスツリーおよび BSP ソースは [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) で公開されています。

  </div>
</section>

</div>

:::tip オプション：他の Jetson キャリアボードを試す
セットアップが完了したら、他の Seeed Jetson キャリアボード向けのファームウェアダウンロードとフラッシュ手順も参照できます。

<div className="jetson-product-actions">
  <a className="jetson-product-button jetson-product-button--secondary" href="/ja/flash/jetpack_to_selected_product/" target="_blank" rel="noopener noreferrer">他の Jetson フラッシュガイドを閲覧 ↗</a>
</div>

:::

## アプリケーション

reComputer Robotics J601 向けのカメラと LiDAR を用いた認識サンプルから始めましょう。

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer" aria-label="J601 マルチカメラおよび LiDAR 認識デモのリポジトリを開く">
      <img src="https://img.youtube.com/vi/gFFaiGvRdtg/hqdefault.jpg" alt="J601 カメラおよび LiDAR 認識デモの動画プレビュー" loading="lazy" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="アプリケーションの機能"><span>検出</span><span>センサーフュージョン</span><span>BEV</span></div>
      <h3><a href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">マルチカメラ &amp; LiDAR 認識</a></h3>
      <p>Jetson 上で TensorRT 検出、道路セグメンテーション、幾何学的な鳥瞰ビュー融合、姿勢に整合したローカルマッピングを実行しながら、6 つのカメラストリームと LiDAR データをリプレイし、ブラウザビューを同期表示します。</p>
    </div>
  </article>
</div>

### 認識デモを見る

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/gFFaiGvRdtg" title="reComputer J601 multi-camera and LiDAR perception demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">デモとデプロイメントガイドを入手 ↗</a>
  <a className="jetson-product-button jetson-product-button--secondary" href="https://youtu.be/gFFaiGvRdtg" target="_blank" rel="noopener noreferrer">YouTube で見る ↗</a>
</div>

このリポジトリでは、**JetPack 7.2 / L4T R39.2、CUDA 13.2、TensorRT 10.16.2** 上での検証について記載しています。環境構築とデプロイ手順についてはリポジトリの説明に従ってください。本ページの **JetPack 7.1** フラッシュパッケージは別のソフトウェアベースラインです。インストールされているソフトウェアバージョンに合わせて、ターゲットデバイス上で TensorRT エンジンをビルドしてください。

このデモは、記録済みの nuScenes データと幾何学的なカメラ/LiDAR 融合を使用します。ローカルマップにはデータセット提供の姿勢情報を使用しており、nuScenes 上でのセグメンテーション精度は評価されていません。検証条件およびデータセット/モデルのライセンスについては、リポジトリを参照してください。

## リソース

ボード統合、メカ設計、BSP 開発には、以下のリソースを活用してください。

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>キャリアボード データシート</strong><small>コネクタのピン配置、電気的制限、ボード仕様</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>キャリアボード回路図</strong><small>J601 V1.0 の回路および信号配線</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>3D メカモデル</strong><small>取り付けおよび筐体設計用の STEP モデル</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Linux_for_Tegra ソース</strong><small>Seeed Jetson BSP およびデバイスツリーのソース</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SHOP</span>
    <span className="jetson-product-resource-copy"><strong>J601 キャリアボード</strong><small>Jetson AGX Thor キャリアボードの購入オプション</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Jetson 製品カタログ</strong><small>Seeed NVIDIA Jetson 製品を閲覧</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CASE</span>
    <span className="jetson-product-resource-copy"><strong>Jetson 導入事例</strong><small>エッジ AI アプリケーションにおける導入例</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Jetson AGX ワンペーパー</strong><small>Seeed Jetson AGX プラットフォーム概要</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## 技術サポート & 製品ディスカッション


弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed community forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed support"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord community"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki product discussion"></a>
</div>

</div>
