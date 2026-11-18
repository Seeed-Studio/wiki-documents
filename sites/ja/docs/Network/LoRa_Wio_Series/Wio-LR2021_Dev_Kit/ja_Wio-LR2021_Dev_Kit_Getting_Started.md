---
title: Wio-LR2021 Dev Kit 入門ガイド
description: 'Wio-LR2021 Dev Kit を使い始める'
keywords:
  - Wio-LR2021
  - Semtech LR2021
  - ESP32-S3
  - LoRa
  - FLRC
  - Dev Kit
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_getting_started
sku: 100038329
sidebar_position: 1
last_update:
  date: 11/02/2026
  author: David Du
createdAt: '2026-11-02'
updatedAt: '2026-11-02'
url: https://wiki.seeedstudio.com/ja/wio_lr2021_dev_kit_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wio-LR2021 Dev Kit 入門ガイド

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## はじめに

**Wio-LR2021 Dev Kit** は、Semtech の LR2021 トランシーバと **ESP32-S3** を組み合わせたデュアルバンド LoRa 開発キットです。無線モジュールは 150 ～ 960 MHz と 2400 ～ 2500 MHz 帯を 1 つのパッケージでカバーしているため、1 枚のボードでソフトウェアだけで長距離リンクと世界中のチャネルを行き来できます。FLRC により、画像や音声を最大 2.6 Mbps のバーストレートで送信でき、8 MB の PSRAM と 16 MB フラッシュを備えた ESP32-S3R8 は、電波に乗る前のカメラフレームを判定できます。

着脱式の Media HAT には、**2 MP GC2145 カメラ**、**MEMS マイク**、**ES8311 コーデック**、スピーカーコネクタ付き **NS4150B アンプ** が搭載されています。メインボードには、128 × 64 OLED、4 系統の周辺電源レールを切り替える **PCA9535 エクスパンダ**、CN3165 充電 IC の背後にある 3.7 V リチウムイオン電池入力と 5 V ソーラー入力、Grove ポート、2 つの 16 ピンヘッダも備わっています。

キットには工場出荷時ファームウェアが書き込まれているため、ファームウェアを書く前に、ターミナルから無線、カメラ、ディスプレイ、オーディオ経路、バッテリを確認できます。

### 仕様

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MCU</td>
      <td>**ESP32-S3R8**、デュアルコア Xtensa LX7、最大 240 MHz</td>
    </tr>
    <tr>
      <td>RF トランシーバ</td>
      <td>Semtech LR2021、**Wio-LR2021 モジュール**に内蔵</td>
    </tr>
    <tr>
      <td>周波数帯</td>
      <td>150 ～ 960 MHz および 2400 ～ 2500 MHz</td>
    </tr>
    <tr>
      <td>変調方式</td>
      <td>LoRa (SF5 ～ SF12)、(G)FSK、FLRC、LR-FHSS</td>
    </tr>
    <tr>
      <td>送信電力</td>
      <td>最大 `+22` dBm（サブ GHz）、最大 `+12` dBm（2.4 GHz）</td>
    </tr>
    <tr>
      <td>Wi-Fi と Bluetooth</td>
      <td>802.11 b/g/n 2.4 GHz、Bluetooth 5 LE</td>
    </tr>
    <tr>
      <td>アンテナコネクタ</td>
      <td>2 × SMA（サブ GHz、2.4 GHz）＋ 3 × U.FL</td>
    </tr>
    <tr>
      <td>Type-C インターフェース</td>
      <td>USB-C、ネイティブ USB-Serial-JTAG、ブリッジチップ不要</td>
    </tr>
    <tr>
      <td>Grove インターフェース</td>
      <td>Grove ポートおよび 2 × 16 ピン 2.54 mm ヘッダ</td>
    </tr>
    <tr>
      <td>ボタンと LED</td>
      <td>USER、BOOT、RESET ボタン；電源 LED 1 個；ユーザー LED 1 個</td>
    </tr>
    <tr>
      <td>I/O エクスパンダ</td>
      <td>**PCA9535**、16 I/O、I2C アドレス：`0x21`</td>
    </tr>
    <tr>
      <td>OLED</td>
      <td>128 × 64 モノクロ、0.96 インチ、**CH1116** ドライバ、I2C アドレス：`0x3D`</td>
    </tr>
    <tr>
      <td>カメラ（HAT）</td>
      <td>**GC2145**、2 MP、8 ビット DVP インターフェース</td>
    </tr>
    <tr>
      <td>オーディオ（HAT）</td>
      <td>**ES8311** コーデック、**NS4150B** アンプ、MEMS マイク、スピーカーコネクタ</td>
    </tr>
    <tr>
      <td>電源インターフェース</td>
      <td>USB-C 5 V、ソーラー 5 V（JST）、3.7 V リチウムイオン（JST）</td>
    </tr>
    <tr>
      <td>充電 IC</td>
      <td>**CN3165**、495 mA 充電電流</td>
    </tr>
    <tr>
      <td>レギュレータ</td>
      <td>**TPS62A03** 降圧（3.3 V システム）、**SGM2059** LDO（無線レール）</td>
    </tr>
    <tr>
      <td>寸法</td>
      <td>55 × 38.5 mm メインボード、55 × 38.5 mm Media HAT</td>
    </tr>
    <tr>
      <td>取付穴</td>
      <td>3 × M2 ホール</td>
    </tr>
  </tbody>
