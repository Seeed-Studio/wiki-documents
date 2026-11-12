---
description: SenseCAP MeshPager X2 シリーズのスタンドアロン Meshtastic 通信機を紹介します。LR2021 LoRa、デュアルバンド GNSS、2.0 インチディスプレイ、IP66 保護、および最長 7 日間のバッテリー駆動に対応しています。
title: SenseCAP MeshPager X2 シリーズ概要
keywords:
  - MeshPager X2 Series
  - Meshtastic
  - ESP32-S3
  - LR2021
slug: /meshpager_x2_intro
sidebar_position: 0
last_update:
  date: 11/12/2026
  author: Yves
createdAt: '2026-10-09'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/ja/meshpager_x2_intro/
---


SenseCAP MeshPager X2 シリーズは、オフグリッドでのメッセージ送受信と位置情報共有のためのスタンドアロン携帯型 [Meshtastic®](https://meshtastic.org/) 通信機を提供します。ESP32-S3 と **Semtech LR2021** をベースとした Wio-LR2021 モジュールを搭載し、デュアルバンド GNSS、**2.0 インチ IPS ディスプレイ**、物理ボタン、**3400 mAh バッテリー**と組み合わせて、**863–928 MHz LoRa、Bluetooth LE、Wi-Fi** に対応します。**最長 7 日間の連続動作**と、915 MHz でテストされた**最長 10 km の見通し通信距離**により、スマートフォンなしで X2 上から直接メッセージ作成、会話の閲覧、位置情報の追跡が可能です。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-angle.png" alt="MeshPager X2 product view showing the external antenna, display, orange buttons, and directional pad" width={1248} height={800} style={{width: 800, maxWidth: '100%', height: 'auto'}} />
  <figcaption>MeshPager X2。<a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-front.png" target="_blank" rel="noopener noreferrer">正面からのビュー。</a></figcaption>
</figure>

## 特長

- **スタンドアロン通信と携帯性:** 物理ボタンを使って 2.0 インチディスプレイ上で直接テキスト入力、メッセージ閲覧、位置情報の追跡ができます。コンパクトな筐体には金属製ベルトクリップとランヤードループが備わっており、X2 をバックパック、ベルト、衣服に取り付けたり、ランヤードで首から下げたり、ポケットに入れて持ち運ぶことができます。

- **次世代 LoRa と長距離通信:** Semtech LR2021 は **863–928 MHz** に対応し、受信感度は **−141 dBm** まで、**915 MHz でテストされた見通し最長 10 km** の通信が可能です。外付け 70 mm フレキシブルホイップアンテナは、遠隔地で活動するチーム向けに長距離通信をサポートします。

- **デュアルバンド GNSS と高度認識:** AG3335MV/B は、樹木に覆われた場所や峡谷など厳しい屋外環境向けに **L1 + L5 デュアルバンド測位**を提供します。内蔵気圧センサーは大気圧を測定し、GNSS の位置情報を補完する形でリアルタイムの高度トラッキングを実現します。

- **USB-C による最長 1 週間のバッテリー駆動:** **3400 mAh バッテリー**は、複数日にわたるアウトドア活動向けに**最長 7 日間の連続動作**を提供します。USB-C は充電、ファームウェア更新、デバッグに対応します。

- **IP66 の屋外保護:** **IP66 等級の筐体**は、過酷な環境での屋外使用において、粉じんや強い雨からデバイスを保護します。

- **内蔵センサー、拡張ストレージ、オーディオハードウェア:** 気圧センサー、磁力計、ジャイロスコープにより、大気、方位、動きのデータを取得できます。**microSD カードスロット**は、対応ファームウェアと組み合わせてオフラインマップやデータロギングをサポートします。内蔵マイクとスピーカーは、**将来の音声メッセージ機能アップデート**のためのハードウェアを提供します。

実際の通信距離とバッテリー駆動時間は、デバイス設定、使用状況、地形、動作環境によって変動します。

## 仕様

<table aria-label="MeshPager X2 specification" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>項目</th>
      <th scope="col" style={{textAlign: 'center'}}>パラメータ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>プロセッサ</th>
      <td>Espressif ESP32-S3R8、デュアルコア、最大 240 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>LoRa</th>
      <td>Wio-LR2021（Semtech LR2021）</td>
    </tr>
    <tr>
      <td>周波数範囲: 863–928 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>GNSS</th>
      <td>AG3335MV/B、デュアルバンド L1 + L5 測位</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>メモリ</th>
      <td>32 MB フラッシュ / 8 MB PSRAM</td>
    </tr>
  </tbody]
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={5} style={{textAlign: 'left', verticalAlign: 'middle'}}>アンテナ</th>
      <td>外付け LoRa アンテナ、RP-SMA オスコネクタ</td>
    </tr>
    <tr>
      <td>周波数範囲: 863–928 MHz</td>
    </tr>
    <tr>
      <td>寸法: Ø10.5 × 70 mm</td>
    </tr>
    <tr>
      <td>ピーク利得: 0.32 dBi</td>
    </tr>
    <tr>
      <td>最大効率: 48.7%</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>無線接続</th>
      <td>Wi-Fi: 2.4 GHz</td>
    </tr>
    <tr>
      <td>Bluetooth 5.0</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>インターフェース</th>
      <td>USB Type-C</td>
    </tr>
    <tr>
      <td>MicroSD カードスロット（1-bit SDIO/SDMMC）</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>電源入力</th>
      <td>USB Type-C: 5 V DC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>IPS ディスプレイ</th>
      <td>サイズ: 2.0 インチ</td>
    </tr>
    <tr>
      <td>解像度: 240 × 320 ピクセル</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>ボタン</th>
      <td>電源 × 1<br />方向ボタン × 4<br />決定 × 1<br />戻る × 1</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>オーディオ</th>
      <td>マイク: ES7243E ADC 搭載アナログマイク<br />出力: ES8311 コーデックおよび NS4150B スピーカーアンプ</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>通信距離</th>
      <td>最大 10 km（見通し、915 MHz でテスト）</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>IP 等級</th>
      <td>IP66</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>寸法</th>
      <td>110.6 × 64.3 × 26.85 mm</td>
    </tr>
  </tbody>
