---
description: reComputer Industrial R21xx OS のフラッシュ
title: reComputer Industrial R21xx OS のフラッシュ
keywords:
  - Raspberry pi
  - エッジコントローラ
  - reComputer Industrial R21xx
  - OS のフラッシュ
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_r21xx_flash_os
last_update:
  date: 09/28/2025
  author: Nolan Chen
createdAt: '2025-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/recomputer_industrial_r21xx_flash_os/
---
# reComputer Industrial R21xx OS のフラッシュ

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R21xx シリーズは Raspberry Pi CM5 と Hailo-8 AI アクセラレータを搭載したコンパクトなエッジ AI システムで、リアルタイムのマルチチャネル映像処理向けに 26 TOPS の性能を発揮します。クアッドコア Cortex-A76 CPU、最大 16GB RAM、64GB eMMC、および多彩なインターフェースにより、産業用 AI アプリケーションへのシームレスな統合を実現します。

## ハードウェア要件

以下のハードウェアを用意してください

- reComputer Industrial R21xx x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- イーサネットケーブル x 1
- 電源アダプタ（12V-24V）持ち込み

## ソフトウェア要件

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## OS をフラッシュする

### Windows ホストコンピュータの場合

- **Step 1.** 以下のリンクをクリックしてデバイスの[イメージファイル](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)をダウンロードします
一番下のものを選択し、日付のリンクをクリックしてダウンロードします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_1.png" style={{width:800, height:'auto'}}/></div>

- **Step 2.** **[こちら](https://www.raspberrypi.org/software/)** から **Raspberry Pi Imager** ソフトウェアをダウンロードします

- **Step 3.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **Step 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

- **Step 5.** **CHOOSE OS** をクリックし、ダウンロードしたイメージファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_5.png" alt="pir" width="800" height="auto"/></p>

イメージの書き込みが成功するまで続けてください。

USB-C ポートを抜き、再度ブートボタンを押して電源をオン/オフします。正常にシステムへログインできれば、イメージの書き込みは成功しており、通常どおり使用できます。

### MAC ホストコンピュータの場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開き、```brew -V``` と入力して正しく homebrew 環境がセットアップされているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **Step 1.** [このリンク](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **Step 2.** **Raspberry Pi Imager** アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **Step 3.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

ここで、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

- **Step 4.** **CHOOSE OS** をクリックし、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**NOTE:** **Other general purpose OS** に進むことで、**Ubuntu Desktop 24.04 lts** など他の OS を選択できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、次のリンクを使用してイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 5.** **CHOOSE STORAGE** をクリックします

- **Step 6.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="800" height="auto"/></p>

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
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="800" height="auto"/></p>

- **Step 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

ここで、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

- **Step 5.** **CHOOSE OS** をクリックし、希望する OS を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTE:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** など他の OS を選択できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、次のリンクを使用してイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 6.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します

- **Step 7.** 最後に **NEXT** と **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。
結果は次のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## NVME からのブート

### EEPROM の更新

*この方法は SSD を搭載し、eMMC からの起動に成功している場合に有効です。システムが最新の Raspberry Pi システム（Bookworm 以降）であり、RPi 5 のファームウェアが 2023-12-06（12 月 6 日）以降に更新されていることを確認してください。そうでない場合、NVME 関連の設定が認識されない可能性があります。*

**Step 1**：Raspberry Pi システムが最新（Bookworm 以降）であることを確認し、次のコマンドを入力して RPi 5 のファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

`Advanced Options` までスクロールし、Enter キーを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

`Bootloader Version` までスクロールし、Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

最後に `Latest` を選択し、Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

ここでは `No` を選択します - `latest` ブートローダーを使用したいからです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

そして `Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**Step 2**：メイン画面で **Applications** =>**Accessories** =>**SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、下図のように OS を NVME SSD にコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### Raspberry Pi を NVMe SSD から起動するように設定する

SD カードスロットへ簡単にアクセスできる場合は、Pi の電源を切り、SD カードを取り出せば（すべてが期待どおりに動作していれば）次回起動時に自動的に NVMe ドライブから起動するはずです。SD カードをそのまま挿した状態で NVMe から起動したい場合は、ブート順序を変更する必要があります。

**Step 1**：次のコマンドを入力します：

```shell
  sudo raspi-config
```

`Advanced Options` までスクロールし、Enter キーを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="800" height="auto" /></div>

**Step 2**：`Boot Order` までスクロールし、Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="800" height="auto" /></div>

**Step 3**：`NVMe/USB Boot` を選択し、Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="800" height="auto" /></div>

設定内容が確認されます。Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**ステップ 4**：`Back` を選択するか Esc キーを押して最初の画面に戻ります。その後、カーソルの右キーを使って Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

今すぐ再起動するかどうかを尋ねられます。`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>

## ドライバのインストール
reComputer R1000 には必要なドライバがあらかじめプリインストールされているため、追加のドライバをインストールする必要はありません。ただし、自分で新しい OS をフラッシュした場合は、必要なドライバを別途インストールする必要があります。

**注意：** 次のコマンドは、/boot/firmware/ パスと apt パッケージ名が特定であるため、**Ubuntu 24.04**（Noble Numbat）専用です。

1. 依存関係の更新とインストール
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git net-tools minicom -y
```

2. Seeed DTOverlays のクローンとインストール
```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh --device reComputer-R2x
```
3. config.txt でハードウェアオーバーレイを設定
```bash
sudo sed -i 's/^dtparam=spi=on/# dtparam=spi=on/' /boot/firmware/config.txt
sudo sed -i 's/^dtparam=i2c_arm=on/# dtparam=i2c_arm=on/' /boot/firmware/config.txt
sudo sed -i '$a dtoverlay=reComputer-R21' /boot/firmware/config.txt
```
4. 変更を適用
```bash
sudo reboot
```
5. 検証コマンド
```bash
ls -l /dev/serial/by-id/                # Check RS485/232 (ttyACM0/1)
ip addr show | grep can                 # Check CAN FD (can0/1)
sudo dmesg | grep -i mcp                # Verify MCP2518FD status
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
