---
description: reComputer R1100 Flash OS
title: reComputer R1100 Flash OS
keywords:
  - Edge
  - reComputer R1100
  - Flash OS
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.webp
slug: /ja/recomputer_r1100_flash_os
last_update:
  date: 3/3/2025
  author: Kasun Thushara
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

Raspberry Pi CM4を搭載したreComputer R1100は、AI機能を備えた多用途エッジIoTゲートウェイです。**2x Ethernet、2x USB、2x RS485、2x RS232、2x DI、2x DO**を含む包括的な産業用インターフェースと、**4G、LoRa®、Wi-Fi/BLE**などの柔軟なワイヤレス接続オプションを備えています。これらの機能により、様々な産業用アプリケーションに最適な選択肢となっています。
reComputer R1100シリーズは、**データ取得とプロセス監視、自動化とロボティクス制御、インテリジェント製造、産業通信とネットワーキング**を含むIoTアプリケーションで広く使用されています。そのコンパクトなサイズ、柔軟性、低コスト、プログラマビリティは、**自動化、IoTシステム、そしてそれ以上**に強力なサポートを提供します。

## ハードウェア要件

以下のハードウェアを準備する必要があります

- reComputer R1100 x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- Ethernetケーブル x 1
- 電源アダプタ（12V-24V）BYO
- USB Type-Cケーブル x 1

## ソフトウェア要件

