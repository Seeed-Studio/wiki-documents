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
# reComputer R1000 Raspbian OS を eMMC へ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000 エッジ IoT コントローラーは、高性能な Raspberry Pi CM4 プラットフォーム上に構築されており、クアッドコア A72 プロセッサを搭載し、最大 8GB RAM と 32GB eMMC をサポートします。柔軟に設定可能なデュアル Ethernet インターフェースを装備し、BACnet、Modbus RTU、Modbus TCP/IP、KNX プロトコルをサポートする 3 つの絶縁された RS485 チャンネルも含まれています。
堅牢な IoT ネットワーク通信機能により、R1000 シリーズは 4G、LoRa®、Wi-Fi/BLE を含む複数のワイヤレス通信オプションをサポートし、対応するワイヤレスゲートウェイとして機能する柔軟な設定が可能です。このコントローラーは、リモートデバイス管理、エネルギー管理、およびスマートビルディング分野のその他様々なシナリオに適しています。

## ハードウェア要件

以下のハードウェアを準備する必要があります

- reComputer R1000 x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- Ethernet ケーブル x 1
- 電源アダプタ（12V-24V）BYO
- USB Type-C ケーブル x 1

## ソフトウェア要件

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## NVME からの起動

### NVME への OS フラッシュ

この[リンク](https://wiki.seeedstudio.com/ja/recomputer_r1000_flash_OS/#Raspbian-OS-フラッシュ手順)を参照し、その後 M.2 スロットに挿入してください。

### eMMC からの起動と EEPROM の更新

以下のようなコマンドを使用してファイルを開きます

```
sudo nano /etc/default/rpi-eeprom-update
```

以下のように変更します：

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

以下のように `[cm4]` 部分を変更します：

```
[cm4]
dtparam=spi=on
dtoverlay=audremap
dtoverlay=spi-gpio40-45
```

`Ctrl`+`x` を使用してファイルを保存し、以下のコマンドでマシンを再起動します：

```
sudo reboot
```

その後、以下のようなコマンドを使用して EEPROM を更新します：

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

### 最新の EEPROM のフラッシュと起動順序の変更

以下のようなコマンドを使用して raspi-config を開きます：

```
sudo raspi-config 
```

`Advanced Options` まで下にスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version` まで下にスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に `Latest` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここで `No` を選択します - `latest` ブートローダーが必要です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

`Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

その後、以下のようなコマンドで起動順序を変更します：

```
sudo -E rpi-eeprom-config --edit
```

以下のようにファイルを変更します：

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
BOOT_ORDER=0xf416
```

`Ctrl`+`x` を使用してファイルを保存し、その後マシンを再起動します。

## Raspbian OS フラッシュ手順

> **注意：** Seeed によってパッケージ化された最新のシステムイメージには、適切なドライバが含まれています：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **ステップ 1.** 以下の図に従って、スイッチが `Flash mode` に設定されていることを確認します：

<div class="table-center">

| スイッチ位置                                              | モード        | 説明    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード | eMMC から起動 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード  | USB から起動  | High      |

</div>

- **ステップ 2.** 以下の画像に示すように、USB Type-C データケーブルを使用して reComputer R1000 の Type-C ポートに接続してください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/33.png" /></div>

- **ステップ 3.** 電源から電源コードを reComputer R1000 の電源ポートに接続してください。

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img
        width="100"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png"
        style={{ transform: 'rotate(90deg)' }}
    />
</div>

<br></br>

:::note
電源ソリューションは、逆極性保護のためにブリッジ整流ダイオードを使用し、AC と DC の両方の入力に対応しています。これにより、電源の正極と負極の端子がどのように接続されても、回路が損傷することはありません。ブリッジ整流器を使用することで、入力 DC 極性に関係なく出力電圧極性が固定され、効果的な逆極性保護を提供します。
:::

それでは、ホストコンピュータでのソフトウェアセットアップに移りましょう。お使いのオペレーティングシステムに応じて手順に従ってください

### Windows の場合

- **ステップ 1.** **[こちら](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** をクリックして **rpiboot setup installer** をダウンロードし、必要なドライバとブートツールをインストールします

- **ステップ 2.** USB Type-C ケーブルで reComputer R1000 を PC に接続します

Windows がハードウェアを検出し、必要なドライバをインストールします

- **ステップ 3.** 先ほどインストールした **rpiboot** ツールを検索して開きます

- **ステップ 4.** **ファイルエクスプローラー** を開くと、Computer Module 4 の eMMC が **USB マスストレージデバイス** として表示されます

- **ステップ 5.** **[こちら](https://www.raspberrypi.org/software/)** から **Raspberry Pi Imager** ソフトウェアをダウンロードします

- **ステップ 6.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 7.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、WiFi の設定、ロケール設定** などを行うことができます

:::note
システムには事前設定されたユーザー名とパスワードがあります。ログイン時はデフォルトのユーザー名を "**recomputer**"、デフォルトのパスワードを "**12345678**" に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1000 の初回バッチを購入された場合は OS を再フラッシュしてください。
:::

- **ステップ 8.** **CHOOSE OS** をクリックして、お好みの OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択することもできます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 9.** **CHOOSE STORAGE** をクリックして、接続された eMMC ドライブを選択します

- **ステップ 10.** 最後に、**WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分間お待ちください。

- **ステップ 11.** **Boot Mode switch** を **Normal mode** の位置に戻します

これで **[こちら](#ドライバのインストール)** にスキップできます

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

- **ステップ 2.** **libusb** をインストールします

```sh
brew install libusb
```

- **ステップ 3.** **pkg-config** をインストールします

```sh
brew install pkg-config
```

- **ステップ 4.** make を使用してビルドします

```sh
make
```

- **ステップ 5.** バイナリを実行します

```sh
sudo ./rpiboot
```

- **ステップ 6.** USB Type-C ケーブルで reComputer R1000 を Mac コンピュータに接続します

- **ステップ 7.** [このリンク](https://www.raspberrypi.org/software/) にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **ステップ 8.** **Raspberry Pi Imager** アプリケーションを開く

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開く

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、WiFi の設定、ロケール設定** などを行うことができます
:::note
システムには事前設定されたユーザー名とパスワードがあります。ログイン時はデフォルトのユーザー名を "**recomputer**"、デフォルトのパスワードを "**12345678**" に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1000 の初回バッチを購入された場合は OS を再フラッシュしてください。
:::

- **ステップ 10.** **CHOOSE OS** をクリックして、お好みの OS を選択する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択することもできます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 11.** **CHOOSE STORAGE** をクリックして、接続された eMMC ドライブを選択する

- **ステップ 12.** 最後に、**WRITE** をクリックする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 13.** **Boot Mode switch** を **Normal mode** の位置に戻す

これで **[こちら](#ドライバのインストール)** にスキップできます

### Linux の場合

Git を使用して **rpiboot** ソースコードを取得するため、Git がインストールされていることを確認してください

- **ステップ 1.** **Terminal** ウィンドウを開き、以下を入力して **パッケージリスト** を更新する

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のコマンドで **Git** をインストールする

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **ステップ 3.** 日付が正しく設定されていない場合、Git でエラーが発生する可能性があります。以下を入力してこれを修正する

```sh
sudo date MMDDhhmm
```

**注意：** **MM** は月、**DD** は日、**hh** と **mm** はそれぞれ時と分です。

- **ステップ 4.** **usbboot** ツールリポジトリをクローンする

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 5.** usbboot ツールをビルドしてインストールする

```sh
make
```

- **ステップ 6.** USB Type-C ケーブルで reComputer R1000 を PC に接続する

- **ステップ 7.** usbboot ツールを実行すると、接続を待機します

```sh
sudo ./rpiboot
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 8.** snap をダウンロードする

```sh
sudo apt install snap
```

- **ステップ 9.** **rpi-imager** をダウンロードする

```sh
snap install rpi-imager
```

- **ステップ 10.** Raspberry Pi Imager ソフトウェアを開く

```sh
rpi-imager
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開く

ホスト名の設定、パスワードの設定、WiFi の設定、ロケール設定を行う

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

SSH を有効にする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、WiFi の設定、ロケール設定** などを行うことができます
:::note
システムには事前設定されたユーザー名とパスワードがあります。ログイン時はデフォルトのユーザー名を "**recomputer**"、デフォルトのパスワードを "**12345678**" に設定してください。異なる認証情報を設定して問題が発生した場合、reComputer R1000 の初回バッチを購入された場合は OS を再フラッシュしてください。
:::

- **ステップ 11.** **CHOOSE OS** をクリックして、お好みの OS を選択する

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意：** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択することもできます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、このリンクを使用してイメージファイルをダウンロードできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 12.** **CHOOSE STORAGE** をクリックして、接続された eMMC ドライブを選択する

- **ステップ 13.** 最後に、**NEXT** と **YES** をクリックする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 14.** **Boot Mode switch** を **Normal mode** の位置に戻す

## ドライバのインストール

### SSH 経由で reComputer R1000 にアクセスする

:::note

以下の手順には基本的な Linux コマンドラインの知識が必要です。コーヒーを用意して準備してください。

:::

上記の OS フラッシュ手順に従って、reComputer R1000 は `raspberrypi.local` のホスト名で SSH が有効になっているはずです。

次に、Ethernet ケーブルを reComputer R1000 とホストコンピュータと同じネットワーク上のルーターに接続してください。

:::tip

reComputer R1000 がホストコンピュータと同じネットワーク上にあるかテストするには、`ping raspberrypi.local` を使用できます

ping コマンドの後に以下の出力が表示される場合、両方のデバイスが同じネットワーク上にあることを意味します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Windows の場合

- **ステップ 1.** **Command Prompt** を開き、以下を入力する

```sh
ssh pi@raspberrypi.local
```

- **ステップ 2.** プロンプトに対して **yes** と入力する

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 3.** 以下のようにパスワードを入力する

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac/Linux の場合

- **ステップ 1.** コンピュータで **Terminal** を開き、以下を入力する

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **ステップ 2.** 以下のメッセージに対して **yes** と入力する

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 3.** パスワードを求められたら、以下を入力する

```sh
# password for user
raspberry
```

- **ステップ 4.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 新しい Raspbian OS をフラッシュした後の reComputer R1000 ドライバのインストール

reComputer R1000 には必要なドライバが最初からプリインストールされているため、追加のドライバをインストールする必要はありません。ただし、自分で新しい OS をフラッシュした場合は、必要なドライバを別途インストールする必要があります。

:::tip

**32-bit OS ドライバのインストールについては、以下の手順を慎重に従ってください：**

reComputer R1000 にプリインストールされているオペレーティングシステムは 64-bit です。32-bit OS をインストールしたい場合は、以下の方法を使用して DTS ドライバをインストールしてください。

[**SSH 経由で reComputer R1000 にアクセスする**](#SSH経由でreComputer-R1000にアクセスする) の手順に従い、以下のコマンドを入力してください：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

その後、[**新しい Raspbian OS をフラッシュした後のドライバインストールプロセス**](#新しいRaspbian-OSをフラッシュした後のreComputer-R1000ドライバのインストール) を続行してください

:::

- **ステップ 1.** 上記の手順で reComputer R1000 に接続した SSH シェルで以下のリポジトリをクローンする

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **ステップ 2.** リポジトリに入る

```sh
cd seeed-linux-dtoverlays
```

- **ステップ 3.** 以下を入力してドライバをインストールする

```sh
sudo ./scripts/reTerminal.sh --device reComputer-R100x
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **ステップ 4.** reComputer R1000 を再起動する

```sh
sudo reboot
```

このプロセスにより、ファームウェアを更新する前にドライバが最新であることが保証されます。
:::tip
<div style={{ color: 'red', fontWeight: 'bold' }}>
  注意：reComputer R1000 V1.0 の場合、再起動後に /boot/firmware/config.txt ファイルを変更し、以下のコマンドを入力する必要があります：
</div>
:::

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

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
