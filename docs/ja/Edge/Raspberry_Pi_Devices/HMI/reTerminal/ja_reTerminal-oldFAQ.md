---
description: reTerminal-FAQ
title: reTerminal 使用に関するFAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-FAQ
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal 使用に関するFAQ

このドキュメントには、reTerminal に関連するよくある質問がすべて含まれています。reTerminal を使用中に問題が発生した場合に非常に役立ちます。

## Q1: reTerminal LCD の STM32 ファームウェアをどのように更新できますか？

**注意:** reTerminal が 2021年9月26日以降に製造された場合、STM32 には V1.8 ファームウェアがプリインストールされています。

STM32G030 チップに最新のファームウェアがフラッシュされていることを確認することが非常に重要です。このチップは reTerminal の LCD を駆動する役割を担っています。STM32 チップを最新バージョンに更新することで、reTerminal LCD に関する多くの問題を解決するのに役立ちます。

STM32 チップをフラッシュする方法は2つあります。

- **方法 1:** reTerminal の CM4 を使用して STM32 チップに直接接続し、ファームウェアをフラッシュする
- **方法 2:** ジャンパーワイヤーを使用して STM32 チップのピンを 40ピン reTerminal GPIO に物理的に接続し、OpenOCD を使用してファームウェアをフラッシュする

**方法 1** は、reTerminal に **新しいバージョン (v1.7 以上)** の STM32 ファームウェアがある場合に機能します。一方、**方法 2** は、ボードに **古いバージョン (v1.7 未満)** の STM32 ファームウェアがある場合にのみ必要です。

### 使用するフラッシュ方法を決定する

次に、どのバージョンのボードを持っているかを特定し、適切なフラッシュ方法を選択するための手順を説明します。

- **ステップ 1.** reTerminal のターミナルウィンドウを開き、次のコマンドを入力して設定ファイルを開きます。

```sh
sudo nano /boot/config.txt
```

- **ステップ 2.** このファイルの一番下にある **dtoverlay=reTerminal** と記載された行をコメントアウトします。

```sh
#dtoverlay=reTerminal
```

**注意:** これにより、すべての reTerminal ドライバーがアンロードされます。そのため、次回 reTerminal を起動すると、ドライバーはロードされません。

- **ステップ 3.** reTerminal を再起動します。

```sh
sudo reboot
```

- **ステップ 4.** **i2c-tools** を使用して STM32 を **ブートモード** にします。

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **ステップ 5.** 接続されている I2C デバイスを一覧表示します。

```sh
i2cdetect -y 1
```

以下の表のように I2C アドレス **0x56** が表示される場合、ボードには **新しいバージョン (v1.7 以上)** の STM32 ファームウェアが搭載されています。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

一方、以下の表のように I2C アドレス **0x45** が表示される場合、ボードには **古いバージョン (v1.7 未満)** の STM32 ファームウェアが搭載されています。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** 先ほど使用した設定ファイルを開きます。

```sh
sudo nano /boot/config.txt
```

- **ステップ 7.** このファイルの一番下にある **dtoverlay=reTerminal** と記載された行のコメントを解除して、ドライバーを再度ロードします。

```sh
dtoverlay=reTerminal
```

- **ステップ 8.** reTerminal の電源をオフにします。

```sh
sudo poweroff
```

**注意:** すでに **STM32 v1.8 ファームウェア** を実行している場合、**i2c-tools** を使用して **ブートモード** に入ると、ブートモードから抜け出す唯一の方法は STM32 ファームウェアをフラッシュすることです。

### CM4 を使用して STM32 に接続し、ファームウェアをフラッシュする

ボードに **新しいバージョン (v1.7 以上)** の STM32 ファームウェアがある場合は、この方法に従ってください。

- **ステップ 1.** reTerminal のターミナルウィンドウを開き、次のコマンドを入力して設定ファイルを開きます。

```sh
sudo nano /boot/config.txt
```

- **ステップ 2.** このファイルの一番下にある **dtoverlay=reTerminal** と記載された行をコメントアウトします。

```sh
#dtoverlay=reTerminal
```

- **ステップ 3.** reTerminal を再起動します。

```sh
sudo reboot
```

