---
description: reTerminal DMのOSフラッシュ方法
title: reTerminal DMのOSフラッシュ方法
keywords:
  - Edge
  - reTerminal-DM
  - OSフラッシュ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal-dm-flash-OS
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal DMにRaspbian OSをeMMCへフラッシュする

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DMは、10.1インチのオープンソース産業用HMIであり、データフローを統一し、現場のデバイスを管理する統合デバイスマスターです。

Raspberry Pi CM4をベースにしたパネルPC、HMI、PLC、IIoTゲートウェイを一体化したデバイスとして、reTerminal DMはIP65産業グレードの大型スクリーンを備えた新世代のインタラクティブセンシングハブです。

CANバス、RS485、RS232、ギガビットイーサネットポートなどのインターフェースをサポートし、4G、LoRa®、WiFi、BLEなどの強力な無線通信機能を備えた豊富な拡張性とハイブリッド接続性を提供します。

> \*4GおよびLoRa®モジュールはデフォルトではreTerminal DMに付属していません。関連するモジュールを別途購入してください。
> [4Gバンドル](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

:::note
Sensecraft Edge OSは[**こちら**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download)からダウンロードできます。このSensecraft Edge OSは現在reTerminal DMをベースに開発されており、製品版reTerminal DMでのみ動作します。
:::

## ハードウェア要件

以下のハードウェアを準備してください：

- reTerminal DM x 1
- ホストコンピュータ (Windows/Mac/Linux) x 1
- イーサネットケーブル x 1
- 電源アダプタ (12V-24V) BYO
- USB Type-Cケーブル x 1 

## ソフトウェア要件

- [usbbootツール](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imagerアプリ](https://www.raspberrypi.com/software/)

## Raspbian OSをフラッシュする手順

> **注意:** Seeedによってパッケージ化された最新のシステムイメージには、適切なドライバが含まれています：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **ステップ1.** USB Type-Cポートの隣にある`ブートモードスイッチ`を切り替え、以下の図に従って`eMMCブートモードを無効化`に設定してください：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **ステップ2.** USB Type-Cデータケーブルを使用してreTerminal DMのType-Cポートに接続してください。上記の画像を参照してください。

- **ステップ3.** 電源コードを電源供給装置からreTerminal DMの電源ポートに接続してください。
  
:::danger

電源コードを正しい極性で接続していることを確認してください。

:::
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

次に、ホストコンピュータでソフトウェアのセットアップを行います。使用するオペレーティングシステムに応じて以下の手順に従ってください。

### Windowsの場合

- **ステップ1.** 必要なドライバとブートツールをインストールするために、**[こちら](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)**をクリックして**rpibootセットアップインストーラー**をダウンロードしてください。

- **ステップ2.** USB Type-Cケーブルを使用してreTerminal DMをPCに接続してください。

Windowsがハードウェアを検出し、必要なドライバをインストールします。

- **ステップ3.** 以前にインストールした**rpiboot**ツールを検索して開いてください。

- **ステップ4.** **ファイルエクスプローラー**を開くと、コンピュータモジュール4のeMMCが**USBマスストレージデバイス**として表示されます。

- **ステップ5.** **[こちら](https://www.raspberrypi.org/software/)**から**Raspberry Pi Imager**ソフトウェアをダウンロードしてください。

- **ステップ6.** Raspberry Pi Imagerソフトウェアを開いてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ7.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開いてください。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、WiFiの構成、ロケール設定**などを行うことができます。

- **ステップ8.** **CHOOSE OS**をクリックして、希望するOSを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64ビットUbuntu**などの他のOSを選択するには、**Other general purpose OS**に移動してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ9.** **CHOOSE STORAGE**をクリックして接続されたeMMCドライブを選択してください。

- **ステップ10.** 最後に**WRITE**をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ってください。

- **ステップ11.** **ブートモードスイッチ**を元の位置に戻してください。

これで**[こちら](#install-drivers)**に進むことができます。

:::note

上記の手順が完了し、reTerminal DMに再度電源を供給すると、電源LEDが黄色に点灯し、ACT LEDが緑色に点滅しますが、画面は空白でバックライトがありません。慌てずに、[ドライバのインストール](#install-drivers)手順に従って画面を復活させてください。

:::

### MACの場合

:::caution
**以下の手順を進める前に[homebrew](https://brew.sh/)をインストールする必要があります。**
ターミナルを開き、```brew -V```と入力して正しいhomebrew環境が設定されているか確認してください。インストールされているhomebrew環境のバージョンが表示されるはずです。
:::

- **ステップ 1.** **usbboot**リポジトリをクローンします

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 2.** **libusb**をインストールします

```sh
brew install libusb
```

- **ステップ 3.** **pkg-config**をインストールします

```sh
brew install pkg-config
```

- **ステップ 4.** makeを使用してビルドします

```sh
make
```

- **ステップ 5.** バイナリを実行します

```sh
sudo ./rpiboot
```

- **ステップ 6.** reTerminalをUSB Type-CケーブルでMacコンピュータに接続します

- **ステップ 7.** [このリンク](https://www.raspberrypi.org/software/)から**Raspberry Pi Imager**アプリケーションをダウンロードしてインストールします

- **ステップ 8.** **Raspberry Pi Imager**アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 9.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの設定、ロケール設定**などを行うことができます。

- **ステップ 10.** **CHOOSE OS**をクリックして、希望のOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64-bit Ubuntu**などのOSを選択するには、**Other general purpose OS**に移動してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ 12.** 最後に**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ってください。

- **ステップ 13.** **Boot Modeスイッチ**を元の位置に戻します

これで**[ここ](#install-drivers)**に進むことができます。

:::note

上記の手順が完了し、reTerminal DMに再度電源を供給すると、電源LEDが黄色に点灯し、ACT LEDが緑色に点滅するはずですが、画面は空白でバックライトがありません。慌てないでください。[ドライバをインストールする](#install-drivers)手順に従うだけで画面を復活させることができます。

:::

### Linuxの場合

**rpiboot**のソースコードを取得するためにGitを使用しますので、Gitがインストールされていることを確認してください。

- **ステップ 1.** **ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のコマンドで**Git**をインストールします

```sh
sudo apt install git libusb-1.0-0-dev pkg-config build-essential
```

- **ステップ 3.** Gitは日付が正しく設定されていない場合にエラーを出すことがあります。以下を入力して修正します

```sh
sudo date MMDDhhmm
```

**注意:** **MM**は月、**DD**は日付、**hh**と**mm**はそれぞれ時間と分を表します。

- **ステップ 4.** **usbboot**ツールリポジトリをクローンします

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 5.** usbbootツールをビルドしてインストールします

```sh
make
```

- **ステップ 6.** usbbootツールを実行し、接続を待機します

```sh
sudo ./rpiboot
```

結果は以下のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 7.** reTerminalをUSB Type-CケーブルでPCに接続します

- **ステップ 8.** snapをダウンロードします

```sh
sudo apt install snap
```

- **ステップ 9.** **rpi-imager**をダウンロードします

```sh
snap install rpi-imager
```

- **ステップ 10.** Raspberry Pi Imagerソフトウェアを開きます

```sh
rpi-imager
```

結果は以下のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 11.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

ホスト名の設定、パスワードの設定、Wi-Fiの設定、ロケール設定を行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

SSHを有効化します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSHの有効化、パスワードの設定、Wi-Fiの設定、ロケール設定**などを行うことができます。

- **ステップ 11.** **CHOOSE OS**をクリックして、希望のOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意:** **64-bit Ubuntu**などのOSを選択するには、**Other general purpose OS**に移動してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 12.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します

- **ステップ 13.** 最後に**NEXT**と**YES**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ってください。
結果は以下のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 14.** **Boot Modeスイッチ**を元の位置に戻します

:::note

上記の手順が完了し、reTerminal DMに再度電源を供給すると、電源LEDが黄色に点灯し、ACT LEDが緑色に点滅するはずですが、画面は空白でバックライトがありません。慌てないでください。[ドライバをインストールする](#install-drivers)手順に従うだけで画面を復活させることができます。

:::

## ドライバーのインストール

### reTerminal DM に SSH でアクセスする

:::note

以下の手順では基本的な Linux コマンドラインの知識が必要です。コーヒーを準備して、作業に取り掛かる準備をしてください。

:::

上記の OS 書き込み手順に従うと、reTerminal DM は `raspberrypi.local` というホスト名で SSH が有効になっているはずです。

次に、reTerminal DM にイーサネットケーブルを接続し、ホストコンピュータと同じネットワーク上にあるルーターに接続してください。

:::tip

reTerminal DM がホストコンピュータと同じネットワーク上にあるかどうかを確認するには、`ping raspberrypi.local` を使用できます。

以下のような出力が ping コマンドの後に表示されれば、両方のデバイスが同じネットワーク上にあることを意味します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Windowsの場合

- **ステップ 1.** **コマンドプロンプト**を開き、以下を入力します

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **ステップ 2.** プロンプトに対して **yes** を入力します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 3.** 以下のパスワードを入力します

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac/Linuxの場合

- **ステップ 1.** コンピュータで **ターミナル** を開き、以下を入力します

```sh
ssh pi@raspberrypi.local
```

- **ステップ 2.** 以下のメッセージに対して **yes** を入力します

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 3.** パスワードを求められたら、以下を入力します

```sh
raspberry
```

- **ステップ 4.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 新しい Raspbian OS を書き込んだ後の reTerminal ドライバーのインストール

reTerminal DM には必要なドライバーがあらかじめインストールされているため、追加のドライバーをインストールする必要はありません。ただし、自分で新しい OS を書き込んだ場合は、必要なドライバーを別途インストールする必要があります。

:::tip

**32ビット OS ドライバーをインストールする場合、以下の手順を慎重に実行してください：**

reTerminal DM にプリインストールされている OS は 64ビットです。32ビット OS をインストールしたい場合は、以下の方法で DTS ドライバーをインストールしてください。

[**reTerminal DM に SSH でアクセスする**](#access-reterminal-dm-via-ssh) の手順に従い、以下のコマンドを入力してください：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```
その後、[**新しい Raspbian OS を書き込んだ後のドライバーインストール手順**](#install-reterminal-drivers-after-flashing-new-raspbian-os) を続行してください。

:::

- **ステップ 1.** 上記の手順で reTerminal DM に接続した SSH シェルで以下のリポジトリをクローンします

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **ステップ 2.** リポジトリに移動します

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

これで画面が点灯し、正常に動作するはずです。

## FAQ

### タッチスクリーンの向き

**Q: スクリーンタッチパネルの向きが画面表示と異なっていますか？**

**A: 以下の手順を慎重に実行してください：**

[reTerminal DM に SSH でアクセスする](#access-reterminal-dm-via-ssh)手順に従い、次のコマンドを入力してください：

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```
その後、再起動してください：

```sh
sudo reboot
```

もし画面の向きがまだ正しくない場合は、`ENV{LIBINPUT_CALIBRATION_MATRIX}`の追加オプションを[こちら](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html)で確認できます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>