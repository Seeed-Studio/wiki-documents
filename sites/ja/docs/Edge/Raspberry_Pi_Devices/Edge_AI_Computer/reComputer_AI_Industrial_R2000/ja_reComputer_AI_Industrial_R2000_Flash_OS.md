---
description: reComputer AI Industrial R2000 OS 書き込み
title: reComputer AI Industrial R2000 OS 書き込み
keywords:
  - エッジ
  - reComputer AI Industrial R2000
  - OS 書き込み
image: https://files.seeedstudio.com/wiki/reComputer-R2000/reComputer_AI_Industrial_R2135-12.webp
slug: /recomputer_ai_industrial_r2000_flash_os
last_update:
  date: 05/06/2025
  author: Jiahao Li
createdAt: '2025-01-09'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/ja/recomputer_ai_industrial_r2000_flash_os/
---
# reComputer AI Industrial R2000 OS 書き込み

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer AI Industrial R2000 シリーズは Raspberry Pi CM5 と Hailo-8 AI アクセラレータを搭載したコンパクトなエッジ AI システムで、リアルタイムのマルチチャネル映像処理向けに 26 TOPS を提供します。クアッドコア Cortex-A76 CPU、最大 16GB RAM、64GB eMMC、および多彩なインターフェースにより、産業用 AI アプリケーションへのシームレスな統合を実現します。

## ハードウェア要件

以下のハードウェアを準備する必要があります

- reComputer AI Industrial R2000 x 1
- ホストコンピュータ (Windows/Mac/Linux) x 1
- イーサネットケーブル x 1
- 電源アダプタ (12V-24V) BYO
- USB Type-C ケーブル x 1

## ソフトウェア要件

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## OS の書き込み

### Windows ホストコンピュータの場合

- **ステップ 1.** **[こちら](https://www.raspberrypi.org/software/)** から **Raspberry Pi Imager** ソフトウェアをダウンロードします

- **ステップ 2.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 3.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 4.** **CHOOSE OS** をクリックして、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択できます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 5.** **CHOOSE STORAGE** をクリックします

- **ステップ 6.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。

### MAC ホストコンピュータの場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開き、```brew -V``` と入力して正しい homebrew 環境がセットアップされているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **ステップ 1.** [このリンク](https://www.raspberrypi.org/software/) にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **ステップ 2.** **Raspberry Pi Imager** アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 3.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

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

ここで、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

- **ステップ 5.** **CHOOSE OS** をクリックして、希望する OS を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

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

*この方法は SSD を搭載し、eMMC からデバイスの起動に成功している場合に有効です。システムが最新の Raspberry Pi システム (Bookworm 以降) であり、RPi 5 のファームウェアが 2023-12-06（12 月 6 日）以降に更新されていることを確認してください。そうでない場合、NVME 関連の設定が認識されない可能性があります。*

**ステップ 1**: Raspberry Pi システムが最新 (Bookworm 以降) であることを確認し、次のコマンドを入力して RPi 5 ファームウェアを更新します:

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

ここでは `No` を選択します - `latest` ブートローダーを使用したいからです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

そして `Finish` を選択してツールを終了します:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：メイン画面で **Applications** => **Accessories** => **SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、下図のように OS を NVME SSD にコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Raspberry Pi を NVMe SSD から起動するように設定する

SD カードスロットに簡単にアクセスできる場合は、Pi の電源を切り、SD カードを取り外すことで（すべてが期待どおりに動作していれば）次回起動時に自動的に NVMe ドライブから起動するはずです。SD カードをそのまま挿した状態で NVMe から起動したい場合は、ブート順序を変更する必要があります。

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

**ステップ 4**:`Back` を選択するか Esc キーを押して最初の画面に戻ります。その後、カーソル右キーを使って Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

今すぐ再起動するかどうかを尋ねられます。`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## Ubuntu を NVME に書き込む

### 1: SD カードで EEPROM を更新する

この [リンク](https://wiki.seeedstudio.com/ja/r2000_series_getting_start/#update-eeprom) を参照してください。

NVMe のブート順序を最優先に設定するには、次のコマンドを使用します：

```
sudo rpi-eeprom-config --edit
```

そして、以下のように rpi-eeprom-config を変更します：

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

`Ctrl+X` を使用し、`y` を入力して結果を保存します。結果は次のとおりです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### 2: Ubuntu を NVMe に書き込む

Raspberry Pi Imager を開きます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Ubuntu OS を選択します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

最後に `Next` をクリックし、書き込みプロセスが完了するまで待ちます。

### 3: OS ファイルを置き換える

この [リンク](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo) から `pcie-fix.dtbo` をインストールします

次のように pcie-fix.dtbo を /overlays フォルダにコピーします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

`config.txt` を編集し、ファイルの末尾に `dtoverlay=pcie-fix` を次のように追加します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

その後、`Ctrl+X` を使用し、`y` を入力してこのファイルを保存します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