</table>

### 特長

- **デュアルバンド無線：** サブ GHz と 2.4 GHz が 1 つのモジュールを共有するため、1 つの設計で世界中のバンドをカバーできます。
- **高速バースト：** FLRC により最大 2.6 Mbps で画像を運び、その後レンジが重要なときには LoRa に戻ります。
- **オンデバイスビジョン：** 8 MB PSRAM がカメラフレームをバッファするため、無線はピクセルではなく結論を送信できます。
- **着脱式 Media HAT：** カメラ、マイク、コーデック、アンプが 2 つの 16 ピンコネクタに載っています。
- **フィールド電源：** 5 V ソーラー入力と 3.7 V リチウムイオンコネクタにより、ノードをオフグリッドで動作させ続けられます。
- **切り替え可能なレール：** PCA9535 がソフトウェアからカメラ、オーディオ、OLED、Grove レールを制御します。
- **オンボードディスプレイ：** 共有 I2C バス上の 128 × 64 OLED により、追加ハードウェアなしで測定値やリンク状態を表示できます。
- **ネイティブ USB：** USB-Serial-JTAG はブリッジチップを必要とせず、フラッシュとコンソールが 1 本のケーブルを共有します。

## ハードウェア概要

このキットには、55 × 38.5 mm のフットプリントを共有する 2 枚のボードがあります。メインボードには無線、ディスプレイ、電源経路が搭載され、Media HAT がカメラとオーディオ経路を追加します。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/Wio-LR2021_Dev_Kit_hardware.webp" style={{width:1000, height:'auto'}}/>
</div>

### メインボード表面

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. 16 MB SPI NOR フラッシュ付き **ESP32-S3R8**
2. LR2021 トランシーバを搭載し、32 MHz TCXO を内蔵した **Wio-LR2021 モジュール**
3. 150 ～ 960 MHz ポート用 **サブ GHz SMA コネクタ**
4. 2400 ～ 2500 MHz ポート用 **2.4 GHz SMA コネクタ**
5. **3 つの U.FL パッド：** ESP32-S3 2.4 GHz、LR2021 2.4 GHz、LR2021 サブ GHz
6. ネイティブ USB-Serial-JTAG を備えた **USB-C ポート**
7. `Solar-5V` と表示された 2 ピン JST コネクタの **ソーラー入力**
8. `BAT-3.7V` と表示された 2 ピン JST コネクタの **バッテリ入力**
9. **2 つの 16 ピン 2.54 mm ヘッダ**（長辺それぞれに 1 本）

