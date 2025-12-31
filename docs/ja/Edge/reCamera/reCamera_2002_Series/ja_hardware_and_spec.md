---
description: これは機能、仕様、ハードウェアインターフェース、パーツリストの概要です。
title: ハードウェアと仕様
keywords:
  - Edge
  - reCamera
  - Hardware overview
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /ja/recamera_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
---

# reCamera 概要

reCameraは、オープンソースで小型のAIカメラです。プログラム可能でカスタマイズ可能、RISC-V SoCを搭載し、デバイス上で1 TOPSのAI性能を提供し、5MP @30 FPSでビデオエンコーディングを実現します。モジュラーハードウェア設計と拡張可能なインターフェースにより、ビジョンAIシステムを構築する開発者にとって最も汎用性の高いプラットフォームを提供します。

## 機能

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/reCamera_3x.png" alt="pir" width={600} height="auto" /></p>

## 仕様

<table style={{width: '72.2022%'}}>
    <tbody>
        <tr></tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002 シリーズ</span></strong></p>
            </td>
            <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002</span></strong></p>
            </td>
            <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002w</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                <p><span data-font-family="Montserrat">プロセッサシステム</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">AI性能</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1TOPS@Int8</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">SOC</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">SG2002</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">CPU</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">C906@1GHz + C906@700MHz</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">MCU</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">8051@8KB SRAM</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">メモリ</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">256MB</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">ビデオエンコード</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">5MP @ 30Fps</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">カメラセンサー</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">OV5647</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                <p><span data-font-family="Montserrat">ストレージ</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">eMMC</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">(バージョン1) 8GB (バージョン2) 64GB</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">拡張</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">取り外し可能なTFカード（最大2TB、別売り）</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                <p><span data-font-family="Montserrat">I/O</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">イーサネット</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">100Mbps</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">ワイヤレス</span></p>
            </td>
            <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                <p><span data-font-family="Montserrat">/</span></p>
            </td>
            <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                <p><span data-font-family="Montserrat">WIFI2.4G/5G BT4.2/5.0</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">USB</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">USB Type-C(2.0)</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">ボタン</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1個のリセットボタン、1個のブートボタン</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">補助光</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">0.3w 白色光</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">ステータスライト</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1つの電源インジケータ、2つのIOプログラマブル</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                <p><span data-font-family="Montserrat">オーディオ</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">マイク</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">オンボードマイク</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">スピーカー</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">外部スピーカー</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">寸法</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">40x40x36.5mm</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">電源</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="default">5V 1A</span></p>
            </td>
        </tr>
    </tbody>
</table>

## ハードウェア概要

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

### [コアボード-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| ボード         | 機能                           | バージョン |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLEモジュール <br /> - オンボードアンテナ <br /> - 外部アンテナコネクタ| 1.2 |
| C1_2002       | - eMMC <br /> - ベースボードへの追加SDIO <br /> - ベースボードへの追加UART | 1.2 |

