---
description: これは機能、仕様、ハードウェアインターフェース、部品リストの概要です。
title: ハードウェアと仕様
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /ja/recamera_hd_poe_hardware
sidebar_position: 2
last_update:
  date: 09/25/2025
  author: Parker Hu
---

# reCamera HQ POE 概要

reCamera 2002 HQ PoE は、より鮮明で明瞭な画像を提供する高度な CMOS センサーを搭載しています。M12 レンズマウントを採用しており、デフォルトレンズを任意の互換性のある 2MP M12 レンズに柔軟に交換できます。また、PoE（Power over Ethernet）をサポートしており、別途 USB/DC 電源は不要で、PoE スイッチへの 1 本のイーサネットケーブルで電源とデータの両方を供給できます。


## 特徴

- 高品質：1/2.9 インチ GC2053 CMOS センサーを搭載し、優れた画質を提供します。
- M12 レンズマウント：デフォルト 90° FOV、標準的な M12 レンズに簡単に交換可能です。
- PoE（Power over Ethernet）対応イーサネット：1 本のケーブルでデータと電源の両方をサポート、PoE Mode A のみ対応。
- IO/UART 拡張：1×UART と 3×GPIO を備えた 6 ピンヘッダー。

## 仕様

### 処理システム

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **AI 性能**     | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **オペレーティングシステム**   | Linux                                                                     |
| **メモリ**             | 256 MB                                                                  |
| **ビデオエンコーダー**      | 5MP @ 30Fps                                                              |

### 基本仕様

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **電源供給**       | 12V DC ジャック to XT30 コネクタ                                             |
| **消費電力**  | 12V, 185mA（静的）                                                      |


| センサー                | GC2053                             |
| --------------------- | ---------------------------------- |
| 光学フォーマット        | 1/2.9インチ                          |
| 解像度            | 1920x1080                          |
| 最大フレームレート        | 30fps@フルサイズ                    |
| レンズマウント            | M12                                |
| FOV                   | 93°                                |
| イーサネット              | 100Mbps with PoE                   |
| USB                   | USB Type-C(2.0)                    |
| 寸法             | 40x40x45.8mm40x40x53.1mm レンズ付き |
| 動作温度 | -20～50°C                          |
| 動作湿度    | 95%                                |


### [コアボード-C101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| ボード         | 機能                           | バージョン |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE モジュール <br /> - オンボードアンテナ <br /> - 外部アンテナコネクタ| 1.2 |
| C1_2002       | - eMMC <br /> - ベースボードへの追加 SDIO <br /> - ベースボードへの追加 UART | 1.2 |

