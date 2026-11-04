---
description: reComputer Rugged J40 入門ガイド
title: reComputer Rugged J40 入門ガイド
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - 入門ガイド
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg
slug: /jetson/recomputer_rugged_j401/getting_started
aliases:
  - /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 10/22/2026
  author: Dayu,Dongxu Jin
createdAt: '2026-03-04'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/ja/jetson/recomputer_rugged_j401/getting_started/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {ruggedJ401DocNav} from '@site/src/data/jetson/productDocNavigation';

# reComputer Rugged J40 入門ガイド

<JetsonProductDocNav {...ruggedJ401DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">堅牢エッジ AI · NVIDIA Jetson</span>
    <h2>粉じん・水・振動が当たり前の現場に AI を導入</h2>
    <p>reComputer Rugged J40 は、NVIDIA Jetson Orin の性能に、IP66 等級のファンレス筐体とロック機構付き M12 コネクタを組み合わせた製品です。車両、港湾、農場、海上、各種産業現場などでの信頼性の高いエッジ AI 展開向けに設計されています。</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">reComputer Rugged J4012 を入手 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">JetPack から始める ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg" alt="reComputer Rugged J40 industrial edge AI computer" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>IP66</strong><span>粉じんと強力な噴流水からの保護</span></div>
  <div className="jetson-product-fact"><strong>最大 100 TOPS</strong><span>Jetson Orin NX 16GB によるエッジ AI 性能</span></div>
  <div className="jetson-product-fact"><strong>4× PoE GbE</strong><span>産業用 IP カメラへの給電と接続</span></div>
  <div className="jetson-product-fact"><strong>−20°C ～ 60°C</strong><span>0.7 m/s の気流でファンレス動作</span></div>
</div>

## Jetson 構成を選ぶ

どちらの構成も、同じ堅牢筐体と産業用インターフェースを採用しています。AI ワークロード、メモリ要件、導入時の電力枠に応じて Jetson モジュールを選択してください。

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">パフォーマンス構成</span>
    <h3>reComputer Rugged J4012</h3>
    <p>マルチカメラ・ビジョン、大規模 AI モデル、GPU とメモリ帯域幅の高さが効くワークロード向け。</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin NX</span>
      <span>16GB LPDDR5</span>
      <span>100 TOPS</span>
    </div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">効率重視構成</span>
    <h3>reComputer Rugged J3011</h3>
    <p>省電力なセンシング、モニタリング、テレメトリ、産業制御ワークロード向け。</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin Nano</span>
      <span>8GB LPDDR5</span>
      <span>40 TOPS</span>
    </div>
  </article>
</div>

## reComputer Rugged J40 を選ぶ理由

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>シールドされた M12 接続</strong><span>ロック機構付きコネクタにより、モバイル環境や屋外設置でも電源・ネットワーク・I/O の安定性を維持します。</span></div>
  <div className="jetson-product-feature"><strong>ファンレスのパッシブ冷却</strong><span>可動ファンをなくすことで、粉じん環境でのメンテナンス負荷を軽減し、静音動作を実現します。</span></div>
  <div className="jetson-product-feature"><strong>産業用 I/O</strong><span>絶縁 CAN-FD、RS-232/422/485、デジタル I/O により、センサ、アクチュエータ、コントローラへ直接接続できます。</span></div>
  <div className="jetson-product-feature"><strong>カメラ対応ネットワーク</strong><span>4 ポートの PoE GbE により、1 本のケーブルで電源とデータを供給し、マルチカメラシステムを簡素化します。</span></div>
  <div className="jetson-product-feature"><strong>無線拡張</strong><span>M.2 Key E および Key B スロットで、Wi-Fi、Bluetooth、5G、GPS の拡張に対応します。</span></div>
  <div className="jetson-product-feature"><strong>車載・屋外展開</strong><span>広い入力電圧範囲、耐振動性、IP66 筐体により、AMR、車両、船舶、フィールド機器への搭載に適しています。</span></div>
</div>

## 仕様

<div className="jetson-product-table-wrap">
<table>
  <thead>
    <tr>
      <th colSpan={2}>製品名</th>
      <th>reComputer Rugged J4012</th>
      <th>reComputer Rugged J3011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>100046979</td>
      <td>100002634</td>
    </tr>
    <tr>
      <td colSpan={2}>NVIDIA Jetson モジュール</td>
      <td>Orin NX 16GB</td>
      <td>Orin Nano 8GB</td>
    </tr>
    <tr>
      <td rowSpan={4}>プロセッサシステム</td>
      <td>AI 性能</td>
      <td>100 TOPS</td>
      <td>40 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1024 コア NVIDIA Ampere、32 Tensor コア</td>
      <td>1024 コア NVIDIA Ampere、32 Tensor コア</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 コア Arm Cortex-A78AE v8.2 64-bit、2MB L2 + 4MB L3</td>
      <td>6 コア Arm Cortex-A78AE v8.2 64-bit、1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>16GB 128-bit LPDDR5 @ 102.4 GB/s</td>
      <td>8GB 128-bit LPDDR5 @ 68 GB/s</td>
    </tr>
    <tr>
      <td rowSpan={2}>ストレージ</td>
      <td>eMMC</td>
      <td colSpan={2}>—</td>
    </tr>
    <tr>
      <td>拡張</td>
      <td colSpan={2}>M.2 Key M (2280) NVMe SSD — 128 GB 付属</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={2}>4× GbE PoE PSE (802.3af, M12 防水) + 1× GbE (M12 防水)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={2}>4× USB 3.2 Type-A (M12 防水) + 1× USB 2.0/3.0 Type-C (フラッシュ用、防水キャップ付き) + 1× USB Type-C (デバッグ)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={2}>1× HDMI（防水キャップ付き）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={2}>2× CAN-FD（絶縁、120 Ω）M12 A コード 8 ピン経由</td>
    </tr>
    <tr>
      <td>シリアル</td>
      <td colSpan={2}>1× RS-232/422/485 M12 A コード 8 ピン経由</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={2}>2× DI + 2× DO（M12 12 ピン / 8 ピン）</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={2}>1× Nano SIM カードスロット</td>
    </tr>
    <tr>
      <td>アンテナ</td>
      <td colSpan={2}>4× SMA 防水アンテナコネクタ</td>
    </tr>
    <tr>
      <td rowSpan={2}>拡張</td>
      <td>M.2 Key E</td>
      <td colSpan={2}>Wi-Fi / Bluetooth モジュール（オプション）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={2}>5G / GPS モジュール（オプション）</td>
    </tr>
    <tr>
      <td rowSpan={2}>電源</td>
      <td>入力</td>
      <td colSpan={2}>19～48 V DC（M12 B/A コードコネクタ経由）</td>
    </tr>
    <tr>
      <td>消費電力</td>
      <td colSpan={2}>標準 25 W、ヒューズ 10 A</td>
    </tr>
    <tr>
      <td rowSpan={6}>環境</td>
      <td>保護等級</td>
      <td colSpan={2}>IP66</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan={2}>−20°C ～ +60°C（0.7 m/s の気流あり）</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td colSpan={2}>10～95% RH（結露なきこと）</td>
    </tr>
    <tr>
      <td>振動</td>
      <td colSpan={2}>3 Grms @ 5～500 Hz、ランダム、各軸 1 時間</td>
    </tr>
    <tr>
      <td>寸法</td>
      <td colSpan={2}>210 mm × 190 mm × 93 mm</td>
    </tr>
    <tr>
      <td>色</td>
      <td colSpan={2}>シルバーグレー（ミッドフレーム：シルバー、ヒートシンク：ブラック）</td>
    </tr>
    <tr>
      <td colSpan={2}>認証</td>
      <td colSpan={2}>CE、FCC、RoHS、REACH</td>
    </tr>
    <tr>
      <td colSpan={2}>保証</td>
      <td colSpan={2}>2 年</td>
    </tr>
  </tbody>
</table>
</div>

## ハードウェア概要

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw1.png" alt="Side view of reComputer Rugged J40 showing its industrial connectors" />
    <figcaption>側面図 · ネットワーク、USB、ディスプレイ、アンテナ接続</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw2.png" alt="Opposite side view of reComputer Rugged J40" />
    <figcaption>側面図 · 電源、シリアル、CAN、デジタル I/O 接続</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw3.png" alt="Bottom view of reComputer Rugged J40" />
    <figcaption>底面図 · 取付けおよび筐体レイアウト</figcaption>
  </figure>
</div>

### LED インジケータ

| LED | 色 | 状態 | 説明 |
| --- | --- | --- | --- |
| PWR | Green | On | デバイスに電源が供給されています |
| PWR | Green | Off | デバイスに電源が供給されていません |
| ACT | Green | Flashing | SSD アクセス動作中 |

コネクタのピン配置、インターフェース設定、拡張手順については、[ハードウェア & I/O ガイド](/ja/jetson/recomputer_rugged_j401/hardware_and_interface_usage/)を参照してください。

## JetPack をフラッシュする {#flash-jetpack}

ワークフローは順番に実行してください。番号付きレイアウトにより、ホストの準備、リカバリモードでの操作、ターミナルコマンドを 1 か所にまとめています。

<div className="jetson-product-step-flow">
<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>BSP を選択してダウンロード</h3>
    <p className="jetson-product-step-label">ステップ 1 · Jetson 構成に正確に一致するイメージを選択</p>

インストールされている Jetson モジュール用の **JetPack 5.1.3 (L4T 35.5.0)** BSP をダウンロードします。アーカイブのファイル名にはリリースラベル `5.1` が保持されています。

<div className="jetson-product-table-wrap">
<table>
  <thead>
    <tr>
      <th>製品 / Jetson モジュール</th>
      <th>JetPack / L4T</th>
      <th>ダウンロード / アーカイブ</th>
      <th>SHA-256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Rugged J4012<br />Orin NX 16GB</td>
      <td>5.1.3 / 35.5.0</td>
      <td style={{overflowWrap: 'anywhere'}}><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCTCt8CNcDhSYb9sVlDWdTLAQWV47b54hu7OGhE-iy0J70?e=ujtu74" target="_blank" rel="noopener noreferrer">NX 16GB BSP をダウンロード ↗</a><br />mfi_recomputer-rugged-orin-nx-16g-j401-5.1-35.5.0-2026-04-01.tar.gz</td>
      <td style={{overflowWrap: 'anywhere'}}>78c6ad751ce9bd838fbb69d06e46f3c06f27c5d7ccde0530e0a186291880150a</td>
    </tr>
    <tr>
      <td>reComputer Rugged J3011<br />Orin Nano 8GB</td>
      <td>5.1.3 / 35.5.0</td>
      <td style={{overflowWrap: 'anywhere'}}><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQA4j5l0BMl2RbhGbHYtgPQIAc0Pm3deaM3xaxi8eIRE8mw?e=d29vR4" target="_blank" rel="noopener noreferrer">Nano 8GB BSP をダウンロード ↗</a><br />mfi_recomputer-rugged-orin-nano-8g-j401-5.1-35.5.0-2026-04-01.tar.gz</td>
      <td style={{overflowWrap: 'anywhere'}}>ca65466ccaf38e205fdf931a98ce7bb97b1b65a91f38cc69b284beafce099f33</td>
    </tr>
  </tbody>
</table>
</div>

Ubuntu ホスト上で `sha256sum` を使ってダウンロードしたファイルを検証し、出力全体を上記の対応する値と比較します：

```bash
# Orin NX 16GB (J4012)
sha256sum mfi_recomputer-rugged-orin-nx-16g-j401-5.1-35.5.0-2026-04-01.tar.gz

# Orin Nano 8GB (J3011)
sha256sum mfi_recomputer-rugged-orin-nano-8g-j401-5.1-35.5.0-2026-04-01.tar.gz
```

:::warning
Rugged キャリアボードと、搭載されている Jetson モジュールの両方に一致するイメージを使用してください。ダウンロードが完了するまで待ち、アーカイブを展開する前に SHA-256 を確認します。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>機材を準備する</h3>
    <p className="jetson-product-step-label">ステップ 2 · Ubuntu ホストとケーブルをセットアップする</p>

デバイスの接続を外す、または電源を切る前に、次のものを準備してください：

- reComputer Rugged J4012 または J3011
- 19–48 V DC 電源
- これらの JetPack 5.1.3 パッケージ用の物理 Ubuntu 20.04 ホスト PC
- 書き込み用 USB Type-C データケーブル
- 外部モニタと HDMI ケーブル
- キーボードとマウス

:::tip
可能な限り物理 Ubuntu ホストを使用してください。仮想マシンでの USB パススルーは、書き込みプロセスを中断させる可能性があります。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>強制リカバリモードに入る</h3>
    <p className="jetson-product-step-label">ステップ 3 · DEVICE ポートを接続し USB ID を確認する</p>

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/rugged_J401/1.jpg" alt="reComputer Rugged J40 の書き込みに使用するリカバリボタンと DEVICE ポート" />

1. **DEVICE** ポートと Ubuntu ホストの間を USB Type-C データケーブルで接続します。
2. **REC** ボタンを押し続けます。
3. **REC** を押したまま、電源を接続してデバイスの電源を入れます。
4. **REC** ボタンを離します。
5. Ubuntu ホスト上で、Jetson が検出されていることを確認します：

```bash
lsusb
```

構成ごとの想定出力：

| 製品 | Jetson モジュール | 想定 USB ID |
| --- | --- | --- |
| reComputer Rugged J4012 | Orin NX 16GB | `0955:7323 NVidia Corp` |
| reComputer Rugged J3011 | Orin Nano 8GB | `0955:7523 NVidia Corp` |

想定される ID が表示されない場合は、USB ケーブルを再接続し、ホスト側の別の USB ポートを試し、続行する前にリカバリ手順を繰り返してください。

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>イメージを展開して書き込む</h3>
    <p className="jetson-product-step-label">ステップ 4 · Ubuntu ホストから一括書き込みパッケージを実行する</p>

ダウンロードしたイメージを含むディレクトリに移動し、自分のモジュール用のアーカイブを展開します：

```bash
cd <path-to-image>
# Orin NX 16GB (J4012)
sudo tar xpf mfi_recomputer-rugged-orin-nx-16g-j401-5.1-35.5.0-2026-04-01.tar.gz

# Orin Nano 8GB (J3011): use this archive instead
# sudo tar xpf mfi_recomputer-rugged-orin-nano-8g-j401-5.1-35.5.0-2026-04-01.tar.gz
```

`tools/kernel_flash/l4t_initrd_flash.sh` を含む展開済み BSP ディレクトリに入り、書き込みを開始します。`<extracted-bsp-directory>` はそのディレクトリの実際の名前に置き換えてください：

```bash
cd <extracted-bsp-directory>
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

ターミナルに書き込みが正常に完了したと表示されるまで待ちます。その後、USB ケーブルを取り外し、reComputer の電源を入れ直し、モニタと入力デバイスを接続して、Ubuntu の初回起動セットアップを完了します。

  </div>
</section>
</div>

:::tip オプション：他の Jetson キャリアボードを探る
セットアップ完了後、他の Seeed Jetson キャリアボード向けのファームウェアダウンロードと書き込み手順を確認できます。

<div className="jetson-product-actions">
  <a className="jetson-product-button jetson-product-button--secondary" href="/ja/flash/jetpack_to_selected_product/" target="_blank" rel="noopener noreferrer">他の Jetson 書き込みガイドを閲覧 ↗</a>
</div>

:::

## アプリケーション {#applications}

reComputer Rugged J40 ハードウェアと、実運用可能なエッジ AI ワークフローを組み合わせたアプリケーション例を紹介します。新しい例は利用可能になり次第、このコレクションに追加されます。

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="/ja/jetson/recomputer_rugged_j401/industrial_vision/" aria-label="フォークリフト向け産業用ビジョンアプリケーションを開く">
      <img src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="reComputer Rugged J401 によって実現されるフォークリフト向け産業用ビジョンアプリケーション" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="アプリケーションの機能">
        <span>検出</span>
        <span>推論ベンチマーク</span>
      </div>
      <h3><a href="/ja/jetson/recomputer_rugged_j401/industrial_vision/">フォークリフト向け産業用ビジョン</a></h3>
      <p>reComputer Rugged J401 上で、マルチカメラ検出、距離警告、ドライバー監視、ターゲット追跡、および測定済み Jetson 推論ワークロードを展開します。</p>
    </div>
  </article>
</div>

## リソース

機構設計への組み込み、キャリアボード設計レビュー、BSP 開発、および Jetson プラットフォーム選定のために、これらのファイルを使用してください。

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>製品データシート</strong><small>電気的、機械的、および環境仕様</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>キャリアボード回路図</strong><small>キャリアボードの回路および信号配線のレビュー</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PSE</span>
    <span className="jetson-product-resource-copy"><strong>PSE ボード回路図</strong><small>PoE 電源供給回路設計リファレンス</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>3D メカモデル</strong><small>取り付けおよび筐体設計用の STEP アセンブリ</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Linux_for_Tegra ソース</strong><small>Seeed Jetson BSP ソースおよびカスタマイズ用リソース</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CMP</span>
    <span className="jetson-product-resource-copy"><strong>Jetson デバイス比較</strong><small>Jetson モジュールと Seeed キャリアプラットフォームを比較</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>

</div>
