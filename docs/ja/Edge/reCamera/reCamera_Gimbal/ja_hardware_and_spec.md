---
description: これは、機能、仕様、ハードウェアインターフェース、パーツリストに関するreCameraジンバルの概要です。
title: ハードウェアと仕様
keywords:
  - Edge
  - AI
  - reCamera
  - reCamera Gimbal
  - blushless motor
  - Hardware overview
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /ja/recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 03/27/2025
  author: Evelyn Chen
---

# reCamera Gimbal 概要

reCamera Gimbal 2002シリーズは、1TOPS AIカメラ（reCamera）と2軸ジンバルを搭載した初のオープンソースカメラ制御システムです。デュアルブラシレスモーターにより、360°ヨーと180°ピッチでフルカバレッジを実現します。

## 機能

- ハードウェアとソフトウェアの完全オープンソースエコシステム
  - [開発者ポータル](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- クイックセットアップと精密な動作
  - レゴのような組み立てパッケージサポート
  - 360°ヨー回転フルカバレッジと180°ピッチ範囲（床から天井まで）
  - ブラシレスモーター精度：スムーズなターゲット追跡のための0.01°ステッピング精度
- AI駆動モーション制御
  - 既製のカスタムAIモデル：商用ライセンス付きYOLO11内蔵、Roboflow & SenseCraft AIサポート
  - スマートトラッキング：AIがジンバルの動きを自動調整
- すべてのスキルレベルに対応した柔軟な開発
  - ジンバル動作のローコードフローカスタマイゼーション用Node-RED内蔵
  - より深い開発のためのC++ SDKサポート

## 仕様

### 処理システム

| **パラメータ**          | **値**                                                                    |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **AI性能**             | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **オペレーティングシステム** | Linux                                                                     |
| **メモリ**             | 256 MB                                                                  |
| **ビデオエンコーダー**   | 5MP @ 30Fps                                                              |

### 基本仕様

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **電源供給**       | 12V DC ジャック to XT30 コネクタ                                             |
| **消費電力**  | 12V, 185mA (静的)                                                      |

### カメラ

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **センサー**             | OV5647                                                                    |
| **解像度**         | 5M (2592×1944) ピクセル                                                    |
| **チップ**               | 1/4" CMOSセンサー                                                         |
| **ピクセルサイズ**         | 1.4μm                                                                     |
| **出力フォーマット**      | RAW 10                                                                    |
| **最大フレームレート**     | フルサイズ: 15fps                                                          |
| **絞り**           | F2.8                                                                      |
| **35mm換算焦点距離** | 3.46mm                                                                 |
| **視野角**      | 65°                                                                      |
| **歪み**         | &lt;1%                                                                      |
| **レンズ構成**     | 5P                                                                        |

### インターフェース

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **USB**                | USB 2.0 Type-C                                                            |
| **ワイヤレス**           | Wi-Fi 2.4G/5G Bluetooth 4.2/5.0                                          |
| **ボタン**             | 1 × 再起動ボタン、1 × ユーザーボタン                                        |
| **フィルLED**          | 4 × 0.3W 白色光                                                      |
| **LED**                | 1 × 電源インジケータ、2 × IOプログラマブルインジケータ                        |
| **マイク**                | オンボードマイク                                                              |
| **スピーカー**            | 外部スピーカー                                                          |

### モータ仕様

| **パラメータ**          | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **ターン数**              | 54                       | 60                  |
| **定格電圧 (V)**  | 12                       | 12                  |
| **最大速度 (rpm)**    | 2000                     | 2100                |
| **定格トルク (N·m)** | 0.04                     | 0.05                |
| **定格速度 (rpm)**  | 1160                     | 1250                |
| **定格電流 (A)**  | 0.64                     | 0.79                |
| **最大出力 (W)**      | 4.6                      | 6.4                 |
| **モータ極数**        | 14                       | 14                  |
| **動作温度 (℃)** | -25~60            | -25~60              |
| **重量 (g)**         | 49                       | 63                  |
| **ドライブ入力電圧 (V)** | 6~16                | 6~16                |
| **通信**      | CAN                      | CAN                 |
| **通信周波数** | CAN@1Mbps:2KHz      | CAN@1Mbps:2KHz      |
| **エンコーダ**            | 15ビット磁気エンコーダ  | 15ビット磁気エンコーダ        |
| **CANボーレート**      | 100K、125K、250K、500K、1M   | 100K、125K、250K、500K、1M    |
| **制御モード**       | オープンループ(24KHz) / 速度ループ(4KHz) / 位置ループ(2KHz)                | オープンループ(24KHz) / 速度ループ(4KHz) / 位置ループ(2KHz)                |

### ジンバル仕様

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **ピッチ範囲**        | 0～180°                                                                    |
| **ヨー範囲**          | 0～360°                                                                    |

### 環境条件

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **動作温度** | -20～50 ℃                                                                 |
| **動作湿度**  | 0～90%                                                                    |

### 機械的仕様

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **寸法 (W × H × D)** | 68×112×71mm                                                              |
| **筐体**          | ポリアミド (PA) ナイロン                                                      |
| **重量 (正味)**       | 230g                                                                      |

### その他

| **パラメータ**          | **値**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **保証**           | 1年                                                                    |

## ハードウェア概要

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

### コアボード-C101

[**8GBのPCBAファイルをダウンロードするにはクリック**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**64GBのPCBAファイルをダウンロードするにはクリック**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

上面図             |  底面図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### ブロック図

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div>

### センサーボード-S101

[**PCBAファイルをダウンロードするにはクリック**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

上面図             |  底面図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

### ベースボード-B401

[**PCBAファイルをダウンロードするにはクリック**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

上面図             |  底面図
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>

#### ブロック図

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div>

### 電源供給ボード

この電源供給ボードは、安定した電力供給と過電圧保護の二重機能を提供します。12V DC入力をサポートし、モーターとreCameraシステムの両方に電力を供給します。

**過電圧保護しきい値**:

- 最大トリップ電圧: 25.66V
- 通常動作電圧: 25.54V
- 最小安全電圧: 25.4V

[**PCBAファイルをダウンロードするにはクリック**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### ブロック図

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div>

## ハードウェアインターフェース

- [ライト](#jump1)
- [マイク & スピーカー](#jump2)
- [WIFI](#jump3)
- [ボタン](#jump4)
- [モーター](#jump5)
- [CAN](#jump6)

### <span id="jump1">ライト</span>

reCameraには3つのインジケーターがあります。**赤と青**のライトはプログラム可能なインジケーターで、**緑**のインジケーターはプログラム不可能な電源インジケーターです。**赤**はCPUのステータスインジケーター、**青**はシステムeMMCの読み取りステータスインジケーターです。

**ライトインジケーターステータス**:

| LED(色) | ステータス | 説明 |
| ---- | ---- | ---- |
| LED1 - 緑 | 点灯 | 電源オン |
| LED2 - 赤 | 点滅 | CPU動作中(ユーザー定義) |
| LED3 - 青 | 点滅 | eMMC読み取り/書き込み |

例1: Linuxコマンドを使用して**赤色LED**の輝度をゼロに変更する

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

### <span id="jump2">マイク & スピーカー</span>

recameraにはマイクとスピーカーが搭載されています。以下のコマンドでマイクとスピーカーを呼び出すことができます。recameraは**wav**形式の音声ファイルを再生できます。

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

ローカルのmp3音声ファイルは、[Convert audio online](https://www.aconvert.com/audio/)を使用してwavファイルに変換し、recameraで再生することができます。
プレーヤーのデフォルト形式は：16bitビットレート；サンプリングレートは16,000です

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Convert_audio_online.png" /></div>

### <span id="jump3">Wi-Fi</span>

reCamera 2002wバージョンは、ハードウェアにWi-Fiモジュールを搭載しています。Wi-FiはAP+STAデュアルモードで、デバイスネットワークの設定やAPモードでのデバイス設定に使用できます。

APモードでのwifiの**SSID**は：`reCamera_+ MACの下位6桁`です。

APモードでのwifiの**Passwd**は：`12345678`です。

WiFi_APのssidとpasswdは、recameraシステムの`/etc/hostapd_2g4.conf`ファイルで設定できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCamera STAの設定ファイルは**/etc/wpa_supplicant.conf**にあり、ここで接続するWi-Fiアカウントとパスワードを設定します。
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

### <span id="jump4">ボタン</span>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

#### ユーザーボタン

**10 ユーザーボタン**は**reCamera Gimbal** Board-B401に配置されています。デバイスのパスコードを忘れた場合などでデバイスをリセットしたい場合は、ユーザーボタンを長押ししてからデバイスを電源に接続してください。デバイスの赤いライトが点滅ではなく常時点灯になったら、ユーザーボタンを離してください。

デバイスのファームウェアを特定のバージョンに復元したい場合は、[osバージョン制御](https://wiki.seeedstudio.com/ja/recamera_os_version_control)をご覧ください。

#### 再起動ボタン

**11 再起動ボタン**は**reCamera Gimbal** Board-B401に配置されています。このボタンを押すと、システムが再起動されます。

### <span id="jump5">モーター</span>

reCamera Gimbalには、ジンバルのモーターをデバッグおよび制御するために使用できるGimbalスクリプトがあります。
gimbalスクリプトの動作を確認するには、以下のコマンドを実行してください：

```bash
gimbal --help
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

`gimbal` はbashスクリプトです。スクリプトを表示・修正して、二次開発のニーズを満たすことができます。スクリプトの場所は以下の通りです：

```bash
cd /usr/bin
cat gimbal
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script_content.png" /></div>

### <span id="jump6">CAN</span>

`ifconfig` コマンドを使用して **can0** インターフェースを表示します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_ifconfig.png" /></div>

`cansend can0 can_id#9C.00.00.00.00.00.00.00` コマンドを使用してcanメッセージを送信します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_cansend.png" /></div>

`candump can0` コマンドを使用してcanメッセージを受信します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_candump.png" /></div>

## パーツリスト

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