上面図             |  底面図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [センサーボード-S101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运github说明和图 -->

上面図             |  底面図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ 機能

<div>

<table ><tbody>
<tr >
    <td >センサー</td>
    <td class="dbon">OV5647</td>
    <td class="dbon">CMOSサイズ</td>
    <td class="dbon">1/4"</td>
</tr>
<tr >
    <td class="dbon">画素数</td>
    <td class="dbon">5MP</td>
    <td class="dbon">絞り</td>
    <td class="dbon">F2.8</td>
</tr>
<tr >
    <td >焦点距離</td>
    <td class="dbon">3.46mm</td>
    <td class="dbon">視野角</td>
    <td >65°</td>
</tr>
<tr >
    <td >歪み</td>
    <td >&lt;1%</td>
    <td >画像</td>
    <td >2592 x 1944(静止画)</td>
</tr>
<tr >
    <td >画像</td>
    <td  colspan="3">2592 x 1944 静止画解像度</td>
</tr>
<tr >
    <td >動画</td>
    <td  colspan="3">1920 x 1080p @30fps, 1280 x 720p @60fps, 640 x 480p @60fps, 640 x 480p @90fps</td>
</tr></tbody>
</table>
</div>

- 4 x LED補助ライト
- 1 x マイク
- 1 x スピーカー
- 3 x LED インジケーター

### [ベースボード-B101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#base-board)
<!-- 搬运github说明和图 -->
上面図             |  底面図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Upper.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Bottom.png" /></div>

#### ⚙️ 特徴

- 1 x Type-Cポート（電源入力と通信用）
- 1 x シングルポートトランスフォーマーモジュール（Ethernet通信サポート用）
- 1 x SDカードリーダー（データストレージと交換用）

## ハードウェアインターフェース

- [ライト](#jump2)
- [マイク & スピーカー](#jump3)
- [WIFI](#jump4)
- [SDカード](#jump5)
- [Uart (デバッグ)](#jump6)
- [ユーザーボタン](#jump7)

### <span id="jump2">ライト</span>

recameraには3つのインジケーターがあります。**赤と青**のライトはプログラム可能なインジケーターで、**緑**のインジケーターは電源インジケーターでプログラム不可です。**赤**はCPUのステータスインジケーター、**青**はシステムemmcの読み取りステータスインジケーターです。

**ライトインジケーターステータス**：

| LED（色） | ステータス | 説明 |
| ---- | ---- | ---- |
| LED1 - 緑 | 点灯 | 電源オン |
| LED2 - 赤 | 点滅 | CPU動作中（ユーザー定義） |
| LED3 - 青 | 点滅 | eMMC読み取り/書き込み中 |

例1：Linuxコマンドを使用して**赤色LED**の輝度をゼロに変更する

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

例2：**赤色ライト**を完全に消灯する

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

4つの**白い**ライトがあり、これらはカメラの補助照明です。補助照明のスイッチは以下の指示で制御できます。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump3">マイク & スピーカー</span>

recameraにはマイクとスピーカーが搭載されています。以下のコマンドでマイクとスピーカーを呼び出すことができます。recameraは**wav**形式の音声ファイルを再生できます。

プレーヤーのデフォルト形式は：16bitビットレート；サンプリングレートは16,000です

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">Wi-Fi</span>

2002w版のreCameraはハードウェアにWi-Fiモジュールを搭載しています。Wi-FiはAP+STAデュアルモードで、デバイスネットワークの設定やAPモードでのデバイス設定に使用できます。

APモードでのwifiの**SSID**は：`reCamera_+ MACの下位6ビット`です。

APモードでのwifiの**Passwd**は：`12345678`です。

WiFi_APのssidとpasswdは、recameraシステムの`/etc/hostapd_2g4.conf`ファイルで設定できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCameraのSTA設定ファイルは**/etc/wpa_supplicant.conf**にあり、ここで接続するWi-Fiアカウントとパスワードを設定します。
STAモードでは、**5G**帯域のWi-Fiに接続してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

ターミナルでは、以下のコマンドでWi-Fiをスキャンして接続できます：

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

### <span id="jump5">SDカード</span>

SDカードスロットはreCameraのストレージ容量を拡張できます。SDカードを挿入した後、`lsblk`コマンドを使用してSDカードの存在を確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

mmcblk1p1のようなストレージデバイスを見つけたら、以下のコマンドを使用してシステムにマウントできます。
<br/>

reCameraは**ext4**ファイルシステムのみを認識することに注意してください。

```bash
sudo blkid /dev/mmcblk1p1 #If TYPE is not ext4, the filesystem needs to be formatted
/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"

sudo mkfs.ext4 /dev/mmcblk1p1 #Format the filesystem to ext4
mkdir /userdata/mmcblk1 #Create a mount file
sudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #Mount the SD card to the /userdata/mmcblk1 path
```

`lsblk`でマウント結果を確認してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-6.png" /></div>

### <span id="jump6">Uart (デバッグ)</span>

reCameraのベース回路基板には、tx、rx、gndの3つの接点があり、reCameraのデバッグシリアルポートとして機能します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

このデバイスのシリアルポートボーレートは115200で、reCameraシステムにログインできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-9.png" /></div>

### <span id="jump7">ユーザーボタン</span>

reCameraのusrボタンはユーザーがカスタマイズできます。

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
| reCamera 2002 シリーズ | x1 |
| USB type-C ケーブル | x1 |
| イーサネットケーブル | x1 |

<!-- ## Accessories List -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
