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
  date: 09/30/2026
  author: Dayu,Dongxu Jin
createdAt: '2026-03-04'
updatedAt: '2026-09-30'
url: https://wiki.seeedstudio.com/ja/jetson/recomputer_rugged_j401/getting_started/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {ruggedJ401DocNav} from '@site/src/data/jetson/productDocNavigation';
import Link from '@docusaurus/Link';

# reComputer Rugged J40 入門ガイド

<JetsonProductDocNav {...ruggedJ401DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">堅牢エッジ AI · NVIDIA Jetson</span>
    <h2>粉じん、水、振動が日常の現場へ AI を展開</h2>
    <p>reComputer Rugged J40 は、NVIDIA Jetson Orin の性能に、IP66 等級のファンレス筐体とロック式 M12 接続を組み合わせた製品です。車両、港湾、農場、海上、産業現場での信頼性の高いエッジ AI 展開を目的に設計されています。</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">reComputer Rugged J4012 を入手 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">JetPack から始める ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg" alt="reComputer Rugged J40 産業用エッジ AI コンピュータ" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>IP66</strong><span>粉じんと強力な噴流から保護</span></div>
  <div className="jetson-product-fact"><strong>最大 100 TOPS</strong><span>Jetson Orin NX 16GB のエッジ AI 性能</span></div>
  <div className="jetson-product-fact"><strong>4× PoE GbE</strong><span>産業用 IP カメラへ給電して接続</span></div>
  <div className="jetson-product-fact"><strong>−20°C ～ 60°C</strong><span>0.7 m/s の気流でファンレス動作</span></div>
</div>

## Jetson 構成を選ぶ

どちらの構成も同じ堅牢筐体と産業用インターフェースを使用します。AI ワークロード、メモリ要件、消費電力に合わせて Jetson モジュールを選択してください。

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">性能構成</span>
    <h3>reComputer Rugged J4012</h3>
    <p>マルチカメラビジョン、より大きな AI モデル、高い GPU とメモリ帯域が有効なワークロード向けです。</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin NX</span>
      <span>16GB LPDDR5</span>
      <span>100 TOPS</span>
    </div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">効率構成</span>
    <h3>reComputer Rugged J3011</h3>
    <p>より低い消費電力で、効率的な認識、監視、テレメトリ、産業制御のワークロード向けです。</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin Nano</span>
      <span>8GB LPDDR5</span>
      <span>40 TOPS</span>
    </div>
  </article>
</div>

## reComputer Rugged J40 を選ぶ理由

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>密閉 M12 接続</strong><span>ロック式コネクタにより、移動体や屋外設置でも電源、ネットワーク、I/O を安定して維持できます。</span></div>
  <div className="jetson-product-feature"><strong>ファンレスパッシブ冷却</strong><span>可動ファンがないため、粉じん環境での保守を減らし、静音動作が可能です。</span></div>
  <div className="jetson-product-feature"><strong>産業用 I/O</strong><span>アイソレート CAN-FD、RS-232/422/485、デジタル I/O で、センサー、アクチュエータ、コントローラに直接接続できます。</span></div>
  <div className="jetson-product-feature"><strong>カメラ向けネットワーク</strong><span>4 つの PoE GbE ポートがデータと電力を同じケーブルで運び、マルチカメラシステムを簡素化します。</span></div>
  <div className="jetson-product-feature"><strong>ワイヤレス拡張</strong><span>M.2 Key E と Key B スロットが Wi-Fi、Bluetooth、5G、GPS の拡張に対応します。</span></div>
  <div className="jetson-product-feature"><strong>車載・屋外展開</strong><span>広い入力電圧、耐振動、IP66 筐体により、AMR、車両、船舶、フィールド機器に適しています。</span></div>
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
      <td colSpan={2}>4× GbE PoE PSE（802.3af、M12 防水）+ 1× GbE（M12 防水）</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={2}>4× USB 3.2 Type-A（M12 防水）+ 1× USB 2.0/3.0 Type-C（書き込み用、防水キャップ付き）+ 1× USB Type-C（デバッグ用）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={2}>1× HDMI（防水キャップ付き）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={2}>2× CAN-FD（アイソレート、120 Ω）M12 A コード 8 ピン経由</td>
    </tr>
    <tr>
      <td>シリアル</td>
      <td colSpan={2}>1× RS-232/422/485 M12 A コード 8 ピン経由</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={2}>2× DI + 2× DO M12 12 ピン / 8 ピン経由</td>
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
      <td colSpan={2}>M12 B/A コードコネクタ経由で 19–48 V DC</td>
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
      <td colSpan={2}>−20°C ～ +60°C（0.7 m/s の気流時）</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td colSpan={2}>10–95% RH（結露なきこと）</td>
    </tr>
    <tr>
      <td>振動</td>
      <td colSpan={2}>3 Grms @ 5–500 Hz、ランダム、1 時間/軸</td>
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
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw1.png" alt="産業用コネクタを示す reComputer Rugged J40 の側面図" />
    <figcaption>側面図 · ネットワーク、USB、ディスプレイ、アンテナ接続</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw2.png" alt="reComputer Rugged J40 の反対側の側面図" />
    <figcaption>側面図 · 電源、シリアル、CAN、デジタル I/O 接続</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw3.png" alt="reComputer Rugged J40 の底面図" />
    <figcaption>底面図 · 取り付けと筐体レイアウト</figcaption>
  </figure>
</div>

### LED インジケータ

| LED | 色 | 状態 | 説明 |
| --- | --- | --- | --- |
| PWR | 緑 | On | デバイスに電源が供給されています |
| PWR | 緑 | Off | デバイスに電源が供給されていません |
| ACT | 緑 | Flashing | SSD アクセス動作中 |

コネクタのピン配置、インターフェース設定、拡張手順については、[ハードウェアと I/O ガイド](/jetson/recomputer_rugged_j401/hardware_and_interface_usage/)を参照してください。

## JetPack の書き込み {#flash-jetpack}

手順に沿って進めてください。番号付きのレイアウトで、ホストの準備、リカバリモードの操作、ターミナルコマンドをまとめています。

<div className="jetson-product-step-flow">
<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>BSP を選んでダウンロードする</h3>
    <p className="jetson-product-step-label">手順 1 · イメージを正確な Jetson 構成に合わせる</p>

Jetson 書き込みリソースページを開き、使用する reComputer Rugged の型番と Jetson モジュールに対応する最新イメージを確認します。

<div className="jetson-product-actions">
  <Link className="jetson-product-button" to="/flash/jetpack_to_selected_product" target="_blank" rel="noopener noreferrer">JetPack イメージセレクターを開く ↗</Link>
</div>

:::warning
別のキャリアボードや Jetson モジュール用のイメージは書き込まないでください。reComputer Rugged J4012 または J3011 の正確な構成が一覧にない場合は、先に Seeed Studio サポートへ連絡してください。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>機材を準備する</h3>
    <p className="jetson-product-step-label">手順 2 · Ubuntu ホストとケーブルをセットアップする</p>

接続を外す、またはデバイスへ電源を入れる前に、次のものを準備します。

- reComputer Rugged J4012 または J3011
- 19–48 V DC 電源
- 物理 Ubuntu 20.04 または 22.04 ホスト PC
- 書き込み用 USB Type-C データケーブル
- 外部モニタと HDMI ケーブル
- キーボードとマウス

:::tip
可能な限り物理 Ubuntu ホストを使用してください。仮想マシンの USB パススルーは書き込みを中断することがあります。
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>Force Recovery モードに入る</h3>
    <p className="jetson-product-step-label">手順 3 · DEVICE ポートを接続し、USB ID を確認する</p>

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/rugged_J401/1.jpg" alt="reComputer Rugged J40 の書き込みに使うリカバリボタンと DEVICE ポート" />

1. **DEVICE** ポートと Ubuntu ホストの間を USB Type-C データケーブルで接続します。
2. **REC** ボタンを押し続けます。
3. **REC** を押したまま、電源を接続してデバイスの電源を入れます。
4. **REC** ボタンを離します。
5. Ubuntu ホストで Jetson が認識されていることを確認します。

```bash
lsusb
```

構成ごとの想定出力：

| 製品 | Jetson モジュール | 想定 USB ID |
| --- | --- | --- |
| reComputer Rugged J4012 | Orin NX 16GB | `0955:7323 NVidia Corp` |
| reComputer Rugged J3011 | Orin Nano 8GB | `0955:7523 NVidia Corp` |

想定 ID が表示されない場合は、USB ケーブルを接続し直し、ホストの別の USB ポートを試し、続行前にリカバリ手順を繰り返してください。

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>イメージを展開して書き込む</h3>
    <p className="jetson-product-step-label">手順 4 · Ubuntu ホストから量産書き込みパッケージを実行する</p>

ダウンロードしたイメージがあるディレクトリへ移動して展開します。

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
```

展開したディレクトリに入り、書き込みを開始します。

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

ターミナルで書き込みの成功が報告されるまで待ちます。その後、USB ケーブルを外し、reComputer の電源を入れ直し、モニタと入力デバイスを接続して、Ubuntu の初回起動設定を完了します。

  </div>
</section>
</div>

## アプリケーション {#applications}

reComputer Rugged J40 のハードウェアと、展開可能なエッジ AI ワークフローを組み合わせた応用例を確認できます。新しい例は公開され次第、このコレクションに追加できます。

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <Link className="jetson-product-application-cover" to="/jetson/recomputer_rugged_j401/industrial_vision/" aria-label="産業用フォークリフトビジョンのアプリケーションを開く">
      <img src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="reComputer Rugged J401 による産業用フォークリフトビジョンアプリケーション" />
    </Link>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="アプリケーションの機能">
        <span>検出</span>
        <span>推論ベンチマーク</span>
      </div>
      <h3><Link to="/jetson/recomputer_rugged_j401/industrial_vision/">産業用フォークリフトビジョン</Link></h3>
      <p>reComputer Rugged J401 上で、マルチカメラ検出、深度警告、ドライバー監視、ターゲット追跡、計測済みの Jetson 推論ワークロードを展開します。</p>
    </div>
  </article>
</div>

## リソース

機械統合、キャリアボードの設計確認、BSP 開発、Jetson プラットフォームの選定にこれらのファイルを使用します。

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>製品データシート</strong><small>電気、機械、環境仕様</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>キャリアボード回路図</strong><small>キャリアボードの回路と信号配線を確認</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PSE</span>
    <span className="jetson-product-resource-copy"><strong>PSE ボード回路図</strong><small>PoE 給電回路の設計リファレンス</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>3D 機械モデル</strong><small>設置と筐体計画用の STEP アセンブリ</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Linux_for_Tegra ソース</strong><small>Seeed Jetson BSP ソースとカスタマイズ資料</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CMP</span>
    <span className="jetson-product-resource-copy"><strong>Jetson デバイス比較</strong><small>Jetson モジュールと Seeed キャリアプラットフォームを比較</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>

</div>
