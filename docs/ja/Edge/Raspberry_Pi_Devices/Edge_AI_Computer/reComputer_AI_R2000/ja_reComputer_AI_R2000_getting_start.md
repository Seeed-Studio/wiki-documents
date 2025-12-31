---
description: reComputer AI R2000は、Raspberry Pi 5をベースとした強力なエッジAIコンピュータです。クアッドコアArm Cortex-A76プロセッサ、8GB RAM、M.2 SSDサポート、最大26 TOPSを提供するHailo-8 AI加速モジュールを搭載し、リアルタイム、低遅延、高効率のAI推論を実現します。AI駆動ビデオ分析、マシンビジョン、インテリジェントエッジコンピューティングなど、幅広いAIアプリケーションに最適な選択肢です。
title: reComputer AI R2000 シリーズの入門ガイド
keywords:
- Raspberry pi
- Edge AI Computer
- reComputer R2000
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /ja/r2000_series_getting_start
last_update:
  date: 1/09/2025
  author: Jiahao Li
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer AI R2000 シリーズは、Raspberry Pi 5をベースとした強力なエッジAIコンピュータです。クアッドコアArm Cortex-A76プロセッサ、8GB RAM、M.2 SSDサポート、最大26 TOPSを提供するHailo-8 AI加速モジュールを搭載し、リアルタイム、低遅延、高効率のAI推論を実現します。AI駆動ビデオ分析、マシンビジョン、インテリジェントエッジコンピューティングなど、幅広いAIアプリケーションに最適な選択肢です。

## 特徴

- **強力な冷却能力**: コンパクトな設計と最適化された熱アーキテクチャにより、リソース制約のある環境での展開に非常に適しており、優れた冷却性能を提供します。

- **強力な性能**: クアッドコアCortex-A76 CPU、最大8GB RAMを搭載したRaspberry Pi 5により駆動されます。

- **26テラオペレーション毎秒**: 最大26 Topsの統合計算能力を提供するHailo AI加速器により駆動されます。
豊富なインターフェース: 2x HDMI 4Kp60、1x イーサネットポート、2x USB 3.0、2x USB 2.0。

- **ワイヤレス接続**: デュアルバンドWi-FiとBluetooth 5.0/BLE。
柔軟なストレージオプション: PCIe2.0デュアルM.2スロットは、AI加速器とSSDストレージの両方をサポートします。

## 仕様

| **パラメータ**        | **説明**                                                          |
|-----------------------|--------------------------------------------------------------------------|
| **ハードウェア仕様**      |                                                                          |
| **CPU**                | Raspberry Pi 5、2.4GHzクアッドコア64ビットArm Cortex-A76                    |
| **GPU**                | Raspberry Pi 5、VideoCore VII                                             |
| **AIプロセッサ**       | Hailo-8 M.2加速モジュール、26テラオペレーション毎秒           |
| **RAM**                | 8GB SDRAM                                                                |
| **オペレーティングシステム**   | Raspberry Pi OS、Ubuntu                                                  |
| **システム仕様**        |                                                                          |
| **電源供給**       | USB-C経由5V/5A DC電源、Power Delivery対応                       |
| **ビデオデコーダ**      | 4Kp60 HEVCデコーダ                                                       |
| **Wi-Fi**              | デュアルバンド802.11ac Wi-Fi®                                                |
| **Bluetooth**          | Bluetooth 5.0/ BLE                                                       |
| **電源ボタン**       | オン/オフ付属                                                          |
| **インターフェース**          |                                                                          |
| **ストレージ**            | 1 x microSDカードスロット、高速SDR104モード対応           |
| **M.2スロット**           | 2 x M.2スロット、M.2 NVMe SSD/Hailo M.2加速モジュール対応        |
| **USBポート**          | 2 × USB 3.0ポート                                                        |
|                       | 2 × USB 2.0ポート                                                        |
| **イーサネット**           | 1 x 10/100/1000 Mbps                                                     |
| **カメラ/ディスプレイ**     | 2 × 4レーンMIPIカメラ/ディスプレイトランシーバ                               |
| **ディスプレイ出力**     | 2 x micro HDMIポート（4Kp60）                                             |
| **環境条件** |                                                                          |
| **保護等級** | IP40                                                                     |
| **動作温度** | 0-45°C                                                                  |
| **その他**             |                                                                          |
| **保証**           | 1年                                                                   |
| **製品寿命**| 少なくとも2036年1月まで                                              |
| **認証**      | CE、FCC、Telec、RoHS、REACH                                              |

## Hailo紹介

### ハードウェア紹介