:::note
SMA コネクタと U.FL パッドは、2 つの同じ RF ネットに 0 Ω リンクを介して接続されています。デフォルトでは **SMA コネクタ** が有効になっています。代わりに U.FL インターフェースを使用するには、0 Ω リンクを対応する代替パッドに付け替えてください。
:::

### メインボード裏面

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_back.webp" style={{width:1000, height:'auto'}}/>
</div>

1. I2C アドレス `0x3D` で駆動される **128 × 64 OLED**
2. `GPIO46` 上の **USER ボタン**、10 kΩ プルアップと 100 nF デバウンスコンデンサ付き
3. `GPIO0` 上の **BOOT ボタン**、リセット時に有効であればチップをダウンロードモードに入れます
4. ESP32-S3 のイネーブルピン（アクティブ LOW）に接続された **RESET ボタン**
5. **Grove コネクタ**、4 ピン 2.0 mm 標準ソケット
6. **ユーザー LED**、PCA9535 の `P06` により制御（アクティブ LOW）
7. ボードに電源が供給されているときに点灯する **電源 LED**

:::caution
USER ボタンは ESP32-S3 のストラップピンである `GPIO46` 上にあります。RESET を解除している間にボタンを押し続けると、チップはそのストラップで LOW レベルをサンプリングし、起動せずにダウンロードモードに入ります。リセットする前にボタンを離してください。
:::

### Media HAT

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **GC2145 カメラ**、2 MP、24 ピン FPC 上の `8-bit DVP` バスで接続
2. アナログ出力を持ち、コーデックに配線された **MEMS マイク**
3. I2S オーディオ入出力を持ち、I2C で設定される **ES8311 コーデック**
4. `SPK` と表示されたスピーカーコネクタを駆動する **NS4150B クラス D アンプ**

## ピンマップ

メインボードは 2.54 mm ピッチの **16 ピンヘッダ** を 2 本引き出しています。Media HAT は 2.54 mm ピッチの **14 ピンソケット** を 2 つ備えており、メインボード上の両方のヘッダに差し込むことができます。

:::caution
**メインボード** は `16‑pin header` を使用し、**Media Hat** 拡張ボードは `14‑pin socket` のみを使用しているため、取り付け時には向きに十分注意する必要があります。ピンが正しく**整列（ALIGNED）**していることを確認してください。不適切な取り付けは誤動作を引き起こし、デバイスに回復不能な損傷を与える可能性があります。
:::

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_1.webp" style={{width:1000, height:'auto'}}/>
</div>


| インデックス | 機能 | ESP32-S3 ピン | 説明 |
| --- | --- | --- | --- |
| 1 | VSYS | — | システムレール、USB またはソーラーからの 5 V、バッテリ時は 3.0 ～ 4.2 V |
| 2 | GND | — | グラウンド |
| 3 | IIC0_SCL | GPIO48 | 共有 I2C バス：OLED、PCA9535、HAT コーデック |
| 4 | IIC0_SDA | GPIO47 | 共有 I2C バス：OLED、PCA9535、HAT コーデック |
| 5 | CODEC_I2S0_MCLK | GPIO41 | ES8311 用オーディオクロック |
| 6 | CODEC_I2S0_LRCK | GPIO42 | 左右チャネル選択 |
| 7 | GROVE_DAT_2 | GPIO43 | Grove データビット 2、UART0_TXD |
| 8 | GROVE_DAT_1 | GPIO44 | Grove データビット 1、UART0_RXD |
| 9 | CODEC_I2S0_SCLK | GPIO9 | オーディオビットクロック |
| 10 | CODEC_I2S0_DSDIN | GPIO1 | コーデックへの再生データ入力 |
| 11 | CODEC_I2S0_SDOUT | GPIO2 | コーデックからの録音データ出力 |
| 12 | EXP_PWR_AUDIO_EN | PCA9535 `P02` | HAT 上のオーディオレールを有効化 |
| 13 | EXP_CAM_RESET | PCA9535 `P07` | カメラリセットピン |
| 14 | EXP_PWR_CAM_EN | PCA9535 `P01` | HAT 上のカメラレールを有効化 |
| 15 | EXP_GPIO_P16 | PCA9535 `P16` | エクスパンダ経由の予備 I/O |
| 16 | EXP_GPIO_P17 | PCA9535 `P17` | エクスパンダ経由の予備 I/O |

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_2.webp" style={{width:1000, height:'auto'}}/>
</div>

