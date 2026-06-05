---
description: Seeed Jetson DevelopTool の Device Management モジュールを使用して、診断を実行し、周辺機器を検出し、リアルタイムのデバイスステータスを監視します。
title: デバイス管理
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - device management
  - diagnostics
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_device_management
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/ja/jetson_developtool_device_management/
---

**Device Management** モジュールは、接続された Jetson デバイスの現在の状態をすばやく把握するためのダッシュボードを提供します。ハードウェア診断、周辺機器の検出、ライブシステムメトリクスを、ターミナルを開くことなく確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-devices.png" style={{width:800, height:'auto'}}/></div>

## デバイスへの接続

接続パネルに Jetson の IP アドレス、SSH ユーザー名、パスワードを入力し、**Connect** をクリックします。ネットワーク設定の詳細については、[Connect Device](/ja/jetson_developtool_connect_device) を参照してください。

## 機能

### システム情報

接続が完了すると、ダッシュボードには次の情報が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-info-cards.png" style={{width:800, height:'auto'}}/></div>

| 情報 | 説明 |
|------|-------------|
| デバイスモデル | 例：reComputer Super J4012s |
| JetPack / L4T バージョン | 現在のファームウェアバージョン |
| CPU 使用率 | 各コアのリアルタイム使用率 |
| GPU 使用率 | 現在の GPU 負荷率 |
| メモリ | 使用中 / 合計 RAM |
| ディスク | 使用中 / 合計ストレージ |
| 温度 | CPU、GPU、およびボードのサーマルゾーン |

### 周辺機器の検出

**Detect Peripherals** をクリックして、接続されているハードウェアをスキャンします：

- USB デバイス（カメラ、Wi-Fi アダプタ、ストレージ）
- NVMe / M.2 ドライブ
- ディスプレイ出力
- GPIO / I2C / SPI インターフェース

### クイック診断

**Run All Checks** をクリックすると、ワンクリックでヘルスチェックを実行できます。このツールは Network、GPU / Torch、Docker、jtop、USB Camera、Boot Disk などの主要コンポーネントを自動的にチェックし、それぞれの結果を合否ステータスとクイック修正ショートカット付きでインライン表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-diagnostics-full.png" style={{width:800, height:'auto'}}/></div>

### 周辺機器の検出

**Peripherals Only** をクリックすると、USB-WiFi、5G モジュール、Bluetooth、NVMe SSD、カメラ、HDMI ディスプレイなど、接続されているハードウェアのみをスキャンし、フル診断スイートは実行しません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-peripherals.png" style={{width:800, height:'auto'}}/></div>

### PyTorch のインストール

**GPU / Torch** チェックが「Not installed」と表示された場合は、**Install PyTorch** ボタンをクリックしてインストールウィザードを開きます。ツールが JetPack バージョンを自動検出し、対応する NVIDIA PyTorch ホイールを選択します。Python のターゲット環境（システム Python または新しい Miniforge conda 環境）を選択することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-install-pytorch.png" style={{width:600, height:'auto'}}/></div>

**Start Install** をクリックして開始します。インストールはバックグラウンドで実行されるため、**Run in Background** をクリックすると、完了を待たずにツールを使い続けることができます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
