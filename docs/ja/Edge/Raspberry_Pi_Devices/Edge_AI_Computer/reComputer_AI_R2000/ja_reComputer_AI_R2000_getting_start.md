---
description: reComputer AI R2000はRaspberry Pi 5をベースにした強力なエッジAIコンピュータです。クアッドコアArm Cortex-A76プロセッサ、8GB RAM、M.2 SSD対応、最大26 TOPSを提供するHailo-8 AIアクセラレーションモジュールを搭載し、リアルタイムで低遅延かつ高効率なAI推論を可能にします。AI対応のビデオ分析、マシンビジョン、インテリジェントエッジコンピューティングなど、幅広いAIアプリケーションに最適な選択肢です。
title: reComputer AI R2000シリーズの始め方
keywords:
- Raspberry Pi
- エッジAIコンピュータ
- reComputer R2000
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /ja/r2000_series_getting_start
last_update:
  date: 05/15/2025
  author: Jiahao Li
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

reComputer AI R2000シリーズはRaspberry Pi 5をベースにした強力なエッジAIコンピュータです。クアッドコアArm Cortex-A76プロセッサ、8GB RAM、M.2 SSD対応、最大26 TOPSを提供するHailo-8 AIアクセラレーションモジュールを搭載し、リアルタイムで低遅延かつ高効率なAI推論を可能にします。AI対応のビデオ分析、マシンビジョン、インテリジェントエッジコンピューティングなど、幅広いAIアプリケーションに最適な選択肢です。

## 特徴

- **強力な冷却性能**: コンパクトなデザインと最適化された熱構造により、リソースが限られた環境での展開に非常に適しており、優れた冷却性能を提供します。

- **強力なパフォーマンス**: クアッドコアCortex-A76 CPUと最大8GB RAMを搭載したRaspberry Pi 5による高性能。

- **26テラオペレーション毎秒**: Hailo AIアクセラレーターによる最大26 TOPSの統合計算能力を提供。
広範なインターフェース: 2x HDMI 4Kp60、1x Ethernetポート、2x USB 3.0、2x USB 2.0。

- **ワイヤレス接続**: デュアルバンドWi-FiとBluetooth 5.0/BLE。
柔軟なストレージオプション: PCIe2.0デュアルM.2スロットはAIアクセラレーターとSSDストレージの両方をサポート。

## 仕様

| **パラメータ**         | **説明**                                                                 |
|-----------------------|--------------------------------------------------------------------------|
| **ハードウェア仕様**    |                                                                          |
| **CPU**                | Raspberry Pi 5、2.4GHzクアッドコア64ビットArm Cortex-A76                  |
| **GPU**                | Raspberry Pi 5、VideoCore VII                                            |
| **AIプロセッサ**        | Hailo-8 M.2アクセラレーションモジュール、26テラオペレーション毎秒          |
| **RAM**                | 8GB SDRAM                                                               |
| **オペレーティングシステム** | Raspberry Pi OS、Ubuntu                                                  |
| **システム仕様**        |                                                                          |
| **電源供給**            | USB-C経由で5V/5A DC電源、Power Delivery対応                              |
| **ビデオデコーダ**      | 4Kp60 HEVCデコーダ                                                      |
| **Wi-Fi**              | デュアルバンド802.11ac Wi-Fi®                                           |
| **Bluetooth**          | Bluetooth 5.0/BLE                                                       |
| **電源ボタン**          | オン/オフ含む                                                           |
| **インターフェース**    |                                                                          |
| **ストレージ**          | 1 x microSDカードスロット、高速SDR104モード対応                          |
| **M.2スロット**         | 2 x M.2スロット、M.2 NVMe SSD/Hailo M.2アクセラレーションモジュール対応   |
| **USBポート**           | 2 × USB 3.0ポート                                                       |
|                       | 2 × USB 2.0ポート                                                       |
| **イーサネット**        | 1 x 10/100/1000 Mbps                                                    |
| **カメラ/ディスプレイ**  | 2 × 4レーンMIPIカメラ/ディスプレイトランシーバー                          |
| **ディスプレイ出力**     | 2 x micro HDMIポート (4Kp60)                                            |
| **環境条件**            |                                                                          |
| **防塵保護**            | IP40                                                                    |
| **動作温度**            | 0-45°C                                                                  |
| **その他**              |                                                                          |
| **保証**                | 1年                                                                     |
| **製品寿命**            | 少なくとも2036年1月まで                                                 |
| **認証**                | CE、FCC、Telec、RoHS、REACH                                             |

## Hailoの紹介

### ハードウェアの紹介

