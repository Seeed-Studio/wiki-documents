---
description: reComputer R1000 OSをフラッシュする方法
title: reComputer R1000 OSをフラッシュする方法
keywords:
  - Edge
  - reComputer R1000
  - OSをフラッシュ
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01_1.webp
slug: /ja/recomputer_r1000_flash_OS
last_update:
  date: 05/15/2025
  author: Parker Hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

#  reComputer R1000 Raspbian OSをeMMCにフラッシュする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000エッジIoTコントローラーは、高性能なRaspberry Pi CM4プラットフォームを基盤としており、クアッドコアA72プロセッサを搭載し、最大8GB RAMおよび32GB eMMCをサポートします。柔軟に構成可能なデュアルイーサネットインターフェースを備え、BACnet、Modbus RTU、Modbus TCP/IP、KNXプロトコルをサポートする3つの絶縁RS485チャネルも含まれています。
強力なIoTネットワーク通信機能を備えたR1000シリーズは、4G、LoRa®、Wi-Fi/BLEなどの複数の無線通信オプションをサポートし、対応する無線ゲートウェイとして柔軟に構成できます。このコントローラーは、リモートデバイス管理、エネルギー管理、スマートビルディング分野のさまざまなシナリオに適しています。

## ハードウェア要件

以下のハードウェアを準備してください：

- reComputer R1000 x 1
- ホストコンピュータ (Windows/Mac/Linux) x 1
- イーサネットケーブル x 1
- 電源アダプタ (12V-24V) BYO
- USB Type-Cケーブル x 1 

## ソフトウェア要件

