---
description: reTerminal-FAQ
title: reTerminal使用に関するFAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-FAQ
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# reTerminal使用に関するFAQ

この文書には、reTerminalに関するよくある質問がすべて含まれています。reTerminalを使用する際に何らかの問題が発生している場合、この文書が非常に役立ちます。

## Q1: reTerminal LCDのSTM32ファームウェアを更新するにはどうすればよいですか

**注意:** 2021年9月26日以降に製造されたreTerminalには、V1.8ファームウェアがプリインストールされたSTM32が搭載されています。

reTerminalのSTM32G030チップに最新のファームウェアがフラッシュされていることを確認することは非常に重要です。STM32G030はreTerminalのLCDを駆動する役割を担っています。STM32チップを最新バージョンに更新することで、reTerminal LCDで発生するほとんどの問題を解決するのに役立ちます。

STM32チップをフラッシュする方法は2つあります。

- **方法1:** reTerminalのCM4を使用してSTM32チップに直接接続し、ファームウェアをフラッシュする
- **方法2:** STM32チップのピンをジャンパーワイヤーを使用してreTerminalの40ピンGPIOに物理的に接続し、OpenOCDを使用してファームウェアをフラッシュする

**方法1**は、reTerminalに**新しいバージョン（v1.7以上）**のSTM32ファームウェアがある場合に機能し、一方**方法2**は、ボードに**古いバージョン（v1.7未満）**のSTM32ファームウェアがある場合にのみ必要です。

### 使用するフラッシュ方法の決定

それでは、以下の手順に従って、どのバージョンのボードを持っているかを特定し、適切なフラッシュ方法を選択できるようにしましょう。

- **ステップ1.** reTerminalのターミナルウィンドウに入り、以下を入力して設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ2.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行をコメントアウトします

```sh
#dtoverlay=reTerminal
```

**注意:** これにより、すべてのreTerminalドライバがアンロードされます。そのため、次回reTerminalを起動する際には、どのドライバも読み込まれません。

- **ステップ 3.** reTerminalを再起動する

```sh
sudo reboot
```

- **ステップ4.** **i2c-tools**を使用してSTM32を**ブートモード**に入らせる

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **ステップ 5.** 接続されたI2Cデバイスをリストアップする

```sh
i2cdetect -y 1
```

下記の表のようにI2Cアドレス**0x56**が確認できる場合、ボード上のSTM32ファームウェアは**新バージョン（v1.7以上）**です。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

しかし、下記の表のようにI2Cアドレス**0x45**が確認できる場合、ボード上のSTM32ファームウェアは**旧バージョン（v1.7未満）**です。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** 以前に使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ 7.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行のコメントアウトを解除して、ドライバーを再度読み込みます

```sh
dtoverlay=reTerminal
```

- **ステップ 8.** reTerminalの電源を切る

```sh
sudo poweroff
```

**注意:** すでに **STM32 v1.8 ファームウェア** を実行している場合、**i2c-tools** を通じて **ブートモード** に入ると、ブートモードから抜け出す唯一の方法は STM32 ファームウェアをフラッシュすることです。

### CM4 を使用して STM32 に接続し、ファームウェアをフラッシュする

ボード上に **新しいバージョン（v1.7 以上）** の STM32 ファームウェアがある場合は、この方法に従ってください。

- **ステップ 1.** reTerminal のターミナルウィンドウを開き、以下を入力して設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ2.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行をコメントアウトします

```sh
#dtoverlay=reTerminal
```

- **ステップ 3.** Reboot reTerminal

```sh
sudo reboot
```

- **ステップ 4.** reTerminal内に新しいディレクトリを作成し、そこに入ります。

```sh
mkdir STM32
cd STM32
```

- **ステップ 5.** **stm32flash** ファイルと **STM32G030F6_R2.bin** をダウンロードします

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **ステップ 6.** **stm32flash-0.7.tar.gz** を展開します

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **ステップ 7.** **stm32flash-0.7** という名前のフォルダに移動し、フラッシュツールを実行可能にします

```sh
cd stm32flash-0.7/
make
```

