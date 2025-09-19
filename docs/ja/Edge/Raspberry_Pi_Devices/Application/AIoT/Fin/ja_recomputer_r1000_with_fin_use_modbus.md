---
description: この記事では、`FIN Framework` の `Modbus Connector` の使用方法を紹介します。

title: reComputer R1000 と FIN を使用した Modbus TCP/RTU の利用
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP/RTU
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_modbus_tcp_and_rtu
last_update:
  date: 07/15/2024
  author: ShuishengPeng
---

## はじめに

FIN Framework (FIN) は、統合、制御、管理、分析、可視化、接続が可能なアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEM によって様々な製品やサービスに統合することができます。

この記事では、`FIN Framework` の `Modbus Connector` の使用方法を紹介し、FIN Framework における Modbus TCP/RTU の使用について詳しく説明します。主に3つの側面を含みます：`FIN Framework` プロジェクトの作成、`シリアルポート番号` の設定、`Modbus Connector` の設定、および `Equip` へのデータポイントの追加です。

## はじめに

このプロジェクトを開始する前に、ここで説明されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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

### ソフトウェア準備

- FIN Framworkのインストール方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_install_fin/)を参照してください。

- reComputer R1000のmodbus機能の使用方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/)を参照してください。
- W10 PCで[modbusmechanic](https://modbusmechanic.scifidryer.com/)を使用します。他のmodbusテストツールも使用できます。

### ハードウェア構成

ModbusTCPの場合、イーサネットケーブルを使用してW10 PCとreComputer R1000をスイッチに接続し、同じネットワークセグメント上にあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

ModbustRTUの場合、rs485からUSBモジュールを使用してreComuputer R1000をW10 PCと接続しました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

### 新しいプロジェクトの作成

**ステップ1**: ホームページの左下角にある`Create`ボタンをクリックすると、新しいポップアップウィンドウが表示されます。ポップアップウィンドウには主に3つの属性を入力する必要があります：

- NAME: 新しいプロジェクトの名前
- DISPLAY NAME: 表示されるプロジェクト名
- DESCRIPTION: プロジェクトの説明

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_1.gif" /></center>

**ステップ2**: プロジェクトを開き、`DB Builder`に入り、`Connectors`をクリックすると、この時点では`Modbus`オプションがないことがわかります。`FIN Framwork`の`Modbus Connector`を開く必要があり、そうすると`Modbus`オプションがここに表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_2.gif" /></center>

### Modbus TCPの`Modbus Connector`設定

**ステップ1**: `Modbus Connector`を開きます。`Settrings => Ext`をクリックして`Modbus`を見つけます。この時点で`Modbus`は赤色でマークされています。`Enable`をクリックすると、`Modbus`マークが緑色に変わり、`Modbus Connector`が正常に開かれたことを示します。再び`DB Builder`に入ると、すでに`Modbus`オプションがあることがわかります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**ステップ2**: 新しいModbus接続を追加します。`Modbus => Add`をクリックすると、新しいポップアップウィンドウに主に以下のパラメータを入力する必要があります：

- Dis: コネクタの名前
- ModbusSlave: これは接続されるmodbusデバイスのスレーブになります（デフォルトは1）
- Existing Register Map: ユーザーがすでにModbusコネクタを設定している場合、ここで利用可能なレジスタを選択するか、次のプロパティModbusRegMapUriで新しいものを作成できます。
- ModbusRegMapUri: ここでユーザーはこのコネクタとリンクするレジスタマップの名前を指定します。「xxx」をレジスタマップの名前に置き換えてください。
- Uri: ここでmodbusコネクタのuriを指定します。URIの形式は表に示すとおりです：

   <div class="table-center">

  | プロトコル                                              | URI設定        | 例    | 注記 |
  | ------------------------------------------------------------ | ----------- | -------------- | --------- |
  | TCP/IP | `modbus-tcp://host:port/` | `modbus-tcp://10.0.0.17/` | デフォルトポートは502、標準の場合は省略可能       |
  | RTU over TCP/IP  | `modbus-rtutcp://host:port/`  | `modbus-rtutcp://192.168.1.120:9001/`  | デフォルトポートは502、標準の場合は省略可能      |
  | RTU over RS-485  | `modbus-rtu://<port>-<baud>-<dataBits>-<parity>`  | `modbus-rtu://serial0-9600-8n1-none`  |       |

  </div>

この例では、レジスタマップとして「r1000_demo」を指定しました。次に、UriでデバイスのIPを追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_4.gif" /></center>

**ステップ3**: 新しい`Register Maps`を追加します。`Register Maps => Add`をクリックし、`Name`を入力します。これはステップ2の`ModbusRegMapUri`の名前と一致する必要があります。最後に`ADD`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_5.gif" /></center>

システムは`opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`ディレクトリに新しい`r1000_demo.csv`ファイルを作成します。このファイルは読み取る必要があるModbusレジスタ情報を記述します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_register_map_addr.png" /></center>

**ステップ4**: 読み取るレジスタ情報を追加します。`Modbus Connector`はModbusマスターとして存在します。スレーブのレジスタを読み取ります。読み取るレジスタ情報を設定する必要があります。`r1000_demo`をクリックすると、デフォルトで`ping`の説明があることがわかります。これは必須です。新しいレジスタ情報を追加し続け、`Register Maps => r1000_demo => Add`をクリックします。新しいポップアップウィンドウには主に以下のパラメータを入力する必要があります：

- name(必須): レジスタの名前。

  - 一意である必要があります

  - 小文字のa-zで始まる必要があります
  - a-z、A-Z、0-9、アンダースコアのみ許可されます。スペースやその他の特殊文字は使用できません。

- addr(必須): これはmodbusの規約に従うレジスタのアドレスです。

  - 0xxxx - コイル (00001-065536)
  - 1xxxx - 離散入力 (10001-165536)
  - 3xxxx - 入力レジスタ (30001-365536)
  - 4xxxx - 保持レジスタ (40001-465536)

- data(必須): これはレジスタのデータ型を定義します。

  - タイプ:
    - bit - Bool
    - u1 - 符号なし8ビット整数
    - u2 - 符号なし16ビット整数
    - u4 - 符号なし32ビット整数
    - s1 - 符号付き8ビット整数
    - s2 - 符号付き16ビット整数
    - s4 - 符号付き32ビット整数
    - s8 - 符号付き64ビット整数
    - f4 - 32ビット浮動小数点
    - f8 - 64ビット浮動小数点

- rw(必須): これは読み取り/書き込み権限を決定します

  - rw - レジスタは読み取りと書き込みが可能
  - r - レジスタは読み取り専用
  - w - レジスタは書き込み専用

- scale(オプション): これにより、ユーザーはレジスタにスケールファクターを適用できます。形式は [演算子] [数値] で、ファクターは数値定数です。

  - 例:
    - 加算: +1.5
    - 減算: -0.25
    - 乗算: *10
    - 除算: /1000

- dis(オプション): これは、ユーザーがレジスタに対して見やすい表示名を指定できるオプションのタグです。

- unit(オプション): これはレジスタに使用する単位を定義します。

- tags(オプション): これは、データベースに学習される際にポイントに適用するタグです。

- folderPath(オプション): ユーザーがポイントを整理したい場合、folderPathを適用することで整理できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_6.gif" /></center>

**ステップ 5**: 通信テスト。レジスタの説明情報を追加した後、通信を実行できます。ここでは `ModbusMechanic` を Modbus スレーブとして使用します。`Modbus => Ping` をクリックすると、`Status` が `OK` に変わり、通信が正常であることを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_7.gif" /></center>

### Modbus RTU用の `Modbus Connector` の設定

#### シリアルポートの設定

実行する必要があるスクリプトは以下の通りです:

```shell
## Turn off FIN service
sudo systemctl stop fin
## After downloading the config file, place it in /opt/finFramework_5.1.6.55/etc/finStackSerial/
sudo cp ~/config.props  /opt/finFramework_5.1.6.55/etc/finStackSerial/
## Modify the config.props file to: serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
sudo nano /opt/finFramework_5.1.6.55/etc/finStackSerial/config.props
## Restart the FIN service, wait for a while and then use a browser to open FIN
sudo systemctl restart fin

```

**ステップ 1**: FINサービスを停止し、[設定ファイル](https://drive.google.com/file/d/1j1aGGSsGPjGCYfUGcXTqL2XGP2EuqFw2/view?usp=share_link)をダウンロードして`/opt/finFramework_5.1.6 .55/etc/finStackSerial/`ディレクトリに保存します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_1.gif" /></center>

**ステップ 2**: config.propsを以下のように変更します：

```shell
serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
```

修正が完了したら、FINサービスを再起動します
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_2.gif" /></center>

**ステップ3**：`Folio => launch`をクリックし、次のクエリを挿入します：`serialPorts()`、結果には特定のポートに使用する必要がある名前が表示されます。ポートは物理ポートの名前ではありませんが、デバイスの物理ポートと`serial0`、`serial1`...のような使用するポート名の間には対応関係があります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_3.gif" /></center>

#### Modbus RTUの設定

**ステップ1**: `Modbus Connector`を開きます。`Settrings => Ext`をクリックし、`Modbus`を見つけます。この時、`Modbus`は赤色でマークされています。`Enable`をクリックすると、`Modbus`マークが緑色に変わり、`Modbus Connector`が正常に開かれたことを示します。再度`DB Builder`に入ると、`Modbus`オプションが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**ステップ2**: 新しいModbus接続を追加します。`Modbus => Add`をクリックします。この例では、レジスタマップとして「r1000_demo_rtu」を指定しました。次に、Uriのデバイスにシリアルポートを追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_4.gif" /></center>

**ステップ3**: 新しい`Register Maps`を追加します。`Register Maps => Add`をクリックし、`Name`を入力します。これはステップ2の`ModbusRegMapUri`の名前と一致する必要があります。最後に`ADD`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_5.gif" /></center>

システムは`opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`ディレクトリに新しい`r1000_demo_rtu.csv`ファイルを作成します。このファイルは、読み取る必要があるModbusレジスタ情報を記述します。

**ステップ4**: 読み取るレジスタ情報を追加します。`Modbus Connector`はModbusマスターとして存在します。スレーブのレジスタを読み取ります。読み取るレジスタ情報を設定する必要があります。`r1000_demo_rtu`をクリックすると、デフォルトで`ping`の説明があることがわかります。これは必須です。新しいレジスタ情報を追加し続け、`Register Maps => r1000_demo_rtu => Add`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_6.gif" /></center>

**ステップ5**: 通信テスト。レジスタの説明情報を追加した後、通信を行うことができます。ここでは`ModbusMechanic`をModbusスレーブとして使用します。`Modbus => Ping`をクリックすると、`Status`が`OK`に変わり、通信が正常であることを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_7.gif" /></center>

### `Equip Tree`にデータポイントを追加

**ステップ1**: `Equip`を追加します。`Equip Tree => + => Add site`をクリックし、`Name`を入力します。ここでは`Tower`と入力し、`Tower`という名前の`site`を追加できます。次に`Equip Tree => Tower => + => Add Floor`をクリックし、`Name`を入力します。ここでは`Floor1`と入力し、`Floor1`という名前の`Floor`を追加できます。再度`Equip Tree => Tower => Floor1 => + => Add Equip`をクリックし、`Name`を入力します。ここでは`ModbusEquip`と入力して新しい`Equip`を追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_8.gif" /></center>

**ステップ2**: `ModbusEquip`の右側にある`->`をクリックして、システムパスを`Tower/Floor1/ModbusEquip`の下に設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbustcp_modbusequip_path.png" /></center>

**ステップ3**: データポイントを追加します。`Modbus => Modbus Conn`をクリックし、新しいウィンドウで`Discover Points`をクリックすると、設定したレジスタ情報ポイントが表示されます。読み取るレジスタを選択し、`Add`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" /></center>

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
