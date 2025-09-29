---
description: この記事では、主にfuxaを使用してModbusRTU/TCP通信を行う方法について紹介します。

title: reComputer R1000でfuxaを使用してmodbus RTU/TCPを利用する
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - ModbusRTU/TCP
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fuxa_modbus_rtu_and_tcp
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## はじめに

FUXAは、Webベースのプロセス可視化（SCADA/HMI/ダッシュボード）ソフトウェアです。FUXAを使用すると、機械用の個別デザインとリアルタイムデータ表示を備えた最新のプロセス可視化を作成できます。Modbus RTU/TCP、Siemens S7プロトコル、OPC-UA、BACnet IP、MQTT、その他のプロトコルをサポートしています。

この記事では、主にfuxaを使用してModbusRTU/TCP通信を行う方法について紹介します。

## はじめに

このプロジェクトを開始する前に、ここで説明するようにハードウェアとソフトウェアを事前に準備する必要があります。

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

### ソフトウェアの準備

- Python 3.11はfuxaと互換性がない可能性があります。Pythonのバージョンが3.11の場合は、別のPythonバージョンに変更することを検討してください。

- W10 PCで[modbusmechanic](https://modbusmechanic.scifidryer.com/)を使用します。他のmodbusテストツールも使用できます
- reComputer R1000で[fuxa](https://github.com/frangoteam/FUXA)を使用します。reComputer R1000にfuxaをインストールするには、以下の手順を参照してください

  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

- reComputer R1000のmodbus機能の使用方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/)を参照してください。

### ハードウェア構成

ModbustRTUについては、rs485からUSBモジュールを使用してreComuputer R1000をW10 PCと接続しました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

ModbusTCPについては、イーサネットケーブルを使用してW10 PCとreComputer R1000をスイッチに接続し、同じネットワークセグメント上にあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## ModbusRTU通信手順

**ステップ1**：Win10 PCでModbusMechanicを開き、対応するシリアルポートとボーレートを選択し、右上の`Tools`をクリックして`Start Slave Simulator`を選択し、`RTU`を選択して`slave ID`を入力します。その後、スレーブのデータフィールドを設定できます。後続のModbusホストからの読み取りのために、3つのコイルと1つの`Holding Register`を追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_slva_data.gif" /></center>

**ステップ2**：`fuxa`で右下の`+`ボタンをクリックし、モジュール名を入力し、`Type`に`modbusRTU`を選択し、`Connection options`に`SeriaPort`を選択し、使用する必要があるシリアルポート番号を選択して対応するボーレートとその他のパラメータを設定し、最後に`OK`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/first_configure.png" /></center>

**ステップ3**：その後、`Devices settings`ページに入り、左上の`+`ボタンをクリックして読み取る必要があるデータフィールドを設定します。対応するパラメータを設定して`OK`をクリックすると、`fuxa`がModbusスレーブデータの取得に成功したことがわかります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_master.gif" /></center>

## ModbusTCP通信手順

**ステップ1**：Win10 PCでModbusMechanicを開き、右上の`Tools`をクリックして`Start Slave Simulator`を選択し、`TCP`を選択して`slave ID`を入力し、スレーブのデータフィールドを設定できます。後続のModbusホストからの読み取りのために、2つのコイルと1つの`holding register`を追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_slava_data.gif" /></center>

**ステップ2**：`fuxa`の右下の`+`ボタンをクリックし、モジュール名を入力し、`Type`に`modbusTCP`を選択し、`Connection options`に`TcpPort`を選択し、`Slave IP and port`にスレーブマシンのIPアドレスを選択し、デフォルトポート番号は502で、`Slave ID`を入力し、最後に`OK`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbustcp_first_configure.png" /></center>

**ステップ3**：その後、`Devices settings`ページに入り、左上の`+`ボタンをクリックして読み取る必要があるデータフィールドを設定します。対応するパラメータを設定して`OK`をクリックすると、`fuxa`がModbusスレーブデータの取得に成功したことがわかります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" /></center>

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