- **ステップ 8.** **i2c-tools** を使用して STM32 を **ブートモード** に入らせる

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **ステップ 9.** **stm32flashツール**を使用してSTM32チップのフラッシュを消去します

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **ステップ 10.** stm32flashツールを使用してSTM32にファームウェアを書き込む

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意：** **STM32G030F6_R2.bin** は新しいファームウェアのファイル名です

- **ステップ 11.** OPTR レジスタを以下のように変更します

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **ステップ 12.** 以前に使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ 13.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行のコメントアウトを解除します

```sh
dtoverlay=reTerminal
```

- **ステップ 14.** reTerminalを再起動します

```sh
sudo reboot
```

<!-- - **ステップ 6.** PC でコマンドプロンプトを開き、事前にダウンロードしたファイルの場所に移動します

```sh
cd C:\Users\user\Downloads
```

- **ステップ 7.** ファイルを、以前に作成したreTerminal上の**STM32**ディレクトリに転送します

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**注意:** **pi** はユーザー名で、**192.168.x.xx** は reTerminal の IP アドレスです。これを reTerminal のホスト名に置き換えることもできます。

- **ステップ 8.** reTerminal のターミナルウィンドウ内で、**STM32** ディレクトリに入ります

```sh
cd STM32
```

すると、先ほどコピーしたファイルが表示されます

- **ステップ 9.** フラッシュツールを**実行可能**にします

```sh
chmod +x stm32flash
``` -->
<!-- - **ステップ 10.** **i2c-tools**を通じてSTM32を**ブートモード**に入らせる

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```
- **ステップ 11。** **stm32flashツール**を使用してSTM32チップのフラッシュを消去する

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```
- **ステップ 12.** stm32flashツールを使用してSTM32にファームウェアを書き込む

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意：** **STM32G030F6_R2.bin** は新しいファームウェアのファイル名です

- **ステップ 13.** OPTR レジスタを以下のように変更します

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **ステップ 14.** 以前に使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ 15.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行のコメントアウトを解除します

```sh
dtoverlay=reTerminal
```

- **ステップ 16.** reTerminalを再起動します

```sh
sudo reboot
``` -->
これでSTM32にファームウェアの書き込みが正常に完了しました！

### ジャンパーワイヤーとOpenOCDを使用してSTM32に接続する

ボード上に**旧バージョン（v1.7未満）**のSTM32ファームウェアがある場合は、この方法に従ってください。

- **ステップ 1.** reTerminalのターミナルウィンドウに入り、以下を入力してパッケージリストを更新します

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のパッケージをインストールしてください

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **ステップ 3.** 以下のリポジトリをクローンして、そこに移動してください

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **ステップ 4.** [このリンク](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases)にアクセスし、**最新リリース**バージョンから**STM32G030F6_R2.bin**ファイルをダウンロードしてください。

**注意:** クリックするとダウンロードが開始されます

- **ステップ 5.** PC上でコマンドプロンプトを開き、先ほどダウンロードしたファイルの場所に移動してください

```sh
cd C:\Users\user\Downloads
```

- **ステップ 6.** ファイルを、以前に作成したreTerminal上の**openocd**ディレクトリに転送します

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**注意:** **pi** はユーザー名で、**192.168.x.xx** は reTerminal の IP アドレスです。これを reTerminal のホスト名に置き換えることもできます。

- **ステップ 7.** reTerminal のターミナルウィンドウに戻り、**openocd** ディレクトリ内で以下を入力します

```sh
./bootstrap
```

- **ステップ 8.** 次の内容を入力します

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **ステップ 9.** コンパイルする

```sh
make
```

- **ステップ 10.** それをインストールします

```sh
sudo make install
```

- **ステップ 11.** 以下の接続に従って、STM32から40ピンGPIOへのピンを接続してください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**注意:** STM32ピンはreTerminal PCBAの背面に位置しています。

- **ステップ 12.** 接続を維持したまま、以下のコマンドを入力してSTM32にファームウェアをフラッシュしてください

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**注意:** 通常、フラッシュ処理は約3秒で完了します。そのため、フラッシュ処理が完了するまで約**3秒間**上記の接続を**保持**する必要があります

