---
description: この記事では、Site Graphic の作成方法を説明します。

title: reComputer R1000 と FIN を使用して Site Graphic を作成する
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_site_gaphic
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

この記事では、FIN Framework の `Graphics Builder` を使用して、`Site Graphic` を作成する方法を説明します。

## 準備

このプロジェクトを開始する前に、以下のようにハードウェアとソフトウェアを事前に準備する必要があります。

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

## Site Graphic 作成手順
### 新しい Site Graphic の作成
**ステップ 1**: 4 つのフロアを作成しました。フロアの作成方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/) を参照してください。その後、対応する `Site` の下にコンテキストを配置します。ここでは `Tower` パスの下に配置します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_path_and_floor.png" /></center>

**ステップ 2**: 新しいグラフィックを作成し、編集インターフェースに入ります。`Graphic Builder => new` をクリックすると、`Create a Graphic` のポップアップウィンドウが表示されます。`Top Level Graphic` を作成する場合との違いは、ここで 2 番目のプロパティが `Select floors to include in site graphic` になる点です。作成したすべての `Floor` を選択し、最後に `OK` をクリックします。その後、新しく作成したグラフィックが右側に表示されます。`CC Main => Edit` をクリックして編集インターフェースに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_1.gif" /></center>

### 新しい Site Graphic の設定

**ステップ 1**: 背景画像をインポートします。まず、左下のプロパティバーで `BACGROUND` を選択し、`TYPE` を `IMAGE` に設定します。その後、背景画像をワークスペースにインポートし、サイズを調整して固定します。背景画像をインポートする方法は 2 つあります。1 つ目は、フォルダから直接編集ボックスにドラッグする方法です。2 つ目は、左下の `BROWSE` をクリックする方法です。以前に特定の画像をインポートした場合は、ここでその画像を見つけることができます。インポート後、右クリックして `Arrange => Send to back` を選択し、画像を最下層に移動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_2.gif" /></center>

**ステップ 2**: ラベルの位置を調整します。4 つの `Floors` をインポートしたため、システムが自動的に 4 つのラベルを生成しました。見栄えを良くするために、これらのラベルをフロアごとに対応付けました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_3.gif" /></center>

**ステップ 3**: ポリゴンを描画します。`polygon Tool` を使用してポリゴンを描画し、各 `Floor` の位置をマークします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_4.gif" /></center>

**ステップ 4**: `Virtual points` を追加します。左側の `Virtual points` パネルに切り替え、選択した `Floor` に対応する `virtual point` を選択して、描画したポリゴンにドラッグします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_5.gif" /></center>

**ステップ 5**: ポリゴンを透明にします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_6.gif" /></center>

**ステップ 6**: 設定を保存した後、`Top Level Graphic` から新しい `Site graphic` に入ることができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>