---
description: この記事では、`FIN Framework` の `Modbus Connector` の使用方法を紹介します。

title: reComputer R1000 と FIN を使用した Modbus TCP/RTU の利用
keywords:
  - エッジコントローラー
  - reComputer R1000
  - FIN
  - ModbusTCP/RTU
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_modbus_tcp_and_rtu
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
FIN Framework (FIN) は、統合、制御、管理、分析、可視化、接続を可能にするアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEM によってさまざまな製品やサービスに統合することができます。

この記事では、`FIN Framework` の `Modbus Connector` の使用方法を紹介し、FIN Framework における Modbus TCP/RTU の使用方法を詳しく説明します。主に以下の3つの側面を含みます：`FIN Framework` プロジェクトの作成、`シリアルポート番号` の設定、`Modbus Connector` の設定、および `Equip` にデータポイントを追加する方法。

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
* FIN Framework のインストール方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_install_fin/) を参照してください。
* reComputer R1000 の Modbus 機能の使用方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/) を参照してください。
* W10 PC 上で [modbusmechanic](https://modbusmechanic.scifidryer.com/) を使用します。他の Modbus テストツールを使用することもできます。

### ハードウェアの構成

ModbusTCP の場合、Ethernet ケーブルを使用して W10 PC と reComputer R1000 をスイッチに接続し、同じネットワークセグメント上にあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

ModbusRTU の場合、rs485 から USB モジュールを使用して reComputer R1000 と W10 PC を接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

### 新しいプロジェクトの作成
**ステップ 1**: ホームページの左下にある `Create` ボタンをクリックすると、新しいポップアップウィンドウが表示されます。このポップアップウィンドウには、以下の3つの属性を入力する必要があります：
  - NAME: 新しいプロジェクトの名前
  - DISPLAY NAME: 表示されるプロジェクト名
  - DESCRIPTION: プロジェクトの説明

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_1.gif" /></center>

**ステップ 2**: プロジェクトを開き、`DB Builder` に入り、`Connectors` をクリックします。この時点では `Modbus` オプションが表示されていません。`FIN Framework` の `Modbus Connector` を有効にする必要があります。その後、ここに `Modbus` オプションが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_2.gif" /></center>

### Modbus TCP 用の `Modbus Connector` の設定

**ステップ 1**: `Modbus Connector` を開きます。`Settrings => Ext` をクリックし、`Modbus` を見つけます。この時点で、`Modbus` は赤色で表示されています。`Enable` をクリックすると、`Modbus` のマークが緑色に変わり、`Modbus Connector` が正常に有効化されたことを示します。再度 `DB Builder` に入り、`Modbus` オプションが既に存在していることを確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**ステップ 2**: 新しい Modbus 接続を追加します。`Modbus => Add` をクリックすると、新しいポップアップウィンドウが表示され、以下のパラメータを入力する必要があります：
  - Dis: コネクタの名前
  - ModbusSlave: 接続される Modbus デバイスのスレーブ（デフォルトは 1）
  - Existing Register Map: ユーザーが既に Modbus コネクタを設定している場合、ここで利用可能なレジスタを選択するか、次のプロパティ ModbusRegMapUri を使用して新しいものを作成します。
  - ModbusRegMapUri: このコネクタにリンクするレジスタマップの名前を指定します。"xxx" をレジスタマップの名前に置き換えます。
  - Uri: Modbus コネクタの URI を指定します。URI の形式は以下の表の通りです：
   <div class="table-center">

  | プロトコル                                              | URI 設定        | 例    | 備考 |
  | ------------------------------------------------------------ | ----------- | -------------- | --------- |
  | TCP/IP | `modbus-tcp://host:port/` | `modbus-tcp://10.0.0.17/` | デフォルトポートは 502、標準の場合は省略可能       |
  | TCP/IP 経由の RTU  | `modbus-rtutcp://host:port/`  | `modbus-rtutcp://192.168.1.120:9001/`  | デフォルトポートは 502、標準の場合は省略可能      |
  | RS-485 経由の RTU  | `modbus-rtu://<port>-<baud>-<dataBits>-<parity>`  | `modbus-rtu://serial0-9600-8n1-none`  |       |

  </div>

この例では、"r1000_demo" をレジスタマップとして指定し、デバイスの IP を Uri に追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_4.gif" /></center>

**ステップ 3**: 新しい`Register Maps`を追加します。`Register Maps => Add`をクリックし、`Name`を入力します。この名前はステップ2で設定した`ModbusRegMapUri`の名前と一致する必要があります。最後に`ADD`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_5.gif" /></center>

システムは`opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`ディレクトリ内に新しい`r1000_demo.csv`ファイルを作成します。このファイルには、読み取る必要があるModbusレジスタ情報が記述されています。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_register_map_addr.png" /></center>

**ステップ 4**: 読み取るレジスタ情報を追加します。`Modbus Connector`はModbusマスターとして機能し、スレーブのレジスタを読み取ります。読み取るレジスタ情報を設定する必要があります。`r1000_demo`をクリックすると、デフォルトで`ping`の説明が表示されます。これは必須です。新しいレジスタ情報を追加し続け、`Register Maps => r1000_demo => Add`をクリックします。新しいポップアップウィンドウには、以下のパラメータを入力する必要があります：

- name（必須）：レジスタの名前。

  - 一意である必要があります。
  - 小文字のa-zで始める必要があります。
  - a-z、A-Z、0-9、アンダースコアのみ使用可能です。スペースやその他の特殊文字は使用できません。

- addr（必須）：Modbus規約に従ったレジスタのアドレス。

  - 0xxxx - コイル (00001-065536)
  - 1xxxx - 離散入力 (10001-165536)
  - 3xxxx - 入力レジスタ (30001-365536)
  - 4xxxx - ホールディングレジスタ (40001-465536)

- data（必須）：レジスタのデータ型を定義します。

  - 種類：
    - bit - ブール値
    - u1 - 符号なし8ビット整数
    - u2 - 符号なし16ビット整数
    - u4 - 符号なし32ビット整数
    - s1 - 符号付き8ビット整数
    - s2 - 符号付き16ビット整数
    - s4 - 符号付き32ビット整数
    - s8 - 符号付き64ビット整数
    - f4 - 32ビット浮動小数点数
    - f8 - 64ビット浮動小数点数

- rw（必須）：読み取り/書き込みの権限を決定します。

  - rw - レジスタは読み取りおよび書き込み可能
  - r - レジスタは読み取り専用
  - w - レジスタは書き込み専用

- scale（オプション）：レジスタにスケールファクターを適用できます。形式は[演算子][数値]で、ファクターは数値定数です。

  - 例：
    - 加算: +1.5
    - 減算: -0.25
    - 乗算: *10
    - 除算: /1000

- dis（オプション）：レジスタの表示名を指定するためのオプションタグ。

- unit（オプション）：レジスタで使用する単位を定義します。

- tags（オプション）：データベースに学習されたポイントに適用するタグ。

- folderPath（オプション）：ポイントを整理するためにフォルダパスを適用できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_6.gif" /></center>

**ステップ 5**: 通信テスト。レジスタの説明情報を追加した後、通信を行うことができます。ここでは`ModbusMechanic`をModbusスレーブとして使用します。`Modbus => Ping`をクリックすると、`Status`が`OK`に変わり、通信が正常であることを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_7.gif" /></center>

### Modbus RTU用の`Modbus Connector`を設定する
#### シリアルポートを設定する
以下のスクリプトを実行します：
```shell
## FINサービスを停止
sudo systemctl stop fin
## 設定ファイルをダウンロード後、/opt/finFramework_5.1.6.55/etc/finStackSerial/に配置
sudo cp ~/config.props  /opt/finFramework_5.1.6.55/etc/finStackSerial/
## config.propsファイルを以下のように変更：serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
sudo nano /opt/finFramework_5.1.6.55/etc/finStackSerial/config.props
## FINサービスを再起動し、しばらく待ってからブラウザでFINを開く
sudo systemctl restart fin
```

**ステップ 1**: FINサービスを停止し、[設定ファイル](https://drive.google.com/file/d/1j1aGGSsGPjGCYfUGcXTqL2XGP2EuqFw2/view?usp=share_link)をダウンロードして`/opt/finFramework_5.1.6.55/etc/finStackSerial/`ディレクトリに保存します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_1.gif" /></center>

**ステップ 2**: config.propsを以下のように変更します：
```shell
serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
```
変更が完了したら、FINサービスを再起動します。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_2.gif" /></center>

**ステップ 3**：`Folio => launch`をクリックし、以下のクエリを挿入します：`serialPorts()`。結果には、特定のポートに使用する名前が表示されます。このポート名は物理ポートの名前ではなく、デバイスの物理ポートと使用するポート名（例：`serial0`、`serial1`など）の間に対応があります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_3.gif" /></center>

#### Modbus RTUを設定する

**ステップ 1**: `Modbus Connector`を開きます。`Settrings => Ext`をクリックし、`Modbus`を見つけます。この時点で`Modbus`は赤色で表示されています。`Enable`をクリックすると、`Modbus`のマークが緑色に変わり、`Modbus Connector`が正常に有効化されたことを示します。その後、`DB Builder`に再度アクセスすると、`Modbus`オプションが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**ステップ 2**: 新しいModbus接続を追加します。`Modbus => Add`をクリックします。この例では、"r1000_demo_rtu"をレジスタマップとして指定し、シリアルポートをデバイスのUriに追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_4.gif" /></center>

**ステップ 3**: 新しい`Register Maps`を追加します。`Register Maps => Add`をクリックし、`Name`を入力します。この名前はステップ2で設定した`ModbusRegMapUri`の名前と一致する必要があります。最後に`ADD`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_5.gif" /></center>

システムは、新しい `r1000_demo_rtu.csv` ファイルを `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/` ディレクトリ内に作成します。このファイルには、読み取る必要がある Modbus レジスタ情報が記述されています。

**ステップ 4**: 読み取るレジスタ情報を追加します。`Modbus Connector` は Modbus マスターとして存在します。これにより、スレーブのレジスタを読み取ることができます。読み取るレジスタ情報を設定する必要があります。`r1000_demo_rtu` をクリックすると、デフォルトで `ping` の説明が表示されます。これは必須です。新しいレジスタ情報を追加し続け、`Register Maps => r1000_demo_rtu => Add` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_6.gif" /></center>

**ステップ 5**: 通信テスト。レジスタの説明情報を追加した後、通信を実行できます。ここでは `ModbusMechanic` を Modbus スレーブとして使用します。`Modbus => Ping` をクリックすると、`Status` が `OK` に変わり、通信が正常であることを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_7.gif" /></center>


### `Equip Tree` にデータポイントを追加する

**ステップ 1**: `Equip` を追加します。`Equip Tree => + => Add site` をクリックし、`Name` を入力します。ここでは `Tower` を入力し、`Tower` という名前の `site` を追加します。その後、`Equip Tree => Tower => + => Add Floor` をクリックし、`Name` を入力します。ここでは `Floor1` を入力し、`Floor1` という名前の `Floor` を追加します。再度 `Equip Tree => Tower => Floor1 => + => Add Equip` をクリックし、`Name` を入力します。ここでは `ModbusEquip` を入力して新しい `Equip` を追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_8.gif" /></center>

**ステップ 2**: `ModbusEquip` の右側にある `->` をクリックして、システムパスを `Tower/Floor1/ModbusEquip` の下に作成します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbustcp_modbusequip_path.png" /></center>

**ステップ 3**: データポイントを追加します。`Modbus => Modbus Conn` をクリックし、新しいウィンドウで `Discover Points` をクリックします。設定したレジスタ情報ポイントが表示されます。読み取るレジスタを選択し、`Add` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" /></center>


## 技術サポート & 製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>