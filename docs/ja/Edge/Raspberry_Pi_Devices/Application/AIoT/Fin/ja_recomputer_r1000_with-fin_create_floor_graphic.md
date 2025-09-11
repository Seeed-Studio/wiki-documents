---
description: この記事では、フロアグラフィックを作成する方法を説明します。

title: reComputer R1000 と FIN を使用してフロアグラフィックを作成する
keywords:
  - エッジコントローラー
  - reComputer R1000
  - FIN
  - ModbusTCP
  - グラフィック
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_floor_gaphic
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

この記事では、FIN Framework の `Graphics Builder` を使用して、`Floor Graphic` を作成する方法を説明します。

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
* FIN Framework の Modbus 機能の使用方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/) を参照してください。

## フロアグラフィックを作成する手順
### 新しいフロアグラフィックを作成する
**ステップ 1**: Modbus TCP 接続と Modbus RTU 接続を確立し、対応する Equip を作成します。各 Equip には `humidity` と `temperature` のラベルがあります。このステップの実装方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/) を参照してください。同時に、FIN Framework のコンテキストを対応する `Floor` の下に配置してください。ここでは、コンテキストを `Tower => Floor1` の下に配置します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_path_and_equip.png" /></center>

**ステップ 2**: 新しいフロアグラフィックを作成し、編集インターフェースに入ります。`Graphic Builder => new` をクリックすると、`Create a Floorplan Graphic` のポップアップウィンドウが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_new_floor_graphic.png" /></center>
以下の 4 つの属性があります：

  - グラフィック名
  - サンプル Equip を選択
  - デフォルトポイントを選択: グラフィックに表示される属性
  - 比較ポイントを選択: カラー範囲の参照ポイント

「OK」をクリックすると、新しいポップアップウィンドウが表示され、`Pick Default Point` と同じプロパティを持つ `Equip` がリストされます。ここで、すべてを選択し、最後に「OK」をクリックします。
その後、新しく作成されたグラフィックが右側に表示されます。`CCFloor1 => Edit` をクリックして編集インターフェースに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_1.gif" /></center>

### 新しいサイトグラフィックを構成する

**ステップ 1**: 背景画像をインポートします。まず、左下のプロパティバーで `BACGROUND` を選択し、`TYPE` を `IMAGE` に設定して、背景画像をワークスペースにインポートします。`POSITION` オプションには `Center` を選択し、`REPEAT` オプションには `NO REPEAT` を選択します。背景画像をインポートする方法は 2 つあります。1 つ目は、フォルダから直接編集ボックスにドラッグする方法です。2 つ目は、左下の `BROWSE` をクリックする方法です。以前に特定の画像をインポートした場合、ここをクリックしてその画像を見つけることができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_2.gif" /></center>

**ステップ 2**: ポリゴンを描画します。`Polygon Tool` を使用してポリゴンを描画し、各 `Equip` の位置をマークします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_3.gif" /></center>

**ステップ 3**: `Virtual points` を追加します。左側の `Virtual points` パネルに切り替え、選択した `Equip` に一致する `virtual point` を選択し、それを描画したポリゴンにドラッグします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_4.gif" /></center>

**ステップ 4**: スマートタグを追加します。`Magic Buttons => Smart Label to Polys` をクリックして、ラベルを対応する `Virtual Points` に自動的に配置します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_5.gif" /></center>

**ステップ 5**: スマートタグのサイズを調整します。スマートラベルをクリックしてそのサイズを調整できます。複数のスマートラベルのサイズを同時に変更したい場合は、`Compulsions=>Smart label=>Select` をクリックしてすべてのスマートラベルを選択し、そのサイズを調整します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_6.gif" /></center>

**ステップ 6**: スマートタグを `non interactive` に変更して、タグが操作に干渉しないようにします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" /></center>

**ステップ 7**: 保存して効果を表示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_8.gif" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるご要望やお好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>