[Hailo](https://hailo.ai/)は、エッジデバイス上での高性能ディープラーニングアプリケーション向けに独自に調整された最先端のAIプロセッサを提供しています。同社のソリューションは、高度なAI加速器とビジョンプロセッサにより駆動される、知覚とビデオ強化と並んで、エッジでの次世代生成AIを可能にすることに焦点を当てています。そして、26 TOPsのAI性能を提供するHailo-8 NPU加速器を搭載したreComputer_R2000は、YOLOv8sで200 FPS以上を達成することができます。

### ソフトウェア紹介

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AIソフトウェアスイートは、ハードウェア加速器上でAIモデルを効率的に実行するための強力なツールを提供します。既存のディープラーニングフレームワークとシームレスに統合するように設計されており、開発者にスムーズなワークフローを提供します。このプロセスでは、モデルビルド環境でONNXファイルからHEF（Hailo実行可能バイナリファイル）を生成します。作成されると、HEFファイルは推論マシン（ランタイム環境）に転送され、HailoRT APIで推論を実行するために使用されます。提供されたスクリプトは、モデルビルド環境内でONNXファイルをHEFファイルに変換することを容易にします。

> **注意:**
> **Hailo NPUの使用例についてさらに学びたい場合は、この[リンク](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)をクリックしてください。**

## ハードウェア概要

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image3_1.jpeg)
![image2](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image4_1.jpeg)

## OSの書き込み

*SDカードとカードリーダーが必要です。SDカードをカードリーダーに挿入し、カードリーダーのUSBインターフェースをホストマシンのUSBポートに接続してください。*

### Windowsホストコンピュータの場合