以下のログが表示された場合、STM32ファームウェアが正常にフラッシュされたことを意味します！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **ステップ 13.** 接続を切断し、**poweroff**コマンドを使わずに**電源コードを物理的に直接切断**します

**注意:** 電源コードを物理的に抜かない場合、STM32ファームウェアは正常にロードされません

これでSTM32へのファームウェアのフラッシュが正常に完了しました！

### インストールされたSTM32G030ファームウェアバージョンの確認

それでは、インストールされたSTM32ファームウェアのバージョンを確認しましょう

- **ステップ 1.** reTerminalのターミナルウィンドウに入り、以下を入力して設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ2.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行をコメントアウトします

```sh
#dtoverlay=reTerminal
```

- **ステップ 3.** reTerminal を再起動する

- **ステップ 4.** reTerminal のターミナルウィンドウで以下を入力して STM32 ファームウェアのバージョンを確認する

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

出力が **0x01 0x07** のように表示される場合、ファームウェアバージョン1.7を使用していることを意味します

- **ステップ5.** 以前に使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ 6.** このファイルの最下部で、**dtoverlay=reTerminal** と書かれた行のコメントアウトを解除します

```sh
dtoverlay=reTerminal
```

- **ステップ 7.** reTerminalを再起動します

```sh
sudo reboot
```

## Q2: reTerminalに元々搭載されているRaspberry Pi OSをフラッシュするにはどうすればよいですか？

異なるOSにフラッシュした後、reTerminalに搭載されているデフォルトのRaspberry Pi OSに戻したい場合は、以下の手順に従ってください

- **ステップ 1.** 以下のリンクにアクセスしてRaspberry Pi OSをダウンロードします

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**注意:** reTerminalは元々32-bit OSが搭載されています。ただし、64-bit版もダウンロードできます

- **ステップ 2.** **.zipファイル**を展開します

- **ステップ 3.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます

- **ステップ 5.** **OSを選ぶ**をクリックし、**カスタムイメージを使う**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** 先ほど展開したイメージに移動し、それを選択して**開く**をクリックします

- **ステップ 7.** **ストレージを選ぶ**をクリックし、接続されたeMMCドライブを選択します

- **ステップ 8.** 最後に、**書き込み**をクリックします

## Q3: Raspberry Pi OSとインストールされたパッケージをアップグレードする方法

すべてのパッケージとRaspberry Pi OSを最新バージョンにアップデートします

- **ステップ 1.** reTerminalでターミナルウィンドウを開き、以下を入力します

```sh
sudo apt update
sudo apt full-upgrade
```

- **ステップ 2.** カーネルヘッダーを再インストールする

```sh
sudo apt install raspberrypi-kernel-headers
```

- **ステップ 3.** reTerminalを再起動します

```sh
sudo reboot
```

これで Raspberry Pi OS と必要なパッケージがすべて最新の状態になりました！

## Q4: CM4 を非 eMMC バージョンに交換した場合、OS をフラッシュする方法

reTerminal で eMMC なしの Compute Module 4 を使用したい場合は、micro-SD を挿入して、お好みの OS をフラッシュする必要があります。お使いのオペレーティングシステムに応じて、以下の手順に従ってください。

- **ステップ 1.** コンピュータに接続された **micro-SD カードリーダー** を使用するか、ノートパソコンの **内蔵カードリーダー** を使用して、micro-SD カードをコンピュータに挿入します

