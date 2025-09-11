---
description: reComputer AI Industrial R2000 OSのフラッシュ
title: reComputer AI Industrial R2000 OSのフラッシュ
keywords:
  - Edge
  - reComputer AI Industrial R2000
  - OSのフラッシュ
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01_1.webp
slug: /ja/recomputer_ai_industrial_r2000_flash_os
last_update:
  date: 05/15/2025
  author: Jiahao Li
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

#  reComputer AI Industrial R2000 OSのフラッシュ

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

reComputer AI Industrial R2000シリーズは、Raspberry Pi CM5とHailo-8 AIアクセラレータを搭載しており、このコンパクトなエッジAIシステムは、リアルタイムのマルチチャネルビジョン処理のために26 TOPSを提供します。クアッドコアCortex-A76 CPU、最大16GB RAM、64GB eMMC、および多用途なインターフェースを備え、産業用AIアプリケーションへのシームレスな統合を実現します。

## ハードウェア要件

以下のハードウェアを準備してください：

- reComputer AI Industrial R2000 x 1
- ホストコンピュータ (Windows/Mac/Linux) x 1
- イーサネットケーブル x 1
- 電源アダプタ (12V-24V) BYO
- USB Type-Cケーブル x 1 

## ソフトウェア要件

- [usbbootツール](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imagerアプリ](https://www.raspberrypi.com/software/)

## OSのフラッシュ

### Windowsホストコンピュータの場合

- **ステップ1.** **[こちら](https://www.raspberrypi.org/software/)** から**Raspberry Pi Imager**ソフトウェアをダウンロードします。

- **ステップ2.** Raspberry Pi Imagerソフトウェアを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ3.** キーボードで**CTRL + SHIFT + X**を押して、**詳細オプション**ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **ステップ4.** **CHOOSE OS**をクリックして、希望のOSを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64-bit Ubuntu**などの他のOSを選択するには、**Other general purpose OS**に移動してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、以下のリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ5.** **CHOOSE STORAGE**をクリックします。

- **ステップ6.** 最後に、**WRITE**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

### MACホストコンピュータの場合

:::caution
**以下の手順を進める前に[homebrew](https://brew.sh/)をインストールする必要があります。**
ターミナルを開き、```brew -V```と入力して、正しいhomebrew環境が設定されているか確認してください。インストールされているhomebrewのバージョンが表示されるはずです。
:::

- **ステップ1.** **[こちらのリンク](https://www.raspberrypi.org/software/)** から**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします。

- **ステップ2.** **Raspberry Pi Imager**アプリケーションを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ3.** キーボードで**CTRL + SHIFT + X**を押して、**詳細オプション**ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの構成、ローカル設定**などを行うことができます。

- **ステップ4.** **CHOOSE OS**をクリックして、希望のOSを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64-bit Ubuntu**などの他のOSを選択するには、**Other general purpose OS**に移動してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、以下のリンクを使用してイメージファイルをダウンロードできます：

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

以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ4.** キーボードで**CTRL + SHIFT + X**を押して、**詳細オプション**ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの構成、ローカル設定**などを行うことができます。

- **ステップ5.** **CHOOSE OS**をクリックして、希望のOSを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他のOSを選択することができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、以下のリンクを使用してイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 6.** **CHOOSE STORAGE** をクリックし、接続された eMMC ドライブを選択します。

- **ステップ 7.** 最後に、**NEXT** と **YES** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## NVMEからの起動

### EEPROMの更新

*この方法は、SSDを持っていて、eMMCでデバイスを正常に起動できた場合に機能します。システムが最新のRaspberry Piシステム（Bookworm以降）であり、RPi 5のファームウェアが2023年12月6日（12月6日）以降に更新されていることを確認してください。そうでない場合、NVME関連の設定を認識しない可能性があります。*

**ステップ 1**: Raspberry Piシステムが最新であることを確認し（Bookworm以降）、以下のコマンドを入力してRPi 5ファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # 2023年12月以降でない場合は、以下のコマンドをターミナルに入力して設定ツールを開始します
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

**ステップ 2**：メイン画面で **Applications** => **Accessories** => **SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、OSをNVME SSDにコピーします。以下の図のように操作します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Raspberry PiをNVMe SSDから起動する設定

SDカードスロットに簡単にアクセスできる場合は、PiをオフにしてSDカードを取り外し、（すべてが期待通りに動作していれば）次回起動時に自動的にNVMeドライブから起動するはずです。ただし、SDカードをそのままにしてNVMeから起動したい場合は、起動順序を変更する必要があります。

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

**ステップ 4**: `Back` を選択するか、Escキーを押して最初の画面に戻ります。その後、右カーソルキーを使用してFinishに移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

再起動するかどうかを尋ねられます。`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## NVMEにUbuntuをフラッシュする

### 第一段階: SDカードでEEPROMを更新する

こちらの[リンク](https://wiki.seeedstudio.com/ja/r2000_series_getting_start/#update-eeprom)を参照してください。

NVMeのブート順序を最優先に設定するには、以下のコマンドを使用します:

```
sudo rpi-eeprom-config --edit
```

その後、以下のようにrpi-eeprom-configを変更してください:

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

`Ctrl+X`を押して、`y`を入力して結果を保存します。結果は以下のようになります:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### 第二段階: NVMeにUbuntuを焼き込む

Raspberry Pi Imagerを開きます:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Ubuntu OSを選択します:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

最後に、`Next`をクリックしてフラッシュプロセスが完了するのを待ちます。

### 第三段階: OSファイルを置き換える

この[リンク](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)から`pcie-fix.dtbo`をインストールしてください。

`pcie-fix.dtbo`を以下のように/overlaysフォルダにコピーします:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

`config.txt`を修正し、ファイルの末尾に`dtoverlay=pcie-fix`を追加してください:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

その後、`Ctrl+X`を押して、`y`を入力してこのファイルを保存します。

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>