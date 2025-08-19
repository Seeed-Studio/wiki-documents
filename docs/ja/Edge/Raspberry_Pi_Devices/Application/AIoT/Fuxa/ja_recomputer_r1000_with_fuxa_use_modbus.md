---
description: この記事では、主に fuxa を使用して ModbusRTU/TCP 通信を行う方法を紹介します。

title: reComputer R1000 と fuxa を使用した Modbus RTU/TCP の利用方法
keywords:
  - エッジコントローラー
  - reComputer R1000
  - fuxa
  - ModbusRTU/TCP
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fuxa_modbus_rtu_and_tcp
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
FUXA は、ウェブベースのプロセス可視化 (SCADA/HMI/ダッシュボード) ソフトウェアです。FUXA を使用すると、機械の個別デザインによるモダンなプロセス可視化やリアルタイムデータ表示を作成できます。Modbus RTU/TCP、Siemens S7 プロトコル、OPC-UA、BACnet IP、MQTT、その他のプロトコルをサポートしています。

この記事では、主に fuxa を使用して ModbusRTU/TCP 通信を行う方法を紹介します。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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

### ソフトウェアの準備
* Python 3.11 は fuxa と互換性がない可能性があります。Python のバージョンが 3.11 の場合は、別のバージョンに変更することを検討してください。
* W10 PC 上で [modbusmechanic](https://modbusmechanic.scifidryer.com/) を使用します。他の Modbus テストツールを使用することもできます。
* reComputer R1000 上で [fuxa](https://github.com/frangoteam/FUXA) を使用します。以下の手順を参考にして、reComputer R1000 に fuxa をインストールしてください。
  ```shell
    ## Node バージョン 14 || 16 || 18 をインストールしている必要があります。
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## 次に npm から FUXA をインストールします
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```
* reComputer R1000 の Modbus 機能の使用方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/) を参照してください。

### ハードウェアの構成
ModbusRTU の場合、rs485 から USB モジュールを使用して reComputer R1000 を W10 PC に接続しました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

ModbusTCP の場合、イーサネットケーブルを使用して W10 PC と reComputer R1000 をスイッチに接続し、同じネットワークセグメントに配置しました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## ModbusRTU 通信手順

**ステップ 1**: Win10 PCでModbusMechanicを開き、対応するシリアルポートとボーレートを選択します。その後、右上の`Tools`をクリックし、`Start Slave Simulator`を選択します。次に`RTU`を選択し、`slave ID`を入力します。その後、スレーブ機器のデータフィールドを設定できます。ここでは、Modbusホストから後で読み取るために3つのコイルと`Holding Register`を追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_slva_data.gif" /></center>

**ステップ 2**: `fuxa`で右下の`+`ボタンをクリックし、モジュール名を入力します。`Type`には`modbusRTU`を選択し、`Connection options`には`SeriaPort`を選択します。その後、使用するシリアルポート番号を選択し、対応するボーレートやその他のパラメータを設定します。最後に`OK`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/first_configure.png" /></center>

**ステップ 3**: 次に、`Devices settings`ページに移動し、左上の`+`ボタンをクリックして読み取る必要があるデータフィールドを設定します。対応するパラメータを設定し、`OK`をクリックすると、`fuxa`がModbusスレーブデータを正常に取得したことが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_master.gif" /></center>

## ModbusTCP 通信手順

**ステップ 1**: Win10 PCでModbusMechanicを開き、右上の`Tools`をクリックして`Start Slave Simulator`を選択します。その後、`TCP`を選択し、`slave ID`を入力します。スレーブのデータフィールドを設定できます。ここでは、Modbusホストから後で読み取るために2つのコイルと`Holding Register`を追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_slava_data.gif" /></center>

**ステップ 2**: `fuxa`の右下の`+`ボタンをクリックし、モジュール名を入力します。`Type`には`modbusTCP`を選択し、`Connection options`には`TcpPort`を選択します。`Slave IP and port`にはスレーブ機器のIPアドレスを選択し、デフォルトのポート番号は502です。その後、`Slave ID`を入力し、最後に`OK`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbustcp_first_configure.png" /></center>

**ステップ 3**: 次に、`Devices settings`ページに移動し、左上の`+`ボタンをクリックして読み取る必要があるデータフィールドを設定します。対応するパラメータを設定し、`OK`をクリックすると、`fuxa`がModbusスレーブデータを正常に取得したことが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" /></center>

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>