---
description: 本記事では、reComputer R1000 の 485 通信機能の使用方法を主に紹介し、RS485 および Modbus 通信機能をテストします。
title: reComputer R1000 で rs485 と modbus を使用する方法
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/r1000_connection_1.webp
slug: /ja/recomputer_r1000_use_rs485_modbus_rtu
last_update:
  date: 05/15/2025
  author: Jiahao Li
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
本記事では、reComputer R1000 の 485 通信機能の使用方法を主に紹介し、RS485 および Modbus 通信機能をテストします。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェア

* W10 PC で [modbus poll](https://www.modbustools.com/modbus_poll.html) を使用します。他の Modbus テストツールを使用することもできます。
* reComputer R1000 および W10 PC で [modbusmechanic](https://modbusmechanic.scifidryer.com/) を使用します。他の Modbus テストツールを使用することもできます。
* W10 PC で [mobaxterm](https://mobaxterm.mobatek.net/) を使用します。他のシリアルポートテストツールを使用することもできます。
* reComputer R1000 で以下のコマンドを使用して **minicom** ツールをダウンロードする必要があります：
```sh
sudo apt-get install minicom
```

### ハードウェア構成

このテストでは、RS485 to USB モジュールを使用して reComputer R1000 と W10 PC を接続します。
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

ModbusTCP の場合、イーサネットケーブルを使用して W10 PC と reComputer R1000 をスイッチに接続し、同じネットワークセグメントに配置します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## reComputer R1000v1.1 で minicom を構成する

**注意:** RS485 を minicom で使用する前に、[こちら](https://wiki.seeedstudio.com/ja/recomputer_r1000_flash_OS/#install-drivers) のように r1000 ドライバをインストールしてください。

### まず、minicom をインストールする

以下のコマンドを使用して、ホストコンピュータと reComputer R1000 の両方に minicom をインストールします：

```
sudo apt install minicom
```

### 次に、minicom を以下のように構成する

`Ctrl+Alt+T` を押してターミナルを開き、以下のようにコマンドを入力します：

```
sudo minicom -D /dev/ttyAMA*
```
`ttyAMA*` は使用する RS485 に応じて `ttyAMA2`, `ttyAMA3`, または `ttyAMA4` になります。

その後、`Ctrl+A` を押してから `Z` を入力すると、以下のように minicom が表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

`o` を入力して minicom を構成し、`Serial port setup` を選択すると、以下のように表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

次に、`F` と `H` を入力して minicom を RS485 モードに設定します。結果は以下のように表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

最後に、`Exit` を選択して `Enter` を押して構成を終了します。以下のように表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>

## reComputer R1000 v1.0 に必要なアクション

reComputer R1000 v1.0 では、内蔵の485トランシーバーのDEピンがデフォルトで制御不能になっており、インターフェースは一方向（受信または送信のみ）でしかデータを送信できません。

:::note
ハードウェアのリビジョン（v1.0とv1.1）を区別するには、[reComputer R1000 V1.1 製品変更詳細](https://wiki.seeedstudio.com/ja/recomputer_r1000_v1_1_description/)を参照してください。
:::

現在、2つの解決策があります。1つは**UARTドライバをフックするカーネルモジュールをロードする方法（推奨）**で、もう1つは`libgpiod`を呼び出してDEピンを制御するアプリケーション層ベースの方法です。ニーズに応じて選択してください。

### カーネルモジュールソリューション（推奨）

#### インストール

まず、カーネルモジュールのソースコードをダウンロードする必要があります。これは独立したリポジトリなので、直接クローンできます。

```shell
git clone https://github.com/bclswl0827/r1000v1-rs485-autoflow
cd r1000v1-rs485-autoflow
```

次に、カーネルモジュールをコンパイルします。

```shell
make
```

コンパイル中にエラーが発生した場合、現在実行中のカーネルに対応するカーネルヘッダーをインストールする必要があるかもしれません。Raspberry Pi OSを使用していると仮定して、以下のコマンドでカーネルヘッダーをインストールできます。

```shell
sudo apt-get install linux-headers-$(uname -r)
```

その後、再度カーネルモジュールをコンパイルしてください。

#### カーネルモジュールのロード

コンパイルが完了したら、以下のコマンドを実行してカーネルモジュールをロードします。

```shell
sudo insmod r1000v1-rs485-autoflow.ko
```

カーネルモジュールが正常にロードされた場合、カーネルログに以下のメッセージが表示されます。`dmesg`コマンドで確認してください。

```shell
[  256.037465] r1000v1_rs485_autoflow: RS-485 interface has been hooked successfully
```

次に、`minicom`ツールを使用してRS485通信をテストできます。他のシリアルポートテストツール（例：`picocom`）も使用可能です。

カーネルを起動時にロードするには、以下のコマンドを使用してこのモジュールを`/etc/modules`ファイルに追加します。

```shell
echo "r1000v1_rs485_autoflow" | sudo tee -a /etc/modules
```

モジュールが登録された後、変更を有効にするためにシステムを再起動する必要があります。

```shell
sudo reboot
```

#### カーネルモジュールのアンロード

カーネルモジュールをアンロードするには、以下のコマンドを実行します。これにより、内蔵のRS485インターフェースは受信専用モードに戻ります。

```shell
sudo rmmod r1000v1-rs485-autoflow
```

#### DKMSを使用したモジュールの追加

DKMS（Dynamic Kernel Module Support）は、カーネルモジュールのビルドとインストールを自動化するシステムで、複数のカーネルバージョン間でモジュールを管理するのに便利です。DKMSを使用することで、カーネル更新後もモジュールの互換性を維持できます。

以下のコマンドを使用して、このカーネルモジュールをDKMSに追加します。

```shell
sudo make dkms_install
```

このコマンドは、モジュールをDKMSに登録し、コンパイルして現在のカーネルバージョンにインストールします。将来的にカーネルがアップグレードされた場合、DKMSは新しいバージョン用にモジュールを自動的に再ビルドしてインストールするため、手動で再コンパイルする必要はありません。

### アプリケーション層ソリューション

#### スクリプトの使用

- 本記事で紹介した方法に加え、以下のコマンドで実行できるスクリプトも提供しています。このスクリプトは、新しい/dev/ttyxを自動的に作成し、作成されたデバイス番号を使用してrs485/modbus rtu通信を行うことができます。
  ```shell
  curl -sSL https://raw.githubusercontent.com/Seeed-Projects/R1000-RS485-Util/main/setup_rs485.sh | sudo bash
  ```

#### 手動設定

まず、[**Cプログラム**](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/tree/master/tools/rs485_control_DE)をダウンロードし、ReadMeの内容を参照してください。コンパイルして実行します。

```shell
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd seeed-linux-dtoverlays/tools/rs485_control_DE/
sudo apt-get install libgpiod-dev
gcc -o rs485_DE rs485_DE.c -lgpiod
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 
```

このプログラムは新しいttyAMAxデバイスを作成します。デバイス番号は、プログラム実行時に入力したパラメータに依存します。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/cfg_c.gif" /></center>

:::note
- 上記の例は、1つのRS485インターフェースを使用する方法を示しています。3つの485インターフェースを使用したい場合は、以下のスクリプトを使用して実現できます。
```shell
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 &
sudo ./rs485_DE /dev/ttyAMA3 /dev/gpiochip0 17 /dev/ttyAMA11 &
sudo ./rs485_DE /dev/ttyAMA5 /dev/gpiochip0 24 /dev/ttyAMA12 &
```
ttyAMA10~ttyAMA12はttyAMA2~ttyAMA5に一対一で対応します。アプリケーションではttyAMA10~ttyAMA12を使用して通常の通信を行ってください（ttyAMA2~ttyAMA5は使用できません。スクリプトで新たに作成されたデバイス番号を使用する必要があります）。
:::

## Modbus RTU テストの使用手順

**ステップ 1**: reComputer R1000 上で以下のスクリプトを入力して minicom ソフトウェアを開きます。

```shell
minicom -D /dev/ttyAMAx -b 9600
```
ここで、`-D` の後には開きたいデバイス番号を指定し、`-b` はボーレートを指します。デバイス番号は最初のステップで新しく作成されたデバイス番号である必要があります。その後、W10 PC 上で MobaXterm を開き、新しいシリアルポートターミナルを作成し、シリアルポート番号を選択し、ボーレートを 9600 に設定します。最後に、RS485 を使用して双方向通信を行うことができます。以下の図のように、reComputer R1000 上で入力された内容が RS485 を介して送信されます。W10 PC 上で入力された内容も reComputer R1000 に送信され、双方向通信が正常に行われます。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>

**ステップ 2**: RS485 機能をテストした後、Modbus 機能テストを実行できます。このステップでは、reComputer R1000 を Modbus スレーブとしてテストします。reComputer R1000 上で ModbusMechanic ソフトウェアを開き、デバイス番号とボーレートを選択します。その後、左上のシミュレートされたスレーブ機能をクリックして 2 つのコイルを追加します。次に、W10 上で Modbus poll を開き、マスターステーションとしてスレーブステーションのコイルを読み取ります。その後、Modbus poll の表示ウィンドウを開くと、Modbus RTU の送受信メッセージが正常であることが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**ステップ 3**: このステップでは、reComputer R1000 を Modbus マスターとしてテストします。reComputer R1000 と W10 PC の両方で ModbusMechanic ソフトウェアを開き、デバイス番号とボーレートを選択します。W10 PC の設定はステップ 3 を参照してください。reComputer R1000 上で `Read Coils(0x01)` を選択してスレーブのコイルを読み取り、`Slave Node` を 1 に設定し、`Register` で読み取りたいアドレスを選択します。最後に `Transmit packet` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>

## Modbus TCP テストの使用手順

**ステップ 1**: Win10 PC と R1000 上で modbusmechanic を開きます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**ステップ 2**: R1000 を Modbus TCP ホストとして動作させます。W10 PC 上で `Tool => Start Slave Simulator` をクリックし、`TYPE` を `TCP` に選択し、`Slave ID` を `1` に設定して `Coils` を追加します。その後、R1000 に `IP` を入力し、スキャングループで `Read Coil` を選択します。`Slave Node` と `Register` を入力し、最後に `Transmit packet` をクリックします。スレーブデータが正常に読み取られたことが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**ステップ 3**: R1000 を Modbus TCP スレーブとして動作させます。設定はステップ 2 を参照してください。R1000 がスレーブとしてデータを正常に読み取れることが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>

R1000 で Modbus TCP スレーブプログラムを実行するには、`502` ポートをリッスンする必要があります。これには `sudo` 権限が必要になる場合があります。アプリケーションが `502` ポートをリッスンできない場合は、権限を追加してみてください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>