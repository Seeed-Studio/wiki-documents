---
description: これは、機能、仕様、ハードウェアインターフェースおよび部品リストの概要です。
title: reCamera HQ POE
keywords:
  - エッジ
  - reCamera
  - ハードウェア概要
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /reCamera_hq_poe_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
createdAt: '2024-12-20'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/ja/reCamera_hq_poe_hardware_and_specs/
---

# reCamera HQ POE 概要

reCamera 2002 HQ PoE は、高度な CMOS センサーを搭載しており、よりシャープでクリアな画像を実現します。M12 レンズマウントを採用しており、標準レンズを任意の互換 2MP M12 レンズに柔軟に交換できます。また PoE（Power over Ethernet）にも対応しており、USB/DC 電源を別途用意する必要はなく、PoE スイッチに 1 本の Ethernet ケーブルを接続するだけで電源とデータ通信が行えます。


## 特長

- 高画質：1/2.9 インチ GC2053 CMOS センサーを搭載し、優れた画質を提供します。
- M12 レンズマウント：デフォルトの視野角は 90° で、標準的な M12 レンズであれば簡単に交換できます。
- PoE 対応 Ethernet（Power over Ethernet）：1 本のケーブルでデータと電源を供給可能で、PoE Mode A のみをサポートします。
- IO/UART 拡張：1×UART と 3×GPIO を備えた 6 ピンヘッダ。

## 仕様

### プロセッシングシステム

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **AI Performance**     | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **Operating System**   | Linux                                                                     |
| **Memory**             | 256 MB                                                                  |
| **Video Encoder**      | 5MP @ 30Fps                                                              |



| センサー              | GC2053                             |
| --------------------- | ---------------------------------- |
| 光学フォーマット      | 1/2.9inch                          |
| 解像度                | 1920x1080                          |
| 最大フレームレート    | 30fps@full size                    |
| レンズマウント        | M12                                |
| 視野角（FOV）         | 93°                                |
| Ethernet              | 100Mbps（PoE 対応）                |
| USB                   | USB Type-C(2.0)                    |
| 寸法                  | 40x40x45.8mm40x40x53.1mm（レンズ含む） |
| 動作温度              | -20～50°C                          |
| 動作湿度              | 95%                                |


### [Core Board-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| ボード        | 特長                               | バージョン |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE モジュール <br /> - オンボードアンテナ <br /> - 外部アンテナコネクタ| 1.2 |
| C1_2002       | - eMMC <br /> - ベースボード向け追加 SDIO <br /> - ベースボード向け追加 UART | 1.2 |

トップビュー             |  ボトムビュー
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Sensor Board-S4_GC2053](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)


トップビュー             |  ボトムビュー
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_top2.png" /></div> |<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_bottom2.png" /></div>

#### ⚙️ 特長

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
        <td style={{ fontWeight: 'bold' }}>画素数</td>
        <td className="dbon">2MP</td>
        <td style={{ fontWeight: 'bold' }}>絞り値</td>
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
        <td style={{ fontWeight: 'bold' }}>合焦範囲</td>
        <td>39~69.5 CM </td>
        <td style={{ fontWeight: 'bold' }}>合焦距離</td>
        <td>50 CM</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>ビデオ</td>
        <td colspan="3">1920 x 1080p @30fps, 1280 x 720p @30fps</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>インターフェース</td>
        <td colspan="3">- 1 x マイクロフォン<br />- 1 x スピーカー<br />- 3 x LED インジケータ</td>
      </tr>
    </tbody>
  </table>
</div>

### [B3_POE](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Base_Board/B3_POE/readme.md)

上面             |  下面
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_top2.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_bottom2.png" /></div>

#### ⚙️ 特長:

- **802.3af PSE** 用 RJ45 ポート × 1。
- UART ポート × 1。
- デバッグポート × 1。
- IO ポート × 3。

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

## ハードウェアインターフェース

