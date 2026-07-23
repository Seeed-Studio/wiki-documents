---
description: reComputer R1100 OS のフラッシュ
title: reComputer R1100 OS のフラッシュ
keywords:
  - Edge
  - reComputer R1100
  - OS のフラッシュ
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.webp
slug: /recomputer_r1100_flash_os
last_update:
  date: 3/3/2025
  author: Kasun Thushara
createdAt: '2025-03-04'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/ja/recomputer_r1100_flash_os/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

Raspberry Pi CM4 を搭載した reComputer R1100 は、AI 機能を備えた多用途なエッジ IoT ゲートウェイです。**2x Ethernet、2x USB、2x RS485、2x RS232、2x DI、2x DO** といった幅広い産業用インターフェースに加え、**4G、LoRa®、Wi-Fi/BLE** など柔軟なワイヤレス接続オプションを備えています。これらの特長により、さまざまな産業用途に最適な選択肢となります。
reComputer R1100 シリーズは、**データ収集とプロセス監視、自動化およびロボット制御、インテリジェント製造、産業用通信およびネットワーキング** などの IoT アプリケーションで広く使用されています。そのコンパクトなサイズ、柔軟性、低コスト、およびプログラマビリティにより、**自動化、IoT システムなど** を強力にサポートします。

## ハードウェア要件

以下のハードウェアを準備してください

- reComputer R1100 x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- Ethernet ケーブル x 1
- 電源アダプタ (12V-24V) BYO
- USB Type-C ケーブル x 1

## ソフトウェア要件

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## NVME からの起動

### OS を NVME にフラッシュする

