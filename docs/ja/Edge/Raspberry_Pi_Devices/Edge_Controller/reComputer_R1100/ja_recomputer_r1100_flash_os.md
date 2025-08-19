---
description: reComputer R1100 OSのフラッシュ
title: reComputer R1100 OSのフラッシュ
keywords:
  - Edge
  - reComputer R1100
  - OSのフラッシュ
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.webp
slug: /ja/recomputer_r1100_flash_os
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

reComputer R1100はRaspberry Pi CM4を搭載した多用途なエッジIoTゲートウェイで、AI機能を備えています。**2x Ethernet、2x USB、2x RS485、2x RS232、2x DI、2x DO**などの幅広い産業用インターフェースを備え、**4G、LoRa®、Wi-Fi/BLE**などの柔軟な無線接続オプションを提供します。これらの機能により、さまざまな産業用途に最適な選択肢となります。
reComputer R1100シリーズは、**データ収集とプロセス監視、自動化とロボット制御、インテリジェント製造、産業通信とネットワーキング**などのIoTアプリケーションで広く使用されています。そのコンパクトなサイズ、柔軟性、低コスト、プログラム可能性により、**自動化、IoTシステムなど**を強力にサポートします。

## ハードウェア要件

以下のハードウェアを準備してください：

- reComputer R1100 x 1
- ホストコンピュータ (Windows/Mac/Linux) x 1
- イーサネットケーブル x 1
- 電源アダプタ (12V-24V) BYO
- USB Type-Cケーブル x 1 

## ソフトウェア要件

- [usbbootツール](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)


## NVMEからの起動

### NVMEにOSをフラッシュする