- [Light](#jump2)
- [Mic & Speaker](#jump3)
- [POE](#jump4)
- [IO](#jump5)
- [Uart (Debug)](#jump6)
- [User Button](#jump7)

### <span id="jump2">Light</span>

reCamera には 3 つのインジケータがあり、**赤色と青色**のライトはプログラム可能なインジケータで、**緑色**のインジケータはプログラム不可の電源インジケータです。**赤色**は CPU のステータスインジケータ、**青色**はシステム eMMC の読み取りステータスインジケータです。

**ライトインジケータの状態**：

| LED(色) | 状態 | 説明 |
| ---- | ---- | ---- |
| LED1 - 緑 | ON | 電源オン |
| LED2 - 赤 | 点滅 | CPU 動作中（ユーザー定義） |
| LED3 - 青 | 点滅 | eMMC 読み書き中 |

例 1：Linux コマンドを使用して **赤色 LED** の明るさを 0 に変更する

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

例 2：**赤色ライト** を完全に消灯する

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

### <span id="jump3">Mic & Speaker</span>

reCamera にはマイクロフォンとスピーカーが搭載されています。以下のコマンドを使用してマイクロフォンとスピーカーを呼び出すことができます。reCamera は **wav** 形式のオーディオファイルを再生できます。

プレーヤーのデフォルトフォーマットは、16bit ビットレート、サンプリングレートは 16,000 です。

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">POE</span>

POE モジュールは reCamera HQ POE バージョンのハードウェアに内蔵されています。WiFi モジュールは取り外されていますが、SG2002w のコアボードに交換することで Wi-Fi 機能を復元できます。

**POE 802.3af** プロトコルをサポートするスイッチに reCamera を接続すると、reCamera デバイスが起動します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/poe_connect_recamera.jpg" /></div>

ルーター上でデバイスの IP アドレスを確認してアクセスするか、USB で reCamera を接続し、ターミナルにアクセスして有線ネットワークの IP を確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/router_search.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/terminal_ipv4_search.png" /></div>

### <span id="jump5">IO</span>

**GPIO sysfs インターフェースを使用して I/O を制御する**

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

Linux では、GPIO の読み書きに最も一般的に使用される方法は GPIO sysfs インターフェースを利用することです。これは `/sys/class/gpio` ディレクトリ配下の `export`、`unexport`、`gpio{N}/direction`、`gpio{N}/value`（`{N}` は実際のピン番号に置き換え）といったファイルを操作することで実現され、多くの場合シェルスクリプトで使用されます。

reCamera POE のバックプレーンには 3 つの利用可能な IO ポートがあります。各ポートは入力または出力として設定できます。IO ポートの番号は次のとおりです：

| IO ポート | GPIO 番号 |
| ---- | ---- |
| D1 | 490 |
| CLK（多重化 IO ピン） | 487 |
| SMD（多重化 IO ピン） | 488 |


```bash
echo "490" > /sys/class/gpio/export #Enable pin GPIO490

echo "out" > /sys/class/gpio/gpio490/direction #Enable the output mode
echo 1 > /sys/class/gpio/gpio490/value # Set the pin to a high level
echo 0 > /sys/class/gpio/gpio490/value # Set the pin to a low level

echo "in" > /sys/class/gpio/gpio490/direction #Enable the input mode
cat /sys/class/gpio/gpio490/value #Read the pin level

echo "490" > /sys/class/gpio/unexport #Disable pin GPIO490
```


### <span id="jump6">Uart (Debug)</span>

reCamera の POE ベースボードには 2 組のシリアルポートがあり、/ttyS0（デバッグ用）と /ttyS3 です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_pinout.png" /></div>

このデバイスのデバッグシリアルポートのボーレートは 115200 で、リモート監視システムへの接続をサポートします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

```bash
#Use the stty tool to query its communication parameters.

stty -F /dev/ttyS3
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-2.png" /></div>

```bash
# Modify the serial port baud rate, where ispeed refers to the input speed and ospeed refers to the output speed.

stty -F /dev/ttyS3 ispeed 115200 ospeed 115200
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-3.png" /></div>

デフォルトのシリアルポートではエコーが有効になっており、次のコマンドで無効にできます：

```bash
stty -F /dev/ttyS3 -echo
```

シリアル通信：

```bash
#Send data
echo "hello world" > /dev/ttyS3
echo Hello! > /dev/ttyS3
#Receive data
cat /dev/ttyS3
```

`minicom` ツールを使用してシリアルポート経由で通信します：

```bash
minicom -D /dev/ttyS3 -b 115200
```


### <span id="jump7">ユーザーボタン</span>

reCamera の `usr` ボタンはユーザーがカスタマイズできます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_user_button.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## パーツリスト

| 品目 | 数量 |
|--|--|
| reCamera 2002x HQ PoE | x1 |
| USB Type-C ケーブル | x1 |
| イーサネットケーブル | x1 |
| ユーザーマニュアル | x1 |
| 6 ピンケーブル | x1 |


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
