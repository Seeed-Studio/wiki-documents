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
  date: 10/19/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-10-19'
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
    <span className="jetson-product-eyebrow">ロボティクスと Physical AI · NVIDIA Jetson AGX Thor</span>
    <h2>1 枚のロボティクスキャリアボードで知覚と制御をつなぐ</h2>
    <p>reComputer Robotics J601 キャリアボードは、NVIDIA Jetson AGX Thor T5000 および T4000 モジュールに対応し、マルチカメラ知覚、センサーフュージョン、エンボディド AI 開発に使用できます。高速 Ethernet、GMSL2 カメラ拡張、絶縁されたロボティクス I/O を Jetson ソフトウェアプラットフォームと組み合わせます。</p>
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
  <div className="jetson-product-fact"><strong>最大 2070 TFLOPS</strong><span>Jetson AGX Thor T5000 モジュール装着時の AI 性能</span></div>
  <div className="jetson-product-fact"><strong>最大 4× 10GbE</strong><span>T5000 は RJ45 が 4 ポート、T4000 は 3 ポート</span></div>
  <div className="jetson-product-fact"><strong>最大 8× GMSL2</strong><span>2 枚の GMSL 拡張ボード経由でマルチカメラ入力</span></div>
  <div className="jetson-product-fact"><strong>19–48 V DC</strong><span>XT30 電源コネクタによる広い入力電圧範囲</span></div>
</div>

## Jetson 構成を選ぶ

J601 は**キャリアボード**です。構成に合わせて、対応する Jetson AGX Thor モジュール、NVMe SSD、冷却ソリューションを選択してください。以下の J6015 と J6014 は、このガイドで使うモジュール別の構成と BSP パッケージを示します。

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T5000 構成</span>
    <h3>reComputer Robotics J6015</h3>
    <p>有効な 10GbE が 4 ポート、絶縁 CAN が 4 系統の構成には T5000 BSP を使用します。</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T5000</span><span>4× 10GbE</span><span>4× CAN FD</span></div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">T4000 構成</span>
    <h3>reComputer Robotics J6014</h3>
    <p>有効な 10GbE が 3 ポート、絶縁 CAN が 2 系統の構成には T4000 BSP を使用します。</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T4000</span><span>3× 10GbE</span><span>2× CAN FD</span></div>
  </article>
</div>

対応モジュール：[NVIDIA Jetson AGX Thor T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html) および [NVIDIA Jetson AGX Thor T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html)。

## reComputer Robotics J601 を選ぶ理由

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>マルチカメラ知覚</strong><span>GMSL 拡張ボードは最大 8 台の GMSL2 カメラに対応し、サラウンド知覚とセンサーフュージョンに使えます。</span></div>
  <div className="jetson-product-feature"><strong>高速ネットワーク</strong><span>最大 4 系統の 10GbE RJ45 で、センサー、計算ノード、開発用システム間のデータを運びます。</span></div>
  <div className="jetson-product-feature"><strong>ロボティクス I/O</strong><span>絶縁 CAN FD、RS-232/422/485、I2C、I2S、デジタル I/O で、コントローラ、センサー、アクチュエータを接続します。</span></div>
  <div className="jetson-product-feature"><strong>モジュラー拡張</strong><span>M.2 Key M は NVMe 2280 SSD に、Key E と Key B は対応する Wi-Fi/Bluetooth および 4G/5G モジュールに対応します。</span></div>
  <div className="jetson-product-feature"><strong>開発用接続</strong><span>USB 3.2 Type-A が 4 ポート、HDMI 2.1 で周辺機器とディスプレイを接続し、デバッグ用とリカバリ用の USB-C は別ポートです。</span></div>
  <div className="jetson-product-feature"><strong>Physical AI ワークフロー</strong><span>NVIDIA Isaac、ROS、PyTorch、Hugging Face などのフレームワークを、各フレームワークのプラットフォーム要件に従って Jetson 上で構築できます。</span></div>
</div>

## 仕様

<div className="jetson-product-table-wrap">
<table>
  <thead><tr><th scope="col">インターフェース / 項目</th><th scope="col">J601 キャリアボード</th></tr></thead>
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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg" alt="reComputer Robotics J601 側面図 1 · キャリアボードのコネクタ" loading="lazy" />
    <figcaption>側面図 1 · キャリアボードのコネクタ</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg" alt="reComputer Robotics J601 側面図 2 · その他のインターフェース" loading="lazy" />
    <figcaption>側面図 2 · その他のインターフェース</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg" alt="reComputer Robotics J601 底面図 · 拡張スロットと基板レイアウト" loading="lazy" />
    <figcaption>底面図 · 拡張スロットと基板レイアウト</figcaption>
  </figure>
</div>

