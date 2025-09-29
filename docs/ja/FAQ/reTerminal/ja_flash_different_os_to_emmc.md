---
description: reTerminal-FAQ
title: Raspberry Pi OS/ 64-bit Ubuntu OS またはその他のOSをeMMCにフラッシュする方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/flash_different_os_to_emmc
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- ### Flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC -->

reTerminal上のCM4の**eMMCストレージ**に**Raspberry Pi OS/ 64-bit Ubuntu OSまたはその他のOS**をフラッシュできます。必要なドライバーがインストールされると、reTerminalのUSB Type-CポートをPCに接続するだけで、外部ドライブとして表示されます。まず、reTerminalの背面シェルを取り外します。

## ハードウェア分解手順

- **ステップ1.** 4つのゴムカバーを取り外し、その下にある4つのネジを外してreTerminalの背面シェルを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **ステップ2.** 2つのネジを取り外してヒートシンクを分解します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **ステップ3.** 下図に従って**ブートモードスイッチ**を下に倒します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

次にソフトウェアのセットアップに移ります。お使いのオペレーティングシステムに応じて手順に従ってください

## ソフトウェアセットアップ

### Windows用

- **ステップ1.** **[このリンク](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)**をクリックして**rpibootセットアップインストーラー**をダウンロードし、必要なドライバーとブートツールをインストールします

- **ステップ2.** USB Type-CケーブルでreTerminalをPCに接続します

Windowsがハードウェアを検出し、必要なドライバーをインストールします

- **ステップ3.** 先ほどインストールした**rpiboot**ツールを検索して開きます

- **ステップ4.** **ファイルエクスプローラー**を開くと、Compute Module 4のeMMCが**USBマスストレージデバイス**として表示されます

:::caution
**reTerminalに元々搭載されているRaspberry Pi OS**をフラッシュする場合は、この[Wiki](/ja/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)に戻ってください。<br/>
そうでない場合は、以下の手順を続行してください。
:::

- **ステップ5.** **[このリンク](https://www.raspberrypi.org/software/)**にアクセスして**Raspberry Pi Imager**ソフトウェアをダウンロードします

- **ステップ6.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ7.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます

- **ステップ8.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などの他のOSを選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ9.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ10.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ11.** **ブートモードスイッチ**を元の位置に戻し、reTerminalシェルを組み立てます

これで**[こちら](/ja/log_rpios_use_ssh_over_wifi_ethernet)**にスキップできます

### MAC用

:::caution
**以下の手順を進める前に[homebrew](https://brew.sh/)をインストールする必要があります。**
ターミナルを開いて```brew -V```と入力して、正しいhomebrew環境がセットアップされているかを確認してください。インストールされているhomebrew環境のバージョンが表示されるはずです。
:::

- **ステップ1.** **usbboot**リポジトリをクローンします

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 2.** **libusb** をインストールする

```sh
brew install libusb
```

- **ステップ 3.** **pkg-config** をインストール

```sh
brew install pkg-config
```

- **ステップ 4.** makeを使用してビルドする

```sh
make
```

- **ステップ 5.** バイナリを実行する

```sh
sudo ./rpiboot
```

- **ステップ 6.** reTerminalをUSB Type-Cケーブルを使ってMacコンピュータに接続します

:::caution
**reTerminalに元々搭載されているRaspberry Pi OS**をフラッシュする場合は、この[Wiki](/ja/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)に戻ってください。<br/>
そうでない場合は、以下の手順を続行してください。
:::

- **ステップ 7.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします

- **ステップ 8.** **Raspberry Pi Imager**アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの設定、ロケール設定**などを行うことができます

- **ステップ 10.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などのOSを選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ 12.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 13.** **Boot Mode switch**を元の位置に戻し、reTerminalのシェルを組み立てます

これで**[こちら](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**にスキップできます

### Linux用

**rpiboot**のソースコードを取得するためにGitを使用するので、Gitがインストールされていることを確認してください

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

- **ステップ 5.** usbbootツールをビルドしてインストールします

```sh
make
```

- **ステップ 6.** usbbootツールを実行すると、接続を待機します

```sh
sudo ./rpiboot
```

- **ステップ 7.** USB Type-CケーブルでreTerminalをPCに接続します

:::caution
**reTerminalに元々搭載されているRaspberry Pi OS**をフラッシュする場合は、この[Wiki](/ja/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)に戻ってください。<br/>
そうでない場合は、以下の手順を続行してください。
:::

- **ステップ 8.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**ソフトウェアをダウンロードします

- **ステップ 9.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 10.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます

- **ステップ 11.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などのOSを選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 12.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ 13.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 14.** **Boot Modeスイッチ**を元の位置に戻し、reTerminalのシェルを組み立てます
