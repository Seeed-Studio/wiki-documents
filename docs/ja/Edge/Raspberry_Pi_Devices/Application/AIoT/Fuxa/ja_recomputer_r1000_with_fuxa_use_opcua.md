---
description: この記事では主にfuxaを使用してOPC-UA通信を行う方法について紹介します。

title: reComputer R1000でfuxaを使用してOPC-UAを利用する
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - OPC-UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fuxa_opc_ua
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## はじめに
FUXAはWebベースのプロセス可視化（SCADA/HMI/ダッシュボード）ソフトウェアです。FUXAを使用すると、機械用の個別デザインとリアルタイムデータ表示を備えた最新のプロセス可視化を作成できます。Modbus RTU/TCP、Siemens S7プロトコル、OPC-UA、BACnet IP、MQTT、その他のプロトコルをサポートしています。

この記事では主にfuxaを使用してOPC-UA通信を行う方法について紹介します。W10 PC上で`Prosys OPC UA Simulation Server`を実行し、reComputer R1000でシミュレータのデータを読み取ります。

## はじめに

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

### ソフトウェアの準備
* Python 3.11はfuxaと互換性がない可能性があります。Pythonバージョンが3.11の場合は、別のPythonバージョンへの変更を検討してください。
* W10 PC上で[Prosys OPC UA Simulation Server](https://downloads.prosysopc.com/opc-ua-simulation-server-downloads.php)を使用します。他のmodbusテストツールも使用できます
* reComputer R1000上で[fuxa](https://github.com/frangoteam/FUXA)を使用します。以下の手順を参考にしてreComputer R1000にfuxaをインストールできます
  ```shell
    ## Node Version 14 || 16 || 18がインストールされている必要があります。
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## 次にnpmからFUXAをインストールします
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

### ハードウェア構成

イーサネットケーブルを使用してW10 PCとreComputer R1000をスイッチに接続し、同じネットワークセグメント上にあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## OPC-UA通信手順
**ステップ1**: `Prosys OPC UA Simulation Server`を開き、`Connection Address(UA TCP)`をコピーします。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/OPC_UA_simulator.png" /></center>

**ステップ2**: 右下の`+`ボタンをクリックし、`Name`を入力し、`Type`に`OPCUA`を選択し、ステップ1でコピーした`Connection Address(UA TCP)`を`Address`に貼り付けます。`Security and encryption mode`は自分のデバイス要件に応じて選択します。ここでは`None-None`を選択します。接続確立時にデバイスが`Username`と`Password`を要求する場合は、対応する場所に入力できます。最後に`OK`をクリックします。`Prosys OPC UA Simulation Server`の`ConnectionLog`を開くと、図に示すようなログが表示され、接続が正常に確立されたことを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_opcua_simulation.gif" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connection_sucsses.png" /></center>

**ステップ3**: データを表示するラベルを作成します。設定インターフェースに入り、左上または右下の`+`ボタンをクリックすると、`Objects`、`Type`、`Views`の3つのラベルが表示されます。`Objects`をクリックし、次に`Simulation`をクリックすると、シミュレータがシミュレートするデータが表示されます。`Simulation`下のすべてのデータを選択してラベルを作成します。最後に`OK`をクリックします。OPCUAデバイスのデータを読み取ることができることが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>