[Hailo](https://hailo.ai/)は、エッジデバイス上での高性能なディープラーニングアプリケーション向けに特化した最先端のAIプロセッサを提供しています。同社のソリューションは、エッジでの生成AIの次世代を可能にすることに焦点を当てており、高度なAIアクセラレータとビジョンプロセッサによって駆動される認識およびビデオ強化を実現します。そして、Hailo-8 NPUアクセラレータを搭載したreComputer_R2000は、26 TOPsのAI性能を提供し、YOLOv8sで200 FPS以上を達成することが可能です。

### ソフトウェアの紹介

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI Software Suiteは、ハードウェアアクセラレータ上でAIモデルを効率的に実行するための強力なツールを提供します。このソフトウェアは既存のディープラーニングフレームワークとシームレスに統合するよう設計されており、開発者にスムーズなワークフローを提供します。このプロセスでは、Model Build EnvironmentでONNXファイルからHEF（Hailo実行可能バイナリファイル）を生成します。一度HEFファイルが作成されると、それを推論マシン（Runtime Environment）に転送し、HailoRT APIを使用して推論を実行します。提供されているスクリプトは、Model Build Environment内でONNXファイルをHEFファイルに変換するプロセスを支援します。

> **注意:**
> **Hailo NPUの使用例についてさらに学びたい場合は、この[リンク](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)をクリックしてください。**

## ハードウェア概要

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image3_1.jpeg)
![image2](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image4_1.jpeg)

## OSのフラッシュ

*SDカードとカードリーダーが必要です。SDカードをカードリーダーに挿入し、カードリーダーのUSBインターフェースをホストマシンのUSBポートに接続してください。*

### Windowsホストコンピュータの場合

