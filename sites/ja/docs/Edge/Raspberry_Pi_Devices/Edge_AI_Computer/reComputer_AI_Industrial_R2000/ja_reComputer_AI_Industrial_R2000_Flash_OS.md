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

reComputer AI Industrial R2000 シリーズは Raspberry Pi CM5 と Hailo-8 AI アクセラレータを搭載したコンパクトなエッジ AI システムで、リアルタイムのマルチチャネル画像処理向けに 26 TOPS の性能を発揮します。クアッドコア Cortex-A76 CPU、最大 16GB RAM、64GB eMMC、および多彩なインターフェースにより、産業用 AI アプリケーションへのシームレスな統合を実現します。

## ハードウェア要件

以下のハードウェアを用意してください

- reComputer AI Industrial R2000 x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- イーサネットケーブル x 1
- 電源アダプタ（12V-24V）持ち込み
- USB Type-C ケーブル x 1

## ソフトウェア要件

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## OS の書き込み

### Windows ホストコンピュータの場合

- **Step 1.** **[こちら](https://www.raspberrypi.org/software/)** から **Raspberry Pi Imager** ソフトウェアをダウンロードします

- **Step 2.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 3.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **Step 4.** **CHOOSE OS** をクリックして、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** など他の OS を選択できます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、次のリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 5.** **CHOOSE STORAGE** をクリックします

- **Step 6.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。

### MAC ホストコンピュータの場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開き、```brew -V``` と入力して正しく homebrew 環境がセットアップされているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **Step 1.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **Step 2.** **Raspberry Pi Imager** アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 3.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

- **Step 4.** **CHOOSE OS** をクリックして、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** など他の OS を選択できます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、次のリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 5.** **CHOOSE STORAGE** をクリックします

- **Step 6.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

### Linux ホストコンピュータの場合

- **Step 1.** snap をダウンロードします

```sh
sudo apt install snap
```

- **Step 2.** **rpi-imager** をダウンロードします

```sh
snap install rpi-imager
```

- **Step 3.** Raspberry Pi Imager ソフトウェアを開きます

```sh
rpi-imager
```

結果は次のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Step 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

- **Step 5.** **CHOOSE OS** をクリックして、希望する OS を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTE:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** など他の OS を選択できます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、次のリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 6.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します

- **Step 7.** 最後に **NEXT** と **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。
結果は次のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## SSD からの起動（USB 経由の NVMe）

### EEPROM の更新

*この方法は SSD を搭載し、eMMC からの起動に成功している場合に有効です。システムが最新の Raspberry Pi システム（Bookworm 以降）であり、RPi 5 のファームウェアが 2023-12-06（12 月 6 日）以降に更新されていることを確認してください。そうでない場合、NVME 関連の設定が認識されない可能性があります。*

**Step 1**: Raspberry Pi システムが最新（Bookworm 以降）であることを確認し、次のコマンドを入力して RPi 5 ファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

`Advanced Options` までスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version` までスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に `Latest` を選択し、Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここでは `No` を選択します。`latest` ブートローダーを使用したいからです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

そして `Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**Step 2**：メイン画面で **Applications** =>**Accessories** =>**SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、下図のように OS を NVME SSD にコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Raspberry Pi を SSD から起動するように設定する

SD カードスロットに簡単にアクセスできる場合は、Pi の電源を切り、SD カードを取り外すことで、（すべてが期待どおりに動作していれば）次回起動時に自動的に SSD から起動します。SD カードを挿したまま SSD から起動したい場合は、ブート順序を変更する必要があります。

**Step 1**: 次のコマンドを入力します：

```shell
  sudo raspi-config
```

`Advanced Options` までスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**Step 2**: `Boot Order` までスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**Step 3**: `NVMe/USB Boot` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

設定内容が確認されます。Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**ステップ 4**：`Back` を選択するか Esc キーを押して最初の画面に戻ります。その後、カーソル右キーを使って Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

今すぐ再起動するかどうかを尋ねられます。`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## Ubuntu を SSD に書き込む（USB 経由の NVMe）

### まず最初に：SD カードで EEPROM を更新する

[Update EEPROM](#Update-EEPROM) に従って EEPROM を更新します。

このデバイスで使用されている SSD は、USB 3.0 ブリッジを介して接続された NVMe SSD です。起動時に Raspberry Pi のファームウェアはこれを USB ストレージデバイスとして検出するため、適切な起動優先順位はネイティブな NVMe のみの起動順序ではなく、USB 起動順序になります。SSD を最優先の起動デバイスとして設定するには、次のコマンドを使用します：

```
sudo rpi-eeprom-config --edit
```

そして、以下のように rpi-eeprom-config を変更します：

```
BOOT_UART=1
BOOT_ORDER=0xf14
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

`Ctrl+X` を使用し、`y` を入力して結果を保存します。結果は次のとおりです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/boot_from_usb.jpg" alt="pir" width="700" height="auto" /></div>

### 次に：Ubuntu を SSD に書き込む

Raspberry Pi Imager を開きます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Ubuntu OS を選択します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

最後に `Next` をクリックし、書き込みプロセスが完了するまで待ちます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
