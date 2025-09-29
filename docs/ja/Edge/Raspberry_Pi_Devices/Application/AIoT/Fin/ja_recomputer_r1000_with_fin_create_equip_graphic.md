---
description: この記事では、Equip Graphic の作成方法を説明します

title: reComputer R1000 と FIN を使用した Equip Graphic の作成
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_equip_gaphic
last_update:
  date: 07/22/2024
  author: ShuishengPeng
---

## はじめに

FIN Framework (FIN) は、統合、制御、管理、分析、可視化、接続が可能なアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEM によって様々な製品やサービスに統合することができます。

この記事では、FIN Framework の `Graphics Builder` の使用方法と、`Graphics Builder` を使用した `Equip Graphic` の作成方法を説明します。

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

## Equip Graphicの作成手順

### 新しいEquip Graphicの作成

**ステップ1**: コンテキストを`Tower => Floor1 => ModbusEquip`のパスに配置してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_path.png" /></center>

**ステップ2**: 新しい`Equip Graphic`を作成します。`Graphic Builder => new`をクリックすると、システムコンテキストに応じて`Create a Graphic`という名前のポップアップウィンドウが表示されます：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_new_gtaphic.png" /></center>

ポップアップウィンドウには主に以下の属性があります：

- **Graphic Name:** グラフィックの名前を入力できます。
- **Graphic Template:** 利用可能な事前構築された「ダクトテンプレート」のリストからスターターテンプレートを選択できます。これは必須パラメータではなく、ダクトワークの開始点を提供するだけです。（ここで使用する独自のテンプレートを作成することもできます）。
- **Graphic On Filter:** Graphic Onフィルターは、グラフィックの「graphicOn」タグを参照し、このグラフィックが実行されるデータベースレコードを決定します。デフォルトでは、このフィルターはコンテキスト機器に基づいて自動的に入力されます。（この例では、VAV上でグラフィックを作成したため、スクリーンショットのこのフィルターにそのVAVのタグが入力されています）。このフィルターは必要に応じて後から変更できます。
- **Relative - By Tags:** このオプションにより、ポイントは現在のタグに基づいて自動的に相対的に取り込まれます。ポイントが相対的な場合、1つの機器データセットに「ハードコード」されません。相対的であり、ポイントのタグに基づいて類似のポイントを持つ任意の機器で読み込まれます。
- **Relative - By navName:** このオプションにより、ポイントは現在のnavNameに基づいて自動的に相対的に取り込まれます。ポイントが相対的な場合、1つの機器データセットに「ハードコード」されません。相対的であり、ポイントのnavNameに基づいて類似のポイントを持つ任意の機器で読み込まれます。
- **Absolute - by Point Ids:** このオプションにより、ポイントは現在の機器に対して絶対的（または`ハードコード`）に自動的に取り込まれます。ポイントが「Point idによる絶対」で取り込まれる場合、グラフィックがどこで読み込まれても、その正確なポイントからデータを取得するようにパスが自動的にハードコードされます。
- **Points:** これにより、グラフィックに取り込みたいポイントを選択できます。*CTRL*および/または*SHIFT*キーを使用することで、複数のポイントを選択できます。ポイントはコンテキスト機器に基づいて入力されます。その機器のrefsに関連するポイントも取得できます。（この例では、VAVにahuRefがあるため、ahuRefからポイントを選択してグラフィックに表示できます）
- **Add Components For:** このリストは、前の「Points」セクションで選択したポイントによって入力されます。このセクションでポイントをハイライトすることで、FINに（そのタグに基づいて）グラフィカルコンポーネントを自動的に作成し、ポイントをグラフィカルコンポーネントにバインドするよう指示します。これは必須ではありませんが、コンポーネントを選択し、取り込み、ポイントをバインドし、Display Labelを表示するため、時間を節約できます。

設定が完了したら、`OK`ボタンをクリックします。右側に新しいグラフィックが表示されます。`EquipGraphic => Edit`をクリックして編集インターフェースに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_1.gif" /></center>

### 新しいEquip Graphicの設定

**ステップ1**: 編集インターフェースに入ると、システムは`Add Components for`プロパティで選択された内容に基づいて、スマートラベルとコンポーネントを自動的に生成します。コントロールを移動し、`Magic Button => Smart Label to GraphicObjects`をクリックして、スマートラベルをコントロールに自動的に整列させます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_2.gif" /></center>

**ステップ2**: `Virtual point`を確認します。メールでコントロールをクリックし、`Edit Properties`を選択できます。新しいポップアップウィンドウで`virtual point`を確認でき、ここで修正できます。左下の`ADVANCED`を通じて、コントロールに対応する`virtual point`を表示することもできます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_3.gif" /></center>

**ステップ3**: 新しいコンポーネントを追加し、`virtual point`を接続します。システムが自動的に生成したコンポーネントに加えて、自分で追加することもできます。左側の`COMPONENTS`ボックスには多くのコンポーネントがあります。左マウスボタンでコントロールを作業コントロールにドラッグし、`VIRTUAL POINTS`列で対応する`virtual point`を選択して新しいホームコントロールにドラッグします。これで新しいコントロールと仮想ポイントのバインディングが完了します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_4.gif" /></center>

**ステップ4**: `Overview Box`を追加します。すべての値を一緒に表示する`Overview Box`を追加できます。`Overview Box => New`をクリックすると、新しいポップアップウィンドウが表示されます：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_overview_box.png" /></center>

- **Mini Group:** 有効にすると、オーバービューボックスがより大きな値とより小さなタイトル領域で表示されます。このボックスは通常のボックスより小さく、VFD（Spd、Cmd、Ena、Stat）などのグラフィック上にボックスが必要なシナリオに推奨されます。
- **Points**: オーバービューボックスに含めるポイントを選択できます。**ヒント:** Overview Boxウィザードを開く前にスマートラベルが選択されていた場合、それらのポイントはウィザードのポイントリストで既に選択されています。
  
ポイントを選択した後、次のウィンドウでウィンドウタイトルを入力し、最後に`APPLY`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_5.gif" /></center>

**ステップ 5**：結果を表示

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_6.gif" /></center>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
