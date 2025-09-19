---
description: reComputer R1000 Flash OS
title: reComputer R1000 Flash OS
keywords:
  - Edge
  - reComputer R1000
  - Flash OS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01_1.webp
slug: /ja/recomputer_r1000_flash_OS
last_update:
  date: 10/25/2024
  author: Parker Hu
---
# reComputer R1000 Raspbian OS to eMMC

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000エッジIoTコントローラーは、高性能なRaspberry Pi CM4プラットフォーム上に構築されており、クアッドコアA72プロセッサを搭載し、最大8GB RAMと32GB eMMCをサポートします。柔軟に設定可能なデュアルイーサネットインターフェースを装備し、BACnet、Modbus RTU、Modbus TCP/IP、KNXプロトコルをサポートする3つの絶縁されたRS485チャンネルも含まれています。
堅牢なIoTネットワーク通信機能により、R1000シリーズは4G、LoRa®、Wi-Fi/BLEを含む複数のワイヤレス通信オプションをサポートし、対応するワイヤレスゲートウェイとして機能するための柔軟な設定が可能です。このコントローラーは、リモートデバイス管理、エネルギー管理、およびスマートビルディング分野のその他様々なシナリオに適しています。

## ハードウェア要件

以下のハードウェアを準備する必要があります

- reComputer R1000 x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- イーサネットケーブル x 1
- 電源アダプタ（12V-24V）BYO
- USB Type-Cケーブル x 1

## ソフトウェア要件

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## NVMEからの起動

### NVMEへのOSフラッシュ

