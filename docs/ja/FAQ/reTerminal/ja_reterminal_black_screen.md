---
description: reTerminal-FAQ
title: reTerminalの黒い画面問題のトラブルシューティング方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal_black_screen
last_update:
  date: 11/15/2023
  author: Kasun Thushara
---

reTerminalには必要なドライバーが最初から事前にインストールされているため、追加のドライバーをインストールする必要はありません。<br/>
ただし、画面が正しく表示されず黒いままの場合は、以下のトラブルシューティング手順に従って問題を特定し、段階的に解決してください。

## ステップ1：LEDの点滅状態を確認する

### PWRライトが点灯していない場合

  電源供給に問題がある可能性があるため、電源の状態を確認する必要があります。さらに、ハードウェアの問題を除外するため、reTerminal内のCM4モジュールが適切に接続されていることを確認してください。

### PWRライトは点灯しているがSYSライトが点灯していない場合

  元の工場出荷時システムを再度フラッシュする必要があります。このセクションに直接進むことができます。

### 両方のライトが点灯している場合

  この状況はLCD画面を制御するドライバーの問題により発生します。この時点で、[**2番目のステップ**](/ja/reterminal_black_screen/#second-confirm-whether-you-have-installed-a-new-system)で提供されているトラブルシューティング手順に従い、段階的に実行してください。

## ステップ2：新しいシステムをインストールしたかどうかを確認する

:::caution

- 自分で新しいOSをフラッシュしてLCD画面が正しく表示されない場合は、[**必要なreTerminalドライバーをインストール**](/ja/reterminal_black_screen/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)する必要があります。

- 独自のOSをフラッシュしていないが画面が黒いままの場合は、[**reTerminalに元々搭載されているRaspberry Pi OSをフラッシュ**](/ja/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)に直接進んでください。

- **Raspbian OS**をインストールしようとしている場合、テストを実施した結果、**Bulleseye**の*32ビットと64ビット*の両方のバージョンがreTerminalで**黒い画面問題**に遭遇することなく正常に動作することがわかりました。さらに、新しい**Bookworm** *64ビット*バージョンもテストし、reTerminalで正常に機能することを確認しました。

:::

### 新しいRaspberry Pi OS/ Ubuntu OSまたはその他のOSをフラッシュした後のreTerminalドライバーのインストール

ドライバーが必要なハードウェアには、**5インチLCD、タッチパネル、加速度計、光センサー、ユーザーLED、ユーザーボタン、RTC、ブザー、暗号化コプロセッサー**が含まれます。
したがって、このドライバーをインストールすることで、新しいRaspberry Pi OS/ Ubuntu OSまたはその他のOSを使用する際にLCD画面の適切な機能が有効になります。

- **1.** 以下のリポジトリをクローンします

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **2.** リポジトリに入ります

```sh
cd seeed-linux-dtoverlays
```

:::note
**32ビットOS**の場合、`sudo ./scripts/reTerminal.sh`を実行する前に以下のステップを追加する必要があります。インストール完了後、変更を有効にするためにreTerminalを**再起動**することを忘れないでください。

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```

:::

- **3.** 以下を入力してドライバーをインストールします

```sh
sudo ./scripts/reTerminal.sh
```

ドライバーが正常にインストールされた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>

- **4.** reTerminalを再起動します

```sh
sudo reboot
```

最後に、新しいシステムでLCD画面を正常に使用できます。

### reTerminalに元々搭載されているRaspberry Pi OSをフラッシュする

:::caution
異なるOSにフラッシュしており、reTerminalに搭載されているデフォルトのRaspberry Pi OSに戻したい場合は、以下の手順に従ってください
:::

reTerminalのCM4の**eMMCストレージ**に**Raspberry Pi OS / 64ビットUbuntu OSまたはその他のOS**をフラッシュできます。以前にreTerminalでシステムをフラッシュしたことがない場合は、**必要なドライバーのインストール**を含むシステムフラッシュの準備として、[eMMCに異なるOSをフラッシュ](/ja/flash_different_os_to_emmc)に従うことを強くお勧めします。

[必要なドライバー](/ja/flash_different_os_to_emmc)がインストールされたら、reTerminalのUSB Type-CポートをPCに接続するだけです。ファイルエクスプローラーを開いてCompute Module 4のeMMCがUSBマスストレージデバイスとして表示されたら、以下の手順を実行できます：

- **1.** 以下のリンクにアクセスしてRaspberry Pi OSをダウンロードします

  - [32ビット 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64ビット 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**注意：** reTerminalは元々32ビットOSで出荷されています。ただし、64ビット版もダウンロードできます

- **2.** **.zipファイル**を展開します

- **3.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます

- **5.** **CHOOSE OS**をクリックして**Use custom**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** 以前に展開したイメージに移動し、それを選択して**open**をクリックします

- **7.** **CHOOSE STORAGE**をクリックして接続されたeMMCドライブを選択します

- **8.** 最後に、**WRITE**をクリックします

最後に、元のシステムでLCD画面を正常に使用できます。

## ステップ1/2でも画面の問題が解決しない場合 - reTerminal LCD用のSTM32ファームウェアを更新する

:::note
2021年9月26日以降に製造されたreTerminalには、V1.8ファームウェアがプリインストールされたSTM32が搭載されています。
:::

reTerminalのSTM32G030チップに最新のファームウェアがフラッシュされていることを確認することは非常に重要です。STM32G030はreTerminalのLCDを駆動する役割を担っています。STM32チップを最新バージョンに更新することで、reTerminal LCDで発生するほとんどの問題を解決するのに役立ちます。

STM32チップをフラッシュする方法は2つあります。

- **方法1:** reTerminal上のCM4を使用してSTM32チップに直接接続し、ファームウェアをフラッシュする
- **方法2:** STM32チップのピンをジャンパーワイヤーを使用してreTerminalの40ピンGPIOに物理的に接続し、OpenOCDを使用してファームウェアをフラッシュする

**方法1**は、reTerminalに**新しいバージョン（v1.7以上）**のSTM32ファームウェアがある場合に機能し、一方**方法2**は、ボードに**古いバージョン（v1.7未満）**のSTM32ファームウェアがある場合にのみ必要です。

### 使用するフラッシュ方法を決定する

次に、以下の手順に従って、どのバージョンのボードを持っているかを特定し、適切なフラッシュ方法を選択できるようにしましょう。

- **1.** reTerminalのターミナルウィンドウに入り、以下を入力して設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **2.** このファイルの最下部で、**dtoverlay=reTerminal**と書かれた行をコメントアウトします

```sh
#dtoverlay=reTerminal
```

**注意:** これによりすべてのreTerminalドライバーがアンロードされます。そのため、次回reTerminalを起動する際、ドライバーは一切ロードされません。

- **3.** reTerminalを再起動します

```sh
sudo reboot
```

- **4.** **i2c-tools**を通じてSTM32を**ブートモード**に入らせます

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **5.** 接続されているI2Cデバイスをリストアップします

```sh
i2cdetect -y 1
```

以下の表のようにI2Cアドレス**0x56**が表示される場合、ボードには**新しいバージョン（v1.7以上）**のSTM32ファームウェアがあります。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

しかし、以下の表のようにI2Cアドレス**0x45**が表示される場合、ボードには**古いバージョン（v1.7未満）**のSTM32ファームウェアがあります

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **6.** 先ほど使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **7.** このファイルの最下部で、**dtoverlay=reTerminal**と書かれた行のコメントを外して、ドライバーを再度ロードします

```sh
dtoverlay=reTerminal
```

- **8.** reTerminalの電源を切ります

```sh
sudo poweroff
```

**注意:** すでに**STM32 v1.8ファームウェア**を実行している場合、**i2c-tools**を通じて**ブートモード**に入ると、ブートモードから抜け出す唯一の方法はSTM32ファームウェアをフラッシュすることです。

### CM4を使用してSTM32に接続し、ファームウェアをフラッシュする

:::caution
ボードに**新しいバージョン（v1.7以上）**のSTM32ファームウェアがある場合は、この方法に従ってください。
:::

- **1.** reTerminalのターミナルウィンドウに入り、以下を入力して設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **2.** このファイルの最下部で、**dtoverlay=reTerminal**と書かれた行をコメントアウトします

```sh
#dtoverlay=reTerminal
```

- **3.** reTerminalを再起動します

```sh
sudo reboot
```

- **4.** reTerminal内に新しいディレクトリを作成し、そこに入ります。

```sh
mkdir STM32
cd STM32
```

<!-- - **5.** [このリンク](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases)にアクセスし、**最新リリース**バージョンから**stm32flash**ファイルと**STM32G030F6_R2.bin**ファイルをダウンロードしてください。

**注意:** それらをクリックするとダウンロードが開始されます -->

- **5.** **stm32flash**ファイルと**STM32G030F6_R2.bin**をダウンロードします

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **6.** **stm32flash-0.7.tar.gz**を展開します

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **7.** **stm32flash-0.7**という名前のフォルダに移動し、フラッシュツールを実行可能にします

```sh
cd stm32flash-0.7/
make
```

- **8.** **i2c-tools**を通じてSTM32を**ブートモード**に入らせます

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **9.** **stm32flashツール**を使用してSTM32チップのフラッシュを消去します

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **10.** stm32flashツールを使用してSTM32にファームウェアをフラッシュします

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意:** **STM32G030F6_R2.bin**は新しいファームウェアのファイル名です

- **11.** OPTRレジスタを以下のように変更します

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **12.** 先ほど使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **13.** このファイルの最下部で、**dtoverlay=reTerminal**と書かれた行のコメントを外します

```sh
dtoverlay=reTerminal
```

- **14.** reTerminalを再起動します

```sh
sudo reboot
```

<!-- - **6.** PCでコマンドプロンプトを開き、以前にダウンロードしたファイルの場所に移動する

```sh
cd C:\Users\user\Downloads
```

- **7.** ファイルを、以前作成したreTerminal上の**STM32**ディレクトリに転送する

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**注意:** **pi**はユーザー名で、**192.168.x.xx**はreTerminalのIPアドレスです。これをreTerminalのホスト名に置き換えることもできます。

- **8.** reTerminalのターミナルウィンドウ内で、**STM32**ディレクトリに入る

```sh
cd STM32
```

その後、先ほどコピーしたファイルが表示されます

- **9.** フラッシュツールを**実行可能**にする

```sh
chmod +x stm32flash
``` -->

<!-- - **10.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **11.** **stm32flash ツール**を使用してSTM32チップのフラッシュを消去する

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **12.** stm32flashツールを使用してSTM32にファームウェアを書き込む

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意:** **STM32G030F6_R2.bin** は新しいファームウェアのファイル名です

- **13.** OPTRレジスタを以下のように変更します

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **14.** 以前使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **15.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行のコメントアウトを解除します

```sh
dtoverlay=reTerminal
```

- **16.** reTerminalを再起動します

```sh
sudo reboot
``` -->

これでSTM32へのファームウェアの書き込みが正常に完了しました！

### ジャンパーワイヤーとOpenOCDを使用してSTM32に接続する

:::caution
ボード上に **古いバージョン（v1.7未満）** のSTM32ファームウェアがある場合は、この方法に従ってください。
:::

- **1.** reTerminalのターミナルウィンドウに入り、以下を入力してパッケージリストを更新します

```sh
sudo apt-get update
```

- **2.** 以下のパッケージをインストールします

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **3.** 以下のリポジトリをクローンして移動します

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **4.** [このリンク](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases)にアクセスし、**最新リリース**バージョンから **STM32G030F6_R2.bin** ファイルをダウンロードします。

**注意:** クリックするとダウンロードが開始されます

- **5.** PC上でコマンドプロンプトを開き、以前にダウンロードしたファイルの場所に移動します

```sh
cd C:\Users\user\Downloads
```

- **6.** ファイルを以前に作成したreTerminal上の **openocd** ディレクトリに転送します

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**注意:** **pi** はユーザー名で、**192.168.x.xx** はreTerminalのIPアドレスです。これをreTerminalのホスト名に置き換えることもできます。

- **7.** reterminalのターミナルウィンドウに戻り、**openocd** ディレクトリ内で以下を入力します

```sh
./bootstrap
```

- **8.** 以下を入力します

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **9.** コンパイルします

```sh
make
```

- **10.** インストールします

```sh
sudo make install
```

- **11.** 以下の接続に従って、STM32から40ピンGPIOにピンを接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**注意:** STM32ピンはreTerminal PCBAの背面に位置しています。

- **12.** 接続を維持しながら、以下のコマンドを入力してSTM32にファームウェアを書き込みます

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**注意:** 通常、書き込み完了まで約3秒かかります。そのため、書き込みプロセスが完了するまで約**3秒間**上記の接続を**保持**する必要があります

以下のログが表示された場合、STM32ファームウェアの書き込みが正常に完了したことを意味します！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **13.** 接続を切断し、**poweroff** コマンドを使わずに**電源コードを直接物理的に切断**します

**注意:** 電源コードを物理的に抜かないと、STM32ファームウェアが正常にロードされません

これでSTM32へのファームウェアの書き込みが正常に完了しました！

### インストールされたSTM32G030ファームウェアバージョンの確認

次に、インストールされたSTM32ファームウェアバージョンを確認しましょう

- **1.** reTerminalのターミナルウィンドウに入り、以下を入力して設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **2.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行をコメントアウトします

```sh
#dtoverlay=reTerminal
```

- **3.** reTerminalを再起動します

- **4.** reTerminalのターミナルウィンドウ内で以下を入力してSTM32ファームウェアバージョンを確認します

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

出力が **0x01 0x07** のような場合、ファームウェアバージョン1.7を使用していることを意味します

- **5.** 以前使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **6.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行のコメントアウトを解除します

```sh
dtoverlay=reTerminal
```

- **7.** reTerminalを再起動します

```sh
sudo reboot
```

## 最新バージョンのRaspberry Pi OS - Bookwormをフラッシュする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/bookworm.jpeg" alt="pir" width={600} height="auto" /></p>

Raspberry Pi公式の最新リリースである最新のBookworm OSのイメージを準備しました。何らかの問題、特に上記で説明した問題が発生した場合は、よりスムーズな体験のためにこれらの手順に従うことを強くお勧めします。

:::note
続行する前に、**ブートモードスイッチを下に倒す**ことを確認してください。次に、**rpibootセットアップインストーラー**を起動します。これらの手順を実行する方法の詳細な説明は[**こちら**](https://wiki.seeedstudio.com/ja/flash_different_os_to_emmc/)で提供されています。

:::

- **1.** 以下のリンクにアクセスしてRaspberry Pi OSをダウンロードします

  <!-- - [64-bit Bookworm-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz) -->

| バージョン                     | 説明      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux version 6.6.20 | lastest |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux version 6.6.20           | lastest |
| [2023_11_15_bookworm_64.img.gz](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz)               | 64bit Debian12(bookworm) Linux version 6.1  | release |

- **2.** **.zipファイル**を展開します

- **3.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます

- **5.** **CHOOSE OS**をクリックし、**Use custom**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** 先ほど展開したイメージに移動し、それを選択して**open**をクリックします

- **7.** **CHOOSE STORAGE**をクリックし、接続されたeMMCドライブを選択します

- **8.** 最後に、**WRITE**をクリックします

最後に、**ブートモードスイッチ**を元の位置に戻し、reTerminalのシェルを組み立てます。その後、**電源を入れます**。元のシステムでLCDスクリーンを正常に使用できます。
