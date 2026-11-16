---
title: Wio-LR2021 Dev Kit ファクトリーファームウェア ユーザーガイド
description: 'Wio-LR2021 Dev Kit 用ファクトリーファームウェアガイド'
keywords:
  - Wio-LR2021
  - ESP32-S3
  - factory firmware
  - serial console
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_factory_firmware_user_guide
sku: 100038329
sidebar_position: 1
last_update:
  date: 11/05/2026
  author: David Du
createdAt: '2026-11-05'
updatedAt: '2026-11-05'
url: https://wiki.seeedstudio.com/ja/wio_lr2021_dev_kit_factory_firmware_user_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wio-LR2021 Dev Kit ファクトリーファームウェア ユーザーガイド

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

すべての Wio-LR2021 Dev Kit には、ボードの無線、センサー、ディスプレイ、カメラ、オーディオ経路、フラッシュを 1 つのシリアルコンソール経由で操作できるテスト用ファームウェアがプリインストールされています。本ガイドでは、初回の電源投入から完全な機能チェックまでを順に説明し、各ステップで「合格」と見なせる状態を示します。

:::note
お使いのボード上のファームウェアが、このページの最終的な基準です。`help` と入力して、そのビルドで実際に登録されているコマンド一覧を表示してください。ここに記載されているコマンドが見つからない場合、そのボードは別バージョンを実行しています。
:::

### ファームウェアコマンドで確認できること

- **サブ GHz および 2.4 GHz リンク**: 2 枚のボードで `lora_tx` と `lora_rx` を使用します。受信側のカウンタが増加します。
- **変調モード**: `gfsk_tx`, `flrc_rx`, `lr_fhss_tx`; 正常パケット数と CRC エラー数をカウントします。
- **RF 出力**: `lora_cw`; メータでキャリアを確認します。
- **BLE** — `ble -a 1`; スキャナに `wio-lr2021-*` が一覧表示されます。
- **Wi-Fi と IP**: `sta_connect`, `ap_set`, `ping`; `got ip:` 行と応答数を確認します。
- **GPIO、I²C、および電源レール**: `gpio_get`, `i2c_scan`, `io_exp_print`; `0x21` と `0x3D` から応答があります。
- **バッテリ**: `battery_get`; セル電圧[mV]と充電推定値を表示します。
- **ディスプレイ、カメラ、オーディオ**: `oled_test`, `camera_capture`, `audio_slot_play`; パターン表示、`PASS`、再生を確認します。
- **フラッシュ**: `flash_info`, `flash_speed`; 戻り値が `0` なら合格です。

## 準備

### ステップ 1. アンテナを取り付けてボードを接続する

サブ GHz アンテナを `SUB-1G` に、2.4 GHz アンテナを `LR-2.4G` にねじ込みます。USB-C はデータ対応ケーブルで接続してください。充電専用ケーブルでもボードに電源は入りますが、シリアルポートは使用できません。

:::caution
アンテナなしで送信しないでください。PA はサブ GHz で最大 +22 dBm、2.4 GHz で最大 +12 dBm をミスマッチ負荷に印加するため、LR2021 を損傷するおそれがあります。
:::

### ステップ 2. シリアルポートを探す

<Tabs groupId="operating-systems">
<TabItem value="win" label="Windows">

**デバイス マネージャー** を開き、**ポート (COM と LPT)** を展開します。ボードは **USB Serial Device** として、`COM5` のようなポート名で表示されます。

</TabItem>
<TabItem value="mac" label="macOS">

```bash
ls /dev/cu.*
```

`/dev/cu.usbmodem*` を探します。

</TabItem>
<TabItem value="linux" label="Linux">

```bash
ls /dev/ttyACM*
```

ボードは通常 `/dev/ttyACM0` です。ポートが開けない場合は、ユーザーを `dialout` グループに追加してください。

</TabItem>
</Tabs>

### ステップ 3. ターミナルを開く

