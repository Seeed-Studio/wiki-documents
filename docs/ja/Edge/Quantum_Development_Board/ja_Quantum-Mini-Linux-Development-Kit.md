---
description: Quantum Mini Linux Development Kit
title: Quantum Mini Linux Development Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Quantum-Mini-Linux-Development-Kit
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# Quantum Mini Linux 開発キット

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Quantum-Mini-Linux-Dev-Kit.png"/></div>

**Quantum Mini Linux Dev. Kit** は、市場で最も小さなLinux開発ボードの一つで、わずか **40mm x 35mm** でLinuxを実行できるクアッドコアCPUを搭載した高度に統合されたキットです。ネットワーク接続機能も含まれています。パーソナルサーバー、インテリジェント音声アシスタント、ロボット開発などのシナリオに適しています。

SoMは **Quark-N** と呼ばれ、**Allwinner H3、クアッドコア Cortex-A7、ARM Mali400 MP2 GPU** をベースにしています。6層高密度金PCB設計により、完全なARM-Linuxシステム（CPU、DDR、eMMC）を2x3cmのスペースに統合しています。また、ほとんどのGPIOは、M.2 Key-Aゴールドフィンガーインターフェースを通じてボードから引き出され、ベースボード設計の難易度を最小限に抑えています。2層ボードで独自のベースプレートを簡単に設計し、興味深いアイデアを実現できます。

<div align="center"><img src="https://files.seeedstudio.com/products/114992462/connection.png"/></div>

キャリアボードは **Atom-N** と呼ばれ、**Quark-NはM.2インターフェースを通じてAtom-Nに接続されています**。Atom-Nは一列のゴールドフィンガーピンを引き出してI/O拡張を実現し、**SPI、I2C、UART、GPIO、その他のインターフェースを拡張して、独自の設計を完成させることを容易にします**。また、**マイクロフォン、MPU6050モーションセンサー（加速度計とジャイロスコープ）、オンボード4ボタン（GPIO-KEY、Uboot、Recovery、Reset）、IPSディスプレイ、Wi-Fi/Bluetooth接続を搭載しており、この製品の可能性を大幅に拡張しています**。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Quantum-Mini-Linux-Development-Kit-p-4749.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 超小型（**31mmx22mm**）で高度に統合されたクアッドコア Cortex-A7 Linux SoM（System on Module）。

- 豊富な周辺機器とインターフェースを備えたキャリアボード（**40mmx35mm**）：マイクロフォン、ジャイロスコープ、加速度計、4 x ボタン（GPIO-KEY、Uboot、Recovery、Reset）、TFTディスプレイ。

- 高度な開発のための完全なARM-Linuxシステムを統合。

- **ワイヤレス接続（Wi-Fi + Bluetooth）。**

- M.2インターフェースにより独自のベースボードを設計可能。

- パーソナルサーバー、インテリジェント音声アシスタント、ロボット開発など幅広い用途。

- **xrdpリモートデスクトップサーバー**がプリインストールされており、HDMIケーブルを必要とせずに簡単にモニター制御が可能。

## 仕様

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><thead><tr><th style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>仕様</th><th style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>詳細</span></th></tr></thead><tbody><tr><td style={{backgroundColor: '#c0c0c0', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}} colSpan={2}><span style={{fontWeight: 700, fontStyle: 'normal'}}>Quark-N SoM</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>CPU</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Allwinner H3、クアッドコア Cortex-A7 @ 1GHz</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>GPU</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 'inherit', fontStyle: 'inherit'}}>ARM Mali400 MP2 GPU</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>メモリ</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>512MB LPDDR3 RAM</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>ストレージ</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>16GB eMMC</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>インターフェース</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Ethernet、SPI、I2C、UART、再利用可能GPIO、MIC、LINEOUT</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>GPIO</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 'inherit', fontStyle: 'inherit'}}>2.0mmピッチ26ピンヘッダー、USB-Serial、I2C、UART、SPI、I2S、GPIO</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>PCB</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>6層高密度沈金設計</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>動作温度</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>0-80°C</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>サイズ</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>31mmx22mm</span></td></tr><tr><td style={{backgroundColor: '#c0c0c0', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}} colSpan={2}><span style={{fontWeight: 'bold'}}>Atom-N キャリアボード</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>スロット</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Quark-N用m.2インターフェース</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>USB</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>USB 2.0×2 USB Type-C×1</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>ワイヤレス接続</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>RTL8723BU:</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>Wi-Fi: IEEE 802.11 b/g/n @2.4GHz</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>Bluetooth: BT V2.1/ BT V3.0/ BT V4.0</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>オンボード周辺機器</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x マイクロフォン</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x MPU6050 モーションセンサー（ジャイロスコープ + 加速度計）</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>4 x ボタン（GPIO-KEY、Uboot、Recovery、Reset）</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x TFTディスプレイ</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>外部ストレージ</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Micro-SDカードスロット</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>サイズ</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>40mm*35mm</span></td></tr></tbody></table>