| インジケータ | 色 | 役割 |
| --- | --- | --- |
| PWR | 緑 | 電源表示 |
| SSD | 緑 | ストレージ動作表示 |
| USR | RGB | ユーザー制御のステータス LED |

コネクタのピン配置、配線、インターフェーステスト、RGB LED 制御は[ハードウェアと I/O](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/)を開いてください。

## JetPack をフラッシュ {#flash-jetpack}

この手順では、J601 キャリアボードの NVMe SSD に **JetPack 7.1（L4T 38.4.0）** をインストールします。装着されているモジュールに合わせて BSP を選択してください。**T5000 は J6015、T4000 は J6014** です。

:::caution
フラッシュすると、対象の NVMe SSD 上のデータは消去されます。開始前に重要なデータをバックアップし、完了まで電源と USB を接続したままにしてください。
:::

<div className="jetson-product-step-flow">

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>機材を準備する</h3>
    <p className="jetson-product-step-label">ステップ 1 · Ubuntu ホストと対象ハードウェアを用意する</p>

次の機材を準備します。

- Jetson AGX Thor T5000 または T4000 モジュールと適切な冷却を取り付けた J601 キャリアボード
- Key M スロットに取り付けた NVMe M.2 2280 SSD
- XT30 経由で接続した 19–48 V DC 電源
- 空き容量が **220 GB 以上**の物理 Ubuntu **22.04 または 24.04** ホスト PC
- USB Type-C **データ**ケーブル
- 初回起動用の HDMI ディスプレイ、キーボード、マウス

:::tip
物理 Ubuntu ホストが最も安定してフラッシュできます。Seeed Jetson DevelopTool は WSL2 経由で Windows にも対応します。ホストのセットアップは[インストールガイド](/jetson_developtool_installation/)に従ってください。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>強制リカバリモードに入る</h3>
    <p className="jetson-product-step-label">ステップ 2 · J4 を接続し、装着モジュールを確認する</p>

1. ボードの電源を切った状態で、ホスト PC を **USB 3.0 Type-C リカバリ／フラッシュポート（J4）** に接続します。USB 2.0 Type-C デバッグポート（J3）は別のコネクタです。
2. **RECOVERY** を押し続けます。
3. XT30 経由で 19–48 V DC 電源を接続します。
4. 2 秒後に **RECOVERY** を放します。
5. Ubuntu ホストで次のコマンドを実行します。

```bash
lsusb
```

| 構成 | モジュール | 想定されるリカバリ USB ID |
| --- | --- | --- |
| J6015 | AGX Thor T5000 | `0955:7026 NVIDIA Corp.` |
| J6014 | AGX Thor T4000 | `0955:7226 NVIDIA Corp.` |

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg" alt="J601 の USB-C フラッシュポートとリカバリボタンの接続" loading="lazy" />

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg" alt="J601 が強制リカバリモードのときの Ubuntu ホストの lsusb 出力" loading="lazy" />

想定 ID が表示されない場合は、データケーブルとリカバリポートを確認し、リカバリ手順をやり直してから続行してください。

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>対応する BSP を準備する</h3>
    <p className="jetson-product-step-label">ステップ 3 · ソフトウェアまたはコマンドラインのフラッシュを選ぶ</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="ソフトウェアフラッシュ" default>

[Seeed Jetson DevelopTool](/jetson_developtool_installation/) をインストールして起動し、ファームウェアを準備します。

1. **Flash Center** を開き、**reComputer J601** と **JetPack 7.1 (L4T 38.4.0)** を選択します。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg" alt="reComputer J601 を選択した Jetson DevelopTool の Flash Center" loading="lazy" />

2. ステップ 2 のリカバリ配線を確認します。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg" alt="Jetson DevelopTool 用の J601 電源と USB 接続" loading="lazy" />

3. **Detect Device** をクリックし、装着モジュールを確認して **Next** をクリックします。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg" alt="AGX Thor モジュールを検出する Jetson DevelopTool" loading="lazy" />

4. **Download / Prepare BSP** をクリックします。ツールがファームウェアをダウンロードし、SHA-256 チェックサムを検証してパッケージを展開します。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg" alt="J601 BSP をダウンロードして準備する Jetson DevelopTool" loading="lazy" />

<details>
<summary>Jetson DevelopTool のフラッシュチュートリアルを見る</summary>

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/O2rlSOdYujE" title="Seeed Jetson DevelopTool で reComputer J601 に JetPack をフラッシュする" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

</details>

</TabItem>
<TabItem value="command-line" label="コマンドラインフラッシュ">

以下の**モジュール別** BSP パッケージをダウンロードします。アーカイブは大きいため、ダウンロードに約 60 分かかることがあります。展開する前にダウンロード完了を待ってください。

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
      <th>ダウンロード</th>
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
      <th>ダウンロード</th>
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