上面図             |  底面図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [センサーボード-S101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运github说明和图 -->

上面図             |  底面図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ 機能

<div>
  <table>
    <tbody>
      <tr>
        <td style={{ fontWeight: 'bold' }}>センサー</td>
        <td className="dbon">GC2053</td>
        <td style={{ fontWeight: 'bold' }}>CMOS サイズ</td>
        <td className="dbon">1/2.9"</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>ピクセル</td>
        <td className="dbon">2MP</td>
        <td style={{ fontWeight: 'bold' }}>絞り</td>
        <td className="dbon">F2.8</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>焦点距離</td>
        <td className="dbon">2.9mm ±0.5%</td>
        <td style={{ fontWeight: 'bold' }}>視野角</td>
        <td>DFOV 93°   HFOV 84°  VFOV 54°</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>歪み</td>
        <td>0.5 %</td>
        <td style={{ fontWeight: 'bold' }}>相対照度</td>
        <td>30% ± 5%</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>フォーカス範囲</td>
        <td>39~69.5 CM </td>
        <td style={{ fontWeight: 'bold' }}>フォーカス高さ</td>
        <td>50 CM</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>ビデオ</td>
        <td colspan="3">1920 x 1080p @30fps, 1280 x 720p @30fps</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>インターフェース</td>
        <td colspan="3">- 1 x マイクロフォン<br />- 1 x スピーカー<br />- 3 x LED インジケーター</td>
      </tr>
    </tbody>
  </table>
</div>

## ハードウェアインターフェース

- [ライト](#jump2)
- [マイク & スピーカー](#jump3)
- [WIFI](#jump4)
- [SD カード](#jump5)
- [Uart (デバッグ)](#jump6)
- [ユーザーボタン](#jump7)

### <span id="jump2">ライト</span>

reCamera には 3 つのインジケーターがあります。**赤と青**のライトはプログラム可能なインジケーターで、**緑**のインジケーターはプログラム不可能な電源インジケーターです。**赤**は CPU のステータスインジケーター、**青**はシステム eMMC の読み取りステータスインジケーターです。

**ライトインジケーターのステータス**：

| LED（色） | ステータス | 説明 |
| ---- | ---- | ---- |
| LED1 - 緑 | ON | 電源オン |
| LED2 - 赤 | 点滅 | CPU 動作中（ユーザー定義） |
| LED3 - 青 | 点滅 | eMMC 読み取り/書き込み |

例 1：Linux コマンドを使用して**赤色 LED** の明度をゼロに変更

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

例 2：**赤色ライト**を完全にオフにする

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

4 つの**白色**ライトがあり、これらはカメラの補助光です。補助光のスイッチは以下の指示で制御できます。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump3">マイク & スピーカー</span>

reCamera にはマイクロフォンとスピーカーが搭載されています。以下のコマンドでマイクロフォンとスピーカーを呼び出すことができます。reCamera は **wav** 形式のオーディオファイルを再生できます。

プレーヤーのデフォルト形式は：16bit ビットレート、サンプリングレートは 16,000 です

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">Wi-Fi</span>

reCamera の 2002w バージョンには Wi-Fi モジュールがハードウェアに搭載されています。Wi-Fi は AP+STA デュアルモードで、デバイスネットワークの設定や AP モードでのデバイス設定に使用できます。

AP モードでの Wi-Fi の **SSID** は：`reCamera_+ MAC の下位 6 桁` です。

AP モードでの Wi-Fi の **パスワード** は：`12345678` です。

WiFi_AP の SSID とパスワードは、reCamera システムの `/etc/hostapd_2g4.conf` ファイルで設定できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCamera STA 設定ファイルは **/etc/wpa_supplicant.conf** にあり、ここで接続する Wi-Fi アカウントとパスワードを設定します。
STA モードでは、**5G** 帯域の Wi-Fi に接続してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

ターミナルでは、以下のコマンドで Wi-Fi をスキャンして接続できます：

```bash
wpa_cli -i wlan0 scan                           #Start a scan

wpa_cli -i wlan0 scan_results                   #Returns wifi scan results

wpa_cli add_network                             # Adding a new network,Returns a network ID
wpa_cli set_network ID ssid "your_wifi_name"    # set network SSID
wpa_cli set_network ID psk "your_wifi_password" # set network passwd
wpa_cli enable_network ID                       # enable network and connect
wpa_cli status                                  # Checking connection status
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-4.png" /></div>

### <span id="jump5">SD カード</span>

SD カードスロットは reCamera のストレージ容量を拡張できます。SD カードを挿入後、`lsblk` コマンドを使用して SD カードの存在を確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

mmcblk1p1 のようなストレージデバイスが見つかったら、以下のコマンドでシステムにマウントできます。
<br/>

reCamera は **ext4** ファイルシステムのみを認識することに注意してください。

```bash
sudo blkid /dev/mmcblk1p1 #If TYPE is not ext4, the filesystem needs to be formatted
/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"

sudo mkfs.ext4 /dev/mmcblk1p1 #Format the filesystem to ext4
mkdir /userdata/mmcblk1 #Create a mount file
sudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #Mount the SD card to the /userdata/mmcblk1 path
```

`lsblk` でマウント結果を確認

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-6.png" /></div>

### <span id="jump6">Uart（デバッグ）</span>

reCamera のベース回路基板には、tx、rx、gnd の 3 つの接点があり、reCamera のデバッグシリアルポートとして機能します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

デバイスのシリアルポートボーレートは 115200 で、reCamera システムにログインできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-9.png" /></div>

### <span id="jump7">ユーザーボタン</span>

reCamera の usr ボタンはユーザーがカスタマイズできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-10.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## パーツリスト

| アイテム | 数量 |
|--|--|
| reCamera 2002x HQ PoE | x1 |
| USB Type-C ケーブル | x1 |
| イーサネットケーブル | x1 |
| ユーザーマニュアル | x1 |
| 6 ピンケーブル | x1 |


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