## ハードウェア概要

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/hardwareoverview1.png"/></div>

:::tip
Quantumは現在新しいバージョンにアップデートされており、旧バージョンと比較してワイヤレス性能を向上させるためにアンテナタイプが調整されています。さらに、ファンのはんだ接合部を上部に移動することでPCBレイアウトも最適化されています。UbootとRecoveryボタンも削除されました。
:::

## はじめに

### ハードウェア要件

- 動作するコンピュータ

- [MicroSDカード](https://www.seeedstudio.com/micro-SD-Card-with-Card-Reader-32GB-Class-10-p-4082.html) (16GB以上を推奨)

- キーボードとマウス

### 最新システムイメージのダウンロード

- **[最新システムイメージ](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/quark-n-21-1-11.zip)** をこちらからダウンロードしてください。

> **最新ビルド**:  2021-1-11
>
> **sha256**: 8f466adf56468b05d622eba27eb7b1a11ef6d4b943272984730a73ddff7cf59a  

:::note
Quantum Mini Linux開発ボードのシステムイメージは、Nano Piのイメージから変更されています。
:::

### ステップ1 - 起動可能なMicroSDカードの準備

MicroSDカードをフォーマットします。Windowsユーザーの場合は、USBドライブを右クリックして「フォーマット」を選択することでUSBドライブをフォーマットできます。

**注意:** ファイルシステムには`FAT32`を選択してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"/></div>

### ステップ2 - フラッシュバーナーのダウンロード

オープンソースのフラッシュバーナー[balenaEtcher](https://www.balena.io/etcher/)をダウンロードします。お使いのオペレーティングシステム（Windows/macOS/Linux）に応じたバージョンをダウンロードしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"/></div>

### ステップ3 - OSイメージのUSBへの書き込み

ダウンロードしたシステムイメージを選択し、フォーマットしたMicroSDカードを選択してフラッシュします！これで、起動可能なMicroSDカードの準備が完了しました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/flash-img.png"/></div>

### システムの起動

次に、MicroSDカードをAtom-NのMicroSDスロットに挿入し、**電源用のUSB Type-Cを接続します（USBシリアル方向）**。

これで、PCから任意のシリアルソフトウェアを使用してUSBシリアルを開くことができます！**Quark-N**（SoM）でシステムステータスLEDが点滅し始め、シリアルにメッセージが出力されるのが確認できるはずです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/bootup-n.png"/></div>

### システムのデフォルトユーザーとパスワード

- **通常ユーザー**:

```sh
users: pi
password: quark
```

- **ルートユーザー**:

```sh
users: pi
password: quark
```

## システム設定

システムイメージのユーザー、システム言語、タイムゾーン、ssh などの設定を行うには、`npi-config` を使用できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/npi-config.png"/></div>

:::note
デフォルトの設定は既に構成されています。設定内容が分からない場合は、デフォルトのままにしておいてください。
:::

## Wi-Fi

### スクリプト

最新のイメージには、Wi-Fi接続をより簡単に行うためのPythonスクリプトが付属しています。`SSID` と `PASSWORD` をあなたのものに置き換えてください：

```sh
cd ~/WorkSpace/System/net
sudo python connect_wifi.py SSID PASSWORD
```

### 手動接続

ここではNetworkManagerを使用してネットワークを管理します。以下の手順に従ってWi-Fiに接続してください：

- rootユーザーに切り替える：

```sh
su root
```

- Wi-Fiをオンにする：

```sh
nmcli r wifi on
```

- 近くのWi-Fiをスキャンする：

```sh
nmcli dev wifi
```

- 特定のWi-Fiに接続する：

```sh
nmcli dev wifi connect "SSID" password "PASSWORD" ifname wlan0
```

`SSID` と `PASSWORD` をあなたのWi-Fi認証情報に変更してください。一度接続すると、次回は自動的に接続されます。

NetworkManagerの詳細については、[こちら](http://wiki.friendlyarm.com/wiki/index.php/Use_NetworkManager_to_configure_network_settings)をお読みください。

### ソフトウェアアップデート（オプション）

ネットワークに接続したら、ソフトウェアをアップデートすることをお勧めします：

```sh
sudo apt-get update
```

## リモートデスクトップ接続

前述のように、システムイメージには[`xrdp`](https://github.com/neutrinolabs/xrdp)サーバーがデフォルトで実行されているため、同じネットワーク内で**[Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab)**(Windows/macOSをサポート)を使用してリモートデスクトップ接続を確立できます。

- `ifconfig`を使用して開発ボードのIPアドレスを確認します。

- **同じネットワークから、開発ボードのIPアドレスを入力してログインします**。これでデスクトップをリモートデスクトップで制御できます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/remote-desk.png"/></div>

## Bluetooth

システムイメージには内蔵のBluetoothドライバーがあり、以下の手順に従ってBluetoothを開始できます：

```sh
bluetoothctl
```

`bluetoothctl` インターフェース内で、`scan on` を実行して近くのすべてのBluetoothデバイスをリストアップします：

```sh
scan on
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-scan.png"/></div>

デバイスのMACアドレスをコピーし、以下のコマンドでデバイスに接続します：

```sh
pair A4:xx:xx:xx:xx:30
trust A4:xx:xx:xx:xx:30
connect A4:xx:xx:xx:xx:30
```

これで開発ボードがBluetoothデバイスに接続されました。ターミナルに`quit`と入力してください。開発ボードで音楽を再生すると、Bluetoothスピーカーデバイスから音楽が聞こえます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-connect.png"/></div>

## LCD

LCDスクリーンのドライバーは**SPI**を使用してCPUと通信し、そのドライバーはシステムイメージに組み込まれているため、起動時にシステムのメッセージログを見ることができます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/LCD.png"/></div>

- USBキーボードとマウスを開発ボードに接続すると、これが最小構成のPCになります！

- PythonからLCDの使用方法を実演するシンプルなpygameの例があります。

- プロジェクトの場所に移動してください：

```sh
cd WorkSpace/PyGame
```

- 例を実行する：

```sh
sudo python hello_world.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/pygame.png"/></div>

<!-- ## IMU

TMP -->

## マイクロフォン

Atom-N（キャリアボード）には内蔵マイクロフォンも搭載されており、機械学習が可能です！簡単なテストには、イメージにプリインストールされている **Audacity** ソフトウェアを使用するのが簡単です。

- リモートデスクトップを使用して開発ボードにログインします。

- **Audacity** ソフトウェアを開きます。

- 録音を開始してマイクロフォンに話しかけると、音波が表示されるはずです！

:::note
    ターミナルで `arecord -l` を使用してマイクロフォンについて調べることもできます。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/mic.png"/></div>

マイクロフォンに基づくさらなる開発については、**[WuKong Robot](https://github.com/wzpan/wukong-robot)** と [**snowboy**](https://github.com/Kitt-AI/snowboy) を使用した例について、パス `WorkSpace/WuKong` を確認してください。

## GPIO

GPIO アクセスについては、Linux ベースのシステムとして非常に便利で、Python を使用して簡単に制御できます。

- プロジェクトの場所に移動します：

```sh
cd WorkSpace/GPIO
```

- GPIOの例を実行します：

```sh
sudo python gpio_key_led.py
```

ユーザーボタンを押すと、シリアル出力が表示され、Quark-N（SoM）のLEDが暗くなります！

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

- デモを実行する：

```sh
python FaceDetectOnTft.py
```

開発ボードのLCD画面にビデオストリームが表示されるはずです！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/facedetect.png"/></div>

## その他

`WorkSpace`には、**TensorFlow Lite**、**[WuKong Robot](https://github.com/wzpan/wukong-robot)**、[**snowboy**](https://github.com/Kitt-AI/snowboy)など、開発ボードのより多くの使用例があります。パスに移動して詳細を確認してください！

## FAQ

### Q1: ボードを冷却するためにファンを取り付けるにはどうすればよいですか

近い将来、この製品用のファンとファンホルダーをリリースする予定です。ただし、現在は参考用に[ファンホルダーDXFファイル](#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip)をリリースしています。このファンホルダーには20x20x6mmのファンを取り付けることができます。
<!-- 上述zip文件缺失 -->

ファンホルダーは以下のように取り付けることができます：

 <p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/connection-diagram.jpg" alt="pir" width="500" height="auto"/></p>

## リソース

- **[ZIP]** [**Atom Shield N AD**](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Atom-Shield-N-AD-files.zip)
- **[ZIP]** [**ヒートシンクとスタンド3Dファイル**](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/3D%20Files.zip)
- **[ZIP]** [**ファンホルダー**](#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip)
<!-- 上述zip链接有误 -->

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