[こちらのリンク](https://wiki.seeedstudio.com/ja/recomputer_r1100_assembly_guide/#installing-an-ssd) を参照し、その後 M.2 スロットに挿入してください。

### eMMC から起動して EEPROM を更新する

以下のようなコマンドを使用してファイルを開きます

```
sudo nano /etc/default/rpi-eeprom-update
```

次のように修正します:

```
FIRMWARE_RELEASE_STATUS="latest"
RPI_EEPROM_USE_FLASHROM=1
CM4_ENABLE_RPI_EEPROM_UPDATE=1
```

`Ctrl`+`x` を使用してファイルを保存します。

以下のようなコマンドを使用してファイルを開きます

```
sudo nano /boot/firmware/config.txt
```

`[cm4]` 部分を次のように修正します:

```
[cm4]
dtparam=spi=on
dtoverlay=audremap
dtoverlay=spi-gpio40-45
```

`Ctrl`+`x` を使用してファイルを保存し、次のコマンドでマシンを再起動します:

```
sudo reboot
```

その後、以下のようなコマンドを使用して EEPROM を更新します:

```
sudo rpi-eeprom-update -a
```

出力は次のようになります:

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

### 最新の EEPROM をフラッシュし、ブート順序を変更する

以下のようなコマンドを使用して raspi-config を開きます:

```
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

再起動を求められたら、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

その後、以下のようなコマンドでブート順序を変更します:

```
sudo -E rpi-eeprom-config --edit
```

ファイルを次のように修正します:

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
BOOT_ORDER=0xf416
```

`Ctrl`+`x` を使用してファイルを保存し、その後マシンを再起動します。

## Raspbian OS をフラッシュする手順

- **Step 1.** 下の図に従って、スイッチが `Flash mode` に設定されていることを確認します:

<div class="table-center">

| スイッチ位置                                                  | モード      | 説明           | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | eMMC から起動 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | USB から起動  | High      |

</div>

- **Step 2.** 下図のように、USB Type-C データケーブルを使用して reComputer R1100 の Type-C ポートに接続してください

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/R1100/r11_usb.jpg"/></div>

- **Step 3.** 電源コードを電源から reComputer R1100 の電源ポートに接続してください。

<div style={{ textAlign: 'center', marginLeft: '40px' }}>
    <img
        width="100"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png"
        style={{ transform: 'rotate(90deg)' }}
    />
</div>

<br></br>

- **Step 4.** [ここ](https://github.com/Seeed-Studio/pi-gen-expand) をクリックして、reComputer R1100 デバイス向けに Seeed が提供する最新の公式イメージをダウンロードします。対応するドライバがあらかじめインストールされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-updata/Raspberry Pi Devices/Edge Controller/reComputer R1100/reComputer R1100 Flash OS/download_preferredOS.png" alt="pir" width="600" height="auto"/></p>

:::note
この電源ソリューションは、逆接続保護のためにブリッジ整流ダイオードを使用しており、AC と DC の両方の入力に対応しています。これにより、電源のプラス端子とマイナス端子がどのように接続されても回路が損傷することはありません。ブリッジ整流器を使用することで、入力 DC の極性に関係なく出力電圧の極性が一定に保たれ、効果的な逆接続保護が実現されます。
:::

それでは、ホストコンピュータ上でのソフトウェアセットアップに進みましょう。使用したいオペレーティングシステムに応じて、以下の手順に従ってください

### Windows の場合

- **Step 1.** **[here](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** をクリックして **rpiboot setup installer** をダウンロードし、必要なドライバとブートツールをインストールします

- **Step 2.** USB Type-C ケーブルで reComputer R1100 を PC に接続します

Windows がハードウェアを検出し、必要なドライバをインストールします

- **Step 3.** 先ほどインストールした **rpiboot** ツールを検索して開きます

- **Step 4.** **ファイルエクスプローラー** を開くと、Compute Module 4 の eMMC が **USB マスストレージデバイス** として表示されます

- **Step 5.** **[here](https://downloads.raspberrypi.com/imager/imager_2.0.7.exe)** をクリックして、Windows 版 Raspberry Pi Imager 2.0.7（以下の手順で使用）を直接ダウンロードするか、**[公式サイト](https://www.raspberrypi.com/software/)** にアクセスして、お使いのシステムに適したバージョンを選択します。

- **Step 6.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_1.png" alt="pir" width="600" height="auto"/></p>


ここで、**ホスト名の設定、SSH の有効化、パスワードの設定、WiFi の設定、ロケール設定** などを行うことができます

:::note
システムにはあらかじめユーザー名とパスワードがプリセットされています。ログイン時には、デフォルトのユーザー名を「**recomputer**」、デフォルトのパスワードを「**12345678**」に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1100 の初回ロットをご購入の場合は OS を再フラッシュしてください。
:::

- **Step 7.** 「**OS**」をクリックして **"Use custom"** を選択し、ポップアップウィンドウで先ほどダウンロードしたイメージファイルを選択します。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_3.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** 代わりに、**Other general purpose OS** に進み、**64-bit Ubuntu** などの他の OS を選択することもできます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードすることもできます:

[Ubuntu for Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 8.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-updata/Raspberry Pi Devices/Edge Controller/reComputer R1100/reComputer R1100 Flash OS/select_device.png" alt="pir" width="600" height="auto"/></p>

- **Step 9.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-updata/Raspberry Pi Devices/Edge Controller/reComputer R1100/reComputer R1100 Flash OS/write.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。

- **Step 10.** **Boot Mode switch** を **Normal mode** の位置に戻します

これで、SSH 経由で reComputer R1100 にアクセスするために **[here](#install-drivers)** までスキップできます

### MAC の場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開き、```brew -v``` と入力して正しく homebrew 環境がセットアップされているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **ステップ 1.** **usbboot** リポジトリをクローンします

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 2.** **libusb** をインストールします

```sh
brew install libusb
```

- **ステップ 3.** **pkg-config** をインストールします

```sh
brew install pkg-config
```

- **ステップ 4.** make を使ってビルドします

```sh
make
```

- **ステップ 5.** バイナリを実行します

```sh
sudo ./rpiboot
```

- **ステップ 6.** reComputer R1100 を USB Type-C ケーブルで Mac コンピュータに接続します

- **ステップ 7.** [このリンク](https://www.raspberrypi.org/software/) にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **ステップ 8.** **Raspberry Pi Imager** アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ロケール設定** などを行うことができます
:::note
システムにはあらかじめユーザー名とパスワードがプリセットされています。ログイン時のデフォルトユーザー名を「**recomputer**」、デフォルトパスワードを「**12345678**」に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1100 の初回ロットを購入された方は OS を再フラッシュしてください。
:::

- **ステップ 10.** **CHOOSE OS** をクリックして、好みの OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択できます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、次のリンクを使用してイメージファイルをダウンロードできます：

[Ubuntu for Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 11.** **CHOOSE STORAGE** をクリックして、接続されている eMMC ドライブを選択します

- **ステップ 12.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。

- **ステップ 13.** **Boot Mode switch** を **Normal mode** の位置に戻します

これで、**[こちら](#install-drivers)** にスキップして SSH 経由で reComputer R1100 にアクセスできます

### Linux の場合

Git を使用して **rpiboot** のソースコードを取得するので、Git がインストールされていることを確認してください

- **ステップ 1.** **Terminal** ウィンドウを開き、**パッケージリスト** を更新するために次のコマンドを入力します

```sh
sudo apt-get update
```

- **ステップ 2.** 次のコマンドで **Git** をインストールします

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **ステップ 3.** 日付が正しく設定されていない場合、Git はエラーを出すことがあります。これを修正するには次のコマンドを入力します

```sh
sudo date MMDDhhmm
```

**注意:** **MM** は月、**DD** は日付、**hh** と **mm** はそれぞれ時と分です。

- **ステップ 4.** **usbboot** ツールのリポジトリをクローンします

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 5.** usbboot ツールをビルドしてインストールします

```sh
make
```

- **ステップ 6.** reComputer R1100 を USB Type-C ケーブルで PC に接続します

- **ステップ 7.** usbboot ツールを実行すると、接続待ち状態になります

```sh
sudo ./rpiboot
```

結果は次のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 8.** snap をダウンロードします

```sh
sudo apt install snap
```

- **ステップ 9.** **rpi-imager** をダウンロードします

```sh
snap install rpi-imager
```

- **ステップ 10.** Raspberry Pi Imager ソフトウェアを開きます

```sh
rpi-imager
```

結果は次のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

ホスト名の設定、パスワードの設定、Wi-Fi の設定、ロケール設定を行います

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

SSH を有効化します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ロケール設定** などを行うことができます
:::note
システムにはあらかじめユーザー名とパスワードがプリセットされています。ログイン時のデフォルトユーザー名を「**recomputer**」、デフォルトパスワードを「**12345678**」に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1100 の初回ロットを購入された方は OS を再フラッシュしてください。
:::

- **ステップ 11.** **CHOOSE OS** をクリックして、好みの OS を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択できます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、次のリンクを使用してイメージファイルをダウンロードできます：

[Ubuntu for Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 12.** **CHOOSE STORAGE** をクリックして、接続されている eMMC ドライブを選択します

- **ステップ 13.** 最後に **NEXT** と **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。
結果は次のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 14.** **Boot Mode switch** を **Normal mode** の位置に戻します

## ドライバのインストール

### SSH 経由で reComputer R1100 にアクセスする

:::note

以下の手順には、基本的な Linux コマンドラインの知識が必要です。コーヒーを一杯用意して、準備を整えてください。

:::

上記の OS フラッシュ手順に従うと、reComputer R1100 ではホスト名 `raspberrypi.local` で SSH が有効になっているはずです。

次に、reComputer R1100 とホストコンピュータと同じネットワーク上にあるルーターに Ethernet ケーブルを接続してください。

:::tip

reComputer R1100 がホストコンピュータと同じネットワーク上にあるかテストするには、`ping raspberrypi.local` を使用できます

ping コマンドの後に次のような出力が表示されれば、両方のデバイスが同じネットワーク上にあることを意味します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Windows の場合

- **ステップ 1.** **Command Prompt** を開き、次のコマンドを入力します

```sh
ssh <your username>@raspberrypi.local
```
カード作成セクションで提供されている Seeed の公式プリビルドイメージを使用している場合、ユーザー名は **recomputer**、パスワードは **12345678** です。

```sh
ssh reComputer@raspberrypi.local
```

- **ステップ 2.** プロンプトに対して **yes** と入力します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 3.** 次のようにパスワードを入力します

```sh
12345678
```

- **ステップ 4.** Raspberry Pi OS へのログインに成功すると、次のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac/Linux の場合

- **ステップ 1.** コンピュータで **Terminal** を開き、次のコマンドを入力します

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **ステップ 2.** 次のメッセージに対して **yes** と入力します

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 3.** パスワードを求められたら、次のように入力します

```sh
# password for user
raspberry
```

- **ステップ 4.** Raspberry Pi OS へのログインに成功すると、次のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 新しい Raspbian OS をフラッシュした後に reComputer R1100 ドライバをインストールする

reComputer R1100 には必要なドライバがあらかじめインストールされているため、追加のドライバをインストールする必要はありません。ただし、自分で新しい OS をフラッシュした場合は、必要なドライバを別途インストールする必要があります。

:::tip

**32-bit OS ドライバをインストールする場合は、以下の手順に注意深く従ってください。**

reComputer R1100 にプリインストールされているオペレーティングシステムは 64-bit です。32-bit OS をインストールしたい場合は、次の方法で DTS ドライバをインストールしてください。

[**SSH 経由で reComputer R1100 にアクセスする**](#ssh-経由で-recomputer-r1100-にアクセスする) 手順に従い、その後、次のコマンドを入力してください：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

その後、[**新しい Raspbian OS をフラッシュした後のドライバインストールプロセス**](#新しい-raspbian-os-をフラッシュした後に-recomputer-r1100-ドライバをインストールする) を続けてください

:::

- **ステップ 1.** 上記の手順で reComputer R1100 に接続した ssh シェル内で、次のリポジトリをクローンします

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **ステップ 2.** リポジトリに入ります

```sh
cd seeed-linux-dtoverlays
```

- **ステップ 3.** ドライバをインストールするために次を入力します

```sh
sudo ./scripts/reTerminal.sh --device reComputer-R110x
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **ステップ 4.** reComputer R1100 を再起動します

```sh
sudo reboot
```

このプロセスにより、ファームウェアを更新する前にドライバが最新であることを確認できます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