この[リンク](https://wiki.seeedstudio.com/ja/recomputer_r1000_flash_OS/#steps-for-flashing-raspbian-os)を参照し、その後M.2スロットに挿入してください。

### eMMCからの起動とeepromの更新

以下のようなコマンドを使用してファイルを開きます

```
sudo nano /etc/default/rpi-eeprom-update
```

以下のように修正してください：

```
FIRMWARE_RELEASE_STATUS="latest"
RPI_EEPROM_USE_FLASHROM=1
CM4_ENABLE_RPI_EEPROM_UPDATE=1
```

`Ctrl`+`x`を使用してファイルを保存します。

以下のようなコマンドを使用してファイルを開きます

```
sudo nano /boot/firmware/config.txt
```

以下のように `[cm4]` 部分を修正してください：

```
[cm4]
dtparam=spi=on
dtoverlay=audremap
dtoverlay=spi-gpio40-45
```

`Ctrl`+`x`を使用してファイルを保存し、以下のコマンドでマシンを再起動します：

```
sudo reboot
```

Then update the eeprom use command like below:

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

### Flash the lastest eeprom and modify the boot order

Use command like below to open the raspi-config:

```
sudo raspi-config 
```

`Advanced Options` まで下にスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version` まで下にスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に `Latest` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここでは `No` を選択します - `latest` ブートローダーが必要です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

`Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

次に、以下のようなコマンドでブート順序を変更します：

```
sudo -E rpi-eeprom-config --edit
```

以下のようにファイルを修正してください：

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
BOOT_ORDER=0xf416
```

`Ctrl`+`x`を使用してファイルを保存し、マシンを再起動してください。

## Raspbian OSのフラッシュ手順

> **注意:** Seeedによってパッケージ化された最新のシステムイメージには、適切なドライバが含まれています：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **ステップ1.** 以下の図に従って、スイッチが`フラッシュモード`に設定されていることを確認してください：

<div class="table-center">

| スイッチ位置                                              | モード        | 説明    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード | eMMCから起動 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード  | USBから起動  | High      |

</div>

- **ステップ2.** USB Type-Cデータケーブルを使用して、reComputer R1000のType-Cポートに接続してください。下の画像に示すとおりです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/33.png" /></div>

- **ステップ3.** 電源アダプターの電源コードをreComputer R1000の電源ポートに接続してください。

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img
        width="100"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png"
        style={{ transform: 'rotate(90deg)' }}
    />
</div>

<br></br>

:::note
電源ソリューションは逆極性保護のためにブリッジ整流ダイオードを使用し、ACとDCの両方の入力に対応しています。これにより、電源の正極と負極の端子がどのように接続されても、回路が損傷することはありません。ブリッジ整流器を使用することで、入力DC極性に関係なく出力電圧極性が固定され、効果的な逆極性保護を提供します。
:::

次に、ホストコンピューターでのソフトウェアセットアップに進みましょう。お使いのオペレーティングシステムに応じて手順に従ってください。

### Windows用

- **ステップ1.** **[こちら](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)**をクリックして**rpibootセットアップインストーラー**をダウンロードし、必要なドライバーとブートツールをインストールしてください。

- **ステップ2.** USB Type-CケーブルでreComputer R1000をPCに接続してください。

Windowsがハードウェアを検出し、必要なドライバーをインストールします。

- **ステップ3.** 先ほどインストールした**rpiboot**ツールを検索して開いてください。

- **ステップ4.** **ファイルエクスプローラー**を開くと、Compute Module 4のeMMCが**USBマスストレージデバイス**として表示されます。

- **ステップ5.** **[こちら](https://www.raspberrypi.org/software/)**から**Raspberry Pi Imager**ソフトウェアをダウンロードしてください。

- **ステップ6.** Raspberry Pi Imagerソフトウェアを開いてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ7.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開いてください。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、WiFiの設定、ロケール設定**などを行うことができます。

:::note
システムには事前設定されたユーザー名とパスワードがあります。ログイン時はデフォルトのユーザー名を「**recomputer**」、デフォルトのパスワードを「**12345678**」に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1000の初回バッチを購入された場合はOSを再フラッシュしてください。
:::

- **ステップ8.** **CHOOSE OS**をクリックして、お好みのOSを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などの他のOSを選択することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ9.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択してください。

- **ステップ10.** 最後に、**WRITE**をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ11.** **Boot Modeスイッチ**を**Normalモード**の位置に戻してください。

これで**[こちら](#install-drivers)**にスキップできます。

### MAC用

:::caution
**以下の手順を進める前に[homebrew](https://brew.sh/)をインストールする必要があります。**
ターミナルを開いて```brew -v```と入力し、正しいhomebrew環境がセットアップされているかを確認してください。インストールされているhomebrew環境のバージョンが表示されるはずです。
:::

- **ステップ1.** **usbboot**リポジトリをクローンしてください。

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 2.** **libusb** をインストールする

```sh
brew install libusb
```

- **ステップ 3.** **pkg-config** をインストールする

```sh
brew install pkg-config
```

- **Step 4.** Build using make

```sh
make
```

- **Step 5.** Run the binary

```sh
sudo ./rpiboot
```

- **Step 6.** USB Type-Cケーブルを使用してreComputer R1000をMacコンピュータに接続します

- **Step 7.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします

- **Step 8.** **Raspberry Pi Imager**アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 9.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます
:::note
システムには事前設定されたユーザー名とパスワードがあります。ログイン時はデフォルトのユーザー名を「**recomputer**」、デフォルトのパスワードを「**12345678**」に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1000の初回バッチを購入された場合はOSを再フラッシュしてください。
:::

- **Step 10.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などの他のOSを選択することもできます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 11.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **Step 12.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **Step 13.** **Boot Mode switch**を**Normal mode**の位置に戻します

これで**[こちら](#install-drivers)**にスキップできます

### Linux用

**rpiboot**のソースコードを取得するためにGitを使用しますので、Gitがインストールされていることを確認してください

- **Step 1.** **ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のコマンドで **Git** をインストールします

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **ステップ 3.** 日付が正しく設定されていない場合、Gitがエラーを出力する可能性があります。これを修正するには以下を入力してください

```sh
sudo date MMDDhhmm
```

**注意:** ここで **MM** は月、**DD** は日付、**hh** と **mm** はそれぞれ時と分です。

- **ステップ 4.** **usbboot** ツールリポジトリをクローンする

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 5.** usbbootツールをビルドしてインストールする

```sh
make
```

- **ステップ 6.** USB Type-Cケーブルを使用してreComputer R1000をPCに接続します

- **ステップ 7.** usbbootツールを実行すると、接続を待機します

```sh
sudo ./rpiboot
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 8.** snapをダウンロード

```sh
sudo apt install snap
```

- **Step 9.** Download **rpi-imager**

```sh
snap install rpi-imager
```

- **ステップ 10.** Raspberry Pi Imager ソフトウェアを開く

```sh
rpi-imager
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** キーボードで **CTRL + SHIFT + X** を押して **詳細オプション** ウィンドウを開きます

ホスト名の設定、パスワードの設定、WiFiの設定、ロケール設定を行います

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

SSHを有効にします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSHの有効化、パスワードの設定、WiFiの設定、ロケール設定** などを行うことができます
:::note
システムには事前設定されたユーザー名とパスワードがあります。ログイン時はデフォルトのユーザー名を「**recomputer**」、デフォルトのパスワードを「**12345678**」に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1000の初回バッチを購入された場合はOSを再フラッシュしてください。
:::

- **ステップ 11.** **CHOOSE OS** をクリックして、お好みのOSを選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意：** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他のOSを選択することもできます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 12.** **CHOOSE STORAGE** をクリックして、接続されたeMMCドライブを選択します

- **ステップ 13.** 最後に、**NEXT** と **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 14.** **Boot Mode switch** を **Normal mode** の位置に戻します

## ドライバーのインストール

### SSH経由でreComputer R1000にアクセス

:::note

以下の手順には基本的なLinuxコマンドラインの知識が必要です。コーヒーを用意して準備を整えてください。

:::

上記のOSフラッシュ手順に従って、reComputer R1000は `raspberrypi.local` のホスト名でSSHが有効になっているはずです。

次に、EthernetケーブルをreComputer R1000とホストコンピューターと同じネットワーク上のルーターに接続してください。

:::tip

reComputer R1000がホストコンピューターと同じネットワーク上にあるかテストするには、`ping raspberrypi.local` を使用できます

pingコマンドの後に以下の出力が表示される場合、両方のデバイスが同じネットワーク上にあることを意味します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Windows の場合

- **ステップ 1.** **コマンドプロンプト** を開いて以下を入力します

```sh
ssh pi@raspberrypi.local
```

- **ステップ 2.** プロンプトに対して **yes** と入力します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 3.** 以下のようにパスワードを入力します

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac/Linux の場合

- **ステップ 1.** コンピュータで**ターミナル**を開き、以下を入力します

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **ステップ2.** 以下のメッセージに対して **yes** と入力してください

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Step 3.** When it asks for the password, type the following

```sh
# password for user
raspberry
```

- **Step 4.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 新しいRaspbian OSをフラッシュした後のreComputer R1000ドライバーのインストール

reComputer R1000には必要なドライバーがあらかじめインストールされているため、追加のドライバーをインストールする必要はありません。ただし、自分で新しいOSをフラッシュした場合は、必要なドライバーを別途インストールする必要があります。

:::tip

**32ビットOSドライバーをインストールする場合は、以下の手順を慎重に実行してください：**

reComputer R1000にプリインストールされているオペレーティングシステムは64ビットです。32ビットOSをインストールしたい場合は、以下の方法を使用してDTSドライバーをインストールしてください。

[**SSH経由でreComputer R1000にアクセス**](#access-recomputer-r1000-via-ssh)の手順に従い、その後以下のコマンドを入力してください：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

次に[**新しいRaspbian OSをフラッシュした後のドライバーインストールプロセス**](#install-recomputer-r1000-drivers-after-flashing-new-raspbian-os)を続行してください

:::

- **ステップ 1.** 上記の手順でreComputer R1000に接続したsshシェルで以下のリポジトリをクローンします

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **ステップ 2.** リポジトリに入る

```sh
cd seeed-linux-dtoverlays
```

- **ステップ 3.** 以下を入力してドライバーをインストールします

```sh
sudo ./scripts/reTerminal.sh --device reComputer-R100x
```

<!-- ドライバーが正常にインストールされた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **ステップ 4.** reComputer R1000を再起動します

```sh
sudo reboot
```

このプロセスにより、ファームウェアを更新する前にドライバーが最新の状態であることが保証されます。

reComputer R1000 V1.0の場合、再起動後に`/boot/firmware/config.txt`ファイルを変更し、以下のコマンドを入力する必要があります：

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

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