- **ステップ 4.** reTerminal 内に新しいディレクトリを作成し、その中に入ります。

```sh
mkdir STM32
cd STM32
```

- **ステップ 5.** **stm32flash** ファイルと **STM32G030F6_R2.bin** をダウンロードします。

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **ステップ 6.** **stm32flash-0.7.tar.gz** を解凍します。

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **ステップ 7.** **stm32flash-0.7** という名前のフォルダに移動し、フラッシュツールを実行可能にします。

```sh
cd stm32flash-0.7/
make
```

- **ステップ 8.** **i2c-tools** を使用して STM32 を **ブートモード** にします。

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **ステップ 9.** **stm32flash ツール** を使用して STM32 チップ内のフラッシュを消去します。

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **ステップ 10.** **stm32flash ツール** を使用して STM32 にファームウェアをフラッシュします。

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意:** **STM32G030F6_R2.bin** は新しいファームウェアのファイル名です。

- **ステップ 11.** OPTR レジスタを次のように変更します。

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **ステップ 12.** 先ほど使用した設定ファイルを開きます。

```sh
sudo nano /boot/config.txt
```

- **ステップ 13.** このファイルの一番下にある **dtoverlay=reTerminal** と記載された行のコメントを解除します。

```sh
dtoverlay=reTerminal
```

- **ステップ 14.** reTerminal を再起動します。

```sh
sudo reboot
```

次に、先ほどコピーしたファイルが表示されます。

- **ステップ 9.** フラッシュツールを**実行可能**にします

```sh
chmod +x stm32flash
```

<!-- - **ステップ 10.** **i2c-tools**を使用してSTM32を**ブートモード**にします

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **ステップ 11.** **stm32flashツール**を使用してSTM32チップのフラッシュを消去します

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **ステップ 12.** stm32flashツールを使用してSTM32にファームウェアを書き込みます

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**注意:** **STM32G030F6_R2.bin**は新しいファームウェアのファイル名です

- **ステップ 13.** 次のようにOPTRレジスタを変更します

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **ステップ 14.** 以前使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ 15.** このファイルの一番下で、**dtoverlay=reTerminal**と記載された行のコメントを解除します

```sh
dtoverlay=reTerminal
```

- **ステップ 16.** reTerminalを再起動します

```sh
sudo reboot
``` -->

これでSTM32にファームウェアを正常にフラッシュできました！

### ジャンパーワイヤーとOpenOCDを使用してSTM32に接続する

ボード上のSTM32ファームウェアが**古いバージョン（v1.7未満）**の場合は、この方法に従ってください。

- **ステップ 1.** reTerminalのターミナルウィンドウを開き、以下を入力してパッケージリストを更新します

```sh
sudo apt-get update
```

- **ステップ 2.** 以下のパッケージをインストールします

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **ステップ 3.** 以下のリポジトリをクローンし、そこに移動します

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **ステップ 4.** [このリンク](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases)にアクセスし、**最新リリース**バージョンから**STM32G030F6_R2.bin**ファイルをダウンロードします。

**注意:** クリックするとダウンロードが開始されます

- **ステップ 5.** PCのコマンドプロンプトを開き、以前にダウンロードしたファイルの場所に移動します

```sh
cd C:\Users\user\Downloads
```

- **ステップ 6.** ファイルを以前作成したreTerminalの**openocd**ディレクトリに転送します

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**注意:** **pi**はユーザー名で、**192.168.x.xx**はreTerminalのIPアドレスです。これをreTerminalのホスト名に置き換えることもできます。

- **ステップ 7.** reTerminalのターミナルウィンドウに戻り、**openocd**ディレクトリ内で以下を入力します

```sh
./bootstrap
```

- **ステップ 8.** 以下を入力します

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **ステップ 9.** コンパイルします

```sh
make
```

- **ステップ 10.** インストールします

```sh
sudo make install
```

- **ステップ 11.** 以下の接続を参考にして、STM32のピンを40ピンGPIOに接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**注意:** STM32のピンはreTerminalのPCBA背面にあります。

- **ステップ 12.** 接続を維持したまま、以下のコマンドを入力してSTM32にファームウェアをフラッシュします

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**注意:** 通常、フラッシュには約3秒かかります。そのため、フラッシュプロセスが完了するまで**約3秒間**上記の接続を**保持**する必要があります。