- **ステップ1.** **[こちら](https://www.raspberrypi.org/software/)**から**Raspberry Pi Imager**ソフトウェアをダウンロードします

- **ステップ2.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ3.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **ステップ4.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意1:** 現在のところ、(64ビットRaspberry Pi OS Debian 12 Bookworm)[https://downloads.raspberrypi.com/raspios_oldstable_full_arm64/images/raspios_oldstable_full_arm64-2025-10-02/2025-10-01-raspios-bookworm-arm64-full.img.xz]イメージの書き込みを推奨します。新しくリリースされたDebian 13 "Trixie"ベースのRaspberry Pi OSは、まだhailo-allパッケージが更新されていないため、Bookwormを使用することで、すぐに完全なHailoサポートを利用できます。
ダウンロード[リンク](https://www.raspberrypi.com/software/operating-systems/)。
<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-Industrial/homepage/OS.png" alt="pir" width="600" height="auto"/></p>
次に、カスタム使用オプションでイメージャーを使用してSDカードに書き込みます。
<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-Industrial/homepage/img.png" alt="pir" width="600" height="auto"/></p>

それでも最新のイメージを試したい場合は、**ワンコマンドhailo-allルートを使用する代わりに、Hailoソフトウェアを手動でインストールする必要があります；**この[リンク](https://wiki.seeedstudio.com/ja/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection/#install-hailo-software)に従ってください。

**注意2:** **その他の汎用OS**に移動することで、**64ビットUbuntu**などの他のOSを選択できます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ5.** **CHOOSE STORAGE**をクリックします

- **ステップ6.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

書き込みプロセスが完了するまで数分お待ちください。

### MACホストコンピュータの場合

:::caution
**以下の手順を進める前に、[homebrew](https://brew.sh/)をインストールする必要があります。**
ターミナルを開いて```brew -V```と入力し、正しいhomebrew環境がセットアップされているかを確認してください。インストールされているhomebrew環境のバージョンが表示されるはずです。
:::

- **ステップ1.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします

- **ステップ2.** **Raspberry Pi Imager**アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ3.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定の構成**などを行うことができます

- **ステップ 4.** **CHOOSE OS** をクリックして、お好みの OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択することができます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 5.** **CHOOSE STORAGE** をクリックします

- **ステップ 6.** 最後に、**WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

### Linux ホストコンピュータの場合

- **ステップ 1.** snap をダウンロードします

```sh
sudo apt install snap
```

- **ステップ 2.** **rpi-imager** をダウンロードします

```sh
snap install rpi-imager
```

- **ステップ 3.** Raspberry Pi Imager ソフトウェアを開きます

```sh
rpi-imager
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定の構成**などを行うことができます

- **ステップ 5.** **CHOOSE OS** をクリックして、お好みの OS を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意：** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択することができます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 6.** **CHOOSE STORAGE** をクリックして、接続された eMMC ドライブを選択します

- **ステップ 7.** 最後に、**NEXT** をクリックして **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## NVME からの起動

### EEPROM の更新

*この方法は SD カードがあり、デバイスが正常に起動している場合に機能します。システムが最新の Raspberry Pi システム（Bookworm 以降）であり、RPi 5 ファームウェアが 2023-12-06（12月6日）以降に更新されていることを確認してください。そうでなければ NVME 関連の設定を認識しない可能性があります。*

**ステップ 1**：Raspberry Pi システムが最新（Bookworm 以降）であることを確認し、以下のコマンドを入力して RPi 5 ファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

`Advanced Options` まで下にスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version` まで下にスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に `Latest` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここで `No` を選択します - `latest` ブートローダーが必要です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

`Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：メイン画面で **Applications** =>**Accessories** =>**SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、以下の図に示すように OS を NVME SSD にコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Raspberry Pi を NVMe SSD から起動するように設定する

SD カードスロットに簡単にアクセスできる場合は、Pi の電源を切り、SD カードを取り出して（すべてが期待通りに動作している場合）、次回起動時に NVMe ドライブから自動的に起動するはずです。ただし、SD カードをそのままにして NVMe から起動したい場合は、起動順序を変更する必要があります。

**ステップ 1**：以下のコマンドを入力します：

```shell
  sudo raspi-config
```

`Advanced Options` まで下にスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：`Boot Order` まで下にスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**ステップ 3**：`NVMe/USB Boot` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

設定が確認されます。Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**ステップ 4**：`Back` を選択するか Esc キーを押して最初の画面に戻ります。次に右カーソルキーを使用して Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

今すぐ再起動するかどうか尋ねられます。`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## Ubuntu を NVME にフラッシュする

### 最初：SD カードで EEPROM を更新する

この[リンク](https://wiki.seeedstudio.com/ja/r2000_series_getting_start/#update-eeprom)を参照してください。

NVMe 起動順序を最高優先度に設定するには、以下のコマンドを使用します：

```
sudo rpi-eeprom-config --edit
```

次に、以下のように rpi-eeprom-config を変更します：

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

`Ctrl+X` を使用して `y` を入力し、結果を保存します。結果は以下の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### 次に：Ubuntu を NVMe に書き込む

Raspberry Pi Imager を開きます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Ubuntu OS を選択します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

最後に、`Next` をクリックしてフラッシュプロセスが完了するまで待ちます。

### 第三：OS ファイルを置き換える

この[リンク](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)で `pcie-fix.dtbo` をインストールします

以下のように pcie-fix.dtbo を /overlays ファイルにコピーします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

`config.txt` を変更し、以下のようにファイルの最後に `dtoverlay=pcie-fix` を追加します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

次に `Ctrl+X` を使用して `y` を入力し、このファイルを保存します。

## 消費電力と温度

:warning: **注意：** スタンバイ状態は以下の条件でテストされました：グラフィカルインターフェースが無効、Bluetooth がオフ、Wi-Fi が無効。コマンドは以下の通りです：

```
sudo ifconfig wlan0 down
sudo systemctl stop bluetooth
sudo systemctl stop lightdm
```

| **状態**        | **消費電力** | **温度** |
|----------------------|----------------------|----------------------|
|**スタンバイ**|5.9w   |   cpu:46°C|
|**通常動作**|6.3w|cpu:53°C|
|**最大負荷**|16.2w|cpu:75°C hailo8:81°C|

## アプリケーション

### Frigate

Frigate は AI を使用したリアルタイム物体検出用に設計されたオープンソースの NVR（ネットワークビデオレコーダー）です。既存のカメラと統合し、TensorFlow や Coral などの機械学習モデルを使用してビデオフィードで物体検出を実行します。Frigate は低遅延で高性能なビデオ処理に最適化されており、動き検出、ライブビデオストリーム、自動アラートなどの機能を提供します。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **このプロジェクトについてさらに詳しく知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/frigate_nvr_with_raspberrypi_5/)を参照してください。**

### YOLO

YOLO（You Only Look Once）シリーズのモデルは、速度と精度を重視して設計されたリアルタイム物体検出モデルのファミリーです。領域提案と分類を別々に実行する従来の物体検出手法とは異なり、YOLOはニューラルネットワークの単一のフォワードパスで両方のタスクを実行するため、はるかに高速です。YOLOモデルは画像をグリッドに分割し、各グリッドセルのバウンディングボックスとクラス確率を予測します。長年にわたり、YOLOは様々なバージョンを通じて進化し、精度、速度、および小さな物体を検出する能力が向上しています。YOLOv4、YOLOv5、そして最近のYOLOv7およびYOLOv8モデルは、監視、自動運転車、ロボティクスなどのアプリケーションで広く使用されています。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **このプロジェクトについてさらに詳しく知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)を参照してください**。

### Clip

CLIP（Contrastive Language-Image Pretraining）は、OpenAIによって開発された機械学習モデルで、画像とテキストを一緒に理解することができます。対応するテキスト記述と画像を関連付けるように訓練されており、両方のモダリティを含むタスクを実行することができます。CLIPはゼロショット学習が可能で、これらのカテゴリで特別に訓練されることなく、画像内の物体や概念を認識することができます。画像分類、物体検出、さらには画像のテキスト記述生成など、様々なタスクで強力な性能を示しています。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **このプロジェクトについてさらに詳しく知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/clip_application_on_rpi5_with_ai_kit/)を参照してください。**

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、様々なサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
