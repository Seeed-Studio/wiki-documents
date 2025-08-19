---
description: reTerminal と Pi カメラを使用した OpenCV による物体追跡
title: reTerminal と Pi カメラを使用した OpenCV による物体追跡
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - 物体追跡
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Face-tracking
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

物体追跡とは、ビデオ内の連続するフレームにわたって特定の物体を一貫して位置特定するプロセスです。単一物体追跡の分野では、最初のフレームが参照として機能し、対象物体がバウンディング矩形でマークされます。その後のフレームでは、追跡アルゴリズムを使用して物体の動きを追跡します。通常、これらの追跡器は現実世界のアプリケーションで物体検出器と組み合わせて使用され、精度と効率を向上させます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" /></center>

## 始める前に

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

公式ウェブサイトから Raspberry Pi 64 ビット OS の **Bullseye** または **Bookworm** バージョンをインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この [**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) に記載されている手順に従ってください。

:::note

このチュートリアルはシリーズの続編として設計されているため、[**OpenCV の始め方**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/) に関する以前のチュートリアルをぜひご覧ください。

:::

## トラッキング vs. 検出

以前のウィキでは、[**顔検出**](https://wiki.seeedstudio.com/ja/reTerminal_DM_Face_detection/)や[**色検出**](https://wiki.seeedstudio.com/ja/reTerminal_DM_Color_detection/)について取り上げましたが、その断続的な性質に気付きました。以下は簡単な比較です：

1. **速度の優位性:**
   トラッキングは検出よりも高速です。トラッキングアルゴリズムは前のフレームのデータを活用してオブジェクトの位置を予測しますが、検出アルゴリズムは通常、各フレームでゼロから開始します。
2. **失敗への対応:**
   顔検出が遮蔽によって失敗した場合、トラッキングアルゴリズムは優れた性能を発揮します。部分的な遮蔽を処理でき、検出が不十分な場合でも堅牢なパフォーマンスを提供します。
3. **アイデンティティの持続性:**
   オブジェクト検出は検出されたオブジェクトの矩形を提供しますが、アイデンティティの持続性はありません。トラッキングはフレーム間で一貫したオブジェクトのアイデンティティを維持する点で優れており、多くの実世界のアプリケーションで重要です。

## トラッキング分野のアルゴリズムとは？

以下は、主なオブジェクトトラッキングアルゴリズムとその長所と短所です。

**BOOSTING**
- 長所: シンプルでリアルタイム。安定した動きに対して良好に動作。
- 短所: 複雑な動きのパターンや遮蔽に弱い。
- 速度: 高速。
- 精度: 中程度。

**MIL (Multiple Instance Learning)**
- 長所: 遮蔽やオブジェクトの外観変化に対して効果的。
- 短所: ノイズや背景の乱雑さに敏感な場合がある。
- 速度: 中程度。
- 精度: 良好。

**KCF (Kernelized Correlation Filter)**
- 長所: 高速性能。スケール変化に対して堅牢。
- 短所: 視界外のシナリオに敏感。
- 速度: 高速。
- 精度: 中程度から高い。

**TLD (Tracking, Learning, and Detection)**
- 長所: 自己更新可能で、失われたオブジェクトを再検出可能。
- 短所: ドリフトしやすく、高速な動きに問題がある場合がある。
- 速度: 中程度。
- 精度: 中程度。

**MEDIANFLOW**
- 長所: 急激な動きの変化や遮蔽に対して堅牢。
- 短所: オブジェクトの外観が大きく変化する場合に苦労する可能性がある。
- 速度: 高速。
- 精度: 中程度。

**MOSSE (Minimum Output Sum of Squared Error)**
- 長所: 非常に高速でリアルタイムアプリケーションに適している。
- 短所: 困難な条件下での堅牢性が限定的。
- 速度: 非常に高速。
- 精度: 中程度。

**CSRT (Channel and Spatial Reliability Tracker)**
- 長所: 高精度で困難なシナリオに対して堅牢。
- 短所: 計算コストが高い。
- 速度: 中程度。
- 精度: 高い。

## コードを実行してみましょう。

正しいフォルダにいることを確認してください。もしそうでない場合は、以下を実行してください。

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
 ```

または、Thonny IDE を使用して Python スクリプトを実行することもできます。

 ```sh
python Tracking.py
 ```

上記の Python スクリプトは顔をトラッキングするように設計されています。以下のコードスニペットは、トラッキングが失敗した場合にシステムが新しい検出プロセスを開始するシナリオを処理します。その逆も同様です。

 ```sh
python DetectandTrack.py
 ```

## 技術サポート

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>