以下のログが表示された場合、STM32ファームウェアが正常にフラッシュされたことを意味します！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **ステップ 13.** 接続を切断し、**電源コードを直接物理的に切断**します（**poweroff**コマンドを使用しないでください）。

**注意:** 電源コードを物理的に抜かないと、STM32ファームウェアが正常に読み込まれません。

これでSTM32にファームウェアを正常にフラッシュできました！

### インストールされたSTM32G030ファームウェアバージョンを確認する

次に、インストールされたSTM32ファームウェアのバージョンを確認します。

- **ステップ 1.** reTerminalのターミナルウィンドウを開き、以下を入力して設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ 2.** このファイルの一番下で、**dtoverlay=reTerminal**と記載された行をコメントアウトします

```sh
#dtoverlay=reTerminal
```

- **ステップ 3.** reTerminalを再起動します

- **ステップ 4.** reTerminalのターミナルウィンドウ内で以下を入力して、STM32ファームウェアのバージョンを確認します

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

出力が**0x01 0x07**のようであれば、ファームウェアバージョン1.7を使用していることを意味します。

- **ステップ 5.** 以前使用した設定ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ 6.** このファイルの一番下で、**dtoverlay=reTerminal**と記載された行のコメントを解除します

```sh
dtoverlay=reTerminal
```

- **ステップ 7.** reTerminalを再起動します

```sh
sudo reboot
```

## Q2: reTerminal に元々搭載されている Raspberry Pi OS をどのようにフラッシュできますか？

別の OS をフラッシュしていて、reTerminal に元々搭載されているデフォルトの Raspberry Pi OS に戻したい場合は、以下の手順に従ってください。

- **ステップ 1.** 以下のリンクから Raspberry Pi OS をダウンロードしてください。

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**注意:** reTerminal は元々 32-bit OS が搭載されています。ただし、64-bit バージョンもダウンロード可能です。

- **ステップ 2.** **.zip ファイル**を解凍します。

- **ステップ 3.** Raspberry Pi Imager ソフトウェアを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の構成、ロケール設定** などを行うことができます。

- **ステップ 5.** **CHOOSE OS** をクリックし、**Use custom** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** 先ほど解凍したイメージを選択し、**open** をクリックします。

- **ステップ 7.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します。

- **ステップ 8.** 最後に **WRITE** をクリックします。

## Q3: Raspberry Pi OS とインストール済みのパッケージをどのようにアップグレードしますか？

すべてのパッケージと Raspberry Pi OS を最新バージョンに更新します。

- **ステップ 1.** reTerminal 上でターミナルウィンドウを開き、以下を入力します。

```sh
sudo apt update
sudo apt full-upgrade
```

- **ステップ 2.** カーネルヘッダーを再インストールします。

```sh
sudo apt install raspberrypi-kernel-headers
```

- **ステップ 3.** reTerminal を再起動します。

```sh
sudo reboot
```

これで Raspberry Pi OS と必要なすべてのパッケージが最新の状態になります！

## Q4: eMMC 非搭載バージョンの CM4 に交換した場合、OS をどのようにフラッシュできますか？

reTerminal で eMMC を搭載していない Compute Module 4 を使用する場合は、micro-SD カードを挿入し、希望する OS をフラッシュする必要があります。以下の手順に従ってください。

- **ステップ 1.** **micro-SD カードリーダー**をコンピュータに接続するか、ノートパソコンの**内蔵カードリーダー**を使用して micro-SD カードをコンピュータに挿入します。