</table>

## バッテリー

<table aria-label="MeshPager X2 battery" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>項目</th>
      <th scope="col" style={{textAlign: 'center'}}>パラメータ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>バッテリー容量</th>
      <td>3400 mAh</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>充電ポート</th>
      <td>USB Type-C（充電、ファームウェア書き込み、データ転送）</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>デバイス電源入力</th>
      <td>5 V DC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>動作温度（放電時）</th>
      <td>-20°C ～ 60°C</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>充電温度</th>
      <td>5°C ～ 45°C</td>
    </tr>
  </tbody>
</table>

<details>
<summary>バッテリー温度条件</summary>

バッテリーセルは、以下の温度範囲で異なる電流値を規定しています。

- **放電:** -20°C ～ 15°C では 0.2C、15°C ～ 60°C では 0.5C。
- **充電:** 5°C ～ 15°C では 0.2C、15°C ～ 45°C では 0.5C。

温度範囲の上限・下限付近での長時間の充電または放電は避けてください。

</details>

<details>
<summary style={{fontSize: '1.5rem', fontWeight: 600}}>ハードウェア概要</summary>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" target="_blank" rel="noopener noreferrer">
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" alt="MeshPager X2 V1.0 hardware block diagram showing power, ESP32-S3, LoRa, GNSS, sensors, display, storage, and audio connections, with GPIO41 feeding ES8311 DSDIN and ES7243E SDOUT feeding GPIO42" width={4680} height={3960} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  </a>
  <figcaption>MeshPager X2 ハードウェアブロック図。クリックして拡大。</figcaption>
</figure>

