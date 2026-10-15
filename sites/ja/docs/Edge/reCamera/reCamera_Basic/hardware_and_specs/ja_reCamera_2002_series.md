---
description: これは、機能、仕様、ハードウェアインターフェースおよび部品リストの概要です。
title: reCamera 2002 シリーズ
keywords:
  - エッジ
  - reCamera
  - ハードウェア概要
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /recamera_2002_series_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
createdAt: '2024-12-20'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/ja/recamera_2002_series_hardware_and_specs/
---

# reCamera 概要

reCamera は、オープンソースで小型の AI カメラであり、プログラム可能かつカスタマイズ可能です。RISC-V SoC を搭載し、デバイス上で 1 TOPS の AI 性能と 5MP @30 FPS のビデオエンコードを実現します。モジュラー式ハードウェア設計と拡張可能なインターフェースにより、ビジョン AI システムを構築する開発者にとって、非常に柔軟なプラットフォームを提供します。

## 特長

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
                <p><span data-font-family="Montserrat">AI 性能</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1TOPS@Int8</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">SoC</span></p>
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
                <p><span data-font-family="Montserrat">カメラセンサ</span></p>
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
                <p><span data-font-family="Montserrat">(version1) 8GB (version2) 64GB</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">拡張</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">着脱式 TF カード（最大 2TB、同梱なし）</span></p>
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
                <p><span data-font-family="Montserrat">リセットボタン 1 個、ブートボタン 1 個</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">補助光</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">0.3W 白色光</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">ステータスライト</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">電源インジケータ 1 個、IO プログラマブル 2 個</span></p>
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
| ボード         | 特長                           | バージョン |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE モジュール <br /> - オンボードアンテナ <br /> - 外部アンテナコネクタ| 1.2 |
| C1_2002       | - eMMC <br /> - ベースボード向け追加 SDIO <br /> - ベースボード向け追加 UART | 1.2 |

上面から見た図             |  下面から見た図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Sensor Board-S101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运github说明和图 -->

上面から見た図             |  下面から見た図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ 特徴

<div>

<table ><tbody>
<tr >
    <td >センサー</td>
    <td class="dbon">OV5647</td>
    <td class="dbon">CMOS サイズ</td>
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
    <td class="dbon">画角</td>
    <td >65°</td>
</tr>
<tr >
    <td >歪み</td>
    <td >&lt;1%</td>
    <td >画像</td>
    <td >2592 x 1944（静止画）</td>
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

- 4 x LED 補助ライト
- 1 x マイク
- 1 x スピーカー
- 3 x LED インジケータ

### [Base Board-B101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#base-board)
<!-- 搬运github说明和图 -->
上面から見た図             |  下面から見た図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Upper.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Bottom.png" /></div>

#### ⚙️ 特徴

- 電源入力および通信のための Type-C ポート x1
- Ethernet 通信をサポートするシングルポートトランスフォーマモジュール x1
- データ保存および交換用の SD カードリーダー x1

## ハードウェアインターフェース

- [ライト](#jump2)
- [マイク & スピーカー](#jump3)
- [WIFI](#jump4)
- [SD カード](#jump5)
- [Uart（デバッグ）](#jump6)
- [ユーザーボタン](#jump7)

### <span id="jump2">ライト</span>

recamera には 3 つのインジケータがあり、**赤色と青色**のライトはプログラム可能なインジケータで、**緑色**のインジケータはプログラム不可の電源インジケータです。**赤色**は CPU のステータスインジケータで、**青色**はシステム eMMC の読み取りステータスインジケータです。

**ライトインジケータの状態**:

| LED（色） | 状態 | 説明 |
| ---- | ---- | ---- |
| LED1 - 緑 | ON | 電源オン |
| LED2 - 赤 | 点滅 | CPU 動作中（ユーザー定義） |
| LED3 - 青 | 点滅 | eMMC 読み書き中 |

例 1: Linux コマンドを使用して **赤色 LED** の明るさを 0 に変更する

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

例 2: **赤色ライト** を完全に消灯する

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

白色のライトが 4 つあり、カメラの補助ライトとして機能します。補助ライトのスイッチは、以下のコマンドで制御できます。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump3">マイク & スピーカー</span>

recamera にはマイクとスピーカーが搭載されています。以下のコマンドでマイクとスピーカーを呼び出すことができます。recamera は **wav** 形式のオーディオファイルを再生できます。

プレーヤーのデフォルト形式は、16bit ビットレート、サンプリングレートは 16,000 です。

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">Wi-Fi</span>

reCamera 2002w バージョンには、ハードウェアとして Wi-Fi モジュールが搭載されています。Wi-Fi は AP+STA のデュアルモードで、AP モードでデバイスネットワークを構成したり、デバイスを構成したりするために使用できます。

AP モードでの Wi-Fi の **SSID** は: `reCamera_+ the last six bits of MAC` です。

AP モードでの Wi-Fi の **Passwd** は: `12345678` です。

WiFi_AP の ssid と passwd は、recamera システム上の `/etc/hostapd_2g4.conf` ファイルで設定できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCamera の STA 設定ファイルは **/etc/wpa_supplicant.conf** にあり、接続する Wi-Fi アカウントとパスワードをここで設定します。
STA モードでは、**5G** 帯の Wi-Fi に接続してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

ターミナルでは、次のコマンドで Wi-Fi をスキャンして接続できます。

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

SD カードスロットは、recamera のストレージ容量を拡張できます。SD カードを挿入した後、`lsblk` コマンドを使用して SD カードの存在を確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

mmcblk1p1 のようなストレージデバイスが見つかったら、次のコマンドを使用してシステムにマウントできます。
<br/>

recamera は **ext4** ファイルシステムのみを認識することに注意してください。

```bash
sudo blkid /dev/mmcblk1p1 #If TYPE is not ext4, the filesystem needs to be formatted
/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"

sudo mkfs.ext4 /dev/mmcblk1p1 #Format the filesystem to ext4
mkdir /userdata/mmcblk1 #Create a mount file
sudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #Mount the SD card to the /userdata/mmcblk1 path
```

`lsblk` でマウント結果を確認します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-6.png" /></div>

### <span id="jump6">Uart（デバッグ）</span>

recamera のベース回路基板には tx、rx、gnd の 3 つのコンタクトがあり、recamera のデバッグ用シリアルポートとして機能します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

このデバイスのシリアルポートのボーレートは 115200 で、recamera システムにログインできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-9.png" /></div>

### <span id="jump7">ユーザーボタン</span>

reCamera の usr ボタンは、ユーザーがカスタマイズできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-10.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## パーツリスト

| 項目 | 数量 |
|--|--|
| reCamera 2002 シリーズ | x1 |
| USB Type-C ケーブル | x1 |
| Ethernet ケーブル | x1 |

<!-- ## Accessories List -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
