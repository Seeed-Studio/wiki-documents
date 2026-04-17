---
description: reComputer AI R2000 は Raspberry Pi 5 をベースにした高性能なエッジ AI コンピュータです。クアッドコア Arm Cortex-A76 プロセッサ、8GB RAM、M.2 SSD 対応、最大 26 TOPS を提供する Hailo-8 AI アクセラレーションモジュールを搭載し、リアルタイムで低レイテンシかつ高効率な AI 推論を実現します。AI 搭載ビデオ解析、マシンビジョン、インテリジェントエッジコンピューティングなど、幅広い AI アプリケーションに最適な選択肢です。
title: reComputer AI R2000 シリーズ入門ガイド
keywords:
  - Raspberry pi
  - エッジ AI コンピュータ
  - reComputer R2000
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /r2000_series_getting_start
sku: 114993560, 114993627
last_update:
  date: 1/09/2025
  author: Jiahao Li
createdAt: '2025-01-09'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/r2000_series_getting_start/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer AI R2000 シリーズは、Raspberry Pi 5 をベースにした高性能なエッジ AI コンピュータです。クアッドコア Arm Cortex-A76 プロセッサ、8GB RAM、M.2 SSD 対応、最大 26 TOPS を提供する Hailo-8 AI アクセラレーションモジュールを搭載し、リアルタイムで低レイテンシかつ高効率な AI 推論を実現します。AI 搭載ビデオ解析、マシンビジョン、インテリジェントエッジコンピューティングなど、幅広い AI アプリケーションに最適な選択肢です。

## 特長

- **強力な冷却性能**: コンパクトな設計と最適化された熱設計により、リソースに制約のある環境への展開に非常に適しており、優れた冷却性能を提供します。

- **高いパフォーマンス**: クアッドコア Cortex-A76 CPU と最大 8GB RAM を備えた Raspberry Pi 5 を搭載。

- **毎秒 26 兆回の演算性能**: Hailo AI アクセラレータにより、最大 26 TOPS の統合コンピューティングパワーを提供します。
豊富なインターフェース: 2x HDMI 4Kp60、1x Ethernet ポート、2x USB 3.0、2x USB 2.0。

- **ワイヤレス接続**: デュアルバンド Wi-Fi および Bluetooth 5.0/BLE。
柔軟なストレージオプション: PCIe2.0 デュアル M.2 スロットは、AI アクセラレータと SSD ストレージの両方をサポートします。

## 仕様

| **パラメータ**        | **説明**                                                          |
|-----------------------|--------------------------------------------------------------------------|
| **ハードウェア仕様**      |                                                                          |
| **CPU**                | Raspberry Pi 5、2.4GHz クアッドコア 64 ビット Arm Cortex-A76                    |
| **GPU**                | Raspberry Pi 5、VideoCore VII                                             |
| **AI プロセッサ**       | Hailo-8 M.2 アクセラレーションモジュール、毎秒 26 兆回の演算性能           |
| **RAM**                | 8GB SDRAM                                                                |
| **オペレーティングシステム**   | Raspberry Pi OS、Ubuntu                                                  |
| **システム仕様**        |                                                                          |
| **電源**       | 5V/5A DC 電源（USB-C 経由）、Power Delivery 対応                       |
| **ビデオデコーダ**      | 4Kp60 HEVC デコーダ                                                       |
| **Wi-Fi**              | デュアルバンド 802.11ac Wi-Fi®                                                |
| **Bluetooth**          | Bluetooth 5.0/ BLE                                                       |
| **電源ボタン**       | On/Off 搭載                                                          |
| **インターフェース**          |                                                                          |
| **ストレージ**            | 1 x microSD カードスロット、高速 SDR104 モード対応           |
| **M.2 スロット**           | 2 x M.2 スロット、M.2 NVMe SSD/Hailo M.2 アクセラレーションモジュール対応        |
| **USB ポート**          | 2 × USB 3.0 ポート                                                        |
|                       | 2 × USB 2.0 ポート                                                        |
| **Ethernet**           | 1 x 10/100/1000 Mbps                                                     |
| **カメラ/ディスプレイ**     | 2 × 4 レーン MIPI カメラ/ディスプレイトランシーバ                               |
| **ディスプレイ出力**     | 2 x micro HDMI ポート (4Kp60)                                             |
| **動作環境** |                                                                          |
| **保護等級** | IP40                                                                     |
| **動作温度** | 0-45°C                                                                  |
| **その他**             |                                                                          |
| **保証**           | 1 年                                                                   |
| **製品ライフタイム**| 少なくとも 2036 年 1 月まで                                              |
| **認証**      | CE、FCC、Telec、RoHS、REACH                                              |

## Hailo の紹介

### ハードウェアの紹介