Ubuntu ホストでダウンロードしたアーカイブを検証し、結果全体を使用モジュールのチェックサムと比較します。

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
    <p className="jetson-product-step-label">ステップ 4 · 同じフラッシュ方法とモジュール選択を使う</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="ソフトウェアフラッシュ" default>

Jetson DevelopTool で **Start Flash** をクリックし、インターフェースが成功を報告するまで待ちます。処理中は電源と USB データケーブルを接続したままにしてください。

</TabItem>
<TabItem value="command-line" label="コマンドラインフラッシュ">

Ubuntu ホストでアーカイブを展開し、装着モジュール用のコマンドを実行します。`YYYY-MM-DD` は、ダウンロードしたアーカイブのファイル名にある日付に置き換えてください。

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

フラッシュコマンドは通常 2～10 分かかります。ターミナルがフラッシュ成功を報告するまで待ってください。

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

HDMI ディスプレイ、キーボード、マウスを接続し、Ubuntu の初期システム設定を完了します。フラッシュツールが成功を報告したあとに設定画面が表示されない場合は、ボードの電源を入れ直してください。

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png" alt="Jetson Ubuntu の初回起動設定画面の例" loading="lazy" />

周辺機器の確認は[ハードウェアと I/O](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/)へ、デモは[知覚デモ](#applications)へ進んでください。Seeed キャリアボードのデバイスツリーと BSP ソースは [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) で入手できます。

  </div>
</section>

</div>

## アプリケーション {#applications}

reComputer Robotics J601 向けのカメラと LiDAR の知覚サンプルから始められます。

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer" aria-label="J601 マルチカメラと LiDAR 知覚デモのリポジトリを開く">
      <img src="https://img.youtube.com/vi/gFFaiGvRdtg/hqdefault.jpg" alt="J601 カメラと LiDAR 知覚デモの動画プレビュー" loading="lazy" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="アプリケーションの機能"><span>検出</span><span>センサーフュージョン</span><span>BEV</span></div>
      <h3><a href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">マルチカメラと LiDAR 知覚</a></h3>
      <p>6 系統のカメラストリームと LiDAR データを再生しながら、Jetson が TensorRT 検出、道路セグメンテーション、幾何学的な鳥瞰融合、姿勢に合わせたローカルマッピングを実行し、ブラウザ表示を同期します。</p>
    </div>
  </article>
</div>

### 知覚デモを見る

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/gFFaiGvRdtg" title="reComputer J601 のマルチカメラと LiDAR 知覚デモ" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">デモとデプロイガイドを入手 ↗</a>
  <a className="jetson-product-button jetson-product-button--secondary" href="https://youtu.be/gFFaiGvRdtg" target="_blank" rel="noopener noreferrer">YouTube で見る ↗</a>
</div>

リポジトリに記載されている検証環境は **JetPack 7.2 / L4T R39.2、CUDA 13.2、TensorRT 10.16.2** です。環境とデプロイの手順に従ってください。このページの **JetPack 7.1** フラッシュパッケージは、それとは別のソフトウェアベースラインです。TensorRT エンジンは、インストール済みのソフトウェアバージョンに合わせてターゲットデバイス上でビルドしてください。

このデモは、記録済みの nuScenes データと、カメラ／LiDAR の幾何学的融合を使用します。ローカルマップはデータセットが提供する姿勢を使用します。nuScenes 上のセグメンテーション精度は評価されていません。検証条件、データセットとモデルのライセンスはリポジトリを参照してください。

## リソース {#resources}

基板の組み込み、機構設計、BSP 開発には次のリソースを使用します。

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>キャリアボード データシート</strong><small>コネクタピン配置、電気的制限、基板仕様</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>キャリアボード回路図</strong><small>J601 V1.0 の回路と信号配線</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>3D 機構モデル</strong><small>取り付けと筐体検討用の STEP モデル</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Linux_for_Tegra ソース</strong><small>Seeed Jetson BSP とデバイスツリーのソース</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SHOP</span>
    <span className="jetson-product-resource-copy"><strong>J601 キャリアボード</strong><small>Jetson AGX Thor キャリアボードの購入オプション</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Jetson 製品カタログ</strong><small>Seeed の NVIDIA Jetson 製品を見る</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CASE</span>
    <span className="jetson-product-resource-copy"><strong>Jetson 導入事例</strong><small>エッジ AI アプリケーションの展開例</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Jetson AGX ワンページャー</strong><small>Seeed Jetson AGX プラットフォームの概要</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed コミュニティフォーラム"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Seeed サポートに連絡"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord コミュニティ"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki 製品ディスカッション"></a>
</div>

</div>
