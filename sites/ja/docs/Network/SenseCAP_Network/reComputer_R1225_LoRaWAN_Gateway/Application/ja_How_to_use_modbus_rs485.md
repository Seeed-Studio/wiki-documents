---
description: この記事では主に reComputer R1225 の 485 通信機能の使用方法を紹介し、RS485 と Modbus の通信機能をテストします。
title: R1225 で rs485 と modbus を使用する方法
keywords:
  - ゲートウェイ
  - SenseCAP
  - エッジコントローラ
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /how_to_use_modbus_rs485_with_r1225
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/014/2026
  author: Kian
---

## はじめに

この記事では主に reComputer R1225 の 485 通信機能の使用方法を紹介し、RS485 と Modbus の通信機能をテストします。

## 準備

このプロジェクトを始める前に、ここで説明するように、あらかじめハードウェアとソフトウェアを準備しておく必要があります。

### ハードウェアの準備

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1225</th>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/reComputer-R1225.jpg" style={{width:300, height:'auto'}}/></div></td>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a></div></td>
        </tr>
  </table>
</div>

### ソフトウェア

* W10 PC 上で [modbus poll](https://www.modbustools.com/modbus_poll.html) を使用します。他の Modbus テストツールを使用することもできます
* reComputer R1225 と W10 PC 上で [modbusmechanic](https://modbusmechanic.scifidryer.com/) を使用します。他の Modbus テストツールを使用することもできます
* W10 PC 上で [mobaxterm](https://mobaxterm.mobatek.net/) を使用します。他のシリアルポートテストツールを使用することもできます
* reComputer R1225 上で次のコマンドを使用して **minicom** ツールをダウンロードする必要があります:

```sh
sudo apt-get install minicom
```

### ハードウェア構成

Modbus RTU では、RS485-USB 変換器を使用して R1225 を Windows 10 PC に接続し、テストを行います。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

Modbus TCP では、W10 PC と reComputer R1225 をスイッチに Ethernet ケーブルで接続し、同じネットワークセグメント上にあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

### 方法 1: コマンドラインインターフェース (CLI) を使用する

#### Modbus RTU テストの手順

##### minicom のインストールと設定

以下のコマンドで、ホストコンピュータと reComputer R1225 の両方に minicom をインストールします:

```
sudo apt install minicom
```

ターミナルを開き、次のようなコマンドを入力します:

```
sudo minicom -D /dev/ttyAMA*
```

使用する RS485 に応じて、`ttyAMA*` は `ttyAMA2, ttyAMA3 または ttyAMA4` である必要があります。

その後、`Ctal+A` を入力し、続いて `Z` を入力すると、次のように minicom が表示されます:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

minicom を設定するには `o` を入力し、`Serial port setup` を選択すると、次のように表示されます:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

次に `F` と `H` を入力して、minicom を RS485 モードにします。結果は次のように表示されます:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

最後に、`Exit` を選択して `Enter` を押し、次のように設定画面を終了します: 

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>

**ステップ 1**: RS485 機能のテスト

reComputer R1225 上で次のスクリプトを入力して、minicom ソフトウェアを起動します

```shell
minicom -D /dev/ttyAMAx -b 9600
```

パラメータの説明:

-D: 下のフィールドに開きたいデバイス番号を入力します。デバイス番号は新しく作成されたデバイス番号である必要があります。

-b: 下にボーレートを入力します

次に W10 PC 上で MobaXterm を開き、新しいシリアルポートターミナルを作成し、シリアルポート番号を選択し、ボーレートを 9600 に設定します。最後に、RS485 を使用して双方向通信を行うことができます。図のように、reComputer R1000 で入力した内容は RS485 経由で送信できます。W10 PC では、W10 PC で入力した内容も reComputer R1225 に送信でき、双方向通信は正常です。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>

**ステップ 2**: Modbus スレーブとしての R1225 のテスト

reComputer R1225 上で ModbusMechanic ソフトウェアを開き、デバイス番号とボーレートを選択し、左上のシミュレートスレーブ機能をクリックして 2 つのコイルを追加します。その後、W10 上で Modbus poll を開き、マスターステーションとしてスレーブステーションのコイルを読み取ります。次に Modbus poll の表示ウィンドウを開くと、Modbus RTU の送受信メッセージが正常であることが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**ステップ 3**: Modbus マスターとしての R1225 のテスト

reComputer R1225 と W10 PC の両方で ModbusMechanic ソフトウェアを開き、デバイス番号とボーレートを選択します。W10 PC は 3 番目のステップの設定を参照します。reComputer R1000 で `Read Coils(0x01)` を選択してスレーブのコイルを読み取り、`Slave Node` を 1 に設定し、`Register` で読み取りたいアドレスを選択し、最後に `Transmit packet` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>

#### Modbus TCP テストの手順

**ステップ 1**: Win10 PC と R1000 で modbusmechanic を開きます

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**ステップ 2**: Modbus TCP ホストとしての R1225 のテスト

W10 PC で `Tool => Start Slave Simulator` をクリックし、TYPE に `TCP` を選択し、Slave ID に `1` を選択してから、`Coils` を追加します。その後、R1225 に `IP` を入力し、Scan group に `Read Coil` を選択します。`Slave Node` と `Register` を入力し、最後に `Transmit packet` をクリックします。スレーブデータが正常に読み取られたことが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**ステップ 3**: Modbus TCP スレーブとしての R1225 のテスト

設定についてはステップ 2 を参照してください。R1225 がスレーブとして正常にデータを読み取れることが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>

:::note
R1000 で Modbus TCP スレーブプログラムを実行するには、ポート 502 をリッスンする必要があり、sudo 権限が必要な場合があります。アプリケーションがポート 502 をリッスンできない場合は、権限を追加してみてください。
:::

### 方法 2: グラフィカルユーザーインターフェース (GUI) を使用する

#### RS485 パラメータ設定

[Quick Start](https://wiki.seeedstudio.com/ja/r1225_quick_start/) ガイドに従って、SenseCAP Gateway OS の Web インターフェースにアクセスします。

**ステップ 1**: Luci にログイン

ブラウザにデバイスの IP アドレスを入力して、Luci ページにアクセスします。
次に、デバイスのユーザー名とパスワードを入力してログインし、Login ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

**ステップ 2** `RS485` - `Serial Settings` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_1.png" alt="pir" width={200} height="auto" /></p>

R1225 の 3 つの 485 チャネルすべてのパラメータ設定はここに統合されています。

まず、使用したいチャネル (CH1, CH2, CH3) を選択します。

次に、ボーレート、データビット、ストップビット、パリティ、フロー制御、読み取りタイムアウトなどのパラメータを設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_2.png" alt="pir" width={800} height="auto" /></p>

**ステップ 3**: `Save & Apply` をクリックして設定を適用します

#### Modbus RTU パラメータ設定

3 つの RS-485 ポートのパラメータ（デフォルト設定は「9600, 8, 1, N」）を設定した後、Modbus RTU の設定を続行できます。

**ステップ 4**: `RS485` - `Protocol Configuration` をクリックします

デバッグしたいチャネル (CH1, CH2, CH3) を選択します。

プロトコルステータスを「Enable」、プロトコルタイプを「Modbus RTU」に設定します。

有効化すると、Modbus RTU の設定画面が表示されます。接続されているセンサーのデータシートに従って設定してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_3.png" alt="pir" width={800} height="auto" /></p>

**ステップ 5**: Modbus RTU パラメータ設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_4.png" alt="pir" width={800} height="auto" /></p>

**ステップ 6**: `Save & Apply` をクリックします

設定が有効になったら、`Read Data` をクリックすると、`Frame Data` に取得したデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_5.png" alt="pir" width={800} height="auto" /></p>

#### Modbus TCP パラメータ設定

**ステップ 7**: `RS485` - `MQTT Setttings` をクリックします

使用したいチャネル (CH1, CH2, CH3) を選択します。

トランスポートプロトコルとして TCP を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp1.png" alt="pir" width={800} height="auto" /></p>

**ステップ 8**: MQTT 設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp2.png" alt="pir" width={800} height="auto" /></p>

**ステップ 9**: `Save & Apply` をクリックします

これで設定が有効になりました。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
