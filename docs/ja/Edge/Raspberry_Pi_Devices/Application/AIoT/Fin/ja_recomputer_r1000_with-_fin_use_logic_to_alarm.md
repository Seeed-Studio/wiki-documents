---
description: この記事では、FIN FrameworkのLogic Builderの使用方法を説明します

title: reComputer R1000 with FIN Logic Builder
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - LOGIC
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_logic_builder
last_update:
  date: 07/16/2024
  author: ShuishengPeng
---

## はじめに
FIN Framework (FIN) は、統合、制御、管理、分析、可視化、接続が可能なアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEMによって様々な製品やサービスに統合することができます。

この記事では、FIN FrameworkのLogic Builderの使用方法を説明し、Logic Builderを使用してアラームを実装する方法を紹介します。Modbusデバイスの値を監視し、値が臨界値を超えた場合にFINがアラームを発生させます。

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
* FIN Framworkのインストール方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_install_fin/)を参照してください。
* reComputer R1000でFINを使用したModbus通信については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/)を参照してください。
* W10 PCで[modbusmechanic](https://modbusmechanic.scifidryer.com/)を使用します。他のmodbusテストツールも使用できます。
### ハードウェア構成

ModbusTCPの場合、イーサネットケーブルを使用してW10 PCとreComputer R1000をスイッチに接続し、同じネットワークセグメント上にあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## アラーム実装の手順
### 新しいLogic Builderプログラムの作成
**ステップ1**: まず上部のディレクトリバーをクリックして、システムディレクトリを目的のターゲット場所に切り替えます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_path_location.png" /></center>

**ステップ2**: 設定インターフェースで`Logic Builder => new`をクリックすると、以下のポップアップウィンドウが表示されます：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_create_logic.png" /></center>

以下のパラメータを入力します：
  - **Name** - プログラムの名前
  - **Description** - プログラムの目的/機能の説明
  - **Program On** - プログラムが実行される場所を指定するために使用
  - **Points** - equipから使用するポイントを選択可能
  - **Tags** - equipまたはrefsで使用されるタグを検索
  - **Project Variables** - 他のプログラムに他のプロジェクト変数が存在する場合、作成中の新しいプログラムで使用できる変数のリストを提供
  - **Absolute Points** - IDに基づいてハードコードされたポイントを追加可能
  
`Points`は複数のポイントを入力できますが、ここでは1つだけ入力しました。情報を入力後、`OK`をクリックし、右側のポップアップウィンドウで`Edit`をクリックしてLogic編集インターフェースに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_1.gif" /></center>

### ブロックロジックの設定
**ステップ1**: `if`ブロックを追加します。ワークスペースにブロックを追加する方法は2つあります。1つ目は、図に示すようにブロックのポートをクリックして追加する方法です：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_2.gif" /></center>

2つ目の方法は、図に示すように左下の検索ボックスから追加する方法です：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_3.gif" /></center>

**ステップ2**: 判定するデータポイントを追加します。左側で、Logic Builderプログラムを作成したときに導入したデータポイントを確認できます。これには`get`と`set`の2つの機能があります。私たちのロジックはセンサー値が臨界値を超えるかどうかを判定することなので、ここでは`get`を選択します。`get`をクリックしてワークスペースにドラッグすると、`sensor`ブロックが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_4.gif" /></center>

**ステップ3**: `>=`ブロックを追加します。センサー値が臨界値を超えるかどうかを判定する必要があるため、`>=`ブロックを追加する必要があります。これは`if`ブロックに結果を出力します。`if`ブロックは`>=`ブロックの結果を判定して次のアクションを決定します。ここでは臨界値を`23`に設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_5.gif" /></center>

**ステップ4**: 遅延ブロックを追加します。システムをより耐干渉性にする必要がある場合があります。遅延モジュールを追加でき、特定の条件が一定期間満たされた後にのみアラームが発生します。遅延時間を3秒に設定し、モジュールの出力を`if`ブロックに接続します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_6.gif" /></center>

**ステップ5**: 変数を作成します。センサー値が臨界値を超えた場合、フラグを設定してセンサー値を異常としてマークできます。このフラグは`variable`を作成することで実装できます。`variable`には以下のタイプがあります：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_variable_type.png" /></center>

図に示すように、`Alarm_bool`という名前の変数を追加しました。これにも`set`と`get`の機能ブロックがあります。`Alarm_bool`の`set`ブロックを`if`ブロックの後に接続します。センサー値が臨界値を超えた場合は`True`に設定され、センサーが臨界値を超えない場合は`False`に設定されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_7.gif" /></center>

**ステップ6**: 上部の`alarm`をクリックして`alarm`設定インターフェースに入ります。左下に`alarm`と入力して`alarmBlock`を見つけ、ワークスペースにドラッグします。`alarmBlock`に作成した`Alarm_bool`変数を選択する必要があります。`Alarm_bool`変数が`True`の場合はアラームがトリガーされ、`Alarm_bool`変数が`False`の場合はアラームはトリガーされません。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_8.gif" /></center>

### アラームのデモンストレーション

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" /></center>

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