- **ステップ 2.** [このリンク](https://www.raspberrypi.org/software/) にアクセスして **Raspberry Pi Imager** ソフトウェアをダウンロードします

**注意:** **Windows、Mac、または Ubuntu** のいずれかを選択してダウンロードできます

- **ステップ 3.** Raspberry Pi Imager ソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** キーボードで **CTRL + SHIFT + X** を押して **詳細オプション** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、wifi の設定、ロケール設定** などを行うことができます

- **ステップ 5.** **CHOOSE OS** をクリックして、お好みの OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

**注意:** **Other general purpose OS** に移動することで、**64-bit Ubuntu** などの OS を選択できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 6.** **CHOOSE STORAGE** をクリックして、接続された micro-sd カードを選択します

- **ステップ 7.** 最後に、**WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

フラッシュプロセスが完了するまで数分お待ちください。

- **ステップ 8.** micro-SD カードをコンピュータから取り出し、reTerminal に挿入します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**注意:** micro-sd カードスロットにアクセスするには、reTerminal のシェルを開く必要があります

## Q5: USB to シリアルコンバータを使用して Raspberry Pi OS/ Ubuntu OS またはその他の OS にログインする方法

**USB to シリアルコンバータ** をお持ちの場合は、以下の手順で Raspberry Pi OS にログインできます

USB to シリアルコンバータから reTerminal の 40 ピン GPIO ヘッダーの **UART ピン** にジャンパーワイヤを以下のように接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

次に、コンピュータでソフトウェアを設定しましょう。お使いのオペレーティングシステムに応じて以下の手順に従ってください

### Windows の場合

- **ステップ 1.** USB to シリアルコンバータを PC に接続します

- **ステップ 2.** Windows 検索ボックスに **Device Manager** と入力して **デバイスマネージャー** を開きます

- **ステップ 3.** **ポート (COM と LPT)** のドロップダウン矢印をクリックして、接続されたシリアルポートの名前を見つけます（例: **COM7**）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **ステップ 4.** [このリンク](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) にアクセスして **Putty** をダウンロードしてインストールします

**注意:** Putty は SSH および telnet クライアントで、SSH 経由で reTerminal に接続するために使用できます。すでに Putty がインストールされている場合は、この手順をスキップできます

- **ステップ 5.** Putty を開いて PC を reTerminal に接続します

- **ステップ 6.** **Connection Type** で **Serial** を選択します

- **ステップ 7.** 以下のように設定を構成します:

  - Serial line: COM7（お使いの COM ポートを選択）
  - Speed: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **ステップ 8.** **Open** をクリックします

- **ステップ 9.** Putty ウィンドウで、以下のようにログイン詳細を入力します

```sh
- Username: pi
- Password: raspberry
```

- **ステップ 10.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### Mac/Linux向け

- **ステップ 1.** USB to Serial ConverterをPCに接続します

- **ステップ 2.** Mac/Linuxで**ターミナルウィンドウ**を開きます

- **ステップ 3.** **パッケージリスト**を更新するために以下を入力します

```sh
sudo apt-get update
```

- **ステップ 4.** 以下を入力して **minicom** をインストールします

```sh
sudo apt-get install minicom
```

- **ステップ 5.** 接続されたシリアルデバイスを表示するために、ターミナルで以下を入力してください

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>例: <br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **ステップ 6.** 以下を入力してシリアルデバイスに接続します

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**注意:** ボーレートは9600に設定されています

- **ステップ 7.** 上記のハードウェア接続を行った後、壁のコンセントから電源を入れてreTerminalの電源をオンにします

これでRaspberry Pi OSへのログインが正常に完了しました。

## Q6: スリープ後にreTerminalのLCDをウェイクアップできません

SSHまたはVNC経由で接続した後、ターミナルウィンドウを開いて以下のコマンドを入力してください

```sh
DISPLAY=:0 xset dpms force off
DISPLAY=:0 xset dpms force on
```

これによりreTerminalのLCDが再初期化されます

## Q7: USBフラッシュドライブからOSを起動する方法

以下の手順に従って、USBフラッシュドライブからOSを起動できます。ここでは起動順序を**USB起動 > eMMC起動**に変更します。これは、USB起動が失敗した場合、eMMCから起動することを意味します。

**注意:** この方法では、ホストPCとしてUbuntuまたはMacOSを使用する必要があります。

- **ステップ1.** 4つのゴムカバーを取り外し、その下にある4つのネジを外してreTerminalの背面シェルを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **ステップ2.** 2つのネジを取り外してヒートシンクを分解し、残りの4つのネジも取り外してケース全体を分解します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ3.** 以下の図に従って**起動モードスイッチ**を下に倒します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **ステップ4.** reTerminalに接続した後、ホストPC内で**ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します

```sh
sudo apt update
```

- **ステップ 5.** 次のコマンドで**Git**をインストールする

```sh
sudo apt install git
```

- **ステップ 6.** 日付が適切に設定されていない場合、Gitはエラーを出力する可能性があります。これを修正するために以下を入力してください

```sh
sudo date MMDDhhmm
```

**注意:** **MM** は月、**DD** は日付、**hh** と **mm** はそれぞれ時と分です。

- **ステップ 7.** **usbboot** ツールリポジトリをクローンして入る

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ 8.** 以下を入力して **libusb** をインストールします

```sh
sudo apt install libusb-1.0-0-dev
```

- **ステップ 9.** usbbootツールをビルドしてインストールする

```sh
make
```

- **ステップ 10.** ブートローダー設定ファイルを開く

```sh
sudo nano recovery/boot.conf
```

- **ステップ 11.** **BOOT_ORDER**フィールドを以下のように変更してください

```sh
BOOT_ORDER=0xf15
```

**注意:** ここでUSBブートが失敗した場合、eMMCブートに切り替わります

- **ステップ 12.** 以下を実行してEEPROMイメージを更新します

```sh
cd recovery
./update-pieeprom.sh
```

pieeprom.binファイルがCompute Module 4にフラッシュする準備ができました

- **ステップ 13.** **usbboot**ディレクトリに戻ります

```sh
cd ..
```

- **ステップ 14.** usbbootツールを実行してブートローダーEEPROMをフラッシュする

```sh
sudo ./rpiboot -d recovery
```

- **ステップ 15.** USB Type-Cケーブルを使用してreTerminalをPCに接続します

必要なファイルをreTerminalに転送するのに数秒かかります。

- **ステップ 16.** reTerminalの電源を切り、Boot Modeスイッチを元の位置に戻し、reTerminalのシェルを組み立てます

- **ステップ 17.** 適切なOSが入った起動可能なUSBフラッシュドライブを接続し、reTerminalのUSBポートの1つに接続してreTerminalの電源を入れます

これで、接続されたUSBドライブからreTerminalが起動するのが確認できます

## Q8: CM4のチップ周辺に黒い接着剤があるのはなぜですか？

ICがしっかりと保護されるように、CM4のチップ周辺に特別に**エポキシ樹脂アンダーフィル接着剤**（黒い接着剤のように見える）を塗布しています。これにより、CM4全体がより信頼性の高いものになります。

## Q9: reTerminalドライバーをインストール後、ブザー、LED、ボタンが動作しないのはなぜですか？

reTerminalには、I/O拡張チップの2つのバージョンが搭載されています。MCP23008の旧バージョンとPCA9554の新バージョンです。[reTerminalドライバーを手動でインストール](https://wiki.seeedstudio.com/ja/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)した場合は、以下を確認してください。

まず、reTerminalにどのチップがインストールされているかを確認します。

- ターミナルウィンドウを開きます
- i2cdetect -y 1

0x20 I2Cアドレスが表示される場合、reTerminalにはMCP23008チップが搭載されています

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x20.png" alt="pir" width={500} height="auto" /></p>

0x38 I2Cアドレスが表示される場合、reTerminalにはPCA9554チップが搭載されています

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x38.jpg" alt="pir" width={500} height="auto" /></p>

MCP23008チップを搭載したreTerminalの場合、以下の操作が必要です。

- sudo nano /boot/config.txt
- ファイルの最後に「dtoverlay=reTerminal,addr=0x20,mcp23008」を追加します
- Ctrl + x > y > ENTER でファイルを保存して閉じます
- sudo reboot

最新のPCA9554チップを搭載したreTerminalの場合、変更は必要ありません。

## Q10: reTerminalにUbuntuをインストールするにはどうすればよいですか？

- **ステップ 1.** [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi)をreTerminal eMMCストレージにフラッシュします

**注意:** フラッシュ手順は[こちら](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)を参照してください。**Raspberry Pi Imager**を開いた後、`CHOOSE OS > Use custom`に移動し、上記のイメージを選択してフラッシュします

- **ステップ 2.** reTerminalにSSH接続し、以下のコマンドを順番に実行します。ユーザー名として**ubuntu**、パスワードとして**ubuntu**を使用してください

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **ステップ 3.** reTerminalがUbuntu Desktopで起動しますが、画面の向きが間違っています

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 4.** 右上角の**電源アイコン**をクリックし、**Settings**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **ステップ 5.** **Displays**を選択し、**Orientation**の下で**Portrait Left**を選択して**Apply**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

最終的に、Ubuntu Desktopが適切な向きで表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>

## Q11: Raspberry Pi OS Bullseyeをインストール後に画面の向きが正しくない

- **ステップ 1.** **Raspberry Pi OS Bullseye**をreTerminal eMMCにフラッシュした後、[このガイド](https://wiki.seeedstudio.com/ja/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)に従って必要なドライバーをインストールします

- **ステップ 2.** **.config**ディレクトリの下に**monitors.xml**という名前の新しいファイルを作成します

```sh
sudo vi ~/.config/monitors.xml
```

- **ステップ3.** 上記のファイルに以下の内容をコピーして、LCDディスプレイ（DSI-1）を明示的に設定し、**ESC**キーを押した後に**:wq**と入力してファイルを保存します

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **ステップ 4.** **/boot/config.txt** を開く

```sh
sudo vi /boot/config.txt
```

- **ステップ 5.** 以下をファイルに追加します

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **ステップ 6.** reTerminalを再起動します

```sh
sudo reboot
```

画面が正しい向きで表示されるようになりました！

## Q12: タッチスクリーンの精度問題のトラブルシューティング

画面を正しい向きに設定した後でも、タッチ位置が不正確な場合があり、ディスプレイの特定の領域をタッチした際にカーソルが予期しない方向に移動することがあります。この問題を解決するには、以下の手順を実行することが重要です。

- **ステップ 1** : ターミナルを開き、以下のように入力してxorg.conf.dフォルダに移動します

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2** : "40-libinput.conf" ファイルにアクセスできるようになります。このファイルはコマンドを使用して編集できます。

```sh
sudo nano 40-libinput.conf
```

- **ステップ 3**: **touchscreen** InputClass の InputClass セクションを見つけます。

- **ステップ 4**: 以下のフレーズを追加します。スクリーンショットを参照してください

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5** : Ctrl+O で保存し、Enter を押してから Ctrl+X を押し、その後再起動します

```sh
Sudo reboot 
```

再起動後、タッチ位置が正確になったことに気づくでしょう。これは、ディスプレイの特定の領域をタッチしたときに、カーソルが意図した方向に移動することを意味します。

## Q13: reTerminalドライバーをインストール後、LEDとブザーが動作しない

この問題は長く続きません。後でreTerminalドライバー自体からこの問題を完全に解決する予定です

- **ステップ 1.** **/boot/config.txt** を開く

```sh
sudo vi /boot/config.txt
```

- **ステップ2.** 以下の行をコメントアウトし、**ESC**キーを押した後に**:wq**と入力してファイルを保存します

```sh
#dtoverlay=reTerminal-bridge
```

- **ステップ 3.** reTerminal を再起動します

```sh
sudo reboot
```

これでLEDとブザーが正常に動作するようになります。

## Q14: 暗号化チップがATECC608A-SSHDA-BかATECC608A-TNGTLSS-Gかを確認する方法

| リリース日 | 暗号化チップICバージョン |
|---|---|
| 2021年9月3日以前 | ATECC608A-SSHDA-B |
| 2021年9月 - 2022年1月 | ATECC608A-SSHDA-BまたはATECC608A-TNGTLSS-G |
| 2022年2月1日以降 | ATECC608A-TNGTLSS-G |

暗号化チップのタイプを確認するには、ターミナルで```i2cdetect -y 3```コマンドを実行します。出力テーブルに```0x35```が表示されている場合、reTerminalにはATECC608A-TNGTLSS-Gチップが搭載されており、そうでなければATECC608A-SSHDA-Bが搭載されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>

## リソース

- **[PDF]** [reTerminal回路図](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal回路図](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[PDF]** [Raspberry Pi Compute Module 4データシート](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Raspberry Pi公式ドキュメント](https://www.raspberrypi.org/documentation/)

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
