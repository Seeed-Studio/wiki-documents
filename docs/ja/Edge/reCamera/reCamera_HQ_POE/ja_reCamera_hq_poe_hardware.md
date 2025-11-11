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

reCamera 2002 HQ PoEは、より鮮明で明瞭な画像を提供する高度なCMOSセンサーを搭載しています。M12レンズマウントを採用しており、デフォルトレンズを任意の互換性のある2MP M12レンズに柔軟に交換できます。また、PoE（Power over Ethernet）をサポートしており、別途USB/DC電源は不要で、PoEスイッチへの1本のイーサネットケーブルで電源とデータの両方を供給できます。


## 特徴

- 高品質：1/2.9インチGC2053 CMOSセンサーを搭載し、優れた画質を提供します。
- M12レンズマウント：デフォルト90° FOV、標準M12レンズと簡単に交換可能。
- PoE（Power over Ethernet）対応イーサネット：1本のケーブルでデータと電源を供給、PoE Mode Aのみ対応。
- IO/UART拡張：1×UARTと3×GPIOを備えた6ピンヘッダー。

## 仕様

### 処理システム

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **AI性能**     | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **オペレーティングシステム**   | Linux                                                                     |
| **メモリ**             | 256 MB                                                                  |
| **ビデオエンコーダー**      | 5MP @ 30Fps                                                              |



| センサー                | GC2053                             |
| --------------------- | ---------------------------------- |
| 光学フォーマット        | 1/2.9インチ                          |
| 解像度            | 1920x1080                          |
| 最大フレームレート        | 30fps@フルサイズ                    |
| レンズマウント            | M12                                |
| FOV                   | 93°                                |
| イーサネット              | 100Mbps（PoE対応）                   |
| USB                   | USB Type-C（2.0）                    |
| 寸法             | 40x40x45.8mm（レンズ付き40x40x53.1mm） |
| 動作温度 | -20～50°C                          |
| 動作湿度    | 95%                                |


### [コアボード-C101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| ボード         | 機能                           | バージョン |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLEモジュール <br /> - オンボードアンテナ <br /> - 外部アンテナコネクタ| 1.2 |
| C1_2002       | - eMMC <br /> - ベースボードへの追加SDIO <br /> - ベースボードへの追加UART | 1.2 |

上面図             |  底面図
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [センサーボード-S4_GC2053](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)


上面図             |  底面図
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_top2.png" /></div> |<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_bottom2.png" /></div>

#### ⚙️ 機能

<div>
  <table>
    <tbody>
      <tr>
        <td style={{ fontWeight: 'bold' }}>センサー</td>
        <td className="dbon">GC2053</td>
        <td style={{ fontWeight: 'bold' }}>CMOSサイズ</td>
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
        <td colspan="3">- 1 x マイクロフォン<br />- 1 x スピーカー<br />- 3 x LEDインジケーター</td>
      </tr>
    </tbody>
  </table>
</div>

### [B3_POE](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Base_Board/B3_POE/readme.md)

上面             |  底面
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_top2.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_bottom2.png" /></div>

#### ⚙️ 機能：

- 1 x **802.3af PSE**対応RJ45ポート。
- 1 x UARTポート。
- 1 x デバッグポート。
- 3 x IOポート。

 <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

## ハードウェアインターフェース

- [ライト](#jump2)
- [マイク＆スピーカー](#jump3)
- [POE](#jump4)
- [IO](#jump5)
- [Uart（デバッグ）](#jump6)
- [ユーザーボタン](#jump7)

### <span id="jump2">ライト</span>

reCameraには3つのインジケーターがあります。**赤と青**のライトはプログラム可能なインジケーターで、**緑**のインジケーターはプログラム不可能な電源インジケーターです。**赤**はCPUのステータスインジケーター、**青**はシステムeMMCの読み取りステータスインジケーターです。

**ライトインジケーターのステータス**：

| LED（色） | ステータス | 説明 |
| ---- | ---- | ---- |
| LED1 - 緑 | 点灯 | 電源オン |
| LED2 - 赤 | 点滅 | CPU動作中（ユーザー定義） |
| LED3 - 青 | 点滅 | eMMC読み取り/書き込み中 |

例1：Linuxコマンドを使用して**赤色LED**の明度をゼロに変更

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

例2：**赤色ライト**を完全に消灯

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

### <span id="jump3">マイク＆スピーカー</span>

reCameraにはマイクロフォンとスピーカーが搭載されています。以下のコマンドでマイクロフォンとスピーカーを呼び出すことができます。reCameraは**wav**形式のオーディオファイルを再生できます。

プレーヤーのデフォルト形式：16bitビットレート、サンプリングレート16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">POE</span>

POEモジュールはreCamera HQ POEバージョンのハードウェアに内蔵されています。WiFiモジュールは削除されています。ただし、SG2002wのコアボードを交換することでWi-Fi機能を復元できます。

**POE 802.3af**プロトコルをサポートするスイッチにreCameraを接続すると、reCameraデバイスが起動します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/poe_connect_recamera.jpg" /></div>

ルーターでデバイスのIPアドレスを確認してアクセスするか、USBでreCameraに接続してターミナルにアクセスし、有線ネットワークIPを照会できます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/router_search.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/terminal_ipv4_search.png" /></div>

### <span id="jump5">IO</span>

**GPIO sysfsインターフェースを使用したI/O制御**

 <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

Linuxでは、GPIOの読み書きを行う最も一般的な方法は、GPIO sysfsインターフェースを使用することです。これは`/sys/class/gpio`ディレクトリ下の`export`、`unexport`、`gpio{N}/direction`、`gpio{N}/value`（`{N}`を実際のピン番号に置き換える）などのファイルを操作することで実装され、シェルスクリプトでよく使用されます。

reCamera POEベースプレートには3つの利用可能なIOポートがあります。各ポートは入力または出力として設定できます。IOポートの番号は以下の通りです：

| IOポート | GPIO番号 |
| ---- | ---- |
| D1 | 490 |
| CLK（多重化IOピン） | 487 |
| SMD（多重化IOピン） | 488 |


```bash
echo "490" > /sys/class/gpio/export #Enable pin GPIO490

echo "out" > /sys/class/gpio/gpio490/direction #Enable the output mode
echo 1 > /sys/class/gpio/gpio490/value # Set the pin to a high level
echo 0 > /sys/class/gpio/gpio490/value # Set the pin to a low level

echo "in" > /sys/class/gpio/gpio490/direction #Enable the input mode
cat /sys/class/gpio/gpio490/value #Read the pin level

echo "490" > /sys/class/gpio/unexport #Disable pin GPIO490
```


### <span id="jump6">Uart（デバッグ）</span>

reCameraのPOEベースボードには2組のシリアルポートがあります：/ttyS0（デバッグ用）と/ttyS3です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-1.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_top_uart.png" /></div>

このデバイスのデバッグシリアルポートのボーレートは115200で、リモート監視システムへの接続をサポートしています。

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

デフォルトのシリアルポートはエコーが有効になっており、以下のコマンドを使用して無効にできます：

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

minicomツールを使用してシリアルポート経由で通信する：

```bash
minicom -D /dev/ttyS3 -b 115200
```


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
| reCamera 2002x HQ PoE | x1 |
| USB Type-C ケーブル | x1 |
| イーサネットケーブル | x1 |
| ユーザーマニュアル | x1 |
| 6ピンケーブル | x1 |


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