- [usbbootツール](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imagerアプリ](https://www.raspberrypi.com/software/)

## NVMEからの起動

### NVMEにOSをフラッシュする

この[リンク](https://wiki.seeedstudio.com/ja/recomputer_r1000_flash_OS/#steps-for-flashing-raspbian-os)を参照し、その後M.2スロットに挿入してください。

### eMMCから起動してEEPROMを更新する

以下のコマンドを使用してファイルを開きます：
```
sudo nano /etc/default/rpi-eeprom-update
```

以下のように変更してください：

```
FIRMWARE_RELEASE_STATUS="latest"
RPI_EEPROM_USE_FLASHROM=1
CM4_ENABLE_RPI_EEPROM_UPDATE=1
```
`Ctrl`+`x`を使用してファイルを保存します。

以下のコマンドを使用してファイルを開きます：
```
sudo nano /boot/firmware/config.txt
```
`[cm4]`部分を以下のように変更してください：

```
[cm4]
dtparam=spi=on
dtoverlay=audremap
dtoverlay=spi-gpio40-45
```
`Ctrl`+`x`を使用してファイルを保存し、以下のコマンドを使用してマシンを再起動します：
```
sudo reboot
```
その後、以下のコマンドを使用してEEPROMを更新します：

```
sudo rpi-eeprom-update -a
```
出力は以下のようになります：

```
recomputer@reComputer-R100x:~ $ sudo rpi-eeprom-update -a
BOOTLOADER: up to date
   CURRENT: Tue Feb 11 05:00:13 PM UTC 2025 (1739293213)
    LATEST: Tue Feb 11 05:00:13 PM UTC 2025 (1739293213)
   RELEASE: latest (/usr/lib/firmware/raspberrypi/bootloader-2711/latest)
            Use raspi-config to change the release.

  VL805_FW: Using bootloader EEPROM
     VL805: up to date
   CURRENT: 
    LATEST: 
```

### 最新のEEPROMをフラッシュし、起動順序を変更する

以下のコマンドを使用してraspi-configを開きます：

```
sudo raspi-config 
```
`Advanced Options`までスクロールし、Enterキーを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version`までスクロールし、Enterキーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に`Latest`を選択し、Enterキーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここでは`No`を選択してください - `latest`ブートローダーを使用します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

`Finish`を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes`を選択してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

その後、以下のコマンドを使用して起動順序を変更します：

```
sudo -E rpi-eeprom-config --edit
```
ファイルを以下のように変更してください：

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
BOOT_ORDER=0xf416
```
`Ctrl`+`x`を使用してファイルを保存し、その後マシンを再起動します。

## Raspbian OS のフラッシュ手順

> **注意:** Seeed によってパッケージ化された最新のシステムイメージには、適切なドライバが含まれています: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **ステップ 1.** 以下の図に従って、スイッチが `Flash mode` に設定されていることを確認してください:

<div class="table-center">

| スイッチ位置                                                | モード       | 説明            | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード   | eMMC から起動  | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード | USB から起動   | High      |

</div>

- **ステップ 2.** USB Type-C データケーブルを使用して、reComputer R1000 の Type-C ポートに接続してください。以下の画像を参照してください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/33.png" /></div>

- **ステップ 3.** 電源コードを電源供給装置から reComputer R1000 の電源ポートに接続してください。

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img 
        width="100" 
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" 
        style={{ transform: 'rotate(90deg)' }} 
    />
</div>

<br></br>

:::note
電源ソリューションは逆極性保護のためにブリッジ整流ダイオードを利用しており、AC および DC 入力の両方に対応しています。これにより、電源供給の正極と負極がどのように接続されても回路が損傷することはありません。ブリッジ整流器を使用することで、入力 DC の極性に関係なく出力電圧の極性が固定され、効果的な逆極性保護が提供されます。
:::

次に、ホストコンピュータでのソフトウェア設定に進みます。使用するオペレーティングシステムに応じて以下の手順に従ってください。

### Windows の場合

- **ステップ 1.** 必要なドライバとブートツールをインストールするために、**[こちら](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** をクリックして **rpiboot セットアップインストーラー** をダウンロードしてください。

- **ステップ 2.** USB Type-C ケーブルを使用して reComputer R1000 を PC に接続してください。

Windows がハードウェアを検出し、必要なドライバをインストールします。

- **ステップ 3.** 先ほどインストールした **rpiboot** ツールを検索して開いてください。

- **ステップ 4.** **ファイルエクスプローラー** を開くと、Computer Module 4 の eMMC が **USB マスストレージデバイス** として表示されます。

- **ステップ 5.** **[こちら](https://www.raspberrypi.org/software/)** から **Raspberry Pi Imager** ソフトウェアをダウンロードしてください。

- **ステップ 6.** Raspberry Pi Imager ソフトウェアを開いてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 7.** キーボードで **CTRL + SHIFT + X** を押して **詳細オプション** ウィンドウを開いてください。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、WiFi の設定、ロケール設定** などを行うことができます。

:::note
システムにはユーザー名とパスワードがプリセットされています。ログイン時にデフォルトのユーザー名を "**recomputer**"、デフォルトのパスワードを "**12345678**" に設定してください。異なる資格情報を設定して問題が発生した場合、最初のバッチの reComputer R1000 を購入した場合は OS を再フラッシュしてください。
:::

- **ステップ 8.** **CHOOSE OS** をクリックして、希望の OS を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64-bit Ubuntu** などの他の OS を選択するには、**Other general purpose OS** に移動してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、以下のリンクを使用してイメージファイルをダウンロードできます:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 9.** **CHOOSE STORAGE** をクリックして、接続された eMMC ドライブを選択してください。

- **ステップ 10.** 最後に **WRITE** をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 11.** **ブートモードスイッチ** を **通常モード** の位置に戻してください。

これで **[こちら](#install-drivers)** にスキップできます。

### MAC の場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開き、```brew -v``` と入力して正しい homebrew 環境が設定されているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **ステップ 1.** **usbboot** リポジトリをクローンしてください。

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 2.** **libusb** をインストールしてください。

```sh
brew install libusb
```

- **ステップ 3.** **pkg-config** をインストールしてください。

```sh
brew install pkg-config
```

- **ステップ 4.** make を使用してビルドしてください。

```sh
make
```

- **ステップ 5.** バイナリを実行してください。

```sh
sudo ./rpiboot
```

- **ステップ 6.** USB Type-C ケーブルを使用して reComputer R1000 を Mac コンピュータに接続してください。

- **ステップ 7.** [このリンク](https://www.raspberrypi.org/software/) にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールしてください。

- **ステップ 8.** **Raspberry Pi Imager** アプリケーションを開いてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで **CTRL + SHIFT + X** を押して **詳細オプション** ウィンドウを開いてください。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの構成、ロケール設定の設定**などを行うことができます。
:::note
システムには既定のユーザー名とパスワードがプリセットされています。ログイン時には既定のユーザー名を "**recomputer**"、既定のパスワードを "**12345678**" に設定してください。異なる資格情報を設定して問題が発生した場合、reComputer R1000 の初回購入分の場合はOSを再フラッシュしてください。
:::

- **ステップ 10.** **CHOOSE OS** をクリックし、希望するOSを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64-bit Ubuntu** などの他のOSを選択するには、**Other general purpose OS** に移動してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、以下のリンクからイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 11.** **CHOOSE STORAGE** をクリックし、接続されたeMMCドライブを選択します。

- **ステップ 12.** 最後に **WRITE** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ちます。

- **ステップ 13.** **Boot Modeスイッチ** を **Normal mode** の位置に戻します。

これで **[こちら](#install-drivers)** にスキップできます。


### Linuxの場合

Gitを使用して **rpiboot** のソースコードを取得するため、Gitがインストールされていることを確認してください。

- **ステップ 1.** **Terminal** ウィンドウを開き、以下を入力して **パッケージリスト** を更新します。

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のコマンドで **Git** をインストールします。

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **ステップ 3.** Gitは日付が正しく設定されていない場合にエラーを出すことがあります。以下を入力して修正してください。

```sh
sudo date MMDDhhmm
```

**注意:** **MM** は月、**DD** は日付、**hh** と **mm** はそれぞれ時間と分を表します。

- **ステップ 4.** **usbboot** ツールのリポジトリをクローンします。

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 5.** **usbboot** ツールをビルドしてインストールします。

```sh
make
```

- **ステップ 6.** reComputer R1000 をUSB Type-CケーブルでPCに接続します。

- **ステップ 7.** **usbboot** ツールを実行し、接続を待機します。

```sh
sudo ./rpiboot
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 8.** Snapをダウンロードします。
```sh
sudo apt install snap
```

- **ステップ 9.** **rpi-imager** をダウンロードします。
```sh
snap install rpi-imager
```

- **ステップ 10.** Raspberry Pi Imagerソフトウェアを開きます。

```sh
rpi-imager
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます。

ホスト名の設定、パスワードの設定、Wi-Fiの構成、ロケール設定を行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

SSHを有効化します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの構成、ロケール設定の設定**などを行うことができます。
:::note
システムには既定のユーザー名とパスワードがプリセットされています。ログイン時には既定のユーザー名を "**recomputer**"、既定のパスワードを "**12345678**" に設定してください。異なる資格情報を設定して問題が発生した場合、reComputer R1000 の初回購入分の場合はOSを再フラッシュしてください。
:::

- **ステップ 11.** **CHOOSE OS** をクリックし、希望するOSを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意:** **64-bit Ubuntu** などの他のOSを選択するには、**Other general purpose OS** に移動してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、以下のリンクからイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 12.** **CHOOSE STORAGE** をクリックし、接続されたeMMCドライブを選択します。

- **ステップ 13.** 最後に **NEXT** と **YES** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ちます。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 14.** **Boot Modeスイッチ** を **Normal mode** の位置に戻します。

## ドライバのインストール

### SSH を使用して reComputer R1000 にアクセスする

:::note

以下の手順では、基本的な Linux コマンドラインの知識が必要です。コーヒーを用意して準備を整えてください。

:::

上記の OS フラッシュ手順に従うと、reComputer R1000 は `raspberrypi.local` というホスト名で SSH が有効になっているはずです。

次に、reComputer R1000 とホストコンピュータが同じネットワーク上にあるルーターにイーサネットケーブルを接続してください。

:::tip

reComputer R1000 がホストコンピュータと同じネットワーク上にあるかを確認するには、`ping raspberrypi.local` を使用できます。

以下のような出力が表示されれば、両方のデバイスが同じネットワーク上にあることを意味します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Windowsの場合

- **ステップ 1.** **コマンドプロンプト**を開き、以下を入力します

```sh
ssh pi@raspberrypi.local
```

- **ステップ 2.** プロンプトに対して **yes** と入力します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 3.** 以下のパスワードを入力します

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OS に正常にログインできた場合、以下のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac/Linuxの場合

- **ステップ 1.** コンピュータで **ターミナル** を開き、以下を入力します

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **ステップ 2.** 以下のメッセージに対して **yes** と入力します

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 3.** パスワードを求められたら、以下を入力します

```sh
# user のパスワード
raspberry
```

- **ステップ 4.** Raspberry Pi OS に正常にログインできた場合、以下のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 新しい Raspbian OS をフラッシュした後の reComputer R1000 ドライバのインストール

reComputer R1000 には必要なドライバがあらかじめインストールされているため、追加のドライバをインストールする必要はありません。ただし、自分で新しい OS をフラッシュした場合は、必要なドライバを別途インストールする必要があります。

:::tip

**32ビット OS ドライバをインストールする場合、以下の手順を慎重に実行してください：**

reComputer R1000 にプリインストールされているオペレーティングシステムは 64 ビットです。32 ビット OS をインストールしたい場合は、以下の方法で DTS ドライバをインストールしてください。

[**SSH を使用して reComputer R1000 にアクセスする**](#access-recomputer-r1000-via-ssh) 手順に従い、次に以下のコマンドを入力してください：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```
その後、[**新しい Raspbian OS をフラッシュした後のドライバのインストール手順**](#install-recomputer-r1000-drivers-after-flashing-new-raspbian-os) を続行してください。

:::

- **ステップ 1.** 上記の手順で reComputer R1000 に接続した SSH シェルで以下のリポジトリをクローンします

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **ステップ 2.** リポジトリに移動します

```sh
cd seeed-linux-dtoverlays
```

- **ステップ 3.** 以下を入力してドライバをインストールします

```sh
sudo ./scripts/reTerminal.sh --device reComputer-R100x
```

<!-- ドライバが正常にインストールされた場合、以下のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **ステップ 4.** reComputer R1000 を再起動します

```sh
sudo reboot
```

このプロセスにより、ファームウェアを更新する前にドライバが最新の状態になります。

reComputer R1000 V1.0 の場合、再起動後に `/boot/firmware/config.txt` ファイルを変更する必要があります。以下のコマンドを入力してください：

```shell
sudo nano /boot/firmware/config.txt
```

ファイルの最終内容を以下のように変更します：

```shell
enable_uart=1
dtoverlay=dwc2,dr_mode=host
dtoverlay=vc4-kms-v3d
dtoverlay=reComputer-R100x,uart2
```

その後、再起動します：

```shell
sudo reboot
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>