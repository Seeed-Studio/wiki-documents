---
description: この記事では、フロアグラフィックの作成方法を説明します

title: reComputer R1000とFINを使用したフロアグラフィックの作成
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_floor_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
---

## はじめに

FIN Framework（FIN）は、統合、制御、管理、分析、可視化、接続が可能なアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEMによって様々な製品やサービスに統合することができます。

この記事では、FIN Frameworkの`Graphics Builder`の使用方法と、`Graphics Builder`を使用した`Floor Graphic`の作成方法を説明します。

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

- FIN framworkのModbus機能の使用方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/)を参照してください

## フロアグラフィック作成の手順

### 新しいフロアグラフィックの作成

**ステップ1**: Modbus TCP接続とModbus RTU接続を確立し、対応するEquipを作成しました。各Equipには`humidty`と`temperature`のラベルがあります。このステップの実装方法については、この[wiki]( https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/)を参照してください。同時に、FIN Framworkのコンテキストを対応する`Floor`の下に配置してください。ここでは、コンテキストを`Tower => Floor1`の下に配置します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_path_and_equip.png" /></center>

**ステップ2**: 新しいフロアグラフィックを作成し、編集インターフェースに入ります。`Graphic Builder => new`をクリックすると、`Create a Floorplan Graphic`のポップアップウィンドウが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_new_floor_graphic.png" /></center>
4つの属性があります：

- Craphic Name
- Pick a Sample Equip
- Pick Default Point : グラフィックに表示される属性
- Pick Comparison Point : カラーレンジの基準点

「OK」をクリックすると、「Pick Default Point」と同じプロパティを持つ「Equip」をリストした新しいポップアップウィンドウが表示されます。ここで、すべてを選択し、最後に「OK」をクリックします。
その後、新しく作成されたGraphicが右側に表示されます。`CCFloor1 => Edit`をクリックして編集インターフェースに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_1.gif" /></center>

### 新しいサイトグラフィックの設定

**ステップ1**: 背景画像をインポートします。まず、左下のプロパティバーで`BACGROUND`を選択し、`TYPE`を`IMAGE`として選択し、背景画像をワークスペースにインポートします。`POSITION`オプションで`Center`を選択し、`REPEAT`オプションで`NO REPEAT`を選択します。背景画像をインポートする方法は2つあります。1つ目の方法は、フォルダから編集ボックスに直接ドラッグすることです。2つ目の方法は、左下の`BROWSE`をクリックすることです。以前に特定の画像をインポートしたことがある場合は、ここをクリックしてその画像を見つけることができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_2.gif" /></center>

**ステップ2**: ポリゴンを描画します。`polygon Tool`を使用してポリゴンを描画し、各`Equip`の位置をマークします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_3.gif" /></center>

**ステップ3**: `Virtual points`を追加します。左側の`Virtual points`パネルに切り替え、選択した`Equip`に一致する`virtual point`を選択し、描画したポリゴンにドラッグします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_4.gif" /></center>

**ステップ4**: スマートタグを追加します。`Magic Buttons => Smart Label to Polys`をクリックして、対応する`Virtual Points`にラベルを自動的に配置します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_5.gif" /></center>

**ステップ5**: スマートタグのサイズを調整します。スマートラベルをクリックしてサイズを調整できます。複数のスマートラベルのサイズを同時に変更したい場合は、`Compulsions=>Smart label=>Select`をクリックしてすべてのスマートラベルを選択し、そのサイズを調整できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_6.gif" /></center>

**ステップ6**: スマートタグを`non interactive`に変更して、タグが操作の妨げにならないようにします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" /></center>

**ステップ7**: 保存して効果を表示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_8.gif" /></center>

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