- **ステップ1.** **[こちら](https://www.raspberrypi.org/software/)**から**Raspberry Pi Imager**ソフトウェアをダウンロードします。

- **ステップ2.** Raspberry Pi Imagerソフトウェアを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ3.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **ステップ4.** **CHOOSE OS**をクリックして、希望のOSを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64-bit Ubuntu**などの他のOSを選択するには、**Other general purpose OS**に移動してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ5.** **CHOOSE STORAGE**をクリックします。

- **ステップ6.** 最後に、**WRITE**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

### MACホストコンピュータの場合

:::caution
**以下の手順を進める前に、[homebrew](https://brew.sh/)をインストールする必要があります。**
ターミナルを開き、```brew -V```と入力して正しいhomebrew環境が設定されているか確認してください。インストールされているhomebrew環境のバージョンが表示されるはずです。
:::

- **ステップ1.** [このリンク](https://www.raspberrypi.org/software/)から**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします。

- **ステップ2.** **Raspberry Pi Imager**アプリケーションを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ3.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの構成、ローカル設定の設定**などが可能です。

- **ステップ4.** **CHOOSE OS**をクリックして、希望のOSを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64-bit Ubuntu**などの他のOSを選択するには、**Other general purpose OS**に移動してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ5.** **CHOOSE STORAGE**をクリックします。

- **ステップ6.** 最後に、**WRITE**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

### Linuxホストコンピュータの場合

- **ステップ1.** snapをダウンロードします。

```sh
sudo apt install snap
```

- **ステップ2.** **rpi-imager**をダウンロードします。

```sh
snap install rpi-imager
```

- **ステップ3.** Raspberry Pi Imagerソフトウェアを開きます。

```sh
rpi-imager
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ4.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの構成、ローカル設定の設定**などが可能です。

- **ステップ 5.** **CHOOSE OS** をクリックし、希望するOSを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意:** **64-bit Ubuntu** などの他のOSを選択するには、**Other general purpose OS** に移動してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、以下のリンクを使用してイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 6.** **CHOOSE STORAGE** をクリックし、接続されたeMMCドライブを選択します。

- **ステップ 7.** 最後に、**NEXT** と **YES** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## NVMEからの起動

### EEPROMの更新

*この方法は、SDカードを使用してデバイスを正常に起動した場合に機能します。システムが最新のRaspberry Piシステム（Bookworm以降）であり、RPi 5のファームウェアが2023年12月6日（12月6日）以降に更新されていることを確認してください。そうでない場合、NVME関連の設定を認識しない可能性があります。*

**ステップ 1**: Raspberry Piシステムが最新であることを確認し（Bookworm以降）、以下のコマンドを入力してRPi 5ファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # 2023年12月以降でない場合は、以下のコマンドをターミナルに入力して設定ツールを開始してください
  sudo raspi-config
```

`Advanced Options` までスクロールし、Enterを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version` までスクロールし、Enterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に `Latest` を選択し、Enterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここでは `No` を選択します - `latest` ブートローダーを選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

`Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：メイン画面で **Applications** => **Accessories** => **SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、OSをNVME SSDにコピーします。以下の図を参照してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Raspberry PiをNVMe SSDから起動する設定

SDカードスロットに簡単にアクセスできる場合は、Piの電源を切り、SDカードを取り外して（すべてが正常に動作している場合）、次回起動時に自動的にNVMeドライブから起動するはずです。ただし、SDカードをそのままにしてNVMeから起動したい場合は、起動順序を変更する必要があります。

**ステップ 1**: 以下のコマンドを入力します：

```shell
  sudo raspi-config
```

`Advanced Options` までスクロールし、Enterを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**: `Boot Order` までスクロールし、Enterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**ステップ 3**: `NVMe/USB Boot` を選択し、Enterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

設定が確認されます。Enterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**ステップ 4**: `Back` を選択するかEscキーを押して最初の画面に戻ります。その後、右カーソルキーを使用してFinishに移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

再起動するかどうかを尋ねられたら、`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## NVMeにUbuntuをフラッシュする

### 第1ステップ: SDカードでEEPROMを更新する

この[リンク](https://wiki.seeedstudio.com/ja/r2000_series_getting_start/#update-eeprom)を参照してください。

NVMeのブート順序を最優先に設定するには、以下のコマンドを使用します:

```
sudo rpi-eeprom-config --edit
```

その後、以下のようにrpi-eeprom-configを変更します:

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

`Ctrl+X`を使用して終了し、`y`を入力して結果を保存します。結果は以下のようになります:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### 第2ステップ: UbuntuをNVMeに書き込む

Raspberry Pi Imagerを開きます:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Ubuntu OSを選択します:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

最後に、`Next`をクリックしてフラッシュプロセスが完了するのを待ちます。

### 第3ステップ: OSファイルを置き換える

この[リンク](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)から`pcie-fix.dtbo`をインストールします。

`pcie-fix.dtbo`を以下のように/overlaysフォルダにコピーします:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

`config.txt`を変更し、ファイルの末尾に`dtoverlay=pcie-fix`を追加します:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

その後、`Ctrl+X`を使用して終了し、`y`を入力してこのファイルを保存します。

## 消費電力と温度

:warning: **注意:** 待機状態は以下の条件下でテストされました: グラフィカルインターフェイスが無効化され、Bluetoothがオフ、Wi-Fiが無効化されています。コマンドは以下の通りです:

```
sudo ifconfig wlan0 down
sudo systemctl stop bluetooth
sudo systemctl stop lightdm
```

| **条件**             | **消費電力**         | **温度**           |
|----------------------|----------------------|----------------------|
|**待機状態**|5.9w   |   cpu:46°C|
|**通常動作**|6.3w|cpu:53°C|
|**最大負荷**|16.2w|cpu:75°C hailo8:81°C|

## アプリケーション

### Frigate

Frigateは、AIを使用したリアルタイムの物体検出に特化したオープンソースのNVR（ネットワークビデオレコーダー）です。既存のカメラと統合し、TensorFlowやCoralなどの機械学習モデルを使用してビデオフィード上で物体検出を行います。Frigateは低遅延で高性能なビデオ処理に最適化されており、動作検出、ライブビデオストリーム、自動アラートなどの機能を提供します。

<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意:**
> **このプロジェクトについてさらに詳しく知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/frigate_nvr_with_raspberrypi_5/)を参照してください。**

### YOLO

YOLO（You Only Look Once）シリーズのモデルは、速度と精度を重視したリアルタイム物体検出モデルのファミリーです。従来の物体検出方法が領域提案と分類を別々に行うのに対し、YOLOはニューラルネットワークの単一のフォワードパスで両方のタスクを実行するため、非常に高速です。YOLOモデルは画像をグリッドに分割し、各グリッドセルに対して境界ボックスとクラス確率を予測します。YOLOはこれまでに複数のバージョンを経て進化しており、精度、速度、小さな物体の検出能力が向上しています。YOLOv4、YOLOv5、最近のYOLOv7およびYOLOv8モデルは、監視、自動車、ロボティクスなどの用途で広く使用されています。

<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意:**
> **このプロジェクトについてさらに詳しく知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)を参照してください。**

### Clip

CLIP（Contrastive Language-Image Pretraining）は、OpenAIによって開発された機械学習モデルで、画像とテキストを一緒に理解することができます。画像と対応するテキスト記述を関連付けるように訓練されており、両方のモダリティを含むタスクを実行することができます。CLIPはゼロショット学習が可能で、特定のカテゴリで訓練されていなくても画像内のオブジェクトや概念を認識することができます。画像分類、物体検出、画像のテキスト記述生成など、さまざまなタスクで優れた性能を示しています。

<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意:**
> **このプロジェクトについてさらに詳しく知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/clip_application_on_rpi5_with_ai_kit/)を参照してください。**

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>