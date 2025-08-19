---
description: この記事では、トップレベルグラフィックを作成する方法を紹介します。

title: reComputer R1000 と FIN を使用してトップレベルグラフィックを作成する
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - グラフィック
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_top_level_gaphic
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
FIN Framework (FIN) は、統合、制御、管理、分析、視覚化、接続を行うアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEM によってさまざまな製品やサービスに統合することができます。

この記事では、FIN Framework の `Graphics Builder` を使用して、`トップレベルグラフィック` を作成する方法を紹介します。

## 準備

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

## トップレベルグラフィックを作成する手順
### 新しいトップレベルグラフィックを作成する
**ステップ 1**: 3 つのサイトを作成します。Equip Tree でサイトを作成する方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/#add-data-points-to-equip-tree) を参照してください。そして、システムコンテキストをホームディレクトリに保持してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_grap_Equip_tree_and_top_path.png" /></center>

**ステップ 2**: `Graphics Builder => New` をクリックすると、`Create a Graphic` という名前のポップアップウィンドウが表示されます。`Graphic Name` と `Select sites to include in Top Level graphic` プロパティを入力する必要があります。オプションの `site` は、最初のステップで作成した `site` です。最後に `OK` をクリックすると、新しく作成したグラフィックが右側に表示されます。それをクリックしてから `Edit` をクリックして編集ページに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_1.gif" /></center>

### 新しいトップレベルグラフィックを設定する

**ステップ 1**: フロアプランをインポートします。まず左下の `TYPE` 列で `IMAGE` を選択し、背景画像をインポートします。背景画像をインポートする方法は 2 つあります。1 つ目はフォルダから直接編集ボックスにドラッグする方法、2 つ目は左下の `BROWSE` をクリックする方法です。以前に特定の画像をインポートした場合は、ここでその画像を見つけることができます。インポート後、右クリックして `Arrange => Send to back` を選択し、画像を最下層に移動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_2.gif" /></center>

**ステップ 2**: 3 つの `site` を選択したため、システムは自動的に 3 つのラベルを生成します。見栄えを良くするために、それらを右下に配置して整列させます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_3.gif" /></center>

**ステップ 3**: `label` を追加して情報を説明します。左側で `label` コントロールを見つけてワークスペースにドラッグし、そのサイズを調整します。その後、右下で `label` のテキストとテキストサイズを変更します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_4.gif" /></center>

**ステップ 4**: `Graphic include` を追加してタグをまとめ、背景色を設定して視覚効果をより美しくします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_5.gif" /></center>

**ステップ 5**: ポリゴンを描画します。上部の `polygon Tool` を使用してポリゴンを描画し、`site` の位置をマークします。描画後、`Edit polygon Tool` を使用してポリゴンを調整することもできます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_6.gif" /></center>

**ステップ 6**: `Virtual points` を追加します。左側の `Virtual points` パネルに切り替え、選択した `site` に一致する `virtual point` を選択して描画したポリゴンにドラッグします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_7.gif" /></center>

**ステップ 7**: ポリゴンを透明にします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_8.gif" /></center>

**ステップ 8**: 設定を保存した後、`Graphics Builder => Menu` をクリックすると右側に新しいインターフェースが表示されます。新しいインターフェースで `Top Level Graphic => Create` をクリックすると、`Edit Top Level Record` という名前のポップアップウィンドウが表示されます。このウィンドウで設定したグラフィックを選択し、最後に `APPLY` をクリックします。メインインターフェースに戻ると、設定したトップレベルグラフィックが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" /></center>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>