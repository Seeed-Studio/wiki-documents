---
description: この記事では、FINフレームワークのロジックビルダーの使用方法を紹介します。

title: reComputer R1000とFINロジックビルダー
keywords:
  - エッジコントローラー
  - reComputer R1000
  - FIN
  - ModbusTCP
  - ロジック
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_logic_builder
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
FINフレームワーク（FIN）は、統合、制御、管理、分析、可視化、接続を行うアプリケーションスイートを備えたソフトウェアフレームワークです。その機能はOEMによってさまざまな製品やサービスに統合することができます。

この記事では、FINフレームワークの`Logic Builder`の使用方法を紹介し、`Logic Builder`を使用してアラームを実装する方法を説明します。Modbusデバイスの値を監視し、その値が臨界値を超えた場合にFINがアラームを発する仕組みを構築します。

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
* FINフレームワークのインストール方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_install_fin/)を参照してください。
* reComputer R1000でFINを使用してModbus通信を行う方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/)を参照してください。
* W10 PCで[modbusmechanic](https://modbusmechanic.scifidryer.com/)を使用します。他のModbusテストツールも使用可能です。

### ハードウェアの構成

ModbusTCPの場合、Ethernetケーブルを使用してW10 PCとreComputer R1000をスイッチに接続し、同じネットワークセグメントに配置します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## アラームを実装する手順
### 新しいロジックビルダープログラムを作成する
**ステップ1**: まず、上部のディレクトリバーをクリックして、システムディレクトリを目的のターゲット場所に切り替えます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_path_location.png" /></center>

**ステップ2**: 設定インターフェースで`Logic Builder => new`をクリックすると、以下のポップアップウィンドウが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_create_logic.png" /></center>

以下のパラメータを入力します:
  - **Name** - プログラムの名前
  - **Description** - プログラムの目的や機能の説明
  - **Program On** - プログラムが実行される対象を指定
  - **Points** - 使用する機器からポイントを選択可能
  - **Tags** - 機器や参照で使用されるタグを検索
  - **Project Variables** - 他のプログラムに存在するプロジェクト変数がある場合、新しいプログラムで使用可能な変数のリストを提供
  - **Absolute Points** - IDに基づいてハードコードされたポイントを追加可能
  
`Points`には複数のポイントを入力できますが、ここでは1つだけ入力しました。情報を入力した後、`OK`をクリックし、右側のポップアップウィンドウで`Edit`をクリックしてロジック編集インターフェースに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_1.gif" /></center>

### ブロックロジックを構成する
**ステップ1**: `if`ブロックを追加します。ワークスペースでブロックを追加する方法は2つあります。1つ目は、ブロックのポートをクリックして追加する方法です。以下の図を参照してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_2.gif" /></center>

2つ目の方法は、左下の検索ボックスを使用して追加する方法です。以下の図を参照してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_3.gif" /></center>

**ステップ2**: 判定するデータポイントを追加します。左側には、ロジックビルダープログラムを作成した際に導入したデータポイントが表示されます。このデータポイントには`get`と`set`の2つの機能があります。センサー値が臨界値を超えるかどうかを判定するロジックを構築するため、ここでは`get`を選択します。`get`をクリックしてワークスペースにドラッグすると、`sensor`ブロックが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_4.gif" /></center>

**ステップ3**: `>=`ブロックを追加します。センサー値が臨界値を超えるかどうかを判定するため、`>=`ブロックを追加します。このブロックは結果を`if`ブロックに出力します。`if`ブロックは`>=`ブロックの結果を判定して次のアクションを決定します。ここでは臨界値を`23`に設定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_5.gif" /></center>

**ステップ4**: 遅延ブロックを追加します。システムの耐干渉性を向上させるために、遅延モジュールを追加することができます。特定の条件が一定期間満たされた場合にのみアラームが発生します。遅延時間を3秒に設定し、モジュールの出力を`if`ブロックに接続します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_6.gif" /></center>

**ステップ5**: 変数を作成します。センサー値が臨界値を超えた場合、フラグを設定してセンサー値が異常であることを示すことができます。このフラグは`variable`を作成することで実現できます。`variable`には以下のタイプがあります:


<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_variable_type.png" /></center>

図のように、`Alarm_bool`という名前の変数を追加しました。この変数には`set`および`get`の関数ブロックも含まれています。`Alarm_bool`の`set`ブロックを`if`ブロックの後に接続します。センサーの値が臨界値を超えた場合、この変数は`True`に設定されます。センサーが臨界値を超えない場合は、`False`に設定されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_7.gif" /></center>

**ステップ 6**: 上部の`alarm`をクリックして`alarm`設定インターフェースに入ります。左下に`alarm`と入力して`alarmBlock`を見つけ、それをワークスペースにドラッグします。`alarmBlock`には作成した`Alarm_bool`変数を選択する必要があります。`Alarm_bool`変数が`True`の場合、アラームがトリガーされ、`Alarm_bool`変数が`False`の場合、アラームはトリガーされません。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_8.gif" /></center>

### アラームデモンストレーション

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" /></center>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>