[Hailo](https://hailo.ai/) は、エッジデバイス上での高性能ディープラーニングアプリケーション向けに特化した最先端の AI プロセッサを提供しています。同社のソリューションは、高度な AI アクセラレータとビジョンプロセッサによって、エッジにおける次世代の生成 AI を、認識およびビデオ強調とともに実現することに重点を置いています。そして reComputer_R2000 は、26 TOPs の AI 性能を提供する Hailo-8 NPU アクセラレータを搭載しており、YOLOv8s で 200 FPS 以上を達成することが可能です。

### ソフトウェアの紹介

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI Software Suite は、ハードウェアアクセラレータ上で AI モデルを効率的に実行するための強力なツールを提供します。既存のディープラーニングフレームワークとシームレスに統合されるよう設計されており、開発者にスムーズなワークフローを提供します。このプロセスでは、まず Model Build Environment で ONNX ファイルから HEF（Hailo Executable Binary File）を生成します。作成された HEF ファイルは推論マシン（Runtime Environment）に転送され、そこで HailoRT API を用いて推論を実行するために使用されます。提供されているスクリプトは、Model Build Environment 内で ONNX ファイルを HEF ファイルに変換する作業を支援します。

> **注意:**
> **Hailo NPU の使用例についてさらに詳しく知りたい場合は、この [リンク](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero) をクリックしてください。**

## ハードウェア概要

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image3_1.jpeg)
![image2](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image4_1.jpeg)

## OS の書き込み

*SD カードとカードリーダーが必要です。SD カードをカードリーダーに挿入し、カードリーダーの USB インターフェースをホストマシンの USB ポートに接続します。*

### Windows ホストコンピュータの場合