| コンポーネント | 機能 |
| --- | --- |
| 前面ディスプレイ | メッセージ、ノード情報、GNSS ステータス、マップを表示 |
| 方向キー | メニュー操作、オンスクリーンキーボードの選択、マップのパン |
| 決定 / 戻る | 項目の選択、または前の画面に戻る |
| 電源キー | 電源制御および画面のオフ/復帰 |
| フレキシブル LoRa アンテナ | サブ GHz メッシュ無線接続 |
| USB-C ポート | 充電およびコンピュータとの接続 |
| microSD カードスロット | オフラインマップタイル用ストレージ |
| マイクとスピーカー | オーディオ入力および出力 |
| 気圧センサー | 高度トラッキングのための大気圧測定 |
| 金属製ベルトクリップとランヤードループ | X2 をベルト、バックパック、ランヤードに取り付け |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="Close-up of the MeshPager X2 microSD card slot with its outer cover removed" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>microSD カードスロット。カードの準備については <a href="/ja/x2_get_started_for_meshtastic/#microsd-and-offline-maps">microSD and Offline Maps</a> を参照してください。</figcaption>
</figure>

セットアップとボタン操作については、[Get Started with MeshPager X2 Series](/ja/x2_get_started_for_meshtastic/) を参照してください。

### ピン一覧

<details>
<summary>ESP32-S3 のピン割り当て</summary>

これらの割り当ては MeshPager X2 V1.0 の回路図に基づいています。GPIO 番号はパッケージピン番号ではなく、ESP32-S3 の信号を示します。

| 機能 | 信号 | ESP32-S3 GPIO |
| --- | --- | --- |
| Return / BOOT キー | `ESP_BOOT/Return` | GPIO0 |
| バッテリー電圧 | `BAT_ADC` | GPIO1 |
| エクスパンダ割り込み | `EXP_I2C_INT1` | GPIO2 |
| LoRa SPI クロック | `LR_SPI_SCK` | GPIO3 |
| LoRa SPI データ出力 | `LR_SPI_MOSI` | GPIO4 |
| LoRa SPI データ入力 | `LR_SPI_MISO` | GPIO5 |
| LoRa チップセレクト | `LR_NSS` | GPIO6 |
| LoRa 割り込み | `LR_DIO8` | GPIO7 |
| LoRa ビジー | `LR_BUSY` | GPIO8 |
| 電源キー | `PWR_BUTTON` | GPIO9 |
| TFT チップセレクト | `TFT_CS` | GPIO10 |
| TFT SPI データ | `TFT_SDA` | GPIO11 |
| TFT SPI クロック | `TFT_SCK` | GPIO12 |
| TFT データ/コマンド | `TFT_A0` | GPIO13 |
| microSD コマンド | `SD_CMD` | GPIO14 |
| microSD クロック | `SD_CLK` | GPIO15 |
| microSD データ | `SD_DAT0` | GPIO16 |
| エクスパンダ / RTC I2C | SDA / SCL | GPIO17 / GPIO18 |
| ネイティブ USB | D− / D+ | GPIO19 / GPIO20 |
| GNSS パルスパーセカンド | `AG_PPS0` | GPIO21 |
| オーディオマスタークロック | `CODEC_I2S0_MCLK` | GPIO38 |
| オーディオビットクロック | `CODEC_I2S0_SCLK` | GPIO39 |
| オーディオワードクロック | `CODEC_I2S0_LRCK` | GPIO40 |
| オーディオ再生データ | `CODEC_I2S0_DSDIN` | GPIO41 |
| オーディオキャプチャデータ | `CODEC_I2S0_SDOUT` | GPIO42 |
| GNSS UART | MCU TX / MCU RX | GPIO43 / GPIO44 |
| RTC 出力 | `RTC_OUT` | GPIO45 |
| TFT バックライト | `TFT_PWM` | GPIO46 |
| センサー / オーディオ I2C | SDA / SCL | GPIO47 / GPIO48 |

</details>

<details>
<summary>I/O エクスパンダと I2C デバイス</summary>

**I/O エクスパンダ**

TCA6424A は I2C アドレス `0x22` にあります。`P14` のようなポート名はエクスパンダのピンを示し、ESP32-S3 の GPIO ではありません。