- [usbbootツール](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## NVMEからの起動

### NVMEにOSをフラッシュ

この[リンク](https://wiki.seeedstudio.com/ja/recomputer_r1100_assembly_guide/#installing-an-ssd)を参照し、M.2スロットに挿入してください。

### eMMCから起動してeepromを更新

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

`Ctrl`+`x`を使用してファイルを保存し、以下のコマンドを使用してマシンを再起動します：

```
sudo reboot
```

次に、以下のようにeepromコマンドを使用して更新してください：

```
sudo rpi-eeprom-update -a
```

出力は以下のようになります：

```
recomputer@reComputer-R110x:~ $ sudo rpi-eeprom-update -a
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

### 最新のeepromをフラッシュし、ブート順序を変更する

以下のようなコマンドを使用してraspi-configを開きます：

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

> **注意:** Seedによってパッケージ化された最新のシステムイメージには、適切なドライバが含まれています：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **ステップ1.** 下図に従って、スイッチが`Flash mode`に設定されていることを確認してください：

<div class="table-center">

| スイッチ位置                                              | モード        | 説明    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | eMMCから起動 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | USBから起動  | High      |

</div>

- **ステップ 2.** USB Type-C データケーブルを使用して、reComputer R1100 の Type-C ポートに接続してください。下の画像に示すとおりです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/R1100/r11_usb.jpg"/></div>

- **ステップ 3.** 電源アダプターの電源コードを reComputer R1100 の電源ポートに接続してください。

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img
        width="100"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png"
        style={{ transform: 'rotate(90deg)' }}
    />
</div>

<br></br>

:::note
電源ソリューションは逆極性保護のためにブリッジ整流ダイオードを使用し、AC と DC の両方の入力に対応しています。これにより、電源の正極と負極の端子がどのように接続されても、回路が損傷することはありません。ブリッジ整流器を使用することで、入力 DC 極性に関係なく出力電圧極性が固定され、効果的な逆極性保護を提供します。
:::

次に、ホストコンピューターでのソフトウェアセットアップに進みましょう。お使いのオペレーティングシステムに応じて手順に従ってください。

### Windows の場合

- **ステップ 1.** **[こちら](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** をクリックして **rpiboot セットアップインストーラー** をダウンロードし、必要なドライバーとブートツールをインストールします

- **ステップ 2.** USB Type-C ケーブルで reComputer R1100 を PC に接続します

Windows がハードウェアを検出し、必要なドライバーをインストールします

- **ステップ 3.** 先ほどインストールした **rpiboot** ツールを検索して開きます

- **ステップ 4.** **ファイルエクスプローラー** を開くと、Compute Module 4 の eMMC が **USB マスストレージデバイス** として表示されます

- **ステップ 5.** **[こちら](https://www.raspberrypi.org/software/)** から **Raspberry Pi Imager** ソフトウェアをダウンロードします

- **ステップ 6.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 7.** キーボードで **CTRL + SHIFT + X** を押して **詳細オプション** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、WiFi の設定、ロケール設定** などを行うことができます

:::note
システムには事前設定されたユーザー名とパスワードがあります。ログイン時はデフォルトのユーザー名を "**recomputer**"、デフォルトのパスワードを "**12345678**" に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1100 の初回バッチを購入された場合は OS を再フラッシュしてください。
:::

- **ステップ 8.** **OS を選択** をクリックして、お好みの OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **その他の汎用 OS** に移動することで、**64 ビット Ubuntu** などの他の OS を選択することもできます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 9.** **ストレージを選択** をクリックして、接続された eMMC ドライブを選択します

- **ステップ 10.** 最後に、**書き込み** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 11.** **ブートモードスイッチ** を **通常モード** の位置に戻します

これで **[こちら](#install-drivers)** にスキップできます

### MAC の場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開いて ```brew -v``` と入力し、正しい homebrew 環境がセットアップされているかを確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **ステップ 1.** **usbboot** リポジトリをクローンします

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

- **ステップ 4.** Build using make

```sh
make
```

- **ステップ 5.** Run the binary

```sh
sudo ./rpiboot
```

- **ステップ 6.** USB Type-Cケーブルを使用してreComputer R1100をMacコンピュータに接続します

- **ステップ 7.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします

- **ステップ 8.** **Raspberry Pi Imager**アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます
:::note
システムには事前設定されたユーザー名とパスワードがあります。ログイン時はデフォルトのユーザー名を「**recomputer**」、デフォルトのパスワードを「**12345678**」に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1100の初回バッチを購入された場合はOSを再フラッシュしてください。
:::

- **ステップ 10.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などの他のOSを選択することもできます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 11.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ 12.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 13.** **Boot Mode switch**を**Normal mode**の位置に戻します

これで**[こちら](#install-drivers)**にスキップできます

### Linux用

**rpiboot**のソースコードを取得するためにGitを使用しますので、Gitがインストールされていることを確認してください

- **ステップ 1.** **ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のコマンドで **Git** をインストールします

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **ステップ 3.** 日付が正しく設定されていない場合、Gitがエラーを出力する可能性があります。これを修正するために以下を入力してください

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

- **ステップ 6.** USB Type-Cケーブルを使用してreComputer R1100をPCに接続します

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

- **ステップ 9.** **rpi-imager** をダウンロードします

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
システムには事前にユーザー名とパスワードが設定されています。ログイン時はデフォルトのユーザー名を「**recomputer**」、デフォルトのパスワードを「**12345678**」に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1100の初回バッチを購入された場合はOSを再フラッシュしてください。
:::

- **ステップ 11.** **CHOOSE OS** をクリックして、お好みのOSを選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他のOSを選択することもできます

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

### SSH経由でreComputer R1100にアクセス

:::note

以下の手順には基本的なLinuxコマンドラインの知識が必要です。コーヒーを用意して準備を整えてください。

:::

上記のOSフラッシュ手順に従って、reComputer R1100はホスト名 `raspberrypi.local` でSSHが有効になっているはずです。

次に、EthernetケーブルをreComputer R1100とホストコンピューターと同じネットワーク上のルーターに接続してください。

:::tip

reComputer R1100がホストコンピューターと同じネットワーク上にあるかテストするには、`ping raspberrypi.local` を使用できます

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

- **ステップ 2.** 以下のメッセージに対して **yes** と入力してください

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 3.** パスワードを求められたら、以下を入力してください

```sh
# password for user
raspberry
```

- **ステップ 4.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 新しいRaspbian OSをフラッシュした後のreComputer R1100ドライバーのインストール

reComputer R1100には必要なドライバーが最初から事前インストールされているため、追加のドライバーをインストールする必要はありません。ただし、自分で新しいOSをフラッシュした場合は、必要なドライバーを別途インストールする必要があります。

:::tip

**32ビットOSドライバーのインストール、以下の手順を慎重に実行してください：**

reComputer R1100に事前インストールされているオペレーティングシステムは64ビットです。32ビットOSをインストールしたい場合は、以下の方法を使用してDTSドライバーをインストールしてください。

[**SSH経由でreComputer R1100にアクセス**](#access-recomputer-r1100-via-ssh)の手順に従い、その後以下のコマンドを入力してください：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

次に[**新しいRaspbian OSをフラッシュした後のドライバーインストールプロセス**](#install-recomputer-r1100-drivers-after-flashing-new-raspbian-os)を続行してください

:::

- **ステップ 1.** 上記の手順でreComputer R1100に接続したsshシェルで以下のリポジトリをクローンします

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
sudo ./scripts/reTerminal.sh --device reComputer-R110x
```

<!-- ドライバーが正常にインストールされた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **ステップ 4.** reComputer R1100を再起動します

```sh
sudo reboot
```

このプロセスにより、ファームウェアを更新する前にドライバーが確実に更新されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
