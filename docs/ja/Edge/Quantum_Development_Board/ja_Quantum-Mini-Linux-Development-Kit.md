---
description: Quantum Mini Linux 開発キット
title: Quantum Mini Linux 開発キット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Quantum-Mini-Linux-Development-Kit
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Quantum Mini Linux 開発キット

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Quantum-Mini-Linux-Dev-Kit.png"/></div>

**Quantum Mini Linux 開発キット**は、市場で最も小型のLinux開発ボードの1つであり、Linuxを実行可能なクアッドコアCPUを搭載し、サイズはわずか**40mm x 35mm**です。また、ネットワーク接続機能も備えています。個人用サーバー、インテリジェント音声アシスタント、ロボット開発などのシナリオに適しています。

SoM（System on Module）は**Quark-N**と呼ばれ、**Allwinner H3、クアッドコア Cortex-A7、ARM Mali400 MP2 GPU**に基づいています。6層の高密度金メッキPCB設計により、2x3cmのスペースに完全なARM-Linuxシステム（CPU、DDR、eMMC）が統合されています。また、ほとんどのGPIOがM.2 Key-A金指インターフェースを通じてボードから引き出されており、ボトムボード設計の難易度を最小限に抑えています。2層基板を使用して独自のベースプレートを簡単に設計し、興味深いアイデアを実現できます。

<div align="center"><img src="https://files.seeedstudio.com/products/114992462/connection.png"/></div>

キャリアボードは**Atom-N**と呼ばれ、Quark-NはM.2インターフェースを介してAtom-Nに接続されます。Atom-Nは一列の金指ピンを引き出してI/O拡張を実現し、**SPI、I2C、UART、GPIOなどのインターフェースを拡張して独自の設計を完成させることができます**。さらに、**マイク、MPU6050モーションセンサー（加速度計とジャイロスコープ）、オンボード4つのボタン（GPIO-KEY、Uboot、Recovery、Reset）、IPSディスプレイ、Wi-Fi/Bluetooth接続を備えており、この製品の可能性を大幅に拡張します**。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Quantum-Mini-Linux-Development-Kit-p-4749.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 超小型（**31mmx22mm**）で高集積のクアッドコア Cortex-A7 Linux SoM（System on Module）。

- 豊富な周辺機器とインターフェースを備えたキャリアボード（**40mmx35mm**）：マイク、ジャイロスコープ、加速度計、4つのボタン（GPIO-KEY、Uboot、Recovery、Reset）、TFTディスプレイ。

- 高度な開発のための完全なARM-Linuxシステムを統合。

- **ワイヤレス接続（Wi-Fi + Bluetooth）。**

- M.2インターフェースにより独自のベースボードを設計可能。

- 個人用サーバー、インテリジェント音声アシスタント、ロボット開発など幅広い用途。

- **xrdpリモートデスクトップサーバー**がプリインストールされており、HDMIケーブルを必要とせずに簡単にモニター制御が可能。

## 仕様



<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><thead><tr><th style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>仕様</th><th style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>詳細</span></th></tr></thead><tbody><tr><td style={{backgroundColor: '#c0c0c0', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}} colSpan={2}><span style={{fontWeight: 700, fontStyle: 'normal'}}>Quark-N SoM</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>CPU</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Allwinner H3, クアッドコア Cortex-A7 @ 1GHz</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>GPU</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 'inherit', fontStyle: 'inherit'}}>ARM Mali400 MP2 GPU</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>メモリ</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>512MB LPDDR3 RAM</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>ストレージ</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>16GB eMMC</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>インターフェース</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Ethernet, SPI, I2C, UART, 再利用可能なGPIO, MIC, LINEOUT</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>GPIO</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 'inherit', fontStyle: 'inherit'}}>2.0mm ピッチ 26ピンヘッダー, USB-Serial, I2C, UART, SPI, I2S, GPIO</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>PCB</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>6層高密度浸金設計</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>動作温度</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>0-80°C</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>サイズ</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>31mmx22mm</span></td></tr><tr><td style={{backgroundColor: '#c0c0c0', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}} colSpan={2}><span style={{fontWeight: 'bold'}}>Atom-N キャリアボード</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>スロット</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Quark-N 用 m.2 インターフェース</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>USB</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>USB 2.0×2 USB Type-C×1</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>無線接続</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>RTL8723BU:</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>Wi-Fi: IEEE 802.11 b/g/n @2.4GHz</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>Bluetooth: BT V2.1/ BT V3.0/ BT V4.0</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>オンボード周辺機器</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x マイク</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x MPU6050 モーションセンサー (ジャイロスコープ + 加速度計)</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>4 x ボタン (GPIO-KEY, Uboot, Recovery, Reset)</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x TFT ディスプレイ</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>外部ストレージ</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Micro-SD カードスロット</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>サイズ</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>40mm*35mm</span></td></tr></tbody></table>