- **ステップ 2.** [このリンク](https://www.raspberrypi.org/software/)から **Raspberry Pi Imager** ソフトウェアをダウンロードします。

**注意:** **Windows、Mac、Ubuntu** のいずれかを選択してダウンロードできます。

- **ステップ 3.** Raspberry Pi Imager ソフトウェアを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の構成、ロケール設定** などを行うことができます。

- **ステップ 5.** **CHOOSE OS** をクリックし、希望する OS を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

**注意:** **64-bit Ubuntu** などの OS を選択する場合は、**Other general purpose OS** に移動してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 6.** **CHOOSE STORAGE** をクリックし、接続されている micro-SD カードを選択します。

- **ステップ 7.** 最後に **WRITE** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

フラッシュプロセスが完了するまで数分待ってください。

- **ステップ 8.** コンピュータから micro-SD カードを取り出し、reTerminal に挿入します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**注意:** micro-SD カードスロットにアクセスするには、reTerminal のシェルを開く必要があります。

## Q5: USB シリアルコンバータを使用して Raspberry Pi OS/Ubuntu OS またはその他の OS にログインする方法

**USB シリアルコンバータ**をお持ちの場合、以下の手順で Raspberry Pi OS にログインできます。

USB シリアルコンバータからジャンパーワイヤーを接続し、reTerminal の 40 ピン GPIO ヘッダーの **UART ピン**に接続します。接続は以下の通りです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

次に、コンピュータ上でソフトウェアを設定します。使用しているオペレーティングシステムに応じて以下の手順に従ってください。

### Windowsの場合

- **ステップ 1.** USB シリアルコンバータを PC に接続します。

- **ステップ 2.** Windows の検索ボックスに **デバイスマネージャー** と入力して **デバイスマネージャー** を開きます。

- **ステップ 3.** **ポート (COM & LPT)** のドロップダウン矢印をクリックし、接続されているシリアルポートの名前を確認します (例: **COM7**)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **ステップ 4.** [こちらのリンク](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)から **Putty** をダウンロードしてインストールします。

**注意:** Putty は SSH および telnet クライアントであり、reTerminal に SSH 経由で接続するために使用できます。すでに Putty をインストールしている場合、このステップはスキップできます。

- **ステップ 5.** PC を reTerminal に接続するために Putty を開きます。

- **ステップ 6.** **Connection Type** で **Serial** を選択します。

- **ステップ 7.** 以下の設定を構成します：

  - Serial line: COM7 (使用する COM ポートを選択)
  - Speed: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **ステップ 8.** **Open** をクリックします。

- **ステップ 9.** Putty ウィンドウで以下のログイン情報を入力します。

```sh
- ユーザー名: pi
- パスワード: raspberry
```

- **ステップ 10.** Raspberry Pi OS に正常にログインすると、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### Mac/Linuxの場合

- **ステップ 1.** USB シリアルコンバータを PC に接続します。

- **ステップ 2.** Mac/Linux で **ターミナルウィンドウ** を開きます。

- **ステップ 3.** 以下を入力して **パッケージリスト** を更新します。

```sh
sudo apt-get update
```

- **ステップ 4.** 以下を入力して **minicom** をインストールします。

```sh
sudo apt-get install minicom
```

- **ステップ 5.** ターミナルで以下を入力して接続されているシリアルデバイスを確認します。

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>例: <br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **ステップ 6.** 以下を入力してシリアルデバイスに接続します。

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**注意:** ボーレートは 9600 に設定されています。

- **ステップ 7.** 上記のハードウェア接続を行った後、壁の電源ソケットから電源をオンにして reTerminal を起動します。

これで Raspberry Pi OS に正常にログインできました。

## Q6: reTerminal の LCD がスリープ後に復帰しない

SSH または VNC 経由で接続した後、ターミナルウィンドウを開き、以下のコマンドを入力してください。

```sh
DISPLAY=:0 xset dpms force off
DISPLAY=:0 xset dpms force on
```

これにより、reTerminal の LCD が再初期化されます。

## Q7: USBフラッシュドライブからOSを起動するにはどうすればよいですか？

以下の手順に従うことで、USBフラッシュドライブからOSを起動できます。ここでは、ブート順序を **USBブート > eMMCブート** に変更します。つまり、USBブートが失敗した場合はeMMCから起動します。

**注意:** この方法を使用するには、ホストPCとしてUbuntuまたはMacOSを使用する必要があります。

- **ステップ1.** 4つのゴムカバーを取り外し、下にある4本のネジを外してreTerminalの背面シェルを開けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **ステップ2.** ヒートシンクを分解するために2本のネジを取り外し、さらにケース全体を分解するために残りの4本のネジを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ3.** 以下の図に従って**ブートモードスイッチ**を下に倒します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **ステップ4.** reTerminalに接続した後、ホストPC内で**ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します。

```sh
sudo apt update
```

- **ステップ5.** 以下のコマンドで**Git**をインストールします。

```sh
sudo apt install git
```

- **ステップ6.** 日付が正しく設定されていない場合、Gitがエラーを出すことがあります。以下を入力して修正します。

```sh
sudo date MMDDhhmm
```

**注意:** **MM**は月、**DD**は日付、**hh**は時間、**mm**は分を表します。

- **ステップ7.** **usbboot**ツールリポジトリをクローンして移動します。

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ8.** 以下を入力して**libusb**をインストールします。

```sh
sudo apt install libusb-1.0-0-dev
```

- **ステップ9.** usbbootツールをビルドしてインストールします。

```sh
make
```

- **ステップ10.** ブートローダー設定ファイルを開きます。

```sh
sudo nano recovery/boot.conf
```

- **ステップ11.** **BOOT_ORDER**フィールドを以下のように変更します。

```sh
BOOT_ORDER=0xf15
```

**注意:** ここでUSBブートが失敗した場合、eMMCブートに切り替わります。

- **ステップ12.** 以下を実行してEEPROMイメージを更新します。

```sh
cd recovery
./update-pieeprom.sh
```

これで、pieeprom.binファイルがCompute Module 4にフラッシュする準備が整いました。

- **ステップ13.** **usbboot**ディレクトリに戻ります。

```sh
cd ..
```

- **ステップ14.** usbbootツールを実行してブートローダーEEPROMをフラッシュします。

```sh
sudo ./rpiboot -d recovery
```

- **ステップ15.** USB Type-Cケーブルを使用してreTerminalをPCに接続します。

これで、必要なファイルがreTerminalに転送されるまで数秒かかります。

- **ステップ16.** reTerminalの電源を切り、ブートモードスイッチを元の位置に戻し、reTerminalのシェルを組み立て直します。

- **ステップ17.** 適切なOSが入った起動可能なUSBフラッシュドライブを接続し、reTerminalのUSBポートの1つに接続してreTerminalを起動します。

これで、reTerminalが接続されたUSBドライブから起動するのが確認できます。

## Q8: CM4のチップ周辺に黒い接着剤があるのはなぜですか？

CM4のチップ周辺には、ICをしっかりと保護するために、特別に**エポキシ樹脂アンダーフィル接着剤**（黒い接着剤のように見えるもの）を適用しています。これにより、CM4全体の信頼性が向上します。

## Q9: なぜreTerminalのドライバーをインストールした後にブザー、LED、ボタンが動作しないのですか？

reTerminalには、I/O拡張チップの2つのバージョンが搭載されています。古いバージョンはMCP23008、新しいバージョンはPCA9554です。[reTerminalドライバーを手動でインストールした場合](https://wiki.seeedstudio.com/ja/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)、以下を確認してください。

まず、reTerminalにどのチップが搭載されているかを確認してください。

- ターミナルウィンドウを開く
- `i2cdetect -y 1` を実行

0x20のI2Cアドレスが表示された場合、reTerminalにはMCP23008チップが搭載されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x20.png" alt="pir" width={500} height="auto" /></p>

0x38のI2Cアドレスが表示された場合、reTerminalにはPCA9554チップが搭載されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x38.jpg" alt="pir" width={500} height="auto" /></p>

MCP23008チップが搭載されたreTerminalの場合、以下の手順を実行してください。

- `sudo nano /boot/config.txt` を実行
- ファイルの末尾に `dtoverlay=reTerminal,addr=0x20,mcp23008` を追加
- Ctrl + x > y > ENTER を押して保存してファイルを閉じる
- `sudo reboot` を実行

最新のPCA9554チップが搭載されたreTerminalの場合、変更を加える必要はありません。

## Q10: reTerminalにUbuntuをインストールする方法は？

- **ステップ1.** [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi)をreTerminalのeMMCストレージにフラッシュします

**注意:** フラッシュ手順については[こちら](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)を参照してください。**Raspberry Pi Imager**を開いた後、`CHOOSE OS > Use custom` に移動し、上記のイメージを選択してフラッシュしてください。

- **ステップ2.** reTerminalにSSHで接続し、以下のコマンドを順番に実行します。**ubuntu**をユーザー名として使用し、**ubuntu**をパスワードとして使用してください。

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **ステップ3.** これでreTerminalはUbuntu Desktopを起動しますが、画面の向きが間違っています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ4.** 右上の**電源アイコン**をクリックし、**設定**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **ステップ5.** **ディスプレイ**を選択し、**Orientation**の下で**Portrait Left**を選択して**適用**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

最後に、Ubuntu Desktopが正しい向きで表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>

## Q11: Raspberry Pi OS Bullseye をインストールした後、画面の向きが正しくない

- **ステップ 1.** reTerminal の eMMC に **Raspberry Pi OS Bullseye** をフラッシュした後、[このガイド](https://wiki.seeedstudio.com/ja/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) に従って必要なドライバをインストールしてください。

- **ステップ 2.** **.config** ディレクトリの下に **monitors.xml** という名前の新しいファイルを作成します。

```sh
sudo vi ~/.config/monitors.xml
```

- **ステップ 3.** 以下の内容を上記のファイルにコピーして、LCD ディスプレイ (DSI-1) を明示的に設定し、**ESC** を押した後に **:wq** と入力してファイルを保存します。

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

- **ステップ 4.** **/boot/config.txt** を開きます。

```sh
sudo vi /boot/config.txt
```

- **ステップ 5.** 以下の内容をファイルに追加します。

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **ステップ 6.** reTerminal を再起動します。

```sh
sudo reboot
```

これで画面が正しい向きで表示されるようになります！

## Q12: タッチスクリーンの不正確さのトラブルシューティング

画面の向きを正しく設定した後でも、タッチ位置が不正確で、特定のエリアをタッチするとカーソルが予期しない方向に移動する場合があります。この問題を解決するには、以下の手順を実行してください。

- **ステップ 1.** ターミナルを開き、以下のコマンドを入力して **xorg.conf.d** フォルダに移動します。

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** "40-libinput.conf" ファイルにアクセスできるようになります。このファイルを以下のコマンドで編集します。

```sh
sudo nano 40-libinput.conf
```

- **ステップ 3.** **touchscreen** InputClass の InputClass セクションを見つけます。

- **ステップ 4.** 以下のフレーズを追加します。スクリーンショットを参照してください。

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5.** **Ctrl+O** を押して保存し、Enter を押した後に **Ctrl+X** を押して終了します。その後、再起動します。

```sh
sudo reboot 
```

再起動後、タッチ位置が正確になったことに気付くでしょう。これにより、特定のエリアをタッチすると、カーソルが意図した方向に移動するようになります。

## Q13: reTerminal ドライバをインストールした後、LED とブザーが動作しない

この問題は長くは続きません。後で reTerminal ドライバ自体で完全に解決される予定です。

- **ステップ 1.** **/boot/config.txt** を開きます。

```sh
sudo vi /boot/config.txt
```

- **ステップ 2.** 以下の行をコメントアウトし、**ESC** を押した後に **:wq** と入力してファイルを保存します。

```sh
#dtoverlay=reTerminal-bridge
```

- **ステップ 3.** reTerminal を再起動します。

```sh
sudo reboot
```

これで LED とブザーが通常通り動作するようになります。

## Q14: 暗号化チップが ATECC608A-SSHDA-B か ATECC608A-TNGTLSS-G かを確認する方法

| リリース日 | 暗号化チップ IC バージョン |
|---|---|
| 2021年9月3日以前 | ATECC608A-SSHDA-B |
| 2021年9月～2022年1月 | ATECC608A-SSHDA-B または ATECC608A-TNGTLSS-G |
| 2022年2月1日以降 | ATECC608A-TNGTLSS-G |

暗号化チップの種類を確認するには、ターミナルで ```i2cdetect -y 3``` コマンドを入力してください。出力テーブルに ```0x35``` が表示される場合、reTerminal は ATECC608A-TNGTLSS-G チップを搭載しています。それ以外の場合は ATECC608A-SSHDA-B が搭載されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>

## リソース

- **[PDF]** [reTerminal 回路図](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal 回路図](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[PDF]** [Raspberry Pi Compute Module 4 データシート](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Raspberry Pi 公式ドキュメント](https://www.raspberrypi.org/documentation/)

# 技術サポート

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>