| TCA6424A ポート | 回路図上の信号 / 機能 |
| --- | --- |
| P00 / P01 / P02 / P03 | 上 / 下 / 左 / 右 |
| P04 | 決定 |
| P05 | テストポイント TP47 |
| P06 | `CHARGER_STAT`、充電器ステータス |
| P07 | `EXP_SD_DET`、microSD 検出 |
| P10 / P11 | `AG_RTC_INT` / `AG_SLEEP_INT`、GNSS 割り込み |
| P12 | `IMU_INT1`、モーションセンサー割り込み |
| P13 | テストポイント TP41 |
| P14 | `VCC_SEN_EN`、センサーおよびオーディオ電源有効 |
| P15 | `VCC_SD_EN`、microSD 電源有効 |
| P16 | `VCC_TFT_EN`、TFT およびバックライト電源有効 |
| P17 | `AG_VRTC_EN`、GNSS バックアップ電源有効 |
| P20 | `AG_PWR_EN`、GNSS メイン電源有効 |
| P21 | `VBAT_ADC_EN`、バッテリー測定有効 |
| P22 | `AUDIO_PA_EN`、スピーカーアンプ有効 |
| P23 | `USB_IN`、USB 入力検出 |
| P24 | `PWR_HOLD`、メイン電源ラッチ |
| P25 / P26 / P27 | TFT / LoRa / GNSS リセット |

**I2C デバイス**

| バス | デバイス | 回路図に示されるアドレス |
| --- | --- | --- |
| GPIO17 SDA / GPIO18 SCL | TCA6424A I/O エクスパンダ | `0x22` |
| GPIO47 SDA / GPIO48 SCL | LSM6DSO モーションセンサー | `0x6A` |
| GPIO47 SDA / GPIO48 SCL | BMM350 磁力計 | `0x15` |
| GPIO47 SDA / GPIO48 SCL | SPA06-003 気圧センサー | `0x77` |
| GPIO47 SDA / GPIO48 SCL | ES8311 コーデック | `0x18` |
| GPIO47 SDA / GPIO48 SCL | ES7243E ADC | `0x14` |

V1.0 の回路図では、BMM350 の `ADSEL` ピンは R147（10 kΩ）を介して High にプルアップされており、アドレス `0x15` が選択されています。ES7243E は `0x14` を使用するため、2 つのデバイスは共有 I2C バス上で異なるアドレスを持ちます。

</details>

<details>
<summary>ハードウェア統合に関する注意事項</summary>

- **アンテナ：** 仕様は M02-0401060R0A に対するものであり、サプライヤーのリファレンステストセットアップを使用しています。ローカルの規制に従ってデバイスの LoRa リージョンを選択してください。
- **バッテリー：** 温度検出接続を備え、4.4 V 充電に対応した指定の X2 バッテリーを使用してください。最大充電電圧 4.2 V のセルを代わりに使用しないでください。
- **フラッシュ：** X2 には 32 MB の外部フラッシュがあります。V1.0 の回路図では PY25Q256HB-SUH-IR が指定されています。一致するファームウェアパッケージに付属するパーティションレイアウトを使用してください。
- **ボタンと電源検出：** Return は ESP32-S3 の `GPIO0` に接続されています。TCA6424A の `P06` は充電器ステータスを、`P23` は USB 入力検出を提供します。`P05` と `P13` はテストポイント TP47 および TP41 に接続されています。
- **無線：** LoRa はモジュールの `Sub-G_RF` 接続を使用します。その `2.4G_RF` ポートは未接続であり、Wi-Fi と Bluetooth は ESP32-S3 のアンテナ経路を使用します。

</details>

</details>

## アプリケーション

- **オフグリッドでのチームコミュニケーション：** 携帯電話や Wi-Fi サービスが利用できない場合でも、他の Meshtastic ノードとテキストメッセージをやり取りし、位置情報を共有できます。
- **ハイキングとキャンプ：** GNSS 位置情報と事前に読み込んだオフラインマップを X2 上で直接表示できます。物理ボタンを使って、スマートフォンなしでメッセージの作成と閲覧ができます。

セットアップと操作については、[MeshPager X2 シリーズの Get Started](/ja/x2_get_started_for_meshtastic/) を参照してください。

## ドキュメント

- [MeshPager X2 消費電力スプレッドシート (.xlsx)](https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager%20X2%20power%20consumption.xlsx)

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="Facebook 上の Seeed Studio Meshtastic コミュニティに参加する"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed Studio technical forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed Studio support"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Studio Discord community"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Seeed Studio Wiki discussion"></a>
</div>
