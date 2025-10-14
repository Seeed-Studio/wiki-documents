---
description: reTerminal DM Flash OS
title: reTerminal DM Flash OS
keywords:
  - Edge
  - reTerminal-DM
  - Flash OS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal-dm-flash-OS
last_update:
  date: 04/23/2023
  author: Peter Pan
---
# reTerminal DM に Raspbian OS を eMMC にフラッシュ

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DMは10.1インチのオープンソース産業用HMIで、データフローを統合し、現場デバイスを管理する統合デバイスマスターです。

Raspberry Pi CM4をベースとし、パネルPC、HMI、PLC、IIoTゲートウェイのオールインワンデバイスとして、reTerminal DMはIP65産業グレードの大型スクリーンを備えた新世代のインタラクティブセンシングハブです。

豊富な拡張性とハイブリッド接続性を備え、CANバス、RS485、RS232、ギガビットイーサネットポート、その他のインターフェースをサポートし、4G、LoRa®、WiFi、BLEなどの強力なワイヤレス通信機能も備えています。

> \*4GおよびLoRa®モジュールはreTerminal DMにデフォルトで付属していません。関連モジュールを別途購入してください。
> [4Gバンドル](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

:::note
Sensecraft Edge OSは[**こちら**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download)からダウンロードできます。このSensecraft Edge OSは現在reTerminal DMをベースに開発されており、プロダクション版reTerminal DMでのみ動作することにご注意ください。
:::

## ハードウェア要件

以下のハードウェアを準備する必要があります

- reTerminal DM x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- イーサネットケーブル x 1
- 電源アダプタ（12V-24V）BYO
- USB Type-Cケーブル x 1

## ソフトウェア要件

- [usbbootツール](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Raspbian OSフラッシュの手順

> **注意：** Seedによってパッケージ化された最新のシステムイメージには、適切なドライバが含まれています：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **ステップ1.** USB Type-Cポートの隣にある`boot mode switch`を切り替え、下図に従ってスイッチが`disable eMMC boot mode`に設定されていることを確認してください：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **ステップ2.** USB Type-Cデータケーブルを使用して、上図に示すようにreTerminal DMのType-Cポートに接続してください。

- **ステップ3.** 電源から電源コードをreTerminal DMの電源ポートに接続してください。
  
:::danger

電源コードが正しい極性で接続されていることを確認してください。

:::
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

次に、ホストコンピュータでのソフトウェアセットアップに進みましょう。お使いのオペレーティングシステムに応じて手順に従ってください。

### Windows用

- **ステップ1.** **[こちら](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)**をクリックして**rpibootセットアップインストーラー**をダウンロードし、必要なドライバとブートツールをインストールします

- **ステップ2.** USB Type-CケーブルでreTerminal DMをPCに接続します

Windowsがハードウェアを検出し、必要なドライバをインストールします

- **ステップ3.** 以前にインストールした**rpiboot**ツールを検索して開きます

- **ステップ4.** **ファイルエクスプローラー**を開くと、Compute Module 4のeMMCが**USBマスストレージデバイス**として表示されます

- **ステップ5.** **[こちら](https://www.raspberrypi.org/software/)**から**Raspberry Pi Imager**ソフトウェアをダウンロードします

- **ステップ6.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ7.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、WiFiの設定、ロケール設定**などを行うことができます

- **ステップ8.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** **Other general purpose OS**に移動することで、**64ビットUbuntu**などの他のOSを選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ9.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ10.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ11.** **Boot Mode switch**を元の位置に戻します

これで**[こちら](#install-drivers)**にスキップできます

:::note

上記の手順が完了し、reTerminal DMに電源を再投入すると、電源LEDが黄色に点灯し、ACT LEDが緑色に点滅するはずですが、画面は空白でバックライトもありません。パニックにならないでください。[ドライバのインストール](#install-drivers)の手順に従って画面を復活させる必要があります。

:::

### Mac用

:::caution
**以下の手順を進める前に[homebrew](https://brew.sh/)をインストールする必要があります。**
ターミナルを開いて```brew -V```と入力し、正しいhomebrew環境がセットアップされているかを確認してください。インストールされているhomebrew環境のバージョンが表示されるはずです。
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

- **ステップ 3.** **pkg-config** をインストールする

```sh
brew install pkg-config
```

- **ステップ 4.** makeを使用してビルドする

```sh
make
```

- **ステップ 5.** Run the binary

```sh
sudo ./rpiboot
```

- **ステップ 6.** reTerminalをUSB Type-Cケーブルを使ってMacコンピュータに接続します

- **ステップ 7.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします

- **ステップ 8.** **Raspberry Pi Imager**アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます

- **ステップ 10.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS**に移動することで、**64-bit Ubuntu**などのOSを選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ 12.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 13.** **Boot Mode switch**を元の位置に戻します

これで**[こちら](#install-drivers)**にスキップできます

:::note

上記の手順が完了し、reTerminal DMに電源を再投入すると、Power LEDが黄色に点灯し、ACT LEDが緑色に点滅するはずですが、画面は空白でバックライトもありません。慌てる必要はありません。画面を復活させるには[ドライバーのインストール](#install-drivers)の手順に従うだけです。

:::

### Linux用

**rpiboot**のソースコードを取得するためにGitを使用するので、Gitがインストールされていることを確認してください

- **ステップ 1.** **ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のコマンドで **Git** をインストールします

```sh
sudo apt install git libusb-1.0-0-dev pkg-config build-essential
```

- **ステップ 3.** 日付が適切に設定されていない場合、Gitはエラーを出力する可能性があります。これを修正するには以下を入力してください

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

- **ステップ 6.** usbbootツールを実行すると、接続を待機します

```sh
sudo ./rpiboot
```

結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 7.** USB Type-Cケーブルを使用してreTerminalをPCに接続します

- **ステップ 8.** snapをダウンロードします

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
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 11.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

ホスト名の設定、パスワードの設定、WiFiの設定、ロケール設定を行います

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

SSHを有効にします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

ここで **ホスト名の設定、SSHの有効化、パスワードの設定、WiFiの設定、ロケール設定** などを行うことができます

- **ステップ 11.** **CHOOSE OS** をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などのOSを選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 12.** **CHOOSE STORAGE** をクリックして、接続されたeMMCドライブを選択します

- **ステップ 13.** 最後に、**NEXT** をクリックして **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。
結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 14.** **Boot Mode Switch** を元の位置に戻します

:::note

上記の手順が完了し、reTerminal DMに電源を再投入すると、Power LEDが黄色に点灯し、ACT LEDが緑色に点滅するはずですが、画面は空白でバックライトもありません。慌てる必要はありません。画面を復活させるには、[ドライバーのインストール](#install-drivers)の手順に従ってください。

:::

## Install Drivers

### SSH経由でreTerminal DMにアクセス

:::note

以下の手順には基本的なLinuxコマンドラインの知識が必要です。コーヒーを一杯用意して準備してください。

:::

上記のOSフラッシュ手順に従って、reTerminal DMはSSHが有効になり、ホスト名は `raspberrypi.local` になっているはずです。

次に、EthernetケーブルをreTerminal DMとホストコンピューターと同じネットワーク上のルーターに接続してください。

:::tip

reTerminal DMがホストコンピューターと同じネットワーク上にあるかテストするには、`ping raspberrypi.local` を使用できます

pingコマンドの後に以下の出力が表示されれば、両方のデバイスが同じネットワーク上にあることを意味します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Windows の場合

- **ステップ 1.** **コマンドプロンプト** を開いて以下を入力します

```sh
# ssh username@hostname
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
ssh pi@raspberrypi.local
```

- **ステップ2.** 以下のメッセージに対して **yes** と入力してください

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 3.** パスワードを求められたら、以下を入力してください

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 新しいRaspbian OSをフラッシュした後のreTerminalドライバーのインストール

reTerminal DMには必要なドライバーが最初から事前インストールされているため、追加のドライバーをインストールする必要はありません。ただし、自分で新しいOSをフラッシュした場合は、必要なドライバーを別途インストールする必要があります。

:::tip

**32ビットOSドライバーのインストールについては、以下の手順を慎重に実行してください：**

reTerminal DMに事前インストールされているオペレーティングシステムは64ビットです。32ビットOSをインストールしたい場合は、以下の方法を使用してDTSドライバーをインストールしてください。

>⚠️注意：32ビットOSをフラッシュした後は、reTerminal DMを再起動してください。

[**SSH経由でreTerminal DMにアクセス**](#access-reterminal-dm-via-ssh)の手順に従い、その後以下のコマンドを入力してください：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

新しいRaspbian OSをフラッシュした後の[**ドライバーインストールプロセス**](#install-reterminal-drivers-after-flashing-new-raspbian-os)を続行してください

:::

- **ステップ 1.** 上記の手順でreTerminal DMに接続したsshシェルで以下のリポジトリをクローンします

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
sudo ./scripts/reTerminal.sh --device reTerminal-DM
```

<!-- ドライバーが正常にインストールされた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **ステップ 4.** reTerminal DM を再起動します

```sh
sudo reboot
```

画面が点灯し、正常に動作するはずです。

## FAQ

### タッチスクリーンの向き

**Q: スクリーンのタッチパネルの向きが画面表示と異なりますか？**

**A: 以下の手順を慎重に実行してください：**

[SSH経由でreTerminal DMにアクセス](#access-reterminal-dm-via-ssh)の手順に従い、次のコマンドを入力してください：

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```

その後再起動します：

```sh
sudo reboot
```

画面の向きがまだ正しくない場合は、`ENV{LIBINPUT_CALIBRATION_MATRIX}` の追加オプションを[こちら](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html)で見つけることができます。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
