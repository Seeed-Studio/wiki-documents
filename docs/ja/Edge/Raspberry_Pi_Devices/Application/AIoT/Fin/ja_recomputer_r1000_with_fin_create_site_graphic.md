---
description: この記事では、サイトグラフィックの作成方法を説明します

title: reComputer R1000とFINを使用したサイトグラフィックの作成
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fin_site_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
---

## はじめに
FIN Framework（FIN）は、統合、制御、管理、分析、可視化、接続が可能なアプリケーションスイートを備えたソフトウェアフレームワークです。その機能は、OEMによって様々な製品やサービスに統合することができます。

この記事では、FIN Frameworkの`Graphics Builder`の使用方法と、`Graphics Builder`を使用した`Site Graphic`の作成方法を説明します。

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
* FIN Frameworkのインストール方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_install_fin/)を参照してください。

## サイトグラフィック作成の手順
### 新しいサイトグラフィックの作成
**ステップ1**: 4つのFloorを作成しました。Floorの作成方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fin_modbus_tcp_and_rtu/)を参照してください。次に、対応する`Site`の下にコンテキストを配置します。ここでは`Tower`パスの下に配置します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_path_and_floor.png" /></center>

**ステップ2**: 新しいGraphicを作成し、編集インターフェースに入ります。`Graphic Builder => new`をクリックすると、`Create a Graphic`のポップアップウィンドウが表示されます。`Top Level Graphic`の作成との違いは、ここでの2番目のプロパティが`Select floors to include in site graphic`になることです。作成したすべての`Floor`を選択し、最後に`OK`をクリックします。その後、新しく作成したGraphicが右側に表示されます。`CC Main => Edit`をクリックして編集インターフェースに入ります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_1.gif" /></center>

### 新しいサイトグラフィックの設定

**ステップ1**: 背景画像をインポートします。まず、左下のプロパティバーで`BACGROUND`を選択し、`TYPE`を`IMAGE`として選択し、背景画像をワークスペースにインポートし、サイズを調整して固定します。背景画像をインポートする方法は2つあります。1つ目の方法は、フォルダから編集ボックスに直接ドラッグすることです。2つ目の方法は、左下の`BROWSE`をクリックすることです。以前に特定の画像をインポートしたことがある場合は、ここをクリックしてその画像を見つけることができます。インポート後、マウスを右クリックして`Arrange => Send to back`を選択し、画像を最下層に移動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_2.gif" /></center>

**ステップ2**: ラベル位置を調整します。4つの`Floor`をインポートしたため、システムが自動的に4つのラベルを生成しました。美観のため、これらのラベルを各フロアに1対1でマッピングしました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_3.gif" /></center>

**ステップ3**: ポリゴンを描画します。`polygon Tool`を使用してポリゴンを描画し、各`Floor`の位置をマークします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_4.gif" /></center>

**ステップ4**: `Virtual points`を追加します。左側の`Virtual points`パネルに切り替え、選択した`Floor`に一致する`virtual point`を選択し、描画したポリゴンにドラッグします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_5.gif" /></center>

**ステップ5**: ポリゴンを透明にします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_6.gif" /></center>

**ステップ6**: 設定を保存した後、`Top Level Graphic`から新しい`Site graphic`に入ることができます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" /></center>

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