| ツール | プラットフォーム | 入手先 |
| --- | --- | --- |
| PuTTY | Windows | [putty.org](https://www.putty.org/) |
| screen | macOS / Linux | 組み込み済み。`screen /dev/cu.usbmodem* 115200` を実行 |
| Minicom | macOS / Linux | パッケージマネージャからインストールし、`minicom -D /dev/ttyUSB* -b 115200` を実行 |

どのツールでも、同じ回線設定が必要です:

| 設定項目 | 値 |
| --- | --- |
| ボーレート | 115200 |
| データビット | 8 |
| パリティ | なし |
| ストップビット | 1 |
| フロー制御 | なし |

### ステップ 4. プロンプトを確認する

**Enter** キーを押します。ボードは次のようなプロンプトで応答します:

```bash
cmd>
```

`help` と入力して、登録されているすべてのコマンドを一覧表示します。

```bash
cmd> help
```

## クイックスタート

### 1. コマンド一覧を表示する

```bash
cmd> help
```

### 2. バッテリを読み取る

```bash
cmd> battery_get
I (737306) bsp_battery: calibration scheme version is Curve Fitting
I (737306) bsp_battery: Calibration Success
I (737386) bsp_battery: VBAT channel=7 raw_max=0 sense=0 mV battery=0 mV
I (737516) bsp_battery: VBAT channel=7 raw_max=2362 sense=2068 mV battery=4136 mV
I (737516) SENSOR_TEST: Battery probe: BAT_ADC_EN=0 -> 0 mV, BAT_ADC_EN=1 -> 4136 mV
I (737516) SENSOR_TEST: Battery voltage: 4136 mV, estimated level: 92%
```

セル電圧[mV]と充電推定値が表示されます。バッテリを接続していない場合は、USB 電源電圧に追従します。

### 3. LoRa パケットを 1 回送信する

:::caution
送信する前に、サブ GHz アンテナを `SUB-1G` に取り付けてください。動作中は、他のアンテナから 1 m ほど離しておきます。
:::

```bash
cmd> lora_tx -f 868000000 -d hello -n 1
I (922806) LR20XX: Power          = 10 dB
I (922806) LR20XX: Frequency      = 868000000 Hz
I (922806) LR20XX: SF             = RAL_LORA_SF7
I (922806) LR20XX: BandWidth      = RAL_LORA_BW_125_KHZ
I (922806) LR20XX: CodingRate     = RAL_LORA_CR_4_5
I (922816) LR20XX: CRC            = 1
I (922816) LR20XX: IQ             = 0
I (922816) LR20XX: SyncWord       = 0x34
I (922816) LR20XX: LDO            = 0
I (922816) LR20XX: Interval       = 0
I (922816) LR20XX: Num            = 1
I (922816) LR20XX: half_power     = 0
I (922816) LR20XX: duty_cycle     = 0
I (922816) LR20XX: lf_slices      = 0
I (922816) LR20XX: is_config_pa   = 0
I (922816) LR20XX: tx len 5, payload: hello
I (922836) LR20XX: Starting LoRa TX #0
I (922876) LR20XX: LoRa tx done

I (923886) LR20XX: End of send!
```

### 4. サブ GHz パケットを受信する

```bash
cmd> lora_rx -f 868000000 -s 7 -b 3               
I (47044) LR20XX: Frequency      = 868000000 Hz
I (47044) LR20XX: SF             = RAL_LORA_SF7
I (47044) LR20XX: BandWidth      = RAL_LORA_BW_125_KHZ
I (47044) LR20XX: CodingRate     = RAL_LORA_CR_4_5
I (47044) LR20XX: Header_type    = RAL_LORA_PKT_EXPLICIT
I (47044) LR20XX: CRC            = 1
I (47044) LR20XX: IQ             = 0
I (47044) LR20XX: SyncWord       = 0x34
I (47044) LR20XX: LDO            = 0

W (82904) LR20XX: rx_done 0
W (82904) LR20XX: rx_hdr_err 0
W (82904) LR20XX: rx_crc_err 0

I (82904) LR20XX: End of receive!
```

ボード A で `lora_rx -f 868000000 -s 7 -b 3` コマンドを、ボード B で `lora_tx -f 868000000 -s 7 -b 3 -p 14 -d hello -n 10` コマンドを実行します。A のカウンタはパケットごとに増加し、B は 10 回送信すると終了します。A 側で `Ctrl+C` を押して停止すると、合計値が表示されます。カウントが 0 のままの場合、ボード間で無線設定が一致していないか、アンテナが接続されていません。`-i` は `200` 以上に保ってください。低すぎると、受信側に `hdr err` 行が記録されます。

両方のボードで `Ctrl+C` を押して**テストを終了**し、どちらも受信モードのままにしないようにします。

### 5. Wi-Fi ステーションと ping

```bash
cmd> sta_connect <ssid> <pass>
cmd> ping 192.168.1.1 -c 4
```

`got ip:` を含む行が表示されれば、アクセスポイントへの参加は成功です。

### 6. ホットスポット経由のカメラ

```bash
cmd> camera_start
cmd> camera_http_start
```

パスワード `12345678` で `wio-lr2021-camera` に接続し、`http://192.168.4.1` を開きます。ライブ映像が表示されれば、カメラと Wi-Fi スタックの両方が正常に動作していることが確認できます。

`camera_http_stop` と `camera_stop` で**テストを終了**し、その後は通常使用しているネットワークに再接続してください。

### 7. ディスプレイパターンを描画する

```bash
cmd> oled_test -m text
I (2177034) bsp_oled_ssd13xx: OLED initialized (128x64, addr 0x3d)
I (2177064) OLED_TEST: OLED test pattern displayed: text
```

```bash
cmd> oled_test -m checker
I (2262024) OLED_TEST: OLED test pattern displayed: checker
```

```bash
cmd> oled_test -m clear
I (2316714) OLED_TEST: OLED test pattern displayed: clear
```

### 8. オーディオを録音・再生する

```bash
audio_slot_record -d 5000
audio_slot_play
```

### 9. フラッシュチップを識別する

```bash
cmd> flash_info
I (2491984) FLASH_TEST: ==== SPI flash identification ====
I (2491984) FLASH_TEST:  JEDEC ID        : 0xEF4018
I (2491984) FLASH_TEST:  Manufacturer    : 0xEF (Winbond)
I (2491984) FLASH_TEST:  Memory type     : 0x40
I (2491984) FLASH_TEST:  Capacity (ID)   : 0x18 => 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Physical size   : 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Configured size : 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Partition "flashtest" : addr=0x00C10000 size=1048576 (1.00 MB) subtype=0x06
I (2491984) FLASH_TEST: ==== Tail boundary authentication ====
I (2491994) FLASH_TEST:  head sector off=0x00000000, tail sector off=0x000FF000
I (2492114) FLASH_TEST:  head verify : PASS
I (2492124) FLASH_TEST:  tail verify : PASS
I (2492124) FLASH_TEST:  boundary auth: PASS
```

## 動作と制限

| 動作 | コマンド | 何が起こるか | 終了方法 |
| --- | --- | --- | --- |
| 連続受信 | `lora_rx`, `flrc_rx` | パケットをカウントし、プロンプトは戻らない | `Ctrl+C` |
| 無限送信 | `lora_tx -n 0`, `flrc_tx -c 0` | 停止指定なしで送信し続ける | `Ctrl+C` |
| 連続波 | `lora_cw`, `lora_cw_pa` | 変調なしキャリアのみ送信、ペイロードなし | `lora_cw_stop` |
| バックグラウンドタスク | `flash_endurance -a start` | すぐに戻るが、消去を継続 | `flash_endurance -a stop` |
| ホットスポットの存続時間 | `ap_set`, `camera_http_start`, `audio_slot_send` | 無線は明示的に停止するまで有効 | `wifi stop`, `camera_http_stop`, `audio_slot_stop` |

- 1 つのコマンドがコンソールを占有します。受信・送信ループ中は、ファームウェアは入力を無視します。
- 出力はプレーンテキストです。試験記録を残すには、ターミナルのログ機能を有効にしてください。
- 一部のターミナルでは `Ctrl+C` がコピーに割り当てられています。割り込みが送信される設定になっているか確認してください。

## 安全性とコンプライアンス

**1. バンドごとにアンテナは 1 本のみ。** 各バンドの SMA コネクタと U.FL パッドは、0 Ω リンクを介して 1 本の RF ネットを共有しています。両方にアンテナを付けると、どちらのアンテナも整合が取れません。

**2. キャリアを出しっぱなしにしない。** `lora_cw` と `lora_cw_pa` は、ペイロードなしの連続キャリアを送信します。ボードを移動させる前に、必ず `lora_cw_stop` で停止してください。

**3. バンドプランを確認する。** サブ GHz 出力は最大 +22 dBm、2.4 GHz は最大 +12 dBm に達します。868 MHz は欧州向け、902 ～ 928 MHz は南北アメリカ向けです。自国の規制値を必ず確認し、認証試験ではシールドボックスを使用してください。

**4. バッテリとソーラー。** `BAT-3.7V` には 3.7 V の Li-ion セルを 1 本だけ接続し、シルク印刷の極性表示を守ってください。CN3165 充電 IC は約 495 mA を供給し、サーミスタ入力を持たないため、無人状態での充電は行わないでください。

**5. 既定の認証情報。** カメラとオーディオのホットスポットは、パスワード `12345678` で出荷され、カメラページにはログイン機能がありません。共有ベンチ上ではパスワードを変更し、ホットスポットを閉じてください。

**6. フラッシュ耐久試験はチップを摩耗させる。** `flash_endurance` は `flashtest` パーティションの実際のセクタを消去します。サンプル機に対してのみ実行し、今後も使用するボードでは決して実行しないでください。

## リソース

- [**ファクトリーファームウェア コマンドリファレンス**](/ja/wio_lr2021_dev_kit_command_reference)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