| インデックス | 機能 | ESP32-S3 ピン | 説明 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | — | 3.3 V システムレール |
| 2 | GND | — | グラウンド |
| 3 | DVP_VSYNC | GPIO38 | カメラ垂直同期、HAT 上の `VSYNC` |
| 4 | DVP_HSYNC | GPIO39 | カメラ水平同期、HAT 上の `HSYNC` |
| 5 | DVP_D7 | GPIO21 | カメラデータビット 7 |
| 6 | DVP_D6 | GPIO18 | カメラデータビット 6 |
| 7 | DVP_D5 | GPIO17 | カメラデータビット 5 |
| 8 | DVP_D4 | GPIO16 | カメラデータビット 4 |
| 9 | DVP_D0 | GPIO15 | カメラデータビット 0 |
| 10 | DVP_D3 | GPIO14 | カメラデータビット 3 |
| 11 | DVP_PCLK | GPIO13 | カメラピクセルクロック |
| 12 | DVP_D1 | GPIO12 | カメラデータビット 1 |
| 13 | DVP_D2 | GPIO11 | カメラデータビット 2 |
| 14 | DVP_XCLK | GPIO10 | ESP32-S3 により生成されるカメラマスタークロック |
| 15 | EXP_GPIO_P14 | PCA9535 `P14` | エクスパンダ経由の予備 I/O |
| 16 | EXP_GPIO_P15 | PCA9535 `P15` | エクスパンダ経由の予備 I/O |

<br />

### I/O エキスパンダ

**PCA9535** は I2C アドレス `0x21` に応答し、その割り込みラインは `GPIO3` に接続されています。16 本すべてのピンは電源投入時に入力として立ち上がるため、ファームウェアで駆動するまで、以下のすべての電源レールおよびリセットは非アクティブのままです。

| ポート | 機能 | 備考 |
| --- | --- | --- |
| P00 | — | 未接続 |
| P01 | EXP_PWR_CAM_EN | カメラ電源レール有効化 |
| P02 | EXP_PWR_AUDIO_EN | オーディオ電源レール有効化 |
| P03 | EXP_PWR_OLED_EN | OLED 電源レール有効化 |
| P04 | EXP_PWR_GROVE_EN | Grove 電源レール有効化 |
| P05 | EXP_OLED_RST | OLED リセット |
| P06 | EXP_User_LED | ユーザー LED（アクティブ Low） |
| P07 | EXP_CAM_RESET | カメラリセット |
| P10 | EXP_BAT_ADC_CTR | バッテリ分圧を `GPIO8` に接続するゲート制御 |
| P11 | EXP_Sig_CHG_Done | CN3165 からの充電完了フラグ |
| P12 | EXP_Sig_CHGING | CN3165 からの充電中フラグ |
| P13 | EXP_LoRa_RST | Wio-LR2021 リセット |
| P14 | EXP_GPIO_P14 | PCA9535 の `P14` |
| P15 | EXP_GPIO_P15 | PCA9535 の `P15` |
| P16 | EXP_GPIO_P16 | PCA9535 の `P16` |
| P17 | EXP_GPIO_P17 | PCA9535 の `P17` |

<br />

### 電源

| レール | 範囲 | 備考 |
| --- | --- | --- |
| VSYS | 3.0 ~ 5.5 V | USB またはソーラーが接続されていればそれに追従し、なければバッテリに追従します |
| VCC_3V3 | 3.3 V | 降圧コンバータ出力で、レギュレータの電流制限まで供給可能 |
| VCC_Grove | 3.3 V | `P04` によってスイッチされ、350 mA ヒューズで保護されています |
| Solar+ | 公称 5.0 V | 逆流防止および過電圧保護付き |
| BAT+ | 3.0 ~ 4.2 V | CN3165 によって充電されるリチウムイオンセル |

