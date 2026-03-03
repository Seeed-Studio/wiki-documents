---
description: reComputer Industrial R21xx Flash OS
title: reComputer Industrial R21xx Flash OS
keywords:
- Raspberry pi
- Edge Controller
- reComputer Industrial R21xx
- Flash OS
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /ja/recomputer_industrial_r21xx_flash_os
last_update:
  date: 09/28/2025
  author: Nolan Chen
---
# reComputer Industrial R21xx Flash OS

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R21xx シリーズは Raspberry Pi CM5 と Hailo-8 AI アクセラレータを搭載し、このコンパクトなエッジ AI システムは、リアルタイムマルチチャンネル映像処理のために 26 TOPS を提供します。クアッドコア Cortex-A76 CPU、最大 16GB RAM、64GB eMMC、および多様なインターフェースにより、産業用 AI アプリケーションへのシームレスな統合を保証します。

## ハードウェア要件

以下のハードウェアを準備する必要があります

- reComputer Industrial R21xx x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- イーサネットケーブル x 1
- 電源アダプタ（12V-24V）BYO

## ソフトウェア要件

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## OS のフラッシュ

### Windows ホストコンピュータの場合

- **ステップ 1.** 以下のリンクをクリックしてデバイスの[イメージファイル](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)をダウンロードします
最後のものを選択し、日付リンクをクリックしてダウンロードします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_1.png" style={{width:800, height:'auto'}}/></div>

- **ステップ 2.** **[こちら](https://www.raspberrypi.org/software/)**から **Raspberry Pi Imager** ソフトウェアをダウンロードします

- **ステップ 3.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 5.** **CHOOSE OS** をクリックし、ダウンロードしたイメージファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_5.png" alt="pir" width="800" height="auto"/></p>

成功するまでイメージの書き込みを続けます。

USB-C ポートを抜き、再度ブートボタンを押し、電源をオン/オフします。システムに正常にログインできれば、イメージが正常に書き込まれ、正常に使用できます。

### MAC ホストコンピュータの場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開いて ```brew -V``` と入力し、正しい homebrew 環境がセットアップされているかを確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **ステップ 1.** [このリンク](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **ステップ 2.** **Raspberry Pi Imager** アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

ここで**ホスト名の設定、SSH の有効化、パスワードの設定、wifi の設定、ローカル設定の設定**などができます

- **ステップ 4.** **CHOOSE OS** をクリックして、お好みの OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**注意：** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 5.** **CHOOSE STORAGE** をクリックします

- **ステップ 6.** 最後に、**WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="800" height="auto"/></p>

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
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

ここで**ホスト名の設定、SSH の有効化、パスワードの設定、wifi の設定、ローカル設定の設定**などができます

- **ステップ 5.** **CHOOSE OS** をクリックして、お好みの OS を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**注意：** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 6.** **CHOOSE STORAGE** をクリックして、接続された eMMC ドライブを選択します

- **ステップ 7.** 最後に、**NEXT** と **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## NVME からのブート

### EEPROM の更新

*この方法は SSD を持っており、emmc でデバイスを正常にブートした場合に機能します。システムが最新の Raspberry Pi システム（Bookworm 以降）であり、RPi 5 ファームウェアが 2023-12-06（12月6日）以降に更新されていることを確認してください。そうでなければ NVME 関連の設定を認識しない可能性があります。*

**ステップ 1**：Raspberry Pi システムが最新（Bookworm 以降）であることを確認し、以下のコマンドを入力して RPi 5 ファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

`Advanced Options` まで下にスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

`Bootloader Version` まで下にスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

最後に `Latest` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

ここで `No` を選択します - `latest` ブートローダーが必要です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

`Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**ステップ 2**：メイン画面で **Applications** =>**Accessories** =>**SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、以下の図に示すように OS を NVME SSD にコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### Raspberry Pi を NVMe SSD からブートするように設定する

SD カードスロットに簡単にアクセスできる場合は、Pi の電源を切り、SD カードを取り出すことができます。（すべてが期待通りに動作している場合）次回起動時に NVMe ドライブから自動的にブートするはずです。SD カードをそのままにして NVMe からブートしたい場合は、ブート順序を変更する必要があります。

**ステップ 1**：以下のコマンドを入力します：

```shell
  sudo raspi-config
```

`Advanced Options` まで下にスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="800" height="auto" /></div>

**ステップ 2**：`Boot Order` まで下にスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="800" height="auto" /></div>

**ステップ 3**：`NVMe/USB Boot` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="800" height="auto" /></div>

設定が確認されます。Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**ステップ 4**：`Back` を選択するか Esc キーを押して最初の画面に戻ります。その後、右カーソルキーを使用して Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

今すぐ再起動するかどうか尋ねられます。`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>

## Ubuntu を NVME にフラッシュ

### 最初：SD カードで EEPROM を更新

この[リンク](https://wiki.seeedstudio.com/ja/r2000_series_getting_start/#update-eeprom)を参照してください。

NVMe ブート順序を最高優先度に設定するには、以下のコマンドを使用します：

```
sudo rpi-eeprom-config --edit
```

その後、以下のように rpi-eeprom-config を変更します：

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

`Ctrl+X` を使用して `y` を入力し、結果を保存します。結果は以下の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="800" height="auto" /></div>

### 2番目：Ubuntu を NVMe に書き込み

Raspberry Pi Imager を開きます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="800" height="auto" /></div>

Ubuntu OS を選択します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="800" height="auto" /></div>

最後に、`Next` をクリックしてフラッシュプロセスが完了するまで待ちます。

### 3番目：OS ファイルを置き換え

この[リンク](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)で `pcie-fix.dtbo` をインストールします

以下のように pcie-fix.dtbo を /overlays ファイルにコピーします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="800" height="auto" /></div>

`config.txt` を変更し、以下のようにファイルの最後に `dtoverlay=pcie-fix` を追加します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="800" height="auto" /></div>

その後、`Ctrl+X` を使用して `y` を入力し、このファイルを保存します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
