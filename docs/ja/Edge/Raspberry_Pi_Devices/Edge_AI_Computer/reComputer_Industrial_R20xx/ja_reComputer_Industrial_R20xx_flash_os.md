---
description: reComputer Industrial R20xx Flash OS
title: reComputer Industrial R20xx Flash OS
keywords:
- Raspberry pi
- Edge Controller
- reComputer Industrial R20xx
- Flash OS
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg
slug: /ja/recomputer_industrial_r2000_flash_os
last_update:
  date: 09/28/2025
  author: Nolan Chen
---
# reComputer Industrial R20xx Flash OS

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R20xxシリーズは、Raspberry Pi CM5とHailo-8 AIアクセラレータを搭載し、このコンパクトなエッジAIシステムは、リアルタイムマルチチャンネル映像処理のために26 TOPSを提供します。クアッドコアCortex-A76 CPU、最大16GB RAM、64GB eMMC、および多様なインターフェースにより、産業用AIアプリケーションへのシームレスな統合を保証します。

## ハードウェア要件

以下のハードウェアを準備する必要があります

- reComputer Industrial R20xx x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- イーサネットケーブル x 1
- 電源アダプタ（12V-24V）BYO

## ソフトウェア要件

- [usbbootツール](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## OSのフラッシュ

### Windowsホストコンピュータの場合

- **ステップ1.** 以下のリンクをクリックしてデバイスの[イメージファイル](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)をダウンロードします
最後のものを選択し、日付リンクをクリックしてダウンロードします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_1.png" style={{width:800, height:'auto'}}/></div>

- **ステップ2.** **[こちら](https://www.raspberrypi.org/software/)**から**Raspberry Pi Imager**ソフトウェアをダウンロードします

- **ステップ3.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **ステップ4.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

- **ステップ5.** **CHOOSE OS**をクリックし、ダウンロードしたイメージファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_5.png" alt="pir" width="800" height="auto"/></p>

成功するまでイメージの書き込みを続けます。

USB-Cポートを抜き、再度ブートボタンを押し、電源をオン/オフします。システムに正常にログインできれば、イメージが正常に書き込まれ、正常に使用できます。

### MACホストコンピュータの場合

:::caution
**以下の手順を進める前に[homebrew](https://brew.sh/)をインストールする必要があります。**
ターミナルを開いて```brew -V```と入力し、正しいhomebrew環境がセットアップされているかを確認してください。インストールされているhomebrew環境のバージョンが表示されるはずです。
:::

- **ステップ1.** [このリンク](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)にアクセスして**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします

- **ステップ2.** **Raspberry Pi Imager**アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **ステップ3.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ローカル設定**などを行うことができます

- **ステップ4.** **CHOOSE OS**をクリックし、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**注意：** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などの他のOSを選択することができます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ5.** **CHOOSE STORAGE**をクリックします

- **ステップ6.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="800" height="auto"/></p>

### Linuxホストコンピュータの場合

- **ステップ1.** snapをダウンロードします

```sh
sudo apt install snap
```

- **ステップ2.** **rpi-imager**をダウンロードします

```sh
snap install rpi-imager
```

- **ステップ3.** Raspberry Pi Imagerソフトウェアを開きます

```sh
rpi-imager
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="800" height="auto"/></p>

- **ステップ4.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ローカル設定**などを行うことができます

- **ステップ5.** **CHOOSE OS**をクリックし、お好みのOSを選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**注意：** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などの他のOSを選択することができます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ6.** **CHOOSE STORAGE**をクリックし、接続されたeMMCドライブを選択します

- **ステップ7.** 最後に、**NEXT**と**YES**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## NVMEからの起動

### EEPROMの更新

*この方法は、SSDを持っており、emmcでデバイスを正常に起動した場合に機能します。システムが最新のRaspberry Piシステム（Bookworm以降）であり、RPi 5ファームウェアが2023-12-06（12月6日）以降に更新されていることを確認してください。そうでなければ、NVME関連の設定を認識しない可能性があります。*

**ステップ1**：Raspberry Piシステムが最新（Bookworm以降）であることを確認し、以下のコマンドを入力してRPi 5ファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

`Advanced Options`まで下にスクロールしてEnterを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

`Bootloader Version`まで下にスクロールしてEnterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

最後に`Latest`を選択し、Enterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

ここで`No`を選択します - `latest`ブートローダーが必要です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

`Finish`を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

再起動を求められた場合は、`Yes`を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**ステップ2**：メイン画面で**Applications** =>**Accessories** =>**SD Card Copier**をクリックし、**SD Card Copier**プログラムを実行し、以下の図に示すようにOSをNVME ssdにコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### Raspberry PiをNVMe SSDから起動するように設定する

SDカードスロットに簡単にアクセスできる場合は、Piの電源を切り、SDカードを取り出すことができます。（すべてが期待通りに動作している場合）次回起動時に自動的にNVMeドライブから起動するはずです。ただし、SDカードをそのままにしてNVMeから起動したい場合は、起動順序を変更する必要があります。

**ステップ1**：以下のコマンドを入力します：

```shell
  sudo raspi-config
```

`Advanced Options`まで下にスクロールしてEnterを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="800" height="auto" /></div>

**ステップ2**：`Boot Order`まで下にスクロールしてEnterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="800" height="auto" /></div>

**ステップ3**：`NVMe/USB Boot`を選択してEnterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="800" height="auto" /></div>

設定が確認されます。Enterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**ステップ 4**：`Back`を選択するかEscキーを押して最初の画面に戻ります。その後、右カーソルキーを使用してFinishに移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

今すぐ再起動するかどうか尋ねられます。`Yes`をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>

## NVMEにubuntuをフラッシュする

### 最初：SDカードでEEPROMを更新する

この[リンク](https://wiki.seeedstudio.com/ja/r2000_series_getting_start/#update-eeprom)を参照してください。

NVMeブート順序を最高優先度に設定するには、以下のコマンドを使用します：

```
sudo rpi-eeprom-config --edit
```

その後、rpi-eeprom-configを以下のように変更します：

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

`Ctrl+X`を使用して`y`を入力し、結果を保存します。結果は以下の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="800" height="auto" /></div>

### 2番目：NVMeにUbuntuを書き込む

Raspberry Pi Imagerを開きます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="800" height="auto" /></div>

Ubuntu osを選択します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="800" height="auto" /></div>

最後に、`Next`をクリックしてフラッシュプロセスが完了するまで待ちます。

### 3番目：OSファイルを置き換える

この[リンク](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)で`pcie-fix.dtbo`をインストールします

pcie-fix.dtboを以下のように/overlaysファイルにコピーします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="800" height="auto" /></div>

`config.txt`を変更し、以下のようにファイルの最後に`dtoverlay=pcie-fix`を追加します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="800" height="auto" /></div>

その後、`Ctrl+X`を使用して`y`を入力し、このファイルを保存します。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