:::caution
`VSYS` は固定 3.3 V レールではありません。USB またはソーラーが接続されているときは約 5.0 V になり、3.3 V 専用の周辺機器を破損させる可能性があります。
:::

<br />

### ストラップピン

ESP32-S3 はリセット時に 4 本のピン `GPIO0`、`GPIO3`、`GPIO45`、`GPIO46` をサンプリングします。このうち 2 本がメインボード上に引き出されています。

| ピン | 接続先 | 説明 |
| --- | --- | --- |
| GPIO0 | BOOT ボタン | USER ボタンと一緒に **LOW** に保持すると、ファームウェアを起動せずシリアルダウンロードモードに入ります |
| GPIO46 | USER ボタン | BOOT ボタンと一緒に **LOW** に保持すると、ファームウェアを起動せずシリアルダウンロードモードに入ります |
| GPIO3 | 外部には出ていない | PCA9535 の `INTERRUPT` ピンとして使用 |
| GPIO45 | 外部には出ていない | Wio-LR2021 の `IRQ` ピンとして使用 |

## はじめに

### ハードウェアの準備

#### ステップ 1 — アンテナを取り付ける

Sub-GHz アンテナを `SUB-1G` と表示されたコネクタに、2.4 GHz アンテナを `LR-2.4G` と表示されたコネクタにねじ込みます。締め付けは手で行ってください。代わりに U.FL アンテナを使用する場合は、対応するパッドに 0 Ω ジャンパをはんだ付けし直し、SMA コネクタは未接続のままにします。

:::caution
アンテナなしで送信しないでください。LR2021 には開放ポートに対する保護がなく、連続波や長時間の送信を開放負荷に対して行うと、パワーアンプを破損する可能性があります。
:::

#### ステップ 2 — Media HAT を取り付ける（オプション）

HAT 上の 2 つの 14 ピンソケットをメインボード上の 2 つの 16 ピンヘッダに合わせ、両端を均等に押し下げます。HAT はメインボードから電源を取得するため、追加のケーブルは不要です。取り外すときも同様に、両端を同時に持ち上げてください。

:::note
拡張ボードの裏面には、マザーボード上の対応する USB Type‑C ポートの位置が記載されており、正しい取り付け方向を判断するのに利用できます。次に、PCB 上のピンのシルク印刷に従って、対応するピンの位置を確認してください。
:::

ソケットは Media HAT 側にあり、それぞれの横のシルク印刷には対応する ESP32-S3 のピン番号が記載されているため、図面がなくても向きを確認できます。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_back.webp" style={{width:1000, height:'auto'}}/>
</div>

#### ステップ 3 — 電源を選ぶ

3 つの入力のいずれか 1 つを接続すればボードは起動します：5 V の USB-C、`Solar-5V` JST コネクタに接続した 5 V ソーラーパネル、または `BAT-3.7V` コネクタに接続した 3.7 V リチウムイオンセルです。最初の起動には USB-C が最適で、シリアルコンソールも同時に利用できます。

## リソース

- 📄 [ESP32-S3 データシート](https://documentation.espressif.com/esp32-s3_datasheet_en.pdf)

- 📄 [Wio-LR2021 モジュール データシート](https://files.seeedstudio.com/products/100058045/Wio-LR2021%20Module%20Datasheet.pdf)

- 📄 [Wio-LR2021 Dev Kit メインボード回路図](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Schematic.pdf)

- 📄 [Wio-LR2021 Dev Kit Media HAT 回路図](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT_Schematic.pdf)

- 📄 [Wio-LR2021 Dev Kit メインボード 3D モデル](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Main_Board.step)

- 📄 [Wio-LR2021 Dev Kit Media HAT 3D モデル](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT.step)

- 🗃️ [ハードウェアコンポーネント ドキュメント](https://files.seeedstudio.com/products/100038329/doc/Hardware_Component_Documentation.zip)

- 📄 [ピン配置図](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_diagram.webp)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>