---
description: この記事では、主に fuxa を使用して OPC-UA 通信を行う方法を紹介します。

title: reComputer R1000 と fuxa を使用した OPC-UA
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - OPC-UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fuxa_opc_ua
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに 
FUXA は、ウェブベースのプロセス可視化 (SCADA/HMI/Dashboard) ソフトウェアです。FUXA を使用すると、機械の個別デザインとリアルタイムデータ表示を備えた最新のプロセス可視化を作成できます。Modbus RTU/TCP、Siemens S7 Protocol、OPC-UA、BACnet IP、MQTT などのプロトコルをサポートしています。

この記事では、主に fuxa を使用して OPC-UA 通信を行う方法を紹介します。`Prosys OPC UA Simulation Server` を W10 PC 上で実行し、その後 reComputer R1000 上でシミュレーターのデータを読み取ります。

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

### ソフトウェアの準備
* Python 3.11 は fuxa と互換性がない可能性があります。Python のバージョンが 3.11 の場合は、別のバージョンに変更することを検討してください。
* W10 PC 上で [Prosys OPC UA Simulation Server](https://downloads.prosysopc.com/opc-ua-simulation-server-downloads.php) を使用します。他の Modbus テストツールを使用することもできます。
* reComputer R1000 上で [fuxa](https://github.com/frangoteam/FUXA) を使用します。以下の手順を参考にして reComputer R1000 に fuxa をインストールしてください。
  ```shell
    ## Node Version 14 || 16 || 18 をインストール済みである必要があります。
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

### ハードウェアの構成

W10 PC と reComputer R1000 をスイッチに接続するためにイーサネットケーブルを使用し、同じネットワークセグメントにあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## OPC-UA 通信手順
**ステップ 1**: `Prosys OPC UA Simulation Server` を開き、`Connection Address(UA TCP)` をコピーします。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/OPC_UA_simulator.png" /></center>

**ステップ 2**: 右下の `+` ボタンをクリックし、`Name` を入力、`Type` に `OPCUA` を選択し、最初のステップでコピーした `Connection Address(UA TCP)` を `Address` に貼り付けます。`Security and encryption mode` はデバイスの要件に応じて選択します。ここでは `None-None` を選択します。デバイスが接続を確立する際に `Username` と `Password` を必要とする場合は、対応する箇所に入力してください。最後に `OK` をクリックします。`Prosys OPC UA Simulation Server` の `ConnectionLog` を開き、図のようなログが表示されれば接続が正常に確立されたことを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_opcua_simulation.gif" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connection_sucsses.png" /></center>

**ステップ 3**: データを表示するラベルを作成します。設定インターフェースに入り、左上または右下の `+` ボタンをクリックすると、`Objects`、`Type`、`Views` の 3 つのラベルが表示されます。`Objects` をクリックし、その後 `Simulation` をクリックすると、シミュレーターがシミュレートしているデータが表示されます。`Simulation` の下のすべてのデータを選択してラベルを作成します。最後に `OK` をクリックします。これで OPCUA デバイスのデータを読み取ることができるようになります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" /></center>

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>