この[リンク](https://wiki.seeedstudio.com/ja/recomputer_r1100_assembly_guide/#installing-an-ssd)を参照し、M.2スロットに挿入してください。

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
`Ctrl`+`x`を使用してファイルを保存し、以下のコマンドでマシンを再起動します：
```
sudo reboot
```
その後、以下のコマンドを使用してEEPROMを更新します：

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

### 最新のEEPROMをフラッシュしてブート順序を変更する

以下のコマンドを使用してraspi-configを開きます：

```
sudo raspi-config 
```
`Advanced Options`までスクロールしてEnterを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version`までスクロールしてEnterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に`Latest`を選択してEnterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここで`No`を選択します - `最新`のブートローダーを選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

ツールを終了するには`Finish`を選択します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は`Yes`を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

その後、以下のコマンドを使用してブート順序を変更します：

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

> **注意:** Seeed によってパッケージ化された最新のシステムイメージには、適切なドライバーが含まれています: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **ステップ 1.** 以下の図に従ってスイッチを `Flash mode` に設定してください:

<div class="table-center">

| スイッチ位置                                                | モード       | 説明            | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード   | eMMC から起動  | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード | USB から起動   | High      |

</div>

- **ステップ 2.** USB Type-C データケーブルを使用して reComputer R1100 の Type-C ポートに接続してください。以下の画像を参照してください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/R1100/r11_usb.jpg"/></div>

- **ステップ 3.** 電源コードを電源供給装置から reComputer R1100 の電源ポートに接続してください。

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img 
        width="100" 
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" 
        style={{ transform: 'rotate(90deg)' }} 
    />
</div>

<br></br>

:::note
電源ソリューションは逆極性保護のためにブリッジ整流ダイオードを利用しており、AC および DC 入力の両方に対応しています。これにより、電源供給装置の正極と負極がどのように接続されても回路が損傷することはありません。ブリッジ整流器を使用することで、入力 DC の極性に関係なく出力電圧の極性が固定され、効果的な逆極性保護が提供されます。
:::

次に、ホストコンピュータでのソフトウェア設定に進みます。使用するオペレーティングシステムに応じて以下の手順に従ってください。

### Windows の場合

- **ステップ 1.** 必要なドライバーとブートツールをインストールするために **rpiboot setup installer** をダウンロードしてください。**[こちらをクリック](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)**

- **ステップ 2.** USB Type-C ケーブルを使用して reComputer R1100 を PC に接続してください。

Windows がハードウェアを検出し、必要なドライバーをインストールします。

- **ステップ 3.** 以前にインストールした **rpiboot** ツールを検索して開いてください。

- **ステップ 4.** **ファイルエクスプローラー**を開くと、Computer Module 4 の eMMC が **USB マスストレージデバイス**として表示されます。

- **ステップ 5.** **Raspberry Pi Imager** ソフトウェアを **[こちら](https://www.raspberrypi.org/software/)** からダウンロードしてください。

- **ステップ 6.** Raspberry Pi Imager ソフトウェアを開いてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 7.** キーボードで **CTRL + SHIFT + X** を押して **詳細オプション**ウィンドウを開いてください。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、WiFi の構成、ロケール設定**などを行うことができます。

:::note
システムにはユーザー名とパスワードが事前設定されています。ログイン時にはデフォルトのユーザー名を "**recomputer**"、デフォルトのパスワードを "**12345678**" に設定してください。異なる資格情報を設定して問題が発生した場合、reComputer R1100 の初回購入分の場合は OS を再フラッシュしてください。
:::

- **ステップ 8.** **CHOOSE OS** をクリックして希望の OS を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64-bit Ubuntu** などの他の OS を選択するには、**Other general purpose OS** に移動してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または以下のリンクからイメージファイルをダウンロードすることもできます:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 9.** **CHOOSE STORAGE** をクリックして接続された eMMC ドライブを選択してください。

- **ステップ 10.** 最後に **WRITE** をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ってください。

- **ステップ 11.** **Boot Mode スイッチ**を **Normal mode** の位置に戻してください。

これで **[こちら](#install-drivers)** に進むことができます。

### MAC の場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開いて ```brew -v``` を入力し、正しい homebrew 環境が設定されているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
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

- **ステップ 6.** USB Type-C ケーブルを使用して reComputer R1100 を Mac コンピュータに接続してください。

- **ステップ 7.** [このリンク](https://www.raspberrypi.org/software/) にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールしてください。

- **ステップ 8.** **Raspberry Pi Imager** アプリケーションを開いてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで **CTRL + SHIFT + X** を押して **詳細オプション**ウィンドウを開いてください。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、WiFi の構成、ロケール設定**などを行うことができます。

:::note
システムにはユーザー名とパスワードが事前設定されています。ログイン時にはデフォルトのユーザー名を "**recomputer**"、デフォルトのパスワードを "**12345678**" に設定してください。異なる資格情報を設定して問題が発生した場合、reComputer R1100 の初回購入分の場合は OS を再フラッシュしてください。
:::

- **ステップ 10.** **CHOOSE OS** をクリックし、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択することができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、以下のリンクからイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 11.** **CHOOSE STORAGE** をクリックし、接続された eMMC ドライブを選択します

- **ステップ 12.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシングプロセスが完了するまで数分お待ちください。

- **ステップ 13.** **Boot Mode スイッチ**を**Normal mode**の位置に戻します

これで **[こちら](#install-drivers)** にスキップできます。


### Linuxの場合

Git を使用して **rpiboot** のソースコードを取得しますので、Git がインストールされていることを確認してください。

- **ステップ 1.** **Terminal** ウィンドウを開き、以下を入力して **パッケージリスト** を更新します

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のコマンドで **Git** をインストールします

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **ステップ 3.** Git は日付が正しく設定されていない場合にエラーを出すことがあります。以下を入力して修正してください

```sh
sudo date MMDDhhmm
```

**注意:** **MM** は月、**DD** は日付、**hh** と **mm** はそれぞれ時間と分を表します。

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

- **ステップ 7.** usbboot ツールを実行し、接続を待機します

```sh
sudo ./rpiboot
```

結果は以下のように表示されます：
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

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

ホスト名を設定し、パスワードを設定し、Wi-Fi を構成し、ロケール設定を行います

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

SSH を有効にします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名を設定し、SSH を有効にし、パスワードを設定し、Wi-Fi を構成し、ロケール設定** などを行うことができます。
:::note
システムにはユーザー名とパスワードが事前設定されています。ログイン時にデフォルトのユーザー名を "**recomputer**"、デフォルトのパスワードを "**12345678**" に設定してください。異なる資格情報を設定して問題が発生した場合、最初のバッチの reComputer R1100 を購入した場合は OS を再フラッシュしてください。
:::

- **ステップ 11.** **CHOOSE OS** をクリックし、希望する OS を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの他の OS を選択することができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、以下のリンクからイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 12.** **CHOOSE STORAGE** をクリックし、接続された eMMC ドライブを選択します

- **ステップ 13.** 最後に **NEXT** と **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシングプロセスが完了するまで数分お待ちください。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 14.** **Boot Mode スイッチ**を**Normal mode**の位置に戻します

## ドライバのインストール

### SSH を使用して reComputer R1100 にアクセスする

:::note

以下の手順では、基本的な Linux コマンドラインの知識が必要です。コーヒーを用意して準備を整えてください。

:::

上記の OS フラッシュ手順に従うと、reComputer R1100 は `raspberrypi.local` というホスト名で SSH が有効になっているはずです。

次に、reComputer R1100 とホストコンピュータと同じネットワーク上にあるルーターにイーサネットケーブルを接続してください。

:::tip

reComputer R1100 がホストコンピュータと同じネットワーク上にあるかを確認するには、`ping raspberrypi.local` を使用できます。

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

### 新しい Raspbian OS をフラッシュした後の reComputer R1100 ドライバのインストール

reComputer R1100 には必要なドライバがあらかじめインストールされているため、追加のドライバをインストールする必要はありません。ただし、自分で新しい OS をフラッシュした場合は、必要なドライバを別途インストールする必要があります。

:::tip

**32ビット OS ドライバのインストール：以下の手順を慎重に実行してください**

reComputer R1100 にプリインストールされているオペレーティングシステムは 64 ビットです。32 ビット OS をインストールしたい場合は、以下の方法で DTS ドライバをインストールしてください。

[**SSH を使用して reComputer R1100 にアクセスする**](#access-recomputer-r1100-via-ssh) 手順に従い、次に以下のコマンドを入力してください：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```
その後、[**新しい Raspbian OS をフラッシュした後のドライバインストールプロセス**](#install-recomputer-r1100-drivers-after-flashing-new-raspbian-os) を続行してください。

:::

- **ステップ 1.** 上記の手順で reComputer R1100 に接続した SSH シェルで以下のリポジトリをクローンします

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
sudo ./scripts/reTerminal.sh --device reComputer-R110x
```

<!-- ドライバが正常にインストールされた場合、以下のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **ステップ 4.** reComputer R1100 を再起動します

```sh
sudo reboot
```

このプロセスにより、ファームウェアを更新する前にドライバが最新の状態になります。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>