---
description: reTerminal DM OS 書き込み
title: reTerminal DM OS 書き込み
keywords:
  - Edge
  - reTerminal-DM
  - OS 書き込み
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm-flash-OS
sku: 114070201,114070221,E23010420,114070262
last_update:
  date: 04/23/2023
  author: Peter Pan
createdAt: '2023-04-24'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/
---
# reTerminal DM に Raspbian OS を eMMC へ書き込む

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM は 10.1 インチのオープンソース産業用 HMI であり、データフローを統合し、現場デバイスを管理するための統合デバイスマスターです。

Raspberry Pi CM4 をベースにした、パネル PC、HMI、PLC、IIoT ゲートウェイが一体となったデバイスとして、reTerminal DM は IP65 産業グレードの大型スクリーンを備えた新世代のインタラクティブセンシングハブです。

CAN バス、RS485、RS232、ギガビット Ethernet ポートなどのインターフェースをサポートし、豊富な拡張性とハイブリッド接続性を備えるとともに、4G、LoRa®、WiFi、BLE などの強力な無線通信機能も備えています。

> \*4G および LoRa® モジュールはデフォルトでは reTerminal DM に同梱されていません。必要に応じて、以下のような関連モジュールを別途購入してください。
> [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

:::note
Sensecraft Edge OS は [**こちら**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download) からダウンロードできます。この Sensecraft Edge OS は現在 reTerminal DM をベースに開発されており、量産版 reTerminal DM でのみ動作することに注意してください。
:::

## ハードウェア要件

以下のハードウェアを用意する必要があります

- reTerminal DM x 1
- ホストコンピュータ（Windows/Mac/Linux）x 1
- Ethernet ケーブル x 1
- 電源アダプタ (12V-24V) BYO
- USB Type-C ケーブル x 1

## ソフトウェア要件

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Raspbian OS を書き込む手順

> **Note:** Seeed によってパッケージ化された最新のシステムイメージには、適切なドライバが含まれています: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **Step 1.** USB Type-C ポートの横にある `boot mode switch` を切り替え、下図のようにスイッチが `disable eMMC boot mode` に設定されていることを確認します。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **Step 2.** 上の画像に示すように、USB Type-C データケーブルを使用して reTerminal DM の Type-C ポートに接続します。

- **Step 3.** 電源コードを電源から reTerminal DM の電源ポートに接続してください。

:::danger

電源コードが正しい極性で接続されていることを必ず確認してください。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

それでは、ホストコンピュータ上でのソフトウェアセットアップに進みましょう。使用したいオペレーティングシステムに応じて、以下の手順に従ってください。

### Windows の場合

- **Step 1.** 必要なドライバとブートツールをインストールするために、**[here](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** をクリックして **rpiboot setup installer** をダウンロードします。

- **Step 2.** USB Type-C ケーブルで reTerminal DM を PC に接続します。

Windows はハードウェアを検出し、必要なドライバをインストールします。

- **Step 3.** 先ほどインストールした **rpiboot** ツールを検索して開きます。

- **Step 4.** **エクスプローラー** を開くと、Compute Module 4 の eMMC が **USB マスストレージデバイス** として表示されます。

- **Step 5.** **[here](https://www.raspberrypi.org/software/)** から **Raspberry Pi Imager** ソフトウェアをダウンロードします。

- **Step 6.** Raspberry Pi Imager ソフトウェアを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 7.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSH の有効化、パスワードの設定、WiFi の設定、ロケール設定** などを行うことができます。

- **Step 8.** **CHOOSE OS** をクリックし、希望する OS を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** などの他の OS を選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Step 9.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します。

- **Step 10.** 最後に **WRITE** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

書き込みプロセスが完了するまで、数分間お待ちください。

- **Step 11.** **Boot Mode switch** を元の位置に戻します。

これで **[here](#install-drivers)** までスキップできます。

:::note

上記の手順が完了し、reTerminal DM に再度電源を投入すると、Power LED は黄色に点灯し、ACT LED は緑色に点滅しますが、画面は真っ黒でバックライトも点きません。慌てる必要はありません。[install drivers](#install-drivers) の手順に従えば、画面を復帰させることができます。

:::

### MAC の場合

:::caution
**以下の手順を進める前に、[homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開き、```brew -V``` と入力して、正しく homebrew 環境がセットアップされているか確認してください。インストールされている homebrew 環境のバージョンが表示されるはずです。
:::

- **Step 1.** **usbboot** リポジトリをクローンします。

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Step 2.** **libusb** をインストールします。

```sh
brew install libusb
```

- **Step 3.** **pkg-config** をインストールします。

```sh
brew install pkg-config
```

- **Step 4.** make を使ってビルドします。

```sh
make
```

- **Step 5.** バイナリを実行します。

```sh
sudo ./rpiboot
```

- **Step 6.** USB Type-C ケーブルで reTerminal を Mac コンピュータに接続します。

- **Step 7.** [this link](https://www.raspberrypi.org/software/) にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします。

- **Step 8.** **Raspberry Pi Imager** アプリケーションを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 9.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

ここで、**ホスト名の設定、SSH の有効化、パスワードの設定、wifi の設定、ロケール設定** などを行うことができます。

- **Step 10.** **CHOOSE OS** をクリックし、希望する OS を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** などの OS を選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Step 11.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します。

- **Step 12.** 最後に **WRITE** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

書き込みプロセスが完了するまで、数分間お待ちください。

- **Step 13.** **Boot Mode switch** を元の位置に戻します。

これで **[here](#install-drivers)** までスキップできます。

:::note

上記の手順が完了し、reTerminal DM に再度電源を投入すると、Power LED は黄色に点灯し、ACT LED は緑色に点滅しますが、画面は真っ黒でバックライトも点きません。慌てる必要はありません。[install drivers](#install-drivers) の手順に従えば、画面を復帰させることができます。

:::

### Linux の場合

**rpiboot** のソースコードを取得するために Git を使用するので、Git がインストールされていることを確認してください。

- **Step 1.** **ターミナル** ウィンドウを開き、**パッケージリスト** を更新するために次のコマンドを入力します。

```sh
sudo apt-get update
```

- **Step 2.** 次のコマンドで **Git** をインストールします。

```sh
sudo apt install git libusb-1.0-0-dev pkg-config build-essential
```

- **Step 3.** 日付が正しく設定されていない場合、Git はエラーを出すことがあります。これを修正するために次のコマンドを入力します。

```sh
sudo date MMDDhhmm
```

**NOTE:** ここで **MM** は月、**DD** は日付、**hh** と **mm** はそれぞれ時と分です。

- **Step 4.** **usbboot** ツールのリポジトリをクローンします。

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Step 5.** usbboot ツールをビルドしてインストールします。

```sh
make
```

- **Step 6.** usbboot ツールを実行すると、接続待ちの状態になります。

```sh
sudo ./rpiboot
```

結果は次のように表示されます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Step 7.** USB Type-C ケーブルで reTerminal を PC に接続します。

- **Step 8.** snap をダウンロードします。

```sh
sudo apt install snap
```

- **Step 9.** **rpi-imager** をダウンロードします。

```sh
snap install rpi-imager
```

- **Step 10.** Raspberry Pi Imager ソフトウェアを開きます。

```sh
rpi-imager
```

結果は次のように表示されます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **Step 11.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

ホスト名の設定、パスワードの設定、Wi-Fi の設定、ロケール設定を行います

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

SSH を有効化します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

ここでは、**ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ロケール設定** などを行うことができます

- **Step 11.** **CHOOSE OS** をクリックして、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** などの OS を選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Step 12.** **CHOOSE STORAGE** をクリックして、接続されている eMMC ドライブを選択します

- **Step 13.** 最後に **NEXT** と **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。
結果は次のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Step 14.** **Boot Mode Switch** を元の位置に戻します

:::note

上記の手順が完了し、reTerminal DM の電源を再投入すると、Power LED は黄色に点灯し、ACT LED は緑色に点滅しますが、画面は真っ暗でバックライトも点きません。この場合でも慌てる必要はありません。[install drivers](#install-drivers) の手順に従えば、画面を復旧できます。

:::

## ドライバのインストール

### SSH 経由で reTerminal DM にアクセスする

:::note

以下の手順には、基本的な Linux コマンドラインの知識が必要です。コーヒーを一杯用意して、準備を整えてください。

:::

上記の OS フラッシュ手順に従うと、reTerminal DM ではホスト名 `raspberrypi.local` で SSH が有効になっているはずです。

次に、reTerminal DM とホストコンピュータと同じネットワーク上にあるルーターを Ethernet ケーブルで接続してください。

:::tip

reTerminal DM がホストコンピュータと同じネットワーク上にあるかテストするには、`ping raspberrypi.local` を使用できます

ping コマンドの後に次のような出力が表示されれば、両方のデバイスが同じネットワーク上にあることを意味します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Windows の場合

- **Step 1.** **Command Prompt** を開き、次のように入力します

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **Step 2.** プロンプトが表示されたら **yes** と入力します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Step 3.** 次のようにパスワードを入力します

```sh
raspberry
```

- **Step 4.** Raspberry Pi OS へのログインに成功すると、次のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac/Linux の場合

- **Step 1.** コンピュータで **Terminal** を開き、次のように入力します

```sh
ssh pi@raspberrypi.local
```

- **Step 2.** 次のメッセージが表示されたら **yes** と入力します

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Step 3.** パスワードを求められたら、次のように入力します

```sh
raspberry
```

- **Step 4.** Raspberry Pi OS へのログインに成功すると、次のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 新しい Raspbian OS をフラッシュした後に reTerminal ドライバをインストールする

reTerminal DM には必要なドライバがあらかじめインストールされているため、追加のドライバをインストールする必要はありません。ただし、自分で新しい OS をフラッシュした場合は、必要なドライバを別途インストールする必要があります。

:::tip

**32-bit OS ドライバをインストールするには、以下の手順に注意して従ってください：**

reTerminal DM にプリインストールされているオペレーティングシステムは 64-bit です。32-bit OS をインストールしたい場合は、次の方法を使用して DTS ドライバをインストールしてください。

>⚠️注意 : 32-bit OS をフラッシュした後は、reTerminal DM を再起動してください。

[**Access reTerminal DM via SSH**](#access-reterminal-dm-via-ssh) の手順に従い、その後、次のコマンドを入力してください：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

その後、[**Install drivers after flashing new Raspbian OS process**](#install-reterminal-drivers-after-flashing-new-raspbian-os) を続けてください

同時に、最新の公式 32-bit Raspberry Pi OS を使用している場合、その新しいカーネルは本製品と互換性がなく、ドライバの更新に失敗し、画面が真っ暗になる原因となります。開発用に 32-bit OS イメージが必要な場合は、古いバージョンの 32-bit イメージを使用することをお勧めします。
:::

- **Step 1.** 上記の手順で接続した reTerminal DM への ssh シェルで、次のリポジトリをクローンします

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Step 2.** リポジトリに入ります

```sh
cd seeed-linux-dtoverlays
```

- **Step 3.** ドライバをインストールするために次のコマンドを入力します

```sh
sudo ./scripts/reTerminal.sh --device reTerminal-DM
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **Step 4.** reTerminal DM を再起動します

```sh
sudo reboot
```

これで画面が点灯し、正常に動作するはずです。

## FAQ

### タッチスクリーンの向き

**Q: 画面のタッチパネルの向きが、画面表示と異なっていますか？**

**A: 以下の手順に注意して従ってください：**

[access reTerminal DM via SSH](#access-reterminal-dm-via-ssh) の手順に従い、その後、次のコマンドを入力してください：

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```

その後、再起動します：

```sh
sudo reboot
```

それでも画面の向きが正しくない場合は、`ENV{LIBINPUT_CALIBRATION_MATRIX}` の追加オプションが[こちら](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html)にあります。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