## ハードウェア概要

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/hardwareoverview1.png"/></div>

:::tip
Quantumは新しいバージョンに更新され、以前のものと比較して無線性能を向上させるためにアンテナタイプが調整されています。さらに、PCBレイアウトが最適化され、ファンのはんだ付け箇所が上部に移動しました。また、Ubootボタンとリカバリボタンが削除されています。
:::

## はじめに

### ハードウェア要件

- 動作するコンピュータ

- [MicroSDカード](https://www.seeedstudio.com/micro-SD-Card-with-Card-Reader-32GB-Class-10-p-4082.html)（16GB以上推奨）

- キーボードとマウス

### 最新のシステムイメージをダウンロード

- **[最新のシステムイメージ](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/quark-n-21-1-11.zip)** をこちらからダウンロードしてください。

> **最新ビルド**: 2021-1-11  
>
> **sha256**: 8f466adf56468b05d622eba27eb7b1a11ef6d4b943272984730a73ddff7cf59a  

:::note
Quantum Mini Linux開発ボードのシステムイメージはNano Piのイメージを改変したものです。
:::

### ステップ1 - 起動可能なMicroSDカードを準備する

MicroSDカードをフォーマットします。Windowsユーザーの場合、USBドライブを右クリックして「フォーマット」を選択することでフォーマットできます。

**注意:** ファイルシステムには`FAT32`を選択してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"/></div>

### ステップ2 - フラッシュバーナーをダウンロード

オープンソースのフラッシュバーナー [balenaEtcher](https://www.balena.io/etcher/) をダウンロードしてください。お使いのオペレーティングシステム（Windows/macOS/Linux）に応じたバージョンをダウンロードしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"/></div>

### ステップ3 - OSイメージをUSBに書き込む

ダウンロードしたシステムイメージを選択し、フォーマット済みのMicroSDカードを選択してフラッシュします。これで起動可能なMicroSDカードの準備が整いました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/flash-img.png"/></div>

### システムへの起動

MicroSDカードをAtom-NのMicroSDスロットに挿入し、**USB Type-Cを電源（USBシリアル方向）として接続**してください。

その後、PCから任意のシリアルソフトウェアを使用してUSBシリアルを開くことができます。**Quark-N**（SoM）のシステムステータスLEDが点滅を開始し、シリアルにメッセージが表示されるはずです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/bootup-n.png"/></div>

### システムのデフォルトユーザーとパスワード

- **通常ユーザー**:

```sh
ユーザー: pi
パスワード: quark
```

- **ルートユーザー**:

```sh
ユーザー: pi
パスワード: quark
```

## システム設定

`npi-config`を使用して、ユーザー、システム言語、タイムゾーン、SSHなどのシステムイメージの設定を構成できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/npi-config.png"/></div>

:::note
デフォルトで設定されています。設定内容が分からない場合はデフォルトのままにしてください。
:::

## Wi-Fi

### スクリプト
最新のイメージにはWi-Fi接続を簡単にするためのPythonスクリプトが含まれています。`SSID`と`PASSWORD`を自分のものに置き換えてください:

```sh
cd ~/WorkSpace/System/net
sudo python connect_wifi.py SSID PASSWORD
```

### 手動接続
ネットワーク管理にはNetworkManagerを使用します。以下の手順に従ってWi-Fiに接続してください:

- ルートユーザーに切り替え:

```sh
su root
```

- Wi-Fiをオンにする:

```sh
nmcli r wifi on
```

- 近くのWi-Fiをスキャン:

```sh
nmcli dev wifi
```

- 特定のWi-Fiに接続:

```sh
nmcli dev wifi connect "SSID" password "PASSWORD" ifname wlan0
```

ここで`SSID`と`PASSWORD`を自分のWi-Fiの認証情報に変更してください。一度接続すると、次回から自動的に接続されます。

NetworkManagerに関する詳細は[こちら](http://wiki.friendlyarm.com/wiki/index.php/Use_NetworkManager_to_configure_network_settings)をご覧ください。

### ソフトウェアの更新（オプション）

ネットワークに接続したら、ソフトウェアを更新するのが推奨されます:

```sh
sudo apt-get update
```

## リモートデスクトップ接続

前述の通り、システムイメージにはデフォルトで [`xrdp`](https://github.com/neutrinolabs/xrdp) サーバーが実行されており、同じネットワーク内で **[Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab)**（Windows/macOS対応）を使用してリモートデスクトップ接続を確立できます。

- `ifconfig` を使用して開発ボードのIPアドレスを確認してください。

- **同じネットワーク内から、開発ボードのIPアドレスを入力してログインします**。これでデスクトップをリモートで操作できるようになります！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/remote-desk.png"/></div>

## Bluetooth

システムイメージにはBluetoothドライバーが組み込まれており、以下の手順に従ってBluetoothを開始できます：

```sh
bluetoothctl
```

`bluetoothctl` インターフェース内で以下のコマンドを実行して、近くのBluetoothデバイスをスキャンします：

```sh
scan on
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-scan.png"/></div>

デバイスのMACアドレスをコピーし、以下のコマンドを使用してデバイスに接続します：

```sh
pair A4:xx:xx:xx:xx:30
trust A4:xx:xx:xx:xx:30
connect A4:xx:xx:xx:xx:30
```

これで開発ボードがBluetoothデバイスに接続されました。`quit` を入力してターミナルに戻ります。開発ボードで音楽を再生すると、Bluetoothスピーカーから音楽が聞こえるはずです！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-connect.png"/></div>

## LCD

LCDスクリーンのドライバーは **SPI** を使用してCPUと通信し、ドライバーはシステムイメージに組み込まれているため、起動時にシステムのメッセージログが表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/LCD.png"/></div>

- USBキーボードとマウスを開発ボードに接続すると、最小構成のPCとして使用できます！

- PythonからLCDの使用を示す簡単なpygameの例があります。

- プロジェクトの場所に移動します：

```sh
cd WorkSpace/PyGame
```

- 例を実行します：

```sh
sudo python hello_world.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/pygame.png"/></div>

<!-- ## IMU

TMP -->

## マイク

Atom-N（キャリアボード）には内蔵マイクも搭載されており、これにより機械学習が可能になります！簡単なテストには、システムイメージにプリインストールされている **Audacity** ソフトウェアを使用するのが便利です。

- リモートデスクトップを使用して開発ボードにログインします。

- **Audacity** ソフトウェアを開きます。

- 録音を開始してマイクに話しかけると、音声波形が表示されるはずです！

:::note
    ターミナルで `arecord -l` を使用してマイクの情報を確認することもできます。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/mic.png"/></div>

マイクを使用したさらなる開発については、`WorkSpace/WuKong` パスを確認し、**[WuKong Robot](https://github.com/wzpan/wukong-robot)** や [**snowboy**](https://github.com/Kitt-AI/snowboy) を使用した例を参照してください。

## GPIO

GPIOアクセスについては、Linuxベースのシステムで非常に便利であり、Pythonを使用して簡単に制御できます。

- プロジェクトの場所に移動します：

```sh
cd WorkSpace/GPIO
```

- GPIOの例を実行します：

```sh
sudo python gpio_key_led.py
```

これでユーザーボタンを押すと、シリアル出力が表示され、Quark-N（SoM）のLEDが暗くなるのが確認できるはずです！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/gpio.png"/></div>

:::note
    LEDはQuark-N（SoM）上にあり、Atom-N（キャリアボード）には引き出されていません。
:::

## OpenCV

システムイメージには**OpenCV**も実装されており、USBカメラを使用した顔検出デモが準備されています。

- USBカメラが必要です。USBカメラを開発ボードのUSBポートAに接続してください。

- プロジェクトの場所に移動します：

```sh
cd WorkSpace/OpenCV
```

- デモを実行します：

```sh
python FaceDetectOnTft.py
```

開発ボードのLCD画面にビデオストリームが表示されるはずです！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/facedetect.png"/></div>

## その他

開発ボードの使用例として、`WorkSpace`には**TensorFlow Lite**、**[WuKong Robot](https://github.com/wzpan/wukong-robot)**、[**snowboy**](https://github.com/Kitt-AI/snowboy)などの例も含まれています。パスを移動してさらに詳しく調べてください！

## FAQ

### Q1: ボードを冷却するためにファンを取り付ける方法は？

この製品向けにファンとファンホルダーを近い将来リリースする予定です。しかし、現時点では参考用に[ファンホルダーDXFファイル](#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip)を公開しています。20x20x6mmのファンをこのファンホルダーに取り付けることができます。
<!-- 上述zipファイルが欠落しています -->

ファンホルダーの取り付け方法は以下の通りです：

 <p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/connection-diagram.jpg" alt="pir" width="500" height="auto"/></p>

## リソース

- **[ZIP]** [**Atom Shield N AD**](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Atom-Shield-N-AD-files.zip)
- **[ZIP]** [**ヒートシンクとスタンド3Dファイル**](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/3D%20Files.zip)
- **[ZIP]** [**ファンホルダー**](#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip)
<!-- 上述zipリンクに誤りがあります -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>