- **ステップ 1.** **[ここ](https://downloads.raspberrypi.com/imager/imager_2.0.7.exe)** をクリックして、以下の手順で使用する Windows 版 Raspberry Pi Imager 2.0.7 を直接ダウンロードするか、**[公式サイト](https://www.raspberrypi.com/software/)** にアクセスして、お使いのシステムに適したバージョンを選択します。


- **ステップ 2.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_1.png" alt="pir" width="600" height="auto"/></p>


- **ステップ 3.** **CHOOSE OS** をクリックし、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_2.png" alt="pir" width="600" height="auto"/></p>      

**NOTE1:** 現時点では、(64-bit Raspberry Pi OS Debian 12 Bookworm)[https://downloads.raspberrypi.com/raspios_oldstable_full_arm64/images/raspios_oldstable_full_arm64-2025-10-02/2025-10-01-raspios-bookworm-arm64-full.img.xz] イメージを書き込むことを推奨します。新しくリリースされた Debian 13 “Trixie” ベースの Raspberry Pi OS では、まだ hailo-all パッケージが更新されていないため、Bookworm を使用することで、箱から出してすぐに完全な Hailo サポートを得ることができます。
ダウンロード [リンク](https://www.raspberrypi.com/software/operating-systems/)。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-Industrial/homepage/OS.png" alt="pir" width="600" height="auto"/></p>

その後、imager の Use custom オプションを使用して SD カードに書き込みます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_3.png" alt="pir" width="600" height="auto"/></p>

それでも最新のイメージを試したい場合は、**ワンコマンドの hailo-all ルートを使用する代わりに、Hailo ソフトウェアを手動でインストールする必要があります。** この [リンク](https://wiki.seeedstudio.com/ja/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection/#install-hailo-software) に従ってください。

**NOTE2:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** など他の OS を選択することもできます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードすることもできます:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 5.** **STORAGE** をクリックし、OS の書き込み用に用意したターゲットストレージデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_4.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 6.** 最後に **WRITE** をクリックします

フラッシュ処理が完了するまで、数分お待ちください。

### MAC ホストコンピュータの場合

:::caution
**以下の手順を進める前に、[homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開き、```brew -V``` と入力して、正しく homebrew 環境がセットアップされているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **ステップ 1.** [this link](https://www.raspberrypi.org/software/) にアクセスして、**Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **ステップ 2.** **Raspberry Pi Imager** アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 3.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

- **ステップ 4.** **CHOOSE OS** をクリックして、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択できます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 5.** **CHOOSE STORAGE** をクリックします

- **ステップ 6.** 最後に **WRITE** をクリックします

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

結果は次のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

- **ステップ 5.** **CHOOSE OS** をクリックして、希望する OS を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択できます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 6.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します

- **ステップ 7.** 最後に **NEXT** と **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。
結果は次のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## NVME からの起動

### EEPROM の更新

*この方法は、SD カードを使用してデバイスを正常に起動できている場合に有効です。システムが最新の Raspberry Pi システム（Bookworm 以降）であり、RPi 5 のファームウェアが 2023-12-06（12 月 6 日）以降に更新されていることを確認してください。そうでない場合、NVME 関連の設定を認識しない可能性があります。*

**ステップ 1**: Raspberry Pi システムが最新（Bookworm 以降）であることを確認し、次のコマンドを入力して RPi 5 ファームウェアを更新します:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

`Advanced Options` までスクロールして Enter キーを押します:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version` までスクロールして Enter キーを押します:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に `Latest` を選択し、Enter キーを押します:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここでは `No` を選択します。`latest` ブートローダーを使用したいからです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

そして `Finish` を選択してツールを終了します:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：メイン画面で **Applications** => **Accessories** => **SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、下図のように OS を NVME SSD にコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Raspberry Pi を NVMe SSD から起動するように設定する

SD カードスロットに簡単にアクセスできる場合は、Pi の電源を切り、SD カードを取り外すことで（すべてが期待どおりに動作していれば）、次回起動時に自動的に NVMe ドライブから起動するはずです。SD カードをそのまま挿した状態で NVMe から起動したい場合は、ブート順序を変更する必要があります。

**ステップ 1**: 次のコマンドを入力します:

```shell
  sudo raspi-config
```

`Advanced Options` までスクロールして Enter キーを押します:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**:`Boot Order` までスクロールして Enter キーを押します:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**ステップ 3**:`NVMe/USB Boot` を選択して Enter キーを押します:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

設定内容が確認されます。Enter キーを押します:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**ステップ 4**:`Back` を選択するか Esc キーを押して最初の画面に戻ります。その後、カーソルの右キーを使って Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

今すぐ再起動するかどうかを尋ねられます。`Yes` をクリックします:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## Ubuntu を NVME にフラッシュする

### まず: SD カードで EEPROM を更新する

この [リンク](https://wiki.seeedstudio.com/ja/r2000_series_getting_start/#update-eeprom) を参照してください。

NVMe のブート順序を最優先に設定するには、次のコマンドを使用します:

```
sudo rpi-eeprom-config --edit
```

その後、次のように rpi-eeprom-config を変更します:

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

`Ctrl+X` を使用し、`y` を入力して結果を保存します。結果は次のとおりです:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### 次に: Ubuntu を NVMe に書き込む

Raspberry Pi Imager を開きます:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Ubuntu OS を選択します:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

最後に `Next` をクリックし、フラッシュ処理が完了するまで待ちます。

### 最後に: OS ファイルを置き換える

この [リンク](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo) から `pcie-fix.dtbo` をインストールします

次のように pcie-fix.dtbo を /overlays フォルダにコピーします:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

`config.txt` を編集し、ファイルの末尾に `dtoverlay=pcie-fix` を次のように追加します:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

その後、`Ctrl+X` を使用し、`y` を入力してこのファイルを保存します。

## 消費電力と温度

:warning: **注意:** 待機状態は、グラフィカルインターフェースを無効にし、Bluetooth をオフにし、Wi-Fi を無効にした状態でテストされました。コマンドは次のとおりです:

```
sudo ifconfig wlan0 down
sudo systemctl stop bluetooth
sudo systemctl stop lightdm
```

| **条件**        | **消費電力** | **温度** |
|----------------------|----------------------|----------------------|
|**待機**|5.9w   |   cpu:46°C|
|**通常動作**|6.3w|cpu:53°C|
|**最大負荷**|16.2w|cpu:75°C hailo8:81°C|

## アプリケーション

### Frigate

Frigate は、AI を使用したリアルタイム物体検出向けに設計されたオープンソースの NVR（Network Video Recorder）です。既存のカメラと連携し、TensorFlow や Coral などの機械学習モデルを使用して、ビデオフィード上で物体検出を行います。Frigate は低レイテンシかつ高性能なビデオ処理に最適化されており、モーション検知、ライブビデオストリーム、自動アラートなどの機能を提供します。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **このプロジェクトについてさらに知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/frigate_nvr_with_raspberrypi_5/)を参照してください。**

### YOLO

YOLO（You Only Look Once）モデルシリーズは、速度と精度を両立するよう設計されたリアルタイム物体検出モデルのファミリーです。領域提案と分類を別々に行う従来の物体検出手法とは異なり、YOLO はニューラルネットワークの単一のフォワードパスで両方のタスクを実行するため、はるかに高速です。YOLO モデルは画像をグリッドに分割し、各グリッドセルに対してバウンディングボックスとクラス確率を予測します。長年にわたり、YOLO はさまざまなバージョンを通じて進化し、精度、速度、より小さな物体を検出する能力が向上してきました。YOLOv4、YOLOv5、そして最近の YOLOv7 と YOLOv8 モデルは、監視、自動運転車、ロボティクスなどの用途で広く使用されています。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **このプロジェクトについてさらに知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)を参照してください。**

### Clip

CLIP（Contrastive Language-Image Pretraining）は、OpenAI によって開発された、画像と言語を同時に理解できる機械学習モデルです。画像とそれに対応するテキスト記述を関連付けるように学習されており、両方のモダリティを含むタスクを実行できます。CLIP はゼロショット学習が可能であり、特定のカテゴリについて個別に学習させなくても、画像内の物体や概念を認識できます。画像分類、物体検出、さらには画像のテキストによる説明生成など、さまざまなタスクで高い性能を示しています。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **このプロジェクトについてさらに知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/clip_application_on_rpi5_with_ai_kit/)を参照してください。**

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
