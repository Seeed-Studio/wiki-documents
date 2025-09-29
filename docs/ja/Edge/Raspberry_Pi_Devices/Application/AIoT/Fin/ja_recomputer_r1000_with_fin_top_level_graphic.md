---
description: この記事では、トップレベルグラフィックの作成方法を説明します

title: reComputer R1000 と FIN を使用したトップレベルグラフィックの作成
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_top_level_gaphic
last_update:
  date: 07/17/2024
  author: ShuishengPeng
---

## はじめに

FIN Framework (FIN) は、統合、制御、管理、分析、可視化、接続が可能なアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEM によってさまざまな製品やサービスに統合することができます。

この記事では、FIN Framework の `Graphics Builder` の使用方法と、`Graphics Builder` を使用した `Top Level Graphic` の作成方法を説明します。

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

- FIN Framworkのインストール方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_install_fin/)を参照してください。

## トップレベルグラフィック作成の手順

### 新しいトップレベルグラフィックの作成

**ステップ1**: 3つのサイトを作成します。Equip Tree下でサイトを作成する方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/#add-data-points-to-equip-tree)を参照してください。システムコンテキストはホームディレクトリに保持してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_grap_Equip_tree_and_top_path.png" /></center>

**ステップ2**: `Graphics Builder => New`をクリックすると、`Create a Graphic`という名前のポップアップウィンドウが表示されます。`Graphic Name`と`Select sites to include in Top Level graphic`プロパティを入力する必要があります。選択可能な`site`は、最初のステップで作成した`site`です。最後に`OK`をクリックすると、新しく作成したGraphicが右側に表示されます。それをクリックしてから`Edit`をクリックして編集ページに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_1.gif" /></center>

### 新しいトップレベルグラフィックの設定

**ステップ1**: フロアプランをインポートします。まず左下の`TYPE`列で`IMAGE`を選択し、その後背景画像をインポートできます。背景画像をインポートする方法は2つあります。1つ目の方法は、フォルダから編集ボックスに直接ドラッグすることです。2つ目の方法は、左下の`BROWSE`をクリックすることです。以前に特定の画像をインポートしたことがある場合は、ここをクリックしてその画像を見つけることができます。インポート後、マウスを右クリックして`Arrange => Send to back`を選択し、画像を最下層に移動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_2.gif" /></center>

**ステップ2**: 3つの`site`を選択したため、システムは自動的に3つのラベルを生成します。美観のため、それらを右下角に配置して整列させます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_3.gif" /></center>

**ステップ3**: 情報を説明するために`label`を追加できます。左側の`label`コントロールを見つけてワークスペースにドラッグし、サイズを調整してから、右下角で`label`のテキストとテキストサイズを変更します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_4.gif" /></center>

**ステップ4**: `Graphic include`を追加してタグをまとめ、背景色を設定して視覚効果をより美しくします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_5.gif" /></center>

**ステップ5**: ポリゴンを描画します。上部の`polygon Tool`を使用してポリゴンを描画し、`site`の場所をマークします。描画後、`Edit polygon Tool`ツールを使用してポリゴンを調整することもできます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_6.gif" /></center>

**ステップ6**: `Virtual points`を追加します。左側の`Virtual points`パネルに切り替え、選択した`site`に一致する`virtual point`を選択し、描画したポリゴンにドラッグします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_7.gif" /></center>

**ステップ7**: ポリゴンを透明にします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_8.gif" /></center>

**ステップ8**: 設定を保存した後、`Graphics Builder => Menu`をクリックすると、右側に新しいインターフェースが表示されます。新しいインターフェースで`Top Level Graphic => Create`をクリックすると、`Edit Top Level Record`という名前のポップアップウィンドウが表示されます。設定したGraphicを選択し、最後に`APPLY`をクリックします。メインインターフェースに戻ると、設定したTop Level Graphicを確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" /></center>

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
