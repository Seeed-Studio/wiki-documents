---
description: この記事では、Equip Graphic を作成する方法を説明します。

title: reComputer R1000 と FIN を使用して Equip Graphic を作成する
keywords:
  - エッジコントローラー
  - reComputer R1000
  - FIN
  - ModbusTCP
  - グラフィック
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_equip_gaphic
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
FIN Framework (FIN) は、統合、制御、管理、分析、可視化、接続を行うためのアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEM によってさまざまな製品やサービスに統合することができます。

この記事では、FIN Framework の `Graphics Builder` を使用して、`Equip Graphic` を作成する方法を説明します。

## 準備を始める

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

## Equip Graphic を作成する手順
### 新しい Equip Graphic を作成する
**ステップ 1**: パス `Tower => Floor1 => ModbusEquip` の下にコンテキストを配置してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_path.png" /></center>

**ステップ 2**: 新しい `Equip Graphic` を作成します。`Graphic Builder => new` をクリックすると、システムコンテキストに基づいて `Create a Graphic` という名前のポップアップウィンドウが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_new_gtaphic.png" /></center>

ポップアップウィンドウには主に以下の属性があります：
- **Graphic Name:** グラフィックの名前を入力できます。
- **Graphic Template:** 利用可能な事前構築済みの「ダクトテンプレート」のリストからスターターテンプレートを選択できます。これは必須のパラメータではなく、ダクトワークの出発点を提供します。（ここで使用するための独自のテンプレートを作成することもできます）。
- **Graphic On Filter:** Graphic On フィルターは、グラフィックの "graphicOn" タグを指し、このグラフィックがどのデータベースレコードで動作するかを決定します。デフォルトでは、このフィルターはコンテキスト機器に基づいて自動的に入力されます。（例では、VAV 上でグラフィックを作成したため、スクリーンショットのフィルターにはその VAV のタグが入力されています）。必要に応じて、このフィルターは後から変更することができます。
- **Relative - By Tags:** このオプションを選択すると、ポイントが現在のタグに基づいて自動的に相対的に取り込まれます。ポイントが相対的である場合、それらは特定の機器データに「ハードコード」されておらず、ポイントのタグに基づいて類似のポイントを持つ任意の機器でロードされます。
- **Relative - By navName:** このオプションを選択すると、ポイントが現在の navName に基づいて自動的に相対的に取り込まれます。ポイントが相対的である場合、それらは特定の機器データに「ハードコード」されておらず、ポイントの navName に基づいて類似のポイントを持つ任意の機器でロードされます。
- **Absolute - by Point Ids:** このオプションを選択すると、ポイントが現在の機器に「ハードコード」されて絶対的に取り込まれます。「Absolute by Point id」でポイントが取り込まれると、そのパスはグラフィックがどこでロードされてもその正確なポイントからデータを取得するように自動的にハードコードされます。
- **Points:** グラフィックに取り込みたいポイントを選択できます。*CTRL* および/または *SHIFT* キーを使用して複数のポイントを選択できます。ポイントはコンテキスト機器に基づいて入力されます。また、その機器の参照に関連付けられたポイントも取得できます。（例では、VAV に ahuRef があるため、グラフィックに表示するために ahuRef のポイントを選択できます）。
- **Add Components For:** このリストは、前の「Points」セクションで選択したポイントによって入力されます。このセクションでポイントをハイライトすると、FIN は自動的にグラフィカルコンポーネント（そのタグに基づく）を作成し、ポイントをグラフィカルコンポーネントにバインドします。これは必須ではありませんが、コンポーネントを選択し、それを取り込み、ポイントをそれにバインドし、表示ラベルを取り出すプロセスを自動化するため、時間を節約できます。

設定が完了したら、`OK` ボタンをクリックします。新しいグラフィックが右側に表示されます。`EquipGraphic => Edit` をクリックして編集インターフェースに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_1.gif" /></center>

### 新しい Equip Graphic を構成する
**ステップ 1**: 編集インターフェースに入ると、システムは `Add Components for` プロパティで選択した内容に基づいてスマートラベルとコンポーネントを自動的に生成します。コントロールを移動し、`Magic Button => Smart Label to GraphicObjects` をクリックすると、スマートラベルがコントロールに自動的に整列します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_2.gif" /></center>

**ステップ 2**: `Virtual point` を確認します。メールを通じてコントロールをクリックし、`Edit Properties` を選択します。新しいポップアップウィンドウで `virtual point` を確認および修正できます。また、左下の `ADVANCED` を通じてコントロールに対応する `virtual point` を確認することもできます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_3.gif" /></center>

**ステップ 3**: 新しいコンポーネントを追加し、`virtual point` を接続します。システムによって自動生成されたコンポーネントに加えて、自分で追加することも可能です。左側の `COMPONENTS` ボックスには多くのコンポーネントがあります。左クリックでコントロールを作業エリアにドラッグし、`VIRTUAL POINTS` 列で対応する `virtual point` を選択して新しいホームコントロールにドラッグします。この方法で、新しいコントロールと `virtual point` のバインディングが完了します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_4.gif" /></center>

**ステップ 4**: `Overview Box` を追加します。すべての値を一括表示するために `Overview Box` を追加できます。`Overview Box => New` をクリックすると、新しいポップアップウィンドウが表示されます：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_overview_box.png" /></center>

- **Mini Group:** 有効にすると、概要ボックスが大きな値と小さなタイトルエリアで表示されます。このボックスは通常のボックスよりも小さく、VFD（Spd, Cmd, Ena, Stat）など、グラフィック上にボックスを配置する必要があるシナリオに推奨されます。
- **Points**: 概要ボックスに含めるポイントを選択できます。  
  **TIP:** 概要ボックスウィザードを開く前にスマートラベルを選択していた場合、それらのポイントはウィザードのポイントリストにすでに選択されています。

ポイントを選択した後、次のウィンドウでウィンドウタイトルを入力し、最後に `APPLY` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_5.gif" /></center>

**ステップ 5**: 結果を表示します

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_6.gif" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>