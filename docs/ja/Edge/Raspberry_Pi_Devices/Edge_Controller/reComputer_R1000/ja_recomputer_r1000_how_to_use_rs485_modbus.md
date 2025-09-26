---
description: この記事では主にreComputer R1000の485通信機能の使用方法を紹介し、rs485とModbus通信機能をテストします。
title: reComputer R1000でrs485とmodbusを使用する方法
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/r1000_connection_1.webp
slug: /ja/recomputer_r1000_use_rs485_modbus_rtu
last_update:
  date: 12/20/2024
  author: Jiahao Li
---

## はじめに

この記事では主にreComputer R1000の485通信機能の使用方法を紹介し、RS485とModbus通信機能をテストします。

## 開始

このプロジェクトを開始する前に、ここで説明されているようにハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェア

- W10 PC で [modbus poll](https://www.modbustools.com/modbus_poll.html) を使用します。他の modbus テストツールも使用できます
- reComputer R1000 と W10 PC で [modbusmechanic](https://modbusmechanic.scifidryer.com/) を使用します。他の modbus テストツールも使用できます
- W10 PC で [mobaxterm](https://mobaxterm.mobatek.net/) を使用します。他のシリアルポートテストツールも使用できます
- reComputer R1000 で以下のコマンドを使用して **minicom** ツールをダウンロードする必要があります：

```sh
sudo apt-get install minicom
```

### ハードウェア構成

このテストでは、RS485 to USBモジュールを使用してreComputer R1000とW10 PCを接続します。
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

ModbusTCPについては、イーサネットケーブルを使用してW10 PCとreComputer R1000をスイッチに接続し、同じネットワークセグメント上にあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## reComputer R1000v1.1でminicomを設定する

**注意:** minicomでRS485を使用する前に、[こちら](https://wiki.seeedstudio.com/ja/recomputer_r1000_flash_OS/#install-drivers)のようにr1000ドライバをインストールしてください。

### まず、minicomをインストールします

以下のコマンドでホストコンピュータとreComputer r1000の両方にminicomをインストールします：

```
sudo apt install minicom
```

### 次に、minicomを以下のように設定してください

ターミナルを`Ctrl+Alt+T`で開き、以下のようなコマンドを入力してください：

```
sudo minicom -D /dev/ttyAMA*
```

`ttyAMA*` は使用する RS485 に応じて `ttyAMA2, ttyAMA3 または ttyAMA4` になります。

次に `Ctal+A` を入力してから `Z` を入力すると、以下のような minicom が表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

`o` を入力して minicom を設定し、`Serial port setup` を選択すると以下のように表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

次に `F` と `H` を入力して minicom を RS485 モードにすると、結果は以下のように表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

最後に、`Exit` を選択して `Enter` を入力して設定を終了します。以下のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>

## reComputer R1000 v1.0 で必要なアクション

reComputer R1000 v1.0 では、内蔵 485 トランシーバーの DE ピンがデフォルトで制御不能になっており、これはインターフェースが単方向でのみデータを送信できる（受信または送信のみ）ことを意味します。

:::note
ハードウェアリビジョン（v1.0 と v1.1）を区別するには、[reComputer R1000 V1.1 Product change details](https://wiki.seeedstudio.com/ja/recomputer_r1000_v1_1_description/) を参照してください。
:::

現在、2つのソリューションがあります。1つは **UART ドライバーをフックするカーネルモジュールをロードする方法で、これを推奨します**。もう1つは、単純に `libgpiod` を呼び出して DE ピンを制御するアプリケーション層ベースのソリューションです。ニーズに応じて選択できます。

### カーネルモジュールソリューション（推奨）

#### インストール

まず、カーネルモジュールのソースコードをダウンロードする必要があります。これは独立したリポジトリなので、直接クローンできます。

```shell
git clone https://github.com/bclswl0827/r1000v1-rs485-autoflow
cd r1000v1-rs485-autoflow
```

次に、カーネルモジュールをコンパイルする必要があります。

```shell
make
```

コンパイル中にエラーが発生している場合は、現在実行中のカーネルに対応するカーネルヘッダーをインストールする必要があるかもしれません。Raspberry Pi OSを使用していることを前提として、以下のコマンドを使用してカーネルヘッダーをインストールできます。

```shell
sudo apt-get install linux-headers-$(uname -r)
```

その後、カーネルモジュールを再度コンパイルできます。

#### カーネルモジュールの読み込み

コンパイルが完了したら、以下のコマンドを実行してカーネルモジュールを読み込むことができます。

```shell
sudo insmod r1000v1-rs485-autoflow.ko
```

カーネルモジュールが正常にロードされた場合、カーネルログに以下のメッセージが表示されるはずです。`dmesg` コマンドで確認してください。

```shell
[  256.037465] r1000v1_rs485_autoflow: RS-485 interface has been hooked successfully
```

`minicom`ツールを使用してRS485通信をテストできます。他のシリアルポートテストツール（例：`picocom`）も使用できます。

起動時にカーネルをロードするには、以下のコマンドを使用してこのモジュールを`/etc/modules`ファイルに追加できます。

```shell
echo "r1000v1_rs485_autoflow" | sudo tee -a /etc/modules
```

モジュールが登録された後、変更を有効にするためにシステムを再起動する必要があります。

```shell
sudo reboot
```

#### カーネルモジュールのアンロード

カーネルモジュールをアンロードするには、以下のコマンドを実行できます。内蔵のRS485インターフェースは受信専用モードに戻ります。

```shell
sudo rmmod r1000v1-rs485-autoflow
```

#### DKMSでモジュールを追加する

DKMS（Dynamic Kernel Module Support）は、カーネルモジュールのビルドとインストールを自動化するシステムで、複数のカーネルバージョン間でモジュールを管理するのに便利です。DKMSを使用することで、カーネルアップデート後でもモジュールの互換性を確保できます。

このカーネルモジュールをDKMSで追加するには、以下のコマンドを使用してください：

```shell
sudo make dkms_install
```

このコマンドは、モジュールをDKMSに登録し、コンパイルして現在のカーネルバージョン用にインストールします。将来カーネルがアップグレードされた際、DKMSは自動的に新しいバージョン用にモジュールを再ビルドしてインストールするため、手動で再コンパイルする必要はありません。

### アプリケーション層ソリューション

#### スクリプトの使用

- この記事で言及した方法に加えて、以下のコマンドで実行できるスクリプトも提供しています。このスクリプトは自動的に新しい /dev/ttyx を作成し、新しく作成されたデバイス番号を使用してrs485/modbus rtu通信を実行するだけで十分です

  ```shell
  curl -sSL https://raw.githubusercontent.com/Seeed-Projects/R1000-RS485-Util/main/setup_rs485.sh | sudo bash
  ```

#### 手動セットアップ

まず、私たちが提供する[**Cプログラム**](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/tree/master/tools/rs485_control_DE)をダウンロードし、ReadMeの内容を参照してください。コンパイルして実行します。

```shell
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd seeed-linux-dtoverlays/tools/rs485_control_DE/
sudo apt-get install libgpiod-dev
gcc -o rs485_DE rs485_DE.c -lgpiod
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 
```

このプログラムは新しいttyAMAx デバイスを作成します。デバイス番号は、プログラム実行時に入力するパラメータによって決まります。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/cfg_c.gif" /></center>

:::note

- 上記の例では、1つのRS485インターフェースの使用方法を示しています。3つの485インターフェースを使用したい場合は、以下のスクリプトを使用して実現できます：

```shell
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 &
sudo ./rs485_DE /dev/ttyAMA3 /dev/gpiochip0 17 /dev/ttyAMA11 &
sudo ./rs485_DE /dev/ttyAMA5 /dev/gpiochip0 24 /dev/ttyAMA12 &
```

ttyAMA10~ttyAMA12 は ttyAMA2~ttyAMA5 と一対一で対応しています。通常の通信では、アプリケーションで ttyAMA10~ttyAMA12 を使用してください（ttyAMA2~ttyAMA5 は使用できません。スクリプトによって新しく作成されたデバイス番号を使用する必要があります）
:::

## Modbus RTU テストの使用手順

**ステップ 1**: reComputer R1000 で以下のスクリプトを入力して minicom ソフトウェアを開きます

```shell
minicom -D /dev/ttyAMAx -b 9600
```

その中で、`-D` の後にはオープンしたいデバイス番号が続き、`-b` はボーレートを指し、デバイス番号は最初のステップで新しく作成されたデバイス番号である必要があります。次に、W10 PC で MobaXterm を開き、新しいシリアルポートターミナルを作成し、シリアルポート番号を選択し、ボーレートは 9600 に設定します。最後に、RS485 との双方向通信を実行できます。図に示すように、reComputer R1000 で入力された内容は RS485 経由で送信できます。W10 PC では、W10 PC で入力された内容も reComputer R1000 に送信でき、双方向通信が正常に動作します。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>

**ステップ 2**: RS485 機能のテスト後、Modbus 機能テストを実行できます。このステップでは、reComputer R1000 を Modbus スレーブとしてテストできます。reComputer R1000 で ModbusMechanic ソフトウェアを開き、デバイス番号とボーレートを選択し、左上のシミュレートされたスレーブ機能をクリックして 2 つのコイルを追加します。次に、W10 で Modbus poll をマスターステーションとして開き、スレーブステーションのコイルを読み取ります。その後、Modbus poll の表示ウィンドウを開くと、Modbus RTU の送受信メッセージが正常であることが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**ステップ 3**: このステップでは、reComputer R1000 を Modbus マスターとしてテストできます。reComputer R1000 と W10 PC の両方で ModbusMechanic ソフトウェアを開き、デバイス番号とボーレートを選択します。W10 PC は設定の第 3 ステップを参照してください。reComputer R1000 で `Read Coils(0x01)` を選択してスレーブのコイルを読み取り、`Slave Node` を 1 に設定し、`Register` で読み取りたいアドレスを選択し、最後に `Transmit packet` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>

## Modbus TCP テストの使用手順

**ステップ 1**: Win10 PC と R1000 で modbusmechanic を開きます

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**ステップ 2**: R1000 が modbus TCP ホストとして動作します。W10 PC で `Tool => Start Slave Simulator` をクリックし、TYPE で `TCP` を選択し、Slave ID で `1` を選択し、その後 `Coils` を追加します。次に R1000 で `IP` を入力し、Scan group で `Read Coil` を選択します。`Slave Node` と `Register` を入力し、最後に `Transmit packet` をクリックします。スレーブデータが正常に読み取られたことが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**ステップ 3**: R1000 が modbus TCP スレーブとして動作します。設定については第 2 ステップを参照してください。R1000 がスレーブとして正常にデータを読み取れることが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>

R1000 で Modbus TCP スレーブプログラムを実行するには `502` ポートをリッスンする必要があり、`sudo` 権限が必要な場合があります。アプリケーションが `502` ポートをリッスンできない場合は、権限を追加してみてください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
