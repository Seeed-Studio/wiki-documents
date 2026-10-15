---
description: これは、機能、仕様、ハードウェアインターフェースおよび部品リストの概要です。
title: reCamera Gimbal
keywords:
  - エッジ
  - reCamera
  - ハードウェア概要
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
createdAt: '2024-12-20'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/ja/recamera_gimbal_hardware_and_specs/
---

# reCamera Gimbal 概要

reCamera Gimbal 2002 シリーズは、1TOPS AI カメラ（reCamera）と 2 軸ジンバルを備えた、初のオープンソースカメラ制御システムです。2 つのブラシレスモーターにより、360° のヨーおよび 180° のピッチが可能で、全方位をカバーします。

## 特長

- ハードウェアおよびソフトウェアにおける完全なオープンソースエコシステム
  - [Developer Portal](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- クイックセットアップ & 高精度な動作
  - レゴのように組み立てられるパッケージに対応
  - 360° ヨー回転による全方位カバーと、床から天井までをカバーする 180° ピッチ範囲
  - ブラシレスモーター精度：スムーズなターゲットトラッキングのための 0.01° ステップ精度。
- AI 駆動のモーションコントロール
  - すぐに使えるカスタム AI モデル：商用ライセンス付き YOLO11 内蔵、Roboflow & SenseCraft AI 対応。
  - スマートトラッキング：AI がジンバルの動きを自動調整。
- すべてのスキルレベルに対応した柔軟な開発
  - ジンバル動作のローコードフローをカスタマイズできる Node-RED を内蔵。
  - より高度な開発のための C++ SDK をサポート。

## 仕様

### プロセッシングシステム

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **AI 性能**            | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **オペレーティングシステム** | Linux                                                                     |
| **メモリ**             | 256 MB                                                                  |
| **ビデオエンコーダ**   | 5MP @ 30Fps                                                              |

### 基本仕様

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **電源**               | 12V DC ジャックから XT30 コネクタへ                                      |
| **消費電力**           | 12V, 185mA（静止時）                                                     |

### カメラ

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **センサ**             | OV5647                                                                    |
| **解像度**             | 5M (2592×1944) ピクセル                                                 |
| **チップ**             | 1/4" CMOS センサ                                                         |
| **画素サイズ**         | 1.4μm                                                                     |
| **出力フォーマット**   | RAW 10                                                                    |
| **最大フレームレート** | フルサイズ：15fps                                                         |
| **絞り**               | F2.8                                                                      |
| **35mm 換算焦点距離**  | 3.46mm                                                                 |
| **画角**               | 65°                                                                      |
| **歪み**               | &lt;1%                                                                      |
| **レンズ構成**         | 5P                                                                        |

### インターフェース

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **USB**                | USB 2.0 Type-C                                                            |
| **無線**               | Wi-Fi 2.4G/5G Bluetooth 4.2/5.0                                          |
| **ボタン**             | リセットボタン ×1、ユーザーボタン ×1                                     |
| **補助 LED**           | 白色光 0.3W ×4                                                           |
| **LED**                | 電源インジケータ ×1、IO プログラマブルインジケータ ×2                    |
| **マイク**             | オンボードマイク                                                          |
| **スピーカー**         | 外部スピーカー                                                            |

### モーター仕様

| **パラメータ**          | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **巻数**               | 54                       | 60                  |
| **定格電圧 (V)**       | 12                       | 12                  |
| **最大回転数 (rpm)**   | 2000                     | 2100                |
| **定格トルク (N·m)**   | 0.04                     | 0.05                |
| **定格回転数 (rpm)**   | 1160                     | 1250                |
| **定格電流 (A)**       | 0.64                     | 0.79                |
| **最大出力 (W)**       | 4.6                      | 6.4                 |
| **モータ極数**         | 14                       | 14                  |
| **動作温度 (℃)**       | -25~60                   | -25~60              |
| **重量 (g)**           | 49                       | 63                  |
| **ドライブ入力電圧 (V)** | 6~16                    | 6~16                |
| **通信方式**           | CAN                      | CAN                 |
| **通信周波数**         | CAN@1Mbps:2KHz           | CAN@1Mbps:2KHz      |
| **エンコーダ**         | 15-bit 磁気エンコーダ    | 15-bit 磁気エンコーダ        |
| **CAN ボーレート**     | 100K、125K、250K、500K、1M   | 100K、125K、250K、500K、1M    |
| **制御モード**         | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                |

### ジンバル仕様

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **ピッチ範囲**         | 0～180°                                                                    |
| **ヨー範囲**           | 0～360°                                                                    |

### 周囲環境条件

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **動作温度**           | -20～50 ℃                                                                 |
| **動作湿度**           | 0～90%                                                                    |

### 機械仕様

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **寸法 (W × H × D)**   | 68×112×71mm                                                              |
| **筐体**               | ポリアミド (PA) ナイロン                                                 |
| **重量 (正味)**        | 230g                                                                      |

### その他

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **保証**               | 1 年                                                                      |

## ハードウェア概要

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

### コアボード - C101

[**8GB の PCBA ファイルをダウンロードするにはクリック**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**64GB の PCBA ファイルをダウンロードするにはクリック**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

トップビュー             |  ボトムビュー
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### ブロック図

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div>

### センサーボード - S101

[**PCBA ファイルをダウンロードするにはクリック**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

トップビュー             |  ボトムビュー
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

### ベースボード - B401

[**PCBA ファイルをダウンロードするにはクリック**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

トップビュー             |  ボトムビュー
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>

#### ブロック図

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div>

### 電源基板

この電源基板は、安定した電力供給と過電圧保護という 2 つの機能を提供します。12V DC 入力に対応しており、モーターと reCamera システムの両方に電力を供給できます。

**過電圧保護しきい値**：

- 最大動作遮断電圧: 25.66V
- 通常動作電圧: 25.54V
- 最低安全電圧: 25.4V

[**PCBA ファイルをクリックしてダウンロード**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### ブロック図

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div>

## ハードウェアインターフェース

- [ライト](#jump1)
- [マイク & スピーカー](#jump2)
- [WIFI](#jump3)
- [ボタン](#jump4)
- [モーター](#jump5)
- [CAN](#jump6)

### <span id="jump1">Light</span>

recamera には 3 つのインジケーターがあり、**赤と青**のライトはプログラム可能なインジケーターで、**緑**のインジケーターはプログラム不可の電源インジケーターです。**赤**は CPU のステータスインジケーターであり、**青**はシステム eMMC の読み取りステータスインジケーターです。

**ライトインジケーターの状態**：

| LED(色) | 状態 | 説明 |
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

カメラの補助光として 4 つの**白色**ライトがあります。補助光のスイッチは、以下のコマンドで制御できます。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump2">Mic & Speaker</span>

recamera にはマイクとスピーカーが搭載されています。以下のコマンドでマイクとスピーカーを呼び出すことができます。recamera は **wav** 形式のオーディオファイルを再生できます。

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

ローカルの mp3 オーディオファイルは、[Convert audio online](https://www.aconvert.com/audio/) を使用して wav ファイルに変換し、recamera で再生できます。
プレーヤーのデフォルト形式は、16bit ビットレート、サンプリングレートは 16,000 です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Convert_audio_online.png" /></div>

### <span id="jump3">Wi-Fi</span>

reCamera の 2002w バージョンには、ハードウェアとして Wi-Fi モジュールが搭載されています。Wi-Fi は AP+STA のデュアルモードで、AP モードでデバイスネットワークを構成したり、デバイスを設定したりするために使用できます。

AP モードでの Wi-Fi の **SSID** は: `reCamera_+ the last six bits of MAC` です。

AP モードでの Wi-Fi の **Passwd** は: `12345678` です。

WiFi_AP の ssid と passwd は、recamera システム上の `/etc/hostapd_2g4.conf` ファイルで設定できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCamera の STA 設定ファイルは **/etc/wpa_supplicant.conf** にあり、ここで接続する Wi-Fi アカウントとパスワードを設定します。
STA モードでは、**5G** 帯の Wi-Fi に接続してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

ターミナルでは、次のコマンドで Wi-Fi をスキャンして接続できます：

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

### <span id="jump4">Button</span>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

#### ユーザーボタン

**10 User Button** は **reCamera Gimbal** Board-B401 上にあります。デバイスのパスコードを忘れた場合などにデバイスをリセットしたいときは、User ボタンを長押ししながらデバイスに電源を接続します。デバイスの赤いライトが点滅ではなく点灯し続ける状態になったら、User ボタンを離します。

デバイスのファームウェアを特定のバージョンに復元したい場合は、[os version control](https://wiki.seeedstudio.com/ja/recamera_os_version_control) を参照してください。

#### 再起動ボタン

**11 Reboot Button** は **reCamera Gimbal** Board-B401 上にあります。このボタンを押すと、システムが再起動します。

### <span id="jump5">Motor</span>

reCamera Gimbal には、ジンバルのモーターをデバッグおよび制御するために使用できる Gimbal スクリプトがあります。
ジンバルスクリプトの動作を確認するには、次のコマンドを実行します：

```bash
gimbal --help
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

`gimbal` は bash スクリプトであり、二次開発のニーズを満たすためにスクリプトを表示および変更することができます。スクリプトの場所は次のとおりです：

```bash
cd /usr/bin
cat gimbal
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script_content.png" /></div>

### <span id="jump6">CAN</span>

`ifconfig` コマンドを使用して **can0** インターフェースを確認します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_ifconfig.png" /></div>

`cansend can0 can_id#9C.00.00.00.00.00.00.00` コマンドを使用して CAN メッセージを送信します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_cansend.png" /></div>

`candump can0` コマンドを使用して CAN メッセージを受信します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_candump.png" /></div>

## パーツリスト

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
